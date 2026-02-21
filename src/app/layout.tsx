import LocaleProvider from '@/components/shared/LocaleProvider';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import SchedulaaAssistant from '@/components/shared/assistant/SchedulaaAssistant';
import MotionProvider from '@/components/shared/motion/MotionProvider';
import { interTight } from '@/utils/font';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { ReactNode, Suspense } from 'react';
import './globals.css';
import '@/vendor-forex/src/app/globals.css';

const SITE_URL = 'https://www.schedulaa.com';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const h = await headers();
  const canonicalPathRaw = h.get('x-canonical-path') || '/';
  const canonicalPath = canonicalPathRaw === '/' ? '' : canonicalPathRaw;
  const canonical = `${SITE_URL}/${locale}${canonicalPath}`;
  const languagePath = canonicalPath || '';

  return {
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    icons: defaultMetadata.icons,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en${languagePath}`,
        fa: `${SITE_URL}/fa${languagePath}`,
        ru: `${SITE_URL}/ru${languagePath}`,
        zh: `${SITE_URL}/zh${languagePath}`,
        es: `${SITE_URL}/es${languagePath}`,
        fr: `${SITE_URL}/fr${languagePath}`,
        de: `${SITE_URL}/de${languagePath}`,
        ar: `${SITE_URL}/ar${languagePath}`,
        pt: `${SITE_URL}/pt${languagePath}`,
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const locale = await getServerLocale();
  const dir = locale === 'fa' || locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`${interTight.variable} antialiased`}>
        <LocaleProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <Suspense>
              <MotionProvider>
                <Navbar />
                {children}
                <Footer />
                <SchedulaaAssistant />
              </MotionProvider>
            </Suspense>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
