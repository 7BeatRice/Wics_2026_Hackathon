import { db } from "../firebase.ts";
import { collection, addDoc } from "firebase/firestore";
const gradients = [
  "from-purple-400 via-pink-400 to-yellow-400",
  "from-blue-400 via-purple-400 to-pink-400",
  "from-green-400 via-teal-400 to-blue-400",
  "from-orange-400 via-yellow-400 to-amber-400"
];

export const seedFakeUsers = async () => {
  const fakeUsers = [
    { name: "Alex", age: 24, genres: ["Indie", "Rock", "Pop"], artist: "Tame Impala", note: "Can't wait to see Tame Impala tonight!" },
    { name: "Sasha", age: 22, genres: ["Hip Hop", "R&B", "Soul"], artist: "SZA", note: "Looking for a group for the SZA set!" },
    { name: "Jordan", age: 26, genres: ["Electronic", "Techno", "House"], artist: "Rufus Du Sol", note: "Dance floor vibes only." },
    { name: "Riley", age: 23, genres: ["Folk", "Country", "Indie"], artist: "Noah Kahan", note: "Anyone else crying at the main stage?" },
    { name: "Casey", age: 25, genres: ["Jazz", "Soul", "R&B"], artist: "Khruangbin", note: "Catch me at the chill stage." },
    { name: "Taylor", age: 21, genres: ["Pop", "Indie", "Rock"], artist: "Lana Del Rey", note: "Floral crowns and sad girl summer." },
    { name: "Morgan", age: 27, genres: ["Rock", "Soul", "Blues"], artist: "The Black Keys", note: "Old school rock is the way." },
    { name: "Skyler", age: 24, genres: ["Hip Hop", "Electronic", "Jazz"], artist: "Kaytranada", note: "The groove is unmatched." },
    { name: "Jamie", age: 22, genres: ["Indie", "Folk", "Pop"], artist: "Phoebe Bridgers", note: "Emotional support human needed." },
    { name: "Charlie", age: 28, genres: ["Techno", "Electronic", "House"], artist: "Peggy Gou", note: "Berlin vibes in Austin." }
  ];

try {
    for (const user of fakeUsers) {
      console.log("Seeding user:", user.name);
      await addDoc(collection(db, "users"), {
        uid: `fake_${Math.random().toString(36).substr(2, 9)}`,
        displayName: user.name,
        age: user.age,
        // We store them as they are, but App.tsx must lowercase them to compare!
        genres: user.genres, 
        topArtist: user.artist,
        festivalNote: user.note,
        gradient: gradients[Math.floor(Math.random() * gradients.length)],
        location: `At ACL • ${(Math.random() * 2).toFixed(1)} mi away`,
        isFake: true 
      });
    }
    alert("Database Seeded! 10 new festival-goers added.");
  } catch (e) {
    console.error(e);
  }
};