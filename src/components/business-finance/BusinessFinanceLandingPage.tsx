'use client';

import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { detectLocaleFromPath } from '@/utils/locale';
import gradient32Img from '@public/images/ns-img-520.png';
import gradient33Img from '@public/images/ns-img-521.png';
import gradient34Img from '@public/images/ns-img-522.png';
import gradient9Img from '@public/images/ns-img-501.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import RevealAnimation from '@/vendor-forex/src/components/animation/RevealAnimation';

const BOOK_DEMO_URL =
  process.env.NEXT_PUBLIC_BOOK_DEMO_URL ||
  'https://app.schedulaa.com/sale/meet/uzmTuuGPNNepce0r2vcx8WB4w3sJ2LA32Aqh7XIw9F8';

const painPoints = [
  'Quote requests come from calls, website forms, emails, or DMs.',
  'Estimates get lost in manual follow-ups.',
  'Invoices, payment links, and refunds are disconnected from job execution.',
  'Employees report work after the job, but managers still need to approve materials.',
  'Month-end reporting takes too long because the data is scattered.',
];

const workflowSteps = [
  'Capture the quote request',
  'Link or create the client',
  'Build and send the estimate',
  'Let the client accept or reject online',
  'Convert to invoice and create a payment link',
  'Create the work order and assign the team',
  'Employee submits a field report',
  'Manager reviews materials and closes the job',
  'Track gross and net reporting, tax summary, refunds, and month-end readiness',
];

const featureCards = [
  {
    title: 'Quote Requests',
    body: 'Capture customer requests from phone, website, WhatsApp note, email, or manual entry.',
    note: 'WhatsApp note is a source label, not WhatsApp automation.',
    gradientSrc: gradient32Img,
  },
  {
    title: 'Estimates and Client Approval',
    body: 'Send a review link, track viewed, accepted, or rejected status, and revise when needed.',
    gradientSrc: gradient33Img,
  },
  {
    title: 'Invoices and Payment Links',
    body: 'Convert accepted estimates into invoices, create hosted payment links, and keep payment status connected to the finance invoice.',
    gradientSrc: gradient34Img,
  },
  {
    title: 'Work Orders',
    body: 'Turn approved work into scheduled jobs with instructions and planned materials.',
    gradientSrc: gradient9Img,
  },
  {
    title: 'Field Reports',
    body: 'Employees report completed work, issues found, and materials used.',
    gradientSrc: gradient32Img,
  },
  {
    title: 'Manager Review',
    body: 'Managers approve what becomes official before inventory or invoice updates happen.',
    gradientSrc: gradient33Img,
  },
  {
    title: 'Inventory and Purchases',
    body: 'Track materials, vendors, stock-in purchases, and approved usage.',
    gradientSrc: gradient34Img,
  },
  {
    title: 'Reporting and Month-End',
    body: 'See gross invoice totals, refunds, net collected amounts, tax summary, profitability, missing receipts, low stock, and month-end readiness.',
    gradientSrc: gradient9Img,
  },
];

const paymentsRefundCards = [
  {
    title: 'Hosted payment links',
    body: 'Create or reuse hosted invoice payment links from the finance invoice workflow and keep the local invoice total aligned with what the customer pays.',
  },
  {
    title: 'Paid status reconciliation',
    body: 'When a hosted invoice is paid, Business Finance shows the invoice as paid and keeps the payment state visible inside the invoice detail and Payments & Refunds view.',
  },
  {
    title: 'Invoice refunds',
    body: 'Issue full or partial refunds from the finance invoice detail while preserving the original estimate, invoice line items, work order, and job history.',
  },
  {
    title: 'Gross and net reporting',
    body: 'Keep original invoice totals for history, then review refunds, net collected amount, tax refunded, and month-end refund activity separately.',
  },
];

const reportingCards = [
  'Gross invoice total',
  'Refunds',
  'Net invoice total',
  'Estimated margin',
  'Approved material cost',
  'Tax refunded',
  'Net tax collected',
  'Missing receipts',
  'Pending reviews',
];

const managerSees = [
  'Estimates, invoices, and payment links',
  'Profitability',
  'Costs',
  'Reviews',
  'Month-end reports',
];

const employeeSees = [
  'Assigned work orders',
  'Schedule and instructions',
  'Planned materials',
  'Field report form',
];

const employeeDoesNotSee = [
  'Invoice totals',
  'Profitability',
  'Labor cost',
  'Vendor cost',
  'Manager-only notes',
];

const bookingVsFinance = {
  booking: ['Known service', 'Known price', 'Known employee/time', 'Customer books directly'],
  finance: ['Custom pricing', 'Quote approval needed', 'Invoice payment links', 'Work order execution', 'Material review', 'Refund and net reporting'],
};

