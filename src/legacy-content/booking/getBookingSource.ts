import { bookingPages } from './config';
import { bookingPages as bookingPagesFa } from './config.fa';
import { bookingPages as bookingPagesRu } from './config.ru';
import { bookingPages as bookingPagesZh } from './config.zh';
import { AppLocale } from '@/utils/locale';

export const getBookingSource = (locale: AppLocale | string | null | undefined) => {
  if (locale === 'fa') return bookingPagesFa;
  if (locale === 'ru') return bookingPagesRu;
  if (locale === 'zh') return bookingPagesZh;
  return bookingPages;
};
