import DocsContent from '@/components/documentation/DocsContent';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Docs | Schedulaa',
};

export default function DocsPage() {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <DocsContent />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="Docs"
        ctaHeading="Need implementation help?"
        description="Read setup guides for scheduling, payroll workflows, and website booking flows."
        btnClass="btn-primary hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Get started"
      />
    </main>
  );
}
