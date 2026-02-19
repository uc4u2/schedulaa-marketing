import { Metadata } from 'next';
import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { payrollPages } from '@/legacy-content/payroll/config';

const meta = payrollPages.overview.meta;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.og.title,
    description: meta.og.description,
    url: meta.og.url,
    images: meta.og.image ? [{ url: meta.og.image }] : undefined,
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.twitter.title,
    description: meta.twitter.description,
    images: meta.twitter.image ? [meta.twitter.image] : undefined,
  },
};

export default function PayrollPage() {
  return <FeatureStyleContentPage config={payrollPages.overview as any} routePath="/payroll" />;
}
