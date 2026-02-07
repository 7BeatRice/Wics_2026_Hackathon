import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navigation, Locate, Music, ArrowLeft } from 'lucide-react';

interface CompassFinderScreenProps {
  onProximity: () => void;
}

export function CompassFinderScreen({ onProximity }: CompassFinderScreenProps) {
  const [distance, setDistance] = useState(450);

  React.useEffect(() => {
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
      className="h-full bg-gradient-to-b from-purple-900 via-purple-800 to-gray-900 flex flex-col"
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </motion.button>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-2">
            <span className="text-white font-semibold text-sm">Finding Alex...</span>
          </div>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Compass */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Outer rings */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute w-80 h-80 border-2 border-yellow-400/20 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          className="absolute w-64 h-64 border-2 border-yellow-400/30 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute w-48 h-48 border-2 border-yellow-400/40 rounded-full"
        ></motion.div>
        
        {/* Center - You */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-blue-400/50"
          >
            <Locate className="w-10 h-10 text-white" strokeWidth={2.5} />
          </motion.div>
        </div>

        {/* Match Direction Indicator - Northeast */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-24 left-1/2 -translate-x-1/2 translate-x-12 flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl">
            <Navigation className="w-8 h-8 text-white" style={{ transform: 'rotate(45deg)' }} strokeWidth={2.5} />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 w-16 h-16 bg-yellow-400/30 rounded-full"
          ></motion.div>
          
          <div className="mt-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <Music className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-bold text-gray-900">Alex</span>
            </div>
          </div>
        </motion.div>

        {/* Cardinal directions */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-white/60 text-xs font-bold">N</div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-xs font-bold">S</div>
        <div className="absolute top-1/2 -left-10 -translate-y-1/2 text-white/60 text-xs font-bold">W</div>
        <div className="absolute top-1/2 -right-10 -translate-y-1/2 text-white/60 text-xs font-bold">E</div>
      </div>

      {/* Distance Info */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="px-6 pb-8 space-y-4 flex-shrink-0"
      >
        <motion.div
          key={distance}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center"
        >
          <motion.div
            animate={{ scale: distance <= 100 ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 0.5, repeat: distance <= 100 ? Infinity : 0 }}
            className="text-5xl font-bold text-white mb-1"
          >
            ~{distance} ft
          </motion.div>
          <div className="text-white/80">Northeast from you</div>
        </motion.div>

        <div className="bg-yellow-400 rounded-3xl p-4 text-center">
          <p className="text-sm font-bold text-gray-900">
            {distance > 200 ? '💫 Keep moving in this direction' : '🔥 You\'re getting close!'}
          </p>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onProximity}
          className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 rounded-full transition-colors border-2 border-white/20"
        >
          Skip to Proximity (Demo)
        </motion.button>
      </motion.div>
    </motion.div>
  );
}