import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import crypto from 'node:crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const LEGACY_ROOT = path.resolve(ROOT, '../frontend');
const require = createRequire(import.meta.url);

const BASE_URL = process.env.SEO_AUDIT_BASE_URL || 'http://127.0.0.1:3001';
const LOCALES = ['en', 'fa'];
const RESERVED_PREFIXES = ['/manager', '/employee', '/app', '/admin', '/recruiter', '/client', '/sales', '/dashboard'];
const RESERVED_EXACT_ROUTES = new Set(['/login', '/register', '/signup', '/blog/category']);
const MIN_WORDS = Number(process.env.SEO_MIN_WORDS || 220);

const legacySeoRoutesPath = path.join(LEGACY_ROOT, 'config/seoRoutes.js');
const compareSourcePath = path.join(ROOT, 'src/legacy-content/compare/landing-compare.json');
const blogPostsPath = path.join(ROOT, 'src/legacy-content/blog/posts.js');
const outputPath = path.join(ROOT, 'docs/SEO_RUNTIME_AUDIT.md');
const appDir = path.join(ROOT, 'src/app');

const normalizePath = (input) => {
  if (!input) return '/';
  const stripped = String(input).replace(/^https?:\/\/[^/]+/i, '') || '/';
  const clean = stripped.startsWith('/') ? stripped : `/${stripped}`;
  const noHash = clean.split('#')[0].split('?')[0] || '/';
  if (noHash !== '/' && noHash.endsWith('/')) return noHash.slice(0, -1);
  return noHash || '/';
};

const deLocalePath = (value) => {
  const route = normalizePath(value);
  for (const locale of LOCALES) {
    if (route === `/${locale}`) return '/';
    if (route.startsWith(`/${locale}/`)) return route.slice(locale.length + 1);
  }
  return route;
};

const routeExists = (candidate, knownRoutes) => {
  const route = normalizePath(candidate);
  if (knownRoutes.has(route)) return true;
  if (route.startsWith('/compare/')) return true;
  if (route.startsWith('/alternatives/')) return true;
  if (route.startsWith('/blog/')) return true;
  return false;
};

const enumerateAppRoutes = () => {
  const routes = new Set();
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      if (entry.isFile() && entry.name === 'page.tsx') {
        const rel = path.relative(appDir, full).replace(/\\/g, '/');
        const route = rel.replace(/\/page\.tsx$/, '');
        if (route === 'page.tsx') {
          routes.add('/');
          continue;
        }
        const parts = route
          .split('/')
          .filter(Boolean)
          .filter((part) => part !== '[locale]' && !part.startsWith('['));
        routes.add(parts.length ? `/${parts.join('/')}` : '/');
      }
    }
  };
  walk(appDir);
  return routes;
};

const textFromHtml = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();

const hashText = (value) => crypto.createHash('sha1').update(value).digest('hex').slice(0, 12);

const extractInternalLinks = (html, baseUrl) => {
  const links = new Set();
  const sameOrigin = new URL(baseUrl).origin;
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) continue;
    if (href.startsWith('http://') || href.startsWith('https://')) {
      if (!href.startsWith(sameOrigin)) continue;
      links.add(normalizePath(href));
      continue;
    }
    if (href.startsWith('/')) links.add(normalizePath(href));
  }
  return [...links];
};

const readRoutes = () => {
  if (!fs.existsSync(legacySeoRoutesPath)) {
    throw new Error(`Missing legacy seoRoutes source: ${legacySeoRoutesPath}`);
  }

  const legacySeoConfig = require(legacySeoRoutesPath);
  const legacyRoutes = new Set((legacySeoConfig.routes || []).map((item) => normalizePath(item.path)));

  const compareSource = JSON.parse(fs.readFileSync(compareSourcePath, 'utf8'));
  const compareRoutes = new Set();
  const alternativeRoutes = new Set();
  for (const key of Object.keys(compareSource || {})) {
    const slug = key.startsWith('schedulaa-vs-') ? key.replace('schedulaa-vs-', '') : key;
    const vendor = key.startsWith('schedulaa-vs-') ? key : slug;
    compareRoutes.add(normalizePath(`/compare/${vendor}`));
    alternativeRoutes.add(normalizePath(`/alternatives/${slug}`));
  }

  const blogContent = fs.readFileSync(blogPostsPath, 'utf8');
  const blogPosts = [...blogContent.matchAll(/slug:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"/g)].map((m) => ({
    slug: m[1],
    category: String(m[2] || '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, ''),
  }));

  const blogRoutes = new Set(blogPosts.map((p) => normalizePath(`/blog/${p.slug}`)));
  const categoryRoutes = new Set(
    [...new Set(blogPosts.map((p) => p.category).filter(Boolean))].map((slug) => normalizePath(`/blog/category/${slug}`))
  );

  const appRoutes = enumerateAppRoutes();

  return new Set([...legacyRoutes, ...compareRoutes, ...alternativeRoutes, ...blogRoutes, ...categoryRoutes, ...appRoutes]);
};

