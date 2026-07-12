'use client';

import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import { getHvacCopy } from '@/components/hvac/localeCopy';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { detectLocaleFromPath } from '@/utils/locale';
import dashboardImg from '@public/images/marketing/showcase/dashboard.png';
import employeeManagementImg from '@public/images/marketing/showcase/employee-management.png';
import serviceManagementImg from '@public/images/marketing/showcase/service-management.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BOOK_DEMO_URL =
  process.env.NEXT_PUBLIC_BOOK_DEMO_URL ||
  'https://app.schedulaa.com/sale/meet/uzmTuuGPNNepce0r2vcx8WB4w3sJ2LA32Aqh7XIw9F8';

const HVAC_YOUTUBE_EMBED =
  process.env.NEXT_PUBLIC_HVAC_YOUTUBE_EMBED ||
  process.env.NEXT_PUBLIC_DEMO_YOUTUBE_EMBED ||
  'https://www.youtube.com/embed/y7kygIhnZm8';

const journeyTags = ['Office', 'Estimate', 'Dispatch', 'Client ETA', 'Field', 'Payment'];
const platformTags = ['Dispatch', 'Work orders', 'Billing', 'Employees', 'Client comms', 'Website'];

export default function HvacLandingPage() {
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname);
  const returnTo = marketingReturnTo(locale, '/industries/hvac');
  const copy = getHvacCopy(locale);

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="overflow-hidden bg-[#07101f] pb-18 pt-[116px] text-white md:pb-24 md:pt-[144px]">
        <div className="main-container relative">
          <div className="pointer-events-none absolute left-[8%] top-10 h-[320px] w-[320px] rounded-full bg-[#1f7ae0]/20 blur-[120px]" />
          <div className="pointer-events-none absolute right-[4%] top-1/3 h-[380px] w-[380px] rounded-full bg-[#7fe36c]/10 blur-[140px]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
            <AnimatedSection>
              <div className="space-y-6">
                <span className="badge badge-cyan !bg-white/10 !text-white/88">{copy.hero.badge}</span>
                <div className="space-y-4">
                  <h1 className="max-w-[760px] text-heading-2 text-white md:text-[58px] md:leading-[1.03]">
                    {copy.hero.title}
                  </h1>
                  <p className="max-w-[720px] text-[17px] leading-8 text-white/72">
                    {copy.hero.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a href={BOOK_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary-v2 btn-md min-w-[190px]">
                    {copy.hero.primaryCta}
                  </a>
                  <Link
                    href={buildAppUrl('/register', { returnTo })}
                    className="btn btn-white btn-md min-w-[170px] dark:btn-transparent"
                  >
                    {copy.hero.secondaryCta}
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <article className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.06] p-3 shadow-[0_28px_65px_rgba(0,0,0,0.22)] backdrop-blur-md">
                <div className="rounded-[22px] border border-white/8 bg-[#091120] p-3">
                  <Image
                    src={serviceManagementImg}
                    alt="Schedulaa HVAC operations interface"
                    className="h-auto w-full rounded-[18px] object-contain"
                    priority
                  />
                </div>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="main-container space-y-8">
          <AnimatedSection>
            <div className="space-y-4 text-center">
              <span className="badge badge-yellow-v2">{copy.pain.badge}</span>
              <h2 className="mx-auto max-w-[860px] text-heading-3 text-secondary dark:text-white">
                {copy.pain.title}
              </h2>
              <p className="mx-auto max-w-[820px] text-[16px] leading-7 text-secondary/74 dark:text-accent/70">
                {copy.pain.description}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid gap-5 lg:grid-cols-3">
            {copy.pain.cards.map((card) => (
              <AnimatedSection key={card.title}>
                <article className="h-full rounded-[24px] border border-stroke-2 bg-white p-6 shadow-1 dark:border-stroke-7 dark:bg-background-8">
                  <h3 className="text-heading-5 text-secondary dark:text-white">{card.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-secondary/72 dark:text-accent/70">{card.body}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-18">
        <div className="main-container">
          <AnimatedSection>
            <article className="mx-auto max-w-[1120px] rounded-[28px] border border-stroke-2 bg-white p-5 shadow-[0_24px_64px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8 md:p-7">
              <div className="space-y-3 text-center">
                <span className="badge badge-cyan-v2">{copy.video.badge}</span>
                <h2 className="mx-auto max-w-[760px] text-heading-4 text-secondary dark:text-white">
                  {copy.video.title}
                </h2>
                <p className="mx-auto max-w-[760px] text-[15px] leading-7 text-secondary/72 dark:text-accent/70">
                  {copy.video.description}
                </p>
              </div>
              <div className="relative mt-6 w-full overflow-hidden rounded-2xl border border-stroke-2 pb-[56.25%] dark:border-stroke-7">
                <iframe
                  className="absolute left-0 top-0 h-full w-full"
                  src={HVAC_YOUTUBE_EMBED}
                  title="Schedulaa for HVAC companies video"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-14 md:pb-18">
        <div className="main-container">
          <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <AnimatedSection>
              <div className="overflow-hidden rounded-[28px] border border-stroke-2 bg-white shadow-[0_24px_64px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8">
                <div className="border-b border-stroke-2 p-6 dark:border-stroke-7 md:p-7">
                  <span className="badge badge-yellow-v2">{copy.journey.badge}</span>
                  <h2 className="mt-4 text-heading-4 text-secondary dark:text-white">{copy.journey.title}</h2>
                  <p className="mt-4 text-[15px] leading-7 text-secondary/74 dark:text-accent/70">{copy.journey.description}</p>
                </div>
                <div className="bg-secondary p-5 text-white md:p-6">
                  <div className="space-y-4">
                    <div className="rounded-[22px] border border-white/10 bg-white/[0.06] p-3">
                      <Image src={dashboardImg} alt="HVAC operations dashboard" className="h-auto w-full rounded-[16px] object-contain" />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                      {copy.hero.stats.map((stat) => (
                        <div key={stat.label} className="rounded-[18px] border border-white/10 bg-white/[0.06] px-4 py-4">
                          <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">{stat.label}</div>
                          <div className="mt-2 text-base font-semibold text-white">{stat.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <div className="relative grid gap-4">
              <div className="pointer-events-none absolute left-5 top-10 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-[#bed8ff] via-[#d9e8ff] to-transparent lg:block" />
              {copy.journey.steps.map((step, index) => (
                <AnimatedSection key={step.title}>
                  <article className="relative rounded-[24px] border border-stroke-2 bg-gradient-to-br from-[#f8fbff] via-white to-[#eef5ff] p-5 shadow-[0_20px_52px_rgba(30,64,175,0.1)] dark:border-stroke-7 dark:from-background-8 dark:via-background-8 dark:to-background-7 lg:ml-4">
                    <div className="flex items-start gap-4">
                      <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e7f1ff] text-sm font-semibold text-[#1f4ea3] ring-8 ring-white dark:bg-white/[0.08] dark:text-white dark:ring-background-8">
                        {index + 1}
                      </div>
                      <div className="min-w-0">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-[#dcebff] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1f4ea3] dark:bg-white/[0.08] dark:text-accent">
                            {journeyTags[index] || 'Workflow'}
                          </span>
                        </div>
                        <h3 className="text-heading-6 text-secondary dark:text-white">{step.title}</h3>
                        <p className="mt-2 text-[15px] leading-7 text-secondary/72 dark:text-accent/70">{step.body}</p>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-18 md:pb-24">
        <div className="main-container space-y-8">
          <AnimatedSection>
            <div className="space-y-4 text-center">
              <span className="badge badge-cyan-v2">{copy.platform.badge}</span>
              <h2 className="mx-auto max-w-[860px] text-heading-3 text-secondary dark:text-white">
                {copy.platform.title}
              </h2>
              <p className="mx-auto max-w-[840px] text-[16px] leading-7 text-secondary/74 dark:text-accent/70">
                {copy.platform.description}
              </p>
            </div>
          </AnimatedSection>
          <div className="overflow-hidden rounded-[32px] bg-secondary px-6 py-8 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:px-8 md:py-10 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <AnimatedSection>
                <div className="space-y-5">
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-4">
                    <Image src={employeeManagementImg} alt="Schedulaa employee operations" className="h-auto w-full rounded-[18px] object-contain" />
                  </div>
                  <div className="space-y-3">
                    {copy.platform.cards.slice(0, 3).map((card) => (
                      <div key={card.title} className="rounded-[18px] border border-white/10 bg-white/[0.05] px-4 py-3">
                        <div className="text-sm font-semibold text-white">{card.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {copy.platform.cards.map((card, index) => (
                  <AnimatedSection key={card.title}>
                    <article className="h-full rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                          {index + 1}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.08] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/72">
                          {platformTags[index] || 'Ops'}
                        </span>
                      </div>
                      <h3 className="text-heading-6 text-white">{card.title}</h3>
                      <p className="mt-3 text-[15px] leading-7 text-white/72">{card.body}</p>
                    </article>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
          <AnimatedSection>
            <article className="overflow-hidden rounded-[32px] bg-secondary px-6 py-8 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:px-8 md:py-10 lg:px-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="space-y-4">
                  <span className="badge badge-yellow-v2 !bg-[#d7efb2] !text-secondary">{copy.closing.badge}</span>
                  <h2 className="max-w-[760px] text-heading-4 text-white md:text-heading-3">{copy.closing.title}</h2>
                  <p className="max-w-[760px] text-[15px] leading-7 text-white/78">{copy.closing.description}</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a href={BOOK_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary-v2 btn-md min-w-[190px]">
                    {copy.closing.primaryCta}
                  </a>
                  <Link href="/pricing" className="btn btn-white btn-md min-w-[170px] dark:btn-transparent">
                    {copy.closing.secondaryCta}
                  </Link>
                </div>
              </div>
            </article>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
