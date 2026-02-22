'use client';

import enMessages from '@/i18n/messages/en.json';
import faMessages from '@/i18n/messages/fa.json';
import ruMessages from '@/i18n/messages/ru.json';
import zhMessages from '@/i18n/messages/zh.json';
import esMessages from '@/i18n/messages/es.json';
import frMessages from '@/i18n/messages/fr.json';
import deMessages from '@/i18n/messages/de.json';
import arMessages from '@/i18n/messages/ar.json';
import ptMessages from '@/i18n/messages/pt.json';
import { DEFAULT_LOCALE, detectLocaleFromPath } from '@/utils/locale';
import { NextIntlClientProvider } from 'next-intl';
import { usePathname } from 'next/navigation';
import { ReactNode, useMemo } from 'react';

export default function LocaleProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname) || DEFAULT_LOCALE;
  const messages = useMemo(() => {
    if (locale === 'fa') return faMessages;
    if (locale === 'ru') return ruMessages;
    if (locale === 'zh') return zhMessages;
    if (locale === 'es') return esMessages;
    if (locale === 'fr') return frMessages;
    if (locale === 'de') return deMessages;
    if (locale === 'ar') return arMessages;
    if (locale === 'pt') return ptMessages;
    return enMessages;
  }, [locale]);

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      {children}
    </NextIntlClientProvider>
  );
}
