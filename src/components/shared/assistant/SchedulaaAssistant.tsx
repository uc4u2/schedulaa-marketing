'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

const API_ORIGIN =
  process.env.NEXT_PUBLIC_API_ORIGIN ||
  (process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://scheduling-application.onrender.com');

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
      const response = await fetch(`${API_ORIGIN}/chat`, {
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
          className="fixed right-5 bottom-5 z-[120] inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-[linear-gradient(135deg,#0f172a_0%,#0b2a45_55%,#154f73_100%)] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(2,12,33,0.5)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(2,12,33,0.58)]"
          aria-label="Open Schedulaa Assistant"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-lime-300 shadow-[0_0_14px_rgba(163,230,53,0.8)]" />
          Schedulaa Assistant
        </button>
      ) : (
        <div className="fixed right-3 bottom-3 z-[130] flex h-[min(78vh,560px)] w-[min(390px,calc(100vw-24px))] flex-col overflow-hidden rounded-3xl border border-cyan-200/20 bg-[linear-gradient(180deg,rgba(11,18,32,0.94)_0%,rgba(7,25,41,0.94)_100%)] shadow-[0_30px_70px_rgba(4,10,24,0.62)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-cyan-200/20 bg-[linear-gradient(120deg,rgba(11,20,35,0.95)_0%,rgba(10,42,67,0.95)_55%,rgba(13,65,93,0.9)_100%)] px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-white">Schedulaa Assistant</p>
              <p className="text-xs text-cyan-100/75">Chatbot Guide & product help</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-200/30 bg-white/10 text-base leading-none text-cyan-50 transition hover:border-cyan-100/50 hover:bg-white/20"
              aria-label="Close assistant"
            >
              ×
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-transparent px-4 py-4">
            {messages.map((msg, idx) => (
              <div key={`${msg.role}-${idx}`} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
                <div
                  className={`inline-block max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                    msg.role === 'user'
                      ? 'bg-[linear-gradient(135deg,#1d4ed8_0%,#0ea5e9_100%)] text-white shadow-[0_10px_25px_rgba(14,165,233,0.35)]'
                      : 'border border-white/15 bg-white/8 text-cyan-50'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {visibleChips.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {visibleChips.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => sendMessage(chip)}
                    className="rounded-full border border-cyan-200/25 bg-white/8 px-3 py-1 text-xs text-cyan-50 transition hover:border-lime-300/50 hover:bg-lime-300/15 hover:text-lime-100"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            {loading && <p className="text-xs text-cyan-100/70">Assistant is typing...</p>}
          </div>

          <form
            className="border-t border-cyan-200/20 bg-transparent p-3"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(draft);
            }}
          >
            <div className="flex gap-2">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Ask about payroll, booking, onboarding..."
                className="h-10 flex-1 rounded-xl border border-cyan-200/25 bg-white/8 px-3 text-sm text-white outline-none ring-cyan-400 placeholder:text-cyan-50/55 focus:border-cyan-300/55 focus:ring-2"
              />
              <button
                type="submit"
                disabled={!canSend}
                className="h-10 rounded-xl border border-lime-300/45 bg-[linear-gradient(135deg,#84cc16_0%,#65a30d_100%)] px-3 text-sm font-semibold text-slate-900 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
