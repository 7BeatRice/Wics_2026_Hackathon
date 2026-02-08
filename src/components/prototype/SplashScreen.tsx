import React from 'react';
import { motion } from 'motion/react';
import { Music, Sparkles, Database } from 'lucide-react'; // Added Database icon for the seed button
import { seedFakeUsers } from '../seed.ts'; 

interface SplashScreenProps {
  onNext: () => void;
  darkMode: boolean;
}

export function SplashScreen({ onNext, darkMode }: SplashScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className={`h-full flex flex-col items-center justify-center p-8 relative ${
        darkMode 
          ? 'bg-[#121212]' 
          : 'bg-gradient-to-b from-yellow-400 via-yellow-300 to-white'
      }`}
      onClick={onNext}
    >
      {/* Hidden/Subtle Seed Button for Testing */}
      <button 
        onClick={(e) => {
          e.stopPropagation(); // Prevents clicking the button from triggering onNext
          seedFakeUsers();
        }}
        className={`absolute top-16 right-8 p-2 rounded-full opacity-20 hover:opacity-100 transition-opacity ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
        title="Seed Database"
      >
        <Database size={16} />
      </button>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
        className="relative mb-8"
      >
        <div className={`w-32 h-32 rounded-[32px] flex items-center justify-center shadow-2xl ${
          darkMode ? 'bg-[#1C1C1E]' : 'bg-white'
        }`}>
          <Music className={`w-16 h-16 ${darkMode ? 'text-[#F5C542]' : 'text-yellow-500'}`} strokeWidth={2.5} />
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-2 -right-2 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center"
        >
          <Sparkles className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className={`text-5xl font-bold mb-3 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}
      >
        MixMatched
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className={`text-xl text-center ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-700'}`}
      >
        Find your music match at ACL
      </motion.p>

      {/* Loading Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-20"
      >
        <div className="flex gap-2">
          {[0, 0.2, 0.4].map((delay, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay }}
              className={`w-2 h-2 rounded-full ${darkMode ? 'bg-[#7A7A80]' : 'bg-gray-900'}`}
            ></motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}