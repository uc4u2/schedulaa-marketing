import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Client 360 Customer Management for Service Teams | Schedulaa',
  description:
    'Use one connected client workspace for appointments, balances, estimates, invoices, work orders, notes, documents and follow-up actions.',
};

export default function MarketingClients360Page() {
  return (
    <main className="section-padding-x pb-24 pt-20">
      <div className="mx-auto max-w-4xl">
        <p className="badge badge-yellow-v2">Client 360</p>
        <h1 className="mt-4 text-4xl font-semibold text-secondary dark:text-white">
          A connected customer workspace for service teams
        </h1>
        <p className="mt-5 text-lg text-secondary/75 dark:text-accent/70">
          Bring booking history, upcoming appointments, balances, estimates, invoices, work orders, notes and private
          documents into a single client record.
        </p>
        <div className="mt-8 space-y-4 text-secondary/80 dark:text-accent/75">
          <p>
            Book a customer, create an estimate or work order, issue an invoice, record an offline payment, or send
            supported follow-up from the relevant workflow.
          </p>
          <p>
            Use timeline and insight context to help the front desk and operations team work from shared information
            rather than disconnected exports.
          </p>
          <p>
            Private notes, documents and photos remain tenant-scoped. Document reminders, review requests, payment
            collection and secure card-update links appear only when their prerequisites are configured.
          </p>
          <p>
            Client 360 is a customer-operations workspace. A manual follow-up is not an automated marketing campaign,
            and private records are not a medical-record certification claim.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/en/features#client-360-and-communications" className="btn btn-primary btn-md">
            See connected workflows
          </Link>
          <Link href="/en/business-finance/invoices" className="btn btn-secondary btn-md">
            Explore estimates and invoices
          </Link>
        </div>
      </div>
    </main>
  );
}
