import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Terms | Schedulaa',
  description: 'Terms governing use of Schedulaa services, including billing, fraud controls, and account enforcement.',
};

export default function TermsPage() {
  return (
    <main className="section-padding-x pb-24 pt-20">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold text-secondary dark:text-white">Terms of Service</h1>
          <p className="text-secondary/80 dark:text-accent/75">
            Last updated: March 1, 2026. By using Schedulaa, you agree to these terms.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Account and service use</h2>
          <ul className="list-disc space-y-2 pl-6 text-secondary/80 dark:text-accent/75">
            <li>You are responsible for account security, credentials, and activity under your workspace.</li>
            <li>You must provide accurate business and billing information.</li>
            <li>You may not use Schedulaa for unlawful activity, payment abuse, or security testing without authorization.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Billing, fraud, and payment controls</h2>
          <ul className="list-disc space-y-2 pl-6 text-secondary/80 dark:text-accent/75">
            <li>
              We may apply risk controls to protect the platform and customers, including attempt limits, additional authentication,
              and payment method restrictions.
            </li>
            <li>Subscriptions may be blocked or reviewed when fraud risk is elevated.</li>
            <li>
              We may place accounts in review hold or suspend access after fraud warnings, disputes, or confirmed abuse.
            </li>
            <li>
              If a payment is charged back or reversed, we may limit features or terminate service as permitted by law and contract.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Disputes and evidence</h2>
          <p className="text-secondary/80 dark:text-accent/75">
            For payment disputes, Schedulaa may provide transaction and account activity evidence to payment processors and card
            networks, including timestamps, service usage signals, and billing event history.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Limitation of liability</h2>
          <p className="text-secondary/80 dark:text-accent/75">
            Except where prohibited by law, Schedulaa is provided as-is and liability is limited to the maximum extent permitted.
          </p>
        </section>

        <div className="flex gap-3">
          <Link href="/privacy" className="btn btn-primary btn-sm">Privacy</Link>
          <Link href="/acceptable-use" className="btn btn-secondary btn-sm">Acceptable Use</Link>
        </div>
      </div>
    </main>
  );
}
