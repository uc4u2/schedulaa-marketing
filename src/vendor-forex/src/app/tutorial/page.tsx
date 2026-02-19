import CTA from '@/vendor-forex/src/components/shared/cta/CTA';
import Banner from '@/vendor-forex/src/components/tutorial/Banner';
import Blog from '@/vendor-forex/src/components/tutorial/Blog';
import Community from '@/vendor-forex/src/components/tutorial/Community';
import Features from '@/vendor-forex/src/components/tutorial/Features';
import Integration from '@/vendor-forex/src/components/tutorial/Integration';
import Services from '@/vendor-forex/src/components/tutorial/Services';
import Tutorials from '@/vendor-forex/src/components/tutorial/Tutorials';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Tutorial - Forex Trading || NextSaaS',
};

const Tutorial = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5">
      <Banner />
      <Blog />
      <Features />
      <Tutorials />
      <Services />
      <Integration />
      <Community />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="badge-green"
        badgeText="Get Started"
        ctaHeading="Ready to start earning with NextSaaS?"
        description="If you have any questions, feel free to reach out to our team."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default Tutorial;
