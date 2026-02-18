import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import StaggerGrid from '@/components/shared/motion/StaggerGrid';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { bookingPages } from '@/legacy-content/booking/config';
import source from '@/legacy-content/features/landing-features.json';
import { pricingPage } from '@/legacy-content/pricing/config';
import { buildAppUrl, buildBillingUrl, marketingReturnTo } from '@/utils/appLinks';
import { AppLocale, withLocalePath } from '@/utils/locale';

import newArrow from '@public/images/icons/new-arrow.svg';
import googleLogo from '@public/images/icons/google.svg';
import microsoftLogo from '@public/images/icons/microsoft.svg';
import appleLogo from '@public/images/icons/apple.svg';
import stripeLogo from '@public/images/icons/stripe.svg';
import dropboxLogo from '@public/images/icons/dropbox-v2.svg';
import notionLogo from '@public/images/icons/notion-v2.svg';
import slackLogo from '@public/images/icons/slack.svg';
import asanaLogo from '@public/images/icons/asana.svg';
import youtubeLogo from '@public/images/icons/youtube.svg';
import trustpilotLogo from '@public/images/icons/trustpilot-logo.svg';
import figmaLogo from '@public/images/icons/figma.svg';
import analyticsMain from '@public/images/marketing/analytics-main.png';
import analyticsBoard from '@public/images/marketing/analytics-board.png';
import analyticsA from '@public/images/marketing/analytics-side-a.png';
import analyticsB from '@public/images/marketing/analytics-side-b.png';
import featureCard1 from '@public/images/ns-img-90.png';
import featureCard2 from '@public/images/ns-img-91.png';
import featureCard3 from '@public/images/ns-img-92.png';
import featureCard4 from '@public/images/ns-img-93.png';
import featureCard5 from '@public/images/ns-img-94.png';
import featureCard6 from '@public/images/ns-img-120.png';

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

const faqItems = (bookingPages.hub.faq || []) as Array<{ question: string; answer: string }>;
const planPreview = (pricingPage.sections?.[0]?.items || []).slice(0, 3) as Array<{ title: string; body: string }>;

const workflowSteps = bookingPages.hub.howItWorks.steps as Array<{
  title: string;
  description: string;
}>;

const useCases = [
  {
    title: bookingPages.spa.hero.title,
    body: bookingPages.spa.hero.subtitle,
    href: '/booking/spa',
  },
  {
    title: bookingPages.salon.hero.title,
    body: bookingPages.salon.hero.subtitle,
    href: '/booking/salon',
  },
  {
    title: bookingPages.doctor.hero.title,
    body: bookingPages.doctor.hero.subtitle,
    href: '/booking/doctor',
  },
  {
    title: bookingPages.tutor.hero.title,
    body: bookingPages.tutor.hero.subtitle,
    href: '/booking/tutor',
  },
];
const useCaseMedia = [
  {
    image: analyticsMain,
    alt: 'Spa booking scheduling preview',
    tag: 'Spa',
  },
  {
    image: analyticsBoard,
    alt: 'Salon staff scheduling preview',
    tag: 'Salon',
  },
  {
    image: analyticsA,
    alt: 'Medical intake and scheduling preview',
    tag: 'Medical',
  },
  {
    image: analyticsB,
    alt: 'Tutor scheduling and payments preview',
    tag: 'Tutor',
  },
];

const compareCards = [
  {
    title: 'Schedulaa vs Vagaro',
    href: '/compare/vagaro',
    image: analyticsMain,
    alt: 'Schedulaa vs Vagaro comparison preview',
  },
  {
    title: 'Schedulaa vs Square Appointments',
    href: '/compare/square-appointments',
    image: analyticsA,
    alt: 'Schedulaa vs Square Appointments comparison preview',
  },
  {
    title: 'Schedulaa vs QuickBooks Payroll',
    href: '/compare/quickbooks-payroll',
    image: analyticsB,
    alt: 'Schedulaa vs QuickBooks Payroll comparison preview',
  },
];

