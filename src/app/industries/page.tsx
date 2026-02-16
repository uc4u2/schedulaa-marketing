import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Industries | Schedulaa',
};

export default function IndustriesPage() {
  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">Industries</p>
          <h1 className="mt-5">Industry playbooks for service businesses</h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">See how booking, workforce, marketing, and payroll workflows map to your team’s operating model.</p>
        </div>
      </section>
    </main>
  );
}
