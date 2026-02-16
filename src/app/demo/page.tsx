import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Demo | Schedulaa',
};

export default function DemoPage() {
  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">Demo / Test Drive</p>
          <h1 className="mt-5">Try the product quickly</h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">Book a demo to review scheduling, workforce, payroll, marketing, and website workflows in one session.</p>
        </div>
      </section>
    </main>
  );
}
