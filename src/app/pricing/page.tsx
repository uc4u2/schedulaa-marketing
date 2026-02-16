import Client from '@/components/pricing/Client';
import Faq from '@/components/pricing/Faq';
import Pricing from '@/components/pricing/Pricing';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Pricing | Schedulaa',
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <Pricing />
      <Client />
      <Faq />
      <CTA
        className="dark:bg-background-5 bg-background-1"
        badgeText="Get started"
        badgeClass="!badge-yellow-v2"
        ctaHeading="Start with the right Schedulaa plan"
        description="Choose the plan that fits your team and scale with confidence."
        ctaBtnText="Get started"
        btnClass="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default page;
