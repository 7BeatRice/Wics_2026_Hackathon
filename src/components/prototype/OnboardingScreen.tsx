import React from 'react';
import { motion } from 'motion/react';
import { Music, MapPin, Users, Heart } from 'lucide-react';

interface OnboardingScreenProps {
  onNext: () => void;
  darkMode: boolean;
}

export function OnboardingScreen({ onNext, darkMode }: OnboardingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
      className={`h-full flex flex-col p-8 ${darkMode ? 'bg-[#121212]' : 'bg-white'}`}
    >
      {/* Hero */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center mt-12 mb-8"
      >
        <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[28px] mx-auto mb-6 flex items-center justify-center shadow-lg">
          <Music className="w-12 h-12 text-white" strokeWidth={2.5} />
        </div>
        <h1 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Welcome to MixMatched</h1>
        <p className={`text-lg leading-relaxed ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>
          Connect with festival-goers who share your music taste
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="flex-1 space-y-4 overflow-y-auto pb-4">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className={`rounded-3xl p-5 border-2 ${
            darkMode 
              ? 'bg-[#1C1C1E] border-[#2C2C30]' 
              : 'bg-purple-50 border-purple-100'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
              darkMode ? 'bg-[#232326]' : 'bg-purple-500'
            }`}>
              <Music className={`w-7 h-7 ${darkMode ? 'text-[#F5C542]' : 'text-white'}`} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className={`font-bold text-lg mb-1 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Music Matching</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-700'}`}>
                We analyze your Spotify to find people with similar taste
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className={`rounded-3xl p-5 border-2 ${
            darkMode 
              ? 'bg-[#1C1C1E] border-[#2C2C30]' 
              : 'bg-yellow-50 border-yellow-200'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
              darkMode ? 'bg-[#232326]' : 'bg-yellow-500'
            }`}>
              <MapPin className={`w-7 h-7 ${darkMode ? 'text-[#F5C542]' : 'text-white'}`} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className={`font-bold text-lg mb-1 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Find Each Other</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-700'}`}>
                Navigate to your match in real-time at the festival
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className={`rounded-3xl p-5 border-2 ${
            darkMode 
              ? 'bg-[#1C1C1E] border-[#2C2C30]' 
              : 'bg-pink-50 border-pink-100'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
              darkMode ? 'bg-[#232326]' : 'bg-pink-500'
            }`}>
              <Users className={`w-7 h-7 ${darkMode ? 'text-[#F5C542]' : 'text-white'}`} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className={`font-bold text-lg mb-1 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Make Memories</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-700'}`}>
                Catch shows together and make festival friends
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className={`w-full font-bold py-5 rounded-full text-lg shadow-lg transition-colors ${
          darkMode
            ? 'bg-[#F5C542] hover:bg-[#FFD76A] text-[#121212]'
            : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
        }`}
      >
        Get Started
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className={`text-center text-sm mt-4 ${darkMode ? 'text-[#7A7A80]' : 'text-gray-500'}`}
      >
        Made with <Heart className="w-4 h-4 inline text-red-400" fill="currentColor" /> for ACL Festival
      </motion.p>
    </motion.div>
  );
}