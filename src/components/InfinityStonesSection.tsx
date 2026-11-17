import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ChevronLeft, ChevronRight, Check, Shield } from 'lucide-react';
import type { InfinityStoneData } from '../data/content';
import { audioEngine } from '../utils/audioEngine';

interface InfinityStonesSectionProps {
  stones: InfinityStoneData[];
  visitedStones: Set<string>;
  onStoneClick: (stoneId: string) => void;
}

export const InfinityStonesSection: React.FC<InfinityStonesSectionProps> = ({
  stones,
  visitedStones,
  onStoneClick,
}) => {
  const [selectedStone, setSelectedStone] = useState<InfinityStoneData | null>(null);

  const handleOpenStone = (stone: InfinityStoneData, index: number) => {
    audioEngine.playStoneSound(index);
    setSelectedStone(stone);
    onStoneClick(stone.id);
  };

  const handleNextStone = () => {
    if (!selectedStone) return;
    const currentIndex = stones.findIndex((s) => s.id === selectedStone.id);
    const nextIndex = (currentIndex + 1) % stones.length;
    const nextStone = stones[nextIndex];
    audioEngine.playStoneSound(nextIndex);
    setSelectedStone(nextStone);
    onStoneClick(nextStone.id);
  };

  const handlePrevStone = () => {
    if (!selectedStone) return;
    const currentIndex = stones.findIndex((s) => s.id === selectedStone.id);
    const prevIndex = (currentIndex - 1 + stones.length) % stones.length;
    const prevStone = stones[prevIndex];
    audioEngine.playStoneSound(prevIndex);
    setSelectedStone(prevStone);
    onStoneClick(prevStone.id);
  };

  return (
    <section
      id="stones"
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center bg-[#080808] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-950/15 via-black to-[#080808] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/40 text-amber-300 font-hud text-xs tracking-[0.25em] mb-4 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
          <span>PRIMORDIAL COSMIC RELICS // THE GAUNTLET OF FRIENDSHIP</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-marvel text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-wider uppercase drop-shadow-[0_4px_25px_rgba(212,175,55,0.4)]"
        >
          THE SIX INFINITY STONES
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 font-sans text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Forged across three years of surviving arguments, Google doctor prescriptions, and late-night explanations. Click each stone to reveal its classified friendship log.
        </motion.p>

        {/* Gauntlet Sockets Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-8 inline-flex items-center gap-3 sm:gap-5 px-6 py-3 rounded-full bg-black/60 border border-white/10 backdrop-blur-md shadow-lg"
        >
          <span className="font-hud text-xs text-gray-400 tracking-wider">GAUNTLET POWER:</span>
          <div className="flex items-center gap-2">
            {stones.map((s) => {
              const isCollected = visitedStones.has(s.id);
              return (
                <div
                  key={s.id}
                  title={`${s.name} (${s.marvelStone})`}
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border flex items-center justify-center transition-all duration-500 ${
                    isCollected
                      ? 'border-white shadow-[0_0_12px] scale-110'
                      : 'border-white/20 bg-neutral-900/80 opacity-40'
                  }`}
                  style={{
                    backgroundColor: isCollected ? s.color : undefined,
                    boxShadow: isCollected ? `0 0 12px ${s.color}` : undefined,
                  }}
                >
                  {isCollected && <Check className="w-3 h-3 text-white drop-shadow" />}
                </div>
              );
            })}
          </div>
          <span className="font-hud text-xs font-bold text-amber-400">
            {visitedStones.size} / 6 DISCOVERED
          </span>
        </motion.div>
      </div>

      {/* Grid of 6 Infinity Stones */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {stones.map((stone, index) => {
          const isCollected = visitedStones.has(stone.id);
          return (
            <motion.div
              key={stone.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => handleOpenStone(stone, index)}
              className="group cursor-pointer relative rounded-2xl glass-panel p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 border border-white/10 hover:border-opacity-60 overflow-hidden"
              style={{
                borderColor: `${stone.color}40`,
              }}
            >
              {/* Subtle background flare matching stone */}
              <div
                className="absolute -top-16 -left-16 w-44 h-44 rounded-full blur-[70px] opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: stone.color }}
              />

              {/* Stone 3D Glowing Crystal Avatar */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center my-4">
                {/* Outer Energy Orbit */}
                <div
                  className="absolute inset-0 rounded-full border border-dashed opacity-40 animate-spin group-hover:opacity-80 transition-opacity"
                  style={{
                    borderColor: stone.color,
                    animationDuration: `${12 + index * 2}s`,
                  }}
                />

                {/* Faceted Crystal Shape */}
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                    rotate: [0, 4, 0, -4, 0],
                  }}
                  transition={{
                    duration: 4 + index * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative w-16 h-20 sm:w-20 sm:h-24 flex items-center justify-center"
                >
                  {/* SVG Multi-faceted Crystal */}
                  <svg
                    viewBox="0 0 100 120"
                    className="w-full h-full drop-shadow-[0_0_20px]"
                    style={{
                      filter: `drop-shadow(0 0 16px ${stone.glowColor})`,
                    }}
                  >
                    <polygon
                      points="50,5 90,30 90,90 50,115 10,90 10,30"
                      fill={stone.color}
                      fillOpacity="0.85"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                    <line x1="50" y1="5" x2="50" y2="115" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                    <line x1="50" y1="60" x2="90" y2="30" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                    <line x1="50" y1="60" x2="10" y2="30" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                    <line x1="50" y1="60" x2="90" y2="90" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                    <line x1="50" y1="60" x2="10" y2="90" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                    <circle cx="50" cy="60" r="4" fill="#FFFFFF" opacity="0.9" />
                  </svg>

                  <span
                    className="absolute w-6 h-6 rounded-full blur-sm opacity-80"
                    style={{ backgroundColor: stone.color }}
                  />
                </motion.div>
              </div>

              {/* Stone Name & Marvel Subtitle */}
              <div className="mt-2 space-y-1">
                <span
                  className="font-hud text-[10px] tracking-[0.25em] font-semibold uppercase block"
                  style={{ color: stone.color }}
                >
                  {stone.marvelStone}
                </span>
                <h3 className="font-marvel text-2xl font-bold text-white tracking-wider group-hover:text-amber-300 transition-colors">
                  {stone.name}
                </h3>
              </div>

              {/* Tagline */}
              <p className="mt-3 font-sans text-xs sm:text-sm text-gray-300 font-light leading-relaxed line-clamp-2">
                "{stone.tagline}"
              </p>

              {/* Card Footer Button Indicator */}
              <div className="mt-6 pt-4 border-t border-white/10 w-full flex items-center justify-between">
                <span className="font-hud text-[10px] text-gray-400 tracking-wider">
                  {isCollected ? 'STATUS: REVIEWED' : 'STATUS: UNOPENED'}
                </span>
                <span
                  className="font-hud text-xs font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  style={{ color: stone.color }}
                >
                  ACCESS LOG <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* INTERACTIVE MODAL WHEN A STONE IS CLICKED */}
      <AnimatePresence>
        {selectedStone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl"
            onClick={() => setSelectedStone(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-2xl glass-panel p-6 sm:p-10 border overflow-hidden shadow-2xl max-h-[90vh] flex flex-col justify-between"
              style={{
                borderColor: `${selectedStone.color}60`,
                boxShadow: `0 0 50px ${selectedStone.glowColor}`,
              }}
            >
              {/* Corner Tech Brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: selectedStone.color }} />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: selectedStone.color }} />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: selectedStone.color }} />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: selectedStone.color }} />

              {/* Close Button */}
              <button
                onClick={() => setSelectedStone(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Body */}
              <div className="overflow-y-auto pr-1 space-y-6">
                {/* Header Badge */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-lg"
                    style={{
                      backgroundColor: `${selectedStone.color}25`,
                      borderColor: selectedStone.color,
                      boxShadow: `0 0 20px ${selectedStone.glowColor}`,
                    }}
                  >
                    <span className="text-2xl">{selectedStone.symbol}</span>
                  </div>
                  <div>
                    <span
                      className="font-hud text-xs font-semibold tracking-[0.25em] uppercase block"
                      style={{ color: selectedStone.color }}
                    >
                      INFINITY STONE // {selectedStone.marvelStone}
                    </span>
                    <h3 className="font-marvel text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                      {selectedStone.name} — {selectedStone.details.title}
                    </h3>
                  </div>
                </div>

                {/* Sub-quote Tagline */}
                <div
                  className="p-4 rounded-xl border italic font-sans text-sm sm:text-base text-gray-200"
                  style={{
                    backgroundColor: `${selectedStone.color}15`,
                    borderColor: `${selectedStone.color}35`,
                  }}
                >
                  "{selectedStone.tagline}"
                </div>

                {/* Detailed Narrative */}
                <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                  {selectedStone.details.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-3">
                  <span className="font-hud text-xs text-gray-400 tracking-wider uppercase block">
                    CLASSIFIED INCIDENT REPORTS:
                  </span>
                  <ul className="space-y-2.5">
                    {selectedStone.details.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray-200">
                        <Shield className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: selectedStone.color }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cosmic Wisdom */}
                <div className="pt-4 border-t border-white/10 text-center">
                  <span className="font-hud text-[10px] text-gray-500 tracking-[0.2em] uppercase block mb-1">
                    CANON TRUTH
                  </span>
                  <p
                    className="font-marvel text-base sm:text-lg font-bold"
                    style={{ color: selectedStone.color }}
                  >
                    "{selectedStone.details.cosmicWisdom}"
                  </p>
                </div>
              </div>

              {/* Modal Navigation Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={handlePrevStone}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-xs font-hud text-gray-300 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>PREVIOUS STONE</span>
                </button>

                <button
                  onClick={handleNextStone}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-hud text-white font-semibold transition-all shadow-md"
                  style={{
                    backgroundColor: selectedStone.color,
                    boxShadow: `0 0 15px ${selectedStone.glowColor}`,
                  }}
                >
                  <span>NEXT STONE</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
