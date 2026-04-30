import BusinessFinanceLandingPage from '@/components/business-finance/BusinessFinanceLandingPage';
import { getBusinessFinanceMeta } from '@/components/business-finance/localeCopy';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const localized = getBusinessFinanceMeta(locale);
  return {
    ...defaultMetadata,
    title: localized.title,
    description: localized.description,
  };
}

export default function BusinessFinancePage() {
  return <BusinessFinanceLandingPage />;
}
