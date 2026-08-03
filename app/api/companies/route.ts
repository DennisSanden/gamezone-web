import { NextResponse } from "next/server";

const ENGINE_API_URL = process.env.GAMEZONE_ENGINE_API_URL ?? "http://184.170.201.111:8765";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch(`${ENGINE_API_URL}/api/v1/companies`, {
      cache: "no-store",
      signal: AbortSignal.timeout(8_000),
    });
    const body = await response.json().catch(() => null);

    if (!response.ok) {
      return NextResponse.json({ status: "FAILED", message: "Engine kunde inte hämta företag." }, { status: 502 });
    }

    return NextResponse.json(body, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Failed to fetch companies from GameZone Engine", error);
    return NextResponse.json({ status: "FAILED", message: "Företagsdata är tillfälligt otillgänglig." }, { status: 503 });
  }
}
