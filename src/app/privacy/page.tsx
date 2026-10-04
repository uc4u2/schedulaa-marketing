import LegalDocumentLayout, {
  type LegalSection,
} from "@/components/legal/LegalDocumentLayout";
import { defaultMetadata } from "@/utils/generateMetaData";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Privacy Policy | Schedulaa",
  description:
    "How Schedulaa collects, uses, shares, protects, retains, and processes personal information across its platform.",
};

const copy = "leading-7 text-secondary/80 dark:text-accent/75";
const list = `list-disc space-y-2 pl-6 ${copy}`;
const legalLink =
  "font-medium text-primary-500 underline decoration-primary-500/35 underline-offset-4";

const sections: LegalSection[] = [
  {
    id: "scope",
    title: "Scope and our role",
    content: (
      <>
        <p className={copy}>
          This Privacy Policy describes how Photo Artisto Corp., doing business
          as Schedulaa, handles personal information across our websites,
          applications, support channels, and connected services.
        </p>
        <p className={copy}>
          Schedulaa generally acts as a service provider or processor when a
          customer organization uses the platform to manage employee,
          contractor, or client information. That customer determines why and
          how its workspace data is used. Schedulaa acts as an organization
          responsible for information used for account administration, billing,
          security, support, product analytics, and our own marketing.
        </p>
      </>
    ),
  },
  {
    id: "information",
    title: "Information we collect",
    content: (
      <ul className={list}>
        <li>
          Account details such as name, contact information, role, organization,
          authentication data, and preferences.
        </li>
        <li>
          Workspace data such as bookings, schedules, services, customer
          records, workforce records, and uploaded content.
        </li>
        <li>
          Billing metadata such as plan, invoices, Stripe identifiers, payment
          status, and limited card attributes.
        </li>
        <li>
          Device and usage information such as IP address, browser, timestamps,
          pages, feature activity, and diagnostics.
        </li>
        <li>
          Security and fraud signals such as login events, risk indicators,
          failed attempts, disputes, and audit records.
        </li>
        <li>
          Support, sales, survey, and communications content provided through
          email, forms, chat, or meetings.
        </li>
        <li>
          Integration data exchanged when a customer connects an accounting,
          payment, messaging, or other third-party service.
        </li>
        <li>
          Location evidence when a customer enables and an individual uses a
          location-dependent workforce feature.
        </li>
      </ul>
    ),
  },
  {
    id: "sources",
    title: "Where information comes from",
    content: (
      <p className={copy}>
        We receive information directly from individuals, customer workspace
        administrators, Authorized Users, connected services, payment providers,
        devices and browsers, and security or analytics providers. Customers are
        responsible for providing required notices and obtaining appropriate
        authority before placing other people&apos;s information in a Schedulaa
        workspace.
      </p>
    ),
  },
  {
    id: "purposes",
    title: "How we use information",
    content: (
      <ul className={list}>
        <li>
          Provide, configure, personalize, maintain, and support the Services.
        </li>
        <li>
          Authenticate users, administer workspaces, and enforce permissions.
        </li>
        <li>
          Process subscriptions, invoices, payments, refunds, taxes, and
          disputes.
        </li>
        <li>
          Deliver bookings, notifications, integrations, website features,
          payroll workflows, and reports.
        </li>
        <li>
          Monitor reliability, troubleshoot errors, analyze usage, and improve
          products.
        </li>
        <li>
          Protect accounts, detect abuse and fraud, investigate incidents, and
          enforce agreements.
        </li>
        <li>
          Communicate about services, support, security, transactions, and—where
          permitted—product updates or marketing.
        </li>
        <li>
          Meet legal, regulatory, tax, accounting, and recordkeeping
          obligations.
        </li>
      </ul>
    ),
  },
  {
    id: "location",
    title: "Workforce and trip location features",
    content: (
      <>
        <p className={copy}>
          If a customer enables punch-location evidence, Schedulaa may collect
          device location when an employee initiates Clock In or Clock Out. If a
          customer enables dispatch trip tracking, location may be collected
          during an active On my way workflow and when the employee marks
          Arrived. These features support attendance review, dispatch
          visibility, job coordination, operational security, and
          customer-controlled temporary tracking links.
        </p>
        <p className={copy}>
          These features are not intended for all-day or off-duty surveillance.
          Collection depends on the enabled feature, user action, device
          permission, and customer configuration. Customers are responsible for
          using workplace and location features lawfully and providing required
          notices or choices.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "When we disclose information",
    content: (
      <ul className={list}>
        <li>
          To the customer organization and its authorized workspace
          administrators and users.
        </li>
        <li>
          To vetted service providers supporting hosting, payments,
          communications, analytics, support, and security.
        </li>
        <li>To third-party integrations at the customer&apos;s direction.</li>
        <li>
          To payment processors, card networks, banks, or fraud providers for
          transactions and disputes.
        </li>
        <li>
          To professional advisers, insurers, auditors, or transaction
          counterparties subject to appropriate duties.
        </li>
        <li>
          To authorities or other parties where required by law or reasonably
          necessary to protect rights and safety.
        </li>
      </ul>
    ),
  },
  {
    id: "international",
    title: "International processing",
    content: (
      <p className={copy}>
        Schedulaa and its service providers may process information in Canada,
        the United States, or other countries where they operate. Information
        may therefore be subject to the laws and lawful access requirements of
        those locations. We use contractual, access-control, and
        vendor-management measures designed to protect information when it is
        processed by service providers.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Retention and deletion",
    content: (
      <p className={copy}>
        We retain personal information only as long as reasonably needed for the
        purposes described here, customer instructions, security, dispute
        resolution, backups, and legal or financial obligations. Retention
        varies by data type, workspace settings, subscription status, and legal
        requirements. Deletion requests are handled under our{" "}
        <Link href="/account-deletion" className={legalLink}>
          Account and Data Deletion
        </Link>{" "}
        process.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security safeguards",
    content: (
      <p className={copy}>
        We use administrative, technical, and organizational safeguards designed
        for the sensitivity of the information, including transport encryption,
        access controls, authentication, logging, monitoring, backups, and
        vendor review. No internet service can guarantee absolute security.
        Customers and users must protect credentials and promptly report
        suspected unauthorized access.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Privacy rights and choices",
    content: (
      <>
        <p className={copy}>
          Depending on jurisdiction and context, individuals may request access,
          correction, deletion, restriction, or information about how personal
          information is used and disclosed. Individuals may also withdraw
          consent where processing depends on consent, subject to legal or
          contractual limits.
        </p>
        <p className={copy}>
          For information controlled by a customer workspace, contact that
          organization first. For information controlled by Schedulaa, email{" "}
          <a href="mailto:admin@schedulaa.com" className={legalLink}>
            admin@schedulaa.com
          </a>
          . We may verify identity and authority before completing a request.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies, analytics, and communications",
    content: (
      <>
        <p className={copy}>
          We use cookies and similar technologies for sessions, preferences,
          security, measurement, and analytics as described in our{" "}
          <Link href="/cookie" className={legalLink}>
            Cookie Policy
          </Link>
          . Browser and device controls may limit optional cookies but may
          affect functionality.
        </p>
        <p className={copy}>
          Transactional and security messages are part of the Services.
          Marketing communications include an unsubscribe mechanism where
          required. Unsubscribing from marketing does not stop essential account
          or service messages.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    content: (
      <p className={copy}>
        Schedulaa&apos;s business Services are not directed to children who
        cannot legally consent to the relevant processing. Customer
        organizations are responsible for determining whether they may lawfully
        place information about minors in a workspace and for obtaining any
        required parent or guardian authorization.
      </p>
    ),
  },
  {
    id: "changes-contact",
    title: "Changes and contact",
    content: (
      <>
        <p className={copy}>
          We may update this policy to reflect legal, product, or operational
          changes. Material updates will be communicated through the Services,
          by email, or on this page where appropriate.
        </p>
        <p className={copy}>
          Privacy questions or complaints may be sent to{" "}
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

export default function PrivacyPage() {
  return (
    <LegalDocumentLayout
      title="Privacy Policy"
      summary="How Schedulaa collects, uses, discloses, protects, retains, and responds to requests involving personal information."
      effectiveDate="October 4, 2026"
      version="2026.10"
      sections={sections}
      relatedLinks={[
        { href: "/user-agreement", label: "User Agreement", primary: true },
        { href: "/data-processing", label: "Data Processing" },
        { href: "/account-deletion", label: "Account Deletion" },
      ]}
    />
  );
}
