import { Metadata } from 'next';
import FeaturesForexLayout from '@/components/forex-skin/features/FeaturesForexLayout';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Website, Booking & Payments for Service Businesses | Schedulaa',
  description:
    'Build your website, take bookings, sell products, accept payments, schedule staff, and manage customer operations in one platform for service businesses.',
  openGraph: {
    title: 'Website, Booking & Payments for Service Businesses | Schedulaa',
    description: 'Build your website, take bookings, sell products, accept payments, schedule staff, and manage customer operations in one platform for service businesses.',
    url: 'https://www.schedulaa.com/en/features',
  },
  twitter: {
    title: 'Website, Booking & Payments for Service Businesses | Schedulaa',
    description: 'Build your website, take bookings, sell products, accept payments, schedule staff, and manage customer operations in one platform for service businesses.',
  },
};

export default async function FeaturesPage() {
  const locale = await getServerLocale();

  return <FeaturesForexLayout locale={locale} />;
}
