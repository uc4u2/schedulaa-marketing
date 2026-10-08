import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import posts from '../../src/legacy-content/blog/posts.js';
import { getCompareEntry } from '../../src/legacy-content/compare/config.js';
import { alternativePageContent, buildAlternativeFaqJsonLd } from '../../src/lib/seo/alternativePageContent';
import { buildLocalizedPageMetadata } from '../../src/lib/seo/pageMetadata';

const readSource = (path: string) => readFileSync(new URL(`../../${path}`, import.meta.url), 'utf8');
type GustoLink = { label: string; href: string };
type GustoArticle = {
  slug: string;
  seoTitle: string;
  h1: string;
  description: string;
  sections: Array<{ links?: GustoLink[]; [key: string]: unknown }>;
  [key: string]: unknown;
};
const comparison = getCompareEntry('gusto', 'compare');
const alternative = alternativePageContent.gusto;
const article = (posts as GustoArticle[]).find((post) => post.slug === 'schedulaa-vs-gusto');

assert.ok(article);

test('the three Gusto pages target distinct search intents', () => {
  assert.match(alternative.title, /Gusto Alternatives/i);
  assert.match(alternative.h1, /Gusto alternatives/i);
  assert.match(comparison.metaTitle, /Schedulaa vs Gusto/i);
  assert.match(comparison.heroTitle, /Schedulaa vs Gusto/i);
  assert.match(article.seoTitle, /service operations guide/i);
  assert.match(article.h1, /decision guide/i);

  assert.notEqual(alternative.title, comparison.metaTitle);
  assert.notEqual(comparison.metaTitle, article.seoTitle);
  assert.notEqual(alternative.h1, comparison.heroTitle);
});

test('Gusto metadata remains unique and self-canonical', () => {
  const pages = [
    { path: '/alternatives/gusto', title: alternative.title, description: alternative.description },
    { path: '/compare/gusto', title: comparison.metaTitle, description: comparison.metaDescription },
    { path: '/blog/schedulaa-vs-gusto', title: article.seoTitle, description: article.description },
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

test('Gusto pages link reciprocally and expose relevant schema', () => {
  assert.ok(alternative.relatedLinks.some((link) => link.href === '/compare/gusto'));
  assert.ok(alternative.relatedLinks.some((link) => link.href === '/blog/schedulaa-vs-gusto'));
  assert.ok(comparison.relatedLinks.some((link: GustoLink) => link.href === '/blog/schedulaa-vs-gusto'));

  const articleLinks = article.sections.flatMap((section) => section.links || []);
  assert.ok(articleLinks.some((link) => link.href === '/alternatives/gusto'));
  assert.ok(articleLinks.some((link) => link.href === '/compare/gusto'));

  assert.equal(buildAlternativeFaqJsonLd(alternative)['@type'], 'FAQPage');
  assert.match(readSource('src/app/compare/[vendor]/page.tsx'), /compare-gusto-breadcrumb-jsonld/);
  assert.match(readSource('src/app/blog/[slug]/page.tsx'), /gusto-decision-article-jsonld/);
  assert.match(readSource('src/app/blog/[slug]/page.tsx'), /gusto-decision-breadcrumb-jsonld/);
});

test('Gusto copy removes the unverified testimonial and corrects geographic scope', () => {
  const comparisonCopy = JSON.stringify(comparison);
  const alternativeCopy = JSON.stringify(alternative);
  const articleCopy = JSON.stringify(article);

  assert.equal(comparison.testimonial, undefined);
  assert.doesNotMatch(comparisonCopy, /Photo Artisto Studios/i);
  assert.match(comparisonCopy, /Gusto Global/);
  assert.match(alternativeCopy, /international contractor payments/);
  assert.match(articleCopy, /employer-of-record/i);
  assert.doesNotMatch(comparisonCopy, /Gusto focuses on U\.S\. payroll only|Gusto: U\.S\. payroll only/i);
});
