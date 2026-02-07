import React from 'react';
import { motion } from 'motion/react';
import { Users, Heart, Sparkles, Music } from 'lucide-react';

interface MeetMomentScreenProps {
  onNext: () => void;
  darkMode: boolean;
}

export function MeetMomentScreen({ onNext, darkMode }: MeetMomentScreenProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`h-full flex flex-col items-center justify-between p-8 ${
        darkMode
          ? 'bg-[#121212]'
          : 'bg-gradient-to-b from-purple-500 via-pink-400 to-yellow-400'
      }`}
    >
      {/* Floating sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -100],
            x: [0, (i % 2 === 0 ? 1 : -1) * 50]
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            repeatDelay: 1
          }}
          style={{
            position: 'absolute',
            left: `${15 + i * 10}%`,
            top: '60%'
          }}
        >
          <Sparkles className="w-6 h-6 text-white" />
        </motion.div>
      ))}

      {/* Celebration */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: 'spring', bounce: 0.6 }}
          className="relative mb-10"
        >
          <div className={`w-40 h-40 rounded-full flex items-center justify-center shadow-2xl ${
            darkMode ? 'bg-[#1C1C1E]' : 'bg-white'
          }`}>
            <Users className={`w-20 h-20 ${darkMode ? 'text-[#F5C542]' : 'text-purple-500'}`} strokeWidth={2} />
          </div>
          
          {/* Orbiting hearts */}
          {[0, 120, 240].map((rotation, i) => (
            <motion.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              style={{ position: 'absolute', inset: -20 }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: `rotate(${rotation}deg) translateY(-70px)`
                }}
              >
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl font-bold text-white mb-3 text-center"
        >
          You Found Each Other!
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-2xl text-white/95 mb-12 text-center"
        >
          Say hi to Alex 👋
        </motion.p>

        {/* Shared Music */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className={`w-full backdrop-blur-sm rounded-[32px] p-6 shadow-2xl ${
            darkMode ? 'bg-[#1C1C1E]/95' : 'bg-white/95'
          }`}
        >
          <div className="flex items-center gap-2 mb-5">
            <Music className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-bold text-gray-900">You Both Love</span>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex-shrink-0"></div>
              <div className="flex-1 text-left">
                <div className={`font-bold text-lg ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Tame Impala</div>
                <div className={`text-sm ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>Psychedelic Rock</div>
              </div>
              <Heart className="w-6 h-6 text-red-400" fill="currentColor" />
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-3"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex-shrink-0"></div>
              <div className="flex-1 text-left">
                <div className={`font-bold text-lg ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Khruangbin</div>
                <div className={`text-sm ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>Indie / Psychedelic</div>
              </div>
              <Heart className="w-6 h-6 text-red-400" fill="currentColor" />
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1 }}
              className={`rounded-2xl p-4 border-2 text-center ${
                darkMode
                  ? 'bg-[#232326] border-[#2C2C30]'
                  : 'bg-yellow-50 border-yellow-200'
              }`}
            >
              <p className={`text-sm font-bold ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>
                +12 more shared artists at ACL
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.button
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className={`w-full font-bold py-5 rounded-full text-lg shadow-2xl transition-colors flex-shrink-0 ${
          darkMode
            ? 'bg-[#F5C542] hover:bg-[#FFD76A] text-[#121212]'
            : 'bg-white hover:bg-gray-50 text-purple-600'
        }`}
      >
        Continue
      </motion.button>
    </motion.div>
  );
}