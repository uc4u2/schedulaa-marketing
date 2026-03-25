'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

const CHAT_ENDPOINT = '/api/chat';

type ChatMessage = {
  role: 'user' | 'assistant';
  text: string;
};

const STARTER_CHIPS = [
  'Scheduling & time tracking',
  'Payroll & QuickBooks/Xero',
  'Pricing & plans',
  'Compare Schedulaa with QuickBooks',
  'Chatbot Guide (Schedulaa Assistant)',
  'Onboarding checklist & rollout',
];

const INITIAL_MESSAGE =
  'Hi, I’m the Schedulaa Assistant. I can help with scheduling, payroll, booking, and setup questions.';

export default function SchedulaaAssistant() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: 'assistant', text: INITIAL_MESSAGE }]);

  const hidden = pathname.includes('/login') || pathname.includes('/signup');
  const canSend = draft.trim().length > 0 && !loading;

  const visibleChips = useMemo(() => {
    if (messages.some((m) => m.role === 'user')) return [];
    return STARTER_CHIPS;
  }, [messages]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const sendMessage = async (input: string) => {
    const content = input.trim();
    if (!content || loading) return;

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

  if (hidden) return null;

  return (
    <>
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed right-5 bottom-5 z-[120] inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-[linear-gradient(135deg,#0f172a_0%,#103456_58%,#155e8a_100%)] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(2,12,33,0.46)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_52px_rgba(2,12,33,0.54)]"
          aria-label="Open Schedulaa Assistant"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-lime-300 shadow-[0_0_14px_rgba(163,230,53,0.8)]" />
          Schedulaa Assistant
        </button>
      ) : (
        <div className="fixed right-3 bottom-3 z-[130] flex h-[min(78vh,620px)] w-[min(408px,calc(100vw-24px))] flex-col overflow-hidden rounded-[28px] border border-cyan-200/20 bg-[linear-gradient(180deg,#0d2236_0%,#0b1e31_100%)] shadow-[0_32px_80px_rgba(4,10,24,0.56)] backdrop-blur-xl">
          <div className="border-b border-cyan-200/20 bg-[linear-gradient(135deg,#0f2b44_0%,#144668_55%,#0d6893_100%)] px-4 py-3.5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-lg shadow-[0_8px_18px_rgba(3,7,18,0.2)]">
                  <span>🤖</span>
                  <span className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-[#0f4d72] bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
                </div>
                <div>
                  <p className="text-[1.02rem] font-semibold text-white">Schedulaa Assistant</p>
                  <p className="text-xs text-cyan-100/80">Product guide, booking help, and setup answers</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-cyan-50/90">
                  Online
                </span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-full border border-white/12 bg-white/10 px-3 py-2 text-xs text-cyan-50/80">
              <span>Messages</span>
              <span className="rounded-full bg-white/12 px-2 py-0.5">{messages.length} items</span>
            </div>
          </div>

          <div className="flex items-center justify-end border-b border-white/8 bg-[#0d2236] px-4 py-2">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-200/25 bg-white/8 text-base leading-none text-cyan-50 transition hover:border-cyan-100/50 hover:bg-white/16"
              aria-label="Close assistant"
            >
              ×
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-[linear-gradient(180deg,#10263a_0%,#0d2133_100%)] px-4 py-4">
            {messages.map((msg, idx) => (
              <div key={`${msg.role}-${idx}`} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
                {msg.role === 'assistant' ? (
                  <div className="inline-flex max-w-[90%] items-start gap-2.5">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/90 text-sm shadow-[0_6px_16px_rgba(5,12,24,0.18)]">
                      🤖
                    </div>
                    <div className="rounded-[22px] rounded-tl-[10px] border border-white/10 bg-white/12 px-4 py-3 text-left text-[15px] leading-6 text-slate-100 shadow-[0_10px_24px_rgba(5,12,24,0.18)]">
                      {msg.text}
                    </div>
                  </div>
                ) : (
                  <div className="inline-block max-w-[82%] rounded-[22px] rounded-tr-[10px] bg-[linear-gradient(135deg,#3b82f6_0%,#1d4ed8_100%)] px-4 py-3 text-left text-[15px] leading-6 text-white shadow-[0_12px_26px_rgba(29,78,216,0.3)]">
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

          <form
            className="border-t border-cyan-200/15 bg-[linear-gradient(180deg,#10253a_0%,#0d2032_100%)] p-3"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(draft);
            }}
          >
            <div className="rounded-[24px] border border-cyan-200/22 bg-white/8 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="flex items-end gap-2">
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Ask about payroll, booking, onboarding..."
                  className="h-12 flex-1 rounded-[18px] border border-transparent bg-transparent px-3 text-sm text-white outline-none ring-cyan-400 placeholder:text-cyan-50/45 focus:border-cyan-300/35 focus:ring-2"
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
        </div>
      )}
    </>
  );
}
