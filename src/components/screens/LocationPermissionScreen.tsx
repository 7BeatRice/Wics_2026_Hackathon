import React from 'react';
import { MapPin, Radar } from 'lucide-react';

interface ScreenProps {
  isSelected: boolean;
  onClick: () => void;
}

export function LocationPermissionScreen({ isSelected, onClick }: ScreenProps) {
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
          <div className="flex-1 h-1 bg-yellow-400 rounded-full"></div>
          <div className="flex-1 h-1 bg-gray-200 rounded-full"></div>
          <div className="flex-1 h-1 bg-gray-200 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl flex items-center justify-center">
              <MapPin className="w-16 h-16 text-white" strokeWidth={2} />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <Radar className="w-5 h-5 text-white" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-3">Enable Location & Bluetooth</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            To help you find matches at ACL, we need location and Bluetooth access
          </p>

          <div className="w-full bg-gray-50 rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm text-gray-700">Find matches nearby</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm text-gray-700">Navigate to your match</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm text-gray-700">Only active during festival</span>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-3">
            <p className="text-xs text-blue-800">
              🔒 Your location is private and only shared when you both agree to meet
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full space-y-3">
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 rounded-full text-lg transition-colors">
            Allow Access
          </button>
          <button className="w-full text-gray-500 font-medium py-3 text-sm">
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
