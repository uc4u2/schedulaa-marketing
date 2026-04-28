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
  'Invoices and payment links are disconnected from job execution.',
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
  'Track profitability, tax summary, and month-end readiness',
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
    body: 'Convert accepted estimates into invoices and create hosted payment links.',
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
    body: 'See tax summary, profitability, missing receipts, low stock, and month-end readiness.',
    gradientSrc: gradient9Img,
  },
];

const reportingCards = [
  'Estimated margin',
  'Planned labor cost',
  'Approved material cost',
  'Tax summary',
  'Missing receipts',
  'Low stock',
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
  finance: ['Custom pricing', 'Quote approval needed', 'Work order execution', 'Material review', 'Profitability tracking'],
};

function BulletList({ items, muted = false }: { items: string[]; muted?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-secondary/78 dark:text-accent/74">
          <span className={`mt-2 size-2 rounded-full ${muted ? 'bg-secondary/30 dark:bg-accent/30' : 'bg-[#1f7ae0]'}`} />
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
                    From quote request to approved estimate, invoice, payment link, work order, field report, and
                    month-end readiness - all in one workflow.
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
                  Built for service businesses that need more than booking: quotes, crews, materials, approvals, and job profitability.
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
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
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
            <div className="grid grid-cols-12 items-start gap-y-14 xl:gap-[60px]">
              <div className="col-span-12 lg:sticky lg:top-28 lg:col-span-5">
                <div className="space-y-4 text-center lg:text-left">
                  <span className="badge badge-cyan">End-to-end workflow</span>
                  <h2 className="mx-auto max-w-[760px] text-heading-3 text-secondary dark:text-white lg:mx-0 lg:max-w-[520px]">
                    One flow from request to completed job
                  </h2>
                  <p className="mx-auto max-w-[720px] text-[16px] leading-7 text-secondary/72 dark:text-accent/70 lg:mx-0 lg:max-w-[520px]">
                    Capture the request, price the work, collect approval, turn it into an invoice and work order, then review what becomes official before month-end.
                  </p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="grid gap-4 md:grid-cols-2">
                  {workflowSteps.map((step, index) => (
                    <AnimatedSection key={step}>
                      <article className="rounded-[24px] border border-stroke-2 bg-white p-5 shadow-[0_20px_56px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8">
                        <div className="mb-3 flex size-10 items-center justify-center rounded-2xl bg-[#1f7ae0]/10 text-sm font-semibold text-[#1f7ae0]">
                          {index + 1}
                        </div>
                        <p className="text-[15px] leading-7 text-secondary/80 dark:text-accent/76">{step}</p>
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
              <h2 className="text-heading-3 text-secondary dark:text-white">Connected tools for quoting, execution, and finance handoff</h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card) => (
              <AnimatedSection key={card.title}>
                <article className="relative overflow-hidden rounded-[26px] border border-stroke-2 bg-white p-6 shadow-[0_20px_56px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8">
                  <figure className="pointer-events-none absolute -top-[110%] -left-[90%] -z-10 size-[460px] rotate-[320deg] opacity-40 select-none">
                    <Image src={card.gradientSrc} alt="finance-feature-gradient" />
                  </figure>
                  <div className="space-y-3">
                    <h3 className="text-heading-5 text-secondary dark:text-white">{card.title}</h3>
                    <p className="text-sm leading-7 text-secondary/74 dark:text-accent/72">{card.body}</p>
                    {card.note ? <p className="text-xs leading-6 text-secondary/58 dark:text-accent/58">{card.note}</p> : null}
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
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-1 space-y-4">
                <span className="badge badge-cyan">Privacy by role</span>
                <h2 className="text-heading-3 text-secondary dark:text-white">Managers keep control. Employees see only what they need.</h2>
              </div>
              <div className="lg:col-span-2 grid gap-5 md:grid-cols-3">
                <article className="rounded-[24px] border border-stroke-2 bg-white p-5 shadow-[0_20px_56px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8">
                  <h3 className="mb-4 text-heading-5 text-secondary dark:text-white">Manager sees</h3>
                  <BulletList items={managerSees} />
                </article>
                <article className="rounded-[24px] border border-stroke-2 bg-white p-5 shadow-[0_20px_56px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8">
                  <h3 className="mb-4 text-heading-5 text-secondary dark:text-white">Employee sees</h3>
                  <BulletList items={employeeSees} />
                </article>
                <article className="rounded-[24px] border border-stroke-2 bg-white p-5 shadow-[0_20px_56px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8">
                  <h3 className="mb-4 text-heading-5 text-secondary dark:text-white">Employee does not see</h3>
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
            <div className="rounded-[30px] border border-stroke-2 bg-gradient-to-br from-[#f8fbff] via-white to-[#eef5ff] p-7 shadow-[0_28px_70px_rgba(30,64,175,0.12)] dark:border-stroke-7 dark:from-background-7 dark:via-background-8 dark:to-background-7 md:p-8">
              <div className="space-y-4">
                <span className="badge badge-yellow-v2">Reporting</span>
                <h2 className="text-heading-3 text-secondary dark:text-white">Know the job numbers before month-end</h2>
                <p className="max-w-[860px] text-[15px] leading-7 text-secondary/74 dark:text-accent/72">
                  Reports are operational readiness tools designed to help managers and accountants review the business faster. They are not a replacement for professional tax or accounting review.
                </p>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {reportingCards.map((item) => (
                  <div key={item} className="rounded-[22px] border border-stroke-2 bg-white/90 px-4 py-4 text-sm font-medium text-secondary shadow-[0_16px_36px_rgba(15,23,42,0.06)] dark:border-stroke-7 dark:bg-background-8 dark:text-accent">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="main-container">
          <AnimatedSection>
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-[28px] border border-stroke-2 bg-white p-6 shadow-[0_24px_64px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8 md:p-7">
                <span className="badge badge-cyan">Workflow fit</span>
                <h2 className="mt-4 text-heading-3 text-secondary dark:text-white">Use Booking for known services. Use Business Finance for custom jobs.</h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
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
              <article className="rounded-[28px] bg-secondary px-6 py-8 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:px-8 md:py-10">
                <div className="space-y-5">
                  <span className="badge badge-yellow-v2 !bg-[#d7efb2] !text-secondary">Get started</span>
                  <h2 className="text-heading-3 text-white">Run quotes, jobs, and finance handoff in one place</h2>
                  <p className="text-[15px] leading-7 text-white/78">
                    Bring quote requests, approvals, payment collection, work execution, and reporting into one operating system instead of stitching them together later.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href={buildAppUrl('/register', { returnTo })} className="btn btn-white btn-md min-w-[190px] dark:btn-transparent">
                      Start with Schedulaa
                    </Link>
                    <a href={BOOK_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary-v2 btn-md min-w-[150px]">
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
