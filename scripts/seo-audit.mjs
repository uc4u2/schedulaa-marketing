import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const LEGACY_ROOT = path.resolve(ROOT, '../frontend');

const require = createRequire(import.meta.url);
const legacySeoRoutesPath = path.join(LEGACY_ROOT, 'config/seoRoutes.js');
const legacySeoConfig = require(legacySeoRoutesPath);
const legacyCompareFooterPath = path.join(LEGACY_ROOT, 'src/components/Footer.js');
const legacySitemapPath = path.join(LEGACY_ROOT, 'public/sitemap.xml');
const nextAppDir = path.join(ROOT, 'src/app');
const middlewarePath = path.join(ROOT, 'middleware.ts');
const compareSourcePath = path.join(ROOT, 'src/legacy-content/compare/landing-compare.json');
const blogPostsPath = path.join(ROOT, 'src/legacy-content/blog/posts.js');
const reportPath = path.join(ROOT, 'docs/LEGACY_ROUTE_PARITY_REPORT.md');
const actionListPath = path.join(ROOT, 'docs/SEO_ACTION_LIST.md');

const normalizePath = (input) => {
  if (!input) return '/';
  const stripped = String(input).replace(/^https?:\/\/[^/]+/i, '') || '/';
  const clean = stripped.startsWith('/') ? stripped : `/${stripped}`;
  if (clean !== '/' && clean.endsWith('/')) return clean.slice(0, -1);
  return clean;
};

const exists = (filePath) => fs.existsSync(filePath);

if (!exists(legacySeoRoutesPath)) {
  throw new Error('Legacy seoRoutes.js not found. Expected: frontend/config/seoRoutes.js');
}

const parseLegacySitemapPaths = () => {
  const xml = fs.readFileSync(legacySitemapPath, 'utf8');
  const locMatches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => normalizePath(m[1]));
  return new Set(locMatches);
};

const parseLegacyFooterCompareLinks = () => {
  const content = fs.readFileSync(legacyCompareFooterPath, 'utf8');
  const compareSection = content.match(/title:\s*"Compare"[\s\S]*?links:\s*\[([\s\S]*?)\]/);
  if (!compareSection) return new Set();
  const links = [...compareSection[1].matchAll(/to:\s*"([^"]+)"/g)].map((m) => normalizePath(m[1]));
  return new Set(links);
};

const enumerateNextPageRoutes = () => {
  const routes = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.isFile() && entry.name === 'page.tsx') {
        const rel = path.relative(nextAppDir, full).replace(/\\/g, '/');
        const route = rel.replace(/\/page\.tsx$/, '');
        if (!route || route === 'page.tsx') {
          routes.push('/');
          continue;
        }
        const parts = route.split('/').filter(Boolean);
        const cleanParts = parts.filter((p) => p !== '[locale]');
        routes.push(`/${cleanParts.join('/')}`);
      }
    }
  };
  walk(nextAppDir);
  return new Set(routes.map(normalizePath));
};

const parseMiddlewareRedirects = () => {
  const content = fs.readFileSync(middlewarePath, 'utf8');
  const block = content.match(/const LEGACY_REDIRECTS:[^=]*=\s*{([\s\S]*?)};/);
  if (!block) return new Map();
  const redirects = new Map();
  for (const m of block[1].matchAll(/'([^']+)':\s*'([^']+)'/g)) {
    redirects.set(normalizePath(m[1]), normalizePath(m[2]));
  }
  return redirects;
};

const compareSource = JSON.parse(fs.readFileSync(compareSourcePath, 'utf8'));
const compareList = Object.entries(compareSource || {}).map(([key, value]) => {
  const slug = key.startsWith('schedulaa-vs-') ? key.replace('schedulaa-vs-', '') : key;
  return { key, slug, competitor: value?.competitor || slug };
});

const blogContent = fs.readFileSync(blogPostsPath, 'utf8');
const blogPosts = [...blogContent.matchAll(/slug:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"/g)].map((m) => ({
  slug: m[1],
  category: m[2],
}));

const compareVendorRoutes = new Set(
  compareList.map((item) => normalizePath(`/compare/${item.key.startsWith('schedulaa-vs-') ? item.key : item.slug}`))
);
const alternativeVendorRoutes = new Set(
  compareList.map((item) => normalizePath(`/alternatives/${item.slug}`))
);

const slugify = (value) =>
  String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const blogPostRoutes = new Set(blogPosts.map((post) => normalizePath(`/blog/${post.slug}`)));
const blogCategoryRoutes = new Set(
  blogPosts
    .map((post) => slugify(post.category || ''))
    .filter(Boolean)
    .map((slug) => normalizePath(`/blog/category/${slug}`))
);

const registryStaticRoutes = new Set(
  [
    '/',
    '/features',
    '/workforce',
    '/booking',
    '/booking/salon',
    '/booking/spa',
    '/booking/tutor',
    '/booking/doctor',
    '/marketing',
    '/payroll',
    '/payroll/usa',
    '/payroll/canada',
    '/payroll/tools/roe',
    '/payroll/tools/t4',
    '/payroll/tools/w2',
    '/website-builder',
    '/industries',
    '/status',
    '/roadmap',
    '/blog',
    '/demo',
    '/faq',
    '/client/support',
    '/docs',
    '/contact',
    '/pricing',
    '/compare',
    '/alternatives',
    '/zapier',
    '/payslips',
    '/privacy',
    '/terms',
  ].map(normalizePath)
);

