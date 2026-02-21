const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";
const CONTACT_URL = "/contact";

const sharedCta = {
  overline: "الرواتب + HR in one hub",
  title: "تشغيل الرواتب, issue slips, and publish portals in minutes",
  body: "Schedulaa unifies الرواتب calculations, compliance تصدير, and الموظف خدمة ذاتية tools so finance and operations can work from the same dashboard.",
  primary: { label: "ابدأ مجانا", href: REGISTER_URL },
  secondary: { label: "تحدث معنا", href: CONTACT_URL },
};

const sharedSecondaryLinks = [
  { label: "Canada الرواتب", href: "/payroll/canada" },
  { label: "USA الرواتب", href: "/payroll/usa" },
  { label: "ROE مولد", href: "/payroll/tools/roe" },
  { label: "T4 مولد", href: "/payroll/tools/t4" },
  { label: "W-2 مولد", href: "/payroll/tools/w2" },
  { label: "Employee payslips", href: "/payslips" },
];

const buildBreadcrumbList = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.href,
  })),
});

const payrollBreadcrumb = (name, href) =>
  buildBreadcrumbList([
    { name: "Home", href: BASE_URL },
    { name: "الرواتب", href: `${BASE_URL}/payroll` },
    ...(name && href ? [{ name, href }] : []),
  ]);

