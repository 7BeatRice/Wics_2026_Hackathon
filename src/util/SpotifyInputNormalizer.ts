export function normalizeSpotifyInput(input: string): string {
  if (!input) return "";


  // Spotify artist URL
  if (input.includes("spotify.com")) {
    const parts = input.split("/");
    // We use ?? "" to ensure we always return a string, never undefined
    const lastPart = parts[parts.length - 1] ?? "";
    return lastPart.split("?")[0] ?? "";
  }


  // Plain artist name
  return input.trim();
}


// Expected behavior:
// "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb" -> "5INjqkS1o8h1imAzPqGZBb"
// "Tame Impala" -> "Tame Impala"


export function isSpotifyUrl(input: string): boolean {
  return input.includes("spotify.com");
}
