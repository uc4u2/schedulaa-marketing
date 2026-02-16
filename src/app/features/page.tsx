import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { featuresPage } from '@/legacy-content/features/config';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: featuresPage.meta?.title || 'Features | Schedulaa',
  description: featuresPage.meta?.description,
};

export default function FeaturesPage() {
  return <LegacyConfigPage config={featuresPage} />;
}
