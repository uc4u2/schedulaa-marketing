import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { marketingPages } from '@/legacy-content/marketing/config';
import Link from 'next/link';

export default function MarketingPage() {
  return (
    <>
      <LegacyConfigPage config={marketingPages.hub} />
      <section className="section-padding-x pb-20">
        <div className="mx-auto max-w-6xl rounded-2xl border border-stroke-2 p-6 dark:border-stroke-7">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Marketing subpages</h2>
          <p className="mt-3 text-secondary/75 dark:text-accent/70">
            Deep-dive pages for email, analytics, and client intelligence workflows.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/marketing/email-campaigns" className="btn btn-outline btn-sm">Email campaigns</Link>
            <Link href="/marketing/analytics-dashboard" className="btn btn-outline btn-sm">Analytics dashboard</Link>
            <Link href="/marketing/clients-360" className="btn btn-outline btn-sm">Clients 360</Link>
          </div>
        </div>
      </section>
    </>
  );
}
