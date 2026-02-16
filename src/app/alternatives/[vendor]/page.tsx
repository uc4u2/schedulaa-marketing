import Link from 'next/link';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Alternative | Schedulaa',
};

export default async function AlternativesVendorPage({ params }: { params: Promise<{ vendor: string }> }) {
  const { vendor } = await params;
  const displayName = vendor.replace(/-/g, ' ');

  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <h1 className="capitalize">Looking for a {displayName} alternative?</h1>
        <p className="mt-3 max-w-[760px] text-secondary/70 dark:text-accent/70">
          Schedulaa offers unified scheduling, payroll workflow support, and website booking so teams can operate from
          one platform.
        </p>
        <div className="mt-8 rounded-xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
          <ul className="space-y-3 text-secondary/80 dark:text-accent/80">
            <li>• Reduce tool sprawl with one operations stack</li>
            <li>• Manage team schedules and shift workflows</li>
            <li>• Launch a booking-enabled public website</li>
          </ul>
          <Link href="/signup" className="btn btn-primary hover:btn-secondary dark:hover:btn-accent mt-7 inline-flex">Get started</Link>
        </div>
      </section>
    </main>
  );
}
