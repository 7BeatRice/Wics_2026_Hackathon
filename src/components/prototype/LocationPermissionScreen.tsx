import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Shield } from 'lucide-react';

interface LocationPermissionScreenProps {
  onNext: () => void;
}

export function LocationPermissionScreen({ onNext }: LocationPermissionScreenProps) {
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
        <div className="flex-1 h-1.5 bg-yellow-400 rounded-full"></div>
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
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-40 h-40 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[32px] flex items-center justify-center shadow-2xl"
          >
            <MapPin className="w-20 h-20 text-white" strokeWidth={2} />
          </motion.div>
          <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
            <Shield className="w-7 h-7 text-white" strokeWidth={2.5} />
          </div>
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-3 text-center"
        >
          Enable Location
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-600 text-center leading-relaxed mb-8 px-4"
        >
          To help you find matches nearby at ACL, we need location access
        </motion.p>

        {/* Why We Need This */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full space-y-3 mb-6"
        >
          <div className="bg-yellow-50 rounded-2xl p-4 border-2 border-yellow-200">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 flex-shrink-0"></div>
              <p className="text-sm text-gray-800">Find matches at the festival</p>
            </div>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-4 border-2 border-yellow-200">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 flex-shrink-0"></div>
              <p className="text-sm text-gray-800">Navigate to your music match</p>
            </div>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-4 border-2 border-yellow-200">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 flex-shrink-0"></div>
              <p className="text-sm text-gray-800">Only active during the festival</p>
            </div>
          </div>
        </motion.div>

        {/* Privacy Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4"
        >
          <p className="text-xs text-blue-900 text-center leading-relaxed">
            🔒 Your location is private and only shared when you both agree to meet
          </p>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="space-y-3"
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-5 rounded-full text-lg shadow-lg transition-colors"
        >
          Allow Location Access
        </motion.button>
        <button className="w-full text-gray-500 font-medium py-3 text-sm">
          Maybe later
        </button>
      </motion.div>
    </motion.div>
  );
}