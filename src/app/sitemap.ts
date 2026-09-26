import { INDEXABLE_REGISTRY_ROUTES, toLocalePath } from '@/lib/seo/routeRegistry';
import { getTranslatedLocales } from '@/lib/seo/localization';
import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.schedulaa.com';
export default function sitemap(): MetadataRoute.Sitemap {
  const urls = new Set<string>();

  for (const route of INDEXABLE_REGISTRY_ROUTES) {
    for (const locale of getTranslatedLocales(route)) {
      urls.add(`${SITE_URL}${toLocalePath(locale, route)}`);
    }
  }

  return [...urls].map((url) => ({
    url,
    changeFrequency: 'weekly',
    priority: url.endsWith('/en') ? 1 : 0.7,
  }));
}
