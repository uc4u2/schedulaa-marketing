import MobileAppLandingPage from '@/components/mobile-app/MobileAppLandingPage';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';

const mobileAppMeta: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Schedulaa Mobile App | Manager and Employee Operations on Android',
    description:
      'Download the Schedulaa Android app and see how managers and employees handle schedules, clock-in, approvals, attendance, and daily operations from one mobile workflow.',
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const localized = mobileAppMeta[locale] || mobileAppMeta.en;
  return {
    ...defaultMetadata,
    title: localized.title,
    description: localized.description,
  };
}

export default function MobileAppPage() {
  return <MobileAppLandingPage />;
}
