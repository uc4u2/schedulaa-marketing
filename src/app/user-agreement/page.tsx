import { defaultMetadata } from "@/utils/generateMetaData";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "User Agreement | Schedulaa",
  description:
    "Terms governing Schedulaa accounts, authorized users, subscriptions, customer data, platform use, and service access.",
};

const agreementSections = [
  ["agreement", "1. Agreement and definitions"],
  ["acceptance", "2. Acceptance and authority"],
  ["accounts", "3. Accounts and workspace administration"],
  ["use", "4. Permitted use and restrictions"],
  ["data", "5. Customer data and privacy"],
  ["billing", "6. Plans, billing, and taxes"],
  ["integrations", "7. Third-party services"],
  ["service", "8. Service operation and support"],
  ["ownership", "9. Ownership and feedback"],
  ["confidentiality", "10. Confidentiality"],
  ["suspension", "11. Suspension and termination"],
  ["warranties", "12. Warranties and disclaimers"],
  ["liability", "13. Limitation of liability"],
  ["indemnity", "14. Indemnification"],
  ["law", "15. Governing law and disputes"],
  ["general", "16. General terms"],
  ["contact", "17. Contact"],
] as const;

const sectionClass =
  "scroll-mt-32 space-y-4 rounded-[24px] border border-stroke-2 bg-white p-6 shadow-sm md:p-8 dark:border-stroke-7 dark:bg-background-8";
const headingClass = "text-2xl font-semibold text-secondary dark:text-white";
const copyClass = "leading-7 text-secondary/80 dark:text-accent/75";
const listClass = `list-disc space-y-2 pl-6 ${copyClass}`;
const legalLinkClass =
  "font-medium text-primary-500 underline decoration-primary-500/35 underline-offset-4 transition-colors hover:text-primary-600";

