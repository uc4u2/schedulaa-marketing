import featuresEn from './landing-features.json';
import featuresFa from './landing-features.fa.json';
import homeFa from './landing-home.fa.json';

import { AppLocale } from '@/utils/locale';

export type LandingSourcePage = 'home' | 'features';
export type LandingContentLocale = 'en' | 'fa';

export const toLandingContentLocale = (locale: AppLocale | string | null | undefined): LandingContentLocale =>
  locale === 'fa' ? 'fa' : 'en';

export const getLandingSource = (
  locale: AppLocale | string | null | undefined,
  page: LandingSourcePage = 'features',
) => {
  if (toLandingContentLocale(locale) !== 'fa') return featuresEn;
  if (page === 'home') {
    const hasCompatibleHero = Boolean((homeFa as any)?.hero?.title?.line1);
    return hasCompatibleHero ? homeFa : featuresFa;
  }
  return featuresFa;
};
