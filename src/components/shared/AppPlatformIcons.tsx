type PlatformIconProps = {
  className?: string;
};

export const AndroidPlatformIcon = ({ className = 'size-6' }: PlatformIconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="schedulaa-play-a" x1="4" y1="3.5" x2="16.8" y2="13.4" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3DDC84" />
        <stop offset="1" stopColor="#16C47F" />
      </linearGradient>
      <linearGradient id="schedulaa-play-b" x1="13.8" y1="9.4" x2="20.8" y2="13.8" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#2563EB" />
      </linearGradient>
      <linearGradient id="schedulaa-play-c" x1="3.9" y1="3.5" x2="15.8" y2="12.4" gradientUnits="userSpaceOnUse">
        <stop stopColor="#22C55E" />
        <stop offset="1" stopColor="#06B6D4" />
      </linearGradient>
      <linearGradient id="schedulaa-play-d" x1="3.9" y1="23.2" x2="18.8" y2="15.2" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FB7185" />
        <stop offset="1" stopColor="#F97316" />
      </linearGradient>
    </defs>
    <path d="M3.9 3.5 13.8 13.4l-9.8 9.8A2.2 2.2 0 0 1 3 21.3V5.7c0-.8.4-1.6.9-2.2Z" fill="url(#schedulaa-play-a)" />
    <path d="m16.8 10.5-2.9 2.9 2.9 2.9 3.8-2.2c1.3-.8 1.3-2.6 0-3.4l-3.8-2.2Z" fill="url(#schedulaa-play-b)" />
    <path d="m3.9 3.5 12.9 7-2.9 2.9L3.9 3.5Z" fill="url(#schedulaa-play-c)" />
    <path d="m3.9 23.2 10-9.8 2.9 2.9-12.9 7c-.6-.6-.9-1.4-.9-2.1Z" fill="url(#schedulaa-play-d)" />
  </svg>
);

export const ApplePlatformIcon = ({ className = 'size-6' }: PlatformIconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path
      d="M15.36 2.15c.02 1-.38 1.98-1.06 2.68-.72.74-1.9 1.31-2.93 1.22-.12-.98.36-2.03 1.06-2.73.71-.73 1.97-1.27 2.93-1.17Z"
      fill="currentColor"
      opacity="0.92"
    />
    <path
      d="M19.97 17.26c-.39.9-.86 1.73-1.44 2.53-.79 1.08-1.44 2.18-2.7 2.18-1.26 0-1.59-.73-3.03-.73-1.44 0-1.81.75-3.06.75-1.25 0-2.12-.99-2.91-2.07C5.4 18.03 4.3 14.5 5.76 11.92c1.03-1.83 2.84-2.97 4.8-2.97 1.26 0 2.45.78 3.03.78.58 0 2.03-.96 3.43-.82.58.03 2.22.24 3.27 1.73-2.87 1.58-2.42 5.58.53 6.62Z"
      fill="currentColor"
    />
  </svg>
);
