import { getEngineApiUrl, missingEngineApiMessage } from "@/lib/engine-api-url";
import { NextResponse } from "next/server";


export const revalidate = 10_800;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category") ?? "ALL";
  const limit = url.searchParams.get("limit") ?? "100";
  try {
    const ENGINE_API_URL = getEngineApiUrl();
    if (!ENGINE_API_URL) return NextResponse.json({ status: "FAILED", message: missingEngineApiMessage() }, { status: 503 });
    const response = await fetch(`${ENGINE_API_URL}/api/v1/chronicles?category=${encodeURIComponent(category)}&limit=${encodeURIComponent(limit)}`, {
      next: { revalidate: 10_800 },
      signal: AbortSignal.timeout(8_000),
    });
    const body = await response.json().catch(() => null);
    return NextResponse.json(body ?? { status: "FAILED", message: "Ogiltigt svar från Engine." }, { status: response.status, headers: { "Cache-Control": "public, s-maxage=10800, stale-while-revalidate=21600" } });
  } catch (error) {
    console.error("Failed to fetch Chronicles from GameZone Engine", error);
    return NextResponse.json({ status: "FAILED", message: "Chronicles är tillfälligt otillgänglig." }, { status: 503 });
  }
}
