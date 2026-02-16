import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Payroll Compliance Webinar | Schedulaa',
  description:
    'Watch the Schedulaa payroll compliance webinar for practical guidance on operational controls and cross-border payroll workflows.',
};

export default function PayrollComplianceWebinarPage() {
  return (
    <main className="section-padding-x pb-24 pt-20">
      <div className="mx-auto max-w-4xl">
        <p className="badge badge-yellow-v2">Webinar</p>
        <h1 className="mt-4 text-4xl font-semibold text-secondary dark:text-white">Payroll compliance webinar</h1>
        <div className="mt-6 space-y-4 text-secondary/80 dark:text-accent/75">
          <p>Learn how operations teams can reduce payroll risk by aligning scheduling, attendance, and payroll review checkpoints.</p>
          <p>
            This webinar covers common implementation pitfalls, how to communicate product boundaries clearly, and how to build an
            auditable finalize workflow.
          </p>
          <p>We also cover reporting expectations for stakeholders and year-end readiness for export-driven teams.</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/payroll" className="btn btn-primary btn-md">Explore payroll</Link>
          <Link href="/contact" className="btn btn-secondary btn-md">Request enterprise session</Link>
        </div>
      </div>
    </main>
  );
}
