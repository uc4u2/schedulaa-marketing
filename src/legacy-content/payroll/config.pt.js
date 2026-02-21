const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";
const CONTACT_URL = "/contact";

const sharedCta = {
  overline: "Folha + HR in one hub",
  title: "Executar folha, issue slips, and publish portals in minutes",
  body: "Schedulaa unifies folha calculations, compliance exportacoes, and funcionario autoatendimento tools so finance and operations can work from the same dashboard.",
  primary: { label: "Comece gratis", href: REGISTER_URL },
  secondary: { label: "Fale conosco", href: CONTACT_URL },
};

const sharedSecondaryLinks = [
  { label: "Canada folha", href: "/payroll/canada" },
  { label: "USA folha", href: "/payroll/usa" },
  { label: "ROE gerador", href: "/payroll/tools/roe" },
  { label: "T4 gerador", href: "/payroll/tools/t4" },
  { label: "W-2 gerador", href: "/payroll/tools/w2" },
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
    { name: "Folha", href: `${BASE_URL}/payroll` },
    ...(name && href ? [{ name, href }] : []),
  ]);

const overviewConfig = {
  meta: {
    title: "Folha Software & Payslip Automation | Schedulaa",
    description:
      "Tie agendamento data, regional tax engines, and funcionario autoatendimento portals into one folha workspace. Support Canada, USA, and statement exportacoes from day one.",
    canonical: `${BASE_URL}/payroll`,
    og: {
      title: "Unified Folha & Agendamento Plataforma | Schedulaa",
      description:
        "Executar folha for Canada and the USA, generate ROE/T4/W-2 files, and publish payslips through the funcionario portal.",
      image: `${BASE_URL}/images/payroll-overview.png`,
      url: `${BASE_URL}/payroll`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Schedulaa Folha Overview",
      description: "Preview deductions, finalizar slips, and keep funcionarios informed across every region you suporte.",
      image: `${BASE_URL}/images/payroll-overview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Schedulaa Folha",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: `${BASE_URL}/payroll`,
      description:
        "Schedulaa unifies agendamento, HR, and folha automation. Employees automatically use the correct Canadian or US compliance engine and can access payslips instantly.",
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
      { name: "Folha", href: `${BASE_URL}/payroll` },
    ]),
  ],
  hero: {
    badge: "Agendamento + folha + docs",
    title: "Folha that stays in sync with operations",
    subtitle:
      "Pull real-time hours from agendamento and time tracking, apply CRA or IRS logic, layer in tips, bonus, commission, shift premiums, union dues, garnishments, and non-taxable reimbursements, then ship payslips plus ROE/T4/W-2 without leaving Schedulaa. U.S. full finalizar is currently available in AK, FL, NV, SD, TX, WA, WY, TN, and NH; other U.S. states run in raw pre-visualizacao mode.",
    image: "/images/marketing/payroll-manage.png",
    imageAlt: "Schedulaa folha management pre-visualizacao",
    images: [
      { src: "/images/marketing/payroll-manage.png", alt: "Folha management" },
      { src: "/images/marketing/showcase/t4.png", alt: "T4 generation" },
      { src: "/images/marketing/showcase/roe.png", alt: "ROE workflow" },
      { src: "/images/marketing/showcase/w2-4d.png", alt: "W-2 generation" },
    ],
    bullets: [
      "Regional engines for Canada (CPP/EI/BPA, CPP/EI exemptions) and the USA (federal tax, FICA/Medicare, employer FUTA/SUTA reporting).",
      "Taxable extras like shift premium, tips, commission, bonus plus deductions like union dues and garnishments—net pay matches the pre-visualizacao.",
      "Unsupported U.S. states remain available for raw pre-visualizacao, with clear warnings and finalizar blocked.",
      "ROE, T4 (with Box 40/44), W-2, and payslip exportacoes backed by our public docs.",
      "Employee autoatendimento portal plus automated notificacoes.",
    ],
    primaryCta: { label: "Ver espaco de folha", href: REGISTER_URL },
    secondaryCta: { label: "Leia a documentacao", href: "/docs#payroll" },
    notice:
      "* U.S. full finalizar: AK, FL, NV, SD, TX, WA, WY, TN, NH only. ** Other U.S. states are raw pre-visualizacao only (finalizar blocked). *** Local/city taxes and special programs (for example WA PFML / WA Cares) remain external.",
  },
  recursosHeading: "Plataforma",
  recursosTitle: "One place for calculations, slips, and funcionario updates",
  recursosIntro:
    "Content used here is pulled from our Recursos, Docs, and region-specific folha pages so prospects see everything Google expects on /folha.",
  recursos: [
    {
      icon: "timeline",
      label: "Fluxo de trabalho",
      title: "Ops-connected pay runs",
      description:
        "Import actual hours, overtime, and tips from the agendamento suite before calculating deductions. The correct country engine applies automatically per funcionario. When a run moves to folha.ready or folha.finalized, Zapier events can notify finance, push exportacoes, or trigger downstream workflows. Every passo is logged for finance and HR audits, including overwrite history when a period is re-finalized.",
      link: "/recursos",
      linkLabel: "Roteiro da plataforma",
    },
    {
      icon: "compliance",
      label: "Conformidade",
      title: "Canada & USA tax engines",
      description:
        "Employees automatically run on Canadian CPP/EI/BPA logic (with CPP/EI exemptions) or U.S. federal tax + FICA/Medicare logic based on work location. U.S. full finalizar is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH; unsupported states remain available as raw pre-visualizacao with warnings. Both engines suporte shift premium, tips, commission, bonus, union dues, garnishments, and non-taxable reimbursements.",
      link: "/payroll/canada",
      linkLabel: "Ver calculadoras regionais",
    },
    {
      icon: "retirement",
      label: "Enterprise Retirement (U.S. 401(k))",
      title: "401(k) deferrals, caps, and W-2 alignment",
      description:
        "Automatic 401(k) and Roth 401(k) calculations with annual caps, employer match limites, and applicable wage bases. Post-finalization exportacoes surface W-2 Box 12D codes so year-end filings align with what folha produced.",
      link: "/payroll/usa",
      linkLabel: "Review U.S. folha cobertura",
    },
    {
      icon: "document",
      label: "Documents",
      title: "ROE, T4, W-2, and payslips",
      description:
        "Finalize folha, email slips, post them in the payslip portal, and export ROE/T4/W-2 files that align with CRA and IRS specs.",
      link: "/payslips",
      linkLabel: "Abrir portal de holerites",
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
        "US: Federal income tax, FICA/Medicare, employer FUTA/SUTA reporting, and W-2 exportacoes. Full finalizar is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH.",
        "Local/city/municipal folha taxes remain external where they apply.",
      ],
    },
    {
      overline: "Documented flows",
      title: "Guided folha that mirrors our Docs",
      body:
        "Preview → adjust → finalizar → publish exactly as shown in the public docs. No hidden passos—new gerentes can follow the same playbook used by finance.",
      points: [
        "Screenshots for every pre-visualizacao passo live in the docs.",
        "Direct links to ROE/T4/W-2 (incl. Box 40/44) guides for deeper review.",
        "Inline help inside the app keeps gerentes on the rails.",
      ],
    },
    {
      overline: "Employee experience",
      title: "Self-serve slips and notificacoes",
      body:
        "Branded portal + alerts: funcionarios download slips anytime; finance chooses email, SMS, or in-app notificacoes. Taxable vs non-taxable items are labeled clearly.",
      points: [
        "Branded portal inherits your site colors automatically.",
        "Scoped access per funcionario keeps data secure.",
        "Shortcuts to /folha/tools for region-specific exportacoes.",
      ],
    },
  ],
  stepsHeading: "Como folha runs inside Schedulaa",
  stepsTitle: "From schedule to finalized slips in four passos",
  stepsIntro: "Local and city folha taxes are handled externally.",
  steps: [
    {
      title: "Import hours & review context",
      description:
        "Pull hours from agendamento, sync bonuses, tips, commissions, or shift premium, and compare to historic pay runs before doing any math.",
    },
    {
      title: "Apply deductions with the right engine",
      description:
        "The correct country rules apply automatically by funcionario location. CRA or IRS logic, plus vacation pay, benefits, union dues, garnishments, and non-taxable reimbursements, are applied instantly.",
    },
    {
      title: "Finalize and export",
      description:
        "Generate payslips, CSV, or Excel summaries and push ROE/T4/W-2 files to the tools section for auditor review.",
    },
    {
      title: "Publish to the portal",
      description:
        "Notify funcionarios, post slips in the portal, and keep everything searchable for future audits.",
    },
    {
      title: "Spot-check for year-end readiness",
      description:
        "Confirm union dues, taxable benefits, and exemptions are reflected correctly so T4/W-2 totals align with what finance expects at year-end.",
    },
    {
      title: "Share with finance & ops",
      description:
        "Hand off clean exportacoes to accounting or BI, with the same gross, deduction, and net figures your gerentes saw in pre-visualizacao.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Coverage & limites",
      title: "Current U.S. suporte boundaries",
      body:
        "Full U.S. finalizar is currently supported only in AK, FL, NV, SD, TX, WA, WY, TN, and NH. Other U.S. states are available in raw pre-visualizacao mode with warnings and finalizar blocked. Employer FUTA/SUTA is reported separately and does not reduce funcionario net pay.",
      points: [
        "* Full finalizar states: AK, FL, NV, SD, TX, WA, WY, TN, NH",
        "** Unsupported states: pre-visualizacao-only raw mode",
        "*** Local/city taxes + WA PFML/WA Cares: external handling",
      ],
    },
    {
      icon: "analytics",
      label: "Insights",
      title: "Finance and HR see the same truth",
      body:
        "Folha history, deduction logic, and document exportacoes are visible in analytics dashboards so leadership sees trends without another BI tool.",
      links: [
        { label: "Abrir tour de analitica", href: "/marketing/analytics-dashboard" },
        { label: "Ler guias de folha", href: "/docs#payroll" },
      ],
    },
    {
      icon: "schedule",
      label: "Folha-ready time data",
      title: "Hours arrive with breaks, overtime, and audits attached",
      body:
        "Approved time entries land with unpaid breaks deducted, overtime and missed-break markers attached, and IP/UA metadata for audits. Finance exportacoes CSV/PDF or syncs to accounting without spreadsheets.",
      points: [
        "Forced clock-out and bulk break template fixes are fully audited.",
        "OT/missed-break flags travel with each pay period.",
        "Safe portal links keep funcionarios on the right local domain.",
      ],
    },
  ],
  faqHeading: "Perguntas frequentes",
  faqTitle: "Folha visao geral perguntas",
  faq: [
    {
      question: "Do you suporte all U.S. states for finalizar?",
      answer:
        "Not yet. Full finalizar is currently supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH. Other U.S. states remain available as raw pre-visualizacao with finalizar blocked.",
    },
    {
      question: "Is /folha different from the Canada or USA pages?",
      answer:
        "The visao geral introduces everything on one page for crawlers and prospects. It links directly to the Canada and USA calculators plus ROE/T4/W-2 tools for deeper regulation details.",
    },
    {
      question: "Does Google get blocked from folha content?",
      answer:
        "No. robots.txt now allows /folha and the sitemap lists every regional URL so crawlers reach them through HTML links.",
    },
    {
      question: "Do I need separate logins for the payslip portal?",
      answer:
        "Employees reuse their Schedulaa credentials. Access is gated by role, and gerentes can revoke permissions at any time.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: [
    { label: "Docs: folha pre-visualizacao", href: "/docs#payroll" },
    { label: "Comparativo: Schedulaa vs Gusto", href: "/compare/gusto" },
    { label: "Comparativo: Schedulaa vs ADP", href: "/compare/adp" },
    ...sharedSecondaryLinks,
  ],
  nextSteps: {
    overline: "Proximos passos",
    title: "Choose where to go next",
    description: "Keep exploring folha—from pricing to calculators and customer-facing documentation.",
    links: [
      {
        label: "Comparar planos de preco",
        description: "Veja como folha, agendamento, and marketing recursos line up.",
        href: "/pricing",
        cta: "Ver precos",
      },
      {
        label: "Iniciar ciclo de folha canadense",
        description: "Review CPP, EI, and provincial cobertura in detail.",
        href: "/payroll/canada",
        cta: "Canada folha",
      },
      {
        label: "Abrir documentacao",
        description: "Follow the folha pre-visualizacao flow passo by passo in the documentation.",
        href: "/docs#payroll",
        cta: "Ler docs",
      },
      {
        label: "Baixar modelos ROE/T4/W-2",
        description: "Jump straight into the folha tools and final form exportacoes.",
        href: "/payroll/tools/t4",
        cta: "Ver ferramentas",
      },
    ],
  },
};

const canadaConfig = {
  meta: {
    title: "Canada Folha Calculator & Software (CPP, EI, BPA) | Schedulaa",
    description:
      "Run Canadian folha with CPP, EI, federal and provincial tax, vacation pay, bonuses, tips, and employer matches. Finalize payslips as PDF, CSV, or Excel and email funcionarios automatically.",
    canonical: `${BASE_URL}/payroll/canada`,
    og: {
      title: "Canada Folha Calculator for Small Businesses | Schedulaa",
      description:
        "Preview and finalizar Canadian folha with CPP, EI, provincial tax, bonuses, and tips. Export payslips, email staff, and provide a autoatendimento portal.",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
      url: `${BASE_URL}/payroll/canada`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Canada Folha Calculator for Small Businesses | Schedulaa",
      description:
        "Automate Canadian folha with CPP, EI, provincial tax, vacation pay, and funcionario portals in one platform.",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Schedulaa Canada Folha",
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
        "Bonuses, tips, and commissions suporte",
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
    payrollBreadcrumb("Canada folha", `${BASE_URL}/payroll/canada`),
  ],
  hero: {
    badge: "CPP, EI, BPA tracking",
    title: "Canada Folha Calculator for Small Businesses",
    subtitle:
      "Calculate gross-to-net with CPP, EI, federal and provincial tax, vacation pay, bonuses, tips, and employer matches in one dashboard.",
    bullets: [
      "Preview deductions line by line before finalizing folha.",
      "Automate BPA pro-rating, CPP/EI ceilings, and YTD breakouts.",
      "Export payslips as PDF, CSV, or Excel and email funcionarios instantly.",
    ],
    primaryCta: { label: "Run Canadian folha", href: REGISTER_URL },
    secondaryCta: { label: "Book a walkthrough", href: CONTACT_URL },
  },
  recursosHeading: "Recursos",
  recursosTitle: "Everything Canadian folha equipes expect",
  recursosIntro:
    "Schedulaa aligns with CRA guidance for CPP, EI, and federal/provincial tax brackets so you can trust every pay cycle.",
  recursos: [
    {
      icon: "compliance",
      label: "Conformidade",
      title: "CPP, EI, and tax automation",
      description:
        "Calculate CPP, EI, and federal/provincial income tax with BPA pro-rating per funcionario. YTD ceilings and clawbacks are tracked automatically.",
    },
    {
      icon: "document",
      label: "Payslips",
      title: "Finalize and export slips",
      description:
        "Finalize folha and export slips as PDF, CSV, or Excel. Email documents to each funcionario directly from the pay run.",
      link: "/payslips",
      linkLabel: "Ver o payslip portal",
    },
    {
      icon: "timeline",
      label: "Fluxo de trabalho",
      title: "Preview, adjust, finalizar",
      description:
        "Preview every deduction, edit overtime, bonuses, tips, commissions, and employer contributions, then finalizar once amounts look right.",
    },
  ],
  highlights: [
    {
      overline: "Preview and finalizar",
      title: "Line-item pre-visualizacao with BPA and YTD context",
      body:
        "Veja como federal, provincial, CPP, and EI deductions apply before committing a pay run. Every funcionario view includes BPA usage, vacation pay, and net pay totals.",
      points: [
        "Override hours, rates, and taxable benefits on the fly.",
        "Break out employer contributions alongside funcionario deductions.",
        "Keep an audit trail of each recalculation before finalizing.",
      ],
      links: [
        { label: "View folha workflow", href: "/payroll/usa" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa folha pre-visualizacao showing Canadian deductions",
      },
    },
    {
      overline: "Exports",
      title: "Deliver payslips and compliance files in one click",
      body:
        "Finalize a run, export slips as PDF, CSV, or Excel, and send them to staff instantly. Need year-end filings? Jump straight into T4 or ROE generation with prefilled data.",
      points: [
        "One-click email of finalized PDF slips to each funcionario.",
        "Batch downloads for accounting and year-end review.",
      ],
      links: [
        { label: "Generate T4 slips", href: "/payroll/tools/t4" },
        { label: "Create ROEs", href: "/payroll/tools/roe" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa folha export options",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Run a Canadian pay cycle in three passos",
  stepsIntro:
    "Schedulaa connects agendamento, timesheets, and folha data so finance equipes can close each pay period quickly.",
  steps: [
    {
      title: "Import hours or enter earnings",
      description:
        "Bring in hours from agendamento or upload CSV data. Add bonuses, tips, commissions, and employer contributions before calculating.",
    },
    {
      title: "Preview deductions and adjust",
      description:
        "Review CPP, EI, and tax amounts with BPA context. Override vacation pay, taxable benefits, or RRSP/401k matches as needed.",
    },
    {
      title: "Finalize and deliver payslips",
      description:
        "Lock the pay run, email PDF slips to funcionarios, download CSV or Excel exportacoes, and queue T4/ROE filings directly.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Employee access",
      title: "Self-serve payslip portal",
      body:
        "Employees can sign in to Schedulaa and download their finalized PDF payslips any time. Filters make it easy to locate past periods without asking folha staff.",
      links: [{ label: "Ver o portal", href: "/payslips" }],
    },
    {
      icon: "document",
      label: "Year-end filings",
      title: "T4 and ROE tooling included",
      body:
        "Generate CRA-compliant T4 slips and XML files, plus Records of Employment with PDF and XML exportacoes. Prefilled data comes straight from the latest pay runs.",
      links: [
        { label: "Abrir o T4 gerador", href: "/payroll/tools/t4" },
        { label: "Abrir o ROE gerador", href: "/payroll/tools/roe" },
      ],
    },
  ],
  faqHeading: "Perguntas frequentes",
  faqTitle: "Canadian folha perguntas",
  faqIntro: "Honest answers based on what Schedulaa already powers for Canadian equipes.",
  faq: [
    {
      question: "Do you suporte Québec folha?",
      answer:
        "Schedulaa's standard folha flow covers every province except Québec. We maintain a dedicated Québec path to handle QPP and RQAP; contact us so we can review your setup and enable the correct configuration.",
    },
    {
      question: "Can funcionarios download their own payslips?",
      answer:
        "Yes. Once you finalizar folha, Schedulaa can email PDF slips to funcionarios and surfaces the same documents inside the Employee Payslip Portal for autoatendimento downloads.",
    },
    {
      question: "Como are CPP and EI ceilings handled?",
      answer:
        "Schedulaa tracks CPP and EI year-to-date totals per funcionario. When annual maximums are reached, deductions automatically stop and employer portions adjust accordingly.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "Note: Local provincial programs such as health premiums or workers' compensation remittances remain gerente-configured outside the core folha engine.",
};

const usaConfig = {
  meta: {
    title: "USA Folha Calculator (Federal, FICA/Medicare, Supported State Finalize) | Schedulaa",
    description:
      "Calculate US folha with federal tax, FICA, Medicare, and employer FUTA/SUTA reporting. Full finalizar is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH; other states run in raw pre-visualizacao mode.",
    canonical: `${BASE_URL}/payroll/usa`,
    og: {
      title: "USA Folha Calculator for Teams with Multi-State Workers | Schedulaa",
      description:
        "Preview US folha in all states with federal tax, FICA, and Medicare. Finalize is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
      url: `${BASE_URL}/payroll/usa`,
    },
    twitter: {
      card: "summary_large_image",
      title: "USA Folha Calculator for Teams with Multi-State Workers | Schedulaa",
      description:
        "Schedulaa automates US folha calculations, payslip exportacoes, and funcionario autoatendimento downloads in one workflow.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Schedulaa USA Folha",
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
        "Raw pre-visualizacao mode for unsupported states",
        "FICA and Medicare deductions",
        "Employer FUTA/SUTA reporting (not deducted from net pay)",
        "Bonuses, tips, and commissions suporte",
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
    payrollBreadcrumb("USA folha", `${BASE_URL}/payroll/usa`),
  ],
  hero: {
    badge: "Federal + FICA + employer unemployment",
    title: "USA Folha Calculator with FICA and Medicare built in",
    subtitle:
      "Handle federal withholding, FICA, Medicare, bonuses, tips, commissions, and employer taxes in the same pay run. Full finalizar is available in AK, FL, NV, SD, TX, WA, WY, TN, and NH; unsupported states stay in raw pre-visualizacao mode.",
    bullets: [
      "Preview folha in all U.S. states before finalizar.",
      "Track employer FUTA/SUTA alongside funcionario withholding without reducing funcionario net pay.",
      "Unsupported states return raw mode warnings and finalizar is blocked.",
      "Email PDF payslips and keep a downloadable archive for staff.",
    ],
    primaryCta: { label: "Run US folha", href: REGISTER_URL },
    secondaryCta: { label: "Ver demo ao vivo", href: CONTACT_URL },
  },
  recursosHeading: "Recursos",
  recursosTitle: "US folha covered from pre-visualizacao to payslip",
  recursosIntro:
    "Schedulaa keeps the deductions accurate while giving finance equipes control over overrides and exceptions.",
  recursos: [
    {
      icon: "compliance",
      label: "Tax engine",
      title: "Federal withholding + supported-state finalizar",
      description:
        "Automatically apply federal income tax and FICA/Medicare by funcionario work location. Full finalizar is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH; unsupported states remain available in raw pre-visualizacao with explicit warnings. Employer FUTA/SUTA is reported separately from funcionario deductions.",
    },
    {
      icon: "retirement",
      label: "Enterprise Retirement (U.S. 401(k))",
      title: "401(k) and Roth 401(k) with wage bases and caps",
      description:
        "Calculate 401(k) and Roth 401(k) deferrals with annual caps, employer match limites, and applicable wage bases. Post-finalization exportacoes surface W-2 Box 12D codes so filings stay aligned with folha data.",
    },
    {
      icon: "timeline",
      label: "Fluxo de trabalho",
      title: "Multi-state previews",
      description:
        "Preview each funcionario's deductions, edit wages and taxable benefits, rerun in seconds, and keep folha audit/overwrite history when a period is re-finalized. Unsupported states can pre-visualizacao in raw mode but cannot finalizar.",
    },
    {
      icon: "document",
      label: "Exports",
      title: "Payslips and W-2 outputs",
      description:
        "Finalize folha, export PDF, CSV, or Excel for accounting, and generate W-2 PDF and EFW2 files at year-end with prefilled data.",
      link: "/payroll/tools/w2",
      linkLabel: "Abrir o W-2 gerador",
    },
  ],
  highlights: [
    {
      overline: "Preview",
      title: "Transparent deductions before you finalizar",
      body:
        "Veja como each tax and contribution will hit net pay, including federal brackets, FICA, and Medicare. Employer FUTA/SUTA is shown for reporting and does not reduce funcionario net pay. Override earnings and recalc on demand.",
      points: [
        "Highlight overtime, tips, bonuses, and commissions for every funcionario.",
        "Record employer 401(k) matches and insurance premiums next to folha taxes.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa folha pre-visualizacao showing US deductions",
      },
    },
    {
      overline: "Delivery",
      title: "Finalize, export, and notify funcionarios",
      body:
        "Once numbers look correct, finalizar the run, email payslips, and archive exportacoes for finance. Employees can log in to download past slips any time.",
      points: [
        "Generated slips stay available in the funcionario portal.",
        "Accounting equipes can download CSV or Excel for journal entries.",
      ],
      links: [
        { label: "Ver portal do funcionario", href: "/payslips" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
        alt: "Laptop with folha export confirmation",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Como equipes finish a US pay cycle in Schedulaa",
  stepsIntro:
    "Bring in hours, pre-visualizacao withholding, and finalizar where supported without leaving the platform.",
  steps: [
    {
      title: "Import hours or salaries",
      description:
        "Pull data from agendamento or upload spreadsheets. Enter bonuses, tips, commissions, and employer contributions.",
    },
    {
      title: "Preview deductions per jurisdiction",
      description:
        "Review federal withholding, FICA, Medicare, and employer FUTA/SUTA. Unsupported states run in raw pre-visualizacao mode with warnings. Adjust wages or overrides and rerun the pre-visualizacao.",
    },
    {
      title: "Finalize and export",
      description:
        "Finalize folha in AK, FL, NV, SD, TX, WA, WY, TN, and NH; email PDF payslips, download CSV/Excel, and prepare W-2s at year end.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Limitations",
      title: "State suporte and local taxes",
      body:
        "Full U.S. finalizar is currently supported only in AK, FL, NV, SD, TX, WA, WY, TN, and NH. Other states remain pre-visualizacao-only (raw mode). Local/city taxes and special programs (for example WA PFML / WA Cares) are not automated and should be handled externally.",
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
  faqHeading: "Perguntas frequentes",
  faqTitle: "US folha perguntas",
  faqIntro: "Answers based on the capabilities shipping in Schedulaa today.",
  faq: [
    {
      question: "Do you handle local or city income taxes?",
      answer:
        "Not yet. Schedulaa calculates federal withholding plus FICA/Medicare, and reports employer FUTA/SUTA. Local and city levies should be tracked separately and uploaded if needed.",
    },
    {
      question: "Can I run multi-state folha?",
      answer:
        "Yes for pre-visualizacao. You can pre-visualizacao folha in all U.S. states. Finalize is currently supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH; unsupported states remain in raw pre-visualizacao mode.",
    },
    {
      question: "Como do funcionarios get their payslips?",
      answer:
        "Once you finalizar folha you can email PDF payslips directly to recipients. The same documents appear in the Employee Payslip Portal for autoatendimento downloads.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "* Full U.S. finalizar: AK, FL, NV, SD, TX, WA, WY, TN, NH. ** Other states: raw pre-visualizacao only (finalizar blocked). *** Employer FUTA/SUTA is reporting-only (not deducted from funcionario net pay). **** Local/city taxes and WA PFML / WA Cares are handled externally.",
};

const roeConfig = {
  meta: {
    title: "ROE Generator (Record of Employment) – Canada | Schedulaa",
    description:
      "Generate Canadian ROEs with prefilled insurable hours and earnings, approval workflow, and PDF/XML exportacoes ready for Service Canada.",
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
        "Schedulaa automates ROEs with prefilled insurable earnings, approvals, and CRA-compliant PDF/XML exportacoes.",
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
        "Prefill insurable hours and earnings from folha",
        "Approval workflow with audit trail",
        "PDF and XML export for Service Canada",
        "Department and funcionario filters",
      ],
      url: `${BASE_URL}/payroll/tools/roe`,
    },
    payrollBreadcrumb("ROE gerador", `${BASE_URL}/payroll/tools/roe`),
  ],
  hero: {
    badge: "Record of Employment",
    title: "ROE Generator with PDF and XML export",
    subtitle:
      "Prefill insurable hours and earnings from your latest pay runs, review in-app, and export CRA-compliant PDF and XML files.",
    bullets: [
      "Prefill ROEs using finalized folha data.",
      "Route submissions through approve or reject workflow.",
      "Export PDF or XML packages for Service Canada.",
    ],
    primaryCta: { label: "Generate an ROE", href: REGISTER_URL },
    secondaryCta: { label: "Talk to compliance", href: CONTACT_URL },
  },
  recursosHeading: "Capabilities",
  recursosTitle: "Everything needed for compliant ROEs",
  recursosIntro: "Schedulaa keeps your ROE workflow fast, auditable, and ready for Service Canada.",
  recursos: [
    {
      icon: "document",
      label: "Prefill",
      title: "Auto-complete with folha data",
      description:
        "Pull insurable hours and earnings from the latest paystub for each funcionario, including vacation pay and separation pay.",
    },
    {
      icon: "timeline",
      label: "Fluxo de trabalho",
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
        "A Schedulaa mantem um registro detalhado de cada ROE. Mostra quem preparou, aprovou ou rejeitou o formulario, com carimbos de data para revisoes de conformidade.",
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "ROE approval audit trail",
      },
    },
  ],
  stepsHeading: "Fluxo de trabalho",
  stepsTitle: "Como the ROE gerador works",
  steps: [
    {
      title: "Create from folha history",
      description:
        "Choose an funcionario and pull their latest pay runs to prefill insurable hours, earnings, and separation details.",
    },
    {
      title: "Review and approve",
      description:
        "Validate the data, capture comments, and approve or reject. All changes are logged for auditing.",
    },
    {
      title: "Export and submit",
      description:
        "Download PDF for records or XML for Service Canada upload. Batch exportacoes help you keep filings organized.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Related tools",
      title: "Need T4 slips too?",
      body:
        "Schedulaa links ROE data to year-end filings. Generate T4s from the same folha data set and stay compliant without duplicating work.",
      links: [{ label: "Generate T4s", href: "/payroll/tools/t4" }],
    },
  ],
  faqHeading: "Perguntas frequentes",
  faqTitle: "ROE perguntas",
  faq: [
    {
      question: "Which fields are prefilled automatically?",
      answer:
        "Schedulaa pulls insurable hours, earnings, vacation pay, and separation pay from the latest finalized pay runs so you only confirm details before exporting.",
    },
    {
      question: "Can I export XML for bulk upload?",
      answer:
        "Yes. The gerador creates XML files ready for upload to the Service Canada portal, alongside PDF copies for internal records.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const t4Config = {
  meta: {
    title: "T4 Generator – Canada Year-End Slips (PDF & XML) | Schedulaa",
    description:
      "Generate CRA-compliant T4 slips with PDF, XML, and ZIP packages. Prefill boxes from folha runs and batch deliver to funcionarios.",
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
        "Schedulaa fills T4 boxes from folha data, renders PDF, builds CRA XML, and bundles slips in one workflow.",
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
        "Prefill CRA boxes from folha",
        "Render PDF copies",
        "Generate CRA XML",
        "Batch ZIP download",
        "Delivery-ready slip packages",
      ],
      url: `${BASE_URL}/payroll/tools/t4`,
    },
    payrollBreadcrumb("T4 gerador", `${BASE_URL}/payroll/tools/t4`),
  ],
  hero: {
    badge: "Year-end folha",
    title: "T4 Generator with PDF and CRA XML exportacoes",
    subtitle:
      "Prefill CRA boxes from your Schedulaa folha history, render PDF slips for funcionarios, and export CRA XML with one click.",
    bullets: [
      "Prefill T4 boxes from finalized folha data.",
      "Render funcionario-ready PDF slips.",
      "Export CRA XML and batch ZIP for filing.",
    ],
    primaryCta: { label: "Generate T4 slips", href: REGISTER_URL },
    secondaryCta: { label: "Get help with filings", href: CONTACT_URL },
  },
  recursosHeading: "Capabilities",
  recursosTitle: "Year-end slips without manual data entry",
  recursos: [
    {
      icon: "document",
      label: "Prefill",
      title: "Auto-populated CRA boxes",
      description:
        "Schedulaa maps folha earnings, deductions, and taxable benefits into the correct CRA boxes so you spend time reviewing, not retyping.",
    },
    {
      icon: "compliance",
      label: "Conformidade",
      title: "XML ready for CRA upload",
      description:
        "Produce CRA XML files that align with the latest specifications. Keep archives organized with batch ZIP exportacoes.",
    },
    {
      icon: "timeline",
      label: "Fluxo de trabalho",
      title: "Batch delivery",
      description:
        "Bundle PDF, XML, and CSV summaries in a single ZIP file for safe storage or delivery to your compliance equipe.",
    },
  ],
  highlights: [
    {
      overline: "Prefill accuracy",
      title: "CRA boxes filled straight from folha",
      body:
        "Every T4 uses the same data you finalized in folha. Review employment income, CPP/EI, taxable benefits, and pension adjustments before exporting.",
      image: {
        src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
        alt: "T4 gerador showing CRA boxes",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "From folha history to T4 packages",
  steps: [
    {
      title: "Select the tax year",
      description:
        "Choose the year you need slips for and let Schedulaa fetch the folha history.",
    },
    {
      title: "Review prefilled data",
      description:
        "Confirm CRA boxes, employer information, and footnotes before exporting.",
    },
    {
      title: "Export PDF, XML, ZIP",
      description:
        "Download funcionario PDFs, CRA XML, and a ZIP archive to share with stakeholders or upload to the CRA portal.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Connected tools",
      title: "ROE gerador included",
      body: "Need Records of Employment as well? Switch to the ROE gerador without leaving your workflow.",
      links: [{ label: "Abrir ROE gerador", href: "/payroll/tools/roe" }],
    },
  ],
  faqHeading: "Perguntas frequentes",
  faqTitle: "T4 gerador perguntas",
  faq: [
    {
      question: "Do you generate CRA XML automatically?",
      answer:
        "Yes. The T4 gerador produces XML files ready for CRA submission along with PDF copies for funcionarios.",
    },
    {
      question: "Can funcionarios receive their T4 online?",
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
      "Generate IRS W-2 forms with fillable multi-copy PDFs, flattened funcionario copies, and EFW2 text files ready for SSA submission.",
    canonical: `${BASE_URL}/payroll/tools/w2`,
    og: {
      title: "W-2 Generator with IRS PDF and EFW2 Export | Schedulaa",
      description:
        "Prefill W-2 boxes from Schedulaa folha data, render six-copy PDFs, flatten for e-delivery, and export EFW2 files.",
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
        "Prefill IRS W-2 boxes from folha",
        "Render six-copy IRS PDF",
        "Flatten funcionario copies",
        "Generate EFW2 text files",
        "Support for multi-state wages",
      ],
      url: `${BASE_URL}/payroll/tools/w2`,
    },
    payrollBreadcrumb("W-2 gerador", `${BASE_URL}/payroll/tools/w2`),
  ],
  hero: {
    badge: "Year-end folha",
    title: "W-2 Generator with IRS PDF and EFW2 export",
    subtitle:
      "Fill every W-2 box automatically, render the official six-copy PDF, flatten funcionario copies, and generate EFW2 text in one workflow.",
    bullets: [
      "Prefill wages, withholding, and benefits from Schedulaa folha.",
      "Render multi-copy IRS PDF forms and flattened funcionario versions.",
      "Generate SSA EFW2 text files for electronic submission.",
    ],
    primaryCta: { label: "Generate W-2 forms", href: REGISTER_URL },
    secondaryCta: { label: "Request onboarding", href: CONTACT_URL },
  },
  recursosHeading: "Capabilities",
  recursosTitle: "Accurate W-2 filing without manual edits",
  recursos: [
    {
      icon: "document",
      label: "Prefill",
      title: "W-2 boxes filled from folha history",
      description:
        "Schedulaa maps wages, withholding, tips, and deferred compensation right into the correct W-2 boxes.",
    },
    {
      icon: "compliance",
      label: "Conformidade",
      title: "IRS PDF and EFW2 outputs",
      description:
        "Generate the official six-copy W-2 PDF, flattened funcionario copies for e-delivery, and EFW2 text files for SSA.",
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
        "Generate the EFW2 text file using your finalized folha data. Keep employer and funcionario copies synced without duplicate data entry.",
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        alt: "W-2 gerador export options",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "From folha to filed W-2s",
  steps: [
    {
      title: "Select tax year and funcionarios",
      description:
        "Pick the tax year, filter the funcionarios you need, and let Schedulaa prefill their data.",
    },
    {
      title: "Review and approve forms",
      description:
        "Confirm each box, adjust if necessary, and approve the batch prior to export.",
    },
    {
      title: "Export PDF and EFW2",
      description:
        "Download the six-copy PDF and flattened versions for funcionarios, plus the EFW2 file for SSA submission.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Connected tools",
      title: "Need live folha runs?",
      body:
        "W-2 forms are built on the same folha engine that handles federal, state, FICA, and Medicare calculations.",
      links: [{ label: "Run US folha", href: "/payroll/usa" }],
    },
  ],
  faqHeading: "Perguntas frequentes",
  faqTitle: "W-2 gerador perguntas",
  faq: [
    {
      question: "Do you suporte multi-state wages?",
      answer:
        "Yes. W-2 exportacoes include per-state wage totals and codes so funcionarios with multiple work locations are supported.",
    },
    {
      question: "Can I deliver W-2s electronically?",
      answer:
        "Schedulaa renders flattened PDF copies you can distribute electronically alongside the funcionario portal.",
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
        "Schedulaa powers a secure payslip portal so funcionarios can download PDF slips without emailing folha.",
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
        "Email notificacoes on new slips",
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
      "Give staff a secure, branded portal where they can view and download finalized payslips any time without emailing folha.",
    bullets: [
      "Search and filter payslips by date or folha run.",
      "Download PDF copies that match the finalized export.",
      "Control access with role-based permissions.",
    ],
    primaryCta: { label: "Enable the portal", href: REGISTER_URL },
    secondaryCta: { label: "Ver recursos da folha", href: "/payroll/canada" },
  },
  recursosHeading: "Highlights",
  recursosTitle: "Keep funcionarios informed without extra tickets",
  recursos: [
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
        "Every payslip matches the finalized PDF generated during folha. Employees can download on desktop or mobile instantly.",
    },
    {
      icon: "compliance",
      label: "Controls",
      title: "Role-based permissions and logging",
      description:
        "Managers control who can access the portal and review logs for auditing. Disable access when funcionarios leave.",
    },
  ],
  highlights: [
    {
      overline: "Experience",
      title: "Branded portal your equipe trusts",
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
      title: "Finalize folha",
      description:
        "Executar folha in Schedulaa. Finalized PDF slips automatically sync to the payslip portal.",
    },
    {
      title: "Notify funcionarios",
      description:
        "Send emails from folha or notify staff through your HR channels that new slips are ready.",
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
      title: "Works with Canadian and US folha",
      body:
        "The payslip portal receives finalized slips from both Canadian and US folha runs, so multinational equipes share the same experience.",
      links: [{ label: "Run a folha pre-visualizacao", href: "/payroll/canada" }],
    },
  ],
  faqHeading: "Perguntas frequentes",
  faqTitle: "Payslip portal perguntas",
  faq: [
    {
      question: "Do funcionarios need a separate login?",
      answer:
        "No. Employees use their existing Schedulaa login. Access is controlled by gerente permissions and can be revoked any time.",
    },
    {
      question: "Can we email payslips as well?",
      answer:
        "Yes. When you finalizar folha you can email PDF copies to each funcionario and still keep the portal enabled as a backup.",
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
