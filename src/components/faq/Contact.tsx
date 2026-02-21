import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import { AppLocale } from '@/utils/locale';
import { getFaqCopy } from './localeCopy';

const Contact = ({ locale }: { locale: AppLocale | string | null | undefined }) => {
  const copy = getFaqCopy(locale).contact;
  return (
    <section className="pt-[100px] pb-[200px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading  */}
          <div className="main-w-[850px] mx-auto space-y-5 text-center md:w-full">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-cyan">{copy.badge}</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.3}>
                <h2 id="contact-heading">{copy.title}</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="mx-auto max-w-[442px] sm:w-full">{copy.subtitle}</p>
              </RevealAnimation>
            </div>
          </div>
          {/* form */}
          <RevealAnimation delay={0.5}>
            <div className="contact-form dark:bg-background-6 mx-auto max-w-[850px] rounded-[20px] bg-white p-5 sm:p-[42px] md:w-full">
              <form action="/" method="POST">
                {/* full name */}
                <div className="mb-8 space-y-2">
                  <label
                    htmlFor="fullname"
                    className="text-tagline-1 text-secondary dark:text-accent block font-medium">
                    {copy.fullName}
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder={copy.fullNamePlaceholder}
                    required
                    autoComplete="name"
                    className="shadow-1 dark:text-accent dark:bg-background-6 border-stroke-3 dark:border-stroke-6 bg-background-1 text-tagline-1 dark:placeholder:text-accent/60 placeholder:text-secondary/60 focus:border-primary-500 placeholder:text-tagline-1 w-full rounded-full border px-[18px] py-2 font-normal placeholder:font-normal focus:outline-none"
                  />
                </div>
                {/* email */}
                <div className="mb-8 space-y-2">
                  <label htmlFor="email" className="text-tagline-1 text-secondary dark:text-accent block font-medium">
                    {copy.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={copy.emailPlaceholder}
                    required
                    autoComplete="email"
                    className="dark:text-accent dark:bg-background-6 border-stroke-3 dark:border-stroke-6 bg-background-1 text-tagline-1 dark:placeholder:text-accent/60 placeholder:text-accent/60 focus:border-primary-500 placeholder:text-tagline-1 w-full rounded-full border px-[18px] py-2 font-normal placeholder:font-normal focus:outline-none"
                  />
                </div>
                {/* message */}
                <div className="mb-4 space-y-2">
                  <label htmlFor="message" className="text-tagline-1 text-secondary dark:text-accent block font-medium">
                    {copy.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={copy.messagePlaceholder}
                    required
                    className="dark:bg-background-6 dark:text-accent border-stroke-3 dark:border-stroke-6 bg-background-1 text-tagline-1 dark:placeholder:text-accent/60 placeholder:text-secondary/60 focus:border-primary-500 placeholder:text-tagline-1 w-full rounded-xl border px-[18px] py-2 font-normal placeholder:font-normal focus:outline-none"
                    defaultValue={''}
                  />
                </div>
                {/* terms checkbox */}
                <fieldset className="mb-4 flex items-center gap-2">
                  <label htmlFor="terms" className="flex items-center gap-x-3">
                    <input id="terms" type="checkbox" className="peer sr-only" required />
                    <span className="border-stroke-3 dark:border-stroke-7 after:bg-primary-500 peer-checked:border-primary-500 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                  </label>
                  <label
                    htmlFor="terms"
                    className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                    {copy.agreePrefix}{' '}
                    <Link href="/terms" className="text-primary-500 text-tagline-3 underline">
                      {copy.agreeLink}
                    </Link>
                  </label>
                </fieldset>
                {/* submit button */}
                <button
                  type="submit"
                  className="btn btn-md btn-secondary dark:btn-accent hover:btn-primary w-full first-letter:uppercase before:content-none">
                  {copy.submit}
                </button>
              </form>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;
