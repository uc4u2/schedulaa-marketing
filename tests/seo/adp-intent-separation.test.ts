import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import posts from '../../src/legacy-content/blog/posts.js';
import { getCompareEntry } from '../../src/legacy-content/compare/config.js';
import { alternativePageContent, buildAlternativeFaqJsonLd } from '../../src/lib/seo/alternativePageContent';
import { buildLocalizedPageMetadata } from '../../src/lib/seo/pageMetadata';

const readSource = (path: string) => readFileSync(new URL(`../../${path}`, import.meta.url), 'utf8');
type AdpLink = { label: string; href: string };
type AdpArticle = {
  slug: string;
  seoTitle: string;
  h1: string;
  description: string;
  sections: Array<{ links?: AdpLink[]; sources?: AdpLink[]; [key: string]: unknown }>;
  [key: string]: unknown;
};
const comparison = getCompareEntry('adp', 'compare');
const alternative = alternativePageContent.adp;
const article = (posts as AdpArticle[]).find((post) => post.slug === 'adp-alternative-canada-us-service-teams');

assert.ok(article);

test('the three ADP pages target distinct search intents', () => {
  assert.match(alternative.title, /ADP Alternatives/i);
  assert.match(alternative.h1, /ADP alternatives/i);
  assert.match(comparison.metaTitle, /Schedulaa vs ADP/i);
  assert.match(comparison.heroTitle, /Schedulaa vs ADP/i);
  assert.match(article.seoTitle, /Canada\/U\.S\. Service Teams/i);
  assert.match(article.h1, /Evaluating an ADP alternative/i);

  assert.notEqual(alternative.title, comparison.metaTitle);
  assert.notEqual(comparison.metaTitle, article.seoTitle);
  assert.notEqual(alternative.h1, comparison.heroTitle);
});

test('ADP metadata remains unique and self-canonical', () => {
  const pages = [
    { path: '/alternatives/adp', title: alternative.title, description: alternative.description },
    { path: '/compare/adp', title: comparison.metaTitle, description: comparison.metaDescription },
    { path: '/blog/adp-alternative-canada-us-service-teams', title: article.seoTitle, description: article.description },
  ];

  for (const page of pages) {
    const metadata = buildLocalizedPageMetadata({ locale: 'en', ...page });
    const canonical = `https://www.schedulaa.com/en${page.path}`;
    assert.equal(metadata.alternates?.canonical, canonical);
    assert.equal(metadata.openGraph?.url, canonical);
  }

  assert.equal(new Set(pages.map((page) => page.title)).size, pages.length);
  assert.equal(new Set(pages.map((page) => page.description)).size, pages.length);
});

test('ADP pages link reciprocally and expose relevant schema', () => {
  assert.ok(alternative.relatedLinks.some((link) => link.href === '/compare/adp'));
  assert.ok(alternative.relatedLinks.some((link) => link.href === '/blog/adp-alternative-canada-us-service-teams'));
  assert.ok(comparison.relatedLinks.some((link: AdpLink) => link.href === '/blog/adp-alternative-canada-us-service-teams'));

  const articleLinks = article.sections.flatMap((section) => section.links || []);
  assert.ok(articleLinks.some((link) => link.href === '/alternatives/adp'));
  assert.ok(articleLinks.some((link) => link.href === '/compare/adp'));

  assert.equal(buildAlternativeFaqJsonLd(alternative)['@type'], 'FAQPage');
  assert.match(readSource('src/app/compare/[vendor]/page.tsx'), /compare-adp-breadcrumb-jsonld/);
  assert.match(readSource('src/app/blog/[slug]/page.tsx'), /adp-service-team-article-jsonld/);
  assert.match(readSource('src/app/blog/[slug]/page.tsx'), /adp-service-team-breadcrumb-jsonld/);
});

test('ADP claims reflect current product boundaries and omit the unverified testimonial', () => {
  const comparisonCopy = JSON.stringify(comparison);
  const alternativeCopy = JSON.stringify(alternative);
  const articleCopy = JSON.stringify(article);
  const officialSources = article.sections.flatMap((section) => section.sources || []);

  assert.equal(comparison.testimonial, undefined);
  assert.doesNotMatch(comparisonCopy, /Photo Artisto Studios/i);
  assert.doesNotMatch(comparisonCopy, /ADP is built for large enterprises|ADP is payroll\/HR built for enterprises/i);
  assert.doesNotMatch(comparisonCopy, /Time tracking\/scheduling via add-ons or integrations/i);
  assert.match(comparisonCopy, /small, midsize, and large employers/i);
  assert.match(alternativeCopy, /does not automate government filing or remittance/i);
  assert.match(articleCopy, /RUN Powered by ADP for small businesses/i);
  assert.ok(officialSources.every((source) => new URL(source.href).hostname === 'www.adp.com'));
});
