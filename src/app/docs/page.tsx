import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { buildLocalizedPageMetadata } from '@/lib/seo/pageMetadata';
import { getDocsSource } from '@/legacy-content/docs/getDocsSource';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const docsPage = getDocsSource(locale);
  return buildLocalizedPageMetadata({
    locale,
    path: '/docs',
    title: docsPage.meta?.title || 'Docs | Schedulaa',
    description: docsPage.meta?.description,
    openGraphTitle: docsPage.meta?.og?.title || docsPage.meta?.title || 'Docs | Schedulaa',
    openGraphDescription: docsPage.meta?.og?.description || docsPage.meta?.description,
  });
}

export default async function DocsPage() {
  const locale = await getServerLocale();
  const docsPage = getDocsSource(locale);
  return <FeatureStyleContentPage config={docsPage as any} routePath="/docs" />;
}
