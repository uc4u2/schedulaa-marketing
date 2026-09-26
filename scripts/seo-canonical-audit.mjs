const BASE_URL = (process.env.SEO_AUDIT_BASE_URL || 'http://127.0.0.1:3001').replace(/\/$/, '');
const CONCURRENCY = 12;

const canonicalFromHtml = (html) =>
  html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1] ||
  html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical/i)?.[1] ||
  '';

const absoluteAuditUrl = (publicUrl) => {
  const publicPath = new URL(publicUrl).pathname;
  return `${BASE_URL}${publicPath}`;
};

async function inspect(publicUrl) {
  const response = await fetch(absoluteAuditUrl(publicUrl), { redirect: 'manual' });
  const html = await response.text();
  const canonical = canonicalFromHtml(html);
  return {
    publicUrl,
    status: response.status,
    canonical,
  };
}

async function main() {
  const sitemapResponse = await fetch(`${BASE_URL}/sitemap.xml`);
  if (!sitemapResponse.ok) {
    throw new Error(`Unable to load sitemap: HTTP ${sitemapResponse.status}`);
  }

  const xml = await sitemapResponse.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const results = [];

  for (let index = 0; index < urls.length; index += CONCURRENCY) {
    results.push(...(await Promise.all(urls.slice(index, index + CONCURRENCY).map(inspect))));
  }

  const violations = results.filter(
    (result) => result.status !== 200 || result.canonical !== result.publicUrl,
  );

  console.log(`Canonical audit: ${results.length} sitemap URLs checked; ${violations.length} violation(s).`);
  for (const violation of violations) {
    console.error(
      `${violation.publicUrl} -> status=${violation.status}, canonical=${violation.canonical || '(missing)'}`,
    );
  }

  if (violations.length) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
