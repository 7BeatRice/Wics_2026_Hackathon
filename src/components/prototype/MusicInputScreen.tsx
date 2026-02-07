import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Music, Link as LinkIcon, User } from 'lucide-react';

interface MusicInputScreenProps {
  onNext: () => void;
  darkMode: boolean;
}

export function MusicInputScreen({ onNext, darkMode }: MusicInputScreenProps) {
  const [activeTab, setActiveTab] = useState<'spotify' | 'artist'>('spotify');

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
        <div className={`flex-1 h-1.5 rounded-full ${darkMode ? 'bg-[#F5C542]' : 'bg-yellow-400'}`}></div>
        <div className={`flex-1 h-1.5 rounded-full ${darkMode ? 'bg-[#2A2A2D]' : 'bg-gray-200'}`}></div>
      </div>

      <div className="flex-1 flex flex-col">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Music className="w-10 h-10 text-white" strokeWidth={2.5} />
          </div>
          <h2 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Your music taste</h2>
          <p className={`px-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Help us find your perfect match</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`flex gap-2 mb-6 p-2 rounded-full ${darkMode ? 'bg-[#1C1C1E]' : 'bg-gray-100'}`}
        >
          <button
            onClick={() => setActiveTab('spotify')}
            className={`flex-1 py-3 rounded-full font-semibold text-sm transition-all ${
              activeTab === 'spotify'
                ? darkMode 
                  ? 'bg-[#232326] text-[#F2F2F2] shadow-sm' 
                  : 'bg-white text-gray-900 shadow-sm'
                : darkMode
                  ? 'text-[#7A7A80]'
                  : 'text-gray-600'
            }`}
          >
            Spotify URL
          </button>
          <button
            onClick={() => setActiveTab('artist')}
            className={`flex-1 py-3 rounded-full font-semibold text-sm transition-all ${
              activeTab === 'artist'
                ? darkMode 
                  ? 'bg-[#232326] text-[#F2F2F2] shadow-sm' 
                  : 'bg-white text-gray-900 shadow-sm'
                : darkMode
                  ? 'text-[#7A7A80]'
                  : 'text-gray-600'
            }`}
          >
            Favorite Artist
          </button>
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1"
        >
          {activeTab === 'spotify' ? (
            <div className="space-y-4">
              <div className={`rounded-3xl p-5 border-2 ${
                darkMode
                  ? 'bg-[#1C1C1E] border-[#2C2C30]'
                  : 'bg-green-50 border-green-200'
              }`}>
                <div className="flex items-start gap-3 mb-4">
                  <LinkIcon className={`w-5 h-5 mt-0.5 ${darkMode ? 'text-[#F5C542]' : 'text-green-600'}`} />
                  <div>
                    <h3 className={`font-bold mb-1 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Paste your Spotify profile</h3>
                    <p className={`text-sm ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>We'll fetch your top artists & genres</p>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="https://open.spotify.com/user/..."
                  className={`w-full px-5 py-4 rounded-full border-2 focus:outline-none text-sm transition-colors ${
                    darkMode
                      ? 'bg-[#232326] border-[#2C2C30] focus:border-[#F5C542] text-[#F2F2F2] placeholder-[#7A7A80]'
                      : 'bg-white border-green-300 focus:border-green-500 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              <div className={`rounded-2xl p-4 border-2 ${
                darkMode
                  ? 'bg-[#1C1C1E] border-[#2C2C30]'
                  : 'bg-blue-50 border-blue-200'
              }`}>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-[#B0B0B5]' : 'text-blue-900'}`}>
                  💡 To find your Spotify URL: Open Spotify → Your Profile → Share → Copy Link
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className={`rounded-3xl p-5 border-2 ${
                darkMode
                  ? 'bg-[#1C1C1E] border-[#2C2C30]'
                  : 'bg-purple-50 border-purple-200'
              }`}>
                <div className="flex items-start gap-3 mb-4">
                  <User className={`w-5 h-5 mt-0.5 ${darkMode ? 'text-[#F5C542]' : 'text-purple-600'}`} />
                  <div>
                    <h3 className={`font-bold mb-1 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Who's your favorite artist?</h3>
                    <p className={`text-sm ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>We'll find similar music lovers</p>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="e.g., Tame Impala, SZA, Tyler..."
                  className={`w-full px-5 py-4 rounded-full border-2 focus:outline-none text-sm transition-colors ${
                    darkMode
                      ? 'bg-[#232326] border-[#2C2C30] focus:border-[#F5C542] text-[#F2F2F2] placeholder-[#7A7A80]'
                      : 'bg-white border-purple-300 focus:border-purple-500 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {['Indie', 'Hip Hop', 'Electronic', 'Pop', 'Rock', 'R&B'].map((genre) => (
                  <button
                    key={genre}
                    className={`px-4 py-2 border-2 rounded-full text-sm font-medium transition-colors ${
                      darkMode
                        ? 'bg-[#1C1C1E] border-[#2C2C30] hover:border-[#F5C542] text-[#F2F2F2]'
                        : 'bg-white border-gray-200 hover:border-purple-400 text-gray-700'
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className={`w-full font-bold py-5 rounded-full text-lg shadow-lg transition-colors ${
          darkMode
            ? 'bg-[#F5C542] hover:bg-[#FFD76A] text-[#121212]'
            : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
        }`}
      >
        Analyze My Taste
      </motion.button>
    </motion.div>
  );
}