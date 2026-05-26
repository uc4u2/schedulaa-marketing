import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import ProductTutorialPanel from '@/components/tutorials/ProductTutorialPanel';
import { getTutorialModule } from '@/data/tutorials/tutorialCatalog';
import { getBatch2Source } from '@/legacy-content/batch2/getBatch2Source';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const { workforcePage } = getBatch2Source(locale);
  return {
    ...defaultMetadata,
    title: workforcePage.meta?.title || 'Workforce | Schedulaa',
    description: workforcePage.meta?.description,
  };
}

export default async function WorkforcePage() {
  const locale = await getServerLocale();
  const { workforcePage } = getBatch2Source(locale);
  const tutorialModule = getTutorialModule('workforce');
  return (
    <FeatureStyleContentPage
      config={workforcePage as any}
      routePath="/workforce"
      afterHero={
        tutorialModule ? (
          <section className="pb-16 md:pb-20">
            <div className="main-container">
              <ProductTutorialPanel module={tutorialModule} locale={locale} />
            </div>
          </section>
        ) : null
      }
    />
  );
}
