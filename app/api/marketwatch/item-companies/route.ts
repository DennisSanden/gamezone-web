import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
const DEFAULT_ENGINE_API = "http://162.120.2.221:25569";

export async function GET(request: NextRequest) {
    const item = request.nextUrl.searchParams.get("item")?.trim();
    if (!item) return NextResponse.json({ status: "VALIDATION_ERROR", result: null, errors: [{ message: "item saknas." }] }, { status: 400 });
    const engineApi = (process.env.GAMEZONE_ENGINE_API_URL ?? DEFAULT_ENGINE_API).replace(/\/$/, "");
    try {
        const response = await fetch(`${engineApi}/api/v1/marketwatch/item/companies?item=${encodeURIComponent(item)}&periodHours=168`, { cache: "no-store", signal: AbortSignal.timeout(8_000) });
        return new NextResponse(await response.text(), { status: response.status, headers: { "Content-Type": response.headers.get("content-type") ?? "application/json; charset=utf-8", "Cache-Control": "no-store" } });
    } catch {
        return NextResponse.json({ status: "FAILED", result: null, errors: [{ message: "Kunde inte hämta företagsförsäljning." }] }, { status: 503 });
    }
}
