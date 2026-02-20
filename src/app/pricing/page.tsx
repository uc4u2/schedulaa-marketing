import { Metadata } from 'next';

import { getPricingSource } from '@/legacy-content/pricing/getPricingSource';
import PricingForexLayout from '@/components/forex-skin/pricing/PricingForexLayout';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const pricingSource = getPricingSource(locale);
  return {
    ...defaultMetadata,
    title: pricingSource.meta?.title || 'Pricing | Schedulaa',
    description: pricingSource.meta?.description,
  };
}

export default async function PricingPage() {
  const locale = await getServerLocale();
  return <PricingForexLayout locale={locale} />;
}
