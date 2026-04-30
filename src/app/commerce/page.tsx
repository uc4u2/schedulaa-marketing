import { Metadata } from 'next';

import { getCommerceMeta } from '@/components/commerce/localeCopy';
import CommercePlatformPage from '@/components/commerce/CommercePlatformPage';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const meta = getCommerceMeta(locale);
  return {
    ...defaultMetadata,
    title: meta.title,
    description: meta.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: meta.openGraphTitle,
      description: meta.openGraphDescription,
      url: 'https://www.schedulaa.com/en/commerce',
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: meta.twitterTitle,
      description: meta.twitterDescription,
    },
  };
}

export default async function CommercePage() {
  const locale = await getServerLocale();
  return <CommercePlatformPage locale={locale} />;
}
