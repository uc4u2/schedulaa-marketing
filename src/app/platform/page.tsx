import type { Metadata } from 'next';
import Script from 'next/script';

import TrackedLink from '@/components/shared/TrackedLink';
import { buildLocalizedPageMetadata, getLocalizedCanonicalUrl } from '@/lib/seo/pageMetadata';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { withLocalePath } from '@/utils/locale';
import { getServerLocale } from '@/utils/serverLocale';

const title = 'Service Business Operations Platform | Schedulaa';
const description =
  'Connect booking, customers, field work, staff time, estimates, invoices, payments, products, and your business website in Schedulaa.';

const workflows = [
  {
    title: 'Website to booking and payment',
    description:
      'Publish a branded website, show real availability, collect booking details, and use Stripe for eligible deposits or payments.',
    href: '/booking',
    link: 'Explore online booking',
  },
  {
    title: 'Customer to estimate, invoice, and payment',
    description:
      'Keep the customer record connected as work moves from an appointment or job to an estimate, customer approval, invoice, and payment link.',
    href: '/business-finance/invoices',
    link: 'Explore estimates and invoices',
  },
  {
    title: 'Shift to approved payroll handoff',
    description:
      'Schedule employees, capture clock-in and clock-out records, review approved time, and prepare supported payroll calculations, documents, and exports.',
    href: '/payroll',
    link: 'Explore payroll workflows',
  },
  {
    title: 'Work order to field report and invoice',
    description:
      'Assign work to employees, track trip-scoped dispatch statuses, capture field reports, and continue the job into invoicing without re-entering customer details.',
    href: '/features',
    link: 'Explore field operations',
  },
  {
    title: 'Product to order and fulfillment',
    description:
      'Manage physical or digital products, inventory, checkout, orders, fulfillment, refunds, and customer order history in the same platform.',
    href: '/commerce',
    link: 'Explore commerce',
  },
  {
    title: 'Draft to preview and published website',
    description:
      'Build pages and articles in a private draft workspace, preview changes safely, and publish them to a connected domain when they are ready.',
    href: '/website-builder',
    link: 'Explore Website Builder',
  },
];

const roles = [
  {
    title: 'For managers',
    description:
      'Manage customers, schedules, employees, jobs, estimates, invoices, products, website content, reporting, and role-based access from one operational workspace.',
  },
  {
    title: 'For employees',
    description:
      'See assigned schedules and work orders, manage availability, clock in and out, complete field reports, and use team communication and training tools permitted by the manager.',
  },
  {
    title: 'For customers',
    description:
      'Book online, review appointments, respond to estimates, pay eligible invoices, and view orders or digital access from supported customer-facing flows.',
  },
];

const boundaries = [
  {
    title: 'Google Calendar V1',
    body: 'Outbound appointment synchronization with optional busy-time blocking. It is not advertised as full two-way calendar synchronization.',
  },
  {
    title: 'Accounting handoff',
    body: 'QuickBooks Online and Xero support bounded accounting journal/export handoffs. Schedulaa does not replace a double-entry accounting ledger.',
  },
  {
    title: 'Dispatch and ETA sharing',
    body: 'Dispatch supports trip-scoped status updates and a temporary customer ETA link—not continuous fleet tracking, route history, or turn-by-turn navigation.',
  },
  {
    title: 'Domains and email',
    body: 'Customers keep ownership of their domains while Schedulaa supports connection and SSL. Email marketing uses supported bring-your-own-provider configuration.',
  },
];

