'use client';

import { useMemo, useState } from 'react';
import type { TutorialModule } from '@/data/tutorials/tutorialCatalog';

type CopyShape = {
  openVideo: string;
  moreTutorials: string;
  fewerTutorials: string;
  comingSoon: string;
  noVideoYet: string;
  availableNow: string;
  featuredVideo: string;
};

const copyByLocale: Record<string, CopyShape> = {
  fa: {
    openVideo: 'باز کردن ويديو',
    moreTutorials: 'آموزش هاي بيشتر',
    fewerTutorials: 'بستن ليست آموزش ها',
    comingSoon: 'به زودي',
    noVideoYet: 'ويديو بعدا اضافه مي شود.',
    availableNow: 'همين حالا در دسترس',
    featuredVideo: 'ويديو راهنما',
  },
  ru: {
    openVideo: 'Открыть видео',
    moreTutorials: 'Другие инструкции',
    fewerTutorials: 'Скрыть список',
    comingSoon: 'Скоро',
    noVideoYet: 'Видео будет добавлено позже.',
    availableNow: 'Доступно сейчас',
    featuredVideo: 'Видео инструкции',
  },
  zh: {
    openVideo: '打开视频',
    moreTutorials: '更多教程',
    fewerTutorials: '收起教程列表',
    comingSoon: '即将推出',
    noVideoYet: '视频稍后添加。',
    availableNow: '现已可用',
    featuredVideo: '教程视频',
  },
  es: {
    openVideo: 'Abrir video',
    moreTutorials: 'Mas tutoriales',
    fewerTutorials: 'Ocultar lista',
    comingSoon: 'Proximamente',
    noVideoYet: 'El video se agregara despues.',
    availableNow: 'Disponible ahora',
    featuredVideo: 'Video principal',
  },
  fr: {
    openVideo: 'Ouvrir la video',
    moreTutorials: 'Autres tutoriels',
    fewerTutorials: 'Masquer la liste',
    comingSoon: 'Bientot disponible',
    noVideoYet: 'La video sera ajoutee plus tard.',
    availableNow: 'Disponible maintenant',
    featuredVideo: 'Video principale',
  },
  de: {
    openVideo: 'Video offnen',
    moreTutorials: 'Weitere Tutorials',
    fewerTutorials: 'Liste schliessen',
    comingSoon: 'Demnachst',
    noVideoYet: 'Video wird spaeter hinzugefugt.',
    availableNow: 'Jetzt verfugbar',
    featuredVideo: 'Hauptvideo',
  },
  ar: {
    openVideo: 'افتح الفيديو',
    moreTutorials: 'شروحات اضافية',
    fewerTutorials: 'اخفاء القائمة',
    comingSoon: 'قريبا',
    noVideoYet: 'سيتم اضافة الفيديو لاحقا.',
    availableNow: 'متاح الان',
    featuredVideo: 'الفيديو الرئيسي',
  },
  pt: {
    openVideo: 'Abrir video',
    moreTutorials: 'Mais tutoriais',
    fewerTutorials: 'Ocultar lista',
    comingSoon: 'Em breve',
    noVideoYet: 'O video sera adicionado depois.',
    availableNow: 'Disponivel agora',
    featuredVideo: 'Video principal',
  },
  en: {
    openVideo: 'Open video',
    moreTutorials: 'More tutorials',
    fewerTutorials: 'Hide tutorial list',
    comingSoon: 'Coming soon',
    noVideoYet: 'Video link will be added later.',
    availableNow: 'Available now',
    featuredVideo: 'Featured tutorial',
  },
};

function getLocaleCopy(locale?: string) {
  return copyByLocale[locale || 'en'] || copyByLocale.en;
}

