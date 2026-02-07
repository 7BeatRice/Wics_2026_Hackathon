import React, { useState } from 'react';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { SpotifyLoginScreen } from './screens/SpotifyLoginScreen';
import { LocationPermissionScreen } from './screens/LocationPermissionScreen';
import { PreferenceScreen } from './screens/PreferenceScreen';
import { AnalysisScreen } from './screens/AnalysisScreen';
import { MatchCardScreen } from './screens/MatchCardScreen';
import { CompassScreen } from './screens/CompassScreen';
import { ProximityScreen } from './screens/ProximityScreen';
import { MeetMomentScreen } from './screens/MeetMomentScreen';
import { IcebreakerScreen } from './screens/IcebreakerScreen';
import { FlowArrow } from './FlowArrow';

export function WireflowCanvas() {
  const [selectedScreen, setSelectedScreen] = useState<string | null>(null);

  return (
    <div className="w-full min-h-screen p-8 overflow-x-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">ACL Festival Match App</h1>
        <p className="text-lg text-gray-600">Bumble-inspired Wireflow & Sequence</p>
        <div className="mt-4 flex gap-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
            <span className="text-sm text-gray-600">Primary Action</span>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <div className="w-4 h-4 rounded-2xl bg-white border-2 border-gray-300"></div>
            <span className="text-sm text-gray-600">Rounded Cards</span>
          </div>
        </div>
      </div>

      <div className="relative" style={{ width: '3200px', minHeight: '2400px' }}>
        {/* Row 1: Onboarding & Permissions */}
        <div className="absolute" style={{ left: '0px', top: '0px' }}>
          <div className="mb-2 text-sm font-semibold text-gray-700 uppercase tracking-wide">
            1. Onboarding & Permissions
          </div>
          <WelcomeScreen isSelected={selectedScreen === 'welcome'} onClick={() => setSelectedScreen('welcome')} />
        </div>

        <FlowArrow 
          fromX={350}
          fromY={350}
          toX={450}
          toY={350}
          label="TAP: Get Started"
        />

        <div className="absolute" style={{ left: '450px', top: '0px' }}>
          <SpotifyLoginScreen isSelected={selectedScreen === 'spotify'} onClick={() => setSelectedScreen('spotify')} />
        </div>

        <FlowArrow 
          fromX={800}
          fromY={350}
          toX={900}
          toY={350}
          label="TAP: Connect Spotify"
        />

        <div className="absolute" style={{ left: '900px', top: '0px' }}>
          <LocationPermissionScreen isSelected={selectedScreen === 'location'} onClick={() => setSelectedScreen('location')} />
        </div>

        <FlowArrow 
          fromX={1250}
          fromY={350}
          toX={1350}
          toY={350}
          label="TAP: Allow"
        />

        <div className="absolute" style={{ left: '1350px', top: '0px' }}>
          <PreferenceScreen isSelected={selectedScreen === 'preference'} onClick={() => setSelectedScreen('preference')} />
        </div>

        {/* Row 2: Analysis & Matching */}
        <FlowArrow 
          fromX={1525}
          fromY={700}
          toX={1525}
          toY={800}
          label="TAP: Continue"
          vertical
        />

        <div className="absolute" style={{ left: '1350px', top: '800px' }}>
          <div className="mb-2 text-sm font-semibold text-gray-700 uppercase tracking-wide">
            2. Music Taste Analysis
          </div>
          <AnalysisScreen isSelected={selectedScreen === 'analysis'} onClick={() => setSelectedScreen('analysis')} />
        </div>

        <FlowArrow 
          fromX={1175}
          fromY={1150}
          toX={1075}
          toY={1150}
          label="AUTO: Complete"
          reverse
        />

        <div className="absolute" style={{ left: '900px', top: '800px' }}>
          <div className="mb-2 text-sm font-semibold text-gray-700 uppercase tracking-wide">
            3. Match Discovery
          </div>
          <MatchCardScreen isSelected={selectedScreen === 'match'} onClick={() => setSelectedScreen('match')} />
        </div>

        {/* Row 3: Compass & Finding */}
        <FlowArrow 
          fromX={1075}
          fromY={1500}
          toX={1075}
          toY={1600}
          label="TAP: Find at Festival"
          vertical
        />

        <div className="absolute" style={{ left: '900px', top: '1600px' }}>
          <div className="mb-2 text-sm font-semibold text-gray-700 uppercase tracking-wide">
            4. Compass / Direction
          </div>
          <CompassScreen isSelected={selectedScreen === 'compass'} onClick={() => setSelectedScreen('compass')} />
        </div>

        <FlowArrow 
          fromX={750}
          fromY={1950}
          toX={650}
          toY={1950}
          label="AUTO: Proximity Detected"
          reverse
        />

        <div className="absolute" style={{ left: '450px', top: '1600px' }}>
          <div className="mb-2 text-sm font-semibold text-gray-700 uppercase tracking-wide">
            5. Proximity Feedback
          </div>
          <ProximityScreen isSelected={selectedScreen === 'proximity'} onClick={() => setSelectedScreen('proximity')} />
        </div>

        <FlowArrow 
          fromX={625}
          fromY={2250}
          toX={625}
          toY={2350}
          label="AUTO: Both Arrived"
          vertical
        />

        {/* Row 4: Meet & Connect */}
        <div className="absolute" style={{ left: '450px', top: '2350px' }}>
          <div className="mb-2 text-sm font-semibold text-gray-700 uppercase tracking-wide">
            6. Meet Moment
          </div>
          <MeetMomentScreen isSelected={selectedScreen === 'meet'} onClick={() => setSelectedScreen('meet')} />
        </div>

        <FlowArrow 
          fromX={275}
          fromY={2700}
          toX={175}
          toY={2700}
          label="TAP: Continue"
          reverse
        />

        <div className="absolute" style={{ left: '0px', top: '2350px' }}>
          <div className="mb-2 text-sm font-semibold text-gray-700 uppercase tracking-wide">
            7. Post-Meet Icebreaker
          </div>
          <IcebreakerScreen isSelected={selectedScreen === 'icebreaker'} onClick={() => setSelectedScreen('icebreaker')} />
        </div>
      </div>
    </div>
  );
}
