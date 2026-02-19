import { Metadata } from 'next';

import pricingSource from '@/legacy-content/pricing/landing-pricing.json';
import PricingForexLayout from '@/components/forex-skin/pricing/PricingForexLayout';
import { defaultMetadata } from '@/utils/generateMetaData';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: pricingSource.meta?.title || 'Pricing | Schedulaa',
  description: pricingSource.meta?.description,
};

export default function PricingPage() {
  return <PricingForexLayout />;
}
