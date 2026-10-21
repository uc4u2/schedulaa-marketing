import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const source = (path: string) => readFileSync(new URL(`../../${path}`, import.meta.url), 'utf8');

test('homepage gives the current salon booking experience equal hero and showcase visibility', () => {
  const hero = source('src/vendor-forex/src/components/home/Hero.tsx');
  const workflow = source('src/vendor-forex/src/components/home/HeroWorkflowHexShowcase.tsx');
  const reviews = source('src/vendor-forex/src/components/home/Reviews.tsx');

  assert.match(hero, /One workflow from booking to payment — built for salons, contractors, and service teams\./);
  assert.doesNotMatch(hero, /Connected HVAC workflow from request to payment/);
  assert.match(workflow, /glow-booking-availability\.png/);
  assert.match(workflow, /glow-booking-services\.png/);
  assert.match(workflow, /hvac-hero-one-safe\.png/);
  assert.match(reviews, /title: 'Salon booking page'/);

  for (const asset of [
    'public/images/marketing/hero/glow-booking-availability.png',
    'public/images/marketing/hero/glow-booking-services.png',
  ]) {
    assert.ok(existsSync(new URL(`../../${asset}`, import.meta.url)));
  }
});
