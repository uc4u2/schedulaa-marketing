import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

const contactPage = {
  hero: {
    badge: 'Contact',
    title: 'Let\'s talk about your rollout.',
    subtitle:
      'Looking for a custom implementation, partner program, or migration help? Our specialists respond within one business day.',
    primaryCta: { label: 'Email us', href: 'mailto:admin@schedulaa.com' },
    secondaryCta: { label: 'Call +1 (415) 555-0198', href: 'tel:+14155550198' },
  },
  sections: [
    {
      title: 'Direct lines',
      points: ['Sales: +1 (514) 000-0000', 'Admin: admin@schedulaa.com'],
    },
    {
      title: 'Contact FAQ',
      items: [
        {
          title: 'How fast will someone reply?',
          body: 'Enterprise rollout specialists respond within one business day for scheduling, payroll, and migration requests.',
        },
        {
          title: 'Do you offer implementation services?',
          body: 'Yes. Our team handles data imports, template mapping, staff onboarding, and payroll validation for every location.',
        },
        {
          title: 'How do partners or resellers reach you?',
          body: 'Email admin@schedulaa.com and we will route your note to our partnership, integration, or reseller teams.',
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Schedulaa',
  description: 'Talk to the Schedulaa team about custom rollouts, partnerships, or migration support.',
};

export default function ContactPage() {
  return <LegacyConfigPage config={contactPage} />;
}
