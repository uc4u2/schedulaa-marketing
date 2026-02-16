import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import { DEFAULT_LOCALE, isSupportedLocale } from '@/utils/locale';
import { interTight } from '@/utils/font';
import { generateMetadata } from '@/utils/generateMetaData';
import enMessages from '@/i18n/messages/en.json';
import faMessages from '@/i18n/messages/fa.json';
import { NextIntlClientProvider } from 'next-intl';
import { cookies } from 'next/headers';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  ...generateMetadata(),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value;
  const locale = isSupportedLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;
  const messages = locale === 'fa' ? faMessages : enMessages;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${interTight.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <Suspense>
              <SmoothScrollProvider>
                <Navbar />
                {children}
                <Footer />
              </SmoothScrollProvider>
            </Suspense>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
