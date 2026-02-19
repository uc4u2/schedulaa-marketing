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
          className="fixed right-5 bottom-5 z-[120] inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(10,15,30,0.24)] transition hover:-translate-y-0.5 hover:bg-primary-500"
          aria-label="Open Schedulaa Assistant"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-ns-green" />
          Schedulaa Assistant
        </button>
      ) : (
        <div className="fixed right-3 bottom-3 z-[130] flex h-[min(78vh,560px)] w-[min(380px,calc(100vw-24px))] flex-col overflow-hidden rounded-3xl border border-stroke-2 bg-white shadow-[0_24px_48px_rgba(8,15,35,0.2)] dark:border-stroke-7 dark:bg-background-8">
          <div className="flex items-center justify-between border-b border-stroke-2 bg-gradient-to-r from-[#f6f9ff] via-[#f0f4ff] to-[#eef9f5] px-4 py-3 dark:border-stroke-7 dark:from-background-7 dark:via-background-8 dark:to-background-7">
            <div>
              <p className="text-sm font-semibold text-secondary dark:text-white">Schedulaa Assistant</p>
              <p className="text-xs text-secondary/70 dark:text-accent/75">Chatbot Guide & product help</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent/20 bg-white/90 text-base leading-none text-secondary transition hover:border-accent/35 hover:bg-white dark:bg-background-8 dark:text-white"
              aria-label="Close assistant"
            >
              ×
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-white px-4 py-4 dark:bg-background-8">
            {messages.map((msg, idx) => (
              <div key={`${msg.role}-${idx}`} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
                <div
                  className={`inline-block max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                    msg.role === 'user'
                      ? 'bg-secondary text-white shadow-sm'
                      : 'border border-stroke-2 bg-background-3 text-secondary dark:border-stroke-7 dark:bg-background-7 dark:text-white'
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
                    className="rounded-full border border-accent/20 bg-white px-3 py-1 text-xs text-secondary transition hover:border-primary-500 hover:bg-primary-500/5 hover:text-primary-600 dark:border-stroke-7 dark:bg-background-8 dark:text-white"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            {loading && <p className="text-xs text-accent/70">Assistant is typing...</p>}
          </div>

          <form
            className="border-t border-stroke-2 bg-white p-3 dark:border-stroke-7 dark:bg-background-8"
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
                className="h-10 flex-1 rounded-xl border border-accent/20 bg-background-3 px-3 text-sm text-secondary outline-none ring-primary-400 focus:border-primary-500 focus:ring-2 dark:border-stroke-7 dark:bg-background-7 dark:text-white"
              />
              <button
                type="submit"
                disabled={!canSend}
                className="h-10 rounded-xl bg-secondary px-3 text-sm font-semibold text-white transition hover:bg-primary-500 disabled:cursor-not-allowed disabled:opacity-50"
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
