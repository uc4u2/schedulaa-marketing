import Link from 'next/link';
import { headers } from 'next/headers';
import { Metadata } from 'next';

import { MetricCard, MiniLinkCard, PillarCard } from '@/components/marketing/sections/EnterpriseCards';
import SectionHeading from '@/components/marketing/sections/SectionHeading';
import PageShell from '@/components/shared/layout/PageShell';
import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import ParallaxAccent from '@/components/shared/motion/ParallaxAccent';
import StaggerGrid from '@/components/shared/motion/StaggerGrid';
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

const metrics = [
  { label: 'Team fit', value: '1-80 employees', detail: 'Built for local operators, multi-location clinics, and modern service teams.' },
  { label: 'Operations scope', value: '5 pillars', detail: 'Booking, scheduling, time, payroll-ready outputs, and websites in one stack.' },
  { label: 'Launch velocity', value: '< 2 weeks', detail: 'Migrate core workflows quickly with guided rollout support.' },
];

const pillars = [
  {
    title: 'Booking',
    description: 'Public booking pages, reminders, and structured intake forms for service operations.',
    href: '/booking',
    cta: 'Explore booking',
  },
  {
    title: 'Scheduling',
    description: 'Shift planning, availability, conflict controls, and manager-ready calendar views.',
    href: '/workforce',
    cta: 'Explore scheduling',
  },
  {
    title: 'Time tracking',
    description: 'Track hours and attendance with export-ready records for payroll and audits.',
    href: '/features',
    cta: 'Explore time tracking',
  },
  {
    title: 'Payroll workflows',
    description: 'US/Canada payroll workflows with exports, audit trails, and employer tax visibility.',
    href: '/payroll',
    cta: 'Explore payroll',
  },
  {
    title: 'Websites & commerce',
    description: 'Launch branded websites with service pages, booking CTAs, and payment-ready flows.',
    href: '/website-builder',
    cta: 'Explore websites',
  },
];

