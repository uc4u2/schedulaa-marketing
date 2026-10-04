import Link from "next/link";
import type { ReactNode } from "react";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type RelatedLink = {
  href: string;
  label: string;
  primary?: boolean;
};

type LegalDocumentLayoutProps = {
  title: string;
  summary: string;
  effectiveDate: string;
  version: string;
  sections: LegalSection[];
  relatedLinks: RelatedLink[];
};

function SectionNavigation({ sections }: { sections: LegalSection[] }) {
  return (
    <ol className="space-y-1.5 text-sm text-secondary/70 dark:text-accent/70">
      {sections.map((section, index) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="block rounded-lg px-3 py-2 transition-colors hover:bg-background-2 hover:text-secondary dark:hover:bg-background-6 dark:hover:text-white"
          >
            {index + 1}. {section.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default function LegalDocumentLayout({
  title,
  summary,
  effectiveDate,
  version,
  sections,
  relatedLinks,
}: LegalDocumentLayoutProps) {
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
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-7 text-secondary/80 dark:text-accent/75">
                {summary}
              </p>
            </div>

            <dl className="grid gap-4 rounded-[20px] border border-stroke-2 bg-white/80 p-5 text-sm dark:border-stroke-7 dark:bg-background-8/80">
              <div>
                <dt className="font-medium text-secondary/60 dark:text-accent/60">
                  Effective date
                </dt>
                <dd className="mt-1 font-semibold text-secondary dark:text-white">
                  {effectiveDate}
                </dd>
              </div>
              <div className="border-t border-stroke-2 pt-4 dark:border-stroke-7">
                <dt className="font-medium text-secondary/60 dark:text-accent/60">
                  Published by
                </dt>
                <dd className="mt-1 font-semibold text-secondary dark:text-white">
                  Photo Artisto Corp.
                </dd>
              </div>
              <div className="border-t border-stroke-2 pt-4 dark:border-stroke-7">
                <dt className="font-medium text-secondary/60 dark:text-accent/60">
                  Document version
                </dt>
                <dd className="mt-1 font-semibold text-secondary dark:text-white">
                  {version}
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
              aria-label={`${title} sections`}
              className="mt-4 border-t border-stroke-2 pt-3 dark:border-stroke-7"
            >
              <SectionNavigation sections={sections} />
            </nav>
          </details>

          <aside className="hidden lg:sticky lg:top-32 lg:block">
            <nav
              aria-label={`${title} sections`}
              className="rounded-[24px] border border-stroke-2 bg-white p-5 dark:border-stroke-7 dark:bg-background-8"
            >
              <p className="mb-4 text-sm font-semibold tracking-[0.14em] text-secondary uppercase dark:text-white">
                On this page
              </p>
              <SectionNavigation sections={sections} />
            </nav>
          </aside>

          <article className="space-y-6">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-32 space-y-4 rounded-[24px] border border-stroke-2 bg-white p-6 shadow-sm md:p-8 dark:border-stroke-7 dark:bg-background-8"
              >
                <h2 className="text-2xl font-semibold text-secondary dark:text-white">
                  {index + 1}. {section.title}
                </h2>
                {section.content}
              </section>
            ))}

            <nav
              aria-label="Related legal documents"
              className="flex flex-wrap gap-3 pt-2"
            >
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`btn ${link.primary ? "btn-primary" : "btn-secondary"} btn-sm`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </article>
        </div>
      </div>
    </main>
  );
}
