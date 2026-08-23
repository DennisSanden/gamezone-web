import { NextResponse } from "next/server";

const ENGINE_API_URL =
    process.env.GAMEZONE_ENGINE_API_URL ?? "http://184.170.201.111:8765";

export async function GET() {
    try {
        const response = await fetch(`${ENGINE_API_URL.replace(/\/$/, "")}/api/v1/relics`, {
            cache: "no-store",
        });

        const body = await response.text();

        return new NextResponse(body, {
            status: response.status,
            headers: {
                "content-type": response.headers.get("content-type") ?? "application/json; charset=utf-8",
                "cache-control": "no-store",
            },
        });
    } catch {
        return NextResponse.json(
            {
                status: "error",
                error: {
                    code: "ENGINE_UNAVAILABLE",
                    message: "Relikarkivet kunde inte nå GameZone Engine.",
                },
            },
            { status: 503 },
        );
    }
}
