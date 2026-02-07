import React from 'react';
import { motion } from 'motion/react';
import { Music, Sparkles } from 'lucide-react';

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
      className={`h-full flex flex-col items-center justify-center p-8 ${
        darkMode 
          ? 'bg-[#121212]' 
          : 'bg-gradient-to-b from-yellow-400 via-yellow-300 to-white'
      }`}
      onClick={onNext}
    >
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-20"
      >
        <div className="flex gap-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-2 h-2 rounded-full ${darkMode ? 'bg-[#7A7A80]' : 'bg-gray-900'}`}
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            className={`w-2 h-2 rounded-full ${darkMode ? 'bg-[#7A7A80]' : 'bg-gray-900'}`}
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            className={`w-2 h-2 rounded-full ${darkMode ? 'bg-[#7A7A80]' : 'bg-gray-900'}`}
          ></motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}