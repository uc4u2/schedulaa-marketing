import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Platform Overview | Schedulaa',
  description:
    'See how Schedulaa unifies booking, scheduling, payroll, website, and marketing workflows in one platform.',
};

export default function PlatformPage() {
  return (
    <main className="section-padding-x pb-24 pt-20">
      <div className="mx-auto max-w-4xl">
        <p className="badge badge-yellow-v2">Platform</p>
        <h1 className="mt-4 text-4xl font-semibold text-secondary dark:text-white">One operating platform for service businesses</h1>
        <p className="mt-5 text-lg text-secondary/75 dark:text-accent/70">
          Schedulaa combines scheduling, payroll operations, website booking, and marketing workflows so your team works from one source of truth.
        </p>
        <div className="mt-8 space-y-4 text-secondary/80 dark:text-accent/75">
          <p>Booking feeds schedule demand. Schedule feeds time tracking. Time feeds payroll review and exports.</p>
          <p>Client communication and campaign workflows stay connected to real service history.</p>
          <p>This reduces tool switching and prevents data drift across departments.</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/features" className="btn btn-primary btn-md">Explore features</Link>
          <Link href="/pricing" className="btn btn-secondary btn-md">See plans</Link>
        </div>
      </div>
    </main>
  );
}
