import LegalDocumentLayout, {
  type LegalSection,
} from "@/components/legal/LegalDocumentLayout";
import { buildLocalizedPageMetadata } from "@/lib/seo/pageMetadata";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  ...buildLocalizedPageMetadata({
    locale: "en",
    path: "/account-deletion",
    title: "Account and Data Deletion | Schedulaa",
    description:
      "How to request Schedulaa account closure or deletion of eligible personal and workspace data.",
  }),
};

const copy = "leading-7 text-secondary/80 dark:text-accent/75";
const list = `list-disc space-y-2 pl-6 ${copy}`;
const legalLink =
  "font-medium text-primary-500 underline decoration-primary-500/35 underline-offset-4";

const sections: LegalSection[] = [
  {
    id: "request",
    title: "How to submit a request",
    content: (
      <>
        <p className={copy}>
          Email{" "}
          <a href="mailto:admin@schedulaa.com" className={legalLink}>
            admin@schedulaa.com
          </a>{" "}
          from the address associated with the account. Use “Account deletion
          request” or “Personal data deletion request” as the subject.
        </p>
        <p className={copy}>
          Include the account email, workspace or company name, your role, and
          whether you are requesting account closure, deletion of an entire
          workspace, or deletion of specific personal information.
        </p>
      </>
    ),
  },
  {
    id: "authority",
    title: "Identity and authority verification",
    content: (
      <p className={copy}>
        We may verify identity and authority before acting. Only an authorized
        workspace owner or administrator may request deletion of an organization
        workspace or shared records. An Authorized User may request deletion of
        information controlled directly by Schedulaa, but workspace records
        controlled by a customer organization may need to be handled by that
        organization.
      </p>
    ),
  },
  {
    id: "subscription",
    title: "Cancel the subscription separately",
    content: (
      <p className={copy}>
        An account-deletion request does not automatically cancel an active paid
        subscription or reverse completed charges. Cancel recurring billing
        through available account settings or follow the{" "}
        <Link href="/refund-policy" className={legalLink}>
          Refund and Cancellation Policy
        </Link>
        . We may confirm subscription status before completing workspace
        deletion to prevent unintended charges or loss of access.
      </p>
    ),
  },
  {
    id: "deletion-scope",
    title: "Information eligible for deletion",
    content: (
      <ul className={list}>
        <li>
          Account profile, preferences, and authentication records no longer
          needed for security.
        </li>
        <li>
          Workspace configuration, bookings, schedules, contacts, workforce
          records, and uploaded content.
        </li>
        <li>
          Support or communications information no longer required for an
          unresolved request or legal obligation.
        </li>
        <li>
          Integration tokens and active links associated with the closed account
          or workspace.
        </li>
      </ul>
    ),
  },
  {
    id: "retention",
    title: "Information we may retain",
    content: (
      <p className={copy}>
        We may retain limited billing, tax, invoice, fraud, security, dispute,
        legal, consent, audit, and backup records where required by law,
        contract, security practice, or legitimate business obligations.
        Retained information is restricted to those purposes and deleted or
        de-identified when the applicable need ends.
      </p>
    ),
  },
  {
    id: "backups",
    title: "Backups and connected services",
    content: (
      <p className={copy}>
        Deleted information may remain in protected backups until those backups
        rotate under standard retention schedules. Data previously exported to
        or independently stored by a customer, Authorized User, payment
        provider, accounting platform, or other connected service is controlled
        by that recipient and may require a separate request.
      </p>
    ),
  },
  {
    id: "timeframe",
    title: "Response and completion timeframe",
    content: (
      <p className={copy}>
        We will acknowledge and review a complete request within a reasonable
        timeframe and normally respond within 30 days where applicable law
        allows. Complex requests, identity verification, legal holds, or records
        involving multiple workspace parties may require additional time; we
        will communicate material delays where required.
      </p>
    ),
  },
  {
    id: "impact",
    title: "Service impact and finality",
    content: (
      <p className={copy}>
        Account or workspace deletion can permanently remove access to bookings,
        schedules, payroll workflows, websites, customer records, reports,
        support history, and integrations. Export required data before
        requesting deletion. Completed deletion may not be reversible.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Questions and privacy requests",
    content: (
      <p className={copy}>
        Questions about deletion, access, or correction may be sent to{" "}
        <a href="mailto:admin@schedulaa.com" className={legalLink}>
          admin@schedulaa.com
        </a>{" "}
        or Photo Artisto Corp., 171 Harbord Street, Toronto, Ontario M5S 1H3,
        Canada.
      </p>
    ),
  },
];

export default function AccountDeletionPage() {
  return (
    <LegalDocumentLayout
      title="Account and Data Deletion"
      summary="How account owners, workspace administrators, and individual users can request closure or deletion of eligible Schedulaa data."
      effectiveDate="October 4, 2026"
      version="2026.10"
      sections={sections}
      relatedLinks={[
        { href: "/privacy", label: "Privacy Policy", primary: true },
        { href: "/refund-policy", label: "Cancellation Policy" },
        { href: "/user-agreement", label: "User Agreement" },
      ]}
    />
  );
}
