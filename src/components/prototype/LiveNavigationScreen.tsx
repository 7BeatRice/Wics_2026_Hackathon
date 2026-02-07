import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navigation, MapPin, ExternalLink, Zap } from 'lucide-react';

interface LiveNavigationScreenProps {
  onProximity: () => void;
  darkMode: boolean;
}

export function LiveNavigationScreen({ onProximity, darkMode }: LiveNavigationScreenProps) {
  const [distance, setDistance] = useState(450);
  const [direction, setDirection] = useState('Northeast');

  useEffect(() => {
    const interval = setInterval(() => {
      setDistance((prev) => {
        const newDist = prev - 30;
        if (newDist <= 50) {
          clearInterval(interval);
          setTimeout(() => onProximity(), 1000);
          return 50;
        }
        return newDist;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onProximity]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className={`h-full flex flex-col relative overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-500'
      }`}
    >
      {/* Animated background gradient circles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className={`absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl ${
          darkMode ? 'bg-purple-600' : 'bg-yellow-400'
        }`}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className={`absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl ${
          darkMode ? 'bg-blue-600' : 'bg-blue-400'
        }`}
      />

      {/* Header */}
      <div className="px-6 pt-6 pb-4 relative z-10">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`backdrop-blur-xl border rounded-3xl p-5 ${
            darkMode
              ? 'bg-gray-800/80 border-gray-700/50'
              : 'bg-white/20 border-white/30'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Finding Alex</h2>
              <p className={darkMode ? 'text-gray-300 text-sm' : 'text-white/80 text-sm'}>Stay on course, you're doing great!</p>
            </div>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            }`}>
              <Navigation className={`w-8 h-8 ${darkMode ? 'text-yellow-400' : 'text-indigo-600'}`} strokeWidth={2.5} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Compass Visual */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-6">
        <div className="relative">
          {/* Pulse rings */}
          <motion.div
            animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            className={`absolute inset-0 w-72 h-72 border-4 rounded-full ${
              darkMode ? 'border-yellow-400/40' : 'border-white/40'
            }`}
          />
          <motion.div
            animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
            className={`absolute inset-0 w-72 h-72 border-4 rounded-full ${
              darkMode ? 'border-yellow-400/40' : 'border-white/40'
            }`}
          />
          
          {/* Main circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className={`relative w-72 h-72 backdrop-blur-2xl border-4 rounded-full flex items-center justify-center ${
              darkMode
                ? 'bg-gray-800/40 border-gray-700/50'
                : 'bg-white/10 border-white/30'
            }`}
          >
            {/* Direction indicator (fixed rotation) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-16"
              >
                <div className="bg-yellow-400 rounded-full p-4 shadow-2xl">
                  <Navigation className="w-8 h-8 text-white" style={{ transform: 'rotate(45deg)' }} strokeWidth={2.5} />
                </div>
                <div className="absolute inset-0 bg-yellow-400/30 rounded-full animate-ping"></div>
              </motion.div>
            </motion.div>

            {/* Center - distance */}
            <div className="text-center">
              <motion.div
                key={distance}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="text-6xl font-bold text-white mb-2"
              >
                {distance}
              </motion.div>
              <div className="text-2xl text-white/90 font-semibold">feet</div>
              <div className={`mt-3 px-4 py-2 backdrop-blur-sm rounded-full ${
                darkMode ? 'bg-gray-700/80' : 'bg-white/20'
              }`}>
                <div className="text-sm text-white font-medium">{direction}</div>
              </div>
            </div>
          </motion.div>

          {/* Cardinal directions */}
          <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 backdrop-blur-sm rounded-full flex items-center justify-center ${
            darkMode ? 'bg-gray-800/80' : 'bg-white/20'
          }`}>
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 backdrop-blur-sm rounded-full flex items-center justify-center ${
            darkMode ? 'bg-gray-800/80' : 'bg-white/20'
          }`}>
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <div className={`absolute top-1/2 -left-6 -translate-y-1/2 w-10 h-10 backdrop-blur-sm rounded-full flex items-center justify-center ${
            darkMode ? 'bg-gray-800/80' : 'bg-white/20'
          }`}>
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <div className={`absolute top-1/2 -right-6 -translate-y-1/2 w-10 h-10 backdrop-blur-sm rounded-full flex items-center justify-center ${
            darkMode ? 'bg-gray-800/80' : 'bg-white/20'
          }`}>
            <span className="text-white font-bold text-sm">E</span>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="px-6 pb-8 space-y-3 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`backdrop-blur-xl border rounded-3xl p-5 ${
            darkMode
              ? 'bg-gray-800/80 border-gray-700/50'
              : 'bg-white/20 border-white/30'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" fill="currentColor" />
              <span className="text-white font-semibold">Live GPS Tracking</span>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <p className={darkMode ? 'text-gray-300 text-sm' : 'text-white/80 text-sm'}>
            {distance > 200 ? '💫 Keep walking in this direction' : '🔥 Almost there! Look around'}
          </p>
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`w-full font-bold py-5 rounded-full transition-colors flex items-center justify-center gap-2 shadow-2xl ${
            darkMode
              ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
              : 'bg-white hover:bg-gray-50 text-indigo-600'
          }`}
        >
          <MapPin className="w-5 h-5" />
          Open in Google Maps
          <ExternalLink className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}