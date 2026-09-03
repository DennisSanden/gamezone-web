import { NextResponse } from "next/server";

const ENGINE_API_URL =
    process.env.GAMEZONE_ENGINE_API_URL ?? "http://162.120.2.221:25569";

export const revalidate = 10_800;

export async function GET() {
    try {
        const response = await fetch(`${ENGINE_API_URL}/api/v1/settlements`, {
            next: { revalidate: 10_800 },
            signal: AbortSignal.timeout(8_000),
        });

        const body = await response.json().catch(() => null);

        if (!response.ok) {
            return NextResponse.json(
                {
                    status: "FAILED",
                    message: "Engine kunde inte hämta settlements.",
                    upstreamStatus: response.status,
                },
                { status: 502 },
            );
        }

        return NextResponse.json(body, {
            headers: {
                "Cache-Control": "public, s-maxage=10800, stale-while-revalidate=21600",
            },
        });
    } catch (error) {
        console.error("Failed to fetch settlements from GameZone Engine", error);

        return NextResponse.json(
            {
                status: "FAILED",
                message: "Settlement-data är tillfälligt otillgänglig.",
            },
            { status: 503 },
        );
    }
}
