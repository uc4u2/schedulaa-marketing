import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { getPayrollSource } from '@/legacy-content/payroll/getPayrollSource';
import { buildLocalizedPageMetadata } from '@/lib/seo/pageMetadata';
import { buildPayrollPageSchemas } from '@/lib/seo/payrollPageSchema';
import { getServerLocale } from '@/utils/serverLocale';
import type { Metadata } from 'next';
import Script from 'next/script';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const meta = getPayrollSource(locale).payslips.meta;
  return buildLocalizedPageMetadata({
    locale,
    path: '/payslips',
    title: meta.title,
    description: meta.description,
    image: meta.og.image,
    openGraphTitle: meta.og.title,
    openGraphDescription: meta.og.description,
    twitterTitle: meta.twitter.title,
    twitterDescription: meta.twitter.description,
  });
}

export default async function PayslipsPage() {
  const locale = await getServerLocale();
  const payrollPages = getPayrollSource(locale);
  const config = payrollPages.payslips as any;
  const schemas = buildPayrollPageSchemas({
    locale,
    path: '/payslips',
    name: 'Schedulaa Employee Payslip Portal',
    breadcrumbName: 'Employee payslip portal',
    featureList: [
      'Employee self-service payslip access',
      'PDF downloads with date filters',
      'Email notifications for finalized payslips',
      'Manager access controls and audit history',
    ],
    faq: config.faq,
  });

  return (
    <>
      {schemas.map((schema, index) => (
        <Script key={schema['@type']} id={`payslips-${index}-jsonld`} type="application/ld+json">
          {JSON.stringify(schema)}
        </Script>
      ))}
      <FeatureStyleContentPage config={config} routePath="/payslips" />
    </>
  );
}
