import AboutCTA from '@/vendor-forex/src/components/about/CTA';
import OurMission from '@/vendor-forex/src/components/about/OurMission';
import OurSuccess from '@/vendor-forex/src/components/about/OurSuccess';
import Reviews from '@/vendor-forex/src/components/about/Reviews';
import Team from '@/vendor-forex/src/components/about/Team';
import VisionStatement from '@/vendor-forex/src/components/about/VisionStatement';
import WhyChooseUs from '@/vendor-forex/src/components/about/WhyChooseUs';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'About - Forex Trading || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <VisionStatement />
      <OurMission />
      <OurSuccess />
      <WhyChooseUs />
      <Team />
      <Reviews />
      <AboutCTA />
    </main>
  );
};

export default page;
