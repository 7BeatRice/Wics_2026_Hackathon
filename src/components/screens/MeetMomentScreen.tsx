import React from 'react';
import { Music, Heart, Sparkles, Users } from 'lucide-react';

interface ScreenProps {
  isSelected: boolean;
  onClick: () => void;
}

export function MeetMomentScreen({ isSelected, onClick }: ScreenProps) {
  return (
    <div 
      onClick={onClick}
      className={`w-80 h-[700px] bg-gradient-to-b from-purple-500 via-pink-400 to-yellow-400 rounded-[40px] shadow-lg p-8 cursor-pointer transition-all border-4 ${
        isSelected ? 'border-yellow-400 scale-105' : 'border-gray-200'
      }`}
    >
      <div className="h-full flex flex-col items-center justify-between">
        {/* Celebration animation */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {/* Floating sparkles */}
          <div className="relative mb-8">
            <Sparkles className="absolute -top-6 -left-6 w-8 h-8 text-white animate-bounce" style={{ animationDelay: '0s' }} />
            <Sparkles className="absolute -top-8 right-0 w-6 h-6 text-white animate-bounce" style={{ animationDelay: '0.2s' }} />
            <Sparkles className="absolute -bottom-4 -right-8 w-7 h-7 text-white animate-bounce" style={{ animationDelay: '0.4s' }} />
            <Sparkles className="absolute -bottom-6 left-2 w-5 h-5 text-white animate-bounce" style={{ animationDelay: '0.6s' }} />
            
            {/* Center icon */}
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <Users className="w-16 h-16 text-purple-500" strokeWidth={2} />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-white mb-3">You Found Each Other!</h2>
          <p className="text-xl text-white/90 mb-8">Say hi to Alex 👋</p>

          {/* Shared music highlight */}
          <div className="w-full bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <Music className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-semibold text-gray-700">You Both Love</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl"></div>
                <div className="flex-1 text-left">
                  <div className="font-bold text-gray-900">Tame Impala</div>
                  <div className="text-sm text-gray-600">Psychedelic Rock</div>
                </div>
                <Heart className="w-5 h-5 text-red-400" fill="currentColor" />
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl"></div>
                <div className="flex-1 text-left">
                  <div className="font-bold text-gray-900">Khruangbin</div>
                  <div className="text-sm text-gray-600">Indie / Psychedelic</div>
                </div>
                <Heart className="w-5 h-5 text-red-400" fill="currentColor" />
              </div>

              <div className="bg-yellow-50 rounded-2xl p-3 border border-yellow-200">
                <p className="text-sm font-medium text-gray-700">
                  +12 more shared artists
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full bg-white hover:bg-gray-50 text-purple-600 font-bold py-4 rounded-full text-lg transition-colors shadow-xl">
          Continue
        </button>
      </div>
    </div>
  );
}
