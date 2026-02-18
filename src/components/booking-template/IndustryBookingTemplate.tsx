import Script from 'next/script';
import TemplateProcessLayout from './TemplateProcessLayout';
import TemplateServicesLayout from './TemplateServicesLayout';

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

      <TemplateServicesLayout
        hero={{
          badge: overline,
          title,
          subtitle: intro,
          primaryCta: { label: 'View pricing', href: '/pricing' },
          secondaryCta: { label: 'Explore features', href: '/features' },
        }}
        featuresTitle="Operational sections"
        features={sections.map((section) => ({
          overline,
          title: section.heading,
          body: section.paragraphs.join(' '),
        }))}
        highlights={[
          {
            overline: 'Compare',
            title: 'Compare before you decide',
            body: 'If you are evaluating options, review side-by-side comparisons before committing to a migration timeline.',
          },
        ]}
        compareLinks={compareLinks}
        useCasesTitle="Compare links"
        useCasesIntro="Evaluate Schedulaa against alternatives relevant to your team."
        useCases={compareLinks.map((item) => item.label)}
        nextLinks={compareLinks}
      />

      <TemplateProcessLayout
        process={{
          overline: 'How it works',
          title: 'Operational rollout process',
          intro: 'Start with booking visibility, align staff flow, then standardize daily execution.',
          steps: sections.slice(0, 3).map((section) => ({
            title: section.heading,
            description: section.paragraphs[0] || '',
          })),
        }}
        faq={{
          heading: 'FAQ',
          title: 'Frequently asked questions',
          items: faqs,
        }}
      />
    </>
  );
}
