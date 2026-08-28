import { NextResponse } from "next/server";

const ENGINE_API_URL = process.env.GAMEZONE_ENGINE_API_URL ?? "http://162.120.2.221:25569";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, context: { params: Promise<{ companyId: string }> }) {
  const { companyId } = await context.params;
  const id = decodeURIComponent(companyId).trim();

  if (!id) return NextResponse.json({ status: "VALIDATION_ERROR", message: "Företags-ID saknas." }, { status: 400 });

  try {
    const response = await fetch(`${ENGINE_API_URL}/api/v1/companies/${encodeURIComponent(id)}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(8_000),
    });
    const body = await response.json().catch(() => null);
    return NextResponse.json(body ?? { status: "FAILED", message: "Ogiltigt svar från Engine." }, {
      status: response.status,
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("Failed to fetch company from GameZone Engine", error);
    return NextResponse.json({ status: "FAILED", message: "Företagsprofilen är tillfälligt otillgänglig." }, { status: 503 });
  }
}
