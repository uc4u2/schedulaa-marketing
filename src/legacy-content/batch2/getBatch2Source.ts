import {
  contactPage,
  demoPage,
  industriesPage,
  roadmapPage,
  statusPage,
  supportPage,
  workforcePage,
  zapierPage,
} from './config';
import {
  contactPage as contactPageFa,
  demoPage as demoPageFa,
  industriesPage as industriesPageFa,
  roadmapPage as roadmapPageFa,
  statusPage as statusPageFa,
  supportPage as supportPageFa,
  workforcePage as workforcePageFa,
  zapierPage as zapierPageFa,
} from './config.fa';
import {
  contactPage as contactPageRu,
  demoPage as demoPageRu,
  industriesPage as industriesPageRu,
  roadmapPage as roadmapPageRu,
  statusPage as statusPageRu,
  supportPage as supportPageRu,
  workforcePage as workforcePageRu,
  zapierPage as zapierPageRu,
} from './config.ru';
import {
  contactPage as contactPageZh,
  demoPage as demoPageZh,
  industriesPage as industriesPageZh,
  roadmapPage as roadmapPageZh,
  statusPage as statusPageZh,
  supportPage as supportPageZh,
  workforcePage as workforcePageZh,
  zapierPage as zapierPageZh,
} from './config.zh';
import { AppLocale } from '@/utils/locale';

const enPages = {
  workforcePage,
  industriesPage,
  statusPage,
  roadmapPage,
  demoPage,
  contactPage,
  supportPage,
  zapierPage,
};

const faPages = {
  workforcePage: workforcePageFa,
  industriesPage: industriesPageFa,
  statusPage: statusPageFa,
  roadmapPage: roadmapPageFa,
  demoPage: demoPageFa,
  contactPage: contactPageFa,
  supportPage: supportPageFa,
  zapierPage: zapierPageFa,
};

const ruPages = {
  workforcePage: workforcePageRu,
  industriesPage: industriesPageRu,
  statusPage: statusPageRu,
  roadmapPage: roadmapPageRu,
  demoPage: demoPageRu,
  contactPage: contactPageRu,
  supportPage: supportPageRu,
  zapierPage: zapierPageRu,
};

const zhPages = {
  workforcePage: workforcePageZh,
  industriesPage: industriesPageZh,
  statusPage: statusPageZh,
  roadmapPage: roadmapPageZh,
  demoPage: demoPageZh,
  contactPage: contactPageZh,
  supportPage: supportPageZh,
  zapierPage: zapierPageZh,
};

export const getBatch2Source = (locale: AppLocale | string | null | undefined) => {
  if (locale === 'fa') return faPages;
  if (locale === 'ru') return ruPages;
  if (locale === 'zh') return zhPages;
  return enPages;
};
