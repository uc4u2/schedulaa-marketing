'use client';

import { buildAppUrl, getAppOrigin } from '@/utils/appLinks';
import { AppLocale } from '@/utils/locale';
import TrackedLink from '@/components/shared/TrackedLink';
import { useEffect, useMemo, useState } from 'react';

type PredictionChallengeGuidePopupProps = {
  locale?: AppLocale;
};

type GuideCopy = {
  badge: string;
  title: string;
  body: string;
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  register: string;
  login: string;
  note: string;
  close: string;
};

const DISMISS_KEY = 'schedulaa_prediction_guide_dismissed_v1';

const copyByLocale: Record<string, GuideCopy> = {
  en: {
    badge: 'Football Prediction Guide',
    title: 'How to join the challenge',
    body: 'Create a business owner account or log in, then open Football Prediction Challenge from your manager dashboard.',
    step1: 'Create your account if you are new to Schedulaa.',
    step2: 'If you already have access, log in to your account.',
    step3: 'Open the manager dashboard and select Football Prediction Challenge.',
    step4: 'Start with Today or Weekly Challenge and save your predictions before kickoff.',
    register: 'Start free',
    login: 'Log in',
    note: 'A quick tutorial video can be added here later if needed.',
    close: 'Close guide',
  },
  fa: {
    badge: 'راهنمای چالش پیش‌بینی فوتبال',
    title: 'چطور وارد چالش شوید',
    body: 'اگر جدید هستید یک حساب مالک کسب‌وکار بسازید یا وارد شوید، سپس از داشبورد مدیر بخش Football Prediction Challenge را باز کنید.',
    step1: 'اگر تازه با Schedulaa آشنا شده‌اید، حساب خود را بسازید.',
    step2: 'اگر قبلاً دسترسی دارید، وارد حساب خود شوید.',
    step3: 'داشبورد مدیر را باز کنید و Football Prediction Challenge را انتخاب کنید.',
    step4: 'از Today یا Weekly Challenge شروع کنید و پیش‌بینی‌ها را قبل از شروع مسابقه ذخیره کنید.',
    register: 'شروع رایگان',
    login: 'ورود',
    note: 'در صورت نیاز بعداً می‌توان یک ویدیوی آموزشی کوتاه به این بخش اضافه کرد.',
    close: 'بستن راهنما',
  },
  ru: {
    badge: 'Гид по футбольному челленджу',
    title: 'Как присоединиться',
    body: 'Создайте аккаунт владельца бизнеса или войдите, затем откройте Football Prediction Challenge из панели менеджера.',
    step1: 'Если вы впервые в Schedulaa, создайте аккаунт.',
    step2: 'Если доступ уже есть, войдите в систему.',
    step3: 'Откройте панель менеджера и выберите Football Prediction Challenge.',
    step4: 'Начните с Today или Weekly Challenge и сохраните прогнозы до начала матчей.',
    register: 'Начать бесплатно',
    login: 'Войти',
    note: 'Позже сюда можно добавить короткое обучающее видео при необходимости.',
    close: 'Закрыть гид',
  },
  zh: {
    badge: '足球预测挑战指南',
    title: '如何开始参加',
    body: '先注册企业主账户或直接登录，然后在经理仪表板中打开 Football Prediction Challenge。',
    step1: '如果你是第一次使用 Schedulaa，请先创建账户。',
    step2: '如果你已有账户，请直接登录。',
    step3: '打开经理仪表板并进入 Football Prediction Challenge。',
    step4: '从 Today 或 Weekly Challenge 开始，并在开赛前保存预测。',
    register: '免费开始',
    login: '登录',
    note: '如果需要，后续可以在这里加入简短教学视频。',
    close: '关闭指南',
  },
};

export default function PredictionChallengeGuidePopup({
  locale = 'en',
}: PredictionChallengeGuidePopupProps) {
  const [visible, setVisible] = useState(false);
  const copy = copyByLocale[locale] || copyByLocale.en;

  useEffect(() => {
    try {
      if (window.localStorage.getItem(DISMISS_KEY) === '1') return;
    } catch {}

    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  const predictionTarget = useMemo(
    () => `${getAppOrigin()}/manager/prediction`,
    [],
  );

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed left-4 bottom-4 z-[90] w-[calc(100%-2rem)] max-w-[390px] md:left-6 md:bottom-6">
      <aside className="pointer-events-auto overflow-hidden rounded-[24px] border border-white/14 bg-[#081120]/92 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-xl">
        <div className="border-b border-white/10 px-5 py-4">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-2">
              <span className="inline-flex rounded-full border border-[#d9ff6a]/30 bg-[#d9ff6a]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d9ff6a]">
                {copy.badge}
              </span>
              <div className="space-y-1">
                <h3 className="text-[22px] leading-[1.15] font-semibold text-white">
                  {copy.title}
                </h3>
                <p className="text-sm leading-6 text-white/72">{copy.body}</p>
              </div>
            </div>
            <button
              type="button"
              aria-label={copy.close}
              onClick={() => {
                try {
                  window.localStorage.setItem(DISMISS_KEY, '1');
                } catch {}
                setVisible(false);
              }}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white/72 transition hover:bg-white/10 hover:text-white"
            >
              ×
            </button>
          </div>
        </div>

        <div className="space-y-4 px-5 py-4">
          <ol className="space-y-2.5 text-sm leading-6 text-white/80">
            {[copy.step1, copy.step2, copy.step3, copy.step4].map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-[#d9ff6a]">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <div className="flex flex-col gap-2 sm:flex-row">
            <TrackedLink
              href={buildAppUrl('/register', { returnTo: predictionTarget })}
              className="btn btn-green btn-md w-full border-0 text-center"
              eventName="CompleteRegistration"
              eventParams={{
                content_name: 'Prediction Guide Start Free',
                page_path: '/',
              }}
            >
              {copy.register}
            </TrackedLink>
            <TrackedLink
              href={buildAppUrl('/login', { returnTo: predictionTarget })}
              className="btn btn-dark bg-white/10 btn-md w-full border border-white/10 text-center text-white hover:border-white/0 hover:bg-white/16"
              eventName="Lead"
              eventParams={{
                content_name: 'Prediction Guide Login',
                page_path: '/',
              }}
            >
              {copy.login}
            </TrackedLink>
          </div>

          <p className="text-xs leading-5 text-white/50">{copy.note}</p>
        </div>
      </aside>
    </div>
  );
}
