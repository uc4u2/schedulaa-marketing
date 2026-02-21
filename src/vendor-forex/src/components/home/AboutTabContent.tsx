import aboutScheduling from '@public/images/marketing/employee-dashboard.png';
import aboutPayroll from '@public/images/marketing/payroll-dashboard.png';
import aboutCommerce from '@public/images/marketing/website-builder.png';
import aboutAutomation from '@public/images/marketing/my-shift.png';
import { AppLocale } from '@/utils/locale';
import Image from 'next/image';
import LinkButton from '../ui/button/LinkButton';
import TabContent from '../ui/tab/TabContent';

const aboutTabsDataEn = [
  {
    id: 'blockchain',
    badge: 'About',
    title: 'Payroll and compliance are built for',
    titleBreak: false,
    highlightedText: ' service teams.',
    description:
      'Run payroll with overtime, tips, and holiday logic, then export W-2, T4, and ROE records with audit-ready reporting.',
    image: aboutPayroll,
    imageAlt: 'Schedulaa payroll and compliance dashboard',
    buttonText: 'Explore payroll',
    buttonHref: '/payroll',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Region-aware rules',
        description: 'US + Canada payroll scenarios supported.',
      },
      {
        icon: 'ns-shape-46',
        title: 'Audit-ready exports',
        description: 'Generate compliance artifacts with confidence.',
      },
      {
        icon: 'ns-shape-47',
        title: 'Employee self-service',
        description: 'Payslips and payroll transparency for staff.',
      },
    ],
  },
  {
    id: 'decentralization',
    badge: 'About',
    title: 'Booking and scheduling become',
    titleBreak: true,
    titleContinue: 'one connected',
    highlightedText: ' workflow.',
    description:
      'Publish services, availability, and provider slots once. Clients self-book, staff calendars update in real time, and operations stop duplicating data.',
    image: aboutScheduling,
    imageAlt: 'Schedulaa booking and availability dashboard',
    buttonText: 'Explore booking',
    buttonHref: '/booking',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Real-time availability',
        description: 'Staff and client views stay synchronized.',
      },
      {
        icon: 'ns-shape-46',
        title: 'Provider assignment',
        description: 'Control services, rooms, and calendars by role.',
      },
      {
        icon: 'ns-shape-47',
        title: 'Self-serve rescheduling',
        description: 'Reduce manual changes and admin overhead.',
      },
    ],
  },
  {
    id: 'privacy',
    badge: 'About',
    title: 'Sell services and products from',
    titleBreak: false,
    highlightedText: ' one checkout.',
    description:
      'Combine bookings, add-ons, products, deposits, and tips in one cart with Stripe checkout and automated receipts.',
    image: aboutCommerce,
    imageAlt: 'Schedulaa commerce and checkout analytics',
    buttonText: 'Explore features',
    buttonHref: '/features',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Unified cart',
        description: 'Products and services in one purchase flow.',
      },
      {
        icon: 'ns-shape-46',
        title: 'Refund and tax support',
        description: 'Secure checkout with operational guardrails.',
      },
      {
        icon: 'ns-shape-47',
        title: 'Revenue analytics',
        description: 'Track utilization, churn, and top performers.',
      },
    ],
  },
  {
    id: 'exchanges',
    badge: 'About',
    title: 'Integrations and automations drive',
    titleBreak: false,
    highlightedText: ' operational scale.',
    description:
      'Connect Schedulaa to accounting tools, trigger re-engagement campaigns, and keep external systems in sync through API and webhooks.',
    image: aboutAutomation,
    imageAlt: 'Schedulaa integrations and workflow automation',
    buttonText: 'Explore docs',
    buttonHref: '/docs',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Zapier + webhooks',
        description: 'Trigger workflows without manual handoffs.',
      },
      {
        icon: 'ns-shape-46',
        title: 'Accounting sync',
        description: 'Connect payroll and invoicing data to finance tools.',
      },
      {
        icon: 'ns-shape-47',
        title: 'Campaign automation',
        description: 'Re-engage no-shows, VIP clients, and churn risks.',
      },
    ],
  },
];

