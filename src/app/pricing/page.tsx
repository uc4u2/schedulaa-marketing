import { Metadata } from 'next';

import pricingSource from '@/legacy-content/pricing/landing-pricing.json';
import Pricing from '@/components/pricing/Pricing';
import Client from '@/components/pricing/Client';
import Faq from '@/components/pricing/Faq';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: pricingSource.meta?.title || 'Pricing | Schedulaa',
  description: pricingSource.meta?.description,
};

export default function PricingPage() {
  return (
    <main className="bg-background-1 dark:bg-background-6 overflow-x-hidden">
      <Pricing />
      <Client />
      <Faq />
      <CTA
        className="bg-accent dark:bg-background-7"
        badgeText="Get started"
        badgeClass="!badge-cyan"
        ctaHeading="Need help choosing the right Schedulaa plan?"
        description="Start your free trial or talk to our team about booking, scheduling, payroll workflows, and website rollout."
        ctaBtnText="Get started"
        btnClass="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
}
