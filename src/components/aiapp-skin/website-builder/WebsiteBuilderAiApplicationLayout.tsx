'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import StaggerGrid from '@/components/shared/motion/StaggerGrid';
import { detectLocaleFromPath, withLocalePath } from '@/utils/locale';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';

type BuilderPage = {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  sections: Array<{
    overline: string;
    title: string;
    items: Array<{ title: string; body: string; links?: Array<{ label: string; href: string }> }>;
  }>;
  stepsTitle: string;
  steps: Array<{ title: string; description: string }>;
  faqTitle: string;
  faq: Array<{ question: string; answer: string }>;
  cta: {
    overline?: string;
    title: string;
    body?: string;
    primary?: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
};

const mapHref = (href: string, locale: ReturnType<typeof detectLocaleFromPath>) => {
  const returnTo = marketingReturnTo(locale, '/website-builder');
  if (href === '/register') return buildAppUrl('/register', { returnTo });
  if (href === '/login') return buildAppUrl('/login', { returnTo });
  if (!href.startsWith('/')) return href;
  return withLocalePath(href, locale);
};

export default function WebsiteBuilderAiApplicationLayout({ page }: { page: BuilderPage }) {
  const pathname = usePathname();
  const locale = detectLocaleFromPath(pathname);

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="pt-[100px] pb-[100px] md:pt-[160px]">
        <div className="main-container space-y-[70px]">
          <AnimatedSection>
            <div className="space-y-3 text-center">
              <span className="badge badge-green">{page.hero.badge}</span>
              <h2 className="mx-auto max-w-[960px]">{page.hero.title}</h2>
              <p className="mx-auto max-w-[820px]">{page.hero.subtitle}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={mapHref(page.hero.primaryCta.href, locale)} className="btn btn-primary btn-md hover:btn-secondary dark:hover:btn-accent">
                {page.hero.primaryCta.label}
              </a>
              <Link href={mapHref(page.hero.secondaryCta.href, locale)} className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                {page.hero.secondaryCta.label}
              </Link>
            </div>
          </AnimatedSection>

          <StaggerGrid className="grid grid-cols-12 gap-5" childSelector="[data-stagger-item]">
            {page.sections[0]?.items?.map((item) => (
              <article key={item.title} data-stagger-item className="col-span-12 md:col-span-6 lg:col-span-4 rounded-[20px] bg-white p-5 shadow-1 dark:bg-background-8">
                <h3 className="text-heading-5">{item.title}</h3>
                <p className="mt-2">{item.body}</p>
              </article>
            ))}
          </StaggerGrid>
        </div>
      </section>

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
              <article key={`${item.question}-${index}`} data-stagger-item className="col-span-12 md:col-span-6 rounded-[20px] border border-stroke-1 bg-white p-7 dark:border-stroke-7 dark:bg-background-6 lg:p-[34px]">
                <h3 className="text-heading-6">{item.question}</h3>
                <p className="mt-3">{item.answer}</p>
              </article>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="dark:bg-background-6 bg-white py-[50px] md:py-20 lg:py-28">
        <div className="main-container">
          <div className="flex flex-col items-center justify-between gap-8 xl:flex-row">
            <div className="mx-3 max-w-[649px] space-y-3 text-center sm:mx-0 md:w-full xl:text-left">
              {page.cta.overline ? <span className="badge badge-green">{page.cta.overline}</span> : null}
              <h2 className="md:text-heading-2 text-heading-5">{page.cta.title}</h2>
              {page.cta.body ? <p>{page.cta.body}</p> : null}
            </div>
            <div className="w-full max-w-[562px] space-y-6 lg:pl-9 xl:pl-[96px]">
              <a href={mapHref(page.cta.primary?.href || '/register', locale)} className="btn btn-secondary-v2 btn-md-v2 border group-hover/btn-v2:btn-v2-white">
                {page.cta.primary?.label || 'Get started'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
