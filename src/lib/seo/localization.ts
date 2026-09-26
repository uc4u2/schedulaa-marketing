import type { AppLocale } from '@/utils/locale';

export const SEO_LOCALES: AppLocale[] = ['en', 'fa', 'ru', 'zh', 'es', 'fr', 'de', 'ar', 'pt'];

const CORE_TRANSLATED_LOCALES: AppLocale[] = ['en', 'fa', 'ru', 'zh'];

// A route/locale pair belongs here only when its primary visible content,
// title, and H1 have been reviewed as substantive localized copy. Placeholder
// strings and translated navigation alone do not qualify for indexing or
// hreflang. English remains the safe fallback for every other pair.
const INDEXABLE_LOCALES_BY_ROUTE = new Map<string, AppLocale[]>([
  ['/workforce', CORE_TRANSLATED_LOCALES],
  ['/marketing', CORE_TRANSLATED_LOCALES],
  ['/payroll', CORE_TRANSLATED_LOCALES],
  ['/website-builder', CORE_TRANSLATED_LOCALES],
  ['/industries', CORE_TRANSLATED_LOCALES],
  ['/pricing', CORE_TRANSLATED_LOCALES],
  ['/zapier', CORE_TRANSLATED_LOCALES],
  ['/business-finance', SEO_LOCALES],
  ['/mobile-app', SEO_LOCALES],
  ['/demo', SEO_LOCALES],
  ['/docs', SEO_LOCALES],
  ['/contact', SEO_LOCALES],
]);

export const normalizeSeoRoute = (path: string) => {
  if (!path || path === '/') {
    return '/';
  }
  const withoutQuery = path.split(/[?#]/, 1)[0] || '/';
  return withoutQuery.length > 1 ? withoutQuery.replace(/\/+$/, '') : withoutQuery;
};

export const getTranslatedLocales = (path: string): AppLocale[] =>
  [...(INDEXABLE_LOCALES_BY_ROUTE.get(normalizeSeoRoute(path)) || ['en'])];

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
