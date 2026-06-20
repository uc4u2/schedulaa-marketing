import { Metadata } from 'next';
import FeaturesForexLayout from '@/components/forex-skin/features/FeaturesForexLayout';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Schedulaa Platform Features | Websites, Booking, Invoices, Scheduling and Payments',
  description:
    'Explore Schedulaa platform features for service businesses, including website builder tools, online booking, estimates and invoices, payments, staff scheduling, and customer operations.',
  openGraph: {
    title: 'Schedulaa Platform Features',
    description: 'Launch websites, accept bookings, send invoices, collect payments, and manage service operations from one platform.',
    url: 'https://www.schedulaa.com/en/features',
  },
  twitter: {
    title: 'Schedulaa Platform Features',
    description: 'Launch websites, accept bookings, send invoices, collect payments, and manage service operations from one platform.',
  },
};

export default async function FeaturesPage() {
  const locale = await getServerLocale();

  return <FeaturesForexLayout locale={locale} />;
}
