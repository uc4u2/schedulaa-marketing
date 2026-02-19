import Awards from '@/vendor-forex/src/components/press/Awards';
import Client from '@/vendor-forex/src/components/press/Client';
import Hero from '@/vendor-forex/src/components/press/Hero';
import SaasInnovation from '@/vendor-forex/src/components/press/SaasInnovation';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Press - Forex Trading || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-12 dark:bg-background-5">
      <Hero />
      <Client />
      <SaasInnovation />
      <Awards />
    </main>
  );
};

export default page;
