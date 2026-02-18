'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import CTA from '@/components/shared/cta/CTA';
import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import StaggerGrid from '@/components/shared/motion/StaggerGrid';
import { detectLocaleFromPath, withLocalePath } from '@/utils/locale';

type CtaLink = { label: string; href: string };

type SectionItem = {
  title: string;
  body: string;
  links?: Array<{ label: string; href: string }>;
};

type SectionBlock = {
  overline: string;
  title: string;
  items: SectionItem[];
};

type WebsiteBuilderConfig = {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
  };
  sections: SectionBlock[];
  stepsTitle: string;
  steps: Array<{ title: string; description: string }>;
  faqTitle: string;
  faq: Array<{ question: string; answer: string }>;
  cta: {
    overline?: string;
    title: string;
    body?: string;
    primary?: CtaLink;
  };
};

function normalizeHref(href: string, locale: ReturnType<typeof detectLocaleFromPath>) {
  if (!href.startsWith('/')) return href;
  return withLocalePath(href, locale);
}

function FeatureCard({ page, locale }: { page: WebsiteBuilderConfig; locale: ReturnType<typeof detectLocaleFromPath> }) {
  const core = page.sections[0];
  const visualCards = core?.items?.slice(0, 2) || [];

  return (
    <section className="pt-32 pb-24 sm:pt-36 md:pt-42 md:pb-32 lg:pb-44 xl:pt-[180px] xl:pb-[200px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-5 text-center">
          <AnimatedSection>
            <span className="badge badge-green">{page.hero.badge}</span>
          </AnimatedSection>
          <AnimatedSection>
            <h2>{page.hero.title}</h2>
          </AnimatedSection>
          <AnimatedSection>
            <p className="mx-auto max-w-[760px]">{page.hero.subtitle}</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href={normalizeHref(page.hero.primaryCta.href, locale)} className="btn btn-primary btn-md hover:btn-secondary dark:hover:btn-accent">
                {page.hero.primaryCta.label}
              </Link>
              <Link href={normalizeHref(page.hero.secondaryCta.href, locale)} className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                {page.hero.secondaryCta.label}
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <StaggerGrid className="grid grid-cols-12 gap-5" childSelector="[data-stagger-item]">
          <article data-stagger-item className="col-span-12 lg:col-span-8 border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6 rounded-[20px] border p-7 lg:p-[42px]">
            <p className="text-tagline-2 text-primary-500">{core?.overline}</p>
            <h3 className="mt-2">{core?.title}</h3>
            <div className="mt-6 grid grid-cols-12 gap-4">
              {core?.items?.slice(0, 4).map((item, idx) => (
                <div key={`${item.title}-${idx}`} className="col-span-12 md:col-span-6 rounded-2xl border border-stroke-2 p-5 dark:border-stroke-6">
                  <h5 className="text-heading-6">{item.title}</h5>
                  <p className="mt-2">{item.body}</p>
                </div>
              ))}
            </div>
          </article>

          <article data-stagger-item className="col-span-12 lg:col-span-4 border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6 rounded-[20px] border p-7 lg:p-[42px]">
            <p className="text-tagline-2 text-primary-500">Visual panel</p>
            <h5 className="mt-2">Website + booking signal</h5>
            <div className="mt-5 space-y-4">
              {visualCards.map((item, idx) => (
                <div key={`${item.title}-signal-${idx}`} className="rounded-xl border border-stroke-2 p-4 dark:border-stroke-6">
                  <p className="text-tagline-2 text-secondary/70 dark:text-accent/70">{item.title}</p>
                  <div className="mt-2 h-2 rounded-full bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-300" />
                </div>
              ))}
              <div className="rounded-xl border border-stroke-2 p-4 dark:border-stroke-6">
                <p className="text-tagline-2 text-secondary/70 dark:text-accent/70">Launch workflow</p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <span className="h-14 rounded-lg bg-background-3 dark:bg-background-7" />
                  <span className="h-14 rounded-lg bg-background-3 dark:bg-background-7" />
                  <span className="h-14 rounded-lg bg-background-3 dark:bg-background-7" />
                </div>
              </div>
            </div>
          </article>
        </StaggerGrid>
      </div>
    </section>
  );
}

