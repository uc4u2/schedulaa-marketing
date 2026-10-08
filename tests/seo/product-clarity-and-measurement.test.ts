import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import { getDocsSource } from '../../src/legacy-content/docs/getDocsSource';

const readSource = (path: string) => readFileSync(new URL(`../../${path}`, import.meta.url), 'utf8');

test('platform overview explains verified workflows and explicit product boundaries', () => {
  const source = readSource('src/app/platform/page.tsx');

  assert.match(source, /Website to booking and payment/);
  assert.match(source, /Customer to estimate, invoice, and payment/);
  assert.match(source, /Shift to approved payroll handoff/);
  assert.match(source, /Work order to field report and invoice/);
  assert.match(source, /Product to order and fulfillment/);
  assert.match(source, /Draft to preview and published website/);
  assert.match(source, /not advertised as full two-way calendar synchronization/);
  assert.match(source, /not replace a double-entry accounting ledger/);
  assert.match(source, /not continuous fleet tracking/);
  assert.match(source, /Customers purchase and retain ownership of their own domain/);
});

test('commerce copy does not claim mixed service and product checkout', () => {
  const source = readSource('src/components/commerce/localeCopy.ts');
  const featuresSource = readSource('src/legacy-content/features/landing-features.json');
  const docsSource = readSource('src/legacy-content/docs/landing-docs.json');
  const comparisonSource = readSource('src/legacy-content/compare/landing-compare.json');

  assert.match(source, /Product purchases use a dedicated checkout/);
  assert.doesNotMatch(source, /mixed carts|mixed checkout|carritos mixt|checkout mixt|paniers mixt|gemischte Warenkoerbe|سلال مختلطة|carrinhos mist/i);
  assert.doesNotMatch(featuresSource, /mixed carts/i);
  assert.doesNotMatch(docsSource, /mixed carts/i);
  assert.doesNotMatch(comparisonSource, /mixed carts/i);
});

test('conversion analytics separate starts, opens, requests, and confirmed submissions', () => {
  const analyticsSource = readSource('src/utils/analytics.ts');
  const navbarSource = readSource('src/components/shared/navbar/Navbar.tsx');
  const contactSource = readSource('src/components/contact/MarketingContactContent.tsx');
  const qualificationSource = readSource('src/components/shared/marketingLead/MarketingLeadWidget.tsx');

  for (const event of ['contact_start', 'contact_submit', 'demo_panel_open', 'demo_request_submit']) {
    assert.match(analyticsSource, new RegExp(`'${event}'`));
  }
  assert.match(navbarSource, /trackAnalyticsEventOnce\('demo_panel_open'/);
  assert.match(contactSource, /trackAnalyticsEventOnce\('contact_start'/);
  assert.match(contactSource, /data\?\.ok !== true/);
  assert.match(contactSource, /trackAnalyticsEvent\('contact_submit'/);
  assert.match(qualificationSource, /if \(!response\.ok\)/);
  assert.match(qualificationSource, /trackAnalyticsEvent\("demo_request_submit"/);
  assert.doesNotMatch(analyticsSource, /'email'|'phone'|'name'|'message'/);
});

test('public copy avoids confirmed stale or unsupported homepage and demo claims', () => {
  const heroSource = readSource('src/vendor-forex/src/components/home/Hero.tsx');
  const stepsSource = readSource('src/vendor-forex/src/components/home/Steps.tsx');
  const bookingSource = readSource('src/legacy-content/booking/config.js');
  const demoSource = readSource('src/components/demo/DemoLandingPage.tsx');
  const mobileAppSource = readSource('src/components/mobile-app/localeCopy.ts');
  const featureSource = readSource('src/vendor-forex/src/components/home/Feature.tsx');
  const docsSource = readSource('src/legacy-content/docs/landing-docs.json');
  const homepageContactSource = readSource('src/legacy-content/batch2/config.js');

  assert.doesNotMatch(heroSource, /iPhone coming soon/);
  assert.doesNotMatch(stepsSource, /payouts appear/i);
  assert.doesNotMatch(bookingSource, /receipts sync to calendars/i);
  assert.doesNotMatch(demoSource, /Payroll in under a minute|iOS coming soon|iPhone delivery will follow/i);
  assert.doesNotMatch(mobileAppSource, /iPhone delivery is planned next/i);
  assert.doesNotMatch(featureSource, /ns-img-527\.png/);
  assert.doesNotMatch(docsSource, /in-app domain purchase is coming soon|Zapier integration is in development|Slack notifications|7-14 days/i);
  assert.match(docsSource, /not full two-way sync/i);
  assert.match(docsSource, /Schedulaa does not purchase the domain/i);
  assert.doesNotMatch(homepageContactSource, /one business day|24-hour ticket response|for every location/i);
});

test('contact copy does not promise an unverified response SLA or universal implementation service', () => {
  const source = readSource('src/components/contact/MarketingContactContent.tsx');

  assert.doesNotMatch(source, /respond within one business day|payroll validation for every location|enterprise rollout specialists/i);
  assert.match(source, /successful submission confirms receipt, not a guaranteed response time/i);
  assert.match(source, /Do not include passwords or payment details/);
});

test('localized docs render canonical integration facts and localized contact copy has no response SLA', () => {
  const locales = ['fa', 'ru', 'zh', 'es', 'fr', 'de', 'ar', 'pt'] as const;
  for (const locale of locales) {
    const renderedDocs = JSON.stringify(getDocsSource(locale));
    assert.match(renderedDocs, /Google Calendar V1/);
    assert.match(renderedDocs, /Custom domains/);
    assert.doesNotMatch(renderedDocs, /Slack|Domain Purchase|comingSoon/);
  }

  const localizedContacts = locales
    .map((locale) => readSource(`src/legacy-content/batch2/config.${locale}.js`))
    .join('\n');
  assert.doesNotMatch(localizedContacts, /one business day|one working day|un jour ouvrable|um dia util|يوم عمل واحد|یک روز کاری|одного рабочего дня|一个工作日/i);
});
