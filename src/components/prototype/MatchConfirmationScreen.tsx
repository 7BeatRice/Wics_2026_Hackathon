import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

interface MatchConfirmationScreenProps {
  darkMode: boolean;
}

export function MatchConfirmationScreen({ darkMode }: MatchConfirmationScreenProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className={`h-full flex flex-col items-center justify-center p-8 ${
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
          animate={{ y: -100, opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            repeatDelay: 1
          }}
          style={{
            position: 'absolute',
            left: `${20 + i * 12}%`,
            top: '50%'
          }}
        >
          <Heart className="w-6 h-6 text-red-400" fill="currentColor" />
        </motion.div>
      ))}

      {/* Pulse circles */}
      <motion.div
        animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`absolute w-64 h-64 rounded-full border-4 ${
          darkMode ? 'border-yellow-400/30' : 'border-yellow-400/40'
        }`}
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        className={`absolute w-64 h-64 rounded-full border-4 ${
          darkMode ? 'border-yellow-400/30' : 'border-yellow-400/40'
        }`}
      ></motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, type: 'spring', bounce: 0.5 }}
        className="relative z-10"
      >
        <div className={`w-40 h-40 rounded-full flex items-center justify-center shadow-2xl ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: 3 }}
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
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>It's a Match!</h2>
          <Sparkles className="w-6 h-6 text-yellow-600" />
        </div>
        <p className={`text-xl mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>You and Alex both want to connect</p>
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Time to find each other at ACL</p>
      </motion.div>

      {/* Animated Sparkles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 left-1/4"
      >
        <Sparkles className="w-8 h-8 text-purple-400" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/3 right-1/4"
      >
        <Sparkles className="w-6 h-6 text-pink-400" />
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-1/3 left-1/3"
      >
        <Sparkles className="w-7 h-7 text-yellow-400" />
      </motion.div>

      {/* Loading dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-20 flex gap-2"
      >
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className={`w-2 h-2 rounded-full ${darkMode ? 'bg-white' : 'bg-gray-900'}`}
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
          className={`w-2 h-2 rounded-full ${darkMode ? 'bg-white' : 'bg-gray-900'}`}
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
          className={`w-2 h-2 rounded-full ${darkMode ? 'bg-white' : 'bg-gray-900'}`}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}