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
    badge: '\u041e \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435',
    title: '\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0438 \u043a\u043e\u043c\u043f\u043b\u0430\u0435\u043d\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u0434\u043b\u044f',
    titleBreak: false,
    highlightedText: ' \u0441\u0435\u0440\u0432\u0438\u0441\u043d\u044b\u0445 \u043a\u043e\u043c\u0430\u043d\u0434.',
    description:
      '\u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0439\u0442\u0435 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0446\u0438\u043a\u043b \u0441 \u043f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u043c\u0438, \u0447\u0430\u0435\u0432\u044b\u043c\u0438 \u0438 \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u043a\u0430\u043c\u0438, \u0437\u0430\u0442\u0435\u043c \u0432\u044b\u0433\u0440\u0443\u0436\u0430\u0439\u0442\u0435 W-2, T4 \u0438 ROE \u0441 \u0430\u0443\u0434\u0438\u0442-\u0433\u043e\u0442\u043e\u0432\u043e\u0439 \u043e\u0442\u0447\u0435\u0442\u043d\u043e\u0441\u0442\u044c\u044e.',
    image: aboutPayroll,
    imageAlt: '\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0438 \u043a\u043e\u043c\u043f\u043b\u0430\u0435\u043d\u0441 \u0432 Schedulaa',
    buttonText: '\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0443',
    buttonHref: '/payroll',
    features: [
      { icon: 'ns-shape-6', title: '\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430', description: '\u041f\u043e\u043a\u0440\u044b\u0442\u0438\u0435 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u0432 \u0421\u0428\u0410 \u0438 \u041a\u0430\u043d\u0430\u0434\u044b.' },
      { icon: 'ns-shape-46', title: '\u0410\u0443\u0434\u0438\u0442-\u0433\u043e\u0442\u043e\u0432\u044b\u0435 \u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0438', description: '\u0421\u043e\u0437\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043a\u043e\u043c\u043f\u043b\u0430\u0435\u043d\u0441-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0431\u0435\u0437 \u0440\u0443\u0447\u043d\u043e\u0439 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0438.' },
      { icon: 'ns-shape-47', title: '\u0421\u0430\u043c\u043e\u0441\u0435\u0440\u0432\u0438\u0441 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430', description: '\u0420\u0430\u0441\u0447\u0435\u0442\u043d\u044b\u0435 \u043b\u0438\u0441\u0442\u043a\u0438 \u0438 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b.' },
    ],
  },
  {
    id: 'decentralization',
    badge: '\u041e \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435',
    title: '\u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0442\u0430\u043d\u043e\u0432\u044f\u0442\u0441\u044f',
    titleBreak: true,
    titleContinue: '\u043e\u0434\u043d\u0438\u043c \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u043c',
    highlightedText: ' \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u043c.',
    description:
      '\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u0443\u0439\u0442\u0435 \u0443\u0441\u043b\u0443\u0433\u0438, \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c \u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u0432 \u043e\u0434\u0438\u043d \u0440\u0430\u0437. \u041a\u043b\u0438\u0435\u043d\u0442\u044b \u0431\u0440\u043e\u043d\u0438\u0440\u0443\u044e\u0442 \u0441\u0430\u043c\u0438, \u0430 \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438.',
    image: aboutScheduling,
    imageAlt: '\u0414\u0430\u0448\u0431\u043e\u0440\u0434 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f Schedulaa',
    buttonText: '\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435',
    buttonHref: '/booking',
    features: [
      { icon: 'ns-shape-6', title: '\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438', description: '\u0412\u0438\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0435\u043d.' },
      { icon: 'ns-shape-46', title: '\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u0432', description: '\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u0443\u0441\u043b\u0443\u0433\u0430\u043c\u0438, \u043a\u043e\u043c\u043d\u0430\u0442\u0430\u043c\u0438 \u0438 \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044f\u043c\u0438 \u043f\u043e \u0440\u043e\u043b\u044f\u043c.' },
      { icon: 'ns-shape-47', title: '\u0421\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u043d\u043e\u0441', description: '\u041c\u0435\u043d\u044c\u0448\u0435 \u0440\u0443\u0447\u043d\u044b\u0445 \u043f\u0440\u0430\u0432\u043e\u043a \u0438 \u0430\u0434\u043c\u0438\u043d-\u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438.' },
    ],
  },
  {
    id: 'privacy',
    badge: '\u041e \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435',
    title: '\u041f\u0440\u043e\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0443\u0441\u043b\u0443\u0433\u0438 \u0438 \u0442\u043e\u0432\u0430\u0440\u044b \u0447\u0435\u0440\u0435\u0437',
    titleBreak: false,
    highlightedText: ' \u043e\u0434\u0438\u043d \u0447\u0435\u043a\u0430\u0443\u0442.',
    description:
      '\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0439\u0442\u0435 \u0431\u0440\u043e\u043d\u0438, \u0434\u043e\u043f\u0443\u0441\u043b\u0443\u0433\u0438, \u0442\u043e\u0432\u0430\u0440\u044b, \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u044b \u0438 \u0447\u0430\u0435\u0432\u044b\u0435 \u0432 \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u0440\u0437\u0438\u043d\u0435 \u0441 Stripe \u0438 \u0430\u0432\u0442\u043e\u0447\u0435\u043a\u0430\u043c\u0438.',
    image: aboutCommerce,
    imageAlt: '\u0422\u043e\u0440\u0433\u043e\u0432\u043b\u044f \u0438 \u0447\u0435\u043a\u0430\u0443\u0442 \u0432 Schedulaa',
    buttonText: '\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438',
    buttonHref: '/features',
    features: [
      { icon: 'ns-shape-6', title: '\u0415\u0434\u0438\u043d\u0430\u044f \u043a\u043e\u0440\u0437\u0438\u043d\u0430', description: '\u0423\u0441\u043b\u0443\u0433\u0438 \u0438 \u0442\u043e\u0432\u0430\u0440\u044b \u0432 \u043e\u0434\u043d\u043e\u0439 \u043f\u043e\u043a\u0443\u043f\u043a\u0435.' },
      { icon: 'ns-shape-46', title: '\u0412\u043e\u0437\u0432\u0440\u0430\u0442\u044b \u0438 \u043d\u0430\u043b\u043e\u0433\u0438', description: '\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439 \u0447\u0435\u043a\u0430\u0443\u0442 \u0441 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u043c\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f\u043c\u0438.' },
      { icon: 'ns-shape-47', title: '\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430 \u0434\u043e\u0445\u043e\u0434\u0430', description: '\u041e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443, \u043e\u0442\u0442\u043e\u043a \u0438 \u043b\u0443\u0447\u0448\u0438\u0445 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u0432.' },
    ],
  },
  {
    id: 'exchanges',
    badge: '\u041e \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435',
    title: '\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f \u0443\u0441\u043a\u043e\u0440\u044f\u044e\u0442',
    titleBreak: false,
    highlightedText: ' \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0440\u043e\u0441\u0442.',
    description:
      '\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0439\u0442\u0435 Schedulaa \u043a \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u044b\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c, \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0439\u0442\u0435 \u043a\u0430\u043c\u043f\u0430\u043d\u0438\u0438 \u043f\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0443 \u0438 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u0432\u043d\u0435\u0448\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0447\u0435\u0440\u0435\u0437 API \u0438 \u0432\u0435\u0431\u0445\u0443\u043a\u0438.',
    image: aboutAutomation,
    imageAlt: '\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f Schedulaa',
    buttonText: '\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e',
    buttonHref: '/docs',
    features: [
      { icon: 'ns-shape-6', title: 'Zapier + \u0432\u0435\u0431\u0445\u0443\u043a\u0438', description: '\u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0439\u0442\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u044b \u0431\u0435\u0437 \u0440\u0443\u0447\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u0434\u0430\u0447.' },
      { icon: 'ns-shape-46', title: '\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0441 \u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u0435\u0439', description: '\u041f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0443 \u0438 \u0438\u043d\u0432\u043e\u0439\u0441\u044b \u0432 \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b.' },
      { icon: 'ns-shape-47', title: '\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f \u043a\u0430\u043c\u043f\u0430\u043d\u0438\u0439', description: '\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0442\u0435 no-show, VIP \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u0441 \u0440\u0438\u0441\u043a\u043e\u043c \u043e\u0442\u0442\u043e\u043a\u0430.' },
    ],
  },
];

