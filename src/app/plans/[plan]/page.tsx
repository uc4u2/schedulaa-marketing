import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import TrackedLink from "@/components/shared/TrackedLink";
import { ANNUAL_PLANS, getAnnualPlan } from "@/data/annualPlans";
import {
  buildLocalizedPageMetadata,
  getLocalizedCanonicalUrl,
  MARKETING_SITE_URL,
} from "@/lib/seo/pageMetadata";
import { buildUpgradeUrl, marketingReturnTo } from "@/utils/appLinks";
import { withLocalePath } from "@/utils/locale";
import { getServerLocale } from "@/utils/serverLocale";

export const dynamicParams = false;

export function generateStaticParams() {
  return ANNUAL_PLANS.map((plan) => ({ plan: plan.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ plan: string }>;
}): Promise<Metadata> {
  const { plan: planSlug } = await params;
  const plan = getAnnualPlan(planSlug);
  if (!plan) {
    return {};
  }

  const locale = await getServerLocale();
  const title = `${plan.name} | ${formatUsd(plan.price)} USD`;
  return buildLocalizedPageMetadata({
    locale,
    path: `/plans/${plan.slug}`,
    title,
    description: `${plan.description} Prepaid annually at ${formatUsd(plan.price)} USD.`,
    image: `${MARKETING_SITE_URL}${plan.image}`,
  });
}

const formatUsd = (price: string) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(Number(price));

const PLAN_PRESENTATION = {
  starter: {
    audience: "For independent service professionals",
    headline: "Book clients. Keep context. Get paid.",
    summary:
      "Give your business a polished digital front door, then carry every appointment into one connected customer and payment flow.",
    scope: ["1 staff seat", "1 location", "12-month term"],
    accent: "text-[#ffb15c]",
    badge:
      "border-[#ff9b35]/30 bg-[#ff9b35]/10 text-[#ffd09b]",
    button:
      "bg-[#ff8a1f] text-[#17110b] hover:bg-[#ffa54e] focus-visible:outline-[#ffb15c]",
    glow: "bg-[#ff8a1f]/20",
  },
  pro: {
    audience: "For growing service teams",
    headline: "Run the team with one shared operating rhythm.",
    summary:
      "Coordinate schedules, time, roles, and payroll-ready reporting without splitting the work across disconnected tools.",
    scope: ["Up to 5 staff seats", "1 location", "12-month term"],
    accent: "text-[#7ddff2]",
    badge:
      "border-[#58cfe8]/30 bg-[#58cfe8]/10 text-[#b9f2fb]",
    button:
      "bg-[#66d9ee] text-[#07151a] hover:bg-[#8ce5f4] focus-visible:outline-[#8ce5f4]",
    glow: "bg-[#2fc4e4]/20",
  },
  business: {
    audience: "For connected service operations",
    headline: "Connect the job, the numbers, and the customer.",
    summary:
      "Move from estimate and approval through field execution, invoicing, inventory, and reporting in one operational workflow.",
    scope: ["Up to 10 staff seats", "Up to 5 locations", "12-month term"],
    accent: "text-[#9fbfff]",
    badge:
      "border-[#6f9cff]/30 bg-[#6f9cff]/10 text-[#c8d8ff]",
    button:
      "bg-[#7ea5ff] text-[#07101f] hover:bg-[#9ab9ff] focus-visible:outline-[#9ab9ff]",
    glow: "bg-[#487df3]/20",
  },
} as const;

export default async function AnnualPlanPage({
  params,
}: {
  params: Promise<{ plan: string }>;
}) {
  const { plan: planSlug } = await params;
  const plan = getAnnualPlan(planSlug);
  if (!plan) {
    notFound();
  }

  const locale = await getServerLocale();
  const pagePath = `/plans/${plan.slug}`;
  const canonical = getLocalizedCanonicalUrl(locale, pagePath);
  const imageUrl = `${MARKETING_SITE_URL}${plan.image}`;
  const checkoutUrl = buildUpgradeUrl({
    plan: plan.planKey,
    interval: "annual",
    returnTo: marketingReturnTo(locale, pagePath),
  });
  const priceLabel = formatUsd(plan.price);
  const presentation = PLAN_PRESENTATION[plan.planKey];
  const otherPlans = ANNUAL_PLANS.filter(
    (candidate) => candidate.slug !== plan.slug,
  );

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonical}#product`,
    name: plan.name,
    sku: plan.feedId,
    description: plan.description,
    image: [imageUrl],
    url: canonical,
    brand: {
      "@type": "Brand",
      name: "Schedulaa",
    },
    category: {
      "@type": "CategoryCode",
      inCodeSet:
        "https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt",
      codeValue: "313",
      name: "Software > Computer Software",
    },
    offers: {
      "@type": "Offer",
      url: canonical,
      price: plan.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "Schedulaa",
        url: `${MARKETING_SITE_URL}/en`,
      },
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Schedulaa",
        item: getLocalizedCanonicalUrl(locale, "/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pricing",
        item: getLocalizedCanonicalUrl(locale, "/pricing"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${plan.shortName} annual`,
        item: canonical,
      },
    ],
  };

  return (
    <main className="overflow-x-hidden bg-[#f4f6fa] pb-24 pt-32 text-[#101522] dark:bg-[#080b12] md:pt-40">
      <script
        id={`${plan.slug}-product-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        id={`${plan.slug}-breadcrumb-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <section className="section-padding-x">
        <div className="mx-auto max-w-[1280px]">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex items-center gap-2 text-sm font-medium text-[#657086] dark:text-white/55"
          >
            <Link
              href={withLocalePath("/pricing", locale)}
              className="transition hover:text-[#101522] dark:hover:text-white"
            >
              Plans
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#101522] dark:text-white">
              {plan.shortName} annual
            </span>
          </nav>

          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#090c13] text-white shadow-[0_32px_100px_rgba(15,23,42,0.20)]">
            <div
              aria-hidden="true"
              className={`absolute -left-24 top-8 size-80 rounded-full blur-[120px] ${presentation.glow}`}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.035),transparent_42%,rgba(255,255,255,0.018))]"
            />

            <div className="relative grid gap-10 px-6 pb-8 pt-8 md:px-10 md:pb-10 md:pt-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-12 lg:px-12 lg:pb-12 lg:pt-12">
              <div className="relative z-10">
                <div
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] ${presentation.badge}`}
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-current"
                  />
                  {presentation.audience}
                </div>

                <p className={`mt-7 text-sm font-semibold ${presentation.accent}`}>
                  {plan.name}
                </p>
                <h1 className="mt-3 max-w-[720px] text-[clamp(2.7rem,5.1vw,5.35rem)] font-semibold leading-[0.97] tracking-[-0.055em] text-white">
                  {presentation.headline}
                </h1>
                <p className="mt-6 max-w-[640px] text-base leading-7 text-white/67 md:text-lg md:leading-8">
                  {presentation.summary}
                </p>

                <div className="mt-8 border-t border-white/12 pt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-white/45">
                    Full 12-month price
                  </p>
                  <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-[clamp(2.25rem,4vw,3.8rem)] font-semibold tracking-[-0.045em] text-white">
                      {priceLabel}
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.14em] text-white/48">
                      USD / year
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-white/52">
                    Prepaid annually · Available online · Digital delivery
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <TrackedLink
                    href={checkoutUrl}
                    className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${presentation.button}`}
                    analyticsCta={{
                      name: `choose_${plan.planKey}_annual`,
                      pagePath: withLocalePath(pagePath, locale),
                      placement: "hero",
                    }}
                  >
                    Start with {plan.shortName} annual
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </TrackedLink>
                  <Link
                    href={withLocalePath("/pricing", locale)}
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/18 bg-white/[0.04] px-7 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    Compare all plans
                  </Link>
                </div>
                <p className="mt-4 max-w-[620px] text-xs leading-5 text-white/45">
                  Annual billing stays preselected through sign-in or account
                  setup. New eligible workspaces receive a 14-day trial.
                </p>
              </div>

              <figure className="relative overflow-hidden rounded-[26px] border border-white/12 bg-[#05070b] shadow-[0_24px_80px_rgba(0,0,0,0.34)]">
                <Image
                  src={plan.image}
                  alt={plan.imageAlt}
                  width={1600}
                  height={900}
                  priority
                  sizes="(max-width: 1024px) 100vw, 56vw"
                  className="aspect-[16/9] h-auto w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/75 via-black/20 to-transparent px-5 pb-5 pt-16 md:px-6 md:pb-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.17em] text-white/55">
                      Connected workflow
                    </p>
                    <p className="mt-1 text-base font-semibold text-white">
                      {plan.shortName} annual
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`hidden text-2xl sm:block ${presentation.accent}`}
                  >
                    ●
                  </span>
                </div>
              </figure>
            </div>

            <div className="relative grid border-t border-white/10 sm:grid-cols-3">
              {presentation.scope.map((item, index) => (
                <div
                  key={item}
                  className={`px-6 py-5 md:px-10 ${
                    index < presentation.scope.length - 1
                      ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
                    {index === 0
                      ? "Team"
                      : index === 1
                        ? "Workspace"
                        : "Billing"}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-white/82">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-x py-20 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#657086] dark:text-white/45">
                Included in {plan.shortName}
              </p>
              <h2 className="mt-4 max-w-[520px] text-[clamp(2.2rem,4vw,4.35rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[#101522] dark:text-white">
                One plan. One connected way to work.
              </h2>
              <p className="mt-6 max-w-[540px] text-base leading-7 text-[#647086] dark:text-white/58 md:text-lg md:leading-8">
                {plan.positioning}
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {plan.features.map((feature, index) => (
                <li
                  key={feature}
                  className="group min-h-[132px] rounded-[22px] border border-[#dce2eb] bg-white p-5 shadow-[0_16px_48px_rgba(15,23,42,0.055)] transition hover:-translate-y-0.5 hover:border-[#b9c4d3] hover:shadow-[0_22px_58px_rgba(15,23,42,0.09)] dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <span className="text-xs font-semibold tracking-[0.15em] text-[#9aa5b5] dark:text-white/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-8 text-[15px] font-semibold leading-6 text-[#202737] dark:text-white/82">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding-x">
        <div className="mx-auto grid max-w-[1240px] overflow-hidden rounded-[30px] border border-[#dce2eb] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.07)] dark:border-white/10 dark:bg-white/[0.04] lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="bg-[#0c1018] p-7 text-white md:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/42">
              Annual plan summary
            </p>
            <p className="mt-5 text-sm font-semibold text-white/62">
              {plan.name}
            </p>
            <p className="mt-2 text-[clamp(2.2rem,4vw,4rem)] font-semibold tracking-[-0.045em] text-white">
              {priceLabel}
            </p>
            <p className="mt-1 text-sm text-white/48">USD for 12 months</p>
            <TrackedLink
              href={checkoutUrl}
              className={`mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${presentation.button}`}
              analyticsCta={{
                name: `choose_${plan.planKey}_annual`,
                pagePath: withLocalePath(pagePath, locale),
                placement: "billing_terms",
              }}
            >
              Start with {plan.shortName} annual
            </TrackedLink>
            <p className="mt-4 text-xs leading-5 text-white/42">
              The selected plan and annual interval remain preselected through
              account setup.
            </p>
          </aside>

          <article className="p-7 md:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#657086] dark:text-white/45">
              Clear terms before checkout
            </p>
            <h2 className="mt-4 text-[clamp(2rem,3.4vw,3.6rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-[#101522] dark:text-white">
              Annual renewal and cancellation
            </h2>
            <div className="mt-7 grid gap-5 text-[15px] leading-7 text-[#5d687d] dark:text-white/58 md:grid-cols-3">
              <p>
                After any eligible trial, the first annual term is {priceLabel}{" "}
                USD plus applicable taxes. The subscription renews automatically
                each year at the annual price in effect for your account unless
                you cancel before renewal.
              </p>
              <p>
                Cancel through available Billing settings or email{" "}
                <a
                  className="font-semibold text-[#1b5bd6] underline underline-offset-4 dark:text-[#8db3ff]"
                  href="mailto:admin@schedulaa.com"
                >
                  admin@schedulaa.com
                </a>
                . Cancellation stops the next renewal charge; access normally
                continues through the already-paid term.
              </p>
              <p>
                Charges are generally non-refundable after a billing period
                begins, except where required by law, stated in an order, or
                approved after review.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#e3e7ed] pt-6 text-sm dark:border-white/10">
              <Link
                href={withLocalePath("/refund-policy", locale)}
                className="font-semibold text-[#1b5bd6] underline underline-offset-4 dark:text-[#8db3ff]"
              >
                Refund and cancellation policy
              </Link>
              <Link
                href={withLocalePath("/terms", locale)}
                className="font-semibold text-[#1b5bd6] underline underline-offset-4 dark:text-[#8db3ff]"
              >
                Terms of Service
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section-padding-x pt-20 md:pt-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#657086] dark:text-white/45">
                Compare the range
              </p>
              <h2 className="mt-3 text-[clamp(2rem,3.6vw,3.6rem)] font-semibold tracking-[-0.045em] text-[#101522] dark:text-white">
                Other annual plans
              </h2>
            </div>
            <Link
              href={withLocalePath("/pricing", locale)}
              className="text-sm font-semibold text-[#1b5bd6] underline underline-offset-4 dark:text-[#8db3ff]"
            >
              View the full comparison
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {otherPlans.map((candidate) => (
              <Link
                key={candidate.slug}
                href={withLocalePath(`/plans/${candidate.slug}`, locale)}
                className="group grid overflow-hidden rounded-[24px] border border-[#dce2eb] bg-white shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[#b9c4d3] hover:shadow-[0_24px_62px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.04] sm:grid-cols-[180px_1fr]"
              >
                <Image
                  src={candidate.image}
                  alt=""
                  width={480}
                  height={270}
                  sizes="(max-width: 640px) 100vw, 180px"
                  className="aspect-[16/9] h-full w-full object-cover sm:aspect-auto"
                />
                <span className="flex items-center justify-between gap-4 p-6">
                  <span>
                    <span className="block text-lg font-semibold text-[#101522] dark:text-white">
                      {candidate.shortName} annual
                    </span>
                    <span className="mt-1 block text-sm text-[#657086] dark:text-white/48">
                      {formatUsd(candidate.price)} USD for 12 months
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-xl text-[#68758a] transition group-hover:translate-x-1 dark:text-white/45"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
