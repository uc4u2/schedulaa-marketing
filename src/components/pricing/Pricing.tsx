'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import pricingSource from '@/legacy-content/pricing/landing-pricing.json';
import { buildAppUrl, buildBillingUrl, marketingReturnTo } from '@/utils/appLinks';
import { AppLocale, detectLocaleFromPath, withLocalePath } from '@/utils/locale';

type PlanFeature = string | { type?: string; text?: string };
type Plan = {
  key: string;
  name: string;
  price: string;
  description: string;
  trialNote?: string;
  features?: PlanFeature[];
  ctaLabel?: string;
  ctaTo?: string;
  highlight?: boolean;
  badge?: string;
};

const rows = pricingSource.comparison.rows;
const values = pricingSource.comparison.values;
const yes = values.yes || 'Yes';
const dash = values.dash || '—';

const comparisonSections = [
  {
    section: rows.website.section,
    items: [
      { label: rows.website.builder, starter: yes, pro: yes, business: yes },
      { label: rows.website.customDomain, starter: yes, pro: yes, business: yes },
      { label: rows.website.publicBooking, starter: yes, pro: yes, business: yes },
      { label: rows.website.embedded, starter: yes, pro: yes, business: yes },
      { label: rows.website.branding, starter: dash, pro: dash, business: yes },
    ],
  },
  {
    section: rows.booking.section,
    items: [
      { label: rows.booking.online, starter: yes, pro: yes, business: yes },
      { label: rows.booking.reschedule, starter: yes, pro: yes, business: yes },
      { label: rows.booking.multi, starter: yes, pro: yes, business: yes },
      { label: rows.booking.staffScheduling, starter: dash, pro: yes, business: yes },
      { label: rows.booking.shiftSwaps, starter: dash, pro: yes, business: yes },
      { label: rows.booking.bulk, starter: dash, pro: dash, business: yes },
    ],
  },
  {
    section: rows.time.section,
    items: [
      { label: rows.time.clock, starter: dash, pro: yes, business: yes },
      { label: rows.time.breakPolicy, starter: dash, pro: yes, business: yes },
      { label: rows.time.staggered, starter: dash, pro: yes, business: yes },
      { label: rows.time.ipHints, starter: dash, pro: yes, business: yes },
      { label: rows.time.overtime, starter: dash, pro: yes, business: yes },
    ],
  },
  {
    section: rows.payroll.section,
    items: [
      { label: rows.payroll.processing, starter: dash, pro: yes, business: yes },
      { label: rows.payroll.holiday, starter: dash, pro: yes, business: yes },
      { label: rows.payroll.payslip, starter: dash, pro: yes, business: yes },
      { label: rows.payroll.exports, starter: dash, pro: dash, business: yes },
      { label: rows.payroll.invoicing, starter: dash, pro: yes, business: yes },
    ],
  },
  {
    section: rows.compliance.section,
    items: [
      { label: rows.compliance.revenueReports, starter: yes, pro: yes, business: yes },
      { label: rows.compliance.exports, starter: yes, pro: yes, business: yes },
      { label: rows.compliance.w2, starter: dash, pro: dash, business: yes },
      { label: rows.compliance.t4, starter: dash, pro: dash, business: yes },
      { label: rows.compliance.audit, starter: dash, pro: dash, business: yes },
    ],
  },
  {
    section: rows.analytics.section,
    items: [
      { label: rows.analytics.revenueDash, starter: yes, pro: yes, business: yes },
      { label: rows.analytics.utilization, starter: dash, pro: yes, business: yes },
      { label: rows.analytics.segmentation, starter: dash, pro: yes, business: yes },
      { label: rows.analytics.multiLocation, starter: dash, pro: dash, business: yes },
    ],
  },
  {
    section: rows.automation.section,
    items: [
      { label: rows.automation.notifications, starter: yes, pro: yes, business: yes },
      { label: rows.automation.campaigns, starter: dash, pro: yes, business: yes },
      { label: rows.automation.zapier, starter: dash, pro: yes, business: yes },
      { label: rows.automation.workflows, starter: dash, pro: yes, business: yes },
    ],
  },
  {
    section: rows.hiring.section,
    items: [
      { label: rows.hiring.jobs, starter: dash, pro: yes, business: yes },
      { label: rows.hiring.resume, starter: dash, pro: yes, business: yes },
      { label: rows.hiring.onboarding, starter: dash, pro: yes, business: yes },
      { label: rows.hiring.handoff, starter: dash, pro: yes, business: yes },
    ],
  },
  {
    section: rows.scale.section,
    items: [
      {
        label: rows.scale.seatsIncluded,
        starter: rows.scale.starterSeats,
        pro: rows.scale.proSeats,
        business: rows.scale.businessSeats,
      },
      { label: rows.scale.additionalSeats, starter: dash, pro: rows.scale.seatPrice, business: rows.scale.seatPrice },
      {
        label: rows.scale.multiLocation,
        starter: rows.scale.starterLocations,
        pro: rows.scale.proLocations,
        business: rows.scale.businessLocations,
      },
      {
        label: rows.scale.roleAccess,
        starter: rows.scale.starterAccess,
        pro: rows.scale.proAccess,
        business: rows.scale.businessAccess,
      },
      { label: rows.scale.branchPermissions, starter: dash, pro: dash, business: yes },
    ],
  },
  {
    section: rows.support.section,
    items: [
      { label: rows.support.standard, starter: yes, pro: yes, business: yes },
      { label: rows.support.priority, starter: dash, pro: values.businessHours, business: values.always },
      { label: rows.support.audit, starter: dash, pro: dash, business: yes },
    ],
  },
];

