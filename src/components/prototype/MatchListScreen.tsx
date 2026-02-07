import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Music, MapPin } from 'lucide-react';

interface MatchListScreenProps {
  onBack: () => void;
  onSelectMatch: (index: number) => void;
  darkMode: boolean;
}

const allMatches = [
  {
    name: 'Alex',
    age: 24,
    match: 86,
    distance: '0.3 mi',
    artists: ['Tame Impala', 'Khruangbin', 'SZA'],
    gradient: 'from-purple-400 via-pink-400 to-yellow-400'
  },
  {
    name: 'Jordan',
    age: 26,
    match: 92,
    distance: '0.5 mi',
    artists: ['Rüfüs Du Sol', 'Lane 8', 'ODESZA'],
    gradient: 'from-blue-400 via-purple-400 to-pink-400'
  },
  {
    name: 'Sam',
    age: 23,
    match: 78,
    distance: '0.8 mi',
    artists: ['Billie Eilish', 'Lorde', 'Phoebe Bridgers'],
    gradient: 'from-green-400 via-teal-400 to-blue-400'
  },
  {
    name: 'Taylor',
    age: 25,
    match: 88,
    distance: '0.4 mi',
    artists: ['The 1975', 'HAIM', 'Rex Orange County'],
    gradient: 'from-pink-400 via-rose-400 to-red-400'
  },
  {
    name: 'Morgan',
    age: 27,
    match: 81,
    distance: '0.6 mi',
    artists: ['Tyler, The Creator', 'Frank Ocean', 'Childish Gambino'],
    gradient: 'from-orange-400 via-yellow-400 to-amber-400'
  },
  {
    name: 'Casey',
    age: 24,
    match: 85,
    distance: '0.7 mi',
    artists: ['Glass Animals', 'Still Woozy', 'Tame Impala'],
    gradient: 'from-indigo-400 via-purple-400 to-pink-400'
  }
];

export function MatchListScreen({ onBack, onSelectMatch, darkMode }: MatchListScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`h-full flex flex-col ${darkMode ? 'bg-[#121212]' : 'bg-gray-50'}`}
    >
      {/* Header */}
      <div className={`px-6 pt-6 pb-4 border-b flex-shrink-0 ${
        darkMode ? 'bg-[#121212] border-[#2A2A2D]' : 'bg-white border-gray-100'
      }`}>
        <div className="flex items-center justify-between mb-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onBack}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              darkMode ? 'bg-[#232326]' : 'bg-gray-100'
            }`}
          >
            <ArrowLeft className={`w-5 h-5 ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`} />
          </motion.button>
          <h2 className={`text-xl font-bold ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>Nearby Matches</h2>
          <div className="w-10"></div>
        </div>
        <p className={`text-sm text-center ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>Tap any match to start finding them</p>
      </div>

      {/* Match List */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="space-y-3 pb-4">
          {allMatches.map((match, index) => (
            <motion.button
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectMatch(index)}
              className={`w-full rounded-3xl p-4 shadow-sm border-2 transition-colors text-left ${
                darkMode
                  ? 'bg-[#1C1C1E] border-[#2C2C30] hover:border-[#F5C542]'
                  : 'bg-white border-gray-100 hover:border-yellow-300'
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className={`w-20 h-20 bg-gradient-to-br ${match.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <Music className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className={`text-lg font-bold ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>
                      {match.name}, {match.age}
                    </h3>
                    <div className={`rounded-full px-3 py-1 ${darkMode ? 'bg-[#232326]' : 'bg-green-100'}`}>
                      <span className={`text-xs font-bold ${darkMode ? 'text-[#F5C542]' : 'text-green-700'}`}>{match.match}%</span>
                    </div>
                  </div>
                  
                  <p className={`text-sm flex items-center gap-1 mb-2 ${darkMode ? 'text-[#B0B0B5]' : 'text-gray-600'}`}>
                    <MapPin className="w-3 h-3" />
                    {match.distance} away
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {match.artists.slice(0, 2).map((artist, i) => (
                      <div key={i} className={`rounded-full px-2 py-1 border ${
                        darkMode
                          ? 'bg-[#232326] border-[#2C2C30] text-[#F2F2F2]'
                          : 'bg-yellow-50 border-yellow-200 text-gray-800'
                      }`}>
                        <span className="text-xs font-medium">{artist}</span>
                      </div>
                    ))}
                    {match.artists.length > 2 && (
                      <div className={`rounded-full px-2 py-1 ${darkMode ? 'bg-[#F5C542]' : 'bg-yellow-400'}`}>
                        <span className="text-xs font-bold text-gray-900">+{match.artists.length - 2}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}