import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Marketing Analytics Dashboard | Schedulaa',
  description:
    'Track campaign outcomes, booking conversion, and operational impact in one analytics dashboard.',
};

export default function MarketingAnalyticsDashboardPage() {
  return (
    <main className="section-padding-x pb-24 pt-20">
      <div className="mx-auto max-w-4xl">
        <p className="badge badge-yellow-v2">Marketing analytics</p>
        <h1 className="mt-4 text-4xl font-semibold text-secondary dark:text-white">See campaign impact beyond clicks</h1>
        <p className="mt-5 text-lg text-secondary/75 dark:text-accent/70">
          Schedulaa analytics connect campaigns to booking outcomes, staff load, and recurring revenue signals.
        </p>
        <div className="mt-8 space-y-4 text-secondary/80 dark:text-accent/75">
          <p>Measure which campaigns generate appointments, not only opens and link clicks.</p>
          <p>Compare performance by location, service type, and time window to guide budget decisions.</p>
          <p>Use shared metrics between marketing and operations teams to remove reporting conflicts.</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/marketing" className="btn btn-primary btn-md">Back to marketing hub</Link>
          <Link href="/features" className="btn btn-secondary btn-md">View platform features</Link>
        </div>
      </div>
    </main>
  );
}
