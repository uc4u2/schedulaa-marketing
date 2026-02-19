import Content from '@/vendor-forex/src/components/change-log/content';
import Hero from '@/vendor-forex/src/components/change-log/hero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Changelog - Forex Trading || NextSaaS',
};

const Changelog = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Hero />
      <Content />
    </main>
  );
};

export default Changelog;
