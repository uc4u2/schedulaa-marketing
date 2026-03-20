'use client';

import Link from 'next/link';

import { MetricCard, MiniLinkCard, PillarCard } from '@/components/marketing/sections/EnterpriseCards';
import SectionHeading from '@/components/marketing/sections/SectionHeading';
import PageShell from '@/components/shared/layout/PageShell';
import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import StaggerGrid from '@/components/shared/motion/StaggerGrid';
import { AppLocale, withLocalePath } from '@/utils/locale';

const metricCards = [
  {
    label: 'Selling modes',
    value: '3 paths',
    detail: 'Sell physical products, digital goods, and service-linked add-ons from the same storefront.',
  },
  {
    label: 'Delivery choices',
    value: 'Pickup + ship',
    detail: 'Offer pickup, shipping, or local delivery while keeping checkout policy and shipping automation separated.',
  },
  {
    label: 'Client follow-through',
    value: 'Orders + access',
    detail: 'Clients can review product orders, delivery status, and digital access from the client dashboard.',
  },
];

const commerceCards = [
  {
    title: 'Mixed carts for services and products',
    description:
      'Let clients buy physical products, digital goods, and appointment-related add-ons in one checkout flow instead of splitting sales across separate tools.',
    href: '/booking',
    cta: 'Explore booking + checkout',
  },
  {
    title: 'Product categories, slugs, and SEO fields',
    description:
      'Organize catalog items by category, keep cleaner storefront navigation, and manage slug, meta title, and meta description fields for product pages.',
    href: '/website-builder',
    cta: 'Explore website builder',
  },
  {
    title: 'Digital goods with post-payment access',
    description:
      'Mark products as digital, map delivery rules in the digital products workspace, and support hosted files, external links, license delivery, or combined access patterns.',
    href: '/features',
    cta: 'Explore platform features',
  },
  {
    title: 'EasyPost shipping automation',
    description:
      'Configure shipping policy globally, connect EasyPost, fetch rates, buy labels, and keep per-order shipment actions inside the manager order workflow.',
    href: '/docs',
    cta: 'Explore docs',
  },
  {
    title: 'Client dashboard order history',
    description:
      'Clients can review order status, delivery method, shipment data, and digital-access outcomes from the same account area where they manage bookings.',
    href: '/client/support',
    cta: 'Explore support',
  },
  {
    title: 'Inventory, refunds, and fulfillment controls',
    description:
      'Track stock, flag low inventory, prevent negative inventory, and keep refund or restock actions tied to auditable product-order events.',
    href: '/pricing',
    cta: 'See pricing',
  },
];

const controlCards = [
  {
    title: 'Manager product workspace',
    body:
      'Create products, assign categories, control visibility, manage inventory thresholds, and upload product images from one product management area.',
    points: [
      'Category field for storefront grouping and filtering.',
      'SEO fields for public product pages.',
      'Digital product flag and delivery overrides per item.',
    ],
  },
  {
    title: 'Delivery setup and EasyPost policy',
    body:
      'Separate delivery methods shown at checkout from EasyPost automation settings so teams can keep checkout policy clear while still automating shipping operations.',
    points: [
      'Pickup, shipping, and local delivery controls.',
      'EasyPost API key, origin settings, and connection test.',
      'Product-level delivery override as an exception layer.',
    ],
  },
  {
    title: 'Digital products workspace',
    body:
      'Map digital products to hosted files, external links, access codes, license rules, and access audit records without mixing those rules into physical-product shipping logic.',
    points: [
      'Hosted file, external link, and license delivery modes.',
      'Download/access policy controls.',
      'License and access audit views for support and operations.',
    ],
  },
  {
    title: 'Order operations and audit trail',
    body:
      'Keep fulfillment, refund, shipment, and exception handling inside manager product orders so support and operations teams see the same source of truth.',
    points: [
      'Timeline events and exception-aware order actions.',
      'Refund/restock handling tied to product orders.',
      'Shipment summary and label flow when EasyPost is enabled.',
    ],
  },
];

const faqCards = [
  {
    title: 'Can Schedulaa sell digital goods and physical products?',
    description:
      'Yes. The product catalog supports both physical and digital items, with separate delivery handling for shipping and post-payment digital access.',
  },
  {
    title: 'Do you support shipping automation with EasyPost?',
    description:
      'Yes. Teams can connect EasyPost, test the API key, load shipping rates, purchase labels, and keep shipment actions on the order record.',
  },
  {
    title: 'Can clients see their orders after checkout?',
    description:
      'Yes. Client order history is available in the dashboard, including order summary, delivery method, fulfillment state, and shipment details where applicable.',
  },
  {
    title: 'Can product categories and SEO fields be managed?',
    description:
      'Yes. Products support categories, slugs, meta title, and meta description fields so storefront items are easier to organize and optimize.',
  },
];

type CommercePlatformPageProps = {
  locale: AppLocale;
};

