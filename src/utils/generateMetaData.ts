import type { Metadata } from 'next';

export const DEFAULT_URL = 'https://www.schedulaa.com/';
export const DEFAULT_TITLE = 'Schedulaa | Scheduling, Payroll, and Website Builder';
export const DEFAULT_DESCRIPTION =
  'Schedulaa helps service businesses run scheduling, payroll, and website booking from one modern operating platform.';
export const DEFAULT_IMAGE_URL = 'https://www.schedulaa.com/og/logo.png';

const defaultMetadata: Metadata = {
  metadataBase: new URL(DEFAULT_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

const generateMetadata = (title?: string, description?: string, canonicalUrl?: string, imageUrl?: string): Metadata => {
  const resolvedTitle = title ?? DEFAULT_TITLE;
  const resolvedDescription = description ?? DEFAULT_DESCRIPTION;
  const resolvedCanonical = canonicalUrl ?? DEFAULT_URL;
  const resolvedImage = imageUrl ?? DEFAULT_IMAGE_URL;

  return {
    ...defaultMetadata,
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical: resolvedCanonical,
    },
    openGraph: {
      type: 'website',
      siteName: 'Schedulaa',
      title: resolvedTitle,
      description: resolvedDescription,
      url: resolvedCanonical,
      images: [{ url: resolvedImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: resolvedDescription,
      images: [resolvedImage],
    },
  };
};

export { defaultMetadata, generateMetadata };
