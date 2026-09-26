'use client';

import Image from 'next/image';
import Link from 'next/link';

import TrackedLink from '@/components/shared/TrackedLink';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';

const pagePath = '/en/booking/salon';
const startFreeHref = buildAppUrl('/register', {
  returnTo: marketingReturnTo('en', '/booking/salon'),
});

const capabilities = [
  {
    eyebrow: 'Branded website',
    title: 'Show services on a site you control',
    body:
      'Build and publish a responsive public website with your service pages, brand styling, booking links, and a custom domain when configured for the workspace.',
    link: { href: '/en/website-builder', label: 'Explore the website builder' },
  },
  {
    eyebrow: 'Online booking',
    title: 'Let clients choose a service, provider, and available time',
    body:
      'Publish services and live availability, let clients select an appointment, and keep confirmations and supported rescheduling flows connected to the booking record.',
    link: { href: '/en/booking', label: 'See the booking workflow' },
  },
  {
    eyebrow: 'Payments and deposits',
    title: 'Use the payment mode that fits the service',
    body:
      'When Stripe and online payments are configured, supported workflows can collect full payment, apply deposit rules, or securely save a card for later charging.',
  },
  {
    eyebrow: 'Staff and availability',
    title: 'Keep appointment choices aligned with the team calendar',
    body:
      'Assign services to the people who provide them, manage working availability, and give managers a shared view of the schedule without maintaining a separate booking calendar.',
  },
  {
    eyebrow: 'Products and add-ons',
    title: 'Sell services and retail items from the same business website',
    body:
      'Use the current product, inventory, cart, and checkout workflows for retail items, and offer supported service add-ons inside the booking experience.',
  },
  {
    eyebrow: 'Customer management',
    title: 'Keep client and appointment context together',
    body:
      'Maintain customer records and appointment history alongside the operational workflows your team uses to schedule, serve, and follow up with clients.',
  },
];

const faqs = [
  {
    question: 'Can I use my own domain?',
    answer:
      'Yes. Schedulaa supports custom-domain connection with automatic SSL where the workspace domain setup is completed. Domain registration costs are separate.',
  },
  {
    question: 'Can customers book appointments online?',
    answer:
      'Yes. You can publish services and availability so clients can choose a service, an eligible provider, and an available appointment time.',
  },
  {
    question: 'Can I accept payments or deposits?',
    answer:
      'Yes, when Stripe and the applicable online-payment settings are configured. Supported booking modes include full payment, deposit rules, and card-on-file workflows.',
  },
  {
    question: 'Can I manage staff availability?',
    answer:
      'Yes. Services can be assigned to eligible team members and booking availability can follow the working schedule configured for those providers.',
  },
  {
    question: 'Can I sell products too?',
    answer:
      'Yes. Schedulaa includes product, inventory, cart, and checkout workflows for businesses that sell retail items as well as services.',
  },
  {
    question: 'Do I need a separate website builder?',
    answer:
      'No. The Schedulaa website builder publishes the public pages that connect to the platform booking and commerce workflows.',
  },
];

export const salonFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const StartFreeButton = ({ placement }: { placement: string }) => (
  <TrackedLink
    href={startFreeHref}
    className="btn btn-primary btn-md min-w-[180px] justify-center"
    analyticsCta={{ name: 'start_free', pagePath, placement }}
    eventName="Lead"
    eventParams={{ content_name: `Salon Landing Start Free - ${placement}`, page_path: pagePath }}
  >
    Start Free
  </TrackedLink>
);