const aboutTabsDataFa = [
  {
    id: 'blockchain',
    badge: 'درباره',
    title: 'حقوق و انطباق برای',
    titleBreak: false,
    highlightedText: ' تیم‌های خدماتی ساخته شده است.',
    description:
      'حقوق را با قوانین اضافه‌کاری، انعام و تعطیلات اجرا کنید و خروجی‌های W-2، T4 و ROE را با گزارش‌گیری آماده ممیزی دریافت کنید.',
    image: aboutPayroll,
    imageAlt: 'داشبورد حقوق و انطباق Schedulaa',
    buttonText: 'مشاهده حقوق',
    buttonHref: '/payroll',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'قوانین منطقه‌ای',
        description: 'سناریوهای حقوق آمریکا و کانادا پشتیبانی می‌شود.',
      },
      {
        icon: 'ns-shape-46',
        title: 'خروجی‌های آماده ممیزی',
        description: 'اسناد انطباق را با اطمینان تولید کنید.',
      },
      {
        icon: 'ns-shape-47',
        title: 'سلف‌سرویس کارمند',
        description: 'فیش حقوقی و شفافیت حقوق برای کارکنان.',
      },
    ],
  },
  {
    id: 'decentralization',
    badge: 'درباره',
    title: 'رزرو و زمان‌بندی به',
    titleBreak: true,
    titleContinue: 'یک جریان',
    highlightedText: ' یکپارچه تبدیل می‌شود.',
    description:
      'سرویس‌ها، ظرفیت و ارائه‌دهندگان را یک‌بار منتشر کنید. مشتری خودرزرو انجام می‌دهد و تقویم کارکنان در لحظه به‌روزرسانی می‌شود.',
    image: aboutScheduling,
    imageAlt: 'داشبورد رزرو و ظرفیت Schedulaa',
    buttonText: 'مشاهده رزرو',
    buttonHref: '/booking',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'ظرفیت لحظه‌ای',
        description: 'نمای کارکنان و مشتری همیشه همگام است.',
      },
      {
        icon: 'ns-shape-46',
        title: 'تخصیص ارائه‌دهنده',
        description: 'مدیریت سرویس، اتاق و تقویم بر اساس نقش.',
      },
      {
        icon: 'ns-shape-47',
        title: 'تغییر زمان توسط مشتری',
        description: 'کاهش تغییرات دستی و سربار مدیریتی.',
      },
    ],
  },
  {
    id: 'privacy',
    badge: 'درباره',
    title: 'سرویس و محصول را از',
    titleBreak: false,
    highlightedText: ' یک پرداخت‌یار بفروشید.',
    description:
      'رزرو، افزونه، محصول، بیعانه و انعام را در یک سبد ترکیب کنید و با Stripe پرداخت و رسید خودکار داشته باشید.',
    image: aboutCommerce,
    imageAlt: 'تحلیل تجارت و پرداخت Schedulaa',
    buttonText: 'مشاهده قابلیت‌ها',
    buttonHref: '/features',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'سبد یکپارچه',
        description: 'محصول و سرویس در یک مسیر خرید.',
      },
      {
        icon: 'ns-shape-46',
        title: 'پشتیبانی بازپرداخت و مالیات',
        description: 'پرداخت امن با کنترل‌های عملیاتی.',
      },
      {
        icon: 'ns-shape-47',
        title: 'تحلیل درآمد',
        description: 'پیگیری بهره‌وری، ریزش و عملکرد برتر.',
      },
    ],
  },
  {
    id: 'exchanges',
    badge: 'درباره',
    title: 'یکپارچه‌سازی و اتوماسیون،',
    titleBreak: false,
    highlightedText: ' مقیاس عملیاتی می‌سازد.',
    description:
      'Schedulaa را به ابزارهای مالی متصل کنید، کمپین‌های بازگشت را فعال کنید و سیستم‌های بیرونی را با API و webhook همگام نگه دارید.',
    image: aboutAutomation,
    imageAlt: 'یکپارچه‌سازی و اتوماسیون گردش‌کار Schedulaa',
    buttonText: 'مشاهده مستندات',
    buttonHref: '/docs',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Zapier + webhook',
        description: 'اجرای گردش‌کار بدون تحویل دستی.',
      },
      {
        icon: 'ns-shape-46',
        title: 'همگام‌سازی مالی',
        description: 'اتصال داده حقوق و صورتحساب به ابزارهای مالی.',
      },
      {
        icon: 'ns-shape-47',
        title: 'اتوماسیون کمپین',
        description: 'بازگردانی مشتریان غایب، VIP و در معرض ریزش.',
      },
    ],
  },
];

