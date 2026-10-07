import assert from "node:assert/strict";
import test from "node:test";

import {
  bookingMetadata,
  salonBookingMetadata as salonMetadata,
  tutorBookingMetadata as tutorMetadata,
} from "../../src/lib/seo/bookingMetadata";
import {
  salonFaqJsonLd,
  salonBookingPaymentClaim,
  salonBookingPaymentFaqAnswer,
  salonLandingHeadline,
  salonLandingProblem,
} from "../../src/components/booking/SalonBookingLandingPage";
import { marketingLeadCopy } from "../../src/components/shared/marketingLead/marketingLeadPopup";

test("booking metadata is unique, commercial, and self-canonical", () => {
  assert.match(String(bookingMetadata.title), /Online Booking Website/);
  assert.match(String(bookingMetadata.description), /online booking/i);
  assert.equal(
    bookingMetadata.alternates?.canonical,
    "https://www.schedulaa.com/en/booking",
  );
  assert.equal(
    bookingMetadata.openGraph?.url,
    "https://www.schedulaa.com/en/booking",
  );
  assert.equal(bookingMetadata.robots, undefined);
});

test("salon and tutor pages do not inherit homepage metadata", () => {
  assert.match(
    String(salonMetadata.title),
    /Salon Website With Online Booking/,
  );
  assert.match(String(tutorMetadata.title), /Tutor Booking Software/);
  assert.notEqual(salonMetadata.title, bookingMetadata.title);
  assert.notEqual(tutorMetadata.title, bookingMetadata.title);
  assert.equal(
    salonMetadata.alternates?.canonical,
    "https://www.schedulaa.com/en/booking/salon",
  );
  assert.equal(
    tutorMetadata.alternates?.canonical,
    "https://www.schedulaa.com/en/booking/tutor",
  );
});

test("salon landing headline targets a salon website with online booking", () => {
  assert.match(salonLandingHeadline, /salon website with online booking/i);
  assert.match(salonLandingHeadline, /beautiful/i);
  assert.match(salonLandingProblem, /missed walk-ins/i);
  assert.match(salonLandingProblem, /after-hours bookings/i);
  assert.match(salonLandingProblem, /Instagram-only presence/i);
  assert.match(
    String(salonMetadata.description),
    /salon website with online booking/i,
  );
  assert.equal(marketingLeadCopy.launcher, "Get your free demo");
});

test("salon landing copy does not advertise unsupported booking deposits", () => {
  assert.match(salonBookingPaymentClaim, /Stripe/i);
  assert.match(salonBookingPaymentFaqAnswer, /card-on-file/i);
  assert.doesNotMatch(salonBookingPaymentClaim, /deposit/i);
  assert.doesNotMatch(salonBookingPaymentFaqAnswer, /deposit/i);
});

test("salon FAQ structured data exactly represents visible FAQ content", () => {
  assert.equal(salonFaqJsonLd["@context"], "https://schema.org");
  assert.equal(salonFaqJsonLd["@type"], "FAQPage");
  assert.equal(salonFaqJsonLd.mainEntity.length, 6);
  for (const entity of salonFaqJsonLd.mainEntity) {
    assert.equal(entity["@type"], "Question");
    assert.ok(entity.name.length > 10);
    assert.equal(entity.acceptedAnswer["@type"], "Answer");
    assert.ok(entity.acceptedAnswer.text.length > 20);
  }
  assert.doesNotThrow(() => JSON.parse(JSON.stringify(salonFaqJsonLd)));
});
