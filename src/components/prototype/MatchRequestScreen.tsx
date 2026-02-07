import React from 'react';
import { motion } from 'motion/react';
import { Heart, Clock, X } from 'lucide-react';

interface MatchRequestScreenProps {
  onContinue: () => void;
  darkMode: boolean;
}

export function MatchRequestScreen({ onContinue, darkMode }: MatchRequestScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className={`h-full flex flex-col items-center justify-center p-8 ${
        darkMode ? 'bg-[#121212]' : 'bg-white'
      }`}
    >
      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, type: 'spring', bounce: 0.5 }}
        className="relative mb-10"
      >
        <div className={`w-32 h-32 rounded-full flex items-center justify-center shadow-2xl ${
          darkMode ? 'bg-[#1C1C1E]' : 'bg-gradient-to-br from-blue-400 to-blue-600'
        }`}>
          <Clock className={`w-16 h-16 ${darkMode ? 'text-[#F5C542]' : 'text-white'}`} strokeWidth={2} />
        </div>
        
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`absolute -top-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
            darkMode ? 'bg-[#F5C542]' : 'bg-yellow-400'
          }`}
        >
          <Heart className="w-6 h-6 text-white" fill="currentColor" />
        </motion.div>

        {/* Pulse rings */}
        <motion.div
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`absolute inset-0 border-4 rounded-full ${
            darkMode ? 'border-[#F5C542]/30' : 'border-blue-400'
          }`}
        ></motion.div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>
          Match Request Sent!
        </h2>
        <p className={`text-lg mb-6 ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>
          Waiting for Alex to respond...
        </p>

        <div className={`rounded-3xl p-6 border-2 ${
          darkMode 
            ? 'bg-[#1C1C1E] border-[#2C2C30]' 
            : 'bg-blue-50 border-blue-200'
        }`}>
          <p className={`text-sm ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-700'}`}>
            💙 You'll get notified when they accept. They have 24 hours to respond!
          </p>
        </div>
      </motion.div>

      {/* Loading animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex gap-2 mb-12"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className={`w-3 h-3 rounded-full ${darkMode ? 'bg-[#F5C542]' : 'bg-blue-500'}`}
        ></motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
          className={`w-3 h-3 rounded-full ${darkMode ? 'bg-[#F5C542]' : 'bg-blue-500'}`}
        ></motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
          className={`w-3 h-3 rounded-full ${darkMode ? 'bg-[#F5C542]' : 'bg-blue-500'}`}
        ></motion.div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="space-y-3 w-full"
      >
        <button
          onClick={onContinue}
          className={`w-full font-bold py-5 rounded-full text-lg transition-colors ${
            darkMode
              ? 'bg-[#F5C542] hover:bg-[#FFD76A] text-[#121212]'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          Simulate Accept (Demo)
        </button>
        <button className={`w-full border-2 font-semibold py-4 rounded-full transition-colors flex items-center justify-center gap-2 ${
          darkMode
            ? 'border-[#2C2C30] text-[#B0B0B5] hover:border-[#F5C542]'
            : 'border-gray-200 text-gray-600 hover:border-gray-300'
        }`}>
          <X className="w-5 h-5" />
          Cancel Request
        </button>
      </motion.div>
    </motion.div>
  );
}