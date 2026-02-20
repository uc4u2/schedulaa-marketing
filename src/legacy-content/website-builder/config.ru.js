import { websiteBuilderPage as websiteBuilderPageEn } from './config';

const featureCards = [
  { title: 'Конструктор drag-and-drop', body: 'Запускайте сайт за минуты: блоки, галереи, отзывы и бронирование без кода.' },
  { title: 'Встроенные платежи Stripe', body: 'Принимайте депозиты и полные оплаты, сохраняйте карты клиентов с первого дня.' },
  { title: 'Бесплатный домен + SSL', body: 'Подключайте свой домен или используйте schedulaa.site. SSL включается автоматически.' },
  { title: 'Понятная аналитика', body: 'Просмотры, брони и выручка в одном дашборде. Можно подключить Google Analytics.' },
  { title: 'Адаптивные шаблоны', body: 'Готовые шаблоны для салонов, коучей, репетиторов, клиник и других ниш.' },
  { title: 'Безопасность данных клиентов', body: 'RBAC, шифрование и процессы уровня SOC2-ready защищают данные.' },
];

const howToSteps = [
  { title: 'Создайте аккаунт Schedulaa', description: 'Начните бесплатно за пару минут. Карта не нужна для первого запуска.' },
  { title: 'Выберите шаблон под бренд', description: 'Выберите современный шаблон для вашей отрасли и формата команды.' },
  { title: 'Настройте страницы блоками', description: 'Редактируйте тексты, hero-изображения, услуги и отзывы без разработки.' },
  { title: 'Подключите Stripe и бронирование', description: 'Включите checkout, card-on-file и онлайн-запись в одном потоке.' },
  { title: 'Опубликуйте на домене и отслеживайте метрики', description: 'Запускайтесь с SSL и улучшайте результат по встроенным SEO-подсказкам.' },
];

const faqs = [
  { question: 'Schedulaa подходит как бесплатный конструктор для малого бизнеса?', answer: 'Да. Можно бесплатно создать и опубликовать первый сайт на домене schedulaa.site.' },
  { question: 'Можно сохранить сайт без подписки?', answer: 'Да. У каждого аккаунта есть бесплатный сайт вида www.schedulaa.com/your-company-slug.' },
  { question: 'Клиенты смогут бронировать на сайте?', answer: 'Да. Виджет бронирования встроен в шаблоны: выбор услуги, сотрудника и оплаты в одном потоке.' },
  { question: 'Есть ли интеграция со Stripe?', answer: 'Да. Подключение в один клик: прием карт, сохраненные способы оплаты и синхронизация выплат.' },
  { question: 'Можно подключить свой домен?', answer: 'Да. Подключайте любой домен, SSL выпускается автоматически.' },
  { question: 'Подходит для салонов, репетиторов и коучей?', answer: 'Да. Есть отраслевые шаблоны и готовые блоки контента с быстрой настройкой.' },
  { question: 'Есть услуга “сделайте сайт за меня”?', answer: 'Да. Website Design Service — разовая услуга, где наша команда проектирует и публикует сайт за вас.' },
];

const resourceHighlights = [
  {
    title: 'Пошаговые гайды',
    body: 'Подробные инструкции по страницам, бронированию, Stripe и подключению домена.',
    links: [
      { label: 'Читать документацию', href: '/docs#website-builder' },
      { label: 'Скачать sitemap', href: '/sitemap.xml' },
    ],
  },
  {
    title: 'Структура для индексации',
    body: 'Schedulaa автоматически публикует canonical, Open Graph и обновления sitemap.',
    links: [
      { label: 'Открыть SEO-чеклист', href: '/docs#seo' },
      { label: 'Связаться с командой запуска', href: '/contact' },
    ],
  },
  {
    title: 'Шаблоны, которые конвертируют',
    body: 'Студии, клиники и рекрутинговые команды быстро запускают новые лендинги без разработчиков.',
    links: [
      { label: 'Смотреть отрасли', href: '/booking' },
      { label: 'Запросить walkthrough', href: '/contact' },
    ],
  },
];

export const websiteBuilderPage = {
  ...websiteBuilderPageEn,
  meta: {
    ...websiteBuilderPageEn.meta,
    title: 'Конструктор сайтов для малого бизнеса — бесплатный домен и хостинг | Schedulaa',
    description:
      'Создавайте сайт бизнеса в бесплатном конструкторе Schedulaa: бесплатный адрес, подключение своего домена и опциональная услуга done-for-you.',
    og: {
      ...websiteBuilderPageEn.meta.og,
      title: 'Конструктор сайтов для малого бизнеса — Schedulaa',
      description:
        'Создавайте и хостите сайт с бронированием, Stripe и аналитикой. Начните бесплатно или закажите done-for-you запуск.',
    },
  },
  hero: {
    ...websiteBuilderPageEn.hero,
    badge: 'Бесплатный конструктор сайтов для малого бизнеса',
    title: 'Конструктор сайтов для малого бизнеса с бесплатным хостингом',
    subtitle:
      'Создавайте адаптивный сайт с бронированием, Stripe и аналитикой в одной платформе. В каждом аккаунте есть бесплатный сайт.',
    primaryCta: { ...websiteBuilderPageEn.hero.primaryCta, label: 'Запустить сайт бесплатно' },
    secondaryCta: { ...websiteBuilderPageEn.hero.secondaryCta, label: 'Смотреть бронирование' },
  },
  sections: [
    { overline: 'Ключевые возможности', title: 'Создание, публикация и монетизация в одном потоке', items: featureCards },
    { overline: 'Ресурсы', title: 'Гайды, SEO и поддержка запуска', items: resourceHighlights },
  ],
  stepsTitle: 'Как запустить сайт в Schedulaa',
  steps: howToSteps,
  faqTitle: 'FAQ по конструктору сайтов',
  faq: faqs,
  cta: {
    ...websiteBuilderPageEn.cta,
    overline: 'Готовы к запуску?',
    title: 'Запустите бесплатный сайт и подключите онлайн-бронирование',
    body: 'Выходите в прод сейчас, а автоматизации и multi-location подключайте по мере роста.',
    primary: { ...websiteBuilderPageEn.cta.primary, label: 'Начать бесплатно' },
    secondary: { ...websiteBuilderPageEn.cta.secondary, label: 'Связаться с командой' },
  },
};
