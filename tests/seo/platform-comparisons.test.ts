import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

import sitemap from '../../src/app/sitemap';
import {
  compareList,
  getCompareEntry,
  getCompareListForPageType,
} from '../../src/legacy-content/compare/config';
import { buildComparisonFaqJsonLd } from '../../src/lib/seo/comparisonPageContent';
import {
  ALTERNATIVES_VENDOR_ROUTES,
  COMPARE_VENDOR_ROUTES,
} from '../../src/lib/seo/routeRegistry';

const newCompareSlugs = [
  'wix-bookings',
  'wordpress-booking-plugins',
  'squarespace-scheduling',
] as const;

test('pageTypes remains backward compatible while the three new entries are compare-only', () => {
  assert.equal(compareList.length, 18);
  assert.equal(getCompareListForPageType('compare').length, 17);
  assert.equal(getCompareListForPageType('alternatives').length, 15);

  for (const slug of newCompareSlugs) {
    const comparison = getCompareEntry(slug, 'compare');
    assert.ok(comparison, `${slug} should resolve as a comparison`);
    assert.deepEqual(comparison.pageTypes, ['compare']);
    assert.equal(getCompareEntry(slug, 'alternatives'), null);
  }

  assert.deepEqual(getCompareEntry('vagaro', 'compare')?.pageTypes, ['compare', 'alternatives']);
  assert.ok(getCompareEntry('vagaro', 'alternatives'));
  assert.ok(getCompareEntry('acuity-scheduling', 'alternatives'));
});

test('the route registry and sitemap add exactly three comparisons and no alternatives', () => {
  assert.equal(COMPARE_VENDOR_ROUTES.length, 17);
  assert.equal(ALTERNATIVES_VENDOR_ROUTES.length, 15);

  const sitemapUrls = new Set(sitemap().map((entry) => entry.url));
  for (const slug of newCompareSlugs) {
    const comparisonUrl = `https://www.schedulaa.com/en/compare/${slug}`;
    const alternativesUrl = `https://www.schedulaa.com/en/alternatives/${slug}`;
    assert.equal(sitemapUrls.has(comparisonUrl), true);
    assert.equal(sitemapUrls.has(alternativesUrl), false);
    assert.equal(
      [...sitemapUrls].some((url) => url.includes(`/fa/compare/${slug}`)),
      false,
      `${slug} must remain English-only`,
    );
  }
});

test('new comparison content is unique, commercially complete, and evidence-linked', () => {
  const titles = new Set<string>();
  const headings = new Set<string>();

  for (const slug of newCompareSlugs) {
    const entry = getCompareEntry(slug, 'compare');
    assert.ok(entry);
    titles.add(entry.metaTitle);
    headings.add(entry.heroTitle);
    assert.ok(entry.metaTitle.length >= 30 && entry.metaTitle.length <= 65);
    assert.ok(entry.metaDescription.length >= 120 && entry.metaDescription.length <= 165);
    assert.ok(entry.hook.length > 30);
    assert.equal(entry.quickDecision.length, 2);
    assert.ok(entry.executiveOverview.rows.length >= 5);
    assert.ok(entry.fitMatrix.length >= 3);
    assert.ok(entry.setupChecklist.length >= 5);
    assert.ok(entry.relatedLinks.length >= 3);
    assert.ok(entry.faq.length >= 4);

    const faqSchema = buildComparisonFaqJsonLd(entry.faq);
    assert.equal(faqSchema.mainEntity.length, entry.faq.length);
    entry.faq.forEach((item: { question: string; answer: string }, index: number) => {
      assert.equal(faqSchema.mainEntity[index].name, item.question);
      assert.equal(faqSchema.mainEntity[index].acceptedAnswer.text, item.answer);
    });

    for (const screenshot of entry.screenshots) {
      assert.match(screenshot.src, /\.webp$/);
      assert.ok(screenshot.width > 0 && screenshot.height > 0);
      assert.equal(existsSync(`public${screenshot.src}`), true);
      assert.ok(screenshot.alt.length > 20);
    }

    for (const source of entry.sources) {
      const hostname = new URL(source.href).hostname;
      assert.ok(
        ['support.wix.com', 'wordpress.org', 'wordpress.com', 'support.squarespace.com', 'help.acuityscheduling.com'].includes(hostname),
        `${source.href} must be a first-party competitor source`,
      );
    }
  }

  assert.equal(titles.size, 3);
  assert.equal(headings.size, 3);
});

test('Acuity comparison acknowledges current calendar, payment, client, and invoice capabilities', () => {
  const acuity = getCompareEntry('schedulaa-vs-acuity-scheduling', 'compare');
  assert.ok(acuity);
  const copy = JSON.stringify(acuity);
  assert.match(copy, /multiple calendars/i);
  assert.match(copy, /client records/i);
  assert.match(copy, /deposit/i);
  assert.match(copy, /invoices/i);
  assert.doesNotMatch(copy, /booking-only|calendars only|not designed for multi-location|simple, elegant client booking/i);
});

test('the shared renderer uses tracked trial/demo CTAs and hides alternatives links for compare-only pages', () => {
  const source = readFileSync('src/app/compare/[vendor]/page.tsx', 'utf8');
  const alternativesSource = readFileSync('src/app/alternatives/[vendor]/page.tsx', 'utf8');
  const proxySource = readFileSync('middleware.ts', 'utf8');
  assert.match(source, /Start your 14-day free trial/);
  assert.match(source, /Book a personalized demo/);
  assert.match(source, /TrackedLink/);
  assert.match(source, /buildAppUrl\('\/register'/);
  assert.match(source, /entry\.pageTypes\?\.includes\('alternatives'\)/);
  assert.match(source, /loading="lazy"/);
  assert.match(source, /width=\{screenshot\.width\}/);
  assert.match(source, /height=\{screenshot\.height\}/);
  assert.match(source, /export const dynamicParams = false/);
  assert.match(alternativesSource, /export const dynamicParams = false/);
  assert.match(alternativesSource, /getCompareListForPageType\('alternatives'\)/);
  for (const slug of newCompareSlugs) {
    assert.match(proxySource, new RegExp(`/alternatives/${slug}`));
  }
  assert.match(proxySource, /new NextResponse\('Not Found', \{ status: 404 \}\)/);
});
