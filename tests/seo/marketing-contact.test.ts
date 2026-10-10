import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import { buildMarketingContactJsonLd, MARKETING_CONTACT } from '../../src/data/marketing-contact';

const readSource = (path: string) => readFileSync(new URL(`../../${path}`, import.meta.url), 'utf8');

test('public marketing contact constants use the verified phone and WhatsApp channels', () => {
  assert.equal(MARKETING_CONTACT.email, 'admin@schedulaa.com');
  assert.equal(MARKETING_CONTACT.callHref, 'tel:+15144300970');
  assert.equal(MARKETING_CONTACT.whatsappHref, 'https://wa.me/16478494913');

  const publicContactSources = [
    readSource('src/components/contact/MarketingContactContent.tsx'),
    readSource('src/vendor-forex/src/components/home/Contact.tsx'),
    readSource('src/components/shared/footer/Footer.tsx'),
    readSource('src/legacy-content/batch2/config.js'),
  ].join('\n');

  assert.doesNotMatch(publicContactSources, /289[^\d]*514[^\d]*9260|12895149260/);
  assert.doesNotMatch(publicContactSources, /171 Harbord|Toronto headquarters|Visit our HQ|Get directions/i);
  assert.match(publicContactSources, /MARKETING_CONTACT\.callHref/);
  assert.match(publicContactSources, /MARKETING_CONTACT\.whatsappHref/);
});

test('contact Organization schema has accurate remote-service contact points and no office address', () => {
  const schema = buildMarketingContactJsonLd();
  const serialized = JSON.stringify(schema);

  assert.equal(schema['@type'], 'Organization');
  assert.equal(schema.telephone, '+15144300970');
  assert.equal(schema.email, 'admin@schedulaa.com');
  assert.match(serialized, /16478494913/);
  assert.match(serialized, /Canada/);
  assert.match(serialized, /United States/);
  assert.doesNotMatch(serialized, /LocalBusiness|PostalAddress|streetAddress|Harbord|Toronto/);
});

test('every supported footer locale labels the verified phone and WhatsApp actions', () => {
  const locales = ['en', 'fa', 'ru', 'zh', 'es', 'fr', 'de', 'ar', 'pt'];

  for (const locale of locales) {
    const messages = JSON.parse(readSource(`src/i18n/messages/${locale}.json`));
    assert.equal(typeof messages.footer.callUs, 'string');
    assert.ok(messages.footer.callUs.length > 0);
    assert.equal(typeof messages.footer.whatsapp, 'string');
    assert.ok(messages.footer.whatsapp.length > 0);
  }
});
