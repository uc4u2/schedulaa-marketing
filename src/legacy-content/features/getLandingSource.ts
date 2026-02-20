import featuresEn from './landing-features.json';
import featuresFa from './landing-features.fa.json';
import featuresRu from './landing-features.ru.json';
import featuresZh from './landing-features.zh.json';
import homeFa from './landing-home.fa.json';

import { AppLocale } from '@/utils/locale';

export type LandingSourcePage = 'home' | 'features';
export type LandingContentLocale = 'en' | 'fa' | 'ru' | 'zh';

export const toLandingContentLocale = (locale: AppLocale | string | null | undefined): LandingContentLocale =>
  locale === 'fa' || locale === 'ru' || locale === 'zh' ? locale : 'en';

export const getLandingSource = (
  locale: AppLocale | string | null | undefined,
  page: LandingSourcePage = 'features',
) => {
  const contentLocale = toLandingContentLocale(locale);
  if (contentLocale === 'en') return featuresEn;
  if (contentLocale === 'ru') return featuresRu;
  if (contentLocale === 'zh') return featuresZh;

  if (page === 'home' && contentLocale === 'fa') {
    const hasCompatibleHero = Boolean((homeFa as any)?.hero?.title?.line1);
    return hasCompatibleHero ? homeFa : featuresFa;
  }

  return featuresFa;
};
