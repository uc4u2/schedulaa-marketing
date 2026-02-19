import Counter from '@/vendor-forex/src/components/why-choose-us/Counter';
import CTA from '@/vendor-forex/src/components/why-choose-us/CTA';
import Feature from '@/vendor-forex/src/components/why-choose-us/Feature';
import Hero from '@/vendor-forex/src/components/why-choose-us/Hero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Why Choose Us - Forex Trading || NextSaaS',
};

const page = () => {
  return (
    <main className="dark:bg-background-5 bg-white">
      <Hero />
      <Counter />
      <Feature />
      <CTA />
    </main>
  );
};

export default page;
