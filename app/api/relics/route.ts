import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const FALLBACK_ENGINE_URLS = [
    "http://162.120.2.221:25569",
    "http://162.120.2.221:25569",
    "http://162.120.2.221:25569",
];

function engineCandidates() {
    const configured = [
        process.env.GAMEZONE_ENGINE_RELIC_API_URL,
        process.env.GAMEZONE_ENGINE_API_URL,
        ...FALLBACK_ENGINE_URLS,
    ];

    return [...new Set(
        configured
            .filter((value): value is string => Boolean(value?.trim()))
            .map((value) => value.trim().replace(/\/$/, "")),
    )];
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
                cache: "no-store",
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
                    "Cache-Control": "no-store, no-cache, must-revalidate",
                },
            });
        } catch (error) {
            const message = error instanceof Error ? error.message : "unknown error";
            failures.push(`${engineApi}: ${message}`);
        }
    }

    console.error("Relic archive could not reach GameZone Engine", failures);

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
                "Cache-Control": "no-store, no-cache, must-revalidate",
            },
        },
    );
}
