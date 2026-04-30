'use client';

import Link from 'next/link';

import { getCommerceCopy } from '@/components/commerce/localeCopy';
import { MetricCard, MiniLinkCard, PillarCard } from '@/components/marketing/sections/EnterpriseCards';
import SectionHeading from '@/components/marketing/sections/SectionHeading';
import PageShell from '@/components/shared/layout/PageShell';
import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import StaggerGrid from '@/components/shared/motion/StaggerGrid';
import { AppLocale, withLocalePath } from '@/utils/locale';

type CommercePlatformPageProps = {
  locale: AppLocale;
};

export default function CommercePlatformPage({ locale }: CommercePlatformPageProps) {
  const copy = getCommerceCopy(locale);
  return (
    <PageShell>
      <AnimatedSection>
        <section className="premium-card rounded-[24px] p-8 dark:border-stroke-7 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">{copy.hero.badge}</p>
          <h1 className="mt-5 max-w-[860px]">
            {copy.hero.title}
          </h1>
          <p className="mt-4 max-w-[920px] text-tagline-1 text-secondary/70 dark:text-accent/70">
            {copy.hero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={withLocalePath('/pricing', locale)}
              className="btn btn-primary btn-md min-w-[160px] justify-center px-6 hover:btn-secondary dark:hover:btn-accent"
            >
              {copy.hero.pricing}
            </Link>
            <Link
              href={withLocalePath('/demo', locale)}
              className="btn btn-primary-v2 btn-md min-w-[170px] justify-center px-6 dark:btn-transparent"
            >
              {copy.hero.demo}
            </Link>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section>
          <SectionHeading
            eyebrow={copy.overview.eyebrow}
            title={copy.overview.title}
            description={copy.overview.description}
          />
          <StaggerGrid className="mt-6 grid gap-4 md:grid-cols-3">
            {copy.overview.metrics.map((item) => (
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
            eyebrow={copy.workflows.eyebrow}
            title={copy.workflows.title}
            description={copy.workflows.description}
          />
          <StaggerGrid className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {copy.workflows.cards.map((item) => (
              <div key={item.title} data-stagger-item>
                <PillarCard
                  title={item.title}
                  description={item.description}
                  href={withLocalePath(item.href, locale)}
                  cta={item.cta}
                />
              </div>
            ))}
          </StaggerGrid>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section>
          <SectionHeading
            eyebrow={copy.controls.eyebrow}
            title={copy.controls.title}
            description={copy.controls.description}
          />
          <StaggerGrid className="mt-6 grid gap-4 md:grid-cols-2">
            {copy.controls.cards.map((item) => (
              <article
                key={item.title}
                data-stagger-item
                className="premium-card rounded-[20px] p-6 dark:border-stroke-7 dark:bg-background-8"
              >
                <h3 className="premium-heading text-[1.26rem] leading-[1.2] font-semibold">{item.title}</h3>
                <p className="mt-3 text-tagline-1 text-secondary/72 dark:text-accent/72">{item.body}</p>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="text-tagline-2 text-secondary/72 dark:text-accent/72">
                      • {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </StaggerGrid>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section>
          <SectionHeading
            eyebrow={copy.connected.eyebrow}
            title={copy.connected.title}
            description={copy.connected.description}
          />
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {copy.connected.cards.map((item) => (
              <MiniLinkCard
                key={item.title}
                title={item.title}
                description={item.description}
                href={withLocalePath(item.href, locale)}
              />
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section>
          <SectionHeading
            eyebrow={copy.faq.eyebrow}
            title={copy.faq.title}
            description={copy.faq.description}
          />
          <StaggerGrid className="mt-6 grid gap-4 md:grid-cols-2">
            {copy.faq.cards.map((item) => (
              <article
                key={item.title}
                data-stagger-item
                className="premium-card rounded-[20px] p-6 dark:border-stroke-7 dark:bg-background-8"
              >
                <h3 className="premium-heading text-[1.18rem] font-semibold">{item.title}</h3>
                <p className="mt-3 text-tagline-1 text-secondary/72 dark:text-accent/72">{item.description}</p>
              </article>
            ))}
          </StaggerGrid>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="premium-card rounded-[24px] p-8 dark:border-stroke-7 dark:bg-background-8 md:p-10">
          <SectionHeading
            eyebrow={copy.cta.eyebrow}
            title={copy.cta.title}
            description={copy.cta.description}
            className="max-w-none"
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={withLocalePath('/demo', locale)}
              className="btn btn-primary btn-md min-w-[190px] justify-center px-6 hover:btn-secondary dark:hover:btn-accent"
            >
              {copy.cta.talk}
            </Link>
            <Link
              href={withLocalePath('/pricing', locale)}
              className="btn btn-primary-v2 btn-md min-w-[150px] justify-center px-6 dark:btn-transparent"
            >
              {copy.cta.pricing}
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </PageShell>
  );
}
