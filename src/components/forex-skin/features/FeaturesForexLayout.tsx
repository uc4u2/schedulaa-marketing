import CTA from '@/components/shared/cta/CTA';
import Image from 'next/image';
import Link from 'next/link';

import { SEARCH_INTENT_MAP } from '@/lib/seo/searchIntentMap';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { AppLocale, withLocalePath } from '@/utils/locale';

type Props = { locale: AppLocale };

type Workflow = {
  title: string;
  description: string;
  points: string[];
  href: string;
  linkLabel: string;
  image: string;
  imageAlt: string;
  availability?: string;
};

const workflows: Workflow[] = [
  {
    title: 'Website and online presence',
    description: 'Publish a branded website, pages, articles, service catalog and booking paths from one workspace.',
    points: [
      'Custom domain and SSL setup',
      'Website pages, media and SEO controls',
      'Booking widgets for existing sites',
    ],
    href: '/website-builder',
    linkLabel: 'Explore Website Builder',
    image: '/images/marketing/website-builder-editor.png',
    imageAlt: 'Illustrative Schedulaa website builder screen with sample content',
    availability:
      'Website Builder is included with every subscription plan; domain connection and publishing require configuration.',
  },
  {
    title: 'Booking and appointment reminders',
    description:
      'Let customers choose available services and times while your team manages availability, bookings and changes.',
    points: [
      'Online booking, availability and self-service changes',
      'Shared staff calendars and scheduling workflows',
      'Configurable two-stage appointment email reminders',
    ],
    href: '/booking',
    linkLabel: 'Explore online booking',
    image: '/images/marketing/showcase/manage-bookings.webp',
    imageAlt: 'Illustrative booking management screen with synthetic appointment data',
    availability:
      'Appointment reminders are email-only, manager-configured and require the reminder service to be enabled. Delivery is not guaranteed.',
  },
  {
    title: 'Client 360 and communications',
    description:
      'Give your team one connected customer workspace for booking context, balances, notes, documents, photos and next actions.',
    points: [
      'Upcoming and past appointments, balances and work orders',
      'Create bookings, estimates, invoices and payment follow-up from the client record',
      'Private notes, documents and conditional customer actions',
    ],
    href: '/marketing/clients-360',
    linkLabel: 'Explore Client 360',
    image: '/images/marketing/showcase/clients-pick.png',
    imageAlt: 'Illustrative client management screen with synthetic customer data',
    availability:
      'Actions such as payment links, document reminders and review requests depend on the relevant setup and record eligibility.',
  },
  {
    title: 'Estimates, invoices and payments',
    description:
      'Move a customer request into an itemized estimate, invoice and payment record without rebuilding the core job details.',
    points: [
      'Customer estimate links for supported approval or rejection',
      'Branded PDFs, due dates, terms, tax settings and CAD or USD document currency',
      'Stripe-hosted invoice payment links and QR codes when Stripe is configured; offline and partial payment records',
    ],
    href: '/business-finance/invoices',
    linkLabel: 'Explore invoices and payments',
    image: '/images/marketing/booking-checkout-invoice-detail.png',
    imageAlt: 'Illustrative invoice and payment workflow with sample data',
    availability:
      'Business Finance workflows require the Business plan. Online payment links require a completed Stripe setup; Schedulaa is not a tax filing or general-ledger system.',
  },
  {
    title: 'Work orders and dispatch',
    description:
      'Assign service work, coordinate a crew and keep job execution connected to the client and finance record.',
    points: [
      'Employee, crew and date assignment with job instructions',
      'Field reports and manager review',
      'Trip-scoped On my way and Arrived status with optional temporary customer tracking link',
    ],
    href: '/industries/hvac',
    linkLabel: 'Explore service operations',
    image: '/images/marketing/showcase/employee-dashboard.png',
    imageAlt: 'Illustrative employee schedule used to coordinate assigned service work',
    availability:
      'Dispatch is enabled and acknowledged per business. It is not continuous fleet tracking, route optimisation or a guaranteed arrival-time service.',
  },
  {
    title: 'Photos, documents and staff operations',
    description:
      'Keep private proof of work and client context alongside scheduling, attendance and operational reporting.',
    points: [
      'Private client documents and session notes',
      'Shift- and work-order-linked employee photos',
      'Scheduling, clock-in/out, break rules and payroll-ready handoff',
    ],
    href: '/workforce',
    linkLabel: 'Explore workforce tools',
    image: '/images/marketing/showcase/time-tracking.png',
    imageAlt: 'Illustrative staff scheduling and time tracking screen with sample data',
    availability:
      'Field Photos is a separate paid add-on with storage and retention choices. It is not included in every plan and is not a public website-media library.',
  },
];

