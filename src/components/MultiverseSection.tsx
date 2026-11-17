import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Shield, Sparkles, Navigation, Layers, Compass, Calendar } from 'lucide-react';
import type { TimelineYear } from '../data/content';
import { audioEngine } from '../utils/audioEngine';

interface MultiverseSectionProps {
  timeline: TimelineYear[];
}

export const MultiverseSection: React.FC<MultiverseSectionProps> = ({ timeline }) => {
  const [activeYearIndex, setActiveYearIndex] = useState(0);
  const activeYear = timeline[activeYearIndex];

  const handleSelectYear = (index: number) => {
    audioEngine.playPortalHum();
    setActiveYearIndex(index);
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Radio':
        return <Radio className="w-5 h-5" />;
      case 'Shield':
        return <Shield className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="multiverse"
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center bg-[#080808] overflow-hidden"
    >
      {/* Dynamic Cosmic Background Nebulae */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none transition-colors duration-1000 -top-20 -left-20 opacity-20"
        style={{ backgroundColor: activeYear.themeColor }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-colors duration-1000 -bottom-20 -right-20 opacity-20"
        style={{ backgroundColor: activeYear.themeColor }}
      />

      {/* Section Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/40 border border-red-500/40 text-red-400 font-hud text-xs tracking-[0.25em] mb-4 shadow-[0_0_15px_rgba(230,36,41,0.3)]"
        >
          <Layers className="w-3.5 h-3.5 text-red-400" />
          <span>QUANTUM CHRONOLOGY // THE 3-YEAR SQUAD RECORD</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-marvel text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-wider uppercase drop-shadow-[0_4px_25px_rgba(230,36,41,0.4)]"
        >
          THE THREE-YEAR MULTIVERSE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 font-hud text-xs sm:text-sm text-gray-400 tracking-widest uppercase"
        >
          36 MONTHS // 1,095 DAYS // COUNTLESS DEBATES // ZERO REGRETS
        </motion.p>
      </div>

      {/* Timeline Year Selectors */}
      <div className="relative z-10 max-w-4xl w-full mx-auto mb-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {timeline.map((item, idx) => {
          const isActive = idx === activeYearIndex;
          return (
            <button
              key={item.id}
              onClick={() => handleSelectYear(idx)}
              className={`relative px-6 py-3.5 rounded-xl font-hud text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2.5 border ${
                isActive
                  ? 'text-white border-white shadow-lg scale-105'
                  : 'text-gray-400 bg-neutral-900/60 border-white/10 hover:border-white/30 hover:text-white'
              }`}
              style={{
                backgroundColor: isActive ? `${item.themeColor}30` : undefined,
                borderColor: isActive ? item.themeColor : undefined,
                boxShadow: isActive ? `0 0 25px ${item.themeColor}50` : undefined,
              }}
            >
              <span style={{ color: item.themeColor }}>{getIcon(item.iconName)}</span>
              <span className="font-bold">{item.yearNumber}</span>
              <span className="hidden sm:inline opacity-75 font-normal">• {item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Multiverse Portal Stage */}
      <div className="relative z-10 max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Swirling Doctor Strange Sling Ring Portal Ring */}
        <div className="lg:col-span-5 flex items-center justify-center p-4">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
            {/* Outer Spun Sparks */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-4 border-dashed shadow-[0_0_40px]"
              style={{
                borderColor: activeYear.themeColor,
                boxShadow: `0 0 45px ${activeYear.themeColor}`,
              }}
            />

            {/* Inner Counter-Rotating Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              className="absolute inset-4 rounded-full border-2 border-dotted border-white/50"
            />

            {/* Glowing Core Portal */}
            <div
              className="w-44 h-44 sm:w-56 sm:h-56 rounded-full flex flex-col items-center justify-center p-6 text-center shadow-inner relative overflow-hidden backdrop-blur-md"
              style={{
                background: `radial-gradient(circle, ${activeYear.themeColor}40 0%, rgba(0,0,0,0.85) 75%)`,
                border: `1px solid ${activeYear.themeColor}80`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent animate-portal-sparks" />

              <motion.div
                key={activeYear.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 flex flex-col items-center"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-lg"
                  style={{
                    backgroundColor: activeYear.themeColor,
                  }}
                >
                  {getIcon(activeYear.iconName)}
                </div>
                <span className="font-hud text-base font-extrabold text-white tracking-widest uppercase">
                  {activeYear.yearNumber}
                </span>
                <span className="font-hud text-[9px] text-gray-300 mt-1 uppercase tracking-wider">
                  {activeYear.status}
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right: Year Narrative & Highlights Card */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl glass-panel p-6 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl"
              style={{
                borderColor: `${activeYear.themeColor}40`,
                boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.8), inset 0 0 25px ${activeYear.themeColor}10`,
              }}
            >
              {/* Corner tech notch */}
              <div
                className="absolute top-0 right-0 px-4 py-1 rounded-bl-xl font-hud text-[10px] text-white font-bold tracking-widest uppercase"
                style={{ backgroundColor: activeYear.themeColor }}
              >
                {activeYear.status}
              </div>

              {/* Coordinates */}
              <div className="flex items-center gap-2 mb-2">
                <Compass className="w-3.5 h-3.5" style={{ color: activeYear.themeColor }} />
                <span className="font-hud text-[10px] text-gray-400 tracking-wider">
                  {activeYear.timelineCode}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-marvel text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                {activeYear.title}
              </h3>
              <p
                className="mt-2 font-marvel text-sm sm:text-lg italic font-semibold"
                style={{ color: activeYear.themeColor }}
              >
                "{activeYear.tagline}"
              </p>

              {/* Narrative Story */}
              <p className="mt-4 font-sans text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                {activeYear.narrative}
              </p>

              {/* Highlights List */}
              <div className="mt-6 pt-6 border-t border-white/10 space-y-2.5">
                <span className="font-hud text-xs text-gray-400 tracking-wider uppercase block">
                  KEY CHRONICLE MILESTONES:
                </span>
                <ul className="space-y-2">
                  {activeYear.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                      <Navigation
                        className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                        style={{ color: activeYear.themeColor }}
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline Indicator Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-hud text-gray-400">
                <span>MUTUAL RESPECT: 100% UNCONDITIONAL</span>
                <span className="text-white font-semibold">ALLIANCE: CANON TIMELINE</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
