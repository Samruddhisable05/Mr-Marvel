import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Shield, Sliders, Menu, X, Sparkles } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface NavbarProps {
  isPlayingMusic: boolean;
  setIsPlayingMusic: (playing: boolean) => void;
  onOpenCustomizer: () => void;
  collectedStonesCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  isPlayingMusic,
  setIsPlayingMusic,
  onOpenCustomizer,
  collectedStonesCount,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMusic = () => {
    audioEngine.playClickSound();
    const playing = audioEngine.toggleMusic();
    setIsPlayingMusic(playing);
  };

  const handleToggleMute = () => {
    const muted = audioEngine.toggleMute();
    setIsMuted(muted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    audioEngine.setVolume(val);
    if (val === 0) setIsMuted(true);
    else if (isMuted) setIsMuted(false);
  };

  const scrollToSection = (id: string) => {
    audioEngine.playHudBeep(700);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[#080808]/85 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div
          onClick={() => scrollToSection('intro')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded bg-gradient-to-br from-[#E62429] to-red-900 flex items-center justify-center border border-red-400/40 shadow-[0_0_12px_rgba(230,36,41,0.5)] group-hover:scale-105 transition-transform">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-marvel font-bold text-sm sm:text-base tracking-widest text-white group-hover:text-red-400 transition-colors">
                THE MULTIVERSE OF FRIENDSHIP
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-hud bg-red-600/30 text-red-400 border border-red-500/40">
                3 YEARS
              </span>
            </div>
            <span className="text-[10px] font-hud text-gray-400 tracking-wider">
              AVENGERS INITIATIVE // SQUAD PROTOCOL
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-5 text-xs font-hud tracking-wider">
          <button
            onClick={() => scrollToSection('classified')}
            className="text-gray-300 hover:text-red-400 transition-colors relative group py-1"
          >
            HERO FILE
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
          </button>

          <button
            onClick={() => scrollToSection('stones')}
            className="text-gray-300 hover:text-amber-400 transition-colors relative group py-1 flex items-center gap-1.5"
          >
            <span>SIX STONES</span>
            <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-amber-500/20 text-amber-300 border border-amber-500/40">
              {collectedStonesCount}/6
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300" />
          </button>

          <button
            onClick={() => scrollToSection('multiverse')}
            className="text-gray-300 hover:text-sky-400 transition-colors relative group py-1"
          >
            3-YEAR TIMELINE
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300" />
          </button>

          <button
            onClick={() => scrollToSection('mission')}
            className="text-gray-300 hover:text-red-400 transition-colors relative group py-1 flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3 text-red-500 animate-pulse" />
            <span>FINAL MISSION</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
          </button>
        </div>

        {/* Right Action Controls: Audio Player & Customizer */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Customizer Modal Trigger */}
          <button
            onClick={() => {
              audioEngine.playHudBeep(920);
              onOpenCustomizer();
            }}
            title="Customize Name & Messages"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-amber-300 border border-white/10 hover:border-amber-400/40 transition-all text-xs flex items-center gap-1.5"
          >
            <Sliders className="w-4 h-4" />
            <span className="hidden lg:inline text-[11px] font-hud">EDIT DETAILS</span>
          </button>

          {/* Cinematic Audio Controls */}
          <div className="relative flex items-center bg-black/60 rounded-full border border-red-500/30 p-1 pl-2.5 pr-2 gap-2 shadow-[0_0_15px_rgba(230,36,41,0.2)]">
            {/* Animated Audio Equalizer Visualizer */}
            <div className="flex items-center gap-0.5 h-3">
              {[0.4, 0.9, 0.6, 0.8].map((scale, i) => (
                <span
                  key={i}
                  className={`w-0.5 rounded-full bg-red-500 transition-all duration-300 ${
                    isPlayingMusic && !isMuted ? 'animate-pulse' : 'h-1 opacity-40'
                  }`}
                  style={{
                    height: isPlayingMusic && !isMuted ? `${scale * 12}px` : '4px',
                    animationDelay: `${i * 150}ms`,
                  }}
                />
              ))}
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={handleToggleMusic}
              title={isPlayingMusic ? 'Pause Cinematic Music' : 'Play Cinematic Music'}
              className="p-1.5 rounded-full bg-red-600/20 hover:bg-red-600/40 text-red-400 hover:text-white transition-colors"
            >
              {isPlayingMusic ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            {/* Mute Button */}
            <button
              onClick={handleToggleMute}
              title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
              className="p-1.5 rounded-full text-gray-400 hover:text-white transition-colors"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>

            {/* Volume Popover Trigger */}
            <div
              className="relative hidden sm:block"
              onMouseEnter={() => setShowVolumeSlider(true)}
              onMouseLeave={() => setShowVolumeSlider(false)}
            >
              {showVolumeSlider && (
                <div className="absolute right-0 top-8 bg-neutral-900 border border-neutral-700 p-2 rounded-lg shadow-xl w-28 z-50 flex flex-col gap-1">
                  <span className="text-[9px] font-hud text-gray-400 text-center">VOLUME</span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 border-b border-neutral-800 px-6 py-4 flex flex-col space-y-3 font-hud text-xs tracking-wider">
          <button
            onClick={() => scrollToSection('classified')}
            className="text-left py-2 text-gray-300 hover:text-red-400 border-b border-neutral-800"
          >
            HERO DOSSIER
          </button>
          <button
            onClick={() => scrollToSection('stones')}
            className="text-left py-2 text-gray-300 hover:text-amber-400 border-b border-neutral-800 flex justify-between items-center"
          >
            <span>SIX INFINITY STONES</span>
            <span className="text-[10px] text-amber-400 font-bold">{collectedStonesCount}/6</span>
          </button>
          <button
            onClick={() => scrollToSection('multiverse')}
            className="text-left py-2 text-gray-300 hover:text-sky-400 border-b border-neutral-800"
          >
            3-YEAR TIMELINE
          </button>
          <button
            onClick={() => scrollToSection('mission')}
            className="text-left py-2 text-red-400 font-semibold"
          >
            FINAL BIRTHDAY MISSION
          </button>
        </div>
      )}
    </nav>
  );
};
