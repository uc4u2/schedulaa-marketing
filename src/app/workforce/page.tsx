import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { getBatch2Source } from '@/legacy-content/batch2/getBatch2Source';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const { workforcePage } = getBatch2Source(locale);
  return {
    ...defaultMetadata,
    title: workforcePage.meta?.title || 'Workforce | Schedulaa',
    description: workforcePage.meta?.description,
  };
}

export default async function WorkforcePage() {
  const locale = await getServerLocale();
  const { workforcePage } = getBatch2Source(locale);
  return <FeatureStyleContentPage config={workforcePage as any} routePath="/workforce" />;
}