function Team({ page }: { page: WebsiteBuilderConfig }) {
  const resources = page.sections[1];
  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[160px]">
      <div className="main-container">
        <div className="mx-auto max-w-[1028px] space-y-5 text-center">
          <AnimatedSection>
            <span className="badge badge-green">{resources?.overline}</span>
          </AnimatedSection>
          <AnimatedSection>
            <h2>{resources?.title}</h2>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function FeatureList({ page, locale }: { page: WebsiteBuilderConfig; locale: ReturnType<typeof detectLocaleFromPath> }) {
  const resources = page.sections[1];
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[120px]">
      <div className="main-container">
        <StaggerGrid className="grid grid-cols-12 gap-5" childSelector="[data-stagger-item]">
          {resources?.items?.map((item, index) => (
            <article key={`${item.title}-${index}`} data-stagger-item className="col-span-12 md:col-span-4 rounded-[20px] border border-stroke-1 bg-background-1 p-7 dark:border-stroke-7 dark:bg-background-6 lg:p-[34px]">
              <h3 className="text-heading-6">{item.title}</h3>
              <p className="mt-3">{item.body}</p>
              {item.links?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.links.map((link) => (
                    <Link key={link.href} href={normalizeHref(link.href, locale)} className="btn btn-white btn-sm hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

function FeaturesV2({ page }: { page: WebsiteBuilderConfig }) {
  return (
    <section className="bg-background-1 dark:bg-background-6 pt-14 pb-24 md:pt-16 md:pb-36 lg:pt-[88px] lg:pb-44 xl:pt-[100px] xl:pb-[200px]">
      <div className="main-container space-y-14 md:space-y-[70px]">
        <div className="mx-auto max-w-[540px] space-y-5 text-center">
          <AnimatedSection>
            <span className="badge badge-green">Process</span>
          </AnimatedSection>
          <AnimatedSection>
            <h2>{page.stepsTitle}</h2>
          </AnimatedSection>
        </div>
        <StaggerGrid className="grid grid-cols-12 justify-center gap-8" childSelector="[data-stagger-item]">
          {page.steps.map((step, index) => (
            <article key={`${step.title}-${index}`} data-stagger-item className="shadow-7 dark:bg-background-5 col-span-12 space-y-8 rounded-[20px] p-8 md:col-span-6 lg:col-span-4">
              <div className="flex items-center justify-between">
                <span className="text-tagline-2 dark:text-accent">Step {index + 1}</span>
                <span className="text-secondary dark:text-accent text-[40px]">{index + 1}</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-heading-5">{step.title}</h3>
                <p className="max-w-[344px]">{step.description}</p>
              </div>
            </article>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

function Reviews({ page }: { page: WebsiteBuilderConfig }) {
  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[120px]">
      <div className="main-container">
        <div className="mx-auto max-w-[804px] space-y-5 text-center">
          <AnimatedSection>
            <span className="badge badge-cyan-v2">FAQ</span>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="mx-auto max-w-[624px]">{page.faqTitle}</h2>
          </AnimatedSection>
        </div>
        <StaggerGrid className="mt-12 grid grid-cols-12 gap-5" childSelector="[data-stagger-item]">
          {page.faq.map((item, index) => (
            <article key={`${item.question}-${index}`} data-stagger-item className="col-span-12 md:col-span-6 rounded-[20px] border border-stroke-1 bg-background-1 p-7 dark:border-stroke-7 dark:bg-background-6 lg:p-[34px]">
              <h3 className="text-heading-6">{item.question}</h3>
              <p className="mt-3">{item.answer}</p>
            </article>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

export default function TemplateFeaturesLayout({ page }: { page: WebsiteBuilderConfig }) {
  const pathname = usePathname();
  const locale = detectLocaleFromPath(pathname);

  return (
    <main className="bg-background-1 dark:bg-background-6">
      <FeatureCard page={page} locale={locale} />
      <Team page={page} />
      <FeatureList page={page} locale={locale} />
      <FeaturesV2 page={page} />
      <Reviews page={page} />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="hidden"
        ctaHeading={page.cta.title}
        spanText={page.cta.overline}
        description={page.cta.body}
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText={page.cta.primary?.label || 'Get started'}
      />
    </main>
  );
}