const buildLocaleUrl = (baseUrl, locale, route) => `${baseUrl}/${locale}${route === '/' ? '' : route}`;

async function main() {
  const knownRoutes = readRoutes();
  const allTargets = [];
  for (const route of [...knownRoutes].sort((a, b) => a.localeCompare(b))) {
    if (RESERVED_PREFIXES.some((prefix) => route === prefix || route.startsWith(`${prefix}/`))) continue;
    if (RESERVED_EXACT_ROUTES.has(route)) continue;
    for (const locale of LOCALES) allTargets.push({ locale, route, url: buildLocaleUrl(BASE_URL, locale, route) });
  }

  const results = [];
  for (const target of allTargets) {
    try {
      const response = await fetch(target.url, { redirect: 'follow' });
      const html = await response.text();
      const clean = textFromHtml(html);
      const words = clean ? clean.split(/\s+/).length : 0;
      const fingerprintSource = clean.slice(0, 4000).toLowerCase();
      const fingerprint = hashText(fingerprintSource);
      const links = extractInternalLinks(html, BASE_URL)
        .map((href) => deLocalePath(href))
        .filter((href) => href !== '/login' && href !== '/register' && href !== '/signup');
      results.push({
        ...target,
        status: response.status,
        words,
        thin: words < MIN_WORDS,
        fingerprint,
        links,
      });
    } catch (error) {
      results.push({
        ...target,
        status: 0,
        words: 0,
        thin: true,
        fingerprint: 'fetch-error',
        links: [],
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }

  const non200 = results.filter((r) => r.status !== 200);
  const thinPages = results.filter((r) => r.status === 200 && r.thin);
  const brokenLinkCandidates = new Map();
  for (const item of results.filter((r) => r.status === 200)) {
    for (const href of item.links) {
      if (
        href.startsWith('/_next/') ||
        href.startsWith('/api/') ||
        href.startsWith('/cdn-cgi/') ||
        href === '/favicon.ico' ||
        href === '/sitemap.xml'
      ) {
        continue;
      }
      if (!routeExists(href, knownRoutes)) {
        const key = `${item.locale}:${item.route}`;
        const arr = brokenLinkCandidates.get(key) || [];
        arr.push(href);
        brokenLinkCandidates.set(key, arr);
      }
    }
  }

  const dupMap = new Map();
  for (const row of results.filter((r) => r.status === 200)) {
    const list = dupMap.get(row.fingerprint) || [];
    list.push(row);
    dupMap.set(row.fingerprint, list);
  }
  const duplicateGroups = [...dupMap.values()]
    .filter((group) => group.length > 1)
    .sort((a, b) => b.length - a.length)
    .slice(0, 30);

  const lines = [
    '# SEO Runtime Audit',
    '',
    `- Base URL: \`${BASE_URL}\``,
    `- Routes audited: **${results.length}**`,
    `- Non-200 pages: **${non200.length}**`,
    `- Thin pages (< ${MIN_WORDS} words): **${thinPages.length}**`,
    `- Broken-link candidates: **${brokenLinkCandidates.size} pages**`,
    '',
    '## Non-200 pages',
    ...(
      non200.length
        ? non200.slice(0, 300).map((row) => `- \`${row.url}\` -> ${row.status}${row.error ? ` (${row.error})` : ''}`)
        : ['- None']
    ),
    '',
    '## Thin pages',
    ...(
      thinPages.length
        ? thinPages
            .sort((a, b) => a.words - b.words)
            .slice(0, 300)
            .map((row) => `- \`${row.url}\` -> ${row.words} words`)
        : ['- None']
    ),
    '',
    '## Broken-link candidates',
    ...(
      brokenLinkCandidates.size
        ? [...brokenLinkCandidates.entries()]
            .slice(0, 300)
            .map(([from, links]) => `- \`${from}\` links to: ${[...new Set(links)].map((x) => `\`${x}\``).join(', ')}`)
        : ['- None']
    ),
    '',
    '## Duplicate-content fingerprints (top groups)',
    ...(
      duplicateGroups.length
        ? duplicateGroups.map((group) => `- fingerprint \`${group[0].fingerprint}\` (${group.length} pages): ${group.map((p) => `\`${p.locale}${p.route}\``).join(', ')}`)
        : ['- None']
    ),
    '',
  ];

  fs.writeFileSync(outputPath, lines.join('\n'));
  console.log(`Wrote: ${path.relative(ROOT, outputPath)}`);
  console.log(`Audited ${results.length} localized URLs.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
