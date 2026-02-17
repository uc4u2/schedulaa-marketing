import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import LocaleProvider from '@/components/shared/LocaleProvider';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import SchedulaaAssistant from '@/components/shared/assistant/SchedulaaAssistant';
import { interTight } from '@/utils/font';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { ReactNode, Suspense } from 'react';
import './globals.css';

const SITE_URL = 'https://www.schedulaa.com';

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const locale = h.get('x-locale') === 'fa' ? 'fa' : 'en';
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
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interTight.variable} antialiased`}>
        <LocaleProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <Suspense>
              <SmoothScrollProvider>
                <Navbar />
                {children}
                <Footer />
                <SchedulaaAssistant />
              </SmoothScrollProvider>
            </Suspense>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
