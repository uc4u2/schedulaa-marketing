import FAQ from '@/vendor-forex/src/components/referral-program/FAQ';
import Hero from '@/vendor-forex/src/components/referral-program/Hero';
import Steps from '@/vendor-forex/src/components/referral-program/Steps';
import Testimonial from '@/vendor-forex/src/components/shared/testimonial/Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Referral Program - Forex Trading || NextSaaS',
};

const page = () => {
  return (
    <main className="dark:bg-secondary bg-white">
      <Hero />
      <Steps />
      <Testimonial />
      <FAQ />
    </main>
  );
};

export default page;
