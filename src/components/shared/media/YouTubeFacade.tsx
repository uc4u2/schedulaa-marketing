'use client';

import { useMemo, useState } from 'react';

type YouTubeFacadeProps = {
  embedUrl: string;
  title: string;
  className?: string;
};

function getYouTubeVideoId(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    if (host === 'youtu.be' || host.endsWith('.youtu.be')) {
      return parsed.pathname.split('/').filter(Boolean)[0] || '';
    }
    if (host === 'youtube.com' || host.endsWith('.youtube.com') || host === 'youtube-nocookie.com' || host.endsWith('.youtube-nocookie.com')) {
      const embedId = parsed.pathname.match(/\/embed\/([^/?]+)/)?.[1];
      return embedId || parsed.searchParams.get('v') || '';
    }
  } catch {
    return '';
  }
  return '';
}

export default function YouTubeFacade({ embedUrl, title, className = '' }: YouTubeFacadeProps) {
  const [active, setActive] = useState(false);
  const videoId = useMemo(() => getYouTubeVideoId(embedUrl), [embedUrl]);
  const iframeSrc = useMemo(() => {
    if (!videoId) {
      return embedUrl;
    }
    const url = new URL(`https://www.youtube-nocookie.com/embed/${videoId}`);
    url.searchParams.set('autoplay', '1');
    url.searchParams.set('rel', '0');
    return url.toString();
  }, [embedUrl, videoId]);
  const thumbnail = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : '';

  if (active) {
    return (
      <iframe
        className={className}
        src={iframeSrc}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      className={`group overflow-hidden bg-[#071224] bg-cover bg-center text-white ${className}`}
      style={thumbnail ? { backgroundImage: `url(${thumbnail})` } : undefined}
      onClick={() => setActive(true)}
      aria-label={`Play video: ${title}`}
    >
      <span className="absolute inset-0 bg-slate-950/45 transition group-hover:bg-slate-950/32 group-focus-visible:bg-slate-950/32" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-white text-secondary shadow-2xl transition group-hover:scale-105 group-focus-visible:scale-105">
          <svg viewBox="0 0 24 24" className="ml-1 size-7" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
      <span className="sr-only">Play {title}</span>
    </button>
  );
}
