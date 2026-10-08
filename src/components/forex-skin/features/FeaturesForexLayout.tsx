import CTA from '@/components/shared/cta/CTA';
import Feature from '@/vendor-forex/src/components/features/Feature';
import Features from '@/vendor-forex/src/components/features/Features';
import Reviews from '@/vendor-forex/src/components/features/Reviews';
import WhyChooseUs from '@/vendor-forex/src/components/features/WhyChooseUs';
import { getLandingSource } from '@/legacy-content/features/getLandingSource';
import { SEARCH_INTENT_MAP } from '@/lib/seo/searchIntentMap';
import { AppLocale, withLocalePath } from '@/utils/locale';
import Link from 'next/link';

type Props = {
  locale: AppLocale;
};

// Forex skin features composition in vendor section order.
export default function FeaturesForexLayout({ locale }: Props) {
  const source = getLandingSource(locale, 'features');
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Features source={source} locale={locale} />
      <Feature source={source} locale={locale} />
      {locale === 'en' ? (
        <section className="bg-white py-20 dark:bg-background-6">
          <div className="main-container">
            <div className="mx-auto max-w-[850px] text-center">
              <span className="badge badge-cyan-v2">Explore by workflow</span>
              <h2 className="mt-5">Find the Schedulaa workflow your team needs</h2>
              <p className="mt-4">
                Start with a specific operational job, then follow the connected workflow without guessing which product page owns it.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {SEARCH_INTENT_MAP.map((entry) => (
                <article key={entry.key} className="rounded-[20px] border border-stroke-1 bg-background-3 p-6 dark:border-stroke-7 dark:bg-background-8">
                  <h3 className="text-heading-6">{entry.label}</h3>
                  <p className="mt-2">{entry.intent}</p>
                  <Link href={withLocalePath(entry.path, locale)} className="mt-5 inline-flex text-primary-500 underline underline-offset-4">
                    Explore {entry.label.toLowerCase()}
                  </Link>
                </article>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href={withLocalePath('/platform', locale)} className="text-primary-500 underline underline-offset-4">
                See how the complete Schedulaa platform fits together
              </Link>
            </div>
          </div>
        </section>
      ) : null}
      <WhyChooseUs source={source} />
      <Reviews source={source} />
      <CTA
        className="bg-white dark:bg-background-6"
        badgeClass="hidden"
        ctaHeading="Run websites, bookings, invoices, and scheduling from one"
        spanText="platform"
        description="Explore the product pages that drive the core service-business workflow: website builder, booking, invoices, payments, and staff scheduling."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Start free"
      />
      <section className="bg-white pb-20 dark:bg-background-6">
        <div className="main-container">
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link href={withLocalePath('/website-builder', locale)} className="text-primary-500 underline">
              Website Builder
            </Link>
            <Link href={withLocalePath('/booking', locale)} className="text-primary-500 underline">
              Booking
            </Link>
            <Link href={withLocalePath('/business-finance/invoices', locale)} className="text-primary-500 underline">
              Invoices & Payments
            </Link>
            <Link href={withLocalePath('/workforce', locale)} className="text-primary-500 underline">
              Staff Scheduling
            </Link>
            <Link href={withLocalePath('/commerce', locale)} className="text-primary-500 underline">
              Commerce
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
