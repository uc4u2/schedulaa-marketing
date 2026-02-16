import Link from 'next/link';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Payroll USA | Schedulaa',
};

export default function PayrollUsaPage() {
  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">United States</p>
          <h1 className="mt-5">US payroll workflows for growing teams</h1>
          <p className="mt-4 max-w-[760px] text-secondary/70 dark:text-accent/70">
            Keep payroll operations consistent with structured approvals, tracked hours, and centralized reporting.
          </p>
          <div className="mt-8">
            <Link href="/signup" className="btn btn-primary hover:btn-secondary dark:hover:btn-accent">Get started</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
