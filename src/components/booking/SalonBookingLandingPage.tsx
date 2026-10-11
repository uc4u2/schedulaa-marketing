"use client";

import Image from "next/image";
import Link from "next/link";

import TrackedLink from "@/components/shared/TrackedLink";
import {
  marketingLeadCopy,
  openMarketingLeadWidget,
} from "@/components/shared/marketingLead/marketingLeadPopup";
import { buildAppUrl, marketingReturnTo } from "@/utils/appLinks";
import { trackAnalyticsEvent } from "@/utils/analytics";
import { withLocalePath } from "@/utils/locale";

const pagePath = "/en/booking/salon";
const pricingHref = withLocalePath("/pricing", "en");

export const salonLandingHeadline =
  "Online Booking Software for Beauty Salons";
export const salonLandingProblem =
  "Give clients a clear way to choose a service, see real availability, select an eligible provider, and book online.";
export const salonBookingPaymentClaim =
  "When Stripe and online payments are configured, clients can pay online or securely save a card for later manager-initiated charging.";
export const salonBookingPaymentFaqAnswer =
  "Yes, when Stripe and the applicable online-payment settings are configured. Supported booking modes include online payment and card-on-file workflows.";

const bookingSteps = [
  {
    title: "1. Choose a service",
    body: "Publish the salon services clients can book, with the duration and details they need before choosing a time.",
  },
  {
    title: "2. See eligible availability",
    body: "Clients can choose an eligible provider and a time made available by the salon's configured schedule.",
  },
  {
    title: "3. Keep the visit connected",
    body: "The appointment stays connected to the customer record and the manager's booking schedule.",
  },
];
const startFreeHref = buildAppUrl("/register", {
  returnTo: marketingReturnTo("en", "/booking/salon"),
});

const capabilities = [
  {
    eyebrow: "Online booking",
    title: "Let clients choose a service, provider, and available time",
    body: "Publish services and live availability, let clients select an appointment, and keep confirmations and supported rescheduling flows connected to the booking record.",
    link: { href: "/en/booking", label: "See the booking workflow" },
  },
  {
    eyebrow: "Staff and availability",
    title: "Keep appointment choices aligned with the team calendar",
    body: "Assign services to the people who provide them, manage working availability, and give managers a shared view of the schedule without maintaining a separate booking calendar.",
  },
  {
    eyebrow: "Customer management",
    title: "Keep client and appointment context together",
    body: "Maintain customer records and appointment history alongside the operational workflows your team uses to schedule, serve, and follow up with clients.",
  },
  {
    eyebrow: "Booking payments",
    title: "Use a supported payment mode when configured",
    body: salonBookingPaymentClaim,
  },
  {
    eyebrow: "Website builder",
    title: "Add booking to a website you control",
    body: "Build and publish responsive service pages, brand styling, booking links, and a custom domain when configured for the workspace.",
    link: { href: "/en/website-builder", label: "Explore the website builder" },
  },
  {
    eyebrow: "Products and add-ons",
    title: "Sell retail products alongside salon services",
    body: "Manage products and inventory and sell retail items through the separate product cart and checkout workflow.",
  },
];

const faqs = [
  {
    question: "Can I use my own domain?",
    answer:
      "Yes. Schedulaa supports custom-domain connection with automatic SSL where the workspace domain setup is completed. Domain registration costs are separate.",
  },
  {
    question: "Can customers book appointments online?",
    answer:
      "Yes. You can publish services and availability so clients can choose a service, an eligible provider, and an available appointment time.",
  },
  {
    question: "Can I accept booking payments?",
    answer: salonBookingPaymentFaqAnswer,
  },
  {
    question: "Can I manage staff availability?",
    answer:
      "Yes. Services can be assigned to eligible team members and booking availability can follow the working schedule configured for those providers.",
  },
  {
    question: "Can I sell products too?",
    answer:
      "Yes. Schedulaa includes product, inventory, cart, and checkout workflows for businesses that sell retail items as well as services.",
  },
  {
    question: "Do I need a separate website builder?",
    answer:
      "No. The Schedulaa website builder publishes the public pages that connect to the platform booking and commerce workflows.",
  },
];

