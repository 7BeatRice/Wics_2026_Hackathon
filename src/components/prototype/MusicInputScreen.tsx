import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import { Music, Link as LinkIcon, User } from 'lucide-react';
import { auth, db } from "../../firebase.ts"; 
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

// RESTORED GENRES
const MASTER_GENRES = [
  "Indie", "Rock", "Pop", "Hip Hop", "Jazz", "Electronic", 
  "R&B", "Country", "Folk", "Soul", "Techno"
];

interface MusicInputScreenProps {
  onNext: () => void;
  darkMode: boolean;
}

export function MusicInputScreen({ onNext, darkMode }: MusicInputScreenProps) {
  const [activeTab, setActiveTab] = useState<'spotify' | 'artist'>('spotify');
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    console.log("1. Starting Analysis...");
    const user = auth.currentUser;
    if (!user) return alert("Please log in first!");
    if (!userInput) return alert("Please enter an artist or URL!");
    if (isLoading) return; 

    setIsLoading(true); 

    // --- SAFETY TIMEOUT ---
    // If it takes more than 10 seconds, reset the button so it's not stuck
    const forceReset = setTimeout(() => {
        setIsLoading(false);
    }, 10000);

    try {
      console.log("2. Fetching from API...");
      let searchOutput = "";

      if (activeTab === 'artist') {
        const apiKey = import.meta.env.VITE_SERPAPI_KEY;
        const query = encodeURIComponent(`${userInput} official music genres`);
        const proxy = "https://corsproxy.io/?"; 
        const targetUrl = `https://serpapi.com/search.json?engine=google&q=${query}&api_key=${apiKey}`;

        const response = await fetch(proxy + encodeURIComponent(targetUrl));
        console.log("3. API Response received");
        
        if (!response.ok) throw new Error("Proxy or API failed");
        
        const data = await response.json();
        searchOutput = JSON.stringify(data.knowledge_graph || data.organic_results || "");
      } else {
        alert("Spotify Link analysis requires the Spotify API. Please use 'Favorite Artist' for now!");
        clearTimeout(forceReset); // Stop the timeout
        setIsLoading(false);
        return;
      }

      const matchedGenres = MASTER_GENRES.filter(genre => 
        searchOutput.toLowerCase().includes(genre.toLowerCase())
      );

      if (matchedGenres.length === 0) {
        alert("No clear genres found. Try a different artist name!");
      } else {
        // This is where it usually hangs if Firebase is blocked
        console.log("4. Saving to Firebase...");
        await setDoc(doc(db, "users", user.uid), {
          genres: matchedGenres,
          lastInput: userInput,
          updatedAt: serverTimestamp()
        }, { merge: true });
        
        clearTimeout(forceReset); // Stop the timeout
        console.log("5. Firebase Save Successful!");
        onNext();
      }
    } catch (error) {
      console.error("Firebase/API Error:", error);
      alert("Analysis failed. Check your internet or AdBlocker.");
    } finally {
      clearTimeout(forceReset); // Cleanup
      setIsLoading(false); 
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className={`h-full flex flex-col p-8 ${darkMode ? 'bg-[#121212]' : 'bg-white'}`}
    >
      {/* RESTORED YELLOW COLORS */}
      <div className="flex gap-2 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`flex-1 h-1.5 rounded-full ${darkMode ? 'bg-[#F5C542]' : 'bg-yellow-400'}`}></div>
        ))}
        <div className={`flex-1 h-1.5 rounded-full ${darkMode ? 'bg-[#2A2A2D]' : 'bg-gray-200'}`}></div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Music className="w-10 h-10 text-white" strokeWidth={2.5} />
          </div>
          <h2 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Your music taste</h2>
        </div>

        {/* Tab Switcher */}
        <div className={`flex gap-2 mb-6 p-2 rounded-full ${darkMode ? 'bg-[#1C1C1E]' : 'bg-gray-100'}`}>
          <button
            onClick={() => { setActiveTab('spotify'); setUserInput(''); }}
            className={`flex-1 py-3 rounded-full font-semibold text-sm transition-all ${
              activeTab === 'spotify' 
                ? (darkMode ? 'bg-[#232326] text-white shadow' : 'bg-white text-black shadow') 
                : 'text-gray-500'
            }`}
          >
            Spotify URL
          </button>
          <button
            onClick={() => { setActiveTab('artist'); setUserInput(''); }}
            className={`flex-1 py-3 rounded-full font-semibold text-sm transition-all ${
              activeTab === 'artist' 
                ? (darkMode ? 'bg-[#232326] text-white shadow' : 'bg-white text-black shadow') 
                : 'text-gray-500'
            }`}
          >
            Favorite Artist
          </button>
        </div>

        {activeTab === 'spotify' ? (
          <div className="space-y-4">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Paste Spotify Link..."
                className={`w-full px-5 py-4 rounded-full border-2 focus:outline-none ${
                  darkMode ? 'bg-[#232326] border-[#2C2C30] text-white' : 'bg-white border-green-300'
                }`}
              />
          </div>
        ) : (
          <div className="space-y-4">
            {/* RESTORED PURPLE COLORS */}
            <div className={`rounded-3xl p-5 border-2 ${darkMode ? 'bg-[#1C1C1E] border-[#2C2C30]' : 'bg-purple-50 border-purple-200'}`}>
              <div className="flex items-start gap-3 mb-4">
                <User className={`w-5 h-5 mt-0.5 ${darkMode ? 'text-[#F5C542]' : 'text-purple-600'}`} />
                <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Type an artist</h3>
              </div>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="e.g., Tame Impala..."
                className={`w-full px-5 py-4 rounded-full border-2 focus:outline-none ${
                  darkMode ? 'bg-[#232326] border-[#2C2C30] text-white' : 'bg-white border-purple-300'
                }`}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {MASTER_GENRES.map((genre) => (
                <button
                  key={genre}
                  type="button"
                  onClick={() => setUserInput(prev => prev ? `${prev} ${genre}` : genre)} 
                  className={`px-4 py-2 border-2 rounded-full text-sm font-medium transition-colors ${
                    darkMode ? 'bg-[#1C1C1E] border-[#2C2C30] text-white' : 'bg-white border-gray-200 text-gray-700'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        disabled={isLoading}
        onClick={handleAnalyze}
        className={`w-full font-bold py-5 rounded-full text-lg mt-4 ${
          darkMode ? 'bg-[#F5C542] text-[#121212]' : 'bg-yellow-400 text-gray-900'
        } ${isLoading ? 'opacity-50' : ''}`}
      >
        {isLoading ? "Analyzing..." : "Analyze My Taste"}
      </motion.button>
    </motion.div>
  );
}