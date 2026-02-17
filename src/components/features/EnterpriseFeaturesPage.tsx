'use client';

import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

import { MiniLinkCard, PillarCard } from '@/components/marketing/sections/EnterpriseCards';
import SectionHeading from '@/components/marketing/sections/SectionHeading';
import PageShell from '@/components/shared/layout/PageShell';
import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import StaggerGrid from '@/components/shared/motion/StaggerGrid';
import { isReducedMotionPreferred } from '@/utils/motion';

type FeaturesPageProps = {
  locale: 'en' | 'fa';
};

type FeatureCategory = {
  id: string;
  label: string;
  items: Array<{
    title: string;
    description: string;
    href: string;
    cta: string;
  }>;
};

const categories: FeatureCategory[] = [
  {
    id: 'operations',
    label: 'Operations core',
    items: [
      {
        title: 'Smart scheduling engine',
        description: 'Role-aware scheduling, availability windows, and operational guardrails.',
        href: '/workforce',
        cta: 'Scheduling details',
      },
      {
        title: 'Booking orchestration',
        description: 'Service booking flows with intake, reminders, and resource-aware calendars.',
        href: '/booking',
        cta: 'Booking details',
      },
      {
        title: 'Time and attendance',
        description: 'Accurate tracked hours, exception visibility, and payroll-ready summaries.',
        href: '/features',
        cta: 'Time tracking details',
      },
    ],
  },
  {
    id: 'finance',
    label: 'Finance workflows',
    items: [
      {
        title: 'Payroll workflow controls',
        description: 'Preview, finalize, and export workflows with auditable snapshots.',
        href: '/payroll',
        cta: 'Payroll details',
      },
      {
        title: 'Document outputs',
        description: 'Generate operationally-aligned payroll and compliance documents.',
        href: '/docs',
        cta: 'Docs details',
      },
      {
        title: 'Audit-friendly records',
        description: 'Track finalization history and changes with traceable event logs.',
        href: '/client/support',
        cta: 'Audit guidance',
      },
    ],
  },
  {
    id: 'growth',
    label: 'Growth stack',
    items: [
      {
        title: 'Website builder + booking',
        description: 'Launch branded landing pages tied directly to your service booking workflows.',
        href: '/website-builder',
        cta: 'Website details',
      },
      {
        title: 'Marketing workflow pages',
        description: 'Campaign and lead workflows for service businesses that depend on local demand.',
        href: '/marketing',
        cta: 'Marketing details',
      },
      {
        title: 'Industry playbooks',
        description: 'Pre-structured landing pages and operational guides by industry.',
        href: '/industries',
        cta: 'Industry details',
      },
    ],
  },
];

const integrations = ['Stripe', 'QuickBooks', 'Xero', 'Zapier'];

