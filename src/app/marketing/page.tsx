import Link from 'next/link';
import { headers } from 'next/headers';
import { Metadata } from 'next';
import Image from 'next/image';

import WorkflowExperience from '@/components/marketing/home/WorkflowExperience';
import hero1 from '@public/images/ns-img-77.png';
import hero2 from '@public/images/ns-img-78.png';
import hero3 from '@public/images/marketing/analytics-main.png';
import hero1Dark from '@public/images/ns-img-dark-52.png';
import hero3Dark from '@public/images/marketing/analytics-main.png';
import analytics1 from '@public/images/marketing/analytics-board.png';
import analytics2 from '@public/images/marketing/analytics-side-a.png';
import analytics3 from '@public/images/marketing/analytics-side-b.png';
import avatar5 from '@public/images/ns-avatar-5.png';
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
  const sectionVisuals = [analytics2, analytics3, hero3];

  return (
    <main className="bg-background-3 dark:bg-background-7 overflow-x-hidden">
      <section className="relative pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
        <div className="main-container">
          <div className="mb-[72px] flex flex-col items-center justify-center">
            <div className="mx-auto w-[95%] max-w-[980px] space-y-4 text-center">
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

        <div className="dark:bg-background-6 mx-auto w-[98%] max-w-[1540px] rounded-2xl bg-white py-[100px] xl:px-[100px]">
          <div className="lp:max-w-[1416px] relative mx-auto max-w-[980px] lg:max-w-[1140px] xl:max-w-[1280px]">
            <figure className="absolute -top-10 left-10 z-20 hidden max-w-[200px] overflow-hidden rounded-[20px] sm:block lg:top-20 lg:left-20 lg:max-w-[282px] xl:top-1/2 xl:left-0 xl:-translate-y-1/2">
              <Image src={hero1} alt="marketing metrics card" className="block h-full w-full object-cover dark:hidden" />
              <Image src={hero1Dark} alt="marketing metrics card" className="hidden h-full w-full object-cover dark:block" />
            </figure>
            <figure className="relative z-10 mx-auto max-w-[860px] overflow-hidden rounded-[20px] px-10 lg:px-0 xl:mx-0 xl:translate-x-[36%]">
              <Image src={hero2} alt="marketing analytics dashboard preview" className="h-full w-full rounded-[20px] object-cover lg:rounded-none" />
            </figure>
            <figure className="shadow-3 absolute right-0 bottom-0 z-20 hidden max-w-[200px] overflow-hidden rounded-[20px] sm:right-14 sm:bottom-14 sm:max-w-[200px] lg:right-20 lg:bottom-5 lg:max-w-[320px] xl:top-1/2 xl:-right-0 xl:bottom-auto xl:-translate-y-1/2">
              <Image src={hero3} alt="campaign performance preview" className="block h-full w-full dark:hidden" />
              <Image src={hero3Dark} alt="campaign performance preview" className="hidden h-full w-full dark:block" />
            </figure>
          </div>
        </div>
      </section>

      <section className="analytics relative overflow-hidden pt-[70px] pb-[100px]">
        <div className="pointer-events-none absolute inset-0 opacity-55">
          <div className="absolute -top-14 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-primary-500/12 blur-[120px]" />
          <div className="absolute right-0 bottom-10 h-[420px] w-[420px] rounded-full bg-primary-300/10 blur-[140px]" />
        </div>
        <div className="mx-auto flex w-[95%] max-w-[1050px] flex-col space-y-16">
          {page.sections.map((section: any, idx: number) => (
            <div
              key={section.title}
              className="grid gap-5 rounded-[26px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-7 shadow-box md:grid-cols-12 md:p-8"
            >
              <div className="space-y-5 md:col-span-8">
              <div className="space-y-2">
                <p className="premium-eyebrow">{section.overline}</p>
                <h3 className="text-heading-4 text-white">{section.title}</h3>
                <p className="text-accent/70">{section.body}</p>
              </div>
              {section.points?.length ? (
                <ul className="grid list-none gap-3 p-0 md:grid-cols-2">
                  {section.points.map((point: string) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 rounded-xl border border-stroke-7 bg-background-8 px-4 py-3 text-tagline-2 text-accent/80"
                    >
                      <span className="mt-[7px] size-[6px] shrink-0 rounded-full bg-primary-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.buttons?.length ? (
                <div className="flex flex-wrap gap-3">
                  {section.buttons.map((btn: any) => (
                    <CtaLink key={btn.href} href={btn.href} locale={locale} label={btn.label} primary />
                  ))}
                </div>
              ) : null}
            </div>
              <div className="md:col-span-4">
                <div className="h-full rounded-[20px] border border-stroke-7 bg-background-8 p-3">
                  <Image
                    src={sectionVisuals[idx % sectionVisuals.length]}
                    alt={`${section.title} preview`}
                    className="h-full min-h-[180px] w-full rounded-[14px] object-cover"
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="rounded-[26px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-7 shadow-box md:p-8">
            <div className="space-y-6">
            <p className="premium-eyebrow">Execution flow</p>
            <h3 className="text-heading-4 text-white">From campaign launch to measurable retention outcomes</h3>
            <p className="text-accent/70">
              The same marketing data powering campaigns also drives lifecycle segmentation, client intelligence, and analytics reporting.
            </p>
            <WorkflowExperience />
          </div>
          </div>

          <div className="rounded-[26px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-7 shadow-box md:p-8">
            <div className="space-y-6">
            <p className="premium-eyebrow">{analyticsList.overline}</p>
            <h3 className="text-heading-4 text-white">{analyticsList.title}</h3>
            <p className="text-accent/70">{analyticsList.intro}</p>
            <div className="grid gap-4 md:grid-cols-2">
              {analyticsList.items.map((item: any) => (
                <article key={item.title} className="rounded-[20px] border border-stroke-7 bg-linear-[145deg,#191d2a_0%,#1f273b_100%] p-5 shadow-box">
                  <p className="text-tagline-3 uppercase tracking-[0.14em] text-primary-500">{item.label}</p>
                  <h4 className="mt-2 text-heading-6 text-white">{item.title}</h4>
                  <p className="mt-2 text-tagline-2 text-accent/70">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
          </div>

          <div className="grid-column-12 grid gap-y-[30px]">
            <div className="cols-span-12">
              <figure>
                <Image src={analytics1} alt="marketing analytics board" className="rounded-[20px]" />
              </figure>
            </div>
            <div className="cols-span-12 flex flex-col gap-[20px] md:flex-row">
              <figure>
                <Image src={analytics2} alt="campaign trend panel" className="rounded-[24px]" />
              </figure>
              <figure>
                <Image src={analytics3} alt="retention chart panel" className="rounded-[24px]" />
              </figure>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {page.highlights.map((highlight: any) => (
              <article key={highlight.title} className="rounded-[20px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-6 shadow-box">
                <p className="premium-eyebrow">{highlight.overline}</p>
                <h4 className="mt-2 text-heading-5 text-white">{highlight.title}</h4>
                <p className="mt-3 text-accent/70">{highlight.content}</p>
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

      <section className="pt-[20px] pb-[120px]">
        <div className="mx-auto flex w-[95%] max-w-[1050px] flex-col space-y-10">
          <div className="space-y-3 rounded-[26px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-7 md:p-8">
            <p className="premium-eyebrow">{page.faqHeading}</p>
            <h2 className="text-white">{page.faqTitle}</h2>
            <p className="text-accent/70">{page.faqIntro}</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {page.faq.map((item: any) => (
              <article key={item.question} className="rounded-xl border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-4">
                <h3 className="text-heading-6 text-white">{item.question}</h3>
                <p className="mt-2 text-tagline-2 text-accent/70">{item.answer}</p>
              </article>
            ))}
          </div>

          <div className="bg-secondary dark:bg-background-8 flex flex-col space-y-6 rounded-[20px] p-8">
            <figure>
              <Image
                src={avatar5}
                alt="marketing team quote"
                className="inline-block size-14 rounded-full bg-linear-[156deg,#ffffff_0%,#83E7EE_100%]"
              />
            </figure>
            <p className="dark:text-accent/70 text-white">
              “{page.cta.body}”
            </p>
            <div>
              <p className="text-lg leading-[150%] font-medium text-white">Schedulaa Growth Team</p>
              <p className="text-accent/60 text-tagline-2">Campaign operations</p>
            </div>
          </div>

          <div className="w-fit">
            <a href={`${APP_ORIGIN}/register`} className="btn btn-primary btn-md hover:btn-white dark:hover:btn-accent">
              {page.cta.primary.label}
            </a>
          </div>

          <div className="rounded-[20px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-6 shadow-box md:p-8">
            <h3 className="text-heading-5 text-white">Marketing subpages</h3>
            <p className="mt-3 text-accent/70">
              Deep-dive pages for email, analytics, and client intelligence workflows.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={withLocalePath('/marketing/email-campaigns', locale)}
                className="rounded-full border border-stroke-7 bg-background-8 px-4 py-2 text-tagline-2 font-medium text-white transition hover:border-primary-400 hover:text-primary-200"
              >
                Email campaigns
              </Link>
              <Link
                href={withLocalePath('/marketing/analytics-dashboard', locale)}
                className="rounded-full border border-stroke-7 bg-background-8 px-4 py-2 text-tagline-2 font-medium text-white transition hover:border-primary-400 hover:text-primary-200"
              >
                Analytics dashboard
              </Link>
              <Link
                href={withLocalePath('/marketing/clients-360', locale)}
                className="rounded-full border border-stroke-7 bg-background-8 px-4 py-2 text-tagline-2 font-medium text-white transition hover:border-primary-400 hover:text-primary-200"
              >
                Clients 360
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
