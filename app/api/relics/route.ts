import { getEngineApiUrl } from "@/lib/engine-api-url";
import { NextResponse } from "next/server";

export const revalidate = 10_800;

function engineCandidates() {
    const override = process.env.GAMEZONE_ENGINE_RELIC_API_URL?.trim();
    const overrideUrl = override && /^https?:\/\//i.test(override) ? override.replace(/\/$/, "") : null;
    return [...new Set([overrideUrl, getEngineApiUrl()].filter((url): url is string => Boolean(url)))];
}

type EnginePayload = {
    status?: string;
    data?: unknown;
    error?: unknown;
};

export async function GET() {
    const failures: string[] = [];

    for (const engineApi of engineCandidates()) {
        try {
            const response = await fetch(`${engineApi}/api/v1/relics`, {
                next: { revalidate: 10_800 },
                signal: AbortSignal.timeout(5_000),
                headers: {
                    accept: "application/json",
                },
            });

            const text = await response.text();
            let payload: EnginePayload | null = null;

            try {
                payload = text ? JSON.parse(text) as EnginePayload : null;
            } catch {
                failures.push(`${engineApi}: invalid JSON (${response.status})`);
                continue;
            }

            if (!response.ok) {
                failures.push(`${engineApi}: HTTP ${response.status}`);
                continue;
            }

            if (!payload || !Array.isArray(payload.data)) {
                failures.push(`${engineApi}: response did not contain relic data`);
                continue;
            }

            return NextResponse.json(payload, {
                status: 200,
                headers: {
                    "Cache-Control": "public, s-maxage=10800, stale-while-revalidate=21600",
                },
            });
        } catch (error) {
            const message = error instanceof Error ? error.message : "unknown error";
            failures.push(`${engineApi}: ${message}`);
        }
    }

    if (failures.length) console.error("Relic archive could not reach GameZone Engine", failures);

    return NextResponse.json(
        {
            status: "error",
            error: {
                code: "ENGINE_UNAVAILABLE",
                message: "Relikarkivet kunde inte nå GameZone Engine.",
            },
        },
        {
            status: 503,
            headers: {
                "Cache-Control": "public, s-maxage=5, stale-while-revalidate=30",
            },
        },
    );
}
