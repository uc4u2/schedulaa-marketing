'use client';

import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import { getBusinessFinanceCopy } from '@/components/business-finance/localeCopy';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { detectLocaleFromPath } from '@/utils/locale';
import gradient32Img from '@public/images/ns-img-520.png';
import gradient33Img from '@public/images/ns-img-521.png';
import gradient34Img from '@public/images/ns-img-522.png';
import gradient9Img from '@public/images/ns-img-501.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import RevealAnimation from '@/vendor-forex/src/components/animation/RevealAnimation';

const BOOK_DEMO_URL =
  process.env.NEXT_PUBLIC_BOOK_DEMO_URL ||
  'https://app.schedulaa.com/sale/meet/uzmTuuGPNNepce0r2vcx8WB4w3sJ2LA32Aqh7XIw9F8';

function BulletList({ items, muted = false }: { items: string[]; muted?: boolean }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[15px] leading-7 text-secondary/82 dark:text-accent/78">
          <span
            className={`mt-2.5 size-2 rounded-full ${muted ? 'bg-secondary/38 dark:bg-accent/34' : 'bg-[#1f7ae0] shadow-[0_0_0_5px_rgba(31,122,224,0.08)]'}`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function BusinessFinanceLandingPage() {
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname);
  const returnTo = marketingReturnTo(locale, '/business-finance');
  const copy = getBusinessFinanceCopy(locale);
  const featureCards = copy.modules.cards.map((card, index) => ({
    ...card,
    gradientSrc: [gradient32Img, gradient33Img, gradient34Img, gradient9Img][index % 4],
  }));

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="overflow-hidden bg-[#050914] pb-20 pt-[116px] text-white md:pb-24 md:pt-[144px]">
        <div className="main-container relative">
          <div className="pointer-events-none absolute left-1/2 top-12 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#1f7ae0]/18 blur-[120px]" />
          <div className="pointer-events-none absolute -right-16 top-1/3 h-[360px] w-[360px] rounded-full bg-[#7fe36c]/10 blur-[130px]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
            <AnimatedSection>
              <div className="space-y-6">
                <span className="badge badge-cyan !bg-white/10 !text-white/88">{copy.hero.badge}</span>
                <div className="space-y-4">
                  <h1 className="max-w-[760px] text-heading-2 text-white md:text-[56px] md:leading-[1.05]">
                    {copy.hero.title}
                  </h1>
                  <p className="max-w-[720px] text-[17px] leading-8 text-white/72">
                    {copy.hero.subtitle}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link href={buildAppUrl('/register', { returnTo })} className="btn btn-secondary-v2 btn-md min-w-[190px]">
                    {copy.hero.start}
                  </Link>
                  <a href="#finance-workflow" className="btn btn-white btn-md min-w-[170px] dark:btn-transparent">
                    {copy.hero.howItWorks}
                  </a>
                </div>
                <p className="max-w-[760px] text-sm leading-7 text-white/64">
                  {copy.hero.helper}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="grid gap-4 sm:grid-cols-2">
                {featureCards.slice(0, 4).map((card) => (
                  <article
                    key={card.title}
                    className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.07] p-5 shadow-[0_28px_65px_rgba(0,0,0,0.28)] backdrop-blur-md"
                  >
                    <figure className="pointer-events-none absolute -top-[110%] -left-[70%] -z-10 size-[520px] rotate-[320deg] opacity-50 select-none">
                      <Image src={card.gradientSrc} alt="finance-card-gradient" />
                    </figure>
                    <div className="space-y-3">
                      <h2 className="text-lg font-semibold text-white">{card.title}</h2>
                      <p className="text-sm leading-7 text-white/72">{card.body}</p>
                      {card.note ? <p className="text-xs leading-6 text-white/58">{card.note}</p> : null}
                    </div>
                  </article>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="main-container">
          <AnimatedSection>
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-10">
              <div className="space-y-4">
                <span className="badge badge-yellow-v2">{copy.pain.badge}</span>
                <h2 className="max-w-[700px] text-heading-3 text-secondary dark:text-white">
                  {copy.pain.title}
                </h2>
                <p className="max-w-[680px] text-[16px] leading-7 text-secondary/72 dark:text-accent/70">
                  {copy.pain.body}
                </p>
              </div>
              <div className="rounded-[28px] border border-stroke-2 bg-white p-6 shadow-[0_24px_64px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8 md:p-7">
                <BulletList items={copy.pain.points} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="finance-workflow" className="py-14 md:py-18">
        <div className="main-container">
          <RevealAnimation delay={0.1}>
            <div className="rounded-[34px] border border-stroke-2 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(244,248,255,0.92))] p-6 shadow-[0_28px_70px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-[linear-gradient(180deg,rgba(13,18,30,0.96),rgba(18,24,37,0.94))] md:p-8 lg:p-10">
              <div className="grid gap-9 lg:grid-cols-[0.86fr_1.14fr] lg:items-start lg:gap-10 xl:gap-12">
                <div className="space-y-4 text-center lg:sticky lg:top-28 lg:text-left">
                  <span className="badge badge-cyan">{copy.workflow.badge}</span>
                  <h2 className="mx-auto max-w-[760px] text-heading-3 text-secondary dark:text-white lg:mx-0 lg:max-w-[520px]">
                    {copy.workflow.title}
                  </h2>
                  <p className="mx-auto max-w-[720px] text-[16px] leading-7 text-secondary/72 dark:text-accent/70 lg:mx-0 lg:max-w-[520px]">
                    {copy.workflow.body}
                  </p>
                  <div className="mx-auto max-w-[520px] rounded-[24px] border border-[#1f7ae0]/12 bg-[#1f7ae0]/[0.04] px-5 py-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] dark:border-white/10 dark:bg-white/[0.04] lg:mx-0">
                    <p className="text-sm leading-7 text-secondary/70 dark:text-accent/72">
                      {copy.workflow.note}
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {copy.workflow.steps.map((step, index) => (
                    <AnimatedSection key={step}>
                      <article
                        className={`h-full rounded-[24px] border border-stroke-2 bg-white/92 p-5 shadow-[0_18px_48px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8 ${
                          index === copy.workflow.steps.length - 1 ? 'md:col-span-2 xl:col-span-1' : ''
                        }`}
                      >
                        <div className="flex h-full flex-col gap-4">
                          <div className="flex size-11 items-center justify-center rounded-[18px] bg-[#1f7ae0]/10 text-sm font-semibold text-[#1f7ae0]">
                            {index + 1}
                          </div>
                          <p className="text-[15px] leading-7 text-secondary/84 dark:text-accent/78">{step}</p>
                        </div>
                      </article>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="main-container space-y-8">
          <AnimatedSection>
            <div className="space-y-4 text-center">
              <span className="badge badge-yellow-v2">{copy.modules.badge}</span>
              <h2 className="mx-auto max-w-[820px] text-heading-3 text-secondary dark:text-white">
                {copy.modules.title}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card) => (
              <AnimatedSection key={card.title}>
                <article className="relative h-full overflow-hidden rounded-[28px] border border-[#d7e5f8] bg-[linear-gradient(180deg,#ffffff,#f7fbff)] p-6 shadow-[0_20px_54px_rgba(15,23,42,0.09)] dark:border-stroke-7 dark:bg-[linear-gradient(180deg,rgba(18,24,37,0.96),rgba(13,19,30,0.98))]">
                  <figure className="pointer-events-none absolute -top-[96%] -left-[84%] -z-10 size-[460px] rotate-[320deg] opacity-50 select-none">
                    <Image src={card.gradientSrc} alt="finance-feature-gradient" />
                  </figure>
                  <div className="flex h-full flex-col gap-4">
                    <div className="inline-flex w-fit rounded-full border border-[#1f7ae0]/14 bg-[#1f7ae0]/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1f7ae0] dark:border-white/10 dark:bg-white/[0.04] dark:text-white/72">
                      {copy.modules.cardLabel}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-[21px] font-semibold leading-[1.25] text-secondary dark:text-white">{card.title}</h3>
                      <p className="text-[15px] leading-7 text-secondary/80 dark:text-accent/74">{card.body}</p>
                    </div>
                    {card.note ? (
                      <p className="mt-auto rounded-[18px] border border-[#1f7ae0]/12 bg-[#1f7ae0]/[0.04] px-4 py-3 text-[12px] leading-6 text-secondary/68 dark:border-white/10 dark:bg-white/[0.04] dark:text-accent/62">
                        {card.note}
                      </p>
                    ) : null}
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="main-container space-y-8">
          <AnimatedSection>
            <div className="space-y-4 text-center">
              <span className="badge badge-cyan">{copy.payments.badge}</span>
              <h2 className="mx-auto max-w-[760px] text-heading-3 text-secondary dark:text-white">
                {copy.payments.title}
              </h2>
              <p className="mx-auto max-w-[840px] text-[15px] leading-7 text-secondary/74 dark:text-accent/70">
                {copy.payments.body}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.payments.cards.map((card) => (
              <AnimatedSection key={card.title}>
                <article className="h-full rounded-[26px] border border-[#d9e4f5] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8">
                  <div className="space-y-3">
                    <div className="inline-flex w-fit rounded-full border border-[#1f7ae0]/14 bg-[#1f7ae0]/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1f7ae0] dark:border-white/10 dark:bg-white/[0.04] dark:text-white/72">
                      {copy.payments.cardLabel}
                    </div>
                    <h3 className="text-[21px] font-semibold leading-[1.25] text-secondary dark:text-white">{card.title}</h3>
                    <p className="text-[15px] leading-7 text-secondary/80 dark:text-accent/74">{card.body}</p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="main-container">
          <AnimatedSection>
            <div className="grid gap-7 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
              <div className="space-y-4">
                <span className="badge badge-cyan">{copy.privacy.badge}</span>
                <h2 className="max-w-[540px] text-heading-3 text-secondary dark:text-white">
                  {copy.privacy.title}
                </h2>
                <p className="max-w-[520px] text-[15px] leading-7 text-secondary/72 dark:text-accent/70">
                  {copy.privacy.body}
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                <article className="rounded-[26px] border border-[#d9e4f5] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8">
                  <div className="mb-5 space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1f7ae0]">{copy.privacy.managerBadge}</span>
                    <h3 className="text-heading-5 text-secondary dark:text-white">{copy.privacy.managerTitle}</h3>
                  </div>
                  <BulletList items={copy.privacy.managerSees} />
                </article>
                <article className="rounded-[26px] border border-[#d9e4f5] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8">
                  <div className="mb-5 space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1f7ae0]">{copy.privacy.employeeBadge}</span>
                    <h3 className="text-heading-5 text-secondary dark:text-white">{copy.privacy.employeeTitle}</h3>
                  </div>
                  <BulletList items={copy.privacy.employeeSees} />
                </article>
                <article className="rounded-[26px] border border-[#d9e4f5] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8">
                  <div className="mb-5 space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary/54 dark:text-accent/56">{copy.privacy.restrictedBadge}</span>
                    <h3 className="text-heading-5 text-secondary dark:text-white">{copy.privacy.restrictedTitle}</h3>
                  </div>
                  <BulletList items={copy.privacy.employeeDoesNotSee} muted />
                </article>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="main-container">
          <AnimatedSection>
            <div className="rounded-[32px] border border-[#d9e6f7] bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_42%,#edf5ff_100%)] p-7 shadow-[0_30px_80px_rgba(30,64,175,0.12)] dark:border-stroke-7 dark:bg-[linear-gradient(135deg,rgba(12,18,29,0.98),rgba(19,26,41,0.98))] md:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div className="space-y-4">
                  <span className="badge badge-yellow-v2">{copy.reporting.badge}</span>
                  <h2 className="max-w-[520px] text-heading-3 text-secondary dark:text-white">{copy.reporting.title}</h2>
                  <p className="max-w-[560px] text-[15px] leading-7 text-secondary/76 dark:text-accent/72">
                    {copy.reporting.body}
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {copy.reporting.cards.map((item) => (
                    <div
                      key={item}
                      className="rounded-[20px] border border-white/70 bg-white/90 px-4 py-4 text-sm font-semibold text-secondary shadow-[0_14px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-accent"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 rounded-[20px] border border-[#1f7ae0]/10 bg-white/60 px-5 py-4 text-sm leading-7 text-secondary/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] dark:border-white/10 dark:bg-white/[0.04] dark:text-accent/68">
                {copy.reporting.note}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="main-container">
          <AnimatedSection>
            <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
              <article className="flex h-full flex-col rounded-[30px] border border-[#d9e4f5] bg-white p-6 shadow-[0_24px_64px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8 md:p-7 lg:p-8">
                <span className="badge badge-cyan">{copy.workflowFit.badge}</span>
                <h2 className="mt-4 max-w-[620px] text-heading-3 text-secondary dark:text-white">
                  {copy.workflowFit.title}
                </h2>
                <div className="mt-7 grid flex-1 gap-5 md:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-heading-5 text-secondary dark:text-white">{copy.workflowFit.bookingTitle}</h3>
                    <BulletList items={copy.workflowFit.booking} />
                  </div>
                  <div>
                    <h3 className="mb-3 text-heading-5 text-secondary dark:text-white">{copy.workflowFit.financeTitle}</h3>
                    <BulletList items={copy.workflowFit.finance} />
                  </div>
                </div>
              </article>
              <article className="relative flex h-full overflow-hidden rounded-[30px] bg-secondary px-6 py-8 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:px-8 md:py-10 lg:px-9 lg:py-11">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(31,122,224,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(127,227,108,0.14),transparent_34%)]" />
                <div className="relative flex h-full flex-col justify-between space-y-7">
                  <span className="badge badge-yellow-v2 !bg-[#d7efb2] !text-secondary">{copy.cta.badge}</span>
                  <div className="space-y-5">
                    <h2 className="max-w-[480px] text-heading-3 text-white">{copy.cta.title}</h2>
                    <p className="max-w-[520px] text-[15px] leading-7 text-white/78">
                      {copy.cta.body}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <Link href={buildAppUrl('/register', { returnTo })} className="btn btn-white btn-lg min-w-[210px] dark:btn-transparent">
                      {copy.cta.start}
                    </Link>
                    <a href={BOOK_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary-v2 btn-lg min-w-[170px]">
                      {copy.cta.demo}
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
