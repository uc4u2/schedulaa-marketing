import Features from '@/components/home/Features';
import FeaturesV2 from '@/components/home/FeaturesV2';
import Hero from '@/components/home/Hero';
import Reviews from '@/components/home/Reviews';
import SuccessStats from '@/components/home/SuccessStats';
import WhyUs from '@/components/home/WhyUs';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Schedulaa | Scheduling, Payroll, Website Builder',
};

const Homepage = () => {
  return (
    <main className="bg-background-2 dark:bg-background-6">
      <Hero />
      <Features />
      <SuccessStats />
      <WhyUs />
      <FeaturesV2 />
      <Reviews />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeText="Get started"
        badgeClass="!badge-yellow-v2"
        ctaHeading="Scale operations with Schedulaa"
        description="Launch scheduling, payroll workflows, and booking pages from one platform."
        descriptionClass="text-secondary/60"
        btnClass="btn-primary hover:btn-white-dark"
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default Homepage;
