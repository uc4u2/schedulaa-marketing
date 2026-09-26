# GA4 measurement and verification

## Configuration

The marketing site reads its public GA4 measurement ID from:

```text
NEXT_PUBLIC_GA_MEASUREMENT_ID
```

The application reads:

```text
REACT_APP_GA_MEASUREMENT_ID
```

For production, `NEXT_PUBLIC_GA_MEASUREMENT_ID` must be set to the same GA4 web-stream measurement ID already used by the production application. This preserves one acquisition journey across `www.schedulaa.com` and `app.schedulaa.com`. Do not copy a production ID into development or staging; use the corresponding non-production GA4 stream ID for each environment, or leave analytics disabled locally when a non-production stream is unavailable.

The ID is intentionally not hardcoded. Both sites use first-party cookies with `cookie_domain: auto`. Because the hosts are subdomains of the same registrable domain and use the same GA4 stream, a cross-domain linker is not required. Campaign parameters are still allowlisted and carried onto application links to preserve landing attribution explicitly.

## Event contract

Implemented events:

- `primary_cta_click`: intentional major marketing CTA clicks; parameters are `cta_name`, `page_path`, `destination`, and `placement`.
- `registration_start`: the first actual interaction with the registration form in a browser session.
- `registration_complete`: only after the registration API returns success.
- `contact_submit`: only after the public contact endpoint accepts the form.
- `checkout_started`: only after the backend creates a subscription checkout and returns a checkout/status URL.
- `trial_activated`: only after an authoritative billing-status response reports `trialing`.
- `subscription_activated`: only after an authoritative billing-status response reports a paid `active` subscription. A `trialing` state emits `trial_activated` only.

Not yet implemented:

- `demo_submit`: the current booking link/embedded scheduler does not expose an authoritative “demo accepted” callback to the marketing site. A click is tracked as `primary_cta_click`, not misreported as a completed demo request.

No event sends an email address, full name, phone number, message body, payment detail, checkout session ID, or payment-invite token to GA4. Application page views deliberately omit query strings and fragments so signup, reset, checkout, and invitation parameters cannot leak through a page URL.

## Development/debug verification

1. Configure a non-production GA4 stream ID in each project using the variable names above.
2. Open GA4 **Admin → DebugView** and enable Google Analytics Debugger in the browser, or temporarily use GA4 debug mode through the browser extension.
3. Load a marketing route and confirm exactly one `page_view`. Navigate with a Next.js link and confirm one additional `page_view`.
4. Click a major CTA once and confirm one `primary_cta_click` with the four non-PII parameters.
5. Open registration. Confirm that loading `/register` or merely focusing the page does not fire `registration_start`; change a form field and confirm it fires once. A failed submission must not fire `registration_complete`; a successful API response must fire it once.
6. Submit the marketing contact form once with a deliberate backend failure and once successfully. Only the successful request should emit `contact_submit`.
7. Initiate a real test-mode plan checkout. Confirm `checkout_started` appears only after the backend returns the Stripe URL.
8. Complete the test-mode checkout. Confirm `trial_activated`/`subscription_activated` appears only after `/billing/status` (or the payment-invite status endpoint) confirms the state.
9. Visit a marketing URL containing test values for `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, and `gclid`. Click an application CTA and confirm those allowlisted parameters remain on the `app.schedulaa.com` destination. Confirm unrelated query parameters do not transfer.
10. In the browser Network panel, inspect `g/collect` requests and verify that no email, name, phone, message, payment details, checkout session ID, or invite token is present.

## GA4 and Google Ads steps after deployment

1. In GA4, confirm the events arrive in Realtime/DebugView and then in the Events report.
2. Mark only meaningful outcome events as key events. Recommended initial key events: `registration_complete`, `demo_submit` once authoritative, `trial_activated`, and `subscription_activated`. Keep `primary_cta_click` diagnostic rather than a primary conversion.
3. Link the approved Google Ads account to the GA4 property.
4. In Google Ads, import the selected GA4 key events. Use the closest business outcome as the campaign’s primary goal; keep intermediate events secondary/observation-only.
5. Verify attribution and event counts before launching any campaign. Do not count both `trial_activated` and `subscription_activated` as primary for the same trial unless the reporting model intentionally treats them as separate funnel stages.
