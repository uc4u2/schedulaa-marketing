import type { AppLocale } from '@/utils/locale';

export const SEO_LOCALES: AppLocale[] = ['en', 'fa', 'ru', 'zh', 'es', 'fr', 'de', 'ar', 'pt'];

// A route belongs here only when its visible page content is supplied by a
// locale-specific source or locale-specific component copy. Routes that merely
// accept a locale prefix while rendering English stay English-only.
const FULLY_LOCALIZED_ROUTES = new Set([
  '/features',
  '/workforce',
  '/marketing',
  '/payroll',
  '/website-builder',
  '/business-finance',
  '/mobile-app',
  '/industries',
  '/status',
  '/roadmap',
  '/demo',
  '/faq',
  '/client/support',
  '/docs',
  '/contact',
  '/pricing',
  '/zapier',
]);

export const normalizeSeoRoute = (path: string) => {
  if (!path || path === '/') {
    return '/';
  }
  const withoutQuery = path.split(/[?#]/, 1)[0] || '/';
  return withoutQuery.length > 1 ? withoutQuery.replace(/\/+$/, '') : withoutQuery;
};

export const getTranslatedLocales = (path: string): AppLocale[] =>
  FULLY_LOCALIZED_ROUTES.has(normalizeSeoRoute(path)) ? [...SEO_LOCALES] : ['en'];

export const hasTranslatedRoute = (path: string, locale: string) =>
  getTranslatedLocales(path).includes(locale as AppLocale);

export const getSeoLanguageAlternates = (siteUrl: string, path: string) => {
  const normalizedPath = normalizeSeoRoute(path);
  const suffix = normalizedPath === '/' ? '' : normalizedPath;
  return Object.fromEntries(
    getTranslatedLocales(normalizedPath).map((locale) => [
      locale,
      `${siteUrl}/${locale}${suffix}`,
    ]),
  );
};
