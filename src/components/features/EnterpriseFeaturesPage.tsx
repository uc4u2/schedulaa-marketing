'use client';

import Link from 'next/link';

import { AppLocale, withLocalePath } from '@/utils/locale';
import PageShell from '@/components/shared/layout/PageShell';
import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import SectionHeading from '@/components/marketing/sections/SectionHeading';
import StaggerGrid from '@/components/shared/motion/StaggerGrid';
import { MiniLinkCard } from '@/components/marketing/sections/EnterpriseCards';
import FeatureTabs from '@/components/sections/FeatureTabs';
import ProofStrip from '@/components/sections/ProofStrip';
import Workflow from '@/components/sections/Workflow';

type FeaturesPageProps = {
  locale: AppLocale;
};

export default function EnterpriseFeaturesPage({ locale }: FeaturesPageProps) {
  return (
    <PageShell>
      <AnimatedSection>
        <section className="rounded-[24px] border border-stroke-2 bg-white p-8 shadow-2 dark:border-stroke-7 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">Features</p>
          <h1 className="mt-5 max-w-[800px]">Enterprise-grade capabilities for scheduling, booking, time, and payroll workflows.</h1>
          <p className="mt-4 max-w-[860px] text-tagline-1 text-secondary/70 dark:text-accent/70">
            Schedulaa keeps operational data connected across shifts, bookings, and payroll preparation so teams can scale with fewer manual reconciliations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={withLocalePath('/pricing', locale)} className="btn btn-primary hover:btn-secondary dark:hover:btn-accent">
              View pricing
            </Link>
            <Link href={withLocalePath('/demo', locale)} className="btn btn-primary-v2 dark:btn-transparent">
              Schedule demo
            </Link>
          </div>
        </section>
      </AnimatedSection>

      <FeatureTabs locale={locale} />
      <ProofStrip
        title="Shift-connected and auditable by default"
        description="Operational records stay linked from booking through payroll finalization, improving compliance posture and internal accountability."
      />
      <Workflow
        eyebrow="Execution flow"
        title="Operate from booking intake to payroll outputs without context loss"
        description="Unified workflow controls help managers reduce overrides, manual patching, and reporting drift."
      />

      <AnimatedSection>
        <section>
          <SectionHeading
            eyebrow="Integrations"
            title="Connect your finance and operations stack"
            description="Keep Schedulaa as the operational source while integrating accounting and automation services."
          />
          <StaggerGrid className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {['Stripe', 'QuickBooks', 'Xero', 'Zapier'].map((integration) => (
              <div
                key={integration}
                data-stagger-item
                className="flex items-center justify-center rounded-xl border border-stroke-2 bg-white px-5 py-6 text-tagline-1 font-semibold shadow-1 transition hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-2 dark:border-stroke-7 dark:bg-background-8"
              >
                {integration}
              </div>
            ))}
          </StaggerGrid>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <MiniLinkCard
              title="Integration docs"
              description="Technical setup and rollout guidance for connected workflows."
              href={withLocalePath('/docs', locale)}
            />
            <MiniLinkCard
              title="Support playbook"
              description="Implementation help and operational migration support."
              href={withLocalePath('/client/support', locale)}
            />
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="rounded-[24px] border border-stroke-2 bg-white p-8 shadow-2 dark:border-stroke-7 dark:bg-background-8 md:p-10">
          <SectionHeading
            eyebrow="Next step"
            title="Ready to deploy features that match your operating model?"
            description="Build a rollout path with clear milestones across booking, scheduling, and payroll workflow controls."
            className="max-w-none"
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={withLocalePath('/demo', locale)} className="btn btn-primary hover:btn-secondary dark:hover:btn-accent">
              Talk to rollout team
            </Link>
            <Link href={withLocalePath('/pricing', locale)} className="btn btn-primary-v2 dark:btn-transparent">
              See pricing
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </PageShell>
  );
}
