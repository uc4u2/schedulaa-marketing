import { defaultMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Account and Data Deletion | Schedulaa',
  description:
    'How to request account deletion or personal data deletion for the Schedulaa app and platform.',
  alternates: {
    canonical: 'https://www.schedulaa.com/account-deletion',
  },
};

export default function AccountDeletionPage() {
  return (
    <main className="section-padding-x pb-24 pt-32 md:pt-36">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold text-secondary dark:text-white">Account and Data Deletion</h1>
          <p className="text-secondary/80 dark:text-accent/75">
            Last updated: April 23, 2026. This page explains how users of the Schedulaa app and platform can request
            account deletion or personal data deletion. Schedulaa is operated by Photo Artisto Corp.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">How to request deletion</h2>
          <p className="text-secondary/80 dark:text-accent/75">
            To request account deletion or personal data deletion, email{' '}
            <a href="mailto:admin@schedulaa.com" className="text-primary-500 underline">
              admin@schedulaa.com
            </a>
            .
          </p>
          <ul className="list-disc space-y-2 pl-6 text-secondary/80 dark:text-accent/75">
            <li>Suggested subject: “Account deletion request”</li>
            <li>Suggested subject: “Personal data deletion request”</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">What to include</h2>
          <p className="text-secondary/80 dark:text-accent/75">
            Include the email address associated with the account, your workspace or company name if applicable, and
            whether you want full account deletion or deletion of specific personal data only.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">What may be deleted</h2>
          <p className="text-secondary/80 dark:text-accent/75">
            Where legally possible, Schedulaa may delete account profile data, workspace and user records, uploaded
            files and images, and operational records that are no longer required for service delivery, security,
            compliance, or legal obligations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">What may be retained</h2>
          <p className="text-secondary/80 dark:text-accent/75">
            Schedulaa may retain billing records, fraud and security logs, legal and compliance records, dispute and
            audit records, invoices, and backup data for a limited retention period where required by law, contract,
            security practice, or legitimate business obligations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Response timeframe</h2>
          <p className="text-secondary/80 dark:text-accent/75">
            Schedulaa will review deletion requests and respond within a reasonable timeframe, normally within 30 days
            where applicable law allows.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Service impact</h2>
          <p className="text-secondary/80 dark:text-accent/75">
            Deleting account data or personal data may reduce or remove access to Schedulaa services, including login,
            workspace records, bookings, payroll workflows, support history, and other platform features.
          </p>
        </section>

        <div className="flex gap-3">
          <Link href="/privacy" className="btn btn-primary btn-sm">
            Privacy
          </Link>
          <Link href="/contact" className="btn btn-secondary btn-sm">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
