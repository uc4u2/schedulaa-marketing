import { marketingPages as marketingPagesEn } from './config';

const marketingCta = {
  overline: 'آماده‌ی شروع هستید',
  title: 'کمپین بعدی را اجرا کنید و نتیجه را لحظه‌ای ببینید',
  body: 'Schedulaa کمپین‌ها، سگمنت‌ها، تحلیل و خروجی‌ها را در یک جریان یکپارچه نگه می‌دارد.',
  primary: { label: 'شروع کمپین', href: '/register' },
  secondary: { label: 'ورود', href: '/login' },
};

const marketingSecondaryLinks = [
  { label: 'نمای کلی خروجی مشتریان', href: '/marketing/clients-360#exports' },
  { label: 'مشاهده قابلیت‌های رزرو', href: '/booking' },
  { label: 'سایت‌ساز', href: '/website-builder' },
];

const hubEn = marketingPagesEn.hub;

const hub = {
  ...hubEn,
  meta: {
    ...hubEn.meta,
    title: 'بازاریابی و تحلیل برای کسب‌وکارهای خدماتی | Schedulaa',
    description:
      'کمپین‌های هدفمند ایمیلی اجرا کنید، لیست مشتریان را خروجی بگیرید و KPIها را با تحلیل پیشرفته پایش کنید.',
    og: {
      ...hubEn.meta.og,
      title: 'بازاریابی و تحلیل برای کسب‌وکارهای خدماتی | Schedulaa',
      description: 'کمپین اجرا کنید، سگمنت بسازید، خروجی بگیرید و شاخص‌ها را در یک داشبورد دنبال کنید.',
    },
    twitter: {
      ...hubEn.meta.twitter,
      title: 'بازاریابی و تحلیل برای کسب‌وکارهای خدماتی | Schedulaa',
      description: 'کمپین‌ها، سگمنت‌های چرخه عمر، خروجی مشتریان و تحلیل سازمانی در یک پلتفرم.',
    },
  },
  hero: {
    ...hubEn.hero,
    badge: 'چرخه عمر و KPI',
    title: 'بازاریابی و تحلیل — رشد، نگهداشت و شناخت بهتر مشتری',
    subtitle:
      'با Schedulaa کمپین‌های آماده، سگمنت‌های چرخه عمر، خروجی مشتری و تحلیل پیشرفته را یکجا دارید؛ از win-back تا VIP و تحلیل درآمد، رزرو و بازگشت مشتری.',
    points: [
      'کمپین‌های آماده برای win-back، VIP، سالگرد، معرفی خدمت جدید و بیشتر.',
      'سگمنت‌های چرخه عمر با آستانه‌های قابل تنظیم (VIP، وفادار، جدید، فعال، در معرض ریسک، از دست‌رفته).',
      'تحلیل سازمانی برای رزرو، درآمد، نگهداشت، انعام و عملکرد کارت ذخیره‌شده.',
    ],
    primaryCta: { ...hubEn.hero.primaryCta, label: 'شروع کمپین' },
    secondaryCta: { ...hubEn.hero.secondaryCta, label: 'ورود' },
  },
  sections: [
    {
      overline: 'کمپین‌ها',
      title: 'کمپین‌هایی که همین امروز اجرا می‌شوند',
      body:
        'از جریان‌های آماده با محدودیت هوشمند، فیلتر سگمنت، پیشوند کد تخفیف و پنجره انقضا استفاده کنید. هر کمپین dry-run و سقف گیرنده دارد.',
      points: [
        'اعلان‌های عمومی برای تعطیلی، ساعات ویژه یا تغییر سیاست.',
        'Win-Back برای مشتریانی که فاصله مراجعه‌شان از الگوی شخصی عبور کرده است.',
        'Skipped Rebook Nudge برای پیگیری مشتریانی که رزرو بعدی انجام نداده‌اند.',
        'پاداش VIP برای ۱۰٪ مشتریان برتر با کوپن اختصاصی و لینک عمیق.',
        'پیام‌های سالگرد بر اساس ماه اولین مراجعه.',
        'کمپین معرفی خدمت جدید برای مشتریان هدف.',
        'No-Show Recovery و Add-on Upsell با تخفیف اختیاری.',
      ],
      buttons: [{ label: 'مشاهده سازنده کمپین', href: '/marketing/email-campaigns' }],
    },
    {
      overline: 'سگمنت‌ها',
      title: 'سگمنت‌های چرخه عمر آماده استفاده',
      body: 'با cohortهای چرخه عمر، برنامه‌های نگهداشت را متمرکز اجرا کنید و آستانه‌ها را متناسب با کسب‌وکار تنظیم کنید.',
      points: [
        'VIP، وفادار، جدید، فعال، در معرض ریسک، از دست‌رفته با پارامترهای قابل تنظیم.',
        'At-Risk بر اساس ضریب فاصله شخصی؛ Lost برای عدم فعالیت طولانی.',
        'خروجی سگمنت‌ها به کمپین، تحلیل و export متصل است.',
      ],
      buttons: [{ label: 'مشاهده Client 360°', href: '/marketing/clients-360' }],
    },
  ],
  lists: [
    {
      overline: 'تحلیل سازمانی',
      title: 'خلاصه‌ای از مجموعه تحلیل',
      intro: 'فیلتر بازه زمانی، منطقه زمانی و گروه‌بندی روز/هفته/ماه برای داشبوردهای همیشه به‌روز.',
      items: [
        {
          icon: 'analytics',
          label: 'KPI',
          title: 'شاخص‌های اصلی',
          body: 'تعداد نوبت، لغو، no-show، مشتری فعال، فاصله رزرو، میانگین سبد، درآمد ناخالص/خالص، انعام و بازگشت وجه.',
        },
        {
          icon: 'timeline',
          label: 'روند',
          title: 'ترکیب و روندها',
          body: 'ترکیب روز/ساعت، صدک ارزش طول عمر، روند رزرو و درآمد، بهره‌وری ارائه‌دهنده و خدمات برتر.',
        },
        {
          icon: 'insights',
          label: 'نگهداشت',
          title: 'پایداری و بازگشت مشتری',
          body: 'نرخ حضور، rebook 30/60/90، فاصله بازرزرو، پنجره لغو، پایداری برنامه، بازگشت وجه و موفقیت card-on-file.',
        },
      ],
    },
  ],
  highlights: [
    {
      overline: 'هوش مشتری',
      title: 'Client 360° با بینش رفتاری',
      content: 'بر اساس واحد/کارمند فیلتر کنید، با نام/ایمیل/تلفن جست‌وجو کنید و نمای 360 شامل رفتار رزرو، پیام‌ها و KPI مشتری را ببینید.',
      actions: [{ label: 'باز کردن Client 360°', href: '/marketing/clients-360', variant: 'outlined' }],
    },
    {
      overline: 'خروجی‌ها',
      title: 'CSV مشتریان را در چند ثانیه بگیرید',
      content: 'لیست مشتریان را با فیلترهای seen in last N days، min visits، require email و limit خروجی بگیرید.',
      actions: [{ label: 'مشاهده جریان خروجی', href: '/marketing/clients-360#exports', variant: 'contained' }],
    },
  ],
  faqHeading: 'سوالات متداول',
  faqTitle: 'پرسش‌های بازاریابی و تحلیل',
  faqIntro: 'پاسخ‌ها بر اساس قابلیت‌های فعال فعلی در Schedulaa.',
  faq: [
    {
      question: 'آیا می‌توانم تعداد گیرندگان کمپین را محدود کنم؟',
      answer: 'بله. هر کمپین فیلد Limit دارد و با dry-run می‌توانید لیست را قبل از ارسال بررسی کنید.',
    },
    {
      question: 'سگمنت‌های چرخه عمر چطور به‌روزرسانی می‌شوند؟',
      answer: 'به‌صورت خودکار بر اساس تاریخچه رزرو. پارامترهایی مثل درصد VIP یا ضریب At-Risk قابل تنظیم هستند.',
    },
    {
      question: 'آیا خروجی داده‌های تحلیل وجود دارد؟',
      answer: 'بله. مجموعه Advanced Analytics خروجی CSV دارد و cohortهای مشتری هم جداگانه export می‌شوند.',
    },
  ],
  cta: marketingCta,
  secondaryLinks: marketingSecondaryLinks,
};

export const marketingPages = {
  ...marketingPagesEn,
  hub,
};