function AgreementNavigation() {
  return (
    <ol className="space-y-1.5 text-sm text-secondary/70 dark:text-accent/70">
      {agreementSections.map(([id, label]) => (
        <li key={id}>
          <a
            href={`#${id}`}
            className="block rounded-lg px-3 py-2 transition-colors hover:bg-background-2 hover:text-secondary dark:hover:bg-background-6 dark:hover:text-white"
          >
            {label}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default function UserAgreementPage() {
  return (
    <main className="section-padding-x pb-24 pt-32 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <header className="overflow-hidden rounded-[32px] border border-stroke-2 bg-background-2 dark:border-stroke-7 dark:bg-background-6">
          <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end lg:p-12">
            <div>
              <p className="text-tagline-2 font-semibold tracking-[0.2em] text-primary-500 uppercase">
                Legal
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-secondary md:text-5xl dark:text-white">
                User Agreement
              </h1>
              <p className={`mt-5 max-w-3xl text-lg ${copyClass}`}>
                This agreement explains the rules for creating and using a
                Schedulaa account, administering a workspace, and accessing our
                scheduling, workforce, website, billing, and related services.
              </p>
            </div>

            <dl className="grid gap-4 rounded-[20px] border border-stroke-2 bg-white/80 p-5 text-sm dark:border-stroke-7 dark:bg-background-8/80">
              <div>
                <dt className="font-medium text-secondary/60 dark:text-accent/60">
                  Effective date
                </dt>
                <dd className="mt-1 font-semibold text-secondary dark:text-white">
                  October 4, 2026
                </dd>
              </div>
              <div className="border-t border-stroke-2 pt-4 dark:border-stroke-7">
                <dt className="font-medium text-secondary/60 dark:text-accent/60">
                  Contracting entity
                </dt>
                <dd className="mt-1 font-semibold text-secondary dark:text-white">
                  Photo Artisto Corp.
                </dd>
              </div>
              <div className="border-t border-stroke-2 pt-4 dark:border-stroke-7">
                <dt className="font-medium text-secondary/60 dark:text-accent/60">
                  Agreement version
                </dt>
                <dd className="mt-1 font-semibold text-secondary dark:text-white">
                  2026.10
                </dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start">
          <details className="group rounded-[20px] border border-stroke-2 bg-white p-5 lg:hidden dark:border-stroke-7 dark:bg-background-8">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold tracking-[0.14em] text-secondary uppercase dark:text-white">
              On this page
              <span
                aria-hidden="true"
                className="text-xl leading-none text-primary-500 transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <nav
              aria-label="User Agreement sections"
              className="mt-4 border-t border-stroke-2 pt-3 dark:border-stroke-7"
            >
              <AgreementNavigation />
            </nav>
          </details>

          <aside className="hidden lg:sticky lg:top-32 lg:block">
            <nav
              aria-label="User Agreement sections"
              className="rounded-[24px] border border-stroke-2 bg-white p-5 dark:border-stroke-7 dark:bg-background-8"
            >
              <p className="mb-4 text-sm font-semibold tracking-[0.14em] text-secondary uppercase dark:text-white">
                On this page
              </p>
              <AgreementNavigation />
            </nav>
          </aside>

          <article className="space-y-6">
            <section id="agreement" className={sectionClass}>
              <h2 className={headingClass}>1. Agreement and definitions</h2>
              <p className={copyClass}>
                This User Agreement (the <strong>“Agreement”</strong>) is
                between Photo Artisto Corp., doing business as Schedulaa (
                <strong>“Schedulaa,” “we,” “us,”</strong> or{" "}
                <strong>“our”</strong>), and the person or legal entity that
                creates, accesses, or uses a Schedulaa account (
                <strong>“Customer,” “you,”</strong> or <strong>“your”</strong>).
                An <strong>“Authorized User”</strong> is anyone Customer permits
                to use its workspace. The <strong>“Services”</strong> include
                Schedulaa websites, applications, APIs, integrations, support,
                and related hosted features.
              </p>
              <p className={copyClass}>
                This Agreement incorporates our{" "}
                <Link href="/terms" className={legalLinkClass}>
                  Terms of Service
                </Link>
                ,{" "}
                <Link href="/privacy" className={legalLinkClass}>
                  Privacy Policy
                </Link>
                ,{" "}
                <Link href="/acceptable-use" className={legalLinkClass}>
                  Acceptable Use Policy
                </Link>
                ,{" "}
                <Link href="/refund-policy" className={legalLinkClass}>
                  Refund Policy
                </Link>
                , and, where applicable, our{" "}
                <Link href="/data-processing" className={legalLinkClass}>
                  Data Processing Addendum
                </Link>
                . An online checkout, order form, statement of work, or
                separately signed agreement is an <strong>“Order”</strong>.
              </p>
              <p className={copyClass}>
                If terms conflict, a signed Order controls for its subject
                matter, the Data Processing Addendum controls for processing of
                personal data, this Agreement controls for account and workspace
                use, and the incorporated policies apply to their respective
                subject matter.
              </p>
            </section>

            <section id="acceptance" className={sectionClass}>
              <h2 className={headingClass}>2. Acceptance and authority</h2>
              <p className={copyClass}>
                You accept this Agreement by creating an account, clicking an
                acceptance control, executing an Order, or accessing or using
                the Services. If you use the Services for an organization, you
                represent that you have authority to bind that organization. If
                you do not have that authority or do not agree, you must not use
                the Services.
              </p>
              <p className={copyClass}>
                You must be legally capable of entering into a binding contract
                and meet any minimum-age requirement in your jurisdiction.
                Customer is responsible for ensuring that each Authorized User
                is permitted to use the Services and follows this Agreement.
              </p>
            </section>

            <section id="accounts" className={sectionClass}>
              <h2 className={headingClass}>
                3. Accounts and workspace administration
              </h2>
              <ul className={listClass}>
                <li>
                  Provide complete, accurate, and current registration,
                  business, tax, and billing information.
                </li>
                <li>
                  Protect credentials, use appropriate access controls, and
                  promptly report suspected unauthorized use.
                </li>
                <li>
                  Assign administrative privileges only to trusted users and
                  regularly review workspace access.
                </li>
                <li>
                  Accept responsibility for activity performed through
                  Customer&apos;s workspace, including configuration,
                  invitations, permissions, exports, messages, and connected
                  services.
                </li>
                <li>
                  Maintain lawful notices, permissions, and consents for
                  employees, contractors, clients, and other people whose
                  information Customer places in the Services.
                </li>
              </ul>
              <p className={copyClass}>
                Workspace administrators may access, manage, export, restrict,
                or delete information associated with Authorized Users.
                Authorized Users should direct workspace-access questions to
                their Customer administrator.
              </p>
            </section>

            <section id="use" className={sectionClass}>
              <h2 className={headingClass}>
                4. Permitted use and restrictions
              </h2>
              <p className={copyClass}>
                Subject to this Agreement and payment of applicable fees,
                Schedulaa grants Customer a limited, non-exclusive,
                non-transferable right to access and use the Services for
                Customer&apos;s internal business operations during the
                subscription term.
              </p>
              <p className={copyClass}>
                Customer and Authorized Users must not:
              </p>
              <ul className={listClass}>
                <li>
                  use the Services unlawfully or infringe another person&apos;s
                  rights;
                </li>
                <li>
                  circumvent access, usage, billing, fraud-prevention, or
                  security controls;
                </li>
                <li>
                  probe, scan, disrupt, overload, or attempt unauthorized access
                  to systems or data;
                </li>
                <li>
                  upload malware, send unlawful unsolicited communications, or
                  facilitate deceptive activity;
                </li>
                <li>
                  copy, resell, reverse engineer, or create derivative works
                  from the Services except where applicable law expressly
                  permits it; or
                </li>
                <li>
                  use the Services to build or train a competing product without
                  our written permission.
                </li>
              </ul>
            </section>

            <section id="data" className={sectionClass}>
              <h2 className={headingClass}>5. Customer data and privacy</h2>
              <p className={copyClass}>
                As between the parties, Customer retains its rights in
                information, content, files, images, records, and other data
                submitted to the Services (<strong>“Customer Data”</strong>).
                Customer grants Schedulaa the limited rights needed to host,
                process, transmit, display, back up, and otherwise handle
                Customer Data to provide, secure, support, and improve the
                Services as described in this Agreement and our Privacy Policy.
              </p>
              <ul className={listClass}>
                <li>
                  Customer is responsible for the accuracy, quality, legality,
                  and source of Customer Data.
                </li>
                <li>
                  Customer must have all rights, notices, consents, and lawful
                  bases needed for Schedulaa to process Customer Data on
                  Customer&apos;s instructions.
                </li>
                <li>
                  Customer is responsible for configuring retention, access,
                  location, messaging, recording, and sharing features in
                  accordance with applicable workplace, privacy, consumer, and
                  industry laws.
                </li>
                <li>
                  Schedulaa may use aggregated or de-identified information that
                  does not identify Customer or an individual to operate,
                  secure, analyze, and improve the Services.
                </li>
              </ul>
            </section>

            <section id="billing" className={sectionClass}>
              <h2 className={headingClass}>6. Plans, billing, and taxes</h2>
              <p className={copyClass}>
                Plan scope, fees, billing frequency, included usage, and
                subscription term are shown at checkout or in the applicable
                Order. Customer authorizes Schedulaa and its payment providers
                to charge the selected payment method for fees and applicable
                taxes. Customer must keep billing details and payment
                authorization current.
              </p>
              <ul className={listClass}>
                <li>
                  Fees are due in the currency and on the schedule stated in the
                  Order.
                </li>
                <li>
                  Customer is responsible for applicable sales, use,
                  value-added, and similar taxes, excluding taxes on our income.
                </li>
                <li>
                  Plan changes, cancellation, renewal, credits, and refunds are
                  governed by the Order and Refund Policy.
                </li>
                <li>
                  Past-due amounts may result in restricted features or
                  suspension after any notice required by law.
                </li>
              </ul>
            </section>

            <section id="integrations" className={sectionClass}>
              <h2 className={headingClass}>7. Third-party services</h2>
              <p className={copyClass}>
                The Services may connect to payment processors, accounting
                platforms, communications providers, app marketplaces, and other
                third-party services. Customer decides whether to enable an
                integration and authorizes Schedulaa to exchange the information
                needed to operate it. Third-party products are governed by their
                own terms and privacy practices, and Schedulaa is not
                responsible for third-party services outside our control.
              </p>
            </section>

            <section id="service" className={sectionClass}>
              <h2 className={headingClass}>8. Service operation and support</h2>
              <p className={copyClass}>
                We may maintain, update, or modify the Services to improve
                performance, security, legal compliance, and functionality. We
                will not materially reduce the core functionality of a paid
                Service during its current subscription term without a
                legitimate operational, security, or legal reason.
              </p>
              <p className={copyClass}>
                Support level, response targets, implementation assistance, and
                any service-level commitment apply only if included in the
                applicable plan or signed Order. Preview, beta, trial, and
                early-access features may change or end at any time and are
                provided without a service-level commitment.
              </p>
              <p className={copyClass}>
                Schedulaa provides operational software, not legal, tax,
                payroll, accounting, employment, medical, or other professional
                advice. Customer remains responsible for reviewing
                configurations, calculations, exports, and decisions with
                qualified professionals when appropriate.
              </p>
            </section>

            <section id="ownership" className={sectionClass}>
              <h2 className={headingClass}>9. Ownership and feedback</h2>
              <p className={copyClass}>
                Schedulaa and its licensors retain all rights in the Services,
                documentation, software, designs, trademarks, and related
                technology. No rights are granted except those expressly stated
                in this Agreement. If Customer provides suggestions or feedback,
                Schedulaa may use it without restriction or obligation, provided
                we do not identify Customer publicly without permission.
              </p>
            </section>

            <section id="confidentiality" className={sectionClass}>
              <h2 className={headingClass}>10. Confidentiality</h2>
              <p className={copyClass}>
                Each party may receive non-public information that a reasonable
                person would understand to be confidential. The receiving party
                will use reasonable care to protect it, use it only for the
                parties&apos; relationship, and disclose it only to personnel
                and service providers who need it and are bound by
                confidentiality duties. These obligations do not cover
                information that is public through no breach, already lawfully
                known, independently developed, or lawfully received from
                another source.
              </p>
              <p className={copyClass}>
                A party may disclose confidential information when legally
                required after giving notice where permitted and reasonably
                cooperating to limit the disclosure.
              </p>
            </section>

            <section id="suspension" className={sectionClass}>
              <h2 className={headingClass}>11. Suspension and termination</h2>
              <p className={copyClass}>
                Customer may stop using the Services and cancel as permitted by
                its Order. Either party may terminate for a material breach that
                is not cured within a reasonable written cure period, unless the
                breach cannot be cured.
              </p>
              <p className={copyClass}>
                We may immediately restrict or suspend access when reasonably
                necessary to prevent harm, address unlawful or fraudulent
                activity, protect data or systems, respond to a legal
                requirement, or address a material breach. When practical, we
                will give notice and limit the restriction to the affected
                account or feature.
              </p>
              <p className={copyClass}>
                On termination, Customer&apos;s right to use the Services ends.
                Subject to the applicable plan, law, and our retention
                obligations, Customer should export required data before
                termination. Terms that by their nature should survive—including
                payment, ownership, confidentiality, disclaimers, liability,
                indemnification, and dispute provisions—remain in effect.
              </p>
            </section>

            <section id="warranties" className={sectionClass}>
              <h2 className={headingClass}>12. Warranties and disclaimers</h2>
              <p className={copyClass}>
                Each party represents that it has authority to enter this
                Agreement. Schedulaa will provide paid Services in a
                professional manner consistent with generally accepted industry
                practices. Customer&apos;s exclusive remedy for a verified
                breach of this commitment is for Schedulaa to use commercially
                reasonable efforts to correct the affected Service or, if
                correction is not commercially reasonable, permit termination of
                the affected paid Service and refund prepaid fees for the unused
                portion of its current term.
              </p>
              <p className={copyClass}>
                Except for express commitments in this Agreement or an Order,
                and to the maximum extent permitted by law, the Services are
                provided “as is” and “as available.” Schedulaa disclaims implied
                warranties of merchantability, fitness for a particular purpose,
                non-infringement, and uninterrupted or error-free operation.
                Nothing in this Agreement excludes a warranty or consumer right
                that cannot lawfully be excluded.
              </p>
            </section>

            <section id="liability" className={sectionClass}>
              <h2 className={headingClass}>13. Limitation of liability</h2>
              <p className={copyClass}>
                To the maximum extent permitted by law, neither party will be
                liable for indirect, incidental, special, consequential,
                exemplary, or punitive damages, or for lost profits, revenues,
                goodwill, or data, even if advised that such loss was possible.
              </p>
              <p className={copyClass}>
                Except for payment obligations, fraud, willful misconduct,
                breach of confidentiality, infringement of the other
                party&apos;s intellectual-property rights, or indemnification
                obligations, each party&apos;s total aggregate liability arising
                from the Services or this Agreement will not exceed the fees
                Customer paid or owed for the affected Services during the 12
                months before the event giving rise to liability. For free
                Services, the cap is CAD $100. These limits apply to the extent
                permitted by applicable law.
              </p>
            </section>

            <section id="indemnity" className={sectionClass}>
              <h2 className={headingClass}>14. Indemnification</h2>
              <p className={copyClass}>
                Customer will defend and indemnify Schedulaa and its personnel
                against third-party claims, damages, and reasonable costs
                arising from Customer Data, Customer&apos;s unlawful use of the
                Services, or Customer&apos;s material violation of this
                Agreement. Schedulaa will promptly notify Customer of a covered
                claim and provide reasonable cooperation. Customer may control
                the defence and settlement, but may not admit fault or impose an
                obligation on Schedulaa without our written consent.
              </p>
            </section>

            <section id="law" className={sectionClass}>
              <h2 className={headingClass}>15. Governing law and disputes</h2>
              <p className={copyClass}>
                This Agreement is governed by the laws of Ontario and the
                federal laws of Canada applicable there, without regard to
                conflict-of-law rules. The parties will first try in good faith
                to resolve a dispute through written notice and business
                discussions. Unless applicable law requires otherwise, the
                courts located in Toronto, Ontario have exclusive jurisdiction.
                Nothing prevents either party from seeking urgent injunctive
                relief.
              </p>
            </section>

            <section id="general" className={sectionClass}>
              <h2 className={headingClass}>16. General terms</h2>
              <ul className={listClass}>
                <li>
                  We may update this Agreement for legal, security, or product
                  reasons. Material changes will be communicated through the
                  Services, by email, or on this page before they take effect
                  where required.
                </li>
                <li>
                  Neither party may assign this Agreement without the other
                  party&apos;s consent, except in connection with a merger,
                  corporate reorganization, or sale of substantially all
                  relevant assets, provided the assignee assumes the assigning
                  party&apos;s obligations.
                </li>
                <li>
                  Neither party is liable for delay caused by events beyond its
                  reasonable control, except for payment obligations.
                </li>
                <li>
                  If a provision is unenforceable, it will be limited to the
                  minimum extent necessary and the remaining terms remain
                  effective. A waiver must be in writing and applies only to the
                  specific instance stated.
                </li>
                <li>
                  This Agreement and incorporated documents are the entire
                  agreement for their subject matter and replace earlier
                  proposals or understandings about that subject matter.
                </li>
                <li>
                  Electronic acceptance, records, and notices have the same
                  effect as paper communications to the extent permitted by law.
                </li>
              </ul>
            </section>

            <section id="contact" className={sectionClass}>
              <h2 className={headingClass}>17. Contact</h2>
              <p className={copyClass}>
                Questions or legal notices about this Agreement may be sent to{" "}
                <a href="mailto:admin@schedulaa.com" className={legalLinkClass}>
                  admin@schedulaa.com
                </a>{" "}
                or mailed to:
              </p>
              <address className={`${copyClass} not-italic`}>
                Photo Artisto Corp. (Schedulaa)
                <br />
                171 Harbord Street
                <br />
                Toronto, Ontario M5S 1H3
                <br />
                Canada
              </address>
            </section>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/terms" className="btn btn-primary btn-sm">
                Terms of Service
              </Link>
              <Link href="/privacy" className="btn btn-secondary btn-sm">
                Privacy Policy
              </Link>
              <Link
                href="/data-processing"
                className="btn btn-secondary btn-sm"
              >
                Data Processing
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
