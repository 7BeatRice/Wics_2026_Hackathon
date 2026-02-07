import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { Music, MapPin, X, Heart, Sparkles } from 'lucide-react';

interface MatchDiscoveryScreenProps {
  onMatch: () => void;
  onViewAll: () => void;
  darkMode: boolean;
}

const matches = [
  {
    name: 'Alex',
    age: 24,
    match: 86,
    distance: '0.3 mi',
    artists: ['Tame Impala', 'Khruangbin', 'SZA'],
    message: "Can't wait to see Tame Impala tonight!",
    gradient: 'from-purple-400 via-pink-400 to-yellow-400'
  },
  {
    name: 'Jordan',
    age: 26,
    match: 92,
    distance: '0.5 mi',
    artists: ['Rüfüs Du Sol', 'Lane 8', 'ODESZA'],
    message: 'Looking for a group to catch the sunset set!',
    gradient: 'from-blue-400 via-purple-400 to-pink-400'
  }
];

export function MatchDiscoveryScreen({ onMatch, onViewAll, darkMode }: MatchDiscoveryScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  // Track swipe direction
  React.useEffect(() => {
    const unsubscribe = x.on('change', (latest) => {
      if (latest < -50) {
        setSwipeDirection('left');
      } else if (latest > 50) {
        setSwipeDirection('right');
      } else {
        setSwipeDirection(null);
      }
    });
    return unsubscribe;
  }, [x]);

  const handleDragEnd = (event: any, info: any) => {
    if (Math.abs(info.offset.x) > 100) {
      if (info.offset.x > 0) {
        // Liked - swipe right
        setTimeout(() => {
          onMatch();
        }, 300);
      } else {
        // Pass - swipe left
        if (currentIndex < matches.length - 1) {
          setTimeout(() => {
            setCurrentIndex(currentIndex + 1);
            x.set(0);
          }, 300);
        }
      }
    } else {
      x.set(0);
    }
  };

  const currentMatch = matches[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className={`h-full flex flex-col p-6 ${darkMode ? 'bg-[#121212]' : 'bg-gray-50'}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-2xl font-bold ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}
        >
          Discover
        </motion.h2>
        <motion.button
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileTap={{ scale: 0.95 }}
          onClick={onViewAll}
          className={`rounded-full px-4 py-2 transition-colors ${
            darkMode
              ? 'bg-[#F5C542] hover:bg-[#FFD76A]'
              : 'bg-yellow-400 hover:bg-yellow-500'
          }`}
        >
          <span className="text-sm font-bold text-gray-900">12 nearby</span>
        </motion.button>
      </div>

      {/* Card Stack */}
      <div className="flex-1 relative">
        {/* Background Card */}
        {currentIndex < matches.length - 1 && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0.5 }}
            animate={{ scale: 0.95, opacity: 0.5 }}
            className={`absolute inset-0 rounded-[32px] shadow-xl ${
              darkMode ? 'bg-[#1C1C1E]' : 'bg-white'
            }`}
          ></motion.div>
        )}

        {/* Main Card */}
        <motion.div
          style={{ x, rotate, opacity }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className={`absolute inset-0 rounded-[32px] shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing ${
            darkMode ? 'bg-[#1C1C1E]' : 'bg-white'
          }`}
        >
          {/* Profile Image Area */}
          <div className={`h-2/5 bg-gradient-to-br ${currentMatch.gradient} relative flex items-center justify-center`}>
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Music className="w-16 h-16 text-gray-400" strokeWidth={1.5} />
            </div>
            
            {/* Match Badge */}
            <div className="absolute top-6 right-6 bg-green-500 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white">{currentMatch.match}% Match</span>
            </div>
          </div>

          {/* Info */}
          <div className="p-6 space-y-4 overflow-y-auto" style={{ height: 'calc(60% - 80px)' }}>
            <div>
              <h3 className={`text-3xl font-bold mb-1 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>
                {currentMatch.name}, {currentMatch.age}
              </h3>
              <p className={`flex items-center gap-1 ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>
                <MapPin className="w-4 h-4" />
                At ACL • {currentMatch.distance} away
              </p>
            </div>

            {/* Shared Artists */}
            <div className={`rounded-2xl p-5 border-2 ${
              darkMode 
                ? 'bg-[#232326] border-[#2C2C30]' 
                : 'bg-yellow-50 border-yellow-200'
            }`}>
              <div className={`text-sm font-bold mb-3 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Shared Artists at ACL</div>
              <div className="flex flex-wrap gap-2">
                {currentMatch.artists.map((artist, i) => (
                  <div key={i} className={`rounded-full px-4 py-2 border-2 ${
                    darkMode
                      ? 'bg-[#1C1C1E] border-[#2C2C30] text-[#F2F2F2]'
                      : 'bg-white border-yellow-200 text-gray-800'
                  }`}>
                    <span className="text-sm font-semibold">{artist}</span>
                  </div>
                ))}
                <div className={`rounded-full px-4 py-2 ${
                  darkMode ? 'bg-[#F5C542]' : 'bg-yellow-400'
                }`}>
                  <span className="text-sm font-bold text-gray-900">+12 more</span>
                </div>
              </div>
            </div>

            {/* Festival Note */}
            <div className={`rounded-2xl p-4 border-2 ${
              darkMode
                ? 'bg-[#232326] border-[#2C2C30]'
                : 'bg-purple-50 border-purple-200'
            }`}>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-[#B0B0B5]' : 'text-purple-900'}`}>
                💜 "{currentMatch.message}"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Swipe Indicators */}
        <motion.div
          style={{ opacity: swipeDirection === 'left' ? 1 : 0 }}
          className={`absolute top-8 left-8 px-6 py-3 rounded-2xl font-bold text-2xl border-4 rotate-[-20deg] ${
            darkMode
              ? 'bg-red-600/90 border-red-500 text-white'
              : 'bg-red-500 border-white text-white'
          }`}
        >
          NOPE
        </motion.div>
        <motion.div
          style={{ opacity: swipeDirection === 'right' ? 1 : 0 }}
          className={`absolute top-8 right-8 px-6 py-3 rounded-2xl font-bold text-2xl border-4 rotate-[20deg] ${
            darkMode
              ? 'bg-green-600/90 border-green-500 text-white'
              : 'bg-green-500 border-white text-white'
          }`}
        >
          LIKE
        </motion.div>
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-4 mt-6 flex-shrink-0"
      >
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            x.set(-300);
            setTimeout(() => {
              if (currentIndex < matches.length - 1) {
                setCurrentIndex(currentIndex + 1);
                x.set(0);
              }
            }, 300);
          }}
          className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center border-2 transition-colors ${
            darkMode
              ? 'bg-[#232326] hover:bg-[#2C2C30] border-[#2C2C30]'
              : 'bg-white hover:bg-gray-50 border-gray-200'
          }`}
        >
          <X className={`w-8 h-8 ${darkMode ? 'text-[#9A9AA0]' : 'text-gray-400'}`} strokeWidth={2.5} />
        </motion.button>
        
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onMatch}
          className={`flex-1 rounded-full shadow-lg flex items-center justify-center gap-2 font-bold transition-colors py-4 whitespace-nowrap ${
            darkMode
              ? 'bg-[#F5C542] hover:bg-[#FFD76A] text-[#121212]'
              : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
          }`}
        >
          Send Match Request
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            x.set(300);
            setTimeout(() => {
              onMatch();
            }, 300);
          }}
          className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center border-2 transition-colors ${
            darkMode
              ? 'bg-[#232326] hover:bg-[#2C2C30] border-[#2C2C30]'
              : 'bg-white hover:bg-gray-50 border-gray-200'
          }`}
        >
          <Heart className="w-8 h-8 text-red-400" strokeWidth={2.5} fill="currentColor" />
        </motion.button>
      </motion.div>

      {/* Swipe Hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className={`text-center text-xs mt-4 ${darkMode ? 'text-[#7A7A80]' : 'text-gray-400'}`}
      >
        Swipe or tap to send request
      </motion.p>
    </motion.div>
  );
}