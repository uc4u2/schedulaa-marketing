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
          <div className="rounded-[30px] border border-secondary/10 bg-[#f3f0e9] p-6 md:p-10 dark:border-white/10 dark:bg-background-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <span className="badge badge-green-v2">Features</span>
                <h1 className="mt-6 max-w-[760px] text-secondary dark:text-white">
                  Powerful operations tools
                  <br />
                  built for modern service teams
                </h1>
                <p className="mt-4 max-w-[690px] text-secondary/70 dark:text-accent/70">
                  From booking and scheduling to payroll workflows and websites, Schedulaa helps teams run daily operations from one connected platform.
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <Link href={withLocalePath('/demo', locale)} className="btn btn-secondary btn-md dark:hover:btn-accent">
                  Explore features
                </Link>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-12">
              <article className="relative overflow-hidden rounded-[22px] border border-secondary/10 bg-white p-5 shadow-box dark:border-white/10 dark:bg-background-7 lg:col-span-6 lg:min-h-[280px]">
                <div className="pointer-events-none absolute -right-20 -bottom-20 h-44 w-44 rounded-full bg-primary-500/20 blur-2xl" />
                <h3 className="text-heading-5">Unified command center</h3>
                <p className="mt-2 text-secondary/70 dark:text-accent/70">
                  Connect booking, workforce scheduling, payroll workflows, and customer touchpoints without tool switching.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  <span className="rounded-lg border border-secondary/10 bg-background-2 px-3 py-2 text-tagline-2 dark:border-white/10 dark:bg-background-8">Snapshot audit logs</span>
                  <span className="rounded-lg border border-secondary/10 bg-background-2 px-3 py-2 text-tagline-2 dark:border-white/10 dark:bg-background-8">US + CA payroll</span>
                  <span className="rounded-lg border border-secondary/10 bg-background-2 px-3 py-2 text-tagline-2 dark:border-white/10 dark:bg-background-8">Shift + leave workflows</span>
                  <span className="rounded-lg border border-secondary/10 bg-background-2 px-3 py-2 text-tagline-2 dark:border-white/10 dark:bg-background-8">Website + commerce</span>
                </div>
              </article>

              <article className="relative overflow-hidden rounded-[22px] border border-secondary/10 bg-white p-5 shadow-box dark:border-white/10 dark:bg-background-7 lg:col-span-6">
                <h3 className="text-heading-5">Platform signals</h3>
                <p className="mt-1 text-secondary/70 dark:text-accent/70">Key operating metrics for enterprise service teams.</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-secondary/10 bg-background-2 p-3 dark:border-white/10 dark:bg-background-8">
                    <p className="text-tagline-3 text-secondary/60 dark:text-accent/60">Modules</p>
                    <p className="text-heading-6 mt-1">5 Core</p>
                  </div>
                  <div className="rounded-lg border border-secondary/10 bg-background-2 p-3 dark:border-white/10 dark:bg-background-8">
                    <p className="text-tagline-3 text-secondary/60 dark:text-accent/60">Regions</p>
                    <p className="text-heading-6 mt-1">US + CA</p>
                  </div>
                  <div className="rounded-lg border border-secondary/10 bg-background-2 p-3 dark:border-white/10 dark:bg-background-8">
                    <p className="text-tagline-3 text-secondary/60 dark:text-accent/60">Ops fit</p>
                    <p className="text-heading-6 mt-1">1-80 staff</p>
                  </div>
                  <div className="rounded-lg border border-secondary/10 bg-background-2 p-3 dark:border-white/10 dark:bg-background-8">
                    <p className="text-tagline-3 text-secondary/60 dark:text-accent/60">Mode</p>
                    <p className="text-heading-6 mt-1">Snapshot-first</p>
                  </div>
                </div>
              </article>

              <article className="rounded-[22px] border border-secondary/10 bg-white p-5 shadow-box dark:border-white/10 dark:bg-background-7 lg:col-span-4">
                <h3 className="text-heading-5">Scheduling engine</h3>
                <p className="mt-2 text-secondary/70 dark:text-accent/70">
                  Dynamic availability, shift planning, swaps, and leave approvals in one timeline.
                </p>
              </article>

              <article className="rounded-[22px] border border-secondary/10 bg-white p-5 shadow-box dark:border-white/10 dark:bg-background-7 lg:col-span-4">
                <h3 className="text-heading-5">Payroll workflows</h3>
                <p className="mt-2 text-secondary/70 dark:text-accent/70">
                  Overtime, exports, deduction controls, and audit-safe finalization with multi-region support.
                </p>
              </article>

              <article className="rounded-[22px] border border-secondary/10 bg-white p-5 shadow-box dark:border-white/10 dark:bg-background-7 lg:col-span-4">
                <h3 className="text-heading-5">Website + bookings</h3>
                <p className="mt-2 text-secondary/70 dark:text-accent/70">
                  Publish branded service pages with embedded booking and commerce-ready customer flows.
                </p>
              </article>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`${APP_ORIGIN}/register`} className="btn btn-primary btn-md hover:btn-white dark:hover:btn-accent">
                Start free trial
              </a>
              <Link href={withLocalePath('/pricing', locale)} className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                Compare plans
              </Link>
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
