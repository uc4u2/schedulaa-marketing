import LegalDocumentLayout, {
  type LegalSection,
} from "@/components/legal/LegalDocumentLayout";
import { defaultMetadata } from "@/utils/generateMetaData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Security Overview | Schedulaa",
  description:
    "An overview of Schedulaa security controls for access, infrastructure, operations, billing, and incident response.",
};

const copy = "leading-7 text-secondary/80 dark:text-accent/75";
const list = `list-disc space-y-2 pl-6 ${copy}`;

const sections: LegalSection[] = [
  {
    id: "program",
    title: "Security program",
    content: (
      <p className={copy}>
        Schedulaa applies administrative, technical, and organizational controls
        designed for the nature of its platform, the information it processes,
        and evolving operational risk. Controls are reviewed as products,
        infrastructure, and customer needs change.
      </p>
    ),
  },
  {
    id: "access",
    title: "Identity and access",
    content: (
      <ul className={list}>
        <li>Authenticated access and role-based workspace permissions.</li>
        <li>Administrative access limited according to operational need.</li>
        <li>Account, session, and security-event monitoring.</li>
        <li>Procedures for access changes and removal.</li>
      </ul>
    ),
  },
  {
    id: "data-infrastructure",
    title: "Data and infrastructure protection",
    content: (
      <p className={copy}>
        Safeguards include encrypted transport, managed infrastructure controls,
        environment separation, backups appropriate to service requirements,
        dependency maintenance, logging, and restricted production access. No
        system can guarantee absolute security, so controls are operated as a
        risk-based program.
      </p>
    ),
  },
  {
    id: "billing",
    title: "Billing and fraud protection",
    content: (
      <p className={copy}>
        Billing protections may include risk scoring, suspicious-attempt
        throttling, conditional authentication requirements, payment-method
        restrictions, and event-driven investigation workflows for disputes,
        early fraud warnings, or unusual transaction patterns.
      </p>
    ),
  },
  {
    id: "operations",
    title: "Operational monitoring and response",
    content: (
      <p className={copy}>
        Schedulaa monitors service health and security-relevant events, evaluates
        reported vulnerabilities, and maintains procedures to contain,
        investigate, remediate, and document incidents. Notifications are made
        when required by applicable law or contractual commitments.
      </p>
    ),
  },
  {
    id: "customer",
    title: "Customer responsibilities",
    content: (
      <ul className={list}>
        <li>Use unique credentials and protect authentication methods.</li>
        <li>Assign the minimum workspace access appropriate for each user.</li>
        <li>Keep devices, integrations, and contact information current and secure.</li>
        <li>Promptly remove access that is no longer required.</li>
        <li>Report suspected compromise or abuse without sharing passwords or full card data.</li>
      </ul>
    ),
  },
  {
    id: "contact",
    title: "Report a security concern",
    content: (
      <p className={copy}>
        Send a clear description, affected service, relevant timestamps, and
        safe reproduction details to admin@schedulaa.com. Please allow us a
        reasonable opportunity to investigate before public disclosure.
      </p>
    ),
  },
];

export default function SecurityPage() {
  return (
    <LegalDocumentLayout
      title="Security Overview"
      summary="An overview of the safeguards Schedulaa uses across identity, infrastructure, operations, billing, and incident response."
      effectiveDate="October 4, 2026"
      version="2026.10"
      sections={sections}
      relatedLinks={[
        { href: "/privacy", label: "Privacy Policy", primary: true },
        { href: "/data-processing", label: "Data Processing" },
        { href: "/acceptable-use", label: "Acceptable Use" },
      ]}
    />
  );
}
