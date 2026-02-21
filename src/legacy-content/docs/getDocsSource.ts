import source from './landing-docs.json';
import sourceFa from './landing-docs.fa.json';
import sourceRu from './landing-docs.ru.json';
import sourceZh from './landing-docs.zh.json';
import sourceEs from './landing-docs.es.json';
import sourceFr from './landing-docs.fr.json';
import sourceDe from './landing-docs.de.json';
import sourceAr from './landing-docs.ar.json';
import sourcePt from './landing-docs.pt.json';
import { buildDocsPage } from './config';
import { AppLocale } from '@/utils/locale';

const ctaByLocale: Record<string, { overline: string; title: string; body: string; primary: string; secondary: string }> = {
  fa: {
    overline: 'مستندات',
    title: 'به کمک در پياده سازي نياز داريد؟',
    body: 'راهنماي راه اندازي زمان بندي، گردش کار حقوق و رزرو وب سايت را بخوانيد.',
    primary: 'شروع کنيد',
    secondary: 'ارتباط با پشتيباني',
  },
  ru: {
    overline: 'Документация',
    title: 'Нужна помощь с внедрением?',
    body: 'Смотрите инструкции по запуску расписания, payroll-процессов и онлайн-бронирования.',
    primary: 'Начать',
    secondary: 'Связаться с поддержкой',
  },
  zh: {
    overline: '文档',
    title: '需要实施支持吗？',
    body: '查看排班、薪资流程和网站预约的配置指南。',
    primary: '开始使用',
    secondary: '联系支持',
  },
  es: {
    overline: 'Documentacion',
    title: '¿Necesitas ayuda de implementacion?',
    body: 'Consulta guias de agenda, flujos de nomina y reservas del sitio web.',
    primary: 'Comenzar',
    secondary: 'Contactar soporte',
  },
  fr: {
    overline: 'Documentation',
    title: "Besoin d'aide pour l'implementation ?",
    body: 'Consultez les guides de planification, de paie et de reservation web.',
    primary: 'Commencer',
    secondary: 'Contacter le support',
  },
  de: {
    overline: 'Dokumentation',
    title: 'Benoetigen Sie Hilfe bei der Implementierung?',
    body: 'Lesen Sie Leitfaeden fuer Planung, Abrechnungsablaeufe und Website-Buchung.',
    primary: 'Loslegen',
    secondary: 'Support kontaktieren',
  },
  ar: {
    overline: 'الوثائق',
    title: 'هل تحتاج مساعدة في التنفيذ؟',
    body: 'راجع ادلة اعداد الجدولة وسير عمل الرواتب وتدفقات الحجز عبر الموقع.',
    primary: 'ابدأ الان',
    secondary: 'تواصل مع الدعم',
  },
  pt: {
    overline: 'Documentacao',
    title: 'Precisa de ajuda na implementacao?',
    body: 'Leia guias de agendamento, fluxos de folha e reservas do site.',
    primary: 'Comecar',
    secondary: 'Falar com suporte',
  },
};

const withLocalizedCta = (page: any, locale: AppLocale | string | null | undefined) => {
  const cta = ctaByLocale[String(locale || '')];
  if (!cta) return page;
  return {
    ...page,
    cta: {
      ...page.cta,
      overline: cta.overline,
      title: cta.title,
      body: cta.body,
      primary: { ...page.cta?.primary, label: cta.primary },
      secondary: { ...page.cta?.secondary, label: cta.secondary },
    },
  };
};

export const getDocsSource = (locale: AppLocale | string | null | undefined) => {
  if (locale === 'fa') return withLocalizedCta(buildDocsPage(sourceFa), locale);
  if (locale === 'ru') return withLocalizedCta(buildDocsPage(sourceRu), locale);
  if (locale === 'zh') return withLocalizedCta(buildDocsPage(sourceZh), locale);
  if (locale === 'es') return withLocalizedCta(buildDocsPage(sourceEs), locale);
  if (locale === 'fr') return withLocalizedCta(buildDocsPage(sourceFr), locale);
  if (locale === 'de') return withLocalizedCta(buildDocsPage(sourceDe), locale);
  if (locale === 'ar') return withLocalizedCta(buildDocsPage(sourceAr), locale);
  if (locale === 'pt') return withLocalizedCta(buildDocsPage(sourcePt), locale);
  return buildDocsPage(source);
};
