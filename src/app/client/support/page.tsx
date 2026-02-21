import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { getBatch2Source } from '@/legacy-content/batch2/getBatch2Source';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const { supportPage } = getBatch2Source(locale);
  const meta = (supportPage as any)?.meta;
  return {
    ...defaultMetadata,
    title: meta?.title || 'Client Support | Schedulaa',
    description: meta?.description || defaultMetadata.description,
  };
}

export default async function ClientSupportPage() {
  const locale = await getServerLocale();
  const { supportPage } = getBatch2Source(locale);
  return <FeatureStyleContentPage config={supportPage as any} routePath="/client/support" />;
}
