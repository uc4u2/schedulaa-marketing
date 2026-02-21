import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { getBatch2Source } from '@/legacy-content/batch2/getBatch2Source';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const { zapierPage } = getBatch2Source(locale);
  return {
    ...defaultMetadata,
    title: zapierPage.meta?.title || 'Zapier | Schedulaa',
    description: zapierPage.meta?.description,
  };
}

export default async function ZapierPage() {
  const locale = await getServerLocale();
  const { zapierPage } = getBatch2Source(locale);
  return <FeatureStyleContentPage config={zapierPage as any} routePath="/zapier" />;
}
