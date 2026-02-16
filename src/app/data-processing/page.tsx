import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Data Processing Addendum | Schedulaa',
  description: 'Overview of Schedulaa data processing terms and controller-processor expectations.',
};

export default function DataProcessingPage() {
  return (
    <main className="section-padding-x pb-24 pt-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold text-secondary dark:text-white">Data Processing Addendum</h1>
        <p className="mt-6 text-secondary/80 dark:text-accent/75">
          This page outlines data handling responsibilities between Schedulaa and customer organizations, including processing scope,
          security obligations, and support boundaries.
        </p>
        <p className="mt-4 text-secondary/80 dark:text-accent/75">
          Enterprise legal teams can request contract-specific language during procurement and onboarding.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/privacy" className="btn btn-primary btn-sm">Privacy policy</Link>
          <Link href="/contact" className="btn btn-secondary btn-sm">Contact legal</Link>
        </div>
      </div>
    </main>
  );
}
