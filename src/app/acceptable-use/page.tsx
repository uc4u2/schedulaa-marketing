import LegalDocumentLayout, {
  type LegalSection,
} from "@/components/legal/LegalDocumentLayout";
import { defaultMetadata } from "@/utils/generateMetaData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Acceptable Use Policy | Schedulaa",
  description:
    "Acceptable-use standards for platform conduct, billing integrity, data handling, and abuse prevention.",
};

const copy = "leading-7 text-secondary/80 dark:text-accent/75";
const list = `list-disc space-y-2 pl-6 ${copy}`;

const sections: LegalSection[] = [
  {
    id: "scope",
    title: "Scope and responsibility",
    content: (
      <p className={copy}>
        This policy applies to every account, workspace, Authorized User,
        integration, public page, and other use of Schedulaa. Customers are
        responsible for activity performed through their accounts and for
        ensuring their users follow this policy.
      </p>
    ),
  },
  {
    id: "prohibited-conduct",
    title: "Prohibited conduct",
    content: (
      <ul className={list}>
        <li>Illegal, deceptive, fraudulent, abusive, or harmful activity.</li>
        <li>Harassment, threats, exploitation, or unlawful discrimination.</li>
        <li>Malware, credential theft, phishing, scraping, or unauthorized access.</li>
        <li>Interference with service availability, integrity, or other users.</li>
        <li>Attempts to bypass usage, permission, billing, or security controls.</li>
      </ul>
    ),
  },
  {
    id: "billing-abuse",
    title: "Billing and identity abuse",
    content: (
      <ul className={list}>
        <li>Payment-card testing or use of stolen or unauthorized payment methods.</li>
        <li>Synthetic identities, impersonation, or false account information.</li>
        <li>Intentional chargeback abuse or evasion of valid fees.</li>
        <li>Manipulation of trials, promotions, refunds, or transaction records.</li>
      </ul>
    ),
  },
  {
    id: "data-content",
    title: "Data and content standards",
    content: (
      <p className={copy}>
        Users may upload or process content only when they have the rights,
        notices, permissions, and lawful basis required to do so. Schedulaa may
        not be used to distribute unlawful content, infringe intellectual
        property, expose sensitive information without authorization, or send
        unsolicited communications contrary to applicable law.
      </p>
    ),
  },
  {
    id: "enforcement",
    title: "Monitoring and enforcement",
    content: (
      <p className={copy}>
        We may investigate suspected violations and take proportionate action,
        including rate limits, content removal, transaction review, temporary
        holds, feature restrictions, suspension, or termination. Where
        appropriate, we may preserve evidence and cooperate with payment
        providers, regulators, or law enforcement.
      </p>
    ),
  },
  {
    id: "reporting",
    title: "Reporting concerns",
    content: (
      <p className={copy}>
        Report suspected abuse or security concerns to admin@schedulaa.com with
        enough detail for us to assess the issue. Do not include passwords or
        full payment-card information.
      </p>
    ),
  },
];

export default function AcceptableUsePage() {
  return (
    <LegalDocumentLayout
      title="Acceptable Use Policy"
      summary="The conduct, content, billing-integrity, and security standards that protect Schedulaa, its customers, and their users."
      effectiveDate="October 4, 2026"
      version="2026.10"
      sections={sections}
      relatedLinks={[
        { href: "/terms", label: "Terms of Service", primary: true },
        { href: "/security", label: "Security" },
        { href: "/user-agreement", label: "User Agreement" },
      ]}
    />
  );
}
