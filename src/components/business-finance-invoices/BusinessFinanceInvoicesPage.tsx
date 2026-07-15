'use client';

import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import { getBusinessFinanceInvoicesCopy } from '@/components/business-finance-invoices/localeCopy';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { detectLocaleFromPath, withLocalePath } from '@/utils/locale';
import invoiceDetailImg from '@public/images/marketing/booking-checkout-invoice-detail.png';
import paymentCollectionImg from '@public/images/marketing/showcase/payment-collection.png';
import Link from 'next/link';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const SITE_URL = 'https://www.schedulaa.com';

function SurfaceLabel({ children, tone = 'cyan' }: { children: string; tone?: 'cyan' | 'amber' | 'white' }) {
  const toneClass =
    tone === 'amber'
      ? 'border-[#d9781f]/18 bg-[#d9781f]/[0.08] text-[#d9781f]'
      : tone === 'white'
        ? 'border-white/14 bg-white/10 text-white/88'
        : 'border-[#1f7ae0]/14 bg-[#1f7ae0]/[0.05] text-[#1f7ae0]';

  return (
    <span
      className={`inline-flex w-fit rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${toneClass}`}
    >
      {children}
    </span>
  );
}

function SectionCard({
  overline,
  title,
  body,
  accent = 'cyan',
}: {
  overline: string;
  title: string;
  body: string;
  accent?: 'cyan' | 'amber';
}) {
  const accentClass =
    accent === 'amber'
      ? 'border-[#f1d4b2] bg-[radial-gradient(circle_at_top_right,rgba(217,120,31,0.10),transparent_42%),linear-gradient(180deg,#ffffff,rgba(255,247,239,0.82))]'
      : 'border-[#d9e4f5] bg-[radial-gradient(circle_at_top_right,rgba(31,122,224,0.08),transparent_42%),linear-gradient(180deg,#ffffff,rgba(246,250,255,0.92))]';

  return (
    <article
      className={`h-full rounded-[28px] border p-6 shadow-[0_20px_54px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8 ${accentClass}`}
    >
      <div className="flex h-full flex-col gap-4">
        <SurfaceLabel tone={accent}>{overline}</SurfaceLabel>
        <div className="space-y-3">
          <h3 className="text-[22px] font-semibold leading-[1.2] text-secondary dark:text-white">{title}</h3>
          <p className="text-[15px] leading-7 text-secondary/78 dark:text-accent/74">{body}</p>
        </div>
      </div>
    </article>
  );
}

function FaqCard({ question, answer }: { question: string; answer: string }) {
  return (
    <article className="h-full rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(10,14,22,0.96),rgba(20,30,26,0.96))] p-5 shadow-[0_22px_52px_rgba(6,9,16,0.26)]">
      <div className="space-y-3">
        <h3 className="text-[18px] font-semibold leading-[1.28] text-white">{question}</h3>
        <p className="text-[14px] leading-7 text-white/70">{answer}</p>
      </div>
    </article>
  );
}

function isLastOdd(index: number, items: Array<unknown>) {
  return items.length % 2 === 1 && index === items.length - 1;
}

