'use client';

import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import { getBusinessFinanceCopy } from '@/components/business-finance/localeCopy';
import { getTutorialModule } from '@/data/tutorials/tutorialCatalog';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { detectLocaleFromPath, withLocalePath } from '@/utils/locale';
import invoiceDetailImg from '@public/images/marketing/booking-checkout-invoice-detail.png';
import dispatchWorkOrdersImg from '@public/images/marketing/hvac-555.png';
import paymentCollectionImg from '@public/images/marketing/showcase/payment-collection.png';
import serviceManagementImg from '@public/images/marketing/showcase/service-management.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BOOK_DEMO_URL =
  process.env.NEXT_PUBLIC_BOOK_DEMO_URL ||
  'https://app.schedulaa.com/sale/meet/uzmTuuGPNNepce0r2vcx8WB4w3sJ2LA32Aqh7XIw9F8';

const pageShell = 'mx-auto w-full max-w-[1640px] px-5 md:px-7 xl:px-10';

function getYouTubeId(url?: string | null) {
  if (!url) return '';
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    if (host.includes('youtu.be')) {
      return parsed.pathname.split('/').filter(Boolean)[0] || '';
    }
    if (host.includes('youtube.com')) {
      if (parsed.pathname.includes('/embed/')) {
        return parsed.pathname.split('/embed/')[1]?.split('/')[0] || '';
      }
      return parsed.searchParams.get('v') || '';
    }
  } catch {
    return '';
  }
  return '';
}

