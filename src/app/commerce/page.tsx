import { Metadata } from 'next';

import { getCommerceMeta } from '@/components/commerce/localeCopy';
import CommercePlatformPage from '@/components/commerce/CommercePlatformPage';
import { buildLocalizedPageMetadata } from '@/lib/seo/pageMetadata';
import { getServerLocale } from '@/utils/serverLocale';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const meta = getCommerceMeta(locale);
  return buildLocalizedPageMetadata({
    locale,
    path: '/commerce',
    title: meta.title,
    description: meta.description,
    openGraphTitle: meta.openGraphTitle,
    openGraphDescription: meta.openGraphDescription,
    twitterTitle: meta.twitterTitle,
    twitterDescription: meta.twitterDescription,
  });
}

export default async function CommercePage() {
  const locale = await getServerLocale();
  return <CommercePlatformPage locale={locale} />;
}
