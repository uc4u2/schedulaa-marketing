const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.schedulaa.com';
const MARKETING_ORIGIN = 'https://www.schedulaa.com';

export const getAppOrigin = () => APP_ORIGIN.replace(/\/+$/, '');

export const marketingReturnTo = (locale: string, path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const localePrefix = locale === 'fa' ? '/fa' : '/en';
  return `${MARKETING_ORIGIN}${localePrefix}${normalizedPath === '/' ? '' : normalizedPath}`;
};

export const buildAppUrl = (
  appPath: string,
  options?: {
    returnTo?: string;
    params?: Record<string, string | number | boolean | undefined>;
  },
) => {
  const normalizedPath = appPath.startsWith('/') ? appPath : `/${appPath}`;
  const url = new URL(normalizedPath, getAppOrigin());
  if (options?.returnTo) url.searchParams.set('returnTo', options.returnTo);
  if (options?.params) {
    for (const [key, value] of Object.entries(options.params)) {
      if (value !== undefined) url.searchParams.set(key, String(value));
    }
  }
  return url.toString();
};

export const buildBillingUrl = (options?: { returnTo?: string }) =>
  buildAppUrl('/manager/settings', {
    returnTo: options?.returnTo,
    params: { tab: 'billing' },
  });
