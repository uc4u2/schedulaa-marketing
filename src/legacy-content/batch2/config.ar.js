export const workforcePage = {
  meta: {
    title: 'مركز قيادة القوى العاملة | تتبع الوقت والجدولة والرواتب',
    description:
      'Close the loop with Schedulaa’s workforce command center—clock-in/out policies, approvals, availability, and payroll-ready exports in one dashboard.',
  },
  hero: {
    badge: 'القوى العاملة',
    title: 'مركز موحد لادارة القوى العاملة',
    subtitle:
      'Schedulaa already unified online scheduling, payroll, and website pages. Now we’ve closed the loop on time tracking so hours, templates, policy audits, and payroll-ready approvals live in one dashboard—with IP/device hints captured automatically for every punch.',
    image: '/images/marketing/showcase/time-tracking.png',
    imageAlt: 'Schedulaa time tracking workspace',
    images: [
      { src: '/images/marketing/payroll-manage.png', alt: 'Payroll management' },
      { src: '/images/marketing/shift-pre.png', alt: 'Shift management' },
      { src: '/images/marketing/showcase/t4.png', alt: 'T4 generation' },
      { src: '/images/marketing/showcase/w2-4d.png', alt: 'W-2 generation' },
    ],
    primaryCta: { label: 'ابدأ مجانا', href: '/register' },
    secondaryCta: { label: 'اطلب جولة توضيحية', href: '/contact' },
  },
  sections: [
    {
      title: 'تسجيل وقت فوري مع تطبيق السياسات',
      points: [
        'Employees clock in/out from the streamlined My Time workspace with a live timer that subtracts break minutes, shows hours worked, and visualizes the shift timeline.',
        'Break controls respect company policy—managers define default windows inside shift templates and the employee UI enforces them for payroll, flagging missed or overdue breaks instantly.',
        'Personal weekly insights (for example “32h worked • 2h overtime • 3 breaks taken”) keep the process transparent.',
      ],
    },
    {
      title: 'اشراف بمستوى اداري',
      points: [
        'Every time entry flows into the approvals page where supervisors filter by department, employee, or status before approving or rejecting—even mid-shift if something looks off.',
        'IP/device hints expose unusual punch locations while compliance chips surface shifts missing breaks or trending toward overtime.',
        'Need to correct multiple entries? Apply a break or shift template across selected rows and update everything at once.',
      ],
    },
    {
      title: 'قوالب ورديات مع امتثال مدمج',
      points: [
        'Templates capture break start/end times, duration, paid/unpaid flags, and availability links.',
        'Applying a template pushes those rules into every shift assignment and the employee clock UI automatically—no manual edits.',
        'Force clock-out and annotate overdue shifts so approvals stay clean for payroll.',
      ],
    },
    {
      title: 'تصدير جاهز للرواتب',
      points: [
        'Approved entries carry metadata for both supervisors and payroll teams (who approved, when, policy references, and punch location hints).',
        'Exports stay clean, audits stay simple, and payroll files ingest directly into accounting.',
      ],
    },
  ],
  cta: {
    overline: 'القوى العاملة + payroll together',
    title:
      'الحجوزات والجدولة والرواتب والمواقع وتتبع الوقت وفق السياسات في نفس المنصة.',
    body: 'No spreadsheets, no copy/paste, and no compliance surprises.',
    primary: { label: 'عرض مساحة تتبع الوقت', href: '/register' },
    secondary: { label: 'تحدث مع المبيعات', href: '/contact' },
  },
};

export const industriesPage = {
  meta: {
    title: 'دليل القطاعات | Schedulaa booking sites by industry',
    description:
      'Browse Schedulaa-powered workflows by industry. Discover salons, clinics, fitness studios, legal services, and more using unified scheduling, payroll, and commerce.',
  },
  hero: {
    badge: 'Industries',
    title: 'تصفح حسب القطاع',
    subtitle:
      'Pick an industry to see how businesses use Schedulaa for booking, payroll, workforce operations, websites, and commerce.',
    primaryCta: { label: 'استكشف الحجوزات', href: '/booking' },
    secondaryCta: { label: 'تواصل مع الفريق', href: '/contact' },
  },
  sections: [
    {
      title: 'قطاعات شائعة',
      items: [
        { title: 'Salons & spas', body: 'Real-time stylist booking, tips, and retention campaigns.' },
        { title: 'Healthcare clinics', body: 'Scheduling, reminders, and documentation-aware workflows.' },
        { title: 'Tutors & educators', body: 'Session booking, recurring schedules, and attendance trails.' },
        { title: 'Creative studios', body: 'Client journey automation from booking to payroll.' },
        { title: 'Legal & professional services', body: 'Structured intake, scheduling, and secure records.' },
        { title: 'Multi-location teams', body: 'Branch-aware controls for staffing, payroll, and analytics.' },
      ],
    },
  ],
};

