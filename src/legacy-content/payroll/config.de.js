const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";
const CONTACT_URL = "/contact";

const sharedCta = {
  overline: "Payroll + HR in one hub",
  title: "Payroll ausfuehren, issue slips, and publish portals in minutes",
  body: "Schedulaa unifies payroll calculations, compliance Exporte, and Mitarbeiter Self-Service tools so finance and operations can work from the same dashboard.",
  primary: { label: "Kostenlos starten", href: REGISTER_URL },
  secondary: { label: "Mit uns sprechen", href: CONTACT_URL },
};

const sharedSecondaryLinks = [
  { label: "Canada payroll", href: "/payroll/canada" },
  { label: "USA payroll", href: "/payroll/usa" },
  { label: "ROE Generator", href: "/payroll/tools/roe" },
  { label: "T4 Generator", href: "/payroll/tools/t4" },
  { label: "W-2 Generator", href: "/payroll/tools/w2" },
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
    { name: "Payroll", href: `${BASE_URL}/payroll` },
    ...(name && href ? [{ name, href }] : []),
  ]);

const overviewConfig = {
  meta: {
    title: "Payroll Software & Payslip Automation | Schedulaa",
    description:
      "Tie planung data, regional tax engines, and Mitarbeiter Self-Service portals into one payroll workspace. Support Canada, USA, and statement Exporte from day one.",
    canonical: `${BASE_URL}/payroll`,
    og: {
      title: "Unified Payroll & Planung Plattform | Schedulaa",
      description:
        "Payroll ausfuehren for Canada and the USA, generate ROE/T4/W-2 files, and publish payslips through the Mitarbeiter Portal.",
      image: `${BASE_URL}/images/payroll-overview.png`,
      url: `${BASE_URL}/payroll`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Schedulaa Payroll Overview",
      description: "Preview deductions, finalisieren slips, and keep Mitarbeiter informed across every region you Support.",
      image: `${BASE_URL}/images/payroll-overview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Schedulaa Payroll",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: `${BASE_URL}/payroll`,
      description:
        "Schedulaa unifies planung, HR, and payroll automation. Employees automatically use the correct Canadian or US compliance engine and can access payslips instantly.",
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
      { name: "Payroll", href: `${BASE_URL}/payroll` },
    ]),
  ],
  hero: {
    badge: "Planung + payroll + docs",
    title: "Payroll that stays in sync with operations",
    subtitle:
      "Pull real-time hours from planung and time tracking, apply CRA or IRS logic, layer in tips, bonus, commission, shift premiums, union dues, garnishments, and non-taxable reimbursements, then ship payslips plus ROE/T4/W-2 without leaving Schedulaa. U.S. full finalisieren is currently available in AK, FL, NV, SD, TX, WA, WY, TN, and NH; other U.S. states run in raw Vorschau mode.",
    image: "/images/marketing/payroll-manage.png",
    imageAlt: "Schedulaa payroll management Vorschau",
    images: [
      { src: "/images/marketing/payroll-manage.png", alt: "Payroll management" },
      { src: "/images/marketing/showcase/t4.png", alt: "T4 generation" },
      { src: "/images/marketing/showcase/roe.png", alt: "ROE workflow" },
      { src: "/images/marketing/showcase/w2-4d.png", alt: "W-2 generation" },
    ],
    bullets: [
      "Regional engines for Canada (CPP/EI/BPA, CPP/EI exemptions) and the USA (federal tax, FICA/Medicare, employer FUTA/SUTA reporting).",
      "Taxable extras like shift premium, tips, commission, bonus plus deductions like union dues and garnishments—net pay matches the Vorschau.",
      "Unsupported U.S. states remain available for raw Vorschau, with clear warnings and finalisieren blocked.",
      "ROE, T4 (with Box 40/44), W-2, and payslip Exporte backed by our public docs.",
      "Employee Self-Service Portal plus automated Benachrichtigungen.",
    ],
    primaryCta: { label: "Payroll-Arbeitsbereich ansehen", href: REGISTER_URL },
    secondaryCta: { label: "Dokumentation lesen", href: "/docs#payroll" },
    notice:
      "* U.S. full finalisieren: AK, FL, NV, SD, TX, WA, WY, TN, NH only. ** Other U.S. states are raw Vorschau only (finalisieren blocked). *** Local/city taxes and special programs (for example WA PFML / WA Cares) remain external.",
  },
  FunktionenHeading: "Plattform",
  FunktionenTitle: "One place for calculations, slips, and Mitarbeiter updates",
  FunktionenIntro:
    "Content used here is pulled from our Funktionen, Docs, and region-specific payroll pages so prospects see everything Google expects on /payroll.",
  Funktionen: [
    {
      icon: "timeline",
      label: "Arbeitsablauf",
      title: "Ops-connected pay runs",
      description:
        "Import actual hours, overtime, and tips from the planung suite before calculating deductions. The correct country engine applies automatically per Mitarbeiter. When a run moves to payroll.ready or payroll.finalized, Zapier events can notify finance, push Exporte, or trigger downstream workflows. Every Schritt is logged for finance and HR audits, including overwrite history when a period is re-finalized.",
      link: "/Funktionen",
      linkLabel: "Plattform-Rundgang",
    },
    {
      icon: "compliance",
      label: "Konformitaet",
      title: "Canada & USA tax engines",
      description:
        "Employees automatically run on Canadian CPP/EI/BPA logic (with CPP/EI exemptions) or U.S. federal tax + FICA/Medicare logic based on work location. U.S. full finalisieren is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH; unsupported states remain available as raw Vorschau with warnings. Both engines Support shift premium, tips, commission, bonus, union dues, garnishments, and non-taxable reimbursements.",
      link: "/payroll/canada",
      linkLabel: "Regionale Rechner ansehen",
    },
    {
      icon: "retirement",
      label: "Enterprise Retirement (U.S. 401(k))",
      title: "401(k) deferrals, caps, and W-2 alignment",
      description:
        "Automatic 401(k) and Roth 401(k) calculations with annual caps, employer match Grenzen, and applicable wage bases. Post-finalization Exporte surface W-2 Box 12D codes so year-end filings align with what payroll produced.",
      link: "/payroll/usa",
      linkLabel: "Review U.S. payroll Abdeckung",
    },
    {
      icon: "document",
      label: "Documents",
      title: "ROE, T4, W-2, and payslips",
      description:
        "Finalize payroll, email slips, post them in the payslip Portal, and export ROE/T4/W-2 files that align with CRA and IRS specs.",
      link: "/payslips",
      linkLabel: "Lohnzettel-Portal oeffnen",
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
        "US: Federal income tax, FICA/Medicare, employer FUTA/SUTA reporting, and W-2 Exporte. Full finalisieren is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH.",
        "Local/city/municipal payroll taxes remain external where they apply.",
      ],
    },
    {
      overline: "Documented flows",
      title: "Guided payroll that mirrors our Docs",
      body:
        "Preview → adjust → finalisieren → publish exactly as shown in the public docs. No hidden Schritte—new Manager can follow the same playbook used by finance.",
      points: [
        "Screenshots for every Vorschau Schritt live in the docs.",
        "Direct links to ROE/T4/W-2 (incl. Box 40/44) guides for deeper review.",
        "Inline help inside the app keeps Manager on the rails.",
      ],
    },
    {
      overline: "Employee experience",
      title: "Self-serve slips and Benachrichtigungen",
      body:
        "Branded Portal + alerts: Mitarbeiter download slips anytime; finance chooses email, SMS, or in-app Benachrichtigungen. Taxable vs non-taxable items are labeled clearly.",
      points: [
        "Branded Portal inherits your site colors automatically.",
        "Scoped access per Mitarbeiter keeps data secure.",
        "Shortcuts to /payroll/tools for region-specific Exporte.",
      ],
    },
  ],
  stepsHeading: "Wie payroll runs inside Schedulaa",
  stepsTitle: "From schedule to finalized slips in four Schritte",
  stepsIntro: "Local and city payroll taxes are handled externally.",
  steps: [
    {
      title: "Import hours & review context",
      description:
        "Pull hours from planung, sync bonuses, tips, commissions, or shift premium, and compare to historic pay runs before doing any math.",
    },
    {
      title: "Apply deductions with the right engine",
      description:
        "The correct country rules apply automatically by Mitarbeiter location. CRA or IRS logic, plus vacation pay, benefits, union dues, garnishments, and non-taxable reimbursements, are applied instantly.",
    },
    {
      title: "Finalize and export",
      description:
        "Generate payslips, CSV, or Excel summaries and push ROE/T4/W-2 files to the tools section for auditor review.",
    },
    {
      title: "Publish to the Portal",
      description:
        "Notify Mitarbeiter, post slips in the Portal, and keep everything searchable for future audits.",
    },
    {
      title: "Spot-check for year-end readiness",
      description:
        "Confirm union dues, taxable benefits, and exemptions are reflected correctly so T4/W-2 totals align with what finance expects at year-end.",
    },
    {
      title: "Share with finance & ops",
      description:
        "Hand off clean Exporte to accounting or BI, with the same gross, deduction, and net figures your Manager saw in Vorschau.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Coverage & Grenzen",
      title: "Current U.S. Support boundaries",
      body:
        "Full U.S. finalisieren is currently supported only in AK, FL, NV, SD, TX, WA, WY, TN, and NH. Other U.S. states are available in raw Vorschau mode with warnings and finalisieren blocked. Employer FUTA/SUTA is reported separately and does not reduce Mitarbeiter net pay.",
      points: [
        "* Full finalisieren states: AK, FL, NV, SD, TX, WA, WY, TN, NH",
        "** Unsupported states: Vorschau-only raw mode",
        "*** Local/city taxes + WA PFML/WA Cares: external handling",
      ],
    },
    {
      icon: "analytics",
      label: "Insights",
      title: "Finance and HR see the same truth",
      body:
        "Payroll history, deduction logic, and document Exporte are visible in analytics dashboards so leadership sees trends without another BI tool.",
      links: [
        { label: "Analytics-Rundgang oeffnen", href: "/marketing/analytics-dashboard" },
        { label: "Payroll-Hilfen lesen", href: "/docs#payroll" },
      ],
    },
    {
      icon: "schedule",
      label: "Payroll-ready time data",
      title: "Hours arrive with breaks, overtime, and audits attached",
      body:
        "Approved time entries land with unpaid breaks deducted, overtime and missed-break markers attached, and IP/UA metadata for audits. Finance Exporte CSV/PDF or syncs to accounting without spreadsheets.",
      points: [
        "Forced clock-out and bulk break template fixes are fully audited.",
        "OT/missed-break flags travel with each pay period.",
        "Safe Portal links keep Mitarbeiter on the right local domain.",
      ],
    },
  ],
  faqHeading: "Haeufige Fragen",
  faqTitle: "Payroll Uebersicht questions",
  faq: [
    {
      question: "Do you Support all U.S. states for finalisieren?",
      answer:
        "Not yet. Full finalisieren is currently supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH. Other U.S. states remain available as raw Vorschau with finalisieren blocked.",
    },
    {
      question: "Is /payroll different from the Canada or USA pages?",
      answer:
        "The Uebersicht introduces everything on one page for crawlers and prospects. It links directly to the Canada and USA calculators plus ROE/T4/W-2 tools for deeper regulation details.",
    },
    {
      question: "Does Google get blocked from payroll content?",
      answer:
        "No. robots.txt now allows /payroll and the sitemap lists every regional URL so crawlers reach them through HTML links.",
    },
    {
      question: "Do I need separate logins for the payslip Portal?",
      answer:
        "Employees reuse their Schedulaa credentials. Access is gated by role, and Manager can revoke permissions at any time.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: [
    { label: "Docs: payroll Vorschau", href: "/docs#payroll" },
    { label: "Vergleich: Schedulaa vs Gusto", href: "/compare/gusto" },
    { label: "Vergleich: Schedulaa vs ADP", href: "/compare/adp" },
    ...sharedSecondaryLinks,
  ],
  nextSteps: {
    overline: "Naechste Schritte",
    title: "Choose where to go next",
    description: "Keep exploring payroll—from pricing to calculators and customer-facing documentation.",
    links: [
      {
        label: "Preisplaene vergleichen",
        description: "Sehen Sie, wie payroll, planung, and marketing Funktionen line up.",
        href: "/pricing",
        cta: "Preise ansehen",
      },
      {
        label: "Kanadischen Payroll-Lauf starten",
        description: "Review CPP, EI, and provincial Abdeckung in detail.",
        href: "/payroll/canada",
        cta: "Canada payroll",
      },
      {
        label: "Dokumentation oeffnen",
        description: "Follow the payroll Vorschau flow Schritt by Schritt in the documentation.",
        href: "/docs#payroll",
        cta: "Dokumente lesen",
      },
      {
        label: "ROE/T4/W-2 Vorlagen herunterladen",
        description: "Jump straight into the payroll tools and final form Exporte.",
        href: "/payroll/tools/t4",
        cta: "Tools ansehen",
      },
    ],
  },
};

const canadaConfig = {
  meta: {
    title: "Canada Payroll Calculator & Software (CPP, EI, BPA) | Schedulaa",
    description:
      "Run Canadian payroll with CPP, EI, federal and provincial tax, vacation pay, bonuses, tips, and employer matches. Finalize payslips as PDF, CSV, or Excel and email Mitarbeiter automatically.",
    canonical: `${BASE_URL}/payroll/canada`,
    og: {
      title: "Canada Payroll Calculator for Small Businesses | Schedulaa",
      description:
        "Preview and finalisieren Canadian payroll with CPP, EI, provincial tax, bonuses, and tips. Export payslips, email staff, and provide a Self-Service Portal.",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
      url: `${BASE_URL}/payroll/canada`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Canada Payroll Calculator for Small Businesses | Schedulaa",
      description:
        "Automate Canadian payroll with CPP, EI, provincial tax, vacation pay, and Mitarbeiter portals in one platform.",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Schedulaa Canada Payroll",
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
        "Bonuses, tips, and commissions Support",
        "Payslip PDF, CSV, and Excel export",
        "Employee self-service payslip Portal",
      ],
      url: `${BASE_URL}/payroll/canada`,
      provider: {
        "@type": "Organization",
        name: "Schedulaa",
        url: BASE_URL,
      },
    },
    payrollBreadcrumb("Canada payroll", `${BASE_URL}/payroll/canada`),
  ],
  hero: {
    badge: "CPP, EI, BPA tracking",
    title: "Canada Payroll Calculator for Small Businesses",
    subtitle:
      "Calculate gross-to-net with CPP, EI, federal and provincial tax, vacation pay, bonuses, tips, and employer matches in one dashboard.",
    bullets: [
      "Preview deductions line by line before finalizing payroll.",
      "Automate BPA pro-rating, CPP/EI ceilings, and YTD breakouts.",
      "Export payslips as PDF, CSV, or Excel and email Mitarbeiter instantly.",
    ],
    primaryCta: { label: "Run Canadian payroll", href: REGISTER_URL },
    secondaryCta: { label: "Book a walkthrough", href: CONTACT_URL },
  },
  FunktionenHeading: "Funktionen",
  FunktionenTitle: "Everything Canadian payroll Teams expect",
  FunktionenIntro:
    "Schedulaa aligns with CRA guidance for CPP, EI, and federal/provincial tax brackets so you can trust every pay cycle.",
  Funktionen: [
    {
      icon: "compliance",
      label: "Konformitaet",
      title: "CPP, EI, and tax automation",
      description:
        "Calculate CPP, EI, and federal/provincial income tax with BPA pro-rating per Mitarbeiter. YTD ceilings and clawbacks are tracked automatically.",
    },
    {
      icon: "document",
      label: "Payslips",
      title: "Finalize and export slips",
      description:
        "Finalize payroll and export slips as PDF, CSV, or Excel. Email documents to each Mitarbeiter directly from the pay run.",
      link: "/payslips",
      linkLabel: "Anzeigen des payslip Portal",
    },
    {
      icon: "timeline",
      label: "Arbeitsablauf",
      title: "Preview, adjust, finalisieren",
      description:
        "Preview every deduction, edit overtime, bonuses, tips, commissions, and employer contributions, then finalisieren once amounts look right.",
    },
  ],
  highlights: [
    {
      overline: "Preview and finalisieren",
      title: "Line-item Vorschau with BPA and YTD context",
      body:
        "Sehen Sie, wie federal, provincial, CPP, and EI deductions apply before committing a pay run. Every Mitarbeiter view includes BPA usage, vacation pay, and net pay totals.",
      points: [
        "Override hours, rates, and taxable benefits on the fly.",
        "Break out employer contributions alongside Mitarbeiter deductions.",
        "Keep an audit trail of each recalculation before finalizing.",
      ],
      links: [
        { label: "View payroll workflow", href: "/payroll/usa" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa payroll Vorschau showing Canadian deductions",
      },
    },
    {
      overline: "Exports",
      title: "Deliver payslips and compliance files in one click",
      body:
        "Finalize a run, export slips as PDF, CSV, or Excel, and send them to staff instantly. Need year-end filings? Jump straight into T4 or ROE generation with prefilled data.",
      points: [
        "One-click email of finalized PDF slips to each Mitarbeiter.",
        "Batch downloads for accounting and year-end review.",
      ],
      links: [
        { label: "Generate T4 slips", href: "/payroll/tools/t4" },
        { label: "Create ROEs", href: "/payroll/tools/roe" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa payroll export options",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Run a Canadian pay cycle in three Schritte",
  stepsIntro:
    "Schedulaa connects planung, timesheets, and payroll data so finance Teams can close each pay period quickly.",
  steps: [
    {
      title: "Import hours or enter earnings",
      description:
        "Bring in hours from planung or upload CSV data. Add bonuses, tips, commissions, and employer contributions before calculating.",
    },
    {
      title: "Preview deductions and adjust",
      description:
        "Review CPP, EI, and tax amounts with BPA context. Override vacation pay, taxable benefits, or RRSP/401k matches as needed.",
    },
    {
      title: "Finalize and deliver payslips",
      description:
        "Lock the pay run, email PDF slips to Mitarbeiter, download CSV or Excel Exporte, and queue T4/ROE filings directly.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Employee access",
      title: "Self-serve payslip Portal",
      body:
        "Employees can sign in to Schedulaa and download their finalized PDF payslips any time. Filters make it easy to locate past periods without asking payroll staff.",
      links: [{ label: "Anzeigen des Portal", href: "/payslips" }],
    },
    {
      icon: "document",
      label: "Year-end filings",
      title: "T4 and ROE tooling included",
      body:
        "Generate CRA-compliant T4 slips and XML files, plus Records of Employment with PDF and XML Exporte. Prefilled data comes straight from the latest pay runs.",
      links: [
        { label: "Oeffnen des T4 Generator", href: "/payroll/tools/t4" },
        { label: "Oeffnen des ROE Generator", href: "/payroll/tools/roe" },
      ],
    },
  ],
  faqHeading: "Haeufige Fragen",
  faqTitle: "Canadian payroll questions",
  faqIntro: "Honest answers based on what Schedulaa already powers for Canadian Teams.",
  faq: [
    {
      question: "Do you Support Québec payroll?",
      answer:
        "Schedulaa's standard payroll flow covers every province except Québec. We maintain a dedicated Québec path to handle QPP and RQAP; contact us so we can review your setup and enable the correct configuration.",
    },
    {
      question: "Can Mitarbeiter download their own payslips?",
      answer:
        "Yes. Once you finalisieren payroll, Schedulaa can email PDF slips to Mitarbeiter and surfaces the same documents inside the Employee Payslip Portal for Self-Service downloads.",
    },
    {
      question: "Wie are CPP and EI ceilings handled?",
      answer:
        "Schedulaa tracks CPP and EI year-to-date totals per Mitarbeiter. When annual maximums are reached, deductions automatically stop and employer portions adjust accordingly.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "Note: Local provincial programs such as health premiums or workers' compensation remittances remain Manager-configured outside the core payroll engine.",
};

const usaConfig = {
  meta: {
    title: "USA Payroll Calculator (Federal, FICA/Medicare, Supported State Finalize) | Schedulaa",
    description:
      "Calculate US payroll with federal tax, FICA, Medicare, and employer FUTA/SUTA reporting. Full finalisieren is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH; other states run in raw Vorschau mode.",
    canonical: `${BASE_URL}/payroll/usa`,
    og: {
      title: "USA Payroll Calculator for Teams with Multi-State Workers | Schedulaa",
      description:
        "Preview US payroll in all states with federal tax, FICA, and Medicare. Finalize is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
      url: `${BASE_URL}/payroll/usa`,
    },
    twitter: {
      card: "summary_large_image",
      title: "USA Payroll Calculator for Teams with Multi-State Workers | Schedulaa",
      description:
        "Schedulaa automates US payroll calculations, payslip Exporte, and Mitarbeiter Self-Service downloads in one workflow.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Schedulaa USA Payroll",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "USD",
      },
      featureList: [
        "Federal income tax withholding",
        "Supported-state full finalisieren (AK, FL, NV, SD, TX, WA, WY, TN, NH)",
        "Raw Vorschau mode for unsupported states",
        "FICA and Medicare deductions",
        "Employer FUTA/SUTA reporting (not deducted from net pay)",
        "Bonuses, tips, and commissions Support",
        "Payslip PDF, CSV, and Excel export",
        "Employee self-service Portal",
      ],
      url: `${BASE_URL}/payroll/usa`,
      provider: {
        "@type": "Organization",
        name: "Schedulaa",
        url: BASE_URL,
      },
    },
    payrollBreadcrumb("USA payroll", `${BASE_URL}/payroll/usa`),
  ],
  hero: {
    badge: "Federal + FICA + employer unemployment",
    title: "USA Payroll Calculator with FICA and Medicare built in",
    subtitle:
      "Handle federal withholding, FICA, Medicare, bonuses, tips, commissions, and employer taxes in the same pay run. Full finalisieren is available in AK, FL, NV, SD, TX, WA, WY, TN, and NH; unsupported states stay in raw Vorschau mode.",
    bullets: [
      "Preview payroll in all U.S. states before finalisieren.",
      "Track employer FUTA/SUTA alongside Mitarbeiter withholding without reducing Mitarbeiter net pay.",
      "Unsupported states return raw mode warnings and finalisieren is blocked.",
      "Email PDF payslips and keep a downloadable archive for staff.",
    ],
    primaryCta: { label: "Run US payroll", href: REGISTER_URL },
    secondaryCta: { label: "Live-Demo ansehen", href: CONTACT_URL },
  },
  FunktionenHeading: "Funktionen",
  FunktionenTitle: "US payroll covered from Vorschau to payslip",
  FunktionenIntro:
    "Schedulaa keeps the deductions accurate while giving finance Teams control over overrides and exceptions.",
  Funktionen: [
    {
      icon: "compliance",
      label: "Tax engine",
      title: "Federal withholding + supported-state finalisieren",
      description:
        "Automatically apply federal income tax and FICA/Medicare by Mitarbeiter work location. Full finalisieren is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH; unsupported states remain available in raw Vorschau with explicit warnings. Employer FUTA/SUTA is reported separately from Mitarbeiter deductions.",
    },
    {
      icon: "retirement",
      label: "Enterprise Retirement (U.S. 401(k))",
      title: "401(k) and Roth 401(k) with wage bases and caps",
      description:
        "Calculate 401(k) and Roth 401(k) deferrals with annual caps, employer match Grenzen, and applicable wage bases. Post-finalization Exporte surface W-2 Box 12D codes so filings stay aligned with payroll data.",
    },
    {
      icon: "timeline",
      label: "Arbeitsablauf",
      title: "Multi-state previews",
      description:
        "Preview each Mitarbeiter's deductions, edit wages and taxable benefits, rerun in seconds, and keep payroll audit/overwrite history when a period is re-finalized. Unsupported states can Vorschau in raw mode but cannot finalisieren.",
    },
    {
      icon: "document",
      label: "Exports",
      title: "Payslips and W-2 outputs",
      description:
        "Finalize payroll, export PDF, CSV, or Excel for accounting, and generate W-2 PDF and EFW2 files at year-end with prefilled data.",
      link: "/payroll/tools/w2",
      linkLabel: "Oeffnen des W-2 Generator",
    },
  ],
  highlights: [
    {
      overline: "Preview",
      title: "Transparent deductions before you finalisieren",
      body:
        "Sehen Sie, wie each tax and contribution will hit net pay, including federal brackets, FICA, and Medicare. Employer FUTA/SUTA is shown for reporting and does not reduce Mitarbeiter net pay. Override earnings and recalc on demand.",
      points: [
        "Highlight overtime, tips, bonuses, and commissions for every Mitarbeiter.",
        "Record employer 401(k) matches and insurance premiums next to payroll taxes.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa payroll Vorschau showing US deductions",
      },
    },
    {
      overline: "Delivery",
      title: "Finalize, export, and notify Mitarbeiter",
      body:
        "Once numbers look correct, finalisieren the run, email payslips, and archive Exporte for finance. Employees can log in to download past slips any time.",
      points: [
        "Generated slips stay available in the Mitarbeiter Portal.",
        "Accounting Teams can download CSV or Excel for journal entries.",
      ],
      links: [
        { label: "Mitarbeiter-Portal ansehen", href: "/payslips" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
        alt: "Laptop with payroll export confirmation",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Wie Teams finish a US pay cycle in Schedulaa",
  stepsIntro:
    "Bring in hours, Vorschau withholding, and finalisieren where supported without leaving the platform.",
  steps: [
    {
      title: "Import hours or salaries",
      description:
        "Pull data from planung or upload spreadsheets. Enter bonuses, tips, commissions, and employer contributions.",
    },
    {
      title: "Preview deductions per jurisdiction",
      description:
        "Review federal withholding, FICA, Medicare, and employer FUTA/SUTA. Unsupported states run in raw Vorschau mode with warnings. Adjust wages or overrides and rerun the Vorschau.",
    },
    {
      title: "Finalize and export",
      description:
        "Finalize payroll in AK, FL, NV, SD, TX, WA, WY, TN, and NH; email PDF payslips, download CSV/Excel, and prepare W-2s at year end.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Limitations",
      title: "State Support and local taxes",
      body:
        "Full U.S. finalisieren is currently supported only in AK, FL, NV, SD, TX, WA, WY, TN, and NH. Other states remain Vorschau-only (raw mode). Local/city taxes and special programs (for example WA PFML / WA Cares) are not automated and should be handled externally.",
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
  faqHeading: "Haeufige Fragen",
  faqTitle: "US payroll questions",
  faqIntro: "Answers based on the capabilities shipping in Schedulaa today.",
  faq: [
    {
      question: "Do you handle local or city income taxes?",
      answer:
        "Not yet. Schedulaa calculates federal withholding plus FICA/Medicare, and reports employer FUTA/SUTA. Local and city levies should be tracked separately and uploaded if needed.",
    },
    {
      question: "Can I run multi-state payroll?",
      answer:
        "Yes for Vorschau. You can Vorschau payroll in all U.S. states. Finalize is currently supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH; unsupported states remain in raw Vorschau mode.",
    },
    {
      question: "Wie do Mitarbeiter get their payslips?",
      answer:
        "Once you finalisieren payroll you can email PDF payslips directly to recipients. The same documents appear in the Employee Payslip Portal for Self-Service downloads.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "* Full U.S. finalisieren: AK, FL, NV, SD, TX, WA, WY, TN, NH. ** Other states: raw Vorschau only (finalisieren blocked). *** Employer FUTA/SUTA is reporting-only (not deducted from Mitarbeiter net pay). **** Local/city taxes and WA PFML / WA Cares are handled externally.",
};

const roeConfig = {
  meta: {
    title: "ROE Generator (Record of Employment) – Canada | Schedulaa",
    description:
      "Generate Canadian ROEs with prefilled insurable hours and earnings, approval workflow, and PDF/XML Exporte ready for Service Canada.",
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
        "Schedulaa automates ROEs with prefilled insurable earnings, approvals, and CRA-compliant PDF/XML Exporte.",
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
        "Prefill insurable hours and earnings from payroll",
        "Approval workflow with audit trail",
        "PDF and XML export for Service Canada",
        "Department and Mitarbeiter filters",
      ],
      url: `${BASE_URL}/payroll/tools/roe`,
    },
    payrollBreadcrumb("ROE Generator", `${BASE_URL}/payroll/tools/roe`),
  ],
  hero: {
    badge: "Record of Employment",
    title: "ROE Generator with PDF and XML export",
    subtitle:
      "Prefill insurable hours and earnings from your latest pay runs, review in-app, and export CRA-compliant PDF and XML files.",
    bullets: [
      "Prefill ROEs using finalized payroll data.",
      "Route submissions through approve or reject workflow.",
      "Export PDF or XML packages for Service Canada.",
    ],
    primaryCta: { label: "Generate an ROE", href: REGISTER_URL },
    secondaryCta: { label: "Talk to compliance", href: CONTACT_URL },
  },
  FunktionenHeading: "Capabilities",
  FunktionenTitle: "Everything needed for compliant ROEs",
  FunktionenIntro: "Schedulaa keeps your ROE workflow fast, auditable, and ready for Service Canada.",
  Funktionen: [
    {
      icon: "document",
      label: "Prefill",
      title: "Auto-complete with payroll data",
      description:
        "Pull insurable hours and earnings from the latest paystub for each Mitarbeiter, including vacation pay and separation pay.",
    },
    {
      icon: "timeline",
      label: "Arbeitsablauf",
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
        "Schedulaa fuehrt ein detailliertes Protokoll fuer jedes ROE. Es zeigt, wer das Formular vorbereitet, genehmigt oder abgelehnt hat, mit Zeitstempeln fuer Konformitaetspruefungen.",
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "ROE approval audit trail",
      },
    },
  ],
  stepsHeading: "Arbeitsablauf",
  stepsTitle: "Wie the ROE Generator works",
  steps: [
    {
      title: "Create from payroll history",
      description:
        "Choose an Mitarbeiter and pull their latest pay runs to prefill insurable hours, earnings, and separation details.",
    },
    {
      title: "Review and approve",
      description:
        "Validate the data, capture comments, and approve or reject. All changes are logged for auditing.",
    },
    {
      title: "Export and submit",
      description:
        "Download PDF for records or XML for Service Canada upload. Batch Exporte help you keep filings organized.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Related tools",
      title: "Need T4 slips too?",
      body:
        "Schedulaa links ROE data to year-end filings. Generate T4s from the same payroll data set and stay compliant without duplicating work.",
      links: [{ label: "Generate T4s", href: "/payroll/tools/t4" }],
    },
  ],
  faqHeading: "Haeufige Fragen",
  faqTitle: "ROE questions",
  faq: [
    {
      question: "Which fields are prefilled automatically?",
      answer:
        "Schedulaa pulls insurable hours, earnings, vacation pay, and separation pay from the latest finalized pay runs so you only confirm details before exporting.",
    },
    {
      question: "Can I export XML for bulk upload?",
      answer:
        "Yes. The Generator creates XML files ready for upload to the Service Canada Portal, alongside PDF copies for internal records.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const t4Config = {
  meta: {
    title: "T4 Generator – Canada Year-End Slips (PDF & XML) | Schedulaa",
    description:
      "Generate CRA-compliant T4 slips with PDF, XML, and ZIP packages. Prefill boxes from payroll runs and batch deliver to Mitarbeiter.",
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
        "Schedulaa fills T4 boxes from payroll data, renders PDF, builds CRA XML, and bundles slips in one workflow.",
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
        "Prefill CRA boxes from payroll",
        "Render PDF copies",
        "Generate CRA XML",
        "Batch ZIP download",
        "Delivery-ready slip packages",
      ],
      url: `${BASE_URL}/payroll/tools/t4`,
    },
    payrollBreadcrumb("T4 Generator", `${BASE_URL}/payroll/tools/t4`),
  ],
  hero: {
    badge: "Year-end payroll",
    title: "T4 Generator with PDF and CRA XML Exporte",
    subtitle:
      "Prefill CRA boxes from your Schedulaa payroll history, render PDF slips for Mitarbeiter, and export CRA XML with one click.",
    bullets: [
      "Prefill T4 boxes from finalized payroll data.",
      "Render Mitarbeiter-ready PDF slips.",
      "Export CRA XML and batch ZIP for filing.",
    ],
    primaryCta: { label: "Generate T4 slips", href: REGISTER_URL },
    secondaryCta: { label: "Get help with filings", href: CONTACT_URL },
  },
  FunktionenHeading: "Capabilities",
  FunktionenTitle: "Year-end slips without manual data entry",
  Funktionen: [
    {
      icon: "document",
      label: "Prefill",
      title: "Auto-populated CRA boxes",
      description:
        "Schedulaa maps payroll earnings, deductions, and taxable benefits into the correct CRA boxes so you spend time reviewing, not retyping.",
    },
    {
      icon: "compliance",
      label: "Konformitaet",
      title: "XML ready for CRA upload",
      description:
        "Produce CRA XML files that align with the latest specifications. Keep archives organized with batch ZIP Exporte.",
    },
    {
      icon: "timeline",
      label: "Arbeitsablauf",
      title: "Batch delivery",
      description:
        "Bundle PDF, XML, and CSV summaries in a single ZIP file for safe storage or delivery to your compliance Team.",
    },
  ],
  highlights: [
    {
      overline: "Prefill accuracy",
      title: "CRA boxes filled straight from payroll",
      body:
        "Every T4 uses the same data you finalized in payroll. Review employment income, CPP/EI, taxable benefits, and pension adjustments before exporting.",
      image: {
        src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
        alt: "T4 Generator showing CRA boxes",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "From payroll history to T4 packages",
  steps: [
    {
      title: "Select the tax year",
      description:
        "Choose the year you need slips for and let Schedulaa fetch the payroll history.",
    },
    {
      title: "Review prefilled data",
      description:
        "Confirm CRA boxes, employer information, and footnotes before exporting.",
    },
    {
      title: "Export PDF, XML, ZIP",
      description:
        "Download Mitarbeiter PDFs, CRA XML, and a ZIP archive to share with stakeholders or upload to the CRA Portal.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Connected tools",
      title: "ROE Generator included",
      body: "Need Records of Employment as well? Switch to the ROE Generator without leaving your workflow.",
      links: [{ label: "ROE oeffnen Generator", href: "/payroll/tools/roe" }],
    },
  ],
  faqHeading: "Haeufige Fragen",
  faqTitle: "T4 Generator questions",
  faq: [
    {
      question: "Do you generate CRA XML automatically?",
      answer:
        "Yes. The T4 Generator produces XML files ready for CRA submission along with PDF copies for Mitarbeiter.",
    },
    {
      question: "Can Mitarbeiter receive their T4 online?",
      answer:
        "After you generate T4 slips, you can distribute the PDF copies through the payslip Portal or your preferred delivery channel.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const w2Config = {
  meta: {
    title: "W-2 Generator – US Year-End (IRS Fillable PDF & EFW2) | Schedulaa",
    description:
      "Generate IRS W-2 forms with fillable multi-copy PDFs, flattened Mitarbeiter copies, and EFW2 text files ready for SSA submission.",
    canonical: `${BASE_URL}/payroll/tools/w2`,
    og: {
      title: "W-2 Generator with IRS PDF and EFW2 Export | Schedulaa",
      description:
        "Prefill W-2 boxes from Schedulaa payroll data, render six-copy PDFs, flatten for e-delivery, and export EFW2 files.",
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
        "Prefill IRS W-2 boxes from payroll",
        "Render six-copy IRS PDF",
        "Flatten Mitarbeiter copies",
        "Generate EFW2 text files",
        "Support for multi-state wages",
      ],
      url: `${BASE_URL}/payroll/tools/w2`,
    },
    payrollBreadcrumb("W-2 Generator", `${BASE_URL}/payroll/tools/w2`),
  ],
  hero: {
    badge: "Year-end payroll",
    title: "W-2 Generator with IRS PDF and EFW2 export",
    subtitle:
      "Fill every W-2 box automatically, render the official six-copy PDF, flatten Mitarbeiter copies, and generate EFW2 text in one workflow.",
    bullets: [
      "Prefill wages, withholding, and benefits from Schedulaa payroll.",
      "Render multi-copy IRS PDF forms and flattened Mitarbeiter versions.",
      "Generate SSA EFW2 text files for electronic submission.",
    ],
    primaryCta: { label: "Generate W-2 forms", href: REGISTER_URL },
    secondaryCta: { label: "Request onboarding", href: CONTACT_URL },
  },
  FunktionenHeading: "Capabilities",
  FunktionenTitle: "Accurate W-2 filing without manual edits",
  Funktionen: [
    {
      icon: "document",
      label: "Prefill",
      title: "W-2 boxes filled from payroll history",
      description:
        "Schedulaa maps wages, withholding, tips, and deferred compensation right into the correct W-2 boxes.",
    },
    {
      icon: "compliance",
      label: "Konformitaet",
      title: "IRS PDF and EFW2 outputs",
      description:
        "Generate the official six-copy W-2 PDF, flattened Mitarbeiter copies for e-delivery, and EFW2 text files for SSA.",
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
        "Generate the EFW2 text file using your finalized payroll data. Keep employer and Mitarbeiter copies synced without duplicate data entry.",
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        alt: "W-2 Generator export options",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "From payroll to filed W-2s",
  steps: [
    {
      title: "Select tax year and Mitarbeiter",
      description:
        "Pick the tax year, filter the Mitarbeiter you need, and let Schedulaa prefill their data.",
    },
    {
      title: "Review and approve forms",
      description:
        "Confirm each box, adjust if necessary, and approve the batch prior to export.",
    },
    {
      title: "Export PDF and EFW2",
      description:
        "Download the six-copy PDF and flattened versions for Mitarbeiter, plus the EFW2 file for SSA submission.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Connected tools",
      title: "Need live payroll runs?",
      body:
        "W-2 forms are built on the same payroll engine that handles federal, state, FICA, and Medicare calculations.",
      links: [{ label: "Run US payroll", href: "/payroll/usa" }],
    },
  ],
  faqHeading: "Haeufige Fragen",
  faqTitle: "W-2 Generator questions",
  faq: [
    {
      question: "Do you Support multi-state wages?",
      answer:
        "Yes. W-2 Exporte include per-state wage totals and codes so Mitarbeiter with multiple work locations are supported.",
    },
    {
      question: "Can I deliver W-2s electronically?",
      answer:
        "Schedulaa renders flattened PDF copies you can distribute electronically alongside the Mitarbeiter Portal.",
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
        "Give staff a secure Portal to download finalized payslips, track history, and stay compliant with delivery requirements.",
      image: `${BASE_URL}/images/payroll-payslip-portal.png`,
      url: `${BASE_URL}/payslips`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Employee Payslip Portal | Schedulaa",
      description:
        "Schedulaa powers a secure payslip Portal so Mitarbeiter can download PDF slips without emailing payroll.",
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
        "Email Benachrichtigungen on new slips",
        "Manager controls and auditing",
      ],
      url: `${BASE_URL}/payslips`,
    },
    payrollBreadcrumb("Payslip Portal", `${BASE_URL}/payslips`),
  ],
  hero: {
    badge: "Employee experience",
    title: "Employee payslip Portal with instant downloads",
    subtitle:
      "Give staff a secure, branded Portal where they can view and download finalized payslips any time without emailing payroll.",
    bullets: [
      "Search and filter payslips by date or payroll run.",
      "Download PDF copies that match the finalized export.",
      "Control access with role-based permissions.",
    ],
    primaryCta: { label: "Enable the Portal", href: REGISTER_URL },
    secondaryCta: { label: "Payroll-Funktionen ansehen", href: "/payroll/canada" },
  },
  FunktionenHeading: "Highlights",
  FunktionenTitle: "Keep Mitarbeiter informed without extra tickets",
  Funktionen: [
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
        "Every payslip matches the finalized PDF generated during payroll. Employees can download on desktop or mobile instantly.",
    },
    {
      icon: "compliance",
      label: "Controls",
      title: "Role-based permissions and logging",
      description:
        "Managers control who can access the Portal and review logs for auditing. Disable access when Mitarbeiter leave.",
    },
  ],
  highlights: [
    {
      overline: "Experience",
      title: "Branded Portal your Team trusts",
      body:
        "Customize colors, logos, and links so the Portal matches your company brand. Employees log in with their existing Schedulaa credentials.",
      image: {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa payslip Portal dashboard",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Wie the payslip Portal works",
  steps: [
    {
      title: "Finalize payroll",
      description:
        "Payroll ausfuehren in Schedulaa. Finalized PDF slips automatically sync to the payslip Portal.",
    },
    {
      title: "Notify Mitarbeiter",
      description:
        "Send emails from payroll or notify staff through your HR channels that new slips are ready.",
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
      title: "Works with Canadian and US payroll",
      body:
        "The payslip Portal receives finalized slips from both Canadian and US payroll runs, so multinational Teams share the same experience.",
      links: [{ label: "Run a payroll Vorschau", href: "/payroll/canada" }],
    },
  ],
  faqHeading: "Haeufige Fragen",
  faqTitle: "Payslip Portal questions",
  faq: [
    {
      question: "Do Mitarbeiter need a separate login?",
      answer:
        "No. Employees use their existing Schedulaa login. Access is controlled by Manager permissions and can be revoked any time.",
    },
    {
      question: "Can we email payslips as well?",
      answer:
        "Yes. When you finalisieren payroll you can email PDF copies to each Mitarbeiter and still keep the Portal enabled as a backup.",
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
