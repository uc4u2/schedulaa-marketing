import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

import sitemap from '../../src/app/sitemap';
import { getCompareEntry, getCompareListForPageType } from '../../src/legacy-content/compare/config';
import {
  alternativePageContent,
  buildAlternativeFaqJsonLd,
} from '../../src/lib/seo/alternativePageContent';
import {
  ALTERNATIVES_VENDOR_ROUTES,
  COMPARE_VENDOR_ROUTES,
} from '../../src/lib/seo/routeRegistry';

const slug = 'glossgenius';
const route = `/alternatives/${slug}`;

test('GlossGenius has one English alternatives route and no duplicate comparison route', () => {
  const entry = getCompareEntry(slug, 'alternatives');
  assert.ok(entry);
  assert.deepEqual(entry.pageTypes, ['alternatives']);
  assert.equal(getCompareEntry(slug, 'compare'), null);
  assert.ok(getCompareListForPageType('alternatives').some((item) => item.slug === slug));
  assert.ok(ALTERNATIVES_VENDOR_ROUTES.includes(route));
  assert.equal(COMPARE_VENDOR_ROUTES.includes(`/compare/${slug}`), false);

  const urls = sitemap().map((item) => item.url);
  assert.ok(urls.includes(`https://www.schedulaa.com/en${route}`));
  assert.equal(urls.includes(`https://www.schedulaa.com/en/compare/${slug}`), false);
  assert.equal(urls.some((url) => /\/(fa|ru|zh|es|fr|de|ar|pt)\/alternatives\/glossgenius$/.test(url)), false);
});

test('GlossGenius content is commercially complete, evidence-linked, and explicit about boundaries', () => {
  const content = alternativePageContent[slug];
  assert.ok(content);
  assert.match(content.title, /GlossGenius Alternatives/i);
  assert.match(content.h1, /GlossGenius alternative/i);
  assert.ok(content.description.length >= 120 && content.description.length <= 165);
  assert.equal(content.quickDecision?.length, 2);
  assert.ok(content.comparisonRows.length >= 8);
  assert.equal(content.pricingRows?.length, 3);
  assert.ok((content.setupChecklist?.length || 0) >= 5);
  assert.ok(content.faq.length >= 5);
  assert.ok(content.heroImage);
  assert.match(content.heroImage.src, /glossgenius-salon-operations-hero-v2\.webp$/);
  assert.ok(existsSync(`public${content.heroImage.src}`));
  assert.equal(content.heroImage.width, 1586);
  assert.equal(content.heroImage.height, 992);
  assert.ok(content.heroImage.alt.length > 40);

  const copy = JSON.stringify(content);
  assert.match(copy, /point-of-sale hardware/i);
  assert.match(copy, /not proprietary salon POS hardware/i);
  assert.match(copy, /pay-on-this-device checkout with tip selection/i);
  assert.match(copy, /eligible saved-card charges/i);
  assert.match(copy, /record (?:cash, terminal, or e-transfer|offline) payments/i);
  assert.match(copy, /relevant workspace settings are configured/i);
  assert.match(copy, /client CSV import/i);
  assert.match(copy, /Existing records are not overwritten/i);
  assert.match(copy, /preview the results/i);
  assert.match(copy, /capture it with a mobile camera/i);
  assert.match(copy, /Receipt OCR is not currently offered/i);
  assert.match(copy, /configured Stripe-backed payment collection/i);
  assert.match(copy, /segmented email campaigns/i);
  assert.match(copy, /supported tenant-configured SendGrid provider/i);
  assert.match(copy, /operational analytics/i);
  assert.match(copy, /Platform-managed campaign delivery is not generally available/i);
  assert.match(copy, /General transactional SMS is not a supported Schedulaa capability/i);
  assert.match(copy, /No automatic GlossGenius migration is promised/i);
  assert.doesNotMatch(copy, /30-day money-back|free automatic migration|guaranteed savings/i);

  for (const source of content.sources || []) {
    assert.ok(new URL(source.href).hostname.endsWith('glossgenius.com'));
  }
  for (const screenshot of content.screenshots || []) {
    assert.match(screenshot.src, /\.webp$/);
    assert.ok(existsSync(`public${screenshot.src}`));
    assert.ok(screenshot.width > 0 && screenshot.height > 0);
    assert.ok(screenshot.alt.length > 30);
  }
});

test('visible FAQ content and FAQ schema remain in parity', () => {
  const content = alternativePageContent[slug];
  const schema = buildAlternativeFaqJsonLd(content);
  assert.equal(schema.mainEntity.length, content.faq.length);
  content.faq.forEach((item, index) => {
    assert.equal(schema.mainEntity[index].name, item.question);
    assert.equal(schema.mainEntity[index].acceptedAnswer.text, item.answer);
  });
});

test('the alternatives renderer uses real images and tracked trial/demo actions', () => {
  const page = readFileSync('src/app/alternatives/[vendor]/page.tsx', 'utf8');
  assert.match(page, /Start your 14-day free trial/);
  assert.match(page, /Book a personalized demo/);
  assert.match(page, /TrackedLink/);
  assert.match(page, /buildAppUrl\('\/register'/);
  assert.match(page, /content\.heroImage/);
  assert.match(page, /fetchPriority="high"/);
  assert.match(page, /Real Schedulaa interface views appear below/);
  assert.match(page, /loading="lazy"/);
  assert.match(page, /width=\{screenshot\.width\}/);
  assert.match(page, /height=\{screenshot\.height\}/);
});

test('the localized duplicate comparison path returns an explicit 404 before rewrite', () => {
  const middleware = readFileSync('middleware.ts', 'utf8');
  assert.match(middleware, /ALTERNATIVES_ONLY_COMPARE_PATHS/);
  assert.match(middleware, /['"]\/compare\/glossgenius['"]/);
  assert.match(middleware, /new NextResponse\(['"]Not Found['"], \{ status: 404 \}\)/);
});

test('the salon booking page links contextually to the GlossGenius guide', () => {
  const salonPage = readFileSync('src/components/booking/SalonBookingLandingPage.tsx', 'utf8');
  assert.match(salonPage, /\/en\/alternatives\/glossgenius/);
  assert.match(salonPage, /Explore GlossGenius alternatives/);
});
