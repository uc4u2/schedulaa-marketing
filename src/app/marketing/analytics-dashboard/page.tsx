import Link from 'next/link';
import { headers } from 'next/headers';
import { Metadata } from 'next';

import { getMarketingSource } from '@/legacy-content/marketing/getMarketingSource';
import { AppLocale, DEFAULT_LOCALE, isSupportedLocale, withLocalePath } from '@/utils/locale';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';

const getLocale = async (): Promise<AppLocale> => {
  const h = await headers();
  const headerLocale = h.get('x-locale');
  return isSupportedLocale(headerLocale) ? headerLocale : DEFAULT_LOCALE;
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const pageConfig = getMarketingSource(locale).analytics;
  return {
    title: pageConfig.meta.title,
    description: pageConfig.meta.description,
    alternates: { canonical: pageConfig.meta.canonical },
    openGraph: {
      title: pageConfig.meta.og.title,
      description: pageConfig.meta.og.description,
      url: pageConfig.meta.og.url,
      images: pageConfig.meta.og.image ? [{ url: pageConfig.meta.og.image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: pageConfig.meta.twitter.title,
      description: pageConfig.meta.twitter.description,
      images: pageConfig.meta.twitter.image ? [pageConfig.meta.twitter.image] : undefined,
    },
  };
}

export default async function MarketingAnalyticsDashboardPage() {
  const locale = await getLocale();
  const pageConfig = getMarketingSource(locale).analytics;
  const returnTo = marketingReturnTo(locale, '/marketing/analytics-dashboard');
  const hero = pageConfig.hero;
  const section = pageConfig.sections[0];
  const metricsList = pageConfig.lists[0];

  return (
    <main className="bg-background-3 dark:bg-background-7 overflow-x-hidden">
      <section className="overflow-hidden pt-[150px] pb-20 md:pt-[190px] lg:pt-[220px] lg:pb-[110px]">
        <div className="main-container">
          <div className="relative overflow-hidden rounded-[30px] border border-accent/15 bg-secondary px-7 py-10 text-white shadow-3 md:px-12 md:py-14 dark:bg-background-8">
            <div className="pointer-events-none absolute -top-44 -left-24 h-[28rem] w-[28rem] rounded-full bg-primary-500/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-28 -bottom-44 h-[30rem] w-[30rem] rounded-full bg-ns-green/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(255,255,255,0.14),transparent_42%),radial-gradient(circle_at_82%_86%,rgba(166,255,0,0.10),transparent_46%)]" />

            <div className="relative">
              <span className="badge badge-cyan">{hero.badge}</span>
              <h1 className="mt-6 max-w-[900px] text-white md:text-[4.1rem] md:leading-[1.05]">{hero.title}</h1>
              <p className="mt-4 max-w-[880px] text-accent/75">{hero.subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={buildAppUrl('/register', { returnTo })} className="btn btn-primary btn-md hover:btn-white dark:hover:btn-accent">
                  {hero.primaryCta.label}
                </a>
                <Link href={withLocalePath('/marketing', locale)} className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-[110px]">
        <div className="main-container">
          <div className="rounded-[24px] border border-stroke-2 bg-white p-5 shadow-box dark:border-stroke-7 dark:bg-background-8 md:p-7">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[18px] border border-stroke-2 bg-background-2 p-5 dark:border-stroke-7 dark:bg-background-7">
                <p className="text-tagline-3 uppercase tracking-[0.14em] text-primary-500">Overview</p>
                <ul className="mt-3 space-y-2">
                  <li className="rounded-xl border border-stroke-2 bg-white px-4 py-3 text-tagline-2 dark:border-stroke-7 dark:bg-background-8">Features &amp; capabilities</li>
                  <li className="rounded-xl border border-stroke-2 bg-white px-4 py-3 text-tagline-2 dark:border-stroke-7 dark:bg-background-8">Process &amp; workflow</li>
                  <li className="rounded-xl border border-stroke-2 bg-white px-4 py-3 text-tagline-2 dark:border-stroke-7 dark:bg-background-8">Security &amp; compliance</li>
                  <li className="rounded-xl border border-stroke-2 bg-white px-4 py-3 text-tagline-2 dark:border-stroke-7 dark:bg-background-8">Data exports</li>
                </ul>
              </div>

              <div className="rounded-[18px] border border-stroke-2 bg-background-2 p-5 dark:border-stroke-7 dark:bg-background-7">
                <p className="text-tagline-3 uppercase tracking-[0.14em] text-primary-500">Integrations</p>
                <ul className="mt-3 space-y-2">
                  <li className="rounded-xl border border-stroke-2 bg-white px-4 py-3 text-tagline-2 dark:border-stroke-7 dark:bg-background-8">Pricing</li>
                  <li className="rounded-xl border border-stroke-2 bg-white px-4 py-3 text-tagline-2 dark:border-stroke-7 dark:bg-background-8">HR &amp; Payroll</li>
                  <li className="rounded-xl border border-stroke-2 bg-white px-4 py-3 text-tagline-2 dark:border-stroke-7 dark:bg-background-8">Customer Support</li>
                  <li className="rounded-xl border border-primary-300 bg-primary-50 px-4 py-3 text-tagline-2 font-semibold text-primary-700 dark:border-primary-400 dark:bg-primary-500/20 dark:text-accent">
                    Analytics &amp; Reporting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-2 dark:bg-background-5 py-20 lg:py-[110px]">
        <div className="main-container">
          <div className="rounded-[22px] border border-stroke-2 bg-white p-6 shadow-box dark:border-stroke-7 dark:bg-background-8 md:p-8">
            <p className="premium-eyebrow">{section.overline}</p>
            <h2 className="mt-3">{section.title}</h2>
            <p className="mt-3 max-w-[920px] text-tagline-1 text-secondary/72 dark:text-accent/72">{section.body}</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[110px]">
        <div className="main-container">
          <div className="mx-auto max-w-[920px] text-center">
            <p className="premium-eyebrow">{metricsList.overline}</p>
            <h2 className="mt-3">{metricsList.title}</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {metricsList.items.map((item: any) => (
              <article key={item.title} className="group relative overflow-hidden rounded-[20px] border border-stroke-2 bg-white p-5 shadow-box transition hover:-translate-y-1 hover:shadow-3 dark:border-stroke-7 dark:bg-background-8">
                <div className="pointer-events-none absolute -right-12 -bottom-12 h-28 w-28 rounded-full bg-primary-500/8 blur-2xl transition group-hover:bg-primary-500/15" />
                <p className="text-tagline-3 uppercase tracking-[0.14em] text-primary-500">{item.label}</p>
                <h3 className="mt-2 text-heading-6">{item.title}</h3>
                <p className="mt-2 text-tagline-2 text-secondary/70 dark:text-accent/70">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-[120px]">
        <div className="main-container">
          <div className="rounded-[22px] border border-stroke-2 bg-white p-6 shadow-box dark:border-stroke-7 dark:bg-background-8 md:p-8">
            <p className="premium-eyebrow">{pageConfig.cta.overline}</p>
            <h2 className="mt-3">{pageConfig.cta.title}</h2>
            <p className="mt-3 max-w-[860px] text-tagline-1 text-secondary/72 dark:text-accent/72">{pageConfig.cta.body}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={buildAppUrl('/register', { returnTo })} className="btn btn-primary btn-md hover:btn-white dark:hover:btn-accent">
                {pageConfig.cta.primary.label}
              </a>
              <a href={buildAppUrl('/login', { returnTo })} className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                {pageConfig.cta.secondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
