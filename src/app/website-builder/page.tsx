import WebsiteBuilderAiApplicationLayout from '@/components/aiapp-skin/website-builder/WebsiteBuilderAiApplicationLayout';
import { getTutorialModule } from '@/data/tutorials/tutorialCatalog';
import { getWebsiteBuilderSource } from '@/legacy-content/website-builder/getWebsiteBuilderSource';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const websiteBuilderPage = getWebsiteBuilderSource(locale);
  return {
    ...defaultMetadata,
    title: websiteBuilderPage.meta?.title || 'Website Builder | Schedulaa',
    description: websiteBuilderPage.meta?.description,
  };
}

export default async function WebsiteBuilderPage() {
  const locale = await getServerLocale();
  const websiteBuilderPage = getWebsiteBuilderSource(locale);
  const tutorialModule = getTutorialModule('website_builder');
  return <WebsiteBuilderAiApplicationLayout page={websiteBuilderPage as any} tutorialModule={tutorialModule} />;
}
