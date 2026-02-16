import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { statusPage } from '@/legacy-content/batch2/config';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: statusPage.meta?.title || 'Status | Schedulaa',
  description: statusPage.meta?.description,
};

export default function StatusPage() {
  return <LegacyConfigPage config={statusPage} />;
}
