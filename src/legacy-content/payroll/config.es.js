const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";
const CONTACT_URL = "/contact";

const sharedCta = {
  overline: "Nomina + HR in one hub",
  title: "Ejecutar nomina, issue slips, and publish portals in minutes",
  body: "Schedulaa unifies nomina calculations, compliance exportaciones, and empleado autoservicio tools so finance and operations can work from the same dashboard.",
  primary: { label: "Comenzar gratis", href: REGISTER_URL },
  secondary: { label: "Habla con nosotros", href: CONTACT_URL },
};

const sharedSecondaryLinks = [
  { label: "Canada nomina", href: "/payroll/canada" },
  { label: "USA nomina", href: "/payroll/usa" },
  { label: "ROE generador", href: "/payroll/tools/roe" },
  { label: "T4 generador", href: "/payroll/tools/t4" },
  { label: "W-2 generador", href: "/payroll/tools/w2" },
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
    { name: "Nomina", href: `${BASE_URL}/payroll` },
    ...(name && href ? [{ name, href }] : []),
  ]);

const overviewConfig = {
  meta: {
    title: "Nomina Software & Payslip Automation | Schedulaa",
    description:
      "Tie programacion data, regional tax engines, and empleado autoservicio portals into one nomina workspace. Support Canada, USA, and statement exportaciones from day one.",
    canonical: `${BASE_URL}/payroll`,
    og: {
      title: "Unified Nomina & Programacion Plataforma | Schedulaa",
      description:
        "Ejecutar nomina for Canada and the USA, generate ROE/T4/W-2 files, and publish payslips through the empleado portal.",
      image: `${BASE_URL}/images/payroll-overview.png`,
      url: `${BASE_URL}/payroll`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Schedulaa Nomina Overview",
      description: "Preview deductions, finalizar slips, and keep empleados informed across every region you soporte.",
      image: `${BASE_URL}/images/payroll-overview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Schedulaa Nomina",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: `${BASE_URL}/payroll`,
      description:
        "Schedulaa unifies programacion, HR, and nomina automation. Employees automatically use the correct canadiense or US compliance engine and can access payslips instantly.",
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
      { name: "Nomina", href: `${BASE_URL}/payroll` },
    ]),
  ],
  hero: {
    badge: "Programacion + nomina + docs",
    title: "Nomina that stays in sync with operations",
    subtitle:
      "Pull real-time hours from programacion and time tracking, apply CRA or IRS logic, layer in tips, bonus, commission, shift premiums, union dues, garnishments, and non-taxable reimbursements, then ship payslips plus ROE/T4/W-2 without leaving Schedulaa. U.S. full finalizar is currently available in AK, FL, NV, SD, TX, WA, WY, TN, and NH; other U.S. states run in raw vista previa mode.",
    image: "/images/marketing/payroll-manage.png",
    imageAlt: "Schedulaa nomina management vista previa",
    images: [
      { src: "/images/marketing/payroll-manage.png", alt: "Nomina management" },
      { src: "/images/marketing/showcase/t4.png", alt: "T4 generation" },
      { src: "/images/marketing/showcase/roe.png", alt: "ROE workflow" },
      { src: "/images/marketing/showcase/w2-4d.png", alt: "W-2 generation" },
    ],
    bullets: [
      "Regional engines for Canada (CPP/EI/BPA, CPP/EI exemptions) and the USA (federal tax, FICA/Medicare, employer FUTA/SUTA reporting).",
      "Taxable extras like shift premium, tips, commission, bonus plus deductions like union dues and garnishments—net pay matches the vista previa.",
      "Unsupported U.S. states remain available for raw vista previa, with clear warnings and finalizar blocked.",
      "ROE, T4 (with Box 40/44), W-2, and payslip exportaciones backed by our public docs.",
      "Employee autoservicio portal plus automated notificaciones.",
    ],
    primaryCta: { label: "Ver espacio de nomina", href: REGISTER_URL },
    secondaryCta: { label: "Leer la documentacion", href: "/docs#payroll" },
    notice:
      "* U.S. full finalizar: AK, FL, NV, SD, TX, WA, WY, TN, NH only. ** Other U.S. states are raw vista previa only (finalizar blocked). *** Local/city taxes and special programs (for example WA PFML / WA Cares) remain external.",
  },
  funcionesHeading: "Plataforma",
  funcionesTitle: "One place for calculations, slips, and empleado updates",
  funcionesIntro:
    "Content used here is pulled from our Funciones, Docs, and region-specific nomina pages so prospects see everything Google expects on /nomina.",
  funciones: [
    {
      icon: "timeline",
      label: "Flujo de trabajo",
      title: "Ops-connected pay runs",
      description:
        "Import actual hours, overtime, and tips from the programacion suite before calculating deductions. The correct country engine applies automatically per empleado. When a run moves to nomina.ready or nomina.finalized, Zapier events can notify finance, push exportaciones, or trigger downstream workflows. Every paso is logged for finance and HR audits, including overwrite history when a period is re-finalized.",
      link: "/funciones",
      linkLabel: "Recorrer la plataforma",
    },
    {
      icon: "compliance",
      label: "Cumplimiento",
      title: "Canada & USA tax engines",
      description:
        "Employees automatically run on canadiense CPP/EI/BPA logic (with CPP/EI exemptions) or U.S. federal tax + FICA/Medicare logic based on work location. U.S. full finalizar is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH; unsupported states remain available as raw vista previa with warnings. Both engines soporte shift premium, tips, commission, bonus, union dues, garnishments, and non-taxable reimbursements.",
      link: "/payroll/canada",
      linkLabel: "Ver calculadoras regionales",
    },
    {
      icon: "retirement",
      label: "Enterprise Retirement (U.S. 401(k))",
      title: "401(k) deferrals, caps, and W-2 alignment",
      description:
        "Automatic 401(k) and Roth 401(k) calculations with annual caps, employer match limites, and applicable wage bases. Post-finalization exportaciones surface W-2 Box 12D codes so year-end filings align with what nomina produced.",
      link: "/payroll/usa",
      linkLabel: "Review U.S. nomina cobertura",
    },
    {
      icon: "document",
      label: "Documents",
      title: "ROE, T4, W-2, and payslips",
      description:
        "Finalize nomina, email slips, post them in the payslip portal, and export ROE/T4/W-2 files that align with CRA and IRS specs.",
      link: "/payslips",
      linkLabel: "Abrir portal de recibos",
    },
  ],
  highlights: [
    {
      overline: "Coverage at a glance",
      title: "Engines for Canada (ex-Québec) and supported U.S. states",
      body:
        "Two regional engines, one workspace. Employees automatically use the right CRA or IRS/FICA/state logic based on their work location—no duplicate setups.",
      points: [
        "CA: Federal & provincial tax, CPP/EI (with exemptions), vacation/stat holidays, T4 boxes 14/16/18/22/24/26/40/44, ROE.",
        "US: Federal income tax, FICA/Medicare, employer FUTA/SUTA reporting, and W-2 exportaciones. Full finalizar is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH.",
        "Local/city/municipal nomina taxes remain external where they apply.",
      ],
    },
    {
      overline: "Documented flows",
      title: "Guided nomina that mirrors our Docs",
      body:
        "Preview → adjust → finalizar → publish exactly as shown in the public docs. No hidden pasos—new gerentes can follow the same playbook used by finance.",
      points: [
        "Screenshots for every vista previa paso live in the docs.",
        "Direct links to ROE/T4/W-2 (incl. Box 40/44) guides for deeper review.",
        "Inline help inside the app keeps gerentes on the rails.",
      ],
    },
    {
      overline: "Employee experience",
      title: "Self-serve slips and notificaciones",
      body:
        "Branded portal + alerts: empleados download slips anytime; finance chooses email, SMS, or in-app notificaciones. Taxable vs non-taxable items are labeled clearly.",
      points: [
        "Branded portal inherits your site colors automatically.",
        "Scoped access per empleado keeps data secure.",
        "Shortcuts to /nomina/tools for region-specific exportaciones.",
      ],
    },
  ],
  stepsHeading: "Como nomina runs inside Schedulaa",
  stepsTitle: "From schedule to finalized slips in four pasos",
  stepsIntro: "Local and city nomina taxes are handled externally.",
  steps: [
    {
      title: "Import hours & review context",
      description:
        "Pull hours from programacion, sync bonuses, tips, commissions, or shift premium, and compare to historic pay runs before doing any math.",
    },
    {
      title: "Apply deductions with the right engine",
      description:
        "The correct country rules apply automatically by empleado location. CRA or IRS logic, plus vacation pay, benefits, union dues, garnishments, and non-taxable reimbursements, are applied instantly.",
    },
    {
      title: "Finalize and export",
      description:
        "Generate payslips, CSV, or Excel summaries and push ROE/T4/W-2 files to the tools section for auditor review.",
    },
    {
      title: "Publish to the portal",
      description:
        "Notify empleados, post slips in the portal, and keep everything searchable for future audits.",
    },
    {
      title: "Spot-check for year-end readiness",
      description:
        "Confirm union dues, taxable benefits, and exemptions are reflected correctly so T4/W-2 totals align with what finance expects at year-end.",
    },
    {
      title: "Share with finance & ops",
      description:
        "Hand off clean exportaciones to accounting or BI, with the same gross, deduction, and net figures your gerentes saw in vista previa.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Coverage & limites",
      title: "Current U.S. soporte boundaries",
      body:
        "Full U.S. finalizar is currently supported only in AK, FL, NV, SD, TX, WA, WY, TN, and NH. Other U.S. states are available in raw vista previa mode with warnings and finalizar blocked. Employer FUTA/SUTA is reported separately and does not reduce empleado net pay.",
      points: [
        "* Full finalizar states: AK, FL, NV, SD, TX, WA, WY, TN, NH",
        "** Unsupported states: vista previa-only raw mode",
        "*** Local/city taxes + WA PFML/WA Cares: external handling",
      ],
    },
    {
      icon: "analytics",
      label: "Insights",
      title: "Finance and HR see the same truth",
      body:
        "Nomina history, deduction logic, and document exportaciones are visible in analytics dashboards so leadership sees trends without another BI tool.",
      links: [
        { label: "Abrir recorrido de analitica", href: "/marketing/analytics-dashboard" },
        { label: "Leer guias de nomina", href: "/docs#payroll" },
      ],
    },
    {
      icon: "schedule",
      label: "Nomina-ready time data",
      title: "Hours arrive with breaks, overtime, and audits attached",
      body:
        "Approved time entries land with unpaid breaks deducted, overtime and missed-break markers attached, and IP/UA metadata for audits. Finance exportaciones CSV/PDF or syncs to accounting without spreadsheets.",
      points: [
        "Forced clock-out and bulk break template fixes are fully audited.",
        "OT/missed-break flags travel with each pay period.",
        "Safe portal links keep empleados on the right local domain.",
      ],
    },
  ],
  faqHeading: "Preguntas frecuentes",
  faqTitle: "Nomina resumen preguntas",
  faq: [
    {
      question: "Do you soporte all U.S. states for finalizar?",
      answer:
        "Not yet. Full finalizar is currently supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH. Other U.S. states remain available as raw vista previa with finalizar blocked.",
    },
    {
      question: "Is /nomina different from the Canada or USA pages?",
      answer:
        "The resumen introduces everything on one page for crawlers and prospects. It links directly to the Canada and USA calculators plus ROE/T4/W-2 tools for deeper regulation details.",
    },
    {
      question: "Does Google get blocked from nomina content?",
      answer:
        "No. robots.txt now allows /nomina and the sitemap lists every regional URL so crawlers reach them through HTML links.",
    },
    {
      question: "Do I need separate logins for the payslip portal?",
      answer:
        "Employees reuse their Schedulaa credentials. Access is gated by role, and gerentes can revoke permissions at any time.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: [
    { label: "Docs: nomina vista previa", href: "/docs#payroll" },
    { label: "Comparativa: Schedulaa vs Gusto", href: "/compare/gusto" },
    { label: "Comparativa: Schedulaa vs ADP", href: "/compare/adp" },
    ...sharedSecondaryLinks,
  ],
  nextSteps: {
    overline: "Siguientes pasos",
    title: "Choose where to go next",
    description: "Keep exploring nomina—from pricing to calculators and customer-facing documentation.",
    links: [
      {
        label: "Comparar planes de precios",
        description: "Ver como nomina, programacion, y marketing funciones line up.",
        href: "/pricing",
        cta: "Ver precios",
      },
      {
        label: "Iniciar una corrida de nomina de Canada",
        description: "Review CPP, EI, and provincial cobertura in detail.",
        href: "/payroll/canada",
        cta: "Canada nomina",
      },
      {
        label: "Abrir la documentacion",
        description: "Follow the nomina vista previa flow paso by paso in the documentation.",
        href: "/docs#payroll",
        cta: "Leer documentacion",
      },
      {
        label: "Descargar plantillas ROE/T4/W-2",
        description: "Jump straight into the nomina tools and final form exportaciones.",
        href: "/payroll/tools/t4",
        cta: "Ver herramientas",
      },
    ],
  },
};

const canadaConfig = {
  meta: {
    title: "Canada Nomina Calculator & Software (CPP, EI, BPA) | Schedulaa",
    description:
      "Run canadiense nomina with CPP, EI, federal and provincial tax, vacation pay, bonuses, tips, and employer matches. Finalize payslips as PDF, CSV, or Excel and email empleados automatically.",
    canonical: `${BASE_URL}/payroll/canada`,
    og: {
      title: "Canada Nomina Calculator for Small Businesses | Schedulaa",
      description:
        "Preview and finalizar canadiense nomina with CPP, EI, provincial tax, bonuses, and tips. Export payslips, email staff, and provide a autoservicio portal.",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
      url: `${BASE_URL}/payroll/canada`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Canada Nomina Calculator for Small Businesses | Schedulaa",
      description:
        "Automate canadiense nomina with CPP, EI, provincial tax, vacation pay, and empleado portals in one platform.",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Schedulaa Canada Nomina",
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
        "Bonuses, tips, and commissions soporte",
        "Payslip PDF, CSV, and Excel export",
        "Employee self-service payslip portal",
      ],
      url: `${BASE_URL}/payroll/canada`,
      provider: {
        "@type": "Organization",
        name: "Schedulaa",
        url: BASE_URL,
      },
    },
    payrollBreadcrumb("Canada nomina", `${BASE_URL}/payroll/canada`),
  ],
  hero: {
    badge: "CPP, EI, BPA tracking",
    title: "Canada Nomina Calculator for Small Businesses",
    subtitle:
      "Calculate gross-to-net with CPP, EI, federal and provincial tax, vacation pay, bonuses, tips, and employer matches in one dashboard.",
    bullets: [
      "Preview deductions line by line before finalizing nomina.",
      "Automate BPA pro-rating, CPP/EI ceilings, and YTD breakouts.",
      "Export payslips as PDF, CSV, or Excel and email empleados instantly.",
    ],
    primaryCta: { label: "Run canadiense nomina", href: REGISTER_URL },
    secondaryCta: { label: "Book a walkthrough", href: CONTACT_URL },
  },
  funcionesHeading: "Funciones",
  funcionesTitle: "Everything canadiense nomina equipos expect",
  funcionesIntro:
    "Schedulaa aligns with CRA guidance for CPP, EI, and federal/provincial tax brackets so you can trust every pay cycle.",
  funciones: [
    {
      icon: "compliance",
      label: "Cumplimiento",
      title: "CPP, EI, and tax automation",
      description:
        "Calculate CPP, EI, and federal/provincial income tax with BPA pro-rating per empleado. YTD ceilings and clawbacks are tracked automatically.",
    },
    {
      icon: "document",
      label: "Payslips",
      title: "Finalize and export slips",
      description:
        "Finalize nomina and export slips as PDF, CSV, or Excel. Email documents to each empleado directly from the pay run.",
      link: "/payslips",
      linkLabel: "Ver el payslip portal",
    },
    {
      icon: "timeline",
      label: "Flujo de trabajo",
      title: "Preview, adjust, finalizar",
      description:
        "Preview every deduction, edit overtime, bonuses, tips, commissions, and employer contributions, then finalizar once amounts look right.",
    },
  ],
  highlights: [
    {
      overline: "Preview and finalizar",
      title: "Line-item vista previa with BPA and YTD context",
      body:
        "Ver como federal, provincial, CPP, and EI deductions apply before committing a pay run. Every empleado view includes BPA usage, vacation pay, and net pay totals.",
      points: [
        "Override hours, rates, and taxable benefits on the fly.",
        "Break out employer contributions alongside empleado deductions.",
        "Keep an audit trail of each recalculation before finalizing.",
      ],
      links: [
        { label: "View nomina workflow", href: "/payroll/usa" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa nomina vista previa showing canadiense deductions",
      },
    },
    {
      overline: "Exports",
      title: "Deliver payslips and compliance files in one click",
      body:
        "Finalize a run, export slips as PDF, CSV, or Excel, and send them to staff instantly. Need year-end filings? Jump straight into T4 or ROE generation with prefilled data.",
      points: [
        "One-click email of finalized PDF slips to each empleado.",
        "Batch downloads for accounting and year-end review.",
      ],
      links: [
        { label: "Generate T4 slips", href: "/payroll/tools/t4" },
        { label: "Create ROEs", href: "/payroll/tools/roe" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa nomina export options",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Run a canadiense pay cycle in three pasos",
  stepsIntro:
    "Schedulaa connects programacion, timesheets, and nomina data so finance equipos can close each pay period quickly.",
  steps: [
    {
      title: "Import hours or enter earnings",
      description:
        "Bring in hours from programacion or upload CSV data. Add bonuses, tips, commissions, and employer contributions before calculating.",
    },
    {
      title: "Preview deductions and adjust",
      description:
        "Review CPP, EI, and tax amounts with BPA context. Override vacation pay, taxable benefits, or RRSP/401k matches as needed.",
    },
    {
      title: "Finalize and deliver payslips",
      description:
        "Lock the pay run, email PDF slips to empleados, download CSV or Excel exportaciones, and queue T4/ROE filings directly.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Employee access",
      title: "Self-serve payslip portal",
      body:
        "Employees can sign in to Schedulaa and download their finalized PDF payslips any time. Filters make it easy to locate past periods without asking nomina staff.",
      links: [{ label: "Ver el portal", href: "/payslips" }],
    },
    {
      icon: "document",
      label: "Year-end filings",
      title: "T4 and ROE tooling included",
      body:
        "Generate CRA-compliant T4 slips and XML files, plus Records of Employment with PDF and XML exportaciones. Prefilled data comes straight from the latest pay runs.",
      links: [
        { label: "Abrir el T4 generador", href: "/payroll/tools/t4" },
        { label: "Abrir el ROE generador", href: "/payroll/tools/roe" },
      ],
    },
  ],
  faqHeading: "Preguntas frecuentes",
  faqTitle: "canadiense nomina preguntas",
  faqIntro: "Honest answers based on what Schedulaa already powers for canadiense equipos.",
  faq: [
    {
      question: "Do you soporte Québec nomina?",
      answer:
        "Schedulaa's standard nomina flow covers every province except Québec. We maintain a dedicated Québec path to handle QPP and RQAP; contact us so we can review your setup and enable the correct configuration.",
    },
    {
      question: "Can empleados download their own payslips?",
      answer:
        "Yes. Once you finalizar nomina, Schedulaa can email PDF slips to empleados and surfaces the same documents inside the Employee Payslip Portal for autoservicio downloads.",
    },
    {
      question: "Como are CPP and EI ceilings handled?",
      answer:
        "Schedulaa tracks CPP and EI year-to-date totals per empleado. When annual maximums are reached, deductions automatically stop and employer portions adjust accordingly.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "Note: Local provincial programs such as health premiums or workers' compensation remittances remain gerente-configured outside the core nomina engine.",
};

const usaConfig = {
  meta: {
    title: "USA Nomina Calculator (Federal, FICA/Medicare, Supported State Finalize) | Schedulaa",
    description:
      "Calculate US nomina with federal tax, FICA, Medicare, and employer FUTA/SUTA reporting. Full finalizar is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH; other states run in raw vista previa mode.",
    canonical: `${BASE_URL}/payroll/usa`,
    og: {
      title: "USA Nomina Calculator for Teams with Multi-State Workers | Schedulaa",
      description:
        "Preview US nomina in all states with federal tax, FICA, and Medicare. Finalize is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
      url: `${BASE_URL}/payroll/usa`,
    },
    twitter: {
      card: "summary_large_image",
      title: "USA Nomina Calculator for Teams with Multi-State Workers | Schedulaa",
      description:
        "Schedulaa automates US nomina calculations, payslip exportaciones, and empleado autoservicio downloads in one workflow.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Schedulaa USA Nomina",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "USD",
      },
      featureList: [
        "Federal income tax withholding",
        "Supported-state full finalizar (AK, FL, NV, SD, TX, WA, WY, TN, NH)",
        "Raw vista previa mode for unsupported states",
        "FICA and Medicare deductions",
        "Employer FUTA/SUTA reporting (not deducted from net pay)",
        "Bonuses, tips, and commissions soporte",
        "Payslip PDF, CSV, and Excel export",
        "Employee self-service portal",
      ],
      url: `${BASE_URL}/payroll/usa`,
      provider: {
        "@type": "Organization",
        name: "Schedulaa",
        url: BASE_URL,
      },
    },
    payrollBreadcrumb("USA nomina", `${BASE_URL}/payroll/usa`),
  ],
  hero: {
    badge: "Federal + FICA + employer unemployment",
    title: "USA Nomina Calculator with FICA and Medicare built in",
    subtitle:
      "Handle federal withholding, FICA, Medicare, bonuses, tips, commissions, and employer taxes in the same pay run. Full finalizar is available in AK, FL, NV, SD, TX, WA, WY, TN, and NH; unsupported states stay in raw vista previa mode.",
    bullets: [
      "Preview nomina in all U.S. states before finalizar.",
      "Track employer FUTA/SUTA alongside empleado withholding without reducing empleado net pay.",
      "Unsupported states return raw mode warnings and finalizar is blocked.",
      "Email PDF payslips and keep a downloadable archive for staff.",
    ],
    primaryCta: { label: "Run US nomina", href: REGISTER_URL },
    secondaryCta: { label: "Ver una demo en vivo", href: CONTACT_URL },
  },
  funcionesHeading: "Funciones",
  funcionesTitle: "US nomina covered from vista previa to payslip",
  funcionesIntro:
    "Schedulaa keeps the deductions accurate while giving finance equipos control over overrides and exceptions.",
  funciones: [
    {
      icon: "compliance",
      label: "Tax engine",
      title: "Federal withholding + supported-state finalizar",
      description:
        "Automatically apply federal income tax and FICA/Medicare by empleado work location. Full finalizar is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH; unsupported states remain available in raw vista previa with explicit warnings. Employer FUTA/SUTA is reported separately from empleado deductions.",
    },
    {
      icon: "retirement",
      label: "Enterprise Retirement (U.S. 401(k))",
      title: "401(k) and Roth 401(k) with wage bases and caps",
      description:
        "Calculate 401(k) and Roth 401(k) deferrals with annual caps, employer match limites, and applicable wage bases. Post-finalization exportaciones surface W-2 Box 12D codes so filings stay aligned with nomina data.",
    },
    {
      icon: "timeline",
      label: "Flujo de trabajo",
      title: "Multi-state previews",
      description:
        "Preview each empleado's deductions, edit wages and taxable benefits, rerun in seconds, and keep nomina audit/overwrite history when a period is re-finalized. Unsupported states can vista previa in raw mode but cannot finalizar.",
    },
    {
      icon: "document",
      label: "Exports",
      title: "Payslips and W-2 outputs",
      description:
        "Finalize nomina, export PDF, CSV, or Excel for accounting, and generate W-2 PDF and EFW2 files at year-end with prefilled data.",
      link: "/payroll/tools/w2",
      linkLabel: "Abrir el W-2 generador",
    },
  ],
  highlights: [
    {
      overline: "Preview",
      title: "Transparent deductions before you finalizar",
      body:
        "Ver como each tax and contribution will hit net pay, including federal brackets, FICA, and Medicare. Employer FUTA/SUTA is shown for reporting and does not reduce empleado net pay. Override earnings and recalc on demand.",
      points: [
        "Highlight overtime, tips, bonuses, and commissions for every empleado.",
        "Record employer 401(k) matches and insurance premiums next to nomina taxes.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa nomina vista previa showing US deductions",
      },
    },
    {
      overline: "Delivery",
      title: "Finalize, export, and notify empleados",
      body:
        "Once numbers look correct, finalizar the run, email payslips, and archive exportaciones for finance. Employees can log in to download past slips any time.",
      points: [
        "Generated slips stay available in the empleado portal.",
        "Accounting equipos can download CSV or Excel for journal entries.",
      ],
      links: [
        { label: "Ver portal del empleado", href: "/payslips" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
        alt: "Laptop with nomina export confirmation",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Como equipos finish a US pay cycle in Schedulaa",
  stepsIntro:
    "Bring in hours, vista previa withholding, and finalizar where supported without leaving the platform.",
  steps: [
    {
      title: "Import hours or salaries",
      description:
        "Pull data from programacion or upload spreadsheets. Enter bonuses, tips, commissions, and employer contributions.",
    },
    {
      title: "Preview deductions per jurisdiction",
      description:
        "Review federal withholding, FICA, Medicare, and employer FUTA/SUTA. Unsupported states run in raw vista previa mode with warnings. Adjust wages or overrides and rerun the vista previa.",
    },
    {
      title: "Finalize and export",
      description:
        "Finalize nomina in AK, FL, NV, SD, TX, WA, WY, TN, and NH; email PDF payslips, download CSV/Excel, and prepare W-2s at year end.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Limitations",
      title: "State soporte and local taxes",
      body:
        "Full U.S. finalizar is currently supported only in AK, FL, NV, SD, TX, WA, WY, TN, and NH. Other states remain vista previa-only (raw mode). Local/city taxes and special programs (for example WA PFML / WA Cares) are not automated and should be handled externally.",
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
  faqHeading: "Preguntas frecuentes",
  faqTitle: "US nomina preguntas",
  faqIntro: "Answers based on the capabilities shipping in Schedulaa today.",
  faq: [
    {
      question: "Do you handle local or city income taxes?",
      answer:
        "Not yet. Schedulaa calculates federal withholding plus FICA/Medicare, and reports employer FUTA/SUTA. Local and city levies should be tracked separately and uploaded if needed.",
    },
    {
      question: "Can I run multi-state nomina?",
      answer:
        "Yes for vista previa. You can vista previa nomina in all U.S. states. Finalize is currently supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH; unsupported states remain in raw vista previa mode.",
    },
    {
      question: "Como do empleados get their payslips?",
      answer:
        "Once you finalizar nomina you can email PDF payslips directly to recipients. The same documents appear in the Employee Payslip Portal for autoservicio downloads.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "* Full U.S. finalizar: AK, FL, NV, SD, TX, WA, WY, TN, NH. ** Other states: raw vista previa only (finalizar blocked). *** Employer FUTA/SUTA is reporting-only (not deducted from empleado net pay). **** Local/city taxes and WA PFML / WA Cares are handled externally.",
};

const roeConfig = {
  meta: {
    title: "ROE Generator (Record of Employment) – Canada | Schedulaa",
    description:
      "Generate canadiense ROEs with prefilled insurable hours and earnings, approval workflow, and PDF/XML exportaciones ready for Service Canada.",
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
        "Schedulaa automates ROEs with prefilled insurable earnings, approvals, and CRA-compliant PDF/XML exportaciones.",
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
        "Prefill insurable hours and earnings from nomina",
        "Approval workflow with audit trail",
        "PDF and XML export for Service Canada",
        "Department and empleado filters",
      ],
      url: `${BASE_URL}/payroll/tools/roe`,
    },
    payrollBreadcrumb("ROE generador", `${BASE_URL}/payroll/tools/roe`),
  ],
  hero: {
    badge: "Record of Employment",
    title: "ROE Generator with PDF and XML export",
    subtitle:
      "Prefill insurable hours and earnings from your latest pay runs, review in-app, and export CRA-compliant PDF and XML files.",
    bullets: [
      "Prefill ROEs using finalized nomina data.",
      "Route submissions through approve or reject workflow.",
      "Export PDF or XML packages for Service Canada.",
    ],
    primaryCta: { label: "Generate an ROE", href: REGISTER_URL },
    secondaryCta: { label: "Talk to compliance", href: CONTACT_URL },
  },
  funcionesHeading: "Capabilities",
  funcionesTitle: "Everything needed for compliant ROEs",
  funcionesIntro: "Schedulaa keeps your ROE workflow fast, auditable, and ready for Service Canada.",
  funciones: [
    {
      icon: "document",
      label: "Prefill",
      title: "Auto-complete with nomina data",
      description:
        "Pull insurable hours and earnings from the latest paystub for each empleado, including vacation pay and separation pay.",
    },
    {
      icon: "timeline",
      label: "Flujo de trabajo",
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
        "Schedulaa mantiene un registro detallado de cada ROE. Muestra quien preparo, aprobo o rechazo el formulario, con marcas de tiempo para revisiones de cumplimiento.",
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "ROE approval audit trail",
      },
    },
  ],
  stepsHeading: "Flujo de trabajo",
  stepsTitle: "Como the ROE generador works",
  steps: [
    {
      title: "Create from nomina history",
      description:
        "Choose an empleado and pull their latest pay runs to prefill insurable hours, earnings, and separation details.",
    },
    {
      title: "Review and approve",
      description:
        "Validate the data, capture comments, and approve or reject. All changes are logged for auditing.",
    },
    {
      title: "Export and submit",
      description:
        "Download PDF for records or XML for Service Canada upload. Batch exportaciones help you keep filings organized.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Related tools",
      title: "Need T4 slips too?",
      body:
        "Schedulaa links ROE data to year-end filings. Generate T4s from the same nomina data set and stay compliant without duplicating work.",
      links: [{ label: "Generate T4s", href: "/payroll/tools/t4" }],
    },
  ],
  faqHeading: "Preguntas frecuentes",
  faqTitle: "ROE preguntas",
  faq: [
    {
      question: "Which fields are prefilled automatically?",
      answer:
        "Schedulaa pulls insurable hours, earnings, vacation pay, and separation pay from the latest finalized pay runs so you only confirm details before exporting.",
    },
    {
      question: "Can I export XML for bulk upload?",
      answer:
        "Yes. The generador creates XML files ready for upload to the Service Canada portal, alongside PDF copies for internal records.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const t4Config = {
  meta: {
    title: "T4 Generator – Canada Year-End Slips (PDF & XML) | Schedulaa",
    description:
      "Generate CRA-compliant T4 slips with PDF, XML, and ZIP packages. Prefill boxes from nomina runs and batch deliver to empleados.",
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
        "Schedulaa fills T4 boxes from nomina data, renders PDF, builds CRA XML, and bundles slips in one workflow.",
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
        "Prefill CRA boxes from nomina",
        "Render PDF copies",
        "Generate CRA XML",
        "Batch ZIP download",
        "Delivery-ready slip packages",
      ],
      url: `${BASE_URL}/payroll/tools/t4`,
    },
    payrollBreadcrumb("T4 generador", `${BASE_URL}/payroll/tools/t4`),
  ],
  hero: {
    badge: "Year-end nomina",
    title: "T4 Generator with PDF and CRA XML exportaciones",
    subtitle:
      "Prefill CRA boxes from your Schedulaa nomina history, render PDF slips for empleados, and export CRA XML with one click.",
    bullets: [
      "Prefill T4 boxes from finalized nomina data.",
      "Render empleado-ready PDF slips.",
      "Export CRA XML and batch ZIP for filing.",
    ],
    primaryCta: { label: "Generate T4 slips", href: REGISTER_URL },
    secondaryCta: { label: "Get help with filings", href: CONTACT_URL },
  },
  funcionesHeading: "Capabilities",
  funcionesTitle: "Year-end slips without manual data entry",
  funciones: [
    {
      icon: "document",
      label: "Prefill",
      title: "Auto-populated CRA boxes",
      description:
        "Schedulaa maps nomina earnings, deductions, and taxable benefits into the correct CRA boxes so you spend time reviewing, not retyping.",
    },
    {
      icon: "compliance",
      label: "Cumplimiento",
      title: "XML ready for CRA upload",
      description:
        "Produce CRA XML files that align with the latest specifications. Keep archives organized with batch ZIP exportaciones.",
    },
    {
      icon: "timeline",
      label: "Flujo de trabajo",
      title: "Batch delivery",
      description:
        "Bundle PDF, XML, and CSV summaries in a single ZIP file for safe storage or delivery to your compliance equipo.",
    },
  ],
  highlights: [
    {
      overline: "Prefill accuracy",
      title: "CRA boxes filled straight from nomina",
      body:
        "Every T4 uses the same data you finalized in nomina. Review employment income, CPP/EI, taxable benefits, and pension adjustments before exporting.",
      image: {
        src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
        alt: "T4 generador showing CRA boxes",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "From nomina history to T4 packages",
  steps: [
    {
      title: "Select the tax year",
      description:
        "Choose the year you need slips for and let Schedulaa fetch the nomina history.",
    },
    {
      title: "Review prefilled data",
      description:
        "Confirm CRA boxes, employer information, and footnotes before exporting.",
    },
    {
      title: "Export PDF, XML, ZIP",
      description:
        "Download empleado PDFs, CRA XML, and a ZIP archive to share with stakeholders or upload to the CRA portal.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Connected tools",
      title: "ROE generador included",
      body: "Need Records of Employment as well? Switch to the ROE generador without leaving your workflow.",
      links: [{ label: "Abrir ROE generador", href: "/payroll/tools/roe" }],
    },
  ],
  faqHeading: "Preguntas frecuentes",
  faqTitle: "T4 generador preguntas",
  faq: [
    {
      question: "Do you generate CRA XML automatically?",
      answer:
        "Yes. The T4 generador produces XML files ready for CRA submission along with PDF copies for empleados.",
    },
    {
      question: "Can empleados receive their T4 online?",
      answer:
        "After you generate T4 slips, you can distribute the PDF copies through the payslip portal or your preferred delivery channel.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const w2Config = {
  meta: {
    title: "W-2 Generator – US Year-End (IRS Fillable PDF & EFW2) | Schedulaa",
    description:
      "Generate IRS W-2 forms with fillable multi-copy PDFs, flattened empleado copies, and EFW2 text files ready for SSA submission.",
    canonical: `${BASE_URL}/payroll/tools/w2`,
    og: {
      title: "W-2 Generator with IRS PDF and EFW2 Export | Schedulaa",
      description:
        "Prefill W-2 boxes from Schedulaa nomina data, render six-copy PDFs, flatten for e-delivery, and export EFW2 files.",
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
        "Prefill IRS W-2 boxes from nomina",
        "Render six-copy IRS PDF",
        "Flatten empleado copies",
        "Generate EFW2 text files",
        "Support for multi-state wages",
      ],
      url: `${BASE_URL}/payroll/tools/w2`,
    },
    payrollBreadcrumb("W-2 generador", `${BASE_URL}/payroll/tools/w2`),
  ],
  hero: {
    badge: "Year-end nomina",
    title: "W-2 Generator with IRS PDF and EFW2 export",
    subtitle:
      "Fill every W-2 box automatically, render the official six-copy PDF, flatten empleado copies, and generate EFW2 text in one workflow.",
    bullets: [
      "Prefill wages, withholding, and benefits from Schedulaa nomina.",
      "Render multi-copy IRS PDF forms and flattened empleado versions.",
      "Generate SSA EFW2 text files for electronic submission.",
    ],
    primaryCta: { label: "Generate W-2 forms", href: REGISTER_URL },
    secondaryCta: { label: "Request onboarding", href: CONTACT_URL },
  },
  funcionesHeading: "Capabilities",
  funcionesTitle: "Accurate W-2 filing without manual edits",
  funciones: [
    {
      icon: "document",
      label: "Prefill",
      title: "W-2 boxes filled from nomina history",
      description:
        "Schedulaa maps wages, withholding, tips, and deferred compensation right into the correct W-2 boxes.",
    },
    {
      icon: "compliance",
      label: "Cumplimiento",
      title: "IRS PDF and EFW2 outputs",
      description:
        "Generate the official six-copy W-2 PDF, flattened empleado copies for e-delivery, and EFW2 text files for SSA.",
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
        "Generate the EFW2 text file using your finalized nomina data. Keep employer and empleado copies synced without duplicate data entry.",
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        alt: "W-2 generador export options",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "From nomina to filed W-2s",
  steps: [
    {
      title: "Select tax year and empleados",
      description:
        "Pick the tax year, filter the empleados you need, and let Schedulaa prefill their data.",
    },
    {
      title: "Review and approve forms",
      description:
        "Confirm each box, adjust if necessary, and approve the batch prior to export.",
    },
    {
      title: "Export PDF and EFW2",
      description:
        "Download the six-copy PDF and flattened versions for empleados, plus the EFW2 file for SSA submission.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Connected tools",
      title: "Need live nomina runs?",
      body:
        "W-2 forms are built on the same nomina engine that handles federal, state, FICA, and Medicare calculations.",
      links: [{ label: "Run US nomina", href: "/payroll/usa" }],
    },
  ],
  faqHeading: "Preguntas frecuentes",
  faqTitle: "W-2 generador preguntas",
  faq: [
    {
      question: "Do you soporte multi-state wages?",
      answer:
        "Yes. W-2 exportaciones include per-state wage totals and codes so empleados with multiple work locations are supported.",
    },
    {
      question: "Can I deliver W-2s electronically?",
      answer:
        "Schedulaa renders flattened PDF copies you can distribute electronically alongside the empleado portal.",
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
        "Give staff a secure portal to download finalized payslips, track history, and stay compliant with delivery requirements.",
      image: `${BASE_URL}/images/payroll-payslip-portal.png`,
      url: `${BASE_URL}/payslips`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Employee Payslip Portal | Schedulaa",
      description:
        "Schedulaa powers a secure payslip portal so empleados can download PDF slips without emailing nomina.",
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
        "Email notificaciones on new slips",
        "Manager controls and auditing",
      ],
      url: `${BASE_URL}/payslips`,
    },
    payrollBreadcrumb("Payslip portal", `${BASE_URL}/payslips`),
  ],
  hero: {
    badge: "Employee experience",
    title: "Employee payslip portal with instant downloads",
    subtitle:
      "Give staff a secure, branded portal where they can view and download finalized payslips any time without emailing nomina.",
    bullets: [
      "Search and filter payslips by date or nomina run.",
      "Download PDF copies that match the finalized export.",
      "Control access with role-based permissions.",
    ],
    primaryCta: { label: "Enable the portal", href: REGISTER_URL },
    secondaryCta: { label: "Ver funciones de nomina", href: "/payroll/canada" },
  },
  funcionesHeading: "Highlights",
  funcionesTitle: "Keep empleados informed without extra tickets",
  funciones: [
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
        "Every payslip matches the finalized PDF generated during nomina. Employees can download on desktop or mobile instantly.",
    },
    {
      icon: "compliance",
      label: "Controls",
      title: "Role-based permissions and logging",
      description:
        "Managers control who can access the portal and review logs for auditing. Disable access when empleados leave.",
    },
  ],
  highlights: [
    {
      overline: "Experience",
      title: "Branded portal your equipo trusts",
      body:
        "Customize colors, logos, and links so the portal matches your company brand. Employees log in with their existing Schedulaa credentials.",
      image: {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa payslip portal dashboard",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Como the payslip portal works",
  steps: [
    {
      title: "Finalize nomina",
      description:
        "Ejecutar nomina in Schedulaa. Finalized PDF slips automatically sync to the payslip portal.",
    },
    {
      title: "Notify empleados",
      description:
        "Send emails from nomina or notify staff through your HR channels that new slips are ready.",
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
      title: "Works with canadiense and US nomina",
      body:
        "The payslip portal receives finalized slips from both canadiense and US nomina runs, so multinational equipos share the same experience.",
      links: [{ label: "Run a nomina vista previa", href: "/payroll/canada" }],
    },
  ],
  faqHeading: "Preguntas frecuentes",
  faqTitle: "Payslip portal preguntas",
  faq: [
    {
      question: "Do empleados need a separate login?",
      answer:
        "No. Employees use their existing Schedulaa login. Access is controlled by gerente permissions and can be revoked any time.",
    },
    {
      question: "Can we email payslips as well?",
      answer:
        "Yes. When you finalizar nomina you can email PDF copies to each empleado and still keep the portal enabled as a backup.",
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
