import HvacLandingPage from '@/components/hvac/HvacLandingPage';
import { getHvacCopy } from '@/components/hvac/localeCopy';
import { generateMetadata as buildMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const copy = getHvacCopy(locale);
  return buildMetadata(
    copy.meta.title,
    copy.meta.description,
    `https://www.schedulaa.com/${locale}/industries/hvac`,
  );
}

export default function HvacIndustryPage() {
  return <HvacLandingPage />;
}

