import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'User Agreement | Schedulaa',
  description: 'User agreement terms for Schedulaa service usage and responsibilities.',
};

export default function UserAgreementPage() {
  return (
    <main className="section-padding-x pb-24 pt-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold text-secondary dark:text-white">User Agreement</h1>
        <p className="mt-6 text-secondary/80 dark:text-accent/75">
          The user agreement defines account responsibilities, acceptable platform usage, and core service expectations between
          Schedulaa and customer users.
        </p>
        <p className="mt-4 text-secondary/80 dark:text-accent/75">
          For full contractual terms and privacy details, review linked legal pages below.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/terms" className="btn btn-primary btn-sm">Terms</Link>
          <Link href="/privacy" className="btn btn-secondary btn-sm">Privacy</Link>
        </div>
      </div>
    </main>
  );
}
