import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import CenteredTutorialVideoSection from '@/components/tutorials/CenteredTutorialVideoSection';
import { getTutorialModule } from '@/data/tutorials/tutorialCatalog';
import { getBatch2Source } from '@/legacy-content/batch2/getBatch2Source';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import Link from 'next/link';
import { Metadata } from 'next';
import { withLocalePath } from '@/utils/locale';

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
        <>
          <section className="pb-16 md:pb-20">
            <div className="main-container">
              <div className="rounded-[24px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
                <p className="badge badge-cyan-v2">Connected workflows</p>
                <h2 className="mt-4 text-2xl font-semibold">Keep staff scheduling tied to booking and approved-hour follow-up</h2>
                <p className="mt-3 max-w-[860px] text-secondary/70 dark:text-accent/70">
                  Workforce planning works best when open shifts, client demand, and approved hours stay connected to the same service-business system.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href={withLocalePath('/booking', locale)} className="text-primary-500 underline">
                    Explore booking and staff scheduling
                  </Link>
                  <Link href={withLocalePath('/business-finance/invoices', locale)} className="text-primary-500 underline">
                    See approved hours and invoicing
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {tutorialModule ? (
            <section className="pb-16 md:pb-20">
              <div className="main-container">
                <CenteredTutorialVideoSection
                  module={tutorialModule}
                  titleOverride="See the workforce workflow in one short video."
                  descriptionOverride="Watch how staffing coverage, shift planning, and exception review stay connected without reading a long feature list."
                />
              </div>
            </section>
          ) : null}
        </>
      }
    />
  );
}
