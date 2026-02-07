import React from 'react';
import { Music, Users, MapPin } from 'lucide-react';

interface ScreenProps {
  isSelected: boolean;
  onClick: () => void;
}

export function WelcomeScreen({ isSelected, onClick }: ScreenProps) {
  return (
    <div 
      onClick={onClick}
      className={`w-80 h-[700px] bg-white rounded-[40px] shadow-lg p-8 cursor-pointer transition-all border-4 ${
        isSelected ? 'border-yellow-400 scale-105' : 'border-gray-200'
      }`}
    >
      <div className="h-full flex flex-col items-center justify-between">
        {/* Header */}
        <div className="w-full text-center mt-8">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl mx-auto flex items-center justify-center mb-6">
            <Music className="w-10 h-10 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ACL Match</h1>
          <p className="text-gray-600 text-lg">Find your music match at ACL</p>
        </div>

        {/* Features */}
        <div className="space-y-6 w-full">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Music className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Music Matching</h3>
              <p className="text-sm text-gray-600">Connect based on Spotify taste</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Find Each Other</h3>
              <p className="text-sm text-gray-600">Navigate to your match in real-time</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Meet New People</h3>
              <p className="text-sm text-gray-600">Make friends at the festival</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 rounded-full text-lg transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
}
