import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Client 360 Marketing View | Schedulaa',
  description:
    'Use a unified client profile that combines booking history, campaign interactions, and retention status.',
};

export default function MarketingClients360Page() {
  return (
    <main className="section-padding-x pb-24 pt-20">
      <div className="mx-auto max-w-4xl">
        <p className="badge badge-yellow-v2">Client intelligence</p>
        <h1 className="mt-4 text-4xl font-semibold text-secondary dark:text-white">Client 360 view for retention and upsell planning</h1>
        <p className="mt-5 text-lg text-secondary/75 dark:text-accent/70">
          Schedulaa combines client booking history and engagement context so teams can personalize follow-up without fragmented tools.
        </p>
        <div className="mt-8 space-y-4 text-secondary/80 dark:text-accent/75">
          <p>Understand frequency, service preferences, and engagement patterns in one profile.</p>
          <p>Build segments for loyalty campaigns, reactivation offers, and premium service outreach.</p>
          <p>Help front desk and marketing teams operate from shared context instead of disconnected exports.</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/marketing" className="btn btn-primary btn-md">Back to marketing hub</Link>
          <Link href="/compare/quickbooks" className="btn btn-secondary btn-md">Compare with QuickBooks</Link>
        </div>
      </div>
    </main>
  );
}
