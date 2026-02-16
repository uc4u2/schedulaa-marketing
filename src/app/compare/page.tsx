import Link from 'next/link';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

const vendors = ['adp', 'deputy', 'gusto', 'homebase', 'quickbooks', 'square-appointments'];

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Compare | Schedulaa',
};

export default function CompareHubPage() {
  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <h1>Compare Schedulaa with other platforms</h1>
        <p className="mt-3 max-w-[760px] text-secondary/70 dark:text-accent/70">
          See how Schedulaa compares on scheduling, payroll operations, and website booking workflows.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {vendors.map((vendor) => (
            <li key={vendor}>
              <Link href={`/compare/${vendor}`} className="block rounded-xl border border-stroke-2 bg-white p-4 capitalize transition hover:border-primary-500 dark:border-stroke-7 dark:bg-background-8">
                schedulaa vs {vendor.replace('-', ' ')}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