function BulletList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-3 text-[15px] leading-7 ${dark ? 'text-white/76' : 'text-secondary/76 dark:text-accent/74'}`}>
          <span className={`mt-2.5 size-2 rounded-full ${dark ? 'bg-[#7fe36c]' : 'bg-[#1f7ae0]'}`} />
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
  const invoicesPageHref = withLocalePath('/business-finance/invoices', locale);
  const copy = getBusinessFinanceCopy(locale);
  const tutorialModule = getTutorialModule('business_finance');
  const featuredVideo = tutorialModule?.items.find((item) => item.key === tutorialModule.featuredKey) || tutorialModule?.items[0] || null;
  const featuredVideoId = getYouTubeId(featuredVideo?.youtubeUrl);
  const featuredEmbedSrc = featuredVideoId ? `https://www.youtube-nocookie.com/embed/${featuredVideoId}` : '';

  const heroSubtitle =
    locale === 'en'
      ? 'Move from quote request to approved estimate, invoice, payment link, work order, and close-out without rebuilding the same job in separate tools.'
      : copy.hero.subtitle;

  const heroHelper =
    locale === 'en'
      ? 'Built for service teams that need pricing, billing, execution, and review to stay on one record.'
      : copy.hero.helper;

  const flowTitle =
    locale === 'en' ? 'One finance workflow from request to paid job.' : copy.workflow.title;
  const flowBody =
    locale === 'en'
      ? 'Capture the request, price it, get approval, bill it, and keep the work order tied to the same live job.'
      : copy.workflow.body;

  const estimateToPaymentBullets =
    locale === 'en'
      ? [
          'Capture quote requests and link them to the right client fast.',
          'Send estimates, track approval, and convert directly to invoice.',
          'Keep hosted payment links and payment status attached to the same finance record.',
        ]
      : copy.payments.cards.slice(0, 3).map((card) => card.title);

  const jobsAndReviewBullets =
    locale === 'en'
      ? [
          'Turn approved work into scheduled jobs with instructions and planned materials.',
          'Collect employee field updates and photos against the same work order.',
          'Let managers review materials, close the job, and keep reporting cleaner before month-end.',
        ]
      : copy.modules.cards.slice(3, 6).map((card) => card.title);

  const connectedCards =
    locale === 'en'
      ? [
          {
            title: 'Request + pricing',
            body: 'Quote requests, client records, and estimate approval stay connected from the first conversation.',
          },
          {
            title: 'Job + field execution',
            body: 'Work orders, assignments, planned materials, and field reports stay tied to the same record.',
          },
          {
            title: 'Billing + month-end',
            body: 'Invoices, payment links, refunds, and reporting stay visible without rebuilding the job in another tool.',
          },
        ]
      : copy.modules.cards.slice(0, 3).map((card) => ({ title: card.title, body: card.body }));

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="overflow-hidden bg-[#07101f] pb-18 pt-[116px] text-white md:pb-24 md:pt-[144px]">
        <div className={`${pageShell} relative`}>
          <div className="pointer-events-none absolute left-[8%] top-10 h-[320px] w-[320px] rounded-full bg-[#1f7ae0]/20 blur-[120px]" />
          <div className="pointer-events-none absolute right-[4%] top-1/3 h-[380px] w-[380px] rounded-full bg-[#7fe36c]/10 blur-[140px]" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16">
            <AnimatedSection>
              <div className="space-y-7">
                <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/74">
                  {copy.hero.badge}
                </span>
                <div className="space-y-5">
                  <h1 className="max-w-[760px] text-heading-2 text-white md:text-[60px] md:leading-[1.02]">
                    {copy.hero.title}
                  </h1>
                  <p className="max-w-[700px] text-[17px] leading-8 text-white/68">
                    {heroSubtitle}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link href={buildAppUrl('/register', { returnTo })} className="btn btn-secondary-v2 btn-md min-w-[190px]">
                    {copy.hero.start}
                  </Link>
                  <a href={BOOK_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-white btn-md min-w-[170px] dark:btn-transparent">
                    Book demo
                  </a>
                </div>
                <p className="max-w-[640px] text-[15px] leading-7 text-white/54">
                  {heroHelper}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <article className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_24px_52px_rgba(0,0,0,0.18)] backdrop-blur-md">
                <div className="rounded-[20px] border border-white/8 bg-[#091120] p-3">
                  <Image
                    src={invoiceDetailImg}
                    alt="Schedulaa invoice detail and payment link workflow"
                    className="h-auto w-full rounded-[18px] object-contain"
                    priority
                  />
                </div>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {featuredEmbedSrc ? (
        <section className="pb-16 pt-14 md:pb-20 md:pt-16">
          <div className={pageShell}>
            <AnimatedSection>
              <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
                <div className="space-y-4">
                  <span className="inline-flex rounded-full border border-[#d7efb2] bg-[#eef8ce] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary/72">
                    Quick walkthrough
                  </span>
                  <h2 className="max-w-[560px] text-heading-3 text-secondary dark:text-white">
                    See the estimate-to-paid-job flow in one short video.
                  </h2>
                  <p className="max-w-[560px] text-[15px] leading-7 text-secondary/72 dark:text-accent/70">
                    Watch the manager workflow without reading a long feature list.
                  </p>
                </div>
                <div className="overflow-hidden rounded-[28px] border border-[#d9e4f5] bg-white p-4 shadow-[0_24px_64px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8 md:p-5">
                  <div className="relative overflow-hidden rounded-[22px] border border-[#10284d] bg-[#071224] pb-[56.25%] shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
                    <iframe
                      className="absolute left-0 top-0 h-full w-full"
                      src={featuredEmbedSrc}
                      title={featuredVideo?.title || 'Business Finance walkthrough'}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ) : null}

      <section id="finance-workflow" className="pb-16 pt-6 md:pb-20 md:pt-8">
        <div className={pageShell}>
          <AnimatedSection>
            <article className="overflow-hidden rounded-[32px] bg-secondary px-6 py-8 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:px-8 md:py-10 lg:px-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="space-y-5">
                  <span className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/72">
                    End-to-end workflow
                  </span>
                  <h2 className="max-w-[560px] text-heading-3 text-white">{flowTitle}</h2>
                  <p className="max-w-[560px] text-[15px] leading-7 text-white/76">{flowBody}</p>
                  <BulletList items={estimateToPaymentBullets} dark />
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                  <div className="rounded-[20px] border border-white/10 bg-[#0f1c30] p-3">
                    <Image
                      src={paymentCollectionImg}
                      alt="Schedulaa payment collection workflow"
                      className="h-auto w-full rounded-[14px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className={pageShell}>
          <AnimatedSection>
            <article className="overflow-hidden rounded-[32px] border border-[#d9e4f5] bg-white p-6 shadow-[0_24px_64px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8 md:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="rounded-[24px] border border-[#e1e9f5] bg-[#f7fbff] p-4 dark:border-white/10 dark:bg-white/[0.03]">
                  <div className="rounded-[20px] border border-[#d8e5f7] bg-white p-3 dark:border-white/10 dark:bg-[#0f1727]">
                    <Image
                      src={dispatchWorkOrdersImg}
                      alt="Schedulaa dispatch, work order, and field workflow"
                      className="h-auto w-full rounded-[14px] object-contain"
                    />
                  </div>
                </div>
                <div className="space-y-5">
                  <span className="inline-flex rounded-full border border-[#bfeaf0] bg-[#e5f9fb] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17697a] dark:border-white/10 dark:bg-white/8 dark:text-white/72">
                    Jobs + review
                  </span>
                  <h2 className="max-w-[560px] text-heading-3 text-secondary dark:text-white">
                    Turn approved work into jobs, field updates, and manager review.
                  </h2>
                  <p className="max-w-[560px] text-[15px] leading-7 text-secondary/74 dark:text-accent/72">
                    Keep dispatch, assignments, planned materials, and close-out tied to one live job instead of rebuilding context later.
                  </p>
                  <BulletList items={jobsAndReviewBullets} />
                </div>
              </div>
            </article>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className={`${pageShell} space-y-6`}>
          <AnimatedSection>
            <div className="space-y-4 text-center">
              <span className="inline-flex rounded-full border border-[#d7efb2] bg-[#eef8ce] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary/72">
                Connected tools
              </span>
              <h2 className="mx-auto max-w-[820px] text-heading-3 text-secondary dark:text-white">
                Connected tools for quoting, execution, and finance handoff
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-3">
            {connectedCards.map((card) => (
              <AnimatedSection key={card.title}>
                <article className="h-full rounded-[28px] border border-[#d9e4f5] bg-[linear-gradient(180deg,#ffffff,#f7fbff)] p-6 shadow-[0_20px_54px_rgba(15,23,42,0.09)] dark:border-stroke-7 dark:bg-[linear-gradient(180deg,rgba(18,24,37,0.96),rgba(13,19,30,0.98))]">
                  <div className="space-y-3">
                    <div className="inline-flex w-fit rounded-full border border-[#1f7ae0]/14 bg-[#1f7ae0]/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1f7ae0] dark:border-white/10 dark:bg-white/[0.04] dark:text-white/72">
                      Module
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

      <section className="pb-18 md:pb-24">
        <div className={pageShell}>
          <AnimatedSection>
            <article className="overflow-hidden rounded-[32px] bg-[#213748] px-6 py-8 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:px-8 md:py-10 lg:px-10">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div className="space-y-5">
                  <span className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/72">
                    Get started
                  </span>
                  <h2 className="max-w-[560px] text-heading-3 text-white">
                    Run quotes, jobs, and billing from one operating system.
                  </h2>
                  <p className="max-w-[560px] text-[15px] leading-7 text-white/76">
                    Start with estimates and invoices, or go deeper into work orders, field review, and month-end reporting as the team grows.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <Link href={buildAppUrl('/register', { returnTo })} className="btn btn-white btn-lg min-w-[210px] dark:btn-transparent">
                      {copy.cta.start}
                    </Link>
                    <a href={BOOK_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary-v2 btn-lg min-w-[170px]">
                      {copy.cta.demo}
                    </a>
                    <Link href={invoicesPageHref} className="btn btn-white btn-lg min-w-[220px] dark:btn-transparent">
                      See invoice workflow
                    </Link>
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                  <div className="rounded-[20px] border border-white/10 bg-[#102132] p-3">
                    <Image
                      src={serviceManagementImg}
                      alt="Schedulaa service management and work order workspace"
                      className="h-auto w-full rounded-[14px] object-contain"
                    />
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
