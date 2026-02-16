import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { docsPage } from '@/legacy-content/docs/config';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: docsPage.meta?.title || 'Docs | Schedulaa',
  description: docsPage.meta?.description,
};

export default function DocsPage() {
  return <LegacyConfigPage config={docsPage} />;
}
