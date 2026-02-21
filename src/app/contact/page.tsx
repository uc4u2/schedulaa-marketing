import MarketingContactContent from '@/components/contact/MarketingContactContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';
import { Metadata } from 'next';

const contactMeta: Record<string, { title: string; description: string }> = {
  fa: { title: 'تماس با Schedulaa', description: 'با تيم Schedulaa درباره اجرا، مشارکت يا مهاجرت داده صحبت کنيد.' },
  ru: { title: 'Контакты Schedulaa', description: 'Свяжитесь с командой Schedulaa по внедрению, партнерству и миграции.' },
  zh: { title: '联系 Schedulaa', description: '联系 Schedulaa 团队，咨询实施、合作与迁移支持。' },
  es: { title: 'Contacto Schedulaa', description: 'Habla con el equipo de Schedulaa sobre implementacion, alianzas o migracion.' },
  fr: { title: 'Contacter Schedulaa', description: "Parlez a l'equipe Schedulaa pour l'implementation, les partenariats ou la migration." },
  de: { title: 'Kontakt Schedulaa', description: 'Sprechen Sie mit dem Schedulaa-Team ueber Implementierung, Partnerschaft oder Migration.' },
  ar: { title: 'تواصل مع Schedulaa', description: 'تحدث مع فريق Schedulaa حول التنفيذ والشراكات ودعم الترحيل.' },
  pt: { title: 'Contato Schedulaa', description: 'Fale com a equipe Schedulaa sobre implementacao, parceria ou migracao.' },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const localized = contactMeta[locale];
  return {
    ...defaultMetadata,
    title: localized?.title || 'Contact Schedulaa',
    description: localized?.description || 'Talk to the Schedulaa team about custom rollouts, partnerships, or migration support.',
  };
}

export default function ContactPage() {
  return <MarketingContactContent />;
}
