import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { pricingPage } from '@/legacy-content/pricing/config';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: pricingPage.meta?.title || 'Pricing | Schedulaa',
  description: pricingPage.meta?.description,
};

export default function PricingPage() {
  return <LegacyConfigPage config={pricingPage} />;
}
