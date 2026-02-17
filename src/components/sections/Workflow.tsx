'use client';

import WorkflowExperience from '@/components/marketing/home/WorkflowExperience';
import SectionHeading from '@/components/marketing/sections/SectionHeading';
import AnimatedSection from '@/components/shared/motion/AnimatedSection';

type WorkflowProps = {
  title?: string;
  description?: string;
  eyebrow?: string;
};

export default function Workflow({
  eyebrow = 'Workflow',
  title = 'Connect booking, scheduling, and payroll readiness in one operating loop',
  description = 'Move from demand capture to shift execution and finalized payroll outputs without breaking context between systems.',
}: WorkflowProps) {
  return (
    <AnimatedSection>
      <section>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-6">
          <WorkflowExperience />
        </div>
      </section>
    </AnimatedSection>
  );
}
