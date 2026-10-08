import { getLocalizedCanonicalUrl } from '@/lib/seo/pageMetadata';
import type { AppLocale } from '@/utils/locale';

type FaqItem = {
  question: string;
  answer: string;
};

type PayrollPageSchemaInput = {
  locale: AppLocale;
  path: string;
  name: string;
  breadcrumbName: string;
  featureList: string[];
  faq?: FaqItem[];
};

export const buildPayrollPageSchemas = ({
  locale,
  path,
  name,
  breadcrumbName,
  featureList,
  faq = [],
}: PayrollPageSchemaInput) => {
  const canonical = getLocalizedCanonicalUrl(locale, path);

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      featureList,
      url: canonical,
      provider: {
        '@type': 'Organization',
        name: 'Schedulaa',
        url: getLocalizedCanonicalUrl(locale, '/'),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Schedulaa', item: getLocalizedCanonicalUrl(locale, '/') },
        { '@type': 'ListItem', position: 2, name: 'Payroll', item: getLocalizedCanonicalUrl(locale, '/payroll') },
        { '@type': 'ListItem', position: 3, name: breadcrumbName, item: canonical },
      ],
    },
    ...(faq.length
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          },
        ]
      : []),
  ];
};
