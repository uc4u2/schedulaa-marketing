'use client';

import { useMemo, useState } from 'react';
import type { TutorialModule } from '@/data/tutorials/tutorialCatalog';

type CopyShape = {
  watchNow: string;
  watchOnYouTube: string;
  moreTutorials: string;
  fewerTutorials: string;
  comingSoon: string;
  noVideoYet: string;
  availableNow: string;
};

const copyByLocale: Record<string, CopyShape> = {
  fa: {
    watchNow: 'مشاهده آموزش',
    watchOnYouTube: 'تماشا در يوتيوب',
    moreTutorials: 'آموزش هاي بيشتر',
    fewerTutorials: 'بستن ليست آموزش ها',
    comingSoon: 'به زودي',
    noVideoYet: 'ويديو بعدا اضافه مي شود.',
    availableNow: 'همين حالا در دسترس',
  },
  ru: {
    watchNow: 'Смотреть инструкцию',
    watchOnYouTube: 'Открыть на YouTube',
    moreTutorials: 'Другие инструкции',
    fewerTutorials: 'Скрыть список',
    comingSoon: 'Скоро',
    noVideoYet: 'Видео будет добавлено позже.',
    availableNow: 'Доступно сейчас',
  },
  zh: {
    watchNow: '观看教程',
    watchOnYouTube: '在 YouTube 打开',
    moreTutorials: '更多教程',
    fewerTutorials: '收起教程列表',
    comingSoon: '即将推出',
    noVideoYet: '视频稍后添加。',
    availableNow: '现已可用',
  },
  es: {
    watchNow: 'Ver tutorial',
    watchOnYouTube: 'Abrir en YouTube',
    moreTutorials: 'Mas tutoriales',
    fewerTutorials: 'Ocultar lista',
    comingSoon: 'Proximamente',
    noVideoYet: 'El video se agregara despues.',
    availableNow: 'Disponible ahora',
  },
  fr: {
    watchNow: 'Voir le tutoriel',
    watchOnYouTube: 'Ouvrir sur YouTube',
    moreTutorials: 'Autres tutoriels',
    fewerTutorials: 'Masquer la liste',
    comingSoon: 'Bientot disponible',
    noVideoYet: 'La video sera ajoutee plus tard.',
    availableNow: 'Disponible maintenant',
  },
  de: {
    watchNow: 'Tutorial ansehen',
    watchOnYouTube: 'Auf YouTube offnen',
    moreTutorials: 'Weitere Tutorials',
    fewerTutorials: 'Liste schliessen',
    comingSoon: 'Demnachst',
    noVideoYet: 'Video wird spaeter hinzugefugt.',
    availableNow: 'Jetzt verfugbar',
  },
  ar: {
    watchNow: 'شاهد الشرح',
    watchOnYouTube: 'افتح على يوتيوب',
    moreTutorials: 'شروحات اضافية',
    fewerTutorials: 'اخفاء القائمة',
    comingSoon: 'قريبا',
    noVideoYet: 'سيتم اضافة الفيديو لاحقا.',
    availableNow: 'متاح الان',
  },
  pt: {
    watchNow: 'Ver tutorial',
    watchOnYouTube: 'Abrir no YouTube',
    moreTutorials: 'Mais tutoriais',
    fewerTutorials: 'Ocultar lista',
    comingSoon: 'Em breve',
    noVideoYet: 'O video sera adicionado depois.',
    availableNow: 'Disponivel agora',
  },
  en: {
    watchNow: 'Watch tutorial',
    watchOnYouTube: 'Open on YouTube',
    moreTutorials: 'More tutorials',
    fewerTutorials: 'Hide tutorial list',
    comingSoon: 'Coming soon',
    noVideoYet: 'Video link will be added later.',
    availableNow: 'Available now',
  },
};

function getLocaleCopy(locale?: string) {
  return copyByLocale[locale || 'en'] || copyByLocale.en;
}

