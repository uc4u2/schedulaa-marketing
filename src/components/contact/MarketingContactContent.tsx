'use client';

import { FormEvent, useRef, useState } from 'react';
import PageShell from '@/components/shared/layout/PageShell';
import { usePathname } from 'next/navigation';
import { detectLocaleFromPath } from '@/utils/locale';
import { trackMetaPixel } from '@/utils/metaPixel';
import { trackAnalyticsEvent, trackAnalyticsEventOnce } from '@/utils/analytics';
import { MARKETING_CONTACT } from '@/data/marketing-contact';

const API_ORIGIN =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  process.env.NEXT_PUBLIC_API_ORIGIN ||
  (process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://scheduling-application.onrender.com');

const FAQ = [
  {
    question: 'How fast will someone reply?',
    answer: 'We review product, setup, migration, and partnership questions as quickly as possible. A successful submission confirms receipt, not a guaranteed response time.',
  },
  {
    question: 'Do you offer implementation services?',
    answer: 'We can discuss setup and data-import requirements with you. Available assistance and the rollout scope are confirmed before work begins.',
  },
  {
    question: 'How do partners or resellers reach you?',
    answer: 'Use this form or email admin@schedulaa.com and include the type of partnership you want to discuss.',
  },
];

const PLAN_OPTIONS = ['Product question', 'Starter', 'Plus', 'Pro', 'Enterprise', 'Partnership', 'Setup or migration'];
const SUPPORT_ACCORDION = [
  {
    title: 'What can we help you evaluate?',
    body: 'Tell us which customer, booking, team, field-work, finance, commerce, or website workflow you want to improve.',
    points: [
      'Product fit for your current workflow',
      'Role and regional availability',
      'Data-import and setup requirements',
      'Relevant plan or add-on questions',
    ],
  },
  {
    title: 'Which service businesses can evaluate Schedulaa?',
    body: 'Schedulaa supports appointment and field-service workflows across businesses such as salons, tutors, cleaners, and HVAC teams.',
    points: [
      'Online booking and customer records',
      'Employee scheduling and field work',
      'Estimates, invoices, and eligible payments',
    ],
  },
  {
    title: 'What should I include in my message?',
    body: 'Share your business type, team size, current tools, and the workflow you want to improve. Do not include passwords or payment details.',
    points: [
      'The outcome you need',
      'Your current process or provider',
      'Any role, region, or timing requirement',
    ],
  },
  {
    title: 'Will a contact request activate anything?',
    body: 'No. Sending a message does not change your account, plan, billing, integrations, or production data.',
    points: ['No automatic purchase', 'No integration enabled', 'No production-data change'],
  },
  {
    title: 'Can this integrate with current software?',
    body: 'Verified connections include Stripe, Google Calendar V1, QuickBooks Online, Xero, bounded Zapier automation, and Jitsi where enabled.',
    points: ['Eligibility and setup vary', 'Google Calendar V1 is not full two-way sync', 'Accounting connections are bounded handoffs'],
  },
];
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
      emailUs: 'ايميل به ما', call: 'تماس', whatsapp: 'واتس‌اپ', sendMessage: 'ارسال پيام', name: 'نام', email: 'ايميل',
      phone: 'تلفن', company: 'شرکت', message: 'پيام', submit: 'ارسال', submitting: 'در حال ارسال...',
      directLines: 'راه هاي ارتباطي', serviceAreaBadge: 'خدمات غيرحضوري', serviceAreaTitle: 'مستقر در انتاريو، کانادا',
      serviceAreaBody: 'ارائه خدمات غيرحضوري به کسب‌وکارها در کانادا و ايالات متحده.',
      remoteMeetingNote: 'جلسه‌ها و گفتگوهاي محصول به‌صورت غيرحضوري هماهنگ مي‌شوند؛ Schedulaa دفتر عمومي براي مراجعه حضوري معرفي نمي‌کند.',
      growTitle: 'ساخت و رشد با ابزارهاي مقياس پذير', quickAnswers: 'پاسخ سريع مي خواهيد؟',
      required: 'نام، ايميل و پيام را وارد کنيد.', success: 'پيام شما ثبت شد. به زودي پاسخ مي دهيم.', failed: 'ارسال انجام نشد. دوباره تلاش کنيد.',
    },
    ru: {
      badge: 'Контакт', heroTitle: 'Обсудим ваш запуск.', heroBody: 'Нужна помощь с внедрением, партнерством или миграцией? Напишите нам.',
      emailUs: 'Написать', call: 'Позвонить', whatsapp: 'WhatsApp', sendMessage: 'Отправить сообщение', name: 'Имя', email: 'Email',
      phone: 'Телефон', company: 'Компания', message: 'Сообщение', submit: 'Отправить', submitting: 'Отправка...',
      directLines: 'Прямые контакты', serviceAreaBadge: 'Удаленное обслуживание', serviceAreaTitle: 'Мы находимся в Онтарио, Канада',
      serviceAreaBody: 'Удаленно обслуживаем компании по всей Канаде и США.',
      remoteMeetingNote: 'Встречи и консультации по продукту проводятся удаленно; Schedulaa не рекламирует офис для посещения без записи.',
      growTitle: 'Развивайтесь с масштабируемыми инструментами', quickAnswers: 'Нужны быстрые ответы?',
      required: 'Укажите имя, email и сообщение.', success: 'Спасибо! Мы скоро ответим.', failed: 'Не удалось отправить сообщение. Попробуйте снова.',
    },
    zh: {
      badge: '联系', heroTitle: '一起讨论你的上线计划。', heroBody: '如需实施、合作或迁移支持，请联系 Schedulaa 团队。',
      emailUs: '发送邮件', call: '致电', whatsapp: 'WhatsApp', sendMessage: '发送消息', name: '姓名', email: '邮箱',
      phone: '电话', company: '公司', message: '留言', submit: '提交', submitting: '提交中...',
      directLines: '直接联系方式', serviceAreaBadge: '远程服务', serviceAreaTitle: '我们位于加拿大安大略省',
      serviceAreaBody: '远程服务加拿大和美国各地的企业。',
      remoteMeetingNote: '会议和产品沟通均通过远程方式安排；Schedulaa 不提供对外开放的到访办公室。',
      growTitle: '用可扩展工具实现增长', quickAnswers: '需要快速答案？',
      required: '请填写姓名、邮箱和留言。', success: '提交成功，我们会尽快回复。', failed: '发送失败，请重试。',
    },
    es: {
      badge: 'Contacto', heroTitle: 'Hablemos de tu implementacion.', heroBody: 'Para implementacion, partnership o migracion, nuestro equipo responde rapido.',
      emailUs: 'Escribirnos', call: 'Llamar', whatsapp: 'WhatsApp', sendMessage: 'Enviar mensaje', name: 'Nombre', email: 'Correo',
      phone: 'Telefono', company: 'Empresa', message: 'Mensaje', submit: 'Enviar', submitting: 'Enviando...',
      directLines: 'Lineas directas', serviceAreaBadge: 'Servicio remoto', serviceAreaTitle: 'Operamos desde Ontario, Canada',
      serviceAreaBody: 'Atendemos de forma remota a empresas de Canada y Estados Unidos.',
      remoteMeetingNote: 'Las reuniones y conversaciones sobre el producto se coordinan de forma remota; Schedulaa no anuncia una oficina publica para visitas sin cita.',
      growTitle: 'Construye y crece con herramientas escalables', quickAnswers: '¿Necesitas respuestas rapidas?',
      required: 'Incluye nombre, correo y mensaje.', success: 'Gracias. Te responderemos pronto.', failed: 'No se pudo enviar. Intenta otra vez.',
    },
    fr: {
      badge: 'Contact', heroTitle: 'Parlons de votre deploiement.', heroBody: "Besoin d'implementation, de partenariat ou de migration ? Nous repondons vite.",
      emailUs: 'Envoyer un email', call: 'Appeler', whatsapp: 'WhatsApp', sendMessage: 'Envoyer un message', name: 'Nom', email: 'Email',
      phone: 'Telephone', company: 'Entreprise', message: 'Message', submit: 'Envoyer', submitting: 'Envoi...',
      directLines: 'Contacts directs', serviceAreaBadge: 'Service a distance', serviceAreaTitle: 'Nous sommes bases en Ontario, Canada',
      serviceAreaBody: 'Nous servons a distance les entreprises partout au Canada et aux Etats-Unis.',
      remoteMeetingNote: "Les reunions et echanges produit sont organises a distance; Schedulaa n'annonce pas de bureau public accessible sans rendez-vous.",
      growTitle: 'Construisez et grandissez avec des outils evolutifs', quickAnswers: 'Besoin de reponses rapides ?',
      required: 'Veuillez renseigner nom, email et message.', success: 'Merci. Nous revenons vers vous rapidement.', failed: "Echec de l'envoi. Reessayez.",
    },
    de: {
      badge: 'Kontakt', heroTitle: 'Lassen Sie uns ueber Ihren Rollout sprechen.', heroBody: 'Fuer Implementierung, Partnerschaft oder Migration hilft unser Team schnell.',
      emailUs: 'E-Mail senden', call: 'Anrufen', whatsapp: 'WhatsApp', sendMessage: 'Nachricht senden', name: 'Name', email: 'E-Mail',
      phone: 'Telefon', company: 'Unternehmen', message: 'Nachricht', submit: 'Senden', submitting: 'Wird gesendet...',
      directLines: 'Direkte Kontakte', serviceAreaBadge: 'Remote-Service', serviceAreaTitle: 'Wir arbeiten von Ontario, Kanada, aus',
      serviceAreaBody: 'Wir betreuen Unternehmen in Kanada und den USA remote.',
      remoteMeetingNote: 'Termine und Produktgespraeche werden remote vereinbart; Schedulaa bewirbt kein oeffentliches Buero fuer spontane Besuche.',
      growTitle: 'Mit skalierbaren Tools aufbauen und wachsen', quickAnswers: 'Brauchen Sie schnelle Antworten?',
      required: 'Bitte Name, E-Mail und Nachricht angeben.', success: 'Danke. Wir melden uns in Kuerze.', failed: 'Senden fehlgeschlagen. Bitte erneut versuchen.',
    },
    ar: {
      badge: 'تواصل', heroTitle: 'دعنا نتحدث عن خطة التنفيذ لديك.', heroBody: 'للتنفيذ او الشراكات او دعم الترحيل، تواصل مع فريقنا.',
      emailUs: 'راسلنا', call: 'اتصل', whatsapp: 'واتساب', sendMessage: 'ارسل رسالة', name: 'الاسم', email: 'البريد الالكتروني',
      phone: 'الهاتف', company: 'الشركة', message: 'الرسالة', submit: 'ارسال', submitting: 'جاري الارسال...',
      directLines: 'قنوات التواصل المباشرة', serviceAreaBadge: 'خدمة عن بعد', serviceAreaTitle: 'نعمل من أونتاريو، كندا',
      serviceAreaBody: 'نخدم الشركات في جميع أنحاء كندا والولايات المتحدة عن بعد.',
      remoteMeetingNote: 'يتم ترتيب الاجتماعات ومحادثات المنتج عن بعد؛ لا تعلن Schedulaa عن مكتب عام للزيارات دون موعد.',
      growTitle: 'ابنِ ونمِّ باستخدام أدوات قابلة للتوسع', quickAnswers: 'تحتاج اجابات سريعة؟',
      required: 'يرجى ادخال الاسم والبريد والرسالة.', success: 'شكرا. سنعود اليك قريبا.', failed: 'تعذر ارسال الرسالة. حاول مرة اخرى.',
    },
    pt: {
      badge: 'Contato', heroTitle: 'Vamos falar sobre sua implementacao.', heroBody: 'Para implementacao, parceria ou migracao, nosso time responde rapido.',
      emailUs: 'Enviar email', call: 'Ligar', whatsapp: 'WhatsApp', sendMessage: 'Enviar mensagem', name: 'Nome', email: 'Email',
      phone: 'Telefone', company: 'Empresa', message: 'Mensagem', submit: 'Enviar', submitting: 'Enviando...',
      directLines: 'Contatos diretos', serviceAreaBadge: 'Atendimento remoto', serviceAreaTitle: 'Operamos a partir de Ontario, Canada',
      serviceAreaBody: 'Atendemos remotamente empresas em todo o Canada e nos Estados Unidos.',
      remoteMeetingNote: 'Reunioes e conversas sobre o produto sao organizadas remotamente; a Schedulaa nao anuncia um escritorio publico para visitas sem agendamento.',
      growTitle: 'Construa e cresca com ferramentas escalaveis', quickAnswers: 'Precisa de respostas rapidas?',
      required: 'Inclua nome, email e mensagem.', success: 'Obrigado! Retornaremos em breve.', failed: 'Nao foi possivel enviar. Tente novamente.',
    },
  };
  const copy = copyByLocale[locale] || {
    badge: 'Contact', heroTitle: 'Tell us what your team needs.', heroBody: 'Ask about product fit, setup requirements, migration planning, or a potential partnership. We will review the context you provide and follow up.',
    emailUs: 'Email us', call: 'Call', whatsapp: 'WhatsApp', sendMessage: 'Send a message', name: 'Name', email: 'Email',
    phone: 'Phone', company: 'Company', message: 'Message', submit: 'Submit', submitting: 'Submitting...',
    directLines: 'Direct lines', serviceAreaBadge: 'Remote service', serviceAreaTitle: 'Based in Ontario, Canada',
    serviceAreaBody: 'Serving businesses across Canada and the United States remotely.',
    remoteMeetingNote: 'Meetings and product conversations are arranged remotely; Schedulaa does not advertise a public walk-in office.',
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
  const formStartedRef = useRef(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const markFormStarted = () => {
    if (formStartedRef.current) {
      return;
    }
    formStartedRef.current = true;
    trackAnalyticsEventOnce('contact_start', `contact-start:${pathname}`, {
      form_name: 'marketing_contact',
      page_path: pathname,
    });
  };

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
      trackMetaPixel('Lead', {
        content_name: 'Marketing Contact Form',
        content_category: 'Contact',
        plan_interest: form.plan,
        has_company: Boolean(form.company.trim()),
        has_phone: Boolean(form.phone.trim()),
      });
      trackAnalyticsEvent('contact_submit', {
        form_name: 'marketing_contact',
        page_path: window.location.pathname,
        plan_interest: form.plan,
        has_company: Boolean(form.company.trim()),
        has_phone: Boolean(form.phone.trim()),
      });
      const successMessage =
        typeof data?.delivered === 'boolean' && data.delivered === false
          ? data?.success_msg || 'Message received. Our team has it, even if email delivery is delayed.'
          : data?.success_msg || copy.success;
      setSuccess(successMessage);
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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={`mailto:${MARKETING_CONTACT.email}`} className="btn btn-green btn-md w-full min-w-[152px] justify-center px-6 hover:btn-white sm:w-auto">
              {copy.emailUs}
            </a>
            <a href={MARKETING_CONTACT.callHref} className="btn btn-white btn-md w-full min-w-[152px] justify-center px-6 sm:w-auto">
              {copy.call} {MARKETING_CONTACT.callDisplay}
            </a>
            <a
              href={MARKETING_CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-transparent btn-md w-full min-w-[152px] justify-center border-white/40 px-6 text-white hover:btn-white sm:w-auto"
            >
              {copy.whatsapp} {MARKETING_CONTACT.whatsappDisplay}
            </a>
          </div>
          </div>
        </div>

        <div className="rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
          <h2 className="text-2xl font-semibold">{copy.sendMessage}</h2>
          <form className="mt-5 grid gap-4" onSubmit={onSubmit} onChange={markFormStarted}>
            <label htmlFor="contact-name" className="text-sm font-medium">{copy.name}</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              className="rounded-xl border border-stroke-2 px-4 py-3 dark:border-stroke-7 dark:bg-background-7"
              placeholder={copy.name}
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              required
            />
            <label htmlFor="contact-email" className="text-sm font-medium">{copy.email}</label>
            <input
              id="contact-email"
              name="email"
              autoComplete="email"
              className="rounded-xl border border-stroke-2 px-4 py-3 dark:border-stroke-7 dark:bg-background-7"
              placeholder={copy.email}
              type="email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              required
            />
            <label htmlFor="contact-phone" className="text-sm font-medium">{copy.phone}</label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className="rounded-xl border border-stroke-2 px-4 py-3 dark:border-stroke-7 dark:bg-background-7"
              placeholder={copy.phone}
              value={form.phone}
              onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
            />
            <label htmlFor="contact-company" className="text-sm font-medium">{copy.company}</label>
            <input
              id="contact-company"
              name="organization"
              autoComplete="organization"
              className="rounded-xl border border-stroke-2 px-4 py-3 dark:border-stroke-7 dark:bg-background-7"
              placeholder={copy.company}
              value={form.company}
              onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
            />
            <label htmlFor="contact-interest" className="text-sm font-medium">How can we help?</label>
            <select
              id="contact-interest"
              name="interest"
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
            <label htmlFor="contact-message" className="text-sm font-medium">{copy.message}</label>
            <textarea
              id="contact-message"
              name="message"
              className="min-h-[140px] rounded-xl border border-stroke-2 px-4 py-3 dark:border-stroke-7 dark:bg-background-7"
              placeholder={copy.message}
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              required
            />
            {error ? <p className="text-sm text-red-600" role="alert">{error}</p> : null}
            {success ? <p className="text-sm text-green-600" role="status">{success}</p> : null}
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
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <a
              href={`mailto:${MARKETING_CONTACT.email}`}
              className="rounded-xl border border-stroke-2 p-4 text-secondary/75 transition-colors hover:border-primary-500 hover:text-primary-500 dark:border-stroke-7 dark:text-accent/75"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.16em]">{copy.email}</span>
              <span className="mt-1 block font-medium">{MARKETING_CONTACT.email}</span>
            </a>
            <a
              href={MARKETING_CONTACT.callHref}
              className="rounded-xl border border-stroke-2 p-4 text-secondary/75 transition-colors hover:border-primary-500 hover:text-primary-500 dark:border-stroke-7 dark:text-accent/75"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.16em]">{copy.call}</span>
              <span className="mt-1 block font-medium">{MARKETING_CONTACT.callDisplay}</span>
            </a>
            <a
              href={MARKETING_CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-stroke-2 p-4 text-secondary/75 transition-colors hover:border-primary-500 hover:text-primary-500 dark:border-stroke-7 dark:text-accent/75"
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.16em]">{copy.whatsapp}</span>
              <span className="mt-1 block font-medium">{MARKETING_CONTACT.whatsappDisplay}</span>
            </a>
          </div>
        </div>

        <div className="rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
          <div className="rounded-[16px] border border-stroke-2 bg-background-1 p-6 dark:border-stroke-7 dark:bg-background-7 md:p-8">
            <p className="badge badge-cyan-v2">{copy.serviceAreaBadge}</p>
            <h2 className="mt-4 text-2xl font-semibold">{copy.serviceAreaTitle}</h2>
            <p className="mt-3 max-w-[760px] text-secondary/70 dark:text-accent/70">{copy.serviceAreaBody}</p>
            <p className="mt-2 max-w-[760px] text-sm text-secondary/60 dark:text-accent/60">
              {copy.remoteMeetingNote}
            </p>
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
