import { marketingPages } from './config';
import { marketingPages as marketingPagesFa } from './config.fa';
import { marketingPages as marketingPagesRu } from './config.ru';
import { marketingPages as marketingPagesZh } from './config.zh';
import { marketingPages as marketingPagesEs } from './config.es';
import { marketingPages as marketingPagesFr } from './config.fr';
import { marketingPages as marketingPagesDe } from './config.de';
import { marketingPages as marketingPagesAr } from './config.ar';
import { marketingPages as marketingPagesPt } from './config.pt';
import { AppLocale } from '@/utils/locale';

export const getMarketingSource = (locale: AppLocale | string | null | undefined) => {
  if (locale === 'fa') return marketingPagesFa;
  if (locale === 'ru') return marketingPagesRu;
  if (locale === 'zh') return marketingPagesZh;
  if (locale === 'es') return marketingPagesEs;
  if (locale === 'fr') return marketingPagesFr;
  if (locale === 'de') return marketingPagesDe;
  if (locale === 'ar') return marketingPagesAr;
  if (locale === 'pt') return marketingPagesPt;
  return marketingPages;
};