export const statusPage = {
  meta: {
    title: 'Schedulaa الحالة | System Availability',
    description: 'Real-time system status for Schedulaa booking, payroll, HR, websites, and integrations.',
  },
  hero: {
    badge: 'الحالة',
    title: 'جميع الانظمة تعمل',
    subtitle:
      'Monitor platform health, incident history, and upcoming maintenance across booking, payroll, websites, and integrations.',
    primaryCta: { label: 'اشترك في التنبيهات', href: 'mailto:status@schedulaa.com' },
    secondaryCta: { label: 'RSS feed', href: 'https://status.schedulaa.com/rss' },
  },
  sections: [
    {
      title: 'Service availability',
      items: [
        { title: 'Schedulaa Dashboard & Login', body: 'يعمل' },
        { title: 'واجهة برمجة الحجوزات والمواعيد', body: 'يعمل' },
        { title: 'Stripe Payments & Checkout', body: 'يعمل' },
        { title: 'الرواتب والامتثال (الولايات المتحدة وكندا)', body: 'يعمل' },
        { title: 'منشئ المواقع / الاستضافة', body: 'يعمل' },
        { title: 'الاشعارات ورسائل التسويق', body: 'يعمل' },
      ],
    },
    {
      title: 'مثال حادث حديث',
      points: [
        'October 10, 2025: Temporary slowdown in appointment booking API due to a caching layer misconfiguration.',
        'Impact: 4% of requests experienced increased latency for roughly 18 minutes.',
        'Resolution: Reverted update and redeployed stable cache instance.',
      ],
    },
    {
      title: 'ملخص التوافر',
      points: ['Last 24 hours: 100%', 'Last 7 days: 99.97%', 'Last 30 days: 99.99%', 'Last 90 days: 99.98%'],
    },
  ],
};

export const roadmapPage = {
  hero: {
    badge: 'خارطة الطريق',
    title: 'طلبات خارطة طريق المنتج',
    subtitle:
      'Share roadmap requests with our team at admin@schedulaa.com. We review customer feedback continuously and publish updates in release notes.',
    primaryCta: { label: 'ارسل طلب خارطة الطريق بالبريد', href: 'mailto:admin@schedulaa.com' },
    secondaryCta: { label: 'عرض الحالة', href: '/status' },
  },
};

export const demoPage = {
  meta: {
    title: 'Schedulaa Demo Login | Test the Manager Dashboard',
    description:
      'Use the shared manager credentials to explore scheduling, payroll, compliance, automation, and integrations to Zapier, QuickBooks, and Xero.',
  },
  hero: {
    badge: 'عرض تجريبي / تجربة',
    title: 'Experience the Schedulaa manager dashboard in minutes',
    subtitle:
      'Use the shared staging login to explore scheduling, time tracking, payroll, compliance, اتمتة Zapiers, and accounting exports end-to-end.',
    primaryCta: { label: 'الانتقال الى تسجيل الدخول', href: '/login' },
    secondaryCta: { label: 'تحدث مع فريق الاطلاق', href: '/contact' },
  },
  sections: [
    {
      title: 'بيانات دخول تجريبية',
      points: ['Email: testschedulaa@gmail.com', 'Password: Test!12345', 'OTP code: 0000', 'Environment: Staging'],
    },
    {
      title: 'بدء سريع من 3 خطوات',
      points: [
        '1. Login at /login with the demo email + password.',
        '2. Use OTP code 0000.',
        '3. Explore Scheduling, Payroll, Websites, and Analytics.',
      ],
    },
  ],
};

