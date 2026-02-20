import pricingEn from './landing-pricing.json';
import pricingFa from './landing-pricing.fa.json';
import pricingRu from './landing-pricing.ru.json';
import pricingZh from './landing-pricing.zh.json';

import { AppLocale } from '@/utils/locale';

export type PricingContentLocale = 'en' | 'fa' | 'ru' | 'zh';

export const toPricingContentLocale = (locale: AppLocale | string | null | undefined): PricingContentLocale =>
  locale === 'fa' || locale === 'ru' || locale === 'zh' ? locale : 'en';

export const getPricingSource = (locale: AppLocale | string | null | undefined) =>
  toPricingContentLocale(locale) === 'fa'
    ? pricingFa
    : toPricingContentLocale(locale) === 'ru'
      ? pricingRu
      : toPricingContentLocale(locale) === 'zh'
        ? pricingZh
        : pricingEn;