export default function BusinessFinanceInvoicesPage() {
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname);
  const copy = getBusinessFinanceInvoicesCopy(locale);
  const returnTo = marketingReturnTo(locale, '/business-finance/invoices');
  const businessFinanceHref = withLocalePath('/business-finance', locale);
  const canonical = `${SITE_URL}/${locale}${copy.meta.canonicalPath}`;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Business Finance',
        item: `${SITE_URL}/${locale}/business-finance`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Invoices, Estimates & Payment Links',
        item: canonical,
      },
    ],
  };

  const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Schedulaa Business Finance',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: canonical,
    description: copy.meta.description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    featureList: copy.features.items.map((item) => item.title),
  };

  const heroStats =
    locale === 'en'
      ? ['Estimate to invoice', 'Repeat billing', 'Month-end review']
      : ['Estimate to invoice', 'Repeat billing', 'Month-end review'];
  const painPoints = locale === 'en' ? copy.pain.points.slice(0, 3) : copy.pain.points;
  const workflowSteps = locale === 'en' ? copy.workflow.steps.slice(0, 4) : copy.workflow.steps;
  const featureItems = locale === 'en' ? copy.features.items.slice(0, 4) : copy.features.items;
  const faqItems = locale === 'en' ? copy.faq.items.slice(0, 4) : copy.faq.items;
  const heroTitle =
    locale === 'en' ? 'Run estimates, invoices, and payment links from one finance workflow.' : copy.hero.title;
  const heroSubtitle =
    locale === 'en'
      ? 'Move from approval to invoice, payment collection, and month-end review without rebuilding the same client record in separate tools.'
      : copy.hero.subtitle;

  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#f6f8fc_0%,#edf3fb_36%,#f9fbff_100%)] dark:bg-background-7">
      <Script id="business-finance-invoices-faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <Script id="business-finance-invoices-breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLd)}
      </Script>
      <Script id="business-finance-invoices-software-jsonld" type="application/ld+json">
        {JSON.stringify(softwareJsonLd)}
      </Script>

      <section className="relative overflow-hidden bg-[#050914] pb-20 pt-[116px] text-white md:pb-24 md:pt-[144px]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,rgba(31,122,224,0.34),transparent_46%)]" />
        <div className="pointer-events-none absolute -left-20 top-28 h-[360px] w-[360px] rounded-full bg-[#7fe36c]/8 blur-[110px]" />
        <div className="pointer-events-none absolute right-[-80px] top-16 h-[420px] w-[420px] rounded-full bg-[#1f7ae0]/12 blur-[140px]" />
        <div className="main-container relative">
          <AnimatedSection>
            <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
              <div className="space-y-7">
                <SurfaceLabel tone="white">{copy.hero.badge}</SurfaceLabel>
                <div className="space-y-5">
                  <h1 className="max-w-[820px] text-[42px] font-medium leading-[1.02] text-white md:text-[58px] lg:text-[72px]">
                    {heroTitle}
                  </h1>
                  <p className="max-w-[700px] text-[18px] leading-8 text-white/72">{heroSubtitle}</p>
                </div>
                <div className="space-y-3">
                  {heroStats.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-[15px] leading-7 text-white/72">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#7fe36c]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href={buildAppUrl('/register', { returnTo })} className="btn btn-secondary-v2 btn-md min-w-[190px]">
                    {copy.hero.primaryCta}
                  </Link>
                  <Link href={businessFinanceHref} className="btn btn-white btn-md min-w-[185px] dark:btn-transparent">
                    {copy.hero.secondaryCta}
                  </Link>
                </div>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] p-5 shadow-[0_24px_72px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-6">
                <div className="rounded-[24px] border border-white/8 bg-[#091120] p-3">
                  <Image
                    src={invoiceDetailImg}
                    alt="Schedulaa invoice detail and payment link workflow"
                    className="h-auto w-full rounded-[18px] object-contain"
                    priority
                  />
                </div>
                <div className="mt-4 rounded-[18px] border border-[#1f7ae0]/18 bg-[#1f7ae0]/12 px-4 py-3 text-[14px] leading-7 text-white/72">
                  Built for service teams that need approvals, payment links, offline collection, and cleaner month-end review in one record path.
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="main-container">
          <AnimatedSection>
            <article className="overflow-hidden rounded-[32px] bg-[#213748] px-6 py-8 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:px-8 md:py-10 lg:px-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="space-y-5">
                  <SurfaceLabel tone="white">{copy.workflow.badge}</SurfaceLabel>
                  <h2 className="max-w-[620px] text-heading-3 text-white">{copy.workflow.title}</h2>
                <p className="max-w-[520px] text-[15px] leading-7 text-white/72">{copy.workflow.intro}</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {workflowSteps.map((step, index) => (
                      <div key={step} className="rounded-[18px] border border-white/10 bg-white/[0.05] px-4 py-3 text-[14px] text-white/76">
                        <span className="mr-2 text-white/46">{index + 1}.</span>
                        {step}
                      </div>
                    ))}
                  </div>
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
        <div className="main-container">
          <AnimatedSection>
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <div className="space-y-5">
                <SurfaceLabel tone="amber">{copy.pain.badge}</SurfaceLabel>
                <h2 className="max-w-[720px] text-heading-3 text-secondary dark:text-white">{copy.pain.title}</h2>
                <p className="max-w-[640px] text-[16px] leading-8 text-secondary/72 dark:text-accent/70">{copy.pain.intro}</p>
              </div>
              <div className="rounded-[28px] border border-[#dfe7f4] bg-white/94 p-4 shadow-[0_18px_48px_rgba(15,23,42,0.06)] dark:border-stroke-7 dark:bg-background-8 md:p-5">
                {painPoints.map((point, index) => (
                  <AnimatedSection key={point}>
                    <article className="flex items-start gap-4 rounded-[22px] border border-[#edf2fb] bg-[linear-gradient(180deg,#ffffff,rgba(251,252,255,0.92))] px-4 py-4 shadow-[0_10px_28px_rgba(15,23,42,0.04)] not-last:mb-3 dark:border-stroke-7 dark:bg-background-8">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[16px] bg-[#d9781f]/10 text-sm font-semibold text-[#d9781f]">
                        {index + 1}
                      </div>
                      <p className="pt-0.5 text-[15px] leading-7 text-secondary/80 dark:text-accent/76">{point}</p>
                    </article>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="main-container">
          <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
            <AnimatedSection>
              <div className="sticky top-28 space-y-4">
                <SurfaceLabel tone="amber">{copy.features.badge}</SurfaceLabel>
                <h2 className="text-heading-3 text-secondary dark:text-white">{copy.features.title}</h2>
                <p className="max-w-[280px] text-[15px] leading-7 text-secondary/72 dark:text-accent/70">{copy.features.intro}</p>
              </div>
            </AnimatedSection>

            <div className="mx-auto grid max-w-[980px] auto-rows-fr gap-5 lg:grid-cols-2">
              {featureItems.map((item, index) => (
                <AnimatedSection key={item.title}>
                  <div className={isLastOdd(index, featureItems) ? 'lg:col-span-2' : ''}>
                    <SectionCard
                      overline={copy.labels.featureCard}
                      title={item.title}
                      body={item.body}
                      accent={index % 4 === 0 ? 'amber' : 'cyan'}
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="main-container space-y-8">
          <AnimatedSection>
            <div className="space-y-3 text-center">
              <SurfaceLabel tone="amber">{copy.audience.badge}</SurfaceLabel>
              <h2 className="mx-auto max-w-[760px] text-heading-3 text-secondary dark:text-white">{copy.audience.title}</h2>
              <p className="mx-auto max-w-[620px] text-[15px] leading-7 text-secondary/74 dark:text-accent/70">{copy.audience.intro}</p>
            </div>
          </AnimatedSection>
          <div className="mx-auto grid max-w-[1120px] auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.audience.items.slice(0, 3).map((item, index) => (
              <AnimatedSection key={item.title}>
                <SectionCard
                  overline={copy.labels.audienceCard}
                  title={item.title}
                  body={item.body}
                  accent={index % 2 === 0 ? 'cyan' : 'amber'}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[120px] pt-[24px]">
        <div className="main-container flex flex-col gap-10">
          <AnimatedSection>
            <div className="space-y-3 rounded-[30px] border border-white/8 bg-[linear-gradient(135deg,#11151f_0%,#171d2d_56%,#1b2a20_100%)] p-8 shadow-[0_28px_70px_rgba(5,8,14,0.30)] md:p-10">
              <SurfaceLabel tone="white">{copy.faq.badge}</SurfaceLabel>
              <h2 className="max-w-[980px] text-[38px] font-medium leading-[1.06] text-white md:text-[54px]">
                {copy.faq.title}
              </h2>
              <p className="max-w-[640px] text-[15px] leading-7 text-white/68">{copy.faq.intro}</p>
            </div>
          </AnimatedSection>

          <div className="grid auto-rows-fr gap-4 md:grid-cols-2">
            {faqItems.map((item, index) => (
              <AnimatedSection key={item.question}>
                <div className={isLastOdd(index, faqItems) ? 'md:col-span-2' : ''}>
                  <FaqCard question={item.question} answer={item.answer} />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="rounded-[30px] border border-[#d9e4f5] bg-white p-8 shadow-[0_22px_60px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8 md:p-10">
              <div className="space-y-5 text-center">
                <SurfaceLabel tone="amber">{copy.cta.badge}</SurfaceLabel>
                <h2 className="mx-auto max-w-[760px] text-heading-3 text-secondary dark:text-white">{copy.cta.title}</h2>
                <p className="mx-auto max-w-[620px] text-[15px] leading-7 text-secondary/74 dark:text-accent/70">{copy.cta.body}</p>
                <div className="flex flex-wrap justify-center gap-3 pt-1">
                  <Link href={buildAppUrl('/register', { returnTo })} className="btn btn-primary btn-md min-w-[170px]">
                    {copy.cta.primaryCta}
                  </Link>
                  <Link href={businessFinanceHref} className="btn btn-white btn-md min-w-[170px] dark:btn-transparent">
                    {copy.cta.secondaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
