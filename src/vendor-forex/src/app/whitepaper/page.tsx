import Client from '@/vendor-forex/src/components/white-paper/Client';
import Hero from '@/vendor-forex/src/components/white-paper/Hero';
import Research from '@/vendor-forex/src/components/white-paper/Researchs';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Whitepaper - Forex Trading || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5">
      <Hero />
      <Research />
      <Client />
    </main>
  );
};

export default page;
