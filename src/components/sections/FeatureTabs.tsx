'use client';

import { useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

import { PillarCard } from '@/components/marketing/sections/EnterpriseCards';
import SectionHeading from '@/components/marketing/sections/SectionHeading';
import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import StaggerGrid from '@/components/shared/motion/StaggerGrid';
import { isReducedMotionPreferred } from '@/utils/motion';
import { AppLocale, withLocalePath } from '@/utils/locale';

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
        description: 'Role-aware staffing, availability windows, and calendar conflict prevention.',
        href: '/workforce',
        cta: 'Explore scheduling',
      },
      {
        title: 'Booking orchestration',
        description: 'Service booking flows with intake, reminders, and resource-aware slots.',
        href: '/booking',
        cta: 'Explore booking',
      },
      {
        title: 'Time and attendance',
        description: 'Accurate tracked hours and exception controls for cleaner payroll prep.',
        href: '/features',
        cta: 'Explore time tracking',
      },
    ],
  },
  {
    id: 'finance',
    label: 'Finance workflows',
    items: [
      {
        title: 'Payroll workflow controls',
        description: 'Preview, finalize, and export payroll runs with strong audit history.',
        href: '/payroll',
        cta: 'Explore payroll',
      },
      {
        title: 'Operational documents',
        description: 'Generate exports and documentation aligned to finalized payroll snapshots.',
        href: '/docs',
        cta: 'Explore docs',
      },
      {
        title: 'Audit continuity',
        description: 'Trace finalization decisions and maintain accountability across teams.',
        href: '/client/support',
        cta: 'Explore support',
      },
    ],
  },
  {
    id: 'growth',
    label: 'Growth stack',
    items: [
      {
        title: 'Website builder + booking',
        description: 'Publish service pages and booking funnels with a unified operational backend.',
        href: '/website-builder',
        cta: 'Explore websites',
      },
      {
        title: 'Marketing workflows',
        description: 'Campaign pages and lead workflows tuned for service businesses.',
        href: '/marketing',
        cta: 'Explore marketing',
      },
      {
        title: 'Industry playbooks',
        description: 'Landing templates and guidance for booking-heavy teams by industry.',
        href: '/industries',
        cta: 'Explore industries',
      },
    ],
  },
];

type FeatureTabsProps = {
  locale: AppLocale;
};

export default function FeatureTabs({ locale }: FeatureTabsProps) {
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
      y: 8,
      duration: 0.22,
      ease: 'power2.out',
      onComplete: () => {
        setActiveCategory(nextId);
        gsap.fromTo(panel, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.32, ease: 'power3.out' });
      },
    });
  };

  return (
    <AnimatedSection>
      <section>
        <SectionHeading
          eyebrow="Feature categories"
          title="Choose the area you want to evaluate first"
          description="Switch categories to review implementation-critical capabilities."
        />
        <div className="mt-6 inline-flex flex-wrap gap-2 rounded-full border border-stroke-2 bg-white p-2 dark:border-stroke-7 dark:bg-background-8">
          {categories.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onCategoryChange(item.id)}
              className={
                activeCategory === item.id
                  ? 'rounded-full bg-primary-500 px-4 py-2 text-tagline-2 font-semibold text-white transition'
                  : 'rounded-full px-4 py-2 text-tagline-2 font-semibold text-secondary/70 transition hover:bg-background-3 dark:text-accent/70 dark:hover:bg-background-7'
              }
            >
              {item.label}
            </button>
          ))}
        </div>

        <div ref={panelRef} className="mt-6">
          <StaggerGrid className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {category.items.map((item) => (
              <div key={item.title} data-stagger-item>
                <PillarCard title={item.title} description={item.description} href={withLocalePath(item.href, locale)} cta={item.cta} />
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </AnimatedSection>
  );
}
