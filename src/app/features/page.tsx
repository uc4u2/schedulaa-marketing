import Link from 'next/link';
import { headers } from 'next/headers';
import { Metadata } from 'next';

import AiFeatureWorkflowSteps from '@/components/features/AiFeatureWorkflowSteps';
import AiMobileFeaturesSection from '@/components/features/AiMobileFeaturesSection';
import AiOperationalFeatureGrid from '@/components/features/AiOperationalFeatureGrid';
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
  const visualGridItems = [
    {
      title: highlightCards[0].title,
      description: highlightCards[0].description,
    },
    {
      title: highlightCards[1].title,
      description: highlightCards[1].description,
    },
    {
      title: highlightCards[2].title,
      description: highlightCards[2].description,
    },
    {
      title: platformPillars[0].title,
      description: platformPillars[0].points[0],
    },
    {
      title: platformPillars[1].title,
      description: platformPillars[1].points[0],
    },
  ];

  const workflowSteps = platformPillars.map((pillar) => ({
    title: pillar.title,
    description: pillar.points[1],
  }));

  return (
    <main className="bg-background-3 dark:bg-background-7 overflow-x-hidden">
      <section className="overflow-hidden pt-[150px] pb-20 md:pt-[190px] lg:pt-[220px] lg:pb-[120px]">
        <div className="main-container">
          <div className="relative overflow-hidden rounded-[30px] border border-accent/15 bg-background-8 px-7 py-10 text-white md:px-12 md:py-14">
            <div className="pointer-events-none absolute -top-44 -left-24 h-[28rem] w-[28rem] rounded-full bg-primary-500/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-28 -bottom-44 h-[30rem] w-[30rem] rounded-full bg-ns-green/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.12),transparent_48%),radial-gradient(circle_at_90%_90%,rgba(133,255,122,0.10),transparent_44%)]" />

            <div className="relative grid gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <span className="badge badge-cyan">Platform highlights</span>
                <h1 className="mt-6 max-w-[780px] text-white">
                  Features built for
                  <br />
                  enterprise service teams.
                </h1>
                <p className="mt-4 max-w-[720px] text-accent/75">
                  Schedulaa brings scheduling, payroll, websites, and eCommerce into one experience so your staff and clients stay connected.
                </p>

                <div className="mt-7 rounded-2xl border border-accent/20 bg-accent/8 p-5 backdrop-blur">
                  <p className="text-tagline-2 font-medium text-ns-green">Schedulaa OS</p>
                  <p className="text-heading-6 mt-1 text-white">Unified command center</p>
                  <p className="mt-2 text-tagline-2 text-accent/65">
                    Booking, workforce scheduling, payroll workflows, and customer touchpoints in one operational layer.
                  </p>
                </div>

                <ul className="mt-7 grid gap-2 text-tagline-2 text-accent/75 sm:grid-cols-2">
                  <li className="rounded-xl border border-accent/15 bg-accent/5 px-3 py-2">Snapshot-first audit trail</li>
                  <li className="rounded-xl border border-accent/15 bg-accent/5 px-3 py-2">US + Canada payroll workflows</li>
                  <li className="rounded-xl border border-accent/15 bg-accent/5 px-3 py-2">Department-aware scheduling</li>
                  <li className="rounded-xl border border-accent/15 bg-accent/5 px-3 py-2">Website + commerce integrated</li>
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={`${APP_ORIGIN}/register`} className="btn btn-primary btn-md hover:btn-white dark:hover:btn-accent">
                    Start free trial
                  </a>
                  <Link
                    href={withLocalePath('/pricing', locale)}
                    className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent"
                  >
                    Compare plans
                  </Link>
                </div>
              </div>

              <div className="rounded-[22px] border border-accent/20 bg-background-7/70 p-5 backdrop-blur-xl">
                <p className="text-tagline-2 text-accent/85">Platform signals</p>
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
                    <p className="text-tagline-3 text-accent/70">Ops fit</p>
                    <p className="text-heading-6 mt-1 text-white">1-80 staff</p>
                  </div>
                </div>
                <div className="mt-4 rounded-xl border border-accent/20 bg-accent/5 p-3">
                  <p className="text-tagline-3 text-accent/70">Coverage</p>
                  <p className="text-tagline-2 mt-1 text-accent/85">
                    Scheduling + Payroll + Websites + Commerce + Reporting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AiMobileFeaturesSection />
      <AiOperationalFeatureGrid
        heading="Operational capabilities that compound together"
        subheading="The same features that power your scheduling, payroll, and commerce workflows are now shown in a stronger visual system."
        items={visualGridItems}
      />
      <AiFeatureWorkflowSteps
        steps={workflowSteps}
        ctaHref={withLocalePath('/demo', locale)}
        ctaLabel="Book demo"
      />

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
