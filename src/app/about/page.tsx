import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'About Schedulaa',
  description:
    'Schedulaa builds operations software for service businesses across booking, workforce scheduling, and payroll workflows.',
};

export default function AboutPage() {
  return (
    <main className="section-padding-x pb-24 pt-20">
      <div className="mx-auto max-w-4xl">
        <p className="badge badge-yellow-v2">About</p>
        <h1 className="mt-4 text-4xl font-semibold text-secondary dark:text-white">Built for real service operations</h1>
        <div className="mt-6 space-y-4 text-secondary/80 dark:text-accent/75">
          <p>
            Schedulaa exists to remove friction between front-line operations and back-office execution. Service teams should not
            need five disconnected tools to run bookings, schedules, payroll preparation, and client communication.
          </p>
          <p>
            Our approach is practical: connect operational records into one workflow, surface clear audit trails, and keep teams
            moving with fewer manual handoffs. That helps businesses scale without losing service quality.
          </p>
          <p>
            We support teams in Canada and the United States with transparent product boundaries and clear implementation guidance.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary btn-md">Contact the team</Link>
          <Link href="/demo" className="btn btn-secondary btn-md">Book a demo</Link>
        </div>
      </div>
    </main>
  );
}
