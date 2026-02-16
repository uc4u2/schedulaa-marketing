import Link from 'next/link';
import { compareList } from '@/legacy-content/compare/config';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Schedulaa alternatives | Compare competitors',
  description: 'Explore Schedulaa alternatives to popular scheduling, payroll, and booking platforms.',
};

export default function AlternativesHubPage() {
  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">Alternatives hub</p>
          <h1 className="mt-5">Schedulaa alternatives</h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">
            Compare Schedulaa with popular booking, scheduling, and payroll platforms. Each guide focuses on
            operations, compliance, and service-team workflows.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {compareList.map((item) => (
            <div key={item.key} className="rounded-xl border border-stroke-2 bg-white p-5 dark:border-stroke-7 dark:bg-background-8">
              <p className="text-xs uppercase tracking-wide text-primary-500">{item.competitor}</p>
              <h2 className="mt-2 text-lg font-semibold">{item.competitor} alternatives</h2>
              <p className="mt-2 text-sm text-secondary/70 dark:text-accent/70">{item.description}</p>
              <Link href={`/alternatives/${item.slug}`} className="mt-3 inline-block text-primary-500 underline">
                View alternatives guide
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
