import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { getBatch2Source } from '@/legacy-content/batch2/getBatch2Source';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const { statusPage } = getBatch2Source(locale);
  return {
    ...defaultMetadata,
    title: statusPage.meta?.title || 'Status | Schedulaa',
    description: statusPage.meta?.description,
  };
}

export default async function StatusPage() {
  const locale = await getServerLocale();
  const { statusPage } = getBatch2Source(locale);
  return <FeatureStyleContentPage config={statusPage as any} routePath="/status" />;
}
