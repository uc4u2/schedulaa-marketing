import Features from '@/components/home/Features';
import FeaturesV2 from '@/components/home/FeaturesV2';
import WhyUs from '@/components/home/WhyUs';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Features | Schedulaa',
  description: 'Explore Schedulaa features for scheduling, booking, payroll workflows, websites, and enterprise operations.',
  openGraph: {
    title: 'Features | Schedulaa',
    description: 'Explore Schedulaa features for scheduling, booking, payroll workflows, websites, and enterprise operations.',
    url: 'https://www.schedulaa.com/en/features',
  },
  twitter: {
    title: 'Features | Schedulaa',
    description: 'Explore Schedulaa features for scheduling, booking, payroll workflows, websites, and enterprise operations.',
  },
};

export default function FeaturesPage() {
  return (
    <>
      <Features />
      <FeaturesV2 />
      <WhyUs />
    </>
  );
}
