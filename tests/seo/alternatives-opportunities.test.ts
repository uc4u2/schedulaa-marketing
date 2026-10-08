import assert from 'node:assert/strict';
import test from 'node:test';

import { alternativePageContent, buildAlternativeFaqJsonLd } from '../../src/lib/seo/alternativePageContent';
import { buildLocalizedPageMetadata } from '../../src/lib/seo/pageMetadata';

const opportunitySlugs = ['vagaro', 'quickbooks', 'paychex'] as const;

test('Search Console opportunity pages have query-aligned titles and descriptions', () => {
  assert.match(alternativePageContent.vagaro.title, /Vagaro Alternatives/);
  assert.match(alternativePageContent.quickbooks.title, /Programs Like QuickBooks/);
  assert.match(alternativePageContent.paychex.title, /Paychex Alternatives/);

  for (const slug of opportunitySlugs) {
    const content = alternativePageContent[slug];
    assert.ok(content.title.length >= 45 && content.title.length <= 65, `${slug} title length`);
    assert.ok(content.description.length >= 120 && content.description.length <= 170, `${slug} description length`);
    assert.ok(content.h1.length >= 25, `${slug} H1`);
  }
});

test('opportunity pages keep canonical and Open Graph URLs aligned', () => {
  for (const slug of opportunitySlugs) {
    const content = alternativePageContent[slug];
    const metadata = buildLocalizedPageMetadata({
      locale: 'en',
      path: `/alternatives/${slug}`,
      title: content.title,
      description: content.description,
    });
    const canonical = `https://www.schedulaa.com/en/alternatives/${slug}`;
    assert.equal(metadata.alternates?.canonical, canonical);
    assert.equal(metadata.openGraph?.url, canonical);
    assert.equal(metadata.openGraph?.title, content.title);
    assert.equal(metadata.openGraph?.description, content.description);
  }
});

test('visible alternatives FAQs and FAQ schema contain the same content', () => {
  for (const slug of opportunitySlugs) {
    const content = alternativePageContent[slug];
    const schema = buildAlternativeFaqJsonLd(content);
    assert.equal(schema['@type'], 'FAQPage');
    assert.equal(schema.mainEntity.length, content.faq.length);
    schema.mainEntity.forEach((entity, index) => {
      assert.equal(entity.name, content.faq[index].question);
      assert.equal(entity.acceptedAnswer.text, content.faq[index].answer);
    });
  }
});

test('comparison copy states important product boundaries and avoids unsupported absolutes', () => {
  const quickbooksCopy = JSON.stringify(alternativePageContent.quickbooks);
  const paychexCopy = JSON.stringify(alternativePageContent.paychex);
  const allCopy = JSON.stringify(alternativePageContent);

  assert.match(quickbooksCopy, /not a general-ledger|not for general-ledger/i);
  assert.match(paychexCopy, /does not automate payroll tax filing|does not replace benefits brokerage/i);
  assert.doesNotMatch(allCopy, /white[- ]label|zero errors|no syncing errors|all U\.S\. states/i);
});

test('each opportunity page links to relevant canonical product routes', () => {
  assert.ok(alternativePageContent.vagaro.relatedLinks.some((link) => link.href === '/booking'));
  assert.ok(alternativePageContent.vagaro.relatedLinks.some((link) => link.href === '/website-builder'));
  assert.ok(alternativePageContent.quickbooks.relatedLinks.some((link) => link.href === '/business-finance'));
  assert.ok(alternativePageContent.paychex.relatedLinks.some((link) => link.href === '/workforce'));
  assert.ok(alternativePageContent.paychex.relatedLinks.some((link) => link.href === '/payroll/usa'));
});
