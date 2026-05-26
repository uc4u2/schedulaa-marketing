import Link from 'next/link';

const lastUpdated = 'May 26, 2026';

export default function RefundPolicyContent() {
  return (
    <main className="section-padding-x pb-24 pt-32 md:pt-36">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold text-secondary dark:text-white">Refund and Cancellation Policy</h1>
          <p className="text-secondary/80 dark:text-accent/75">
            Last updated: {lastUpdated}. This policy explains how refunds, cancellations, returns, and exchanges work for
            Schedulaa subscriptions and digital platform access.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Digital software delivery</h2>
          <p className="text-secondary/80 dark:text-accent/75">
            Schedulaa is a software subscription service operated by Photo Artisto Corp. After signup or purchase,
            customers receive access to Schedulaa online through their account or workspace. No physical products are
            shipped.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Returns</h2>
          <p className="text-secondary/80 dark:text-accent/75">
            Schedulaa does not accept product returns because the service provides digital software access and no physical
            goods are delivered.
          </p>
          <p className="text-secondary/80 dark:text-accent/75">
            Since Schedulaa is digital software access, there is no physical return shipping, return label, or return
            shipping fee.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Exchanges</h2>
          <p className="text-secondary/80 dark:text-accent/75">
            Schedulaa does not offer product exchanges because subscriptions, workspaces, and platform access are digital
            services rather than physical items.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Free trial</h2>
          <p className="text-secondary/80 dark:text-accent/75">
            Schedulaa may offer a free trial so customers can review the platform before continuing with a paid
            subscription.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Cancellations</h2>
          <p className="text-secondary/80 dark:text-accent/75">
            Customers may cancel their subscription through their account billing settings when available, or by
            contacting{' '}
            <a className="underline decoration-secondary/30 underline-offset-4" href="mailto:admin@schedulaa.com">
              admin@schedulaa.com
            </a>
            . Cancellation stops future billing but does not automatically refund charges already processed for the
            current billing period.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Refunds</h2>
          <p className="text-secondary/80 dark:text-accent/75">
            Subscription payments are generally non-refundable once a billing period has started, unless required by
            applicable law or approved by Schedulaa at its discretion.
          </p>
          <p className="text-secondary/80 dark:text-accent/75">
            If you believe there was a billing error, duplicate charge, or unauthorized charge, contact us as soon as
            possible so we can review the issue.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Contact</h2>
          <p className="text-secondary/80 dark:text-accent/75">
            For refund, cancellation, or billing questions, contact{' '}
            <a className="underline decoration-secondary/30 underline-offset-4" href="mailto:admin@schedulaa.com">
              admin@schedulaa.com
            </a>
            .
          </p>
        </section>

        <div className="flex gap-3">
          <Link href="/pricing" className="btn btn-primary btn-sm">
            Pricing
          </Link>
          <Link href="/terms" className="btn btn-secondary btn-sm">
            Terms
          </Link>
        </div>
      </div>
    </main>
  );
}
