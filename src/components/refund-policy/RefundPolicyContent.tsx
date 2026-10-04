import LegalDocumentLayout, {
  type LegalSection,
} from "@/components/legal/LegalDocumentLayout";

const copy = "leading-7 text-secondary/80 dark:text-accent/75";
const list = `list-disc space-y-2 pl-6 ${copy}`;
const legalLink =
  "font-medium text-primary-500 underline decoration-primary-500/35 underline-offset-4";

const sections: LegalSection[] = [
  {
    id: "digital-service",
    title: "Digital service delivery",
    content: (
      <p className={copy}>
        Schedulaa is a subscription software service operated by Photo Artisto
        Corp. Customers receive online access through an account or workspace;
        no physical goods are shipped. Physical returns, return labels,
        exchanges, and return-shipping fees therefore do not apply.
      </p>
    ),
  },
  {
    id: "trial",
    title: "Free trials and promotions",
    content: (
      <>
        <p className={copy}>
          When a free trial or promotion is offered, its duration, included
          features, eligibility, and payment requirements are disclosed before
          enrollment. A trial that does not require payment information ends
          without a charge unless the customer separately selects a paid plan.
        </p>
        <p className={copy}>
          If an offer converts automatically to a paid subscription, the
          conversion date, price, billing frequency, and cancellation method
          will be shown before confirmation.
        </p>
      </>
    ),
  },
  {
    id: "renewal",
    title: "Subscription renewal and charges",
    content: (
      <p className={copy}>
        Paid subscriptions renew on the billing interval shown at checkout or in
        the applicable Order until cancelled. Customer authorizes Schedulaa and
        its payment provider to charge the selected payment method for recurring
        fees and applicable taxes. Any material price or renewal change will be
        disclosed as required before it takes effect.
      </p>
    ),
  },
  {
    id: "cancellation",
    title: "Cancellation",
    content: (
      <>
        <p className={copy}>
          Customers may cancel through available account billing settings or by
          emailing{" "}
          <a href="mailto:admin@schedulaa.com" className={legalLink}>
            admin@schedulaa.com
          </a>
          . Include the account email and workspace name so the request can be
          matched and verified.
        </p>
        <ul className={list}>
          <li>
            Cancellation stops the next renewal charge after the request is
            processed.
          </li>
          <li>
            Access normally continues through the already-paid billing period
            unless an Order states otherwise.
          </li>
          <li>
            Cancellation does not automatically refund or prorate charges
            already processed.
          </li>
          <li>
            Deleting an account or uninstalling an app does not replace
            subscription cancellation.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "refunds",
    title: "Refund eligibility",
    content: (
      <>
        <p className={copy}>
          Subscription payments are generally non-refundable after a billing
          period begins, except where required by law, stated in an Order, or
          approved by Schedulaa after reviewing exceptional circumstances.
          Partial-period use, unused seats, downgrades, and failure to cancel
          before renewal do not automatically qualify for a refund.
        </p>
        <p className={copy}>
          Any non-waivable cancellation or refund right under applicable law
          remains available regardless of this policy.
        </p>
      </>
    ),
  },
  {
    id: "billing-errors",
    title: "Billing errors and unauthorized charges",
    content: (
      <p className={copy}>
        Report a suspected duplicate, incorrect, or unauthorized charge
        promptly. We may request account, invoice, or transaction details to
        verify the claim and may work with our payment provider to investigate
        and correct a confirmed billing error. Nothing here limits rights
        available through a payment provider or applicable law.
      </p>
    ),
  },
  {
    id: "plan-changes",
    title: "Plan changes and credits",
    content: (
      <p className={copy}>
        Upgrade, downgrade, seat, usage, and add-on changes may affect fees
        immediately or at the next renewal as disclosed before confirmation.
        Promotional, service, or account credits are not cash, cannot be
        transferred unless stated, and may expire under the terms provided with
        the credit.
      </p>
    ),
  },
  {
    id: "contact",
    title: "How to contact us",
    content: (
      <p className={copy}>
        For cancellation, refund, or billing questions, email{" "}
        <a href="mailto:admin@schedulaa.com" className={legalLink}>
          admin@schedulaa.com
        </a>
        . We will review the request using the subscription terms and law
        applicable to the transaction.
      </p>
    ),
  },
];

export default function RefundPolicyContent() {
  return (
    <LegalDocumentLayout
      title="Refund and Cancellation Policy"
      summary="How trials, recurring subscriptions, cancellations, refunds, plan changes, and billing-error reviews work for Schedulaa digital services."
      effectiveDate="October 4, 2026"
      version="2026.10"
      sections={sections}
      relatedLinks={[
        { href: "/terms", label: "Terms of Service", primary: true },
        { href: "/user-agreement", label: "User Agreement" },
        { href: "/pricing", label: "Pricing" },
      ]}
    />
  );
}
