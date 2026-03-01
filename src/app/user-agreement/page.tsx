import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'User Agreement | Schedulaa',
  description: 'User responsibilities for account security, billing accuracy, and lawful platform use.',
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
          Users are responsible for safeguarding credentials, maintaining accurate account and billing details, and ensuring
          that payment methods used on the platform are authorized.
        </p>
        <p className="mt-4 text-secondary/80 dark:text-accent/75">
          Schedulaa may require additional verification, apply billing safeguards, or restrict account access when fraudulent
          activity is suspected.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/terms" className="btn btn-primary btn-sm">Terms</Link>
          <Link href="/privacy" className="btn btn-secondary btn-sm">Privacy</Link>
        </div>
      </div>
    </main>
  );
}
