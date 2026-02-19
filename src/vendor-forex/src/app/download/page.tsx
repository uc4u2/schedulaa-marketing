import Content from '@/vendor-forex/src/components/download/Content';
import Hero from '@/vendor-forex/src/components/download/Hero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Download - Forex Trading || NextSaaS',
};

const page = () => {
  return (
    <main className="dark:bg-background-7 bg-white">
      <Hero />
      <Content />
    </main>
  );
};

export default page;
