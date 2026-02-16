import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { demoPage } from '@/legacy-content/batch2/config';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: demoPage.meta?.title || 'Demo | Schedulaa',
  description: demoPage.meta?.description,
};

export default function DemoPage() {
  return <LegacyConfigPage config={demoPage} />;
}
