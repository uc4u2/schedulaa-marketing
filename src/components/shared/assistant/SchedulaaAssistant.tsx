'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

const CHAT_ENDPOINT = '/api/chat';

type ChatMessage = {
  role: 'user' | 'assistant';
  text: string;
};

type AssistantTab = 'home' | 'messages' | 'help';

const STARTER_CHIPS = [
  'Scheduling & time tracking',
  'Payroll & QuickBooks/Xero',
  'Pricing & plans',
  'Compare Schedulaa with QuickBooks',
];

const HELP_ARTICLES = [
  'Scheduling & time tracking',
  'Payroll & QuickBooks/Xero',
  'Pricing & plans',
  'Compare Schedulaa with QuickBooks',
];

const INITIAL_MESSAGE =
  'Hi, I’m the Schedulaa Assistant. I can help with scheduling, payroll, booking, and setup questions.';

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 10.8 12 4l8 6.8V19a1 1 0 0 1-1 1h-4.8v-5.2H9.8V20H5a1 1 0 0 1-1-1v-8.2Z"
        fill={active ? '#06b6d4' : '#6b7280'}
      />
    </svg>
  );
}

function MessageIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6.5h12a2 2 0 0 1 2 2V15a2 2 0 0 1-2 2H9.2L5 20v-3a2 2 0 0 1-1-1.7V8.5a2 2 0 0 1 2-2Z"
        stroke={active ? '#06b6d4' : '#6b7280'}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HelpIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke={active ? '#06b6d4' : '#6b7280'} strokeWidth="1.8" />
      <path
        d="M9.8 9.4a2.5 2.5 0 1 1 4.1 2c-.8.6-1.4 1.1-1.4 2.1"
        stroke={active ? '#06b6d4' : '#6b7280'}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="17.1" r="1" fill={active ? '#06b6d4' : '#6b7280'} />
    </svg>
  );
}

