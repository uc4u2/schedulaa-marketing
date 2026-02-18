import Link from 'next/link';
import BookingCardGrid from '@/components/booking-template/BookingCardGrid';
import BookingShell from '@/components/booking-template/BookingShell';
import BookingSteps from '@/components/booking-template/BookingSteps';
import { bookingPages } from '@/legacy-content/booking/config';

export default function BookingPage() {
  const page = bookingPages.hub;
  const menuItems = [
    { id: 'features', label: 'Features' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'steps', label: 'Process' },
    { id: 'faq', label: 'FAQ' },
    { id: 'next', label: 'Next links' },
  ];

  return (
    <BookingShell
      badge={page.hero.badge}
      title={page.hero.title}
      subtitle={page.hero.subtitle}
      bullets={page.hero.bullets}
      primaryCta={page.hero.primaryCta}
      secondaryCta={page.hero.secondaryCta}
      menuItems={menuItems}
    >
      <BookingCardGrid
        id="features"
        heading={page.featuresTitle}
        intro={page.featuresIntro}
        cards={page.features.map((item: any) => ({
          overline: item.label,
          title: item.title,
          body: item.description,
          points: item.link ? [item.linkLabel] : [],
        }))}
      />

      <BookingCardGrid
        id="highlights"
        heading="Highlights"
        cards={page.highlights.map((item: any) => ({
          overline: item.overline,
          title: item.title,
          body: item.body,
          points: item.points,
        }))}
      />

      <BookingSteps id="steps" heading={page.howItWorks.title} intro={page.howItWorks.intro} steps={page.howItWorks.steps} />

      <BookingCardGrid
        id="faq"
        heading={page.faqTitle}
        intro={page.faqIntro}
        cards={page.faq.map((faq: any) => ({
          title: faq.question,
          body: faq.answer,
        }))}
      />

      <section id="next" className="bg-background-1 dark:bg-background-6 rounded-[20px] p-6 sm:p-8">
        <h2>Industry booking pages</h2>
        <p className="mt-3 text-secondary/75 dark:text-accent/70">
          Explore booking workflows tailored for common service models.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/booking/salon" className="btn btn-white btn-sm hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">Salon booking</Link>
          <Link href="/booking/spa" className="btn btn-white btn-sm hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">Spa booking</Link>
          <Link href="/booking/tutor" className="btn btn-white btn-sm hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">Tutor booking</Link>
          <Link href="/booking/doctor" className="btn btn-white btn-sm hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">Doctor booking</Link>
        </div>
      </section>
    </BookingShell>
  );
}
