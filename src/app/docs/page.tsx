import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { getDocsSource } from '@/legacy-content/docs/getDocsSource';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const docsPage = getDocsSource(locale);
  return {
    ...defaultMetadata,
    title: docsPage.meta?.title || 'Docs | Schedulaa',
    description: docsPage.meta?.description,
  };
}

export default async function DocsPage() {
  const locale = await getServerLocale();
  const docsPage = getDocsSource(locale);
  return <FeatureStyleContentPage config={docsPage as any} routePath="/docs" />;
}
