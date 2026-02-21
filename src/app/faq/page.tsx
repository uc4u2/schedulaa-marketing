import Contact from '@/components/faq/Contact';
import FaqTab from '@/components/faq/FaqTab';
import { getFaqCopy } from '@/components/faq/localeCopy';
import Link from 'next/link';
import { defaultMetadata } from '@/utils/generateMetaData';
import { AppLocale, withLocalePath } from '@/utils/locale';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';

const titleByLocale: Record<string, string> = {
  fa: 'سوالات متداول | Schedulaa',
  ru: 'FAQ | Schedulaa',
  zh: '常见问题 | Schedulaa',
  es: 'Preguntas frecuentes | Schedulaa',
  fr: 'FAQ | Schedulaa',
  de: 'FAQ | Schedulaa',
  ar: 'الاسئلة الشائعة | Schedulaa',
  pt: 'Perguntas frequentes | Schedulaa',
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  return {
    ...defaultMetadata,
    title: titleByLocale[locale] || 'FAQ | Schedulaa',
  };
}

const FAQ = async () => {
  const locale = await getServerLocale();
  const copy = getFaqCopy(locale);
  const contactPath = withLocalePath('/contact', locale as AppLocale);
  const registerPath = withLocalePath('/register', locale as AppLocale);

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <FaqTab locale={locale} />
      <Contact locale={locale} />
      <section className="dark:bg-background-6 bg-white py-14">
        <div className="main-container text-center">
          <span className="badge badge-cyan mb-4 inline-block">{copy.cta.badge}</span>
          <h2 className="mb-3">{copy.cta.title}</h2>
          <p className="mx-auto mb-6 max-w-[720px]">{copy.cta.description}</p>
          <div className="flex items-center justify-center gap-3">
            <Link href={registerPath} className="btn btn-primary btn-md">
              {copy.cta.button}
            </Link>
            <Link href={contactPath} className="btn btn-white btn-md dark:btn-white-dark">
              {copy.contact.badge}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
