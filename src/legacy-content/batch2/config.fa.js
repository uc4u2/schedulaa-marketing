import {
  workforcePage as workforcePageEn,
  industriesPage as industriesPageEn,
  statusPage,
  roadmapPage,
  demoPage,
  contactPage as contactPageEn,
  supportPage,
  zapierPage as zapierPageEn,
} from './config';

export const workforcePage = {
  ...workforcePageEn,
  meta: {
    ...workforcePageEn.meta,
    title: 'زمان‌بندی کارکنان و مدیریت شیفت برای کسب‌وکارهای خدماتی | Schedulaa',
    description:
      'زمان‌بندی کارکنان، تایید شیفت‌ها، دسترسی، پوشش کاری، ریسک اضافه‌کاری و ساعات تاییدشده را در یک داشبورد نیروی کار مدیریت کنید.',
  },
  hero: {
    ...workforcePageEn.hero,
    badge: 'نیروی کار',
    title: 'زمان‌بندی کارکنان و مدیریت شیفت برای کسب‌وکارهای خدماتی',
    subtitle:
      'دسترسی کارکنان، جابه‌جایی شیفت، تاییدها، پوشش کاری و ریسک اضافه‌کاری را از یک داشبورد نیروی کار مدیریت کنید تا عملیات روزانه بدون فایل‌های پراکنده و تقویم‌های جداگانه پیش برود.',
    imageAlt: 'محیط ثبت زمان Schedulaa',
    images: [
      { ...workforcePageEn.hero.images[0], alt: 'داشبورد نیروی کار' },
      { ...workforcePageEn.hero.images[1], alt: 'مدیریت شیفت' },
      { ...workforcePageEn.hero.images[2], alt: 'تولید T4' },
      { ...workforcePageEn.hero.images[3], alt: 'تولید W-2' },
    ],
    primaryCta: { ...workforcePageEn.hero.primaryCta, label: 'شروع رایگان' },
    secondaryCta: { ...workforcePageEn.hero.secondaryCta, label: 'درخواست دمو' },
  },
  sections: [
    {
      title: 'ثبت زمان لحظه‌ای با اجرای سیاست‌ها',
      points: [
        'کارکنان از فضای ساده My Time ورود/خروج می‌زنند و تایمر زنده، زمان استراحت را کم می‌کند و تایم‌لاین شیفت را نشان می‌دهد.',
        'کنترل استراحت مطابق سیاست شرکت اجرا می‌شود و موارد جاافتاده یا دیرهنگام فوری علامت‌گذاری می‌گردد.',
        'نمای هفتگی شخصی (مثل 32h کار، 2h اضافه‌کار، 3 استراحت) فرآیند را شفاف نگه می‌دارد.',
      ],
    },
    {
      title: 'نظارت در سطح مدیر',
      points: [
        'تمام رکوردهای زمان وارد صفحه تایید می‌شوند و سرپرست می‌تواند بر اساس واحد، کارمند یا وضعیت فیلتر کند.',
        'نشانه‌های IP/دستگاه نقاط غیرعادی را مشخص می‌کنند و هشدارهای انطباق شیفت‌های دارای ریسک را نشان می‌دهند.',
        'برای اصلاح گروهی، قالب استراحت یا شیفت را روی چند ردیف اعمال کنید و یکجا به‌روزرسانی بگیرید.',
      ],
    },
    {
      title: 'قالب‌های شیفت با انطباق داخلی',
      points: [
        'قالب‌ها زمان شروع/پایان استراحت، مدت، پرداختی/غیرپرداختی و قوانین دسترسی را ثبت می‌کنند.',
        'با اعمال قالب، همان قوانین خودکار به برنامه شیفت و رابط کارمند منتقل می‌شود.',
        'خروج اجباری و یادداشت شیفت‌های معوق، کیفیت تایید برای حقوق را بالا نگه می‌دارد.',
      ],
    },
    {
      title: 'ساعات تاییدشده آماده تحویل',
      points: [
        'رکوردهای تاییدشده متادیتای کامل برای سرپرست و تیم حقوق دارند (چه کسی تایید کرد، چه زمانی، ارجاع سیاست، نشانه‌های مکان).',
        'خروجی‌ها تمیز می‌مانند، ممیزی ساده می‌شود و فایل‌های حقوق مستقیم وارد حسابداری می‌شوند.',
      ],
    },
  ],
  cta: {
    ...workforcePageEn.cta,
    overline: 'عملیات نیروی کار',
    title: 'رزرو، زمان‌بندی، ساعات تاییدشده و دید کامل نیروی کار در یک پلتفرم.',
    body: 'بدون فایل دستی، بدون کپی/پیست و بدون زمان‌بندی جدا از عملیات روزانه.',
    primary: { ...workforcePageEn.cta.primary, label: 'مشاهده محیط ثبت زمان' },
    secondary: { ...workforcePageEn.cta.secondary, label: 'گفتگو با فروش' },
  },
};

