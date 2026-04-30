import { AppLocale } from '@/utils/locale';

type WorkflowCard = {
  title: string;
  description: string;
};

type MobileAppCopy = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    badge: string;
    title: string;
    description: string;
    bookDemo: string;
    startFree: string;
    androidLabel: string;
    androidTitle: string;
    iosLabel: string;
    iosTitle: string;
    points: string[];
    chips: string[];
  };
  workflow: {
    badge: string;
    title: string;
    description: string;
    exploreFeatures: string;
    cards: WorkflowCard[];
  };
  attendance: {
    badge: string;
    title: string;
    description: string;
    bullets: string[];
  };
  download: {
    badge: string;
    title: string;
    description: string;
  };
};

const en: MobileAppCopy = {
  metaTitle: 'Schedulaa Mobile App | Manager and Employee Operations on Android',
  metaDescription:
    'Download the Schedulaa Android app and see how managers and employees handle schedules, clock-in, approvals, attendance, and daily operations from one mobile workflow.',
  hero: {
    badge: 'Mobile App',
    title: 'Keep managers and employees running on the same operating system.',
    description:
      'Schedulaa mobile brings scheduling, clock-in, approvals, shift changes, time-off, tasks, and live team updates into one secure workflow. Managers stay in control, and employees stay aligned away from the desk.',
    bookDemo: 'Book a demo',
    startFree: 'Start free',
    androidLabel: 'Android app',
    androidTitle: 'Download APK',
    iosLabel: 'iPhone app',
    iosTitle: 'Coming soon',
    points: [
      'Approve time-off requests, shift swaps, and attendance issues without leaving the floor.',
      'Give employees schedules, clock-in, announcements, and task visibility in the same app.',
      'Keep managers and teams on the same Schedulaa system across desktop and mobile.',
    ],
    chips: [
      'Android APK available now',
      'Manager and employee workflows',
      'Built on the same live Schedulaa system',
      'iPhone release planned next',
    ],
  },
  workflow: {
    badge: 'Built for real operations',
    title: 'Mobile workflows for the people running shifts and the people managing them.',
    description:
      'This is not a disconnected companion app. It extends the same Schedulaa operating system managers use on desktop, with live scheduling, approvals, attendance, and payroll-ready visibility.',
    exploreFeatures: 'Explore all features',
    cards: [
      {
        title: 'Manager approvals stay live',
        description: 'Review time-off requests, shift swaps, punch approvals, and attendance alerts from one manager hub.',
      },
      {
        title: 'Employees run the day from one screen',
        description: 'Clock in, review upcoming shifts, request time off, and stay aligned with tasks and announcements.',
      },
      {
        title: 'Attendance and payroll stay connected',
        description: 'Track scheduled vs worked hours, overtime risk, payroll-ready totals, and exceptions in the same flow.',
      },
      {
        title: 'One mobile operating system for service teams',
        description: 'Managers and employees stay on the same live Schedulaa data instead of switching between disconnected apps.',
      },
    ],
  },
  attendance: {
    badge: 'Attendance + payroll readiness',
    title: 'Keep attendance signals and payroll readiness in the same mobile loop.',
    description:
      'Managers can review scheduled vs worked hours, catch overtime risk, monitor exceptions, and move faster on payroll review without waiting for end-of-week rollups.',
    bullets: [
      'Scheduled vs worked hours at a glance',
      'Overtime risk and missing-break visibility',
      'Payroll-ready percentages and exception queues',
      'Faster daily decisions before payroll closes',
    ],
  },
  download: {
    badge: 'Direct download',
    title: 'Roll out Schedulaa mobile without waiting for a separate store launch.',
    description:
      'Download the signed Android APK directly today. iPhone delivery is planned next, with the same operating workflows and team controls carried forward.',
  },
};

