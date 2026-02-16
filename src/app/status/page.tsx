import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Status | Schedulaa',
};

export default function StatusPage() {
  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">Status</p>
          <h1 className="mt-5">Platform status and reliability updates</h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">Track uptime, incident updates, and recovery notices for Schedulaa services.</p>
        </div>
      </section>
    </main>
  );
}