const overviewConfig = {
  meta: {
    title: "الرواتب Software & Payslip Automation | Schedulaa",
    description:
      "Tie الجدولة data, اقليمي tax engines, and الموظف خدمة ذاتية portals into one الرواتب workspace. Support Canada, USA, and statement تصدير from day one.",
    canonical: `${BASE_URL}/payroll`,
    og: {
      title: "Unified الرواتب & الجدولة المنصة | Schedulaa",
      description:
        "تشغيل الرواتب for Canada and the USA, generate ROE/T4/W-2 files, and publish payslips through the الموظف بوابة.",
      image: `${BASE_URL}/images/payroll-overview.png`,
      url: `${BASE_URL}/payroll`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Schedulaa الرواتب Overview",
      description: "Preview deductions, اعتماد نهائي slips, and keep الموظفون informed across every region you الدعم.",
      image: `${BASE_URL}/images/payroll-overview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Schedulaa الرواتب",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: `${BASE_URL}/payroll`,
      description:
        "Schedulaa unifies الجدولة, HR, and الرواتب automation. Employees automatically use the correct Canadian or US compliance engine and can access payslips instantly.",
      provider: {
        "@type": "Organization",
        name: "Schedulaa",
        url: BASE_URL,
      },
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "USD",
      },
      areaServed: ["CA", "US"],
    },
    buildBreadcrumbList([
      { name: "Home", href: BASE_URL },
      { name: "الرواتب", href: `${BASE_URL}/payroll` },
    ]),
  ],
  hero: {
    badge: "الجدولة + الرواتب + docs",
    title: "الرواتب that stays in sync with operations",
    subtitle:
      "Pull real-time hours from الجدولة and time tracking, apply CRA or IRS logic, layer in tips, bonus, commission, shift premiums, union dues, garnishments, and non-taxable reimbursements, then ship payslips plus ROE/T4/W-2 without leaving Schedulaa. U.S. full اعتماد نهائي is currently available in AK, FL, NV, SD, TX, WA, WY, TN, and NH; other U.S. states run in raw معاينة mode.",
    image: "/images/marketing/payroll-manage.png",
    imageAlt: "Schedulaa الرواتب management معاينة",
    images: [
      { src: "/images/marketing/payroll-manage.png", alt: "الرواتب management" },
      { src: "/images/marketing/showcase/t4.png", alt: "T4 generation" },
      { src: "/images/marketing/showcase/roe.png", alt: "ROE workflow" },
      { src: "/images/marketing/showcase/w2-4d.png", alt: "W-2 generation" },
    ],
    bullets: [
      "Regional engines for Canada (CPP/EI/BPA, CPP/EI exemptions) and the USA (federal tax, FICA/Medicare, employer FUTA/SUTA reporting).",
      "Taxable extras like shift premium, tips, commission, bonus plus deductions like union dues and garnishments—net pay matches the معاينة.",
      "Unsupported U.S. states remain available for raw معاينة, with clear warnings and اعتماد نهائي blocked.",
      "ROE, T4 (with Box 40/44), W-2, and payslip تصدير backed by our public docs.",
      "Employee خدمة ذاتية بوابة plus automated اشعارات.",
    ],
    primaryCta: { label: "عرض مساحة الرواتب", href: REGISTER_URL },
    secondaryCta: { label: "اقرأ الوثائق", href: "/docs#payroll" },
    notice:
      "* U.S. full اعتماد نهائي: AK, FL, NV, SD, TX, WA, WY, TN, NH only. ** Other U.S. states are raw معاينة only (اعتماد نهائي blocked). *** Local/city taxes and special programs (for example WA PFML / WA Cares) remain external.",
  },
  ميزاتHeading: "المنصة",
  ميزاتTitle: "One place for calculations, slips, and الموظف updates",
  ميزاتIntro:
    "Content used here is pulled from our الميزات, Docs, and region-specific الرواتب pages so prospects see everything Google expects on /الرواتب.",
  ميزات: [
    {
      icon: "timeline",
      label: "سير العمل",
      title: "Ops-connected pay runs",
      description:
        "Import actual hours, overtime, and tips from the الجدولة suite before calculating deductions. The correct country engine applies automatically per الموظف. When a run moves to الرواتب.ready or الرواتب.finalized, Zapier events can notify finance, push تصدير, or trigger downstream workflows. Every خطوة is logged for finance and HR audits, including overwrite history when a period is re-finalized.",
      link: "/ميزات",
      linkLabel: "جولة المنصة",
    },
    {
      icon: "compliance",
      label: "الامتثال",
      title: "Canada & USA tax engines",
      description:
        "Employees automatically run on Canadian CPP/EI/BPA logic (with CPP/EI exemptions) or U.S. federal tax + FICA/Medicare logic based on work location. U.S. full اعتماد نهائي is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH; unsupported states remain available as raw معاينة with warnings. Both engines الدعم shift premium, tips, commission, bonus, union dues, garnishments, and non-taxable reimbursements.",
      link: "/payroll/canada",
      linkLabel: "عرض الحاسبات الاقليمية",
    },
    {
      icon: "retirement",
      label: "Enterprise Retirement (U.S. 401(k))",
      title: "401(k) deferrals, caps, and W-2 alignment",
      description:
        "Automatic 401(k) and Roth 401(k) calculations with annual caps, employer match حدود, and applicable wage bases. Post-finalization تصدير surface W-2 Box 12D codes so year-end filings align with what الرواتب produced.",
      link: "/payroll/usa",
      linkLabel: "Review U.S. الرواتب تغطية",
    },
    {
      icon: "document",
      label: "Documents",
      title: "ROE, T4, W-2, and payslips",
      description:
        "Finalize الرواتب, email slips, post them in the payslip بوابة, and export ROE/T4/W-2 files that align with CRA and IRS specs.",
      link: "/payslips",
      linkLabel: "فتح بوابة قسائم الراتب",
    },
  ],
  highlights: [
    {
      overline: "Coverage at a glance",
      title: "Engines for Canada (ex-Québec) and supported U.S. states",
      body:
        "Two اقليمي engines, one workspace. Employees automatically use the right CRA or IRS/FICA/state logic based on their work location—no duplicate setups.",
      points: [
        "CA: Federal & provincial tax, CPP/EI (with exemptions), vacation/stat holidays, T4 boxes 14/16/18/22/24/26/40/44, ROE.",
        "US: Federal income tax, FICA/Medicare, employer FUTA/SUTA reporting, and W-2 تصدير. Full اعتماد نهائي is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH.",
        "Local/city/municipal الرواتب taxes remain external where they apply.",
      ],
    },
    {
      overline: "Documented flows",
      title: "Guided الرواتب that mirrors our Docs",
      body:
        "Preview → adjust → اعتماد نهائي → publish exactly as shown in the public docs. No hidden خطوات—new المديرون can follow the same playbook used by finance.",
      points: [
        "Screenshots for every معاينة خطوة live in the docs.",
        "Direct links to ROE/T4/W-2 (incl. Box 40/44) guides for deeper review.",
        "Inline help inside the app keeps المديرون on the rails.",
      ],
    },
    {
      overline: "Employee experience",
      title: "Self-serve slips and اشعارات",
      body:
        "Branded بوابة + alerts: الموظفون download slips anytime; finance chooses email, SMS, or in-app اشعارات. Taxable vs non-taxable items are labeled clearly.",
      points: [
        "Branded بوابة inherits your site colors automatically.",
        "Scoped access per الموظف keeps data secure.",
        "Shortcuts to /الرواتب/tools for region-specific تصدير.",
      ],
    },
  ],
  stepsHeading: "كيف الرواتب runs inside Schedulaa",
  stepsTitle: "From schedule to finalized slips in four خطوات",
  stepsIntro: "Local and city الرواتب taxes are handled externally.",
  steps: [
    {
      title: "Import hours & review context",
      description:
        "Pull hours from الجدولة, sync bonuses, tips, commissions, or shift premium, and compare to historic pay runs before doing any math.",
    },
    {
      title: "Apply deductions with the right engine",
      description:
        "The correct country rules apply automatically by الموظف location. CRA or IRS logic, plus vacation pay, benefits, union dues, garnishments, and non-taxable reimbursements, are applied instantly.",
    },
    {
      title: "Finalize and export",
      description:
        "Generate payslips, CSV, or Excel summaries and push ROE/T4/W-2 files to the tools section for auditor review.",
    },
    {
      title: "Publish to the بوابة",
      description:
        "Notify الموظفون, post slips in the بوابة, and keep everything searchable for future audits.",
    },
    {
      title: "Spot-check for year-end readiness",
      description:
        "Confirm union dues, taxable benefits, and exemptions are reflected correctly so T4/W-2 totals align with what finance expects at year-end.",
    },
    {
      title: "Share with finance & ops",
      description:
        "Hand off clean تصدير to accounting or BI, with the same gross, deduction, and net figures your المديرون saw in معاينة.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Coverage & حدود",
      title: "Current U.S. الدعم boundaries",
      body:
        "Full U.S. اعتماد نهائي is currently supported only in AK, FL, NV, SD, TX, WA, WY, TN, and NH. Other U.S. states are available in raw معاينة mode with warnings and اعتماد نهائي blocked. Employer FUTA/SUTA is reported separately and does not reduce الموظف net pay.",
      points: [
        "* Full اعتماد نهائي states: AK, FL, NV, SD, TX, WA, WY, TN, NH",
        "** Unsupported states: معاينة-only raw mode",
        "*** Local/city taxes + WA PFML/WA Cares: external handling",
      ],
    },
    {
      icon: "analytics",
      label: "Insights",
      title: "Finance and HR see the same truth",
      body:
        "الرواتب history, deduction logic, and document تصدير are visible in analytics dashboards so leadership sees trends without another BI tool.",
      links: [
        { label: "فتح جولة التحليلات", href: "/marketing/analytics-dashboard" },
        { label: "اقرأ ادلة الرواتب", href: "/docs#payroll" },
      ],
    },
    {
      icon: "schedule",
      label: "الرواتب-ready time data",
      title: "Hours arrive with breaks, overtime, and audits attached",
      body:
        "Approved time entries land with unpaid breaks deducted, overtime and missed-break markers attached, and IP/UA metadata for audits. Finance تصدير CSV/PDF or syncs to accounting without spreadsheets.",
      points: [
        "Forced clock-out and bulk break template fixes are fully audited.",
        "OT/missed-break flags travel with each pay period.",
        "Safe بوابة links keep الموظفون on the right local domain.",
      ],
    },
  ],
  faqHeading: "الاسئلة الشائعة",
  faqTitle: "الرواتب نظرة عامة الاسئلة",
  faq: [
    {
      question: "Do you الدعم all U.S. states for اعتماد نهائي?",
      answer:
        "Not yet. Full اعتماد نهائي is currently supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH. Other U.S. states remain available as raw معاينة with اعتماد نهائي blocked.",
    },
    {
      question: "Is /الرواتب different from the Canada or USA pages?",
      answer:
        "The نظرة عامة introduces everything on one page for crawlers and prospects. It links directly to the Canada and USA calculators plus ROE/T4/W-2 tools for deeper regulation details.",
    },
    {
      question: "Does Google get blocked from الرواتب content?",
      answer:
        "No. robots.txt now allows /الرواتب and the sitemap lists every اقليمي URL so crawlers reach them through HTML links.",
    },
    {
      question: "Do I need separate logins for the payslip بوابة?",
      answer:
        "Employees reuse their Schedulaa credentials. Access is gated by role, and المديرون can revoke permissions at any time.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: [
    { label: "Docs: الرواتب معاينة", href: "/docs#payroll" },
    { label: "مقارنة: Schedulaa مقابل Gusto", href: "/compare/gusto" },
    { label: "مقارنة: Schedulaa مقابل ADP", href: "/compare/adp" },
    ...sharedSecondaryLinks,
  ],
  nextSteps: {
    overline: "الخطوات التالية",
    title: "Choose where to go next",
    description: "Keep exploring الرواتب—from pricing to calculators and customer-facing documentation.",
    links: [
      {
        label: "قارن خطط الاسعار",
        description: "شاهد كيف الرواتب, الجدولة, and marketing ميزات line up.",
        href: "/pricing",
        cta: "عرض الاسعار",
      },
      {
        label: "ابدأ دورة رواتب كندية",
        description: "Review CPP, EI, and provincial تغطية in detail.",
        href: "/payroll/canada",
        cta: "Canada الرواتب",
      },
      {
        label: "افتح الوثائق",
        description: "Follow the الرواتب معاينة flow خطوة by خطوة in the documentation.",
        href: "/docs#payroll",
        cta: "اقرأ الوثائق",
      },
      {
        label: "تنزيل قوالب ROE/T4/W-2",
        description: "Jump straight into the الرواتب tools and final form تصدير.",
        href: "/payroll/tools/t4",
        cta: "عرض الادوات",
      },
    ],
  },
};

const canadaConfig = {
  meta: {
    title: "Canada الرواتب Calculator & Software (CPP, EI, BPA) | Schedulaa",
    description:
      "Run Canadian الرواتب with CPP, EI, federal and provincial tax, vacation pay, bonuses, tips, and employer matches. Finalize payslips as PDF, CSV, or Excel and email الموظفون automatically.",
    canonical: `${BASE_URL}/payroll/canada`,
    og: {
      title: "Canada الرواتب Calculator for Small Businesses | Schedulaa",
      description:
        "Preview and اعتماد نهائي Canadian الرواتب with CPP, EI, provincial tax, bonuses, and tips. Export payslips, email staff, and provide a خدمة ذاتية بوابة.",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
      url: `${BASE_URL}/payroll/canada`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Canada الرواتب Calculator for Small Businesses | Schedulaa",
      description:
        "Automate Canadian الرواتب with CPP, EI, provincial tax, vacation pay, and الموظف portals in one platform.",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Schedulaa Canada الرواتب",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "CAD",
      },
      featureList: [
        "CPP and EI calculations",
        "Federal and provincial income tax deductions",
        "Vacation pay automation",
        "Bonuses, tips, and commissions الدعم",
        "Payslip PDF, CSV, and Excel export",
        "Employee self-service payslip بوابة",
      ],
      url: `${BASE_URL}/payroll/canada`,
      provider: {
        "@type": "Organization",
        name: "Schedulaa",
        url: BASE_URL,
      },
    },
    payrollBreadcrumb("Canada الرواتب", `${BASE_URL}/payroll/canada`),
  ],
  hero: {
    badge: "CPP, EI, BPA tracking",
    title: "Canada الرواتب Calculator for Small Businesses",
    subtitle:
      "Calculate gross-to-net with CPP, EI, federal and provincial tax, vacation pay, bonuses, tips, and employer matches in one dashboard.",
    bullets: [
      "Preview deductions line by line before finalizing الرواتب.",
      "Automate BPA pro-rating, CPP/EI ceilings, and YTD breakouts.",
      "Export payslips as PDF, CSV, or Excel and email الموظفون instantly.",
    ],
    primaryCta: { label: "Run Canadian الرواتب", href: REGISTER_URL },
    secondaryCta: { label: "Book a walkthrough", href: CONTACT_URL },
  },
  ميزاتHeading: "الميزات",
  ميزاتTitle: "Everything Canadian الرواتب الفرق expect",
  ميزاتIntro:
    "Schedulaa aligns with CRA guidance for CPP, EI, and federal/provincial tax brackets so you can trust every pay cycle.",
  ميزات: [
    {
      icon: "compliance",
      label: "الامتثال",
      title: "CPP, EI, and tax automation",
      description:
        "Calculate CPP, EI, and federal/provincial income tax with BPA pro-rating per الموظف. YTD ceilings and clawbacks are tracked automatically.",
    },
    {
      icon: "document",
      label: "Payslips",
      title: "Finalize and export slips",
      description:
        "Finalize الرواتب and export slips as PDF, CSV, or Excel. Email documents to each الموظف directly from the pay run.",
      link: "/payslips",
      linkLabel: "عرض payslip بوابة",
    },
    {
      icon: "timeline",
      label: "سير العمل",
      title: "Preview, adjust, اعتماد نهائي",
      description:
        "Preview every deduction, edit overtime, bonuses, tips, commissions, and employer contributions, then اعتماد نهائي once amounts look right.",
    },
  ],
  highlights: [
    {
      overline: "Preview and اعتماد نهائي",
      title: "Line-item معاينة with BPA and YTD context",
      body:
        "شاهد كيف federal, provincial, CPP, and EI deductions apply before committing a pay run. Every الموظف view includes BPA usage, vacation pay, and net pay totals.",
      points: [
        "Override hours, rates, and taxable benefits on the fly.",
        "Break out employer contributions alongside الموظف deductions.",
        "Keep an audit trail of each recalculation before finalizing.",
      ],
      links: [
        { label: "View الرواتب workflow", href: "/payroll/usa" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa الرواتب معاينة showing Canadian deductions",
      },
    },
    {
      overline: "Exports",
      title: "Deliver payslips and compliance files in one click",
      body:
        "Finalize a run, export slips as PDF, CSV, or Excel, and send them to staff instantly. Need year-end filings? Jump straight into T4 or ROE generation with prefilled data.",
      points: [
        "One-click email of finalized PDF slips to each الموظف.",
        "Batch downloads for accounting and year-end review.",
      ],
      links: [
        { label: "Generate T4 slips", href: "/payroll/tools/t4" },
        { label: "Create ROEs", href: "/payroll/tools/roe" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa الرواتب export options",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Run a Canadian pay cycle in three خطوات",
  stepsIntro:
    "Schedulaa connects الجدولة, timesheets, and الرواتب data so finance الفرق can close each pay period quickly.",
  steps: [
    {
      title: "Import hours or enter earnings",
      description:
        "Bring in hours from الجدولة or upload CSV data. Add bonuses, tips, commissions, and employer contributions before calculating.",
    },
    {
      title: "Preview deductions and adjust",
      description:
        "Review CPP, EI, and tax amounts with BPA context. Override vacation pay, taxable benefits, or RRSP/401k matches as needed.",
    },
    {
      title: "Finalize and deliver payslips",
      description:
        "Lock the pay run, email PDF slips to الموظفون, download CSV or Excel تصدير, and queue T4/ROE filings directly.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Employee access",
      title: "Self-serve payslip بوابة",
      body:
        "Employees can sign in to Schedulaa and download their finalized PDF payslips any time. Filters make it easy to locate past periods without asking الرواتب staff.",
      links: [{ label: "عرض بوابة", href: "/payslips" }],
    },
    {
      icon: "document",
      label: "Year-end filings",
      title: "T4 and ROE tooling included",
      body:
        "Generate CRA-compliant T4 slips and XML files, plus Records of Employment with PDF and XML تصدير. Prefilled data comes straight from the latest pay runs.",
      links: [
        { label: "فتح T4 مولد", href: "/payroll/tools/t4" },
        { label: "فتح ROE مولد", href: "/payroll/tools/roe" },
      ],
    },
  ],
  faqHeading: "الاسئلة الشائعة",
  faqTitle: "Canadian الرواتب الاسئلة",
  faqIntro: "Honest answers based on what Schedulaa already powers for Canadian الفرق.",
  faq: [
    {
      question: "Do you الدعم Québec الرواتب?",
      answer:
        "Schedulaa's standard الرواتب flow covers every province except Québec. We maintain a dedicated Québec path to handle QPP and RQAP; contact us so we can review your setup and enable the correct configuration.",
    },
    {
      question: "Can الموظفون download their own payslips?",
      answer:
        "Yes. Once you اعتماد نهائي الرواتب, Schedulaa can email PDF slips to الموظفون and surfaces the same documents inside the Employee Payslip Portal for خدمة ذاتية downloads.",
    },
    {
      question: "كيف are CPP and EI ceilings handled?",
      answer:
        "Schedulaa tracks CPP and EI year-to-date totals per الموظف. When annual maximums are reached, deductions automatically stop and employer portions adjust accordingly.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "Note: Local provincial programs such as health premiums or workers' compensation remittances remain المدير-configured outside the core الرواتب engine.",
};

const usaConfig = {
  meta: {
    title: "USA الرواتب Calculator (Federal, FICA/Medicare, Supported State Finalize) | Schedulaa",
    description:
      "Calculate US الرواتب with federal tax, FICA, Medicare, and employer FUTA/SUTA reporting. Full اعتماد نهائي is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH; other states run in raw معاينة mode.",
    canonical: `${BASE_URL}/payroll/usa`,
    og: {
      title: "USA الرواتب Calculator for Teams with Multi-State Workers | Schedulaa",
      description:
        "Preview US الرواتب in all states with federal tax, FICA, and Medicare. Finalize is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
      url: `${BASE_URL}/payroll/usa`,
    },
    twitter: {
      card: "summary_large_image",
      title: "USA الرواتب Calculator for Teams with Multi-State Workers | Schedulaa",
      description:
        "Schedulaa automates US الرواتب calculations, payslip تصدير, and الموظف خدمة ذاتية downloads in one workflow.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Schedulaa USA الرواتب",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "USD",
      },
      featureList: [
        "Federal income tax withholding",
        "Supported-state full اعتماد نهائي (AK, FL, NV, SD, TX, WA, WY, TN, NH)",
        "Raw معاينة mode for unsupported states",
        "FICA and Medicare deductions",
        "Employer FUTA/SUTA reporting (not deducted from net pay)",
        "Bonuses, tips, and commissions الدعم",
        "Payslip PDF, CSV, and Excel export",
        "Employee self-service بوابة",
      ],
      url: `${BASE_URL}/payroll/usa`,
      provider: {
        "@type": "Organization",
        name: "Schedulaa",
        url: BASE_URL,
      },
    },
    payrollBreadcrumb("USA الرواتب", `${BASE_URL}/payroll/usa`),
  ],
  hero: {
    badge: "Federal + FICA + employer unemployment",
    title: "USA الرواتب Calculator with FICA and Medicare built in",
    subtitle:
      "Handle federal withholding, FICA, Medicare, bonuses, tips, commissions, and employer taxes in the same pay run. Full اعتماد نهائي is available in AK, FL, NV, SD, TX, WA, WY, TN, and NH; unsupported states stay in raw معاينة mode.",
    bullets: [
      "Preview الرواتب in all U.S. states before اعتماد نهائي.",
      "Track employer FUTA/SUTA alongside الموظف withholding without reducing الموظف net pay.",
      "Unsupported states return raw mode warnings and اعتماد نهائي is blocked.",
      "Email PDF payslips and keep a downloadable archive for staff.",
    ],
    primaryCta: { label: "Run US الرواتب", href: REGISTER_URL },
    secondaryCta: { label: "عرض تجربة مباشرة", href: CONTACT_URL },
  },
  ميزاتHeading: "الميزات",
  ميزاتTitle: "US الرواتب covered from معاينة to payslip",
  ميزاتIntro:
    "Schedulaa keeps the deductions accurate while giving finance الفرق control over overrides and exceptions.",
  ميزات: [
    {
      icon: "compliance",
      label: "Tax engine",
      title: "Federal withholding + supported-state اعتماد نهائي",
      description:
        "Automatically apply federal income tax and FICA/Medicare by الموظف work location. Full اعتماد نهائي is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH; unsupported states remain available in raw معاينة with explicit warnings. Employer FUTA/SUTA is reported separately from الموظف deductions.",
    },
    {
      icon: "retirement",
      label: "Enterprise Retirement (U.S. 401(k))",
      title: "401(k) and Roth 401(k) with wage bases and caps",
      description:
        "Calculate 401(k) and Roth 401(k) deferrals with annual caps, employer match حدود, and applicable wage bases. Post-finalization تصدير surface W-2 Box 12D codes so filings stay aligned with الرواتب data.",
    },
    {
      icon: "timeline",
      label: "سير العمل",
      title: "Multi-state previews",
      description:
        "Preview each الموظف's deductions, edit wages and taxable benefits, rerun in seconds, and keep الرواتب audit/overwrite history when a period is re-finalized. Unsupported states can معاينة in raw mode but cannot اعتماد نهائي.",
    },
    {
      icon: "document",
      label: "Exports",
      title: "Payslips and W-2 outputs",
      description:
        "Finalize الرواتب, export PDF, CSV, or Excel for accounting, and generate W-2 PDF and EFW2 files at year-end with prefilled data.",
      link: "/payroll/tools/w2",
      linkLabel: "فتح W-2 مولد",
    },
  ],
  highlights: [
    {
      overline: "Preview",
      title: "Transparent deductions before you اعتماد نهائي",
      body:
        "شاهد كيف each tax and contribution will hit net pay, including federal brackets, FICA, and Medicare. Employer FUTA/SUTA is shown for reporting and does not reduce الموظف net pay. Override earnings and recalc on demand.",
      points: [
        "Highlight overtime, tips, bonuses, and commissions for every الموظف.",
        "Record employer 401(k) matches and insurance premiums next to الرواتب taxes.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa الرواتب معاينة showing US deductions",
      },
    },
    {
      overline: "Delivery",
      title: "Finalize, export, and notify الموظفون",
      body:
        "Once numbers look correct, اعتماد نهائي the run, email payslips, and archive تصدير for finance. Employees can log in to download past slips any time.",
      points: [
        "Generated slips stay available in the الموظف بوابة.",
        "Accounting الفرق can download CSV or Excel for journal entries.",
      ],
      links: [
        { label: "عرض بوابة الموظف", href: "/payslips" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
        alt: "Laptop with الرواتب export confirmation",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "كيف الفرق finish a US pay cycle in Schedulaa",
  stepsIntro:
    "Bring in hours, معاينة withholding, and اعتماد نهائي where supported without leaving the platform.",
  steps: [
    {
      title: "Import hours or salaries",
      description:
        "Pull data from الجدولة or upload spreadsheets. Enter bonuses, tips, commissions, and employer contributions.",
    },
    {
      title: "Preview deductions per jurisdiction",
      description:
        "Review federal withholding, FICA, Medicare, and employer FUTA/SUTA. Unsupported states run in raw معاينة mode with warnings. Adjust wages or overrides and rerun the معاينة.",
    },
    {
      title: "Finalize and export",
      description:
        "Finalize الرواتب in AK, FL, NV, SD, TX, WA, WY, TN, and NH; email PDF payslips, download CSV/Excel, and prepare W-2s at year end.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Limitations",
      title: "State الدعم and local taxes",
      body:
        "Full U.S. اعتماد نهائي is currently supported only in AK, FL, NV, SD, TX, WA, WY, TN, and NH. Other states remain معاينة-only (raw mode). Local/city taxes and special programs (for example WA PFML / WA Cares) are not automated and should be handled externally.",
    },
    {
      icon: "document",
      label: "Year-end filing",
      title: "W-2 outputs included",
      body:
        "Generate six-copy IRS W-2 PDFs, flattened forms for e-delivery, and EFW2 text files. Multi-state wages are supported with per-state coding.",
      links: [{ label: "Generate W-2s", href: "/payroll/tools/w2" }],
    },
  ],
  faqHeading: "الاسئلة الشائعة",
  faqTitle: "US الرواتب الاسئلة",
  faqIntro: "Answers based on the capabilities shipping in Schedulaa today.",
  faq: [
    {
      question: "Do you handle local or city income taxes?",
      answer:
        "Not yet. Schedulaa calculates federal withholding plus FICA/Medicare, and reports employer FUTA/SUTA. Local and city levies should be tracked separately and uploaded if needed.",
    },
    {
      question: "Can I run multi-state الرواتب?",
      answer:
        "Yes for معاينة. You can معاينة الرواتب in all U.S. states. Finalize is currently supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH; unsupported states remain in raw معاينة mode.",
    },
    {
      question: "كيف do الموظفون get their payslips?",
      answer:
        "Once you اعتماد نهائي الرواتب you can email PDF payslips directly to recipients. The same documents appear in the Employee Payslip Portal for خدمة ذاتية downloads.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "* Full U.S. اعتماد نهائي: AK, FL, NV, SD, TX, WA, WY, TN, NH. ** Other states: raw معاينة only (اعتماد نهائي blocked). *** Employer FUTA/SUTA is reporting-only (not deducted from الموظف net pay). **** Local/city taxes and WA PFML / WA Cares are handled externally.",
};

const roeConfig = {
  meta: {
    title: "ROE Generator (Record of Employment) – Canada | Schedulaa",
    description:
      "Generate Canadian ROEs with prefilled insurable hours and earnings, approval workflow, and PDF/XML تصدير ready for Service Canada.",
    canonical: `${BASE_URL}/payroll/tools/roe`,
    og: {
      title: "ROE Generator with PDF & XML Export | Schedulaa",
      description:
        "Create, review, and export Records of Employment with prefilled data from your latest pay runs, plus approvals and audit trail.",
      image: `${BASE_URL}/images/payroll-roe-preview.png`,
      url: `${BASE_URL}/payroll/tools/roe`,
    },
    twitter: {
      card: "summary_large_image",
      title: "ROE Generator with PDF & XML Export | Schedulaa",
      description:
        "Schedulaa automates ROEs with prefilled insurable earnings, approvals, and CRA-compliant PDF/XML تصدير.",
      image: `${BASE_URL}/images/payroll-roe-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Schedulaa ROE Generator",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "CAD" },
      featureList: [
        "Prefill insurable hours and earnings from الرواتب",
        "Approval workflow with audit trail",
        "PDF and XML export for Service Canada",
        "Department and الموظف filters",
      ],
      url: `${BASE_URL}/payroll/tools/roe`,
    },
    payrollBreadcrumb("ROE مولد", `${BASE_URL}/payroll/tools/roe`),
  ],
  hero: {
    badge: "Record of Employment",
    title: "ROE Generator with PDF and XML export",
    subtitle:
      "Prefill insurable hours and earnings from your latest pay runs, review in-app, and export CRA-compliant PDF and XML files.",
    bullets: [
      "Prefill ROEs using finalized الرواتب data.",
      "Route submissions through approve or reject workflow.",
      "Export PDF or XML packages for Service Canada.",
    ],
    primaryCta: { label: "Generate an ROE", href: REGISTER_URL },
    secondaryCta: { label: "Talk to compliance", href: CONTACT_URL },
  },
  ميزاتHeading: "Capabilities",
  ميزاتTitle: "Everything needed for compliant ROEs",
  ميزاتIntro: "Schedulaa keeps your ROE workflow fast, auditable, and ready for Service Canada.",
  ميزات: [
    {
      icon: "document",
      label: "Prefill",
      title: "Auto-complete with الرواتب data",
      description:
        "Pull insurable hours and earnings from the latest paystub for each الموظف, including vacation pay and separation pay.",
    },
    {
      icon: "timeline",
      label: "سير العمل",
      title: "Approve or reject submissions",
      description:
        "Route drafted ROEs through approvals. Capture comments and maintain an audit trail before exporting.",
    },
    {
      icon: "compliance",
      label: "Export",
      title: "PDF and XML packages",
      description:
        "Generate PDF copies for internal records and XML submissions compatible with Service Canada portals.",
    },
  ],
  highlights: [
    {
      overline: "Audit trail",
      title: "Track every change and approval",
      body:
        "يحتفظ Schedulaa بسجل تفصيلي لكل ROE. يعرض من قام بالتحضير او الاعتماد او الرفض، مع طوابع زمنية لمراجعات الامتثال.",
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "ROE approval audit trail",
      },
    },
  ],
  stepsHeading: "سير العمل",
  stepsTitle: "كيف the ROE مولد works",
  steps: [
    {
      title: "Create from الرواتب history",
      description:
        "Choose an الموظف and pull their latest pay runs to prefill insurable hours, earnings, and separation details.",
    },
    {
      title: "Review and approve",
      description:
        "Validate the data, capture comments, and approve or reject. All changes are logged for auditing.",
    },
    {
      title: "Export and submit",
      description:
        "Download PDF for records or XML for Service Canada upload. Batch تصدير help you keep filings organized.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Related tools",
      title: "Need T4 slips too?",
      body:
        "Schedulaa links ROE data to year-end filings. Generate T4s from the same الرواتب data set and stay compliant without duplicating work.",
      links: [{ label: "Generate T4s", href: "/payroll/tools/t4" }],
    },
  ],
  faqHeading: "الاسئلة الشائعة",
  faqTitle: "ROE الاسئلة",
  faq: [
    {
      question: "Which fields are prefilled automatically?",
      answer:
        "Schedulaa pulls insurable hours, earnings, vacation pay, and separation pay from the latest finalized pay runs so you only confirm details before exporting.",
    },
    {
      question: "Can I export XML for bulk upload?",
      answer:
        "Yes. The مولد creates XML files ready for upload to the Service Canada بوابة, alongside PDF copies for internal records.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const t4Config = {
  meta: {
    title: "T4 Generator – Canada Year-End Slips (PDF & XML) | Schedulaa",
    description:
      "Generate CRA-compliant T4 slips with PDF, XML, and ZIP packages. Prefill boxes from الرواتب runs and batch deliver to الموظفون.",
    canonical: `${BASE_URL}/payroll/tools/t4`,
    og: {
      title: "T4 Generator with CRA XML Export | Schedulaa",
      description:
        "Create T4 slips, render PDF copies, export CRA XML, and bundle everything in a ZIP with a single workflow.",
      image: `${BASE_URL}/images/payroll-t4-preview.png`,
      url: `${BASE_URL}/payroll/tools/t4`,
    },
    twitter: {
      card: "summary_large_image",
      title: "T4 Generator with CRA XML Export | Schedulaa",
      description:
        "Schedulaa fills T4 boxes from الرواتب data, renders PDF, builds CRA XML, and bundles slips in one workflow.",
      image: `${BASE_URL}/images/payroll-t4-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Schedulaa T4 Generator",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "CAD" },
      featureList: [
        "Prefill CRA boxes from الرواتب",
        "Render PDF copies",
        "Generate CRA XML",
        "Batch ZIP download",
        "Delivery-ready slip packages",
      ],
      url: `${BASE_URL}/payroll/tools/t4`,
    },
    payrollBreadcrumb("T4 مولد", `${BASE_URL}/payroll/tools/t4`),
  ],
  hero: {
    badge: "Year-end الرواتب",
    title: "T4 Generator with PDF and CRA XML تصدير",
    subtitle:
      "Prefill CRA boxes from your Schedulaa الرواتب history, render PDF slips for الموظفون, and export CRA XML with one click.",
    bullets: [
      "Prefill T4 boxes from finalized الرواتب data.",
      "Render الموظف-ready PDF slips.",
      "Export CRA XML and batch ZIP for filing.",
    ],
    primaryCta: { label: "Generate T4 slips", href: REGISTER_URL },
    secondaryCta: { label: "Get help with filings", href: CONTACT_URL },
  },
  ميزاتHeading: "Capabilities",
  ميزاتTitle: "Year-end slips without manual data entry",
  ميزات: [
    {
      icon: "document",
      label: "Prefill",
      title: "Auto-populated CRA boxes",
      description:
        "Schedulaa maps الرواتب earnings, deductions, and taxable benefits into the correct CRA boxes so you spend time reviewing, not retyping.",
    },
    {
      icon: "compliance",
      label: "الامتثال",
      title: "XML ready for CRA upload",
      description:
        "Produce CRA XML files that align with the latest specifications. Keep archives organized with batch ZIP تصدير.",
    },
    {
      icon: "timeline",
      label: "سير العمل",
      title: "Batch delivery",
      description:
        "Bundle PDF, XML, and CSV summaries in a single ZIP file for safe storage or delivery to your compliance الفريق.",
    },
  ],
  highlights: [
    {
      overline: "Prefill accuracy",
      title: "CRA boxes filled straight from الرواتب",
      body:
        "Every T4 uses the same data you finalized in الرواتب. Review employment income, CPP/EI, taxable benefits, and pension adjustments before exporting.",
      image: {
        src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
        alt: "T4 مولد showing CRA boxes",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "From الرواتب history to T4 packages",
  steps: [
    {
      title: "Select the tax year",
      description:
        "Choose the year you need slips for and let Schedulaa fetch the الرواتب history.",
    },
    {
      title: "Review prefilled data",
      description:
        "Confirm CRA boxes, employer information, and footnotes before exporting.",
    },
    {
      title: "Export PDF, XML, ZIP",
      description:
        "Download الموظف PDFs, CRA XML, and a ZIP archive to share with stakeholders or upload to the CRA بوابة.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Connected tools",
      title: "ROE مولد included",
      body: "Need Records of Employment as well? Switch to the ROE مولد without leaving your workflow.",
      links: [{ label: "فتح ROE مولد", href: "/payroll/tools/roe" }],
    },
  ],
  faqHeading: "الاسئلة الشائعة",
  faqTitle: "T4 مولد الاسئلة",
  faq: [
    {
      question: "Do you generate CRA XML automatically?",
      answer:
        "Yes. The T4 مولد produces XML files ready for CRA submission along with PDF copies for الموظفون.",
    },
    {
      question: "Can الموظفون receive their T4 online?",
      answer:
        "After you generate T4 slips, you can distribute the PDF copies through the payslip بوابة or your preferred delivery channel.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const w2Config = {
  meta: {
    title: "W-2 Generator – US Year-End (IRS Fillable PDF & EFW2) | Schedulaa",
    description:
      "Generate IRS W-2 forms with fillable multi-copy PDFs, flattened الموظف copies, and EFW2 text files ready for SSA submission.",
    canonical: `${BASE_URL}/payroll/tools/w2`,
    og: {
      title: "W-2 Generator with IRS PDF and EFW2 Export | Schedulaa",
      description:
        "Prefill W-2 boxes from Schedulaa الرواتب data, render six-copy PDFs, flatten for e-delivery, and export EFW2 files.",
      image: `${BASE_URL}/images/payroll-w2-preview.png`,
      url: `${BASE_URL}/payroll/tools/w2`,
    },
    twitter: {
      card: "summary_large_image",
      title: "W-2 Generator with IRS PDF and EFW2 Export | Schedulaa",
      description:
        "Schedulaa fills W-2 boxes, renders IRS-compliant PDFs, and builds EFW2 text files for SSA reporting.",
      image: `${BASE_URL}/images/payroll-w2-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Schedulaa W-2 Generator",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD" },
      featureList: [
        "Prefill IRS W-2 boxes from الرواتب",
        "Render six-copy IRS PDF",
        "Flatten الموظف copies",
        "Generate EFW2 text files",
        "Support for multi-state wages",
      ],
      url: `${BASE_URL}/payroll/tools/w2`,
    },
    payrollBreadcrumb("W-2 مولد", `${BASE_URL}/payroll/tools/w2`),
  ],
  hero: {
    badge: "Year-end الرواتب",
    title: "W-2 Generator with IRS PDF and EFW2 export",
    subtitle:
      "Fill every W-2 box automatically, render the official six-copy PDF, flatten الموظف copies, and generate EFW2 text in one workflow.",
    bullets: [
      "Prefill wages, withholding, and benefits from Schedulaa الرواتب.",
      "Render multi-copy IRS PDF forms and flattened الموظف versions.",
      "Generate SSA EFW2 text files for electronic submission.",
    ],
    primaryCta: { label: "Generate W-2 forms", href: REGISTER_URL },
    secondaryCta: { label: "Request onboarding", href: CONTACT_URL },
  },
  ميزاتHeading: "Capabilities",
  ميزاتTitle: "Accurate W-2 filing without manual edits",
  ميزات: [
    {
      icon: "document",
      label: "Prefill",
      title: "W-2 boxes filled from الرواتب history",
      description:
        "Schedulaa maps wages, withholding, tips, and deferred compensation right into the correct W-2 boxes.",
    },
    {
      icon: "compliance",
      label: "الامتثال",
      title: "IRS PDF and EFW2 outputs",
      description:
        "Generate the official six-copy W-2 PDF, flattened الموظف copies for e-delivery, and EFW2 text files for SSA.",
    },
    {
      icon: "timeline",
      label: "Multi-state",
      title: "Support for multi-state wages",
      description:
        "Track wages across multiple states and ensure the correct locality codes are included in the exported forms.",
    },
  ],
  highlights: [
    {
      overline: "Ready for SSA",
      title: "EFW2 export in one click",
      body:
        "Generate the EFW2 text file using your finalized الرواتب data. Keep employer and الموظف copies synced without duplicate data entry.",
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        alt: "W-2 مولد export options",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "From الرواتب to filed W-2s",
  steps: [
    {
      title: "Select tax year and الموظفون",
      description:
        "Pick the tax year, filter the الموظفون you need, and let Schedulaa prefill their data.",
    },
    {
      title: "Review and approve forms",
      description:
        "Confirm each box, adjust if necessary, and approve the batch prior to export.",
    },
    {
      title: "Export PDF and EFW2",
      description:
        "Download the six-copy PDF and flattened versions for الموظفون, plus the EFW2 file for SSA submission.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Connected tools",
      title: "Need live الرواتب runs?",
      body:
        "W-2 forms are built on the same الرواتب engine that handles federal, state, FICA, and Medicare calculations.",
      links: [{ label: "Run US الرواتب", href: "/payroll/usa" }],
    },
  ],
  faqHeading: "الاسئلة الشائعة",
  faqTitle: "W-2 مولد الاسئلة",
  faq: [
    {
      question: "Do you الدعم multi-state wages?",
      answer:
        "Yes. W-2 تصدير include per-state wage totals and codes so الموظفون with multiple work locations are supported.",
    },
    {
      question: "Can I deliver W-2s electronically?",
      answer:
        "Schedulaa renders flattened PDF copies you can distribute electronically alongside the الموظف بوابة.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const payslipConfig = {
  meta: {
    title: "Employee Payslip Portal – Download Payslips Online | Schedulaa",
    description:
      "Employees can access finalized payslips, filter by date, and download secure PDF copies any time. Managers control access and track downloads.",
    canonical: `${BASE_URL}/payslips`,
    og: {
      title: "Employee Payslip Portal | Schedulaa",
      description:
        "Give staff a secure بوابة to download finalized payslips, track history, and stay compliant with delivery requirements.",
      image: `${BASE_URL}/images/payroll-payslip-portal.png`,
      url: `${BASE_URL}/payslips`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Employee Payslip Portal | Schedulaa",
      description:
        "Schedulaa powers a secure payslip بوابة so الموظفون can download PDF slips without emailing الرواتب.",
      image: `${BASE_URL}/images/payroll-payslip-portal.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Schedulaa Payslip Portal",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD" },
      featureList: [
        "Employee self-service payslip access",
        "PDF downloads with date filters",
        "Email اشعارات on new slips",
        "Manager controls and auditing",
      ],
      url: `${BASE_URL}/payslips`,
    },
    payrollBreadcrumb("Payslip بوابة", `${BASE_URL}/payslips`),
  ],
  hero: {
    badge: "Employee experience",
    title: "Employee payslip بوابة with instant downloads",
    subtitle:
      "Give staff a secure, branded بوابة where they can view and download finalized payslips any time without emailing الرواتب.",
    bullets: [
      "Search and filter payslips by date or الرواتب run.",
      "Download PDF copies that match the finalized export.",
      "Control access with role-based permissions.",
    ],
    primaryCta: { label: "Enable the بوابة", href: REGISTER_URL },
    secondaryCta: { label: "عرض ميزات الرواتب", href: "/payroll/canada" },
  },
  ميزاتHeading: "Highlights",
  ميزاتTitle: "Keep الموظفون informed without extra tickets",
  ميزات: [
    {
      icon: "timeline",
      label: "Access",
      title: "All finalized payslips in one view",
      description:
        "Employees see their full payslip history with filters by pay period, employment type, or date range.",
    },
    {
      icon: "document",
      label: "Delivery",
      title: "Secure PDF downloads",
      description:
        "Every payslip matches the finalized PDF generated during الرواتب. Employees can download on desktop or mobile instantly.",
    },
    {
      icon: "compliance",
      label: "Controls",
      title: "Role-based permissions and logging",
      description:
        "Managers control who can access the بوابة and review logs for auditing. Disable access when الموظفون leave.",
    },
  ],
  highlights: [
    {
      overline: "Experience",
      title: "Branded بوابة your الفريق trusts",
      body:
        "Customize colors, logos, and links so the بوابة matches your company brand. Employees log in with their existing Schedulaa credentials.",
      image: {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa payslip بوابة dashboard",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "كيف the payslip بوابة works",
  steps: [
    {
      title: "Finalize الرواتب",
      description:
        "تشغيل الرواتب in Schedulaa. Finalized PDF slips automatically sync to the payslip بوابة.",
    },
    {
      title: "Notify الموظفون",
      description:
        "Send emails from الرواتب or notify staff through your HR channels that new slips are ready.",
    },
    {
      title: "Employees download securely",
      description:
        "Employees log in, filter by pay period, and download the PDF copies whenever they need them.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Connected",
      title: "Works with Canadian and US الرواتب",
      body:
        "The payslip بوابة receives finalized slips from both Canadian and US الرواتب runs, so multinational الفرق share the same experience.",
      links: [{ label: "Run a الرواتب معاينة", href: "/payroll/canada" }],
    },
  ],
  faqHeading: "الاسئلة الشائعة",
  faqTitle: "Payslip بوابة الاسئلة",
  faq: [
    {
      question: "Do الموظفون need a separate login?",
      answer:
        "No. Employees use their existing Schedulaa login. Access is controlled by المدير permissions and can be revoked any time.",
    },
    {
      question: "Can we email payslips as well?",
      answer:
        "Yes. When you اعتماد نهائي الرواتب you can email PDF copies to each الموظف and still keep the بوابة enabled as a backup.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

export const payrollPages = {
  overview: overviewConfig,
  canada: canadaConfig,
  usa: usaConfig,
  roe: roeConfig,
  t4: t4Config,
  w2: w2Config,
  payslips: payslipConfig,
};
