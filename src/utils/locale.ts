export const SUPPORTED_LOCALES = ['en', 'fa'] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: AppLocale = 'en';

export const isSupportedLocale = (value: string | undefined | null): value is AppLocale =>
  Boolean(value && SUPPORTED_LOCALES.includes(value as AppLocale));

export const detectLocaleFromPath = (pathname: string | undefined | null): AppLocale => {
  if (!pathname) return DEFAULT_LOCALE;
  const seg = pathname.split('/').filter(Boolean)[0];
  return isSupportedLocale(seg) ? seg : DEFAULT_LOCALE;
};

export const stripLocalePrefix = (pathname: string, locale: AppLocale): string => {
  if (!pathname.startsWith(`/${locale}`)) return pathname;
  const stripped = pathname.slice(locale.length + 1);
  return stripped.startsWith('/') ? stripped : stripped ? `/${stripped}` : '/';
};

export const withLocalePath = (pathname: string, locale: AppLocale): string => {
  const clean = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (clean === '/') return `/${locale}`;
  const first = clean.split('/').filter(Boolean)[0];
  if (isSupportedLocale(first)) {
    const rest = clean.split('/').slice(2).join('/');
    return rest ? `/${locale}/${rest}` : `/${locale}`;
  }
  return `/${locale}${clean}`;
};
