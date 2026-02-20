import { marketingPages as marketingPagesEn } from './config';

const marketingCta = {
  overline: 'Готовы запускаться',
  title: 'Запускайте следующую кампанию и сразу отслеживайте результат',
  body: 'Schedulaa объединяет кампании, сегменты, аналитику и экспорты в одном рабочем процессе.',
  primary: { label: 'Запустить кампанию', href: '/register' },
  secondary: { label: 'Войти', href: '/login' },
};

const marketingSecondaryLinks = [
  { label: 'Экспорт клиентов (обзор)', href: '/marketing/clients-360#exports' },
  { label: 'Возможности бронирования', href: '/booking' },
  { label: 'Конструктор сайтов', href: '/website-builder' },
];

const hubEn = marketingPagesEn.hub;

const hub = {
  ...hubEn,
  meta: {
    ...hubEn.meta,
    title: 'Маркетинг и аналитика для сервисного бизнеса | Schedulaa',
    description:
      'Запускайте целевые email-кампании, выгружайте клиентские списки и отслеживайте KPI в расширенной аналитике.',
  },
  hero: {
    ...hubEn.hero,
    badge: 'Lifecycle и KPI',
    title: 'Маркетинг и аналитика — рост, удержание и понимание клиентов',
    subtitle:
      'Schedulaa дает готовые кампании, lifecycle-сегменты, экспорт клиентов и продвинутую аналитику: от win-back и VIP до метрик выручки, no-show и rebook.',
    points: [
      'Готовые кампании: win-back, VIP, годовщина, запуск новых услуг и др.',
      'Lifecycle-сегменты с настраиваемыми порогами.',
      'Enterprise-аналитика по бронированиям, выручке, удержанию, чаевым и card-on-file.',
    ],
    primaryCta: { ...hubEn.hero.primaryCta, label: 'Запустить кампанию' },
    secondaryCta: { ...hubEn.hero.secondaryCta, label: 'Войти' },
  },
  sections: [
    {
      overline: 'Кампании',
      title: 'Кампании, которые можно запустить сегодня',
      body:
        'Используйте готовые сценарии с лимитами, фильтрами сегментов, префиксами купонов и окнами действия. Поддерживаются dry-run и лимит получателей.',
      points: [
        'Анонсы для закрытий, праздничных часов и изменений политики.',
        'Win-Back для клиентов с длинным перерывом между визитами.',
        'Skipped Rebook Nudge после визита без повторного бронирования.',
        'VIP-перки для top 10% клиентов с купонами и deeplink.',
        'Письма к годовщине первого визита.',
        'Кампании New Service Launch.',
        'No-Show Recovery и Add-on Upsell.',
      ],
      buttons: [{ label: 'Открыть конструктор кампаний', href: '/marketing/email-campaigns' }],
    },
    {
      overline: 'Сегменты',
      title: 'Lifecycle-сегменты из коробки',
      body: 'Фокусируйте retention-активности с когортами жизненного цикла и настраивайте пороги под ваш ритм.',
      points: [
        'VIP, Loyal, New, Active, At-Risk, Lost с гибкими параметрами.',
        'At-Risk по личному интервалу клиента; Lost при долгой неактивности.',
        'Сегменты автоматически питают кампании, аналитику и экспорты.',
      ],
      buttons: [{ label: 'Открыть Client 360°', href: '/marketing/clients-360' }],
    },
  ],
  lists: [
    {
      overline: 'Enterprise аналитика',
      title: 'Ключевые блоки аналитического набора',
      intro: 'Фильтруйте по периоду, часовому поясу и группировке (день/неделя/месяц).',
      items: [
        {
          icon: 'analytics',
          label: 'KPI',
          title: 'Базовые метрики',
          body: 'Брони, отмены, no-show, активные клиенты, lead time, ticket, выручка, чаевые, возвраты.',
        },
        {
          icon: 'timeline',
          label: 'Тренды',
          title: 'Миксы и динамика',
          body: 'Микс по дням/часам, LTV-перцентили, тренды бронирований и выручки, загрузка сотрудников.',
        },
        {
          icon: 'insights',
          label: 'Удержание',
          title: 'Надежность и возврат',
          body: 'Показатели show-up, rebook 30/60/90, интервалы возврата, окна отмен, refund-rate и card-on-file.',
        },
      ],
    },
  ],
  highlights: [
    {
      overline: 'Client intelligence',
      title: 'Client 360° и поведенческие инсайты',
      content: 'Фильтруйте по отделу/сотруднику, ищите по имени/email/телефону и открывайте 360-панель клиента.',
      actions: [{ label: 'Открыть Client 360°', href: '/marketing/clients-360', variant: 'outlined' }],
    },
    {
      overline: 'Экспорт',
      title: 'Выгрузка клиентов в CSV за секунды',
      content: 'Экспортируйте списки клиентов с фильтрами seen in last N days, min visits, require email, limit.',
      actions: [{ label: 'Посмотреть экспорт', href: '/marketing/clients-360#exports', variant: 'contained' }],
    },
  ],
  faqHeading: 'FAQ',
  faqTitle: 'Вопросы по маркетингу и аналитике',
  faqIntro: 'Ответы для текущих production-возможностей Schedulaa.',
  faq: [
    {
      question: 'Можно ограничить число получателей кампании?',
      answer: 'Да. В каждой кампании есть поле Limit, а dry-run показывает список до отправки.',
    },
    {
      question: 'Как обновляются lifecycle-сегменты?',
      answer: 'Автоматически на основе истории бронирований. Пороги сегментов можно настраивать.',
    },
    {
      question: 'Можно экспортировать данные аналитики?',
      answer: 'Да. В Advanced Analytics есть CSV-экспорт, а клиентские когорты выгружаются отдельно.',
    },
  ],
  cta: marketingCta,
  secondaryLinks: marketingSecondaryLinks,
};

export const marketingPages = {
  ...marketingPagesEn,
  hub,
};
