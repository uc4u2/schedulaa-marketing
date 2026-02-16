import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Email Campaigns for Service Teams | Schedulaa',
  description:
    'Launch targeted email campaigns using real booking and operations data, not disconnected lists.',
};

export default function EmailCampaignsPage() {
  return (
    <main className="section-padding-x pb-24 pt-20">
      <div className="mx-auto max-w-4xl">
        <p className="badge badge-yellow-v2">Marketing workflows</p>
        <h1 className="mt-4 text-4xl font-semibold text-secondary dark:text-white">Email campaigns built from real operations data</h1>
        <p className="mt-5 text-lg text-secondary/75 dark:text-accent/70">
          Schedulaa helps service businesses run campaign workflows based on booking behavior, visit cycles, and retention signals.
        </p>
        <div className="mt-8 space-y-4 text-secondary/80 dark:text-accent/75">
          <p>Send reactivation campaigns for clients who have not booked within their expected interval.</p>
          <p>Build upsell campaigns from completed service categories instead of static contact tags.</p>
          <p>Keep messaging and offers aligned with what your team can actually deliver this week.</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/marketing" className="btn btn-primary btn-md">Back to marketing hub</Link>
          <Link href="/pricing" className="btn btn-secondary btn-md">See pricing</Link>
        </div>
      </div>
    </main>
  );
}