const reservedNonIndexable = new Set(
  ['/manager', '/employee', '/app', '/admin', '/recruiter', '/client', '/sales', '/dashboard'].map(normalizePath)
);

const legacySeoRoutes = new Set((legacySeoConfig.routes || []).map((r) => normalizePath(r.path)));
const legacySitemapRoutes = parseLegacySitemapPaths();
const legacyFooterCompareRoutes = parseLegacyFooterCompareLinks();

const implementedRoutes = enumerateNextPageRoutes();
const redirects = parseMiddlewareRedirects();

const hasImplementedRoute = (p) => {
  const route = normalizePath(p);
  if (implementedRoutes.has(route)) return true;
  if (route.startsWith('/compare/') && implementedRoutes.has('/compare/[vendor]')) return true;
  if (route.startsWith('/alternatives/') && implementedRoutes.has('/alternatives/[vendor]')) return true;
  if (route.startsWith('/blog/category/') && implementedRoutes.has('/blog/category/[slug]')) return true;
  if (route.startsWith('/blog/') && implementedRoutes.has('/blog/[slug]')) return true;
  return false;
};

const allLegacy = new Set([...legacySeoRoutes, ...legacySitemapRoutes, ...legacyFooterCompareRoutes].map(normalizePath));
const sortedLegacy = [...allLegacy].sort((a, b) => a.localeCompare(b));

const rows = sortedLegacy.map((route) => {
  const inSeoRoutes = legacySeoRoutes.has(route);
  const inSitemap = legacySitemapRoutes.has(route);
  const inFooter = legacyFooterCompareRoutes.has(route);
  const redirectTarget = redirects.get(route) || null;
  const implemented = hasImplementedRoute(route);
  let status = 'missing';
  if (implemented) status = '200_EXISTS';
  if (redirectTarget) status = 'REDIRECTS';
  const notes =
    status === 'REDIRECTS'
      ? `Redirects to \`${redirectTarget}\``
      : implemented
        ? 'Implemented page (static or dynamic)'
        : 'No page and no redirect detected';
  return { route, inSitemap, inSeoRoutes, inFooter, status, notes };
});

const reportLines = [
  '# Legacy Route Parity Report',
  '',
  '- Legacy sources:',
  '  - `scheduling-frontend/config/seoRoutes.js`',
  '  - `scheduling-frontend/public/sitemap.xml`',
  '  - `scheduling-frontend/src/components/Footer.js` (Compare links)',
  '',
  '| Legacy URL | In legacy sitemap? | In legacy seoRoutes? | In legacy footer? | Next status (200/redirect/missing) | Notes |',
  '| --- | --- | --- | --- | --- | --- |',
  ...rows.map(
    (r) =>
      `| \`${r.route}\` | ${r.inSitemap ? 'Yes' : 'No'} | ${r.inSeoRoutes ? 'Yes' : 'No'} | ${r.inFooter ? 'Yes' : 'No'} | ${r.status} | ${r.notes} |`
  ),
  '',
];

const intendedIndexable = new Set([
  ...legacySitemapRoutes,
  ...registryStaticRoutes,
  ...compareVendorRoutes,
  ...alternativeVendorRoutes,
  ...blogPostRoutes,
  ...blogCategoryRoutes,
]);

const mustBecome200 = [...intendedIndexable]
  .filter((route) => !reservedNonIndexable.has(route))
  .map((route) => {
    const redirectTarget = redirects.get(route);
    const implemented = hasImplementedRoute(route);
    return { route, implemented, redirectTarget };
  })
  .filter((item) => !item.implemented)
  .sort((a, b) => a.route.localeCompare(b.route));

const allowedRedirects = [...redirects.entries()]
  .map(([from, to]) => ({ from, to }))
  .sort((a, b) => a.from.localeCompare(b.from));

const shouldNotIndex = [...reservedNonIndexable].sort((a, b) => a.localeCompare(b));

const actionLines = [
  '# SEO Action List',
  '',
  '## Must become 200 pages (indexable SEO)',
  ...(
    mustBecome200.length
      ? mustBecome200.map((item) =>
          `- \`${item.route}\`${item.redirectTarget ? ` (currently redirected to \`${item.redirectTarget}\`)` : ''}`
        )
      : ['- None']
  ),
  '',
  '## Allowed redirects (aliases/deprecated only)',
  ...(
    allowedRedirects.length
      ? allowedRedirects.map((item) => `- \`${item.from}\` -> \`${item.to}\``)
      : ['- None']
  ),
  '',
  '## Must NOT be indexed (reserved/non-indexable)',
  ...shouldNotIndex.map((route) => `- \`${route}\``),
  '',
];

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, reportLines.join('\n'));
fs.writeFileSync(actionListPath, actionLines.join('\n'));

console.log(`Wrote: ${path.relative(ROOT, reportPath)}`);
console.log(`Wrote: ${path.relative(ROOT, actionListPath)}`);
console.log(`Legacy routes audited: ${rows.length}`);
