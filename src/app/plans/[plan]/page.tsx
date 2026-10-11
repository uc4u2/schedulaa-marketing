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
    <main className="overflow-x-hidden bg-background-3 pb-24 pt-36 dark:bg-background-7 md:pt-44">
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
        <div className="mx-auto grid max-w-[1180px] gap-10 rounded-[30px] bg-secondary px-6 py-10 text-white shadow-3 md:px-12 md:py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="badge badge-yellow-v2">
              One-year software subscription
            </p>
            <h1 className="mt-5 text-white">{plan.name}</h1>
            <p className="mt-5 max-w-[680px] text-lg text-accent/80">
              {plan.description}
            </p>

            <div className="mt-7 rounded-[20px] border border-white/15 bg-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent/70">
                Full 12-month price
              </p>
              <p className="mt-2 text-4xl font-semibold text-white">
                {priceLabel} USD
              </p>
              <p className="mt-2 text-sm text-accent/75">
                Prepaid annually · Available online · Digital delivery
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <TrackedLink
                href={checkoutUrl}
                className="btn btn-primary btn-md"
                analyticsCta={{
                  name: `choose_${plan.planKey}_annual`,
                  pagePath: withLocalePath(pagePath, locale),
                  placement: "hero",
                }}
              >
                Choose {plan.shortName} annual
              </TrackedLink>
              <Link
                href={withLocalePath("/pricing", locale)}
                className="btn btn-white btn-md dark:btn-transparent"
              >
                Compare all plans
              </Link>
            </div>
            <p className="mt-4 max-w-[700px] text-sm text-accent/70">
              The annual plan and billing interval stay preselected through
              sign-in or new-account setup. New eligible workspaces receive a
              14-day trial.
            </p>
          </div>

          <figure className="overflow-hidden rounded-[24px] border border-white/15 bg-white p-3 shadow-2">
            <Image
              src={plan.image}
              alt={plan.imageAlt}
              width={1600}
              height={1050}
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="h-auto w-full rounded-[16px] object-contain"
            />
            <figcaption className="px-2 pb-1 pt-3 text-sm text-secondary/70">
              A current Schedulaa product interface relevant to the{" "}
              {plan.shortName} plan.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-padding-x py-16">
        <div className="mx-auto grid max-w-[1180px] gap-6 lg:grid-cols-[1fr_0.82fr]">
          <article className="rounded-[24px] border border-stroke-2 bg-white p-7 shadow-box dark:border-stroke-7 dark:bg-background-8 md:p-9">
            <p className="premium-eyebrow">Included in {plan.shortName}</p>
            <h2 className="mt-3">A focused plan for the work you need now.</h2>
            <p className="mt-4 text-secondary/72 dark:text-accent/72">
              {plan.positioning}
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-[16px] border border-stroke-2 bg-background-3 px-4 py-4 text-secondary/80 dark:border-stroke-7 dark:bg-background-7 dark:text-accent/80"
                >
                  <span aria-hidden="true" className="mr-2 text-primary-500">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>

          <aside className="rounded-[24px] border border-stroke-2 bg-white p-7 shadow-box dark:border-stroke-7 dark:bg-background-8 md:p-9">
            <p className="premium-eyebrow">Before you subscribe</p>
            <h2 className="mt-3 text-heading-5">
              Annual renewal and cancellation
            </h2>
            <div className="mt-5 space-y-4 text-secondary/72 dark:text-accent/72">
              <p>
                After any eligible trial, the first annual term is {priceLabel}{" "}
                USD plus applicable taxes. The subscription renews automatically
                each year at the annual price in effect for your account unless
                you cancel before renewal.
              </p>
              <p>
                Cancel through available Billing settings or email{" "}
                <a
                  className="font-medium text-primary-500 underline underline-offset-4"
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
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link
                href={withLocalePath("/refund-policy", locale)}
                className="font-medium text-primary-500 underline underline-offset-4"
              >
                Refund and cancellation policy
              </Link>
              <Link
                href={withLocalePath("/terms", locale)}
                className="font-medium text-primary-500 underline underline-offset-4"
              >
                Terms of Service
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding-x">
        <div className="mx-auto max-w-[1180px] rounded-[24px] border border-stroke-2 bg-white p-7 dark:border-stroke-7 dark:bg-background-8 md:p-9">
          <p className="premium-eyebrow">Other annual subscriptions</p>
          <h2 className="mt-3 text-heading-5">
            Review another Schedulaa plan.
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {otherPlans.map((candidate) => (
              <Link
                key={candidate.slug}
                href={withLocalePath(`/plans/${candidate.slug}`, locale)}
                className="rounded-[18px] border border-stroke-2 p-5 transition hover:-translate-y-0.5 hover:border-primary-500 dark:border-stroke-7"
              >
                <span className="font-semibold">
                  {candidate.shortName} annual
                </span>
                <span className="mt-1 block text-sm text-secondary/65 dark:text-accent/65">
                  {formatUsd(candidate.price)} USD for 12 months
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