export default function FeaturesForexLayout({ locale }: Props) {
  if (locale !== 'en') {
    return (
      <main className="bg-background-3 py-32 dark:bg-background-7">
        <div className="main-container max-w-3xl text-center">
          <h1>Schedulaa features for service businesses</h1>
          <p className="mt-5">Explore Schedulaa’s website, booking, client, finance and workforce workflows.</p>
          <Link className="btn btn-secondary btn-md mt-8" href={withLocalePath('/pricing', locale)}>
            Compare plans
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="border-b border-stroke-2 bg-white pb-16 pt-[140px] dark:border-stroke-7 dark:bg-background-6 md:pb-24 md:pt-[175px]">
        <div className="main-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="badge badge-cyan-v2">Connected service operations</span>
            <h1 className="mt-5 max-w-3xl">From the first booking to the final payment, keep the work connected.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8">
              Schedulaa brings a public website, booking, Client 360, estimates, invoices, work orders and workforce
              operations into one service-business platform. Choose the workflows you need, then configure the right
              plan and integrations for your business.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="btn btn-secondary btn-md"
                href={buildAppUrl('/register', {
                  returnTo: marketingReturnTo(locale, '/features'),
                })}
              >
                Start a 14-day trial
              </a>
              <Link className="btn btn-white btn-md dark:btn-transparent" href="/en/pricing">
                Compare plans and add-ons
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-stroke-2 bg-background-3 p-3 shadow-lg dark:border-stroke-7 dark:bg-background-8">
            <Image
              src="/images/marketing/showcase/workflow-01.png"
              alt="Illustrative Schedulaa workflow with synthetic business data"
              width={920}
              height={680}
              className="h-auto w-full rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

      <nav
        aria-label="Feature sections"
        className="border-b border-stroke-2 bg-white dark:border-stroke-7 dark:bg-background-6"
      >
        <div className="main-container flex gap-5 overflow-x-auto py-4 text-sm font-medium whitespace-nowrap">
          {workflows.map((workflow) => (
            <a
              key={workflow.href}
              href={`#${workflow.title.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`}
              className="text-primary hover:underline"
            >
              {workflow.title}
            </a>
          ))}
        </div>
      </nav>

      <section className="py-16 md:py-24">
        <div className="main-container space-y-12 md:space-y-20">
          {workflows.map((workflow, index) => {
            const id = workflow.title.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-');
            return (
              <article
                id={id}
                key={workflow.title}
                className="scroll-mt-28 grid gap-8 rounded-3xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8 md:p-8 lg:grid-cols-2 lg:items-center"
              >
                <div className={index % 2 ? 'lg:order-2' : ''}>
                  <Image
                    src={workflow.image}
                    alt={workflow.imageAlt}
                    width={960}
                    height={680}
                    className="h-auto w-full rounded-2xl border border-stroke-2 object-cover dark:border-stroke-7"
                  />
                </div>
                <div className={index % 2 ? 'lg:order-1' : ''}>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Schedulaa workflow</p>
                  <h2 className="mt-3">{workflow.title}</h2>
                  <p className="mt-4 text-lg leading-8">{workflow.description}</p>
                  <ul className="mt-6 space-y-3">
                    {workflow.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span aria-hidden="true" className="text-primary">
                          ✓
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {workflow.availability ? (
                    <p className="mt-6 rounded-xl bg-primary/8 p-4 text-sm leading-6 text-secondary dark:text-accent">
                      {workflow.availability}
                    </p>
                  ) : null}
                  <Link
                    href={withLocalePath(workflow.href, locale)}
                    className="mt-6 inline-flex font-semibold text-primary underline underline-offset-4"
                  >
                    {workflow.linkLabel}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-background-6">
        <div className="main-container grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-stroke-2 p-6 dark:border-stroke-7">
            <h2 className="text-heading-5">Included platform workflows</h2>
            <p className="mt-3 text-sm leading-6">
              Website Builder, booking, client records and standard reporting are available according to your plan and
              configuration.
            </p>
          </article>
          <article className="rounded-2xl border border-stroke-2 p-6 dark:border-stroke-7">
            <h2 className="text-heading-5">Business plan workflows</h2>
            <p className="mt-3 text-sm leading-6">
              Estimates, invoices, work orders, field reports, expenses, materials and month-end finance workflows are
              Business plan capabilities.
            </p>
          </article>
          <article className="rounded-2xl border border-stroke-2 p-6 dark:border-stroke-7">
            <h2 className="text-heading-5">Optional add-ons and setup</h2>
            <p className="mt-3 text-sm leading-6">
              Field Photos, extra seats, payment processing, domains and integrations each have their own eligibility,
              setup or fee requirements.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white pb-16 dark:bg-background-6">
        <div className="main-container">
          <h2 className="text-heading-4">Explore by service-business workflow</h2>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
            {SEARCH_INTENT_MAP.map((entry) => (
              <Link
                key={entry.key}
                href={withLocalePath(entry.path, locale)}
                className="text-sm font-medium text-primary underline underline-offset-4"
              >
                {entry.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        className="bg-white dark:bg-background-6"
        badgeClass="hidden"
        ctaHeading="See the plan that fits your"
        spanText="workflow"
        description="Compare subscription plans, annual billing and optional add-ons before starting your trial."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Compare plans"
      />
    </main>
  );
}
