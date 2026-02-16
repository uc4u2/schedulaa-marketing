import { DEFAULT_LOCALE, SUPPORTED_LOCALES, isSupportedLocale } from '@/utils/locale';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = isSupportedLocale(requested) ? requested : DEFAULT_LOCALE;
  const messages = locale === 'fa' ? (await import('./messages/fa.json')).default : (await import('./messages/en.json')).default;

  return {
    locale: SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE,
    messages,
    timeZone: 'UTC',
  };
});
