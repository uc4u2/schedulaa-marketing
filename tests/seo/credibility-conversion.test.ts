import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const readSource = (path: string) => readFileSync(new URL(`../../${path}`, import.meta.url), 'utf8');

test('features page presents product workflows instead of unverified customer quotes', () => {
  const reviewsSource = readSource('src/vendor-forex/src/components/features/Reviews.tsx');
  const featuresSource = readSource('src/legacy-content/features/landing-features.json');

  assert.doesNotMatch(reviewsSource, /testimonials\.json|react-fast-marquee|testimonial\.quote|testimonial\.name/);
  assert.match(reviewsSource, /content\.featureShowcase\?\.features/);
  assert.match(featuresSource, /Connected workflows for service teams/);
  assert.doesNotMatch(featuresSource, /enterprise service teams/i);
});

test('public conversion copy avoids unsupported certification and vague scale claims', () => {
  const websiteBuilderSource = readSource('src/legacy-content/website-builder/config.js');
  const websiteBuilderFaSource = readSource('src/legacy-content/website-builder/config.fa.js');
  const pricingSource = readSource('src/legacy-content/pricing/landing-pricing.json');

  assert.doesNotMatch(websiteBuilderSource, /SOC 2-ready/i);
  assert.doesNotMatch(websiteBuilderFaSource, /SOC 2/i);
  assert.match(websiteBuilderSource, /Role-based workspace access/);
  assert.doesNotMatch(pricingSource, /enterprise-grade platform/i);
  assert.match(pricingSource, /Transparent pricing for connected operations/);
});
