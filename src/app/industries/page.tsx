import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import IndustryDirectoryLiveSection from '@/components/industries/IndustryDirectoryLiveSection';
import { getBatch2Source } from '@/legacy-content/batch2/getBatch2Source';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const { industriesPage } = getBatch2Source(locale);
  return {
    ...defaultMetadata,
    title: industriesPage.meta?.title || 'Industries | Schedulaa',
    description: industriesPage.meta?.description,
  };
}

export default async function IndustriesPage() {
  const locale = await getServerLocale();
  const { industriesPage } = getBatch2Source(locale);
  return (
    <FeatureStyleContentPage
      config={industriesPage as any}
      routePath="/industries"
      afterHero={<IndustryDirectoryLiveSection />}
    />
  );
}
