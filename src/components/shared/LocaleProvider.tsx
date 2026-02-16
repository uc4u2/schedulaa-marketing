'use client';

import enMessages from '@/i18n/messages/en.json';
import faMessages from '@/i18n/messages/fa.json';
import { DEFAULT_LOCALE, detectLocaleFromPath } from '@/utils/locale';
import { NextIntlClientProvider } from 'next-intl';
import { usePathname } from 'next/navigation';
import { ReactNode, useMemo } from 'react';

export default function LocaleProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname) || DEFAULT_LOCALE;
  const messages = useMemo(() => (locale === 'fa' ? faMessages : enMessages), [locale]);

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      {children}
    </NextIntlClientProvider>
  );
}
