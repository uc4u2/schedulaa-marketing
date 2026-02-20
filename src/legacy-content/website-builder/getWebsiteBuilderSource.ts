import { websiteBuilderPage } from './config';
import { websiteBuilderPage as websiteBuilderPageFa } from './config.fa';
import { websiteBuilderPage as websiteBuilderPageRu } from './config.ru';
import { websiteBuilderPage as websiteBuilderPageZh } from './config.zh';
import { AppLocale } from '@/utils/locale';

export const getWebsiteBuilderSource = (locale: AppLocale | string | null | undefined) => {
  if (locale === 'fa') return websiteBuilderPageFa;
  if (locale === 'ru') return websiteBuilderPageRu;
  if (locale === 'zh') return websiteBuilderPageZh;
  return websiteBuilderPage;
};
