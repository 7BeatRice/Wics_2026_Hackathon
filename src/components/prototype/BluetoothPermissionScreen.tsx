import React from 'react';
import { motion } from 'motion/react';
import { Radio, Zap } from 'lucide-react';

interface BluetoothPermissionScreenProps {
  onNext: () => void;
}

export function BluetoothPermissionScreen({ onNext }: BluetoothPermissionScreenProps) {
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
        <div className="flex-1 h-1.5 bg-yellow-400 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center overflow-y-auto pb-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative mb-8"
        >
          <div className="w-40 h-40 bg-gradient-to-br from-purple-400 to-purple-600 rounded-[32px] flex items-center justify-center shadow-2xl">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Radio className="w-20 h-20 text-white" strokeWidth={2} />
            </motion.div>
          </div>
          <motion.div
            animate={{ rotate: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute -top-2 -right-2 w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
          >
            <Zap className="w-7 h-7 text-white" strokeWidth={2.5} />
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-3 text-center"
        >
          Enable Nearby Devices
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-600 text-center leading-relaxed mb-8 px-4"
        >
          Bluetooth helps detect when you're close to your match
        </motion.p>

        {/* Why We Need This */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full space-y-3 mb-6"
        >
          <div className="bg-purple-50 rounded-2xl p-4 border-2 border-purple-200">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
              <p className="text-sm text-gray-800">Detect proximity to matches</p>
            </div>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 border-2 border-purple-200">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
              <p className="text-sm text-gray-800">Know when you're getting close</p>
            </div>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 border-2 border-purple-200">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
              <p className="text-sm text-gray-800">More accurate than GPS alone</p>
            </div>
          </div>
        </motion.div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4"
        >
          <p className="text-xs text-gray-800 text-center leading-relaxed">
            💡 Works even in crowded festival areas where GPS can be tricky
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
          Enable Bluetooth
        </motion.button>
        <button className="w-full text-gray-500 font-medium py-3 text-sm">
          Skip for now
        </button>
      </motion.div>
    </motion.div>
  );
}