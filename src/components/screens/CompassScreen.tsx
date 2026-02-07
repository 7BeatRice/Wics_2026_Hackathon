import React from 'react';
import { Navigation, Locate, Music } from 'lucide-react';

interface ScreenProps {
  isSelected: boolean;
  onClick: () => void;
}

export function CompassScreen({ isSelected, onClick }: ScreenProps) {
  return (
    <div 
      onClick={onClick}
      className={`w-80 h-[700px] bg-gradient-to-b from-purple-900 via-purple-800 to-gray-900 rounded-[40px] shadow-lg p-8 cursor-pointer transition-all border-4 ${
        isSelected ? 'border-yellow-400 scale-105' : 'border-gray-700'
      }`}
    >
      <div className="h-full flex flex-col items-center justify-between">
        {/* Header */}
        <div className="w-full text-center">
          <div className="flex items-center justify-between mb-6">
            <button className="text-white/60 hover:text-white">← Back</button>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white font-semibold text-sm">Finding Alex...</span>
            </div>
            <button className="text-white/60 hover:text-white">•••</button>
          </div>
        </div>

        {/* Compass Circle */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            {/* Outer rings */}
            <div className="absolute inset-0 w-80 h-80 border-2 border-yellow-400/20 rounded-full"></div>
            <div className="absolute inset-8 w-64 h-64 border-2 border-yellow-400/30 rounded-full"></div>
            <div className="absolute inset-16 w-48 h-48 border-2 border-yellow-400/40 rounded-full"></div>
            
            {/* Center - You */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-blue-400/50">
                <Locate className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Match Direction Indicator */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Navigation className="w-6 h-6 text-white" style={{ transform: 'rotate(45deg)' }} />
              </div>
              <div className="mt-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="flex items-center gap-2">
                  <Music className="w-4 h-4 text-gray-700" />
                  <span className="text-sm font-bold text-gray-900">Alex</span>
                </div>
              </div>
              {/* Pulse waves */}
              <div className="absolute top-0 w-12 h-12 bg-yellow-400/30 rounded-full animate-ping"></div>
            </div>

            {/* Cardinal directions */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-white/40 text-xs font-semibold">N</div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs font-semibold">S</div>
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 text-white/40 text-xs font-semibold">W</div>
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-white/40 text-xs font-semibold">E</div>
          </div>
        </div>

        {/* Distance Info */}
        <div className="w-full space-y-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-1">~450 ft</div>
            <div className="text-white/60">Northeast from you</div>
          </div>

          <div className="bg-yellow-400 rounded-3xl p-4 text-center">
            <p className="text-sm font-medium text-gray-900">
              💫 Keep moving in this direction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