const aboutTabsDataZh = [
  {
    id: 'blockchain',
    badge: '\u5173\u4e8e',
    title: '\u85aa\u8d44\u4e0e\u5408\u89c4\u4e13\u4e3a',
    titleBreak: false,
    highlightedText: '\u670d\u52a1\u578b\u56e2\u961f\u800c\u8bbe\u8ba1\u3002',
    description:
      '\u5728\u5e73\u53f0\u5185\u8fd0\u884c\u85aa\u8d44\u6d41\u7a0b\uff0c\u5904\u7406\u52a0\u73ed\u3001\u5c0f\u8d39\u548c\u8282\u5047\u65e5\u89c4\u5219\uff0c\u5e76\u5bfc\u51fa W-2\u3001T4\u3001ROE \u53ca\u5ba1\u8ba1\u7ea7\u62a5\u8868\u3002',
    image: aboutPayroll,
    imageAlt: 'Schedulaa \u85aa\u8d44\u4e0e\u5408\u89c4\u4eea\u8868\u76d8',
    buttonText: '\u67e5\u770b\u85aa\u8d44',
    buttonHref: '/payroll',
    features: [
      { icon: 'ns-shape-6', title: '\u533a\u57df\u89c4\u5219', description: '\u652f\u6301\u7f8e\u56fd + \u52a0\u62ff\u5927\u85aa\u8d44\u573a\u666f\u3002' },
      { icon: 'ns-shape-46', title: '\u53ef\u5ba1\u8ba1\u5bfc\u51fa', description: '\u5feb\u901f\u751f\u6210\u5408\u89c4\u6240\u9700\u6587\u4ef6\u3002' },
      { icon: 'ns-shape-47', title: '\u5458\u5de5\u81ea\u52a9', description: '\u85aa\u8d44\u5355\u53ef\u89c1\uff0c\u6d41\u7a0b\u66f4\u900f\u660e\u3002' },
    ],
  },
  {
    id: 'decentralization',
    badge: '\u5173\u4e8e',
    title: '\u9884\u7ea6\u4e0e\u6392\u73ed\u53d8\u6210',
    titleBreak: true,
    titleContinue: '\u4e00\u6761\u8fde\u8d2f',
    highlightedText: '\u7684\u5de5\u4f5c\u6d41\u3002',
    description:
      '\u53ea\u9700\u4e00\u6b21\u53d1\u5e03\u670d\u52a1\u3001\u65f6\u95f4\u4e0e\u6280\u5e08\u5b89\u6392\uff0c\u5ba2\u6237\u5373\u53ef\u81ea\u52a9\u9884\u7ea6\uff0c\u56e2\u961f\u65e5\u5386\u5b9e\u65f6\u66f4\u65b0\u3002',
    image: aboutScheduling,
    imageAlt: 'Schedulaa \u9884\u7ea6\u4e0e\u53ef\u7528\u6027\u4eea\u8868\u76d8',
    buttonText: '\u67e5\u770b\u9884\u7ea6',
    buttonHref: '/booking',
    features: [
      { icon: 'ns-shape-6', title: '\u5b9e\u65f6\u53ef\u7528\u6027', description: '\u5458\u5de5\u4e0e\u5ba2\u6237\u89c6\u56fe\u59cb\u7ec8\u540c\u6b65\u3002' },
      { icon: 'ns-shape-46', title: '\u670d\u52a1\u4eba\u5458\u5206\u914d', description: '\u6309\u89d2\u8272\u7ba1\u7406\u670d\u52a1\u3001\u623f\u95f4\u4e0e\u65e5\u5386\u3002' },
      { icon: 'ns-shape-47', title: '\u81ea\u52a9\u6539\u671f', description: '\u51cf\u5c11\u624b\u52a8\u6539\u52a8\u4e0e\u7ba1\u7406\u8017\u65f6\u3002' },
    ],
  },
  {
    id: 'privacy',
    badge: '\u5173\u4e8e',
    title: '\u5728',
    titleBreak: false,
    highlightedText: '\u4e00\u4e2a\u7ed3\u8d26\u6d41\u7a0b\u4e2d\u5b8c\u6210\u670d\u52a1\u4e0e\u5546\u54c1\u9500\u552e\u3002',
    description:
      '\u5c06\u9884\u7ea6\u3001\u9644\u52a0\u9879\u3001\u5546\u54c1\u3001\u5b9a\u91d1\u4e0e\u5c0f\u8d39\u6574\u5408\u5230\u4e00\u6b21\u652f\u4ed8\u6d41\u7a0b\uff0c\u652f\u6301 Stripe \u7ed3\u8d26\u4e0e\u81ea\u52a8\u56de\u6267\u3002',
    image: aboutCommerce,
    imageAlt: 'Schedulaa \u5546\u4e1a\u4e0e\u7ed3\u8d26\u5206\u6790',
    buttonText: '\u67e5\u770b\u529f\u80fd',
    buttonHref: '/features',
    features: [
      { icon: 'ns-shape-6', title: '\u7edf\u4e00\u8d2d\u7269\u8f66', description: '\u670d\u52a1\u4e0e\u5546\u54c1\u53ef\u4e00\u6b21\u8d2d\u4e70\u3002' },
      { icon: 'ns-shape-46', title: '\u9000\u6b3e\u4e0e\u7a0e\u52a1\u652f\u6301', description: '\u5b89\u5168\u7ed3\u8d26 + \u8fd0\u8425\u9632\u62a4\u63a7\u5236\u3002' },
      { icon: 'ns-shape-47', title: '\u6536\u5165\u5206\u6790', description: '\u8ddf\u8e2a\u5229\u7528\u7387\u3001\u6d41\u5931\u4e0e\u9ad8\u7ee9\u6548\u56e2\u961f\u3002' },
    ],
  },
  {
    id: 'exchanges',
    badge: '\u5173\u4e8e',
    title: '\u96c6\u6210\u4e0e\u81ea\u52a8\u5316\u63a8\u52a8',
    titleBreak: false,
    highlightedText: '\u8fd0\u8425\u89c4\u6a21\u5316\u589e\u957f\u3002',
    description:
      '\u5c06 Schedulaa \u8fde\u63a5\u5230\u8d22\u52a1\u5de5\u5177\uff0c\u542f\u52a8\u5ba2\u6237\u53ec\u56de\u8425\u9500\uff0c\u5e76\u901a\u8fc7 API \u4e0e Webhook \u4fdd\u6301\u5916\u90e8\u7cfb\u7edf\u540c\u6b65\u3002',
    image: aboutAutomation,
    imageAlt: 'Schedulaa \u96c6\u6210\u4e0e\u81ea\u52a8\u5316\u5de5\u4f5c\u6d41',
    buttonText: '\u67e5\u770b\u6587\u6863',
    buttonHref: '/docs',
    features: [
      { icon: 'ns-shape-6', title: 'Zapier + webhook', description: '\u65e0\u9700\u624b\u52a8\u4ea4\u63a5\u5373\u53ef\u89e6\u53d1\u6d41\u7a0b\u3002' },
      { icon: 'ns-shape-46', title: '\u8d22\u52a1\u540c\u6b65', description: '\u5c06\u85aa\u8d44\u4e0e\u5f00\u7968\u6570\u636e\u5bf9\u63a5\u5230\u8d22\u52a1\u7cfb\u7edf\u3002' },
      { icon: 'ns-shape-47', title: '\u8425\u9500\u81ea\u52a8\u5316', description: '\u81ea\u52a8\u53ec\u56de no-show\u3001VIP \u53ca\u6d41\u5931\u98ce\u9669\u5ba2\u6237\u3002' },
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
