import Feature from '@/components/features/Feature';
import Features from '@/components/features/Features';
import WhyChooseUs from '@/components/features/WhyChooseUs';
import CTA from '@/components/shared/cta/CTA';
import Reviews from '@/components/features/Reviews';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Features | Schedulaa',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Features />
      <Feature />
      <WhyChooseUs />
      <Reviews />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="hidden"
        ctaHeading="Run scheduling, payroll, and booking from one stack"
        description="Run core service-business operations from one platform."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;