const faqs = [
  {
    question: 'Does Schedulaa replace every accounting or payroll system?',
    answer:
      'No. Schedulaa connects operational records to supported finance and payroll workflows. Availability depends on the configured plan, region, provider, and workflow; it is not a universal tax-filing or double-entry accounting replacement.',
  },
  {
    question: 'Can employees and customers use their own views?',
    answer:
      'Yes. Employees use role-controlled tools for schedules, time, assigned work, and related tasks. Supported customer flows cover booking, estimates, invoices and payments, orders, and account history.',
  },
  {
    question: 'Which integrations are supported?',
    answer:
      'Verified integrations include Stripe, Google Calendar V1, QuickBooks Online, Xero, bounded Zapier automation, and Jitsi where its tenant policy is enabled. Exact availability depends on setup and eligibility.',
  },
  {
    question: 'Can Schedulaa build and publish a business website?',
    answer:
      'Yes. Website Builder supports draft editing, signed preview, publishing, pages, articles, SEO fields, and custom-domain connection. Customers purchase and retain ownership of their own domain.',
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  return buildLocalizedPageMetadata({
    locale,
    path: '/platform',
    title,
    description,
    openGraphTitle: title,
    openGraphDescription: description,
    twitterTitle: title,
    twitterDescription: description,
  });
}

export default async function PlatformPage() {
  const locale = await getServerLocale();
  const pagePath = withLocalePath('/platform', locale);
  const returnTo = marketingReturnTo(locale, '/platform');
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: getLocalizedCanonicalUrl(locale, '/') },
      { '@type': 'ListItem', position: 2, name: 'Platform', item: getLocalizedCanonicalUrl(locale, '/platform') },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <main className="overflow-x-hidden bg-background-3 pb-24 pt-20 dark:bg-background-7">
      <Script id="platform-breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="platform-faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="section-padding-x">
        <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[30px] bg-secondary px-6 py-14 text-white shadow-3 md:px-12 md:py-20">
          <p className="badge badge-yellow-v2">Schedulaa platform</p>
          <h1 className="mt-5 max-w-[900px] text-white">Run the connected workflows behind your service business.</h1>
          <p className="mt-5 max-w-[850px] text-lg text-accent/80">
            Bring booking, customers, team operations, field work, estimates, invoices, payments, products, and your website into one shared operational system.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <TrackedLink
              href={buildAppUrl('/register', { returnTo })}
              className="btn btn-primary btn-md"
              analyticsCta={{ name: 'platform_start', pagePath, placement: 'hero' }}
            >
              Start with Schedulaa
            </TrackedLink>
            <TrackedLink
              href={withLocalePath('/demo', locale)}
              className="btn btn-white btn-md dark:btn-transparent"
              analyticsCta={{ name: 'platform_demo', pagePath, placement: 'hero' }}
            >
              Book a personalized demo
            </TrackedLink>
          </div>
          <p className="mt-4 text-sm text-accent/65">Explore the product first; choose a plan only when the workflow fits your business.</p>
        </div>
      </section>

      <section className="section-padding-x py-20">
        <div className="mx-auto max-w-[1180px]">
          <p className="premium-eyebrow">Connected operations</p>
          <h2 className="mt-3 max-w-[800px]">Follow the work from customer intent to a completed service.</h2>
          <p className="mt-4 max-w-[850px] text-secondary/72 dark:text-accent/72">
            Each workflow uses the same customer and operational context, reducing duplicate entry without pretending every business needs every module.
          </p>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workflows.map((workflow) => (
              <article key={workflow.title} className="premium-card rounded-[22px] p-6 dark:border-stroke-7 dark:bg-background-8">
                <h3 className="text-heading-6">{workflow.title}</h3>
                <p className="mt-3 text-secondary/72 dark:text-accent/72">{workflow.description}</p>
                <TrackedLink
                  href={withLocalePath(workflow.href, locale)}
                  className="mt-5 inline-flex font-medium text-primary-500 underline-offset-4 hover:underline"
                  analyticsCta={{ name: workflow.link, pagePath, placement: 'workflow' }}
                >
                  {workflow.link}
                </TrackedLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-x bg-background-2 py-20 dark:bg-background-5">
        <div className="mx-auto max-w-[1180px]">
          <p className="premium-eyebrow">One system, role-appropriate views</p>
          <h2 className="mt-3">Give each person the tools their work requires.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {roles.map((role) => (
              <article key={role.title} className="rounded-[22px] border border-stroke-2 bg-white p-6 shadow-box dark:border-stroke-7 dark:bg-background-8">
                <h3 className="text-heading-6">{role.title}</h3>
                <p className="mt-3 text-secondary/72 dark:text-accent/72">{role.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-x py-20">
        <div className="mx-auto max-w-[1180px]">
          <p className="premium-eyebrow">Clear integration boundaries</p>
          <h2 className="mt-3 max-w-[850px]">Know what connects—and what Schedulaa does not claim to replace.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {boundaries.map((boundary) => (
              <article key={boundary.title} className="premium-card rounded-[22px] p-6 dark:border-stroke-7 dark:bg-background-8">
                <h3 className="text-heading-6">{boundary.title}</h3>
                <p className="mt-3 text-secondary/72 dark:text-accent/72">{boundary.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <TrackedLink href={withLocalePath('/features', locale)} className="btn btn-primary btn-md" analyticsCta={{ name: 'platform_features', pagePath, placement: 'boundaries' }}>
              Explore features
            </TrackedLink>
            <TrackedLink href={withLocalePath('/pricing', locale)} className="btn btn-secondary btn-md" analyticsCta={{ name: 'platform_pricing', pagePath, placement: 'boundaries' }}>
              Review plans
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="section-padding-x pb-20">
        <div className="mx-auto max-w-[980px]">
          <p className="premium-eyebrow">Product questions</p>
          <h2 className="mt-3">Practical answers before you choose.</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-[20px] border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
                <h3 className="text-heading-6">{faq.question}</h3>
                <p className="mt-3 text-secondary/72 dark:text-accent/72">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
