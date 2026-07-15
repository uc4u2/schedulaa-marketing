'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import StaggerGrid from '@/components/shared/motion/StaggerGrid';
import { detectLocaleFromPath, withLocalePath } from '@/utils/locale';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import type { TutorialModule } from '@/data/tutorials/tutorialCatalog';
import Image from 'next/image';
import websiteBuilderImg from '@public/images/marketing/website-builder-editor.png';

type BuilderPage = {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  videoSection?: {
    overline?: string;
    title: string;
    description?: string;
    youtubeEmbed?: string;
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

const WEBSITE_BUILDER_YOUTUBE_EMBED =
  process.env.NEXT_PUBLIC_WEBSITE_BUILDER_YOUTUBE_EMBED || 'https://www.youtube.com/embed/tP5s1niy59o';

const mapHref = (href: string, locale: ReturnType<typeof detectLocaleFromPath>) => {
  const returnTo = marketingReturnTo(locale, '/website-builder');
  if (href === '/register') {
    return buildAppUrl('/register', { returnTo });
  }
  if (href === '/login') {
    return buildAppUrl('/login', { returnTo });
  }
  if (!href.startsWith('/')) {
    return href;
  }
  return withLocalePath(href, locale);
};

export default function WebsiteBuilderAiApplicationLayout({
  page,
}: {
  page: BuilderPage;
  tutorialModule?: TutorialModule | null;
}) {
  const pathname = usePathname();
  const locale = detectLocaleFromPath(pathname);

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="overflow-hidden bg-[#07101f] pb-16 pt-[116px] text-white md:pb-22 md:pt-[144px]">
        <div className="main-container space-y-[70px]">
          <AnimatedSection>
            <div className="relative grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
              <div className="pointer-events-none absolute left-[8%] top-10 h-[320px] w-[320px] rounded-full bg-[#1f7ae0]/20 blur-[120px]" />
              <div className="pointer-events-none absolute right-[4%] top-1/3 h-[380px] w-[380px] rounded-full bg-[#7fe36c]/10 blur-[140px]" />
              <div className="relative space-y-7">
                <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/74">
                  {page.hero.badge}
                </span>
                <div className="space-y-5">
                  <h1 className="max-w-[760px] text-heading-2 text-white md:text-[60px] md:leading-[1.02]">
                    {page.hero.title}
                  </h1>
                  <p className="max-w-[700px] text-[17px] leading-8 text-white/68">{page.hero.subtitle}</p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href={mapHref(page.hero.primaryCta.href, locale)} className="btn btn-secondary-v2 btn-md min-w-[190px]">
                    {page.hero.primaryCta.label}
                  </a>
                  <Link href={mapHref(page.hero.secondaryCta.href, locale)} className="btn btn-white btn-md min-w-[170px] dark:btn-transparent">
                    {page.hero.secondaryCta.label}
                  </Link>
                </div>
              </div>
              <article className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_24px_52px_rgba(0,0,0,0.18)] backdrop-blur-md">
                <div className="rounded-[20px] border border-white/8 bg-[#091120] p-3">
                  <Image
                    src={websiteBuilderImg}
                    alt="Schedulaa website builder editor with branded pages and booking blocks"
                    className="h-auto w-full rounded-[18px] object-contain"
                    priority
                  />
                </div>
              </article>
            </div>
          </AnimatedSection>

          {page.videoSection ? (
            <AnimatedSection>
              <article className="mx-auto max-w-[1180px] overflow-hidden rounded-[32px] bg-[#213748] px-6 py-8 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:px-8 md:py-10 lg:px-10">
                <div className="space-y-7">
                  <div className="space-y-3 text-center">
                    {page.videoSection.overline ? (
                      <span className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/72">
                        {page.videoSection.overline}
                      </span>
                    ) : null}
                    <h2 className="mx-auto max-w-[760px] text-heading-3 text-white">{page.videoSection.title}</h2>
                    {page.videoSection.description ? (
                      <p className="mx-auto max-w-[620px] text-[15px] leading-7 text-white/72">{page.videoSection.description}</p>
                    ) : null}
                  </div>
                  <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm md:p-5">
                    <div className="relative overflow-hidden rounded-[22px] border border-[#10284d] bg-[#071224] pb-[56.25%] shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
                      <iframe
                        className="absolute top-0 left-0 h-full w-full"
                        src={page.videoSection.youtubeEmbed || WEBSITE_BUILDER_YOUTUBE_EMBED}
                        title={page.videoSection.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ) : null}

          <StaggerGrid className="grid grid-cols-12 gap-5" childSelector="[data-stagger-item]">
            {page.sections[0]?.items?.map((item) => (
              <article key={item.title} data-stagger-item className="col-span-12 md:col-span-6 lg:col-span-4 rounded-[20px] bg-white p-5 shadow-1 dark:bg-background-8">
                <h3 className="text-heading-5">{item.title}</h3>
                <p className="mt-2">{item.body}</p>
              </article>
            ))}
          </StaggerGrid>

          {page.sections[1]?.items?.length ? (
            <div className="space-y-6">
              <AnimatedSection>
                <div className="space-y-3 text-center">
                  {page.sections[1].overline ? <span className="badge badge-cyan-v2">{page.sections[1].overline}</span> : null}
                  <h3>{page.sections[1].title}</h3>
                </div>
              </AnimatedSection>
              <StaggerGrid className="grid grid-cols-12 gap-5" childSelector="[data-stagger-item]">
                {page.sections[1].items.map((item) => (
                  <article
                    key={item.title}
                    data-stagger-item
                    className="col-span-12 md:col-span-6 lg:col-span-4 rounded-[20px] bg-white p-5 shadow-1 dark:bg-background-8"
                  >
                    <h3 className="text-heading-5">{item.title}</h3>
                    <p className="mt-2">{item.body}</p>
                    {item.links?.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.links.map((link) => (
                          <Link key={`${item.title}-${link.href}`} href={mapHref(link.href, locale)} className="btn btn-white btn-sm dark:btn-transparent dark:hover:btn-accent">
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </StaggerGrid>
            </div>
          ) : null}
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
