import { Metadata } from 'next';
import HomeForexLayout from '@/components/forex-skin/home/HomeForexLayout';
import { defaultMetadata } from '@/utils/generateMetaData';
import { AppLocale } from '@/utils/locale';
import { getServerLocale } from '@/utils/serverLocale';

const metadataByLocale: Partial<Record<AppLocale, { title: string; description: string }>> = {
  en: {
    title: 'Schedulaa | Website Builder, Booking, Invoices and Scheduling for Service Businesses',
    description:
      'Schedulaa helps service businesses launch websites, accept bookings, send estimates and invoices, manage shifts, and collect payments in one platform.',
  },
  fa: {
    title:
      '\u0634\u062f\u0648\u0644\u0627 | \u0633\u0627\u0632\u0646\u062f\u0647 \u0648\u0628\u200c\u0633\u0627\u06cc\u062a\u060c \u0631\u0632\u0631\u0648\u060c \u0641\u0627\u06a9\u062a\u0648\u0631 \u0648 \u0632\u0645\u0627\u0646\u200c\u0628\u0646\u062f\u06cc \u0628\u0631\u0627\u06cc \u06a9\u0633\u0628\u200c\u0648\u06a9\u0627\u0631\u0647\u0627\u06cc \u062e\u062f\u0645\u0627\u062a\u06cc',
    description:
      '\u0634\u062f\u0648\u0644\u0627 \u0628\u0647 \u06a9\u0633\u0628\u200c\u0648\u06a9\u0627\u0631\u0647\u0627\u06cc \u062e\u062f\u0645\u0627\u062a\u06cc \u06a9\u0645\u06a9 \u0645\u06cc\u200c\u06a9\u0646\u062f \u0648\u0628\u200c\u0633\u0627\u06cc\u062a \u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632\u06cc \u06a9\u0646\u0646\u062f\u060c \u0631\u0632\u0631\u0648 \u0628\u06af\u06cc\u0631\u0646\u062f\u060c \u0641\u0627\u06a9\u062a\u0648\u0631 \u0648 \u0628\u0631\u0622\u0648\u0631\u062f \u0628\u0641\u0631\u0633\u062a\u0646\u062f\u060c \u0634\u06cc\u0641\u062a\u200c\u0647\u0627 \u0631\u0627 \u0645\u062f\u06cc\u0631\u06cc\u062a \u06a9\u0646\u0646\u062f \u0648 \u067e\u0631\u062f\u0627\u062e\u062a\u200c\u0647\u0627 \u0631\u0627 \u062f\u0631 \u06cc\u06a9 \u067e\u0644\u062a\u0641\u0631\u0645 \u062c\u0645\u0639 \u06a9\u0646\u0646\u062f.',
  },
};
const fallbackMetadata = metadataByLocale.en as { title: string; description: string };

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const resolved = metadataByLocale[locale] || fallbackMetadata;
  const urlPath = locale === 'en' ? '/en' : `/${locale}`;

  return {
    ...defaultMetadata,
    title: resolved.title,
    description: resolved.description,
    openGraph: {
      title: resolved.title,
      description: resolved.description,
      url: `https://www.schedulaa.com${urlPath}`,
    },
    twitter: {
      title: resolved.title,
      description: resolved.description,
    },
  };
}

export default async function Homepage() {
  const locale = await getServerLocale();

  return <HomeForexLayout locale={locale} />;
}
