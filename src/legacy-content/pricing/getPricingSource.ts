import pricingEn from './landing-pricing.json';
import pricingFa from './landing-pricing.fa.json';
import pricingRu from './landing-pricing.ru.json';
import pricingZh from './landing-pricing.zh.json';
import pricingEs from './landing-pricing.es.json';
import pricingFr from './landing-pricing.fr.json';
import pricingDe from './landing-pricing.de.json';
import pricingAr from './landing-pricing.ar.json';
import pricingPt from './landing-pricing.pt.json';

import { AppLocale } from '@/utils/locale';

export type PricingContentLocale = 'en' | 'fa' | 'ru' | 'zh' | 'es' | 'fr' | 'de' | 'ar' | 'pt';

export const toPricingContentLocale = (locale: AppLocale | string | null | undefined): PricingContentLocale =>
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

export const getPricingSource = (locale: AppLocale | string | null | undefined) =>
  toPricingContentLocale(locale) === 'fa'
    ? pricingFa
    : toPricingContentLocale(locale) === 'ru'
      ? pricingRu
      : toPricingContentLocale(locale) === 'zh'
        ? pricingZh
        : toPricingContentLocale(locale) === 'es'
          ? pricingEs
          : toPricingContentLocale(locale) === 'fr'
            ? pricingFr
            : toPricingContentLocale(locale) === 'de'
              ? pricingDe
              : toPricingContentLocale(locale) === 'ar'
                ? pricingAr
                : toPricingContentLocale(locale) === 'pt'
                  ? pricingPt
                  : pricingEn;
