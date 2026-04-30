import { AppLocale } from '@/utils/locale';

type FinanceCard = {
  title: string;
  body: string;
  note?: string;
};

type BusinessFinanceCopy = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    start: string;
    howItWorks: string;
    helper: string;
  };
  pain: {
    badge: string;
    title: string;
    body: string;
    points: string[];
  };
  workflow: {
    badge: string;
    title: string;
    body: string;
    note: string;
    steps: string[];
  };
  modules: {
    badge: string;
    title: string;
    cardLabel: string;
    cards: FinanceCard[];
  };
  payments: {
    badge: string;
    title: string;
    body: string;
    cardLabel: string;
    cards: FinanceCard[];
  };
  privacy: {
    badge: string;
    title: string;
    body: string;
    managerBadge: string;
    managerTitle: string;
    employeeBadge: string;
    employeeTitle: string;
    restrictedBadge: string;
    restrictedTitle: string;
    managerSees: string[];
    employeeSees: string[];
    employeeDoesNotSee: string[];
  };
  reporting: {
    badge: string;
    title: string;
    body: string;
    cards: string[];
    note: string;
  };
  workflowFit: {
    badge: string;
    title: string;
    bookingTitle: string;
    financeTitle: string;
    booking: string[];
    finance: string[];
  };
  cta: {
    badge: string;
    title: string;
    body: string;
    start: string;
    demo: string;
  };
};

const en: BusinessFinanceCopy = {
  metaTitle: 'Business Finance for Service Teams | Schedulaa',
  metaDescription:
    'Manage quote requests, estimates, client approvals, invoices, hosted payment links, refunds, work orders, field reports, materials, gross/net reporting, tax summaries, and month-end readiness in one workflow.',
  hero: {
    badge: 'Business Finance',
    title: 'Business Finance for Service Teams',
    subtitle:
      'From quote request to approved estimate, invoice, hosted payment link, work order, field report, refunds when needed, and month-end readiness - all in one workflow.',
    start: 'Start with Schedulaa',
    howItWorks: 'See how it works',
    helper:
      'Built for service businesses that need more than booking: quotes, crews, materials, approvals, payments, refunds, and job profitability.',
  },
  pain: {
    badge: 'The operational gap',
    title: 'Quotes, field work, and payments should not live in separate spreadsheets',
    body:
      'Service businesses lose time when quoting, approvals, billing, crews, and materials all live in different systems. Business Finance keeps the handoff in one workflow instead of pushing managers back into manual tracking.',
    points: [
      'Quote requests come from calls, website forms, emails, or DMs.',
      'Estimates get lost in manual follow-ups.',
      'Invoices, payment links, and refunds are disconnected from job execution.',
      'Employees report work after the job, but managers still need to approve materials.',
      'Month-end reporting takes too long because the data is scattered.',
    ],
  },
  workflow: {
    badge: 'End-to-end workflow',
    title: 'One flow from request to completed job',
    body:
      'Capture the request, price the work, collect approval, turn it into an invoice and work order, then review what becomes official before month-end.',
    note:
      'Quotes, approvals, billing, execution, and month-end review belong in one operating flow. This page follows the actual Business Finance path inside Schedulaa.',
    steps: [
      'Capture the quote request',
      'Link or create the client',
      'Build and send the estimate',
      'Let the client accept or reject online',
      'Convert to invoice and create a payment link',
      'Create the work order and assign the team',
      'Employee submits a field report',
      'Manager reviews materials and closes the job',
      'Track gross and net reporting, tax summary, refunds, and month-end readiness',
    ],
  },
  modules: {
    badge: 'Core modules',
    title: 'Connected tools for quoting, execution, and finance handoff',
    cardLabel: 'Module',
    cards: [
      {
        title: 'Quote Requests',
        body: 'Capture customer requests from phone, website, WhatsApp note, email, or manual entry.',
        note: 'WhatsApp note is a source label, not WhatsApp automation.',
      },
      {
        title: 'Estimates and Client Approval',
        body: 'Send a review link, track viewed, accepted, or rejected status, and revise when needed.',
      },
      {
        title: 'Invoices and Payment Links',
        body: 'Convert accepted estimates into invoices, create hosted payment links, and keep payment status connected to the finance invoice.',
      },
      {
        title: 'Work Orders',
        body: 'Turn approved work into scheduled jobs with instructions and planned materials.',
      },
      {
        title: 'Field Reports',
        body: 'Employees report completed work, issues found, and materials used.',
      },
      {
        title: 'Manager Review',
        body: 'Managers approve what becomes official before inventory or invoice updates happen.',
      },
      {
        title: 'Inventory and Purchases',
        body: 'Track materials, vendors, stock-in purchases, and approved usage.',
      },
      {
        title: 'Reporting and Month-End',
        body: 'See gross invoice totals, refunds, net collected amounts, tax summary, profitability, missing receipts, low stock, and month-end readiness.',
      },
    ],
  },
  payments: {
    badge: 'Payments and refunds',
    title: 'Payment, refund, and reporting stay connected',
    body:
      'Create hosted invoice payment links, see paid status after payment reconciliation, issue full or partial invoice refunds when needed, and keep gross, refund, and net reporting visible for month-end review.',
    cardLabel: 'Connected flow',
    cards: [
      {
        title: 'Hosted payment links',
        body: 'Create or reuse hosted invoice payment links from the finance invoice workflow and keep the local invoice total aligned with what the customer pays.',
      },
      {
        title: 'Paid status reconciliation',
        body: 'When a hosted invoice is paid, Business Finance shows the invoice as paid and keeps the payment state visible inside the invoice detail and Payments & Refunds view.',
      },
      {
        title: 'Invoice refunds',
        body: 'Issue full or partial refunds from the finance invoice detail while preserving the original estimate, invoice line items, work order, and job history.',
      },
      {
        title: 'Gross and net reporting',
        body: 'Keep original invoice totals for history, then review refunds, net collected amount, tax refunded, and month-end refund activity separately.',
      },
    ],
  },
  privacy: {
    badge: 'Privacy by role',
    title: 'Managers keep control. Employees see only what they need.',
    body:
      'Business Finance keeps pricing, costs, and final approval decisions with managers while giving employees only the work context required to complete the job and report back.',
    managerBadge: 'Manager view',
    managerTitle: 'Manager sees',
    employeeBadge: 'Employee view',
    employeeTitle: 'Employee sees',
    restrictedBadge: 'Restricted',
    restrictedTitle: 'Employee does not see',
    managerSees: [
      'Estimates, invoices, and payment links',
      'Profitability',
      'Costs',
      'Reviews',
      'Month-end reports',
    ],
    employeeSees: ['Assigned work orders', 'Schedule and instructions', 'Planned materials', 'Field report form'],
    employeeDoesNotSee: ['Invoice totals', 'Profitability', 'Labor cost', 'Vendor cost', 'Manager-only notes'],
  },
  reporting: {
    badge: 'Reporting',
    title: 'Know the job numbers before month-end',
    body:
      'Reports are operational readiness tools designed to help managers and accountants review the business faster. Gross totals, refunds, net collected amounts, and tax summaries help prepare records for review; they are not a replacement for professional tax or accounting signoff.',
    cards: [
      'Gross invoice total',
      'Refunds',
      'Net invoice total',
      'Estimated margin',
      'Approved material cost',
      'Tax refunded',
      'Net tax collected',
      'Missing receipts',
      'Pending reviews',
    ],
    note:
      'Business Finance reporting helps operating teams prepare cleaner month-end handoffs. Use it to review records, refunds, and net activity before professional accounting signoff.',
  },
  workflowFit: {
    badge: 'Workflow fit',
    title: 'Use Booking for known services. Use Business Finance for custom jobs.',
    bookingTitle: 'Booking',
    financeTitle: 'Business Finance',
    booking: ['Known service', 'Known price', 'Known employee/time', 'Customer books directly'],
    finance: [
      'Custom pricing',
      'Quote approval needed',
      'Invoice payment links',
      'Work order execution',
      'Material review',
      'Refund and net reporting',
    ],
  },
  cta: {
    badge: 'Get started',
    title: 'Run quotes, jobs, and finance handoff in one place',
    body:
      'Bring quote requests, approvals, payment collection, refunds, work execution, and reporting into one operating system instead of stitching them together later.',
    start: 'Start with Schedulaa',
    demo: 'Book a demo',
  },
};

