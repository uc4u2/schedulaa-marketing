import { marketingPages } from './config';
import { marketingPages as marketingPagesFa } from './config.fa';
import { marketingPages as marketingPagesRu } from './config.ru';
import { marketingPages as marketingPagesZh } from './config.zh';
import { AppLocale } from '@/utils/locale';

export const getMarketingSource = (locale: AppLocale | string | null | undefined) => {
  if (locale === 'fa') return marketingPagesFa;
  if (locale === 'ru') return marketingPagesRu;
  if (locale === 'zh') return marketingPagesZh;
  return marketingPages;
};
