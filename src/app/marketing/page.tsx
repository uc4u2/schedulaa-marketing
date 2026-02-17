import Link from 'next/link';
import { headers } from 'next/headers';
import { Metadata } from 'next';
import Image from 'next/image';

import WorkflowExperience from '@/components/marketing/home/WorkflowExperience';
import heroLeft from '@public/images/ns-img-77.png';
import heroCenter from '@public/images/ns-img-78.png';
import heroRight from '@public/images/ns-img-79.png';
import heroLeftDark from '@public/images/ns-img-dark-52.png';
import heroRightDark from '@public/images/ns-img-dark-53.png';
import { marketingPages } from '@/legacy-content/marketing/config';
import { AppLocale, withLocalePath } from '@/utils/locale';

const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.schedulaa.com';

const getLocale = async (): Promise<AppLocale> => {
  const h = await headers();
  return h.get('x-locale') === 'fa' ? 'fa' : 'en';
};

const isExternalLink = (href: string) =>
  href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:');

const mapHref = (href: string, locale: AppLocale) => {
  if (href === '/login') return `${APP_ORIGIN}/login`;
  if (href === '/register') return `${APP_ORIGIN}/register`;
  if (isExternalLink(href)) return href;
  return withLocalePath(href as `/${string}`, locale);
};

type CtaLinkProps = {
  href: string;
  locale: AppLocale;
  label: string;
  primary?: boolean;
};

function CtaLink({ href, locale, label, primary = false }: CtaLinkProps) {
  const mapped = mapHref(href, locale);
  const cls = primary
    ? 'btn btn-primary btn-md hover:btn-white dark:hover:btn-accent'
    : 'btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent';

  if (isExternalLink(mapped)) {
    return (
      <a href={mapped} className={cls}>
        {label}
      </a>
    );
  }

  return (
    <Link href={mapped} className={cls}>
      {label}
    </Link>
  );
}

const hubMeta = marketingPages.hub.meta;

export const metadata: Metadata = {
  title: hubMeta.title,
  description: hubMeta.description,
  alternates: { canonical: hubMeta.canonical },
  openGraph: {
    title: hubMeta.og.title,
    description: hubMeta.og.description,
    url: hubMeta.og.url,
    images: hubMeta.og.image ? [{ url: hubMeta.og.image }] : undefined,
  },
  twitter: {
    card: 'summary_large_image',
    title: hubMeta.twitter.title,
    description: hubMeta.twitter.description,
    images: hubMeta.twitter.image ? [hubMeta.twitter.image] : undefined,
  },
};