export default function SalonBookingLandingPage() {
  return (
    <main className="overflow-hidden bg-background-3 dark:bg-background-7">
      <script
        id="salon-booking-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(salonFaqJsonLd) }}
      />

      <section className="relative pt-[130px] pb-20 md:pt-[180px] md:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.16),transparent_38%),radial-gradient(circle_at_85%_30%,rgba(249,115,22,0.12),transparent_34%)]" />
        <div className="main-container relative grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <span className="badge badge-cyan mb-5">Salon website and booking</span>
            <h1 className="max-w-[720px] text-balance">
              A salon website with online booking, payments, and products in one place
            </h1>
            <p className="mt-6 max-w-[680px] text-lg leading-8 text-secondary/72 dark:text-accent/72">
              Give clients one branded place to discover services, choose an appointment, and use the payment options you configure—while your team manages availability and customer records in Schedulaa.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <StartFreeButton placement="salon_hero" />
              <Link href="/en/pricing" className="text-sm font-semibold text-primary-500 underline underline-offset-4">
                Review current pricing
              </Link>
            </div>
          </div>

          <figure className="overflow-hidden rounded-[28px] border border-white/50 bg-white p-3 shadow-[0_30px_90px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-background-8">
            <Image
              src="/images/marketing/website-builder.png"
              alt="Schedulaa website builder editor showing a public website page"
              width={1858}
              height={926}
              priority
              className="h-auto w-full rounded-[20px]"
            />
            <figcaption className="px-3 pt-3 pb-1 text-sm text-secondary/60 dark:text-accent/60">
              Current Schedulaa website-builder interface.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="main-container">
          <div className="mx-auto mb-12 max-w-[820px] text-center">
            <span className="badge badge-green mb-4">Connected salon workflow</span>
            <h2>From public website to appointment operations</h2>
            <p className="mt-4">
              Each capability below describes an existing Schedulaa workflow. Payment options depend on the workspace&apos;s Stripe and checkout configuration.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-stroke-2 bg-white p-7 shadow-1 dark:border-stroke-7 dark:bg-background-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-500">{item.eyebrow}</p>
                <h3 className="mt-3 text-heading-5">{item.title}</h3>
                <p className="mt-4 leading-7">{item.body}</p>
                {item.link ? (
                  <Link href={item.link.href} className="mt-5 inline-block font-semibold text-primary-500 underline underline-offset-4">
                    {item.link.label}
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-1 py-20 dark:bg-background-6 md:py-28">
        <div className="main-container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="badge badge-yellow-v2 mb-4">Current product UI</span>
            <h2>Use one operational record after the appointment is booked</h2>
            <p className="mt-5 max-w-[650px] leading-8">
              Schedulaa connects the public website to business workflows instead of leaving the booking as an isolated widget. Teams can work with customer records, appointments, supported checkout modes, invoices, and payment links in the application.
            </p>
            <p className="mt-4 max-w-[650px] leading-8">
              The interface shown here is an existing Schedulaa payment and invoice workflow—not a fabricated salon dashboard.
            </p>
          </div>
          <figure className="overflow-hidden rounded-[28px] border border-stroke-2 bg-white p-3 shadow-[0_26px_70px_rgba(15,23,42,0.14)] dark:border-stroke-7 dark:bg-background-8">
            <Image
              src="/images/marketing/booking-checkout-invoice-detail.png"
              alt="Schedulaa invoice detail with payment link and payment status controls"
              width={842}
              height={538}
              className="h-auto w-full rounded-[20px]"
            />
            <figcaption className="px-3 pt-3 pb-1 text-sm text-secondary/60 dark:text-accent/60">
              Current Schedulaa invoice and payment-link interface.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="badge badge-cyan mb-4">Pricing and setup</span>
            <h2>Choose the current plan that fits your workflow</h2>
            <p className="mt-4 leading-7">
              Pricing and plan availability can change, so this page links to the current source of truth instead of duplicating plan claims.
            </p>
            <Link href="/en/pricing" className="btn btn-white btn-md mt-6 inline-flex dark:btn-transparent">
              View current pricing
            </Link>
          </div>
          <div>
            <h2 className="mb-6">Salon website and booking FAQ</h2>
            <div className="space-y-4">
              {faqs.map((item) => (
                <details key={item.question} className="group rounded-[20px] border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
                  <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-secondary dark:text-white">
                    {item.question}
                  </summary>
                  <p className="mt-4 leading-7">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="main-container">
          <div className="rounded-[30px] bg-secondary px-7 py-12 text-center text-white shadow-[0_30px_80px_rgba(15,23,42,0.2)] md:px-12 md:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/65">Website + booking + business workflows</p>
            <h2 className="mx-auto mt-4 max-w-[820px] text-white">Start building your salon&apos;s online booking experience</h2>
            <p className="mx-auto mt-4 max-w-[720px] text-white/75">
              Create the workspace first, then configure the website, services, team availability, and supported payment settings for the business.
            </p>
            <div className="mt-8 flex justify-center">
              <StartFreeButton placement="salon_final_cta" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
