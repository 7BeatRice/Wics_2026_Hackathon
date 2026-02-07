import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Sparkles, Heart, Music } from 'lucide-react';

interface IntentPreferenceScreenProps {
  onNext: () => void;
  darkMode: boolean;
}

export function IntentPreferenceScreen({ onNext, darkMode }: IntentPreferenceScreenProps) {
  const [selectedIntent, setSelectedIntent] = useState<string | null>(null);
  const [selectedPreference, setSelectedPreference] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
      className={`h-full flex flex-col p-8 overflow-y-auto ${darkMode ? 'bg-[#121212]' : 'bg-white'}`}
      style={{ 
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {/* Progress */}
      <div className="flex gap-2 mb-8 flex-shrink-0">
        <div className="flex-1 h-1.5 bg-yellow-400 rounded-full"></div>
        <div className="flex-1 h-1.5 bg-yellow-400 rounded-full"></div>
        <div className="flex-1 h-1.5 bg-yellow-400 rounded-full"></div>
        <div className="flex-1 h-1.5 bg-yellow-400 rounded-full"></div>
      </div>

      <div className="flex-1">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>What are you looking for?</h2>
          <p className={`px-4 ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>Help us match you with the right people</p>
        </motion.div>

        {/* Intent Selection */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h3 className={`text-sm font-bold mb-3 uppercase tracking-wide ${darkMode ? 'text-[#7A7A80]' : 'text-gray-700'}`}>Your Intent</h3>
          <div className="space-y-3">
            <button
              onClick={() => setSelectedIntent('friendship')}
              className={`w-full rounded-3xl p-5 border-2 transition-all text-left ${
                selectedIntent === 'friendship'
                  ? darkMode
                    ? 'bg-[#1C1C1E] border-[#F5C542]'
                    : 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-400'
                  : darkMode
                    ? 'bg-[#1C1C1E] border-[#2C2C30] hover:border-[#F5C542]'
                    : 'bg-white border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  darkMode ? 'bg-[#232326]' : 'bg-blue-100'
                }`}>
                  <Users className={`w-6 h-6 ${darkMode ? 'text-[#F5C542]' : 'text-blue-600'}`} />
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold text-lg ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Friendship</h4>
                  <p className={`text-sm ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>Meet cool people, make festival friends</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setSelectedIntent('fun')}
              className={`w-full rounded-3xl p-5 border-2 transition-all text-left ${
                selectedIntent === 'fun'
                  ? darkMode
                    ? 'bg-[#1C1C1E] border-[#F5C542]'
                    : 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-400'
                  : darkMode
                    ? 'bg-[#1C1C1E] border-[#2C2C30] hover:border-[#F5C542]'
                    : 'bg-white border-gray-200 hover:border-yellow-300'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  darkMode ? 'bg-[#232326]' : 'bg-yellow-100'
                }`}>
                  <Sparkles className={`w-6 h-6 ${darkMode ? 'text-[#F5C542]' : 'text-yellow-600'}`} />
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold text-lg ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Fun Night</h4>
                  <p className={`text-sm ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>Dance, explore, enjoy the vibes together</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setSelectedIntent('romantic')}
              className={`w-full rounded-3xl p-5 border-2 transition-all text-left ${
                selectedIntent === 'romantic'
                  ? darkMode
                    ? 'bg-[#1C1C1E] border-[#F5C542]'
                    : 'bg-gradient-to-br from-pink-50 to-pink-100 border-pink-400'
                  : darkMode
                    ? 'bg-[#1C1C1E] border-[#2C2C30] hover:border-[#F5C542]'
                    : 'bg-white border-gray-200 hover:border-pink-300'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  darkMode ? 'bg-[#232326]' : 'bg-pink-100'
                }`}>
                  <Heart className={`w-6 h-6 ${darkMode ? 'text-[#F5C542]' : 'text-pink-600'}`} />
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold text-lg ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Romantic</h4>
                  <p className={`text-sm ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>Looking for a connection, maybe more</p>
                </div>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Match Preference */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className={`text-sm font-bold mb-3 uppercase tracking-wide ${darkMode ? 'text-[#7A7A80]' : 'text-gray-700'}`}>Match Preference</h3>
          <div className="space-y-3">
            <button
              onClick={() => setSelectedPreference('same')}
              className={`w-full rounded-3xl p-5 border-2 transition-all text-left ${
                selectedPreference === 'same'
                  ? darkMode
                    ? 'bg-[#1C1C1E] border-[#F5C542]'
                    : 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-400'
                  : darkMode
                    ? 'bg-[#1C1C1E] border-[#2C2C30] hover:border-[#F5C542]'
                    : 'bg-white border-gray-200 hover:border-purple-300'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  darkMode ? 'bg-[#232326]' : 'bg-purple-100'
                }`}>
                  <Music className={`w-6 h-6 ${darkMode ? 'text-[#F5C542]' : 'text-purple-600'}`} />
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold text-lg ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Same Genre</h4>
                  <p className={`text-sm ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>Match with similar music taste</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setSelectedPreference('any')}
              className={`w-full rounded-3xl p-5 border-2 transition-all text-left ${
                selectedPreference === 'any'
                  ? darkMode
                    ? 'bg-[#1C1C1E] border-[#F5C542]'
                    : 'bg-gradient-to-br from-green-50 to-green-100 border-green-400'
                  : darkMode
                    ? 'bg-[#1C1C1E] border-[#2C2C30] hover:border-[#F5C542]'
                    : 'bg-white border-gray-200 hover:border-green-300'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  darkMode ? 'bg-[#232326]' : 'bg-green-100'
                }`}>
                  <Users className={`w-6 h-6 ${darkMode ? 'text-[#F5C542]' : 'text-green-600'}`} />
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold text-lg ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Any Genre</h4>
                  <p className={`text-sm ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>Open to all music lovers</p>
                </div>
              </div>
            </button>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        disabled={!selectedIntent || !selectedPreference}
        className={`w-full font-bold py-5 rounded-full text-lg shadow-lg transition-all mt-6 ${
          selectedIntent && selectedPreference
            ? darkMode
              ? 'bg-[#F5C542] hover:bg-[#FFD76A] text-[#121212]'
              : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
            : darkMode
              ? 'bg-[#232326] text-[#7A7A80] cursor-not-allowed'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        Start Matching
      </motion.button>
    </motion.div>
  );
}