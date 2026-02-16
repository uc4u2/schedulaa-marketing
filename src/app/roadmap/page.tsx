import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { roadmapPage } from '@/legacy-content/batch2/config';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Roadmap | Schedulaa',
};

export default function RoadmapPage() {
  return <LegacyConfigPage config={roadmapPage} />;
}
