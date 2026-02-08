import React from 'react';
import { motion } from 'motion/react';
import { Heart, Clock, X, MessageSquare } from 'lucide-react';

interface MatchRequestProps {
  matchName: string; // The name passed from App.tsx
  onContinue: () => void;
  darkMode: boolean;
}

export function MatchRequestScreen({ matchName, onContinue, darkMode }: MatchRequestProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`h-full flex flex-col items-center justify-between p-8 ${
        darkMode ? 'bg-[#121212]' : 'bg-white'
      }`}
    >
      {/* Top Section: Icon & Animation */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: 'spring', bounce: 0.5 }}
          className="relative mb-10"
        >
          {/* Main Visual Circle */}
          <div className={`w-32 h-32 rounded-full flex items-center justify-center shadow-2xl relative z-10 ${
            darkMode ? 'bg-[#1C1C1E]' : 'bg-gradient-to-br from-yellow-400 to-orange-500'
          }`}>
            <Clock className={`w-14 h-14 ${darkMode ? 'text-[#F5C542]' : 'text-white'}`} strokeWidth={2} />
          </div>
          
          {/* Floating Heart Badge */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`absolute -top-1 -right-1 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-20 ${
              darkMode ? 'bg-[#F5C542]' : 'bg-blue-500'
            }`}
          >
            <Heart className="w-6 h-6 text-white" fill="currentColor" />
          </motion.div>

          {/* Pulse Rings */}
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              className={`absolute inset-0 border-2 rounded-full ${
                darkMode ? 'border-[#F5C542]' : 'border-yellow-400'
              }`}
            ></motion.div>
          ))}
        </motion.div>

        {/* Messaging Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center w-full max-w-xs"
        >
          <h2 className={`text-3xl font-black mb-3 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>
            Request Sent!
          </h2>
          <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>
            We've sent your vibe to <span className="font-bold text-yellow-500">{matchName}</span>.
          </p>

          <div className={`rounded-[2rem] p-6 border-2 mb-8 ${
            darkMode 
              ? 'bg-[#1C1C1E] border-[#2C2C30]' 
              : 'bg-yellow-50 border-yellow-100'
          }`}>
            <div className="flex items-center gap-3 mb-2 justify-center">
                <MessageSquare size={16} className="text-yellow-500" />
                <span className={`text-xs font-bold uppercase tracking-widest ${darkMode ? 'text-gray-500' : 'text-yellow-600'}`}>Pro Tip</span>
            </div>
            <p className={`text-sm leading-snug ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-700'}`}>
              Requests expire in 24 hours. Keep your notifications on so you don't miss the beat!
            </p>
          </div>
        </motion.div>

        {/* Loading Dots */}
        <div className="flex gap-2">
          {[0, 0.2, 0.4].map((d) => (
            <motion.div
              key={d}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: d }}
              className={`w-2 h-2 rounded-full ${darkMode ? 'bg-[#F5C542]' : 'bg-gray-300'}`}
            ></motion.div>
          ))}
        </div>
      </div>

      {/* Action Buttons at Bottom */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="space-y-3 w-full pb-4"
      >
        <button
          onClick={onContinue}
          className={`w-full font-bold py-5 rounded-full text-lg shadow-xl shadow-yellow-500/10 transition-all active:scale-95 ${
            darkMode
              ? 'bg-[#F5C542] text-[#121212]'
              : 'bg-gray-900 text-white'
          }`}
        >
          Simulate Acceptance
        </button>
        
        <button className={`w-full font-bold py-4 rounded-full transition-colors flex items-center justify-center gap-2 ${
          darkMode
            ? 'text-[#7A7A80] hover:text-red-400'
            : 'text-gray-400 hover:text-red-500'
        }`}>
          <X size={18} />
          Cancel Request
        </button>
      </motion.div>
    </motion.div>
  );
}