const aboutTabsDataRu = [
  {
    id: 'blockchain',
    badge: 'О платформе',
    title: 'Payroll и compliance созданы для',
    titleBreak: false,
    highlightedText: ' service teams.',
    description:
      'Запускайте payroll с учётом overtime, чаевых и праздничных правил, затем выгружайте W-2, T4 и ROE с отчётами, готовыми к аудиту.',
    image: aboutPayroll,
    imageAlt: 'Панель payroll и compliance в Schedulaa',
    buttonText: 'Перейти к payroll',
    buttonHref: '/payroll',
    features: [
      { icon: 'ns-shape-6', title: 'Региональные правила', description: 'Поддерживаются payroll-сценарии США и Канады.' },
      { icon: 'ns-shape-46', title: 'Экспорт для аудита', description: 'Формируйте compliance-документы с уверенностью.' },
      { icon: 'ns-shape-47', title: 'Self-service сотрудников', description: 'Payslip и прозрачность payroll для команды.' },
    ],
  },
  {
    id: 'decentralization',
    badge: 'О платформе',
    title: 'Бронирование и расписание становятся',
    titleBreak: true,
    titleContinue: 'единым',
    highlightedText: ' workflow.',
    description:
      'Опубликуйте услуги, слоты и специалистов один раз. Клиенты бронируют сами, календари сотрудников обновляются в реальном времени.',
    image: aboutScheduling,
    imageAlt: 'Панель бронирования и доступности Schedulaa',
    buttonText: 'Перейти к booking',
    buttonHref: '/booking',
    features: [
      { icon: 'ns-shape-6', title: 'Live availability', description: 'Вид клиентов и сотрудников всегда синхронизирован.' },
      { icon: 'ns-shape-46', title: 'Назначение специалистов', description: 'Контроль услуг, комнат и календарей по ролям.' },
      { icon: 'ns-shape-47', title: 'Self-reschedule', description: 'Меньше ручных изменений и операционной нагрузки.' },
    ],
  },
  {
    id: 'privacy',
    badge: 'О платформе',
    title: 'Продавайте услуги и товары через',
    titleBreak: false,
    highlightedText: ' единый checkout.',
    description:
      'Объединяйте бронирования, add-ons, товары, депозиты и чаевые в одной корзине со Stripe checkout и авто-квитанциями.',
    image: aboutCommerce,
    imageAlt: 'Коммерция и checkout в Schedulaa',
    buttonText: 'Перейти к функциям',
    buttonHref: '/features',
    features: [
      { icon: 'ns-shape-6', title: 'Единая корзина', description: 'Товары и услуги в одном процессе покупки.' },
      { icon: 'ns-shape-46', title: 'Налоги и возвраты', description: 'Безопасный checkout с операционными контролями.' },
      { icon: 'ns-shape-47', title: 'Revenue analytics', description: 'Отслеживайте загрузку, отток и топ-услуги.' },
    ],
  },
  {
    id: 'exchanges',
    badge: 'О платформе',
    title: 'Интеграции и автоматизация дают',
    titleBreak: false,
    highlightedText: ' операционный масштаб.',
    description:
      'Интегрируйте Schedulaa с учётными системами, запускайте re-engagement кампании и синхронизируйте внешние системы через API и webhook.',
    image: aboutAutomation,
    imageAlt: 'Интеграции и автоматизация Schedulaa',
    buttonText: 'Перейти к документации',
    buttonHref: '/docs',
    features: [
      { icon: 'ns-shape-6', title: 'Zapier + webhook', description: 'Запускайте workflow без ручных передач.' },
      { icon: 'ns-shape-46', title: 'Синхронизация с финансами', description: 'Связь payroll/инвойсов с финансовыми инструментами.' },
      { icon: 'ns-shape-47', title: 'Авто-кампании', description: 'Возврат no-show, VIP и клиентов с риском оттока.' },
    ],
  },
];

const aboutTabsDataZh = [
  {
    id: 'blockchain',
    badge: '关于',
    title: '薪资与合规专为',
    titleBreak: false,
    highlightedText: '服务团队打造。',
    description: '支持加班、小费、节假日规则的薪资流程，并可导出 W-2、T4、ROE，报告可审计。',
    image: aboutPayroll,
    imageAlt: 'Schedulaa 薪资与合规看板',
    buttonText: '查看薪资',
    buttonHref: '/payroll',
    features: [
      { icon: 'ns-shape-6', title: '地区规则', description: '支持美国与加拿大薪资场景。' },
      { icon: 'ns-shape-46', title: '审计级导出', description: '合规材料生成更可靠。' },
      { icon: 'ns-shape-47', title: '员工自助', description: '员工可查看工资单与薪资明细。' },
    ],
  },
  {
    id: 'decentralization',
    badge: '关于',
    title: '预约与排班成为',
    titleBreak: true,
    titleContinue: '一个连贯的',
    highlightedText: '工作流。',
    description: '一次发布服务、时段和人员。客户自助预约，员工日历实时更新，避免重复录入。',
    image: aboutScheduling,
    imageAlt: 'Schedulaa 预约与可用时段看板',
    buttonText: '查看预约',
    buttonHref: '/booking',
    features: [
      { icon: 'ns-shape-6', title: '实时可用性', description: '员工端与客户端始终同步。' },
      { icon: 'ns-shape-46', title: '人员分配', description: '按角色管理服务、房间与日历。' },
      { icon: 'ns-shape-47', title: '自助改约', description: '减少手动变更与运营负担。' },
    ],
  },
  {
    id: 'privacy',
    badge: '关于',
    title: '服务与商品可在',
    titleBreak: false,
    highlightedText: '一个结账流程中完成。',
    description: '将预约、附加项、商品、押金和小费合并到同一购物车，配合 Stripe 安全结账与自动回执。',
    image: aboutCommerce,
    imageAlt: 'Schedulaa 电商与结账分析',
    buttonText: '查看功能',
    buttonHref: '/features',
    features: [
      { icon: 'ns-shape-6', title: '统一购物车', description: '商品与服务在同一购买流程中完成。' },
      { icon: 'ns-shape-46', title: '税务与退款', description: '安全结账并具备运营控制能力。' },
      { icon: 'ns-shape-47', title: '营收分析', description: '跟踪利用率、流失与高绩效服务。' },
    ],
  },
  {
    id: 'exchanges',
    badge: '关于',
    title: '集成与自动化驱动',
    titleBreak: false,
    highlightedText: '运营规模化。',
    description: '将 Schedulaa 连接到财务工具，触发唤回活动，并通过 API 与 Webhook 同步外部系统。',
    image: aboutAutomation,
    imageAlt: 'Schedulaa 集成与自动化工作流',
    buttonText: '查看文档',
    buttonHref: '/docs',
    features: [
      { icon: 'ns-shape-6', title: 'Zapier + Webhook', description: '无需人工交接即可触发流程。' },
      { icon: 'ns-shape-46', title: '财务同步', description: '将薪资与发票数据连接到财务系统。' },
      { icon: 'ns-shape-47', title: '自动化营销', description: '自动触达未到店、VIP 与流失风险客户。' },
    ],
  },
];

