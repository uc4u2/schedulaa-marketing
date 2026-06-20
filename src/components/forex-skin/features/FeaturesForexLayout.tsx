import CTA from '@/components/shared/cta/CTA';
import Feature from '@/vendor-forex/src/components/features/Feature';
import Features from '@/vendor-forex/src/components/features/Features';
import Reviews from '@/vendor-forex/src/components/features/Reviews';
import WhyChooseUs from '@/vendor-forex/src/components/features/WhyChooseUs';
import { getLandingSource } from '@/legacy-content/features/getLandingSource';
import { AppLocale } from '@/utils/locale';
import Link from 'next/link';

type Props = {
  locale: AppLocale;
};

// Forex skin features composition in vendor section order.
export default function FeaturesForexLayout({ locale }: Props) {
  const source = getLandingSource(locale, 'features');
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Features source={source} />
      <Feature source={source} />
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
            <Link href="/website-builder" className="text-primary-500 underline">
              Website Builder
            </Link>
            <Link href="/booking" className="text-primary-500 underline">
              Booking
            </Link>
            <Link href="/business-finance/invoices" className="text-primary-500 underline">
              Invoices & Payments
            </Link>
            <Link href="/workforce" className="text-primary-500 underline">
              Staff Scheduling
            </Link>
            <Link href="/commerce" className="text-primary-500 underline">
              Commerce
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