export default async function MarketingPage() {
  const locale = await getLocale();
  const page = marketingPages.hub;
  const hero = page.hero;
  const analyticsList = page.lists[0];

  return (
    <main className="bg-background-3 dark:bg-background-7 overflow-x-hidden">
      <section className="relative pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
        <div className="main-container">
          <div className="mb-[72px] flex flex-col items-center justify-center">
            <div className="mx-auto w-[95%] max-w-[980px] space-y-5 text-center">
              <span className="badge badge-cyan">{hero.badge}</span>
              <h1>{hero.title}</h1>
              <p>{hero.subtitle}</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <CtaLink href={hero.primaryCta.href} locale={locale} label={hero.primaryCta.label} primary />
                <CtaLink href={hero.secondaryCta.href} locale={locale} label={hero.secondaryCta.label} />
              </div>
            </div>
          </div>
        </div>

        <div className="dark:bg-background-6 mx-auto w-[98%] max-w-[1540px] rounded-2xl bg-white py-[80px] xl:px-[100px]">
          <div className="lp:max-w-[1416px] relative mx-auto max-w-[980px] lg:max-w-[1140px] xl:max-w-[1280px]">
            <figure className="absolute -top-10 left-10 z-20 hidden max-w-[200px] overflow-hidden rounded-[20px] sm:block lg:top-14 lg:left-16 lg:max-w-[282px] xl:top-1/2 xl:left-0 xl:-translate-y-1/2">
              <Image src={heroLeft} alt="marketing preview" className="block h-full w-full object-cover dark:hidden" />
              <Image src={heroLeftDark} alt="marketing preview" className="hidden h-full w-full object-cover dark:block" />
            </figure>
            <figure className="relative z-10 mx-auto max-w-[860px] overflow-hidden rounded-[20px] px-5 lg:px-0 xl:mx-0 xl:translate-x-[36%]">
              <Image src={heroCenter} alt="marketing dashboard preview" className="h-full w-full rounded-[20px] object-cover lg:rounded-none" />
            </figure>
            <figure className="shadow-3 absolute right-0 bottom-0 z-20 hidden max-w-[200px] overflow-hidden rounded-[20px] sm:block lg:right-10 lg:bottom-5 lg:max-w-[320px] xl:top-1/2 xl:-right-0 xl:bottom-auto xl:-translate-y-1/2">
              <Image src={heroRight} alt="marketing panel preview" className="block h-full w-full dark:hidden" />
              <Image src={heroRightDark} alt="marketing panel preview" className="hidden h-full w-full dark:block" />
            </figure>
          </div>
        </div>
      </section>

      <section className="analytics pt-[70px] pb-[100px]">
        <div className="mx-auto flex w-[95%] max-w-[1100px] flex-col space-y-16">
          {page.sections.map((section: any) => (
            <article
              key={section.title}
              className="group relative overflow-hidden rounded-[24px] border border-accent/15 bg-secondary p-6 text-white shadow-3 transition hover:-translate-y-1 hover:shadow-4 dark:bg-background-8 md:p-9"
            >
              <div className="pointer-events-none absolute -left-24 -top-24 h-60 w-60 rounded-full bg-primary-500/25 blur-3xl" />
              <div className="pointer-events-none absolute -right-24 -bottom-24 h-60 w-60 rounded-full bg-ns-green/15 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_90%_90%,rgba(163,230,53,0.10),transparent_46%)]" />

              <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div className="space-y-3">
                  <p className="badge badge-cyan">{section.overline}</p>
                  <h3 className="text-heading-3 text-white">{section.title}</h3>
                  <p className="max-w-[780px] text-accent/75">{section.body}</p>
                  {section.buttons?.length ? (
                    <div className="pt-2">
                      {section.buttons.map((btn: any) => (
                        <CtaLink key={btn.href} href={btn.href} locale={locale} label={btn.label} primary />
                      ))}
                    </div>
                  ) : null}
                </div>

                {section.points?.length ? (
                  <ul className="grid gap-2">
                    {section.points.map((point: string) => (
                      <li
                        key={point}
                        className="rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-tagline-2 text-accent/85 backdrop-blur transition hover:bg-accent/10"
                      >
                        • {point}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}

          <div className="space-y-6 rounded-[22px] border border-stroke-2 bg-white p-6 shadow-box dark:border-stroke-7 dark:bg-background-8 md:p-8">
            <p className="premium-eyebrow">Execution flow</p>
            <h3 className="text-heading-4">From campaign launch to measurable retention outcomes</h3>
            <p className="text-secondary/70 dark:text-accent/70">
              The same marketing data powering campaigns also drives lifecycle segmentation, client intelligence, and analytics reporting.
            </p>
            <WorkflowExperience />
          </div>

          <div className="space-y-6">
            <p className="premium-eyebrow">{analyticsList.overline}</p>
            <h3 className="text-heading-4">{analyticsList.title}</h3>
            <p className="text-secondary/70 dark:text-accent/70">{analyticsList.intro}</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {analyticsList.items.map((item: any) => (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[20px] border border-stroke-2 bg-white p-5 shadow-box transition hover:-translate-y-1 hover:shadow-3 dark:border-stroke-7 dark:bg-background-8"
                >
                  <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-ns-green/10 blur-2xl transition group-hover:bg-ns-green/20" />
                  <p className="text-tagline-3 uppercase tracking-[0.14em] text-primary-500">{item.label}</p>
                  <h4 className="mt-2 text-heading-6">{item.title}</h4>
                  <p className="mt-2 text-tagline-2 text-secondary/70 dark:text-accent/70">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {page.highlights.map((highlight: any) => (
              <article
                key={highlight.title}
                className="group relative overflow-hidden rounded-[20px] border border-stroke-2 bg-white p-6 shadow-box transition hover:-translate-y-1 hover:shadow-3 dark:border-stroke-7 dark:bg-background-8"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-500/10 blur-2xl transition group-hover:bg-primary-500/20" />
                <p className="premium-eyebrow">{highlight.overline}</p>
                <h4 className="mt-2 text-heading-5">{highlight.title}</h4>
                <p className="mt-3 text-secondary/70 dark:text-accent/70">{highlight.content}</p>
                {highlight.actions?.length ? (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {highlight.actions.map((action: any) => (
                      <CtaLink key={action.href} href={action.href} locale={locale} label={action.label} primary={action.variant === 'contained'} />
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-[40px] pb-[120px]">
        <div className="mx-auto flex w-[95%] max-w-[1100px] flex-col space-y-10">
          <div className="rounded-[20px] border border-stroke-2 bg-white p-6 shadow-box dark:border-stroke-7 dark:bg-background-8 md:p-8">
            <p className="premium-eyebrow">{page.faqHeading}</p>
            <h2 className="mt-3">{page.faqTitle}</h2>
            <p className="mt-3 text-secondary/70 dark:text-accent/70">{page.faqIntro}</p>
            <div className="mt-6 space-y-3">
              {page.faq.map((item: any) => (
                <article
                  key={item.question}
                  className="rounded-xl border border-stroke-2 bg-background-2 p-4 transition hover:bg-white dark:border-stroke-7 dark:bg-background-7 dark:hover:bg-background-8"
                >
                  <h3 className="text-heading-6">{item.question}</h3>
                  <p className="mt-2 text-tagline-2 text-secondary/70 dark:text-accent/70">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[20px] border border-stroke-2 bg-white p-6 shadow-box dark:border-stroke-7 dark:bg-background-8 md:p-8">
            <div className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-primary-500/10 blur-3xl" />
            <p className="premium-eyebrow">{page.cta.overline}</p>
            <h2 className="mt-3">{page.cta.title}</h2>
            <p className="mt-3 text-secondary/70 dark:text-accent/70">{page.cta.body}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CtaLink href={page.cta.primary.href} locale={locale} label={page.cta.primary.label} primary />
              <CtaLink href={page.cta.secondary.href} locale={locale} label={page.cta.secondary.label} />
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {page.secondaryLinks.map((link: any) => (
                <Link
                  key={link.href}
                  href={mapHref(link.href, locale)}
                  className="rounded-full border border-stroke-3 px-4 py-2 text-tagline-2 font-medium text-secondary/75 transition hover:border-primary-400 hover:text-primary-600 dark:border-stroke-7 dark:text-accent/75 dark:hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[20px] border border-stroke-2 bg-white p-6 shadow-box dark:border-stroke-7 dark:bg-background-8 md:p-8">
            <h3 className="text-heading-5">Marketing subpages</h3>
            <p className="mt-3 text-secondary/70 dark:text-accent/70">
              Deep-dive pages for email, analytics, and client intelligence workflows.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={withLocalePath('/marketing/email-campaigns', locale)} className="btn btn-outline btn-sm">
                Email campaigns
              </Link>
              <Link href={withLocalePath('/marketing/analytics-dashboard', locale)} className="btn btn-outline btn-sm">
                Analytics dashboard
              </Link>
              <Link href={withLocalePath('/marketing/clients-360', locale)} className="btn btn-outline btn-sm">
                Clients 360
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
