import { NextResponse } from 'next/server';

const BACKEND_ORIGIN =
  process.env.NEXT_PUBLIC_API_ORIGIN ||
  process.env.API_ORIGIN ||
  (process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://scheduling-application.onrender.com');

export async function POST(request: Request) {
  try {
    const payload = await request.json().catch(() => ({}));
    const response = await fetch(`${BACKEND_ORIGIN}/public/marketing-leads/chatbot`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      return NextResponse.json(
        { error: data?.error || 'Unable to submit lead right now.' },
        { status: response.status },
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Connection issue. Please try again in a moment.' }, { status: 502 });
  }
}