const logoList = [
  { src: googleLogo, alt: 'Google logo' },
  { src: microsoftLogo, alt: 'Microsoft logo' },
  { src: appleLogo, alt: 'Apple logo' },
  { src: stripeLogo, alt: 'Stripe logo' },
  { src: dropboxLogo, alt: 'Dropbox logo' },
  { src: notionLogo, alt: 'Notion logo' },
  { src: slackLogo, alt: 'Slack logo' },
  { src: asanaLogo, alt: 'Asana logo' },
  { src: youtubeLogo, alt: 'YouTube logo' },
  { src: trustpilotLogo, alt: 'Trustpilot logo' },
  { src: figmaLogo, alt: 'Figma logo' },
];

const pillarMedia = [featureCard1, featureCard2, featureCard3, featureCard4, featureCard5, featureCard6];

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
                <h1 className="mb-3 font-medium">
                  {source.hero.title.line1} <br className="hidden md:block" /> {source.hero.title.line2}
                </h1>
              </AnimatedSection>
              <AnimatedSection>
                <p className="mx-auto mb-7 max-w-[860px] md:mb-12">{source.hero.subtitle}</p>
              </AnimatedSection>
              <ul className="flex flex-col items-center justify-center gap-x-4 gap-y-3 md:flex-row md:gap-y-0">
                <li>
                  <a
                    href={buildAppUrl('/register', { returnTo })}
                    className="btn btn-xl-v2 btn-secondary-v2 border group-hover/btn-v2:btn-v2-white"
                  >
                    {source.hero.primaryCta.label}
                  </a>
                </li>
                <li>
                  <a
                    href={buildAppUrl('/login', { returnTo })}
                    className="btn btn-xl-v2 btn-v2-white group-hover/btn-v2:btn-secondary-v2"
                  >
                    {source.cta.secondaryCta.label}
                  </a>
                </li>
              </ul>
              <p className="mt-5 text-tagline-2 text-secondary/65">{source.hero.primaryCta.supporting}</p>
            </div>

            <AnimatedSection>
              <div className="mx-auto -mb-3 max-w-[1160px] rounded-[20px] border border-stroke-2 bg-white p-4 shadow-2 dark:border-stroke-7 dark:bg-background-8">
                <div className="overflow-hidden rounded-xl border border-stroke-2 dark:border-stroke-7">
                  <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
                    <source src="/video/getty-watch.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              </AnimatedSection>
          </div>
        </div>
      </section>

      <section>
        <AnimatedSection>
          <div className="relative">
            <div className="absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r from-white to-transparent dark:from-background-5 md:w-[20%]" />
            <div className="absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l from-white to-transparent dark:from-background-5 md:w-[20%]" />
            <Marquee autoFill speed={40}>
              <div className="flex items-center justify-center gap-7 py-7.5">
                {logoList.map((logo) => (
                  <figure key={logo.alt} className="min-w-[110px] md:min-w-[148px]">
                    <Image src={logo.src} alt={logo.alt} loading="lazy" className="h-6 w-auto opacity-70" />
                  </figure>
                ))}
              </div>
            </Marquee>
          </div>
        </AnimatedSection>
        <div className="main-container mt-5 grid grid-cols-12 gap-4 pb-6 md:pb-10">
          <div className="col-span-12 rounded-[16px] border border-stroke-2 bg-white p-5 text-center dark:border-stroke-7 dark:bg-background-8 md:col-span-4">
            <p className="text-heading-5">US + Canada</p>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70">Payroll coverage with regional controls</p>
          </div>
          <div className="col-span-12 rounded-[16px] border border-stroke-2 bg-white p-5 text-center dark:border-stroke-7 dark:bg-background-8 md:col-span-4">
            <p className="text-heading-5">Booking + Payroll + Website</p>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70">One command center across client and staff workflows</p>
          </div>
          <div className="col-span-12 rounded-[16px] border border-stroke-2 bg-white p-5 text-center dark:border-stroke-7 dark:bg-background-8 md:col-span-4">
            <p className="text-heading-5">{source.hero.featureCard.eyebrow}</p>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70">{source.hero.featureCard.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="max-[1920px]:px-5">
        <AnimatedSection>
          <div className="bg-secondary mx-auto max-w-[1880px] rounded-3xl px-5 py-16 lg:py-20 xl:rounded-4xl xl:py-28">
            <div className="mx-auto max-w-[1400px]">
              <h2 className="text-accent text-center text-heading-5 font-light sm:text-heading-4 md:text-heading-3 lg:text-heading-2">
                {source.featureShowcase.subtitle}
              </h2>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="max-[1920px]:px-5">
        <div className="bg-background-12 mx-auto max-w-[1880px] rounded-3xl py-20 lg:rounded-4xl lg:py-30 xl:py-39">
          <div className="main-container">
            <div className="mb-10 space-y-4 text-center md:mb-14 lg:mx-auto lg:max-w-[740px]">
              <AnimatedSection>
                <span className="badge badge-white-v2 text-secondary font-medium">{source.featureShowcase.eyebrow}</span>
              </AnimatedSection>
              <AnimatedSection>
                <h2>{source.featureShowcase.title}</h2>
              </AnimatedSection>
              <AnimatedSection>
                <p>{source.featureShowcase.subtitle}</p>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-12 gap-6 lg:gap-8">
              <AnimatedSection className="col-span-12 lg:col-span-7">
                <article className="relative overflow-hidden rounded-[24px] border border-stroke-2 bg-gradient-to-br from-white via-[#f4f8ff] to-[#e6eefc] p-6 shadow-xl dark:border-stroke-7 dark:from-background-8 dark:via-background-8 dark:to-background-7 lg:p-8">
                  <div className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-primary-500/20 blur-3xl" />
                  <div className="absolute -bottom-24 -left-10 h-60 w-60 rounded-full bg-ns-green/30 blur-3xl" />
                  <div className="relative z-10">
                    <h3 className="text-heading-5 md:text-heading-4">{highlightCards[0]?.title}</h3>
                    <p className="mt-2 max-w-[640px]">{highlightCards[0]?.description}</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {(highlightCards[0]?.points || []).slice(0, 4).map((point) => (
                        <div key={point} className="rounded-xl border border-stroke-2 bg-white/85 px-4 py-3 text-tagline-2 text-secondary/85 shadow-sm dark:border-stroke-7 dark:bg-background-8/80 dark:text-accent/85">
                          {point}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 overflow-hidden rounded-2xl border border-stroke-2 bg-white p-3 dark:border-stroke-7 dark:bg-background-8">
                      <Image src={analyticsBoard} alt={source.integrations.mediaAlt} className="h-full w-full rounded-xl object-cover" />
                    </div>
                  </div>
                </article>
              </AnimatedSection>

              <div className="col-span-12 space-y-6 lg:col-span-5">
                {highlightCards.slice(1).map((card, index) => (
                  <AnimatedSection key={card.title}>
                    <article className={`rounded-[22px] border border-stroke-2 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-stroke-7 ${index === 0 ? 'bg-gradient-to-br from-[#ffffff] to-[#eef4ff] dark:from-background-8 dark:to-background-7' : 'bg-white dark:bg-background-8'}`}>
                      <h3 className="text-heading-6 md:text-heading-5">{card.title}</h3>
                      <p className="mt-2">{card.description}</p>
                      <ul className="mt-4 space-y-2">
                        {card.points.slice(0, 4).map((point) => (
                          <li key={point} className="list-inside list-disc text-tagline-2 text-secondary/85 dark:text-accent/85">
                            {point}
                          </li>
                        ))}
                      </ul>
                      {index === 0 ? (
                        <div className="mt-5 grid grid-cols-2 gap-3">
                          <div className="overflow-hidden rounded-xl border border-stroke-2 bg-white p-2 dark:border-stroke-7 dark:bg-background-8">
                            <Image src={analyticsA} alt="Analytics side panel" className="h-full w-full rounded-lg object-cover" />
                          </div>
                          <div className="overflow-hidden rounded-xl border border-stroke-2 bg-white p-2 dark:border-stroke-7 dark:bg-background-8">
                            <Image src={analyticsB} alt="Analytics side panel" className="h-full w-full rounded-lg object-cover" />
                          </div>
                        </div>
                      ) : null}
                    </article>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <StaggerGrid className="mt-10 grid grid-cols-12 gap-5" childSelector="[data-stagger-item]">
              {pillars.slice(0, 6).map((pillar, index) => (
                <article
                  key={pillar.title}
                  data-stagger-item
                  className="col-span-12 space-y-4 rounded-[20px] border border-stroke-2 bg-white p-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-stroke-7 dark:bg-background-8 md:col-span-6 lg:col-span-4"
                >
                  <figure className="bg-background-3 dark:bg-background-7 overflow-hidden rounded-2xl p-3">
                    <Image
                      src={pillarMedia[index % pillarMedia.length]}
                      alt={`${pillar.title} preview`}
                      className="h-[160px] w-full rounded-xl object-cover"
                      loading="lazy"
                    />
                  </figure>
                  <div className="space-y-2 px-3 pb-3">
                    <p className="text-tagline-3 uppercase tracking-[0.14em] text-primary-500">{pillar.icon}</p>
                    <h3 className="text-heading-6 md:text-heading-5">{pillar.title}</h3>
                    <ul className="space-y-1.5">
                      {pillar.description.slice(0, 3).map((point) => (
                        <li key={point} className="list-inside list-disc text-tagline-2 text-secondary/85 dark:text-accent/85">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </StaggerGrid>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 lg:py-34 xl:py-39">
        <div className="main-container">
          <div className="mb-10 text-center md:mb-11 lg:mx-auto lg:max-w-[800px]">
            <AnimatedSection>
              <span className="badge badge-gray-light-v2 mb-4">{bookingPages.hub.howItWorks.overline}</span>
            </AnimatedSection>
            <AnimatedSection>
              <h2 className="mb-3">{bookingPages.hub.howItWorks.title}</h2>
            </AnimatedSection>
            <AnimatedSection>
              <p>{bookingPages.hub.howItWorks.intro}</p>
            </AnimatedSection>
          </div>

          <div className="space-y-8 lg:hidden">
            {workflowSteps.slice(0, 3).map((step, index) => (
              <AnimatedSection key={step.title} x={-120 + index * 20} y={8} delay={0.18 * (index + 1)} duration={0.62}>
                <div className={`${index % 2 === 0 ? 'bg-ns-green' : 'bg-background-3'} mx-auto flex w-full max-w-[408px] flex-col justify-between rounded-[20px] p-11 max-sm:space-y-8 sm:min-h-[350px]`}>
                  <div className="text-center">
                    <span className="text-secondary text-[52px]">0{index + 1}</span>
                  </div>
                  <div className="space-y-1 text-center max-md:space-y-0.5">
                    <h3 className="text-heading-6 md:text-heading-5">{step.title}</h3>
                    <p className="text-tagline-1 text-secondary/60">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mx-auto hidden w-fit items-center justify-center gap-7 lg:flex">
            {workflowSteps.slice(0, 3).map((step, index) => (
              <div key={step.title} className="contents">
                <AnimatedSection x={-120 + index * 20} y={8} delay={0.18 * (index + 1)} duration={0.62}>
                  <div className={`${index % 2 === 0 ? 'bg-ns-green' : 'bg-background-3'} flex w-[408px] flex-col justify-between rounded-[20px] p-11 sm:min-h-[350px]`}>
                    <div className="text-center">
                      <span className="text-secondary text-[52px]">0{index + 1}</span>
                    </div>
                    <div className="space-y-1 text-center max-md:space-y-0.5">
                      <h3 className="text-heading-6 md:text-heading-5">{step.title}</h3>
                      <p className="text-tagline-1 text-secondary/60">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>

                {index < 2 ? (
                  <AnimatedSection x={-120} y={0} delay={0.5 + index * 0.2} duration={0.6}>
                    <div className="bg-background-3 w-[52px] overflow-hidden rounded-[80px] px-4 py-9 ring-8 ring-white">
                      <Marquee autoFill speed={30} direction="right" className="size-6 overflow-hidden">
                        <figure className="flex size-6 items-center justify-center">
                          <Image src={newArrow} alt="new-arrow" className="size-full object-cover" />
                          <Image src={newArrow} alt="new-arrow" className="size-full object-cover" />
                        </figure>
                      </Marquee>
                    </div>
                  </AnimatedSection>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 overflow-hidden py-14 md:py-16 lg:py-24 xl:py-28">
        <div className="main-container">
          <div className="mb-11 text-center lg:mx-auto lg:mb-9 lg:max-w-[730px]">
            <AnimatedSection>
              <span className="badge badge-gray-light-v2 mb-5">Industry pages</span>
            </AnimatedSection>
            <AnimatedSection>
              <h2 className="mb-1 md:mb-3">Explore booking use-cases</h2>
            </AnimatedSection>
            <AnimatedSection>
              <p className="lg:mx-auto lg:max-w-[760px]">{bookingPages.hub.featuresIntro}</p>
            </AnimatedSection>
          </div>

          <StaggerGrid className="grid grid-cols-12 gap-6" childSelector="[data-stagger-item]">
            {useCases.map((item, index) => (
              <article
                key={item.href}
                data-stagger-item
                className="group bg-background-12 border-background-12 col-span-12 overflow-hidden rounded-3xl border p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl lg:col-span-6"
              >
                <figure className="relative overflow-hidden rounded-2xl border border-stroke-2 dark:border-stroke-7">
                  <Image
                    src={useCaseMedia[index % useCaseMedia.length].image}
                    alt={useCaseMedia[index % useCaseMedia.length].alt}
                    className="h-[220px] w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <figcaption className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-tagline-3 font-medium text-secondary shadow-sm dark:bg-background-8/85 dark:text-accent">
                    {useCaseMedia[index % useCaseMedia.length].tag}
                  </figcaption>
                </figure>

                <div className="space-y-3 p-5 md:p-6">
                  <h3 className="text-heading-5 md:text-heading-4">{item.title}</h3>
                  <p className="text-secondary/75 dark:text-accent/75">{item.body}</p>
                  <Link href={withLocalePath(item.href, locale)} className="btn btn-secondary btn-md mt-1 inline-block">
                    Open page
                  </Link>
                </div>
              </article>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="py-16 lg:py-20 xl:py-25">
        <div className="main-container">
          <div className="mb-10 text-center lg:mb-[70px]">
            <div className="space-y-3">
              <AnimatedSection>
                <h2>Compare Schedulaa side-by-side</h2>
              </AnimatedSection>
              <AnimatedSection>
                <p className="mx-auto max-w-[680px]">
                  Compare booking, scheduling, payroll workflows, and operating visibility before migration.
                </p>
              </AnimatedSection>
            </div>
          </div>

          <StaggerGrid className="grid grid-cols-12 gap-6" childSelector="[data-stagger-item]">
            {compareCards.map((card) => (
              <article key={card.href} data-stagger-item className="col-span-12 overflow-hidden rounded-[20px] border border-stroke-2 bg-white p-4 dark:border-stroke-7 dark:bg-background-8 md:col-span-4">
                <div className="overflow-hidden rounded-xl border border-stroke-2 dark:border-stroke-7">
                  <Image src={card.image} alt={card.alt} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-4 text-heading-6">{card.title}</h3>
                <Link href={withLocalePath(card.href, locale)} className="btn btn-v2-white btn-md-v2 mt-4 inline-block border">
                  View comparison
                </Link>
              </article>
            ))}
          </StaggerGrid>

          <AnimatedSection>
            <div className="group mt-8 text-center">
              <Link href={withLocalePath('/compare', locale)} className="btn btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                View compare hub
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-background-1 py-14 sm:py-16 md:py-24 dark:bg-background-6 2xl:py-28">
        <div className="main-container">
          <div className="mb-10 text-center md:mb-[50px]">
            <AnimatedSection>
              <span className="badge badge-green-v2 mb-3.5 md:mb-5">Pricing teaser</span>
            </AnimatedSection>
            <AnimatedSection>
              <h2 className="xl:mx-auto xl:max-w-[906px]">{pricingPage.sections?.[0]?.title}</h2>
            </AnimatedSection>
            <AnimatedSection>
              <p className="mx-auto mt-3 max-w-[900px]">{pricingPage.sections?.[0]?.body}</p>
            </AnimatedSection>
          </div>

          <StaggerGrid className="grid grid-cols-12 gap-5" childSelector="[data-stagger-item]">
            {planPreview.map((plan) => (
              <article key={plan.title} data-stagger-item className="col-span-12 rounded-[20px] border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8 md:col-span-4">
                <h3 className="text-heading-6">{plan.title}</h3>
                <p className="mt-2">{plan.body}</p>
              </article>
            ))}
          </StaggerGrid>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href={withLocalePath('/pricing', locale)} className="btn btn-secondary btn-md">
              View pricing
            </Link>
            <a href={buildBillingUrl({ returnTo })} className="btn btn-white btn-md dark:btn-transparent dark:hover:btn-accent">
              {source.hero.secondaryCta.label}
            </a>
          </div>

          <StaggerGrid className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3" childSelector="[data-stagger-item]">
            {insights.map((item) => (
              <article key={item.headline} data-stagger-item className="rounded-[20px] border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
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

      <section className="max-[1920px]:px-5">
        <AnimatedSection>
          <div className="bg-background-12 mx-auto max-w-[1880px] rounded-2xl py-18 md:rounded-4xl md:py-20 lg:py-25 xl:py-28">
            <div className="main-container">
              <div className="mx-auto mb-12 max-w-[820px] space-y-3 text-center md:space-y-5 lg:mb-[70px]">
                <AnimatedSection>
                  <span className="badge badge-white-v2 uppercase">{bookingPages.hub.faqHeading}</span>
                </AnimatedSection>
                <AnimatedSection>
                  <h2>{bookingPages.hub.faqTitle}</h2>
                </AnimatedSection>
                <AnimatedSection>
                  <p>{bookingPages.hub.faqIntro}</p>
                </AnimatedSection>
              </div>
              <Accordion className="mx-auto max-w-[900px] space-y-4" defaultValue="home-faq-0" enableScrollAnimation animationDelay={0.1}>
                {faqItems.map((item, idx) => (
                  <AccordionItem className="rounded-2xl bg-white px-6 md:rounded-4xl md:px-8" key={item.question} value={`home-faq-${idx}`}>
                    <AccordionTrigger
                      titleClassName="flex-1 text-left text-tagline-1 font-normal text-secondary lg:text-heading-6"
                      className="flex w-full cursor-pointer items-center justify-between py-6 md:py-8"
                      value={`home-faq-${idx}`}
                      iconType="arrow"
                    >
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent value={`home-faq-${idx}`}>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[112px] xl:pb-[112px]">
        <div className="main-container">
          <div className="mx-auto max-w-[860px] space-y-8 text-center">
            <AnimatedSection>
              <span className="badge badge-green">{source.cta.eyebrow}</span>
            </AnimatedSection>
            <AnimatedSection>
              <h2>{source.cta.title}</h2>
            </AnimatedSection>
            <AnimatedSection>
              <p>{source.cta.description}</p>
            </AnimatedSection>
            <div className="flex flex-col items-center justify-center gap-x-4 gap-y-3 md:flex-row md:gap-y-0">
              <AnimatedSection>
                <div className="group w-[90%] list-none sm:w-auto">
                  <a href={buildAppUrl('/register', { returnTo })} className="btn btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                    {source.cta.primaryCta.label}
                  </a>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="group w-[90%] list-none sm:w-auto">
                  <a href={buildAppUrl('/login', { returnTo })} className="btn btn-xl-v2 btn-ash-v2 !border-0 group-hover/btn-v2:btn-secondary-v2">
                    {source.cta.secondaryCta.label}
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
