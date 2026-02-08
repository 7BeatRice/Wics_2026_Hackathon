const KNOWN_GENRES = ["Indie", "Rock", "Pop", "Hip Hop", "Jazz", "Electronic", 
  "R&B", "Country", "Metal", "Folk", "Soul", "Punk", "Techno" ];
  export function extractGenresFromSnippets(snippets: string[]): string[] {
   const text = snippets.join(" ").toLowerCase();
    return KNOWN_GENRES.filter((genre) =>
     text.includes(genre)
   );
 }
  export function buildMusicProfile(
   artist: string,
   snippets: string[]
 ) {
   return {
     artist,
     genres: extractGenresFromSnippets(snippets)
   };
 }
 
