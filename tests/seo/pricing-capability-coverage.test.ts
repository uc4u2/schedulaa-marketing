import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import pricingSource from '../../src/legacy-content/pricing/landing-pricing.json';
import {
  getPlanFinderRecommendation,
  type PlanFinderAnswers,
  type PricingSource,
} from '../../src/components/pricing/pricingCatalog';

const baseAnswers: PlanFinderAnswers = {
  businessType: 'service',
  teamSize: 'just_me',
  needs: [],
  websiteNeed: 'public_website',
  setupPreference: 'diy',
  pageCount: '1_5',
  contentComplexity: 'simple',
};

test('Plan Finder keeps payroll-ready reports on Pro and Business Finance on Business', () => {
  const final = (pricingSource as unknown as PricingSource).pricingExperience.planFinder.final;
  assert.equal(getPlanFinderRecommendation({ ...baseAnswers, needs: ['Payroll-ready reports'] }, final).planKey, 'pro');
  assert.equal(getPlanFinderRecommendation({ ...baseAnswers, needs: ['Estimates'] }, final).planKey, 'business');
});

test('public pricing labels USD subscriptions and separates Field Photos as an add-on', () => {
  const pricing = readFileSync(new URL('../../src/components/pricing/Pricing.tsx', import.meta.url), 'utf8');
  const content = readFileSync(
    new URL('../../src/legacy-content/pricing/landing-pricing.json', import.meta.url),
    'utf8',
  );
  assert.match(pricing, /US\$19\.99\/mo/);
  assert.match(pricing, /equivalent to US\$16\.66\/mo/);
  assert.match(pricing, /Optional Field Photos add-on/);
  assert.match(content, /Subscription prices are in USD/);
  assert.match(content, /14-day trial for eligible workspaces/);
});

test('feature page exposes the verified workflow and availability boundaries in public source', () => {
  const features = readFileSync(
    new URL('../../src/components/forex-skin/features/FeaturesForexLayout.tsx', import.meta.url),
    'utf8',
  );
  for (const phrase of [
    'Client 360 and communications',
    'Estimates, invoices and payments',
    'Work orders and dispatch',
    'Field Photos is a separate paid add-on',
  ]) {
    assert.match(features, new RegExp(phrase));
  }
  assert.match(features, /not continuous fleet tracking/i);
  assert.doesNotMatch(features, /automatic tax/i);
});
