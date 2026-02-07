import React from 'react';
import { motion } from 'motion/react';
import { Heart, Music, Calendar, UserPlus, Sparkles, MapPin } from 'lucide-react';

interface EndingScreenProps {
  onRestart: () => void;
  darkMode: boolean;
}

export function EndingScreen({ onRestart, darkMode }: EndingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`h-full flex flex-col p-8 overflow-y-auto ${darkMode ? 'bg-[#121212]' : 'bg-white'}`}
      style={{ 
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {/* Hero Section */}
      <div className="text-center mt-8 mb-8 flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: 'spring', bounce: 0.5 }}
          className="relative inline-block mb-6"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[32px] flex items-center justify-center shadow-2xl">
            <Heart className="w-16 h-16 text-white" fill="currentColor" strokeWidth={2} />
          </div>
          
          {/* Floating sparkles */}
          {[0, 90, 180, 270].map((rotation, i) => (
            <motion.div
              key={i}
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{
                rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                scale: { duration: 1, repeat: Infinity, delay: i * 0.2 }
              }}
              style={{
                position: 'absolute',
                inset: -10,
                transformOrigin: 'center'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: `rotate(${rotation}deg) translateY(-50px)`
                }}
              >
                <Sparkles className="w-5 h-5 text-yellow-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className={`text-4xl font-bold mb-3 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}
        >
          You're MixMatched 💛
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className={`text-lg leading-relaxed px-4 ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}
        >
          Time to make some festival memories together
        </motion.p>
      </div>

      {/* Action Cards */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex-1 space-y-4 flex-shrink-0"
      >
        {/* Connect on Spotify */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className={`bg-gradient-to-br rounded-3xl p-5 border-2 ${
            darkMode
              ? 'from-[#1C1C1E] to-[#1C1C1E] border-[#2C2C30]'
              : 'from-green-100 to-green-50 border-green-200'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
              darkMode ? 'bg-[#232326]' : 'bg-green-500'
            }`}>
              <Music className={`w-7 h-7 ${darkMode ? 'text-[#F5C542]' : 'text-white'}`} strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className={`font-bold mb-1 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Follow on Spotify</h3>
              <p className={`text-xs ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-700'}`}>Stay connected through music</p>
            </div>
            <button className={`font-semibold px-5 py-2 rounded-full text-sm transition-colors ${
              darkMode
                ? 'bg-[#F5C542] hover:bg-[#FFD76A] text-[#121212]'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}>
              Follow
            </button>
          </div>
        </motion.div>

        {/* Stay Connected */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className={`bg-gradient-to-br rounded-3xl p-5 border-2 ${
            darkMode
              ? 'from-[#1C1C1E] to-[#1C1C1E] border-[#2C2C30]'
              : 'from-yellow-100 to-yellow-50 border-yellow-200'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
              darkMode ? 'bg-[#232326]' : 'bg-yellow-500'
            }`}>
              <MapPin className={`w-7 h-7 ${darkMode ? 'text-[#F5C542]' : 'text-white'}`} strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h3 className={`font-bold mb-1 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Keep Finding Each Other</h3>
              <p className={`text-xs ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-700'}`}>Stay connected throughout ACL</p>
            </div>
            <button className={`font-semibold px-5 py-2 rounded-full text-sm transition-colors ${
              darkMode
                ? 'bg-[#F5C542] hover:bg-[#FFD76A] text-[#121212]'
                : 'bg-yellow-500 hover:bg-yellow-600 text-white'
            }`}>
              Stay Live
            </button>
          </div>
        </motion.div>

        {/* Music Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className={`rounded-3xl p-5 border-2 ${
            darkMode
              ? 'bg-[#1C1C1E] border-[#2C2C30]'
              : 'bg-gray-50 border-gray-200'
          }`}
        >
          <h3 className={`font-bold mb-3 text-center ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Your Music Compatibility</h3>
          <div className="flex gap-3">
            <div className={`flex-1 rounded-2xl p-3 text-center ${
              darkMode ? 'bg-[#232326]' : 'bg-white'
            }`}>
              <div className={`text-2xl font-bold ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>15</div>
              <div className={`text-xs ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>Shared Artists</div>
            </div>
            <div className={`flex-1 rounded-2xl p-3 text-center ${
              darkMode ? 'bg-[#232326]' : 'bg-white'
            }`}>
              <div className={`text-2xl font-bold ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Indie Rock</div>
              <div className={`text-xs ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>Top Genre</div>
            </div>
            <div className={`flex-1 rounded-2xl p-3 text-center ${
              darkMode ? 'bg-[#232326]' : 'bg-white'
            }`}>
              <div className={`text-2xl font-bold ${darkMode ? 'text-[#F5C542]' : 'text-yellow-600'}`}>86%</div>
              <div className={`text-xs ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>Match</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="space-y-3 mt-6 flex-shrink-0 pb-2"
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          className={`w-full font-bold py-5 rounded-full text-lg shadow-lg transition-colors ${
            darkMode
              ? 'bg-[#F5C542] hover:bg-[#FFD76A] text-[#121212]'
              : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
          }`}
        >
          Find More Matches
        </motion.button>
        <p className={`text-center text-xs ${darkMode ? 'text-[#7A7A80]' : 'text-gray-500'}`}>
          Continue discovering your music tribe at ACL
        </p>
      </motion.div>
    </motion.div>
  );
}