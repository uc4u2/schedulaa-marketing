import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { zapierPage } from '@/legacy-content/batch2/config';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: zapierPage.meta?.title || 'Zapier | Schedulaa',
  description: zapierPage.meta?.description,
};

export default function ZapierPage() {
  return <LegacyConfigPage config={zapierPage} />;
}
