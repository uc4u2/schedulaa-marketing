import { AppLocale } from '@/utils/locale';

type Item = { id: number; question: string; answer: string };

type FaqCopy = {
  tabs: { general: string; changelog: string; privacy: string; terms: string };
  hero: { badge: string; title: string; subtitle: string };
  generalItems: Item[];
  changelogItems: Item[];
  privacyItems: Item[];
  termsItems: Item[];
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    agreePrefix: string;
    agreeLink: string;
    submit: string;
  };
  cta: { badge: string; title: string; description: string; button: string };
};

const base: Record<string, FaqCopy> = {
  en: {
    tabs: { general: 'General', changelog: 'Changelog', privacy: 'Privacy', terms: 'Terms & Conditions' },
    hero: {
      badge: 'FAQ',
      title: 'Commonly asked questions',
      subtitle: 'Find clear answers about setup, data privacy, updates, and platform policies.',
    },
    generalItems: [
      {
        id: 1,
        question: 'What does Schedulaa replace in a typical service business stack?',
        answer:
          'Schedulaa combines booking, workforce scheduling, payroll workflows, website pages, and operations reporting so teams can reduce tool sprawl and duplicated data entry.',
      },
      {
        id: 2,
        question: 'Can clients book online without calling staff?',
        answer:
          'Yes. You can publish branded booking pages where clients choose service, provider, date, and time, then confirm or pay based on your configured flow.',
      },
      {
        id: 3,
        question: 'Does Schedulaa support both manager and employee workflows?',
        answer:
          'Yes. Managers get control views for staffing, payroll, and approvals, while employees get dedicated dashboards for shifts, availability, invites, and payslips.',
      },
      {
        id: 4,
        question: 'Can I run payroll for Canada and the United States?',
        answer:
          'Schedulaa supports Canada payroll workflows and U.S. payroll flows with regional support boundaries documented in the payroll pages and docs.',
      },
      {
        id: 5,
        question: 'How do I start if I am migrating from another platform?',
        answer:
          'Start with a trial plan, import your core services/staff, publish your booking page, and then map payroll and integrations using the rollout and docs checklist.',
      },
    ],
    changelogItems: [
      {
        id: 1,
        question: 'How often do you ship updates?',
        answer:
          'We ship continuously and publish meaningful changes in the changelog so operations teams can track what is new before enabling workflows.',
      },
      {
        id: 2,
        question: 'Do product updates break existing routes or links?',
        answer:
          'No. Public route contracts are kept stable, and backward-compatible redirects are maintained for legacy marketing paths.',
      },
      {
        id: 3,
        question: 'How are new payroll or compliance features announced?',
        answer:
          'Major payroll and compliance updates are documented in changelog notes and related docs pages, including rollout caveats when needed.',
      },
      {
        id: 4,
        question: 'Can we test new features before full rollout?',
        answer:
          'Yes. Teams can validate in staging/demo flows and then promote to production once operational owners sign off.',
      },
      {
        id: 5,
        question: 'Where can I see historical improvements?',
        answer:
          'Use the changelog tab plus product docs to review recently shipped capabilities, fixes, and workflow enhancements.',
      },
    ],
    privacyItems: [
      {
        id: 1,
        question: 'How does Schedulaa protect account and employee data?',
        answer:
          'Access is role-based, sensitive actions are logged, and user-facing flows are designed to avoid exposing protected data across roles.',
      },
      {
        id: 2,
        question: 'Do employees and managers see different data scopes?',
        answer:
          'Yes. Permissions are scoped by role so employee views, manager controls, and client-facing flows only expose the required data.',
      },
      {
        id: 3,
        question: 'How are payment flows handled?',
        answer:
          'Checkout and subscription flows are routed through Stripe integrations, and billing management is handled via secure portal links.',
      },
      {
        id: 4,
        question: 'Can we audit actions in payroll and scheduling?',
        answer:
          'Yes. Key operations such as approvals, edits, and workflow transitions are retained for operational review and compliance traceability.',
      },
      {
        id: 5,
        question: 'Where can I review your privacy commitments?',
        answer:
          'See the Privacy page for policy terms and contact support if your legal or compliance team needs additional clarification.',
      },
    ],
    termsItems: [
      {
        id: 1,
        question: 'Where do I review Terms and Conditions?',
        answer:
          'You can review the latest terms at any time from the Terms page in the footer and legal navigation links.',
      },
      {
        id: 2,
        question: 'What happens if I cancel a plan?',
        answer:
          'Plan management and cancellations are handled in billing settings through secure app routes and billing portal actions.',
      },
      {
        id: 3,
        question: 'Are trial and paid plan behaviors different?',
        answer:
          'Core access starts in trial mode, then billing workflows and plan limits apply based on the selected subscription tier.',
      },
      {
        id: 4,
        question: 'Can we use our own domain and branding?',
        answer:
          'Yes. Domain and brand controls are available through website and marketing modules, with setup guidance available in docs.',
      },
      {
        id: 5,
        question: 'How do support and response commitments work?',
        answer:
          'Support scope depends on your plan and use case. Contact options are listed on the support and contact pages for rollout teams.',
      },
    ],
    contact: {
      badge: 'Contact',
      title: 'Still have questions?',
      subtitle: "If your question isn't listed here, contact us and our team will help.",
      fullName: 'Full name',
      fullNamePlaceholder: 'Enter your name',
      email: 'Email address',
      emailPlaceholder: 'Enter your email',
      message: 'Message',
      messagePlaceholder: 'Enter your message',
      agreePrefix: 'I agree with the',
      agreeLink: 'terms and conditions',
      submit: 'Submit',
    },
    cta: {
      badge: 'Get Started',
      title: 'Need help with Schedulaa?',
      description: 'If you have any questions, feel free to reach out to our team.',
      button: 'Get started',
    },
  },
  es: {
    tabs: { general: 'General', changelog: 'Cambios', privacy: 'Privacidad', terms: 'Terminos y condiciones' },
    hero: {
      badge: 'FAQ',
      title: 'Preguntas frecuentes',
      subtitle: 'Encuentra respuestas claras sobre configuracion, privacidad, actualizaciones y politicas de la plataforma.',
    },
    generalItems: [
      {
        id: 1,
        question: '¿Que reemplaza Schedulaa en el stack de un negocio de servicios?',
        answer:
          'Schedulaa unifica reservas, planificacion de equipo, flujos de nomina, paginas web y reportes operativos para reducir herramientas y datos duplicados.',
      },
      {
        id: 2,
        question: '¿Los clientes pueden reservar online sin llamar al personal?',
        answer:
          'Si. Puedes publicar paginas de reserva con tu marca para que el cliente elija servicio, proveedor, fecha y hora, y luego confirme o pague segun tu flujo.',
      },
      {
        id: 3,
        question: '¿Schedulaa cubre flujos de manager y empleado?',
        answer:
          'Si. Los managers tienen vistas de control para personal, nomina y aprobaciones; los empleados tienen paneles para turnos, disponibilidad, invitaciones y recibos.',
      },
      {
        id: 4,
        question: '¿Puedo ejecutar nomina para Canada y Estados Unidos?',
        answer:
          'Schedulaa soporta flujos de nomina para Canada y EE. UU., con limites regionales documentados en las paginas de payroll y en docs.',
      },
      {
        id: 5,
        question: '¿Como empiezo si migro desde otra plataforma?',
        answer:
          'Comienza con un plan de prueba, importa servicios y equipo, publica tu pagina de reservas y luego configura nomina e integraciones con la checklist de despliegue.',
      },
    ],
    changelogItems: [
      {
        id: 1,
        question: '¿Con que frecuencia publican actualizaciones?',
        answer:
          'Publicamos de forma continua y registramos cambios relevantes en el changelog para que operaciones revise novedades antes de habilitarlas.',
      },
      {
        id: 2,
        question: '¿Las actualizaciones rompen rutas o enlaces existentes?',
        answer:
          'No. Los contratos de rutas publicas se mantienen estables y conservamos redirecciones compatibles para rutas legacy.',
      },
      {
        id: 3,
        question: '¿Como anuncian nuevas funciones de nomina o compliance?',
        answer:
          'Las actualizaciones importantes de nomina y compliance se documentan en changelog y docs, incluyendo advertencias de rollout cuando aplican.',
      },
      {
        id: 4,
        question: '¿Podemos probar funciones nuevas antes del lanzamiento completo?',
        answer:
          'Si. Los equipos validan primero en flujos de staging/demo y luego promueven a produccion cuando los responsables operativos aprueban.',
      },
      {
        id: 5,
        question: '¿Donde reviso el historial de mejoras?',
        answer:
          'Usa la pestaña changelog junto con docs de producto para revisar capacidades recientes, correcciones y mejoras de flujo.',
      },
    ],
    privacyItems: [
      {
        id: 1,
        question: '¿Como protege Schedulaa los datos de cuentas y empleados?',
        answer:
          'El acceso es por roles, las acciones sensibles se registran y los flujos de usuario evitan exponer datos protegidos entre roles.',
      },
      {
        id: 2,
        question: '¿Empleados y managers ven alcances de datos distintos?',
        answer:
          'Si. Los permisos se definen por rol para que las vistas de empleado, manager y cliente solo muestren los datos necesarios.',
      },
      {
        id: 3,
        question: '¿Como se gestionan los pagos?',
        answer:
          'Checkout y suscripciones se procesan con Stripe, y la gestion de facturacion se realiza mediante enlaces seguros al portal.',
      },
      {
        id: 4,
        question: '¿Podemos auditar acciones en nomina y planificacion?',
        answer:
          'Si. Operaciones clave como aprobaciones, ediciones y cambios de estado se conservan para revision operativa y trazabilidad.',
      },
      {
        id: 5,
        question: '¿Donde reviso sus compromisos de privacidad?',
        answer:
          'Consulta la pagina de Privacy para los terminos de politica y contacta soporte si tu equipo legal necesita mas detalle.',
      },
    ],
    termsItems: [
      {
        id: 1,
        question: '¿Donde consulto Terminos y condiciones?',
        answer:
          'Puedes revisar la version mas reciente en la pagina Terms desde el footer y la navegacion legal.',
      },
      {
        id: 2,
        question: '¿Que pasa si cancelo un plan?',
        answer:
          'La gestion y cancelacion de planes se hace en billing settings mediante rutas seguras del app y acciones del portal de facturacion.',
      },
      {
        id: 3,
        question: '¿Hay diferencia entre prueba y plan de pago?',
        answer:
          'El acceso base comienza en modo prueba; despues se aplican flujos de facturacion y limites segun el plan seleccionado.',
      },
      {
        id: 4,
        question: '¿Podemos usar nuestro propio dominio y marca?',
        answer:
          'Si. El control de dominio y branding esta disponible en website y marketing, con guia de implementacion en docs.',
      },
      {
        id: 5,
        question: '¿Como funcionan soporte y tiempos de respuesta?',
        answer:
          'El alcance de soporte depende de tu plan y caso de uso. Las opciones de contacto estan en las paginas de support y contact.',
      },
    ],
    contact: {
      badge: 'Contacto',
      title: '¿Aun tienes preguntas?',
      subtitle: 'Si no ves tu pregunta aqui, contactanos y te ayudamos.',
      fullName: 'Nombre completo',
      fullNamePlaceholder: 'Escribe tu nombre',
      email: 'Correo electronico',
      emailPlaceholder: 'Escribe tu correo',
      message: 'Mensaje',
      messagePlaceholder: 'Escribe tu mensaje',
      agreePrefix: 'Acepto los',
      agreeLink: 'terminos y condiciones',
      submit: 'Enviar',
    },
    cta: { badge: 'Comenzar', title: '¿Necesitas ayuda con Schedulaa?', description: 'Si tienes preguntas, nuestro equipo esta disponible.', button: 'Comenzar' },
  },
  fr: {
    tabs: { general: 'General', changelog: 'Journal', privacy: 'Confidentialite', terms: 'Conditions generales' },
    hero: {
      badge: 'FAQ',
      title: 'Questions frequentes',
      subtitle: 'Retrouvez des reponses claires sur la configuration, la confidentialite, les mises a jour et les politiques de la plateforme.',
    },
    generalItems: [
      {
        id: 1,
        question: 'Que remplace Schedulaa dans la stack d un service ?',
        answer:
          'Schedulaa regroupe reservation, planning equipe, workflows de paie, pages web et reporting operationnel pour reduire les outils disperses.',
      },
      {
        id: 2,
        question: 'Les clients peuvent-ils reserver en ligne sans appeler ?',
        answer:
          'Oui. Vous publiez des pages de reservation marquees ou le client choisit service, intervenant, date et heure, puis confirme ou paie selon votre flux.',
      },
      {
        id: 3,
        question: 'Schedulaa couvre-t-il les workflows manager et employe ?',
        answer:
          'Oui. Les managers ont les vues de controle pour staffing, paie et validations; les employes ont des dashboards pour shifts, disponibilites, invitations et fiches.',
      },
      {
        id: 4,
        question: 'Puis-je executer la paie pour le Canada et les Etats-Unis ?',
        answer:
          'Schedulaa prend en charge la paie Canada et Etats-Unis avec les limites regionales documentees dans les pages payroll et docs.',
      },
      {
        id: 5,
        question: 'Comment demarrer en migrant depuis une autre plateforme ?',
        answer:
          'Demarrez avec un plan d essai, importez services et equipe, publiez la page de reservation puis mappez paie et integrations via la checklist de deploiement.',
      },
    ],
    changelogItems: [
      {
        id: 1,
        question: 'A quelle frequence publiez-vous des mises a jour ?',
        answer:
          'Nous livrons en continu et publions les changements majeurs dans le changelog pour que les equipes operations valident avant activation.',
      },
      {
        id: 2,
        question: 'Les mises a jour cassent-elles les routes ou liens existants ?',
        answer:
          'Non. Les contrats de routes publiques restent stables et des redirections compatibles sont maintenues pour les anciens chemins marketing.',
      },
      {
        id: 3,
        question: 'Comment annoncez-vous les nouvelles fonctions paie/compliance ?',
        answer:
          'Les evolutions paie et compliance sont documentees dans le changelog et les docs, avec des notes de rollout quand c est necessaire.',
      },
      {
        id: 4,
        question: 'Peut-on tester les nouvelles fonctions avant un rollout complet ?',
        answer:
          'Oui. Les equipes valident en staging/demo puis passent en production apres validation des responsables operationnels.',
      },
      {
        id: 5,
        question: 'Ou consulter l historique des ameliorations ?',
        answer:
          'Utilisez l onglet changelog et les docs produit pour revoir les capacites livrees, correctifs et ameliorations de workflow.',
      },
    ],
    privacyItems: [
      {
        id: 1,
        question: 'Comment Schedulaa protege-t-il les donnees compte et employes ?',
        answer:
          'Les acces sont geres par role, les actions sensibles sont journalisees et les flux sont concus pour limiter l exposition des donnees.',
      },
      {
        id: 2,
        question: 'Employes et managers ont-ils des perimetres differents ?',
        answer:
          'Oui. Les permissions sont scopees par role pour que chaque vue n expose que les donnees necessaires.',
      },
      {
        id: 3,
        question: 'Comment les paiements sont-ils geres ?',
        answer:
          'Le checkout et les abonnements passent via Stripe et la gestion billing se fait via des liens portail securises.',
      },
      {
        id: 4,
        question: 'Peut-on auditer les actions paie et planning ?',
        answer:
          'Oui. Les operations cles comme validations, editions et transitions de workflow sont conservees pour la tracabilite.',
      },
      {
        id: 5,
        question: 'Ou consulter vos engagements de confidentialite ?',
        answer:
          'Consultez la page Privacy et contactez le support si votre equipe juridique/compliance a besoin de precisions.',
      },
    ],
    termsItems: [
      {
        id: 1,
        question: 'Ou consulter les Conditions generales ?',
        answer:
          'La version la plus recente est disponible a tout moment via la page Terms dans le footer et la navigation legale.',
      },
      {
        id: 2,
        question: 'Que se passe-t-il si je resilie un plan ?',
        answer:
          'La gestion et la resiliation de plan se font dans les billing settings via des routes app securisees et le portail de facturation.',
      },
      {
        id: 3,
        question: 'Y a-t-il une difference entre essai et plan payant ?',
        answer:
          'L acces de base demarre en essai, puis les flux de facturation et limites de plan s appliquent selon l abonnement choisi.',
      },
      {
        id: 4,
        question: 'Peut-on utiliser notre domaine et notre marque ?',
        answer:
          'Oui. Les controles domaine et branding sont disponibles dans website et marketing, avec guide de mise en place dans les docs.',
      },
      {
        id: 5,
        question: 'Comment fonctionnent le support et les delais de reponse ?',
        answer:
          'Le niveau de support depend du plan et du cas d usage. Les options de contact sont listees dans les pages support et contact.',
      },
    ],
    contact: {
      badge: 'Contact',
      title: 'Vous avez encore des questions ?',
      subtitle: 'Si votre question n est pas listee, contactez-nous.',
      fullName: 'Nom complet',
      fullNamePlaceholder: 'Entrez votre nom',
      email: 'Adresse email',
      emailPlaceholder: 'Entrez votre email',
      message: 'Message',
      messagePlaceholder: 'Entrez votre message',
      agreePrefix: 'J accepte les',
      agreeLink: 'conditions generales',
      submit: 'Envoyer',
    },
    cta: { badge: 'Commencer', title: "Besoin d'aide avec Schedulaa ?", description: 'Notre equipe peut vous accompagner.', button: 'Commencer' },
  },
  de: {
    tabs: { general: 'Allgemein', changelog: 'Changelog', privacy: 'Datenschutz', terms: 'AGB' },
    hero: {
      badge: 'FAQ',
      title: 'Haeufige Fragen',
      subtitle: 'Klare Antworten zu Setup, Datenschutz, Updates und Plattformrichtlinien.',
    },
    generalItems: [
      {
        id: 1,
        question: 'Was ersetzt Schedulaa im typischen Service-Business-Stack?',
        answer:
          'Schedulaa vereint Buchung, Workforce-Planung, Payroll-Workflows, Website-Seiten und Operations-Reporting, damit Teams weniger Tools und doppelte Dateneingabe haben.',
      },
      {
        id: 2,
        question: 'Koennen Kunden online buchen, ohne das Team anzurufen?',
        answer:
          'Ja. Sie koennen gebrandete Buchungsseiten veroeffentlichen, auf denen Kunden Service, Anbieter, Datum und Uhrzeit waehlen und anschliessend bestaetigen oder zahlen.',
      },
      {
        id: 3,
        question: 'Unterstuetzt Schedulaa Manager- und Employee-Workflows?',
        answer:
          'Ja. Manager erhalten Steuerungsansichten fuer Staffing, Payroll und Freigaben; Mitarbeitende haben Dashboards fuer Schichten, Verfuegbarkeit, Einladungen und Payslips.',
      },
      {
        id: 4,
        question: 'Kann ich Payroll fuer Kanada und die USA abwickeln?',
        answer:
          'Schedulaa unterstuetzt Kanada- und USA-Payroll-Workflows mit regionalen Grenzen, die in Payroll-Seiten und Docs dokumentiert sind.',
      },
      {
        id: 5,
        question: 'Wie starte ich bei einer Migration von einer anderen Plattform?',
        answer:
          'Starten Sie mit einem Testplan, importieren Sie Services und Team, veroeffentlichen Sie die Buchungsseite und mappen Sie dann Payroll und Integrationen mit der Rollout-Checkliste.',
      },
    ],
    changelogItems: [
      {
        id: 1,
        question: 'Wie oft liefern Sie Updates aus?',
        answer:
          'Wir liefern kontinuierlich und veroeffentlichen relevante Aenderungen im Changelog, damit Operations-Teams neue Funktionen vor der Aktivierung pruefen koennen.',
      },
      {
        id: 2,
        question: 'Brechen Produktupdates bestehende Routen oder Links?',
        answer:
          'Nein. Oeffentliche Route-Vertraege bleiben stabil und rueckwaertskompatible Redirects fuer Legacy-Pfade werden gepflegt.',
      },
      {
        id: 3,
        question: 'Wie werden neue Payroll- oder Compliance-Funktionen angekuendigt?',
        answer:
          'Wichtige Payroll- und Compliance-Updates werden im Changelog und in den Docs dokumentiert, inklusive Rollout-Hinweisen bei Bedarf.',
      },
      {
        id: 4,
        question: 'Koennen wir neue Funktionen vor dem Voll-Rollout testen?',
        answer:
          'Ja. Teams pruefen in Staging/Demo-Flows und gehen erst nach Freigabe der operativen Verantwortlichen in Produktion.',
      },
      {
        id: 5,
        question: 'Wo sehe ich historische Verbesserungen?',
        answer:
          'Nutzen Sie den Changelog-Tab und die Produkt-Dokumentation, um zuletzt gelieferte Features, Fixes und Workflow-Verbesserungen nachzuverfolgen.',
      },
    ],
    privacyItems: [
      {
        id: 1,
        question: 'Wie schuetzt Schedulaa Konto- und Mitarbeiterdaten?',
        answer:
          'Zugriffe sind rollenbasiert, sensible Aktionen werden protokolliert und Benutzerfluesse sind so gestaltet, dass geschuetzte Daten nicht zwischen Rollen offengelegt werden.',
      },
      {
        id: 2,
        question: 'Sehen Mitarbeitende und Manager unterschiedliche Datenumfaenge?',
        answer:
          'Ja. Berechtigungen sind pro Rolle begrenzt, sodass Employee-Ansichten, Manager-Steuerung und client-facing Flows nur notwendige Daten zeigen.',
      },
      {
        id: 3,
        question: 'Wie werden Zahlungsablaeufe umgesetzt?',
        answer:
          'Checkout- und Abo-Flows laufen ueber Stripe-Integrationen, und Billing-Management erfolgt ueber sichere Portal-Links.',
      },
      {
        id: 4,
        question: 'Koennen wir Aktionen in Payroll und Scheduling auditieren?',
        answer:
          'Ja. Kernoperationen wie Freigaben, Bearbeitungen und Workflow-Uebergaenge werden fuer operative Pruefung und Compliance-Nachvollziehbarkeit gespeichert.',
      },
      {
        id: 5,
        question: 'Wo finde ich Ihre Datenschutz-Zusagen?',
        answer:
          'Sehen Sie die Privacy-Seite fuer Richtlinien und kontaktieren Sie den Support, wenn Ihr Legal- oder Compliance-Team weitere Details braucht.',
      },
    ],
    termsItems: [
      {
        id: 1,
        question: 'Wo kann ich die AGB einsehen?',
        answer:
          'Die aktuellen Bedingungen finden Sie jederzeit auf der Terms-Seite ueber Footer und Legal-Navigation.',
      },
      {
        id: 2,
        question: 'Was passiert, wenn ich einen Plan kuendige?',
        answer:
          'Planverwaltung und Kuendigungen werden in den Billing-Einstellungen ueber sichere App-Routen und Portal-Aktionen abgewickelt.',
      },
      {
        id: 3,
        question: 'Unterscheiden sich Trial- und Paid-Plan-Verhalten?',
        answer:
          'Der Basiszugriff startet im Trial-Modus, danach greifen Billing-Workflows und Planlimits je nach gewaehltem Tarif.',
      },
      {
        id: 4,
        question: 'Koennen wir eigene Domain und eigenes Branding nutzen?',
        answer:
          'Ja. Domain- und Brand-Steuerung ist in Website- und Marketing-Modulen verfuegbar, inklusive Setup-Anleitung in den Docs.',
      },
      {
        id: 5,
        question: 'Wie funktionieren Support und Reaktionszeiten?',
        answer:
          'Supportumfang haengt von Plan und Use Case ab. Kontaktwege finden Sie in den Support- und Contact-Seiten.',
      },
    ],
    contact: {
      badge: 'Kontakt',
      title: 'Noch Fragen?',
      subtitle: 'Wenn Ihre Frage hier nicht steht, kontaktieren Sie uns.',
      fullName: 'Vollstaendiger Name',
      fullNamePlaceholder: 'Name eingeben',
      email: 'E-Mail-Adresse',
      emailPlaceholder: 'E-Mail eingeben',
      message: 'Nachricht',
      messagePlaceholder: 'Nachricht eingeben',
      agreePrefix: 'Ich akzeptiere die',
      agreeLink: 'Allgemeinen Geschaeftsbedingungen',
      submit: 'Senden',
    },
    cta: { badge: 'Loslegen', title: 'Brauchen Sie Hilfe mit Schedulaa?', description: 'Unser Team unterstuetzt Sie gerne.', button: 'Loslegen' },
  },
  pt: {
    tabs: { general: 'Geral', changelog: 'Atualizacoes', privacy: 'Privacidade', terms: 'Termos e condicoes' },
    hero: {
      badge: 'FAQ',
      title: 'Perguntas frequentes',
      subtitle: 'Respostas claras sobre configuracao, privacidade, atualizacoes e politicas da plataforma.',
    },
    generalItems: [
      {
        id: 1,
        question: 'O que o Schedulaa substitui no stack de um negocio de servicos?',
        answer:
          'O Schedulaa unifica agendamentos, operacoes de equipe, fluxos de folha, paginas do site e relatorios operacionais para reduzir ferramentas e retrabalho.',
      },
      {
        id: 2,
        question: 'Clientes conseguem agendar online sem ligar para a equipe?',
        answer:
          'Sim. Voce publica paginas de agendamento com sua marca, onde o cliente escolhe servico, profissional, data e horario para confirmar ou pagar.',
      },
      {
        id: 3,
        question: 'O Schedulaa atende fluxos de manager e funcionario?',
        answer:
          'Sim. Managers recebem visoes de controle para equipe, folha e aprovacoes; funcionarios usam dashboards para turnos, disponibilidade, convites e holerites.',
      },
      {
        id: 4,
        question: 'Posso rodar folha para Canada e Estados Unidos?',
        answer:
          'O Schedulaa suporta fluxos de folha para Canada e EUA, com limites regionais documentados nas paginas de payroll e docs.',
      },
      {
        id: 5,
        question: 'Como comecar migrando de outra plataforma?',
        answer:
          'Comece com um plano de teste, importe servicos e equipe, publique a pagina de agendamento e depois configure folha e integracoes com a checklist de rollout.',
      },
    ],
    changelogItems: [
      {
        id: 1,
        question: 'Com que frequencia voces lancam atualizacoes?',
        answer:
          'Fazemos entregas continuas e publicamos mudancas relevantes no changelog para que operacoes revise antes de ativar fluxos.',
      },
      {
        id: 2,
        question: 'Atualizacoes quebram rotas ou links existentes?',
        answer:
          'Nao. Contratos de rotas publicas permanecem estaveis e redirecionamentos compativeis sao mantidos para caminhos legados.',
      },
      {
        id: 3,
        question: 'Como novos recursos de folha/compliance sao anunciados?',
        answer:
          'Atualizacoes importantes de folha e compliance sao documentadas no changelog e em docs, incluindo alertas de rollout quando necessario.',
      },
      {
        id: 4,
        question: 'Podemos testar recursos novos antes do rollout completo?',
        answer:
          'Sim. As equipes validam em fluxos de staging/demo e promovem para producao apos aprovacao dos responsaveis operacionais.',
      },
      {
        id: 5,
        question: 'Onde vejo o historico de melhorias?',
        answer:
          'Use a aba de changelog e os docs do produto para revisar recursos lancados, correcoes e melhorias de workflow.',
      },
    ],
    privacyItems: [
      {
        id: 1,
        question: 'Como o Schedulaa protege dados de conta e funcionarios?',
        answer:
          'O acesso e por funcao, acoes sensiveis sao registradas e os fluxos evitam exposicao de dados protegidos entre papeis.',
      },
      {
        id: 2,
        question: 'Funcionarios e managers veem escopos diferentes de dados?',
        answer:
          'Sim. As permissoes sao limitadas por papel para que cada visao exponha apenas os dados necessarios.',
      },
      {
        id: 3,
        question: 'Como funcionam os fluxos de pagamento?',
        answer:
          'Checkout e assinaturas sao processados via Stripe, e a gestao de cobranca ocorre por links seguros para o portal.',
      },
      {
        id: 4,
        question: 'Podemos auditar acoes em folha e agendamento?',
        answer:
          'Sim. Operacoes-chave como aprovacoes, edicoes e transicoes de fluxo ficam registradas para revisao operacional e rastreabilidade.',
      },
      {
        id: 5,
        question: 'Onde reviso os compromissos de privacidade?',
        answer:
          'Veja a pagina Privacy para termos de politica e fale com o suporte se seu time juridico precisar de esclarecimentos adicionais.',
      },
    ],
    termsItems: [
      {
        id: 1,
        question: 'Onde consulto Termos e condicoes?',
        answer:
          'Voce pode revisar os termos mais recentes na pagina Terms pelo rodape e navegacao legal.',
      },
      {
        id: 2,
        question: 'O que acontece se eu cancelar um plano?',
        answer:
          'Gestao e cancelamento de plano acontecem em billing settings por rotas seguras do app e acoes no portal de cobranca.',
      },
      {
        id: 3,
        question: 'Existe diferenca entre teste e plano pago?',
        answer:
          'O acesso principal comeca no modo trial, depois fluxos de cobranca e limites de plano passam a valer conforme o nivel de assinatura.',
      },
      {
        id: 4,
        question: 'Podemos usar nosso proprio dominio e marca?',
        answer:
          'Sim. Controles de dominio e branding existem nos modulos de site e marketing, com guia de setup em docs.',
      },
      {
        id: 5,
        question: 'Como funcionam suporte e tempo de resposta?',
        answer:
          'O escopo de suporte depende do plano e do caso de uso. As opcoes de contato estao nas paginas support e contact.',
      },
    ],
    contact: {
      badge: 'Contato',
      title: 'Ainda tem duvidas?',
      subtitle: 'Se sua pergunta nao estiver aqui, fale com nosso time.',
      fullName: 'Nome completo',
      fullNamePlaceholder: 'Digite seu nome',
      email: 'E-mail',
      emailPlaceholder: 'Digite seu e-mail',
      message: 'Mensagem',
      messagePlaceholder: 'Digite sua mensagem',
      agreePrefix: 'Concordo com os',
      agreeLink: 'termos e condicoes',
      submit: 'Enviar',
    },
    cta: { badge: 'Comecar', title: 'Precisa de ajuda com o Schedulaa?', description: 'Se tiver duvidas, nosso time pode ajudar.', button: 'Comecar' },
  },
  ru: {
    tabs: { general: 'Общее', changelog: 'Обновления', privacy: 'Конфиденциальность', terms: 'Условия' },
    hero: {
      badge: 'FAQ',
      title: 'Часто задаваемые вопросы',
      subtitle: 'Понятные ответы о настройке, приватности, обновлениях и правилах платформы.',
    },
    generalItems: [
      {
        id: 1,
        question: 'Что Schedulaa заменяет в типичном стеке сервисного бизнеса?',
        answer:
          'Schedulaa объединяет бронирование, планирование персонала, payroll-процессы, страницы сайта и операционную аналитику, чтобы убрать лишние инструменты.',
      },
      {
        id: 2,
        question: 'Могут ли клиенты бронировать онлайн без звонка сотрудникам?',
        answer:
          'Да. Вы публикуете брендированные страницы бронирования, где клиент выбирает услугу, специалиста, дату и время, затем подтверждает или оплачивает запись.',
      },
      {
        id: 3,
        question: 'Поддерживаются ли сценарии для менеджеров и сотрудников?',
        answer:
          'Да. Менеджеры получают контроль staffing, payroll и approvals, а сотрудники - отдельные панели для смен, доступности, приглашений и payslips.',
      },
      {
        id: 4,
        question: 'Можно ли запускать payroll для Канады и США?',
        answer:
          'Schedulaa поддерживает payroll-потоки для Канады и США с региональными ограничениями, описанными в payroll-страницах и docs.',
      },
      {
        id: 5,
        question: 'Как начать миграцию с другой платформы?',
        answer:
          'Начните с trial-плана, импортируйте услуги и команду, запустите страницу бронирования, затем подключите payroll и интеграции по rollout-checklist.',
      },
    ],
    changelogItems: [
      {
        id: 1,
        question: 'Как часто выходят обновления?',
        answer:
          'Мы поставляем обновления непрерывно и фиксируем значимые изменения в changelog, чтобы операционные команды проверяли их до активации.',
      },
      {
        id: 2,
        question: 'Ломают ли обновления существующие маршруты и ссылки?',
        answer:
          'Нет. Публичные route-контракты сохраняются стабильными, а для legacy-путей поддерживаются обратносуместимые редиректы.',
      },
      {
        id: 3,
        question: 'Как анонсируются новые payroll/compliance-функции?',
        answer:
          'Крупные изменения payroll и compliance описываются в changelog и docs, включая rollout-оговорки при необходимости.',
      },
      {
        id: 4,
        question: 'Можно ли тестировать функции до полного rollout?',
        answer:
          'Да. Команды валидируют в staging/demo-потоках и переводят в production после одобрения операционных владельцев.',
      },
      {
        id: 5,
        question: 'Где смотреть историю улучшений?',
        answer:
          'Используйте вкладку changelog и продуктовые docs для просмотра недавно выпущенных возможностей, исправлений и улучшений workflow.',
      },
    ],
    privacyItems: [
      {
        id: 1,
        question: 'Как Schedulaa защищает данные аккаунта и сотрудников?',
        answer:
          'Доступ ролевой, чувствительные действия журналируются, а пользовательские потоки спроектированы так, чтобы не раскрывать защищенные данные между ролями.',
      },
      {
        id: 2,
        question: 'Видят ли сотрудники и менеджеры разные объемы данных?',
        answer:
          'Да. Права ограничены по ролям, поэтому employee-вью, manager-контроли и клиентские потоки показывают только необходимые данные.',
      },
      {
        id: 3,
        question: 'Как обрабатываются платежные потоки?',
        answer:
          'Checkout и подписки идут через Stripe-интеграции, а управление биллингом выполняется через безопасные ссылки на портал.',
      },
      {
        id: 4,
        question: 'Можно ли аудитировать действия в payroll и scheduling?',
        answer:
          'Да. Ключевые операции, включая approvals, edits и переходы workflow, сохраняются для операционного контроля и compliance-трассировки.',
      },
      {
        id: 5,
        question: 'Где посмотреть ваши privacy-обязательства?',
        answer:
          'Смотрите страницу Privacy и обращайтесь в поддержку, если вашей юридической или compliance-команде нужны дополнительные пояснения.',
      },
    ],
    termsItems: [
      {
        id: 1,
        question: 'Где ознакомиться с Terms and Conditions?',
        answer:
          'Актуальная версия всегда доступна на странице Terms через footer и legal-навигацию.',
      },
      {
        id: 2,
        question: 'Что происходит при отмене плана?',
        answer:
          'Управление и отмена планов выполняются в billing-настройках через защищенные app-маршруты и действия billing-портала.',
      },
      {
        id: 3,
        question: 'Чем отличается trial от paid-плана?',
        answer:
          'Базовый доступ начинается в trial-режиме, затем применяются billing-процессы и лимиты выбранного тарифного уровня.',
      },
      {
        id: 4,
        question: 'Можно ли использовать собственный домен и бренд?',
        answer:
          'Да. Управление доменом и брендингом доступно в website и marketing-модулях с инструкциями в docs.',
      },
      {
        id: 5,
        question: 'Как работают поддержка и сроки ответа?',
        answer:
          'Объем поддержки зависит от плана и сценария использования. Каналы связи указаны на страницах support и contact.',
      },
    ],
    contact: {
      badge: 'Контакт',
      title: 'Остались вопросы?',
      subtitle: 'Если нужного ответа нет, напишите нам — поможем.',
      fullName: 'Полное имя',
      fullNamePlaceholder: 'Введите имя',
      email: 'Email',
      emailPlaceholder: 'Введите email',
      message: 'Сообщение',
      messagePlaceholder: 'Введите сообщение',
      agreePrefix: 'Я принимаю',
      agreeLink: 'условия использования',
      submit: 'Отправить',
    },
    cta: { badge: 'Начать', title: 'Нужна помощь по Schedulaa?', description: 'Наша команда готова помочь с запуском.', button: 'Начать' },
  },
  zh: {
    tabs: { general: '通用', changelog: '更新日志', privacy: '隐私', terms: '条款与条件' },
    hero: {
      badge: 'FAQ',
      title: '常见问题',
      subtitle: '集中解答配置、隐私、更新和平台政策相关问题。',
    },
    generalItems: [
      {
        id: 1,
        question: 'Schedulaa 在服务型业务中替代了哪些工具？',
        answer:
          'Schedulaa 将预约、团队排班、薪资流程、网站页面和运营报表整合到同一系统，减少工具分散和重复录入。',
      },
      {
        id: 2,
        question: '客户可以不打电话直接在线预约吗？',
        answer:
          '可以。你可以发布品牌化预约页，让客户选择服务、人员、日期和时间，并按你的流程完成确认或支付。',
      },
      {
        id: 3,
        question: '是否同时支持管理者和员工流程？',
        answer:
          '支持。管理者可使用人员、薪资和审批控制面板，员工则有班次、可用性、邀请和工资单专属看板。',
      },
      {
        id: 4,
        question: '可以运行加拿大和美国薪资吗？',
        answer:
          'Schedulaa 支持加拿大和美国薪资流程，具体区域支持边界已在 payroll 页面和 docs 中说明。',
      },
      {
        id: 5,
        question: '从其他平台迁移时应如何开始？',
        answer:
          '先从试用计划开始，导入服务与员工，发布预约页面，再按 rollout 与 docs 清单配置薪资和集成。',
      },
    ],
    changelogItems: [
      {
        id: 1,
        question: '你们多久发布一次更新？',
        answer:
          '我们持续发布，并在 changelog 中记录关键变更，方便运营团队在启用前完成评估。',
      },
      {
        id: 2,
        question: '产品更新会破坏现有路由或链接吗？',
        answer:
          '不会。公共路由契约保持稳定，旧营销路径会保留向后兼容重定向。',
      },
      {
        id: 3,
        question: '新的薪资或合规功能如何公告？',
        answer:
          '重要薪资与合规更新会记录在 changelog 与 docs，并在需要时附带 rollout 注意事项。',
      },
      {
        id: 4,
        question: '可以在全面上线前先测试新功能吗？',
        answer:
          '可以。团队可先在 staging/demo 流程验证，运营负责人签字后再发布到生产。',
      },
      {
        id: 5,
        question: '在哪里查看历史改进？',
        answer:
          '可通过 changelog 标签和产品 docs 查看近期上线能力、修复与流程优化。',
      },
    ],
    privacyItems: [
      {
        id: 1,
        question: 'Schedulaa 如何保护账户与员工数据？',
        answer:
          '系统采用角色权限、敏感操作日志和最小暴露流程设计，避免跨角色泄露受保护数据。',
      },
      {
        id: 2,
        question: '员工和管理者看到的数据范围是否不同？',
        answer:
          '是。权限按角色划分，员工视图、管理控制和客户端流程仅暴露必要数据。',
      },
      {
        id: 3,
        question: '支付流程如何处理？',
        answer:
          '结账与订阅通过 Stripe 集成处理，账单管理通过安全的门户链接完成。',
      },
      {
        id: 4,
        question: '薪资与排班操作可以审计吗？',
        answer:
          '可以。审批、编辑和流程状态变更等关键操作都会保留，便于运营复核和合规追踪。',
      },
      {
        id: 5,
        question: '在哪里查看你们的隐私承诺？',
        answer:
          '请查看 Privacy 页面；如果你的法务或合规团队需要更多说明，可联系支持团队。',
      },
    ],
    termsItems: [
      {
        id: 1,
        question: '在哪里查看条款与条件？',
        answer:
          '你可以随时通过页脚和法律导航访问最新 Terms 页面。',
      },
      {
        id: 2,
        question: '取消套餐后会发生什么？',
        answer:
          '套餐管理与取消在 billing 设置中完成，走安全 app 路由和账单门户流程。',
      },
      {
        id: 3,
        question: '试用和付费套餐行为是否不同？',
        answer:
          '核心访问从试用开始，随后按所选订阅层级应用账单流程和套餐限制。',
      },
      {
        id: 4,
        question: '可以使用自有域名和品牌吗？',
        answer:
          '可以。网站与营销模块支持域名和品牌控制，docs 提供完整设置指引。',
      },
      {
        id: 5,
        question: '支持范围和响应承诺如何定义？',
        answer:
          '支持范围取决于套餐和使用场景，support 与 contact 页面列出了联系方式。',
      },
    ],
    contact: {
      badge: '联系',
      title: '还有问题？',
      subtitle: '如果这里没有你的问题，请直接联系团队。',
      fullName: '姓名',
      fullNamePlaceholder: '请输入姓名',
      email: '邮箱地址',
      emailPlaceholder: '请输入邮箱',
      message: '留言',
      messagePlaceholder: '请输入留言',
      agreePrefix: '我同意',
      agreeLink: '条款与条件',
      submit: '提交',
    },
    cta: { badge: '开始使用', title: '需要 Schedulaa 方面的帮助？', description: '有疑问可随时联系团队。', button: '开始使用' },
  },
  fa: {
    tabs: { general: 'عمومي', changelog: 'تغييرات', privacy: 'حريم خصوصي', terms: 'قوانين و شرايط' },
    hero: { badge: 'FAQ', title: 'سوالات متداول', subtitle: 'پاسخ هاي روشن درباره راه اندازي، حريم خصوصي و سياست ها.' },
    generalItems: [
      {
        id: 1,
        question: 'Schedulaa چه ابزارهايي را در يک پلتفرم يکپارچه مي کند؟',
        answer:
          'Schedulaa رزرو مشتري، زمان بندي نيروي کار، جريان هاي حقوق و دستمزد، صفحات وب سايت و گزارش هاي عملياتي را در يک سيستم يکپارچه ارائه مي دهد.',
      },
      {
        id: 2,
        question: 'آيا مشتري ها مي توانند بدون تماس تلفني رزرو انجام دهند؟',
        answer:
          'بله. صفحه رزرو برندشده منتشر مي شود و مشتري مي تواند خدمت، ارائه دهنده، روز و ساعت را انتخاب و رزرو را تاييد يا پرداخت کند.',
      },
      {
        id: 3,
        question: 'آيا پنل مدير و کارمند از هم جدا هستند؟',
        answer:
          'بله. مديرها ابزارهاي کنترل عمليات، تاييدها و حقوق دارند و کارمندها داشبورد مخصوص شيفت، در دسترس بودن، دعوت نامه و فيش حقوقي مي بينند.',
      },
      {
        id: 4,
        question: 'آيا براي کانادا و آمريکا جريان حقوق و دستمزد پشتيباني مي شود؟',
        answer:
          'بله. جريان هاي کانادا و آمريکا پشتيباني مي شود و محدوده هاي منطقه اي و جزئيات اجرا در صفحات payroll و مستندات مشخص شده است.',
      },
      {
        id: 5,
        question: 'اگر از سيستم ديگري مهاجرت کنيم، شروع کار چگونه است؟',
        answer:
          'با پلن آزمايشي شروع کنيد، خدمات و اعضاي تيم را وارد کنيد، صفحه رزرو را منتشر کنيد و سپس تنظيمات حقوق و يکپارچه سازي ها را با چک ليست راه اندازي انجام دهيد.',
      },
    ],
    changelogItems: [
      {
        id: 1,
        question: 'هر چند وقت يکبار آپديت منتشر مي شود؟',
        answer:
          'انتشارها به صورت پيوسته انجام مي شوند و تغييرات مهم در changelog ثبت مي شود تا تيم عمليات قبل از فعال سازي، جزئيات را ببيند.',
      },
      {
        id: 2,
        question: 'آيا آپديت ها باعث شکستن لينک ها و مسيرهاي قبلي مي شوند؟',
        answer:
          'خير. قرارداد مسيرهاي عمومي پايدار نگه داشته مي شود و براي آدرس هاي قديمي، ريدايرکت سازگار تعريف مي شود.',
      },
      {
        id: 3,
        question: 'ويژگي هاي جديد حقوق و انطباق چگونه اعلام مي شوند؟',
        answer:
          'تغييرات مهم حقوق و انطباق در changelog و صفحات docs منتشر مي شوند و در صورت نياز، محدوديت هاي rollout هم ذکر مي شوند.',
      },
      {
        id: 4,
        question: 'آيا مي توانيم قبل از اجراي عمومي ويژگي هاي جديد را تست کنيم؟',
        answer:
          'بله. تيم ها مي توانند در محيط demo يا staging اعتبارسنجي کنند و بعد از تاييد مالک عمليات به توليد منتقل کنند.',
      },
      {
        id: 5,
        question: 'تاريخچه بهبودها را از کجا ببينيم؟',
        answer:
          'از تب changelog در همين صفحه و همچنين docs محصول براي بررسي قابليت هاي جديد، اصلاحات و بهبودهاي workflow استفاده کنيد.',
      },
    ],
    privacyItems: [
      {
        id: 1,
        question: 'داده هاي حساب، پرسنل و مشتري چگونه محافظت مي شوند؟',
        answer:
          'دسترسي ها مبتني بر نقش هستند، اقدامات حساس ثبت مي شوند و نمايش داده ها بر اساس نياز هر نقش محدود مي شود.',
      },
      {
        id: 2,
        question: 'آيا سطح دسترسي مدير و کارمند متفاوت است؟',
        answer:
          'بله. محدوده داده براي مدير، کارمند و مشتري از هم جدا است تا هر کاربر فقط اطلاعات موردنياز خود را ببيند.',
      },
      {
        id: 3,
        question: 'پرداخت ها چگونه مديريت مي شوند؟',
        answer:
          'جريان هاي checkout و subscription از طريق Stripe انجام مي شوند و مديريت صورتحساب از مسيرهاي امن app و پورتال صورتحساب انجام مي شود.',
      },
      {
        id: 4,
        question: 'آيا براي عمليات حقوق و زمان بندي گزارش حسابرسي داريم؟',
        answer:
          'بله. اقدامات کليدي مانند تاييدها، ويرايش ها و تغيير وضعيت workflow ثبت مي شوند تا رهگيري عملياتي و انطباق ممکن باشد.',
      },
      {
        id: 5,
        question: 'سياست هاي حريم خصوصي را از کجا مطالعه کنيم؟',
        answer:
          'صفحه Privacy مرجع اصلي سياست ها است. اگر تيم حقوقي يا انطباق شما سوال تخصصي داشته باشد مي توانيد با پشتيباني تماس بگيريد.',
      },
    ],
    termsItems: [
      {
        id: 1,
        question: 'شرايط استفاده و قوانين را از کجا ببينيم؟',
        answer:
          'آخرين نسخه شرايط در صفحه Terms قرار دارد و هميشه از فوتر قابل دسترسي است.',
      },
      {
        id: 2,
        question: 'اگر پلن را لغو کنيم چه اتفاقي مي افتد؟',
        answer:
          'مديريت پلن، ارتقا و لغو از طريق بخش billing در app و پورتال صورتحساب امن انجام مي شود.',
      },
      {
        id: 3,
        question: 'تفاوت دوره آزمايشي و پلن هاي پرداختي چيست؟',
        answer:
          'در دوره آزمايشي به قابليت هاي هسته دسترسي داريد و پس از انتخاب پلن، قوانين ظرفيت و billing بر اساس سطح اشتراک اعمال مي شوند.',
      },
      {
        id: 4,
        question: 'آيا مي توانيم دامنه و برند خودمان را استفاده کنيم؟',
        answer:
          'بله. تنظيمات دامنه و برند در ماژول هاي وب سايت و مارکتينگ در دسترس است و راهنماي اجرا در docs وجود دارد.',
      },
      {
        id: 5,
        question: 'تعهدات پشتيباني و زمان پاسخ چگونه تعريف مي شود؟',
        answer:
          'سطح پشتيباني به پلن و نوع استفاده بستگي دارد. مسيرهاي تماس در صفحات contact و client support در دسترس هستند.',
      },
    ],
    contact: {
      badge: 'تماس',
      title: 'هنوز سوالي داريد؟',
      subtitle: 'اگر سوال شما اينجا نيست، با تيم ما تماس بگيريد.',
      fullName: 'نام کامل',
      fullNamePlaceholder: 'نام خود را وارد کنيد',
      email: 'ايميل',
      emailPlaceholder: 'ايميل خود را وارد کنيد',
      message: 'پيام',
      messagePlaceholder: 'پيام خود را وارد کنيد',
      agreePrefix: 'من با',
      agreeLink: 'قوانين و شرايط',
      submit: 'ارسال',
    },
    cta: { badge: 'شروع کنيد', title: 'به کمک درباره Schedulaa نياز داريد؟', description: 'تيم ما براي پاسخگويي در دسترس است.', button: 'شروع کنيد' },
  },
  ar: {
    tabs: { general: 'عام', changelog: 'سجل التغييرات', privacy: 'الخصوصية', terms: 'الشروط والاحكام' },
    hero: {
      badge: 'FAQ',
      title: 'الاسئلة الشائعة',
      subtitle: 'اجابات واضحة حول الاعداد والخصوصية والتحديثات وسياسات المنصة.',
    },
    generalItems: [
      {
        id: 1,
        question: 'ما الذي تستبدله Schedulaa في منظومة عمل شركات الخدمات؟',
        answer:
          'تجمع Schedulaa الحجز وجدولة الفرق وتدفقات الرواتب وصفحات الموقع وتقارير التشغيل في منصة واحدة لتقليل تعدد الادوات وتكرار الادخال.',
      },
      {
        id: 2,
        question: 'هل يمكن للعملاء الحجز عبر الانترنت بدون الاتصال بالفريق؟',
        answer:
          'نعم. يمكنك نشر صفحات حجز بعلامتك التجارية ليختار العميل الخدمة ومقدمها والتاريخ والوقت ثم يؤكد الحجز او يدفع حسب التدفق الذي تحدده.',
      },
      {
        id: 3,
        question: 'هل تدعم المنصة سير عمل المدير والموظف معا؟',
        answer:
          'نعم. يحصل المدير على لوحات تحكم للتوظيف والرواتب والموافقات، بينما يحصل الموظف على لوحات خاصة بالمناوبات والتوفر والدعوات وكشوف الرواتب.',
      },
      {
        id: 4,
        question: 'هل يمكن تشغيل الرواتب لكندا والولايات المتحدة؟',
        answer:
          'تدعم Schedulaa تدفقات الرواتب لكندا والولايات المتحدة مع حدود دعم اقليمية موثقة في صفحات payroll و docs.',
      },
      {
        id: 5,
        question: 'كيف ابدا اذا كنت انتقل من منصة اخرى؟',
        answer:
          'ابدأ بخطة تجريبية، ثم استورد الخدمات والموظفين، وانشر صفحة الحجز، وبعدها اربط الرواتب والتكاملات عبر قائمة rollout و docs.',
      },
    ],
    changelogItems: [
      {
        id: 1,
        question: 'كم مرة تطلقون تحديثات؟',
        answer:
          'نقوم بالاطلاق بشكل مستمر وننشر التغييرات المهمة في changelog حتى تراجعها فرق التشغيل قبل تفعيلها.',
      },
      {
        id: 2,
        question: 'هل تكسر التحديثات المسارات او الروابط الحالية؟',
        answer:
          'لا. عقود المسارات العامة تبقى ثابتة مع الحفاظ على تحويلات متوافقة للمسارات التسويقية القديمة.',
      },
      {
        id: 3,
        question: 'كيف يتم الاعلان عن ميزات الرواتب او الامتثال الجديدة؟',
        answer:
          'يتم توثيق تحديثات الرواتب والامتثال الرئيسية في changelog وصفحات docs مع ملاحظات rollout عند الحاجة.',
      },
      {
        id: 4,
        question: 'هل يمكن اختبار الميزات قبل الاطلاق الكامل؟',
        answer:
          'نعم. يمكن للفرق التحقق عبر تدفقات staging/demo ثم النقل للانتاج بعد موافقة مالكي التشغيل.',
      },
      {
        id: 5,
        question: 'اين يمكنني رؤية سجل التحسينات السابقة؟',
        answer:
          'استخدم تبويب changelog مع docs المنتج لمراجعة الميزات المضافة حديثا والاصلاحات وتحسينات سير العمل.',
      },
    ],
    privacyItems: [
      {
        id: 1,
        question: 'كيف تحمي Schedulaa بيانات الحساب والموظفين؟',
        answer:
          'الوصول مبني على الادوار، والعمليات الحساسة مسجلة، كما ان التدفقات مصممة لتجنب كشف البيانات المحمية بين الادوار.',
      },
      {
        id: 2,
        question: 'هل يرى الموظفون والمديرون نطاقات بيانات مختلفة؟',
        answer:
          'نعم. يتم تحديد الصلاحيات حسب الدور بحيث تعرض واجهات الموظف والمدير والعملاء البيانات المطلوبة فقط.',
      },
      {
        id: 3,
        question: 'كيف تتم معالجة تدفقات الدفع؟',
        answer:
          'يتم تمرير الدفع والاشتراكات عبر تكاملات Stripe، بينما تتم ادارة الفوترة عبر روابط بوابة امنة.',
      },
      {
        id: 4,
        question: 'هل يمكن تدقيق الاجراءات في الرواتب والجدولة؟',
        answer:
          'نعم. العمليات الرئيسية مثل الموافقات والتعديلات وانتقالات سير العمل تبقى محفوظة للمراجعة التشغيلية وتتبع الامتثال.',
      },
      {
        id: 5,
        question: 'اين يمكن مراجعة التزامات الخصوصية لديكم؟',
        answer:
          'راجع صفحة Privacy لسياسات الخصوصية، وتواصل مع الدعم اذا احتاج فريقك القانوني او الامتثال الى توضيحات اضافية.',
      },
    ],
    termsItems: [
      {
        id: 1,
        question: 'اين اراجع الشروط والاحكام؟',
        answer:
          'يمكنك مراجعة احدث الشروط في اي وقت من صفحة Terms ضمن تذييل الموقع وروابط التنقل القانونية.',
      },
      {
        id: 2,
        question: 'ماذا يحدث اذا الغيت الخطة؟',
        answer:
          'تتم ادارة الخطط والالغاء من اعدادات الفوترة عبر مسارات تطبيق امنة واجراءات بوابة الفوترة.',
      },
      {
        id: 3,
        question: 'هل يختلف سلوك التجربة عن الخطة المدفوعة؟',
        answer:
          'يبدأ الوصول الاساسي في وضع التجربة، ثم تطبق تدفقات الفوترة وحدود الخطة حسب مستوى الاشتراك المختار.',
      },
      {
        id: 4,
        question: 'هل يمكن استخدام نطاقنا وهويتنا البصرية؟',
        answer:
          'نعم. التحكم بالنطاق والهوية متاح ضمن وحدات الموقع والتسويق مع ارشادات اعداد كاملة في docs.',
      },
      {
        id: 5,
        question: 'كيف تعمل التزامات الدعم وزمن الاستجابة؟',
        answer:
          'نطاق الدعم يعتمد على خطتك وحالة الاستخدام. خيارات التواصل متاحة في صفحات support و contact.',
      },
    ],
    contact: {
      badge: 'تواصل',
      title: 'ما زالت لديك اسئلة؟',
      subtitle: 'اذا لم تجد سؤالك هنا، تواصل معنا وسنساعدك.',
      fullName: 'الاسم الكامل',
      fullNamePlaceholder: 'ادخل اسمك',
      email: 'البريد الالكتروني',
      emailPlaceholder: 'ادخل بريدك الالكتروني',
      message: 'الرسالة',
      messagePlaceholder: 'ادخل رسالتك',
      agreePrefix: 'اوافق على',
      agreeLink: 'الشروط والاحكام',
      submit: 'ارسال',
    },
    cta: { badge: 'ابدأ الان', title: 'هل تحتاج مساعدة بخصوص Schedulaa؟', description: 'اذا كانت لديك اسئلة، فريقنا جاهز للمساعدة.', button: 'ابدأ الان' },
  },
};

export const getFaqCopy = (locale: AppLocale | string | null | undefined): FaqCopy => {
  const key = String(locale || 'en');
  return base[key] || base.en;
};
