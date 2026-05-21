import { AppLocale } from '@/utils/locale';

type FaqItem = {
  question: string;
  answer: string;
};

type AudienceItem = {
  title: string;
  body: string;
};

type FeatureItem = {
  title: string;
  body: string;
};

export type BusinessFinanceInvoicesCopy = {
  meta: {
    title: string;
    description: string;
    canonicalPath: string;
    ogImage: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  pain: {
    badge: string;
    title: string;
    intro: string;
    points: string[];
  };
  workflow: {
    badge: string;
    title: string;
    intro: string;
    steps: string[];
  };
  features: {
    badge: string;
    title: string;
    intro: string;
    items: FeatureItem[];
  };
  manualPayments: {
    badge: string;
    title: string;
    body: string;
    note: string;
  };
  audience: {
    badge: string;
    title: string;
    intro: string;
    items: AudienceItem[];
  };
  faq: {
    badge: string;
    title: string;
    intro: string;
    items: FaqItem[];
  };
  cta: {
    badge: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  labels: {
    workflowCard: string;
    featureCard: string;
    audienceCard: string;
  };
};

const en: BusinessFinanceInvoicesCopy = {
  meta: {
    title: 'Invoices, Estimates & Payment Links for Service Businesses | Schedulaa',
    description:
      'Create estimates, convert them to invoices, send payment links, track offline payments, and keep billing organized with Schedulaa’s Business Finance tools for service businesses.',
    canonicalPath: '/business-finance/invoices',
    ogImage: 'https://www.schedulaa.com/og/business-finance.jpg',
  },
  hero: {
    badge: 'Business Finance',
    title: 'Estimates, invoices, and payment links for service businesses',
    subtitle:
      'Create professional estimates, convert approved work into invoices, send payment links, and track payments without jumping between spreadsheets, PDFs, and payment tools.',
    primaryCta: 'Start free',
    secondaryCta: 'See Business Finance',
  },
  pain: {
    badge: 'The billing mess',
    title: 'Too many service businesses still bill from text messages, memory, and copied PDFs',
    intro:
      'Schedulaa is built for teams that need a clean quote-to-invoice flow without rebuilding the same billing record every week.',
    points: [
      'Prices get sent by text, WhatsApp, DM, or email, then someone recreates them later in an invoice.',
      'Payment status lives in too many places, so managers do not know what is paid, pending, or disputed.',
      'Cash, cheque, e-transfer, and external card terminal payments get accepted in real life, but never stay connected to the invoice record.',
      'Repeat clients force teams to retype billing contacts, addresses, and job details again and again.',
      'Month-end review turns into a cleanup project because estimates, invoices, and payments are scattered.',
    ],
  },
  workflow: {
    badge: 'Quote-to-invoice workflow',
    title: 'Move from estimate to paid invoice without breaking context',
    intro:
      'The workflow is designed for service businesses that need approvals, invoices, payment links, offline payments, and month-end visibility in one operational path.',
    steps: [
      'Quote request',
      'Estimate',
      'Approval',
      'Invoice',
      'Payment link',
      'Manual or online payment tracking',
      'Month-end review',
    ],
  },
  features: {
    badge: 'What the page covers',
    title: 'Billing tools built for real service workflows',
    intro:
      'This page reflects the Business Finance billing workflow already available inside Schedulaa for estimates, invoices, payment tracking, and repeat billing operations.',
    items: [
      {
        title: 'Estimate builder',
        body: 'Create client-ready estimates before any invoice exists, then revise or resend them when scope changes.',
      },
      {
        title: 'Convert estimate to invoice',
        body: 'Turn approved work into an invoice without copying line items into a second document.',
      },
      {
        title: 'Professional invoice detail',
        body: 'Keep invoice number, issue date, due date, notes, terms, tax totals, and line items in one structured record.',
      },
      {
        title: 'Payment instructions',
        body: 'Add billing notes and payment instructions so the invoice explains how the client should pay.',
      },
      {
        title: 'Hosted payment links',
        body: 'Send invoice payment links when you want clients to pay online while keeping invoice status tied to that payment flow.',
      },
      {
        title: 'Offline payment recording',
        body: 'Record cash, e-transfer, cheque, bank transfer, or external terminal payments without pretending every payment must happen inside the app.',
      },
      {
        title: 'Refund tracking',
        body: 'Track invoice refunds separately from the original billing record so finance reviews stay clean.',
      },
      {
        title: 'Create similar invoice',
        body: 'Reuse a prior invoice structure for repeat work instead of rebuilding the same service billing layout every time.',
      },
      {
        title: 'Tax-aware totals',
        body: 'Keep service billing tax-aware so totals, labels, and reporting stay more organized for review.',
      },
      {
        title: 'Billing recipient and client reuse',
        body: 'Reuse existing client and billing information so repeat invoices start from real saved data, not blank fields.',
      },
    ],
  },
  manualPayments: {
    badge: 'Manual payments still belong in the record',
    title: 'Card payments are optional. Billing organization is not.',
    body:
      'Schedulaa supports payment links when you want online collection, but it also respects how service businesses actually get paid in the field and at the counter.',
    note:
      'Businesses can still accept cash, cheque, e-transfer, bank transfer, or external card terminal payments and record them manually in Schedulaa.',
  },
  audience: {
    badge: 'Who this is for',
    title: 'Made for service businesses that bill real work, not just generic line items',
    intro:
      'The invoice and estimate workflow fits teams that need fast quoting, repeat billing, payment follow-up, and cleaner month-end handoffs.',
    items: [
      {
        title: 'Home and field services',
        body: 'Cleaning companies, repair services, installers, and mobile teams that quote custom jobs and need repeat billing.',
      },
      {
        title: 'Beauty and appointment-led teams',
        body: 'Studios, salons, mobile beauty teams, and wellness operators that need estimates, invoices, and payment instructions for custom work.',
      },
      {
        title: 'Contractors and local operators',
        body: 'Contractors and local service providers that send proposals, invoice approved work, and collect payment across multiple methods.',
      },
      {
        title: 'Small agencies and recurring service firms',
        body: 'Creative agencies, local agencies, and recurring service businesses that reuse client billing details and issue repeat invoices often.',
      },
    ],
  },
  faq: {
    badge: 'Invoice FAQ',
    title: 'Common questions about estimates, invoices, and payment links',
    intro:
      'These answers are written for service businesses that need a cleaner quote-to-invoice workflow without moving into accounting-heavy software too early.',
    items: [
      {
        question: 'Can I create estimates before invoices?',
        answer:
          'Yes. Schedulaa supports estimates first, then invoices later. That lets you quote the work, wait for approval, and only create the invoice when the job is ready to bill.',
      },
      {
        question: 'Can I send a payment link with an invoice?',
        answer:
          'Yes. You can attach hosted payment links to invoices so clients can pay online while keeping the payment state visible on the invoice record.',
      },
      {
        question: 'Can I record cash or e-transfer payments?',
        answer:
          'Yes. Schedulaa is not limited to online card collection. You can record cash, cheque, e-transfer, bank transfer, and external terminal payments manually.',
      },
      {
        question: 'Can I reuse client billing information?',
        answer:
          'Yes. Existing client and billing details can be reused so repeat invoices start faster and stay more consistent.',
      },
      {
        question: 'Can I create repeat invoices?',
        answer:
          'Yes. You can create similar invoices from existing records so repeat service work does not require rebuilding the same billing structure from scratch.',
      },
      {
        question: 'Does Schedulaa calculate tax on invoices?',
        answer:
          'Schedulaa supports tax-aware invoice totals so service businesses can keep billing and reporting more organized. Final tax setup should still follow your accounting guidance.',
      },
    ],
  },
  cta: {
    badge: 'Ready to clean up billing?',
    title: 'Turn estimates into paid invoices without the weekly admin mess.',
    body:
      'Use one workflow for estimates, invoices, payment links, manual payments, and repeat billing instead of rebuilding the same client billing trail every week.',
    primaryCta: 'Start free',
    secondaryCta: 'See Business Finance',
  },
  labels: {
    workflowCard: 'Workflow step',
    featureCard: 'Billing capability',
    audienceCard: 'Best fit',
  },
};

const fa: BusinessFinanceInvoicesCopy = {
  meta: {
    title: 'فاکتور، برآورد و لینک پرداخت برای کسب‌وکارهای خدماتی | Schedulaa',
    description:
      'با ابزارهای Business Finance در Schedulaa برآورد بسازید، آن را به فاکتور تبدیل کنید، لینک پرداخت بفرستید و پرداخت‌های دستی یا آفلاین را برای کسب‌وکارهای خدماتی منظم نگه دارید.',
    canonicalPath: '/business-finance/invoices',
    ogImage: 'https://www.schedulaa.com/og/business-finance.jpg',
  },
  hero: {
    badge: 'Business Finance',
    title: 'برآورد، فاکتور و لینک پرداخت برای کسب‌وکارهای خدماتی',
    subtitle:
      'برآورد حرفه‌ای بسازید، کار تأییدشده را به فاکتور تبدیل کنید، لینک پرداخت بفرستید و پرداخت‌ها را بدون رفت‌وبرگشت بین فایل‌ها، PDFها و ابزارهای پرداخت پیگیری کنید.',
    primaryCta: 'شروع رایگان',
    secondaryCta: 'مشاهده Business Finance',
  },
  pain: {
    badge: 'مشکل صورتحساب',
    title: 'خیلی از کسب‌وکارهای خدماتی هنوز با پیام، حافظه و PDFهای کپی‌شده صورتحساب می‌سازند',
    intro:
      'Schedulaa برای تیم‌هایی ساخته شده که به یک جریان quote-to-invoice تمیز نیاز دارند، بدون اینکه هر هفته همان اطلاعات صورتحساب را دوباره بسازند.',
    points: [
      'قیمت‌ها با پیام، واتساپ، دایرکت یا ایمیل فرستاده می‌شود و بعد دوباره داخل فاکتور تایپ می‌شود.',
      'وضعیت پرداخت در جاهای مختلف پخش است و مدیر دقیق نمی‌داند چه چیزی پرداخت شده یا نشده.',
      'پرداخت نقدی، چک، e-transfer و دستگاه کارت‌خوان بیرونی در عمل پذیرفته می‌شود اما به رکورد فاکتور وصل نمی‌ماند.',
      'برای مشتری‌های تکراری، اطلاعات صورتحساب و جزئیات کار بارها دوباره وارد می‌شود.',
      'مرور پایان ماه به یک پروژه تمیزکاری تبدیل می‌شود چون برآوردها، فاکتورها و پرداخت‌ها پراکنده هستند.',
    ],
  },
  workflow: {
    badge: 'جریان quote-to-invoice',
    title: 'از برآورد تا فاکتور پرداخت‌شده، بدون گم‌کردن کانتکست',
    intro:
      'این جریان برای کسب‌وکارهای خدماتی طراحی شده که به تأیید، فاکتور، لینک پرداخت، ثبت پرداخت آفلاین و دید پایان ماه در یک مسیر نیاز دارند.',
    steps: ['Quote request', 'Estimate', 'Approval', 'Invoice', 'Payment link', 'Manual or online payment tracking', 'Month-end review'],
  },
  features: {
    badge: 'قابلیت‌ها',
    title: 'ابزارهای صورتحساب برای جریان واقعی خدمات',
    intro:
      'این صفحه مسیر صورتحساب Business Finance را همان‌طور که امروز در Schedulaa برای estimate، invoice، tracking پرداخت و repeat billing وجود دارد توضیح می‌دهد.',
    items: [
      { title: 'سازنده برآورد', body: 'قبل از ساخت فاکتور، estimate بسازید و در صورت تغییر scope آن را ویرایش یا دوباره ارسال کنید.' },
      { title: 'تبدیل estimate به invoice', body: 'کار تأییدشده را بدون کپی مجدد line itemها به فاکتور تبدیل کنید.' },
      { title: 'جزئیات حرفه‌ای فاکتور', body: 'شماره فاکتور، تاریخ، سررسید، یادداشت، terms، tax و line itemها را در یک رکورد ساختاریافته نگه دارید.' },
      { title: 'دستورالعمل پرداخت', body: 'یادداشت صورتحساب و payment instruction اضافه کنید تا مشتری دقیق بداند چگونه پرداخت کند.' },
      { title: 'لینک پرداخت میزبانی‌شده', body: 'اگر بخواهید مشتری آنلاین پرداخت کند، payment link را به فاکتور متصل نگه دارید.' },
      { title: 'ثبت پرداخت آفلاین/دستی', body: 'پرداخت نقدی، e-transfer، چک، انتقال بانکی یا کارت‌خوان بیرونی را دستی ثبت کنید.' },
      { title: 'رهگیری refund', body: 'بازپرداخت را جدا از رکورد اصلی فاکتور نگه دارید تا مرور مالی تمیز بماند.' },
      { title: 'Create similar invoice', body: 'برای کار تکراری، ساختار فاکتور قبلی را دوباره استفاده کنید.' },
      { title: 'مجموع tax-aware', body: 'مبالغ فاکتور را به‌صورت tax-aware نگه دارید تا صورتحساب و گزارش‌ها منظم‌تر باشند.' },
      { title: 'استفاده مجدد از client/billing recipient', body: 'اطلاعات مشتری و صورتحساب را دوباره استفاده کنید تا فاکتورهای بعدی سریع‌تر شروع شوند.' },
      { title: 'گزارش پایان ماه', body: 'جمع فاکتور، پرداخت، refund و فعالیت‌های finance-ready را قبل از انباشته‌شدن کارهای اداری مرور کنید.' },
    ],
  },
  manualPayments: {
    badge: 'پرداخت دستی هم باید در رکورد بماند',
    title: 'پرداخت کارتی اختیاری است. نظم صورتحساب اختیاری نیست.',
    body:
      'Schedulaa زمانی که بخواهید payment link می‌دهد، اما مدل واقعی دریافت پول در کسب‌وکارهای خدماتی را هم درک می‌کند.',
    note:
      'کسب‌وکارها همچنان می‌توانند cash، cheque، e-transfer، bank transfer یا external card terminal بپذیرند و آن را به‌صورت دستی در Schedulaa ثبت کنند.',
  },
  audience: {
    badge: 'مناسب چه کسانی است',
    title: 'برای کسب‌وکارهای خدماتی که کار واقعی را صورتحساب می‌کنند، نه فقط line item عمومی',
    intro:
      'این workflow برای تیم‌هایی مناسب است که به quote سریع، repeat billing، پیگیری پرداخت و handoff تمیزتر در پایان ماه نیاز دارند.',
    items: [
      { title: 'خدمات میدانی و خانگی', body: 'برای cleaning، repair، installation و تیم‌های mobile که کار سفارشی را quote می‌کنند.' },
      { title: 'زیبایی و خدمات مبتنی بر نوبت', body: 'برای studio، salon، mobile beauty و wellness که به estimate و invoice برای کارهای سفارشی نیاز دارند.' },
      { title: 'پیمانکارها و اپراتورهای محلی', body: 'برای contractorها و local service providerهایی که proposal می‌فرستند و از چند روش پول می‌گیرند.' },
      { title: 'آژانس‌های کوچک و سرویس‌های تکرارشونده', body: 'برای آژانس‌ها و تیم‌هایی که اطلاعات صورتحساب مشتری را دوباره استفاده می‌کنند و زیاد repeat invoice دارند.' },
    ],
  },
  faq: {
    badge: 'FAQ فاکتور',
    title: 'سوال‌های رایج درباره estimate، invoice و payment link',
    intro:
      'این پاسخ‌ها برای کسب‌وکارهای خدماتی نوشته شده که به یک quote-to-invoice workflow تمیز نیاز دارند، بدون اینکه زود وارد نرم‌افزارهای سنگین حسابداری شوند.',
    items: [
      { question: 'آیا می‌توانم قبل از فاکتور estimate بسازم؟', answer: 'بله. ابتدا estimate می‌سازید، منتظر approval می‌مانید و بعد invoice ایجاد می‌کنید.' },
      { question: 'آیا می‌توانم همراه فاکتور payment link بفرستم؟', answer: 'بله. می‌توانید hosted payment link را به فاکتور وصل کنید و وضعیت پرداخت را روی همان رکورد ببینید.' },
      { question: 'آیا می‌توانم پرداخت نقدی یا e-transfer را ثبت کنم؟', answer: 'بله. Schedulaa فقط به پرداخت آنلاین محدود نیست و ثبت دستی پرداخت آفلاین را هم پشتیبانی می‌کند.' },
      { question: 'آیا می‌توانم اطلاعات billing مشتری را دوباره استفاده کنم؟', answer: 'بله. اطلاعات client و billing را می‌توان برای فاکتورهای بعدی دوباره استفاده کرد.' },
      { question: 'آیا می‌توانم فاکتور تکراری بسازم؟', answer: 'بله. می‌توانید از invoice قبلی مشابه بسازید تا برای کارهای تکراری همه‌چیز را از صفر نسازید.' },
      { question: 'آیا Schedulaa tax را روی فاکتور حساب می‌کند؟', answer: 'Schedulaa مجموع فاکتور را tax-aware نگه می‌دارد تا صورتحساب و گزارش‌ها منظم‌تر بماند. تنظیم نهایی tax باید با راهنمای حسابداری شما هماهنگ باشد.' },
      { question: 'آیا این فقط برای شرکت‌های دارای کارمند است؟', answer: 'خیر. برای owner-operatorها، consultantها و تیم‌های کوچک خدماتی هم مناسب است.' },
    ],
  },
  cta: {
    badge: 'آماده نظم‌دادن به صورتحساب؟',
    title: 'Estimate را بدون دردسر هفتگی اداری به invoice پرداخت‌شده تبدیل کنید.',
    body:
      'برای estimate، invoice، payment link، ثبت پرداخت دستی و repeat billing از یک workflow استفاده کنید.',
    primaryCta: 'شروع رایگان',
    secondaryCta: 'مشاهده Business Finance',
  },
  labels: {
    workflowCard: 'مرحله',
    featureCard: 'قابلیت',
    audienceCard: 'مناسب برای',
  },
};

const copyByLocale: Partial<Record<AppLocale, BusinessFinanceInvoicesCopy>> = {
  en,
  fa,
};

export const getBusinessFinanceInvoicesCopy = (locale: AppLocale) => copyByLocale[locale] || en;
