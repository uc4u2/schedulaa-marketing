import TemplateFeaturesLayout from '@/components/website-builder-template/TemplateFeaturesLayout';
import { websiteBuilderPage } from '@/legacy-content/website-builder/config';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: websiteBuilderPage.meta?.title || 'Website Builder | Schedulaa',
  description: websiteBuilderPage.meta?.description,
};

export default function WebsiteBuilderPage() {
  return <TemplateFeaturesLayout page={websiteBuilderPage as any} />;
}
