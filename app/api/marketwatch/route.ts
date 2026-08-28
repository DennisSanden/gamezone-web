import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const DEFAULT_ENGINE_API = "http://162.120.2.221:25569";

export async function GET() {
    const engineApi = (process.env.GAMEZONE_ENGINE_API_URL ?? DEFAULT_ENGINE_API).replace(/\/$/, "");

    try {
        const response = await fetch(`${engineApi}/api/v1/marketwatch?periodHours=24`, {
            cache: "no-store",
            signal: AbortSignal.timeout(8_000),
        });

        const body = await response.text();
        const contentType = response.headers.get("content-type") ?? "application/json; charset=utf-8";

        return new NextResponse(body, {
            status: response.status,
            headers: {
                "Content-Type": contentType,
                "Cache-Control": "no-store",
            },
        });
    } catch {
        return NextResponse.json(
            {
                status: "FAILED",
                result: null,
                errors: [{ code: "SERVICE_UNAVAILABLE", message: "MarketWatch kunde inte nå spelservern." }],
            },
            { status: 503 }
        );
    }
}
