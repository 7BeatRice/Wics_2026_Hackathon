import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Music, MapPin } from 'lucide-react';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { db, auth } from '../../firebase.ts';

interface MatchListScreenProps {
  onBack: () => void;
  onSelectMatch: (index: number) => void;
  darkMode: boolean;
}

const matches = [
  {
    name: 'Alex',
    age: 24,
    match: 86,
    distance: '0.3 mi',
    artists: ['Tame Impala', 'Khruangbin', 'SZA'],
    gradient: 'from-purple-400 via-pink-400 to-yellow-400'
  },
  {
    name: 'Jordan',
    age: 26,
    match: 92,
    distance: '0.5 mi',
    artists: ['Rüfüs Du Sol', 'Lane 8', 'ODESZA'],
    gradient: 'from-blue-400 via-purple-400 to-pink-400'
  },
  {
    name: 'Sam',
    age: 23,
    match: 78,
    distance: '0.8 mi',
    artists: ['Billie Eilish', 'Lorde', 'Phoebe Bridgers'],
    gradient: 'from-green-400 via-teal-400 to-blue-400'
  },
  {
    name: 'Taylor',
    age: 25,
    match: 88,
    distance: '0.4 mi',
    artists: ['The 1975', 'HAIM', 'Rex Orange County'],
    gradient: 'from-pink-400 via-rose-400 to-red-400'
  },
  {
    name: 'Morgan',
    age: 27,
    match: 81,
    distance: '0.6 mi',
    artists: ['Tyler, The Creator', 'Frank Ocean', 'Childish Gambino'],
    gradient: 'from-orange-400 via-yellow-400 to-amber-400'
  },
  {
    name: 'Casey',
    age: 24,
    match: 85,
    distance: '0.7 mi',
    artists: ['Glass Animals', 'Still Woozy', 'Tame Impala'],
    gradient: 'from-indigo-400 via-purple-400 to-pink-400'
  }
];

export function MatchListScreen({ onBack, onSelectMatch, darkMode }: MatchListScreenProps) {
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const currentUser = auth.currentUser;
        if (!currentUser) return;

        // For the demo: Fetch all users except yourself 
        // In a real app, you'd query a "matches" subcollection
        const q = query(
          collection(db, "users"),
          where("uid", "!=", currentUser.uid),
          limit(10)
        );

        const querySnapshot = await getDocs(q);
        const fetched = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          // Ensure these fields exist or provide defaults for the UI
          name: doc.data().name || "Music Fan",
          age: doc.data().age || 21,
          match: doc.data().match || Math.floor(Math.random() * 20) + 80,
          distance: doc.data().distance || "0.5 mi",
          artists: doc.data().musicProfile?.genres || ["Live Music"],
          gradient: doc.data().gradient || "from-purple-500 to-blue-500"
        }));

        setMatches(fetched);
      } catch (err) {
        console.error("Error fetching match list:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  console.log("Current Match List:", matches);
  if (loading) return <div className="h-full flex items-center justify-center">Loading matches...</div>;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`h-full flex flex-col ${darkMode ? 'bg-[#121212]' : 'bg-gray-50'}`}
    >
      {/* Header */}
      <div className={`px-6 pt-6 pb-4 border-b flex-shrink-0 ${
        darkMode ? 'bg-[#121212] border-[#2A2A2D]' : 'bg-white border-gray-100'
      }`}>
        <div className="flex items-center justify-between mb-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onBack}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              darkMode ? 'bg-[#232326]' : 'bg-gray-100'
            }`}
          >
            <ArrowLeft className={`w-5 h-5 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`} />
          </motion.button>
          <h2 className={`text-xl font-bold ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Nearby Matches</h2>
          <div className="w-10"></div>
        </div>
        <p className={`text-sm text-center ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>Tap any match to start finding them</p>
      </div>

        {/* Match List */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <div className="space-y-3 pb-4">
                  {matches.map((match, index) => (
          <motion.button
            key={match.id || index}
            // ... existing props
            onClick={() => onSelectMatch(match)} // Pass the whole match object!
          >
            {/* ... avatar and info ... */}
            <div className="flex flex-wrap gap-1">
              {(match.artists || []).slice(0, 2).map((artist: string, i: number) => (
                <div key={i} className="...">
                  <span className="text-xs font-medium">{artist}</span>
                </div>
              ))}
            </div>
          </motion.button>
        ))}
        </div>
      </div>
    </motion.div>
  );
}
