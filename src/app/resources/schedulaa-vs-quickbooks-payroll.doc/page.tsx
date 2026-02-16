import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Schedulaa vs QuickBooks Payroll (.doc)',
  description: 'Legacy document URL for Schedulaa vs QuickBooks Payroll comparison.',
};

export default function SchedulaaVsQuickBooksPayrollDocPage() {
  return (
    <main className="section-padding-x pb-24 pt-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold text-secondary dark:text-white">Schedulaa vs QuickBooks Payroll document</h1>
        <p className="mt-4 text-secondary/80 dark:text-accent/75">
          This legacy document route is active for SEO and backlink parity. You can continue to use this URL, or open the updated
          resource page for the latest summary.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/resources/schedulaa-vs-quickbooks-payroll" className="btn btn-primary btn-md">
            Open resource page
          </Link>
          <Link href="/compare/quickbooks-payroll" className="btn btn-secondary btn-md">
            Open compare page
          </Link>
        </div>
      </div>
    </main>
  );
}
