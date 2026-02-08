import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { auth, db } from './firebase.ts'; 
import { collection, getDocs, getDoc, doc, query, limit } from 'firebase/firestore';

// Component Imports
import { SplashScreen } from './components/prototype/SplashScreen.js';
import { OnboardingScreen } from './components/prototype/OnboardingScreen.js';
import { EmailSignInScreen } from './components/prototype/EmailSignInScreen.js';
import { PhotoUploadScreen } from './components/prototype/PhotoUploadScreen.js';
import { MusicInputScreen } from './components/prototype/MusicInputScreen.js';
import { IntentPreferenceScreen } from './components/prototype/IntentPreferenceScreen.js';
import { AnalysisLoadingScreen } from './components/prototype/AnalysisLoadingScreen.js';
import { MatchDiscoveryScreen } from './components/prototype/MatchDiscoveryScreen.js';
import { MatchListScreen } from './components/prototype/MatchListScreen.js';
import { MatchRequestScreen } from './components/prototype/MatchRequestScreen.js';
import { MatchConfirmationScreen } from './components/prototype/MatchConfirmationScreen.js';
import { LiveNavigationScreen } from './components/prototype/LiveNavigationScreen.js';
import { ProximityHeartbeatScreen } from './components/prototype/ProximityHeartbeatScreen.js';
import { MeetMomentScreen } from './components/prototype/MeetMomentScreen.js';
import { EndingScreen } from './components/prototype/EndingScreen.js';
import { ThemeToggle } from './components/ThemeToggle.js';

