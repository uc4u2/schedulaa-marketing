import { compareList } from '@/legacy-content/compare/config';
import blogPosts from '@/legacy-content/blog/posts';

export const LOCALES = ['en', 'fa'] as const;
export type Locale = (typeof LOCALES)[number];

export const toLocalePath = (locale: Locale, path: string) => {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${clean === '/' ? '' : clean}`;
};

export const STATIC_ROUTES = [
  '/',
  '/features',
  '/platform',
  '/about',
  '/workforce',
  '/booking',
  '/marketing',
  '/marketing/email-campaigns',
  '/marketing/analytics-dashboard',
  '/marketing/clients-360',
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
  '/help/domains',
  '/contact',
  '/pricing',
  '/compare',
  '/alternatives',
  '/zapier',
  '/payslips',
  '/resources/staffing-formulas',
  '/resources/schedulaa-vs-quickbooks-payroll',
  '/resources/schedulaa-vs-quickbooks-payroll.doc',
  '/webinars/payroll-compliance',
] as const;

export const INDUSTRY_BOOKING_ROUTES = [
  '/booking/salon',
  '/booking/spa',
  '/booking/tutor',
  '/booking/doctor',
] as const;

export const LEGAL_ROUTES = [
  '/privacy',
  '/terms',
  '/cookie',
  '/acceptable-use',
  '/data-processing',
  '/security',
  '/user-agreement',
] as const;

export const LEGAL_ALIASES = {
  '/legal/support-access-consent': '/terms',
} as const;

export const RESERVED_NON_INDEXABLE = [
  '/manager',
  '/employee',
  '/app',
  '/admin',
  '/recruiter',
  '/client',
  '/sales',
  '/dashboard',
] as const;

export const COMPARE_VENDOR_ROUTES = compareList.map((item) => {
  const vendor = item.key.startsWith('schedulaa-vs-') ? item.key : item.slug;
  return `/compare/${vendor}`;
});

export const ALTERNATIVES_VENDOR_ROUTES = compareList.map((item) => `/alternatives/${item.slug}`);

const slugify = (value: string) =>
  String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const BLOG_POST_ROUTES = [
  ...blogPosts.map((post) => `/blog/${post.slug}`),
  ...new Set(
    blogPosts
      .map((post) => slugify(post.category || ''))
      .filter(Boolean)
      .map((categorySlug) => `/blog/category/${categorySlug}`)
  ),
];

export const INDEXABLE_REGISTRY_ROUTES = [
  ...STATIC_ROUTES,
  ...INDUSTRY_BOOKING_ROUTES,
  ...LEGAL_ROUTES,
  ...COMPARE_VENDOR_ROUTES,
  ...ALTERNATIVES_VENDOR_ROUTES,
  ...BLOG_POST_ROUTES,
];
