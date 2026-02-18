import Link from 'next/link';
import Image from 'next/image';

import { AppLocale, withLocalePath } from '@/utils/locale';
import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import StaggerGrid from '@/components/shared/motion/StaggerGrid';
import source from '@/legacy-content/features/landing-features.json';

import analyticsMain from '@public/images/marketing/analytics-main.png';
import analyticsBoard from '@public/images/marketing/analytics-board.png';
import analyticsA from '@public/images/marketing/analytics-side-a.png';
import analyticsB from '@public/images/marketing/analytics-side-b.png';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';

type Props = {
  locale: AppLocale;
};

const highlightCards = Object.values(source.highlightCards || {}) as Array<{
  title: string;
  description: string;
  points: string[];
}>;

const pillars = (source.featureShowcase?.features || []) as Array<{
  icon: string;
  title: string;
  description: string[];
}>;

const insights = (source.insight?.items || []) as Array<{
  tag: string;
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}>;

export default function HomeAiApplicationLayout({ locale }: Props) {
  const returnTo = marketingReturnTo(locale, '/');
  return (
    <main className="space-y-10 bg-white dark:bg-background-7">
      <section className="pt-23 max-[1920px]:px-5">
        <div className="bg-background-12 border-background-12 relative mx-auto -mb-2 max-w-[1880px] overflow-hidden rounded-3xl border pt-20 md:pt-30 xl:rounded-4xl">
          <div className="main-container relative z-30">
            <div className="mb-12 text-center lg:mb-20 xl:mb-20">
              <AnimatedSection>
                <span className="badge badge-green">{source.hero.eyebrow}</span>
              </AnimatedSection>
              <AnimatedSection>
                <h1 className="mb-3 font-medium">Run booking, shifts, payroll-ready exports, and website ops from one command center.</h1>
              </AnimatedSection>
              <AnimatedSection>
                <p className="mx-auto mb-7 max-w-[860px] md:mb-12">{source.hero.subtitle}</p>
              </AnimatedSection>
              <ul className="flex flex-col items-center justify-center gap-x-4 gap-y-3 md:flex-row md:gap-y-0">
                <li>
                  <a href={buildAppUrl('/register', { returnTo })} className="btn btn-xl-v2 btn-secondary-v2 border group-hover/btn-v2:btn-v2-white">
                    {source.hero.primaryCta.label}
                  </a>
                </li>
                <li>
                  <Link href={withLocalePath('/demo', locale)} className="btn btn-xl-v2 btn-v2-white group-hover/btn-v2:btn-secondary-v2">
                    Book demo
                  </Link>
                </li>
              </ul>
              <p className="mt-5 text-tagline-2 text-secondary/65">{source.hero.primaryCta.supporting}</p>
            </div>

            <AnimatedSection>
              <div className="mx-auto -mb-3 max-w-[1160px] rounded-[20px] border border-stroke-2 bg-white p-4 shadow-2 dark:border-stroke-7 dark:bg-background-8">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 lg:col-span-8 overflow-hidden rounded-xl border border-stroke-2 dark:border-stroke-7">
                    <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
                      <source src="/video/getty-watch.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="col-span-12 lg:col-span-4 grid gap-4">
                    <div className="overflow-hidden rounded-xl border border-stroke-2 p-2 dark:border-stroke-7">
                      <Image src={analyticsMain} alt={source.hero.mediaAlt} className="h-full w-full rounded-lg object-cover" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="overflow-hidden rounded-xl border border-stroke-2 p-2 dark:border-stroke-7">
                        <Image src={analyticsA} alt="Analytics side panel" className="h-full w-full rounded-lg object-cover" />
                      </div>
                      <div className="overflow-hidden rounded-xl border border-stroke-2 p-2 dark:border-stroke-7">
                        <Image src={analyticsB} alt="Analytics side panel" className="h-full w-full rounded-lg object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="pt-[100px] pb-[90px] md:pt-[140px]" aria-label="Platform highlights">
        <div className="main-container space-y-[50px]">
          <AnimatedSection>
            <div className="space-y-3 text-center">
              <h2 className="mx-auto max-w-[880px]">{source.hero.featureCard.title}</h2>
              <p className="mx-auto max-w-[920px]">{source.hero.featureCard.subtitle}</p>
            </div>
          </AnimatedSection>

          <StaggerGrid className="grid grid-cols-12 gap-5" childSelector="[data-stagger-item]">
            {highlightCards.map((card) => (
              <article key={card.title} data-stagger-item className="col-span-12 lg:col-span-4 rounded-[20px] border border-stroke-2 bg-white p-5 shadow-1 dark:border-stroke-7 dark:bg-background-8">
                <h3 className="text-heading-5">{card.title}</h3>
                <p className="mt-2">{card.description}</p>
                <ul className="mt-4 space-y-2">
                  {card.points.map((point) => (
                    <li key={point} className="list-inside list-disc text-tagline-2 text-secondary/85 dark:text-accent/85">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="bg-background-1 dark:bg-background-6 py-[100px]">
        <div className="main-container space-y-[60px]">
          <AnimatedSection>
            <div className="space-y-3 text-center">
              <span className="badge badge-green">{source.featureShowcase.eyebrow}</span>
              <h2 className="mx-auto max-w-[900px]">{source.featureShowcase.title}</h2>
              <p className="mx-auto max-w-[920px]">{source.featureShowcase.subtitle}</p>
            </div>
          </AnimatedSection>

          <StaggerGrid className="grid grid-cols-12 gap-5" childSelector="[data-stagger-item]">
            {pillars.map((pillar) => (
              <article key={pillar.title} data-stagger-item className="col-span-12 md:col-span-6 lg:col-span-4 rounded-[20px] border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
                <p className="text-tagline-3 uppercase tracking-[0.14em] text-primary-500">{pillar.icon}</p>
                <h3 className="mt-2 text-heading-5">{pillar.title}</h3>
                <ul className="mt-4 space-y-2">
                  {pillar.description.map((point) => (
                    <li key={point} className="list-inside list-disc text-tagline-2 text-secondary/85 dark:text-accent/85">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="py-[100px]">
        <div className="main-container grid gap-6 lg:grid-cols-2">
          <article className="rounded-[20px] border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8 md:p-8">
            <span className="badge badge-green-v2">{source.platformMap.title}</span>
            <p className="mt-4">{source.platformMap.subtitle}</p>
            <ul className="mt-5 space-y-2">
              {Object.values(source.platformMap.points).map((point) => (
                <li key={point as string} className="list-inside list-disc text-tagline-2 text-secondary/85 dark:text-accent/85">
                  {point as string}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={withLocalePath('/contact', locale)} className="btn btn-secondary btn-md">{source.platformMap.primaryCta.label}</Link>
              <Link href={withLocalePath('/docs', locale)} className="btn btn-white btn-md dark:btn-transparent dark:hover:btn-accent">{source.platformMap.secondaryCta.label}</Link>
            </div>
          </article>

          <article className="rounded-[20px] border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8 md:p-8">
            <span className="badge badge-green-v2">{source.integrations.title}</span>
            <p className="mt-4">{source.integrations.subtitle}</p>
            <ul className="mt-5 space-y-2">
              {Object.values(source.integrations.points).map((point) => (
                <li key={point as string} className="list-inside list-disc text-tagline-2 text-secondary/85 dark:text-accent/85">
                  {point as string}
                </li>
              ))}
            </ul>
            <div className="mt-6 overflow-hidden rounded-xl border border-stroke-2 p-2 dark:border-stroke-7">
              <Image src={analyticsBoard} alt={source.integrations.mediaAlt} className="h-full w-full rounded-lg object-cover" />
            </div>
          </article>
        </div>
      </section>

      <section className="bg-background-1 dark:bg-background-6 py-[100px]">
        <div className="main-container space-y-[40px]">
          <AnimatedSection>
            <div className="space-y-3 text-center">
              <span className="badge badge-cyan-v2">{source.insight.eyebrow}</span>
              <h2>{source.insight.title}</h2>
              <p className="mx-auto max-w-[850px]">{source.insight.subtitle}</p>
            </div>
          </AnimatedSection>

          <StaggerGrid className="grid grid-cols-12 gap-5" childSelector="[data-stagger-item]">
            {insights.map((item) => (
              <article key={item.headline} data-stagger-item className="col-span-12 md:col-span-4 rounded-[20px] border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
                <p className="text-tagline-3 uppercase tracking-[0.14em] text-primary-500">{item.tag}</p>
                <h3 className="mt-2 text-heading-6">{item.headline}</h3>
                <p className="mt-2">{item.description}</p>
                <a href={item.ctaHref} className="mt-4 inline-block text-tagline-1 font-medium text-primary-600 hover:underline">
                  {item.ctaLabel}
                </a>
              </article>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="bg-background-2 dark:bg-background-5 py-20 lg:py-[110px]">
        <div className="main-container grid gap-6 lg:grid-cols-2">
          <article className="dark:bg-background-8 rounded-[20px] bg-white p-6 md:p-8">
            <span className="badge badge-green-v2">Compare</span>
            <h3 className="mt-5">Evaluate Schedulaa side-by-side</h3>
            <p className="mt-2">Compare booking, scheduling, payroll workflows, and operating visibility before migration.</p>
            <div className="mt-6 grid gap-3">
              <Link href={withLocalePath('/compare/vagaro', locale)} className="footer-link-v2 w-fit">Schedulaa vs Vagaro</Link>
              <Link href={withLocalePath('/compare/square-appointments', locale)} className="footer-link-v2 w-fit">Schedulaa vs Square Appointments</Link>
              <Link href={withLocalePath('/compare/quickbooks-payroll', locale)} className="footer-link-v2 w-fit">Schedulaa vs QuickBooks Payroll</Link>
            </div>
            <Link href={withLocalePath('/compare', locale)} className="btn btn-secondary btn-md mt-7 inline-block">View compare hub</Link>
          </article>

          <article className="dark:bg-background-8 rounded-[20px] bg-white p-6 md:p-8">
            <span className="badge badge-green-v2">Industry pages</span>
            <h3 className="mt-5">Explore booking use-cases</h3>
            <p className="mt-2">Choose the workflow guide that matches your service model.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link href={withLocalePath('/booking/spa', locale)} className="footer-link-v2 w-fit">Spa booking</Link>
              <Link href={withLocalePath('/booking/salon', locale)} className="footer-link-v2 w-fit">Salon booking</Link>
              <Link href={withLocalePath('/booking/doctor', locale)} className="footer-link-v2 w-fit">Doctor booking</Link>
              <Link href={withLocalePath('/booking/tutor', locale)} className="footer-link-v2 w-fit">Tutor booking</Link>
            </div>
            <Link href={withLocalePath('/booking', locale)} className="btn btn-secondary btn-md mt-7 inline-block">View booking hub</Link>
          </article>
        </div>
      </section>

      <section className="bg-background-1 dark:bg-background-6 py-[70px]">
        <div className="main-container rounded-[20px] border border-stroke-2 bg-white p-8 text-center dark:border-stroke-7 dark:bg-background-8">
          <span className="badge badge-green">{source.cta.eyebrow}</span>
          <h2 className="mt-5">{source.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-[860px]">{source.cta.description}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={buildAppUrl('/register', { returnTo })} className="btn btn-primary btn-md hover:btn-secondary dark:hover:btn-accent">{source.cta.primaryCta.label}</a>
            <Link href={withLocalePath('/contact', locale)} className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">{source.cta.secondaryCta.label}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
