import assert from 'node:assert/strict';
import test from 'node:test';

import posts from '../../src/legacy-content/blog/posts.js';
import { payrollPages } from '../../src/legacy-content/payroll/config.js';
import { industriesPage } from '../../src/legacy-content/batch2/config.js';

const postBySlug = (slug: string) => (posts as any[]).find((post) => post.slug === slug);

test('year-end guide targets T4, W-2, and ROE intent with official sources and canonical product links', () => {
  const guide = postBySlug('roe-t4-w2-year-end-guide');
  assert.equal(guide.seoTitle, 'T4 vs W-2 vs ROE: Employer Year-End Guide | Schedulaa');
  assert.equal(guide.h1, 'T4 vs W-2 vs ROE: What Employers Need to Know');
  assert.ok(guide.sections.some((section: any) => section.table?.rows?.length === 3));
  assert.ok(guide.sections.some((section: any) => section.faq?.length >= 5));

  const links = guide.sections.flatMap((section: any) => section.links || []).map((link: any) => link.href);
  for (const href of ['/payroll/tools/t4', '/payroll/tools/w2', '/payroll/tools/roe', '/payroll/canada', '/payroll/usa']) {
    assert.ok(links.includes(href), `missing guide link: ${href}`);
  }

  const sources = guide.sections.flatMap((section: any) => section.sources || []).map((source: any) => source.href);
  assert.ok(sources.some((href: string) => href.includes('canada.ca')));
  assert.ok(sources.some((href: string) => href.includes('irs.gov')));
});

test('HVAC article preserves its H1 while adding the tested title, profit-leak summary, and checklist', () => {
  const article = postBySlug('hvac-bad-scheduling-lost-money');
  assert.equal(article.title, 'How HVAC Companies Lose Money on Bad Scheduling (and How to Fix It)');
  assert.equal(article.seoTitle, 'HVAC Scheduling Problems That Cost You Money | Schedulaa');
  assert.ok(article.sections.some((section: any) => section.summaryPoints?.length === 5));
  assert.ok(article.sections.some((section: any) => section.checklist?.length >= 5));
});

test('T4 generator accurately identifies its finalized-payroll dependency and supported outputs', () => {
  const t4 = payrollPages.t4 as any;
  assert.equal(t4.meta.title, 'T4 Generator for Canadian Payroll (PDF & CRA XML) | Schedulaa');
  assert.match(t4.meta.description, /finalized Schedulaa payroll/);
  assert.equal(t4.schema[0].offers, undefined);
  assert.match(t4.featuresIntro, /standalone/i);
  assert.ok(t4.faq.some((item: any) => /work without Schedulaa payroll/i.test(item.question)));
  assert.ok(t4.callouts.flatMap((item: any) => item.links || []).some((link: any) => link.href === '/blog/roe-t4-w2-year-end-guide'));
});

test('English industry source gives Spa Booking a contextual canonical route', () => {
  const links = industriesPage.sections.flatMap((section: any) => section.items || []).flatMap((item: any) => item.links || []);
  assert.ok(links.some((link: any) => link.href === '/booking/spa'));
});
