import Link from 'next/link';
import { headers } from 'next/headers';
import { Metadata } from 'next';

import AiMobileFeaturesSection from '@/components/features/AiMobileFeaturesSection';
import { defaultMetadata } from '@/utils/generateMetaData';
import { AppLocale, withLocalePath } from '@/utils/locale';

const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.schedulaa.com';

const getLocale = async (): Promise<AppLocale> => {
  const h = await headers();
  return h.get('x-locale') === 'fa' ? 'fa' : 'en';
};

const highlightCards = [
  {
    title: 'Smarter Scheduling & Booking',
    description:
      'Live department-based service lists, recurring templates, and branded booking modals embedded anywhere.',
    points: [
      'Recurring availability and editable slots (Vagaro-style).',
      'Clients can book multiple services, add-ons, or providers in one flow.',
      'Embed branded booking widgets on partner sites or custom domains.',
      'Shift swaps and leave approvals built into staff scheduling.',
    ],
  },
  {
    title: 'Payroll & Compliance',
    description:
      'Run region-aware payroll with YTD summaries, tax exports, and self-serve employee portals.',
    points: [
      'Overtime, tips, and holidays calculated automatically.',
      'Export-ready tax forms (W-2, T4, ROE).',
      'Integrated with Stripe payouts for fast, secure deposits.',
      'Auto-recalc and audit-ready reports for US + Canada (except QC).',
    ],
  },
  {
    title: 'Commerce, Analytics, and Marketing',
    description:
      'Sell products and services together, automate campaigns, and measure results in one dashboard.',
    points: [
      'Mixed carts for products and services with add-ons and coupons.',
      'Stripe Checkout with built-in refund and tax automation.',
      'Analytics for revenue, utilization, churn, and top-performing services.',
      'Win-back, VIP, and no-show recovery campaigns included.',
    ],
  },
];

