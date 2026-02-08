import React, { useState, useEffect } from 'react';
import { db, auth } from '../../firebase.ts';
import { collection, getDocs, query, where, limit } from 'firebase/firestore';
import { MatchDiscoveryScreen } from './MatchDiscoveryScreen.tsx';
import { MatchListScreen } from './MatchListScreen.tsx';

export function FestivalContainer({ darkMode }: { darkMode: boolean }) {
  const [view, setView] = useState<'discovery' | 'list'>('discovery');
  const [allMatches, setAllMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMatches = async () => {
      const user = auth.currentUser;
      if (!user) return;
      try {
        const q = query(collection(db, "users"), where("uid", "!=", user.uid), limit(10));
        const snap = await getDocs(q);
        const data = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          // Fallbacks in case data is missing
          name: doc.data().displayName || doc.data().name || "Music Fan",
          artists: doc.data().genres || ["Live Music"],
          gradient: doc.data().gradient || "from-purple-500 to-blue-500"
        }));
        setAllMatches(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    loadMatches();
  }, []);

  if (loading) return <div className="h-screen flex items-center justify-center">Finding your vibe...</div>;

  return (
    <>
        {view === 'discovery' ? (
      <MatchDiscoveryScreen 
        realMatches={allMatches} 
        onViewAll={() => setView('list')} 
        darkMode={darkMode} 
        // ADD THIS LINE:
        onMatch={() => console.log("Match requested from Discovery")} 
      />
    ) : (
      <MatchListScreen 
        matches={allMatches} 
        onBack={() => setView('discovery')} 
        darkMode={darkMode} 
        // ADD THIS LINE:
        onSelectMatch={(match) => console.log("Selected from list:", match)}
      />
    )}
    </>
  );
}