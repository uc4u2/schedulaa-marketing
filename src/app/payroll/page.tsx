import { Metadata } from 'next';
import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import CenteredTutorialVideoSection from '@/components/tutorials/CenteredTutorialVideoSection';
import { getTutorialModule } from '@/data/tutorials/tutorialCatalog';
import { getPayrollSource } from '@/legacy-content/payroll/getPayrollSource';
import { getServerLocale } from '@/utils/serverLocale';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const payrollPages = getPayrollSource(locale);
  const meta = payrollPages.overview.meta;

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    openGraph: {
      title: meta.og.title,
      description: meta.og.description,
      url: meta.og.url,
      images: meta.og.image ? [{ url: meta.og.image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.twitter.title,
      description: meta.twitter.description,
      images: meta.twitter.image ? [meta.twitter.image] : undefined,
    },
  };
}

export default async function PayrollPage() {
  const locale = await getServerLocale();
  const payrollPages = getPayrollSource(locale);
  const tutorialModule = getTutorialModule('payroll');
  return (
    <FeatureStyleContentPage
      config={payrollPages.overview as any}
      routePath="/payroll"
      afterHero={
        tutorialModule ? (
          <section className="pb-16 md:pb-20">
            <div className="main-container">
              <CenteredTutorialVideoSection
                module={tutorialModule}
                titleOverride="See the payroll workflow in one short video."
                descriptionOverride="Watch how approved time, payroll preview, payslips, and handoff-ready records stay connected without reading a long feature list."
              />
            </div>
          </section>
        ) : null
      }
    />
  );
}
