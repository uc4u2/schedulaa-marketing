import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
import test from "node:test";

import sitemap from "../../src/app/sitemap";
import { ANNUAL_PLANS } from "../../src/data/annualPlans";
import { buildUpgradeUrl } from "../../src/utils/appLinks";

const readSource = (path: string) =>
  readFileSync(new URL(`../../${path}`, import.meta.url), "utf8");

test("annual Merchant Center plans have stable IDs, prices, detail routes, and plan-specific images", () => {
  assert.deepEqual(
    ANNUAL_PLANS.map(({ feedId, slug, planKey, price }) => ({
      feedId,
      slug,
      planKey,
      price,
    })),
    [
      {
        feedId: "schedulaa-starter-annual",
        slug: "starter-annual",
        planKey: "starter",
        price: "199.90",
      },
      {
        feedId: "schedulaa-pro-annual",
        slug: "pro-annual",
        planKey: "pro",
        price: "499.90",
      },
      {
        feedId: "schedulaa-business-annual",
        slug: "business-annual",
        planKey: "business",
        price: "1199.90",
      },
    ],
  );

  assert.equal(new Set(ANNUAL_PLANS.map((plan) => plan.image)).size, 3);
  for (const plan of ANNUAL_PLANS) {
    assert.match(
      plan.image,
      /^\/images\/merchant\/schedulaa-.+-annual\.webp$/,
    );
    assert.ok(
      statSync(new URL(`../../public${plan.image}`, import.meta.url)).size > 0,
    );
  }
});

test("annual product routes are English-only sitemap entries", () => {
  const urls = new Set(sitemap().map((entry) => entry.url));
  for (const plan of ANNUAL_PLANS) {
    assert.ok(urls.has(`https://www.schedulaa.com/en/plans/${plan.slug}`));
    assert.ok(!urls.has(`https://www.schedulaa.com/fa/plans/${plan.slug}`));
  }
});

test("annual checkout links preselect the exact plan and annual interval", () => {
  for (const plan of ANNUAL_PLANS) {
    const url = new URL(
      buildUpgradeUrl({ plan: plan.planKey, interval: "annual" }),
    );
    assert.equal(url.pathname, "/upgrade");
    assert.equal(url.searchParams.get("plan"), plan.planKey);
    assert.equal(url.searchParams.get("interval"), "annual");
  }
});

test("annual product page exposes Merchant Center product facts and renewal terms in initial source", () => {
  const source = readSource("src/app/plans/[plan]/page.tsx");

  assert.match(source, /["']@type["']:\s*["']Product["']/);
  assert.match(source, /["']@type["']:\s*["']Offer["']/);
  assert.match(source, /priceCurrency:\s*["']USD["']/);
  assert.match(
    source,
    /availability:\s*["']https:\/\/schema\.org\/InStock["']/,
  );
  assert.match(
    source,
    /itemCondition:\s*["']https:\/\/schema\.org\/NewCondition["']/,
  );
  assert.match(source, /codeValue:\s*["']313["']/);
  assert.match(source, /Full 12-month price/);
  assert.match(source, /Prepaid annually/);
  assert.match(source, /renews automatically\s+each year/);
  assert.match(source, /Cancellation stops the next renewal charge/);
  assert.match(source, /interval:\s*["']annual["']/);
});

test("existing pricing page remains untouched by Merchant Center plan implementation", () => {
  const pricingPage = readSource("src/app/pricing/page.tsx");
  assert.doesNotMatch(pricingPage, /starter-annual|pro-annual|business-annual/);
});
