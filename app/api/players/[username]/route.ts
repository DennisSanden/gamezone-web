import { NextResponse } from "next/server";

const ENGINE_API_URL = process.env.GAMEZONE_ENGINE_API_URL ?? "http://162.120.2.221:25569";

export const revalidate = 15;

export async function GET(_request: Request, context: { params: Promise<{ username: string }> }) {
  const { username } = await context.params;
  const normalizedUsername = decodeURIComponent(username).trim();

  if (!normalizedUsername) {
    return NextResponse.json({ status: "VALIDATION_ERROR", message: "Spelarnamn saknas." }, { status: 400 });
  }

  try {
    const response = await fetch(
      `${ENGINE_API_URL}/api/v1/players/profile/by-username?username=${encodeURIComponent(normalizedUsername)}`,
      { next: { revalidate: 15 }, signal: AbortSignal.timeout(8_000) },
    );
    const body = await response.json().catch(() => null);
    return NextResponse.json(body ?? { status: "FAILED", message: "Ogiltigt svar från Engine." }, {
      status: response.status,
      headers: { "Cache-Control": "public, s-maxage=15, stale-while-revalidate=60" },
    });
  } catch (error) {
    console.error("Failed to fetch player profile from GameZone Engine", error);
    return NextResponse.json(
      { status: "FAILED", message: "Spelarprofilen är tillfälligt otillgänglig." },
      { status: 503 },
    );
  }
}
