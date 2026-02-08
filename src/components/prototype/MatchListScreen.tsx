import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Music } from 'lucide-react';

interface Props {
  matches: any[];
  onBack: () => void;
  onSelectMatch: (match: any) => void;
  darkMode: boolean;
}

export function MatchListScreen({ matches, onBack, onSelectMatch, darkMode }: Props) {
  return (
    <div className={`h-full flex flex-col ${darkMode ? 'bg-[#121212]' : 'bg-white'}`}>
      <div className="p-6 border-b border-gray-100 flex items-center gap-4">
        <button onClick={onBack} className="p-2 bg-gray-100 rounded-full"><ArrowLeft size={20}/></button>
        <h2 className="text-xl font-bold">Nearby Matches</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {matches.map((match) => (
        <div 
          key={match.id} 
          onClick={() => onSelectMatch(match)} // Add click handler
          className={`p-4 rounded-2xl flex items-center gap-4 border cursor-pointer ...`}
        >
          {/* ... other code ... */}
          <div className="text-yellow-500 font-bold">
            {match.match}% 
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}