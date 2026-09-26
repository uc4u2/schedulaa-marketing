import assert from 'node:assert/strict';
import test from 'node:test';

import sitemap from '../../src/app/sitemap';
import {
  buildLocalizedPageMetadata,
  getLocalizedCanonicalUrl,
} from '../../src/lib/seo/pageMetadata';

test('canonical URLs use the same explicit locale strategy as the sitemap', () => {
  assert.equal(
    getLocalizedCanonicalUrl('en', '/booking/spa'),
    'https://www.schedulaa.com/en/booking/spa',
  );
  assert.equal(
    getLocalizedCanonicalUrl('fr', '/marketing'),
    'https://www.schedulaa.com/fr/marketing',
  );
});

test('localized metadata keeps canonical, hreflang, and Open Graph URL aligned', () => {
  const metadata = buildLocalizedPageMetadata({
    locale: 'ru',
    path: '/marketing',
    title: 'Marketing',
    description: 'Localized marketing page.',
  });

  assert.equal(metadata.alternates?.canonical, 'https://www.schedulaa.com/ru/marketing');
  assert.equal(metadata.alternates?.languages?.ru, 'https://www.schedulaa.com/ru/marketing');
  assert.equal(metadata.openGraph?.url, 'https://www.schedulaa.com/ru/marketing');
});

test('sitemap contains only explicit locale URLs and excludes the legacy .doc alias', () => {
  const urls = sitemap().map((entry) => entry.url);
  assert.ok(urls.every((url) => /^https:\/\/www\.schedulaa\.com\/(en|fa|ru|zh|es|fr|de|ar|pt)(?:\/|$)/.test(url)));
  assert.equal(urls.some((url) => url.endsWith('.doc')), false);
});
