import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const code = request.nextUrl.searchParams.get("code")?.trim().toUpperCase();
    const clientId = process.env.TWITCH_CLIENT_ID;
    if (!code || !clientId) return new NextResponse("Twitchkopplingen är inte konfigurerad eller länkkoden saknas.", { status: 400 });
    const redirectUri = `${request.nextUrl.origin}/api/twitch/callback`;
    const auth = new URL("https://id.twitch.tv/oauth2/authorize");
    auth.searchParams.set("client_id", clientId);
    auth.searchParams.set("redirect_uri", redirectUri);
    auth.searchParams.set("response_type", "code");
    auth.searchParams.set("scope", "moderator:read:chatters");
    auth.searchParams.set("state", code);
    auth.searchParams.set("force_verify", "true");
    return NextResponse.redirect(auth);
}
