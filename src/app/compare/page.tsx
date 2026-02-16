import Link from 'next/link';
import { compareList } from '@/legacy-content/compare/config';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Schedulaa comparisons | Compare competitors',
  description: 'Compare Schedulaa with leading booking, scheduling, and payroll platforms for service teams.',
};

export default function CompareHubPage() {
  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">Compare hub</p>
          <h1 className="mt-5">Schedulaa comparisons</h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">
            Side-by-side comparison guides for teams evaluating Schedulaa against other platforms.
          </p>
          <p className="mt-4 text-secondary/70 dark:text-accent/70">
            Most comparison pages focus on feature checklists. That is not why Schedulaa was built. Service teams do
            not struggle with payroll in isolation. They struggle with everything that happens before payroll,
            including shift changes, break compliance, and late approvals.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {compareList.map((item) => (
            <div key={item.key} className="rounded-xl border border-stroke-2 bg-white p-5 dark:border-stroke-7 dark:bg-background-8">
              <p className="text-xs uppercase tracking-wide text-primary-500">{item.competitor}</p>
              <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-secondary/70 dark:text-accent/70">{item.description}</p>
              <Link href={`/compare/${item.key}`} className="mt-3 inline-block text-primary-500 underline">
                View comparison
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