export default function SchedulaaAssistant() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<AssistantTab>('home');
  const [loading, setLoading] = useState(false);
  const [draft, setDraft] = useState('');
  const [helpQuery, setHelpQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: 'assistant', text: INITIAL_MESSAGE }]);

  const hidden = pathname.includes('/login') || pathname.includes('/signup');
  const canSend = draft.trim().length > 0 && !loading;

  const visibleChips = useMemo(() => {
    if (messages.some((m) => m.role === 'user')) {
      return [];
    }
    return STARTER_CHIPS;
  }, [messages]);

  const filteredArticles = useMemo(() => {
    const query = helpQuery.trim().toLowerCase();
    if (!query) {
      return HELP_ARTICLES;
    }
    return HELP_ARTICLES.filter((item) => item.toLowerCase().includes(query));
  }, [helpQuery]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [open]);

  const sendMessage = async (input: string) => {
    const content = input.trim();
    if (!content || loading) {
      return;
    }

    setActiveTab('messages');
    setMessages((prev) => [...prev, { role: 'user', text: content }]);
    setDraft('');
    setLoading(true);
    try {
      const response = await fetch(CHAT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content }),
      });
      const data = await response.json().catch(() => ({}));
      const reply =
        typeof data?.reply === 'string' && data.reply.trim()
          ? data.reply
          : 'I could not process that yet. Please try again in a moment.';
      setMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: 'Connection issue. Please try again in a moment.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const stopWheelPropagation = (event: React.WheelEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  if (hidden) {
    return null;
  }

  return (
    <>
      {!open ? (
        <button
          type="button"
          onClick={() => {
            setActiveTab('home');
            setOpen(true);
          }}
          className="fixed right-5 bottom-5 z-[120] inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-[linear-gradient(135deg,#0f172a_0%,#103456_58%,#155e8a_100%)] px-4 py-3 text-sm font-semibold text-lime-300 shadow-[0_18px_44px_rgba(2,12,33,0.46)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_52px_rgba(2,12,33,0.54)]"
          aria-label="Open Schedulaa Assistant"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-lime-300 shadow-[0_0_14px_rgba(163,230,53,0.8)]" />
          Ask Schedulaa
        </button>
      ) : (
        <div
          className="fixed right-3 bottom-3 z-[130] flex h-[min(80vh,680px)] w-[min(420px,calc(100vw-24px))] flex-col overflow-hidden rounded-[28px] border border-cyan-200/20 bg-[linear-gradient(180deg,#0d2236_0%,#0b1e31_100%)] shadow-[0_32px_80px_rgba(4,10,24,0.56)] backdrop-blur-xl"
          onWheelCapture={stopWheelPropagation}
        >
          <div className="bg-[linear-gradient(135deg,#0f2b44_0%,#144668_55%,#0d6893_100%)] px-5 py-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-base font-semibold text-slate-900 shadow-[0_8px_18px_rgba(3,7,18,0.2)]">
                  S
                  <span className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-[#0f4d72] bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
                </div>
                <div>
                  <p className="text-[1.05rem] font-semibold text-white">Schedulaa Assistant</p>
                  <p className="text-sm text-cyan-100/85">Help center, product guidance, and setup answers</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-lime-300/30 bg-lime-300/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-lime-200">
                  Online
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-base leading-none text-cyan-50 transition hover:bg-white/10"
                  aria-label="Close assistant"
                >
                  ×
                </button>
              </div>
            </div>

            {activeTab === 'home' && (
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-4xl font-semibold leading-none text-cyan-50/70">Hi there!</p>
                  <p className="mt-2 text-4xl font-semibold leading-none text-white">How can we help?</p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveTab('messages')}
                  className="flex w-full items-center justify-between rounded-[16px] bg-white px-5 py-4 text-left text-slate-900 shadow-[0_10px_24px_rgba(5,12,24,0.16)]"
                >
                  <span>
                    <span className="block text-lg font-semibold">Send us a message</span>
                    <span className="mt-1 block text-sm text-slate-500">Start a chat with the Schedulaa Assistant</span>
                  </span>
                  <span className="text-2xl text-cyan-500">›</span>
                </button>
              </div>
            )}
          </div>

          <div className="flex-1 overflow-hidden bg-[#f8fafc]">
            {activeTab === 'home' && (
              <div className="h-full overflow-y-auto overscroll-contain px-4 py-4" onWheelCapture={stopWheelPropagation}>
                <div className="rounded-[16px] bg-white p-3 shadow-[0_10px_28px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70">
                  <div className="flex items-center justify-between rounded-[12px] bg-slate-50 px-3 py-3">
                    <span className="text-base font-semibold text-slate-900">Search for help</span>
                    <span className="text-lg text-cyan-500">⌕</span>
                  </div>
                  <div className="mt-3 divide-y divide-slate-100">
                    {HELP_ARTICLES.map((article) => (
                      <button
                        key={article}
                        type="button"
                        onClick={() => sendMessage(article)}
                        className="flex w-full items-center justify-between gap-4 px-3 py-4 text-left text-[15px] text-slate-600 transition hover:bg-slate-50"
                      >
                        <span>{article}</span>
                        <span className="text-xl text-cyan-500">›</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <>
                <div className="border-b border-slate-200 bg-white px-4 py-3">
                  <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
                    Messages
                  </div>
                </div>
                <div
                  className="h-[calc(100%-72px)] overflow-y-auto overscroll-contain bg-[linear-gradient(180deg,#10263a_0%,#0d2133_100%)] px-4 py-4"
                  onWheelCapture={stopWheelPropagation}
                >
                  <div className="space-y-3">
                    {messages.map((msg, idx) => (
                      <div key={`${msg.role}-${idx}`} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
                        {msg.role === 'assistant' ? (
                          <div className="inline-flex max-w-[90%] items-start gap-2.5">
                            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/90 text-xs font-semibold text-slate-900 shadow-[0_6px_16px_rgba(5,12,24,0.18)]">
                              S
                            </div>
                            <div className="rounded-[18px] rounded-tl-[8px] border border-white/10 bg-white/12 px-4 py-3 text-left text-[15px] leading-6 text-slate-100 shadow-[0_10px_24px_rgba(5,12,24,0.18)]">
                              {msg.text}
                            </div>
                          </div>
                        ) : (
                          <div className="inline-block max-w-[82%] rounded-[18px] rounded-tr-[8px] bg-[linear-gradient(135deg,#3b82f6_0%,#1d4ed8_100%)] px-4 py-3 text-left text-[15px] leading-6 text-white shadow-[0_12px_26px_rgba(29,78,216,0.3)]">
                            {msg.text}
                          </div>
                        )}
                      </div>
                    ))}

                    {visibleChips.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {visibleChips.map((chip) => (
                          <button
                            key={chip}
                            type="button"
                            onClick={() => sendMessage(chip)}
                            className="rounded-full border border-cyan-200/18 bg-white/10 px-3.5 py-1.5 text-[13px] font-medium text-cyan-50 transition hover:border-cyan-200/35 hover:bg-white/18"
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    )}

                    {loading && <p className="text-xs text-cyan-100/70">Assistant is typing...</p>}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'help' && (
              <div className="h-full overflow-y-auto overscroll-contain px-4 py-4" onWheelCapture={stopWheelPropagation}>
                <div className="rounded-[16px] bg-white p-3 shadow-[0_10px_28px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70">
                  <div className="rounded-[12px] bg-slate-50 px-3 py-2">
                    <input
                      value={helpQuery}
                      onChange={(e) => setHelpQuery(e.target.value)}
                      placeholder="Search help articles"
                      className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                    />
                  </div>
                  <div className="mt-3 divide-y divide-slate-100">
                    {filteredArticles.map((article) => (
                      <button
                        key={article}
                        type="button"
                        onClick={() => sendMessage(article)}
                        className="flex w-full items-center justify-between gap-4 px-3 py-4 text-left text-[15px] text-slate-600 transition hover:bg-slate-50"
                      >
                        <span>{article}</span>
                        <span className="text-xl text-cyan-500">›</span>
                      </button>
                    ))}
                    {filteredArticles.length === 0 && (
                      <div className="px-3 py-5 text-sm text-slate-500">No help articles matched that search.</div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-slate-200 bg-white px-5 py-3">
            {activeTab === 'messages' ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(draft);
                }}
              >
                <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                  <div className="flex items-end gap-2">
                    <input
                      value={draft}
                      onChange={(e) => setDraft(e.target.value)}
                      placeholder="Ask about payroll, booking, onboarding..."
                      className="h-12 flex-1 rounded-[16px] border border-transparent bg-transparent px-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-cyan-200 focus:ring-2 focus:ring-cyan-100"
                    />
                    <button
                      type="submit"
                      disabled={!canSend}
                      className="inline-flex h-12 min-w-[84px] items-center justify-center rounded-[16px] border border-lime-300/30 bg-[linear-gradient(135deg,#8bcf20_0%,#5e9f12_100%)] px-4 text-sm font-semibold text-[#0f1e0b] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="h-[60px]" />
            )}

            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('home')}
                className={`flex flex-col items-center gap-1 py-1 ${activeTab === 'home' ? 'text-cyan-500' : 'text-slate-500'}`}
              >
                <HomeIcon active={activeTab === 'home'} />
                <span>Home</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('messages')}
                className={`flex flex-col items-center gap-1 py-1 ${activeTab === 'messages' ? 'text-cyan-500' : 'text-slate-500'}`}
              >
                <MessageIcon active={activeTab === 'messages'} />
                <span>Messages</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('help')}
                className={`flex flex-col items-center gap-1 py-1 ${activeTab === 'help' ? 'text-cyan-500' : 'text-slate-500'}`}
              >
                <HelpIcon active={activeTab === 'help'} />
                <span>Help</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
