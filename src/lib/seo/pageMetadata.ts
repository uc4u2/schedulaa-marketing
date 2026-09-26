import type { Metadata } from 'next';

import { getSeoLanguageAlternates } from '@/lib/seo/localization';
import { withLocalePath, type AppLocale } from '@/utils/locale';

export const MARKETING_SITE_URL = 'https://www.schedulaa.com';

export const getLocalizedCanonicalUrl = (locale: AppLocale, path: string) =>
  `${MARKETING_SITE_URL}${withLocalePath(path, locale)}`;

type LocalizedPageMetadataInput = {
  locale: AppLocale;
  path: string;
  title: string;
  description: string;
  image?: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
};

/**
 * Builds page metadata from the public, locale-prefixed URL that is also used
 * by the sitemap and internal navigation. Keeping these signals together
 * prevents a page from self-canonicalizing to a redirecting legacy URL.
 */
export const buildLocalizedPageMetadata = ({
  locale,
  path,
  title,
  description,
  image,
  openGraphTitle,
  openGraphDescription,
  twitterTitle,
  twitterDescription,
}: LocalizedPageMetadataInput): Metadata => {
  const canonical = getLocalizedCanonicalUrl(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: getSeoLanguageAlternates(MARKETING_SITE_URL, path),
    },
    openGraph: {
      type: 'website',
      siteName: 'Schedulaa',
      title: openGraphTitle || title,
      description: openGraphDescription || description,
      url: canonical,
      images: image ? [{ url: image, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: twitterTitle || openGraphTitle || title,
      description: twitterDescription || openGraphDescription || description,
      images: image ? [image] : undefined,
    },
  };
};
