import LegalDocumentLayout, {
  type LegalSection,
} from "@/components/legal/LegalDocumentLayout";
import { defaultMetadata } from "@/utils/generateMetaData";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Terms of Service | Schedulaa",
  description:
    "Commercial terms for Schedulaa subscriptions, billing, service access, platform security, and account enforcement.",
};

const copy = "leading-7 text-secondary/80 dark:text-accent/75";
const list = `list-disc space-y-2 pl-6 ${copy}`;
const legalLink =
  "font-medium text-primary-500 underline decoration-primary-500/35 underline-offset-4";

const sections: LegalSection[] = [
  {
    id: "contract",
    title: "Contract documents and precedence",
    content: (
      <>
        <p className={copy}>
          These Terms of Service supplement the{" "}
          <Link href="/user-agreement" className={legalLink}>
            User Agreement
          </Link>
          , which governs account and workspace use. Together with an applicable
          Order, the Privacy Policy, Acceptable Use Policy, Refund and
          Cancellation Policy, and Data Processing Addendum, they form the
          agreement between Customer and Photo Artisto Corp., doing business as
          Schedulaa.
        </p>
        <p className={copy}>
          A signed Order controls for its subject matter, the Data Processing
          Addendum controls for personal-data processing, the User Agreement
          controls for account and workspace rules, and these Terms control for
          general commercial use of the Services.
        </p>
      </>
    ),
  },
  {
    id: "service-access",
    title: "Service access and plans",
    content: (
      <ul className={list}>
        <li>
          Customer may access the Services included in its selected plan or
          Order during the applicable term.
        </li>
        <li>
          Usage limits, seats, features, support levels, and add-ons are those
          shown at checkout or in the Order.
        </li>
        <li>
          Customer is responsible for Authorized Users, workspace permissions,
          configurations, and account security.
        </li>
        <li>
          Preview, beta, trial, and early-access features may change or end and
          do not carry a service-level commitment.
        </li>
      </ul>
    ),
  },
  {
    id: "billing",
    title: "Subscriptions, billing, and taxes",
    content: (
      <>
        <p className={copy}>
          Fees, billing interval, currency, included usage, and subscription
          term are disclosed before purchase or in the applicable Order.
          Customer authorizes Schedulaa and its payment provider to charge the
          selected payment method for recurring fees and applicable taxes until
          cancellation takes effect.
        </p>
        <ul className={list}>
          <li>
            Customer must keep billing and payment information accurate and
            authorized.
          </li>
          <li>
            Plan changes may alter future fees and entitlements as disclosed
            before confirmation.
          </li>
          <li>
            Cancellation stops future renewal charges but does not automatically
            reverse the current billing period.
          </li>
          <li>
            Refund eligibility is governed by the Refund and Cancellation Policy
            and non-waivable applicable law.
          </li>
          <li>
            Past-due amounts may result in feature restrictions or suspension
            after any legally required notice.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "security-controls",
    title: "Security, fraud, and payment controls",
    content: (
      <>
        <p className={copy}>
          Schedulaa may use attempt limits, identity or payment verification,
          authentication challenges, payment-method restrictions, review holds,
          and similar safeguards to protect customers, payment networks, and the
          Services.
        </p>
        <p className={copy}>
          We may provide relevant transaction, account, and service-use evidence
          to payment processors or card networks when responding to disputes,
          fraud warnings, chargebacks, or legal requirements, as described in
          our Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "customer-data",
    title: "Customer data and integrations",
    content: (
      <>
        <p className={copy}>
          Customer retains its rights in Customer Data and gives Schedulaa the
          limited rights required to provide, secure, support, and improve the
          Services. Customer is responsible for the legality, accuracy,
          permissions, and consents associated with Customer Data.
        </p>
        <p className={copy}>
          Customer chooses whether to enable third-party integrations. Those
          services are governed by their own terms and privacy practices, and
          Schedulaa is not responsible for third-party systems outside our
          control.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Service changes and availability",
    content: (
      <>
        <p className={copy}>
          We may maintain, update, or modify the Services for performance,
          security, compliance, and functionality. We will not materially reduce
          the core functionality of a paid Service during its current term
          without a legitimate operational, security, or legal reason.
        </p>
        <p className={copy}>
          Any uptime commitment, service credit, implementation scope, or
          response target applies only when included in the applicable plan or a
          signed Order.
        </p>
      </>
    ),
  },
  {
    id: "suspension",
    title: "Suspension and termination",
    content: (
      <p className={copy}>
        Schedulaa may restrict or suspend access when reasonably necessary to
        prevent harm, address unlawful or fraudulent activity, protect systems
        or data, respond to a legal requirement, collect past-due fees, or
        address a material breach. When practical, we will provide notice and
        limit the restriction to the affected account or feature. Termination,
        survival, and data-export rules are set out in the User Agreement and
        applicable Order.
      </p>
    ),
  },
  {
    id: "risk-allocation",
    title: "Warranties, liability, and indemnification",
    content: (
      <p className={copy}>
        The warranty disclaimer, exclusive remedy, liability exclusions and cap,
        and indemnification obligations in the User Agreement apply to the
        Services and these Terms. Nothing in these Terms limits a right or
        remedy that cannot lawfully be excluded.
      </p>
    ),
  },
  {
    id: "law-contact",
    title: "Governing law and contact",
    content: (
      <>
        <p className={copy}>
          Ontario law and the federal laws of Canada applicable there govern
          these Terms. Dispute and jurisdiction rules are stated in the User
          Agreement.
        </p>
        <p className={copy}>
          Questions or legal notices may be sent to{" "}
          <a href="mailto:admin@schedulaa.com" className={legalLink}>
            admin@schedulaa.com
          </a>{" "}
          or Photo Artisto Corp., 171 Harbord Street, Toronto, Ontario M5S 1H3,
          Canada.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalDocumentLayout
      title="Terms of Service"
      summary="Commercial terms for subscriptions, billing, service access, security controls, and account enforcement across the Schedulaa platform."
      effectiveDate="October 4, 2026"
      version="2026.10"
      sections={sections}
      relatedLinks={[
        { href: "/user-agreement", label: "User Agreement", primary: true },
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/refund-policy", label: "Refund Policy" },
      ]}
    />
  );
}
