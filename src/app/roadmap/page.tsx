import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { getBatch2Source } from '@/legacy-content/batch2/getBatch2Source';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const { roadmapPage } = getBatch2Source(locale);
  const meta = (roadmapPage as any)?.meta;
  return {
    ...defaultMetadata,
    title: meta?.title || 'Roadmap | Schedulaa',
    description: meta?.description || defaultMetadata.description,
  };
}

export default async function RoadmapPage() {
  const locale = await getServerLocale();
  const { roadmapPage } = getBatch2Source(locale);
  return <FeatureStyleContentPage config={roadmapPage as any} routePath="/roadmap" />;
}