const platformPillars = [
  {
    icon: '01',
    title: 'Unified Booking & Scheduling',
    points: [
      'Real-time client bookings with service selection and self-serve rescheduling.',
      'Employee availability, shift templates, and multi-branch support.',
      'Shift swaps, leave requests, and recurring availability rules.',
      'Automated reminders, digital tips, reviews, and post-visit feedback collection.',
    ],
  },
  {
    icon: '02',
    title: 'Powerful Payroll & HR',
    points: [
      'Canada + 45 U.S. states supported (EI, CPP, automated stat holiday pay, W-2, T4, ROE).',
      'Pay-rate assignment per employee, overtime tiers, province/state holiday rules, and deductions.',
      'Export payroll journals or plug into remittance APIs for hands-free filing.',
      'Employee onboarding, time tracking, and performance workflows in one place.',
    ],
  },
  {
    icon: '03',
    title: 'Website + Commerce Layer',
    points: [
      'Drag-and-drop website builder with booking and product sales.',
      'Custom domains, email validation (SPF/DKIM), and built-in payment links.',
      'Inventory and service catalog in a shared storefront.',
      'Marketing-ready pages with one-click campaigns and analytics.',
    ],
  },
];

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
      <section className="overflow-hidden pt-[150px] pb-20 md:pt-[190px] lg:pt-[220px] lg:pb-[120px]">
        <div className="main-container">
          <div className="relative overflow-hidden rounded-[28px] bg-secondary p-8 text-white md:p-12 dark:bg-background-8">
            <div className="pointer-events-none absolute -top-44 -left-20 h-96 w-96 rounded-full bg-primary-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 -bottom-44 h-[28rem] w-[28rem] rounded-full bg-ns-green/20 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
              <div>
                <span className="badge badge-cyan">Platform Highlights</span>
                <h1 className="mt-6 max-w-[860px] text-white">
                  Features built for
                  <br />
                  enterprise service teams.
                </h1>
                <p className="mt-4 max-w-[860px] text-accent/70">
                  Schedulaa brings scheduling, payroll, websites, and eCommerce into one experience so your staff and clients stay connected.
                </p>

                <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/5 p-5">
                  <p className="text-tagline-2 font-medium text-ns-green">Schedulaa OS</p>
                  <p className="text-heading-6 mt-1 text-white">Unified command center</p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={`${APP_ORIGIN}/register`} className="btn btn-primary hover:btn-white dark:hover:btn-accent">
                    Start Free Trial
                  </a>
                  <Link href={withLocalePath('/pricing', locale)} className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    Compare Plans
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-accent/20 bg-accent/10 p-5">
                <p className="text-tagline-2 text-accent/80">Platform signals</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-accent/20 bg-accent/5 p-3">
                    <p className="text-tagline-3 text-accent/70">Modules</p>
                    <p className="text-heading-6 mt-1 text-white">5 Core</p>
                  </div>
                  <div className="rounded-xl border border-accent/20 bg-accent/5 p-3">
                    <p className="text-tagline-3 text-accent/70">Regions</p>
                    <p className="text-heading-6 mt-1 text-white">US + CA</p>
                  </div>
                  <div className="rounded-xl border border-accent/20 bg-accent/5 p-3">
                    <p className="text-tagline-3 text-accent/70">Audit</p>
                    <p className="text-heading-6 mt-1 text-white">Snapshot-first</p>
                  </div>
                  <div className="rounded-xl border border-accent/20 bg-accent/5 p-3">
                    <p className="text-tagline-3 text-accent/70">Ops Fit</p>
                    <p className="text-heading-6 mt-1 text-white">1-80 Staff</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AiMobileFeaturesSection />

      <section className="pb-20 lg:pb-[120px]">
        <div className="main-container">
          <div className="mb-8 flex items-end justify-between gap-4 max-md:flex-col max-md:items-start">
            <div>
              <span className="badge badge-green-v2">Schedulaa platform</span>
              <h2 className="mt-4">Operational capabilities that compound together</h2>
            </div>
            <Link href={withLocalePath('/demo', locale)} className="btn btn-secondary btn-md dark:btn-accent dark:hover:btn-white">
              Book demo
            </Link>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {highlightCards.map((card) => (
              <article key={card.title} className="dark:bg-background-8 rounded-[20px] bg-white p-6 shadow-[0_12px_40px_rgba(16,24,40,0.06)]">
                <h2 className="text-heading-5">{card.title}</h2>
                <p className="mt-3">{card.description}</p>
                <ul className="mt-6 space-y-3">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="bg-secondary dark:bg-accent mt-1 inline-flex h-2 w-2 shrink-0 rounded-full" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-2 dark:bg-background-5 py-20 lg:py-[120px]">
        <div className="main-container">
          <div className="mx-auto max-w-[880px] text-center">
            <span className="badge badge-yellow-v2">Platform Pillars</span>
            <h2 className="mt-5">Features that work together</h2>
            <p className="mt-3">
              Each module is built to hand off context so your staff and clients never lose the thread.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {platformPillars.map((pillar) => (
              <article key={pillar.icon} className="dark:bg-background-8 rounded-[20px] bg-white p-6 shadow-[0_12px_40px_rgba(16,24,40,0.06)]">
                <span className="text-primary-500 text-heading-5">{pillar.icon}</span>
                <h3 className="mt-3 text-heading-6">{pillar.title}</h3>
                <ul className="mt-4 space-y-3">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="bg-primary-500 mt-1 inline-flex h-2 w-2 shrink-0 rounded-full" />
                      <span className="text-tagline-1">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[110px]">
        <div className="main-container">
          <div className="rounded-[24px] bg-secondary px-8 py-10 text-white md:px-12 md:py-12 dark:bg-background-8">
            <p className="badge badge-cyan">Next step</p>
            <h2 className="mt-5 max-w-[920px] text-white">Run booking, shifts, payroll workflows, and web operations from one command center.</h2>
            <p className="mt-3 max-w-[860px] text-accent/70">
              Keep your current team and tools, then phase into Schedulaa modules with a clear rollout path.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`${APP_ORIGIN}/register`} className="btn btn-primary hover:btn-white dark:hover:btn-accent">
                Start Free Trial
              </a>
              <Link href={withLocalePath('/contact', locale)} className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                Talk to sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
