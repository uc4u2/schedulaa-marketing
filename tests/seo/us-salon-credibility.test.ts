import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import posts from "../../src/legacy-content/blog/posts.js";

const readSource = (path: string) =>
  readFileSync(new URL(`../../${path}`, import.meta.url), "utf8");

const getPost = (slug: string) => {
  const post = posts.find((candidate) => candidate.slug === slug);
  assert.ok(post, `Missing post ${slug}`);
  return JSON.stringify(post);
};

test("payroll articles state the supported-state and preview-only boundaries", () => {
  for (const slug of [
    "modern-payroll-for-service-businesses",
    "salon-spa-payroll-canada-us",
  ]) {
    const post = getPost(slug);
    for (const state of [
      "Alaska",
      "Florida",
      "Nevada",
      "South Dakota",
      "Texas",
      "Washington",
      "Wyoming",
      "Tennessee",
      "New Hampshire",
    ]) {
      assert.match(post, new RegExp(state));
    }
    assert.match(post, /raw.preview/i);
    assert.match(post, /finalization (?:is )?blocked/i);
    assert.match(post, /government filing/i);
    assert.match(post, /Quebec/i);
  }
});

test("Paychex comparison has no testimonial or compliant-payroll promise", () => {
  const comparisons = JSON.parse(
    readSource("src/legacy-content/compare/landing-compare.json"),
  );
  const paychex = comparisons.paychex;
  assert.ok(paychex);
  assert.equal(paychex.testimonial, undefined);
  assert.doesNotMatch(JSON.stringify(paychex), /clean, compliant payroll data/i);
  assert.match(JSON.stringify(paychex), /raw-preview only/i);
  assert.match(JSON.stringify(paychex), /government filing/i);
});

test("English and Farsi footer descriptions use payroll-ready wording", () => {
  const english = JSON.parse(readSource("src/i18n/messages/en.json"));
  const farsi = JSON.parse(readSource("src/i18n/messages/fa.json"));
  assert.match(english.footer.blurb, /payroll-ready workflows/i);
  assert.match(farsi.footer.blurb, /آماده برای حقوق و دستمزد/);
});

test("salon route uses verified interface assets and avoids fictional Toronto hero copy", () => {
  const source = readSource(
    "src/components/booking/SalonBookingLandingPage.tsx",
  );
  assert.match(source, /showcase\/manage-bookings\.webp/);
  assert.match(source, /showcase\/service-management\.webp/);
  assert.doesNotMatch(source, /Avery Studio|Hair · Beauty · Toronto/);
  assert.doesNotMatch(source, /waitlist|SMS|POS hardware|marketplace discovery|automated deposit/i);
});
