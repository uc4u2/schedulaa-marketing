import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { bookingPages } from '@/legacy-content/booking/config';
import Link from 'next/link';

export default function BookingPage() {
  return (
    <>
      <LegacyConfigPage config={bookingPages.hub} />
      <section className="section-padding-x pb-20">
        <div className="mx-auto max-w-6xl rounded-2xl border border-stroke-2 p-6 dark:border-stroke-7">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Industry booking pages</h2>
          <p className="mt-3 text-secondary/75 dark:text-accent/70">
            Explore booking workflows tailored for common service models.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/booking/salon" className="btn btn-outline btn-sm">Salon booking</Link>
            <Link href="/booking/spa" className="btn btn-outline btn-sm">Spa booking</Link>
            <Link href="/booking/tutor" className="btn btn-outline btn-sm">Tutor booking</Link>
            <Link href="/booking/doctor" className="btn btn-outline btn-sm">Doctor booking</Link>
          </div>
        </div>
      </section>
    </>
  );
}
