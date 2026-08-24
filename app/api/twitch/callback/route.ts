import { NextRequest, NextResponse } from "next/server";

const DEFAULT_ENGINE_API = "http://184.170.201.111:8765";

export async function GET(request: NextRequest) {
    const authCode = request.nextUrl.searchParams.get("code");
    const linkCode = request.nextUrl.searchParams.get("state")?.trim().toUpperCase();
    const clientId = process.env.TWITCH_CLIENT_ID;
    const clientSecret = process.env.TWITCH_CLIENT_SECRET;
    const linkSecret = process.env.GAMEZONE_TWITCH_LINK_SECRET;
    if (!authCode || !linkCode || !clientId || !clientSecret || !linkSecret) return new NextResponse("Twitchkopplingen kunde inte slutföras.", { status: 400 });

    const redirectUri = `${request.nextUrl.origin}/api/twitch/callback`;
    const tokenBody = new URLSearchParams({ client_id: clientId, client_secret: clientSecret, code: authCode, grant_type: "authorization_code", redirect_uri: redirectUri });
    const tokenResponse = await fetch("https://id.twitch.tv/oauth2/token", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: tokenBody, cache: "no-store" });
    if (!tokenResponse.ok) return new NextResponse("Twitch nekade kopplingen. Försök igen med /twitch link.", { status: 400 });
    const token = await tokenResponse.json() as { access_token: string; refresh_token?: string; expires_in?: number };

    const userResponse = await fetch("https://api.twitch.tv/helix/users", { headers: { Authorization: `Bearer ${token.access_token}`, "Client-Id": clientId }, cache: "no-store" });
    if (!userResponse.ok) return new NextResponse("Kunde inte läsa ditt Twitchkonto.", { status: 400 });
    const users = await userResponse.json() as { data?: Array<{ id: string; login: string; display_name: string }> };
    const user = users.data?.[0];
    if (!user) return new NextResponse("Kunde inte läsa ditt Twitchkonto.", { status: 400 });

    const engineApi = (process.env.GAMEZONE_ENGINE_API_URL ?? process.env.ENGINE_API_URL ?? DEFAULT_ENGINE_API).replace(/\/$/, "");
    const form = new URLSearchParams({ code: linkCode, twitchId: user.id, login: user.login, displayName: user.display_name, accessToken: token.access_token, refreshToken: token.refresh_token ?? "", expiresIn: String(token.expires_in ?? 3600) });
    const complete = await fetch(`${engineApi}/api/v1/twitch/link/complete`, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "X-GameZone-Twitch-Secret": linkSecret }, body: form, cache: "no-store" });
    if (!complete.ok) return new NextResponse("Länkkoden är ogiltig eller har gått ut. Kör /twitch link igen.", { status: 400 });
    return NextResponse.redirect(new URL("/live?linked=1", request.url));
}
