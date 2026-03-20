import { Metadata } from 'next';

import CommercePlatformPage from '@/components/commerce/CommercePlatformPage';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Commerce, Shipping, and Digital Goods | Schedulaa',
  description:
    'Sell physical products, digital goods, and service add-ons with shipping automation, product categories, client order history, and mixed checkout flows in Schedulaa.',
  openGraph: {
    title: 'Schedulaa Commerce, Shipping, and Digital Goods',
    description:
      'Schedulaa unifies product sales, digital access, EasyPost shipping, and client order follow-up in one operational platform.',
    url: 'https://www.schedulaa.com/en/commerce',
  },
  twitter: {
    title: 'Schedulaa Commerce, Shipping, and Digital Goods',
    description:
      'Sell products and services together with EasyPost shipping, digital delivery, and client order history.',
  },
};

export default async function CommercePage() {
  const locale = await getServerLocale();
  return <CommercePlatformPage locale={locale} />;
}