export default function CommercePlatformPage({ locale }: CommercePlatformPageProps) {
  return (
    <PageShell>
      <AnimatedSection>
        <section className="premium-card rounded-[24px] p-8 dark:border-stroke-7 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">Commerce & Delivery</p>
          <h1 className="mt-5 max-w-[860px]">
            eCommerce for services, physical products, and digital goods in one operating system.
          </h1>
          <p className="mt-4 max-w-[920px] text-tagline-1 text-secondary/70 dark:text-accent/70">
            Schedulaa now supports product categories, digital goods, EasyPost shipping automation, client order history,
            and mixed checkout flows so service businesses can sell more without bolting on a separate store stack.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={withLocalePath('/pricing', locale)} className="btn btn-primary hover:btn-secondary dark:hover:btn-accent">
              View pricing
            </Link>
            <Link href={withLocalePath('/demo', locale)} className="btn btn-primary-v2 dark:btn-transparent">
              Schedule demo
            </Link>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section>
          <SectionHeading
            eyebrow="Commerce overview"
            title="Sell, fulfill, and support orders without leaving the platform"
            description="The commerce stack is built for operational teams that need product sales, shipping, digital delivery, and client order visibility to stay connected."
          />
          <StaggerGrid className="mt-6 grid gap-4 md:grid-cols-3">
            {metricCards.map((item) => (
              <div key={item.label} data-stagger-item>
                <MetricCard {...item} />
              </div>
            ))}
          </StaggerGrid>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section>
          <SectionHeading
            eyebrow="Commerce workflows"
            title="Capabilities already shipped in production"
            description="This page reflects the current product stack: mixed carts, digital delivery, EasyPost integration, product categories, and client-facing order history."
          />
          <StaggerGrid className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {commerceCards.map((item) => (
              <div key={item.title} data-stagger-item>
                <PillarCard
                  title={item.title}
                  description={item.description}
                  href={withLocalePath(item.href, locale)}
                  cta={item.cta}
                />
              </div>
            ))}
          </StaggerGrid>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section>
          <SectionHeading
            eyebrow="Manager controls"
            title="Keep product policy, shipping, and digital access separated"
            description="Schedulaa keeps checkout delivery policy, EasyPost automation, digital delivery rules, and order actions distinct so teams do not lose operational clarity."
          />
          <StaggerGrid className="mt-6 grid gap-4 md:grid-cols-2">
            {controlCards.map((item) => (
              <article
                key={item.title}
                data-stagger-item
                className="premium-card rounded-[20px] p-6 dark:border-stroke-7 dark:bg-background-8"
              >
                <h3 className="premium-heading text-[1.26rem] leading-[1.2] font-semibold">{item.title}</h3>
                <p className="mt-3 text-tagline-1 text-secondary/72 dark:text-accent/72">{item.body}</p>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="text-tagline-2 text-secondary/72 dark:text-accent/72">
                      • {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </StaggerGrid>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section>
          <SectionHeading
            eyebrow="Connected stack"
            title="Commerce stays tied to booking, websites, docs, and support"
            description="This is not a bolt-on store. The commerce layer shares context with your booking pages, website builder, delivery setup, and client dashboard."
          />
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <MiniLinkCard
              title="Booking + mixed checkout"
              description="See how products and services can live in the same customer flow."
              href={withLocalePath('/booking', locale)}
            />
            <MiniLinkCard
              title="Website builder + storefront"
              description="Launch branded public pages that support both services and product sales."
              href={withLocalePath('/website-builder', locale)}
            />
            <MiniLinkCard
              title="Operational docs"
              description="Review setup guidance for delivery policy, shipping, and connected workflows."
              href={withLocalePath('/docs', locale)}
            />
            <MiniLinkCard
              title="Talk to rollout team"
              description="Plan your commerce rollout around fulfillment, shipping, and digital delivery."
              href={withLocalePath('/contact', locale)}
            />
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section>
          <SectionHeading
            eyebrow="Commerce questions"
            title="Common questions about products, shipping, and digital access"
            description="Answers based on what Schedulaa delivers in production today."
          />
          <StaggerGrid className="mt-6 grid gap-4 md:grid-cols-2">
            {faqCards.map((item) => (
              <article
                key={item.title}
                data-stagger-item
                className="premium-card rounded-[20px] p-6 dark:border-stroke-7 dark:bg-background-8"
              >
                <h3 className="premium-heading text-[1.18rem] font-semibold">{item.title}</h3>
                <p className="mt-3 text-tagline-1 text-secondary/72 dark:text-accent/72">{item.description}</p>
              </article>
            ))}
          </StaggerGrid>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="premium-card rounded-[24px] p-8 dark:border-stroke-7 dark:bg-background-8 md:p-10">
          <SectionHeading
            eyebrow="Next step"
            title="Need one commerce stack for services, shipping, and digital delivery?"
            description="Use the same platform for product catalog, checkout, delivery policy, shipment automation, and client-facing order follow-up."
            className="max-w-none"
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={withLocalePath('/demo', locale)} className="btn btn-primary hover:btn-secondary dark:hover:btn-accent">
              Talk to rollout team
            </Link>
            <Link href={withLocalePath('/pricing', locale)} className="btn btn-primary-v2 dark:btn-transparent">
              See pricing
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </PageShell>
  );
}