export default function EnterpriseFeaturesPage({ locale }: FeaturesPageProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const panelRef = useRef<HTMLDivElement>(null);

  const category = useMemo(
    () => categories.find((item) => item.id === activeCategory) ?? categories[0],
    [activeCategory],
  );

  const onCategoryChange = (nextId: string) => {
    if (nextId === activeCategory) return;

    const panel = panelRef.current;
    if (!panel || isReducedMotionPreferred()) {
      setActiveCategory(nextId);
      return;
    }

    gsap.to(panel, {
      autoAlpha: 0,
      y: 10,
      duration: 0.2,
      ease: 'power2.out',
      onComplete: () => {
        setActiveCategory(nextId);
        gsap.fromTo(
          panel,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.34, ease: 'power3.out' },
        );
      },
    });
  };

  return (
    <PageShell>
      <AnimatedSection>
        <section className="rounded-[24px] border border-stroke-2 bg-white p-8 shadow-2 dark:border-stroke-7 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">Features</p>
          <h1 className="mt-5 max-w-[800px]">Enterprise-grade features for service operations, staffing, and payroll workflows.</h1>
          <p className="mt-4 max-w-[860px] text-tagline-1 text-secondary/70 dark:text-accent/70">
            Schedulaa is designed to keep operational workflows connected, auditable, and execution-ready across bookings,
            shift management, and payroll preparation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${locale}/pricing`} className="btn btn-primary hover:btn-secondary dark:hover:btn-accent">
              View pricing
            </Link>
            <Link href={`/${locale}/demo`} className="btn btn-primary-v2 dark:btn-transparent">
              Schedule demo
            </Link>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section>
          <SectionHeading
            eyebrow="Feature categories"
            title="Choose the area you want to evaluate first"
            description="Switch between categories to review implementation-critical capabilities."
          />
          <div className="mt-6 inline-flex flex-wrap gap-2 rounded-full border border-stroke-2 bg-white p-2 dark:border-stroke-7 dark:bg-background-8">
            {categories.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onCategoryChange(item.id)}
                className={`rounded-full px-4 py-2 text-tagline-2 font-semibold transition ${
                  activeCategory === item.id
                    ? 'bg-primary-500 text-white'
                    : 'text-secondary/70 hover:bg-background-3 dark:text-accent/70 dark:hover:bg-background-7'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div ref={panelRef} className="mt-6">
            <StaggerGrid className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {category.items.map((item) => (
                <div key={item.title} data-stagger-item>
                  <PillarCard title={item.title} description={item.description} href={`/${locale}${item.href}`} cta={item.cta} />
                </div>
              ))}
            </StaggerGrid>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="rounded-[20px] border border-stroke-2 bg-white p-6 shadow-1 dark:border-stroke-7 dark:bg-background-8 md:p-8">
          <SectionHeading
            eyebrow="Compliance posture"
            title="Shift-connected and auditable by default"
            description="Finalized outputs are tied to scheduling and time records, reducing post-run reconciliation and improving compliance confidence."
            className="max-w-none"
          />
          <StaggerGrid className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              'Structured payroll previews with traceable changes',
              'Finalization snapshots with audit continuity',
              'Operational records aligned to attendance data',
              'Exports that preserve payroll run context',
            ].map((point) => (
              <div
                key={point}
                data-stagger-item
                className="rounded-xl border border-stroke-2 bg-background-3 p-4 text-tagline-1 dark:border-stroke-7 dark:bg-background-7"
              >
                {point}
              </div>
            ))}
          </StaggerGrid>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="rounded-[20px] border border-stroke-2 bg-white p-6 shadow-1 dark:border-stroke-7 dark:bg-background-8 md:p-8">
          <SectionHeading
            eyebrow="Integrations"
            title="Finance and workflow stack compatibility"
            description="Connect core services through accounting and automation workflows without sacrificing operational control."
            className="max-w-none"
          />
          <StaggerGrid className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            {integrations.map((integration) => (
              <div
                key={integration}
                data-stagger-item
                className="group flex items-center justify-center rounded-xl border border-stroke-2 bg-background-3 px-4 py-5 text-tagline-1 font-semibold transition hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-1 dark:border-stroke-7 dark:bg-background-7"
              >
                <span className="inline-flex transition group-hover:scale-105">{integration}</span>
              </div>
            ))}
          </StaggerGrid>
          <div className="mt-5">
            <MiniLinkCard
              title="Automation and integration guidance"
              description="See integration setup docs and workflow options for operations and payroll teams."
              href={`/${locale}/docs`}
            />
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="rounded-[24px] border border-stroke-2 bg-white p-8 shadow-2 dark:border-stroke-7 dark:bg-background-8 md:p-10">
          <SectionHeading
            eyebrow="Next step"
            title="Map your feature rollout by operation priority"
            description="Start with booking and scheduling, then layer payroll and website workflows into one controlled rollout."
            className="max-w-none"
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`/${locale}/demo`} className="btn btn-primary hover:btn-secondary dark:hover:btn-accent">
              Talk to rollout team
            </Link>
            <Link href={`/${locale}/pricing`} className="btn btn-primary-v2 dark:btn-transparent">
              See pricing
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </PageShell>
  );
}
