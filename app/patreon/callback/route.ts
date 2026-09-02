import { NextResponse } from "next/server";

const STEVE_API_URL = (process.env.GAMEZONE_STEVE_API_URL ?? "").replace(/\/$/, "");

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const denied = url.searchParams.get("error");
  if (denied) return NextResponse.redirect(new URL("/patreon?linked=cancelled", request.url));
  if (!code || !state || !STEVE_API_URL) return NextResponse.redirect(new URL("/patreon?linked=failed", request.url));

  try {
    const response = await fetch(`${STEVE_API_URL}/patreon/complete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, state }),
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });
    const body = await response.json().catch(() => null);
    if (!response.ok) {
      console.error("Patreon complete failed", body);
      return NextResponse.redirect(new URL(`/patreon?linked=failed`, request.url));
    }
    const tier = body?.tier === "GOLD" ? "gold" : "supporter";
    return NextResponse.redirect(new URL(`/patreon?linked=success&tier=${tier}`, request.url));
  } catch (error) {
    console.error("Patreon callback bridge failed", error);
    return NextResponse.redirect(new URL("/patreon?linked=failed", request.url));
  }
}
