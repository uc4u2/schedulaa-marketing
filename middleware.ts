import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { DEFAULT_LOCALE, isSupportedLocale } from '@/utils/locale';

const PUBLIC_FILE = /\.(.*)$/;
const KNOWN_BUT_UNSUPPORTED = new Set(['ru', 'zh']);

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

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-locale', maybeLocale);
    const response = NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } });
    response.cookies.set('NEXT_LOCALE', maybeLocale, { path: '/', sameSite: 'lax' });
    return response;
  }

  if (maybeLocale && KNOWN_BUT_UNSUPPORTED.has(maybeLocale)) {
    const rest = segments.slice(1).join('/');
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = rest ? `/${DEFAULT_LOCALE}/${rest}` : `/${DEFAULT_LOCALE}`;
    redirectUrl.search = search;
    return NextResponse.redirect(redirectUrl);
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