export const industriesPage = {
  ...industriesPageEn,
  meta: {
    ...industriesPageEn.meta,
    title: 'دایرکتوری صنایع | نمونه وب‌سایت‌های Schedulaa بر اساس حوزه',
    description:
      'نمونه جریان‌های کاری Schedulaa را بر اساس صنعت ببینید: سالن‌ها، کلینیک‌ها، استودیوهای ورزشی، خدمات حقوقی و موارد بیشتر با رزرو مشتری، عملیات مشتری، فاکتور، پرداخت، وب‌سایت و تجارت یکپارچه.',
  },
  hero: {
    ...industriesPageEn.hero,
    badge: 'صنایع',
    title: 'مرور بر اساس صنعت',
    subtitle:
      'صنعت خود را انتخاب کنید تا ببینید کسب‌وکارها چگونه از Schedulaa برای رزرو مشتری، سوابق قرارها، عملیات مشتری، زمان‌بندی کارکنان، وب‌سایت، فاکتور، پرداخت و فروش استفاده می‌کنند.',
    primaryCta: { ...industriesPageEn.hero.primaryCta, label: 'مشاهده رزرو' },
    secondaryCta: { ...industriesPageEn.hero.secondaryCta, label: 'تماس با تیم' },
  },
  sections: [
    {
      title: 'حوزه‌های محبوب',
      items: [
        { title: 'سالن‌ها و اسپاها', body: 'رزرو لحظه‌ای آرایشگر، مدیریت انعام و کمپین‌های وفاداری.' },
        { title: 'کلینیک‌های سلامت', body: 'زمان‌بندی، یادآوری و جریان‌های کاری سازگار با مستندات.' },
        { title: 'مدرس‌ها و آموزش‌دهندگان', body: 'رزرو جلسه، برنامه‌های تکرارشونده و مسیر حضور.' },
        { title: 'استودیوهای خلاق', body: 'اتوماسیون مسیر مشتری از رزرو تا فاکتور و پرداخت.' },
        { title: 'خدمات حقوقی و حرفه‌ای', body: 'فرم‌پذیرش ساخت‌یافته، تاریخچه قرارها، زمان‌بندی و سوابق امن.' },
        { title: 'تیم‌های چندشعبه‌ای', body: 'کنترل‌های شعبه‌محور برای رزرو مشتری، نیرو، صورتحساب و تحلیل.' },
      ],
    },
  ],
};

export const contactPage = {
  ...contactPageEn,
  meta: {
    ...contactPageEn.meta,
    title: 'تماس با Schedulaa',
    description: 'با تیم Schedulaa درباره اجرا، همکاری یا پشتیبانی مهاجرت صحبت کنید.',
  },
  hero: {
    ...contactPageEn.hero,
    badge: 'تماس',
    title: 'بياييد درباره اجراي شما صحبت کنيم.',
    subtitle: 'برای اجرای سفارشی، برنامه همکاری یا پشتیبانی مهاجرت، متخصصان ما طی یک روز کاری پاسخ می‌دهند.',
    primaryCta: { ...contactPageEn.hero.primaryCta, label: 'ايميل به ما' },
    secondaryCta: { ...contactPageEn.hero.secondaryCta, label: 'تماس با تيم', href: '/contact' },
  },
};

export const zapierPage = {
  ...zapierPageEn,
  meta: {
    ...zapierPageEn.meta,
    title: 'Zapier برای Schedulaa — اتوماسیون رزرو مشتری، زمان‌بندی، صورتحساب و تحویل‌های بک‌آفیس',
    description:
      'Schedulaa را با Zapier به بیش از ۶۰۰۰ اپ متصل کنید. رویدادهای رزرو مشتری، شیفت، timeclock، تحویل فاکتور و پرداخت، PTO، onboarding و رخدادهای بک‌آفیس را ارسال کنید.',
  },
  hero: {
    ...zapierPageEn.hero,
    badge: 'اتوماسیون Zapier',
    title: 'رزرو مشتری، زمان‌بندی کارکنان، تحویل‌های صورتحساب و عملیات روزانه را با Zapier خودکار کنید',
    subtitle:
      'Schedulaa رویدادهای رزرو مشتری، زمان‌بندی کارکنان، timeclock، onboarding و رخدادهای تحویل بک‌آفیس را به Zapier می‌فرستد و اکشن‌ها می‌توانند رزرو، کارمند و شیفت بسازند.',
    primaryCta: { ...zapierPageEn.hero.primaryCta, label: 'باز کردن تنظیمات Zapier' },
    secondaryCta: { ...zapierPageEn.hero.secondaryCta, label: 'مشاهده دمو' },
  },
  sections: [
    {
      title: 'گروه تریگرهای زنده',
      items: [
        { title: 'رویدادهای رزرو مشتری', body: 'booking.created, booking.updated, booking.cancelled, booking.no_show, public_booking.created' },
        { title: 'زمان بندی و شیفت ها', body: 'shift.published, shift.updated, swap.requested, swap.approved, swap.rejected' },
        { title: 'timeclock و کنترل استراحت', body: 'timeclock.clock_in, timeclock.clock_out, break.started, break.ended, break.missed' },
        { title: 'مرخصی، onboarding و اسناد', body: 'leave.requested, leave.approved, leave.denied, onboarding.started, onboarding.document_signed' },
        { title: 'رویدادهای تحویل بک‌آفیس', body: 'payroll.ready, payroll.finalized, payroll.details' },
      ],
    },
    {
      title: 'اکشن های زنده',
      points: ['create_booking', 'create_employee', 'create_shift / update_shift', 'attach_document'],
    },
  ],
};

export { statusPage, roadmapPage, demoPage, supportPage };
