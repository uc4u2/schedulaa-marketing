import Link from 'next/link';
import { headers } from 'next/headers';
import { Metadata } from 'next';

import Hero from '@/components/home/Hero';
import FeaturesV2 from '@/components/home/FeaturesV2';
import SuccessStats from '@/components/home/SuccessStats';
import WhyUs from '@/components/home/WhyUs';
import { defaultMetadata } from '@/utils/generateMetaData';
import { AppLocale, withLocalePath } from '@/utils/locale';

const getLocale = async (): Promise<AppLocale> => {
  const h = await headers();
  return h.get('x-locale') === 'fa' ? 'fa' : 'en';
};

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Schedulaa | Scheduling, Booking, Payroll and Websites',
  description:
    'Schedulaa gives service teams one operating system for booking, workforce scheduling, payroll-ready exports, and website commerce.',
  openGraph: {
    title: 'Schedulaa | Scheduling, Booking, Payroll and Websites',
    description:
      'Schedulaa gives service teams one operating system for booking, workforce scheduling, payroll-ready exports, and website commerce.',
    url: 'https://www.schedulaa.com/en',
  },
  twitter: {
    title: 'Schedulaa | Scheduling, Booking, Payroll and Websites',
    description:
      'Schedulaa gives service teams one operating system for booking, workforce scheduling, payroll-ready exports, and website commerce.',
  },
};

export default async function Homepage() {
  const locale = await getLocale();

  return (
    <>
      <Hero />
      <SuccessStats />
      <FeaturesV2 />
      <WhyUs />

      <section className="bg-background-2 dark:bg-background-5 py-20 lg:py-[110px]">
        <div className="main-container grid gap-6 lg:grid-cols-2">
          <div className="dark:bg-background-8 rounded-[20px] bg-white p-6 md:p-8">
            <span className="badge badge-green-v2">Compare</span>
            <h3 className="mt-5">Evaluate Schedulaa side-by-side</h3>
            <p className="mt-2">
              Compare booking, scheduling, payroll workflows, and operating visibility before migration.
            </p>
            <div className="mt-6 grid gap-3">
              <Link href={withLocalePath('/compare/vagaro', locale)} className="footer-link-v2 w-fit">
                Schedulaa vs Vagaro
              </Link>
              <Link href={withLocalePath('/compare/square-appointments', locale)} className="footer-link-v2 w-fit">
                Schedulaa vs Square Appointments
              </Link>
              <Link href={withLocalePath('/compare/quickbooks-payroll', locale)} className="footer-link-v2 w-fit">
                Schedulaa vs QuickBooks Payroll
              </Link>
            </div>
            <Link href={withLocalePath('/compare', locale)} className="btn btn-secondary btn-md mt-7 inline-block">
              View compare hub
            </Link>
          </div>

          <div className="dark:bg-background-8 rounded-[20px] bg-white p-6 md:p-8">
            <span className="badge badge-green-v2">Industry pages</span>
            <h3 className="mt-5">Explore booking use-cases</h3>
            <p className="mt-2">Choose the workflow guide that matches your service model.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link href={withLocalePath('/booking/spa', locale)} className="footer-link-v2 w-fit">
                Spa booking
              </Link>
              <Link href={withLocalePath('/booking/salon', locale)} className="footer-link-v2 w-fit">
                Salon booking
              </Link>
              <Link href={withLocalePath('/booking/doctor', locale)} className="footer-link-v2 w-fit">
                Doctor booking
              </Link>
              <Link href={withLocalePath('/booking/tutor', locale)} className="footer-link-v2 w-fit">
                Tutor booking
              </Link>
            </div>
            <Link href={withLocalePath('/booking', locale)} className="btn btn-secondary btn-md mt-7 inline-block">
              View booking hub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
