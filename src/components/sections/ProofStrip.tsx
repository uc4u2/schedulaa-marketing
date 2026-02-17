'use client';

import { MetricCard } from '@/components/marketing/sections/EnterpriseCards';
import SectionHeading from '@/components/marketing/sections/SectionHeading';
import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import StaggerGrid from '@/components/shared/motion/StaggerGrid';

const metrics = [
  { label: 'Team fit', value: '1-80 employees', detail: 'Built for local operators, multi-location teams, and scaling service businesses.' },
  { label: 'Ops scope', value: '5 pillars', detail: 'Booking, scheduling, time tracking, payroll workflows, and websites in one stack.' },
  { label: 'Launch velocity', value: '< 2 weeks', detail: 'Most teams ship core workflows fast with guided implementation support.' },
];

type ProofStripProps = {
  title?: string;
  description?: string;
};

export default function ProofStrip({
  title = 'Built for service businesses with 1-80 employees',
  description = 'Teams run daily operations in one system instead of stitching together disconnected tools.',
}: ProofStripProps) {
  return (
    <AnimatedSection>
      <section>
        <SectionHeading eyebrow="Proof" title={title} description={description} />
        <StaggerGrid className="mt-6 grid gap-4 md:grid-cols-3">
          {metrics.map((item) => (
            <div key={item.label} data-stagger-item>
              <MetricCard {...item} />
            </div>
          ))}
        </StaggerGrid>
      </section>
    </AnimatedSection>
  );
}
