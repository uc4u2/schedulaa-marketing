import assert from 'node:assert/strict';
import test from 'node:test';

import {
  bookingMetadata,
  salonBookingMetadata as salonMetadata,
  tutorBookingMetadata as tutorMetadata,
} from '../../src/lib/seo/bookingMetadata';
import { salonFaqJsonLd } from '../../src/components/booking/SalonBookingLandingPage';

test('booking metadata is unique, commercial, and self-canonical', () => {
  assert.match(String(bookingMetadata.title), /Online Booking Website/);
  assert.match(String(bookingMetadata.description), /online booking/i);
  assert.equal(bookingMetadata.alternates?.canonical, 'https://www.schedulaa.com/en/booking');
  assert.equal(bookingMetadata.openGraph?.url, 'https://www.schedulaa.com/en/booking');
  assert.equal(bookingMetadata.robots, undefined);
});

test('salon and tutor pages do not inherit homepage metadata', () => {
  assert.match(String(salonMetadata.title), /Salon Website With Online Booking/);
  assert.match(String(tutorMetadata.title), /Tutor Booking Software/);
  assert.notEqual(salonMetadata.title, bookingMetadata.title);
  assert.notEqual(tutorMetadata.title, bookingMetadata.title);
  assert.equal(salonMetadata.alternates?.canonical, 'https://www.schedulaa.com/en/booking/salon');
  assert.equal(tutorMetadata.alternates?.canonical, 'https://www.schedulaa.com/en/booking/tutor');
});

test('salon FAQ structured data exactly represents visible FAQ content', () => {
  assert.equal(salonFaqJsonLd['@context'], 'https://schema.org');
  assert.equal(salonFaqJsonLd['@type'], 'FAQPage');
  assert.equal(salonFaqJsonLd.mainEntity.length, 6);
  for (const entity of salonFaqJsonLd.mainEntity) {
    assert.equal(entity['@type'], 'Question');
    assert.ok(entity.name.length > 10);
    assert.equal(entity.acceptedAnswer['@type'], 'Answer');
    assert.ok(entity.acceptedAnswer.text.length > 20);
  }
  assert.doesNotThrow(() => JSON.parse(JSON.stringify(salonFaqJsonLd)));
});
