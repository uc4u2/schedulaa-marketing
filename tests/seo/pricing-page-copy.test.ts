import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path: string) =>
  readFileSync(new URL(`../../${path}`, import.meta.url), "utf8");

const pricing = JSON.parse(
  read("src/legacy-content/pricing/landing-pricing.json"),
);
const pricingComponent = read("src/components/pricing/Pricing.tsx");

test("pricing hero leads with website, booking, and payments", () => {
  const hero = `${pricing.hero.title.join(" ")} ${pricing.hero.subtitle}`;
  assert.match(hero, /Website, online booking, and payments/);
  assert.doesNotMatch(hero, /SSL/i);
  assert.doesNotMatch(JSON.stringify(pricing.assurances), /automate payroll/i);
  assert.match(pricing.ribbon.message, /2 months free/);
});

test("yearly toggle sits with the public 10-month prices and the plan finder follows the cards", () => {
  assert.match(pricingComponent, /\$199\.90\/yr/);
  assert.match(pricingComponent, /\$499\.90\/yr/);
  assert.match(pricingComponent, /\$1,199\.90\/yr/);
  assert.match(pricingComponent, /twoMonthsFree/);
  const plansIndex = pricingComponent.indexOf('id="plans"');
  const finderIndex = pricingComponent.indexOf("<PlanFinderModal");
  assert.ok(plansIndex > 0);
  assert.ok(finderIndex > plansIndex);
});

test("every plan card states included seats and extra-seat terms", () => {
  const plans = pricing.pricingExperience.subscriptionPlans;
  const byKey = Object.fromEntries(
    plans.map((plan: { key: string; features: string[] }) => [
      plan.key,
      plan.features.join(" | "),
    ]),
  );
  assert.match(byKey.starter, /1 staff seat/);
  assert.match(byKey.starter, /not available on Starter/i);
  assert.match(byKey.pro, /Up to 5 staff seats/);
  assert.match(byKey.pro, /\$9 per seat/);
  assert.match(byKey.business, /10 staff seats/);
  assert.match(byKey.business, /\$9 per seat/);

  const seats = pricing.pricingExperience.comparison.sections
    .flatMap(
      (section: {
        items: Array<{
          label: string;
          starter: string;
          pro: string;
          business: string;
        }>;
      }) => section.items,
    )
    .find((item: { label: string }) => item.label === "Additional staff seats");
  assert.equal(seats.starter, "Not on Starter");
  assert.equal(seats.pro, "$9 / seat");
  assert.equal(seats.business, "$9 / seat");
});

test("comparison stays in plain language and keeps estimates and invoices on Business", () => {
  const labels = pricing.pricingExperience.comparison.sections.flatMap(
    (section: { section: string; items: Array<{ label: string }> }) => [
      section.section,
      ...section.items.map((item) => item.label),
    ],
  );
  assert.equal(labels.includes("IP / device audit hints"), false);
  assert.equal(labels.includes("Staggered & windowed breaks"), false);
  assert.equal(labels.includes("Payroll-ready reports"), true);

  const row = (label: string) =>
    pricing.pricingExperience.comparison.sections
      .flatMap(
        (section: {
          items: Array<{
            label: string;
            starter: string;
            pro: string;
            business: string;
          }>;
        }) => section.items,
      )
      .find((item: { label: string }) => item.label === label);

  assert.deepEqual(
    [row("Estimates").starter, row("Estimates").pro, row("Estimates").business],
    ["—", "—", "Yes"],
  );
  assert.deepEqual(
    [
      row("Invoices and payment links").starter,
      row("Invoices and payment links").pro,
      row("Invoices and payment links").business,
    ],
    ["—", "—", "Yes"],
  );
  assert.match(
    pricing.pricingExperience.faqSection.items.find(
      (item: { question: string }) =>
        item.question === "Does Schedulaa process payroll?",
    ).answer,
    /payroll-ready/,
  );
  assert.doesNotMatch(
    pricing.pricingExperience.faqSection.items.find(
      (item: { question: string }) =>
        item.question === "Does Schedulaa process payroll?",
    ).answer,
    /automate payroll/i,
  );
});
