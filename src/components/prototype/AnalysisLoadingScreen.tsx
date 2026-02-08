import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Music, Disc3, Sparkles } from 'lucide-react';

interface AnalysisLoadingScreenProps {
  darkMode: boolean;
  onFinished: () => void;
}

export function AnalysisLoadingScreen({ darkMode, onFinished}: AnalysisLoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) {
      // Small delay so the user sees 100% before it switches
      const timer = setTimeout(() => onFinished(), 500); 
      return () => clearTimeout(timer);
    }
  }, [progress, onFinished]);
  console.log("Analysis complete, moving to discovery...");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className={`h-full flex flex-col items-center justify-center p-8 ${
        darkMode 
          ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-b from-yellow-50 to-white'
      }`}
    >
      {/* Animated Waves */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="relative mb-10"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className={`w-32 h-32 rounded-full border-4 flex items-center justify-center ${
            darkMode ? 'border-yellow-400' : 'border-purple-400'
          }`}
        >
          <Music className={`w-16 h-16 ${darkMode ? 'text-yellow-400' : 'text-purple-600'}`} />
        </motion.div>
      </motion.div>

      {/* Text */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`text-3xl font-bold mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}
      >
        Tuning into your vibe...
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className={`text-center mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
      >
        We're analyzing your music to find the perfect match for you.
      </motion.p>

      {/* Progress Bar */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-xs"
      >
        <div className={`h-3 rounded-full overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-400 via-purple-400 to-green-400 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>
        <div className={`flex justify-between mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <span>Analyzing...</span>
          <span>{progress}%</span>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-3 mt-10 w-full max-w-xs"
      >
        <div className={`flex-1 rounded-2xl p-4 text-center shadow-sm border-2 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
        }`}>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            {Math.min(Math.floor(progress * 2.5), 250)}
          </motion.div>
          <div className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Artists</div>
        </div>
        <div className={`flex-1 rounded-2xl p-4 text-center shadow-sm border-2 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
        }`}>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            {Math.min(Math.floor(progress * 0.18), 18)}
          </motion.div>
          <div className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Genres</div>
        </div>
        <div className={`flex-1 rounded-2xl p-4 text-center shadow-sm border-2 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
        }`}>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            className="text-2xl font-bold text-purple-600"
          >
            {progress}%
          </motion.div>
          <div className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Ready</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

