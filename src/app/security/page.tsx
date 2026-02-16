import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Security Overview | Schedulaa',
  description: 'Security posture summary for Schedulaa platform and public services.',
};

export default function SecurityPage() {
  return (
    <main className="section-padding-x pb-24 pt-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold text-secondary dark:text-white">Security overview</h1>
        <p className="mt-6 text-secondary/80 dark:text-accent/75">
          Schedulaa applies layered controls across authentication, transport security, role-based access, and operational logging.
          Security standards are reviewed continuously as the product and customer footprint evolve.
        </p>
        <p className="mt-4 text-secondary/80 dark:text-accent/75">
          For additional assurances and implementation details, contact support with your organization requirements.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/client/support" className="btn btn-primary btn-sm">Support</Link>
          <Link href="/privacy" className="btn btn-secondary btn-sm">Privacy</Link>
        </div>
      </div>
    </main>
  );
}
