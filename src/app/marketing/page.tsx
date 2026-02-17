import Link from 'next/link';
import { headers } from 'next/headers';
import { Metadata } from 'next';

import { marketingPages } from '@/legacy-content/marketing/config';
import { AppLocale, withLocalePath } from '@/utils/locale';

const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.schedulaa.com';

const getLocale = async (): Promise<AppLocale> => {
  const h = await headers();
  return h.get('x-locale') === 'fa' ? 'fa' : 'en';
};

const isExternalLink = (href: string) => href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:');

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
    ? 'btn btn-primary hover:btn-white dark:hover:btn-accent'
    : 'btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent';

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

  return (
    <main className="bg-background-3 dark:bg-background-7 overflow-x-hidden">
      <section className="overflow-hidden pt-[150px] pb-20 md:pt-[190px] lg:pt-[220px] lg:pb-[120px]">
        <div className="main-container">
          <div className="relative overflow-hidden rounded-[28px] border border-accent/15 bg-secondary px-7 py-10 text-white md:px-12 md:py-14 dark:bg-background-8">
            <div className="pointer-events-none absolute -top-44 -left-24 h-[28rem] w-[28rem] rounded-full bg-primary-500/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-28 -bottom-44 h-[30rem] w-[30rem] rounded-full bg-ns-green/20 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <span className="badge badge-cyan">{hero.badge}</span>
                <h1 className="mt-6 max-w-[860px] text-white">{hero.title}</h1>
                <p className="mt-4 max-w-[840px] text-accent/75">{hero.subtitle}</p>
                <ul className="mt-6 space-y-2">
                  {hero.points?.map((point: string) => (
                    <li key={point} className="rounded-xl border border-accent/15 bg-accent/5 px-4 py-3 text-tagline-2 text-accent/80">
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <CtaLink href={hero.primaryCta.href} locale={locale} label={hero.primaryCta.label} primary />
                  <CtaLink href={hero.secondaryCta.href} locale={locale} label={hero.secondaryCta.label} />
                </div>
              </div>

              <div className="rounded-[22px] border border-accent/20 bg-accent/5 p-5 backdrop-blur-xl">
                <p className="text-tagline-2 text-accent/80">Lifecycle and analytics scope</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-accent/20 bg-accent/5 p-3">
                    <p className="text-tagline-3 text-accent/70">Campaigns</p>
                    <p className="text-heading-6 mt-1 text-white">8 Types</p>
                  </div>
                  <div className="rounded-xl border border-accent/20 bg-accent/5 p-3">
                    <p className="text-tagline-3 text-accent/70">Segments</p>
                    <p className="text-heading-6 mt-1 text-white">Lifecycle-ready</p>
                  </div>
                  <div className="rounded-xl border border-accent/20 bg-accent/5 p-3">
                    <p className="text-tagline-3 text-accent/70">Exports</p>
                    <p className="text-heading-6 mt-1 text-white">CSV + Client 360°</p>
                  </div>
                  <div className="rounded-xl border border-accent/20 bg-accent/5 p-3">
                    <p className="text-tagline-3 text-accent/70">KPI scope</p>
                    <p className="text-heading-6 mt-1 text-white">Bookings + Revenue</p>
                  </div>
                </div>
                <p className="mt-4 rounded-xl border border-accent/20 bg-accent/5 px-3 py-2 text-tagline-2 text-accent/80">
                  Win-back, VIP, anniversary, no-show recovery, and upsell flows with dry-run and recipient limits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-[110px]">
        <div className="main-container space-y-6">
          {page.sections.map((section: any) => (
            <article key={section.title} className="rounded-[22px] border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8 md:p-8">
              <p className="premium-eyebrow">{section.overline}</p>
              <h2 className="mt-3 text-heading-4">{section.title}</h2>
              <p className="mt-3 text-tagline-1 text-secondary/72 dark:text-accent/72">{section.body}</p>
              {section.points?.length ? (
                <ul className="mt-5 grid gap-2 md:grid-cols-2">
                  {section.points.map((point: string) => (
                    <li key={point} className="rounded-xl border border-stroke-2 bg-background-2 px-4 py-3 text-tagline-2 dark:border-stroke-7 dark:bg-background-7">
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.buttons?.length ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {section.buttons.map((btn: any) => (
                    <CtaLink key={btn.href} href={btn.href} locale={locale} label={btn.label} primary />
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-background-2 dark:bg-background-5 py-20 lg:py-[110px]">
        <div className="main-container space-y-10">
          {page.lists.map((list: any) => (
            <div key={list.title}>
              <p className="premium-eyebrow">{list.overline}</p>
              <h2 className="mt-3">{list.title}</h2>
              <p className="mt-3 max-w-[860px]">{list.intro}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {list.items.map((item: any) => (
                  <article key={item.title} className="rounded-[20px] border border-stroke-2 bg-white p-5 dark:border-stroke-7 dark:bg-background-8">
                    <p className="text-tagline-3 uppercase tracking-[0.14em] text-primary-500">{item.label}</p>
                    <h3 className="mt-2 text-heading-6">{item.title}</h3>
                    <p className="mt-2 text-tagline-2 text-secondary/70 dark:text-accent/70">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-[110px]">
        <div className="main-container grid gap-6 md:grid-cols-2">
          {page.highlights.map((highlight: any) => (
            <article key={highlight.title} className="rounded-[20px] border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
              <p className="premium-eyebrow">{highlight.overline}</p>
              <h3 className="mt-3 text-heading-5">{highlight.title}</h3>
              <p className="mt-3 text-tagline-2 text-secondary/70 dark:text-accent/70">{highlight.content}</p>
              {highlight.actions?.length ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {highlight.actions.map((action: any) => (
                    <CtaLink key={action.href} href={action.href} locale={locale} label={action.label} primary={action.variant === 'contained'} />
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-background-2 dark:bg-background-5 py-20 lg:py-[110px]">
        <div className="main-container">
          <div className="rounded-[22px] border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8 md:p-8">
            <p className="premium-eyebrow">{page.faqHeading}</p>
            <h2 className="mt-3">{page.faqTitle}</h2>
            <p className="mt-3 max-w-[860px]">{page.faqIntro}</p>
            <div className="mt-8 space-y-4">
              {page.faq.map((item: any) => (
                <article key={item.question} className="rounded-xl border border-stroke-2 bg-background-2 p-4 dark:border-stroke-7 dark:bg-background-7">
                  <h3 className="text-heading-6">{item.question}</h3>
                  <p className="mt-2 text-tagline-2 text-secondary/72 dark:text-accent/72">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[110px]">
        <div className="main-container">
          <div className="rounded-[22px] border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8 md:p-8">
            <p className="premium-eyebrow">{page.cta.overline}</p>
            <h2 className="mt-3">{page.cta.title}</h2>
            <p className="mt-3 max-w-[860px]">{page.cta.body}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CtaLink href={page.cta.primary.href} locale={locale} label={page.cta.primary.label} primary />
              <CtaLink href={page.cta.secondary.href} locale={locale} label={page.cta.secondary.label} />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {page.secondaryLinks.map((link: any) => (
                <CtaLink key={link.href} href={link.href} locale={locale} label={link.label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-x pb-20">
        <div className="mx-auto max-w-6xl rounded-2xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Marketing subpages</h2>
          <p className="mt-3 text-secondary/75 dark:text-accent/70">
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
      </section>
    </main>
  );
}
