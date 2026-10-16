import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import sitemap from '../../src/app/sitemap';
import { getCompareEntry } from '../../src/legacy-content/compare/config';
import { alternativePageContent } from '../../src/lib/seo/alternativePageContent';
import { comparisonPageContent } from '../../src/lib/seo/comparisonPageContent';
import { SEARCH_INTENT_MAP } from '../../src/lib/seo/searchIntentMap';

const readSource = (path: string) => readFileSync(new URL(`../../${path}`, import.meta.url), 'utf8');

test('Jobber compare and alternatives routes resolve and are English sitemap entries', () => {
  assert.equal(getCompareEntry('jobber', 'compare')?.competitor, 'Jobber');
  assert.ok(getCompareEntry('jobber', 'alternatives'));
  assert.ok(comparisonPageContent.jobber);
  assert.ok(alternativePageContent.jobber);

  const urls = new Set(sitemap().map((entry) => entry.url));
  assert.equal(urls.has('https://www.schedulaa.com/en/compare/jobber'), true);
  assert.equal(urls.has('https://www.schedulaa.com/en/alternatives/jobber'), true);
  assert.equal(urls.has('https://www.schedulaa.com/en/dispatch'), true);
  assert.equal([...urls].some((url) => url.includes('/fa/compare/jobber')), false);
  assert.equal([...urls].some((url) => url.includes('/fa/dispatch')), false);
});

test('the features hub links dispatch to the dedicated page', () => {
  const dispatch = SEARCH_INTENT_MAP.find((entry) => entry.key === 'dispatch-work-orders');
  assert.equal(dispatch?.path, '/dispatch');
  assert.match(readSource('src/components/forex-skin/features/FeaturesForexLayout.tsx'), /\/dispatch/);
});

test('Jobber copy keeps the audited Schedulaa boundaries and Jobber Tap to Pay', () => {
  const rendered = JSON.stringify({
    comparison: comparisonPageContent.jobber,
    alternative: alternativePageContent.jobber,
  });

  assert.match(rendered, /Tap to Pay/);
  assert.match(rendered, /2\.7% \+ 30¢/);
  assert.match(rendered, /one-click payment reminder/i);
  assert.match(rendered, /does not automatically chase/i);
  assert.match(rendered, /On my way/);
  assert.match(rendered, /does not send arrival alerts, SMS, or employer alerts/);
  assert.match(rendered, /does not provide all-day tracking, GPS history, or geofencing/);
  assert.match(rendered, /\$19\.99/);
  assert.match(rendered, /\$9/);
  assert.match(rendered, /\$29/);
  assert.doesNotMatch(rendered, /automatic follow-ups are a Schedulaa|Schedulaa automatically chases|arrival alerts to the employer/i);
  assert.doesNotMatch(JSON.stringify(comparisonPageContent.jobber.differentiators), /automatic follow-up/i);
});

test('dispatch and finance pages use the audited claim sentences', () => {
  const dispatch = readSource('src/components/dispatch/dispatchPageContent.ts');
  const finance = readSource('src/components/business-finance/BusinessFinanceLandingPage.tsx');
  const invoices = readSource('src/components/business-finance-invoices/BusinessFinanceInvoicesPage.tsx');
  for (const source of [dispatch, finance, invoices]) {
    assert.match(source, /LIVE_TRIP_GPS|latest location while a work order is On my way/);
    assert.match(source, /ON_MY_WAY_EMAIL|does not send arrival alerts/);
  }
  assert.match(finance, /CLIENT_DOCUMENTS|company-wide document library/);
  assert.match(finance, /PAYMENT_REMINDERS|does not automatically chase/);
  assert.match(invoices, /PAYMENT_REMINDERS/);
  assert.doesNotMatch(`${dispatch}\n${finance}\n${invoices}`, /company-wide document library is included|all-day GPS tracking/i);
});
