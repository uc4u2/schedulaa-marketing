import assert from 'node:assert/strict';
import test from 'node:test';

import nextConfig from '../../next.config';

test('locale-prefixed sitemap aliases permanently redirect to the canonical sitemap', async () => {
  const redirects = await nextConfig.redirects?.();

  for (const locale of ['en', 'de', 'es', 'fr', 'pt', 'ru', 'zh', 'fa', 'ar']) {
    const redirect = redirects?.find((entry) => entry.source === `/${locale}/sitemap.xml`);

    assert.deepEqual(redirect, {
      source: `/${locale}/sitemap.xml`,
      destination: '/sitemap.xml',
      permanent: true,
    });
  }
});
