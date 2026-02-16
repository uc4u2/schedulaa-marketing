import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Schedulaa vs QuickBooks Payroll Resource',
  description:
    'Download and review the Schedulaa vs QuickBooks Payroll comparison summary for operations teams.',
};

export default function SchedulaaVsQuickBooksPayrollResourcePage() {
  return (
    <main className="section-padding-x pb-24 pt-20">
      <div className="mx-auto max-w-4xl">
        <p className="badge badge-yellow-v2">Resource</p>
        <h1 className="mt-4 text-4xl font-semibold text-secondary dark:text-white">Schedulaa vs QuickBooks Payroll</h1>
        <div className="mt-6 space-y-4 text-secondary/80 dark:text-accent/75">
          <p>This resource summarizes key differences between an operations-first workflow and accounting-first payroll tooling.</p>
          <p>Use it with your internal stakeholders when evaluating scheduling-to-payroll continuity, reporting, and rollout impact.</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/resources/schedulaa-vs-quickbooks-payroll.doc" className="btn btn-primary btn-md">
            Download .doc
          </a>
          <Link href="/compare/quickbooks-payroll" className="btn btn-secondary btn-md">
            View compare page
          </Link>
        </div>
      </div>
    </main>
  );
}
