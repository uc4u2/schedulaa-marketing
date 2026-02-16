import Link from 'next/link';

type FaqItem = {
  question: string;
  answer: string;
};

type IndustryBookingLandingProps = {
  overline: string;
  title: string;
  intro: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
  faqs: FaqItem[];
  compareLinks: Array<{ href: string; label: string }>;
};

export default function IndustryBookingLanding({
  overline,
  title,
  intro,
  sections,
  faqs,
  compareLinks,
}: IndustryBookingLandingProps) {
  return (
    <main className="section-padding-x overflow-hidden pb-24 pt-20">
      <div className="mx-auto max-w-4xl">
        <p className="badge badge-yellow-v2">{overline}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-secondary dark:text-white">{title}</h1>
        <p className="mt-5 text-lg text-secondary/75 dark:text-accent/70">{intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/pricing" className="btn btn-primary btn-md">
            View pricing
          </Link>
          <Link href="/features" className="btn btn-secondary btn-md">
            Explore features
          </Link>
          <Link href="/booking" className="btn btn-outline btn-md">
            Back to booking hub
          </Link>
        </div>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.heading} className="rounded-2xl border border-stroke-2 p-6 dark:border-stroke-7">
              <h2 className="text-2xl font-semibold text-secondary dark:text-white">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-secondary/80 dark:text-accent/75">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-2xl border border-stroke-2 p-6 dark:border-stroke-7">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Compare before you decide</h2>
          <p className="mt-3 text-secondary/75 dark:text-accent/70">
            If you are evaluating options, review side-by-side comparisons before committing to a migration timeline.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {compareLinks.map((link) => (
              <Link key={link.href} href={link.href} className="btn btn-outline btn-sm">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-stroke-2 p-6 dark:border-stroke-7">
          <h2 className="text-2xl font-semibold text-secondary dark:text-white">Frequently asked questions</h2>
          <div className="mt-6 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold text-secondary dark:text-white">{faq.question}</h3>
                <p className="mt-2 text-secondary/75 dark:text-accent/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
