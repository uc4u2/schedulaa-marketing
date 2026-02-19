import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { industriesPage } from '@/legacy-content/batch2/config';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: industriesPage.meta?.title || 'Industries | Schedulaa',
  description: industriesPage.meta?.description,
};

export default function IndustriesPage() {
  return <FeatureStyleContentPage config={industriesPage as any} routePath="/industries" />;
}
