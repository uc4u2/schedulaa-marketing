import { Metadata } from 'next';
import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import ProductTutorialPanel from '@/components/tutorials/ProductTutorialPanel';
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
              <ProductTutorialPanel module={tutorialModule} locale={locale} />
            </div>
          </section>
        ) : null
      }
    />
  );
}
