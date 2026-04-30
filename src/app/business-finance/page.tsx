import BusinessFinanceLandingPage from '@/components/business-finance/BusinessFinanceLandingPage';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';

const businessFinanceMeta: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Business Finance for Service Teams | Schedulaa',
    description:
      'Manage quote requests, estimates, client approvals, invoices, hosted payment links, refunds, work orders, field reports, materials, gross/net reporting, tax summaries, and month-end readiness in one workflow.',
  },
  fa: {
    title: 'مدیریت مالی کسب‌وکارهای خدماتی | Schedulaa',
    description:
      'در Schedulaa درخواست قیمت، برآورد، تأیید مشتری، فاکتور، لینک پرداخت، بازپرداخت، دستور کار، گزارش کارمند، مواد مصرفی، گزارش ناخالص/خالص، خلاصه مالیات و آمادگی پایان ماه را در یک جریان مدیریت کنید.',
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const localized = businessFinanceMeta[locale] || businessFinanceMeta.en;
  return {
    ...defaultMetadata,
    title: localized.title,
    description: localized.description,
  };
}

export default function BusinessFinancePage() {
  return <BusinessFinanceLandingPage />;
}
