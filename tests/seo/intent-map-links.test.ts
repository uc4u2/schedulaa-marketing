import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import sitemap from '../../src/app/sitemap';
import { websiteBuilderPage } from '../../src/legacy-content/website-builder/config.js';
import { SEARCH_INTENT_MAP } from '../../src/lib/seo/searchIntentMap';

const readSource = (path: string) => readFileSync(new URL(`../../${path}`, import.meta.url), 'utf8');

test('the English workflow intent map uses bounded, indexable destinations', () => {
  const keys = SEARCH_INTENT_MAP.map((entry) => entry.key);
  assert.equal(new Set(keys).size, keys.length);

  const sitemapUrls = new Set(sitemap().map((entry) => entry.url));
  for (const entry of SEARCH_INTENT_MAP) {
    assert.ok(entry.label.length > 5);
    assert.ok(entry.intent.length > 30);
    assert.ok(sitemapUrls.has(`https://www.schedulaa.com/en${entry.path}`), `intent target missing from sitemap: ${entry.path}`);
  }
  assert.ok(sitemapUrls.has('https://www.schedulaa.com/en/industries/hvac'));
});

test('features and blog hubs expose contextual navigation without stale integration wording', () => {
  const featuresLayout = readSource('src/components/forex-skin/features/FeaturesForexLayout.tsx');
  const featuresPage = readSource('src/app/features/page.tsx');
  const featureContent = readSource('src/legacy-content/features/landing-features.json');
  const blogPage = readSource('src/app/blog/page.tsx');

  assert.match(featuresLayout, /SEARCH_INTENT_MAP\.map/);
  assert.match(featuresPage, /features-search-intent-item-list-jsonld/);
  assert.match(blogPage, /Browse guides by topic/);
  assert.doesNotMatch(featureContent, /Zapier integration to connect Schedulaa with QuickBooks, Xero/i);
  assert.doesNotMatch(featureContent, /Zapier are coming soon|SOC2 in progress/i);
});

test('HVAC has reciprocal workflow links and website-builder metadata avoids a free custom-domain implication', () => {
  const hvac = readSource('src/components/hvac/HvacLandingPage.tsx');
  for (const path of ['/booking', '/workforce', '/business-finance/invoices']) {
    assert.match(hvac, new RegExp(path.replaceAll('/', '\\/')));
  }
  assert.equal(websiteBuilderPage.meta.title, 'Website Builder, Booking & Custom Domains | Schedulaa');
  assert.doesNotMatch(websiteBuilderPage.meta.title, /Free Domain/i);
});
