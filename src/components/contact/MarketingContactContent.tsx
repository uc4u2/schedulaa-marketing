'use client';

import { FormEvent, useState } from 'react';
import PageShell from '@/components/shared/layout/PageShell';
import { usePathname } from 'next/navigation';
import { detectLocaleFromPath } from '@/utils/locale';

const API_ORIGIN =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  process.env.NEXT_PUBLIC_API_ORIGIN ||
  (process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://scheduling-application.onrender.com');

const FAQ = [
  {
    question: 'How fast will someone reply?',
    answer: 'Enterprise rollout specialists respond within one business day for scheduling, payroll, and migration requests.',
  },
  {
    question: 'Do you offer implementation services?',
    answer: 'Yes. Our team handles data imports, template mapping, staff onboarding, and payroll validation for every location.',
  },
  {
    question: 'How do partners or resellers reach you?',
    answer: 'Email admin@schedulaa.com and we will route your note to our partnership, integration, or reseller teams.',
  },
];

const PLAN_OPTIONS = ['Starter', 'Plus', 'Pro', 'Enterprise', 'Partnership', 'Migration Support'];
const SUPPORT_ACCORDION = [
  {
    title: 'How do these rollout tracks support growth?',
    body: 'Schedulaa combines booking, payroll, staffing, and website operations so teams can scale without tool sprawl.',
    points: [
      'Operational workflows in one command center',
      'Cross-team visibility for managers and staff',
      'Faster launches with guided rollout milestones',
      'Lower maintenance across booking, payroll, and website ops',
    ],
  },
  {
    title: 'Are the workflows flexible for different businesses?',
    body: 'Yes. We tailor onboarding for salons, clinics, tutors, agencies, and multi-location service teams.',
    points: [
      'Industry-aware setup playbooks',
      'Role-based process mapping',
      'Migration support for legacy data',
    ],
  },
  {
    title: 'Can Schedulaa handle higher traffic and workload?',
    body: 'The platform is built for operational growth with reusable templates, automation triggers, and analytics.',
    points: [
      'Template-driven rollout at scale',
      'Automation for reminders, compliance, and follow-ups',
      'Live visibility into workload and throughput',
    ],
  },
  {
    title: 'Do I need technical skills to launch?',
    body: 'No. Teams can launch quickly with implementation support, guided setup, and operational checklists.',
    points: ['Guided onboarding sessions', 'Rollout checklists', 'Support coverage during launch windows'],
  },
  {
    title: 'Can this integrate with current software?',
    body: 'Yes. We support Zapier, QuickBooks, Xero, and operational integrations for reporting and finance handoffs.',
    points: ['QuickBooks/Xero payroll exports', 'Zapier automation hooks', 'API-friendly operations workflows'],
  },
];
const DIRECT_LINES = ['Sales: +1 (647) 849-4913', 'Admin: admin@schedulaa.com'];
const HQ_ADDRESS = '171 Harbord Street, Toronto, ON M5S 1H3';
const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=171%20Harbord%20Street%2C%20Toronto%2C%20ON%20M5S%201H3&t=&z=15&ie=UTF8&iwloc=&output=embed';
const MAP_DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=171+Harbord+Street+Toronto+ON+M5S+1H3';

export default function MarketingContactContent() {
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname);
  const planOptionsByLocale: Record<string, string[]> = {
    fa: ['استارتر', 'پلاس', 'پرو', 'سازماني', 'همکاري', 'پشتيباني مهاجرت'],
    ru: ['Starter', 'Plus', 'Pro', 'Enterprise', 'Партнерство', 'Поддержка миграции'],
    zh: ['入门版', '增强版', '专业版', '企业版', '合作伙伴', '迁移支持'],
    es: ['Inicial', 'Plus', 'Pro', 'Enterprise', 'Partnership', 'Soporte de migracion'],
    fr: ['Starter', 'Plus', 'Pro', 'Enterprise', 'Partenariat', 'Support migration'],
    de: ['Starter', 'Plus', 'Pro', 'Enterprise', 'Partnerschaft', 'Migrationssupport'],
    ar: ['مبتدئ', 'بلس', 'برو', 'مؤسسي', 'شراكة', 'دعم الترحيل'],
    pt: ['Inicial', 'Plus', 'Pro', 'Enterprise', 'Parceria', 'Suporte de migracao'],
  };
  const planOptions = planOptionsByLocale[locale] || PLAN_OPTIONS;
  const copyByLocale: Record<string, any> = {
    fa: {
      badge: 'تماس', heroTitle: 'بياييد درباره اجراي شما صحبت کنيم.', heroBody: 'براي اجرا، مشارکت يا مهاجرت داده با تيم ما تماس بگيريد.',
      emailUs: 'ايميل به ما', call: 'تماس +1 (647) 849-4913', sendMessage: 'ارسال پيام', name: 'نام', email: 'ايميل',
      phone: 'تلفن', company: 'شرکت', message: 'پيام', submit: 'ارسال', submitting: 'در حال ارسال...',
      directLines: 'راه هاي ارتباطي', visitHq: 'بازديد از دفتر', toronto: 'دفتر تورنتو', directions: 'مسيريابي',
      growTitle: 'ساخت و رشد با ابزارهاي مقياس پذير', quickAnswers: 'پاسخ سريع مي خواهيد؟',
      required: 'نام، ايميل و پيام را وارد کنيد.', success: 'پيام شما ثبت شد. به زودي پاسخ مي دهيم.', failed: 'ارسال انجام نشد. دوباره تلاش کنيد.',
    },
    ru: {
      badge: 'Контакт', heroTitle: 'Обсудим ваш запуск.', heroBody: 'Нужна помощь с внедрением, партнерством или миграцией? Напишите нам.',
      emailUs: 'Написать', call: 'Позвонить +1 (647) 849-4913', sendMessage: 'Отправить сообщение', name: 'Имя', email: 'Email',
      phone: 'Телефон', company: 'Компания', message: 'Сообщение', submit: 'Отправить', submitting: 'Отправка...',
      directLines: 'Прямые контакты', visitHq: 'Наш офис', toronto: 'Штаб-квартира в Торонто', directions: 'Построить маршрут',
      growTitle: 'Развивайтесь с масштабируемыми инструментами', quickAnswers: 'Нужны быстрые ответы?',
      required: 'Укажите имя, email и сообщение.', success: 'Спасибо! Мы скоро ответим.', failed: 'Не удалось отправить сообщение. Попробуйте снова.',
    },
    zh: {
      badge: '联系', heroTitle: '一起讨论你的上线计划。', heroBody: '如需实施、合作或迁移支持，请联系 Schedulaa 团队。',
      emailUs: '发送邮件', call: '致电 +1 (647) 849-4913', sendMessage: '发送消息', name: '姓名', email: '邮箱',
      phone: '电话', company: '公司', message: '留言', submit: '提交', submitting: '提交中...',
      directLines: '直接联系方式', visitHq: '到访总部', toronto: '多伦多总部', directions: '获取路线',
      growTitle: '用可扩展工具实现增长', quickAnswers: '需要快速答案？',
      required: '请填写姓名、邮箱和留言。', success: '提交成功，我们会尽快回复。', failed: '发送失败，请重试。',
    },
    es: {
      badge: 'Contacto', heroTitle: 'Hablemos de tu implementacion.', heroBody: 'Para implementacion, partnership o migracion, nuestro equipo responde rapido.',
      emailUs: 'Escribirnos', call: 'Llamar +1 (647) 849-4913', sendMessage: 'Enviar mensaje', name: 'Nombre', email: 'Correo',
      phone: 'Telefono', company: 'Empresa', message: 'Mensaje', submit: 'Enviar', submitting: 'Enviando...',
      directLines: 'Lineas directas', visitHq: 'Visita nuestra sede', toronto: 'Sede Toronto', directions: 'Como llegar',
      growTitle: 'Construye y crece con herramientas escalables', quickAnswers: '¿Necesitas respuestas rapidas?',
      required: 'Incluye nombre, correo y mensaje.', success: 'Gracias. Te responderemos pronto.', failed: 'No se pudo enviar. Intenta otra vez.',
    },
    fr: {
      badge: 'Contact', heroTitle: 'Parlons de votre deploiement.', heroBody: "Besoin d'implementation, de partenariat ou de migration ? Nous repondons vite.",
      emailUs: 'Envoyer un email', call: 'Appeler +1 (647) 849-4913', sendMessage: 'Envoyer un message', name: 'Nom', email: 'Email',
      phone: 'Telephone', company: 'Entreprise', message: 'Message', submit: 'Envoyer', submitting: 'Envoi...',
      directLines: 'Contacts directs', visitHq: 'Visiter le siege', toronto: 'Siege de Toronto', directions: "Itineraire",
      growTitle: 'Construisez et grandissez avec des outils evolutifs', quickAnswers: 'Besoin de reponses rapides ?',
      required: 'Veuillez renseigner nom, email et message.', success: 'Merci. Nous revenons vers vous rapidement.', failed: "Echec de l'envoi. Reessayez.",
    },
    de: {
      badge: 'Kontakt', heroTitle: 'Lassen Sie uns ueber Ihren Rollout sprechen.', heroBody: 'Fuer Implementierung, Partnerschaft oder Migration hilft unser Team schnell.',
      emailUs: 'E-Mail senden', call: 'Anrufen +1 (647) 849-4913', sendMessage: 'Nachricht senden', name: 'Name', email: 'E-Mail',
      phone: 'Telefon', company: 'Unternehmen', message: 'Nachricht', submit: 'Senden', submitting: 'Wird gesendet...',
      directLines: 'Direkte Kontakte', visitHq: 'Hauptsitz besuchen', toronto: 'Hauptsitz Toronto', directions: 'Route anzeigen',
      growTitle: 'Mit skalierbaren Tools aufbauen und wachsen', quickAnswers: 'Brauchen Sie schnelle Antworten?',
      required: 'Bitte Name, E-Mail und Nachricht angeben.', success: 'Danke. Wir melden uns in Kuerze.', failed: 'Senden fehlgeschlagen. Bitte erneut versuchen.',
    },
    ar: {
      badge: 'تواصل', heroTitle: 'دعنا نتحدث عن خطة التنفيذ لديك.', heroBody: 'للتنفيذ او الشراكات او دعم الترحيل، تواصل مع فريقنا.',
      emailUs: 'راسلنا', call: 'اتصل +1 (647) 849-4913', sendMessage: 'ارسل رسالة', name: 'الاسم', email: 'البريد الالكتروني',
      phone: 'الهاتف', company: 'الشركة', message: 'الرسالة', submit: 'ارسال', submitting: 'جاري الارسال...',
      directLines: 'قنوات التواصل المباشرة', visitHq: 'زيارة المقر', toronto: 'مقر تورنتو', directions: 'الاتجاهات',
      growTitle: 'ابنِ ونمِّ باستخدام أدوات قابلة للتوسع', quickAnswers: 'تحتاج اجابات سريعة؟',
      required: 'يرجى ادخال الاسم والبريد والرسالة.', success: 'شكرا. سنعود اليك قريبا.', failed: 'تعذر ارسال الرسالة. حاول مرة اخرى.',
    },
    pt: {
      badge: 'Contato', heroTitle: 'Vamos falar sobre sua implementacao.', heroBody: 'Para implementacao, parceria ou migracao, nosso time responde rapido.',
      emailUs: 'Enviar email', call: 'Ligar +1 (647) 849-4913', sendMessage: 'Enviar mensagem', name: 'Nome', email: 'Email',
      phone: 'Telefone', company: 'Empresa', message: 'Mensagem', submit: 'Enviar', submitting: 'Enviando...',
      directLines: 'Contatos diretos', visitHq: 'Visite nossa sede', toronto: 'Sede de Toronto', directions: 'Como chegar',
      growTitle: 'Construa e cresca com ferramentas escalaveis', quickAnswers: 'Precisa de respostas rapidas?',
      required: 'Inclua nome, email e mensagem.', success: 'Obrigado! Retornaremos em breve.', failed: 'Nao foi possivel enviar. Tente novamente.',
    },
  };
  const copy = copyByLocale[locale] || {
    badge: 'Contact', heroTitle: "Let's talk about your rollout.", heroBody: 'Looking for a custom implementation, partner program, or migration help? Our specialists respond within one business day.',
    emailUs: 'Email us', call: 'Call +1 (647) 849-4913', sendMessage: 'Send a message', name: 'Name', email: 'Email',
    phone: 'Phone', company: 'Company', message: 'Message', submit: 'Submit', submitting: 'Submitting...',
    directLines: 'Direct lines', visitHq: 'Visit our HQ', toronto: 'Toronto headquarters', directions: 'Get directions',
    growTitle: 'Build & grow with scalable tools', quickAnswers: 'Need quick answers?',
    required: 'Please include your name, email, and message.', success: "Thanks! We'll get back to you shortly.", failed: "We couldn't send your message. Please try again.",
  };
  const localizedSupport = locale === 'en'
    ? SUPPORT_ACCORDION
    : SUPPORT_ACCORDION.map((item, index) => ({
        ...item,
        title: `${copy.quickAnswers} ${index + 1}`,
        body: copy.heroBody,
      }));
  const localizedFaq = locale === 'en'
    ? FAQ
    : FAQ.map((item, index) => ({
        ...item,
        question: `${copy.badge} ${index + 1}`,
        answer: copy.heroBody,
      }));
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    plan: planOptions[0],
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const metaLines = [
      form.company.trim() && `Company: ${form.company.trim()}`,
      form.phone.trim() && `Phone: ${form.phone.trim()}`,
      form.plan && `Plan interest: ${form.plan}`,
    ].filter(Boolean);
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      message: [...metaLines, metaLines.length ? '' : null, form.message.trim()].filter(Boolean).join('\n'),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setError(copy.required);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(`${API_ORIGIN}/api/public/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data?.ok !== true) {
        throw new Error(data?.error || 'Unable to submit message.');
      }
      setSuccess(data?.success_msg || copy.success);
      setForm({ name: '', email: '', phone: '', company: '', plan: planOptions[0], message: '' });
    } catch (err: any) {
      setError(err?.message || copy.failed);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageShell className="bg-[linear-gradient(180deg,#f7f9ff_0%,#ffffff_38%,#f6fbff_66%,#edf6ff_100%)] dark:bg-[linear-gradient(180deg,#0b1324_0%,#0f1b2d_44%,#101f34_100%)]">
        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-linear-[160deg,#050b1f_0%,#0a1a39_55%,#093760_100%] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:p-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
          />
          <div className="relative">
          <p className="badge badge-green">{copy.badge}</p>
          <h1 className="mt-5 text-white">{copy.heroTitle}</h1>
          <p className="mt-4 max-w-[900px] text-accent/80">
            {copy.heroBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:admin@schedulaa.com" className="btn btn-green hover:btn-white">
              {copy.emailUs}
            </a>
            <a href="tel:+16478494913" className="btn bg-white/18 text-white hover:bg-white/28 dark:btn-transparent">
              {copy.call}
            </a>
          </div>
          </div>
        </div>

        <div className="rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
          <h2 className="text-2xl font-semibold">{copy.sendMessage}</h2>
          <form className="mt-5 grid gap-4" onSubmit={onSubmit}>
            <input
              className="rounded-xl border border-stroke-2 px-4 py-3 dark:border-stroke-7 dark:bg-background-7"
              placeholder={copy.name}
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              required
            />
            <input
              className="rounded-xl border border-stroke-2 px-4 py-3 dark:border-stroke-7 dark:bg-background-7"
              placeholder={copy.email}
              type="email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              required
            />
            <input
              className="rounded-xl border border-stroke-2 px-4 py-3 dark:border-stroke-7 dark:bg-background-7"
              placeholder={copy.phone}
              value={form.phone}
              onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
            />
            <input
              className="rounded-xl border border-stroke-2 px-4 py-3 dark:border-stroke-7 dark:bg-background-7"
              placeholder={copy.company}
              value={form.company}
              onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
            />
            <select
              className="rounded-xl border border-stroke-2 px-4 py-3 dark:border-stroke-7 dark:bg-background-7"
              value={form.plan}
              onChange={(e) => setForm((prev) => ({ ...prev, plan: e.target.value }))}
            >
              {planOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <textarea
              className="min-h-[140px] rounded-xl border border-stroke-2 px-4 py-3 dark:border-stroke-7 dark:bg-background-7"
              placeholder={copy.message}
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              required
            />
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
            {success ? <p className="text-sm text-green-600">{success}</p> : null}
            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary hover:btn-secondary dark:hover:btn-accent disabled:opacity-60"
            >
              {submitting ? copy.submitting : copy.submit}
            </button>
          </form>
        </div>

        <div className="rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
          <h2 className="text-2xl font-semibold">{copy.directLines}</h2>
          <div className="mt-4 space-y-2">
            {DIRECT_LINES.map((line) => (
              <p key={line} className="text-secondary/70 dark:text-accent/70">
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <p className="badge badge-cyan-v2">{copy.visitHq}</p>
              <h2 className="mt-4 text-2xl font-semibold">{copy.toronto}</h2>
              <p className="mt-3 text-secondary/70 dark:text-accent/70">{HQ_ADDRESS}</p>
              <p className="mt-2 text-secondary/70 dark:text-accent/70">
                Book a meeting in advance and we&apos;ll guide you through rollout labs and demo suites used for enterprise implementations.
              </p>
              <a
                href={MAP_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-5 hover:btn-secondary dark:hover:btn-accent"
              >
                {copy.directions}
              </a>
            </div>
            <iframe
              title="Schedulaa HQ map"
              src={MAP_EMBED_URL}
              loading="lazy"
              className="h-[280px] w-full rounded-[16px] border border-stroke-2 dark:border-stroke-7"
              style={{ border: 0 }}
            />
          </div>
        </div>

        <div className="rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
          <h2 className="text-4xl font-semibold leading-tight">{copy.growTitle}</h2>
          <p className="mt-2 text-secondary/70 dark:text-accent/70">{copy.quickAnswers}</p>
          <div className="mt-4 space-y-3">
            {localizedSupport.map((item, index) => (
              <details
                key={item.title}
                open={index === 0}
                className="group overflow-hidden rounded-[18px] border border-stroke-2 bg-background-1 p-5 dark:border-stroke-7 dark:bg-background-7"
              >
                <summary className="cursor-pointer list-none text-xl font-semibold [&::-webkit-details-marker]:hidden">
                  <div className="flex items-center justify-between gap-4">
                    <span>{item.title}</span>
                    <span className="text-xl leading-none text-secondary/60 transition-transform group-open:rotate-180 dark:text-accent/60">
                      ⌃
                    </span>
                  </div>
                </summary>
                <p className="mt-3 text-secondary/70 dark:text-accent/70">{item.body}</p>
                <ul className="mt-3 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-tagline-2 text-secondary/70 dark:text-accent/70">
                      <span className="mt-[7px] inline-flex h-[6px] w-[6px] rounded-full bg-primary-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
          <div className="mt-4 space-y-4">
            {localizedFaq.map((item) => (
              <div key={item.question} className="rounded-xl border border-stroke-2 p-4 dark:border-stroke-7">
                <h3 className="font-semibold">{item.question}</h3>
                <p className="mt-1 text-secondary/70 dark:text-accent/70">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
    </PageShell>
  );
}
