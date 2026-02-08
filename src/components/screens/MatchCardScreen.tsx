import React from 'react';
import { Music, Heart, X, MapPin } from 'lucide-react';

// Define what a "Match" looks like
interface Match {
  displayName: string;
  age: number;
  location: string;
  genres: string[];
  topArtist: string;
  festivalNote: string;
  matchPercentage: number;
}

interface MatchCardScreenProps {
  match: Match; // This is the specific person we are showing
  onNext: () => void; // Function to go to the next person
}

export function MatchCardScreen({ match, onNext }: MatchCardScreenProps) {
  return (
    <div className="w-80 h-[700px] bg-gray-50 rounded-[40px] shadow-lg p-6 border-4 border-gray-200">
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Your Matches</h2>
          <div className="bg-yellow-400 rounded-full px-3 py-1">
            <span className="text-sm font-bold text-gray-900">Nearby</span>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-3xl shadow-xl overflow-hidden relative">
          <div className="h-2/5 bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400 relative flex items-center justify-center">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
              <Music className="w-16 h-16 text-gray-400" strokeWidth={1.5} />
            </div>
            
            {/* Match Percentage - Now Dynamic! */}
            <div className="absolute top-4 right-4 bg-green-500 rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm font-bold text-white">{match.matchPercentage}% Match</span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{match.displayName}, {match.age}</h3>
              <p className="text-gray-600 flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {match.location}
              </p>
            </div>

            {/* Shared Artist Area */}
            <div className="bg-yellow-50 rounded-2xl p-4">
              <div className="text-sm font-semibold text-gray-700 mb-2">Favorite Artist</div>
              <div className="flex flex-wrap gap-2">
                <div className="bg-white rounded-full px-3 py-1 border border-yellow-200">
                  <span className="text-sm font-medium text-gray-800">{match.topArtist}</span>
                </div>
              </div>
            </div>

            {/* Festival Note - Now Dynamic! */}
            <div className="bg-purple-50 rounded-2xl p-3 border border-purple-200">
              <p className="text-sm text-purple-900">
                💜 "{match.festivalNote}"
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <button onClick={onNext} className="w-16 h-16 bg-white hover:bg-red-50 rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 transition-colors">
            <X className="w-8 h-8 text-gray-400" strokeWidth={2.5} />
          </button>
          
          <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 rounded-full shadow-lg flex items-center justify-center gap-2 font-semibold text-gray-900 transition-colors">
            <MapPin className="w-5 h-5" />
            Meet Up
          </button>

          <button onClick={onNext} className="w-16 h-16 bg-white hover:bg-green-50 rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 transition-colors">
            <Heart className="w-8 h-8 text-red-400" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}