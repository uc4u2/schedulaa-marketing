import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Acceptable Use Policy | Schedulaa',
  description: 'Acceptable use standards for platform behavior, billing integrity, and abuse prevention.',
};

export default function AcceptableUsePage() {
  return (
    <main className="section-padding-x pb-24 pt-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold text-secondary dark:text-white">Acceptable Use Policy</h1>
        <p className="mt-6 text-secondary/80 dark:text-accent/75">
          This policy explains prohibited activity, abuse prevention standards, and security expectations when using Schedulaa
          services and connected resources.
        </p>
        <p className="mt-4 text-secondary/80 dark:text-accent/75">
          Prohibited behavior includes payment testing, stolen-card use, synthetic identity creation, intentional chargeback abuse,
          credential theft attempts, and any effort to bypass billing or security controls.
        </p>
        <p className="mt-4 text-secondary/80 dark:text-accent/75">
          Violations may result in immediate review hold, service restrictions, or account suspension.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/terms" className="btn btn-primary btn-sm">Terms</Link>
          <Link href="/security" className="btn btn-secondary btn-sm">Security</Link>
        </div>
      </div>
    </main>
  );
}
