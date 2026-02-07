import React from 'react';
import { motion } from 'motion/react';
import { Camera, Upload } from 'lucide-react';

interface PhotoUploadScreenProps {
  onNext: () => void;
  darkMode: boolean;
}

export function PhotoUploadScreen({ onNext, darkMode }: PhotoUploadScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
      className={`h-full flex flex-col p-8 ${darkMode ? 'bg-[#121212]' : 'bg-white'}`}
    >
      {/* Progress */}
      <div className="flex gap-2 mb-8">
        <div className={`flex-1 h-1.5 rounded-full ${darkMode ? 'bg-[#F5C542]' : 'bg-yellow-400'}`}></div>
        <div className={`flex-1 h-1.5 rounded-full ${darkMode ? 'bg-[#F5C542]' : 'bg-yellow-400'}`}></div>
        <div className={`flex-1 h-1.5 rounded-full ${darkMode ? 'bg-[#2A2A2D]' : 'bg-gray-200'}`}></div>
        <div className={`flex-1 h-1.5 rounded-full ${darkMode ? 'bg-[#2A2A2D]' : 'bg-gray-200'}`}></div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Add your photo</h2>
          <p className={`px-4 ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>Help your matches recognize you at the festival</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className={`w-48 h-48 mx-auto rounded-[40px] border-4 border-dashed flex flex-col items-center justify-center cursor-pointer transition-colors ${
            darkMode
              ? 'bg-[#1C1C1E] border-[#2C2C30] hover:border-[#F5C542]'
              : 'bg-gradient-to-br from-yellow-100 to-yellow-50 border-yellow-300 hover:border-yellow-400'
          }`}>
            <Camera className={`w-16 h-16 mb-3 ${darkMode ? 'text-[#F5C542]' : 'text-yellow-500'}`} strokeWidth={1.5} />
            <p className={`text-sm font-semibold ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-700'}`}>Tap to upload</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-3"
        >
          <button className={`w-full border-2 font-semibold py-4 rounded-full transition-colors flex items-center justify-center gap-2 ${
            darkMode
              ? 'bg-[#1C1C1E] border-[#2C2C30] hover:border-[#F5C542] text-[#F2F2F2]'
              : 'bg-yellow-50 border-yellow-200 hover:border-yellow-300 text-gray-900'
          }`}>
            <Upload className={`w-5 h-5 ${darkMode ? 'text-[#F5C542]' : 'text-yellow-600'}`} />
            Choose from Gallery
          </button>
          <button className={`w-full border-2 font-semibold py-4 rounded-full transition-colors flex items-center justify-center gap-2 ${
            darkMode
              ? 'bg-[#1C1C1E] border-[#2C2C30] hover:border-[#F5C542] text-[#F2F2F2]'
              : 'bg-purple-50 border-purple-200 hover:border-purple-300 text-gray-900'
          }`}>
            <Camera className={`w-5 h-5 ${darkMode ? 'text-[#F5C542]' : 'text-purple-600'}`} />
            Take a Photo
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="space-y-3"
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className={`w-full font-bold py-5 rounded-full text-lg shadow-lg transition-colors ${
            darkMode
              ? 'bg-[#F5C542] hover:bg-[#FFD76A] text-[#121212]'
              : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
          }`}
        >
          Continue
        </motion.button>
        <button className={`w-full font-medium py-3 text-sm ${darkMode ? 'text-[#7A7A80]' : 'text-gray-500'}`}>
          Skip for now
        </button>
      </motion.div>
    </motion.div>
  );
}