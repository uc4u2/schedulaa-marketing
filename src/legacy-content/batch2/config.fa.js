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
    title: 'مرکز فرماندهی نیروی کار | ثبت زمان، زمان‌بندی و حقوق',
    description:
      'چرخه عملیات را با مرکز نیروی کار Schedulaa کامل کنید: قوانین ورود/خروج، تاییدها، دسترسی‌ها و خروجی‌های آماده حقوق در یک داشبورد.',
  },
  hero: {
    ...workforcePageEn.hero,
    badge: 'نیروی کار',
    title: 'مرکز یکپارچه مدیریت نیروی کار',
    subtitle:
      'Schedulaa قبلا زمان‌بندی، حقوق و صفحات وب‌سایت را یکپارچه کرده است. حالا مدیریت ثبت زمان هم کامل شده تا ساعات، قالب‌ها، ممیزی سیاست‌ها و تاییدهای آماده حقوق در یک داشبورد باشند.',
    imageAlt: 'محیط ثبت زمان Schedulaa',
    images: [
      { ...workforcePageEn.hero.images[0], alt: 'مدیریت حقوق' },
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
      title: 'خروجی‌های آماده حقوق',
      points: [
        'رکوردهای تاییدشده متادیتای کامل برای سرپرست و تیم حقوق دارند (چه کسی تایید کرد، چه زمانی، ارجاع سیاست، نشانه‌های مکان).',
        'خروجی‌ها تمیز می‌مانند، ممیزی ساده می‌شود و فایل‌های حقوق مستقیم وارد حسابداری می‌شوند.',
      ],
    },
  ],
  cta: {
    ...workforcePageEn.cta,
    overline: 'نیروی کار + حقوق در کنار هم',
    title: 'رزرو، زمان‌بندی، حقوق، وب‌سایت و ثبت زمان مبتنی بر سیاست در یک پلتفرم.',
    body: 'بدون فایل دستی، بدون کپی/پیست، بدون غافلگیری انطباق.',
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
      'نمونه جریان‌های کاری Schedulaa را بر اساس صنعت ببینید: سالن‌ها، کلینیک‌ها، استودیوهای ورزشی، خدمات حقوقی و موارد بیشتر با زمان‌بندی، حقوق و تجارت یکپارچه.',
  },
  hero: {
    ...industriesPageEn.hero,
    badge: 'صنایع',
    title: 'مرور بر اساس صنعت',
    subtitle:
      'صنعت خود را انتخاب کنید تا ببینید کسب‌وکارها چگونه از Schedulaa برای رزرو، حقوق، عملیات نیروی کار، وب‌سایت و فروش استفاده می‌کنند.',
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
        { title: 'استودیوهای خلاق', body: 'اتوماسیون مسیر مشتری از رزرو تا حقوق.' },
        { title: 'خدمات حقوقی و حرفه‌ای', body: 'فرم‌پذیرش ساخت‌یافته، زمان‌بندی و سوابق امن.' },
        { title: 'تیم‌های چندشعبه‌ای', body: 'کنترل‌های شعبه‌محور برای نیرو، حقوق و تحلیل.' },
      ],
    },
  ],
};

export const zapierPage = {
  ...zapierPageEn,
  meta: {
    ...zapierPageEn.meta,
    title: 'Zapier برای Schedulaa — اتوماسیون رزرو، زمان بندی، انطباق استراحت و حقوق',
    description:
      'Schedulaa را با Zapier به بیش از ۶۰۰۰ اپ متصل کنید. داده های رزرو، شیفت، timeclock، استراحت، PTO، onboarding و حقوق را ارسال کنید.',
  },
  hero: {
    ...zapierPageEn.hero,
    badge: 'اتوماسیون Zapier',
    title: 'هر لحظه رزرو، شیفت، استراحت و حقوق را با Zapier خودکار کنید',
    subtitle:
      'Schedulaa رویدادهای رزرو، زمان بندی، timeclock، انطباق استراحت، PTO، onboarding و جزئیات حقوق را به Zapier می فرستد و اکشن ها می توانند رزرو، کارمند و شیفت بسازند.',
    primaryCta: { ...zapierPageEn.hero.primaryCta, label: 'باز کردن تنظیمات Zapier' },
    secondaryCta: { ...zapierPageEn.hero.secondaryCta, label: 'مشاهده دمو' },
  },
  sections: [
    {
      title: 'گروه تریگرهای زنده',
      items: [
        { title: 'رویدادهای رزرو', body: 'booking.created, booking.updated, booking.cancelled, booking.no_show, public_booking.created' },
        { title: 'زمان بندی و شیفت ها', body: 'shift.published, shift.updated, swap.requested, swap.approved, swap.rejected' },
        { title: 'timeclock و انطباق استراحت', body: 'timeclock.clock_in, timeclock.clock_out, break.started, break.ended, break.missed' },
        { title: 'مرخصی، onboarding و اسناد', body: 'leave.requested, leave.approved, leave.denied, onboarding.started, onboarding.document_signed' },
        { title: 'رویدادهای حقوق', body: 'payroll.ready, payroll.finalized, payroll.details' },
      ],
    },
    {
      title: 'اکشن های زنده',
      points: ['create_booking', 'create_employee', 'create_shift / update_shift', 'attach_document'],
    },
  ],
};

export { industriesPage, statusPage, roadmapPage, demoPage, contactPage, supportPage, zapierPage };
