import { NextRequest, NextResponse } from "next/server";

function engineApiUrl(): string | null {
    const configured = process.env.GAMEZONE_ENGINE_API_URL ?? process.env.ENGINE_API_URL;
    if (!configured) return process.env.NODE_ENV === "production" ? null : "http://127.0.0.1:8765";
    const value = configured.replace(/\/$/, "");
    if (process.env.NODE_ENV === "production" && !value.startsWith("https://")) return null;
    return value;
}

export async function GET(request: NextRequest) {
    const authCode = request.nextUrl.searchParams.get("code");
    const linkCode = request.nextUrl.searchParams.get("state")?.trim().toUpperCase();
    const clientId = process.env.TWITCH_CLIENT_ID;
    const clientSecret = process.env.TWITCH_CLIENT_SECRET;
    const linkSecret = process.env.GAMEZONE_TWITCH_LINK_SECRET;
    const engineApi = engineApiUrl();
    if (!authCode || !linkCode || !clientId || !clientSecret || !linkSecret || !engineApi) {
        return new NextResponse("Twitchkopplingen är inte korrekt konfigurerad. Engine-API måste använda HTTPS i produktion.", { status: 500 });
    }

    const redirectUri = `${request.nextUrl.origin}/api/twitch/callback`;
    const tokenBody = new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code: authCode,
        grant_type: "authorization_code",
        redirect_uri: redirectUri,
    });
    const tokenResponse = await fetch("https://id.twitch.tv/oauth2/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: tokenBody,
        cache: "no-store",
    });
    if (!tokenResponse.ok) return new NextResponse("Twitch nekade kopplingen. Försök igen med /twitch link.", { status: 400 });
    const token = await tokenResponse.json() as { access_token: string; refresh_token?: string; expires_in?: number };

    // Engine validates the access token against Twitch itself and derives the Twitch identity there.
    // The website therefore cannot assert twitchId/login/displayName on its own.
    const form = new URLSearchParams({
        code: linkCode,
        accessToken: token.access_token,
        refreshToken: token.refresh_token ?? "",
        expiresIn: String(token.expires_in ?? 3600),
    });
    const complete = await fetch(`${engineApi}/api/v1/twitch/link/complete`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-GameZone-Twitch-Secret": linkSecret,
        },
        body: form,
        cache: "no-store",
    });
    if (!complete.ok) return new NextResponse("Länken kunde inte godkännas. Kör /twitch link igen, eller /twitch creator om du aktiverar Creator-behörighet.", { status: 400 });
    return NextResponse.redirect(new URL("/live?linked=1", request.url));
}
