import DemoLandingPage from '@/components/demo/DemoLandingPage';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';

const demoMeta: Record<string, { title: string; description: string }> = {
  fa: {
    title: 'ورود دمو Schedulaa | داشبورد مدير را تست کنيد',
    description: 'با اکانت دمو، زمان بندي، نيروي انساني، حقوق و يکپارچه سازي ها را به صورت عملي بررسي کنيد.',
  },
  ru: {
    title: 'Демо-вход Schedulaa | Тест панели менеджера',
    description: 'Войдите под демо-аккаунтом и проверьте расписание, payroll, автоматизацию и интеграции.',
  },
  zh: {
    title: 'Schedulaa 演示登录 | 体验经理后台',
    description: '使用共享演示账号体验排班、薪资、自动化和集成功能。',
  },
  es: {
    title: 'Acceso demo de Schedulaa | Prueba el panel de manager',
    description: 'Usa las credenciales demo para explorar agenda, nomina, cumplimiento y automatizaciones.',
  },
  fr: {
    title: 'Connexion demo Schedulaa | Tester le tableau manager',
    description: 'Utilisez le compte demo pour explorer planification, paie, automatisation et integrations.',
  },
  de: {
    title: 'Schedulaa Demo-Login | Manager-Dashboard testen',
    description: 'Mit den Demo-Zugangsdaten Planung, Abrechnung, Compliance und Integrationen pruefen.',
  },
  ar: {
    title: 'تسجيل دخول تجريبي Schedulaa | جرّب لوحة المدير',
    description: 'استخدم بيانات الدخول التجريبية لاستكشاف الجدولة والرواتب والامتثال والتكاملات.',
  },
  pt: {
    title: 'Login demo Schedulaa | Teste o painel do gestor',
    description: 'Use as credenciais compartilhadas para explorar agenda, folha, compliance e integracoes.',
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const localized = demoMeta[locale];
  return {
    ...defaultMetadata,
    title: localized?.title || 'Schedulaa Demo Login | Test the Manager Dashboard',
    description:
      localized?.description ||
      'Use the shared manager credentials to explore scheduling, payroll, compliance, automation, and integrations to Zapier, QuickBooks, and Xero inside the Schedulaa staging environment.',
  };
}

export default function DemoPage() {
  return <DemoLandingPage />;
}
