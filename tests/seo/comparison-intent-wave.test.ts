import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import { getCompareEntry } from '../../src/legacy-content/compare/config.js';
import { alternativePageContent, buildAlternativeFaqJsonLd } from '../../src/lib/seo/alternativePageContent';
import {
  buildComparisonFaqJsonLd,
  comparisonPageContent,
} from '../../src/lib/seo/comparisonPageContent';
import { buildLocalizedPageMetadata } from '../../src/lib/seo/pageMetadata';

const vendors = ['when-i-work', 'square-appointments', 'xero'] as const;
const readSource = (path: string) => readFileSync(new URL(`../../${path}`, import.meta.url), 'utf8');

test('alternatives and direct comparisons have distinct intent and metadata', () => {
  for (const vendor of vendors) {
    const alternative = alternativePageContent[vendor];
    const comparison = comparisonPageContent[vendor];
    assert.ok(alternative);
    assert.ok(comparison);
    assert.match(alternative.title, /Alternatives/i);
    assert.match(comparison.metaTitle, /Schedulaa vs/i);
    assert.notEqual(alternative.title, comparison.metaTitle);
    assert.notEqual(alternative.h1, comparison.heroTitle);

    for (const page of [
      { path: `/alternatives/${vendor}`, title: alternative.title, description: alternative.description },
      { path: `/compare/${vendor}`, title: comparison.metaTitle, description: comparison.metaDescription },
    ]) {
      const metadata = buildLocalizedPageMetadata({ locale: 'en', ...page });
      const canonical = `https://www.schedulaa.com/en${page.path}`;
      assert.equal(metadata.alternates?.canonical, canonical);
      assert.equal(metadata.openGraph?.url, canonical);
    }
  }
});

test('each alternatives and comparison pair links reciprocally and provides FAQ data', () => {
  for (const vendor of vendors) {
    const alternative = alternativePageContent[vendor];
    const comparison = comparisonPageContent[vendor];
    assert.ok(alternative.relatedLinks.some((link) => link.href === `/compare/${vendor}`));
    assert.ok(comparison.relatedLinks.some((link) => link.href === `/alternatives/${vendor}`));
    assert.equal(buildAlternativeFaqJsonLd(alternative)['@type'], 'FAQPage');
    assert.equal(buildComparisonFaqJsonLd(comparison.faq)['@type'], 'FAQPage');
  }

  const comparePage = readSource('src/app/compare/[vendor]/page.tsx');
  assert.match(comparePage, /compare-\$\{entry\.key\}-faq-jsonld/);
  assert.match(comparePage, /entry\.key === 'when-i-work'/);
  assert.match(comparePage, /entry\.key === 'square-appointments'/);
  assert.match(comparePage, /entry\.key === 'xero'/);
});

test('the new live comparison rendering removes legacy testimonials and unsupported claims', () => {
  const comparePage = readSource('src/app/compare/[vendor]/page.tsx');
  assert.match(comparePage, /testimonial: undefined/);

  for (const vendor of vendors) {
    const stored = getCompareEntry(vendor, 'compare');
    const rendered = {
      ...stored,
      ...comparisonPageContent[vendor],
      testimonial: undefined,
      summaryTable: undefined,
    };
    const copy = JSON.stringify(rendered);
    assert.equal(rendered.testimonial, undefined);
    assert.doesNotMatch(copy, /Photo Artisto Studios|Beauty Collective Studio|Multi-location service team/i);
    assert.doesNotMatch(copy, /Flat tiers starting at \$19\.99|files taxes|booking-only tool|appointment calendar only/i);
  }
});

test('competitor and Schedulaa boundaries stay explicit', () => {
  const whenIWork = JSON.stringify(comparisonPageContent['when-i-work']);
  const square = JSON.stringify(comparisonPageContent['square-appointments']);
  const xero = JSON.stringify(comparisonPageContent.xero);

  assert.match(whenIWork, /payroll-provider integrations/i);
  assert.match(whenIWork, /does not replace government payroll filing or remittance/i);
  assert.match(square, /It should not be described as a booking-only product/i);
  assert.match(square, /Stripe-backed/i);
  assert.match(xero, /does not create Xero employees, pay runs, payslips, or year-end slips/i);
  assert.match(xero, /not a double-entry ledger/i);
});