export default function ProductTutorialPanel({
  module,
  locale = 'en',
}: {
  module: TutorialModule;
  locale?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const ui = getLocaleCopy(locale);

  const featured = useMemo(() => {
    if (!module.featuredKey) return module.items.find((item) => item.youtubeUrl) || module.items[0] || null;
    return module.items.find((item) => item.key === module.featuredKey) || module.items[0] || null;
  }, [module]);

  const remaining = useMemo(
    () => module.items.filter((item) => item.key !== featured?.key),
    [module.items, featured],
  );

  if (!featured) return null;

  return (
    <article className="rounded-[28px] border border-[#dbe6f6] bg-white/95 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8 md:p-7 lg:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-4">
          <span className="badge badge-cyan">{module.badge}</span>
          <div className="space-y-3">
            <h2 className="max-w-[560px] text-heading-4 text-secondary dark:text-white">{module.title}</h2>
            <p className="max-w-[620px] text-[15px] leading-7 text-secondary/76 dark:text-accent/72">{module.summary}</p>
          </div>
        </div>

        <div className="rounded-[24px] border border-[#1f7ae0]/12 bg-[#f8fbff] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] dark:border-white/10 dark:bg-white/[0.04] md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1f7ae0] dark:text-white/68">{featured.youtubeUrl ? ui.availableNow : ui.comingSoon}</p>
              <h3 className="mt-2 text-[20px] font-semibold leading-[1.3] text-secondary dark:text-white">{featured.title}</h3>
            </div>
            {featured.durationLabel ? (
              <span className="rounded-full border border-[#1f7ae0]/14 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1f7ae0] dark:border-white/10 dark:bg-white/[0.06] dark:text-white/72">
                {featured.durationLabel}
              </span>
            ) : null}
          </div>
          <p className="mt-4 text-[15px] leading-7 text-secondary/78 dark:text-accent/74">{featured.purpose}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {featured.youtubeUrl ? (
              <a
                href={featured.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm min-w-[190px]"
              >
                {ui.watchNow}
              </a>
            ) : (
              <span className="inline-flex min-h-[44px] min-w-[190px] items-center justify-center rounded-full border border-dashed border-stroke-2 px-5 text-sm font-medium text-secondary/58 dark:border-stroke-7 dark:text-accent/60">
                {ui.noVideoYet}
              </span>
            )}
            {featured.youtubeUrl ? (
              <a
                href={featured.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white btn-sm min-w-[190px] dark:btn-transparent dark:hover:btn-accent"
              >
                {ui.watchOnYouTube}
              </a>
            ) : null}
          </div>
        </div>
      </div>

      {remaining.length ? (
        <div className="mt-6 border-t border-stroke-2 pt-5 dark:border-stroke-7">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="flex w-full items-center justify-between rounded-[18px] border border-[#d7e3f4] bg-white px-4 py-3 text-left text-sm font-semibold text-secondary transition hover:border-[#1f7ae0]/30 hover:text-[#1f7ae0] dark:border-stroke-7 dark:bg-background-7 dark:text-accent dark:hover:border-white/16"
            aria-expanded={expanded}
          >
            <span>{expanded ? ui.fewerTutorials : ui.moreTutorials}</span>
            <span className={`text-lg transition-transform ${expanded ? 'rotate-45' : ''}`}>+</span>
          </button>
          {expanded ? (
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {remaining.map((item) => (
                <article key={item.key} className="rounded-[20px] border border-[#dbe6f6] bg-white p-4 shadow-[0_14px_36px_rgba(15,23,42,0.05)] dark:border-stroke-7 dark:bg-background-7">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-[16px] font-semibold leading-6 text-secondary dark:text-white">{item.title}</h4>
                    <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${item.youtubeUrl ? 'bg-[#1f7ae0]/10 text-[#1f7ae0]' : 'bg-secondary/8 text-secondary/54 dark:bg-white/[0.06] dark:text-accent/54'}`}>
                      {item.youtubeUrl ? ui.availableNow : ui.comingSoon}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-secondary/72 dark:text-accent/70">{item.purpose}</p>
                  <div className="mt-4">
                    {item.youtubeUrl ? (
                      <a href={item.youtubeUrl} target="_blank" rel="noopener noreferrer" className="footer-link-v2 w-fit">
                        {ui.watchOnYouTube}
                      </a>
                    ) : (
                      <span className="text-sm text-secondary/54 dark:text-accent/56">{ui.noVideoYet}</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
