import LegalDocumentLayout, {
  type LegalSection,
} from "@/components/legal/LegalDocumentLayout";
import { defaultMetadata } from "@/utils/generateMetaData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Data Processing Addendum | Schedulaa",
  description:
    "Schedulaa data-processing roles, instructions, safeguards, subprocessors, assistance, and deletion commitments.",
};

const copy = "leading-7 text-secondary/80 dark:text-accent/75";
const list = `list-disc space-y-2 pl-6 ${copy}`;

const sections: LegalSection[] = [
  {
    id: "scope",
    title: "Scope and roles",
    content: (
      <p className={copy}>
        This Data Processing Addendum applies when Schedulaa processes personal
        information on behalf of a customer through the Services. The customer
        acts as the organization determining the purposes and means of
        processing, and Schedulaa acts as its service provider or processor,
        except where Schedulaa processes information for its own legitimate
        platform administration, security, billing, or legal purposes.
      </p>
    ),
  },
  {
    id: "instructions",
    title: "Documented instructions and customer duties",
    content: (
      <p className={copy}>
        Schedulaa processes customer-controlled personal information to provide,
        secure, support, and improve the contracted Services and according to the
        customer&apos;s documented configuration and instructions. Customers are
        responsible for lawful collection, notices, permissions, data accuracy,
        user access, and instructions submitted to Schedulaa.
      </p>
    ),
  },
  {
    id: "processing-details",
    title: "Processing details",
    content: (
      <ul className={list}>
        <li>Subjects may include customers, employees, contractors, and end clients.</li>
        <li>Data may include identity, contact, booking, workforce, billing, support, and technical records.</li>
        <li>Activities may include collection, storage, organization, transmission, support, security review, and deletion.</li>
        <li>Processing continues for the service term and applicable retention period.</li>
      </ul>
    ),
  },
  {
    id: "security",
    title: "Confidentiality and security",
    content: (
      <p className={copy}>
        Schedulaa maintains administrative, technical, and organizational
        safeguards appropriate to the nature of the information and service,
        including access controls, transport protection, operational logging,
        environment controls, and incident-response procedures. Personnel with
        access are subject to confidentiality obligations.
      </p>
    ),
  },
  {
    id: "subprocessors",
    title: "Subprocessors and international processing",
    content: (
      <p className={copy}>
        Schedulaa may use subprocessors for infrastructure, communications,
        payments, support, security, and analytics. Schedulaa requires them to
        protect information consistently with applicable contractual duties.
        Information may be processed outside the customer&apos;s jurisdiction,
        subject to appropriate legal and contractual safeguards where required.
      </p>
    ),
  },
  {
    id: "assistance",
    title: "Requests, incidents, and compliance assistance",
    content: (
      <p className={copy}>
        Taking into account the nature of the processing and information
        available, Schedulaa will provide reasonable assistance with verified
        individual requests, security incidents, and legally required privacy
        assessments. Customers remain responsible for responding as the
        organization controlling their workspace data.
      </p>
    ),
  },
  {
    id: "return-deletion",
    title: "Return, deletion, and audit information",
    content: (
      <p className={copy}>
        At the end of service, eligible customer data is returned or deleted in
        accordance with product capabilities, contractual commitments, backup
        cycles, and legal retention duties. Schedulaa will make information
        reasonably available to demonstrate compliance. Contract-specific DPA
        language may be requested during procurement at admin@schedulaa.com.
      </p>
    ),
  },
];

export default function DataProcessingPage() {
  return (
    <LegalDocumentLayout
      title="Data Processing Addendum"
      summary="The data-processing responsibilities, safeguards, subprocessors, assistance, and deletion commitments that apply to customer-controlled personal information."
      effectiveDate="October 4, 2026"
      version="2026.10"
      sections={sections}
      relatedLinks={[
        { href: "/privacy", label: "Privacy Policy", primary: true },
        { href: "/security", label: "Security" },
        { href: "/contact", label: "Contact" },
      ]}
    />
  );
}
