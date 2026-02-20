import pricingEn from './landing-pricing.json';
import pricingFa from './landing-pricing.fa.json';

import { AppLocale } from '@/utils/locale';

export type PricingContentLocale = 'en' | 'fa';

export const toPricingContentLocale = (locale: AppLocale | string | null | undefined): PricingContentLocale =>
  locale === 'fa' ? 'fa' : 'en';

export const getPricingSource = (locale: AppLocale | string | null | undefined) =>
  toPricingContentLocale(locale) === 'fa' ? pricingFa : pricingEn;

