import assert from 'node:assert/strict';
import test from 'node:test';

import { NextRequest } from 'next/server';

import { middleware } from '../../middleware';

test('locale-prefixed sitemap aliases permanently redirect to the canonical sitemap', () => {
  for (const locale of ['en', 'de', 'es', 'fr', 'pt', 'ru', 'zh', 'fa', 'ar']) {
    const response = middleware(new NextRequest(`https://www.schedulaa.com/${locale}/sitemap.xml`));

    assert.equal(response.status, 308);
    assert.equal(response.headers.get('location'), 'https://www.schedulaa.com/sitemap.xml');
  }
});

test('the canonical sitemap remains a public sitemap request', () => {
  const response = middleware(new NextRequest('https://www.schedulaa.com/sitemap.xml'));

  assert.equal(response.headers.get('location'), null);
});
