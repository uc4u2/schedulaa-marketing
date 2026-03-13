'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { detectLocaleFromPath, stripLocalePrefix } from '@/utils/locale';
import { isMetaPixelEnabled, META_PIXEL_ID, trackMetaPixel } from '@/utils/metaPixel';

const VIEW_CONTENT_ROUTES: Record<string, string> = {
  '/demo': 'Demo Page',
  '/pricing': 'Pricing Page',
};

export default function MetaPixel() {
  const pathname = usePathname() || '/';

  useEffect(() => {
    if (!isMetaPixelEnabled()) return;

    const locale = detectLocaleFromPath(pathname);
    const cleanPath = stripLocalePrefix(pathname, locale) || '/';

    trackMetaPixel('PageView');

    const contentName = VIEW_CONTENT_ROUTES[cleanPath];
    if (contentName) {
      trackMetaPixel('ViewContent', {
        content_name: contentName,
        content_category: cleanPath === '/pricing' ? 'Pricing' : 'Demo',
        page_path: cleanPath,
      });
    }
  }, [pathname]);

  if (!isMetaPixelEnabled()) return null;

  return (
    <>
      <Script id="meta-pixel-base" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}

