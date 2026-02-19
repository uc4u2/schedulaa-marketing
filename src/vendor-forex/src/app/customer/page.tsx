import CTA from '@/vendor-forex/src/components/customer/CTA';
import Hero from '@/vendor-forex/src/components/customer/Hero';
import SuccessStories from '@/vendor-forex/src/components/customer/SuccessStories';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Customers - Forex Trading || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Hero />
      <SuccessStories />
      <CTA />
    </main>
  );
};

export default page;