const copyByLocale: Partial<Record<AppLocale, BusinessFinanceCopy>> = {
  en,
  fa: {
    ...en,
    metaTitle: 'مدیریت مالی کسب‌وکارهای خدماتی | Schedulaa',
    metaDescription:
      'در Schedulaa درخواست قیمت، برآورد، تأیید مشتری، فاکتور، لینک پرداخت، بازپرداخت، دستور کار، گزارش کارمند، مواد مصرفی، گزارش ناخالص/خالص، خلاصه مالیات و آمادگی پایان ماه را در یک جریان مدیریت کنید.',
    hero: {
      badge: 'مالی کسب‌وکار',
      title: 'مدیریت مالی برای تیم‌های خدماتی',
      subtitle:
        'از درخواست قیمت تا برآورد تأییدشده، فاکتور، لینک پرداخت میزبانی‌شده، دستور کار، گزارش میدانی، بازپرداخت در صورت نیاز و آمادگی پایان ماه - همه در یک جریان کاری.',
      start: 'شروع با Schedulaa',
      howItWorks: 'مشاهده روند کار',
      helper:
        'برای کسب‌وکارهای خدماتی که فراتر از رزرو نیاز دارند: قیمت‌گذاری، تیم‌ها، مواد، تأییدها، پرداخت‌ها، بازپرداخت‌ها و سودآوری هر کار.',
    },
    pain: {
      badge: 'شکاف عملیاتی',
      title: 'پیشنهاد قیمت، کار میدانی و پرداخت نباید در فایل‌های جدا بمانند',
      body:
        'کسب‌وکارهای خدماتی زمانی را از دست می‌دهند که قیمت‌گذاری، تأییدها، صورتحساب، تیم‌ها و مواد در سیستم‌های مختلف باشند. Business Finance این تحویل را در یک جریان نگه می‌دارد و مدیر را به پیگیری دستی برنمی‌گرداند.',
      points: [
        'درخواست‌های قیمت از تماس، فرم سایت، ایمیل یا پیام مستقیم می‌آیند.',
        'برآوردها در پیگیری‌های دستی گم می‌شوند.',
        'فاکتورها، لینک‌های پرداخت و بازپرداخت‌ها از اجرای کار جدا هستند.',
        'کارمند بعد از انجام کار گزارش می‌دهد، اما مدیر هنوز باید مواد را تأیید کند.',
        'گزارش‌گیری پایان ماه طولانی می‌شود چون داده‌ها پراکنده هستند.',
      ],
    },
    workflow: {
      badge: 'جریان کامل',
      title: 'یک مسیر از درخواست تا کار تکمیل‌شده',
      body:
        'درخواست را ثبت کنید، کار را قیمت‌گذاری کنید، تأیید بگیرید، آن را به فاکتور و دستور کار تبدیل کنید و پیش از پایان ماه خروجی نهایی را بازبینی کنید.',
      note:
        'پیشنهاد قیمت، تأیید، صورتحساب، اجرا و بازبینی پایان ماه باید در یک جریان عملیاتی باشند. این صفحه مسیر واقعی Business Finance را در Schedulaa نشان می‌دهد.',
      steps: [
        'ثبت درخواست قیمت',
        'اتصال یا ایجاد مشتری',
        'ساخت و ارسال برآورد',
        'اجازه دهید مشتری آنلاین قبول یا رد کند',
        'تبدیل به فاکتور و ساخت لینک پرداخت',
        'ایجاد دستور کار و تخصیص تیم',
        'ارسال گزارش میدانی توسط کارمند',
        'بازبینی مواد و بستن کار توسط مدیر',
        'پیگیری گزارش ناخالص و خالص، خلاصه مالیات، بازپرداخت‌ها و آمادگی پایان ماه',
      ],
    },
    modules: {
      badge: 'ماژول‌های اصلی',
      title: 'ابزارهای متصل برای قیمت‌گذاری، اجرا و تحویل مالی',
      cardLabel: 'ماژول',
      cards: [
        {
          title: 'درخواست‌های قیمت',
          body: 'درخواست مشتری را از تلفن، سایت، یادداشت واتساپ، ایمیل یا ورود دستی ثبت کنید.',
          note: 'یادداشت واتساپ فقط برچسب منبع است، نه اتوماسیون واتساپ.',
        },
        { title: 'برآورد و تأیید مشتری', body: 'لینک بازبینی بفرستید و وضعیت دیده‌شده، پذیرفته‌شده یا ردشده را دنبال کنید.' },
        { title: 'فاکتورها و لینک‌های پرداخت', body: 'برآوردهای پذیرفته‌شده را به فاکتور تبدیل کنید، لینک پرداخت میزبانی‌شده بسازید و وضعیت پرداخت را به فاکتور مالی متصل نگه دارید.' },
        { title: 'دستور کار', body: 'کار تأییدشده را به شغل زمان‌بندی‌شده با دستورالعمل و مواد برنامه‌ریزی‌شده تبدیل کنید.' },
        { title: 'گزارش‌های میدانی', body: 'کارمندان کار انجام‌شده، مشکلات و مواد مصرف‌شده را گزارش می‌کنند.' },
        { title: 'بازبینی مدیر', body: 'مدیر تأیید می‌کند چه چیزی رسمی شود، پیش از آن‌که موجودی یا فاکتور به‌روزرسانی شود.' },
        { title: 'موجودی و خریدها', body: 'مواد، تأمین‌کنندگان، خریدهای انبار و مصرف تأییدشده را پیگیری کنید.' },
        { title: 'گزارش‌گیری و پایان ماه', body: 'مجموع فاکتور ناخالص، بازپرداخت‌ها، مبلغ خالص وصول‌شده، خلاصه مالیات، سودآوری، رسیدهای ناقص، کمبود موجودی و آمادگی پایان ماه را ببینید.' },
      ],
    },
    payments: {
      badge: 'پرداخت‌ها و بازپرداخت‌ها',
      title: 'پرداخت، بازپرداخت و گزارش‌گیری به هم متصل می‌مانند',
      body:
        'لینک پرداخت فاکتور میزبانی‌شده ایجاد کنید، پس از تطبیق پرداخت وضعیت پرداخت را ببینید، در صورت نیاز بازپرداخت کامل یا جزئی انجام دهید و گزارش ناخالص، بازپرداخت و خالص را برای پایان ماه در دید نگه دارید.',
      cardLabel: 'جریان متصل',
      cards: [
        { title: 'لینک‌های پرداخت میزبانی‌شده', body: 'از جریان فاکتور مالی لینک پرداخت ایجاد یا دوباره استفاده کنید و مجموع فاکتور داخلی را با مبلغ پرداختی مشتری هماهنگ نگه دارید.' },
        { title: 'تطبیق وضعیت پرداخت', body: 'وقتی فاکتور میزبانی‌شده پرداخت شود، Business Finance می‌تواند فاکتور را پرداخت‌شده نشان دهد و وضعیت پرداخت را در جزئیات فاکتور و بخش Payments & Refunds نگه دارد.' },
        { title: 'بازپرداخت فاکتور', body: 'بازپرداخت کامل یا جزئی را از داخل جزئیات فاکتور مالی انجام دهید، بدون تغییر برآورد اصلی، ردیف‌های فاکتور، دستور کار یا سابقه شغل.' },
        { title: 'گزارش ناخالص و خالص', body: 'مجموع اصلی فاکتور را برای سابقه نگه دارید و بازپرداخت‌ها، مبلغ خالص وصول‌شده، مالیات بازپرداخت‌شده و فعالیت بازپرداخت پایان ماه را جداگانه بررسی کنید.' },
      ],
    },
    privacy: {
      badge: 'حریم خصوصی بر اساس نقش',
      title: 'مدیر کنترل را نگه می‌دارد. کارمند فقط آنچه نیاز دارد را می‌بیند.',
      body:
        'Business Finance قیمت‌گذاری، هزینه‌ها و تصمیم نهایی تأیید را نزد مدیر نگه می‌دارد و فقط زمینه کاری لازم برای تکمیل کار و گزارش‌دهی را به کارمند می‌دهد.',
      managerBadge: 'نمای مدیر',
      managerTitle: 'مدیر می‌بیند',
      employeeBadge: 'نمای کارمند',
      employeeTitle: 'کارمند می‌بیند',
      restrictedBadge: 'محدود',
      restrictedTitle: 'کارمند نمی‌بیند',
      managerSees: ['برآوردها، فاکتورها و لینک‌های پرداخت', 'سودآوری', 'هزینه‌ها', 'بازبینی‌ها', 'گزارش‌های پایان ماه'],
      employeeSees: ['دستورکارهای تخصیص‌یافته', 'برنامه و دستورالعمل‌ها', 'مواد برنامه‌ریزی‌شده', 'فرم گزارش میدانی'],
      employeeDoesNotSee: ['مجموع فاکتور', 'سودآوری', 'هزینه نیروی کار', 'هزینه تأمین‌کننده', 'یادداشت‌های مخصوص مدیر'],
    },
    reporting: {
      badge: 'گزارش‌گیری',
      title: 'اعداد شغل را قبل از پایان ماه بدانید',
      body:
        'گزارش‌ها ابزار آمادگی عملیاتی هستند تا مدیران و حسابداران سریع‌تر کسب‌وکار را بازبینی کنند. مجموع‌های ناخالص، بازپرداخت‌ها، مبالغ خالص وصول‌شده و خلاصه مالیات برای بازبینی آماده می‌شوند؛ این‌ها جایگزین تأیید حرفه‌ای مالیاتی یا حسابداری نیستند.',
      cards: ['مجموع فاکتور ناخالص', 'بازپرداخت‌ها', 'مجموع فاکتور خالص', 'حاشیه سود برآوردی', 'هزینه مواد تأییدشده', 'مالیات بازپرداخت‌شده', 'مالیات خالص وصول‌شده', 'رسیدهای ناقص', 'بازبینی‌های معلق'],
      note:
        'گزارش‌گیری Business Finance به تیم‌های عملیاتی کمک می‌کند تحویل پایان ماه تمیزتری داشته باشند. از آن برای بازبینی سوابق، بازپرداخت‌ها و فعالیت خالص پیش از تأیید حرفه‌ای حسابداری استفاده کنید.',
    },
    workflowFit: {
      badge: 'تناسب جریان کاری',
      title: 'برای خدمات مشخص از Booking استفاده کنید. برای کارهای سفارشی از Business Finance استفاده کنید.',
      bookingTitle: 'Booking',
      financeTitle: 'Business Finance',
      booking: ['خدمت مشخص', 'قیمت مشخص', 'کارمند/زمان مشخص', 'مشتری مستقیم رزرو می‌کند'],
      finance: ['قیمت‌گذاری سفارشی', 'نیاز به تأیید پیشنهاد', 'لینک‌های پرداخت فاکتور', 'اجرای دستور کار', 'بازبینی مواد', 'بازپرداخت و گزارش‌گیری خالص'],
    },
    cta: {
      badge: 'شروع کنید',
      title: 'پیشنهاد قیمت، اجرای کار و تحویل مالی را در یک جا اجرا کنید',
      body:
        'درخواست قیمت، تأییدها، دریافت پرداخت، بازپرداخت، اجرای کار و گزارش‌گیری را در یک سیستم عملیاتی قرار دهید، نه این‌که بعداً آن‌ها را به هم بدوزید.',
      start: 'شروع با Schedulaa',
      demo: 'رزرو دمو',
    },
  },
  ru: {
    ...en,
    metaTitle: 'Финансы для сервисных команд | Schedulaa',
    metaDescription:
      'Управляйте запросами на расчет, сметами, согласованием клиентов, счетами, платежными ссылками, возвратами, нарядами, полевыми отчетами, материалами, валовой и чистой отчетностью, налоговыми сводками и готовностью к концу месяца в одном процессе.',
    hero: {
      badge: 'Business Finance',
      title: 'Финансы для сервисных команд',
      subtitle:
        'От запроса на расчет до утвержденной сметы, счета, платежной ссылки, наряда, полевого отчета, возвратов при необходимости и готовности к закрытию месяца - все в одном процессе.',
      start: 'Начать со Schedulaa',
      howItWorks: 'Как это работает',
      helper:
        'Для сервисных компаний, которым нужно больше, чем бронирование: расчеты, бригады, материалы, согласования, платежи, возвраты и прибыльность по работам.',
    },
    pain: {
      badge: 'Операционный разрыв',
      title: 'Расчеты, выездные работы и платежи не должны жить в отдельных таблицах',
      body:
        'Сервисные компании теряют время, когда сметы, согласования, выставление счетов, бригады и материалы живут в разных системах. Business Finance удерживает передачу процессов в одном потоке вместо ручного контроля.',
      points: [
        'Запросы на расчет приходят из звонков, форм сайта, email или личных сообщений.',
        'Сметы теряются в ручных напоминаниях.',
        'Счета, платежные ссылки и возвраты оторваны от выполнения работ.',
        'Сотрудники отчитываются после работы, но менеджеру все равно нужно утвердить материалы.',
        'Закрытие месяца занимает слишком много времени из-за разрозненных данных.',
      ],
    },
    workflow: {
      badge: 'Сквозной процесс',
      title: 'Единый поток от запроса до завершенной работы',
      body:
        'Зафиксируйте запрос, оцените работу, получите согласование, превратите это в счет и наряд, затем подтвердите итог до конца месяца.',
      note:
        'Расчеты, согласования, биллинг, выполнение и закрытие месяца должны жить в одном операционном процессе. Эта страница показывает реальный путь Business Finance в Schedulaa.',
      steps: [
        'Зафиксировать запрос на расчет',
        'Привязать или создать клиента',
        'Подготовить и отправить смету',
        'Дать клиенту возможность принять или отклонить онлайн',
        'Преобразовать в счет и создать платежную ссылку',
        'Создать наряд и назначить команду',
        'Сотрудник отправляет полевой отчет',
        'Менеджер проверяет материалы и закрывает работу',
        'Отслеживать валовую и чистую отчетность, налоговую сводку, возвраты и готовность к концу месяца',
      ],
    },
    modules: {
      badge: 'Основные модули',
      title: 'Связанные инструменты для расчетов, исполнения и финансовой передачи',
      cardLabel: 'Модуль',
      cards: [
        { title: 'Запросы на расчет', body: 'Фиксируйте запросы клиентов из телефона, сайта, заметки WhatsApp, email или вручную.', note: 'Заметка WhatsApp - это только метка источника, а не автоматизация WhatsApp.' },
        { title: 'Сметы и согласование клиента', body: 'Отправляйте ссылку на просмотр, отслеживайте просмотр, принятие или отклонение и при необходимости пересматривайте.' },
        { title: 'Счета и платежные ссылки', body: 'Преобразуйте принятые сметы в счета, создавайте hosted payment links и сохраняйте статус оплаты связанным с финансовым счетом.' },
        { title: 'Наряды', body: 'Преобразуйте утвержденную работу в запланированную задачу с инструкциями и плановыми материалами.' },
        { title: 'Полевые отчеты', body: 'Сотрудники сообщают о выполненной работе, найденных проблемах и использованных материалах.' },
        { title: 'Проверка менеджера', body: 'Менеджеры утверждают, что становится официальным, до обновления склада или счета.' },
        { title: 'Запасы и закупки', body: 'Отслеживайте материалы, поставщиков, закупки на склад и утвержденное использование.' },
        { title: 'Отчетность и конец месяца', body: 'Смотрите валовые суммы счетов, возвраты, чисто собранные суммы, налоговую сводку, прибыльность, отсутствующие чеки, низкие остатки и готовность к закрытию месяца.' },
      ],
    },
    payments: {
      badge: 'Платежи и возвраты',
      title: 'Платеж, возврат и отчетность остаются связанными',
      body:
        'Создавайте hosted payment links, видьте оплаченный статус после сверки, оформляйте полный или частичный возврат при необходимости и держите валовую, возвратную и чистую отчетность на виду к концу месяца.',
      cardLabel: 'Связанный поток',
      cards: [
        { title: 'Hosted payment links', body: 'Создавайте или повторно используйте hosted payment links в рамках финансового счета и держите локальную сумму счета синхронизированной с тем, что платит клиент.' },
        { title: 'Сверка оплаченного статуса', body: 'Когда hosted invoice оплачен, Business Finance показывает счет как оплаченный и сохраняет статус оплаты в деталях счета и представлении Payments & Refunds.' },
        { title: 'Возвраты по счету', body: 'Оформляйте полные или частичные возвраты из деталей финансового счета, не меняя исходную смету, строки счета, наряд или историю работы.' },
        { title: 'Валовая и чистая отчетность', body: 'Сохраняйте исходные суммы счетов для истории, а возвраты, чисто собранные суммы, возвращенный налог и активность возвратов в конце месяца анализируйте отдельно.' },
      ],
    },
    privacy: {
      badge: 'Приватность по ролям',
      title: 'Менеджеры сохраняют контроль. Сотрудники видят только нужное.',
      body:
        'Business Finance оставляет цены, затраты и финальные решения по утверждению у менеджеров, а сотрудникам показывает только рабочий контекст, необходимый для выполнения задачи и отчета.',
      managerBadge: 'Вид менеджера',
      managerTitle: 'Менеджер видит',
      employeeBadge: 'Вид сотрудника',
      employeeTitle: 'Сотрудник видит',
      restrictedBadge: 'Ограничено',
      restrictedTitle: 'Сотрудник не видит',
      managerSees: ['Сметы, счета и платежные ссылки', 'Прибыльность', 'Затраты', 'Проверки', 'Отчеты конца месяца'],
      employeeSees: ['Назначенные наряды', 'Расписание и инструкции', 'Плановые материалы', 'Форма полевого отчета'],
      employeeDoesNotSee: ['Суммы счетов', 'Прибыльность', 'Стоимость труда', 'Стоимость поставщика', 'Заметки только для менеджера'],
    },
    reporting: {
      badge: 'Отчетность',
      title: 'Знайте цифры по работе до конца месяца',
      body:
        'Отчеты - это инструменты операционной готовности, помогающие менеджерам и бухгалтерам быстрее проверять бизнес. Валовые суммы, возвраты, чисто собранные суммы и налоговые сводки помогают подготовить записи к проверке; они не заменяют профессиональное налоговое или бухгалтерское подтверждение.',
      cards: ['Валовая сумма счетов', 'Возвраты', 'Чистая сумма счетов', 'Оценочная маржа', 'Утвержденная стоимость материалов', 'Возвращенный налог', 'Чисто собранный налог', 'Отсутствующие чеки', 'Ожидающие проверки'],
      note:
        'Отчетность Business Finance помогает операционным командам готовить более чистую передачу к закрытию месяца. Используйте ее для проверки записей, возвратов и чистой активности до профессионального бухгалтерского подтверждения.',
    },
    workflowFit: {
      badge: 'Когда использовать',
      title: 'Используйте Booking для типовых услуг. Business Finance - для нестандартных работ.',
      bookingTitle: 'Booking',
      financeTitle: 'Business Finance',
      booking: ['Известная услуга', 'Известная цена', 'Известный сотрудник/время', 'Клиент бронирует напрямую'],
      finance: ['Индивидуальная цена', 'Нужно согласование сметы', 'Платежные ссылки по счету', 'Исполнение наряда', 'Проверка материалов', 'Возвраты и чистая отчетность'],
    },
    cta: {
      badge: 'Начать',
      title: 'Ведите расчеты, работы и финансовую передачу в одном месте',
      body:
        'Сведите запросы на расчет, согласования, прием платежей, возвраты, исполнение работ и отчетность в одну операционную систему вместо ручной склейки позже.',
      start: 'Начать со Schedulaa',
      demo: 'Записаться на демо',
    },
  },
  zh: {
    ...en,
    metaTitle: '服务团队业务财务 | Schedulaa',
    metaDescription:
      '在一个流程中管理报价请求、估算、客户批准、发票、托管支付链接、退款、工单、现场报告、材料、毛额/净额报表、税务汇总和月末准备。',
    hero: {
      badge: 'Business Finance',
      title: '服务团队业务财务',
      subtitle:
        '从报价请求到已批准估算、发票、托管支付链接、工单、现场报告、需要时的退款以及月末准备 - 全部在同一工作流中。',
      start: '开始使用 Schedulaa',
      howItWorks: '查看流程',
      helper: '适用于不仅仅需要预约的服务企业：报价、团队、材料、审批、支付、退款和作业盈利能力。',
    },
    pain: {
      badge: '运营断层',
      title: '报价、现场执行和支付不应分散在不同表格中',
      body:
        '当报价、审批、开票、团队和材料分布在不同系统中时，服务企业会浪费大量时间。Business Finance 将交接保留在一个流程中，而不是让经理回到手动跟进。',
      points: [
        '报价请求来自电话、网站表单、电子邮件或私信。',
        '估算会在手动跟进中丢失。',
        '发票、支付链接和退款与作业执行脱节。',
        '员工在完成工作后提交报告，但经理仍需审批材料。',
        '由于数据分散，月末报表准备耗时过长。',
      ],
    },
    workflow: {
      badge: '端到端流程',
      title: '从请求到完工的一条完整路径',
      body: '记录请求、为工作定价、获取批准、转成发票和工单，然后在月末前确认哪些内容成为正式记录。',
      note: '报价、审批、开票、执行和月末复核应属于同一运营流程。本页面展示的是 Schedulaa 中 Business Finance 的实际路径。',
      steps: [
        '记录报价请求',
        '关联或创建客户',
        '创建并发送估算',
        '让客户在线接受或拒绝',
        '转换为发票并创建支付链接',
        '创建工单并分配团队',
        '员工提交现场报告',
        '经理审核材料并关闭作业',
        '跟踪毛额/净额报表、税务汇总、退款和月末准备情况',
      ],
    },
    modules: {
      badge: '核心模块',
      title: '将报价、执行与财务交接连接起来的工具',
      cardLabel: '模块',
      cards: [
        { title: '报价请求', body: '从电话、网站、WhatsApp 备注、电子邮件或手动录入中记录客户请求。', note: 'WhatsApp 备注只是来源标签，并不代表 WhatsApp 自动化。' },
        { title: '估算与客户批准', body: '发送查看链接，跟踪已查看、已接受或已拒绝状态，并在需要时修订。' },
        { title: '发票与支付链接', body: '将已接受估算转换为发票，创建托管支付链接，并将支付状态与财务发票保持关联。' },
        { title: '工单', body: '将已批准的工作转为带有说明和计划材料的排程任务。' },
        { title: '现场报告', body: '员工报告已完成的工作、发现的问题以及使用的材料。' },
        { title: '经理审核', body: '在库存或发票更新之前，由经理批准哪些内容成为正式记录。' },
        { title: '库存与采购', body: '跟踪材料、供应商、入库采购和已批准的使用。' },
        { title: '报表与月末', body: '查看发票毛额总计、退款、净收款、税务汇总、盈利能力、缺失收据、低库存和月末准备情况。' },
      ],
    },
    payments: {
      badge: '支付与退款',
      title: '支付、退款和报表保持联动',
      body:
        '创建托管发票支付链接，在支付对账后查看已支付状态，在需要时发起全额或部分退款，并在月末复核中保留毛额、退款和净额视图。',
      cardLabel: '联动流程',
      cards: [
        { title: '托管支付链接', body: '在财务发票流程中创建或复用托管支付链接，并确保本地发票总额与客户实际支付金额一致。' },
        { title: '已支付状态对账', body: '当托管发票完成支付后，Business Finance 可将该发票显示为已支付，并在发票详情和 Payments & Refunds 视图中保留支付状态。' },
        { title: '发票退款', body: '从财务发票详情中发起全额或部分退款，同时保留原始估算、发票行项目、工单和作业历史。' },
        { title: '毛额与净额报表', body: '保留原始发票总额用于历史记录，同时单独查看退款、净收款、已退税额和月末退款活动。' },
      ],
    },
    privacy: {
      badge: '按角色控制权限',
      title: '经理保留控制权，员工只看到必要内容。',
      body: 'Business Finance 将价格、成本和最终批准决策保留给经理，同时只向员工显示完成工作和回报所需的工作上下文。',
      managerBadge: '经理视图',
      managerTitle: '经理可见',
      employeeBadge: '员工视图',
      employeeTitle: '员工可见',
      restrictedBadge: '受限',
      restrictedTitle: '员工不可见',
      managerSees: ['估算、发票和支付链接', '盈利能力', '成本', '审核', '月末报表'],
      employeeSees: ['已分配工单', '排程与说明', '计划材料', '现场报告表单'],
      employeeDoesNotSee: ['发票总额', '盈利能力', '人工成本', '供应商成本', '仅经理备注'],
    },
    reporting: {
      badge: '报表',
      title: '在月末前掌握作业数字',
      body:
        '这些报表是运营准备工具，帮助经理和会计更快完成业务复核。毛额、退款、净收款和税务汇总有助于准备复核记录；它们不能替代专业税务或会计签核。',
      cards: ['发票毛额总计', '退款', '发票净额总计', '预估利润', '已批准材料成本', '已退税额', '净税额', '缺失收据', '待审核事项'],
      note: 'Business Finance 报表帮助运营团队更高质量地完成月末交接。请在专业会计签核前，用它来复核记录、退款和净额活动。',
    },
    workflowFit: {
      badge: '适用场景',
      title: '已知服务用 Booking，定制作业用 Business Finance。',
      bookingTitle: 'Booking',
      financeTitle: 'Business Finance',
      booking: ['服务已知', '价格已知', '员工/时间已知', '客户可直接预约'],
      finance: ['定制定价', '需要报价批准', '发票支付链接', '工单执行', '材料审核', '退款与净额报表'],
    },
    cta: {
      badge: '开始使用',
      title: '在一个地方管理报价、作业和财务交接',
      body: '将报价请求、审批、收款、退款、作业执行和报表整合到一个运营系统中，而不是事后再拼接。',
      start: '开始使用 Schedulaa',
      demo: '预约演示',
    },
  },
  es: {
    ...en,
    metaTitle: 'Finanzas operativas para equipos de servicio | Schedulaa',
    metaDescription:
      'Gestiona solicitudes de cotizacion, estimados, aprobaciones del cliente, facturas, enlaces de pago alojados, reembolsos, ordenes de trabajo, reportes de campo, materiales, reportes brutos/netos, resumen fiscal y cierre de mes en un solo flujo.',
    hero: {
      badge: 'Business Finance',
      title: 'Business Finance para equipos de servicio',
      subtitle:
        'Desde la solicitud de cotizacion hasta el estimado aprobado, la factura, el enlace de pago alojado, la orden de trabajo, el reporte de campo, los reembolsos cuando hagan falta y la preparacion de cierre de mes - todo en un solo flujo.',
      start: 'Comenzar con Schedulaa',
      howItWorks: 'Ver como funciona',
      helper:
        'Pensado para negocios de servicios que necesitan mas que booking: cotizaciones, cuadrillas, materiales, aprobaciones, pagos, reembolsos y rentabilidad por trabajo.',
    },
    pain: {
      badge: 'La brecha operativa',
      title: 'Cotizaciones, trabajo de campo y pagos no deberian vivir en hojas separadas',
      body:
        'Los negocios de servicios pierden tiempo cuando cotizacion, aprobaciones, facturacion, cuadrillas y materiales viven en sistemas distintos. Business Finance mantiene el relevo en un solo flujo en lugar de devolver al manager al seguimiento manual.',
      points: [
        'Las solicitudes de cotizacion llegan por llamadas, formularios web, email o mensajes directos.',
        'Los estimados se pierden en seguimientos manuales.',
        'Facturas, enlaces de pago y reembolsos quedan desconectados de la ejecucion.',
        'El empleado reporta el trabajo al final, pero el manager todavia debe aprobar materiales.',
        'El cierre de mes tarda demasiado porque la informacion esta dispersa.',
      ],
    },
    workflow: {
      badge: 'Flujo de punta a punta',
      title: 'Un solo flujo desde la solicitud hasta el trabajo completado',
      body:
        'Captura la solicitud, valora el trabajo, obtiene aprobacion, conviertelo en factura y orden de trabajo, y luego revisa lo que se vuelve oficial antes del cierre de mes.',
      note:
        'Cotizaciones, aprobaciones, facturacion, ejecucion y revision de fin de mes deben vivir en un solo flujo operativo. Esta pagina sigue la ruta real de Business Finance dentro de Schedulaa.',
      steps: [
        'Capturar la solicitud de cotizacion',
        'Vincular o crear el cliente',
        'Crear y enviar el estimado',
        'Permitir que el cliente acepte o rechace online',
        'Convertir a factura y crear un enlace de pago',
        'Crear la orden de trabajo y asignar el equipo',
        'El empleado envia un reporte de campo',
        'El manager revisa materiales y cierra el trabajo',
        'Seguir reportes brutos y netos, resumen fiscal, reembolsos y preparacion de cierre de mes',
      ],
    },
    modules: {
      badge: 'Modulos principales',
      title: 'Herramientas conectadas para cotizar, ejecutar y cerrar el relevo financiero',
      cardLabel: 'Modulo',
      cards: [
        { title: 'Solicitudes de cotizacion', body: 'Captura solicitudes del cliente desde telefono, sitio web, nota de WhatsApp, email o carga manual.', note: 'La nota de WhatsApp es una etiqueta de origen, no automatizacion de WhatsApp.' },
        { title: 'Estimados y aprobacion del cliente', body: 'Envia un enlace de revision, sigue estados visto, aceptado o rechazado y revisa cuando haga falta.' },
        { title: 'Facturas y enlaces de pago', body: 'Convierte estimados aceptados en facturas, crea enlaces de pago alojados y conecta el estado del pago con la factura financiera.' },
        { title: 'Ordenes de trabajo', body: 'Convierte el trabajo aprobado en tareas programadas con instrucciones y materiales planificados.' },
        { title: 'Reportes de campo', body: 'Los empleados reportan trabajo completado, problemas encontrados y materiales usados.' },
        { title: 'Revision del manager', body: 'Los managers aprueban lo que se vuelve oficial antes de actualizar inventario o factura.' },
        { title: 'Inventario y compras', body: 'Sigue materiales, proveedores, compras de stock y uso aprobado.' },
        { title: 'Reportes y cierre de mes', body: 'Ve total bruto de facturas, reembolsos, monto neto cobrado, resumen fiscal, rentabilidad, recibos faltantes, stock bajo y preparacion de cierre de mes.' },
      ],
    },
    payments: {
      badge: 'Pagos y reembolsos',
      title: 'Pago, reembolso y reportes siguen conectados',
      body:
        'Crea enlaces de pago de factura alojada, ve el estado pagado despues de la reconciliacion, emite reembolsos parciales o totales cuando haga falta y manten visibles los reportes bruto, reembolso y neto para el cierre de mes.',
      cardLabel: 'Flujo conectado',
      cards: [
        { title: 'Enlaces de pago alojados', body: 'Crea o reutiliza enlaces de pago alojados desde el flujo de factura financiera y mantén alineado el total local con lo que paga el cliente.' },
        { title: 'Reconciliacion de estado pagado', body: 'Cuando una factura alojada se paga, Business Finance puede mostrarla como pagada y mantener visible ese estado dentro del detalle de factura y la vista Payments & Refunds.' },
        { title: 'Reembolsos de factura', body: 'Emite reembolsos completos o parciales desde el detalle de factura financiera sin cambiar el estimado original, las lineas de factura, la orden de trabajo ni el historial del trabajo.' },
        { title: 'Reportes brutos y netos', body: 'Conserva los totales originales de factura para el historial y revisa por separado reembolsos, monto neto cobrado, impuesto reembolsado y actividad de reembolsos de fin de mes.' },
      ],
    },
    privacy: {
      badge: 'Privacidad por rol',
      title: 'Los managers conservan el control. Los empleados ven solo lo necesario.',
      body:
        'Business Finance mantiene precios, costos y decisiones finales de aprobacion en manos del manager mientras da a los empleados solo el contexto necesario para completar el trabajo y reportar.',
      managerBadge: 'Vista manager',
      managerTitle: 'El manager ve',
      employeeBadge: 'Vista empleado',
      employeeTitle: 'El empleado ve',
      restrictedBadge: 'Restringido',
      restrictedTitle: 'El empleado no ve',
      managerSees: ['Estimados, facturas y enlaces de pago', 'Rentabilidad', 'Costos', 'Revisiones', 'Reportes de cierre de mes'],
      employeeSees: ['Ordenes asignadas', 'Agenda e instrucciones', 'Materiales planificados', 'Formulario de reporte de campo'],
      employeeDoesNotSee: ['Totales de factura', 'Rentabilidad', 'Costo laboral', 'Costo de proveedor', 'Notas solo para manager'],
    },
    reporting: {
      badge: 'Reportes',
      title: 'Conoce los numeros del trabajo antes del cierre de mes',
      body:
        'Los reportes son herramientas de preparacion operativa pensadas para ayudar a managers y contadores a revisar el negocio mas rapido. Totales brutos, reembolsos, montos netos cobrados y resumenes fiscales ayudan a preparar registros para revision; no reemplazan la aprobacion profesional contable o fiscal.',
      cards: ['Total bruto de facturas', 'Reembolsos', 'Total neto de facturas', 'Margen estimado', 'Costo aprobado de materiales', 'Impuesto reembolsado', 'Impuesto neto cobrado', 'Recibos faltantes', 'Revisiones pendientes'],
      note:
        'Los reportes de Business Finance ayudan a los equipos operativos a preparar un cierre de mes mas limpio. Usalos para revisar registros, reembolsos y actividad neta antes de la aprobacion profesional contable.',
    },
    workflowFit: {
      badge: 'Ajuste del flujo',
      title: 'Usa Booking para servicios conocidos. Usa Business Finance para trabajos personalizados.',
      bookingTitle: 'Booking',
      financeTitle: 'Business Finance',
      booking: ['Servicio conocido', 'Precio conocido', 'Empleado/horario conocido', 'El cliente reserva directo'],
      finance: ['Precio personalizado', 'Requiere aprobacion de cotizacion', 'Enlaces de pago de factura', 'Ejecucion de orden de trabajo', 'Revision de materiales', 'Reembolsos y reporte neto'],
    },
    cta: {
      badge: 'Comenzar',
      title: 'Gestiona cotizaciones, trabajos y relevo financiero en un solo lugar',
      body:
        'Reune solicitudes de cotizacion, aprobaciones, cobro, reembolsos, ejecucion del trabajo y reportes en un solo sistema operativo en lugar de unirlo todo despues.',
      start: 'Comenzar con Schedulaa',
      demo: 'Reservar demo',
    },
  },
  fr: {
    ...en,
    metaTitle: 'Finance operationnelle pour equipes de service | Schedulaa',
    metaDescription:
      'Gerez demandes de devis, estimations, validations client, factures, liens de paiement heberges, remboursements, ordres de travail, rapports terrain, materiaux, reporting brut/net, resume fiscal et preparation de fin de mois dans un seul flux.',
    hero: {
      badge: 'Business Finance',
      title: 'Business Finance pour les equipes de service',
      subtitle:
        'De la demande de devis a l estimation approuvee, la facture, le lien de paiement heberge, l ordre de travail, le rapport terrain, les remboursements si besoin et la preparation de fin de mois - tout dans un seul flux.',
      start: 'Commencer avec Schedulaa',
      howItWorks: 'Voir le fonctionnement',
      helper:
        'Concu pour les entreprises de services qui ont besoin de plus que du booking : devis, equipes, materiaux, validations, paiements, remboursements et rentabilite par mission.',
    },
    pain: {
      badge: 'Le decalage operationnel',
      title: 'Devis, travail terrain et paiements ne devraient pas vivre dans des feuilles separees',
      body:
        'Les entreprises de services perdent du temps quand devis, validations, facturation, equipes et materiaux vivent dans des systemes differents. Business Finance garde le passage de relais dans un seul flux au lieu de renvoyer les managers au suivi manuel.',
      points: [
        'Les demandes de devis arrivent par appels, formulaires web, emails ou messages directs.',
        'Les estimations se perdent dans des relances manuelles.',
        'Les factures, liens de paiement et remboursements sont deconnectes de l execution.',
        'Les employes rapportent le travail apres intervention, mais les managers doivent encore approuver les materiaux.',
        'La revue de fin de mois prend trop de temps car les donnees sont dispersees.',
      ],
    },
    workflow: {
      badge: 'Flux de bout en bout',
      title: 'Un seul flux de la demande au travail termine',
      body:
        'Capturez la demande, chiffrez le travail, obtenez la validation, transformez-le en facture et ordre de travail, puis validez ce qui devient officiel avant la fin du mois.',
      note:
        'Devis, validations, facturation, execution et revue de fin de mois doivent appartenir au meme flux operationnel. Cette page suit le parcours reel de Business Finance dans Schedulaa.',
      steps: [
        'Capturer la demande de devis',
        'Lier ou creer le client',
        'Construire et envoyer l estimation',
        'Laisser le client accepter ou refuser en ligne',
        'Convertir en facture et creer un lien de paiement',
        'Creer l ordre de travail et assigner l equipe',
        'L employe soumet un rapport terrain',
        'Le manager valide les materiaux et cloture le travail',
        'Suivre reporting brut et net, resume fiscal, remboursements et preparation de fin de mois',
      ],
    },
    modules: {
      badge: 'Modules cles',
      title: 'Des outils relies pour chiffrer, executer et transmettre vers la finance',
      cardLabel: 'Module',
      cards: [
        { title: 'Demandes de devis', body: 'Capturez les demandes clients depuis telephone, site web, note WhatsApp, email ou saisie manuelle.', note: 'La note WhatsApp est une etiquette de source, pas une automatisation WhatsApp.' },
        { title: 'Estimations et validation client', body: 'Envoyez un lien de revision, suivez vu, accepte ou refuse, et revisez si necessaire.' },
        { title: 'Factures et liens de paiement', body: 'Convertissez les estimations acceptees en factures, creez des liens de paiement heberges et gardez le statut du paiement relie a la facture finance.' },
        { title: 'Ordres de travail', body: 'Transformez le travail approuve en mission planifiee avec instructions et materiaux prevus.' },
        { title: 'Rapports terrain', body: 'Les employes rapportent le travail termine, les problemes trouves et les materiaux utilises.' },
        { title: 'Validation manager', body: 'Les managers approuvent ce qui devient officiel avant toute mise a jour de stock ou de facture.' },
        { title: 'Stock et achats', body: 'Suivez materiaux, fournisseurs, achats de stock et consommation approuvee.' },
        { title: 'Reporting et fin de mois', body: 'Voyez total brut des factures, remboursements, encaisse net, resume fiscal, rentabilite, recus manquants, stock faible et preparation de fin de mois.' },
      ],
    },
    payments: {
      badge: 'Paiements et remboursements',
      title: 'Paiement, remboursement et reporting restent relies',
      body:
        'Creez des liens de paiement heberges, voyez le statut paye apres reconciliation, emettez des remboursements complets ou partiels si besoin et gardez visible le reporting brut, remboursement et net pour la fin de mois.',
      cardLabel: 'Flux relie',
      cards: [
        { title: 'Liens de paiement heberges', body: 'Creez ou reutilisez des liens de paiement heberges depuis le flux de facture finance et gardez le total local aligne sur ce que paie le client.' },
        { title: 'Reconciliation du statut paye', body: 'Quand une facture hebergee est payee, Business Finance peut afficher la facture comme payee et garder cet etat visible dans le detail de facture et la vue Payments & Refunds.' },
        { title: 'Remboursements de facture', body: 'Emettez des remboursements complets ou partiels depuis le detail de facture finance tout en preservant l estimation d origine, les lignes de facture, l ordre de travail et l historique du job.' },
        { title: 'Reporting brut et net', body: 'Conservez les totaux d origine des factures pour l historique, puis revoyez separement remboursements, encaisse net, taxe remboursee et activite de remboursement de fin de mois.' },
      ],
    },
    privacy: {
      badge: 'Confidentialite par role',
      title: 'Les managers gardent le controle. Les employes ne voient que le necessaire.',
      body:
        'Business Finance garde tarification, couts et decisions finales de validation cote manager tout en donnant aux employes seulement le contexte de travail necessaire pour executer et faire retour.',
      managerBadge: 'Vue manager',
      managerTitle: 'Le manager voit',
      employeeBadge: 'Vue employe',
      employeeTitle: 'L employe voit',
      restrictedBadge: 'Restreint',
      restrictedTitle: "L employe ne voit pas",
      managerSees: ['Estimations, factures et liens de paiement', 'Rentabilite', 'Couts', 'Revisions', 'Rapports de fin de mois'],
      employeeSees: ['Ordres de travail assignes', 'Planning et instructions', 'Materiaux prevus', 'Formulaire de rapport terrain'],
      employeeDoesNotSee: ['Totaux de facture', 'Rentabilite', 'Cout de main-d oeuvre', 'Cout fournisseur', 'Notes manager seulement'],
    },
    reporting: {
      badge: 'Reporting',
      title: 'Connaitre les chiffres du job avant la fin du mois',
      body:
        'Les rapports sont des outils de preparation operationnelle concus pour aider managers et comptables a revoir l activite plus vite. Totaux bruts, remboursements, encaisse net et resumes fiscaux aident a preparer les dossiers ; ils ne remplacent pas une validation professionnelle comptable ou fiscale.',
      cards: ['Total brut des factures', 'Remboursements', 'Total net des factures', 'Marge estimee', 'Cout approuve des materiaux', 'Taxe remboursee', 'Taxe nette collectee', 'Recus manquants', 'Revisions en attente'],
      note:
        'Le reporting Business Finance aide les equipes operationnelles a preparer des handoffs de fin de mois plus propres. Utilisez-le pour revoir les dossiers, remboursements et activite nette avant la validation comptable professionnelle.',
    },
    workflowFit: {
      badge: 'Bon usage',
      title: 'Utilisez Booking pour les services connus. Utilisez Business Finance pour les jobs sur mesure.',
      bookingTitle: 'Booking',
      financeTitle: 'Business Finance',
      booking: ['Service connu', 'Prix connu', 'Employe/heure connus', 'Le client reserve directement'],
      finance: ['Tarification sur mesure', 'Validation de devis requise', 'Liens de paiement de facture', 'Execution ordre de travail', 'Revision materiaux', 'Remboursements et reporting net'],
    },
    cta: {
      badge: 'Demarrer',
      title: 'Gerez devis, jobs et transmission finance au meme endroit',
      body:
        'Rassemblez demandes de devis, validations, encaissement, remboursements, execution et reporting dans un seul systeme operationnel au lieu de tout recoller plus tard.',
      start: 'Commencer avec Schedulaa',
      demo: 'Reserver une demo',
    },
  },
  de: {
    ...en,
    metaTitle: 'Business Finance fuer Service-Teams | Schedulaa',
    metaDescription:
      'Verwalten Sie Angebotsanfragen, Schaetzungen, Kundenfreigaben, Rechnungen, gehostete Zahlungslinks, Rueckerstattungen, Arbeitsauftraege, Einsatzberichte, Materialien, Brutto-/Netto-Reporting, Steueruebersicht und Monatsabschluss-Vorbereitung in einem Ablauf.',
    hero: {
      badge: 'Business Finance',
      title: 'Business Finance fuer Service-Teams',
      subtitle:
        'Von der Angebotsanfrage ueber freigegebene Schaetzung, Rechnung, gehosteten Zahlungslink, Arbeitsauftrag, Einsatzbericht, Rueckerstattungen bei Bedarf und Monatsabschluss-Bereitschaft - alles in einem Ablauf.',
      start: 'Mit Schedulaa starten',
      howItWorks: 'So funktioniert es',
      helper:
        'Fuer Serviceunternehmen, die mehr als Booking brauchen: Angebote, Teams, Materialien, Freigaben, Zahlungen, Rueckerstattungen und Auftragsprofitabilitaet.',
    },
    pain: {
      badge: 'Die operative Luecke',
      title: 'Angebote, Feldeinsatz und Zahlungen sollten nicht in getrennten Tabellen leben',
      body:
        'Serviceunternehmen verlieren Zeit, wenn Angebote, Freigaben, Abrechnung, Teams und Materialien in verschiedenen Systemen liegen. Business Finance haelt die Uebergabe in einem Ablauf statt Manager zur manuellen Nachverfolgung zurueckzuschicken.',
      points: [
        'Angebotsanfragen kommen aus Anrufen, Webformularen, E-Mails oder Direktnachrichten.',
        'Schaetzungen gehen in manuellen Follow-ups verloren.',
        'Rechnungen, Zahlungslinks und Rueckerstattungen sind von der Ausfuehrung entkoppelt.',
        'Mitarbeitende berichten nach dem Einsatz, aber Manager muessen Materialien trotzdem freigeben.',
        'Die Monatsend-Auswertung dauert zu lange, weil Daten verstreut sind.',
      ],
    },
    workflow: {
      badge: 'End-to-end-Ablauf',
      title: 'Ein Ablauf von der Anfrage bis zum abgeschlossenen Auftrag',
      body:
        'Erfassen Sie die Anfrage, kalkulieren Sie die Arbeit, holen Sie Freigabe ein, wandeln Sie sie in Rechnung und Arbeitsauftrag um und pruefen Sie vor Monatsende, was offiziell wird.',
      note:
        'Angebote, Freigaben, Abrechnung, Ausfuehrung und Monatsend-Review gehoeren in einen operativen Ablauf. Diese Seite zeigt den echten Business-Finance-Pfad in Schedulaa.',
      steps: [
        'Angebotsanfrage erfassen',
        'Kunden verknuepfen oder anlegen',
        'Schaetzung erstellen und senden',
        'Kunden online annehmen oder ablehnen lassen',
        'In Rechnung umwandeln und Zahlungslink erstellen',
        'Arbeitsauftrag erstellen und Team zuweisen',
        'Mitarbeitende senden einen Einsatzbericht',
        'Manager prueft Materialien und schliesst den Auftrag',
        'Brutto-/Netto-Reporting, Steueruebersicht, Rueckerstattungen und Monatsabschluss-Bereitschaft verfolgen',
      ],
    },
    modules: {
      badge: 'Kernmodule',
      title: 'Verbundene Werkzeuge fuer Angebot, Ausfuehrung und Finanzuebergabe',
      cardLabel: 'Modul',
      cards: [
        { title: 'Angebotsanfragen', body: 'Erfassen Sie Kundenanfragen aus Telefon, Website, WhatsApp-Notiz, E-Mail oder manueller Eingabe.', note: 'Die WhatsApp-Notiz ist nur ein Quell-Label, keine WhatsApp-Automatisierung.' },
        { title: 'Schaetzungen und Kundenfreigabe', body: 'Senden Sie einen Review-Link, verfolgen Sie angesehen, angenommen oder abgelehnt und ueberarbeiten Sie bei Bedarf.' },
        { title: 'Rechnungen und Zahlungslinks', body: 'Wandeln Sie akzeptierte Schaetzungen in Rechnungen um, erstellen Sie gehostete Zahlungslinks und halten Sie den Zahlungsstatus mit der Finanzrechnung verbunden.' },
        { title: 'Arbeitsauftraege', body: 'Machen Sie aus freigegebener Arbeit einen geplanten Auftrag mit Anweisungen und geplanten Materialien.' },
        { title: 'Einsatzberichte', body: 'Mitarbeitende melden erledigte Arbeit, gefundene Probleme und verwendete Materialien.' },
        { title: 'Manager-Review', body: 'Manager geben frei, was offiziell wird, bevor Lager oder Rechnung aktualisiert werden.' },
        { title: 'Bestand und Einkaeufe', body: 'Verfolgen Sie Materialien, Lieferanten, Lagerkaeufe und freigegebenen Verbrauch.' },
        { title: 'Reporting und Monatsende', body: 'Sehen Sie Brutto-Rechnungssumme, Rueckerstattungen, netto eingezogene Betraege, Steueruebersicht, Profitabilitaet, fehlende Belege, niedrigen Bestand und Monatsabschluss-Bereitschaft.' },
      ],
    },
    payments: {
      badge: 'Zahlungen und Rueckerstattungen',
      title: 'Zahlung, Rueckerstattung und Reporting bleiben verbunden',
      body:
        'Erstellen Sie gehostete Rechnungs-Zahlungslinks, sehen Sie den Bezahlt-Status nach der Abstimmung, veranlassen Sie volle oder teilweise Rueckerstattungen bei Bedarf und halten Sie Brutto-, Rueckerstattungs- und Netto-Reporting fuer den Monatsabschluss sichtbar.',
      cardLabel: 'Verbundener Ablauf',
      cards: [
        { title: 'Gehostete Zahlungslinks', body: 'Erstellen oder wiederverwenden Sie gehostete Rechnungs-Zahlungslinks im Finanzrechnungs-Workflow und halten Sie die lokale Rechnungssumme im Gleichlauf mit dem Kundenbetrag.' },
        { title: 'Abgleich des Bezahlt-Status', body: 'Wenn eine gehostete Rechnung bezahlt ist, kann Business Finance die Rechnung als bezahlt anzeigen und den Zahlungsstatus in Rechnungsdetails und der Payments-&-Refunds-Ansicht sichtbar halten.' },
        { title: 'Rechnungs-Rueckerstattungen', body: 'Fuehren Sie volle oder teilweise Rueckerstattungen aus den Finanzrechnungsdetails aus, ohne die urspruengliche Schaetzung, Rechnungszeilen, den Arbeitsauftrag oder die Auftragshistorie zu veraendern.' },
        { title: 'Brutto- und Netto-Reporting', body: 'Behalten Sie urspruengliche Rechnungssummen fuer die Historie bei und pruefen Sie Rueckerstattungen, netto eingezogene Betraege, erstattete Steuer und Monatsend-Rueckerstattungsaktivitaet separat.' },
      ],
    },
    privacy: {
      badge: 'Datenschutz nach Rolle',
      title: 'Manager behalten die Kontrolle. Mitarbeitende sehen nur, was sie brauchen.',
      body:
        'Business Finance behaelt Preise, Kosten und finale Freigabeentscheidungen bei Managern und gibt Mitarbeitenden nur den Arbeitskontext, den sie fuer Ausfuehrung und Rueckmeldung brauchen.',
      managerBadge: 'Manager-Ansicht',
      managerTitle: 'Manager sehen',
      employeeBadge: 'Mitarbeitenden-Ansicht',
      employeeTitle: 'Mitarbeitende sehen',
      restrictedBadge: 'Eingeschraenkt',
      restrictedTitle: 'Mitarbeitende sehen nicht',
      managerSees: ['Schaetzungen, Rechnungen und Zahlungslinks', 'Profitabilitaet', 'Kosten', 'Reviews', 'Monatsend-Berichte'],
      employeeSees: ['Zugewiesene Arbeitsauftraege', 'Plan und Anweisungen', 'Geplante Materialien', 'Einsatzbericht-Formular'],
      employeeDoesNotSee: ['Rechnungssummen', 'Profitabilitaet', 'Lohnkosten', 'Lieferantenkosten', 'Nur-Manager-Notizen'],
    },
    reporting: {
      badge: 'Reporting',
      title: 'Kennen Sie die Auftragszahlen vor Monatsende',
      body:
        'Berichte sind Werkzeuge fuer operative Vorbereitung, damit Manager und Buchhaltung das Geschaeft schneller pruefen koennen. Bruttosummen, Rueckerstattungen, netto eingezogene Betraege und Steueruebersichten helfen bei der Vorbereitung; sie ersetzen keine professionelle steuerliche oder buchhalterische Freigabe.',
      cards: ['Brutto-Rechnungssumme', 'Rueckerstattungen', 'Netto-Rechnungssumme', 'Geschaetzte Marge', 'Freigegebene Materialkosten', 'Erstattete Steuer', 'Netto eingezogene Steuer', 'Fehlende Belege', 'Offene Reviews'],
      note:
        'Business-Finance-Reporting hilft operativen Teams, sauberere Monatsend-Uebergaben vorzubereiten. Nutzen Sie es, um Aufzeichnungen, Rueckerstattungen und Nettoaktivitaet vor professioneller Buchhaltungsfreigabe zu pruefen.',
    },
    workflowFit: {
      badge: 'Passender Einsatz',
      title: 'Nutzen Sie Booking fuer bekannte Leistungen. Business Finance fuer individuelle Jobs.',
      bookingTitle: 'Booking',
      financeTitle: 'Business Finance',
      booking: ['Bekannte Leistung', 'Bekannter Preis', 'Bekannter Mitarbeitender/Zeit', 'Kunde bucht direkt'],
      finance: ['Individuelle Preisgestaltung', 'Angebotsfreigabe noetig', 'Rechnungs-Zahlungslinks', 'Arbeitsauftrags-Ausfuehrung', 'Materialpruefung', 'Rueckerstattungs- und Netto-Reporting'],
    },
    cta: {
      badge: 'Loslegen',
      title: 'Fuehren Sie Angebote, Jobs und Finanzuebergabe an einem Ort',
      body:
        'Bringen Sie Angebotsanfragen, Freigaben, Zahlungseinzug, Rueckerstattungen, Ausfuehrung und Reporting in ein Betriebssystem statt sie spaeter zusammenzustueckeln.',
      start: 'Mit Schedulaa starten',
      demo: 'Demo buchen',
    },
  },
  ar: {
    ...en,
    metaTitle: 'المالية التشغيلية لفرق الخدمات | Schedulaa',
    metaDescription:
      'ادِر طلبات التسعير، التقديرات، موافقات العميل، الفواتير، روابط الدفع المستضافة، المبالغ المستردة، اوامر العمل، تقارير الميدان، المواد، التقارير الاجمالية/الصافية، ملخصات الضرائب والاستعداد لنهاية الشهر في مسار واحد.',
    hero: {
      badge: 'Business Finance',
      title: 'المالية التشغيلية لفرق الخدمات',
      subtitle:
        'من طلب التسعير الى التقدير المعتمد، الفاتورة، رابط الدفع المستضاف، امر العمل، التقرير الميداني، المبالغ المستردة عند الحاجة والاستعداد لنهاية الشهر - كل ذلك في مسار واحد.',
      start: 'ابدأ مع Schedulaa',
      howItWorks: 'شاهد كيف يعمل',
      helper:
        'مصمم للشركات الخدمية التي تحتاج اكثر من الحجز: تسعير، فرق، مواد، موافقات، مدفوعات، مبالغ مستردة وربحية العمل.',
    },
    pain: {
      badge: 'الفجوة التشغيلية',
      title: 'طلبات التسعير والعمل الميداني والمدفوعات لا يجب ان تعيش في جداول منفصلة',
      body:
        'تخسر الشركات الخدمية وقتا عندما تكون التسعيرات والموافقات والفوترة والفرق والمواد موزعة على انظمة مختلفة. Business Finance يحافظ على التسليم داخل مسار واحد بدلا من اعادة المدير الى المتابعة اليدوية.',
      points: [
        'طلبات التسعير تصل من المكالمات ونماذج الموقع والبريد الالكتروني او الرسائل المباشرة.',
        'التقديرات تضيع في المتابعات اليدوية.',
        'الفواتير وروابط الدفع والمبالغ المستردة منفصلة عن تنفيذ العمل.',
        'الموظف يرسل التقرير بعد انتهاء المهمة، لكن المدير ما زال يحتاج الى اعتماد المواد.',
        'مراجعة نهاية الشهر تستغرق وقتا طويلا لان البيانات متفرقة.',
      ],
    },
    workflow: {
      badge: 'مسار من البداية للنهاية',
      title: 'مسار واحد من الطلب الى اكمال العمل',
      body:
        'التقط الطلب، سعّر العمل، احصل على الموافقة، حوّله الى فاتورة وامر عمل، ثم راجع ما يصبح رسميا قبل نهاية الشهر.',
      note:
        'التسعير والموافقات والفوترة والتنفيذ ومراجعة نهاية الشهر يجب ان تكون ضمن مسار تشغيلي واحد. هذه الصفحة تعرض المسار الفعلي لـ Business Finance داخل Schedulaa.',
      steps: [
        'التقاط طلب التسعير',
        'ربط العميل او انشاؤه',
        'اعداد التقدير وارساله',
        'اتاحة القبول او الرفض للعميل عبر الانترنت',
        'التحويل الى فاتورة وانشاء رابط دفع',
        'انشاء امر العمل وتعيين الفريق',
        'الموظف يرسل تقريرا ميدانيا',
        'المدير يراجع المواد ويغلق العمل',
        'متابعة التقارير الاجمالية والصافية وملخص الضرائب والمبالغ المستردة والاستعداد لنهاية الشهر',
      ],
    },
    modules: {
      badge: 'الوحدات الرئيسية',
      title: 'ادوات مترابطة للتسعير والتنفيذ وتسليم الجانب المالي',
      cardLabel: 'وحدة',
      cards: [
        { title: 'طلبات التسعير', body: 'التقط طلبات العميل من الهاتف او الموقع او ملاحظة WhatsApp او البريد الالكتروني او الادخال اليدوي.', note: 'ملاحظة WhatsApp هي تصنيف للمصدر فقط وليست اتمتة WhatsApp.' },
        { title: 'التقديرات وموافقة العميل', body: 'ارسل رابط مراجعة، وتتبع حالة المشاهدة او القبول او الرفض، وقم بالمراجعة عند الحاجة.' },
        { title: 'الفواتير وروابط الدفع', body: 'حوّل التقديرات المقبولة الى فواتير، وانشئ روابط دفع مستضافة، وابقِ حالة الدفع مرتبطة بالفاتورة المالية.' },
        { title: 'اوامر العمل', body: 'حوّل العمل المعتمد الى مهمة مجدولة مع تعليمات ومواد مخطط لها.' },
        { title: 'التقارير الميدانية', body: 'يرسل الموظفون تقارير عن العمل المنجز والمشكلات المكتشفة والمواد المستخدمة.' },
        { title: 'مراجعة المدير', body: 'يعتمد المدير ما يصبح رسميا قبل تحديث المخزون او الفاتورة.' },
        { title: 'المخزون والمشتريات', body: 'تابع المواد والموردين وعمليات الشراء للمخزون والاستخدام المعتمد.' },
        { title: 'التقارير ونهاية الشهر', body: 'اعرض اجمالي الفواتير، المبالغ المستردة، صافي التحصيل، ملخص الضرائب، الربحية، الايصالات المفقودة، انخفاض المخزون والاستعداد لنهاية الشهر.' },
      ],
    },
    payments: {
      badge: 'المدفوعات والمبالغ المستردة',
      title: 'الدفع والاسترداد والتقارير تبقى مترابطة',
      body:
        'انشئ روابط دفع فواتير مستضافة، وشاهد حالة الدفع بعد المطابقة، واصدر استردادا كاملا او جزئيا عند الحاجة، واحتفظ بتقارير الاجمالي والاسترداد والصافي واضحة عند مراجعة نهاية الشهر.',
      cardLabel: 'مسار مترابط',
      cards: [
        { title: 'روابط دفع مستضافة', body: 'انشئ او اعد استخدام روابط دفع مستضافة من داخل مسار الفاتورة المالية، وابقِ اجمالي الفاتورة المحلي متطابقا مع ما يدفعه العميل.' },
        { title: 'مطابقة حالة الدفع', body: 'عند دفع الفاتورة المستضافة، يمكن لـ Business Finance اظهار الفاتورة كمدفوعة والحفاظ على حالة الدفع داخل تفاصيل الفاتورة وعرض Payments & Refunds.' },
        { title: 'استرداد الفاتورة', body: 'اصدر استردادا كاملا او جزئيا من داخل تفاصيل الفاتورة المالية مع الحفاظ على التقدير الاصلي وبنود الفاتورة وامر العمل وسجل المهمة.' },
        { title: 'التقارير الاجمالية والصافية', body: 'احتفظ باجماليات الفواتير الاصلية للتاريخ، ثم راجع المبالغ المستردة وصافي التحصيل والضريبة المستردة ونشاط الاسترداد في نهاية الشهر بشكل منفصل.' },
      ],
    },
    privacy: {
      badge: 'الخصوصية حسب الدور',
      title: 'يحافظ المديرون على التحكم. ويرى الموظفون فقط ما يحتاجونه.',
      body:
        'يحافظ Business Finance على التسعير والتكاليف وقرارات الاعتماد النهائية لدى المديرين، بينما يمنح الموظفين فقط سياق العمل المطلوب للتنفيذ ورفع التقارير.',
      managerBadge: 'عرض المدير',
      managerTitle: 'يرى المدير',
      employeeBadge: 'عرض الموظف',
      employeeTitle: 'يرى الموظف',
      restrictedBadge: 'مقيد',
      restrictedTitle: 'لا يرى الموظف',
      managerSees: ['التقديرات والفواتير وروابط الدفع', 'الربحية', 'التكاليف', 'المراجعات', 'تقارير نهاية الشهر'],
      employeeSees: ['اوامر العمل المخصصة', 'الجدول والتعليمات', 'المواد المخطط لها', 'نموذج التقرير الميداني'],
      employeeDoesNotSee: ['اجماليات الفاتورة', 'الربحية', 'تكلفة العمالة', 'تكلفة المورد', 'ملاحظات المدير فقط'],
    },
    reporting: {
      badge: 'التقارير',
      title: 'اعرف ارقام العمل قبل نهاية الشهر',
      body:
        'التقارير هي ادوات جاهزية تشغيلية تساعد المديرين والمحاسبين على مراجعة النشاط بشكل اسرع. الاجماليات والمبالغ المستردة وصافي التحصيل وملخصات الضرائب تساعد في تجهيز السجلات للمراجعة، لكنها ليست بديلا عن الاعتماد المهني الضريبي او المحاسبي.',
      cards: ['اجمالي الفواتير', 'المبالغ المستردة', 'صافي الفواتير', 'الهامش التقديري', 'تكلفة المواد المعتمدة', 'الضريبة المستردة', 'صافي الضريبة المحصلة', 'ايصالات مفقودة', 'مراجعات معلقة'],
      note:
        'تساعد تقارير Business Finance الفرق التشغيلية على تجهيز تسليمات نهاية شهر اوضح. استخدمها لمراجعة السجلات والمبالغ المستردة والنشاط الصافي قبل الاعتماد المهني المحاسبي.',
    },
    workflowFit: {
      badge: 'ملاءمة المسار',
      title: 'استخدم Booking للخدمات المعروفة، وBusiness Finance للاعمال المخصصة.',
      bookingTitle: 'Booking',
      financeTitle: 'Business Finance',
      booking: ['خدمة معروفة', 'سعر معروف', 'موظف/وقت معروف', 'العميل يحجز مباشرة'],
      finance: ['تسعير مخصص', 'يتطلب موافقة على العرض', 'روابط دفع الفواتير', 'تنفيذ امر العمل', 'مراجعة المواد', 'الاسترداد والتقارير الصافية'],
    },
    cta: {
      badge: 'ابدأ',
      title: 'ادِر التسعيرات والاعمال والتسليم المالي في مكان واحد',
      body:
        'اجمع طلبات التسعير والموافقات والتحصيل والاسترداد وتنفيذ العمل والتقارير في نظام تشغيلي واحد بدلا من جمعها لاحقا بشكل يدوي.',
      start: 'ابدأ مع Schedulaa',
      demo: 'احجز عرضا تجريبيا',
    },
  },
  pt: {
    ...en,
    metaTitle: 'Business Finance para equipes de servico | Schedulaa',
    metaDescription:
      'Gerencie pedidos de cotacao, estimativas, aprovacoes do cliente, faturas, links de pagamento hospedados, reembolsos, ordens de trabalho, relatorios de campo, materiais, relatorios brutos/liquidos, resumo fiscal e preparo de fim de mes em um unico fluxo.',
    hero: {
      badge: 'Business Finance',
      title: 'Business Finance para equipes de servico',
      subtitle:
        'Do pedido de cotacao a estimativa aprovada, fatura, link de pagamento hospedado, ordem de trabalho, relatorio de campo, reembolsos quando necessarios e preparo para fim de mes - tudo em um unico fluxo.',
      start: 'Comecar com Schedulaa',
      howItWorks: 'Ver como funciona',
      helper:
        'Feito para empresas de servicos que precisam de mais do que booking: cotacoes, equipes, materiais, aprovacoes, pagamentos, reembolsos e lucratividade por trabalho.',
    },
    pain: {
      badge: 'A lacuna operacional',
      title: 'Cotacoes, trabalho de campo e pagamentos nao deveriam viver em planilhas separadas',
      body:
        'Empresas de servicos perdem tempo quando cotacao, aprovacoes, faturamento, equipes e materiais vivem em sistemas diferentes. Business Finance mantem a passagem de bastao em um unico fluxo em vez de empurrar o gestor de volta ao acompanhamento manual.',
      points: [
        'Pedidos de cotacao chegam por chamadas, formularios do site, email ou mensagens diretas.',
        'Estimativas se perdem em acompanhamentos manuais.',
        'Faturas, links de pagamento e reembolsos ficam desconectados da execucao.',
        'O funcionario envia o relatorio apos o trabalho, mas o gestor ainda precisa aprovar materiais.',
        'O fechamento do mes demora demais porque os dados estao espalhados.',
      ],
    },
    workflow: {
      badge: 'Fluxo de ponta a ponta',
      title: 'Um unico fluxo do pedido ao trabalho concluido',
      body:
        'Capture o pedido, precifique o trabalho, obtenha aprovacao, converta em fatura e ordem de trabalho e depois revise o que vira oficial antes do fim do mes.',
      note:
        'Cotacoes, aprovacoes, faturamento, execucao e revisao de fim de mes devem viver no mesmo fluxo operacional. Esta pagina segue o caminho real do Business Finance dentro da Schedulaa.',
      steps: [
        'Capturar o pedido de cotacao',
        'Vincular ou criar o cliente',
        'Montar e enviar a estimativa',
        'Permitir que o cliente aceite ou rejeite online',
        'Converter em fatura e criar um link de pagamento',
        'Criar a ordem de trabalho e atribuir a equipe',
        'O funcionario envia um relatorio de campo',
        'O gestor revisa materiais e fecha o trabalho',
        'Acompanhar relatorios brutos e liquidos, resumo fiscal, reembolsos e preparacao de fim de mes',
      ],
    },
    modules: {
      badge: 'Modulos centrais',
      title: 'Ferramentas conectadas para cotar, executar e entregar o financeiro',
      cardLabel: 'Modulo',
      cards: [
        { title: 'Pedidos de cotacao', body: 'Capture pedidos do cliente por telefone, site, nota de WhatsApp, email ou entrada manual.', note: 'A nota de WhatsApp e apenas um rotulo de origem, nao automacao de WhatsApp.' },
        { title: 'Estimativas e aprovacao do cliente', body: 'Envie um link de revisao, acompanhe visto, aceito ou rejeitado e revise quando necessario.' },
        { title: 'Faturas e links de pagamento', body: 'Converta estimativas aceitas em faturas, crie links de pagamento hospedados e mantenha o status do pagamento conectado a fatura financeira.' },
        { title: 'Ordens de trabalho', body: 'Transforme o trabalho aprovado em tarefas agendadas com instrucoes e materiais planejados.' },
        { title: 'Relatorios de campo', body: 'Os funcionarios reportam trabalho concluido, problemas encontrados e materiais usados.' },
        { title: 'Revisao do gestor', body: 'Os gestores aprovam o que se torna oficial antes de atualizar estoque ou fatura.' },
        { title: 'Estoque e compras', body: 'Acompanhe materiais, fornecedores, compras para estoque e uso aprovado.' },
        { title: 'Relatorios e fim de mes', body: 'Veja total bruto de faturas, reembolsos, valor liquido recebido, resumo fiscal, lucratividade, recibos ausentes, estoque baixo e preparo de fim de mes.' },
      ],
    },
    payments: {
      badge: 'Pagamentos e reembolsos',
      title: 'Pagamento, reembolso e relatorios seguem conectados',
      body:
        'Crie links de pagamento de fatura hospedada, veja o status pago apos a reconciliacao, emita reembolsos totais ou parciais quando necessario e mantenha visiveis os relatorios bruto, reembolso e liquido para o fim do mes.',
      cardLabel: 'Fluxo conectado',
      cards: [
        { title: 'Links de pagamento hospedados', body: 'Crie ou reutilize links de pagamento hospedados a partir do fluxo da fatura financeira e mantenha o total local alinhado ao que o cliente paga.' },
        { title: 'Reconciliacao do status pago', body: 'Quando uma fatura hospedada e paga, Business Finance pode mostrar a fatura como paga e manter o estado visivel no detalhe da fatura e na visualizacao Payments & Refunds.' },
        { title: 'Reembolsos de fatura', body: 'Emita reembolsos totais ou parciais a partir do detalhe da fatura financeira preservando a estimativa original, linhas da fatura, ordem de trabalho e historico do job.' },
        { title: 'Relatorios brutos e liquidos', body: 'Mantenha os totais originais da fatura para historico e revise separadamente reembolsos, valor liquido recebido, imposto reembolsado e atividade de reembolso no fim do mes.' },
      ],
    },
    privacy: {
      badge: 'Privacidade por papel',
      title: 'Gestores mantem o controle. Funcionarios veem apenas o necessario.',
      body:
        'Business Finance mantem precos, custos e decisoes finais de aprovacao com os gestores enquanto entrega aos funcionarios apenas o contexto necessario para executar e reportar.',
      managerBadge: 'Visao do gestor',
      managerTitle: 'O gestor ve',
      employeeBadge: 'Visao do funcionario',
      employeeTitle: 'O funcionario ve',
      restrictedBadge: 'Restrito',
      restrictedTitle: 'O funcionario nao ve',
      managerSees: ['Estimativas, faturas e links de pagamento', 'Lucratividade', 'Custos', 'Revisoes', 'Relatorios de fim de mes'],
      employeeSees: ['Ordens de trabalho atribuidas', 'Agenda e instrucoes', 'Materiais planejados', 'Formulario de relatorio de campo'],
      employeeDoesNotSee: ['Totais de fatura', 'Lucratividade', 'Custo de mao de obra', 'Custo de fornecedor', 'Notas so do gestor'],
    },
    reporting: {
      badge: 'Relatorios',
      title: 'Conheca os numeros do trabalho antes do fim do mes',
      body:
        'Os relatorios sao ferramentas de preparo operacional pensadas para ajudar gestores e contadores a revisar o negocio mais rapido. Totais brutos, reembolsos, valores liquidos recebidos e resumos fiscais ajudam a preparar os registros para revisao; nao substituem a validacao profissional contabil ou fiscal.',
      cards: ['Total bruto de faturas', 'Reembolsos', 'Total liquido de faturas', 'Margem estimada', 'Custo aprovado de materiais', 'Imposto reembolsado', 'Imposto liquido arrecadado', 'Recibos ausentes', 'Revisoes pendentes'],
      note:
        'Os relatorios do Business Finance ajudam as equipes operacionais a preparar handoffs de fim de mes mais limpos. Use-os para revisar registros, reembolsos e atividade liquida antes da validacao contabil profissional.',
    },
    workflowFit: {
      badge: 'Ajuste do fluxo',
      title: 'Use Booking para servicos conhecidos. Use Business Finance para trabalhos personalizados.',
      bookingTitle: 'Booking',
      financeTitle: 'Business Finance',
      booking: ['Servico conhecido', 'Preco conhecido', 'Funcionario/horario conhecido', 'O cliente agenda direto'],
      finance: ['Preco personalizado', 'Aprovacao de cotacao necessaria', 'Links de pagamento da fatura', 'Execucao da ordem de trabalho', 'Revisao de materiais', 'Reembolso e relatorio liquido'],
    },
    cta: {
      badge: 'Comecar',
      title: 'Execute cotacoes, jobs e handoff financeiro em um so lugar',
      body:
        'Reuna pedidos de cotacao, aprovacoes, cobranca, reembolsos, execucao do trabalho e relatorios em um unico sistema operacional em vez de costurar tudo depois.',
      start: 'Comecar com Schedulaa',
      demo: 'Agendar demo',
    },
  },
};

export const getBusinessFinanceCopy = (locale: AppLocale): BusinessFinanceCopy => copyByLocale[locale] || en;

export const getBusinessFinanceMeta = (locale: AppLocale) => {
  const copy = getBusinessFinanceCopy(locale);
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
  };
};
