import LocaleProvider from '@/components/shared/LocaleProvider';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import Footer from '@/components/shared/footer/Footer';
import MarketingLeadWidget from '@/components/shared/marketingLead/MarketingLeadWidget';
import GoogleAnalytics from '@/components/shared/GoogleAnalytics';
import MetaPixel from '@/components/shared/MetaPixel';
import Navbar from '@/components/shared/navbar/Navbar';
import SchedulaaAssistant from '@/components/shared/assistant/SchedulaaAssistant';
import MotionProvider from '@/components/shared/motion/MotionProvider';
import { interTight } from '@/utils/font';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { ReactNode, Suspense } from 'react';
import { getSeoLanguageAlternates } from '@/lib/seo/localization';
import './globals.css';
import '@/vendor-forex/src/app/globals.css';

const SITE_URL = 'https://www.schedulaa.com';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const h = await headers();
  const canonicalPathRaw = h.get('x-canonical-path') || '/';
  const canonicalPath = canonicalPathRaw === '/' ? '' : canonicalPathRaw;
  const canonical = `${SITE_URL}/${locale}${canonicalPath}`;

  return {
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    icons: defaultMetadata.icons,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      languages: getSeoLanguageAlternates(SITE_URL, canonicalPath || '/'),
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
                <GoogleAnalytics />
                <MetaPixel />
                <Navbar />
                {children}
                <Footer />
                <MarketingLeadWidget />
                <SchedulaaAssistant />
              </MotionProvider>
            </Suspense>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
