'use client';

import type { TutorialModule } from '@/data/tutorials/tutorialCatalog';

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

export default function CenteredTutorialVideoSection({
  module,
  titleOverride,
  descriptionOverride,
}: {
  module: TutorialModule;
  titleOverride?: string;
  descriptionOverride?: string;
}) {
  const featuredVideo = module.items.find((item) => item.key === module.featuredKey) || module.items[0] || null;
  const featuredVideoId = getYouTubeId(featuredVideo?.youtubeUrl);
  const featuredEmbedSrc = featuredVideoId ? `https://www.youtube-nocookie.com/embed/${featuredVideoId}` : '';

  if (!featuredEmbedSrc) return null;

  return (
    <article className="overflow-hidden rounded-[32px] bg-[#213748] px-6 py-8 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:px-8 md:py-10 lg:px-10">
      <div className="space-y-7">
        <div className="space-y-4 text-center">
          <span className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/72">
            {module.badge}
          </span>
          <h2 className="mx-auto max-w-[760px] text-heading-3 text-white">
            {titleOverride || module.title}
          </h2>
          <p className="mx-auto max-w-[620px] text-[15px] leading-7 text-white/72">
            {descriptionOverride || module.summary}
          </p>
        </div>
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm md:p-5">
          <div className="relative overflow-hidden rounded-[22px] border border-[#10284d] bg-[#071224] pb-[56.25%] shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src={featuredEmbedSrc}
              title={featuredVideo?.title || module.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </article>
  );
}
