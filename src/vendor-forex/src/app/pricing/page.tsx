import Benefits from '@/vendor-forex/src/components/pricing/Benefits';
import Contact from '@/vendor-forex/src/components/pricing/Contact';
import Features from '@/vendor-forex/src/components/pricing/Features';
import Pricing from '@/vendor-forex/src/components/pricing/Pricing';
import CTA from '@/vendor-forex/src/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Pricing - NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Pricing />
      <Benefits />
      <Features />
      <Contact />
      <CTA
        className="dark:bg-background-7 bg-background-3"
        badgeText="Get started"
        badgeClass="!badge-cyan"
        ctaHeading="Build a complete website using the assistance"
        description="Start your free trial today and see your ideas come to life easily and creatively."
        ctaBtnText="Get started"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
