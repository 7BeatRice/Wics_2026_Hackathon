import React from 'react';
import { Music, UserPlus, Calendar } from 'lucide-react';

interface ScreenProps {
  isSelected: boolean;
  onClick: () => void;
}

export function IcebreakerScreen({ isSelected, onClick }: ScreenProps) {
  return (
    <div 
      onClick={onClick}
      className={`w-80 h-[700px] bg-white rounded-[40px] shadow-lg p-8 cursor-pointer transition-all border-4 ${
        isSelected ? 'border-yellow-400 scale-105' : 'border-gray-200'
      }`}
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Music className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Keep the Vibe Going</h2>
          <p className="text-gray-600">Suggested activities for you both</p>
        </div>

        {/* Icebreaker Cards */}
        <div className="flex-1 space-y-4 overflow-y-auto">
          {/* Recommended Show */}
          <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl p-5 border-2 border-purple-200">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-purple-600 mb-1">TONIGHT • 8:30 PM</div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Watch Tame Impala Together</h3>
                <p className="text-sm text-gray-700 mb-3">Your #1 shared artist is performing at the Honda Stage</p>
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded-full text-sm transition-colors">
                  Set Meetup
                </button>
              </div>
            </div>
          </div>

          {/* Music Stats */}
          <div className="bg-yellow-50 rounded-3xl p-5 border-2 border-yellow-200">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Music className="w-5 h-5 text-yellow-600" />
              Your Music Compatibility
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Shared Artists</span>
                <span className="font-bold text-gray-900">15 artists</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Top Genre</span>
                <span className="font-bold text-gray-900">Indie Rock</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Match Score</span>
                <span className="font-bold text-yellow-600">86%</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-2xl transition-colors flex items-center justify-center gap-2">
              <Music className="w-5 h-5" />
              Follow on Spotify
            </button>
            
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-2xl transition-colors flex items-center justify-center gap-2">
              <UserPlus className="w-5 h-5" />
              Stay Connected Today
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center">
          <button className="text-gray-500 font-medium text-sm py-2">
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}
