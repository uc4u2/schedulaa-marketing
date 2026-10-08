import { Metadata } from 'next';
import FeaturesForexLayout from '@/components/forex-skin/features/FeaturesForexLayout';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { getLocalizedCanonicalUrl } from '@/lib/seo/pageMetadata';
import { SEARCH_INTENT_MAP } from '@/lib/seo/searchIntentMap';
import Script from 'next/script';

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

  const intentListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Schedulaa service-business workflows',
    itemListElement: SEARCH_INTENT_MAP.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.label,
      url: getLocalizedCanonicalUrl(locale, entry.path),
    })),
  };

  return (
    <>
      {locale === 'en' ? (
        <Script id="features-search-intent-item-list-jsonld" type="application/ld+json">
          {JSON.stringify(intentListJsonLd)}
        </Script>
      ) : null}
      <FeaturesForexLayout locale={locale} />
    </>
  );
}
