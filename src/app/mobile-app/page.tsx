import MobileAppLandingPage from '@/components/mobile-app/MobileAppLandingPage';
import { getMobileAppMeta } from '@/components/mobile-app/localeCopy';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const localized = getMobileAppMeta(locale);
  return {
    ...defaultMetadata,
    title: localized.title,
    description: localized.description,
  };
}

export default function MobileAppPage() {
  return <MobileAppLandingPage />;
}
