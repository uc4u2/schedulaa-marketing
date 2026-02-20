import { Metadata } from 'next';
import FeaturesForexLayout from '@/components/forex-skin/features/FeaturesForexLayout';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Schedulaa Platform Features | Scheduling, Payroll, and Online Sales Unified',
  description:
    'Schedulaa unifies scheduling, payroll, hiring, website building, and eCommerce for teams. Sell services or products, automate payments, and manage multi-branch operations in one platform.',
  openGraph: {
    title: 'Schedulaa Platform Features',
    description: 'Book clients, sell products, pay your team - all from one platform.',
    url: 'https://www.schedulaa.com/en/features',
  },
  twitter: {
    title: 'Schedulaa Platform Features',
    description: 'Book clients, sell products, pay your team - all from one platform.',
  },
};

export default async function FeaturesPage() {
  const locale = await getServerLocale();

  return <FeaturesForexLayout locale={locale} />;
}
