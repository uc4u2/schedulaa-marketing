import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { statusPage } from '@/legacy-content/batch2/config';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: statusPage.meta?.title || 'Status | Schedulaa',
  description: statusPage.meta?.description,
};

export default function StatusPage() {
  return <FeatureStyleContentPage config={statusPage as any} routePath="/status" />;
}
