import {
  workforcePage as workforcePageEn,
  industriesPage,
  statusPage,
  roadmapPage,
  demoPage,
  contactPage,
  supportPage,
  zapierPage,
} from './config';

export const workforcePage = {
  ...workforcePageEn,
  meta: {
    ...workforcePageEn.meta,
    title: 'Центр управления персоналом | Учет времени, расписание и payroll',
    description:
      'Замкните операционный цикл в Schedulaa: правила clock-in/out, согласования, доступность и экспорт для payroll в одном дашборде.',
  },
  hero: {
    ...workforcePageEn.hero,
    badge: 'Персонал',
    title: 'Единый центр управления персоналом',
    subtitle:
      'Schedulaa уже объединила онлайн-расписание, payroll и сайт. Теперь в одном месте доступны учет часов, шаблоны, аудиты политик и payroll-ready согласования.',
    imageAlt: 'Рабочая область учета времени Schedulaa',
    images: [
      { ...workforcePageEn.hero.images[0], alt: 'Управление payroll' },
      { ...workforcePageEn.hero.images[1], alt: 'Управление сменами' },
      { ...workforcePageEn.hero.images[2], alt: 'Формирование T4' },
      { ...workforcePageEn.hero.images[3], alt: 'Формирование W-2' },
    ],
    primaryCta: { ...workforcePageEn.hero.primaryCta, label: 'Начать бесплатно' },
    secondaryCta: { ...workforcePageEn.hero.secondaryCta, label: 'Запросить демо' },
  },
  sections: [
    {
      title: 'Учет времени в реальном времени с контролем политик',
      points: [
        'Сотрудники отмечаются в My Time, а живой таймер учитывает перерывы и показывает хронологию смены.',
        'Правила перерывов задаются менеджером в шаблонах и автоматически контролируются в интерфейсе сотрудника.',
        'Еженедельные персональные сводки делают процесс прозрачным.',
      ],
    },
    {
      title: 'Контроль уровня менеджера',
      points: [
        'Все записи времени попадают в approvals, где можно фильтровать по отделу, сотруднику и статусу.',
        'IP/device-подсказки выявляют аномалии, а маркеры комплаенса показывают смены с рисками.',
        'Для массовых корректировок применяйте шаблоны перерывов и смен сразу к нескольким строкам.',
      ],
    },
    {
      title: 'Шаблоны смен со встроенным комплаенсом',
      points: [
        'Шаблоны фиксируют окна перерывов, длительность, paid/unpaid и правила доступности.',
        'Применение шаблона автоматически переносит правила в смены и интерфейс сотрудника.',
        'Принудительный clock-out и пометки просроченных смен упрощают согласование перед payroll.',
      ],
    },
    {
      title: 'Экспорт, готовый для payroll',
      points: [
        'Подтвержденные записи содержат метаданные для руководителей и команды payroll.',
        'Экспорты остаются чистыми, аудит упрощается, файлы сразу пригодны для бухгалтерии.',
      ],
    },
  ],
  cta: {
    ...workforcePageEn.cta,
    overline: 'Персонал + payroll вместе',
    title: 'Бронирование, расписание, payroll, сайты и учет времени в одной платформе.',
    body: 'Без таблиц, без копипаста, без рисков комплаенса.',
    primary: { ...workforcePageEn.cta.primary, label: 'Открыть рабочую область учета времени' },
    secondary: { ...workforcePageEn.cta.secondary, label: 'Связаться с отделом продаж' },
  },
};

export { industriesPage, statusPage, roadmapPage, demoPage, contactPage, supportPage, zapierPage };