const AboutTabContent = ({ locale = 'en' }: { locale?: AppLocale }) => {
  const aboutTabsData =
    locale === 'fa'
      ? aboutTabsDataFa
      : locale === 'ru'
        ? aboutTabsDataRu
        : locale === 'zh'
          ? aboutTabsDataZh
          : aboutTabsDataEn;

  return (
    <>
      {aboutTabsData.map((tab, index) => (
        <TabContent key={tab.id} index={index}>
          <div className="flex w-full flex-col items-start justify-between gap-x-24 gap-y-14 lg:flex-row">
            <div className="flex-1 sm:mx-auto sm:max-w-[500px] lg:max-w-full">
              <span className="badge badge-green mb-3.5 xl:mb-5">{tab.badge}</span>
              <h2 className={`${index === 0 ? 'lg:text-heading-2 text-heading-4' : ''} mb-3 text-white`}>
                {tab.title}
                {tab.titleBreak && <br className="hidden lg:block" />}
                {tab.titleContinue && ` ${tab.titleContinue}`}
                <span className={`hero-text-gradient hero-text-color-2 ${index === 1 ? 'inline-block' : ''}`}>
                  {tab.highlightedText}
                </span>
              </h2>
              <p className={`${index === 0 ? 'mb-6 xl:mb-8' : 'mb-8'} text-white/70 lg:max-w-[478px]`}>
                {tab.description}
              </p>
              <ul className={`${index === 0 ? 'mb-7 xl:mb-14' : 'mb-7 md:mb-14'} space-y-1.5`}>
                {tab.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex list-none items-center gap-4 py-2">
                    <span className={`${feature.icon} text-white/85 text-[36px]`}></span>
                    <div>
                      <strong className="text-tagline-1 text-white font-medium">
                        {feature.title}
                      </strong>
                      <p className="text-tagline-2 text-white/65 font-normal">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div>
                <LinkButton
                  href={tab.buttonHref}
                  className="btn btn-white btn-lg md:btn-xl dark:btn-transparent hover:btn-primary w-full md:w-auto">
                  {tab.buttonText}
                </LinkButton>
              </div>
            </div>
            {/* About Image */}
            <div className="flex-1 sm:mx-auto sm:max-w-[500px] lg:max-w-full">
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[620px]" style={{ transform: 'perspective(1200px) rotateX(2.5deg)' }}>
                  <div className="pointer-events-none absolute -inset-3 rounded-[24px] bg-linear-[145deg,rgba(0,194,255,0.18)_0%,rgba(157,255,0,0.08)_45%,rgba(0,0,0,0.1)_100%] blur-lg" />
                  <div className="pointer-events-none absolute -inset-x-8 -bottom-6 h-14 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,180,255,0.28)_0%,rgba(0,0,0,0)_72%)]" />
                  <figure className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#0b1220] p-2 shadow-[0_20px_56px_rgba(0,0,0,0.45)]">
                    <Image src={tab.image} alt={tab.imageAlt} className="h-full w-full rounded-[14px] object-cover" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </TabContent>
      ))}
    </>
  );
};
AboutTabContent.displayName = 'AboutTabContent';
export default AboutTabContent;
