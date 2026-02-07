import React from 'react';
import { motion } from 'motion/react';
import { Music2, Sparkles, Check } from 'lucide-react';

interface SpotifyConnectScreenProps {
  onNext: () => void;
}

export function SpotifyConnectScreen({ onNext }: SpotifyConnectScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
      className="h-full bg-white flex flex-col p-8"
    >
      {/* Progress Dots */}
      <div className="flex gap-2 mb-8">
        <div className="flex-1 h-1.5 bg-yellow-400 rounded-full"></div>
        <div className="flex-1 h-1.5 bg-gray-200 rounded-full"></div>
        <div className="flex-1 h-1.5 bg-gray-200 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center overflow-y-auto pb-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative mb-8"
        >
          <div className="w-40 h-40 bg-gradient-to-br from-green-400 to-green-600 rounded-[32px] flex items-center justify-center shadow-2xl">
            <Music2 className="w-20 h-20 text-white" strokeWidth={2} />
          </div>
          <motion.div
            animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-3 -right-3 w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
          >
            <Sparkles className="w-7 h-7 text-white" strokeWidth={2.5} />
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-3 text-center"
        >
          Connect Your Spotify
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-600 text-center leading-relaxed mb-8 px-4"
        >
          We'll analyze your music taste to find your perfect festival match
        </motion.p>

        {/* What We'll Use */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full bg-gray-50 rounded-3xl p-6 space-y-3"
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <span className="text-sm font-medium text-gray-800">Your top artists & genres</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <span className="text-sm font-medium text-gray-800">Recently played tracks</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <span className="text-sm font-medium text-gray-800">Listening habits & playlists</span>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="space-y-3"
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-5 rounded-full text-lg shadow-lg transition-colors flex items-center justify-center gap-2"
        >
          <Music2 className="w-6 h-6" />
          Connect Spotify
        </motion.button>
        <button className="w-full text-gray-500 font-medium py-3 text-sm">
          I'll do this later
        </button>
      </motion.div>
    </motion.div>
  );
}