export default async function Homepage() {
  const locale = await getLocale();

  return (
    <PageShell>
      <AnimatedSection>
        <section className="relative overflow-hidden rounded-[24px] border border-stroke-2 bg-white p-8 shadow-2 dark:border-stroke-7 dark:bg-background-8 md:p-12">
          <ParallaxAccent className="-top-20 -right-12 h-72 w-72" />
          <ParallaxAccent className="-bottom-16 left-10 h-56 w-56 opacity-70" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="badge badge-yellow-v2">Enterprise operations platform</p>
              <h1 className="mt-5 max-w-[760px]">Run booking, shifts, payroll-ready exports, and website ops from one command center.</h1>
              <p className="mt-4 max-w-[700px] text-tagline-1 text-secondary/70 dark:text-accent/70">
                Schedulaa removes fragmented tooling for service teams and gives managers one source of truth across client
                bookings, workforce operations, and payroll preparation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={withLocalePath('/pricing', locale)} className="btn btn-primary hover:btn-secondary dark:hover:btn-accent">
                  View pricing
                </Link>
                <Link href={withLocalePath('/demo', locale)} className="btn btn-primary-v2 dark:btn-transparent">
                  Book demo
                </Link>
              </div>
            </div>
            <div className="rounded-[20px] border border-stroke-2 bg-background-3 p-5 dark:border-stroke-7 dark:bg-background-7">
              <p className="text-tagline-3 uppercase tracking-[0.16em] text-primary-500">How it works</p>
              <ol className="mt-4 space-y-4">
                {[
                  'Booking captures demand and customer context.',
                  'Scheduling aligns people, shifts, and resources.',
                  'Payroll exports stay auditable and ready for filing workflows.',
                ].map((step) => (
                  <li key={step} className="rounded-xl border border-stroke-2 bg-white p-4 text-tagline-1 dark:border-stroke-7 dark:bg-background-8">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section>
          <SectionHeading
            eyebrow="Proof"
            title="Built for service businesses with 1 to 80 employees"
            description="Teams use Schedulaa to coordinate daily execution without switching between disconnected scheduling, payroll, and website tools."
          />
          <StaggerGrid className="mt-6 grid gap-4 md:grid-cols-3">
            {metrics.map((item) => (
              <div key={item.label} data-stagger-item>
                <MetricCard {...item} />
              </div>
            ))}
          </StaggerGrid>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section>
          <SectionHeading
            eyebrow="Product pillars"
            title="One system across your core operational workflows"
            description="Each pillar is strong on its own and synchronized when you need full operational visibility."
          />
          <StaggerGrid className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pillars.map((item) => (
              <div key={item.title} data-stagger-item>
                <PillarCard {...item} href={withLocalePath(item.href, locale)} />
              </div>
            ))}
          </StaggerGrid>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[20px] border border-stroke-2 bg-white p-6 shadow-1 dark:border-stroke-7 dark:bg-background-8">
            <SectionHeading
              eyebrow="Compare"
              title="Evaluate Schedulaa side-by-side"
              description="Use direct comparison pages to assess operational fit, migration effort, and long-term scalability."
              className="max-w-none"
            />
            <div className="mt-5 grid gap-3">
              <MiniLinkCard
                title="Schedulaa vs Vagaro"
                description="Compare booking control, scheduling depth, and workflow flexibility."
                href={withLocalePath('/compare/vagaro', locale)}
              />
              <MiniLinkCard
                title="Schedulaa vs Square Appointments"
                description="See differences in staffing workflows, reporting, and growth readiness."
                href={withLocalePath('/compare/square-appointments', locale)}
              />
              <MiniLinkCard
                title="Schedulaa vs QuickBooks Payroll"
                description="Understand where operations orchestration extends beyond payroll software."
                href={withLocalePath('/compare/quickbooks-payroll', locale)}
              />
            </div>
            <Link href={withLocalePath('/compare', locale)} className="mt-5 inline-flex text-tagline-2 font-semibold text-primary-500">
              View compare hub
            </Link>
          </div>

          <div className="rounded-[20px] border border-stroke-2 bg-white p-6 shadow-1 dark:border-stroke-7 dark:bg-background-8">
            <SectionHeading
              eyebrow="Industries"
              title="Industry landing pages for service-specific workflows"
              description="Explore guides aligned with booking-heavy service models."
              className="max-w-none"
            />
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <MiniLinkCard title="Spa booking" description="Rooms, therapist schedules, and recurring treatment plans." href={withLocalePath('/booking/spa', locale)} />
              <MiniLinkCard title="Salon booking" description="Staff, chair capacity, and service-duration coordination." href={withLocalePath('/booking/salon', locale)} />
              <MiniLinkCard title="Doctor booking" description="Clinic workflows, intake, and calendar reliability." href={withLocalePath('/booking/doctor', locale)} />
              <MiniLinkCard title="Tutor booking" description="Session windows, instructor capacity, and student flows." href={withLocalePath('/booking/tutor', locale)} />
            </div>
            <Link href={withLocalePath('/booking', locale)} className="mt-5 inline-flex text-tagline-2 font-semibold text-primary-500">
              View booking hub
            </Link>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="rounded-[24px] border border-stroke-2 bg-white p-8 shadow-2 dark:border-stroke-7 dark:bg-background-8 md:p-10">
          <SectionHeading
            eyebrow="Next step"
            title="Plan your rollout with one integrated operations platform"
            description="Get a practical rollout map for your current stack, staffing model, and compliance requirements."
            className="max-w-none"
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={withLocalePath('/demo', locale)} className="btn btn-primary hover:btn-secondary dark:hover:btn-accent">
              Schedule a demo
            </Link>
            <Link href={withLocalePath('/features', locale)} className="btn btn-primary-v2 dark:btn-transparent">
              Explore features
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </PageShell>
  );
}
