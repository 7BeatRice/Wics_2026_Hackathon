import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { Music, MapPin, X, Heart, Sparkles } from 'lucide-react';
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { auth, db } from "../../firebase.ts";

interface MatchDiscoveryScreenProps {
  onMatch: () => void;
  onViewAll: () => void;
  darkMode: boolean;
}

export function MatchDiscoveryScreen({ onMatch, onViewAll, darkMode }: MatchDiscoveryScreenProps) {
  // --- 1. State & Constants ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [realMatches, setRealMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  // --- 2. Motion Values (Fixes "Cannot find name x") ---
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  // --- 3. Effects ---
  useEffect(() => {
    const fetchMatches = async () => {
      const currentUser = auth.currentUser;
      if (!currentUser) return;

      try {
        const usersRef = collection(db, "users");
        const q = query(
          usersRef, 
          where("uid", "!=", currentUser.uid), 
          limit(10)
        );

        const querySnapshot = await getDocs(q);
        const fetchedMatches = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          name: doc.data().name || "Music Lover",
          age: doc.data().age || 22,
          artists: doc.data().musicProfile?.artists || ['Discovery Mode'],
          message: doc.data().message || "Vibing to new sounds!",
          match: Math.floor(Math.random() * 20) + 80, 
          gradient: 'from-green-400 via-blue-400 to-purple-400' 
        }));

        setRealMatches(fetchedMatches);
      } catch (err) {
        console.error("Error fetching matches:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMatches();
  }, []);

  // Track swipe direction for UI indicators
  useEffect(() => {
    const unsubscribe = x.on('change', (latest) => {
      if (latest < -50) setSwipeDirection('left');
      else if (latest > 50) setSwipeDirection('right');
      else setSwipeDirection(null);
    });
    return unsubscribe;
  }, [x]);

  // --- 4. Handlers (Fixes "Cannot find name handleDragEnd") ---
  const handleDragEnd = (_event: any, info: any) => {
    if (Math.abs(info.offset.x) > 100) {
      if (info.offset.x > 0) {
        // Liked
        setTimeout(() => onMatch(), 300);
      } else {
        // Pass
        if (currentIndex < realMatches.length - 1) {
          setTimeout(() => {
            setCurrentIndex(prev => prev + 1);
            x.set(0);
          }, 300);
        }
      }
    } else {
      x.set(0);
    }
  };

  const currentMatch = realMatches[currentIndex];

  if (loading) return (
    <div className={`h-full flex items-center justify-center ${darkMode ? 'bg-[#121212] text-white' : 'bg-gray-50'}`}>
       Searching for vibes...
    </div>
  );

  if (realMatches.length === 0) return (
    <div className={`h-full flex items-center justify-center ${darkMode ? 'bg-[#121212] text-white' : 'bg-gray-50'}`}>
       No matches found nearby yet!
    </div>
  );

  console.log("Fetched matches from Firestore:", realMatches);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`h-full flex flex-col p-6 ${darkMode ? 'bg-[#121212]' : 'bg-gray-50'}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Discover</h2>
        <button onClick={onViewAll} className={`rounded-full px-4 py-2 ${darkMode ? 'bg-[#F5C542]' : 'bg-yellow-400'}`}>
          <span className="text-sm font-bold text-gray-900">{realMatches.length} nearby</span>
        </button>
      </div>

      <div className="flex-1 relative">
        {/* Main Card */}
        <motion.div
          style={{ x, rotate, opacity }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className={`absolute inset-0 rounded-[32px] shadow-2xl overflow-hidden ${darkMode ? 'bg-[#1C1C1E]' : 'bg-white'}`}
        >
          <div className={`h-2/5 bg-gradient-to-br ${currentMatch.gradient} relative flex items-center justify-center`}>
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
              <Music className="text-gray-400" size={64} />
            </div>
          </div>

          <div className="p-6 space-y-4">
            <h3 className={`text-3xl font-bold ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>
              {currentMatch.name}, {currentMatch.age}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {/* Type Safety fix: Added (artist: string, i: number) */}
              {currentMatch.artists.map((artist: string, i: number) => (
                <div key={i} className={`rounded-full px-3 py-1 border ${darkMode ? 'border-gray-700 text-white' : 'border-gray-200'}`}>
                  {artist}
                </div>
              ))}
            </div>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{currentMatch.message}</p>
          </div>
        </motion.div>

        {/* Swipe Indicators (Fixes "Cannot find name swipeDirection") */}
        {swipeDirection && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className={`absolute top-10 ${swipeDirection === 'left' ? 'left-10 text-red-500' : 'right-10 text-green-500'} font-bold text-4xl border-4 p-2 rounded-xl`}
            >
                {swipeDirection === 'left' ? 'NOPE' : 'LIKE'}
            </motion.div>
        )}
      </div>

      {/* Footer Controls */}
      <div className="flex gap-4 mt-6">
         <button onClick={() => x.set(-300)} className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg"><X /></button>
         <button onClick={onMatch} className="flex-1 rounded-full bg-yellow-400 font-bold py-4">Send Match Request</button>
         <button onClick={() => x.set(300)} className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg"><Heart className="text-red-500" /></button>
      </div>
    </motion.div>
  );
}
