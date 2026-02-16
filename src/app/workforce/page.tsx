import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { workforcePage } from '@/legacy-content/batch2/config';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: workforcePage.meta?.title || 'Workforce | Schedulaa',
  description: workforcePage.meta?.description,
};

export default function WorkforcePage() {
  return <LegacyConfigPage config={workforcePage} />;
}
