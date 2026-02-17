import Feature from '@/components/features/Feature';
import Features from '@/components/features/Features';
import Reviews from '@/components/features/Reviews';
import WhyChooseUs from '@/components/features/WhyChooseUs';
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
    <main className="overflow-x-hidden">
      <Features />
      <Feature />
      <WhyChooseUs />
      <Reviews />
    </main>
  );
}
