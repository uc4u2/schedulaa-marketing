import Content from '@/vendor-forex/src/components/our-manifesto/Content';
import Hero from '@/vendor-forex/src/components/our-manifesto/Hero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Our Manifesto - Forex Trading || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-5">
      <Hero />
      <Content />
    </main>
  );
};

export default page;
