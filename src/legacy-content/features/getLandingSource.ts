import featuresEn from './landing-features.json';
import featuresFa from './landing-features.fa.json';
import featuresRu from './landing-features.ru.json';
import featuresZh from './landing-features.zh.json';
import featuresEs from './landing-features.es.json';
import featuresFr from './landing-features.fr.json';
import featuresDe from './landing-features.de.json';
import featuresAr from './landing-features.ar.json';
import featuresPt from './landing-features.pt.json';
import homeFa from './landing-home.fa.json';

import { AppLocale } from '@/utils/locale';

export type LandingSourcePage = 'home' | 'features';
export type LandingContentLocale = 'en' | 'fa' | 'ru' | 'zh' | 'es' | 'fr' | 'de' | 'ar' | 'pt';

export const toLandingContentLocale = (locale: AppLocale | string | null | undefined): LandingContentLocale =>
  locale === 'fa' ||
  locale === 'ru' ||
  locale === 'zh' ||
  locale === 'es' ||
  locale === 'fr' ||
  locale === 'de' ||
  locale === 'ar' ||
  locale === 'pt'
    ? locale
    : 'en';

export const getLandingSource = (
  locale: AppLocale | string | null | undefined,
  page: LandingSourcePage = 'features',
) => {
  const contentLocale = toLandingContentLocale(locale);
  if (contentLocale === 'en') return featuresEn;
  if (contentLocale === 'ru') return featuresRu;
  if (contentLocale === 'zh') return featuresZh;
  if (contentLocale === 'es') return featuresEs;
  if (contentLocale === 'fr') return featuresFr;
  if (contentLocale === 'de') return featuresDe;
  if (contentLocale === 'ar') return featuresAr;
  if (contentLocale === 'pt') return featuresPt;

  if (page === 'home' && contentLocale === 'fa') {
    const hasCompatibleHero = Boolean((homeFa as any)?.hero?.title?.line1);
    return hasCompatibleHero ? homeFa : featuresFa;
  }

  return featuresFa;
};
