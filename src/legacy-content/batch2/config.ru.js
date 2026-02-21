import {
  workforcePage as workforcePageEn,
  industriesPage as industriesPageEn,
  statusPage,
  roadmapPage,
  demoPage,
  contactPage,
  supportPage,
  zapierPage as zapierPageEn,
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

export const industriesPage = {
  ...industriesPageEn,
  meta: {
    ...industriesPageEn.meta,
    title: 'Отраслевой каталог | Сайты Schedulaa по направлениям',
    description:
      'Смотрите рабочие сценарии Schedulaa по отраслям: салоны, клиники, фитнес-студии, юридические сервисы и другие с едиными расписанием, payroll и коммерцией.',
  },
  hero: {
    ...industriesPageEn.hero,
    badge: 'Отрасли',
    title: 'Обзор по отраслям',
    subtitle:
      'Выберите отрасль и посмотрите, как компании используют Schedulaa для бронирования, payroll, операций с персоналом, сайтов и продаж.',
    primaryCta: { ...industriesPageEn.hero.primaryCta, label: 'Открыть бронирование' },
    secondaryCta: { ...industriesPageEn.hero.secondaryCta, label: 'Связаться с командой' },
  },
  sections: [
    {
      title: 'Популярные вертикали',
      items: [
        { title: 'Салоны и спа', body: 'Бронирование мастеров в реальном времени, чаевые и кампании удержания.' },
        { title: 'Медицинские клиники', body: 'Расписание, напоминания и процессы с учетом документации.' },
        { title: 'Репетиторы и образование', body: 'Запись на сессии, регулярные графики и контроль посещаемости.' },
        { title: 'Креативные студии', body: 'Автоматизация пути клиента от бронирования до payroll.' },
        { title: 'Юридические и профсервисы', body: 'Структурированный intake, расписание и защищенные записи.' },
        { title: 'Команды с филиалами', body: 'Контроль по филиалам для staffing, payroll и аналитики.' },
      ],
    },
  ],
};

export const zapierPage = {
  ...zapierPageEn,
  meta: {
    ...zapierPageEn.meta,
    title: 'Zapier для Schedulaa — автоматизация бронирований, расписания, пауз и payroll',
    description:
      'Подключите Schedulaa к 6 000+ приложениям через Zapier. Передавайте данные бронирований, смен, timeclock, перерывов, PTO, onboarding и payroll.',
  },
  hero: {
    ...zapierPageEn.hero,
    badge: 'Автоматизация Zapier',
    title: 'Автоматизируйте каждое бронирование, смену, паузу и шаг payroll с Zapier',
    subtitle:
      'Schedulaa отправляет в Zapier события бронирований, расписания, timeclock, пауз, PTO, onboarding и payroll-деталей; действия также могут создавать бронирования, сотрудников и смены.',
    primaryCta: { ...zapierPageEn.hero.primaryCta, label: 'Открыть настройки Zapier' },
    secondaryCta: { ...zapierPageEn.hero.secondaryCta, label: 'Смотреть демо' },
  },
  sections: [
    {
      title: 'Группы live-триггеров',
      items: [
        { title: 'События бронирований', body: 'booking.created, booking.updated, booking.cancelled, booking.no_show, public_booking.created' },
        { title: 'Расписание и смены', body: 'shift.published, shift.updated, swap.requested, swap.approved, swap.rejected' },
        { title: 'Timeclock и контроль перерывов', body: 'timeclock.clock_in, timeclock.clock_out, break.started, break.ended, break.missed' },
        { title: 'Отпуска, onboarding, документы', body: 'leave.requested, leave.approved, leave.denied, onboarding.started, onboarding.document_signed' },
        { title: 'События payroll', body: 'payroll.ready, payroll.finalized, payroll.details' },
      ],
    },
    {
      title: 'Live-действия',
      points: ['create_booking', 'create_employee', 'create_shift / update_shift', 'attach_document'],
    },
  ],
};

export { industriesPage, statusPage, roadmapPage, demoPage, contactPage, supportPage, zapierPage };
