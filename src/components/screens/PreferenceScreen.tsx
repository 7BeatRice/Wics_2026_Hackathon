import React from 'react';
import { Users, UserPlus, Sparkles } from 'lucide-react';

interface ScreenProps {
  isSelected: boolean;
  onClick: () => void;
}

export function PreferenceScreen({ isSelected, onClick }: ScreenProps) {
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
          <div className="flex-1 h-1 bg-yellow-400 rounded-full"></div>
          <div className="flex-1 h-1 bg-gray-200 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-8">Who do you want to meet?</h2>
          <p className="text-gray-600 mb-6">Choose your festival vibe</p>

          <div className="space-y-4 flex-1">
            {/* Friends */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-6 border-4 border-purple-200 cursor-pointer hover:border-purple-400 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Find Friends</h3>
                  <p className="text-sm text-gray-700">Connect with friends already at ACL</p>
                </div>
              </div>
            </div>

            {/* New People */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-6 border-4 border-yellow-400 cursor-pointer hover:border-yellow-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <UserPlus className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Meet New People</h3>
                  <p className="text-sm text-gray-700">Match with festival-goers who share your taste</p>
                </div>
              </div>
              <div className="mt-3 bg-yellow-200 rounded-xl px-3 py-2 inline-flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-yellow-800" />
                <span className="text-xs font-semibold text-yellow-900">Recommended</span>
              </div>
            </div>

            {/* Both */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-6 border-4 border-blue-200 cursor-pointer hover:border-blue-400 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-white" />
                  <UserPlus className="w-5 h-5 text-white absolute translate-x-2 translate-y-2" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Both!</h3>
                  <p className="text-sm text-gray-700">Friends and new connections</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 rounded-full text-lg transition-colors mt-4">
          Continue
        </button>
      </div>
    </div>
  );
}
