import React from 'react';
import { Music, Sparkles, Disc3 } from 'lucide-react';

interface ScreenProps {
  isSelected: boolean;
  onClick: () => void;
}

export function AnalysisScreen({ isSelected, onClick }: ScreenProps) {
  return (
    <div 
      onClick={onClick}
      className={`w-80 h-[700px] bg-gradient-to-b from-yellow-50 to-white rounded-[40px] shadow-lg p-8 cursor-pointer transition-all border-4 ${
        isSelected ? 'border-yellow-400 scale-105' : 'border-gray-200'
      }`}
    >
      <div className="h-full flex flex-col items-center justify-center">
        {/* Animated Circle */}
        <div className="relative mb-10">
          <div className="w-40 h-40 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center animate-pulse">
            <Disc3 className="w-20 h-20 text-white" strokeWidth={2} />
          </div>
          <div className="absolute -top-3 -right-3 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center animate-bounce">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.2s' }}>
            <Music className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Text */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">Analyzing Your Music Taste</h2>
        <p className="text-gray-600 text-center mb-8">Finding your perfect festival matches...</p>

        {/* Progress Indicators */}
        <div className="w-full space-y-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Top Artists</span>
              <span className="text-sm font-semibold text-yellow-600">✓ Complete</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-400 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Music Genres</span>
              <span className="text-sm font-semibold text-yellow-600">✓ Complete</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-400 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Festival Vibes</span>
              <span className="text-sm font-semibold text-blue-600">Analyzing...</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-yellow-400 to-blue-400 rounded-full animate-pulse" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>

        {/* Stats Preview */}
        <div className="mt-8 flex gap-3 w-full">
          <div className="flex-1 bg-yellow-100 rounded-2xl p-3 text-center">
            <div className="text-2xl font-bold text-gray-900">247</div>
            <div className="text-xs text-gray-600">Artists</div>
          </div>
          <div className="flex-1 bg-purple-100 rounded-2xl p-3 text-center">
            <div className="text-2xl font-bold text-gray-900">18</div>
            <div className="text-xs text-gray-600">Genres</div>
          </div>
          <div className="flex-1 bg-green-100 rounded-2xl p-3 text-center">
            <div className="text-2xl font-bold text-gray-900">92%</div>
            <div className="text-xs text-gray-600">Match Ready</div>
          </div>
        </div>
      </div>
    </div>
  );
}