const Pricing = () => {
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname) as AppLocale;
  const returnTo = marketingReturnTo(locale, '/pricing');

  const plans = pricingSource.plans.table.list as Plan[];
  const hero = pricingSource.hero;
  const comparison = pricingSource.comparison;
  const included = pricingSource.included;
  const assurances = pricingSource.assurances;
  const whyTeams = pricingSource.whyTeams;
  const ctaBanner = pricingSource.ctaBanner;
  const addOns = pricingSource.plans.table.addons;
  const websiteDesignService = pricingSource.websiteDesignService;

  return (
    <section className="relative pt-[110px] pb-18 md:pt-[150px] md:pb-24">
      <div className="main-container space-y-14">
        <div className="mx-auto max-w-[960px] text-center">
          <span className="badge badge-yellow-v2 mb-4">{hero.eyebrow}</span>
          <h1 className="mb-4">
            {hero.title[0]}
            <br className="hidden md:block" />
            {hero.title[1]}
          </h1>
          <p className="mx-auto mb-8 max-w-[900px]">{hero.subtitle}</p>
          <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
            <a href={buildAppUrl('/register', { returnTo })} className="btn btn-secondary btn-md">
              {hero.primaryCta.label}
            </a>
            <a href="#plans" className="btn btn-white dark:btn-white-dark btn-md">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-stroke-2 bg-white p-4 text-sm dark:border-stroke-7 dark:bg-background-8">
          <span dangerouslySetInnerHTML={{ __html: pricingSource.ribbon.message }} />
        </div>

        <div id="plans" className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.key}
              className={`rounded-2xl border p-6 ${
                plan.highlight
                  ? 'border-secondary bg-background-3 dark:border-accent dark:bg-background-8'
                  : 'border-stroke-2 bg-white dark:border-stroke-7 dark:bg-background-5'
              }`}>
              {plan.badge ? <span className="badge badge-cyan mb-3">{plan.badge}</span> : null}
              <h2 className="text-heading-4 mb-2">{plan.name}</h2>
              <p className="mb-3 text-tagline-2">{plan.price}</p>
              <p className="mb-3">{plan.description}</p>
              {plan.trialNote ? <p className="mb-5 text-tagline-2 text-secondary/70 dark:text-accent/70">{plan.trialNote}</p> : null}
              <a
                href={buildAppUrl('/register', {
                  returnTo,
                  params: { plan: plan.key },
                })}
                className="btn btn-md btn-secondary mb-5 block w-full text-center">
                {plan.ctaLabel || 'Start free trial'}
              </a>
              <ul className="space-y-2">
                {(plan.features || []).map((feature, index) => {
                  if (typeof feature === 'string') {
                    return (
                      <li key={`${plan.key}-f-${index}`} className="list-inside list-disc text-tagline-2">
                        {feature}
                      </li>
                    );
                  }
                  if (feature?.type === 'heading') {
                    return (
                      <li key={`${plan.key}-h-${index}`} className="pt-2 text-tagline-1 font-semibold">
                        {feature.text}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
          <h2 className="mb-2">{comparison.title}</h2>
          <p className="mb-6">{comparison.subtitle}</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[780px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-stroke-2 dark:border-stroke-7">
                  <th className="px-3 py-3">{comparison.headers.feature}</th>
                  <th className="px-3 py-3">{comparison.headers.starter}</th>
                  <th className="px-3 py-3">{comparison.headers.pro}</th>
                  <th className="px-3 py-3">{comparison.headers.business}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stroke-2 dark:border-stroke-7">
                  <td className="px-3 py-3">{comparison.rows.price.label}</td>
                  <td className="px-3 py-3">{comparison.rows.price.starter}</td>
                  <td className="px-3 py-3">{comparison.rows.price.pro}</td>
                  <td className="px-3 py-3">{comparison.rows.price.business}</td>
                </tr>
                <tr className="border-b border-stroke-2 dark:border-stroke-7">
                  <td className="px-3 py-3">{comparison.rows.bestFor.label}</td>
                  <td className="px-3 py-3">{comparison.rows.bestFor.starter}</td>
                  <td className="px-3 py-3">{comparison.rows.bestFor.pro}</td>
                  <td className="px-3 py-3">{comparison.rows.bestFor.business}</td>
                </tr>

                {comparisonSections.flatMap((group) => [
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
              {included.items.map((item) => (
                <li key={item} className="list-inside list-disc text-tagline-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
            <h3 className="mb-3">{whyTeams.title}</h3>
            <ul className="space-y-2">
              {whyTeams.items.map((item) => (
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
            {assurances.items.map((item) => (
              <article key={item.key} className="rounded-xl border border-stroke-2 p-4 dark:border-stroke-7">
                <h4 className="mb-1 text-heading-6">{item.title}</h4>
                <p className="text-tagline-2">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
          <h3 className="mb-3">{addOns.title}</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-stroke-2 dark:border-stroke-7">
                  <th className="px-3 py-3">{addOns.headers.addon}</th>
                  <th className="px-3 py-3">{addOns.headers.price}</th>
                </tr>
              </thead>
              <tbody>
                {addOns.items.map((item) => (
                  <tr key={item.key} className="border-b border-stroke-2 dark:border-stroke-7">
                    <td className="px-3 py-3">{item.name}</td>
                    <td className="px-3 py-3">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
          <h3 className="mb-2">{websiteDesignService.title}</h3>
          <p className="mb-2">{websiteDesignService.description}</p>
          <p className="mb-4 text-tagline-2 text-secondary/70 dark:text-accent/70">{websiteDesignService.includes}</p>
          <a href={buildBillingUrl({ returnTo })} className="btn btn-secondary btn-md">
            {websiteDesignService.cta}
          </a>
        </div>

        <div className="rounded-3xl border border-stroke-2 bg-secondary p-8 text-accent dark:border-stroke-7 dark:bg-background-8">
          <span className="badge badge-cyan mb-3">{ctaBanner.eyebrow}</span>
          <h2 className="mb-3">{ctaBanner.title}</h2>
          <p className="mb-5 max-w-[860px]">{ctaBanner.description}</p>
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
