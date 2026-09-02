import { NextResponse } from "next/server";

const STEVE_API_URL = (process.env.GAMEZONE_STEVE_API_URL ?? "").replace(/\/$/, "");

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token")?.trim();
  if (!token) return NextResponse.redirect(new URL("/patreon?error=missing_token", request.url));
  if (!STEVE_API_URL) return NextResponse.redirect(new URL("/patreon?error=service_not_configured", request.url));

  try {
    const response = await fetch(`${STEVE_API_URL}/patreon/authorize?token=${encodeURIComponent(token)}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(8_000),
    });
    const body = await response.json().catch(() => null);
    if (!response.ok || !body?.authorizationUrl) {
      return NextResponse.redirect(new URL("/patreon?error=invalid_link", request.url));
    }
    return NextResponse.redirect(body.authorizationUrl);
  } catch (error) {
    console.error("Patreon authorize bridge failed", error);
    return NextResponse.redirect(new URL("/patreon?error=service_unavailable", request.url));
  }
}
