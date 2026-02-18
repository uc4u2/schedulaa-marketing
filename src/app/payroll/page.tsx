import Link from 'next/link';
import { headers } from 'next/headers';
import { Metadata } from 'next';
import Image from 'next/image';

import { payrollPages } from '@/legacy-content/payroll/config';
import { AppLocale, withLocalePath } from '@/utils/locale';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import heroVisualMain from '@public/images/marketing/analytics-board.png';
import heroVisualSideA from '@public/images/marketing/analytics-side-a.png';
import heroVisualSideB from '@public/images/marketing/analytics-side-b.png';

const meta = payrollPages.overview.meta;

const isExternalLink = (href: string) =>
  href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:');

const mapHref = (href: string, locale: AppLocale) => {
  const returnTo = marketingReturnTo(locale, '/payroll');
  if (href === '/login') return buildAppUrl('/login', { returnTo });
  if (href === '/register') return buildAppUrl('/register', { returnTo });
  if (isExternalLink(href)) return href;
  return withLocalePath(href as `/${string}`, locale);
};

const getLocale = async (): Promise<AppLocale> => {
  const h = await headers();
  return h.get('x-locale') === 'fa' ? 'fa' : 'en';
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.og.title,
    description: meta.og.description,
    url: meta.og.url,
    images: meta.og.image ? [{ url: meta.og.image }] : undefined,
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.twitter.title,
    description: meta.twitter.description,
    images: meta.twitter.image ? [meta.twitter.image] : undefined,
  },
};

