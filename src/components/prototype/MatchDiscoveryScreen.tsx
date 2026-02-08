import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Music, X, Heart, MapPin, Sparkles } from 'lucide-react';

interface Props {
  realMatches: any[];       
  onMatch: (match: any) => void; // Now accepts the match object!
  onViewAll: () => void;
  darkMode: boolean;
}


export function MatchDiscoveryScreen({ realMatches, onViewAll, darkMode, onMatch }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);
  console.log("Matches received in Discovery:", realMatches);

  // 1. Safety Guard: If no matches are found yet
  if (!realMatches || realMatches.length === 0) {
    return (
      <div className={`h-full flex flex-col items-center justify-center p-10 text-center ${darkMode ? 'bg-[#121212]' : 'bg-gray-50'}`}>
        <div className="animate-bounce mb-4 text-yellow-500">
          <Music size={48} />
        </div>
        <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
          Tuning the frequency... <br/> Finding people with your vibe.
        </p>
      </div>
    );
  }

  const currentMatch = realMatches[currentIndex];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      // Swiped Right = Liked! Trigger the match transition
      onMatch(currentMatch);
    } else {
      // Swiped Left = Pass. Move to the next person in the list
      x.set(-300);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % realMatches.length);
        x.set(0);
      }, 200);
    }
  };

  return (
    <div className={`h-full flex flex-col p-6 ${darkMode ? 'bg-[#121212]' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Discover</h2>
          <p className="text-xs text-yellow-500 font-bold uppercase tracking-wider">ACL Festival • Live</p>
        </div>
        <button 
          onClick={onViewAll} 
          className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-full text-sm font-bold shadow-sm transition-colors"
        >
          {realMatches.length} nearby
        </button>
      </div>

      {/* Card Area */}
      <div className="flex-1 relative perspective-1000">
        <AnimatePresence>
          <motion.div
            key={currentMatch.id}
            style={{ x, rotate, opacity }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x > 100) handleSwipe('right');
              else if (info.offset.x < -100) handleSwipe('left');
              else x.set(0);
            }}
            className={`absolute inset-0 rounded-[32px] shadow-2xl overflow-hidden border-2 ${
              darkMode ? 'bg-[#1C1C1E] border-gray-800' : 'bg-white border-white'
            }`}
          >
            {/* Visual Top Section */}
            <div className={`h-2/5 bg-gradient-to-br ${currentMatch.gradient} relative flex items-center justify-center`}>
              <Music className="text-white/30" size={80} strokeWidth={1} />
              
              {/* Dynamic Match Score Badge */}
              <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1">
                <Sparkles size={14} className="text-yellow-400" />
                <span className="text-white text-xs font-bold">{currentMatch.match || 85}% Match</span>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-6">
              <div className="flex items-baseline gap-2 mb-1">
                <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {currentMatch.name}
                </h3>
                <span className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{currentMatch.age}</span>
              </div>
              
              <p className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                <MapPin size={14} /> {currentMatch.location || "At the Main Stage"}
              </p>

              <div className="space-y-3">
                <div className={`p-3 rounded-2xl ${darkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
                  <p className={`text-xs font-bold uppercase mb-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Top Artists</p>
                  <div className="flex flex-wrap gap-2">
                    {currentMatch.artists.map((art: string) => (
                      <span key={art} className="px-3 py-1 bg-yellow-400/10 text-yellow-600 rounded-full text-xs font-bold">
                        {art}
                      </span>
                    ))}
                  </div>
                </div>

                {currentMatch.festivalNote && (
                  <p className={`italic text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    "{currentMatch.festivalNote}"
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8 px-2">
        {/* Pass Button */}
        <button 
          onClick={() => handleSwipe('left')} 
          className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-transform active:scale-90 ${
            darkMode ? 'bg-[#2C2C2E] text-gray-400' : 'bg-white text-gray-400'
          }`}
        >
          <X size={28} strokeWidth={3} />
        </button>

        {/* Big Connect Button */}
        <button 
          onClick={() => onMatch(currentMatch)}
          className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full font-black text-lg shadow-lg shadow-yellow-400/20 transition-all active:scale-95"
        >
          Connect
        </button>

        {/* Heart Button */}
        <button 
          onClick={() => onMatch(currentMatch)}
          className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-transform active:scale-90 ${
            darkMode ? 'bg-[#2C2C2E]' : 'bg-white'
          }`}
        >
          <Heart className="text-red-500" fill="currentColor" size={28} />
        </button>
      </div>
    </div>
  );
}