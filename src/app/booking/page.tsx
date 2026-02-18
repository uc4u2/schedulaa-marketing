import TemplateProcessLayout from '@/components/booking-template/TemplateProcessLayout';
import TemplateServicesLayout from '@/components/booking-template/TemplateServicesLayout';
import { bookingPages } from '@/legacy-content/booking/config';

export default function BookingPage() {
  const page = bookingPages.hub;

  return (
    <>
      <TemplateServicesLayout
        hero={page.hero}
        featuresHeading={page.featuresHeading}
        featuresTitle={page.featuresTitle}
        featuresIntro={page.featuresIntro}
        features={page.features.map((item: any) => ({
          overline: item.label,
          title: item.title,
          body: item.description,
          points: item.linkLabel ? [item.linkLabel] : undefined,
          link: item.link ? { label: item.linkLabel || 'Read more', href: item.link } : undefined,
        }))}
        highlights={page.highlights.map((item: any) => ({
          overline: item.overline,
          title: item.title,
          body: item.body,
          points: item.points,
          link: item.links?.[0],
        }))}
        useCasesTitle="Industry booking pages"
        useCasesIntro="Explore booking workflows tailored for common service models."
        useCases={page.secondaryLinks.map((item: any) => item.label)}
        nextLinks={page.secondaryLinks}
        cta={page.cta}
      />

      <TemplateProcessLayout
        process={{
          overline: page.howItWorks.overline,
          title: page.howItWorks.title,
          intro: page.howItWorks.intro,
          steps: page.howItWorks.steps,
        }}
        faq={{
          heading: page.faqHeading,
          title: page.faqTitle,
          intro: page.faqIntro,
          items: page.faq,
        }}
        cta={{
          overline: page.cta?.overline,
          title: page.cta?.title,
          body: page.cta?.body,
          primaryLabel: page.cta?.primary?.label,
        }}
      />
    </>
  );
}
