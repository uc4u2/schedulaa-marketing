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

  const heroSource = readSource('src/vendor-forex/src/components/home/Hero.tsx');
  assert.match(heroSource, /ns-img-295\.webp/);
  assert.doesNotMatch(heroSource, /ns-img-295\.jpg/);
  assert.match(heroSource, /<RevealAnimation delay=\{0\.1\} instant>/);
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
