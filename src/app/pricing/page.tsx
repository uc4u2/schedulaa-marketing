import { Metadata } from 'next';

import pricingSource from '@/legacy-content/pricing/landing-pricing.json';
import Pricing from '@/components/pricing/Pricing';
import { defaultMetadata } from '@/utils/generateMetaData';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: pricingSource.meta?.title || 'Pricing | Schedulaa',
  description: pricingSource.meta?.description,
};

export default function PricingPage() {
  return (
    <main className="bg-background-1 dark:bg-background-6 overflow-x-hidden">
      <Pricing />
    </main>
  );
}
