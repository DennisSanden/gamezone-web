/** Server-only Engine API URL. Never fall back to a relative URL in Node.js. */
export function getEngineApiUrl(): string | null {
  const raw = (process.env.GAMEZONE_ENGINE_API_URL ?? process.env.ENGINE_API_URL ?? "").trim();
  if (!raw) return null;
  try {
    const parsed = new URL(raw);
    if (!(["http:", "https:"].includes(parsed.protocol)) || !parsed.hostname || parsed.username || parsed.password || parsed.search || parsed.hash) return null;
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return null;
  }
}

export function missingEngineApiMessage(): string {
  return "GameZone Engine API-adress saknas eller är ogiltig. Ange GAMEZONE_ENGINE_API_URL som en fullständig http(s)-adress i webbserverns miljö.";
}
