import { bookingPages } from './config';
import { bookingPages as bookingPagesFa } from './config.fa';
import { bookingPages as bookingPagesRu } from './config.ru';
import { bookingPages as bookingPagesZh } from './config.zh';
import { bookingPages as bookingPagesEs } from './config.es';
import { bookingPages as bookingPagesFr } from './config.fr';
import { bookingPages as bookingPagesDe } from './config.de';
import { bookingPages as bookingPagesAr } from './config.ar';
import { bookingPages as bookingPagesPt } from './config.pt';
import { AppLocale } from '@/utils/locale';

export const getBookingSource = (locale: AppLocale | string | null | undefined) => {
  if (locale === 'fa') return bookingPagesFa;
  if (locale === 'ru') return bookingPagesRu;
  if (locale === 'zh') return bookingPagesZh;
  if (locale === 'es') return bookingPagesEs;
  if (locale === 'fr') return bookingPagesFr;
  if (locale === 'de') return bookingPagesDe;
  if (locale === 'ar') return bookingPagesAr;
  if (locale === 'pt') return bookingPagesPt;
  return bookingPages;
};
