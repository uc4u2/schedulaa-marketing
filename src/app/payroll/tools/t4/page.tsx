import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { getPayrollSource } from '@/legacy-content/payroll/getPayrollSource';
import { getServerLocale } from '@/utils/serverLocale';
import { buildLocalizedPageMetadata } from '@/lib/seo/pageMetadata';
import { buildPayrollPageSchemas } from '@/lib/seo/payrollPageSchema';
import type { Metadata } from 'next';
import Script from 'next/script';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const meta = getPayrollSource(locale).t4.meta;
  return buildLocalizedPageMetadata({
    locale,
    path: '/payroll/tools/t4',
    title: meta.title,
    description: meta.description,
    image: meta.og.image,
    openGraphTitle: meta.og.title,
    openGraphDescription: meta.og.description,
    twitterTitle: meta.twitter.title,
    twitterDescription: meta.twitter.description,
  });
}

export default async function PayrollT4Page() {
  const locale = await getServerLocale();
  const payrollPages = getPayrollSource(locale);
  const config = payrollPages.t4 as any;
  const schemas = buildPayrollPageSchemas({
    locale,
    path: '/payroll/tools/t4',
    name: 'Schedulaa T4 Generator',
    breadcrumbName: 'T4 generator',
    featureList: [
      'Prefill supported CRA boxes from finalized payroll',
      'Render employee PDF slips',
      'Generate CRA XML and CSV summaries',
      'Download year-end packages in batches',
    ],
    faq: config.faq,
  });

  return (
    <>
      {schemas.map((schema, index) => (
        <Script key={schema['@type']} id={`t4-${index}-jsonld`} type="application/ld+json">
          {JSON.stringify(schema)}
        </Script>
      ))}
      <FeatureStyleContentPage config={config} routePath="/payroll/tools/t4" />
    </>
  );
}
