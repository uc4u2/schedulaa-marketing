import RefundPolicyContent from '@/components/refund-policy/RefundPolicyContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { SUPPORTED_LOCALES } from '@/utils/locale';
import { getServerLocale } from '@/utils/serverLocale';
import type { Metadata } from 'next';

const SITE_URL = 'https://www.schedulaa.com';
const CANONICAL_PATH = '/refund-policy';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const canonical = `${SITE_URL}/${locale}${CANONICAL_PATH}`;
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((supportedLocale) => [supportedLocale, `${SITE_URL}/${supportedLocale}${CANONICAL_PATH}`])
  );

  return {
    ...defaultMetadata,
    title: 'Refund Policy | Schedulaa',
    description:
      'Schedulaa refund and cancellation policy for SaaS subscriptions, including digital delivery, no physical returns, and billing dispute handling.',
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: 'website',
      siteName: 'Schedulaa',
      title: 'Refund Policy | Schedulaa',
      description:
        'Schedulaa refund and cancellation policy for SaaS subscriptions, including digital delivery, no physical returns, and billing dispute handling.',
      url: canonical,
    },
    twitter: {
      card: 'summary',
      title: 'Refund Policy | Schedulaa',
      description:
        'Schedulaa refund and cancellation policy for SaaS subscriptions, including digital delivery, no physical returns, and billing dispute handling.',
    },
  };
}

export default function RefundPolicyPage() {
  return <RefundPolicyContent />;
}
