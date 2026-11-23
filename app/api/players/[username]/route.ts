import { getEngineApiUrl, missingEngineApiMessage } from "@/lib/engine-api-url";
import { NextResponse } from "next/server";



export const revalidate = 60;

export async function GET(_request: Request, context: { params: Promise<{ username: string }> }) {
  const { username } = await context.params;
  const normalizedUsername = decodeURIComponent(username).trim();

  if (!normalizedUsername) {
    return NextResponse.json({ status: "VALIDATION_ERROR", message: "Spelarnamn saknas." }, { status: 400 });
  }

  try {
    const ENGINE_API_URL = getEngineApiUrl();
    if (!ENGINE_API_URL) return NextResponse.json({ status: "FAILED", message: missingEngineApiMessage() }, { status: 503 });
    const response = await fetch(
      `${ENGINE_API_URL}/api/v1/players/profile/by-username?username=${encodeURIComponent(normalizedUsername)}`,
      { next: { revalidate: 60 }, signal: AbortSignal.timeout(8_000) },
    );
    const body = await response.json().catch(() => null);
    return NextResponse.json(body ?? { status: "FAILED", message: "Ogiltigt svar från Engine." }, {
      status: response.status,
      headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=60" },
    });
  } catch (error) {
    console.error("Failed to fetch player profile from GameZone Engine", error);
    return NextResponse.json(
      { status: "FAILED", message: "Spelarprofilen är tillfälligt otillgänglig." },
      { status: 503 },
    );
  }
}
