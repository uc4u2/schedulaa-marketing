import { websiteBuilderPage } from './config';
import { websiteBuilderPage as websiteBuilderPageFa } from './config.fa';
import { websiteBuilderPage as websiteBuilderPageRu } from './config.ru';
import { websiteBuilderPage as websiteBuilderPageZh } from './config.zh';
import { websiteBuilderPage as websiteBuilderPageEs } from './config.es';
import { websiteBuilderPage as websiteBuilderPageFr } from './config.fr';
import { websiteBuilderPage as websiteBuilderPageDe } from './config.de';
import { websiteBuilderPage as websiteBuilderPageAr } from './config.ar';
import { websiteBuilderPage as websiteBuilderPagePt } from './config.pt';
import { AppLocale } from '@/utils/locale';

export const getWebsiteBuilderSource = (locale: AppLocale | string | null | undefined) => {
  if (locale === 'fa') return websiteBuilderPageFa;
  if (locale === 'ru') return websiteBuilderPageRu;
  if (locale === 'zh') return websiteBuilderPageZh;
  if (locale === 'es') return websiteBuilderPageEs;
  if (locale === 'fr') return websiteBuilderPageFr;
  if (locale === 'de') return websiteBuilderPageDe;
  if (locale === 'ar') return websiteBuilderPageAr;
  if (locale === 'pt') return websiteBuilderPagePt;
  return websiteBuilderPage;
};
