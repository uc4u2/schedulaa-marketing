import Link from 'next/link';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

const vendors = ['adp', 'deputy', 'gusto', 'homebase', 'quickbooks', 'vagaro'];

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Alternatives | Schedulaa',
};

export default function AlternativesHubPage() {
  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <h1>Schedulaa alternatives pages</h1>
        <p className="mt-3 max-w-[760px] text-secondary/70 dark:text-accent/70">
          Evaluate alternatives with focus on service-team scheduling, payroll operations, and website booking.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {vendors.map((vendor) => (
            <li key={vendor}>
              <Link href={`/alternatives/${vendor}`} className="block rounded-xl border border-stroke-2 bg-white p-4 capitalize transition hover:border-primary-500 dark:border-stroke-7 dark:bg-background-8">
                {vendor.replace('-', ' ')} alternative
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
