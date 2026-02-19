import CTA from '@/vendor-forex/src/components/team/CTA';
import Experience from '@/vendor-forex/src/components/team/Experience';
import Features from '@/vendor-forex/src/components/team/Features';
import Teams from '@/vendor-forex/src/components/team/Teams';
import Testimonial from '@/vendor-forex/src/components/team/Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Team - Forex Trading || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Teams />
      <Experience />
      <Testimonial />
      <Features />
      <CTA />
    </main>
  );
};

export default page;