function BulletList({ items, muted = false }: { items: string[]; muted?: boolean }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[15px] leading-7 text-secondary/82 dark:text-accent/78">
          <span
            className={`mt-2.5 size-2 rounded-full ${muted ? 'bg-secondary/38 dark:bg-accent/34' : 'bg-[#1f7ae0] shadow-[0_0_0_5px_rgba(31,122,224,0.08)]'}`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function BusinessFinanceLandingPage() {
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname);
  const returnTo = marketingReturnTo(locale, '/business-finance');

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="overflow-hidden bg-[#050914] pb-20 pt-[116px] text-white md:pb-24 md:pt-[144px]">
        <div className="main-container relative">
          <div className="pointer-events-none absolute left-1/2 top-12 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#1f7ae0]/18 blur-[120px]" />
          <div className="pointer-events-none absolute -right-16 top-1/3 h-[360px] w-[360px] rounded-full bg-[#7fe36c]/10 blur-[130px]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
            <AnimatedSection>
              <div className="space-y-6">
                <span className="badge badge-cyan !bg-white/10 !text-white/88">Business Finance</span>
                <div className="space-y-4">
                  <h1 className="max-w-[760px] text-heading-2 text-white md:text-[56px] md:leading-[1.05]">
                    Business Finance for Service Teams
                  </h1>
                  <p className="max-w-[720px] text-[17px] leading-8 text-white/72">
                    From quote request to approved estimate, invoice, hosted payment link, work order, field report, refunds when needed, and month-end readiness - all in one workflow.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link href={buildAppUrl('/register', { returnTo })} className="btn btn-secondary-v2 btn-md min-w-[190px]">
                    Start with Schedulaa
                  </Link>
                  <a href="#finance-workflow" className="btn btn-white btn-md min-w-[170px] dark:btn-transparent">
                    See how it works
                  </a>
                </div>
                <p className="max-w-[760px] text-sm leading-7 text-white/64">
                  Built for service businesses that need more than booking: quotes, crews, materials, approvals, payments, refunds, and job profitability.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="grid gap-4 sm:grid-cols-2">
                {featureCards.slice(0, 4).map((card) => (
                  <article
                    key={card.title}
                    className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.07] p-5 shadow-[0_28px_65px_rgba(0,0,0,0.28)] backdrop-blur-md"
                  >
                    <figure className="pointer-events-none absolute -top-[110%] -left-[70%] -z-10 size-[520px] rotate-[320deg] opacity-50 select-none">
                      <Image src={card.gradientSrc} alt="finance-card-gradient" />
                    </figure>
                    <div className="space-y-3">
                      <h2 className="text-lg font-semibold text-white">{card.title}</h2>
                      <p className="text-sm leading-7 text-white/72">{card.body}</p>
                      {card.note ? <p className="text-xs leading-6 text-white/58">{card.note}</p> : null}
                    </div>
                  </article>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="main-container">
          <AnimatedSection>
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-10">
              <div className="space-y-4">
                <span className="badge badge-yellow-v2">The operational gap</span>
                <h2 className="max-w-[700px] text-heading-3 text-secondary dark:text-white">
                  Quotes, field work, and payments should not live in separate spreadsheets
                </h2>
                <p className="max-w-[680px] text-[16px] leading-7 text-secondary/72 dark:text-accent/70">
                  Service businesses lose time when quoting, approvals, billing, crews, and materials all live in different systems.
                  Business Finance keeps the handoff in one workflow instead of pushing managers back into manual tracking.
                </p>
              </div>
              <div className="rounded-[28px] border border-stroke-2 bg-white p-6 shadow-[0_24px_64px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8 md:p-7">
                <BulletList items={painPoints} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="finance-workflow" className="py-14 md:py-18">
        <div className="main-container">
          <RevealAnimation delay={0.1}>
            <div className="rounded-[34px] border border-stroke-2 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(244,248,255,0.92))] p-6 shadow-[0_28px_70px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-[linear-gradient(180deg,rgba(13,18,30,0.96),rgba(18,24,37,0.94))] md:p-8 lg:p-10">
              <div className="grid gap-9 lg:grid-cols-[0.86fr_1.14fr] lg:items-start lg:gap-10 xl:gap-12">
                <div className="space-y-4 text-center lg:sticky lg:top-28 lg:text-left">
                  <span className="badge badge-cyan">End-to-end workflow</span>
                  <h2 className="mx-auto max-w-[760px] text-heading-3 text-secondary dark:text-white lg:mx-0 lg:max-w-[520px]">
                    One flow from request to completed job
                  </h2>
                  <p className="mx-auto max-w-[720px] text-[16px] leading-7 text-secondary/72 dark:text-accent/70 lg:mx-0 lg:max-w-[520px]">
                    Capture the request, price the work, collect approval, turn it into an invoice and work order, then review what becomes official before month-end.
                  </p>
                  <div className="mx-auto max-w-[520px] rounded-[24px] border border-[#1f7ae0]/12 bg-[#1f7ae0]/[0.04] px-5 py-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] dark:border-white/10 dark:bg-white/[0.04] lg:mx-0">
                    <p className="text-sm leading-7 text-secondary/70 dark:text-accent/72">
                      Quotes, approvals, billing, execution, and month-end review belong in one operating flow. This page follows the actual Business Finance path inside Schedulaa.
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {workflowSteps.map((step, index) => (
                    <AnimatedSection key={step}>
                      <article
                        className={`h-full rounded-[24px] border border-stroke-2 bg-white/92 p-5 shadow-[0_18px_48px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8 ${
                          index === workflowSteps.length - 1 ? 'md:col-span-2 xl:col-span-1' : ''
                        }`}
                      >
                        <div className="flex h-full flex-col gap-4">
                          <div className="flex size-11 items-center justify-center rounded-[18px] bg-[#1f7ae0]/10 text-sm font-semibold text-[#1f7ae0]">
                            {index + 1}
                          </div>
                          <p className="text-[15px] leading-7 text-secondary/84 dark:text-accent/78">{step}</p>
                        </div>
                      </article>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="main-container space-y-8">
          <AnimatedSection>
            <div className="space-y-4 text-center">
              <span className="badge badge-yellow-v2">Core modules</span>
              <h2 className="mx-auto max-w-[820px] text-heading-3 text-secondary dark:text-white">
                Connected tools for quoting, execution, and finance handoff
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card) => (
              <AnimatedSection key={card.title}>
                <article className="relative h-full overflow-hidden rounded-[28px] border border-[#d7e5f8] bg-[linear-gradient(180deg,#ffffff,#f7fbff)] p-6 shadow-[0_20px_54px_rgba(15,23,42,0.09)] dark:border-stroke-7 dark:bg-[linear-gradient(180deg,rgba(18,24,37,0.96),rgba(13,19,30,0.98))]">
                  <figure className="pointer-events-none absolute -top-[96%] -left-[84%] -z-10 size-[460px] rotate-[320deg] opacity-50 select-none">
                    <Image src={card.gradientSrc} alt="finance-feature-gradient" />
                  </figure>
                  <div className="flex h-full flex-col gap-4">
                    <div className="inline-flex w-fit rounded-full border border-[#1f7ae0]/14 bg-[#1f7ae0]/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1f7ae0] dark:border-white/10 dark:bg-white/[0.04] dark:text-white/72">
                      Module
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-[21px] font-semibold leading-[1.25] text-secondary dark:text-white">{card.title}</h3>
                      <p className="text-[15px] leading-7 text-secondary/80 dark:text-accent/74">{card.body}</p>
                    </div>
                    {card.note ? (
                      <p className="mt-auto rounded-[18px] border border-[#1f7ae0]/12 bg-[#1f7ae0]/[0.04] px-4 py-3 text-[12px] leading-6 text-secondary/68 dark:border-white/10 dark:bg-white/[0.04] dark:text-accent/62">
                        {card.note}
                      </p>
                    ) : null}
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="main-container space-y-8">
          <AnimatedSection>
            <div className="space-y-4 text-center">
              <span className="badge badge-cyan">Payments and refunds</span>
              <h2 className="mx-auto max-w-[760px] text-heading-3 text-secondary dark:text-white">
                Payment, refund, and reporting stay connected
              </h2>
              <p className="mx-auto max-w-[840px] text-[15px] leading-7 text-secondary/74 dark:text-accent/70">
                Create hosted invoice payment links, see paid status after payment reconciliation, issue full or partial invoice refunds when needed, and keep gross, refund, and net reporting visible for month-end review.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {paymentsRefundCards.map((card) => (
              <AnimatedSection key={card.title}>
                <article className="h-full rounded-[26px] border border-[#d9e4f5] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8">
                  <div className="space-y-3">
                    <div className="inline-flex w-fit rounded-full border border-[#1f7ae0]/14 bg-[#1f7ae0]/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1f7ae0] dark:border-white/10 dark:bg-white/[0.04] dark:text-white/72">
                      Connected flow
                    </div>
                    <h3 className="text-[21px] font-semibold leading-[1.25] text-secondary dark:text-white">{card.title}</h3>
                    <p className="text-[15px] leading-7 text-secondary/80 dark:text-accent/74">{card.body}</p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="main-container">
          <AnimatedSection>
            <div className="grid gap-7 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
              <div className="space-y-4">
                <span className="badge badge-cyan">Privacy by role</span>
                <h2 className="max-w-[540px] text-heading-3 text-secondary dark:text-white">
                  Managers keep control. Employees see only what they need.
                </h2>
                <p className="max-w-[520px] text-[15px] leading-7 text-secondary/72 dark:text-accent/70">
                  Business Finance keeps pricing, costs, and final approval decisions with managers while giving employees only the work context required to complete the job and report back.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                <article className="rounded-[26px] border border-[#d9e4f5] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8">
                  <div className="mb-5 space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1f7ae0]">Manager view</span>
                    <h3 className="text-heading-5 text-secondary dark:text-white">Manager sees</h3>
                  </div>
                  <BulletList items={managerSees} />
                </article>
                <article className="rounded-[26px] border border-[#d9e4f5] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8">
                  <div className="mb-5 space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1f7ae0]">Employee view</span>
                    <h3 className="text-heading-5 text-secondary dark:text-white">Employee sees</h3>
                  </div>
                  <BulletList items={employeeSees} />
                </article>
                <article className="rounded-[26px] border border-[#d9e4f5] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8">
                  <div className="mb-5 space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary/54 dark:text-accent/56">Restricted</span>
                    <h3 className="text-heading-5 text-secondary dark:text-white">Employee does not see</h3>
                  </div>
                  <BulletList items={employeeDoesNotSee} muted />
                </article>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="main-container">
          <AnimatedSection>
            <div className="rounded-[32px] border border-[#d9e6f7] bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_42%,#edf5ff_100%)] p-7 shadow-[0_30px_80px_rgba(30,64,175,0.12)] dark:border-stroke-7 dark:bg-[linear-gradient(135deg,rgba(12,18,29,0.98),rgba(19,26,41,0.98))] md:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div className="space-y-4">
                  <span className="badge badge-yellow-v2">Reporting</span>
                  <h2 className="max-w-[520px] text-heading-3 text-secondary dark:text-white">Know the job numbers before month-end</h2>
                  <p className="max-w-[560px] text-[15px] leading-7 text-secondary/76 dark:text-accent/72">
                    Reports are operational readiness tools designed to help managers and accountants review the business faster. Gross totals, refunds, net collected amounts, and tax summaries help prepare records for review; they are not a replacement for professional tax or accounting signoff.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {reportingCards.map((item) => (
                    <div
                      key={item}
                      className="rounded-[20px] border border-white/70 bg-white/90 px-4 py-4 text-sm font-semibold text-secondary shadow-[0_14px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-accent"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 rounded-[20px] border border-[#1f7ae0]/10 bg-white/60 px-5 py-4 text-sm leading-7 text-secondary/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] dark:border-white/10 dark:bg-white/[0.04] dark:text-accent/68">
                Business Finance reporting helps operating teams prepare cleaner month-end handoffs. Use it to review records, refunds, and net activity before professional accounting signoff.
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="main-container">
          <AnimatedSection>
            <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
              <article className="flex h-full flex-col rounded-[30px] border border-[#d9e4f5] bg-white p-6 shadow-[0_24px_64px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8 md:p-7 lg:p-8">
                <span className="badge badge-cyan">Workflow fit</span>
                <h2 className="mt-4 max-w-[620px] text-heading-3 text-secondary dark:text-white">
                  Use Booking for known services. Use Business Finance for custom jobs.
                </h2>
                <div className="mt-7 grid flex-1 gap-5 md:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-heading-5 text-secondary dark:text-white">Booking</h3>
                    <BulletList items={bookingVsFinance.booking} />
                  </div>
                  <div>
                    <h3 className="mb-3 text-heading-5 text-secondary dark:text-white">Business Finance</h3>
                    <BulletList items={bookingVsFinance.finance} />
                  </div>
                </div>
              </article>
              <article className="relative flex h-full overflow-hidden rounded-[30px] bg-secondary px-6 py-8 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:px-8 md:py-10 lg:px-9 lg:py-11">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(31,122,224,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(127,227,108,0.14),transparent_34%)]" />
                <div className="relative flex h-full flex-col justify-between space-y-7">
                  <span className="badge badge-yellow-v2 !bg-[#d7efb2] !text-secondary">Get started</span>
                  <div className="space-y-5">
                    <h2 className="max-w-[480px] text-heading-3 text-white">Run quotes, jobs, and finance handoff in one place</h2>
                    <p className="max-w-[520px] text-[15px] leading-7 text-white/78">
                      Bring quote requests, approvals, payment collection, refunds, work execution, and reporting into one operating system instead of stitching them together later.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <Link href={buildAppUrl('/register', { returnTo })} className="btn btn-white btn-lg min-w-[210px] dark:btn-transparent">
                      Start with Schedulaa
                    </Link>
                    <a href={BOOK_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary-v2 btn-lg min-w-[170px]">
                      Book a demo
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
