import DemoLandingPage from '@/components/demo/DemoLandingPage';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Schedulaa Demo Login | Test the Manager Dashboard',
  description:
    'Use the shared manager credentials to explore scheduling, payroll, compliance, automation, and integrations to Zapier, QuickBooks, and Xero inside the Schedulaa staging environment.',
};

export default function DemoPage() {
  return <DemoLandingPage />;
}
