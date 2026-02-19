import Clients from '@/vendor-forex/src/components/success-stories/clients';
import GlobalStoriesPerformance from '@/vendor-forex/src/components/success-stories/GlobalStoriesPerformance';
import Hero from '@/vendor-forex/src/components/success-stories/Hero';
import SpotlightStories from '@/vendor-forex/src/components/success-stories/SpotlightStories';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Success Stories - Forex Trading || NextSaaS',
};

const page = () => {
  return (
    <main className="dark:bg-secondary bg-white">
      <Hero />
      <Clients />
      <SpotlightStories />
      <GlobalStoriesPerformance />
    </main>
  );
};

export default page;
