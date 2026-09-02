import { NextResponse } from "next/server";

const STEVE_API_URL = (process.env.GAMEZONE_STEVE_API_URL ?? "").replace(/\/$/, "");

export async function GET() {
  if (!STEVE_API_URL) return NextResponse.json([], { status: 200 });
  try {
    const response = await fetch(`${STEVE_API_URL}/patreon/supporters`, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(8_000),
    });
    const body = await response.json().catch(() => []);
    return NextResponse.json(Array.isArray(body) ? body : [], {
      status: response.ok ? 200 : 503,
      headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" },
    });
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
