import Link from 'next/link';
import Script from 'next/script';

import BookingCardGrid from './BookingCardGrid';
import BookingShell from './BookingShell';

type FaqItem = {
  question: string;
  answer: string;
};

type IndustryBookingTemplateProps = {
  overline: string;
  title: string;
  intro: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
  faqs: FaqItem[];
  compareLinks: Array<{ href: string; label: string }>;
  faqJsonLd?: Record<string, unknown>;
};

export default function IndustryBookingTemplate({
  overline,
  title,
  intro,
  sections,
  faqs,
  compareLinks,
  faqJsonLd,
}: IndustryBookingTemplateProps) {
  return (
    <>
      {faqJsonLd ? (
        <Script
          id="booking-faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
      <BookingShell
        badge={overline}
        title={title}
        subtitle={intro}
        primaryCta={{ label: 'View pricing', href: '/pricing' }}
        secondaryCta={{ label: 'Explore features', href: '/features' }}
        menuItems={[
          { id: 'overview', label: 'Overview' },
          { id: 'sections', label: 'How it works' },
          { id: 'compare', label: 'Compare' },
          { id: 'faq', label: 'FAQ' },
        ]}
      >
        <BookingCardGrid
          id="sections"
          heading="Operational sections"
          cards={sections.map((section) => ({
            title: section.heading,
            body: section.paragraphs.join(' '),
          }))}
        />

        <section id="compare" className="bg-background-1 dark:bg-background-6 rounded-[20px] p-6 sm:p-8">
          <h2>Compare before you decide</h2>
          <p className="mt-3 text-secondary/70 dark:text-accent/70">
            If you are evaluating options, review side-by-side comparisons before committing to a migration timeline.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {compareLinks.map((link) => (
              <Link key={link.href} href={link.href} className="btn btn-white btn-sm hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section id="faq" className="bg-background-1 dark:bg-background-6 rounded-[20px] p-6 sm:p-8">
          <h2>Frequently asked questions</h2>
          <div className="mt-6 grid grid-cols-12 gap-5">
            {faqs.map((faq) => (
              <article key={faq.question} className="col-span-12 rounded-[16px] border border-stroke-2 p-5 dark:border-stroke-7 md:col-span-6">
                <h3 className="text-heading-6">{faq.question}</h3>
                <p className="mt-2 text-secondary/72 dark:text-accent/72">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </BookingShell>
    </>
  );
}

