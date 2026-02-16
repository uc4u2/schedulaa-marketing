import { INDEXABLE_REGISTRY_ROUTES, LOCALES, toLocalePath } from '@/lib/seo/routeRegistry';
import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.schedulaa.com';
const LAST_MODIFIED = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = new Set<string>();

  for (const locale of LOCALES) {
    for (const route of INDEXABLE_REGISTRY_ROUTES) {
      urls.add(`${SITE_URL}${toLocalePath(locale, route)}`);
    }
  }

  return [...urls].map((url) => ({
    url,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'weekly',
    priority: url.endsWith('/en') || url.endsWith('/fa') ? 1 : 0.7,
  }));
}
