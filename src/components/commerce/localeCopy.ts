import { AppLocale } from '@/utils/locale';

type WorkflowCard = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

type MiniCard = {
  title: string;
  description: string;
  href: string;
};

type MetricCardCopy = {
  label: string;
  value: string;
  detail: string;
};

type ControlCard = {
  title: string;
  body: string;
  points: string[];
};

type FaqCard = {
  title: string;
  description: string;
};

type CommerceCopy = {
  meta: {
    title: string;
    description: string;
    openGraphTitle: string;
    openGraphDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    pricing: string;
    demo: string;
  };
  overview: {
    eyebrow: string;
    title: string;
    description: string;
    metrics: MetricCardCopy[];
  };
  workflows: {
    eyebrow: string;
    title: string;
    description: string;
    cards: WorkflowCard[];
  };
  controls: {
    eyebrow: string;
    title: string;
    description: string;
    cards: ControlCard[];
  };
  connected: {
    eyebrow: string;
    title: string;
    description: string;
    cards: MiniCard[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    cards: FaqCard[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    talk: string;
    pricing: string;
  };
};

const en: CommerceCopy = {
  meta: {
    title: 'Commerce, Shipping, and Digital Goods | Schedulaa',
    description:
      'Sell physical products, digital goods, and service add-ons with shipping automation, product categories, client order history, and mixed checkout flows in Schedulaa.',
    openGraphTitle: 'Schedulaa Commerce, Shipping, and Digital Goods',
    openGraphDescription:
      'Schedulaa unifies product sales, digital access, EasyPost shipping, and client order follow-up in one operational platform.',
    twitterTitle: 'Schedulaa Commerce, Shipping, and Digital Goods',
    twitterDescription:
      'Sell products and services together with EasyPost shipping, digital delivery, and client order history.',
  },
  hero: {
    badge: 'Commerce & Delivery',
    title: 'eCommerce for services, physical products, and digital goods in one operating system.',
    description:
      'Schedulaa now supports product categories, digital goods, EasyPost shipping automation, client order history, and mixed checkout flows so service businesses can sell more without bolting on a separate store stack.',
    pricing: 'View pricing',
    demo: 'Schedule demo',
  },
  overview: {
    eyebrow: 'Commerce overview',
    title: 'Sell, fulfill, and support orders without leaving the platform',
    description:
      'The commerce stack is built for operational teams that need product sales, shipping, digital delivery, and client order visibility to stay connected.',
    metrics: [
      {
        label: 'Selling modes',
        value: '3 paths',
        detail: 'Sell physical products, digital goods, and service-linked add-ons from the same storefront.',
      },
      {
        label: 'Delivery choices',
        value: 'Pickup + ship',
        detail: 'Offer pickup, shipping, or local delivery while keeping checkout policy and shipping automation separated.',
      },
      {
        label: 'Client follow-through',
        value: 'Orders + access',
        detail: 'Clients can review product orders, delivery status, and digital access from the client dashboard.',
      },
    ],
  },
  workflows: {
    eyebrow: 'Commerce workflows',
    title: 'Capabilities already shipped in production',
    description:
      'This page reflects the current product stack: mixed carts, digital delivery, EasyPost integration, product categories, and client-facing order history.',
    cards: [
      {
        title: 'Mixed carts for services and products',
        description:
          'Let clients buy physical products, digital goods, and appointment-related add-ons in one checkout flow instead of splitting sales across separate tools.',
        href: '/booking',
        cta: 'Explore booking + checkout',
      },
      {
        title: 'Product categories, slugs, and SEO fields',
        description:
          'Organize catalog items by category, keep cleaner storefront navigation, and manage slug, meta title, and meta description fields for product pages.',
        href: '/website-builder',
        cta: 'Explore website builder',
      },
      {
        title: 'Digital goods with post-payment access',
        description:
          'Mark products as digital, map delivery rules in the digital products workspace, and support hosted files, external links, license delivery, or combined access patterns.',
        href: '/features',
        cta: 'Explore platform features',
      },
      {
        title: 'EasyPost shipping automation',
        description:
          'Configure shipping policy globally, connect EasyPost, fetch rates, buy labels, and keep per-order shipment actions inside the manager order workflow.',
        href: '/docs',
        cta: 'Explore docs',
      },
      {
        title: 'Client dashboard order history',
        description:
          'Clients can review order status, delivery method, shipment data, and digital-access outcomes from the same account area where they manage bookings.',
        href: '/client/support',
        cta: 'Explore support',
      },
      {
        title: 'Inventory, refunds, and fulfillment controls',
        description:
          'Track stock, flag low inventory, prevent negative inventory, and keep refund or restock actions tied to auditable product-order events.',
        href: '/pricing',
        cta: 'See pricing',
      },
    ],
  },
  controls: {
    eyebrow: 'Manager controls',
    title: 'Keep product policy, shipping, and digital access separated',
    description:
      'Schedulaa keeps checkout delivery policy, EasyPost automation, digital delivery rules, and order actions distinct so teams do not lose operational clarity.',
    cards: [
      {
        title: 'Manager product workspace',
        body:
          'Create products, assign categories, control visibility, manage inventory thresholds, and upload product images from one product management area.',
        points: [
          'Category field for storefront grouping and filtering.',
          'SEO fields for public product pages.',
          'Digital product flag and delivery overrides per item.',
        ],
      },
      {
        title: 'Delivery setup and EasyPost policy',
        body:
          'Separate delivery methods shown at checkout from EasyPost automation settings so teams can keep checkout policy clear while still automating shipping operations.',
        points: [
          'Pickup, shipping, and local delivery controls.',
          'EasyPost API key, origin settings, and connection test.',
          'Product-level delivery override as an exception layer.',
        ],
      },
      {
        title: 'Digital products workspace',
        body:
          'Map digital products to hosted files, external links, access codes, license rules, and access audit records without mixing those rules into physical-product shipping logic.',
        points: [
          'Hosted file, external link, and license delivery modes.',
          'Download/access policy controls.',
          'License and access audit views for support and operations.',
        ],
      },
      {
        title: 'Order operations and audit trail',
        body:
          'Keep fulfillment, refund, shipment, and exception handling inside manager product orders so support and operations teams see the same source of truth.',
        points: [
          'Timeline events and exception-aware order actions.',
          'Refund/restock handling tied to product orders.',
          'Shipment summary and label flow when EasyPost is enabled.',
        ],
      },
    ],
  },
  connected: {
    eyebrow: 'Connected stack',
    title: 'Commerce stays tied to booking, websites, docs, and support',
    description:
      'This is not a bolt-on store. The commerce layer shares context with your booking pages, website builder, delivery setup, and client dashboard.',
    cards: [
      {
        title: 'Booking + mixed checkout',
        description: 'See how products and services can live in the same customer flow.',
        href: '/booking',
      },
      {
        title: 'Website builder + storefront',
        description: 'Launch branded public pages that support both services and product sales.',
        href: '/website-builder',
      },
      {
        title: 'Operational docs',
        description: 'Review setup guidance for delivery policy, shipping, and connected workflows.',
        href: '/docs',
      },
      {
        title: 'Talk to rollout team',
        description: 'Plan your commerce rollout around fulfillment, shipping, and digital delivery.',
        href: '/contact',
      },
    ],
  },
  faq: {
    eyebrow: 'Commerce questions',
    title: 'Common questions about products, shipping, and digital access',
    description: 'Answers based on what Schedulaa delivers in production today.',
    cards: [
      {
        title: 'Can Schedulaa sell digital goods and physical products?',
        description:
          'Yes. The product catalog supports both physical and digital items, with separate delivery handling for shipping and post-payment digital access.',
      },
      {
        title: 'Do you support shipping automation with EasyPost?',
        description:
          'Yes. Teams can connect EasyPost, test the API key, load shipping rates, purchase labels, and keep shipment actions on the order record.',
      },
      {
        title: 'Can clients see their orders after checkout?',
        description:
          'Yes. Client order history is available in the dashboard, including order summary, delivery method, fulfillment state, and shipment details where applicable.',
      },
      {
        title: 'Can product categories and SEO fields be managed?',
        description:
          'Yes. Products support categories, slugs, meta title, and meta description fields so storefront items are easier to organize and optimize.',
      },
    ],
  },
  cta: {
    eyebrow: 'Next step',
    title: 'Need one commerce stack for services, shipping, and digital delivery?',
    description:
      'Use the same platform for product catalog, checkout, delivery policy, shipment automation, and client-facing order follow-up.',
    talk: 'Talk to rollout team',
    pricing: 'See pricing',
  },
};

const copyByLocale: Partial<Record<AppLocale, CommerceCopy>> = {
  en,
  fa: {
    ...en,
    meta: {
      title: 'تجارت، ارسال و کالاهای دیجیتال | Schedulaa',
      description:
        'در Schedulaa محصولات فیزیکی، کالاهای دیجیتال و افزودنی‌های خدماتی را با اتوماسیون ارسال، دسته‌بندی محصول، تاریخچه سفارش مشتری و جریان‌های پرداخت ترکیبی بفروشید.',
      openGraphTitle: 'تجارت، ارسال و کالاهای دیجیتال در Schedulaa',
      openGraphDescription:
        'Schedulaa فروش محصول، دسترسی دیجیتال، ارسال EasyPost و پیگیری سفارش مشتری را در یک بستر عملیاتی یکپارچه می‌کند.',
      twitterTitle: 'تجارت، ارسال و کالاهای دیجیتال در Schedulaa',
      twitterDescription: 'محصولات و خدمات را همراه با ارسال EasyPost، تحویل دیجیتال و تاریخچه سفارش مشتری در یک جا بفروشید.',
    },
    hero: {
      badge: 'تجارت و ارسال',
      title: 'تجارت الکترونیک برای خدمات، محصولات فیزیکی و کالاهای دیجیتال در یک سیستم عملیاتی',
      description:
        'Schedulaa اکنون از دسته‌بندی محصولات، کالاهای دیجیتال، اتوماسیون ارسال EasyPost، تاریخچه سفارش مشتری و پرداخت‌های ترکیبی پشتیبانی می‌کند تا کسب‌وکارهای خدماتی بدون افزودن یک فروشگاه جداگانه، بیشتر بفروشند.',
      pricing: 'مشاهده قیمت‌ها',
      demo: 'رزرو دمو',
    },
    overview: {
      eyebrow: 'نمای کلی تجارت',
      title: 'بدون خروج از پلتفرم، فروش، تحویل و پشتیبانی سفارش را مدیریت کنید',
      description:
        'بخش تجارت برای تیم‌های عملیاتی ساخته شده که به فروش محصول، ارسال، تحویل دیجیتال و دید سفارش مشتری در یک مسیر متصل نیاز دارند.',
      metrics: [
        { label: 'حالت‌های فروش', value: '۳ مسیر', detail: 'محصولات فیزیکی، کالاهای دیجیتال و افزودنی‌های مرتبط با خدمات را از یک storefront واحد بفروشید.' },
        { label: 'روش‌های تحویل', value: 'تحویل حضوری + ارسال', detail: 'تحویل حضوری، ارسال یا تحویل محلی را ارائه دهید و هم‌زمان سیاست checkout و اتوماسیون ارسال را جدا نگه دارید.' },
        { label: 'پیگیری مشتری', value: 'سفارش + دسترسی', detail: 'مشتریان می‌توانند سفارش محصول، وضعیت تحویل و دسترسی دیجیتال را از داشبورد مشتری مرور کنند.' },
      ],
    },
    workflows: {
      eyebrow: 'جریان‌های تجارت',
      title: 'قابلیت‌هایی که همین حالا در پروداکشن فعال‌اند',
      description:
        'این صفحه بازتاب استک فعلی محصول است: سبدهای ترکیبی، تحویل دیجیتال، یکپارچگی EasyPost، دسته‌بندی محصول و تاریخچه سفارش سمت مشتری.',
      cards: [
        { title: 'سبد ترکیبی برای خدمات و محصولات', description: 'به مشتری اجازه دهید محصولات فیزیکی، کالاهای دیجیتال و افزودنی‌های مرتبط با نوبت را در یک checkout واحد بخرد.', href: '/booking', cta: 'بررسی booking + checkout' },
        { title: 'دسته‌بندی محصول، slug و فیلدهای SEO', description: 'آیتم‌های کاتالوگ را بر اساس دسته تنظیم کنید، ناوبری storefront را تمیزتر نگه دارید و slug و meta title و meta description را مدیریت کنید.', href: '/website-builder', cta: 'بررسی website builder' },
        { title: 'کالاهای دیجیتال با دسترسی پس از پرداخت', description: 'محصولات را دیجیتال علامت‌گذاری کنید، قوانین تحویل را در فضای digital products تنظیم کنید و از فایل میزبانی‌شده، لینک خارجی، کد لایسنس یا الگوهای ترکیبی پشتیبانی کنید.', href: '/features', cta: 'بررسی قابلیت‌های پلتفرم' },
        { title: 'اتوماسیون ارسال EasyPost', description: 'سیاست ارسال را سراسری تنظیم کنید، EasyPost را متصل کنید، نرخ بگیرید، لیبل بخرید و اقدامات ارسال هر سفارش را در workflow سفارش مدیر نگه دارید.', href: '/docs', cta: 'بررسی مستندات' },
        { title: 'تاریخچه سفارش در داشبورد مشتری', description: 'مشتریان می‌توانند وضعیت سفارش، روش تحویل، داده‌های ارسال و نتایج دسترسی دیجیتال را در همان ناحیه حسابی که booking را مدیریت می‌کنند ببینند.', href: '/client/support', cta: 'بررسی پشتیبانی' },
        { title: 'کنترل موجودی، بازپرداخت و fulfillment', description: 'موجودی را پیگیری کنید، کمبود را علامت بزنید، از موجودی منفی جلوگیری کنید و اقدامات refund یا restock را به رویدادهای قابل ممیزی سفارش محصول وصل نگه دارید.', href: '/pricing', cta: 'مشاهده قیمت‌ها' },
      ],
    },
    controls: {
      eyebrow: 'کنترل‌های مدیر',
      title: 'سیاست محصول، ارسال و دسترسی دیجیتال را از هم جدا نگه دارید',
      description:
        'Schedulaa سیاست تحویل checkout، اتوماسیون EasyPost، قوانین تحویل دیجیتال و اقدامات سفارش را از هم جدا نگه می‌دارد تا تیم‌ها شفافیت عملیاتی خود را از دست ندهند.',
      cards: [
        { title: 'فضای مدیریت محصول', body: 'محصول ایجاد کنید، دسته اختصاص دهید، visibility را کنترل کنید، آستانه موجودی را مدیریت کنید و تصویر محصول را از یک ناحیه واحد بارگذاری کنید.', points: ['فیلد category برای گروه‌بندی و فیلتر storefront.', 'فیلدهای SEO برای صفحات عمومی محصول.', 'پرچم محصول دیجیتال و override تحویل برای هر آیتم.'] },
        { title: 'تنظیمات تحویل و سیاست EasyPost', body: 'روش‌های تحویل نشان‌داده‌شده در checkout را از تنظیمات اتوماسیون EasyPost جدا کنید تا سیاست checkout روشن بماند و هم‌زمان عملیات ارسال خودکار شود.', points: ['کنترل pickup، shipping و local delivery.', 'کلید API ایزی‌پست، تنظیمات مبدا و تست اتصال.', 'override سطح محصول به‌عنوان لایه استثنا.'] },
        { title: 'فضای digital products', body: 'محصولات دیجیتال را به فایل میزبانی‌شده، لینک خارجی، کد دسترسی، قوانین لایسنس و رکوردهای ممیزی دسترسی متصل کنید بدون آن‌که این قوانین با منطق ارسال محصول فیزیکی قاطی شود.', points: ['حالت‌های فایل میزبانی‌شده، لینک خارجی و تحویل لایسنس.', 'کنترل‌های سیاست دانلود/دسترسی.', 'نمای ممیزی لایسنس و دسترسی برای پشتیبانی و عملیات.'] },
        { title: 'عملیات سفارش و trail ممیزی', body: 'fulfillment، refund، ارسال و رسیدگی به استثناها را داخل سفارش‌های محصول مدیر نگه دارید تا تیم‌های پشتیبانی و عملیات یک source of truth مشترک داشته باشند.', points: ['رویدادهای timeline و اقدامات سفارش همراه با مدیریت استثنا.', 'مدیریت refund/restock متصل به سفارش‌های محصول.', 'خلاصه ارسال و جریان label وقتی EasyPost فعال است.'] },
      ],
    },
    connected: {
      eyebrow: 'استک متصل',
      title: 'Commerce به booking، وب‌سایت، مستندات و پشتیبانی متصل می‌ماند',
      description:
        'این یک فروشگاه bolt-on نیست. لایه commerce با صفحات booking، website builder، تنظیمات تحویل و داشبورد مشتری context مشترک دارد.',
      cards: [
        { title: 'Booking + checkout ترکیبی', description: 'ببینید چگونه محصولات و خدمات می‌توانند در یک جریان مشتری کنار هم قرار بگیرند.', href: '/booking' },
        { title: 'Website builder + storefront', description: 'صفحات عمومی برندشده‌ای راه‌اندازی کنید که هم خدمات و هم فروش محصول را پشتیبانی کنند.', href: '/website-builder' },
        { title: 'مستندات عملیاتی', description: 'راهنمای تنظیم سیاست تحویل، ارسال و workflowهای متصل را مرور کنید.', href: '/docs' },
        { title: 'گفتگو با تیم rollout', description: 'rollout تجارت خود را بر اساس fulfillment، ارسال و تحویل دیجیتال برنامه‌ریزی کنید.', href: '/contact' },
      ],
    },
    faq: {
      eyebrow: 'سوالات commerce',
      title: 'سوالات رایج درباره محصولات، ارسال و دسترسی دیجیتال',
      description: 'پاسخ‌ها بر اساس چیزی است که Schedulaa امروز در production ارائه می‌دهد.',
      cards: [
        { title: 'آیا Schedulaa می‌تواند محصولات فیزیکی و کالاهای دیجیتال بفروشد؟', description: 'بله. کاتالوگ محصول از هر دو نوع فیزیکی و دیجیتال پشتیبانی می‌کند و برای ارسال و دسترسی دیجیتال پس از پرداخت، مدیریت جداگانه دارد.' },
        { title: 'آیا از اتوماسیون ارسال با EasyPost پشتیبانی می‌کنید؟', description: 'بله. تیم‌ها می‌توانند EasyPost را متصل کنند، کلید API را تست کنند، نرخ‌های ارسال را بگیرند، لیبل بخرند و اقدامات ارسال را روی رکورد سفارش نگه دارند.' },
        { title: 'آیا مشتریان بعد از checkout می‌توانند سفارش‌هایشان را ببینند؟', description: 'بله. تاریخچه سفارش مشتری در داشبورد در دسترس است و شامل خلاصه سفارش، روش تحویل، وضعیت fulfillment و جزئیات ارسال در صورت وجود می‌شود.' },
        { title: 'آیا دسته‌بندی محصول و فیلدهای SEO قابل مدیریت‌اند؟', description: 'بله. محصولات از category، slug، meta title و meta description پشتیبانی می‌کنند تا آیتم‌های storefront بهتر سازمان‌دهی و بهینه شوند.' },
      ],
    },
    cta: {
      eyebrow: 'گام بعدی',
      title: 'به یک استک commerce واحد برای خدمات، ارسال و تحویل دیجیتال نیاز دارید؟',
      description: 'از یک پلتفرم واحد برای کاتالوگ محصول، checkout، سیاست تحویل، اتوماسیون ارسال و پیگیری سفارش سمت مشتری استفاده کنید.',
      talk: 'گفتگو با تیم rollout',
      pricing: 'مشاهده قیمت‌ها',
    },
  },
  ru: {
    ...en,
    meta: {
      title: 'Commerce, dostavka i cifrovye tovary | Schedulaa',
      description:
        'Prodavaite fizicheskie tovary, cifrovye produkty i dopolneniya k uslugam s avtomatizaciey dostavki, kategoriami tovarov, istoriey zakazov klienta i smeshannymi checkout-potokami v Schedulaa.',
      openGraphTitle: 'Schedulaa Commerce, dostavka i cifrovye tovary',
      openGraphDescription:
        'Schedulaa obedinyaet prodazhu tovarov, cifrovoy dostup, dostavku EasyPost i soprovozhdenie zakazov klienta v odnoi operacionnoi platforme.',
      twitterTitle: 'Schedulaa Commerce, dostavka i cifrovye tovary',
      twitterDescription: 'Prodavaite tovary i uslugi vmeste s dostavkoi EasyPost, cifrovoi vydachei i istoriei zakazov klienta.',
    },
    hero: {
      badge: 'Commerce i dostavka',
      title: 'eCommerce dlya uslug, fizicheskih tovarov i cifrovyh produktov v odnoi operacionnoi sisteme.',
      description:
        'Schedulaa uzhe podderzhivaet kategorii tovarov, cifrovye produkty, avtomatizaciyu dostavki EasyPost, istoriyu zakazov klienta i smeshannye checkout-potoki, chtoby servisnye kompanii mogli prodavat bolshe bez otdelnogo magazina.',
      pricing: 'Posmotret ceny',
      demo: 'Zaplanit demo',
    },
    overview: {
      eyebrow: 'Obzor commerce',
      title: 'Prodavaite, ispolnyayte i podderzhivayte zakazy, ne vyhodya iz platformy',
      description:
        'Commerce-sloy sozdany dlya operacionnyh komand, kotorym nuzhny prodazhi tovarov, dostavka, cifrovaya vydacha i vidimost zakazov klienta v odnom svyazannom procese.',
      metrics: [
        { label: 'Scenarii prodazh', value: '3 puti', detail: 'Prodavaite fizicheskie tovary, cifrovye produkty i dobavki k uslugam iz odnogo storefronta.' },
        { label: 'Varianty dostavki', value: 'Samovyvoz + dostavka', detail: 'Predlagayte samovyvoz, dostavku ili lokalnuyu dostavku, razdelyaya politiku checkout i avtomatizaciyu dostavki.' },
        { label: 'Dalneyshee vzaimodeystvie', value: 'Zakazy + dostup', detail: 'Klienty mogut prosmatrivat zakazy, status dostavki i cifrovoy dostup v klientskom dashboards.' },
      ],
    },
    workflows: {
      eyebrow: 'Commerce-protsessy',
      title: 'Vozmozhnosti, uzhe rabotayushchie v production',
      description:
        'Eta stranica otrazhaet tekushchii produkt: smeshannye korziny, cifrovaya vydacha, integraciya EasyPost, kategorii tovarov i klientskaya istoriya zakazov.',
      cards: [
        { title: 'Smeshannye korziny dlya uslug i tovarov', description: 'Pozvolte klientam pokupat fizicheskie tovary, cifrovye produkty i dobavki k zapisi v odnom checkout-potoke vmesto razneseniya prodazh po raznym instrumentam.', href: '/booking', cta: 'Izuchit booking + checkout' },
        { title: 'Kategorii tovarov, slug i SEO-polya', description: 'Organizuyte katalog po kategoriyam, derzhite storefront-opravdanie chishche i upravlyayte slug, meta title i meta description dlya produktovyh stranic.', href: '/website-builder', cta: 'Izuchit website builder' },
        { title: 'Cifrovye tovary s dostupom posle oplaty', description: 'Pometchayte tovary kak cifrovye, nastaivayte pravila vydachi v workspace cifrovyh tovarov i podderzhivayte hosted files, vneshnie ssylki, license delivery ili kombinirovannye patterny.', href: '/features', cta: 'Izuchit vozmozhnosti platformy' },
        { title: 'Avtomatizaciya dostavki EasyPost', description: 'Nastraivayte shipping policy globalno, podklyuchayte EasyPost, poluchaite tarify, pokupayte labels i derzhite per-order deystviya po otgruzke v workflow zakaza menedzhera.', href: '/docs', cta: 'Izuchit docs' },
        { title: 'Istoriya zakazov v klientskom dashboards', description: 'Klienty mogut prosmatrivat status zakaza, metod dostavki, dannye ob otgruzke i rezultaty cifrovogo dostupa iz togo zhe akkaunta, gde upravlyayut booking.', href: '/client/support', cta: 'Izuchit support' },
        { title: 'Kontroli inventarya, vozvratov i fulfillment', description: 'Sledite za ostatkmi, pometchayte nizkiy inventory, zapreschayte otricatelnyy inventory i privyazyvaite refund/restock deystviya k auditiruemym sobytiyam zakaza produkta.', href: '/pricing', cta: 'Posmotret ceny' },
      ],
    },
    controls: {
      eyebrow: 'Upravlenie menedzhera',
      title: 'Razdelyaite politiku tovarov, dostavku i cifrovoy dostup',
      description:
        'Schedulaa razdelyaet delivery policy na checkout, avtomatizaciyu EasyPost, pravila cifrovoy vydachi i deystviya po zakazu, chtoby komandy ne teryali operacionnuyu yastnost.',
      cards: [
        { title: 'Workspace produktov menedzhera', body: 'Sozdavaite tovary, naznachayte kategorii, upravlyayte visibility, porogami inventory i zagruzhayte izobrazheniya tovarov iz odnogo razdela.', points: ['Pole category dlya gruppirovki i filtrov storefronta.', 'SEO-polya dlya public product pages.', 'Flag cifrovogo tovara i delivery overrides na urovne tovara.'] },
        { title: 'Nastroyka dostavki i politika EasyPost', body: 'Razdelite delivery methods, kotorye pokazany na checkout, i settings avtomatizacii EasyPost, chtoby politika checkout byla yavnoy pri avtomatizirovannoy dostavke.', points: ['Kontroli pickup, shipping i local delivery.', 'API key EasyPost, origin settings i test soedineniya.', 'Override dostavki na urovne produkta kak sloy isklyucheniy.'] },
        { title: 'Workspace cifrovyh tovarov', body: 'Privyazyvaite cifrovye produkty k hosted files, vneshnim ssylkam, access codes, pravilaм licenzii i audit-zapisyam dostupa, ne smeshivaya ih s logikoy dostavki fizicheskih tovarov.', points: ['Rezhimy hosted file, external link i license delivery.', 'Kontroli politiki zagruzki/dostupa.', 'Audit-vidy licenziy i dostupa dlya support i operations.'] },
        { title: 'Operacii po zakazam i audit trail', body: 'Derzhite fulfillment, refund, shipment i obrabotku isklyucheniy vnutri manager product orders, chtoby support i operations komandy videli odin source of truth.', points: ['Timeline events i deystviya po zakazu s uchetom isklyucheniy.', 'Refund/restock obrabotka, privyazannaya k zakazam produktov.', 'Shipment summary i label flow, kogda EasyPost vkluchen.'] },
      ],
    },
    connected: {
      eyebrow: 'Svyazannyi stack',
      title: 'Commerce ostayotsya svyazannym s booking, websites, docs i support',
      description:
        'Eto ne bolt-on store. Commerce-sloy delit context s booking-pages, website builder, delivery setup i client dashboard.',
      cards: [
        { title: 'Booking + mixed checkout', description: 'Posmotrite, kak tovary i uslugi mogut zhit v odnom klientskom potoke.', href: '/booking' },
        { title: 'Website builder + storefront', description: 'Zapuskayte branded public pages, podderzhivayuschie i uslugi, i prodazhu tovarov.', href: '/website-builder' },
        { title: 'Operational docs', description: 'Izuchite setup guidance dlya delivery policy, shipping i svyazannyh workflows.', href: '/docs' },
        { title: 'Pogovorit s rollout team', description: 'Planirovanie commerce-rollout vokrug fulfillment, shipping i cifrovoy vydachi.', href: '/contact' },
      ],
    },
    faq: {
      eyebrow: 'Voprosy o commerce',
      title: 'Chastye voprosy o tovarah, dostavke i cifrovom dostupe',
      description: 'Otveti osnovany na tom, chto Schedulaa uje predostavlyaet v production.',
      cards: [
        { title: 'Mozhet li Schedulaa prodavat cifrovye i fizicheskie tovary?', description: 'Da. Katalog podderzhivaet i fizicheskie, i cifrovye pozicii, s razdelnoy obrabotkoy shipping i post-payment digital access.' },
        { title: 'Podderzhivaete li vy shipping automation cherez EasyPost?', description: 'Da. Komandy mogut podklyuchit EasyPost, protestirovat API key, zagruzit rates, kupit labels i derzhat shipment actions vnutri order record.' },
        { title: 'Mogut li klienty videt svoi zakazy posle checkout?', description: 'Da. Istoriya zakazov klienta dostupna v dashboards, vklyuchaya summary zakaza, metod dostavki, sostoyanie fulfillment i shipment details, gde eto primenimo.' },
        { title: 'Mozhno li upravlyat kategoriyami i SEO-polyami tovarov?', description: 'Da. Produkty podderzhivayut categories, slugs, meta title i meta description, chtoby storefront bylo proshche organizovat i optimizirovat.' },
      ],
    },
    cta: {
      eyebrow: 'Sleduyuschiy shag',
      title: 'Nuzhen edinui commerce-stack dlya uslug, dostavki i cifrovoy vydachi?',
      description:
        'Ispolzuyte odnu platformu dlya kataloga tovarov, checkout, delivery policy, shipment automation i klientskogo soprovozhdeniya zakaza.',
      talk: 'Pogovorit s rollout team',
      pricing: 'Posmotret ceny',
    },
  },
  zh: {
    ...en,
    meta: {
      title: '电商、配送与数字商品 | Schedulaa',
      description:
        '在 Schedulaa 中销售实体商品、数字商品和服务附加项，并结合配送自动化、商品分类、客户订单历史和混合结账流程。',
      openGraphTitle: 'Schedulaa 电商、配送与数字商品',
      openGraphDescription: 'Schedulaa 将商品销售、数字访问、EasyPost 配送和客户订单跟进整合到一个运营平台中。',
      twitterTitle: 'Schedulaa 电商、配送与数字商品',
      twitterDescription: '在一个平台中同时销售产品和服务，并支持 EasyPost 配送、数字交付和客户订单历史。',
    },
    hero: {
      badge: '电商与配送',
      title: '在一个运营系统中同时管理服务、实体商品和数字商品电商',
      description:
        'Schedulaa 现已支持商品分类、数字商品、EasyPost 配送自动化、客户订单历史以及混合结账流程，让服务型企业无需额外拼接独立商城也能扩大销售。',
      pricing: '查看价格',
      demo: '预约演示',
    },
    overview: {
      eyebrow: '电商概览',
      title: '无需离开平台即可完成销售、履约和订单支持',
      description:
        'Commerce 堆栈面向需要商品销售、配送、数字交付和客户订单可视化保持联动的运营团队。',
      metrics: [
        { label: '销售模式', value: '3 条路径', detail: '在同一个 storefront 中销售实体商品、数字商品和与服务关联的附加项。' },
        { label: '交付方式', value: '自提 + 配送', detail: '支持自提、快递或本地配送，同时将 checkout 策略与配送自动化分开管理。' },
        { label: '客户后续跟进', value: '订单 + 访问', detail: '客户可在 client dashboard 中查看商品订单、配送状态和数字访问。' },
      ],
    },
    workflows: {
      eyebrow: '电商工作流',
      title: '已经在生产环境交付的能力',
      description:
        '本页反映当前产品栈：混合购物车、数字交付、EasyPost 集成、商品分类以及面向客户的订单历史。',
      cards: [
        { title: '服务与商品的混合购物车', description: '让客户在同一个 checkout 流程中购买实体商品、数字商品和与预约相关的附加项，而不是将销售拆散到不同工具中。', href: '/booking', cta: '查看 booking + checkout' },
        { title: '商品分类、slug 与 SEO 字段', description: '按分类整理商品目录，保持 storefront 导航更清晰，并为商品页管理 slug、meta title 和 meta description。', href: '/website-builder', cta: '查看 website builder' },
        { title: '支付后可交付的数字商品', description: '将商品标记为数字商品，在 digital products workspace 中映射交付规则，并支持 hosted files、外部链接、license delivery 或组合访问模式。', href: '/features', cta: '查看平台能力' },
        { title: 'EasyPost 配送自动化', description: '全局配置 shipping policy，连接 EasyPost，获取费率，购买面单，并将每笔订单的发货操作保留在经理订单工作流中。', href: '/docs', cta: '查看文档' },
        { title: '客户仪表盘订单历史', description: '客户可在管理 booking 的同一账户区域查看订单状态、交付方式、配送数据和数字访问结果。', href: '/client/support', cta: '查看支持' },
        { title: '库存、退款与履约控制', description: '跟踪库存，标记低库存，防止负库存，并让退款或补货动作始终关联到可审计的商品订单事件。', href: '/pricing', cta: '查看价格' },
      ],
    },
    controls: {
      eyebrow: '经理控制',
      title: '将商品策略、配送和数字访问分开管理',
      description:
        'Schedulaa 将 checkout 交付策略、EasyPost 自动化、数字交付规则和订单动作明确拆分，避免团队失去运营清晰度。',
      cards: [
        { title: '经理商品工作区', body: '在一个商品管理区域中创建商品、分配分类、控制可见性、管理库存阈值并上传商品图片。', points: ['用于 storefront 分组和筛选的 category 字段。', '公共商品页的 SEO 字段。', '每个商品的数字商品标记和 delivery override。'] },
        { title: '交付设置与 EasyPost 策略', body: '将 checkout 中展示的交付方式与 EasyPost 自动化设置分开，让团队在自动化配送操作的同时保持 checkout 策略清晰。', points: ['自提、shipping 和 local delivery 控制。', 'EasyPost API key、origin settings 和连接测试。', '商品级 delivery override 作为例外层。'] },
        { title: '数字商品工作区', body: '将数字商品映射到 hosted files、外部链接、访问码、license 规则和访问审计记录，而不把这些规则混入实体商品的配送逻辑。', points: ['hosted file、external link 和 license delivery 模式。', '下载/访问策略控制。', '面向支持和运营的 license 与访问审计视图。'] },
        { title: '订单操作与审计轨迹', body: '将 fulfillment、refund、shipment 和异常处理保留在 manager product orders 中，让支持和运营团队看到同一份 source of truth。', points: ['timeline 事件和具备异常处理意识的订单动作。', '与商品订单绑定的 refund/restock 处理。', '启用 EasyPost 时的 shipment summary 和 label 流程。'] },
      ],
    },
    connected: {
      eyebrow: '联动栈',
      title: 'Commerce 与 booking、网站、文档和支持保持联动',
      description:
        '这不是一个 bolt-on 商店。commerce 层与 booking 页面、website builder、delivery setup 和 client dashboard 共享上下文。',
      cards: [
        { title: 'Booking + mixed checkout', description: '查看商品和服务如何在同一客户流程中并存。', href: '/booking' },
        { title: 'Website builder + storefront', description: '发布支持服务和商品销售的品牌化公共页面。', href: '/website-builder' },
        { title: '运营文档', description: '查看交付策略、配送和联动工作流的设置说明。', href: '/docs' },
        { title: '联系 rollout 团队', description: '围绕 fulfillment、shipping 和数字交付规划你的 commerce rollout。', href: '/contact' },
      ],
    },
    faq: {
      eyebrow: 'Commerce 常见问题',
      title: '关于商品、配送和数字访问的常见问题',
      description: '答案基于 Schedulaa 当前在生产环境中真实提供的能力。',
      cards: [
        { title: 'Schedulaa 可以同时销售数字商品和实体商品吗？', description: '可以。商品目录同时支持实体和数字商品，并为配送和支付后数字访问提供分离的交付处理。' },
        { title: '支持通过 EasyPost 做配送自动化吗？', description: '支持。团队可以连接 EasyPost、测试 API key、加载 shipping rates、购买 labels，并将 shipment actions 保留在订单记录上。' },
        { title: '客户在 checkout 后可以看到自己的订单吗？', description: '可以。客户仪表盘中提供订单历史，包括订单摘要、交付方式、履约状态以及适用时的配送详情。' },
        { title: '可以管理商品分类和 SEO 字段吗？', description: '可以。商品支持 categories、slugs、meta title 和 meta description，便于 storefront 组织和优化。' },
      ],
    },
    cta: {
      eyebrow: '下一步',
      title: '需要一套同时支持服务、配送和数字交付的 commerce 栈吗？',
      description:
        '用同一平台管理商品目录、checkout、delivery policy、shipment automation 和面向客户的订单跟进。',
      talk: '联系 rollout 团队',
      pricing: '查看价格',
    },
  },
  es: {
    ...en,
    meta: {
      title: 'Commerce, envios y productos digitales | Schedulaa',
      description:
        'Vende productos fisicos, bienes digitales y add-ons de servicio con automatizacion de envios, categorias de producto, historial de pedidos del cliente y checkout mixto en Schedulaa.',
      openGraphTitle: 'Schedulaa Commerce, envios y productos digitales',
      openGraphDescription:
        'Schedulaa unifica venta de productos, acceso digital, envios con EasyPost y seguimiento del pedido del cliente en una sola plataforma operativa.',
      twitterTitle: 'Schedulaa Commerce, envios y productos digitales',
      twitterDescription: 'Vende productos y servicios juntos con envios EasyPost, entrega digital e historial de pedidos del cliente.',
    },
    hero: {
      badge: 'Commerce y entrega',
      title: 'eCommerce para servicios, productos fisicos y bienes digitales en un solo sistema operativo.',
      description:
        'Schedulaa ya soporta categorias de producto, bienes digitales, automatizacion de envios EasyPost, historial de pedidos del cliente y checkout mixto para que los negocios de servicios vendan mas sin agregar una tienda separada.',
      pricing: 'Ver precios',
      demo: 'Agendar demo',
    },
    overview: {
      eyebrow: 'Resumen commerce',
      title: 'Vende, cumple y da soporte a pedidos sin salir de la plataforma',
      description:
        'La capa de commerce esta pensada para equipos operativos que necesitan ventas de producto, envios, entrega digital y visibilidad de pedidos del cliente en un flujo conectado.',
      metrics: [
        { label: 'Modos de venta', value: '3 rutas', detail: 'Vende productos fisicos, bienes digitales y add-ons vinculados a servicios desde el mismo storefront.' },
        { label: 'Opciones de entrega', value: 'Retiro + envio', detail: 'Ofrece retiro, envio o entrega local separando la politica de checkout de la automatizacion de envios.' },
        { label: 'Seguimiento del cliente', value: 'Pedidos + acceso', detail: 'Los clientes pueden revisar pedidos, estado de entrega y acceso digital desde el dashboard del cliente.' },
      ],
    },
    workflows: {
      eyebrow: 'Flujos commerce',
      title: 'Capacidades ya disponibles en produccion',
      description:
        'Esta pagina refleja el stack actual del producto: carritos mixtos, entrega digital, integracion EasyPost, categorias de producto e historial de pedidos para clientes.',
      cards: [
        { title: 'Carritos mixtos para servicios y productos', description: 'Permite que los clientes compren productos fisicos, bienes digitales y add-ons relacionados con citas en un solo checkout en lugar de dividir ventas entre herramientas distintas.', href: '/booking', cta: 'Explorar booking + checkout' },
        { title: 'Categorias de producto, slugs y campos SEO', description: 'Organiza el catalogo por categoria, mantén una navegacion storefront mas clara y gestiona slug, meta title y meta description de las paginas de producto.', href: '/website-builder', cta: 'Explorar website builder' },
        { title: 'Bienes digitales con acceso post-pago', description: 'Marca productos como digitales, define reglas de entrega en el workspace digital y soporta hosted files, enlaces externos, entrega de licencias o patrones combinados de acceso.', href: '/features', cta: 'Explorar funciones de plataforma' },
        { title: 'Automatizacion de envios EasyPost', description: 'Configura shipping policy global, conecta EasyPost, consulta tarifas, compra labels y mantén acciones de envio por pedido dentro del workflow del manager.', href: '/docs', cta: 'Explorar docs' },
        { title: 'Historial de pedidos en dashboard del cliente', description: 'Los clientes pueden revisar estado del pedido, metodo de entrega, datos de envio y resultados de acceso digital desde la misma cuenta donde gestionan sus bookings.', href: '/client/support', cta: 'Explorar support' },
        { title: 'Controles de inventario, reembolsos y fulfillment', description: 'Sigue stock, marca inventario bajo, evita inventario negativo y mantén acciones de refund o restock conectadas a eventos auditables del pedido de producto.', href: '/pricing', cta: 'Ver precios' },
      ],
    },
    controls: {
      eyebrow: 'Controles del manager',
      title: 'Separa politica de producto, envios y acceso digital',
      description:
        'Schedulaa separa la politica de entrega del checkout, la automatizacion EasyPost, las reglas de entrega digital y las acciones de pedido para que los equipos no pierdan claridad operativa.',
      cards: [
        { title: 'Workspace de productos del manager', body: 'Crea productos, asigna categorias, controla visibilidad, gestiona umbrales de inventario y sube imagenes desde una sola area de gestion.', points: ['Campo category para agrupar y filtrar en storefront.', 'Campos SEO para paginas publicas de producto.', 'Bandera de producto digital y delivery overrides por item.'] },
        { title: 'Setup de entrega y politica EasyPost', body: 'Separa los delivery methods visibles en checkout de los ajustes de automatizacion EasyPost para mantener clara la politica de checkout mientras automatizas envios.', points: ['Controles de pickup, shipping y local delivery.', 'API key de EasyPost, origin settings y prueba de conexion.', 'Override de entrega por producto como capa de excepcion.'] },
        { title: 'Workspace de productos digitales', body: 'Mapea productos digitales a hosted files, enlaces externos, codigos de acceso, reglas de licencia y registros de auditoria de acceso sin mezclar esas reglas con la logica de envio fisico.', points: ['Modos de hosted file, external link y license delivery.', 'Controles de politica de descarga/acceso.', 'Vistas de auditoria de licencia y acceso para soporte y operaciones.'] },
        { title: 'Operaciones de pedido y auditoria', body: 'Mantén fulfillment, refund, shipment y manejo de excepciones dentro de los pedidos de producto del manager para que soporte y operaciones compartan la misma source of truth.', points: ['Eventos de timeline y acciones conscientes de excepciones.', 'Manejo de refund/restock ligado a pedidos de producto.', 'Shipment summary y flujo de labels cuando EasyPost esta habilitado.'] },
      ],
    },
    connected: {
      eyebrow: 'Stack conectado',
      title: 'Commerce sigue unido a booking, websites, docs y support',
      description:
        'Esto no es una tienda bolt-on. La capa commerce comparte contexto con tus paginas de booking, website builder, setup de entrega y dashboard del cliente.',
      cards: [
        { title: 'Booking + checkout mixto', description: 'Mira como productos y servicios pueden convivir en el mismo flujo del cliente.', href: '/booking' },
        { title: 'Website builder + storefront', description: 'Lanza paginas publicas de marca que soportan servicios y venta de productos.', href: '/website-builder' },
        { title: 'Docs operativas', description: 'Revisa la guia de configuracion para delivery policy, envios y flujos conectados.', href: '/docs' },
        { title: 'Hablar con el rollout team', description: 'Planifica tu rollout commerce alrededor de fulfillment, shipping y entrega digital.', href: '/contact' },
      ],
    },
    faq: {
      eyebrow: 'Preguntas commerce',
      title: 'Preguntas comunes sobre productos, envios y acceso digital',
      description: 'Respuestas basadas en lo que Schedulaa entrega hoy en produccion.',
      cards: [
        { title: '¿Schedulaa puede vender bienes digitales y productos fisicos?', description: 'Si. El catalogo soporta items fisicos y digitales con manejo separado para shipping y acceso digital post-pago.' },
        { title: '¿Soportan automatizacion de envios con EasyPost?', description: 'Si. Los equipos pueden conectar EasyPost, probar la API key, cargar tarifas, comprar labels y mantener acciones de envio en el pedido.' },
        { title: '¿Los clientes pueden ver sus pedidos despues del checkout?', description: 'Si. El historial de pedidos esta disponible en el dashboard, incluyendo resumen del pedido, metodo de entrega, estado de fulfillment y detalles de envio cuando aplica.' },
        { title: '¿Se pueden gestionar categorias y campos SEO de producto?', description: 'Si. Los productos soportan categorias, slugs, meta title y meta description para organizar y optimizar mejor el storefront.' },
      ],
    },
    cta: {
      eyebrow: 'Siguiente paso',
      title: '¿Necesitas un solo stack commerce para servicios, envios y entrega digital?',
      description:
        'Usa la misma plataforma para catalogo de producto, checkout, delivery policy, automatizacion de envios y seguimiento del pedido del cliente.',
      talk: 'Hablar con el rollout team',
      pricing: 'Ver precios',
    },
  },
  fr: {
    ...en,
    meta: {
      title: 'Commerce, expédition et produits numériques | Schedulaa',
      description:
        'Vendez produits physiques, biens numeriques et modules services avec automatisation d expedition, categories produit, historique client et checkout mixte dans Schedulaa.',
      openGraphTitle: 'Schedulaa Commerce, expédition et produits numériques',
      openGraphDescription:
        'Schedulaa unifie ventes produit, acces numerique, expedition EasyPost et suivi client dans une seule plateforme operationnelle.',
      twitterTitle: 'Schedulaa Commerce, expédition et produits numériques',
      twitterDescription: 'Vendez produits et services ensemble avec expedition EasyPost, livraison numerique et historique de commande client.',
    },
    hero: {
      badge: 'Commerce et livraison',
      title: 'eCommerce pour services, produits physiques et biens numeriques dans un seul systeme operationnel.',
      description:
        'Schedulaa prend deja en charge categories produit, biens numeriques, automatisation d expedition EasyPost, historique de commande client et checkout mixte afin que les entreprises de services vendent plus sans ajouter une boutique separee.',
      pricing: 'Voir les prix',
      demo: 'Planifier une demo',
    },
    overview: {
      eyebrow: 'Vue commerce',
      title: 'Vendre, executer et soutenir les commandes sans quitter la plateforme',
      description:
        'La couche commerce est concue pour les equipes operationnelles qui ont besoin de ventes produit, expedition, livraison numerique et visibilite client des commandes dans un flux connecte.',
      metrics: [
        { label: 'Modes de vente', value: '3 parcours', detail: 'Vendez produits physiques, biens numeriques et add-ons lies aux services depuis le meme storefront.' },
        { label: 'Choix de livraison', value: 'Retrait + expedition', detail: 'Proposez retrait, expedition ou livraison locale en separant politique de checkout et automatisation d expedition.' },
        { label: 'Suivi client', value: 'Commandes + acces', detail: 'Les clients peuvent revoir commandes, statut de livraison et acces numerique depuis le dashboard client.' },
      ],
    },
    workflows: {
      eyebrow: 'Flux commerce',
      title: 'Capacites deja livrees en production',
      description:
        'Cette page reflete le stack produit actuel : paniers mixtes, livraison numerique, integration EasyPost, categories produit et historique client des commandes.',
      cards: [
        { title: 'Paniers mixtes pour services et produits', description: 'Permettez aux clients d acheter produits physiques, biens numeriques et add-ons lies aux rendez-vous dans un seul checkout au lieu de separer les ventes.', href: '/booking', cta: 'Explorer booking + checkout' },
        { title: 'Categories produit, slug et champs SEO', description: 'Organisez le catalogue par categorie, gardez une navigation storefront plus claire et gerez slug, meta title et meta description pour les pages produit.', href: '/website-builder', cta: 'Explorer website builder' },
        { title: 'Biens numeriques avec acces apres paiement', description: 'Marquez les produits comme numeriques, mappez les regles de livraison dans le workspace digital products et supportez hosted files, liens externes, livraison de licence ou acces combine.', href: '/features', cta: 'Explorer les fonctions plateforme' },
        { title: 'Automatisation d expedition EasyPost', description: 'Configurez la shipping policy globalement, connectez EasyPost, chargez les tarifs, achetez des labels et gardez les actions d expedition dans le workflow commande manager.', href: '/docs', cta: 'Explorer les docs' },
        { title: 'Historique des commandes dans le dashboard client', description: 'Les clients peuvent revoir statut de commande, methode de livraison, donnees d expedition et resultats d acces numerique depuis la meme zone de compte que leurs bookings.', href: '/client/support', cta: 'Explorer le support' },
        { title: 'Controles inventaire, remboursements et fulfillment', description: 'Suivez le stock, signalez le faible niveau, evitez l inventaire negatif et gardez refund ou restock relies a des evenements de commande auditables.', href: '/pricing', cta: 'Voir les prix' },
      ],
    },
    controls: {
      eyebrow: 'Controles manager',
      title: 'Separez politique produit, expedition et acces numerique',
      description:
        'Schedulaa separe la politique de livraison du checkout, l automatisation EasyPost, les regles de livraison numerique et les actions de commande pour garder une vraie clarte operationnelle.',
      cards: [
        { title: 'Workspace produit manager', body: 'Creez des produits, assignez des categories, controlez la visibilite, gerez les seuils d inventaire et televersez les images depuis une seule zone de gestion.', points: ['Champ category pour grouper et filtrer le storefront.', 'Champs SEO pour les pages produit publiques.', 'Drapeau produit numerique et delivery overrides par article.'] },
        { title: 'Setup de livraison et politique EasyPost', body: 'Separez les delivery methods visibles au checkout des reglages EasyPost afin de garder la politique de checkout claire tout en automatisant l expedition.', points: ['Controles pickup, shipping et local delivery.', 'Cle API EasyPost, origin settings et test de connexion.', 'Override de livraison au niveau produit comme couche d exception.'] },
        { title: 'Workspace produits numeriques', body: 'Mappez les produits numeriques vers hosted files, liens externes, codes d acces, regles de licence et journaux d audit sans melanger ces regles avec la logique d expedition des produits physiques.', points: ['Modes hosted file, external link et license delivery.', 'Controles de politique telechargement/acces.', 'Vues d audit licence et acces pour support et operations.'] },
        { title: 'Operations de commande et piste d audit', body: 'Gardez fulfillment, refund, shipment et gestion des exceptions dans les manager product orders afin que support et operations partagent la meme source of truth.', points: ['Evenements timeline et actions de commande avec gestion des exceptions.', 'Gestion refund/restock reliee aux commandes produit.', 'Shipment summary et label flow quand EasyPost est active.'] },
      ],
    },
    connected: {
      eyebrow: 'Stack connecte',
      title: 'Commerce reste relie a booking, websites, docs et support',
      description:
        'Ce n est pas une boutique bolt-on. La couche commerce partage son contexte avec vos pages booking, website builder, setup de livraison et dashboard client.',
      cards: [
        { title: 'Booking + checkout mixte', description: 'Voyez comment produits et services peuvent vivre dans le meme flux client.', href: '/booking' },
        { title: 'Website builder + storefront', description: 'Lancez des pages publiques de marque qui supportent services et ventes produit.', href: '/website-builder' },
        { title: 'Docs operationnelles', description: 'Revoyez le guide de configuration pour delivery policy, expedition et workflows connectes.', href: '/docs' },
        { title: 'Parler a l equipe rollout', description: 'Planifiez votre rollout commerce autour du fulfillment, de l expedition et de la livraison numerique.', href: '/contact' },
      ],
    },
    faq: {
      eyebrow: 'Questions commerce',
      title: 'Questions courantes sur produits, expedition et acces numerique',
      description: 'Reponses basees sur ce que Schedulaa livre aujourd hui en production.',
      cards: [
        { title: 'Schedulaa peut-il vendre des biens numeriques et des produits physiques ?', description: 'Oui. Le catalogue produit supporte les deux avec une gestion separee pour l expedition et l acces numerique apres paiement.' },
        { title: 'Supportez-vous l automatisation d expedition avec EasyPost ?', description: 'Oui. Les equipes peuvent connecter EasyPost, tester la cle API, charger les tarifs, acheter des labels et garder les actions d expedition sur la commande.' },
        { title: 'Les clients peuvent-ils voir leurs commandes apres le checkout ?', description: 'Oui. L historique de commande est disponible dans le dashboard, avec resume, methode de livraison, etat de fulfillment et details d expedition selon le cas.' },
        { title: 'Peut-on gerer categories produit et champs SEO ?', description: 'Oui. Les produits supportent categories, slugs, meta title et meta description pour mieux organiser et optimiser le storefront.' },
      ],
    },
    cta: {
      eyebrow: 'Etape suivante',
      title: 'Besoin d un seul stack commerce pour services, expedition et livraison numerique ?',
      description:
        'Utilisez la meme plateforme pour catalogue produit, checkout, delivery policy, automatisation d expedition et suivi client des commandes.',
      talk: 'Parler a l equipe rollout',
      pricing: 'Voir les prix',
    },
  },
  de: {
    ...en,
    meta: {
      title: 'Commerce, Versand und digitale Gueter | Schedulaa',
      description:
        'Verkaufen Sie physische Produkte, digitale Gueter und Service-Add-ons mit Versandautomatisierung, Produktkategorien, Kundenbestellhistorie und gemischten Checkout-Flows in Schedulaa.',
      openGraphTitle: 'Schedulaa Commerce, Versand und digitale Gueter',
      openGraphDescription:
        'Schedulaa vereint Produktverkauf, digitalen Zugriff, EasyPost-Versand und Kundenbestell-Nachverfolgung in einer operativen Plattform.',
      twitterTitle: 'Schedulaa Commerce, Versand und digitale Gueter',
      twitterDescription: 'Verkaufen Sie Produkte und Services zusammen mit EasyPost-Versand, digitaler Auslieferung und Kundenbestellhistorie.',
    },
    hero: {
      badge: 'Commerce & Versand',
      title: 'eCommerce fuer Services, physische Produkte und digitale Gueter in einem Betriebssystem.',
      description:
        'Schedulaa unterstuetzt bereits Produktkategorien, digitale Gueter, EasyPost-Versandautomatisierung, Kundenbestellhistorie und gemischte Checkout-Flows, damit Serviceunternehmen mehr verkaufen koennen, ohne einen separaten Shop anzubauen.',
      pricing: 'Preise ansehen',
      demo: 'Demo planen',
    },
    overview: {
      eyebrow: 'Commerce-Ueberblick',
      title: 'Verkaufen, erfuellen und Bestellungen betreuen, ohne die Plattform zu verlassen',
      description:
        'Der Commerce-Stack ist fuer operative Teams gebaut, die Produktverkauf, Versand, digitale Auslieferung und Kundensicht auf Bestellungen in einem verbundenen Ablauf brauchen.',
      metrics: [
        { label: 'Verkaufsarten', value: '3 Wege', detail: 'Verkaufen Sie physische Produkte, digitale Gueter und servicebezogene Add-ons aus demselben Storefront.' },
        { label: 'Lieferoptionen', value: 'Abholung + Versand', detail: 'Bieten Sie Abholung, Versand oder lokale Lieferung an und trennen Sie Checkout-Politik von Versandautomatisierung.' },
        { label: 'Kunden-Nachlauf', value: 'Bestellungen + Zugriff', detail: 'Kunden koennen Produktbestellungen, Lieferstatus und digitalen Zugriff im Client-Dashboard einsehen.' },
      ],
    },
    workflows: {
      eyebrow: 'Commerce-Workflows',
      title: 'Bereits produktiv ausgelieferte Funktionen',
      description:
        'Diese Seite spiegelt den aktuellen Produkt-Stack wider: gemischte Warenkoerbe, digitale Auslieferung, EasyPost-Integration, Produktkategorien und kundennahe Bestellhistorie.',
      cards: [
        { title: 'Gemischte Warenkoerbe fuer Services und Produkte', description: 'Lassen Sie Kunden physische Produkte, digitale Gueter und terminbezogene Add-ons in einem Checkout kaufen, statt Verkaeufe auf verschiedene Tools zu verteilen.', href: '/booking', cta: 'Booking + Checkout ansehen' },
        { title: 'Produktkategorien, Slugs und SEO-Felder', description: 'Organisieren Sie Katalogartikel nach Kategorien, halten Sie die Storefront-Navigation sauberer und verwalten Sie Slug, Meta Title und Meta Description fuer Produktseiten.', href: '/website-builder', cta: 'Website Builder ansehen' },
        { title: 'Digitale Gueter mit Zugriff nach Zahlung', description: 'Markieren Sie Produkte als digital, legen Sie Auslieferungsregeln im Digital-Products-Workspace fest und unterstuetzen Sie hosted files, externe Links, Lizenzzustellung oder kombinierte Zugriffsmuster.', href: '/features', cta: 'Plattformfunktionen ansehen' },
        { title: 'EasyPost-Versandautomatisierung', description: 'Konfigurieren Sie die Shipping Policy global, verbinden Sie EasyPost, holen Sie Tarife, kaufen Sie Labels und halten Sie versandbezogene Aktionen im Manager-Order-Workflow.', href: '/docs', cta: 'Docs ansehen' },
        { title: 'Bestellhistorie im Client-Dashboard', description: 'Kunden koennen Bestellstatus, Liefermethode, Versanddaten und digitale Zugriffsergebnisse in demselben Kontobereich sehen, in dem sie ihre Bookings verwalten.', href: '/client/support', cta: 'Support ansehen' },
        { title: 'Inventar-, Refund- und Fulfillment-Kontrollen', description: 'Verfolgen Sie Bestand, markieren Sie niedrige Lagerstaende, verhindern Sie negativen Bestand und binden Sie Refund- oder Restock-Aktionen an auditierbare Produktorder-Ereignisse.', href: '/pricing', cta: 'Preise ansehen' },
      ],
    },
    controls: {
      eyebrow: 'Manager-Kontrollen',
      title: 'Trennen Sie Produktpolitik, Versand und digitalen Zugriff',
      description:
        'Schedulaa haelt Checkout-Lieferpolitik, EasyPost-Automatisierung, Regeln fuer digitale Auslieferung und Bestellaktionen getrennt, damit Teams ihre operative Klarheit behalten.',
      cards: [
        { title: 'Manager-Produktbereich', body: 'Erstellen Sie Produkte, weisen Sie Kategorien zu, steuern Sie Sichtbarkeit, verwalten Sie Inventarschwellen und laden Sie Produktbilder aus einem Verwaltungsbereich hoch.', points: ['Category-Feld fuer Storefront-Gruppierung und Filterung.', 'SEO-Felder fuer oeffentliche Produktseiten.', 'Digitalprodukt-Flag und Delivery Overrides pro Artikel.'] },
        { title: 'Liefer-Setup und EasyPost-Politik', body: 'Trennen Sie die im Checkout sichtbaren Delivery Methods von EasyPost-Automatisierungssettings, damit die Checkout-Politik klar bleibt und der Versand trotzdem automatisiert wird.', points: ['Pickup-, Shipping- und Local-Delivery-Kontrollen.', 'EasyPost API Key, Origin Settings und Verbindungstest.', 'Produktbezogener Delivery Override als Ausnahmeschicht.'] },
        { title: 'Digital-Products-Workspace', body: 'Ordnen Sie digitale Produkte hosted files, externen Links, Zugangscodes, Lizenzregeln und Audit-Zugriffsdatensaetzen zu, ohne diese Regeln mit der Versandlogik physischer Produkte zu vermischen.', points: ['Hosted-File-, External-Link- und License-Delivery-Modi.', 'Download-/Zugriffs-Policy-Kontrollen.', 'Lizenz- und Zugriffs-Audit-Ansichten fuer Support und Operations.'] },
        { title: 'Order Operations und Audit Trail', body: 'Halten Sie Fulfillment, Refund, Shipment und Exception Handling in den Manager Product Orders, damit Support- und Operations-Teams dieselbe Source of Truth sehen.', points: ['Timeline Events und exception-aware Order Actions.', 'Refund-/Restock-Handling, an Produktorders gebunden.', 'Shipment Summary und Label-Flow bei aktiviertem EasyPost.'] },
      ],
    },
    connected: {
      eyebrow: 'Verbundener Stack',
      title: 'Commerce bleibt mit Booking, Websites, Docs und Support verbunden',
      description:
        'Das ist kein bolt-on Store. Die Commerce-Schicht teilt Kontext mit Ihren Booking-Seiten, dem Website Builder, dem Delivery Setup und dem Client Dashboard.',
      cards: [
        { title: 'Booking + gemischter Checkout', description: 'Sehen Sie, wie Produkte und Services im selben Kundenfluss leben koennen.', href: '/booking' },
        { title: 'Website Builder + Storefront', description: 'Starten Sie gebrandete oeffentliche Seiten, die sowohl Services als auch Produktverkauf unterstuetzen.', href: '/website-builder' },
        { title: 'Operative Docs', description: 'Pruefen Sie die Setup-Anleitung fuer Delivery Policy, Versand und verbundene Workflows.', href: '/docs' },
        { title: 'Mit dem Rollout-Team sprechen', description: 'Planen Sie Ihren Commerce-Rollout rund um Fulfillment, Shipping und digitale Auslieferung.', href: '/contact' },
      ],
    },
    faq: {
      eyebrow: 'Commerce-Fragen',
      title: 'Hauefige Fragen zu Produkten, Versand und digitalem Zugriff',
      description: 'Antworten auf Basis dessen, was Schedulaa heute in Produktion liefert.',
      cards: [
        { title: 'Kann Schedulaa digitale Gueter und physische Produkte verkaufen?', description: 'Ja. Der Produktkatalog unterstuetzt beides, mit getrennter Behandlung fuer Versand und digitalen Zugriff nach Zahlung.' },
        { title: 'Unterstuetzen Sie Versandautomatisierung mit EasyPost?', description: 'Ja. Teams koennen EasyPost verbinden, den API Key testen, Tarife laden, Labels kaufen und Versandaktionen am Order Record halten.' },
        { title: 'Koennen Kunden ihre Bestellungen nach dem Checkout sehen?', description: 'Ja. Die Bestellhistorie ist im Dashboard verfuegbar, einschliesslich Bestelluebersicht, Liefermethode, Fulfillment-Status und Versanddetails, sofern vorhanden.' },
        { title: 'Koennen Produktkategorien und SEO-Felder verwaltet werden?', description: 'Ja. Produkte unterstuetzen Kategorien, Slugs, Meta Title und Meta Description, damit Storefront-Artikel leichter organisiert und optimiert werden koennen.' },
      ],
    },
    cta: {
      eyebrow: 'Naechster Schritt',
      title: 'Brauchen Sie einen Commerce-Stack fuer Services, Versand und digitale Auslieferung?',
      description:
        'Nutzen Sie dieselbe Plattform fuer Produktkatalog, Checkout, Delivery Policy, Versandautomatisierung und kundennahe Bestellnachverfolgung.',
      talk: 'Mit dem Rollout-Team sprechen',
      pricing: 'Preise ansehen',
    },
  },
  ar: {
    ...en,
    meta: {
      title: 'التجارة والشحن والمنتجات الرقمية | Schedulaa',
      description:
        'بع المنتجات المادية والرقمية وملحقات الخدمات مع اتمتة الشحن وفئات المنتجات وسجل طلبات العميل ومسارات checkout المختلطة داخل Schedulaa.',
      openGraphTitle: 'Schedulaa التجارة والشحن والمنتجات الرقمية',
      openGraphDescription: 'يوحد Schedulaa بيع المنتجات والوصول الرقمي وشحن EasyPost ومتابعة طلبات العميل داخل منصة تشغيلية واحدة.',
      twitterTitle: 'Schedulaa التجارة والشحن والمنتجات الرقمية',
      twitterDescription: 'بع المنتجات والخدمات معا مع شحن EasyPost والتسليم الرقمي وسجل طلبات العميل.',
    },
    hero: {
      badge: 'التجارة والتسليم',
      title: 'تجارة الكترونية للخدمات والمنتجات المادية والمنتجات الرقمية في نظام تشغيلي واحد.',
      description:
        'يدعم Schedulaa الان فئات المنتجات والمنتجات الرقمية واتوماسيون الشحن EasyPost وسجل طلبات العميل ومسارات checkout المختلطة حتى تتمكن شركات الخدمات من البيع اكثر من دون تركيب متجر منفصل.',
      pricing: 'عرض الاسعار',
      demo: 'حجز عرض تجريبي',
    },
    overview: {
      eyebrow: 'نظرة عامة على التجارة',
      title: 'بع ونفذ وادعم الطلبات من داخل المنصة نفسها',
      description:
        'طبقة commerce مبنية للفرق التشغيلية التي تحتاج الى بيع المنتجات والشحن والتسليم الرقمي ورؤية طلبات العميل ضمن مسار مترابط.',
      metrics: [
        { label: 'طرق البيع', value: '3 مسارات', detail: 'بع المنتجات المادية والرقمية والاضافات المرتبطة بالخدمة من storefront واحد.' },
        { label: 'خيارات التسليم', value: 'استلام + شحن', detail: 'قدم الاستلام او الشحن او التوصيل المحلي مع فصل سياسة checkout عن اتمتة الشحن.' },
        { label: 'متابعة العميل', value: 'طلبات + وصول', detail: 'يمكن للعملاء مراجعة طلبات المنتجات وحالة التسليم والوصول الرقمي من dashboard العميل.' },
      ],
    },
    workflows: {
      eyebrow: 'مسارات التجارة',
      title: 'قدرات تم شحنها بالفعل في بيئة الإنتاج',
      description:
        'تعكس هذه الصفحة المكدس الحالي للمنتج: سلال مختلطة وتسليم رقمي وتكامل EasyPost وفئات المنتجات وسجل الطلبات المواجه للعميل.',
      cards: [
        { title: 'سلال مختلطة للخدمات والمنتجات', description: 'اسمح للعميل بشراء المنتجات المادية والرقمية واضافات المواعيد ضمن checkout واحد بدلا من تقسيم المبيعات على ادوات مختلفة.', href: '/booking', cta: 'استكشاف booking + checkout' },
        { title: 'فئات المنتجات و slug وحقول SEO', description: 'نظم عناصر الكتالوج حسب الفئة، وحافظ على تنقل storefront اوضح، وادِر slug و meta title و meta description لصفحات المنتج.', href: '/website-builder', cta: 'استكشاف website builder' },
        { title: 'منتجات رقمية مع وصول بعد الدفع', description: 'ضع علامة على المنتج الرقمي، واربط قواعد التسليم في مساحة digital products، وادعم hosted files او الروابط الخارجية او تسليم التراخيص او انماط الوصول المجمعة.', href: '/features', cta: 'استكشاف قدرات المنصة' },
        { title: 'اتوماسيون الشحن EasyPost', description: 'اضبط shipping policy بشكل عام، ووصل EasyPost، واجلب الاسعار، واشترِ labels، واحتفظ باجراءات الشحنة لكل طلب داخل workflow المدير.', href: '/docs', cta: 'استكشاف docs' },
        { title: 'سجل الطلبات في dashboard العميل', description: 'يمكن للعملاء مراجعة حالة الطلب وطريقة التسليم وبيانات الشحن ونتائج الوصول الرقمي من نفس منطقة الحساب التي يديرون منها bookings.', href: '/client/support', cta: 'استكشاف support' },
        { title: 'التحكم في المخزون والاسترداد و fulfillment', description: 'تابع المخزون، واظهر انخفاضه، وامنع المخزون السالب، وابقِ اجراءات refund او restock مرتبطة باحداث قابلة للتدقيق في طلب المنتج.', href: '/pricing', cta: 'عرض الاسعار' },
      ],
    },
    controls: {
      eyebrow: 'ضوابط المدير',
      title: 'افصل سياسة المنتج والشحن والوصول الرقمي',
      description:
        'يفصل Schedulaa بين سياسة التسليم في checkout واتوماسيون EasyPost وقواعد التسليم الرقمي واجراءات الطلب حتى لا تفقد الفرق وضوحها التشغيلي.',
      cards: [
        { title: 'مساحة منتجات المدير', body: 'انشئ منتجات، وخصص فئات، وتحكم في الظهور، وادِر حدود المخزون، وارفع صور المنتجات من مساحة ادارة واحدة.', points: ['حقل category لتجميع storefront وتصفيته.', 'حقول SEO لصفحات المنتج العامة.', 'علامة المنتج الرقمي و delivery overrides لكل عنصر.'] },
        { title: 'اعداد التسليم وسياسة EasyPost', body: 'افصل بين delivery methods الظاهرة في checkout وبين اعدادات EasyPost حتى تبقى سياسة checkout واضحة مع استمرار اتمتة عمليات الشحن.', points: ['ضوابط pickup و shipping و local delivery.', 'مفتاح API الخاص بـ EasyPost واعدادات origin واختبار الاتصال.', 'delivery override على مستوى المنتج كطبقة استثناء.'] },
        { title: 'مساحة المنتجات الرقمية', body: 'اربط المنتجات الرقمية بـ hosted files والروابط الخارجية ورموز الوصول وقواعد الترخيص وسجلات تدقيق الوصول من دون خلط هذه القواعد مع منطق شحن المنتجات المادية.', points: ['اوضاع hosted file و external link و license delivery.', 'ضوابط سياسة التنزيل والوصول.', 'شاشات تدقيق الترخيص والوصول للدعم والعمليات.'] },
        { title: 'عمليات الطلب ومسار التدقيق', body: 'احتفظ بـ fulfillment و refund و shipment ومعالجة الاستثناءات داخل manager product orders حتى ترى فرق الدعم والعمليات نفس source of truth.', points: ['احداث timeline واجراءات طلب واعية بالاستثناءات.', 'معالجة refund/restock مرتبطة بطلبات المنتجات.', 'shipment summary و label flow عند تفعيل EasyPost.'] },
      ],
    },
    connected: {
      eyebrow: 'مكدس مترابط',
      title: 'تبقى التجارة مرتبطة بـ booking والمواقع والوثائق والدعم',
      description:
        'هذا ليس متجرا bolt-on. طبقة commerce تشارك السياق مع صفحات booking و website builder و delivery setup و client dashboard.',
      cards: [
        { title: 'Booking + checkout مختلط', description: 'شاهد كيف يمكن للمنتجات والخدمات ان تعيش في نفس مسار العميل.', href: '/booking' },
        { title: 'Website builder + storefront', description: 'اطلق صفحات عامة بعلامتك التجارية تدعم الخدمات وبيع المنتجات معا.', href: '/website-builder' },
        { title: 'وثائق تشغيلية', description: 'راجع دليل الاعداد الخاص بـ delivery policy والشحن و workflows المترابطة.', href: '/docs' },
        { title: 'التحدث مع فريق rollout', description: 'خطط rollout التجارة لديك حول fulfillment والشحن والتسليم الرقمي.', href: '/contact' },
      ],
    },
    faq: {
      eyebrow: 'اسئلة التجارة',
      title: 'اسئلة شائعة حول المنتجات والشحن والوصول الرقمي',
      description: 'اجابات مبنية على ما يقدمه Schedulaa فعليا في production اليوم.',
      cards: [
        { title: 'هل يمكن لـ Schedulaa بيع المنتجات الرقمية والمادية؟', description: 'نعم. يدعم كتالوج المنتجات النوعين، مع معالجة منفصلة للشحن والوصول الرقمي بعد الدفع.' },
        { title: 'هل تدعمون اتمتة الشحن مع EasyPost؟', description: 'نعم. يمكن للفرق توصيل EasyPost واختبار API key وتحميل الاسعار وشراء labels والاحتفاظ باجراءات الشحن داخل سجل الطلب.' },
        { title: 'هل يمكن للعملاء رؤية طلباتهم بعد checkout؟', description: 'نعم. يتوفر سجل الطلبات في dashboard ويتضمن ملخص الطلب وطريقة التسليم وحالة fulfillment وتفاصيل الشحنة عند الحاجة.' },
        { title: 'هل يمكن ادارة فئات المنتج وحقول SEO؟', description: 'نعم. تدعم المنتجات categories و slugs و meta title و meta description حتى يكون تنظيم storefront وتحسينه اسهل.' },
      ],
    },
    cta: {
      eyebrow: 'الخطوة التالية',
      title: 'هل تحتاج الى commerce stack واحد للخدمات والشحن والتسليم الرقمي؟',
      description:
        'استخدم نفس المنصة لكتالوج المنتجات و checkout و delivery policy و shipment automation ومتابعة الطلبات من جهة العميل.',
      talk: 'التحدث مع فريق rollout',
      pricing: 'عرض الاسعار',
    },
  },
  pt: {
    ...en,
    meta: {
      title: 'Commerce, envio e produtos digitais | Schedulaa',
      description:
        'Venda produtos fisicos, bens digitais e add-ons de servico com automacao de envio, categorias de produto, historico de pedidos do cliente e checkout misto no Schedulaa.',
      openGraphTitle: 'Schedulaa Commerce, envio e produtos digitais',
      openGraphDescription:
        'Schedulaa unifica venda de produtos, acesso digital, envio com EasyPost e acompanhamento do pedido do cliente em uma plataforma operacional.',
      twitterTitle: 'Schedulaa Commerce, envio e produtos digitais',
      twitterDescription: 'Venda produtos e servicos juntos com envio EasyPost, entrega digital e historico de pedidos do cliente.',
    },
    hero: {
      badge: 'Commerce e entrega',
      title: 'eCommerce para servicos, produtos fisicos e produtos digitais em um unico sistema operacional.',
      description:
        'O Schedulaa ja suporta categorias de produto, bens digitais, automacao de envio EasyPost, historico de pedidos do cliente e checkout misto para que empresas de servicos vendam mais sem adicionar uma loja separada.',
      pricing: 'Ver precos',
      demo: 'Agendar demo',
    },
    overview: {
      eyebrow: 'Visao geral de commerce',
      title: 'Venda, entregue e acompanhe pedidos sem sair da plataforma',
      description:
        'A camada de commerce foi feita para equipes operacionais que precisam de venda de produtos, envio, entrega digital e visibilidade do pedido do cliente em um fluxo conectado.',
      metrics: [
        { label: 'Modos de venda', value: '3 caminhos', detail: 'Venda produtos fisicos, bens digitais e add-ons ligados a servicos a partir do mesmo storefront.' },
        { label: 'Opcoes de entrega', value: 'Retirada + envio', detail: 'Ofereca retirada, envio ou entrega local mantendo separadas a politica de checkout e a automacao de envio.' },
        { label: 'Acompanhamento do cliente', value: 'Pedidos + acesso', detail: 'Clientes podem revisar pedidos, status de entrega e acesso digital no dashboard do cliente.' },
      ],
    },
    workflows: {
      eyebrow: 'Fluxos commerce',
      title: 'Capacidades ja entregues em producao',
      description:
        'Esta pagina reflete o stack atual do produto: carrinhos mistos, entrega digital, integracao EasyPost, categorias de produto e historico de pedidos voltado ao cliente.',
      cards: [
        { title: 'Carrinhos mistos para servicos e produtos', description: 'Permita que clientes comprem produtos fisicos, bens digitais e add-ons ligados a agendamentos em um unico checkout em vez de dividir as vendas entre varias ferramentas.', href: '/booking', cta: 'Explorar booking + checkout' },
        { title: 'Categorias de produto, slug e campos SEO', description: 'Organize itens do catalogo por categoria, mantenha a navegacao do storefront mais limpa e gerencie slug, meta title e meta description das paginas de produto.', href: '/website-builder', cta: 'Explorar website builder' },
        { title: 'Produtos digitais com acesso apos pagamento', description: 'Marque produtos como digitais, mapeie regras de entrega no workspace digital e suporte hosted files, links externos, entrega de licenca ou padroes combinados de acesso.', href: '/features', cta: 'Explorar recursos da plataforma' },
        { title: 'Automacao de envio EasyPost', description: 'Configure a shipping policy globalmente, conecte EasyPost, carregue tarifas, compre labels e mantenha as acoes de remessa dentro do workflow do pedido do gestor.', href: '/docs', cta: 'Explorar docs' },
        { title: 'Historico de pedidos no dashboard do cliente', description: 'Clientes podem revisar status do pedido, metodo de entrega, dados de remessa e resultados de acesso digital na mesma area de conta em que gerenciam bookings.', href: '/client/support', cta: 'Explorar support' },
        { title: 'Controles de estoque, reembolso e fulfillment', description: 'Acompanhe estoque, sinalize niveis baixos, evite estoque negativo e mantenha acoes de refund ou restock ligadas a eventos auditaveis de pedidos de produto.', href: '/pricing', cta: 'Ver precos' },
      ],
    },
    controls: {
      eyebrow: 'Controles do gestor',
      title: 'Separe politica de produto, envio e acesso digital',
      description:
        'O Schedulaa separa politica de entrega no checkout, automacao EasyPost, regras de entrega digital e acoes do pedido para que a equipe nao perca clareza operacional.',
      cards: [
        { title: 'Workspace de produtos do gestor', body: 'Crie produtos, atribua categorias, controle visibilidade, gerencie limites de estoque e envie imagens do produto a partir de uma unica area.', points: ['Campo category para agrupamento e filtro no storefront.', 'Campos SEO para paginas publicas de produto.', 'Flag de produto digital e delivery overrides por item.'] },
        { title: 'Setup de entrega e politica EasyPost', body: 'Separe os delivery methods mostrados no checkout das configuracoes de automacao EasyPost para manter a politica de checkout clara enquanto automatiza o envio.', points: ['Controles de pickup, shipping e local delivery.', 'API key do EasyPost, origin settings e teste de conexao.', 'Delivery override no nivel do produto como camada de excecao.'] },
        { title: 'Workspace de produtos digitais', body: 'Mapeie produtos digitais para hosted files, links externos, codigos de acesso, regras de licenca e registros de auditoria de acesso sem misturar essas regras com a logica de envio de produtos fisicos.', points: ['Modos de hosted file, external link e license delivery.', 'Controles de politica de download/acesso.', 'Views de auditoria de licenca e acesso para suporte e operacoes.'] },
        { title: 'Operacoes do pedido e trilha de auditoria', body: 'Mantenha fulfillment, refund, shipment e tratamento de excecoes dentro dos manager product orders para que suporte e operacoes vejam a mesma source of truth.', points: ['Eventos de timeline e acoes de pedido com tratamento de excecoes.', 'Tratamento de refund/restock ligado aos pedidos de produto.', 'Shipment summary e label flow quando o EasyPost esta habilitado.'] },
      ],
    },
    connected: {
      eyebrow: 'Stack conectado',
      title: 'Commerce continua ligado a booking, websites, docs e support',
      description:
        'Isso nao e uma loja bolt-on. A camada commerce compartilha contexto com suas paginas de booking, website builder, delivery setup e client dashboard.',
      cards: [
        { title: 'Booking + checkout misto', description: 'Veja como produtos e servicos podem viver no mesmo fluxo do cliente.', href: '/booking' },
        { title: 'Website builder + storefront', description: 'Lance paginas publicas com sua marca que suportem servicos e venda de produtos.', href: '/website-builder' },
        { title: 'Docs operacionais', description: 'Revise o guia de setup para delivery policy, envio e workflows conectados.', href: '/docs' },
        { title: 'Falar com o rollout team', description: 'Planeje seu rollout commerce em torno de fulfillment, shipping e entrega digital.', href: '/contact' },
      ],
    },
    faq: {
      eyebrow: 'Perguntas de commerce',
      title: 'Perguntas comuns sobre produtos, envio e acesso digital',
      description: 'Respostas baseadas no que o Schedulaa entrega hoje em producao.',
      cards: [
        { title: 'O Schedulaa pode vender produtos digitais e fisicos?', description: 'Sim. O catalogo de produtos suporta ambos, com tratamento separado para shipping e acesso digital apos o pagamento.' },
        { title: 'Vocês suportam automacao de envio com EasyPost?', description: 'Sim. As equipes podem conectar o EasyPost, testar a API key, carregar tarifas, comprar labels e manter as acoes de envio no registro do pedido.' },
        { title: 'Os clientes podem ver seus pedidos apos o checkout?', description: 'Sim. O historico de pedidos fica disponivel no dashboard, incluindo resumo, metodo de entrega, status de fulfillment e detalhes de remessa quando aplicavel.' },
        { title: 'E possivel gerenciar categorias de produto e campos SEO?', description: 'Sim. Os produtos suportam categories, slugs, meta title e meta description para organizar e otimizar melhor o storefront.' },
      ],
    },
    cta: {
      eyebrow: 'Proximo passo',
      title: 'Precisa de um unico stack commerce para servicos, envio e entrega digital?',
      description:
        'Use a mesma plataforma para catalogo de produto, checkout, delivery policy, shipment automation e acompanhamento de pedidos pelo cliente.',
      talk: 'Falar com o rollout team',
      pricing: 'Ver precos',
    },
  },
};

export const getCommerceCopy = (locale: AppLocale): CommerceCopy => copyByLocale[locale] || en;

export const getCommerceMeta = (locale: AppLocale) => getCommerceCopy(locale).meta;
