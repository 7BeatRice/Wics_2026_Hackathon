import React from 'react';
import { Music2, Sparkles } from 'lucide-react';

interface ScreenProps {
  isSelected: boolean;
  onClick: () => void;
}

export function SpotifyLoginScreen({ isSelected, onClick }: ScreenProps) {
  return (
    <div 
      onClick={onClick}
      className={`w-80 h-[700px] bg-white rounded-[40px] shadow-lg p-8 cursor-pointer transition-all border-4 ${
        isSelected ? 'border-yellow-400 scale-105' : 'border-gray-200'
      }`}
    >
      <div className="h-full flex flex-col items-center justify-between">
        {/* Progress */}
        <div className="w-full flex gap-2 mb-4">
          <div className="flex-1 h-1 bg-yellow-400 rounded-full"></div>
          <div className="flex-1 h-1 bg-gray-200 rounded-full"></div>
          <div className="flex-1 h-1 bg-gray-200 rounded-full"></div>
          <div className="flex-1 h-1 bg-gray-200 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center">
              <Music2 className="w-16 h-16 text-white" strokeWidth={2} />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-3">Connect Your Spotify</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We'll analyze your music taste to find the perfect festival match
          </p>

          <div className="w-full bg-gray-50 rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm text-gray-700">Top artists & genres</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm text-gray-700">Recently played</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm text-gray-700">Listening habits</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full space-y-3">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-full text-lg transition-colors flex items-center justify-center gap-2">
            <Music2 className="w-5 h-5" />
            Connect Spotify
          </button>
          <button className="w-full text-gray-500 font-medium py-3 text-sm">
            I'll do this later
          </button>
        </div>
      </div>
    </div>
  );
}
