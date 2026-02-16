import Link from 'next/link';
import { headers } from 'next/headers';
import { Metadata } from 'next';

import pricingSource from '@/legacy-content/pricing/landing-pricing.json';
import { AppLocale, withLocalePath } from '@/utils/locale';
import { defaultMetadata } from '@/utils/generateMetaData';

const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.schedulaa.com';

const getLocale = async (): Promise<AppLocale> => {
  const h = await headers();
  return h.get('x-locale') === 'fa' ? 'fa' : 'en';
};

export const metadata: Metadata = {
  ...defaultMetadata,
  title: pricingSource.meta?.title || 'Pricing | Schedulaa',
  description: pricingSource.meta?.description,
};

export default async function PricingPage() {
  const locale = await getLocale();
  const hero = pricingSource.hero || {};
  const plans = pricingSource.plans?.table?.list || [];
  const assurances = pricingSource.assurances?.items || [];
  const included = pricingSource.included?.items || [];
  const whyTeams = pricingSource.whyTeams?.items || [];
  const addons = pricingSource.plans?.table?.addons?.items || [];
  const websiteDesignService = pricingSource.websiteDesignService || {};
  const ctaBanner = pricingSource.ctaBanner || {};

  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container space-y-8 px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">{hero.eyebrow || 'Pricing'}</p>
          <h1 className="mt-5 max-w-[920px] text-4xl font-semibold leading-tight md:text-5xl">
            {Array.isArray(hero.title) ? hero.title.join(' ') : hero.title}
          </h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">{hero.subtitle}</p>

          <div className="mt-6 rounded-xl border border-stroke-2 bg-background-3 px-4 py-3 text-sm dark:border-stroke-7 dark:bg-background-7">
            <span dangerouslySetInnerHTML={{ __html: pricingSource.ribbon?.message || '' }} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`${APP_ORIGIN}/register`} className="btn btn-primary hover:btn-secondary dark:hover:btn-accent">
              {hero.primaryCta?.label || 'Start free trial'}
            </a>
            <a href="#plans" className="btn btn-primary-v2 dark:btn-transparent">
              {hero.secondaryCta?.label || 'Compare plans'}
            </a>
            <Link href={withLocalePath('/website-builder', locale)} className="btn btn-primary-v2 dark:btn-transparent">
              Explore Website Builder
            </Link>
          </div>
        </div>

        <div id="plans" className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.key}
              className={`rounded-[20px] border p-6 shadow-2 dark:bg-background-8 ${
                plan.highlight ? 'border-primary-500 bg-white' : 'border-stroke-2 bg-white dark:border-stroke-7'
              }`}
            >
              {plan.badge ? <p className="badge badge-yellow-v2">{plan.badge}</p> : null}
              <h2 className="mt-3 text-2xl font-semibold">{plan.name}</h2>
              <p className="mt-2 text-xl font-semibold text-primary-500">{plan.price}</p>
              {plan.positioning ? <p className="mt-2 text-sm font-medium">{plan.positioning}</p> : null}
              <p className="mt-2 text-sm text-secondary/70 dark:text-accent/70">{plan.description}</p>
              <p className="mt-2 text-xs text-secondary/70 dark:text-accent/70">{plan.trialNote}</p>

              <ul className="mt-4 space-y-2 text-sm">
                {(plan.features || []).slice(0, 8).map((feature, idx) => (
                  <li key={`${plan.key}-feature-${idx}`} className="text-secondary/80 dark:text-accent/80">
                    {typeof feature === 'string' ? feature : feature.text}
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <a href={`${APP_ORIGIN}/register`} className="btn btn-primary hover:btn-secondary dark:hover:btn-accent">
                  {plan.ctaLabel || 'Start free trial'}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
          <h2 className="text-2xl font-semibold">{pricingSource.assurances?.title}</h2>
          <p className="mt-3 text-secondary/70 dark:text-accent/70">{pricingSource.assurances?.subtitle}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {assurances.map((item) => (
              <div key={item.key} className="rounded-xl border border-stroke-2 p-4 dark:border-stroke-7">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-secondary/70 dark:text-accent/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">{pricingSource.included?.title}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-secondary/80 dark:text-accent/80">
              {included.map((item, idx) => (
                <li key={`included-${idx}`}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">{pricingSource.whyTeams?.title}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-secondary/80 dark:text-accent/80">
              {whyTeams.map((item, idx) => (
                <li key={`why-${idx}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">{pricingSource.plans?.table?.addons?.title}</h2>
            <div className="mt-4 space-y-2">
              {addons.map((item) => (
                <div key={item.key} className="flex items-center justify-between rounded-xl border border-stroke-2 p-3 dark:border-stroke-7">
                  <span>{item.name}</span>
                  <span className="font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">{websiteDesignService.title}</h2>
            <p className="mt-3 text-secondary/70 dark:text-accent/70">{websiteDesignService.description}</p>
            <p className="mt-3 text-sm text-secondary/70 dark:text-accent/70">{websiteDesignService.includes}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={withLocalePath('/website-builder', locale)} className="btn btn-primary hover:btn-secondary dark:hover:btn-accent">
                {websiteDesignService.cta || 'Website Design Service'}
              </Link>
              <Link href={withLocalePath('/contact', locale)} className="btn btn-primary-v2 dark:btn-transparent">
                Talk to rollout team
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
          <p className="text-sm uppercase tracking-wide text-primary-500">{ctaBanner.eyebrow || 'Launch today'}</p>
          <h2 className="mt-2 text-2xl font-semibold">{ctaBanner.title}</h2>
          <p className="mt-3 max-w-[860px] text-secondary/70 dark:text-accent/70">{ctaBanner.description}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={`${APP_ORIGIN}/register`} className="btn btn-primary hover:btn-secondary dark:hover:btn-accent">
              {ctaBanner.primaryCta?.label || 'Start free trial'}
            </a>
            <Link href={withLocalePath('/contact', locale)} className="btn btn-primary-v2 dark:btn-transparent">
              {ctaBanner.secondaryCta?.label || 'Talk to sales'}
            </Link>
            <Link href={withLocalePath('/website-builder', locale)} className="btn btn-primary-v2 dark:btn-transparent">
              See Website Builder
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
