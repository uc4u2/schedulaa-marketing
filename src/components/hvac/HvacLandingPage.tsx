'use client';

import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import { getHvacCopy } from '@/components/hvac/localeCopy';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { detectLocaleFromPath } from '@/utils/locale';
import dashboardImg from '@public/images/marketing/showcase/dashboard.png';
import paymentCollectionImg from '@public/images/marketing/showcase/payment-collection.png';
import serviceManagementImg from '@public/images/marketing/showcase/service-management.png';
import hvacHeroImg from '@public/images/marketing/hvac-hero-2.png';
import hvacContractorSmileImg from '@public/images/marketing/hvac-contractor-smile.png';
import hvacOps4Img from '@public/images/marketing/hvac-ops-4.png';
import hvac333Img from '@public/images/marketing/hvac-333.png';
import hvac555Img from '@public/images/marketing/hvac-555.png';
import hvacHeroOneImg from '@public/images/marketing/hvac-hero-one-safe.png';
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

const pageShell = 'mx-auto w-full max-w-[1640px] px-5 md:px-7 xl:px-10';

export default function HvacLandingPage() {
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname);
  const returnTo = marketingReturnTo(locale, '/industries/hvac');
  const copy = getHvacCopy(locale);
  const storySections = [
    {
      eyebrow: 'Dispatch + work orders',
      title: 'Run dispatch, ETA, assignments, and field proof from the same live job record.',
      body:
        'Dispatchers should not jump between texts, maps, and work-order notes to figure out who is on the way. Schedulaa keeps route context, customer ETA links, assignments, instructions, photos, and work-order actions connected to one source of truth.',
      bullets: [
        'Road-aware route preview and customer ETA links',
        'Assignments by day and technician',
        'Photos, notes, and work-order status in one place',
      ],
      image: hvac555Img,
      imageAlt: 'Schedulaa dispatch and work order management for HVAC jobs',
    },
    {
      eyebrow: 'Time tracking + billing',
      title: 'Track technician time and move from approved estimate to payment without rebuilding the job.',
      body:
        'Field-service owners need hours, trips, estimates, invoices, and payments to stay connected. Schedulaa gives technicians route preview and time tracking from the employee workspace while the office keeps billing attached to the same operational flow.',
      bullets: [
        'Employee route preview and job-linked time tracking',
        'Estimate follow-up, invoice handoff, and online payment',
        'Cleaner payroll and billing follow-through',
      ],
      image: hvac333Img,
      imageAlt: 'Schedulaa HVAC billing and payment workflow',
    },
  ];

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="overflow-hidden bg-[#07101f] pb-18 pt-[116px] text-white md:pb-24 md:pt-[144px]">
        <div className={`${pageShell} relative`}>
          <div className="pointer-events-none absolute left-[8%] top-10 h-[320px] w-[320px] rounded-full bg-[#1f7ae0]/20 blur-[120px]" />
          <div className="pointer-events-none absolute right-[4%] top-1/3 h-[380px] w-[380px] rounded-full bg-[#7fe36c]/10 blur-[140px]" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <AnimatedSection>
              <div className="space-y-7">
                <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/74">
                  {copy.hero.badge}
                </span>
                <div className="space-y-5">
                  <h1 className="max-w-[760px] text-heading-2 text-white md:text-[60px] md:leading-[1.02]">
                    {copy.hero.title}
                  </h1>
                  <p className="max-w-[720px] text-[17px] leading-8 text-white/68">
                    {copy.hero.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
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
              <article className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_24px_52px_rgba(0,0,0,0.18)] backdrop-blur-md">
                <div className="rounded-[20px] border border-white/8 bg-[#091120] p-3">
                  <Image
                    src={hvacHeroImg}
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
        <div className={`${pageShell} space-y-8`}>
          <AnimatedSection>
            <div className="space-y-4 text-center">
              <span className="inline-flex rounded-full border border-[#d8ddc8] bg-[#f7f5de] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary/72 dark:border-white/10 dark:bg-white/6 dark:text-white/72">
                {copy.pain.badge}
              </span>
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
                <article className="h-full rounded-[22px] border border-stroke-2 bg-white p-6 shadow-[0_16px_36px_rgba(15,23,42,0.05)] dark:border-stroke-7 dark:bg-background-8">
                  <h3 className="text-heading-5 text-secondary dark:text-white">{card.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-secondary/72 dark:text-accent/70">{card.body}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-18">
        <div className={pageShell}>
          <AnimatedSection>
            <article className="mx-auto max-w-[1320px] rounded-[24px] border border-stroke-2 bg-white p-5 shadow-[0_18px_42px_rgba(15,23,42,0.06)] dark:border-stroke-7 dark:bg-background-8 md:p-7">
              <div className="relative w-full overflow-hidden rounded-2xl border border-stroke-2 pb-[56.25%] dark:border-stroke-7">
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
        <div className={pageShell}>
          <AnimatedSection>
            <article className="mx-auto max-w-[1320px] rounded-[24px] border border-stroke-2 bg-white p-8 shadow-[0_18px_42px_rgba(15,23,42,0.06)] dark:border-stroke-7 dark:bg-background-8 md:p-10 lg:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-14">
                <div className="space-y-6 lg:pr-4">
                  <span className="inline-flex rounded-full border border-[#d8ddc8] bg-[#f7f5de] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary/72 dark:border-white/10 dark:bg-white/6 dark:text-white/72">
                    {copy.journey.badge}
                  </span>
                  <h2 className="max-w-[460px] text-heading-3 text-secondary dark:text-white md:text-[52px] md:leading-[1.06]">
                    One connected HVAC workflow from service request to payment.
                  </h2>
                  <p className="max-w-[500px] text-[17px] leading-8 text-secondary/70 dark:text-accent/70">
                    The office, technician, customer, and payment flow stay tied to the same live job instead of getting rebuilt across separate tools.
                  </p>
                </div>
                <div className="rounded-[20px] border border-stroke-2 bg-[#f7f9fc] p-4 dark:border-stroke-7 dark:bg-background-7 md:p-5">
                  <Image src={hvacHeroOneImg} alt="Schedulaa HVAC workflow visual" className="h-auto w-full rounded-[16px] object-contain" />
                </div>
              </div>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-6 md:pb-10">
        <div className={`${pageShell} space-y-8`}>
          <AnimatedSection>
            <div className="space-y-4 text-center">
              <span className="inline-flex rounded-full border border-[#cbe6e9] bg-[#e8f7f8] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary/70 dark:border-white/10 dark:bg-white/6 dark:text-white/72">
                Connected operations
              </span>
              <h2 className="mx-auto max-w-[860px] text-heading-3 text-secondary dark:text-white md:max-w-[920px]">
                Run the office and the field from one connected system.
              </h2>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-18 md:pb-24">
        <div className={`${pageShell} space-y-6 md:space-y-8`}>
          {storySections.map((section, index) => {
            const reverse = index % 2 === 1;

            return (
              <AnimatedSection key={section.title}>
                <article className="overflow-hidden rounded-[24px] border border-stroke-2 bg-white shadow-[0_18px_46px_rgba(15,23,42,0.06)] dark:border-stroke-7 dark:bg-background-8">
                  <div className={`grid items-center gap-0 lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
                    <div className="p-6 md:p-8 lg:p-10">
                      <span className="inline-flex rounded-full border border-[#d8ddc8] bg-[#f7f5de] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary/72 dark:border-white/10 dark:bg-white/6 dark:text-white/72">
                        {section.eyebrow}
                      </span>
                      <h3 className="mt-5 max-w-[560px] text-heading-4 text-secondary dark:text-white">{section.title}</h3>
                      <p className="mt-4 max-w-[560px] text-[16px] leading-8 text-secondary/72 dark:text-accent/70">{section.body}</p>
                      <div className="mt-6 grid gap-3 md:grid-cols-1">
                        {section.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-3 rounded-[14px] border border-[#e6ebf3] bg-[#f7f9fc] px-4 py-3 text-[15px] leading-7 text-secondary dark:border-stroke-7 dark:bg-background-7 dark:text-white">
                            <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-[#1f7ae0]" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-[#f7f9fc] p-5 dark:bg-background-7 md:p-7 lg:p-8">
                      <div className="rounded-[20px] bg-white p-4 shadow-[0_14px_34px_rgba(15,23,42,0.05)] dark:bg-background-8">
                        <Image src={section.image} alt={section.imageAlt} className="h-auto w-full rounded-[18px] object-contain" />
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            );
          })}

          <AnimatedSection>
            <article className="overflow-hidden rounded-[28px] bg-secondary px-6 py-8 text-white shadow-[0_22px_58px_rgba(0,0,0,0.14)] md:px-8 md:py-10 lg:px-10">
              <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                <div className="space-y-5">
                  <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/78">
                    Service-team proof
                  </span>
                  <blockquote className="max-w-[620px] text-[24px] font-semibold leading-[1.45] text-white md:text-[30px]">
                    “Dispatch, work orders, ETA updates, photos, and billing only help if the office and the field are working from the same job.”
                  </blockquote>
                  <div className="text-[15px] leading-7 text-white/72">
                    Schedulaa is strongest when the same customer request can move from estimate to dispatch to payment without the team rebuilding context in separate apps.
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                  <div className="rounded-[20px] border border-white/10 bg-[#07101f] p-3">
                    <Image src={hvacContractorSmileImg} alt="HVAC contractor standing in front of service van" className="h-auto w-full rounded-[14px] object-cover" />
                  </div>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <a href={BOOK_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary-v2 btn-md min-w-[190px]">
                      {copy.closing.primaryCta}
                    </a>
                    <Link href="/pricing" className="btn btn-white btn-md min-w-[170px] dark:btn-transparent">
                      {copy.closing.secondaryCta}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
