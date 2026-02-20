import { DEFAULT_LOCALE, SUPPORTED_LOCALES, isSupportedLocale } from '@/utils/locale';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = isSupportedLocale(requested) ? requested : DEFAULT_LOCALE;
  let messages;
  if (locale === 'fa') {
    messages = (await import('./messages/fa.json')).default;
  } else if (locale === 'ru') {
    messages = (await import('./messages/ru.json')).default;
  } else if (locale === 'zh') {
    messages = (await import('./messages/zh.json')).default;
  } else {
    messages = (await import('./messages/en.json')).default;
  }

  return {
    locale: SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE,
    messages,
    timeZone: 'UTC',
  };
});