const copyByLocale: Partial<Record<AppLocale, MobileAppCopy>> = {
  en,
  fa: {
    metaTitle: 'اپ موبایل Schedulaa | عملیات مدیر و کارمند روی اندروید',
    metaDescription:
      'اپ اندروید Schedulaa را دانلود کنید و ببینید مدیران و کارمندان چگونه برنامه، clock-in، تأییدها، حضور و عملیات روزانه را در یک جریان موبایل مدیریت می‌کنند.',
    hero: {
      badge: 'اپ موبایل',
      title: 'مدیران و کارمندان را روی یک سیستم عملیاتی واحد نگه دارید.',
      description:
        'موبایل Schedulaa زمان‌بندی، clock-in، تأییدها، جابه‌جایی شیفت، مرخصی، وظایف و به‌روزرسانی زنده تیم را در یک جریان امن جمع می‌کند. مدیر کنترل را حفظ می‌کند و کارمند دور از میز هم هماهنگ می‌ماند.',
      bookDemo: 'رزرو دمو',
      startFree: 'شروع رایگان',
      androidLabel: 'اپ اندروید',
      androidTitle: 'دانلود APK',
      iosLabel: 'اپ آیفون',
      iosTitle: 'به‌زودی',
      points: [
        'درخواست مرخصی، جابه‌جایی شیفت و مسائل حضور را بدون ترک محیط کار تأیید کنید.',
        'برنامه، clock-in، اعلان‌ها و دید وظایف را در همان اپ به کارمند بدهید.',
        'مدیران و تیم‌ها را روی همان سیستم زنده Schedulaa بین دسکتاپ و موبایل نگه دارید.',
      ],
      chips: ['APK اندروید همین حالا در دسترس است', 'workflowهای مدیر و کارمند', 'ساخته‌شده روی همان سیستم زنده Schedulaa', 'انتشار آیفون در مرحله بعدی برنامه‌ریزی شده'],
    },
    workflow: {
      badge: 'ساخته‌شده برای عملیات واقعی',
      title: 'workflowهای موبایل برای افرادی که شیفت را اجرا می‌کنند و افرادی که آن را مدیریت می‌کنند.',
      description:
        'این یک companion app جدا نیست. همان سیستم عملیاتی Schedulaa را که مدیران روی دسکتاپ استفاده می‌کنند گسترش می‌دهد، با زمان‌بندی زنده، تأییدها، حضور و دید payroll-ready.',
      exploreFeatures: 'بررسی همه قابلیت‌ها',
      cards: [
        { title: 'تأییدهای مدیر زنده می‌ماند', description: 'درخواست مرخصی، جابه‌جایی شیفت، punch approval و هشدارهای حضور را از یک hub مدیریتی بررسی کنید.' },
        { title: 'کارمند روز را از یک صفحه اداره می‌کند', description: 'clock in بزند، شیفت‌های بعدی را ببیند، مرخصی بخواهد و با وظایف و اعلان‌ها هماهنگ بماند.' },
        { title: 'حضور و payroll به هم متصل می‌مانند', description: 'ساعات برنامه‌ریزی‌شده در برابر ساعات کارشده، ریسک اضافه‌کاری، مجموع payroll-ready و استثناها را در همان جریان پیگیری کنید.' },
        { title: 'یک سیستم عملیاتی موبایل برای تیم‌های خدماتی', description: 'مدیران و کارمندان روی همان داده زنده Schedulaa می‌مانند و بین اپ‌های جدا جابه‌جا نمی‌شوند.' },
      ],
    },
    attendance: {
      badge: 'حضور + آمادگی payroll',
      title: 'سیگنال‌های حضور و آمادگی payroll را در همان حلقه موبایل نگه دارید.',
      description:
        'مدیران می‌توانند ساعات برنامه‌ریزی‌شده در برابر ساعات کارشده را بازبینی کنند، ریسک اضافه‌کاری را ببینند، استثناها را مانیتور کنند و بدون انتظار برای جمع‌بندی آخر هفته سریع‌تر به بازبینی payroll برسند.',
      bullets: [
        'دید سریع به ساعات برنامه‌ریزی‌شده در برابر ساعات کارشده',
        'دید ریسک اضافه‌کاری و breakهای از دست‌رفته',
        'درصدهای payroll-ready و صف استثناها',
        'تصمیم‌گیری روزانه سریع‌تر قبل از بسته شدن payroll',
      ],
    },
    download: {
      badge: 'دانلود مستقیم',
      title: 'Schedulaa mobile را بدون انتظار برای انتشار جداگانه در استور rollout کنید.',
      description:
        'همین امروز APK امضاشده اندروید را مستقیم دانلود کنید. انتشار آیفون در مرحله بعدی برنامه‌ریزی شده و همان workflowهای عملیاتی و کنترل‌های تیمی را ادامه می‌دهد.',
    },
  },
  ru: {
    ...en,
    metaTitle: 'Mobilnoe prilozhenie Schedulaa | Operacii menedzhera i sotrudnika na Android',
    metaDescription:
      'Skachayte Android-prilozhenie Schedulaa i posmotrite, kak menedzhery i sotrudniki vedut grafiki, clock-in, soglasovaniya, attendance i ezhednevnye operacii v odnom mobilnom potoke.',
    hero: {
      badge: 'Mobilnoe prilozhenie',
      title: 'Derzhite menedzherov i sotrudnikov v odnoi operacionnoi sisteme.',
      description:
        'Mobilnyi Schedulaa sobiraet raspisanie, clock-in, soglasovaniya, smeny, time-off, zadachi i zhivye obnovleniya komandy v odin bezopasnyi workflow. Menedzhery ostayutsya pod kontrolem, a sotrudniki ostayutsya v kurse vne stola.',
      bookDemo: 'Zabronirovat demo',
      startFree: 'Nachat besplatno',
      androidLabel: 'Android prilozhenie',
      androidTitle: 'Skachat APK',
      iosLabel: 'iPhone prilozhenie',
      iosTitle: 'Skoro',
      points: [
        'Utverzhdayte zaprosy na otpusk, obmen smenami i attendance-voprosy, ne pokidaya ploshchadku.',
        'Davaite sotrudnikam raspisanie, clock-in, obyavleniya i vidimost zadach v tom zhe prilozhenii.',
        'Derzhite menedzherov i komandy v odnoi sisteme Schedulaa na desktop i mobile.',
      ],
      chips: ['Android APK dostupen uzhe seychas', 'Workflow dlya menedzhera i sotrudnika', 'Postroeno na toy zhe zhivoy sisteme Schedulaa', 'Vypusk dlya iPhone planiruetsya sleduyuschim'],
    },
    workflow: {
      badge: 'Sdelano dlya realnyh operaciy',
      title: 'Mobilnye workflow dlya teh, kto vedet smeny, i teh, kto imi upravlyaet.',
      description:
        'Eto ne otdelnoe companion-prilozhenie. Ono rasshiryaet tu zhe operacionnuyu sistemu Schedulaa, kotoruyu menedzhery ispolzuyut na desktop, s zhivym scheduling, approvals, attendance i payroll-ready vidimostyu.',
      exploreFeatures: 'Posmotret vse vozmozhnosti',
      cards: [
        { title: 'Menedzherskie soglasovaniya ostayutsya zhivymi', description: 'Prosmatrivayte zaprosy na otpusk, obmen smenami, punch approvals i upozhdeniya attendance iz odnogo manager hub.' },
        { title: 'Sotrudniki vedut den s odnogo ekrana', description: 'Clock in, prosmatrivayut blizhaishie smeny, zaprashivayut otpusk i ostayutsya v kurse zadach i obyavleniy.' },
        { title: 'Attendance i payroll ostayutsya svyazany', description: 'Sledite za planned vs worked hours, riskom overtime, payroll-ready summami i isklyucheniyami v tom zhe potoke.' },
        { title: 'Odna mobilnaya operacionnaya sistema dlya servisnyh komand', description: 'Menedzhery i sotrudniki ostayutsya na teh zhe zhivyh dannyh Schedulaa vmesto perehodov mezhdu razrozennymi prilozheniyami.' },
      ],
    },
    attendance: {
      badge: 'Attendance + payroll gotovnost',
      title: 'Derzhite signaly attendance i gotovnost payroll v tom zhe mobilnom cikle.',
      description:
        'Menedzhery mogut sravnivat planned vs worked hours, lovit risk overtime, monitorit isklyucheniya i bystree dvigat payroll review bez ozhidaniya konca nedeli.',
      bullets: [
        'Planned vs worked hours s odnogo vzglyada',
        'Vidimost overtime risk i propuschennyh pereryvov',
        'Payroll-ready procenty i ocheredi isklyucheniy',
        'Bolee bystrye ezhednevnye resheniya do zakrytiya payroll',
      ],
    },
    download: {
      badge: 'Pryamaya zagruzka',
      title: 'Razvertyvayte Schedulaa mobile bez ozhidaniya otdelnogo zapuska v store.',
      description:
        'Skachayte podpisannyi Android APK uzhe segodnya. Vypusk dlya iPhone planiruetsya sleduyuschim, s temi zhe operacionnymi workflow i komandnymi kontrolami.',
    },
  },
  zh: {
    ...en,
    metaTitle: 'Schedulaa 移动应用 | Android 上的经理与员工运营',
    metaDescription:
      '下载 Schedulaa Android 应用，查看经理和员工如何通过一个移动工作流处理排班、clock-in、审批、出勤和日常运营。',
    hero: {
      badge: '移动应用',
      title: '让经理和员工运行在同一个运营系统上。',
      description:
        'Schedulaa mobile 将排班、clock-in、审批、换班、请假、任务和团队实时更新整合进一个安全工作流。经理保持控制，员工即使不在桌前也能保持同步。',
      bookDemo: '预约演示',
      startFree: '免费开始',
      androidLabel: 'Android 应用',
      androidTitle: '下载 APK',
      iosLabel: 'iPhone 应用',
      iosTitle: '即将推出',
      points: [
        '无需离开现场即可批准请假请求、换班和出勤问题。',
        '在同一个应用中为员工提供排班、clock-in、公告和任务可视化。',
        '让经理和团队在桌面端与移动端都使用同一个 Schedulaa 系统。',
      ],
      chips: ['Android APK 现已可用', '经理与员工工作流', '基于同一套实时 Schedulaa 系统', 'iPhone 版本计划下一步推出'],
    },
    workflow: {
      badge: '为真实运营而建',
      title: '面向执行班次的人，也面向管理他们的人。',
      description:
        '这不是一个脱节的 companion app。它扩展了经理在桌面端使用的同一套 Schedulaa 运营系统，包含实时排班、审批、出勤和 payroll-ready 可视性。',
      exploreFeatures: '查看全部功能',
      cards: [
        { title: '经理审批始终在线', description: '通过一个 manager hub 审核请假申请、换班、打卡审批和出勤提醒。' },
        { title: '员工通过一个屏幕管理当天工作', description: '打卡、查看即将到来的班次、申请请假，并与任务和公告保持一致。' },
        { title: '出勤与 payroll 始终联动', description: '在同一个流程中跟踪计划工时与实际工时、加班风险、payroll-ready 总数和异常。' },
        { title: '服务团队的一套移动运营系统', description: '经理和员工都停留在同一套实时 Schedulaa 数据上，而不是在割裂的应用之间切换。' },
      ],
    },
    attendance: {
      badge: '出勤 + payroll 就绪',
      title: '让出勤信号和 payroll 就绪状态停留在同一个移动闭环里。',
      description:
        '经理可以查看计划工时与实际工时、发现加班风险、监控异常，并在不必等到周末汇总的情况下更快推进 payroll review。',
      bullets: ['一眼看清计划工时与实际工时', '加班风险与漏休 break 可视化', 'payroll-ready 百分比与异常队列', '在 payroll 关闭前更快做出日常决策'],
    },
    download: {
      badge: '直接下载',
      title: '无需等待独立应用商店上线，也能部署 Schedulaa mobile。',
      description: '今天就可以直接下载签名版 Android APK。iPhone 版本计划下一步推出，并延续同样的运营工作流与团队控制。',
    },
  },
  es: {
    ...en,
    metaTitle: 'App movil de Schedulaa | Operaciones de manager y empleado en Android',
    metaDescription:
      'Descarga la app Android de Schedulaa y mira como managers y empleados manejan horarios, clock-in, aprobaciones, asistencia y operaciones diarias desde un solo flujo movil.',
    hero: {
      badge: 'App movil',
      title: 'Mantén a managers y empleados en el mismo sistema operativo.',
      description:
        'Schedulaa mobile une scheduling, clock-in, aprobaciones, cambios de turno, time-off, tareas y actualizaciones en vivo del equipo en un flujo seguro. Los managers mantienen el control y los empleados siguen alineados fuera del escritorio.',
      bookDemo: 'Reservar demo',
      startFree: 'Comenzar gratis',
      androidLabel: 'App Android',
      androidTitle: 'Descargar APK',
      iosLabel: 'App iPhone',
      iosTitle: 'Proximamente',
      points: [
        'Aprueba solicitudes de time-off, cambios de turno y temas de asistencia sin salir del piso.',
        'Da a los empleados horarios, clock-in, anuncios y visibilidad de tareas en la misma app.',
        'Mantén a managers y equipos en el mismo sistema Schedulaa entre desktop y mobile.',
      ],
      chips: ['Android APK disponible ahora', 'Workflows para manager y empleado', 'Construido sobre el mismo sistema live de Schedulaa', 'La version iPhone viene despues'],
    },
    workflow: {
      badge: 'Hecho para operaciones reales',
      title: 'Workflows moviles para quienes corren los turnos y para quienes los gestionan.',
      description:
        'No es una companion app desconectada. Extiende el mismo sistema operativo Schedulaa que los managers usan en desktop, con scheduling live, approvals, asistencia y visibilidad payroll-ready.',
      exploreFeatures: 'Explorar todas las funciones',
      cards: [
        { title: 'Las aprobaciones del manager siguen activas', description: 'Revisa solicitudes de time-off, cambios de turno, punch approvals y alertas de asistencia desde un solo manager hub.' },
        { title: 'Los empleados manejan el dia desde una sola pantalla', description: 'Hacen clock in, revisan proximos turnos, piden time-off y siguen alineados con tareas y anuncios.' },
        { title: 'Asistencia y payroll siguen conectados', description: 'Sigue horas programadas vs trabajadas, riesgo de overtime, totales payroll-ready y excepciones en el mismo flujo.' },
        { title: 'Un sistema operativo movil para equipos de servicio', description: 'Managers y empleados permanecen sobre los mismos datos live de Schedulaa en lugar de cambiar entre apps desconectadas.' },
      ],
    },
    attendance: {
      badge: 'Asistencia + preparacion payroll',
      title: 'Mantén las señales de asistencia y la preparacion payroll en el mismo ciclo movil.',
      description:
        'Los managers pueden revisar horas programadas vs trabajadas, detectar riesgo de overtime, monitorear excepciones y avanzar mas rapido en payroll review sin esperar al cierre semanal.',
      bullets: [
        'Horas programadas vs trabajadas de un vistazo',
        'Visibilidad de riesgo de overtime y breaks faltantes',
        'Porcentajes payroll-ready y colas de excepciones',
        'Decisiones diarias mas rapidas antes de cerrar payroll',
      ],
    },
    download: {
      badge: 'Descarga directa',
      title: 'Despliega Schedulaa mobile sin esperar a un lanzamiento separado en la tienda.',
      description:
        'Descarga hoy mismo el Android APK firmado. La version iPhone esta planificada para despues, con los mismos workflows operativos y controles de equipo.',
    },
  },
  fr: {
    ...en,
    metaTitle: 'Application mobile Schedulaa | Operations manager et employe sur Android',
    metaDescription:
      'Telechargez l application Android Schedulaa et voyez comment managers et employes gerent horaires, clock-in, validations, presence et operations quotidiennes dans un seul flux mobile.',
    hero: {
      badge: 'Application mobile',
      title: 'Gardez managers et employes sur le meme systeme operationnel.',
      description:
        'Schedulaa mobile rassemble scheduling, clock-in, validations, changements de shift, time-off, taches et mises a jour equipe en direct dans un workflow securise. Les managers gardent le controle et les employes restent alignes loin du bureau.',
      bookDemo: 'Reserver une demo',
      startFree: 'Commencer gratuitement',
      androidLabel: 'Application Android',
      androidTitle: 'Telecharger APK',
      iosLabel: 'Application iPhone',
      iosTitle: 'Bientot disponible',
      points: [
        'Validez les demandes de time-off, les echanges de shift et les problemes de presence sans quitter le terrain.',
        'Donnez aux employes horaires, clock-in, annonces et visibilite des taches dans la meme application.',
        'Gardez managers et equipes sur le meme systeme Schedulaa entre desktop et mobile.',
      ],
      chips: ['APK Android disponible maintenant', 'Workflows manager et employe', 'Construit sur le meme systeme live Schedulaa', 'Sortie iPhone prevue ensuite'],
    },
    workflow: {
      badge: 'Concu pour de vraies operations',
      title: 'Des workflows mobiles pour ceux qui tiennent les shifts et ceux qui les gerent.',
      description:
        'Ce n est pas une companion app deconnectee. Elle etend le meme systeme operationnel Schedulaa que les managers utilisent sur desktop, avec scheduling live, approvals, presence et visibilite payroll-ready.',
      exploreFeatures: 'Explorer toutes les fonctions',
      cards: [
        { title: 'Les validations manager restent actives', description: 'Revoyez demandes de time-off, echanges de shift, punch approvals et alertes de presence depuis un seul manager hub.' },
        { title: 'Les employes gerent leur journee depuis un seul ecran', description: 'Ils clock in, consultent les prochains shifts, demandent un time-off et restent alignes avec taches et annonces.' },
        { title: 'Presence et payroll restent relies', description: 'Suivez heures prevues vs travaillees, risque d overtime, totaux payroll-ready et exceptions dans le meme flux.' },
        { title: 'Un systeme operationnel mobile pour equipes de service', description: 'Managers et employes restent sur les memes donnees live Schedulaa au lieu de basculer entre applications deconnectees.' },
      ],
    },
    attendance: {
      badge: 'Presence + preparation payroll',
      title: 'Gardez les signaux de presence et la preparation payroll dans la meme boucle mobile.',
      description:
        'Les managers peuvent revoir heures prevues vs travaillees, reperer le risque d overtime, surveiller les exceptions et accelerer la payroll review sans attendre les consolidations de fin de semaine.',
      bullets: [
        'Heures prevues vs travaillees en un coup d oeil',
        'Visibilite du risque overtime et des pauses manquees',
        'Pourcentages payroll-ready et files d exceptions',
        'Decisions quotidiennes plus rapides avant la cloture payroll',
      ],
    },
    download: {
      badge: 'Telechargement direct',
      title: 'Deployez Schedulaa mobile sans attendre un lancement separé sur un store.',
      description:
        'Telechargez des aujourd hui l APK Android signe. La version iPhone est prevue ensuite, avec les memes workflows operationnels et controles equipe.',
    },
  },
  de: {
    ...en,
    metaTitle: 'Schedulaa Mobile App | Manager- und Mitarbeitenden-Operationen auf Android',
    metaDescription:
      'Laden Sie die Android-App von Schedulaa herunter und sehen Sie, wie Manager und Mitarbeitende Schichten, clock-in, Freigaben, Anwesenheit und taegliche Operationen in einem mobilen Workflow steuern.',
    hero: {
      badge: 'Mobile App',
      title: 'Halten Sie Manager und Mitarbeitende im selben Betriebssystem.',
      description:
        'Schedulaa mobile bringt Scheduling, clock-in, Freigaben, Schichtwechsel, time-off, Aufgaben und Live-Team-Updates in einen sicheren Workflow. Manager behalten die Kontrolle und Mitarbeitende bleiben auch weg vom Schreibtisch abgestimmt.',
      bookDemo: 'Demo buchen',
      startFree: 'Kostenlos starten',
      androidLabel: 'Android App',
      androidTitle: 'APK herunterladen',
      iosLabel: 'iPhone App',
      iosTitle: 'Demnaechst',
      points: [
        'Genehmigen Sie time-off-Anfragen, Schichttausch und Anwesenheitsthemen, ohne die Flaeche zu verlassen.',
        'Geben Sie Mitarbeitenden Schichten, clock-in, Ankuendigungen und Aufgaben-Sicht in derselben App.',
        'Halten Sie Manager und Teams im selben Schedulaa-System ueber Desktop und Mobile hinweg.',
      ],
      chips: ['Android APK jetzt verfuegbar', 'Workflows fuer Manager und Mitarbeitende', 'Gebaut auf demselben live Schedulaa-System', 'iPhone-Release als naechster Schritt geplant'],
    },
    workflow: {
      badge: 'Fuer echte Operationen gebaut',
      title: 'Mobile Workflows fuer Menschen, die Schichten fahren, und fuer die, die sie steuern.',
      description:
        'Das ist keine getrennte companion app. Es erweitert dasselbe Schedulaa-Betriebssystem, das Manager auf dem Desktop nutzen, mit live Scheduling, Freigaben, Anwesenheit und payroll-ready Sichtbarkeit.',
      exploreFeatures: 'Alle Funktionen ansehen',
      cards: [
        { title: 'Manager-Freigaben bleiben live', description: 'Pruefen Sie time-off-Anfragen, Schichttausch, punch approvals und Anwesenheitswarnungen aus einem Manager Hub.' },
        { title: 'Mitarbeitende steuern den Tag von einem Bildschirm', description: 'Sie clocken ein, sehen bevorstehende Schichten, beantragen time-off und bleiben bei Aufgaben und Ankuendigungen abgestimmt.' },
        { title: 'Anwesenheit und Payroll bleiben verbunden', description: 'Verfolgen Sie geplante vs gearbeitete Stunden, Overtime-Risiken, payroll-ready Summen und Ausnahmen im selben Flow.' },
        { title: 'Ein mobiles Betriebssystem fuer Service-Teams', description: 'Manager und Mitarbeitende bleiben auf denselben live Schedulaa-Daten, statt zwischen getrennten Apps zu wechseln.' },
      ],
    },
    attendance: {
      badge: 'Anwesenheit + Payroll-Bereitschaft',
      title: 'Halten Sie Anwesenheitssignale und Payroll-Bereitschaft im selben mobilen Kreis.',
      description:
        'Manager koennen geplante vs gearbeitete Stunden pruefen, Overtime-Risiken erkennen, Ausnahmen ueberwachen und die Payroll-Review beschleunigen, ohne auf Wochenend-Zusammenfassungen zu warten.',
      bullets: [
        'Geplante vs gearbeitete Stunden auf einen Blick',
        'Sichtbarkeit fuer Overtime-Risiko und fehlende Pausen',
        'Payroll-ready Prozente und Ausnahmewarteschlangen',
        'Schnellere taegliche Entscheidungen vor Payroll-Abschluss',
      ],
    },
    download: {
      badge: 'Direkter Download',
      title: 'Rollen Sie Schedulaa mobile aus, ohne auf einen separaten Store-Launch zu warten.',
      description:
        'Laden Sie das signierte Android APK noch heute direkt herunter. Die iPhone-Auslieferung ist als naechster Schritt geplant, mit denselben operativen Workflows und Team-Kontrollen.',
    },
  },
  ar: {
    ...en,
    metaTitle: 'تطبيق Schedulaa للجوال | عمليات المدير والموظف على Android',
    metaDescription:
      'حمّل تطبيق Schedulaa على Android وشاهد كيف يدير المديرون والموظفون الجداول و clock-in والموافقات والحضور والعمليات اليومية من خلال مسار جوال واحد.',
    hero: {
      badge: 'تطبيق الجوال',
      title: 'اجعل المديرين والموظفين يعملون على نفس النظام التشغيلي.',
      description:
        'يجمع Schedulaa mobile الجدولة و clock-in والموافقات وتبديل الشفتات و time-off والمهام وتحديثات الفريق المباشرة في workflow آمن واحد. يبقى المدير مسيطرا ويبقى الموظف متزامنا بعيدا عن المكتب.',
      bookDemo: 'احجز عرضا تجريبيا',
      startFree: 'ابدأ مجانا',
      androidLabel: 'تطبيق Android',
      androidTitle: 'تنزيل APK',
      iosLabel: 'تطبيق iPhone',
      iosTitle: 'قريبا',
      points: [
        'اعتمد طلبات time-off وتبديل الشفتات ومشكلات الحضور من دون مغادرة موقع العمل.',
        'امنح الموظفين الجداول و clock-in والاعلانات ورؤية المهام داخل التطبيق نفسه.',
        'ابقِ المديرين والفرق على نفس نظام Schedulaa بين desktop و mobile.',
      ],
      chips: ['Android APK متاح الان', 'workflow للمدير والموظف', 'مبني على نفس نظام Schedulaa الحي', 'اطلاق iPhone مخطط له في المرحلة التالية'],
    },
    workflow: {
      badge: 'مصمم لعمليات حقيقية',
      title: 'workflow جوال لمن يديرون الشفتات ولمن يشرفون عليها.',
      description:
        'هذا ليس companion app منفصلا. بل يوسع نفس نظام Schedulaa التشغيلي الذي يستخدمه المديرون على desktop مع scheduling حي و approvals وحضور ورؤية payroll-ready.',
      exploreFeatures: 'استعرض كل الميزات',
      cards: [
        { title: 'موافقات المدير تبقى مباشرة', description: 'راجع طلبات time-off وتبديل الشفتات و punch approvals وتنبيهات الحضور من manager hub واحد.' },
        { title: 'الموظفون يديرون يومهم من شاشة واحدة', description: 'يقومون بـ clock in ويراجعون الشفتات القادمة ويطلبون time-off ويبقون متوافقين مع المهام والاعلانات.' },
        { title: 'الحضور و payroll يبقيان مترابطين', description: 'تابع الساعات المجدولة مقابل الساعات المنجزة ومخاطر overtime والاجماليات payroll-ready والاستثناءات في نفس المسار.' },
        { title: 'نظام تشغيلي جوال واحد لفرق الخدمات', description: 'يبقى المديرون والموظفون على نفس بيانات Schedulaa الحية بدلا من التنقل بين تطبيقات منفصلة.' },
      ],
    },
    attendance: {
      badge: 'الحضور + جاهزية payroll',
      title: 'احتفظ بإشارات الحضور وجاهزية payroll داخل نفس الحلقة المتنقلة.',
      description:
        'يمكن للمديرين مراجعة الساعات المجدولة مقابل المنجزة واكتشاف مخاطر overtime ومراقبة الاستثناءات والتحرك اسرع في payroll review من دون انتظار تلخيصات نهاية الاسبوع.',
      bullets: [
        'رؤية سريعة للساعات المجدولة مقابل المنجزة',
        'رؤية مخاطر overtime والاستراحات المفقودة',
        'نسب payroll-ready وطوابير الاستثناءات',
        'قرارات يومية اسرع قبل اغلاق payroll',
      ],
    },
    download: {
      badge: 'تنزيل مباشر',
      title: 'اطلق Schedulaa mobile من دون انتظار اطلاق منفصل في المتجر.',
      description:
        'نزّل Android APK الموقّع مباشرة اليوم. اطلاق iPhone مخطط له بعد ذلك مع نفس workflowات التشغيل وضوابط الفريق.',
    },
  },
  pt: {
    ...en,
    metaTitle: 'App mobile Schedulaa | Operacoes de gestor e funcionario no Android',
    metaDescription:
      'Baixe o app Android da Schedulaa e veja como gestores e funcionarios lidam com horarios, clock-in, aprovacoes, presenca e operacoes diarias em um unico fluxo mobile.',
    hero: {
      badge: 'App mobile',
      title: 'Mantenha gestores e funcionarios no mesmo sistema operacional.',
      description:
        'O Schedulaa mobile leva scheduling, clock-in, aprovacoes, trocas de turno, time-off, tarefas e atualizacoes ao vivo da equipe para um unico workflow seguro. Os gestores mantem o controle e os funcionarios seguem alinhados longe da mesa.',
      bookDemo: 'Agendar demo',
      startFree: 'Comecar gratis',
      androidLabel: 'App Android',
      androidTitle: 'Baixar APK',
      iosLabel: 'App iPhone',
      iosTitle: 'Em breve',
      points: [
        'Aprove pedidos de time-off, trocas de turno e problemas de presenca sem sair da operacao.',
        'Dê aos funcionarios horarios, clock-in, avisos e visibilidade de tarefas no mesmo app.',
        'Mantenha gestores e equipes no mesmo sistema Schedulaa entre desktop e mobile.',
      ],
      chips: ['Android APK disponivel agora', 'Workflows de gestor e funcionario', 'Construido sobre o mesmo sistema live da Schedulaa', 'Lancamento para iPhone planejado em seguida'],
    },
    workflow: {
      badge: 'Feito para operacoes reais',
      title: 'Workflows mobile para quem toca os turnos e para quem os gerencia.',
      description:
        'Nao e um companion app desconectado. Ele estende o mesmo sistema operacional Schedulaa que os gestores usam no desktop, com scheduling live, approvals, presenca e visibilidade payroll-ready.',
      exploreFeatures: 'Explorar todos os recursos',
      cards: [
        { title: 'As aprovacoes do gestor ficam ativas', description: 'Revise pedidos de time-off, trocas de turno, punch approvals e alertas de presenca em um unico manager hub.' },
        { title: 'Os funcionarios tocam o dia de uma tela so', description: 'Fazem clock in, revisam proximos turnos, pedem time-off e ficam alinhados com tarefas e avisos.' },
        { title: 'Presenca e payroll continuam conectados', description: 'Acompanhe horas previstas vs trabalhadas, risco de overtime, totais payroll-ready e excecoes no mesmo fluxo.' },
        { title: 'Um sistema operacional mobile para equipes de servico', description: 'Gestores e funcionarios ficam nos mesmos dados live da Schedulaa em vez de alternar entre apps desconectados.' },
      ],
    },
    attendance: {
      badge: 'Presenca + prontidao de payroll',
      title: 'Mantenha sinais de presenca e prontidao de payroll no mesmo ciclo mobile.',
      description:
        'Os gestores podem revisar horas previstas vs trabalhadas, identificar risco de overtime, monitorar excecoes e acelerar a payroll review sem esperar os fechamentos do fim da semana.',
      bullets: [
        'Horas previstas vs trabalhadas de relance',
        'Visibilidade de risco de overtime e pausas perdidas',
        'Percentuais payroll-ready e filas de excecao',
        'Decisoes diarias mais rapidas antes do fechamento do payroll',
      ],
    },
    download: {
      badge: 'Download direto',
      title: 'Implemente o Schedulaa mobile sem esperar um lancamento separado na loja.',
      description:
        'Baixe hoje mesmo o Android APK assinado. A entrega para iPhone esta planejada em seguida, com os mesmos workflows operacionais e controles de equipe.',
    },
  },
};

export const getMobileAppCopy = (locale: AppLocale): MobileAppCopy => copyByLocale[locale] || en;

export const getMobileAppMeta = (locale: AppLocale) => {
  const copy = getMobileAppCopy(locale);
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
  };
};
