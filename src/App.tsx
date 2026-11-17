import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { defaultFriendshipContent } from './data/content';
import type { FriendshipContent, SuperheroProfile } from './data/content';
import { audioEngine } from './utils/audioEngine';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { MarvelLoader } from './components/MarvelLoader';
import { IntroSection } from './components/IntroSection';
import { AvengersHUD } from './components/AvengersHUD';
import { InfinityStonesSection } from './components/InfinityStonesSection';
import { MultiverseSection } from './components/MultiverseSection';

import { BirthdaySurpriseSection } from './components/BirthdaySurpriseSection';
import { FinalScreenSection } from './components/FinalScreenSection';
import { CustomizerModal } from './components/CustomizerModal';

const STORAGE_KEY = 'MULTIVERSE_OF_FRIENDSHIP_CONTENT_V2';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [visitedStones, setVisitedStones] = useState<Set<string>>(new Set());

  // Load content from localStorage or default friendship content
  const [content, setContent] = useState<FriendshipContent>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.profile && parsed.medicalReport) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return defaultFriendshipContent;
  });

  const handleUpdateProfile = (updated: Partial<SuperheroProfile>) => {
    setContent((prev) => {
      const next = {
        ...prev,
        profile: { ...prev.profile, ...updated },
        friendName: updated.name || prev.friendName,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const handleSaveAllContent = (newContent: FriendshipContent) => {
    setContent(newContent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
  };

  const handleResetContent = () => {
    localStorage.removeItem(STORAGE_KEY);
    setContent(defaultFriendshipContent);
  };

  const handleStoneVisited = (stoneId: string) => {
    setVisitedStones((prev) => new Set(prev).add(stoneId));
  };

  const handleEnterUniverse = () => {
    if (!isPlayingMusic) {
      audioEngine.startMusic();
      setIsPlayingMusic(true);
    }
    const classifiedEl = document.getElementById('classified');
    if (classifiedEl) {
      classifiedEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplay = () => {
    audioEngine.playStoneSound(0);
    const introEl = document.getElementById('intro');
    if (introEl) {
      introEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-white selection:bg-[#E62429] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Marvel Comic Loader Screen */}
      <AnimatePresence>
        {isLoading && <MarvelLoader onLoaded={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Cosmic Interactive Particle Background */}
      <ParticleBackground />

      {/* Futuristic Avengers Navigation Bar */}
      <Navbar
        isPlayingMusic={isPlayingMusic}
        setIsPlayingMusic={setIsPlayingMusic}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        collectedStonesCount={visitedStones.size}
      />

      {/* Main Experience Sections */}
      <main className="relative z-10 flex flex-col">
        {/* SECTION 1: Cinematic Intro */}
        <IntroSection
          onEnter={handleEnterUniverse}
          friendName={content.profile.name}
        />

        {/* SECTION 2: Classified Avengers File */}
        <AvengersHUD
          profile={content.profile}
          onUpdateProfile={handleUpdateProfile}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* SECTION 3: Six Infinity Stones */}
        <InfinityStonesSection
          stones={content.stones}
          visitedStones={visitedStones}
          onStoneClick={handleStoneVisited}
        />

        {/* SECTION 4: The Three-Year Multiverse */}
        <MultiverseSection timeline={content.timeline} />

        {/* SECTION 6: Final Birthday Surprise */}
        <BirthdaySurpriseSection
          letterData={content.birthdayLetter}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* SECTION 7: Final Screen */}
        <FinalScreenSection
          threeYearsText={content.finalScreen.threeYearsText}
          memoriesText={content.finalScreen.memoriesText}
          birthdayWish={content.finalScreen.birthdayWish}
          phaseText={content.finalScreen.phaseText}
          friendName={content.profile.name}
          onReplay={handleReplay}
        />
      </main>

      {/* Easy Customization Modal for User */}
      <CustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        content={content}
        onSave={handleSaveAllContent}
        onReset={handleResetContent}
      />
    </div>
  );
};

export default App;
