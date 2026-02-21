'use client';

import { useEffect, useMemo, useState } from 'react';
import { useLocale } from 'next-intl';

const API_ORIGIN =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  process.env.NEXT_PUBLIC_API_ORIGIN ||
  (process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://scheduling-application.onrender.com');
const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.schedulaa.com';

type Company = {
  slug: string;
  name: string;
  tagline?: string;
  industry?: string;
  logo_url?: string;
};

type Preview = {
  hero?: { heading?: string; image?: { url?: string; url_public?: string; href?: string; src?: string } | string };
  page_style?: { linkColor?: string };
  primary_color?: string;
};

const PROFESSION_VALUES = [
  'all',
  'general',
  'salon',
  'spa_medspa',
  'barbershop',
  'fitness',
  'yoga_pilates',
  'wellness',
  'therapy',
  'medical_clinic',
  'dental',
  'chiropractic',
  'physiotherapy',
  'tattoo_piercing',
  'photography',
  'event_planning',
  'education_tutoring',
  'music_lessons',
  'home_services',
  'cleaning',
  'real_estate',
  'legal',
  'tax_accounting',
  'finance_advisory',
  'consulting',
  'it_services',
  'hr_recruiting',
  'auto_services',
  'pet_care',
  'hospitality',
  'coaching',
  'notary',
] as const;

type ProfessionValue = (typeof PROFESSION_VALUES)[number];
type CopyKey = 'en' | 'fa' | 'ru' | 'zh' | 'es' | 'fr' | 'de' | 'ar' | 'pt';

type DirectoryCopy = {
  badge: string;
  heading: string;
  subtitle: string;
  filterLabel: string;
  loading: string;
  empty: string;
  error: string;
  fallbackTagline: string;
  viewSite: string;
  options: Record<ProfessionValue, string>;
};

const DIRECTORY_COPY: Record<CopyKey, DirectoryCopy> = {
  en: {
    badge: 'Live directory',
    heading: 'Registered websites by industry',
    subtitle: 'Browse businesses currently using Schedulaa websites and booking flows.',
    filterLabel: 'Industry',
    loading: 'Loading directory...',
    empty: 'No businesses found for this industry yet.',
    error: 'We could not load the directory right now. Please try again shortly.',
    fallbackTagline: 'Book services, sell products, and manage appointments online.',
    viewSite: 'View site',
    options: {
      all: 'All industries',
      general: 'General / Other',
      salon: 'Salon & Beauty',
      spa_medspa: 'Spa / Medspa',
      barbershop: 'Barbershop',
      fitness: 'Fitness & Personal Training',
      yoga_pilates: 'Yoga / Pilates Studio',
      wellness: 'Wellness & Massage',
      therapy: 'Therapy & Counseling',
      medical_clinic: 'Medical Clinic',
      dental: 'Dental',
      chiropractic: 'Chiropractic',
      physiotherapy: 'Physiotherapy',
      tattoo_piercing: 'Tattoo & Piercing',
      photography: 'Photography & Creative',
      event_planning: 'Event Planning',
      education_tutoring: 'Education & Tutoring',
      music_lessons: 'Music & Arts Lessons',
      home_services: 'Home Services / Trades',
      cleaning: 'Cleaning Services',
      real_estate: 'Real Estate',
      legal: 'Legal Services',
      tax_accounting: 'Tax & Accounting',
      finance_advisory: 'Finance & Advisory',
      consulting: 'Business Consulting',
      it_services: 'IT Services & MSP',
      hr_recruiting: 'HR & Recruiting',
      auto_services: 'Auto Services',
      pet_care: 'Pet Care & Grooming',
      hospitality: 'Hospitality & Tourism',
      coaching: 'Life / Career Coaching',
      notary: 'Notary & Admin Services',
    },
  },
  fa: {
    badge: 'دایرکتوری زنده',
    heading: 'وب سایت های ثبت شده بر اساس صنعت',
    subtitle: 'کسب و کارهایی را ببینید که هم اکنون از وب سایت و جریان رزرو Schedulaa استفاده می کنند.',
    filterLabel: 'صنعت',
    loading: 'در حال بارگذاری دایرکتوری...',
    empty: 'هنوز کسب و کاری برای این صنعت پیدا نشد.',
    error: 'در حال حاضر بارگذاری دایرکتوری ممکن نیست. کمی بعد دوباره تلاش کنید.',
    fallbackTagline: 'خدمات را رزرو کنید، محصول بفروشید و نوبت ها را آنلاین مدیریت کنید.',
    viewSite: 'مشاهده سایت',
    options: {
      all: 'همه صنایع',
      general: 'عمومی / سایر',
      salon: 'سالن و زیبایی',
      spa_medspa: 'اسپا / مداسپا',
      barbershop: 'آرایشگاه مردانه',
      fitness: 'فیتنس و مربی شخصی',
      yoga_pilates: 'استودیو یوگا / پیلاتس',
      wellness: 'سلامت و ماساژ',
      therapy: 'تراپی و مشاوره',
      medical_clinic: 'کلینیک پزشکی',
      dental: 'دندانپزشکی',
      chiropractic: 'کایروپرکتیک',
      physiotherapy: 'فیزیوتراپی',
      tattoo_piercing: 'تتو و پیرسینگ',
      photography: 'عکاسی و خلاقیت',
      event_planning: 'برنامه ریزی رویداد',
      education_tutoring: 'آموزش و تدریس',
      music_lessons: 'آموزش موسیقی و هنر',
      home_services: 'خدمات خانگی / فنی',
      cleaning: 'خدمات نظافت',
      real_estate: 'املاک',
      legal: 'خدمات حقوقی',
      tax_accounting: 'مالیات و حسابداری',
      finance_advisory: 'مالی و مشاوره',
      consulting: 'مشاوره کسب و کار',
      it_services: 'خدمات IT و MSP',
      hr_recruiting: 'منابع انسانی و جذب',
      auto_services: 'خدمات خودرو',
      pet_care: 'نگهداری و آرایش حیوانات',
      hospitality: 'هتلداری و گردشگری',
      coaching: 'کوچینگ زندگی / شغلی',
      notary: 'دفتر اسناد و خدمات اداری',
    },
  },
  ru: {
    badge: 'Живой каталог',
    heading: 'Зарегистрированные сайты по отраслям',
    subtitle: 'Смотрите компании, которые уже используют сайты и бронирование Schedulaa.',
    filterLabel: 'Отрасль',
    loading: 'Загрузка каталога...',
    empty: 'Для этой отрасли пока нет компаний.',
    error: 'Не удалось загрузить каталог. Попробуйте еще раз чуть позже.',
    fallbackTagline: 'Бронируйте услуги, продавайте товары и управляйте записью онлайн.',
    viewSite: 'Открыть сайт',
    options: {
      all: 'Все отрасли',
      general: 'Общее / Другое',
      salon: 'Салон и красота',
      spa_medspa: 'Спа / Медспа',
      barbershop: 'Барбершоп',
      fitness: 'Фитнес и персональный тренинг',
      yoga_pilates: 'Студия йоги / пилатеса',
      wellness: 'Велнес и массаж',
      therapy: 'Терапия и консультации',
      medical_clinic: 'Медицинская клиника',
      dental: 'Стоматология',
      chiropractic: 'Хиропрактика',
      physiotherapy: 'Физиотерапия',
      tattoo_piercing: 'Тату и пирсинг',
      photography: 'Фотография и креатив',
      event_planning: 'Организация мероприятий',
      education_tutoring: 'Образование и репетиторство',
      music_lessons: 'Уроки музыки и искусства',
      home_services: 'Домашние услуги / Ремонт',
      cleaning: 'Клининговые услуги',
      real_estate: 'Недвижимость',
      legal: 'Юридические услуги',
      tax_accounting: 'Налоги и бухгалтерия',
      finance_advisory: 'Финансы и консалтинг',
      consulting: 'Бизнес-консалтинг',
      it_services: 'IT-услуги и MSP',
      hr_recruiting: 'HR и рекрутинг',
      auto_services: 'Автосервисы',
      pet_care: 'Уход за животными',
      hospitality: 'Гостеприимство и туризм',
      coaching: 'Лайф / карьерный коучинг',
      notary: 'Нотариат и админ-услуги',
    },
  },
  zh: {
    badge: '实时目录',
    heading: '按行业查看已注册网站',
    subtitle: '浏览当前正在使用 Schedulaa 网站和预约流程的企业。',
    filterLabel: '行业',
    loading: '目录加载中...',
    empty: '该行业暂时没有企业。',
    error: '暂时无法加载目录，请稍后再试。',
    fallbackTagline: '在线预约服务、销售商品并管理客户排期。',
    viewSite: '查看网站',
    options: {
      all: '全部行业',
      general: '通用 / 其他',
      salon: '沙龙与美业',
      spa_medspa: '水疗 / 医美',
      barbershop: '理发店',
      fitness: '健身与私教',
      yoga_pilates: '瑜伽 / 普拉提工作室',
      wellness: '健康与按摩',
      therapy: '治疗与咨询',
      medical_clinic: '医疗诊所',
      dental: '牙科',
      chiropractic: '脊椎护理',
      physiotherapy: '物理治疗',
      tattoo_piercing: '纹身与穿刺',
      photography: '摄影与创意',
      event_planning: '活动策划',
      education_tutoring: '教育与家教',
      music_lessons: '音乐与艺术课程',
      home_services: '上门服务 / 技工',
      cleaning: '清洁服务',
      real_estate: '房地产',
      legal: '法律服务',
      tax_accounting: '税务与会计',
      finance_advisory: '金融与顾问',
      consulting: '商业咨询',
      it_services: 'IT 服务与 MSP',
      hr_recruiting: '人力与招聘',
      auto_services: '汽车服务',
      pet_care: '宠物护理与美容',
      hospitality: '酒店与旅游',
      coaching: '人生 / 职业教练',
      notary: '公证与行政服务',
    },
  },
  es: {
    badge: 'Directorio en vivo',
    heading: 'Sitios registrados por industria',
    subtitle: 'Explora empresas que hoy usan sitios y flujos de reserva de Schedulaa.',
    filterLabel: 'Industria',
    loading: 'Cargando directorio...',
    empty: 'Todavia no hay negocios para esta industria.',
    error: 'No pudimos cargar el directorio ahora. Intentalo de nuevo en breve.',
    fallbackTagline: 'Reserva servicios, vende productos y gestiona citas en linea.',
    viewSite: 'Ver sitio',
    options: {
      all: 'Todas las industrias',
      general: 'General / Otro',
      salon: 'Salon y belleza',
      spa_medspa: 'Spa / Medspa',
      barbershop: 'Barberia',
      fitness: 'Fitness y entrenamiento personal',
      yoga_pilates: 'Estudio de yoga / pilates',
      wellness: 'Bienestar y masaje',
      therapy: 'Terapia y consejeria',
      medical_clinic: 'Clinica medica',
      dental: 'Dental',
      chiropractic: 'Quiropractica',
      physiotherapy: 'Fisioterapia',
      tattoo_piercing: 'Tatuajes y piercing',
      photography: 'Fotografia y creatividad',
      event_planning: 'Planificacion de eventos',
      education_tutoring: 'Educacion y tutorias',
      music_lessons: 'Clases de musica y arte',
      home_services: 'Servicios del hogar / oficios',
      cleaning: 'Servicios de limpieza',
      real_estate: 'Bienes raices',
      legal: 'Servicios legales',
      tax_accounting: 'Impuestos y contabilidad',
      finance_advisory: 'Finanzas y asesoria',
      consulting: 'Consultoria empresarial',
      it_services: 'Servicios IT y MSP',
      hr_recruiting: 'RR. HH. y reclutamiento',
      auto_services: 'Servicios automotrices',
      pet_care: 'Cuidado y peluqueria de mascotas',
      hospitality: 'Hospitalidad y turismo',
      coaching: 'Coaching de vida / carrera',
      notary: 'Notaria y servicios administrativos',
    },
  },
  fr: {
    badge: 'Annuaire en direct',
    heading: 'Sites enregistres par secteur',
    subtitle: 'Parcourez les entreprises qui utilisent actuellement les sites et reservations Schedulaa.',
    filterLabel: 'Secteur',
    loading: 'Chargement de l annuaire...',
    empty: 'Aucune entreprise pour ce secteur pour le moment.',
    error: 'Impossible de charger l annuaire pour l instant. Reessayez dans quelques instants.',
    fallbackTagline: 'Reservez des services, vendez des produits et gerez les rendez-vous en ligne.',
    viewSite: 'Voir le site',
    options: {
      all: 'Tous les secteurs',
      general: 'General / Autre',
      salon: 'Salon et beaute',
      spa_medspa: 'Spa / Medspa',
      barbershop: 'Barbershop',
      fitness: 'Fitness et coaching personnel',
      yoga_pilates: 'Studio yoga / pilates',
      wellness: 'Bien-etre et massage',
      therapy: 'Therapie et accompagnement',
      medical_clinic: 'Clinique medicale',
      dental: 'Dentaire',
      chiropractic: 'Chiropraxie',
      physiotherapy: 'Physiotherapie',
      tattoo_piercing: 'Tatouage et piercing',
      photography: 'Photographie et creation',
      event_planning: 'Organisation d evenements',
      education_tutoring: 'Education et tutorat',
      music_lessons: 'Cours de musique et d arts',
      home_services: 'Services a domicile / metiers',
      cleaning: 'Services de nettoyage',
      real_estate: 'Immobilier',
      legal: 'Services juridiques',
      tax_accounting: 'Fiscalite et comptabilite',
      finance_advisory: 'Finance et conseil',
      consulting: 'Conseil aux entreprises',
      it_services: 'Services IT et MSP',
      hr_recruiting: 'RH et recrutement',
      auto_services: 'Services auto',
      pet_care: 'Soins et toilettage animaux',
      hospitality: 'Hospitalite et tourisme',
      coaching: 'Coaching vie / carriere',
      notary: 'Notariat et services administratifs',
    },
  },
  de: {
    badge: 'Live-Verzeichnis',
    heading: 'Registrierte Websites nach Branche',
    subtitle: 'Durchsuchen Sie Unternehmen, die aktuell Schedulaa-Websites und Buchungsflusse nutzen.',
    filterLabel: 'Branche',
    loading: 'Verzeichnis wird geladen...',
    empty: 'Fur diese Branche wurden noch keine Unternehmen gefunden.',
    error: 'Das Verzeichnis konnte gerade nicht geladen werden. Bitte versuchen Sie es gleich erneut.',
    fallbackTagline: 'Dienstleistungen buchen, Produkte verkaufen und Termine online verwalten.',
    viewSite: 'Website ansehen',
    options: {
      all: 'Alle Branchen',
      general: 'Allgemein / Sonstige',
      salon: 'Salon und Beauty',
      spa_medspa: 'Spa / Medspa',
      barbershop: 'Barbershop',
      fitness: 'Fitness und Personal Training',
      yoga_pilates: 'Yoga / Pilates Studio',
      wellness: 'Wellness und Massage',
      therapy: 'Therapie und Beratung',
      medical_clinic: 'Medizinische Klinik',
      dental: 'Zahnmedizin',
      chiropractic: 'Chiropraktik',
      physiotherapy: 'Physiotherapie',
      tattoo_piercing: 'Tattoo und Piercing',
      photography: 'Fotografie und Kreativ',
      event_planning: 'Eventplanung',
      education_tutoring: 'Bildung und Nachhilfe',
      music_lessons: 'Musik- und Kunstunterricht',
      home_services: 'Haushaltsservices / Handwerk',
      cleaning: 'Reinigungsdienste',
      real_estate: 'Immobilien',
      legal: 'Rechtsdienstleistungen',
      tax_accounting: 'Steuern und Buchhaltung',
      finance_advisory: 'Finanzen und Beratung',
      consulting: 'Unternehmensberatung',
      it_services: 'IT-Services und MSP',
      hr_recruiting: 'HR und Recruiting',
      auto_services: 'Auto-Services',
      pet_care: 'Tierpflege und Grooming',
      hospitality: 'Gastgewerbe und Tourismus',
      coaching: 'Life / Karriere Coaching',
      notary: 'Notar- und Verwaltungsdienste',
    },
  },
  ar: {
    badge: 'الدليل المباشر',
    heading: 'مواقع مسجلة حسب القطاع',
    subtitle: 'تصفح الشركات التي تستخدم حاليا مواقع Schedulaa وتدفقات الحجز.',
    filterLabel: 'القطاع',
    loading: 'جار تحميل الدليل...',
    empty: 'لا توجد شركات لهذا القطاع حتى الآن.',
    error: 'تعذر تحميل الدليل حاليا. يرجى المحاولة مرة اخرى بعد قليل.',
    fallbackTagline: 'احجز الخدمات وبيع المنتجات وادارة المواعيد عبر الانترنت.',
    viewSite: 'عرض الموقع',
    options: {
      all: 'كل القطاعات',
      general: 'عام / اخرى',
      salon: 'الصالون والجمال',
      spa_medspa: 'السبا / الميدسبا',
      barbershop: 'صالون الحلاقة',
      fitness: 'اللياقة والتدريب الشخصي',
      yoga_pilates: 'استوديو يوغا / بيلاتس',
      wellness: 'العافية والمساج',
      therapy: 'العلاج والاستشارات',
      medical_clinic: 'عيادة طبية',
      dental: 'طب الاسنان',
      chiropractic: 'العلاج بتقويم العمود الفقري',
      physiotherapy: 'العلاج الطبيعي',
      tattoo_piercing: 'الوشم والثقب',
      photography: 'التصوير والاعمال الابداعية',
      event_planning: 'تنظيم الفعاليات',
      education_tutoring: 'التعليم والدروس الخصوصية',
      music_lessons: 'دروس الموسيقى والفنون',
      home_services: 'خدمات منزلية / مهنية',
      cleaning: 'خدمات التنظيف',
      real_estate: 'العقارات',
      legal: 'الخدمات القانونية',
      tax_accounting: 'الضرائب والمحاسبة',
      finance_advisory: 'التمويل والاستشارات',
      consulting: 'استشارات الاعمال',
      it_services: 'خدمات تقنية المعلومات و MSP',
      hr_recruiting: 'الموارد البشرية والتوظيف',
      auto_services: 'خدمات السيارات',
      pet_care: 'رعاية الحيوانات الاليفة',
      hospitality: 'الضيافة والسياحة',
      coaching: 'التدريب الحياتي / المهني',
      notary: 'خدمات التوثيق والادارة',
    },
  },
  pt: {
    badge: 'Diretorio ao vivo',
    heading: 'Sites registrados por industria',
    subtitle: 'Navegue por empresas que hoje usam sites e fluxos de agendamento da Schedulaa.',
    filterLabel: 'Industria',
    loading: 'Carregando diretorio...',
    empty: 'Nenhuma empresa encontrada para esta industria ainda.',
    error: 'Nao foi possivel carregar o diretorio agora. Tente novamente em instantes.',
    fallbackTagline: 'Agende servicos, venda produtos e gerencie compromissos online.',
    viewSite: 'Ver site',
    options: {
      all: 'Todas as industrias',
      general: 'Geral / Outro',
      salon: 'Salao e beleza',
      spa_medspa: 'Spa / Medspa',
      barbershop: 'Barbearia',
      fitness: 'Fitness e treino pessoal',
      yoga_pilates: 'Estudio de yoga / pilates',
      wellness: 'Bem-estar e massagem',
      therapy: 'Terapia e aconselhamento',
      medical_clinic: 'Clinica medica',
      dental: 'Odontologia',
      chiropractic: 'Quiropraxia',
      physiotherapy: 'Fisioterapia',
      tattoo_piercing: 'Tatuagem e piercing',
      photography: 'Fotografia e criativo',
      event_planning: 'Planejamento de eventos',
      education_tutoring: 'Educacao e tutoria',
      music_lessons: 'Aulas de musica e artes',
      home_services: 'Servicos residenciais / tecnicos',
      cleaning: 'Servicos de limpeza',
      real_estate: 'Imoveis',
      legal: 'Servicos juridicos',
      tax_accounting: 'Impostos e contabilidade',
      finance_advisory: 'Financas e consultoria',
      consulting: 'Consultoria empresarial',
      it_services: 'Servicos de TI e MSP',
      hr_recruiting: 'RH e recrutamento',
      auto_services: 'Servicos automotivos',
      pet_care: 'Cuidados e grooming de pets',
      hospitality: 'Hospitalidade e turismo',
      coaching: 'Coaching de vida / carreira',
      notary: 'Cartorio e servicos administrativos',
    },
  },
};

const normalizeLocale = (locale: string): CopyKey => {
  const base = locale.split('-')[0] as CopyKey;
  return DIRECTORY_COPY[base] ? base : 'en';
};

const buildProfessionOptions = (copy: DirectoryCopy) =>
  PROFESSION_VALUES.map((value) => ({ value, label: copy.options[value] }));

const industryLabel = (value: string | undefined, options: Array<{ value: string; label: string }>) => {
  const selected = options.find((opt) => opt.value === (value || 'general'));
  return selected?.label || options.find((opt) => opt.value === 'general')?.label || '';
};

const buildPublicSiteUrl = (slug?: string) => {
  const safeSlug = (slug || '').trim().replace(/^\/+|\/+$/g, '');
  if (!safeSlug) return APP_ORIGIN;
  return `${APP_ORIGIN}/${encodeURIComponent(safeSlug)}?embed=0`;
};

export default function IndustryDirectoryLiveSection() {
  const locale = normalizeLocale(useLocale());
  const copy = DIRECTORY_COPY[locale];
  const professionOptions = useMemo(() => buildProfessionOptions(copy), [copy]);

  const [filter, setFilter] = useState('all');
  const [companies, setCompanies] = useState<Company[]>([]);
  const [previews, setPreviews] = useState<Record<string, Preview | null | undefined>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    const loadDirectory = async () => {
      setLoading(true);
      setError('');
      try {
        const params = new URLSearchParams();
        if (filter !== 'all') params.set('industry', filter);
        const url = `${API_ORIGIN}/public/industry-directory${params.toString() ? `?${params.toString()}` : ''}`;
        const response = await fetch(url, { method: 'GET', cache: 'no-store' });
        if (!response.ok) throw new Error('directory_fetch_failed');
        const payload = await response.json();
        const list = Array.isArray(payload?.companies) ? payload.companies : [];
        if (!active) return;
        setCompanies(list);
        if (!list.length) setError(copy.empty);
      } catch {
        if (!active) return;
        setCompanies([]);
        setError(copy.error);
      } finally {
        if (active) setLoading(false);
      }
    };
    loadDirectory();
    return () => {
      active = false;
    };
  }, [copy.empty, copy.error, filter]);

  useEffect(() => {
    let active = true;
    const loadPreviews = async () => {
      const missing = companies
        .map((company) => company.slug)
        .filter(Boolean)
        .filter((slug) => previews[slug] === undefined)
        .slice(0, 30);
      if (!missing.length) return;

      const results = await Promise.all(
        missing.map(async (slug) => {
          try {
            const response = await fetch(
              `${API_ORIGIN}/api/public/${encodeURIComponent(slug)}/website?fields=preview`,
              { method: 'GET', cache: 'no-store' },
            );
            if (!response.ok) return [slug, null] as const;
            const payload = await response.json();
            return [slug, payload?.preview || null] as const;
          } catch {
            return [slug, null] as const;
          }
        }),
      );

      if (!active) return;
      setPreviews((current) => {
        const next = { ...current };
        results.forEach(([slug, data]) => {
          next[slug] = data;
        });
        return next;
      });
    };

    loadPreviews();
    return () => {
      active = false;
    };
  }, [companies, previews]);

  const visibleCompanies = useMemo(() => companies.slice(0, 24), [companies]);

  return (
    <section className="pb-16 md:pb-20">
      <div className="main-container">
        <div className="rounded-[24px] border border-stroke-1 bg-white p-6 shadow-1 dark:border-stroke-7 dark:bg-background-8 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <span className="badge badge-cyan-v2">{copy.badge}</span>
              <h2 className="text-heading-3">{copy.heading}</h2>
              <p className="max-w-[860px]">{copy.subtitle}</p>
            </div>
            <div className="min-w-[240px] md:max-w-[300px]">
              <label htmlFor="industry-filter" className="mb-1 block text-tagline-2 font-medium text-secondary dark:text-accent">
                {copy.filterLabel}
              </label>
              <select
                id="industry-filter"
                className="w-full rounded-[12px] border border-stroke-1 bg-background-1 px-3 py-2 text-tagline-2 dark:border-stroke-7 dark:bg-background-6"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
              >
                {professionOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {error ? <p className="mt-4 rounded-[12px] bg-background-2 px-3 py-2 text-tagline-2 dark:bg-background-6">{error}</p> : null}

          {loading && !visibleCompanies.length ? (
            <p className="mt-6 text-tagline-2">{copy.loading}</p>
          ) : (
            <div className="mt-6 grid grid-cols-12 gap-4">
              {visibleCompanies.map((company) => {
                const preview = previews[company.slug];
                const heroImage =
                  typeof preview?.hero?.image === 'string'
                    ? preview.hero.image
                    : preview?.hero?.image?.url ||
                      preview?.hero?.image?.url_public ||
                      preview?.hero?.image?.href ||
                      preview?.hero?.image?.src ||
                      company.logo_url ||
                      '';
                const heading = preview?.hero?.heading || company.tagline || company.name;
                const accent = preview?.page_style?.linkColor || preview?.primary_color || '#0ea5e9';

                return (
                  <article
                    key={company.slug}
                    className="col-span-12 overflow-hidden rounded-[18px] border border-stroke-1 bg-white shadow-1 dark:border-stroke-7 dark:bg-background-7 md:col-span-6 lg:col-span-4"
                  >
                    <div className="relative h-[180px] bg-background-2 dark:bg-background-6">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: heroImage
                            ? `linear-gradient(180deg, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0.62) 100%), url(${heroImage})`
                            : `linear-gradient(180deg, ${accent} 0%, #0f172a 100%)`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                      <div className="absolute inset-x-3 bottom-3 text-white">
                        <p className="text-tagline-3 uppercase tracking-[0.12em] text-white/80">
                          {industryLabel(company.industry, professionOptions)}
                        </p>
                        <h3 className="mt-1 text-heading-6 text-white">{company.name}</h3>
                        <p className="mt-1 line-clamp-2 text-tagline-2 text-white/86">{heading}</p>
                      </div>
                    </div>

                    <div className="space-y-3 p-4">
                      <p className="line-clamp-2 text-tagline-2 text-secondary/70 dark:text-accent/72">
                        {company.tagline || copy.fallbackTagline}
                      </p>
                      <a
                        href={buildPublicSiteUrl(company.slug)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm hover:btn-secondary dark:hover:btn-accent"
                      >
                        {copy.viewSite}
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
