import React from 'react';
import { motion } from 'framer-motion'; // Reverted to standard framer-motion for better stability
import { Heart, Sparkles } from 'lucide-react';

interface MatchConfirmationScreenProps {
  matchName: string; // Added this missing prop
  darkMode: boolean;
}

export function MatchConfirmationScreen({ matchName, darkMode }: MatchConfirmationScreenProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className={`h-full flex flex-col items-center justify-center p-8 relative overflow-hidden ${
        darkMode 
          ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-b from-yellow-400 via-yellow-300 to-white'
      }`}
    >
      {/* Floating Hearts */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: -200, opacity: [0, 1, 0] }}
          transition={{
            duration: 3,
            delay: i * 0.4,
            repeat: Infinity,
          }}
          className="absolute"
          style={{
            left: `${15 + i * 15}%`,
            top: '60%'
          }}
        >
          <Heart className="w-6 h-6 text-red-400/60" fill="currentColor" />
        </motion.div>
      ))}

      {/* Pulse circles */}
      <motion.div
        animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`absolute w-64 h-64 rounded-full border-4 ${
          darkMode ? 'border-yellow-400/30' : 'border-yellow-400/40'
        }`}
      />

      {/* Main Content */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, type: 'spring', bounce: 0.5 }}
        className="relative z-10 mb-8"
      >
        <div className={`w-40 h-40 rounded-full flex items-center justify-center shadow-2xl ${
          darkMode ? 'bg-gray-800 border-4 border-yellow-500/50' : 'bg-white shadow-yellow-500/20'
        }`}>
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Heart className="w-20 h-20 text-yellow-500" fill="currentColor" strokeWidth={2} />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center relative z-10"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-6 h-6 text-yellow-600" />
          <h2 className={`text-4xl font-black uppercase tracking-tighter ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            It's a Match!
          </h2>
          <Sparkles className="w-6 h-6 text-yellow-600" />
        </div>
        
        {/* Updated from 'Alex' to dynamic name */}
        <p className={`text-xl font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
          You and <span className="text-yellow-600 font-bold">{matchName}</span> both want to connect
        </p>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Time to find each other at the stage!
        </p>
      </motion.div>

      {/* Loading navigation dots */}
      <div className="absolute bottom-16 flex flex-col items-center gap-3">
        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          Starting Navigation
        </span>
        <div className="flex gap-2">
          {[0, 0.2, 0.4].map((d) => (
            <motion.div
              key={d}
              animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: d }}
              className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-yellow-500' : 'bg-gray-900'}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}