type Screen = 'splash' | 'onboarding' | 'email' | 'photo' | 'music' | 'intent' | 'analysis' | 'matches' | 'matchlist' | 'matchrequest' | 'confirmation' | 'navigation' | 'proximity' | 'meet' | 'ending';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [darkMode, setDarkMode] = useState(false);
  const [allMatches, setAllMatches] = useState<any[]>([]);
  const [loadingMatches, setLoadingMatches] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<any>(null);

  const loadFestivalMatches = async () => {
  setLoadingMatches(true);
  try {
    const user = auth.currentUser;
    if (!user) {
      console.log("No auth user found");
      return;
    }

    // 1. Get current user's data
    const userDoc = await getDoc(doc(db, "users", user.uid));
    
    // DEBUG: See if YOUR data exists
    if (!userDoc.exists()) {
       console.error("Current user doc does not exist in Firestore! Check your onboarding save logic.");
    }

    const myData = userDoc.data();
    const myGenres: string[] = (myData?.genres || []).map((g: string) => g.toLowerCase());

    // 2. Fetch potential matches 
    // REMOVED the "where" filter temporarily to ensure data flows
    const q = query(collection(db, "users"), limit(30));
    const snap = await getDocs(q);
    
    console.log(`Found ${snap.docs.length} total users in DB`);

    const data = snap.docs
      .map((docSnap: any) => {
        const d = docSnap.data();
        

        const theirGenres: string[] = d.genres || [];
        const theirGenresLower = theirGenres.map((g: string) => g.toLowerCase());
        
        const intersection = myGenres.filter((g: string) => theirGenresLower.includes(g));
        const union = new Set([...myGenres, ...theirGenresLower]);
        
        // If no genres match, give a random score so the UI isn't empty
        const score = union.size > 0 
          ? Math.round((intersection.length / union.size) * 100) 
          : Math.floor(Math.random() * 30) + 50; 

        return {
          id: docSnap.id,
          name: d.displayName || "Festival Fan",
          age: d.age || 21,
          artists: theirGenres,
          match: score,
          gradient: d.gradient || "from-yellow-400 to-orange-500",
          location: d.location || "Nearby",
          isFake: d.isFake || false
        };
      })
      .filter(Boolean); // Remove the 'null' entries (yourself)

    console.log("Processed Matches:", data);
    setAllMatches(data);
  } catch (err) {
    console.error("Match error:", err);
  } finally {
    setLoadingMatches(false);
  }
};

  useEffect(() => {
    // Timer and Navigation Maps for type-safety
    const timers: Partial<Record<Screen, number>> = {
      splash: 2500,
      analysis: 4000,
      matchrequest: 3000,
      confirmation: 2500,
      proximity: 3000
    };

    const nextScreenMap: Partial<Record<Screen, Screen>> = {
      splash: 'onboarding',
      analysis: 'matches',
      matchrequest: 'confirmation',
      confirmation: 'navigation',
      proximity: 'meet'
    };

    if (currentScreen === 'analysis') loadFestivalMatches();

    const waitTime = timers[currentScreen];
    const nextTarget = nextScreenMap[currentScreen];

    if (waitTime && nextTarget) {
      const timer = setTimeout(() => setCurrentScreen(nextTarget), waitTime);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Mobile Frame */}
      <div className={`relative w-full max-w-[400px] h-[844px] rounded-[60px] shadow-2xl overflow-hidden border-8 transition-colors ${
        darkMode ? 'bg-[#121212] border-[#1C1C1E]' : 'bg-white border-gray-900'
      }`}>
        
        {/* Status Bar */}
        <div className={`absolute top-0 left-0 right-0 h-11 z-50 flex items-center justify-between px-8 pt-2 ${
          darkMode ? 'bg-[#121212]' : 'bg-white'
        }`}>
          <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>9:41</span>
          <div className="flex gap-1">
            <div className={`w-4 h-2.5 border rounded-sm ${darkMode ? 'border-white' : 'border-gray-900'}`} />
            <div className={`w-5 h-3 border-2 rounded-sm relative ${darkMode ? 'border-white' : 'border-gray-900'}`}>
              <div className={`absolute -right-1.5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-r-sm ${darkMode ? 'bg-white' : 'bg-gray-900'}`} />
            </div>
          </div>
        </div>

        <div className="h-full pt-11">
          <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
          
          <AnimatePresence mode="wait">
            {currentScreen === 'splash' && <SplashScreen key="s" onNext={() => setCurrentScreen('onboarding')} darkMode={darkMode} />}
            {currentScreen === 'onboarding' && <OnboardingScreen key="o" onNext={() => setCurrentScreen('email')} darkMode={darkMode} />}
            {currentScreen === 'email' && <EmailSignInScreen key="e" onNext={() => setCurrentScreen('photo')} darkMode={darkMode} />}
            {currentScreen === 'photo' && <PhotoUploadScreen key="p" onNext={() => setCurrentScreen('music')} darkMode={darkMode} />}
            {currentScreen === 'music' && <MusicInputScreen key="m" onNext={() => setCurrentScreen('intent')} darkMode={darkMode} />}
            {currentScreen === 'intent' && <IntentPreferenceScreen key="i" onNext={() => setCurrentScreen('analysis')} darkMode={darkMode} />}
            {currentScreen === 'analysis' && <AnalysisLoadingScreen key="a" darkMode={darkMode} onFinished={() => {}} />}
            
            {currentScreen === 'matches' && (
              <MatchDiscoveryScreen 
                key="ds" 
                realMatches={allMatches} 
                darkMode={darkMode}
                onViewAll={() => setCurrentScreen('matchlist')}
                onMatch={(match) => { setSelectedMatch(match); setCurrentScreen('matchrequest'); }}
              />
            )}

            {currentScreen === 'matchlist' && (
              <MatchListScreen 
                key="ml" 
                matches={allMatches} 
                darkMode={darkMode}
                onBack={() => setCurrentScreen('matches')}
                onSelectMatch={(match) => { setSelectedMatch(match); setCurrentScreen('matchrequest'); }}
              />
            )}

            {currentScreen === 'matchrequest' && (
              <MatchRequestScreen 
                key="mr" 
                matchName={selectedMatch?.name || "Music Fan"} 
                darkMode={darkMode}
                onContinue={() => setCurrentScreen('confirmation')}
              />
            )}

            {currentScreen === 'confirmation' && (
              <MatchConfirmationScreen 
                key="c" 
                matchName={selectedMatch?.name || "Music Fan"} // Now correctly passed
                darkMode={darkMode} 
              />
            )}

            {currentScreen === 'navigation' && <LiveNavigationScreen key="n" onProximity={() => setCurrentScreen('proximity')} darkMode={darkMode} />}
            {currentScreen === 'proximity' && <ProximityHeartbeatScreen key="ph" darkMode={darkMode} />}
            {currentScreen === 'meet' && <MeetMomentScreen key="mm" onNext={() => setCurrentScreen('ending')} darkMode={darkMode} />}
            {currentScreen === 'ending' && <EndingScreen key="end" onRestart={() => setCurrentScreen('matches')} darkMode={darkMode} />}
          </AnimatePresence>
        </div>

        <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 rounded-full ${
          darkMode ? 'bg-white/20' : 'bg-gray-200'
        }`} />
      </div>
    </div>
  );
}