function getYouTubeId(url?: string | null) {
  if (!url) return '';
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    if (host.includes('youtu.be')) {
      return parsed.pathname.split('/').filter(Boolean)[0] || '';
    }
    if (host.includes('youtube.com')) {
      if (parsed.pathname.includes('/embed/')) {
        return parsed.pathname.split('/embed/')[1]?.split('/')[0] || '';
      }
      return parsed.searchParams.get('v') || '';
    }
  } catch {
    return '';
  }
  return '';
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
  const featuredYouTubeId = getYouTubeId(featured?.youtubeUrl);
  const featuredEmbedSrc = featuredYouTubeId
    ? `https://www.youtube-nocookie.com/embed/${featuredYouTubeId}`
    : '';

  if (!featured) return null;

  return (
    <article className="relative overflow-hidden rounded-[32px] border border-[#d8e5f7] bg-[linear-gradient(180deg,#ffffff_0%,#f6fbff_100%)] p-6 shadow-[0_30px_90px_rgba(15,23,42,0.09)] dark:border-stroke-7 dark:bg-[linear-gradient(180deg,rgba(18,25,40,0.98)_0%,rgba(14,20,32,1)_100%)] md:p-7 lg:p-9">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.16),transparent_48%),radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_38%)]" />

      <div className="relative grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="space-y-5">
          <span className="inline-flex items-center rounded-full border border-[#bfeaf0] bg-[#dff8fb] px-4 py-2 text-[12px] font-semibold tracking-[0.02em] text-[#17697a] dark:border-white/10 dark:bg-white/8 dark:text-white/74">
            {module.badge}
          </span>
          <div className="space-y-4">
            <h2 className="max-w-[560px] text-heading-4 text-secondary dark:text-white">{module.title}</h2>
            <p className="max-w-[620px] text-[15px] leading-7 text-secondary/76 dark:text-accent/72">{module.summary}</p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="rounded-full border border-[#d7e6fa] bg-white/88 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#215fba] dark:border-white/10 dark:bg-white/[0.05] dark:text-white/64">
                {ui.availableNow}
              </span>
              <span className="rounded-full border border-[#eadffd] bg-[#f7f1ff] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7c3aed] dark:border-white/10 dark:bg-white/[0.05] dark:text-white/64">
                {module.items.length} tutorials
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#10284d] bg-[linear-gradient(145deg,#0f1c30_0%,#162743_48%,#1d3356_100%)] p-5 text-white shadow-[0_26px_60px_rgba(15,23,42,0.22)] dark:border-white/10 md:p-6">
          {featuredEmbedSrc ? (
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-start">
              <div className="overflow-hidden rounded-[24px] border border-white/12 bg-[#071224] shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8ed8ff]">
                    {ui.featuredVideo}
                  </div>
                  {featured.durationLabel ? (
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/82">
                      {featured.durationLabel}
                    </span>
                  ) : null}
                </div>
                <div className="relative w-full overflow-hidden pb-[56.25%]">
                  <iframe
                    className="absolute left-0 top-0 h-full w-full"
                    src={featuredEmbedSrc}
                    title={featured.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9ee7d3]">{ui.availableNow}</p>
                    <h3 className="mt-3 text-[24px] font-semibold leading-[1.22] text-white">{featured.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-[15px] leading-7 text-white/74">{featured.purpose}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/78">
                    Step-by-step
                  </span>
                  <span className="rounded-full border border-[#6ee7b7]/18 bg-[#6ee7b7]/12 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b9ffe6]">
                    Manager workflow
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9ee7d3]">{ui.comingSoon}</p>
                  <h3 className="mt-2 text-[20px] font-semibold leading-[1.3] text-white">{featured.title}</h3>
                </div>
                {featured.durationLabel ? (
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/72">
                    {featured.durationLabel}
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-[15px] leading-7 text-white/74">{featured.purpose}</p>
              <div className="mt-5">
                <span className="inline-flex min-h-[44px] min-w-[190px] items-center justify-center rounded-full border border-dashed border-white/16 bg-white/[0.04] px-5 text-sm font-medium text-white/62">
                  {ui.noVideoYet}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {remaining.length ? (
        <div className="mt-7 border-t border-[#d9e6f7] pt-5 dark:border-stroke-7">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="flex w-full items-center justify-between rounded-[20px] border border-[#d7e3f4] bg-white/88 px-4 py-3 text-left text-sm font-semibold text-secondary transition hover:border-[#1f7ae0]/30 hover:text-[#1f7ae0] dark:border-stroke-7 dark:bg-background-7 dark:text-accent dark:hover:border-white/16"
            aria-expanded={expanded}
          >
            <span>{expanded ? ui.fewerTutorials : ui.moreTutorials}</span>
            <span className={`text-lg transition-transform ${expanded ? 'rotate-45' : ''}`}>+</span>
          </button>
          {expanded ? (
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {remaining.map((item) => (
                <article key={item.key} className="rounded-[22px] border border-[#dbe6f6] bg-white/96 p-4 shadow-[0_18px_42px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1 dark:border-stroke-7 dark:bg-background-7">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-[16px] font-semibold leading-6 text-secondary dark:text-white">{item.title}</h4>
                    <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${item.youtubeUrl ? 'bg-[#dbf7ee] text-[#087f5b]' : 'bg-secondary/8 text-secondary/54 dark:bg-white/[0.06] dark:text-accent/54'}`}>
                      {item.youtubeUrl ? ui.availableNow : ui.comingSoon}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-secondary/72 dark:text-accent/70">{item.purpose}</p>
                  <div className="mt-4">
                    {item.youtubeUrl ? (
                      <a
                        href={item.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full border border-[#d7e6fa] bg-[#f6fbff] px-3 py-2 text-sm font-semibold text-[#1f5fbf] transition hover:border-[#1f7ae0]/40 hover:bg-[#eef6ff] dark:border-white/10 dark:bg-white/[0.05] dark:text-white/82"
                      >
                        {ui.openVideo}
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
