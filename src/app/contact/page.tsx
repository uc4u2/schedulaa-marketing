import MarketingContactContent from '@/components/contact/MarketingContactContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Schedulaa',
  description: 'Talk to the Schedulaa team about custom rollouts, partnerships, or migration support.',
};

export default function ContactPage() {
  return <MarketingContactContent />;
}
