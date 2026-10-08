import assert from "node:assert/strict";
import test from "node:test";

import {
  MARKETING_LEAD_AUTO_OPEN_MS,
  isMarketingHomepage,
  marketingLeadCopy,
} from "../../src/components/shared/marketingLead/marketingLeadPopup";

test("homepage lead popup auto-opens about three seconds after load", () => {
  assert.equal(MARKETING_LEAD_AUTO_OPEN_MS, 3000);
});

test("auto-open is limited to the marketing homepage, including locale roots", () => {
  assert.equal(isMarketingHomepage("/"), true);
  assert.equal(isMarketingHomepage("/en"), true);
  assert.equal(isMarketingHomepage("/en/"), true);
  assert.equal(isMarketingHomepage("/fa"), true);
  assert.equal(isMarketingHomepage("/en/pricing"), false);
  assert.equal(isMarketingHomepage("/pricing"), false);
  assert.equal(isMarketingHomepage("/en/login"), false);
  assert.equal(isMarketingHomepage("/login"), false);
  assert.equal(isMarketingHomepage(""), false);
});

test("homepage popup uses concise personalized-demo copy", () => {
  assert.equal(marketingLeadCopy.launcher, "Get your free demo");
  assert.equal(marketingLeadCopy.title, "See Schedulaa for your business");
  assert.equal(
    marketingLeadCopy.description,
    "Answer a few quick questions so we can tailor the demo to your business.",
  );
  assert.equal(marketingLeadCopy.submit, "Request personalized demo");
});
