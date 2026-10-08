import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import posts from '../../src/legacy-content/blog/posts.js';
import { payrollPages } from '../../src/legacy-content/payroll/config.js';
import { alternativePageContent, buildAlternativeFaqJsonLd } from '../../src/lib/seo/alternativePageContent';
import { buildLocalizedPageMetadata } from '../../src/lib/seo/pageMetadata';
import { buildPayrollPageSchemas } from '../../src/lib/seo/payrollPageSchema';

const readSource = (path: string) => readFileSync(new URL(`../../${path}`, import.meta.url), 'utf8');

test('Homebase alternatives content matches alternatives intent and current product boundaries', () => {
  const content = alternativePageContent.homebase;
  assert.match(content.title, /Homebase Alternatives/i);
  assert.match(content.h1, /Homebase alternatives/i);
  assert.match(JSON.stringify(content), /full-service U\.S\. payroll/i);
  assert.match(JSON.stringify(content), /hiring and onboarding/i);
  assert.doesNotMatch(JSON.stringify(content), /shift-only|no hiring|no Canadian payroll/i);
  assert.ok(content.relatedLinks.some((link) => link.href === '/compare/homebase'));
  assert.equal(buildAlternativeFaqJsonLd(content)['@type'], 'FAQPage');

  const metadata = buildLocalizedPageMetadata({
    locale: 'en',
    path: '/alternatives/homebase',
    title: content.title,
    description: content.description,
  });
  assert.equal(metadata.alternates?.canonical, 'https://www.schedulaa.com/en/alternatives/homebase');
});

test('payslip page targets employee self-service and emits bounded structured data', () => {
  const config = payrollPages.payslips as any;
  assert.match(config.meta.title, /Employee Payslip Portal/i);
  assert.match(config.hero.title, /self-service/i);
  assert.equal(config.schema[0].offers, undefined);

  const links = config.callouts.flatMap((item: any) => item.links || []).map((link: any) => link.href);
  for (const href of ['/payroll/canada', '/payroll/tools/t4', '/payroll/tools/roe', '/blog/roe-t4-w2-year-end-guide']) {
    assert.ok(links.includes(href), `missing payslip context link: ${href}`);
  }

  const schemas = buildPayrollPageSchemas({
    locale: 'en',
    path: '/payslips',
    name: 'Schedulaa Employee Payslip Portal',
    breadcrumbName: 'Employee payslip portal',
    featureList: ['Employee self-service'],
    faq: config.faq,
  });
  assert.deepEqual(schemas.map((schema) => schema['@type']), ['SoftwareApplication', 'BreadcrumbList', 'FAQPage']);
  assert.equal((schemas[0] as any).offers, undefined);
  assert.equal((schemas[0] as any).url, 'https://www.schedulaa.com/en/payslips');

  const page = readSource('src/app/payslips/page.tsx');
  assert.match(page, /generateMetadata/);
  assert.match(page, /buildPayrollPageSchemas/);
});

test('year-end guide and T4 page expose Article, Breadcrumb, FAQ, and contextual links', () => {
  const guide = (posts as any[]).find((post) => post.slug === 'roe-t4-w2-year-end-guide');
  const guideLinks = guide.sections.flatMap((section: any) => section.links || []).map((link: any) => link.href);
  assert.ok(guideLinks.includes('/payslips'));
  assert.equal(guide.dateModified, '2026-10-08');

  const blogPage = readSource('src/app/blog/[slug]/page.tsx');
  assert.match(blogPage, /slug === 'roe-t4-w2-year-end-guide'/);
  assert.match(blogPage, /year-end-guide-article-jsonld/);
  assert.match(blogPage, /year-end-guide-breadcrumb-jsonld/);

  const t4 = payrollPages.t4 as any;
  const t4Links = t4.callouts.flatMap((item: any) => item.links || []).map((link: any) => link.href);
  assert.ok(t4Links.includes('/payslips'));
  const t4Page = readSource('src/app/payroll/tools/t4/page.tsx');
  assert.match(t4Page, /buildPayrollPageSchemas/);
});

test('HubSpot Meetings remains an alternatives page and is not represented as an integration', () => {
  const legacy = readSource('src/legacy-content/compare/landing-compare.json');
  const parsed = JSON.parse(legacy);
  const hubspot = parsed['hubspot-meetings'];
  assert.ok(hubspot);
  assert.match(hubspot.metaTitle, /Schedulaa vs HubSpot Meetings/i);
  assert.doesNotMatch(JSON.stringify(hubspot), /Schedulaa (integrates|integration) with HubSpot/i);
});
