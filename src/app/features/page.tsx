import { Metadata } from 'next';
import FeaturesForexLayout from '@/components/forex-skin/features/FeaturesForexLayout';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { getLocalizedCanonicalUrl } from '@/lib/seo/pageMetadata';
import { SEARCH_INTENT_MAP } from '@/lib/seo/searchIntentMap';
import Script from 'next/script';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Service Business Software: Booking, Invoices & Dispatch | Schedulaa',
  description:
    'Connect your website, online booking, Client 360, estimates, invoices, work orders, dispatch and staff operations in one service-business platform.',
  openGraph: {
    title: 'Service Business Software: Booking, Invoices & Dispatch | Schedulaa',
    description:
      'Connect your website, online booking, Client 360, estimates, invoices, work orders, dispatch and staff operations in one service-business platform.',
    url: 'https://www.schedulaa.com/en/features',
  },
  twitter: {
    title: 'Service Business Software: Booking, Invoices & Dispatch | Schedulaa',
    description:
      'Connect your website, online booking, Client 360, estimates, invoices, work orders, dispatch and staff operations in one service-business platform.',
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
