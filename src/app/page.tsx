import { Metadata } from 'next';
import HomeForexLayout from '@/components/forex-skin/home/HomeForexLayout';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';

const metadataByLocale: Partial<Record<AppLocale, { title: string; description: string }>> = {
  en: {
    title: 'Schedulaa | Scheduling, Booking, Payroll and Websites',
    description:
      'Schedulaa gives service teams one operating system for booking, workforce scheduling, payroll-ready exports, and website commerce.',
  },
  fa: {
    title: '\u0634\u062f\u0648\u0644\u0627 | \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0631\u06cc\u0632\u06cc\u060c \u0631\u0632\u0631\u0648\u060c \u062d\u0642\u0648\u0642 \u0648 \u0648\u0628\u200c\u0633\u0627\u06cc\u062a',
    description:
      '\u0634\u062f\u0648\u0644\u0627 \u0628\u0631\u0627\u06cc \u062a\u06cc\u0645\u200c\u0647\u0627\u06cc \u062e\u062f\u0645\u0627\u062a\u06cc \u06cc\u06a9 \u0633\u06cc\u0633\u062a\u0645 \u06cc\u06a9\u067e\u0627\u0631\u0686\u0647 \u0628\u0631\u0627\u06cc \u0631\u0632\u0631\u0648\u060c \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0631\u06cc\u0632\u06cc \u0646\u06cc\u0631\u0648\u06cc \u06a9\u0627\u0631\u060c \u062e\u0631\u0648\u062c\u06cc \u062d\u0642\u0648\u0642 \u0648 \u062a\u062c\u0627\u0631\u062a \u0648\u0628\u200c\u0633\u0627\u06cc\u062a \u0641\u0631\u0627\u0647\u0645 \u0645\u06cc\u200c\u06a9\u0646\u062f.',
  },
};
const fallbackMetadata = metadataByLocale.en as { title: string; description: string };

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
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
