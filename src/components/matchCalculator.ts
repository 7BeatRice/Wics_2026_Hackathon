import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../firebase.ts";

export const getMatches = async (myGenres: string[]) => {
  const usersRef = collection(db, "users");
  const querySnapshot = await getDocs(usersRef);
  
  const matches = querySnapshot.docs.map(doc => {
    const data = doc.data();
    
    // Calculate Jaccard Similarity Score
    const theirGenres = data.genres || [];
    const intersection = myGenres.filter(g => theirGenres.includes(g));
    const union = new Set([...myGenres, ...theirGenres]);
    const score = union.size > 0 ? Math.round((intersection.length / union.size) * 100) : 0;

    return {
      id: doc.id,
      ...data,
      matchPercentage: score
    };
  });

  // Sort by highest match first
  return matches.sort((a, b) => b.matchPercentage - a.matchPercentage);
};