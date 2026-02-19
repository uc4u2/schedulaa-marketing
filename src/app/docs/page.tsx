import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { docsPage } from '@/legacy-content/docs/config';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: docsPage.meta?.title || 'Docs | Schedulaa',
  description: docsPage.meta?.description,
};

export default function DocsPage() {
  return <FeatureStyleContentPage config={docsPage as any} routePath="/docs" />;
}
