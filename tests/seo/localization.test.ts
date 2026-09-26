import assert from 'node:assert/strict';
import test from 'node:test';

import sitemap from '../../src/app/sitemap';
import {
  getSeoLanguageAlternates,
  getTranslatedLocales,
  hasTranslatedRoute,
} from '../../src/lib/seo/localization';

test('translated routes receive self-referential and reciprocal language alternates', () => {
  const alternates = getSeoLanguageAlternates('https://www.schedulaa.com', '/contact');
  assert.equal(alternates.en, 'https://www.schedulaa.com/en/contact');
  assert.equal(alternates.fr, 'https://www.schedulaa.com/fr/contact');
  assert.equal(Object.keys(alternates).length, 9);
});

test('partially translated routes expose only reviewed locale variants', () => {
  assert.deepEqual(getTranslatedLocales('/website-builder'), ['en', 'fa', 'ru', 'zh']);
  assert.equal(hasTranslatedRoute('/website-builder', 'fr'), false);
  assert.equal(hasTranslatedRoute('/website-builder', 'ru'), true);
});

test('placeholder-quality localized routes fall back to English', () => {
  assert.deepEqual(getTranslatedLocales('/features'), ['en']);
  assert.deepEqual(getTranslatedLocales('/client/support'), ['en']);
  assert.equal(hasTranslatedRoute('/pricing', 'de'), false);
});

test('untranslated booking-industry routes cannot masquerade as localized pages', () => {
  assert.deepEqual(getTranslatedLocales('/booking/salon'), ['en']);
  assert.equal(hasTranslatedRoute('/booking/salon', 'fa'), false);
  assert.equal(hasTranslatedRoute('/booking/salon', 'fr'), false);
});

test('sitemap excludes untranslated locale duplicates and retains legitimate English pages', () => {
  const urls = new Set(sitemap().map((entry) => entry.url));
  assert.equal(urls.has('https://www.schedulaa.com/en/booking/salon'), true);
  assert.equal(urls.has('https://www.schedulaa.com/fa/booking/salon'), false);
  assert.equal(urls.has('https://www.schedulaa.com/fr/booking/salon'), false);
  assert.equal(urls.has('https://www.schedulaa.com/fr/contact'), true);
  assert.equal(urls.has('https://www.schedulaa.com/en/booking'), true);
});

test('English canonical route remains available without a noindex policy', () => {
  const alternates = getSeoLanguageAlternates('https://www.schedulaa.com', '/booking');
  assert.deepEqual(alternates, { en: 'https://www.schedulaa.com/en/booking' });
  assert.equal(hasTranslatedRoute('/booking', 'en'), true);
});
