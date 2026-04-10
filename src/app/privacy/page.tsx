import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Privacy | Schedulaa',
  description: 'How Schedulaa collects, uses, and protects personal data, including fraud and billing-risk controls.',
};

export default function PrivacyPage() {
  return (
    <main className="section-padding-x pb-24 pt-20">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold text-secondary dark:text-white">Privacy Policy</h1>
          <p className="text-secondary/80 dark:text-accent/75">
            Last updated: April 10, 2026. This policy describes how Schedulaa collects, uses, stores, and shares personal
            data when you use our website, applications, and connected billing services.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Data we collect</h2>
          <ul className="list-disc space-y-2 pl-6 text-secondary/80 dark:text-accent/75">
            <li>Account profile data, organization details, and workspace configuration.</li>
            <li>Operational product data such as bookings, schedules, and service activity.</li>
            <li>Billing and payment metadata from payment providers (for example Stripe IDs, invoice state, and card attributes).</li>
            <li>Security and anti-fraud signals such as IP address, request timestamps, user agent, and risk events.</li>
            <li>Punch-location evidence, if enabled by a company, such as employee/device location captured when an employee taps Clock In or Clock Out.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">How we use data</h2>
          <ul className="list-disc space-y-2 pl-6 text-secondary/80 dark:text-accent/75">
            <li>Provide and secure Schedulaa services.</li>
            <li>Process subscriptions, invoices, and payments.</li>
            <li>Detect abuse, prevent fraud, and investigate suspicious billing behavior.</li>
            <li>Support attendance verification, manager review, operational security, and timekeeping review.</li>
            <li>Respond to payment disputes and legal/regulatory requests.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Punch location evidence</h2>
          <p className="text-secondary/80 dark:text-accent/75">
            If a company enables punch-location evidence, Schedulaa may collect employee/device location only when an
            employee taps Clock In or Clock Out. This evidence is used for attendance verification, manager review,
            operational security, and timekeeping review. Location data is collected only when the employee initiates a
            clock-in or clock-out action.
          </p>
          <p className="text-secondary/80 dark:text-accent/75">
            Schedulaa does not use this feature for background location tracking or continuous location monitoring. If
            location is unavailable, denied, unsupported, or times out, employees may still be able to clock in or out
            depending on the product flow. Punch-location evidence is advisory for manager review and is not continuous
            surveillance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Fraud prevention controls</h2>
          <p className="text-secondary/80 dark:text-accent/75">
            To reduce card abuse and account takeover risk, Schedulaa may apply risk-based controls including attempt limits,
            3D Secure challenges, prepaid-card restrictions for subscriptions, and temporary billing review holds.
          </p>
          <p className="text-secondary/80 dark:text-accent/75">
            We may retain fraud-attempt and fraud-event records for limited periods to support operational security,
            dispute response, and compliance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Data sharing</h2>
          <p className="text-secondary/80 dark:text-accent/75">
            We share data with trusted subprocessors only as needed to operate the platform (for example payments, infrastructure,
            email delivery, and security tooling). Payment data is handled by PCI-compliant payment providers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Your rights</h2>
          <p className="text-secondary/80 dark:text-accent/75">
            Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict certain personal data.
            To submit a request, contact us through support.
          </p>
        </section>

        <div className="flex gap-3">
          <Link href="/security" className="btn btn-primary btn-sm">Security</Link>
          <Link href="/data-processing" className="btn btn-secondary btn-sm">Data Processing</Link>
        </div>
      </div>
    </main>
  );
}
