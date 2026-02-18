'use client';

import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import StaggerGrid from '@/components/shared/motion/StaggerGrid';

type WhyChooseProps = {
  title: string;
  points: string[];
};

export default function TemplateWhyChooseLayout({ title, points }: WhyChooseProps) {
  return (
    <main className="dark:bg-background-5 bg-white">
      <section className="pt-20 pb-14 md:pt-24 md:pb-16 lg:pt-28 lg:pb-[88px]">
        <div className="main-container text-center">
          <AnimatedSection>
            <span className="badge badge-green">Why choose us</span>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="mt-5">{title}</h2>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[120px]">
        <div className="main-container">
          <StaggerGrid className="grid grid-cols-12 gap-5" childSelector="[data-stagger-item]">
            {points.map((point) => (
              <article key={point} data-stagger-item className="col-span-12 md:col-span-6 lg:col-span-4 rounded-[20px] border border-stroke-1 bg-background-1 p-7 dark:border-stroke-7 dark:bg-background-6 lg:p-[34px]">
                <p>{point}</p>
              </article>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </main>
  );
}
