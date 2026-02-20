import { cookies, headers } from 'next/headers';

import { AppLocale, DEFAULT_LOCALE, isSupportedLocale } from '@/utils/locale';

export const getServerLocale = async (): Promise<AppLocale> => {
  const h = await headers();
  const headerLocale = h.get('x-locale');
  if (isSupportedLocale(headerLocale)) return headerLocale;

  const c = await cookies();
  const cookieLocale = c.get('NEXT_LOCALE')?.value;
  if (isSupportedLocale(cookieLocale)) return cookieLocale;

  return DEFAULT_LOCALE;
};

