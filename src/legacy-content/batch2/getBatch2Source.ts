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
import {
  contactPage as contactPageEs,
  demoPage as demoPageEs,
  industriesPage as industriesPageEs,
  roadmapPage as roadmapPageEs,
  statusPage as statusPageEs,
  supportPage as supportPageEs,
  workforcePage as workforcePageEs,
  zapierPage as zapierPageEs,
} from './config.es';
import {
  contactPage as contactPageFr,
  demoPage as demoPageFr,
  industriesPage as industriesPageFr,
  roadmapPage as roadmapPageFr,
  statusPage as statusPageFr,
  supportPage as supportPageFr,
  workforcePage as workforcePageFr,
  zapierPage as zapierPageFr,
} from './config.fr';
import {
  contactPage as contactPageDe,
  demoPage as demoPageDe,
  industriesPage as industriesPageDe,
  roadmapPage as roadmapPageDe,
  statusPage as statusPageDe,
  supportPage as supportPageDe,
  workforcePage as workforcePageDe,
  zapierPage as zapierPageDe,
} from './config.de';
import {
  contactPage as contactPageAr,
  demoPage as demoPageAr,
  industriesPage as industriesPageAr,
  roadmapPage as roadmapPageAr,
  statusPage as statusPageAr,
  supportPage as supportPageAr,
  workforcePage as workforcePageAr,
  zapierPage as zapierPageAr,
} from './config.ar';
import {
  contactPage as contactPagePt,
  demoPage as demoPagePt,
  industriesPage as industriesPagePt,
  roadmapPage as roadmapPagePt,
  statusPage as statusPagePt,
  supportPage as supportPagePt,
  workforcePage as workforcePagePt,
  zapierPage as zapierPagePt,
} from './config.pt';
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

const esPages = {
  workforcePage: workforcePageEs,
  industriesPage: industriesPageEs,
  statusPage: statusPageEs,
  roadmapPage: roadmapPageEs,
  demoPage: demoPageEs,
  contactPage: contactPageEs,
  supportPage: supportPageEs,
  zapierPage: zapierPageEs,
};

const frPages = {
  workforcePage: workforcePageFr,
  industriesPage: industriesPageFr,
  statusPage: statusPageFr,
  roadmapPage: roadmapPageFr,
  demoPage: demoPageFr,
  contactPage: contactPageFr,
  supportPage: supportPageFr,
  zapierPage: zapierPageFr,
};

const dePages = {
  workforcePage: workforcePageDe,
  industriesPage: industriesPageDe,
  statusPage: statusPageDe,
  roadmapPage: roadmapPageDe,
  demoPage: demoPageDe,
  contactPage: contactPageDe,
  supportPage: supportPageDe,
  zapierPage: zapierPageDe,
};

const arPages = {
  workforcePage: workforcePageAr,
  industriesPage: industriesPageAr,
  statusPage: statusPageAr,
  roadmapPage: roadmapPageAr,
  demoPage: demoPageAr,
  contactPage: contactPageAr,
  supportPage: supportPageAr,
  zapierPage: zapierPageAr,
};

const ptPages = {
  workforcePage: workforcePagePt,
  industriesPage: industriesPagePt,
  statusPage: statusPagePt,
  roadmapPage: roadmapPagePt,
  demoPage: demoPagePt,
  contactPage: contactPagePt,
  supportPage: supportPagePt,
  zapierPage: zapierPagePt,
};

export const getBatch2Source = (locale: AppLocale | string | null | undefined) => {
  if (locale === 'fa') return faPages;
  if (locale === 'ru') return ruPages;
  if (locale === 'zh') return zhPages;
  if (locale === 'es') return esPages;
  if (locale === 'fr') return frPages;
  if (locale === 'de') return dePages;
  if (locale === 'ar') return arPages;
  if (locale === 'pt') return ptPages;
  return enPages;
};
