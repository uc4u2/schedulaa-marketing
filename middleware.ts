import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { DEFAULT_LOCALE, isSupportedLocale, SUPPORTED_LOCALES } from '@/utils/locale';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/robots.txt') ||
    pathname.startsWith('/sitemap.xml') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split('/').filter(Boolean);
  const maybeLocale = segments[0];

  if (isSupportedLocale(maybeLocale)) {
    const rest = segments.slice(1).join('/');
    const rewritePath = rest ? `/${rest}` : '/';
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = rewritePath;

    const response = NextResponse.rewrite(rewriteUrl);
    response.cookies.set('NEXT_LOCALE', maybeLocale, { path: '/', sameSite: 'lax' });
    return response;
  }

  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  const locale = isSupportedLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
  redirectUrl.search = search;
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
