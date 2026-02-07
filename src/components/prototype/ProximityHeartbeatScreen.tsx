import React from 'react';
import { motion } from 'motion/react';
import { Heart, Zap, Music } from 'lucide-react';

interface ProximityHeartbeatScreenProps {
  darkMode: boolean;
}

export function ProximityHeartbeatScreen({ darkMode }: ProximityHeartbeatScreenProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1.1, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`h-full flex flex-col items-center justify-center p-8 ${
        darkMode 
          ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700' 
          : 'bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-200'
      }`}
    >
      {/* Pulsing Heartbeat Circle */}
      <div className="relative mb-12">
        {/* Pulse waves */}
        <motion.div
          animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          className={`absolute inset-0 w-56 h-56 rounded-full ${darkMode ? 'bg-yellow-400/20' : 'bg-white/40'}`}
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
          className={`absolute inset-0 w-56 h-56 rounded-full ${darkMode ? 'bg-yellow-400/20' : 'bg-white/40'}`}
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
          className={`absolute inset-0 w-56 h-56 rounded-full ${darkMode ? 'bg-yellow-400/20' : 'bg-white/40'}`}
        ></motion.div>
        
        {/* Center Heart */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
          className={`relative w-56 h-56 rounded-full flex items-center justify-center shadow-2xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <Heart className="w-28 h-28 text-yellow-500" fill="currentColor" strokeWidth={2} />
        </motion.div>

        {/* Floating sparkles */}
        <motion.div
          animate={{ y: [-10, -20, -10], rotate: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
            darkMode ? 'bg-gray-700' : 'bg-white'
          }`}
        >
          <Zap className="w-6 h-6 text-yellow-500" fill="currentColor" />
        </motion.div>
        <motion.div
          animate={{ y: [-10, -20, -10], rotate: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
            darkMode ? 'bg-gray-700' : 'bg-white'
          }`}
        >
          <Music className="w-6 h-6 text-yellow-500" />
        </motion.div>
      </div>

      {/* Text */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center space-y-4 mb-10"
      >
        <motion.h2
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
        >
          Your music match is right here
        </motion.h2>
        <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Alex is within 50 feet</p>
      </motion.div>

      {/* Proximity Bar */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-sm bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-xs">You</span>
          </div>
          <div className="flex-1 h-2 bg-gradient-to-r from-blue-500 via-yellow-500 to-purple-500 rounded-full relative">
            <motion.div
              animate={{ x: [-10, 10, -10] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-500 rounded-full shadow-lg"
            ></motion.div>
          </div>
          <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center shadow-sm">
            <Music className="w-7 h-7 text-white" />
          </div>
        </div>
        <p className={`text-sm font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>Keep going straight ahead</p>
      </motion.div>

      {/* Vibration Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className={`mt-8 rounded-2xl p-4 shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-900'}`}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-2 h-2 bg-yellow-400 rounded-full"
            ></motion.div>
          ))}
        </div>
        <p className="text-xs text-white/90 text-center">Phone vibrating</p>
      </motion.div>
    </motion.div>
  );
}