export const salonFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export const salonBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.schedulaa.com/en",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Beauty salon booking software",
      item: "https://www.schedulaa.com/en/booking/salon",
    },
  ],
};

const GetDemoButton = ({ placement }: { placement: string }) => (
  <button
    type="button"
    className="btn btn-white btn-md min-w-[180px] justify-center dark:btn-transparent"
    aria-haspopup="dialog"
    onClick={() => {
      trackAnalyticsEvent("primary_cta_click", {
        cta_name: "get_free_demo",
        page_path: pagePath,
        destination: "marketing_lead_widget",
        placement,
      });
      openMarketingLeadWidget();
    }}
  >
    {marketingLeadCopy.launcher}
  </button>
);

const StartFreeButton = ({
  placement,
  className,
}: {
  placement: string;
  className: string;
}) => (
  <TrackedLink
    href={startFreeHref}
    className={className}
    analyticsCta={{ name: "start_free", pagePath, placement }}
    eventName="Lead"
    eventParams={{
      content_name: `Salon Landing Start Free - ${placement}`,
      page_path: pagePath,
    }}
  >
    Start 14-day free trial
  </TrackedLink>
);

export default function SalonBookingLandingPage() {
  return (
    <main className="overflow-hidden bg-background-3 dark:bg-background-7">
      <script
        id="salon-booking-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(salonFaqJsonLd) }}
      />
      <script
        id="salon-booking-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(salonBreadcrumbJsonLd) }}
      />

      <section className="relative pt-[130px] pb-20 md:pt-[180px] md:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.16),transparent_38%),radial-gradient(circle_at_85%_30%,rgba(249,115,22,0.12),transparent_34%)]" />
        <div className="main-container relative grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <span className="badge badge-cyan mb-5">Beauty salon booking software</span>
            <h1 className="max-w-[720px] text-balance">
              {salonLandingHeadline}
            </h1>
            <p className="mt-6 max-w-[680px] text-lg leading-8 text-secondary/72 dark:text-accent/72">
              {salonLandingProblem}
            </p>
            <p className="mt-4 max-w-[680px] leading-8 text-secondary/72 dark:text-accent/72">
              Keep public booking, provider availability, appointments, and
              customer history connected so clients and managers work from the
              same schedule.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <StartFreeButton
                placement="salon_hero"
                className="btn btn-primary btn-md min-w-[210px] justify-center"
              />
              <GetDemoButton placement="salon_hero_secondary" />
              <Link
                href={pricingHref}
                className="text-sm font-semibold text-primary-500 underline underline-offset-4"
              >
                Review current pricing
              </Link>
            </div>
          </div>

          <figure
            className="overflow-hidden rounded-[30px] border border-stroke-2 bg-white p-3 shadow-[0_30px_90px_rgba(15,23,42,0.18)] dark:border-stroke-7 dark:bg-background-8"
          >
            <Image
              src="/images/marketing/showcase/manage-bookings.webp"
              alt="Schedulaa manager booking view showing appointments, providers, status, and payment state"
              width={1200}
              height={800}
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="h-auto w-full rounded-[22px]"
            />
            <figcaption className="px-3 pt-3 text-sm leading-6 text-secondary/70 dark:text-accent/70">
              The Schedulaa manager view keeps appointment, provider,
              status, and configured payment context together.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="main-container grid gap-5 md:grid-cols-3">
          {bookingSteps.map((item) => (
            <article
              key={item.title}
              className="rounded-[24px] border border-stroke-2 bg-white p-7 shadow-1 dark:border-stroke-7 dark:bg-background-8"
            >
              <h2 className="text-heading-6">{item.title}</h2>
              <p className="mt-3 leading-7">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="main-container grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <span className="badge badge-yellow-v2 mb-4">
              Services clients can understand
            </span>
            <h2>Show the work you offer before asking clients to book</h2>
            <p className="mt-5 max-w-[620px] leading-8">
              Present colour, cuts, styling, brows, lashes, and other services
              with your own descriptions and imagery. Each service can lead into
              the same connected booking experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold text-secondary dark:text-white">
              {[
                "Colour",
                "Cuts & styling",
                "Brows & lashes",
                "Consultations",
              ].map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-stroke-2 bg-white px-4 py-2 dark:border-stroke-7 dark:bg-background-8"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
          <figure className="overflow-hidden rounded-[28px] border border-stroke-2 bg-white p-3 shadow-[0_26px_70px_rgba(15,23,42,0.14)] dark:border-stroke-7 dark:bg-background-8">
            <Image
              src="/images/marketing/salon-services.webp"
              alt="Salon service scenes showing hair colour, styling, and brow care"
              width={1774}
              height={887}
              className="h-auto w-full rounded-[20px]"
            />
          </figure>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="main-container">
          <div className="mx-auto mb-12 max-w-[820px] text-center">
            <span className="badge badge-green mb-4">
              Connected salon workflow
            </span>
            <h2>From online booking to the manager schedule</h2>
            <p className="mt-4">
              Connect client booking, staff availability, configured payments,
              products, and customer records in one salon workflow.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-stroke-2 bg-white p-7 shadow-1 dark:border-stroke-7 dark:bg-background-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-500">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 text-heading-5">{item.title}</h3>
                <p className="mt-4 leading-7">{item.body}</p>
                {item.link ? (
                  <Link
                    href={item.link.href}
                    className="mt-5 inline-block font-semibold text-primary-500 underline underline-offset-4"
                  >
                    {item.link.label}
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-1 py-20 dark:bg-background-6 md:py-28">
        <div className="main-container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="badge badge-yellow-v2 mb-4">
              Manager scheduling workflow
            </span>
            <h2>Review bookings without losing customer context</h2>
            <p className="mt-5 max-w-[650px] leading-8">
              Managers can create services, connect them to eligible providers,
              publish availability, and review booked appointments in the same
              operational workspace.
            </p>
            <p className="mt-4 max-w-[650px] leading-8">
              Customers use the public flow to choose a service, provider, and
              available time. Managers retain the booking and customer history
              needed to prepare for the visit.
            </p>
          </div>
          <figure className="overflow-hidden rounded-[28px] border border-stroke-2 bg-white p-3 shadow-[0_26px_70px_rgba(15,23,42,0.14)] dark:border-stroke-7 dark:bg-background-8">
            <Image
              src="/images/marketing/showcase/service-management.webp"
              alt="Schedulaa service management view for configuring bookable services"
              width={1200}
              height={800}
              className="h-auto w-full rounded-[20px]"
            />
          </figure>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="main-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="badge badge-cyan mb-4">Pricing and setup</span>
            <h2>Choose the plan that fits your workflow</h2>
            <p className="mt-4 leading-7">
              Compare current plans and choose the setup that matches your
              salon&apos;s booking, website, and day-to-day workflow.
            </p>
            <Link
              href={pricingHref}
              className="btn btn-white btn-md mt-6 inline-flex dark:btn-transparent"
            >
              View current pricing
            </Link>
          </div>
          <div>
            <h2 className="mb-6">Beauty salon booking software FAQ</h2>
            <div className="space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[20px] border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8"
                >
                  <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-secondary dark:text-white">
                    {item.question}
                  </summary>
                  <p className="mt-4 leading-7">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="main-container">
          <div className="rounded-[30px] bg-secondary px-7 py-12 text-center text-white shadow-[0_30px_80px_rgba(15,23,42,0.2)] md:px-12 md:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/65">
              Booking + scheduling + customer workflows
            </p>
            <h2 className="mx-auto mt-4 max-w-[820px] text-white">
              See how Schedulaa fits your salon workflow
            </h2>
            <p className="mx-auto mt-4 max-w-[720px] text-white/75">
              Start a 14-day trial or request a guided demo of online booking,
              availability, and appointment management.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <StartFreeButton
                placement="salon_final_cta"
                className="btn btn-primary btn-md min-w-[210px] justify-center"
              />
              <GetDemoButton placement="salon_final_secondary" />
            </div>
            <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
              <Link href="/en/booking" className="font-semibold text-white underline underline-offset-4">
                Explore online booking
              </Link>
              <Link href="/en/marketing/clients-360" className="font-semibold text-white underline underline-offset-4">
                Explore customer management
              </Link>
              <Link href="/en/alternatives/vagaro" className="font-semibold text-white underline underline-offset-4">
                Compare salon software options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
