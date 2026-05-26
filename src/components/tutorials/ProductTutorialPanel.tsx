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
    <article className="rounded-[28px] border border-[#dbe6f6] bg-white/95 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8 md:p-7 lg:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="space-y-4">
          <span className="badge badge-cyan">{module.badge}</span>
          <div className="space-y-3">
            <h2 className="max-w-[560px] text-heading-4 text-secondary dark:text-white">{module.title}</h2>
            <p className="max-w-[620px] text-[15px] leading-7 text-secondary/76 dark:text-accent/72">{module.summary}</p>
          </div>
        </div>

        <div className="rounded-[24px] border border-[#1f7ae0]/12 bg-[#f8fbff] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] dark:border-white/10 dark:bg-white/[0.04] md:p-6">
          {featuredEmbedSrc ? (
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-start">
              <div className="overflow-hidden rounded-[20px] border border-[#dbe6f6] bg-white shadow-[0_12px_32px_rgba(15,23,42,0.06)] dark:border-stroke-7 dark:bg-background-7">
                <div className="border-b border-[#e6eefb] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1f7ae0] dark:border-stroke-7 dark:text-white/66">
                  {ui.featuredVideo}
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
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1f7ae0] dark:text-white/68">{ui.availableNow}</p>
                    <h3 className="mt-2 text-[20px] font-semibold leading-[1.3] text-secondary dark:text-white">{featured.title}</h3>
                  </div>
                  {featured.durationLabel ? (
                    <span className="rounded-full border border-[#1f7ae0]/14 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1f7ae0] dark:border-white/10 dark:bg-white/[0.06] dark:text-white/72">
                      {featured.durationLabel}
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 text-[15px] leading-7 text-secondary/78 dark:text-accent/74">{featured.purpose}</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1f7ae0] dark:text-white/68">{ui.comingSoon}</p>
                  <h3 className="mt-2 text-[20px] font-semibold leading-[1.3] text-secondary dark:text-white">{featured.title}</h3>
                </div>
                {featured.durationLabel ? (
                  <span className="rounded-full border border-[#1f7ae0]/14 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1f7ae0] dark:border-white/10 dark:bg-white/[0.06] dark:text-white/72">
                    {featured.durationLabel}
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-[15px] leading-7 text-secondary/78 dark:text-accent/74">{featured.purpose}</p>
              <div className="mt-5">
                <span className="inline-flex min-h-[44px] min-w-[190px] items-center justify-center rounded-full border border-dashed border-stroke-2 px-5 text-sm font-medium text-secondary/58 dark:border-stroke-7 dark:text-accent/60">
                  {ui.noVideoYet}
                </span>
              </div>
            </>
          )}
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
