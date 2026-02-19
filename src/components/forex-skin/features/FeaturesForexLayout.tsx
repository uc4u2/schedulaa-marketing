import CTA from '@/components/shared/cta/CTA';
import Feature from '@/vendor-forex/src/components/features/Feature';
import Features from '@/vendor-forex/src/components/features/Features';
import Reviews from '@/vendor-forex/src/components/features/Reviews';
import WhyChooseUs from '@/vendor-forex/src/components/features/WhyChooseUs';
import { AppLocale } from '@/utils/locale';

type Props = {
  locale: AppLocale;
};

// Forex skin features composition in vendor section order.
export default function FeaturesForexLayout({ locale }: Props) {
  void locale;
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Features />
      <Feature />
      <WhyChooseUs />
      <Reviews />
      <CTA
        className="bg-white dark:bg-background-6"
        badgeClass="hidden"
        ctaHeading="Build a complete website using the"
        spanText="assistance"
        description="Start your free trial today and see your ideas come to life easily and creatively."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Get started"
      />
    </main>
  );
}
