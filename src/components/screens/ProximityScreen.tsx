import React from 'react';
import { Radar, Music, Zap } from 'lucide-react';

interface ScreenProps {
  isSelected: boolean;
  onClick: () => void;
}

export function ProximityScreen({ isSelected, onClick }: ScreenProps) {
  return (
    <div 
      onClick={onClick}
      className={`w-80 h-[700px] bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-200 rounded-[40px] shadow-lg p-8 cursor-pointer transition-all border-4 ${
        isSelected ? 'border-yellow-600 scale-105' : 'border-gray-200'
      }`}
    >
      <div className="h-full flex flex-col items-center justify-center">
        {/* Pulsing Circle Animation */}
        <div className="relative mb-12">
          {/* Pulse waves */}
          <div className="absolute inset-0 w-48 h-48 bg-white/40 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
          <div className="absolute inset-0 w-48 h-48 bg-white/30 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
          <div className="absolute inset-0 w-48 h-48 bg-white/20 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '1s' }}></div>
          
          {/* Center icon */}
          <div className="relative w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <Radar className="w-24 h-24 text-yellow-600" strokeWidth={2} />
          </div>

          {/* Sparkle indicators */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <Zap className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.2s' }}>
            <Music className="w-5 h-5 text-yellow-500" />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">You're Very Close!</h2>
          <p className="text-lg text-gray-800">Alex is within 50 feet</p>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 mt-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">You</span>
              </div>
              <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 via-yellow-600 to-purple-500 rounded-full relative">
                <div className="absolute right-0 w-3 h-3 bg-yellow-600 rounded-full animate-pulse"></div>
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-700">Keep going straight</p>
          </div>

          {/* Haptic indicator */}
          <div className="bg-gray-900 rounded-2xl p-4 mt-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <p className="text-xs text-white/80">Phone vibrating: ••• ••• •••</p>
          </div>
        </div>
      </div>
    </div>
  );
}
