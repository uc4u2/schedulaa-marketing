import assert from 'node:assert/strict';
import test from 'node:test';

import {
  MARKETING_LEAD_AUTO_OPEN_MS,
  isMarketingHomepage,
  marketingLeadCopy,
} from '../../src/components/shared/marketingLead/marketingLeadPopup';

test('homepage lead popup auto-opens about three seconds after load', () => {
  assert.equal(MARKETING_LEAD_AUTO_OPEN_MS, 3000);
});

test('auto-open is limited to the marketing homepage, including locale roots', () => {
  assert.equal(isMarketingHomepage('/'), true);
  assert.equal(isMarketingHomepage('/en'), true);
  assert.equal(isMarketingHomepage('/en/'), true);
  assert.equal(isMarketingHomepage('/fa'), true);
  assert.equal(isMarketingHomepage('/en/pricing'), false);
  assert.equal(isMarketingHomepage('/pricing'), false);
  assert.equal(isMarketingHomepage('/en/login'), false);
  assert.equal(isMarketingHomepage('/login'), false);
  assert.equal(isMarketingHomepage(''), false);
});

test('cold-email popup copy names the website and online booking offer and a clear demo CTA', () => {
  const combined = [
    marketingLeadCopy.launcher,
    marketingLeadCopy.title,
    marketingLeadCopy.description,
    marketingLeadCopy.submit,
    marketingLeadCopy.successBody,
  ].join(' ');

  assert.match(combined, /website/i);
  assert.match(combined, /online booking/i);
  assert.equal(marketingLeadCopy.launcher, 'Get your free demo');
  assert.equal(marketingLeadCopy.submit, 'Get your free demo');
});
