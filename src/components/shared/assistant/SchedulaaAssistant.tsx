'use client';

import { useMemo, useState } from 'react';
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
          className="fixed right-5 bottom-5 z-[120] rounded-full bg-primary-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-primary-600"
          aria-label="Open Schedulaa Assistant"
        >
          Schedulaa Assistant
        </button>
      ) : (
        <div className="fixed right-5 bottom-5 z-[130] flex h-[520px] w-[360px] flex-col overflow-hidden rounded-2xl border border-accent/15 bg-white shadow-2xl dark:bg-background-8">
          <div className="flex items-center justify-between border-b border-accent/10 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-secondary dark:text-white">Schedulaa Assistant</p>
              <p className="text-xs text-accent/70">Chatbot Guide & product help</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-1 text-xs text-accent/70 hover:bg-accent/10"
            >
              Close
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((msg, idx) => (
              <div key={`${msg.role}-${idx}`} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
                <div
                  className={`inline-block max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                    msg.role === 'user'
                      ? 'bg-primary-500 text-white'
                      : 'bg-accent/10 text-secondary dark:text-white'
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
                    className="rounded-full border border-accent/20 px-3 py-1 text-xs text-secondary transition hover:border-primary-500 hover:text-primary-600 dark:text-white"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            {loading && <p className="text-xs text-accent/70">Assistant is typing...</p>}
          </div>

          <form
            className="border-t border-accent/10 p-3"
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
                className="h-10 flex-1 rounded-xl border border-accent/20 px-3 text-sm outline-none ring-primary-400 focus:ring-2"
              />
              <button
                type="submit"
                disabled={!canSend}
                className="h-10 rounded-xl bg-primary-500 px-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
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
