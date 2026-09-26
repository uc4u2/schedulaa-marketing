import CTA from '@/components/shared/cta/CTA';
import Feature from '@/vendor-forex/src/components/features/Feature';
import Features from '@/vendor-forex/src/components/features/Features';
import Reviews from '@/vendor-forex/src/components/features/Reviews';
import WhyChooseUs from '@/vendor-forex/src/components/features/WhyChooseUs';
import { getLandingSource } from '@/legacy-content/features/getLandingSource';
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