export default async function PayrollPage() {
  const locale = await getLocale();
  const page = payrollPages.overview;
  const hero = page.hero;

  return (
    <main className="bg-background-3 dark:bg-background-7 overflow-x-hidden">
      <section className="relative pt-30 pb-20 md:pt-38 md:pb-24">
        <div className="main-container">
          <div className="grid gap-6 rounded-[28px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-8 shadow-box lg:grid-cols-12 md:p-10">
            <div className="space-y-6 lg:col-span-8">
              <div>
                <span className="badge badge-cyan">{hero.badge}</span>
                <h1 className="mt-5 max-w-[980px] text-white">{hero.title}</h1>
                <p className="mt-4 max-w-[980px] text-tagline-1 text-accent/72">{hero.subtitle}</p>
              </div>

              <ul className="grid list-none gap-3 p-0 md:grid-cols-2">
                {hero.bullets.map((bullet: string) => (
                  <li key={bullet} className="flex items-start gap-2 rounded-xl border border-stroke-7 bg-background-8 px-4 py-3 text-tagline-2 text-accent/80">
                    <span className="mt-[7px] size-[6px] shrink-0 rounded-full bg-primary-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a href={mapHref(hero.primaryCta.href, locale)} className="btn btn-primary btn-md hover:btn-white dark:hover:btn-accent">
                  {hero.primaryCta.label}
                </a>
                <Link href={mapHref(hero.secondaryCta.href, locale)} className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                  {hero.secondaryCta.label}
                </Link>
              </div>

              <p className="text-tagline-2 text-accent/62">{hero.notice}</p>
            </div>

            <div className="space-y-3 lg:col-span-4">
              <div className="rounded-[18px] border border-stroke-7 bg-background-8 p-3">
                <Image src={heroVisualMain} alt="Payroll operations dashboard" className="h-[230px] w-full rounded-[12px] object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[16px] border border-stroke-7 bg-background-8 p-3">
                  <p className="text-tagline-3 uppercase tracking-[0.12em] text-primary-300">Regions</p>
                  <p className="mt-2 text-heading-6 text-white">CA + US</p>
                </div>
                <div className="rounded-[16px] border border-stroke-7 bg-background-8 p-3">
                  <p className="text-tagline-3 uppercase tracking-[0.12em] text-primary-300">Mode</p>
                  <p className="mt-2 text-heading-6 text-white">Snapshot-first</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="main-container">
          <div className="max-w-[950px]">
            <p className="premium-eyebrow">{page.featuresHeading}</p>
            <h2 className="mt-3">{page.featuresTitle}</h2>
            <p className="mt-4 text-tagline-1 text-secondary/70 dark:text-accent/70">{page.featuresIntro}</p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {page.features.map((feature: any) => (
              <article key={feature.title} className="rounded-[22px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-6 shadow-box">
                <p className="premium-eyebrow">{feature.label}</p>
                <h3 className="mt-2 text-heading-5 text-white">{feature.title}</h3>
                <p className="mt-3 text-accent/72">{feature.description}</p>
                {feature.link ? (
                  <Link href={mapHref(feature.link, locale)} className="mt-5 inline-flex text-tagline-2 font-medium text-primary-300 hover:text-primary-200">
                    {feature.linkLabel}
                  </Link>
                ) : null}
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <figure className="overflow-hidden rounded-[18px] border border-stroke-7 bg-background-8 p-2">
              <Image src={heroVisualMain} alt="Payroll summary panel" className="h-[190px] w-full rounded-[12px] object-cover" />
            </figure>
            <figure className="overflow-hidden rounded-[18px] border border-stroke-7 bg-background-8 p-2">
              <Image src={heroVisualSideA} alt="Payroll comparison panel" className="h-[190px] w-full rounded-[12px] object-cover" />
            </figure>
            <figure className="overflow-hidden rounded-[18px] border border-stroke-7 bg-background-8 p-2">
              <Image src={heroVisualSideB} alt="Payroll detail panel" className="h-[190px] w-full rounded-[12px] object-cover" />
            </figure>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="main-container grid gap-5 md:grid-cols-3">
          {page.highlights.map((item: any) => (
            <article key={item.title} className="rounded-[20px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-6 shadow-box">
              <p className="premium-eyebrow">{item.overline}</p>
              <h3 className="mt-2 text-heading-5 text-white">{item.title}</h3>
              <p className="mt-3 text-accent/70">{item.body}</p>
              <ul className="mt-4 space-y-2">
                {item.points.map((point: string) => (
                  <li key={point} className="text-tagline-2 text-accent/72">
                    • {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="main-container rounded-[24px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-8 shadow-box md:p-10">
          <p className="premium-eyebrow">{page.stepsHeading}</p>
          <h2 className="mt-3 text-white">{page.stepsTitle}</h2>
          <p className="mt-4 text-accent/72">{page.stepsIntro}</p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {page.steps.map((step: any, index: number) => (
              <article key={step.title} className="rounded-xl border border-stroke-7 bg-background-8 p-5">
                <p className="text-tagline-3 font-semibold tracking-[0.12em] text-primary-400">STEP {index + 1}</p>
                <h3 className="mt-2 text-heading-6 text-white">{step.title}</h3>
                <p className="mt-2 text-tagline-2 text-accent/72">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="main-container grid gap-5 md:grid-cols-3">
          {page.callouts.map((callout: any) => (
            <article key={callout.title} className="rounded-[20px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-6 shadow-box">
              <p className="premium-eyebrow">{callout.label}</p>
              <h3 className="mt-2 text-heading-5 text-white">{callout.title}</h3>
              <p className="mt-3 text-accent/72">{callout.body}</p>
              {callout.points?.length ? (
                <ul className="mt-4 space-y-2">
                  {callout.points.map((point: string) => (
                    <li key={point} className="text-tagline-2 text-accent/72">
                      • {point}
                    </li>
                  ))}
                </ul>
              ) : null}
              {callout.links?.length ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  {callout.links.map((link: any) => (
                    <Link key={link.href} href={mapHref(link.href, locale)} className="text-tagline-2 font-medium text-primary-300 hover:text-primary-200">
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="main-container">
          <div className="rounded-[24px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-8 shadow-box md:p-10">
            <p className="premium-eyebrow">{page.faqHeading}</p>
            <h2 className="mt-3 text-white">{page.faqTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {page.faq.map((item: any) => (
                <article key={item.question} className="rounded-xl border border-stroke-7 bg-background-8 p-5">
                  <h3 className="text-heading-6 text-white">{item.question}</h3>
                  <p className="mt-2 text-tagline-2 text-accent/72">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="main-container grid gap-5 lg:grid-cols-2">
          <article className="rounded-[24px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-8 shadow-box">
            <p className="premium-eyebrow">{page.cta.overline}</p>
            <h2 className="mt-3 text-white">{page.cta.title}</h2>
            <p className="mt-4 text-accent/72">{page.cta.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={mapHref(page.cta.primary.href, locale)} className="btn btn-primary btn-md hover:btn-white dark:hover:btn-accent">
                {page.cta.primary.label}
              </a>
              <Link href={mapHref(page.cta.secondary.href, locale)} className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                {page.cta.secondary.label}
              </Link>
            </div>
          </article>

          <article className="rounded-[24px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-8 shadow-box">
            <p className="premium-eyebrow">{page.nextSteps.overline}</p>
            <h2 className="mt-3 text-white">{page.nextSteps.title}</h2>
            <p className="mt-4 text-accent/72">{page.nextSteps.description}</p>
            <div className="mt-5 space-y-4">
              {page.nextSteps.links.map((step: any) => (
                <div key={step.href} className="rounded-xl border border-stroke-7 bg-background-8 p-4">
                  <h3 className="text-tagline-1 font-semibold text-white">{step.label}</h3>
                  <p className="mt-1 text-tagline-2 text-accent/72">{step.description}</p>
                  <Link href={mapHref(step.href, locale)} className="mt-2 inline-flex text-tagline-2 font-medium text-primary-300 hover:text-primary-200">
                    {step.cta}
                  </Link>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="main-container rounded-[24px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-8 shadow-box md:p-10">
          <p className="premium-eyebrow">Payroll links</p>
          <h2 className="mt-3 text-white">Regional pages and tools</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {page.secondaryLinks.map((item: any) => (
              <Link
                key={item.href}
                href={mapHref(item.href, locale)}
                className="rounded-xl border border-stroke-7 bg-background-8 px-4 py-3 text-tagline-2 font-medium text-accent/80 transition hover:border-primary-300 hover:text-primary-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
