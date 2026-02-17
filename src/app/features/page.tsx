import Link from 'next/link';
import { headers } from 'next/headers';
import { Metadata } from 'next';

import Feature from '@/components/features/Feature';
import Features from '@/components/features/Features';
import Reviews from '@/components/features/Reviews';
import WhyChooseUs from '@/components/features/WhyChooseUs';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { AppLocale, withLocalePath } from '@/utils/locale';

const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.schedulaa.com';

const getLocale = async (): Promise<AppLocale> => {
  const h = await headers();
  return h.get('x-locale') === 'fa' ? 'fa' : 'en';
};

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Schedulaa Platform Features | Scheduling, Payroll, and Online Sales Unified',
  description:
    'Schedulaa unifies scheduling, payroll, hiring, website building, and eCommerce for teams. Sell services or products, automate payments, and manage multi-branch operations in one platform.',
  openGraph: {
    title: 'Schedulaa Platform Features',
    description: 'Book clients, sell products, pay your team - all from one platform.',
    url: 'https://www.schedulaa.com/en/features',
  },
  twitter: {
    title: 'Schedulaa Platform Features',
    description: 'Book clients, sell products, pay your team - all from one platform.',
  },
};

export default async function FeaturesPage() {
  const locale = await getLocale();

  return (
    <main className="bg-background-3 dark:bg-background-7 overflow-x-hidden">
      <Features />
      <Feature />
      <WhyChooseUs />
      <Reviews />

      <CTA
        className="bg-background-2 dark:bg-background-7"
        badgeText="Get started"
        badgeClass="!badge-cyan"
        ctaHeading="Run your service operations from one connected platform"
        description="Bring booking, scheduling, payroll workflows, and website operations into one stack."
        descriptionClass="text-secondary/60"
        btnClass="hover:btn-secondary dark:hover:btn-white"
        ctaBtnText="Get started"
      />

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
            <span className="badge badge-green-v2">Next step</span>
            <h3 className="mt-5">Start your rollout with your current team</h3>
            <p className="mt-2">
              Move from disconnected tools to a unified operations stack with a phased launch plan.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`${APP_ORIGIN}/register`} className="btn btn-primary hover:btn-white dark:hover:btn-accent">
                Start free trial
              </a>
              <Link href={withLocalePath('/demo', locale)} className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                Book demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
