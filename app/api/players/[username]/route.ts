navigationItemsimport { NextResponse } from "next/server";

const ENGINE_API_URL = process.env.GAMEZONE_ENGINE_API_URL ?? "http://184.170.201.111:8765";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, context: { params: Promise<{ username: string }> }) {
  const { username } = await context.params;
  const normalizedUsername = decodeURIComponent(username).trim();

  if (!normalizedUsername) {
    return NextResponse.json({ status: "VALIDATION_ERROR", message: "Spelarnamn saknas." }, { status: 400 });
  }

  try {
    const response = await fetch(
      `${ENGINE_API_URL}/api/v1/players/profile/by-username?username=${encodeURIComponent(normalizedUsername)}`,
      { cache: "no-store", signal: AbortSignal.timeout(8_000) },
    );
    const body = await response.json().catch(() => null);
    return NextResponse.json(body ?? { status: "FAILED", message: "Ogiltigt svar från Engine." }, {
      status: response.status,
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("Failed to fetch player profile from GameZone Engine", error);
    return NextResponse.json(
      { status: "FAILED", message: "Spelarprofilen är tillfälligt otillgänglig." },
      { status: 503 },
    );
  }
}
