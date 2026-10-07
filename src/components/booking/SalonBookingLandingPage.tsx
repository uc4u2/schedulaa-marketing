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
  "A beautiful salon website with online booking";
export const salonLandingProblem =
  "Missed walk-ins, after-hours bookings, and an Instagram-only presence leave clients with nowhere reliable to book.";
export const salonBookingPaymentClaim =
  "When Stripe and online payments are configured, clients can pay online or securely save a card for later manager-initiated charging.";
export const salonBookingPaymentFaqAnswer =
  "Yes, when Stripe and the applicable online-payment settings are configured. Supported booking modes include online payment and card-on-file workflows.";

const problems = [
  {
    title: "Missed walk-ins",
    body: "When the chair is full or the phone is busy, the next client still needs a way to claim an open time.",
  },
  {
    title: "After-hours bookings",
    body: "A public booking page stays available after the salon closes, so clients can choose a published time.",
  },
  {
    title: "Instagram-only presence",
    body: "A Schedulaa website gives services and online booking a home you publish, instead of only a social profile.",
  },
];
const startFreeHref = buildAppUrl("/register", {
  returnTo: marketingReturnTo("en", "/booking/salon"),
});

const capabilities = [
  {
    eyebrow: "Branded website",
    title: "Show services on a site you control",
    body: "Build and publish a responsive public website with your service pages, brand styling, booking links, and a custom domain when configured for the workspace.",
    link: { href: "/en/website-builder", label: "Explore the website builder" },
  },
  {
    eyebrow: "Online booking",
    title: "Let clients choose a service, provider, and available time",
    body: "Publish services and live availability, let clients select an appointment, and keep confirmations and supported rescheduling flows connected to the booking record.",
    link: { href: "/en/booking", label: "See the booking workflow" },
  },
  {
    eyebrow: "Booking payments",
    title: "Use the payment mode that fits the service",
    body: salonBookingPaymentClaim,
  },
  {
    eyebrow: "Staff and availability",
    title: "Keep appointment choices aligned with the team calendar",
    body: "Assign services to the people who provide them, manage working availability, and give managers a shared view of the schedule without maintaining a separate booking calendar.",
  },
  {
    eyebrow: "Products and add-ons",
    title: "Sell services and retail items from the same business website",
    body: "Manage products and inventory, sell retail items through your cart and checkout, and offer service add-ons inside the booking experience.",
  },
  {
    eyebrow: "Customer management",
    title: "Keep client and appointment context together",
    body: "Maintain customer records and appointment history alongside the operational workflows your team uses to schedule, serve, and follow up with clients.",
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

const GetDemoButton = ({ placement }: { placement: string }) => (
  <button
    type="button"
    className="btn btn-primary btn-md min-w-[180px] justify-center"
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
    Start free
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

      <section className="relative pt-[130px] pb-20 md:pt-[180px] md:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.16),transparent_38%),radial-gradient(circle_at_85%_30%,rgba(249,115,22,0.12),transparent_34%)]" />
        <div className="main-container relative grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <span className="badge badge-cyan mb-5">
              Salon website and booking
            </span>
            <h1 className="max-w-[720px] text-balance">
              {salonLandingHeadline}
            </h1>
            <p className="mt-6 max-w-[680px] text-lg leading-8 text-secondary/72 dark:text-accent/72">
              {salonLandingProblem}
            </p>
            <p className="mt-4 max-w-[680px] leading-8 text-secondary/72 dark:text-accent/72">
              Schedulaa publishes a service website where clients can see
              services and book an available appointment online.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <GetDemoButton placement="salon_hero" />
              <Link
                href={pricingHref}
                className="text-sm font-semibold text-primary-500 underline underline-offset-4"
              >
                Review current pricing
              </Link>
            </div>
            <div className="mt-4">
              <StartFreeButton
                placement="salon_hero_secondary"
                className="text-sm font-semibold text-primary-500 underline underline-offset-4"
              />
            </div>
          </div>

          <figure
            className="relative min-h-[440px] overflow-hidden rounded-[30px] shadow-[0_30px_90px_rgba(15,23,42,0.24)] sm:min-h-[520px] lg:min-h-[580px]"
            aria-label="Example salon website front page"
          >
            <Image
              src="/images/marketing/salon-studio-hero.webp"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover object-center"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(22,15,12,0.88)_0%,rgba(22,15,12,0.48)_48%,rgba(22,15,12,0.18)_100%)]"
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex flex-col p-5 text-white sm:p-7">
              <div className="flex items-start justify-between gap-4 border-b border-white/20 pb-4">
                <div>
                  <p className="font-serif text-lg font-semibold uppercase tracking-[0.16em] text-white sm:text-xl">
                    Avery Studio
                  </p>
                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.26em] text-amber-200/90 sm:text-[10px]">
                    Hair · Beauty · Toronto
                  </p>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-xs">
                  <span className="hidden text-white/80 xl:inline">
                    Services
                  </span>
                  <span className="hidden text-white/80 xl:inline">
                    The studio
                  </span>
                  <span className="hidden text-white/80 2xl:inline">
                    Contact
                  </span>
                  <span className="border border-amber-300/80 px-3 py-2 text-amber-100 sm:px-4">
                    Book consultation
                  </span>
                </div>
              </div>

              <div className="mt-auto max-w-[500px] pb-4 sm:pb-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-200">
                  Private beauty studio
                </p>
                <p className="mt-4 font-serif text-4xl leading-[0.98] font-medium text-white sm:text-5xl lg:text-[56px]">
                  Beauty, made personal.
                </p>
                <p className="mt-5 max-w-[430px] text-sm leading-6 text-white/82 sm:text-base sm:leading-7">
                  Thoughtful colour, styling, and beauty appointments shaped
                  around you.
                </p>
                <div className="mt-7 flex flex-wrap gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-xs">
                  <span className="bg-amber-300 px-5 py-3 text-stone-950">
                    Book an appointment
                  </span>
                  <span className="border border-white/60 px-5 py-3 text-white">
                    Explore services
                  </span>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="main-container grid gap-5 md:grid-cols-3">
          {problems.map((item) => (
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
            <h2>From public website to appointment operations</h2>
            <p className="mt-4">
              Bring your website, online booking, staff availability, payments,
              products, and customer records into one connected salon workflow.
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
              Current booking experience
            </span>
            <h2>Move from a service page to a real available time</h2>
            <p className="mt-5 max-w-[650px] leading-8">
              Clients can select a service, review the eligible provider, and
              choose from the availability published by the business. The
              appointment stays connected to the customer and team schedule.
            </p>
            <p className="mt-4 max-w-[650px] leading-8">
              Clients see clear appointment choices without the back-and-forth
              messages that slow down a busy salon day.
            </p>
          </div>
          <figure className="overflow-hidden rounded-[28px] border border-stroke-2 bg-white p-3 shadow-[0_26px_70px_rgba(15,23,42,0.14)] dark:border-stroke-7 dark:bg-background-8">
            <Image
              src="/images/marketing/salon-booking-avery-morgan.webp"
              alt="Schedulaa booking availability for salon provider Avery Morgan"
              width={1423}
              height={1105}
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
            <h2 className="mb-6">Salon website and booking FAQ</h2>
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
              Website + booking + business workflows
            </p>
            <h2 className="mx-auto mt-4 max-w-[820px] text-white">
              See a beautiful salon website with online booking
            </h2>
            <p className="mx-auto mt-4 max-w-[720px] text-white/75">
              Tell us where to reach you and we’ll follow up with a live look at
              a website clients can book on.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <GetDemoButton placement="salon_final_cta" />
              <StartFreeButton
                placement="salon_final_secondary"
                className="text-sm font-semibold text-white underline underline-offset-4"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
