import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Staffing Formulas for Service Teams | Schedulaa',
  description:
    'Use practical staffing formulas to plan coverage, utilization, and labor alignment with booking demand.',
};

export default function StaffingFormulasPage() {
  return (
    <main className="section-padding-x pb-24 pt-20">
      <div className="mx-auto max-w-4xl">
        <p className="badge badge-yellow-v2">Resources</p>
        <h1 className="mt-4 text-4xl font-semibold text-secondary dark:text-white">Staffing formulas that help teams plan capacity</h1>
        <div className="mt-6 space-y-4 text-secondary/80 dark:text-accent/75">
          <p>Coverage ratio: scheduled labor hours divided by forecasted service hours for the period.</p>
          <p>Utilization: productive hours divided by scheduled hours, tracked by team and location.</p>
          <p>Buffer planning: reserve a percentage of capacity for overruns, same-day requests, and disruptions.</p>
          <p>
            These formulas are most effective when booking and scheduling data are connected. Schedulaa helps teams calculate and
            review these values from one workflow.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/workforce" className="btn btn-primary btn-md">Workforce page</Link>
          <Link href="/demo" className="btn btn-secondary btn-md">Request a walkthrough</Link>
        </div>
      </div>
    </main>
  );
}
