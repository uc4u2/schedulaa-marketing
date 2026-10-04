import LegalDocumentLayout, {
  type LegalSection,
} from "@/components/legal/LegalDocumentLayout";
import { defaultMetadata } from "@/utils/generateMetaData";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Cookie Policy | Schedulaa",
  description:
    "How Schedulaa uses cookies and similar technologies for essential functions, preferences, analytics, and security.",
};

const copy = "leading-7 text-secondary/80 dark:text-accent/75";
const list = `list-disc space-y-2 pl-6 ${copy}`;
const legalLink =
  "font-medium text-primary-500 underline decoration-primary-500/35 underline-offset-4";

const sections: LegalSection[] = [
  {
    id: "scope",
    title: "Scope",
    content: (
      <p className={copy}>
        This Cookie Policy explains how Photo Artisto Corp., doing business as
        Schedulaa, uses cookies and similar technologies on its websites and
        applications. It should be read with our{" "}
        <Link href="/privacy" className={legalLink}>
          Privacy Policy
        </Link>
        .
      </p>
    ),
  },
  {
    id: "technologies",
    title: "Technologies we use",
    content: (
      <p className={copy}>
        Cookies are small data files stored by a browser. We may also use local
        storage, session storage, pixels, software development kits, and similar
        identifiers that support comparable functions across web and mobile
        experiences.
      </p>
    ),
  },
  {
    id: "purposes",
    title: "Why we use them",
    content: (
      <ul className={list}>
        <li>Operate authentication, sessions, navigation, and core features.</li>
        <li>Remember language, region, accessibility, and interface preferences.</li>
        <li>Protect accounts, enforce request integrity, and detect abuse or fraud.</li>
        <li>Measure reliability, diagnose errors, and understand feature performance.</li>
        <li>Evaluate marketing performance where permitted and consented to.</li>
      </ul>
    ),
  },
  {
    id: "providers",
    title: "Service providers and third parties",
    content: (
      <p className={copy}>
        Providers supporting hosting, analytics, communications, fraud
        prevention, and payment processing may place or read technologies when
        providing services to us. Their handling of information is governed by
        their agreements with Schedulaa and, where applicable, their own notices.
      </p>
    ),
  },
  {
    id: "choices",
    title: "Your choices",
    content: (
      <p className={copy}>
        Browser and device controls may allow you to block or remove cookies.
        Disabling essential storage can prevent sign-in, security, checkout, or
        other platform functions from working correctly. Where a consent control
        is presented, you can use it to manage non-essential technologies.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Questions and updates",
    content: (
      <p className={copy}>
        We may update this policy as our technology or legal obligations change.
        Questions may be sent to{" "}
        <a href="mailto:admin@schedulaa.com" className={legalLink}>
          admin@schedulaa.com
        </a>
        .
      </p>
    ),
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalDocumentLayout
      title="Cookie Policy"
      summary="How Schedulaa uses cookies and similar technologies to operate, secure, understand, and improve its services."
      effectiveDate="October 4, 2026"
      version="2026.10"
      sections={sections}
      relatedLinks={[
        { href: "/privacy", label: "Privacy Policy", primary: true },
        { href: "/terms", label: "Terms of Service" },
        { href: "/security", label: "Security" },
      ]}
    />
  );
}
