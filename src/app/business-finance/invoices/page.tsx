import BusinessFinanceInvoicesPage from '@/components/business-finance-invoices/BusinessFinanceInvoicesPage';
import { getBusinessFinanceInvoicesCopy } from '@/components/business-finance-invoices/localeCopy';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import type { Metadata } from 'next';

const SITE_URL = 'https://www.schedulaa.com';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const copy = getBusinessFinanceInvoicesCopy(locale);
  const canonical = `${SITE_URL}/${locale}${copy.meta.canonicalPath}`;

  return {
    ...defaultMetadata,
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en${copy.meta.canonicalPath}`,
        fa: `${SITE_URL}/fa${copy.meta.canonicalPath}`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'Schedulaa',
      title: copy.meta.title,
      description: copy.meta.description,
      url: canonical,
      images: [{ url: copy.meta.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.meta.title,
      description: copy.meta.description,
      images: [copy.meta.ogImage],
    },
  };
}

export default function BusinessFinanceInvoicesRoute() {
  return <BusinessFinanceInvoicesPage />;
}