export const contactPage = {
  meta: {
    title: 'اتصال Schedulaa',
    description: 'Talk to the Schedulaa team about custom rollouts, partnerships, or migration support.',
  },
  hero: {
    badge: 'اتصال',
    title: "دعنا نتحدث عن اطلاقك.",
    subtitle:
      'Looking for a custom implementation, partner program, or migration help? Our specialists respond within one business day.',
    primaryCta: { label: 'راسلنا', href: 'mailto:admin@schedulaa.com' },
    secondaryCta: { label: 'Call +1 (415) 555-0198', href: 'tel:+14155550198' },
  },
  sections: [
    {
      title: 'كيف نساعد',
      items: [
        { title: 'Sales & demos', body: 'Plan walkthroughs, pricing guidance, and migration timelines tailored to your team.' },
        { title: 'Partnerships', body: 'Reseller, integration, and co-marketing opportunities for platforms serving creatives.' },
        { title: 'Support', body: '24-hour ticket response, enterprise onboarding, and dedicated success managers on Pro.' },
        { title: 'Migration support', body: 'Data imports, template mapping, and sandbox reviews that de-risk your launch.' },
      ],
    },
  ],
  faqTitle: 'الاسئلة الشائعة للتواصل',
  faq: [
    {
      question: 'ما مدى سرعة الرد؟',
      answer: 'Enterprise rollout specialists respond within one business day for scheduling, payroll, and migration requests.',
    },
    {
      question: 'Do you offer implementation services?',
      answer: 'Yes. Our team handles data imports, template mapping, staff onboarding, and payroll validation for every location.',
    },
    {
      question: 'كيف يتواصل الشركاء او الموزعون معكم؟',
      answer: 'Email admin@schedulaa.com and we will route your note to our partnership, integration, or reseller teams.',
    },
  ],
};

export const supportPage = {
  hero: {
    badge: 'مركز المساعدة',
    title: 'دعم للعملاء والفرق',
    subtitle:
      'Get help with account setup, booking, payroll, workflows, اتمتة Zapier, and accounting integrations. Our team responds quickly and can route technical issues to specialists.',
    primaryCta: { label: 'اتصال support', href: 'mailto:admin@schedulaa.com' },
    secondaryCta: { label: 'افتح الوثائق', href: '/docs' },
  },
  sections: [
    {
      title: 'مواضيع الدعم',
      points: [
        'Account, access, and onboarding',
        'عمليات الحجوزات والجدولة',
        'Payroll preview/finalize and export questions',
        'Website builder and domain setup',
        'Zapier, QuickBooks, and Xero setup',
      ],
    },
  ],
};

export const zapierPage = {
  meta: {
    title: 'Zapier for Schedulaa — automate bookings, scheduling, break compliance, and payroll',
    description:
      'Connect Schedulaa to 6,000+ apps with Zapier. Stream bookings, shifts, timeclock, break compliance, PTO, onboarding, and payroll data.',
  },
  hero: {
    badge: 'اتمتة Zapier',
    title: 'Automate every booking, shift, break, and payroll moment with Zapier',
    subtitle:
      'Schedulaa streams bookings, scheduling, timeclock, break compliance, PTO, onboarding, and payroll detail into Zapier while actions can create bookings, employees, and shifts inside Schedulaa.',
    primaryCta: { label: 'افتح اعدادات Zapier', href: '/settings/zapier' },
    secondaryCta: { label: 'عرض التجربة', href: '/demo' },
  },
  sections: [
    {
      title: 'مجموعات مشغلات مباشرة',
      items: [
        { title: 'احداث الحجوزات', body: 'booking.created, booking.updated, booking.cancelled, booking.no_show, public_booking.created' },
        { title: 'Scheduling & shifts', body: 'shift.published, shift.updated, swap.requested, swap.approved, swap.rejected' },
        { title: 'Timeclock & break compliance', body: 'timeclock.clock_in, timeclock.clock_out, break.started, break.ended, break.missed' },
        { title: 'Leave, onboarding, documents', body: 'leave.requested, leave.approved, leave.denied, onboarding.started, onboarding.document_signed' },
        { title: 'Payroll events', body: 'payroll.ready, payroll.finalized, payroll.details' },
      ],
    },
    {
      title: 'Live actions',
      points: ['create_booking', 'create_employee', 'create_shift / update_shift', 'attach_document'],
    },
  ],
};
