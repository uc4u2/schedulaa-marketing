'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState, type CSSProperties } from 'react';
import { useTranslations } from 'next-intl';

import { getPricingSource } from '@/legacy-content/pricing/getPricingSource';
import { buildAppUrl, buildUpgradeUrl, marketingReturnTo } from '@/utils/appLinks';
import { AppLocale, detectLocaleFromPath, withLocalePath } from '@/utils/locale';
import { trackMetaPixel } from '@/utils/metaPixel';

import PlanFinderModal from './PlanFinderModal';
import { getPricingExperience, type PlanFeature, type PricingSource } from './pricingCatalog';

const BOOK_DEMO_FALLBACK =
  'https://app.schedulaa.com/sale/meet/uzmTuuGPNNepce0r2vcx8WB4w3sJ2LA32Aqh7XIw9F8';

const PUBLIC_BILLING_DISPLAY = {
  monthly: {
    starter: { card: '$19.99/mo', compare: '$19.99 / mo', note: 'Billed monthly' },
    pro: { card: '$49.99/mo', compare: '$49.99 / mo', note: 'Billed monthly' },
    business: { card: '$119.99/mo', compare: '$119.99 / mo', note: 'Billed monthly' },
  },
  annual: {
    starter: { card: '$199.90/yr', compare: '$199.90 / yr', note: 'Billed yearly · Save 2 months' },
    pro: { card: '$499.90/yr', compare: '$499.90 / yr', note: 'Billed yearly · Save 2 months' },
    business: { card: '$1,199.90/yr', compare: '$1,199.90 / yr', note: 'Billed yearly · Save 2 months' },
  },
} as const;

const renderPlanFeatures = (planKey: string, features: PlanFeature[] = []) => (
  <ul className="space-y-2">
    {features.map((feature, index) => {
      if (typeof feature === 'string') {
        return (
          <li key={`${planKey}-f-${index}`} className="list-inside list-disc text-tagline-2">
            {feature}
          </li>
        );
      }
      if (feature?.type === 'heading') {
        return (
          <li key={`${planKey}-h-${index}`} className="pt-2 text-tagline-1 font-semibold">
            {feature.text}
          </li>
        );
      }
      return null;
    })}
  </ul>
);

