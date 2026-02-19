import SmoothScrollProvider from '@/vendor-forex/src/components/shared/SmoothScroll';
import { ThemeProvider } from '@/vendor-forex/src/components/shared/ThemeProvider';
import Footer from '@/vendor-forex/src/components/shared/footer/Footer';
import Navbar from '@/vendor-forex/src/components/shared/navbar/Navbar';
import DemoShowcase from '@/vendor-forex/src/components/shared/demo-showcase';
import { interTight } from '@/utils/font';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  ...generateMetadata(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interTight.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense>
            <SmoothScrollProvider>
              <Navbar />
              <DemoShowcase activeDemoId={37} />
              {children}
              <Footer />
            </SmoothScrollProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
