import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import posts from '../../src/legacy-content/blog/posts.js';
import { marketingPages } from '../../src/legacy-content/marketing/config.js';

const readSource = (path: string) => readFileSync(new URL(`../../${path}`, import.meta.url), 'utf8');

test('marketing metadata and visible FAQ target campaign-to-rebooking intent', () => {
  const page = marketingPages.hub;
  assert.ok(page.meta.title.length <= 60);
  assert.ok(page.meta.description.length <= 160);
  assert.match(page.meta.title, /campaign tracking/i);
  assert.match(page.meta.description, /rebook/i);
  assert.match(page.hero.title, /campaign/i);
  assert.match(page.hero.subtitle, /rebook/i);
  assert.ok(page.faq.some((item: any) => /campaigns.*rebook/i.test(item.question)));

  const pageSource = readSource('src/app/marketing/page.tsx');
  assert.match(pageSource, /marketing-faq-jsonld/);
  assert.match(pageSource, /\/marketing\/analytics-dashboard/);
  assert.match(pageSource, /\/marketing\/clients-360/);
});

test('HVAC article uses optimized images, deferred video, and article schemas', () => {
  const article = (posts as any[]).find((post) => post.slug === 'hvac-bad-scheduling-lost-money');
  const images = article.sections.flatMap((section: any) => (section.image ? [section.image] : []));
  assert.equal(images.length, 2);
  for (const image of images) {
    assert.match(image.src, /\.webp$/);
    assert.equal(image.optimize, true);
    assert.equal(image.width, 1200);
    assert.equal(image.height, 800);
  }

  const blogSource = readSource('src/app/blog/[slug]/page.tsx');
  assert.match(blogSource, /<YouTubeFacade/);
  assert.match(blogSource, /["']@type["']: ["']Article["']/);
  assert.match(blogSource, /["']@type["']: ["']BreadcrumbList["']/);
});

test('navbar defers booking iframe and ships a right-sized logo', () => {
  const navbarSource = readSource('src/components/shared/navbar/Navbar.tsx');
  assert.match(navbarSource, /schedulaa-logo-navbar\.webp/);
  assert.match(navbarSource, /sizes="\(min-width: 1024px\) 198px, 138px"/);
  assert.match(navbarSource, /\{demoOpen \? \(/);
  assert.match(navbarSource, /ref=\{demoCloseButtonRef\}/);
  assert.match(navbarSource, /event\.key !== ["']Tab["']/);
  assert.match(navbarSource, /Book a personalized demo/);
  assert.match(navbarSource, /Choose a convenient time for a guided walkthrough tailored to your business\./);
  assert.match(navbarSource, /Open full booking page/);
  assert.match(navbarSource, /schedulaa:booking-ready/);
  assert.match(navbarSource, /Loading live availability…/);
  assert.match(navbarSource, /loading="eager"/);
  assert.match(navbarSource, /onPointerEnter=\{warmDemoConnection\}/);

  const heroSource = readSource('src/vendor-forex/src/components/home/Hero.tsx');
  assert.match(heroSource, /ns-img-295\.webp/);
  assert.doesNotMatch(heroSource, /ns-img-295\.jpg/);
  assert.match(heroSource, /<RevealAnimation delay=\{0\.1\} instant paintImmediately>/);
  assert.doesNotMatch(heroSource, /<RevealAnimation[^>]*instant(?![^>]*paintImmediately)[^>]*>/);
  assert.match(heroSource, /src=\{heroVectorImg\}[\s\S]*priority[\s\S]*fetchPriority="high"/);

  const revealSource = readSource('src/components/animation/RevealAnimation.tsx');
  assert.match(revealSource, /paintImmediately \? \{\} : \{ 'data-ns-animate': true \}/);
});

test('homepage qualification copy is concise and its panel uses content-aware sizing', () => {
  const widgetSource = readSource('src/components/shared/marketingLead/MarketingLeadWidget.tsx');
  assert.match(widgetSource, /What type of business do you operate\?/);
  assert.match(widgetSource, /Choose your industry/);
  assert.match(widgetSource, /Step \{step \+ 1\} of \{STEPS\.length\} · \{stepLabel\}/);
  assert.match(widgetSource, /max-h-\[calc\(100vh-16px\)\]/);
  assert.doesNotMatch(widgetSource, /h-\[min\(82vh,720px\)\]/);
});

test('homepage integration strip names only verified integration categories', () => {
  const clientsSource = readSource('src/vendor-forex/src/components/home/Clients.tsx');
  assert.match(clientsSource, /Stripe payment provider/);
  assert.match(clientsSource, /Google Calendar integration/);
  assert.match(clientsSource, /QuickBooks Online accounting integration/);
  assert.match(clientsSource, /Xero accounting integration/);
  assert.match(clientsSource, /Zapier automation integration/);
  assert.doesNotMatch(clientsSource, /Google Meet integration|Google Drive integration/);
});

test('features page does not delay its mobile LCP content', () => {
  const featuresSource = readSource('src/vendor-forex/src/components/features/Features.tsx');
  assert.match(featuresSource, /<RevealAnimation delay=\{0\} instant paintImmediately>[\s\S]*?<h1/);
  assert.match(featuresSource, /loading=\{index === 0 \? 'eager' : 'lazy'\}/);
  assert.match(featuresSource, /fetchPriority=\{index === 0 \? 'high' : 'auto'\}/);
  assert.match(featuresSource, /sizes="\(min-width: 640px\) 31vw, calc\(100vw - 60px\)"/);
});

test('YouTube embeds are centralized behind the interaction facade', () => {
  const facadeSource = readSource('src/components/shared/media/YouTubeFacade.tsx');
  assert.match(facadeSource, /if \(active\)/);
  assert.match(facadeSource, /onClick=\{\(\) => setActive\(true\)\}/);

  for (const path of [
    'src/app/blog/[slug]/page.tsx',
    'src/components/forex-skin/home/HomeForexLayout.tsx',
    'src/components/hvac/HvacLandingPage.tsx',
    'src/components/tutorials/CenteredTutorialVideoSection.tsx',
    'src/components/tutorials/ProductTutorialPanel.tsx',
  ]) {
    assert.doesNotMatch(readSource(path), /<iframe/);
    assert.match(readSource(path), /<YouTubeFacade/);
  }
});
