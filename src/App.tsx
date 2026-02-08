import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
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

type Screen = 
  | 'splash'
  | 'onboarding'
  | 'email'
  | 'photo'
  | 'music'
  | 'intent'
  | 'analysis'
  | 'matches'
  | 'matchlist'
  | 'matchrequest'
  | 'confirmation'
  | 'navigation'
  | 'proximity'
  | 'meet'
  | 'ending';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Auto-transition from splash after 2 seconds
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('onboarding');
      }, 2500);
      return () => clearTimeout(timer);
    }

    // Auto-transition from analysis after 4 seconds
    if (currentScreen === 'analysis') {
      const timer = setTimeout(() => {
        setCurrentScreen('matches');
      }, 4000);
      return () => clearTimeout(timer);
    }

    // Auto-transition from match request after 3 seconds (simulating acceptance)
    if (currentScreen === 'matchrequest') {
      const timer = setTimeout(() => {
        setCurrentScreen('confirmation');
      }, 3000);
      return () => clearTimeout(timer);
    }

    // Auto-transition from confirmation after 2.5 seconds
    if (currentScreen === 'confirmation') {
      const timer = setTimeout(() => {
        setCurrentScreen('navigation');
      }, 2500);
      return () => clearTimeout(timer);
    }

    // Auto-transition from proximity after 3 seconds
    if (currentScreen === 'proximity') {
      const timer = setTimeout(() => {
        setCurrentScreen('meet');
      }, 3000);
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
          <span className={`text-sm font-semibold ${darkMode ? 'text-[#F2F2F2]' : 'text-gray-900'}`}>9:41</span>
          <div className="flex items-center gap-1">
            <div className={`w-4 h-3 border rounded-sm ${darkMode ? 'border-[#F2F2F2]' : 'border-gray-900'}`}></div>
            <div className={`w-4 h-3 border rounded-sm ${darkMode ? 'border-[#F2F2F2]' : 'border-gray-900'}`}></div>
            <div className={`w-6 h-3 border rounded-sm relative ${darkMode ? 'border-[#F2F2F2]' : 'border-gray-900'}`}>
              <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1.5 rounded-r-sm ${darkMode ? 'bg-[#F2F2F2]' : 'bg-gray-900'}`}></div>
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="h-full pt-11">
          <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
          
          <AnimatePresence mode="wait">
            {currentScreen === 'splash' && (
              <SplashScreen key="splash" onNext={() => setCurrentScreen('onboarding')} darkMode={darkMode} />
            )}
            {currentScreen === 'onboarding' && (
              <OnboardingScreen key="onboarding" onNext={() => setCurrentScreen('email')} darkMode={darkMode} />
            )}
            {currentScreen === 'email' && (
              <EmailSignInScreen key="email" onNext={() => setCurrentScreen('photo')} darkMode={darkMode} />
            )}
            {currentScreen === 'photo' && (
              <PhotoUploadScreen key="photo" onNext={() => setCurrentScreen('music')} darkMode={darkMode} />
            )}
            {currentScreen === 'music' && (
              <MusicInputScreen key="music" onNext={() => setCurrentScreen('intent')} darkMode={darkMode} />
            )}
            {currentScreen === 'intent' && (
              <IntentPreferenceScreen key="intent" onNext={() => setCurrentScreen('analysis')} darkMode={darkMode} />
            )}
            {currentScreen === 'analysis' && (
              <AnalysisLoadingScreen key="analysis" darkMode={darkMode} onFinished={() => setCurrentScreen('analysis')} />
            )}
            {currentScreen === 'matches' && (
              <MatchDiscoveryScreen key="matches" onMatch={() => setCurrentScreen('matchrequest')} onViewAll={() => setCurrentScreen('matchlist')} darkMode={darkMode} />
            )}
            {currentScreen === 'matchlist' && (
              <MatchListScreen 
                key="matchlist" 
                onBack={() => setCurrentScreen('matches')} 
                onSelectMatch={() => setCurrentScreen('matchrequest')}
                darkMode={darkMode}
              />
            )}
            {currentScreen === 'matchrequest' && (
              <MatchRequestScreen key="matchrequest" onContinue={() => setCurrentScreen('confirmation')} darkMode={darkMode} />
            )}
            {currentScreen === 'confirmation' && (
              <MatchConfirmationScreen key="confirmation" darkMode={darkMode} />
            )}
            {currentScreen === 'navigation' && (
              <LiveNavigationScreen key="navigation" onProximity={() => setCurrentScreen('proximity')} darkMode={darkMode} />
            )}
            {currentScreen === 'proximity' && (
              <ProximityHeartbeatScreen key="proximity" darkMode={darkMode} />
            )}
            {currentScreen === 'meet' && (
              <MeetMomentScreen key="meet" onNext={() => setCurrentScreen('ending')} darkMode={darkMode} />
            )}
            {currentScreen === 'ending' && (
              <EndingScreen key="ending" onRestart={() => setCurrentScreen('matches')} darkMode={darkMode} />
            )}
          </AnimatePresence>
        </div>

        {/* Home Indicator */}
        <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full ${
          darkMode ? 'bg-[#2A2A2D]' : 'bg-gray-900'
        }`}></div>
      </div>
    </div>
  );
}