const Pricing = ({ locale: pageLocale }: { locale?: AppLocale }) => {
  const tPricing = useTranslations('pricing');
  const pathname = usePathname() || '/';
  const locale = pageLocale ?? (detectLocaleFromPath(pathname) as AppLocale);
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'annual'>('monthly');
  const returnTo = marketingReturnTo(locale, '/pricing');
  const pricingSource = getPricingSource(locale) as PricingSource;
  const experience = getPricingExperience(locale, pricingSource);
  const hero = pricingSource.hero;
  const included = pricingSource.included;
  const assurances = pricingSource.assurances;
  const whyTeams = pricingSource.whyTeams;
  const ctaBanner = pricingSource.ctaBanner;
  const faqSection = experience.faqSection;
  const bookDemoHref = process.env.NEXT_PUBLIC_BOOK_DEMO_URL || BOOK_DEMO_FALLBACK;

  const basicSetupHref = buildAppUrl('/upgrade', {
    returnTo,
    params: { addon: 'website_design' },
  });
  const growthSetupHref = `${withLocalePath('/contact', locale)}?topic=website-setup-growth`;
  const premiumSetupHref = `${withLocalePath('/contact', locale)}?topic=website-setup-premium`;
  const planHrefFor = (planKey: string) =>
    buildUpgradeUrl({
      plan: planKey,
      interval: billingInterval,
      returnTo,
    });
  const displayPlans = useMemo(
    () =>
      experience.subscriptionPlans.map((plan) => {
        const intervalPricing =
          PUBLIC_BILLING_DISPLAY[billingInterval][plan.key as keyof typeof PUBLIC_BILLING_DISPLAY.monthly];
        if (!intervalPricing) return plan;
        return {
          ...plan,
          price: intervalPricing.card,
        };
      }),
    [billingInterval, experience.subscriptionPlans],
  );
  const comparisonPriceRow = useMemo(
    () => ({
      ...experience.comparison.rows.price,
      starter: PUBLIC_BILLING_DISPLAY[billingInterval].starter.compare,
      pro: PUBLIC_BILLING_DISPLAY[billingInterval].pro.compare,
      business: PUBLIC_BILLING_DISPLAY[billingInterval].business.compare,
    }),
    [billingInterval, experience.comparison.rows.price],
  );

  return (
    <section className="relative pt-[110px] pb-18 md:pt-[150px] md:pb-24">
      <div className="main-container space-y-14">
        <div className="mx-auto max-w-[980px] text-center">
          <span className="badge badge-yellow-v2 mb-4">{hero.eyebrow}</span>
          <h1 className="mb-4">
            {hero.title[0]}
            <br className="hidden md:block" />
            {hero.title[1]}
          </h1>
          <p className="mx-auto mb-8 max-w-[900px]">{hero.subtitle}</p>
          <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
            <a
              href={buildAppUrl('/register', { returnTo })}
              className="btn btn-secondary btn-md"
              onClick={() =>
                trackMetaPixel('CompleteRegistration', {
                  content_name: 'Pricing Hero Start Free Trial',
                  page_path: '/pricing',
                })
              }
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={bookDemoHref}
              className="btn btn-primary btn-md"
              onClick={() =>
                trackMetaPixel('Lead', {
                  content_name: 'Pricing Hero Book Demo',
                  page_path: '/pricing',
                })
              }
            >
              Book a demo
            </a>
          </div>
        </div>

        <PlanFinderModal
          locale={locale}
          comparePlansHref="#plans"
          content={experience.planFinder}
          plans={displayPlans}
          setupServices={experience.websiteSetupServices}
          planHrefFor={planHrefFor}
          basicSetupHref={basicSetupHref}
          growthSetupHref={growthSetupHref}
          premiumSetupHref={premiumSetupHref}
        />

        <div className="rounded-2xl border border-stroke-2 bg-white p-4 text-sm dark:border-stroke-7 dark:bg-background-8">
          <span dangerouslySetInnerHTML={{ __html: pricingSource.ribbon.message }} />
        </div>

        <div className="flex justify-center">
          <label className="inline-flex items-center gap-3 rounded-full border border-stroke-2 bg-white px-5 py-3 text-sm font-medium dark:border-stroke-7 dark:bg-background-8">
            <span className={billingInterval === 'monthly' ? 'text-secondary dark:text-white' : 'text-secondary/60 dark:text-accent/60'}>
              {tPricing('monthly')}
            </span>
            <input
              type="checkbox"
              checked={billingInterval === 'annual'}
              onChange={(event) => setBillingInterval(event.target.checked ? 'annual' : 'monthly')}
              className="peer sr-only"
              aria-label="Toggle between monthly and annual pricing"
            />
            <span className="relative h-7 w-14 rounded-full bg-secondary/20 transition peer-checked:bg-primary/25 dark:bg-accent/20">
              <span className={`absolute top-0.5 h-6 w-6 rounded-full bg-primary transition ${billingInterval === 'annual' ? 'left-7' : 'left-0.5'}`} />
            </span>
            <span className={billingInterval === 'annual' ? 'text-secondary dark:text-white' : 'text-secondary/60 dark:text-accent/60'}>
              {tPricing('yearly')}
            </span>
          </label>
        </div>

        <div id="plans" className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {displayPlans.map((plan, index) => (
            <article
              id={`plan-${plan.key}`}
              key={plan.key}
              className={`rounded-2xl border p-6 ${
                plan.highlight
                  ? 'border-secondary bg-background-3 dark:border-accent dark:bg-background-8'
                  : 'border-stroke-2 bg-white dark:border-stroke-7 dark:bg-background-5'
              }`}
              style={
                {
                  '--card-rotate-start': index === 1 ? '0deg' : index % 2 === 0 ? '-8deg' : '8deg',
                  '--card-rotate-end': index === 1 ? '0deg' : index % 2 === 0 ? '-1deg' : '1deg',
                  animation: `heroCardDrop 920ms cubic-bezier(0.23,1,0.32,1) ${120 + index * 220}ms both, heroCardDrift ${7.4 + index * 0.35}s ease-in-out ${1.2 + index * 0.25}s infinite`,
                } as CSSProperties
              }
            >
              {plan.badge ? <span className="badge badge-cyan mb-3">{plan.badge}</span> : null}
              <h2 className="text-heading-4 mb-2">{plan.name}</h2>
              <p className="mb-2 text-heading-5">{plan.price}</p>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-secondary/60 dark:text-accent/60">
                {PUBLIC_BILLING_DISPLAY[billingInterval][plan.key as keyof typeof PUBLIC_BILLING_DISPLAY.monthly]?.note || ''}
              </p>
              <p className="mb-3 text-sm font-semibold text-secondary/70 dark:text-accent/70">{plan.positioning}</p>
              <p className="mb-3">{plan.description}</p>
              <p className="mb-5 text-tagline-2 text-secondary/70 dark:text-accent/70">{plan.trialNote}</p>
              <>
                <a
                  href={planHrefFor(plan.key)}
                  className="btn btn-md btn-secondary mb-5 block w-full text-center"
                  onClick={() =>
                    trackMetaPixel('CompleteRegistration', {
                      content_name: `Pricing Plan Start Free Trial - ${plan.name}`,
                      page_path: '/pricing',
                      plan_name: plan.name,
                    })
                  }
                >
                  {plan.secondaryCtaLabel || plan.ctaLabel || 'Start 14-day free trial'}
                </a>
                <a
                  href={bookDemoHref}
                  className="mb-5 block text-center text-sm font-medium text-primary underline-offset-4 hover:underline"
                  onClick={() =>
                    trackMetaPixel('Lead', {
                      content_name: `Pricing Plan Book Demo - ${plan.name}`,
                      page_path: '/pricing',
                      plan_name: plan.name,
                    })
                  }
                >
                  {plan.ctaLabel === 'Book a demo' ? plan.ctaLabel : 'Book a demo'}
                </a>
              </>
              {renderPlanFeatures(plan.key, plan.features)}
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <span className="badge badge-cyan mb-4">{experience.quoteToInvoiceSection.badge}</span>
              <h2 className="text-heading-3">{experience.quoteToInvoiceSection.title}</h2>
              <p className="mt-3 max-w-[760px] text-secondary/75 dark:text-accent/75">
                {experience.quoteToInvoiceSection.subtitle}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#plan-business" className="btn btn-secondary btn-md">
                  {experience.quoteToInvoiceSection.primaryCtaLabel}
                </a>
                <Link href={withLocalePath('/contact', locale)} className="btn btn-white dark:btn-white-dark btn-md text-center">
                  {experience.quoteToInvoiceSection.secondaryCtaLabel}
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-stroke-2 p-5 dark:border-stroke-7">
              <ul className="space-y-3">
                {experience.quoteToInvoiceSection.bullets.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-secondary/80 dark:text-accent/80">
                    <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/12 text-xs font-bold text-primary">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
          <div className="max-w-[860px]">
            <h2 className="text-heading-3">{experience.websiteSetupServices.title}</h2>
            <p className="mt-3 text-secondary/75 dark:text-accent/75">{experience.websiteSetupServices.subtitle}</p>
            <p className="mt-3 text-sm leading-6 text-secondary/70 dark:text-accent/70">{experience.websiteSetupServices.note}</p>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {experience.websiteSetupServices.items.map((service) => (
              <article key={service.key} className="rounded-2xl border border-stroke-2 p-6 dark:border-stroke-7">
                <h3 className="text-heading-5">{service.name}</h3>
                <p className="mt-2 text-heading-6">{service.price}</p>
                <p className="mt-1 text-sm font-medium text-secondary/70 dark:text-accent/70">{service.priceNote}</p>
                <p className="mt-4 text-sm leading-6 text-secondary/75 dark:text-accent/75">{service.bestFor}</p>
                <p className="mt-4 text-sm leading-6 text-secondary/75 dark:text-accent/75">{service.description}</p>
                <ul className="mt-5 space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="list-inside list-disc text-tagline-2">
                      {item}
                    </li>
                  ))}
                </ul>
                {service.key === 'basic' ? (
                  <a href={basicSetupHref} className="btn btn-primary btn-md mt-6 block w-full text-center">
                    {service.ctaLabel}
                  </a>
                ) : service.key === 'growth' ? (
                  <Link href={growthSetupHref} className="btn btn-primary btn-md mt-6 block w-full text-center">
                    {service.ctaLabel}
                  </Link>
                ) : (
                  <Link href={premiumSetupHref} className="btn btn-primary btn-md mt-6 block w-full text-center">
                    {service.ctaLabel}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
          <h2 className="mb-2 text-heading-3">{experience.comparison.title}</h2>
          <p className="mb-6 text-secondary/75 dark:text-accent/75">{experience.comparison.subtitle}</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[780px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-stroke-2 dark:border-stroke-7">
                  <th className="px-3 py-3">{experience.comparison.headers.feature}</th>
                  <th className="px-3 py-3">{experience.comparison.headers.starter}</th>
                  <th className="px-3 py-3">{experience.comparison.headers.pro}</th>
                  <th className="px-3 py-3">{experience.comparison.headers.business}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stroke-2 dark:border-stroke-7">
                  <td className="px-3 py-3">{experience.comparison.rows.price.label}</td>
                  <td className="px-3 py-3">{comparisonPriceRow.starter}</td>
                  <td className="px-3 py-3">{comparisonPriceRow.pro}</td>
                  <td className="px-3 py-3">{comparisonPriceRow.business}</td>
                </tr>
                <tr className="border-b border-stroke-2 dark:border-stroke-7">
                  <td className="px-3 py-3">{experience.comparison.rows.bestFor.label}</td>
                  <td className="px-3 py-3">{experience.comparison.rows.bestFor.starter}</td>
                  <td className="px-3 py-3">{experience.comparison.rows.bestFor.pro}</td>
                  <td className="px-3 py-3">{experience.comparison.rows.bestFor.business}</td>
                </tr>
                {experience.comparison.sections.flatMap((group) => [
                  <tr
                    key={`${group.section}-title`}
                    className="border-b border-stroke-2 bg-background-3 dark:border-stroke-7 dark:bg-background-5"
                  >
                    <td colSpan={4} className="px-3 py-3 font-semibold">
                      {group.section}
                    </td>
                  </tr>,
                  ...group.items.map((item) => (
                    <tr key={`${group.section}-${item.label}`} className="border-b border-stroke-2 dark:border-stroke-7">
                      <td className="px-3 py-3">{item.label}</td>
                      <td className="px-3 py-3">{item.starter}</td>
                      <td className="px-3 py-3">{item.pro}</td>
                      <td className="px-3 py-3">{item.business}</td>
                    </tr>
                  )),
                ])}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
            <h3 className="mb-3">{included.title}</h3>
            <ul className="space-y-2">
              {included.items.map((item: string) => (
                <li key={item} className="list-inside list-disc text-tagline-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
            <h3 className="mb-3">{whyTeams.title}</h3>
            <ul className="space-y-2">
              {whyTeams.items.map((item: string) => (
                <li key={item} className="list-inside list-disc text-tagline-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
          <h3 className="mb-2">{assurances.title}</h3>
          <p className="mb-5">{assurances.subtitle}</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {assurances.items.map((item: { key: string; title: string; description: string }) => (
              <article key={item.key} className="rounded-xl border border-stroke-2 p-4 dark:border-stroke-7">
                <h4 className="mb-1 text-heading-6">{item.title}</h4>
                <p className="text-tagline-2">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        {faqSection?.items?.length ? (
          <div className="rounded-3xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
            <h2 className="text-heading-3">{faqSection.title}</h2>
            <div className="mt-6 space-y-4">
              {faqSection.items.map((item) => (
                <article key={item.question} className="rounded-2xl border border-stroke-2 p-5 dark:border-stroke-7">
                  <h3 className="text-heading-6">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-secondary/75 dark:text-accent/75">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        <div className="rounded-3xl border border-stroke-2 bg-secondary p-8 text-accent dark:border-stroke-7 dark:bg-background-8">
          <span className="badge badge-cyan mb-3">{ctaBanner.eyebrow}</span>
          <h2 className="mb-3 text-white">{ctaBanner.title}</h2>
          <p className="mb-5 max-w-[860px] text-accent/80">{ctaBanner.description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={buildAppUrl('/register', { returnTo })} className="btn btn-accent btn-md">
              {ctaBanner.primaryCta.label}
            </a>
            <Link href={withLocalePath('/contact', locale)} className="btn btn-white btn-md">
              {ctaBanner.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
