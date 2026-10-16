import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(
    { commit: process.env.RENDER_GIT_COMMIT || null },
    { headers: { "Cache-Control": "no-store" } },
  );
}
