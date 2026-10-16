import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { dispatchPage } from '@/components/dispatch/dispatchPageContent';
import { buildLocalizedPageMetadata, getLocalizedCanonicalUrl } from '@/lib/seo/pageMetadata';
import { getServerLocale } from '@/utils/serverLocale';
import type { Metadata } from 'next';
import Script from 'next/script';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  return buildLocalizedPageMetadata({
    locale,
    path: '/dispatch',
    title: dispatchPage.meta.title,
    description: dispatchPage.meta.description,
  });
}

export default async function DispatchPage() {
  const locale = await getServerLocale();
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Schedulaa', item: getLocalizedCanonicalUrl(locale, '/') },
      { '@type': 'ListItem', position: 2, name: 'Features', item: getLocalizedCanonicalUrl(locale, '/features') },
      { '@type': 'ListItem', position: 3, name: 'Dispatch and work orders', item: getLocalizedCanonicalUrl(locale, '/dispatch') },
    ],
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dispatchPage.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <>
      <Script id="dispatch-breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLd)}
      </Script>
      <Script id="dispatch-faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <FeatureStyleContentPage config={dispatchPage} routePath="/dispatch" />
    </>
  );
}
