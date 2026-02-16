import Link from 'next/link';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Payroll | Schedulaa',
};

export default function PayrollPage() {
  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">Payroll</p>
          <h1 className="mt-5">Payroll workflows built for service teams</h1>
          <p className="mt-4 max-w-[760px] text-secondary/70 dark:text-accent/70">
            Run payroll with fewer manual edits by connecting approved schedules and tracked hours directly to your
            payroll operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/payroll/canada" className="btn btn-primary hover:btn-secondary dark:hover:btn-accent">Canada Payroll</Link>
            <Link href="/payroll/usa" className="btn btn-primary-v2 dark:btn-transparent">US Payroll</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
