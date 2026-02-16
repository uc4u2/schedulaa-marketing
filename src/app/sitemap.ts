import { compareList } from '@/legacy-content/compare/config';
import blogPosts from '@/legacy-content/blog/posts';
import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.schedulaa.com';
const LOCALES = ['en', 'fa'] as const;
const LAST_MODIFIED = new Date();

const STATIC_ROUTES = [
  '/',
  '/features',
  '/pricing',
  '/blog',
  '/demo',
  '/contact',
  '/faq',
  '/client/support',
  '/docs',
  '/workforce',
  '/booking',
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
  '/payslips',
  '/compare',
  '/alternatives',
  '/zapier',
  '/privacy',
  '/terms',
];

const localeUrl = (locale: (typeof LOCALES)[number], path: string) => {
  const cleanPath = path === '/' ? '' : path;
  return `${SITE_URL}/${locale}${cleanPath}`;
};

const toCategorySlug = (category: string) =>
  String(category || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = new Set<string>();

  for (const locale of LOCALES) {
    for (const path of STATIC_ROUTES) {
      urls.add(localeUrl(locale, path));
    }

    for (const item of compareList) {
      const compareVendorPath = item.key.startsWith('schedulaa-vs-') ? item.key : item.slug;
      urls.add(localeUrl(locale, `/compare/${compareVendorPath}`));
      urls.add(localeUrl(locale, `/alternatives/${item.slug}`));
    }

    for (const post of blogPosts) {
      if (post?.slug) {
        urls.add(localeUrl(locale, `/blog/${post.slug}`));
      }
      const categorySlug = toCategorySlug(post?.category || '');
      if (categorySlug) {
        urls.add(localeUrl(locale, `/blog/category/${categorySlug}`));
      }
    }
  }

  return [...urls].map((url) => ({
    url,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'weekly',
    priority: url.endsWith('/en') || url.endsWith('/fa') ? 1 : 0.7,
  }));
}
