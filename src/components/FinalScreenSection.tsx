import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, RotateCcw, PartyPopper, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { audioEngine } from '../utils/audioEngine';

interface FinalScreenSectionProps {
  threeYearsText: string;
  memoriesText: string;
  birthdayWish: string;
  phaseText: string;
  friendName: string;
  onReplay: () => void;
}

export const FinalScreenSection: React.FC<FinalScreenSectionProps> = ({
  threeYearsText,
  memoriesText,
  birthdayWish,
  phaseText,
  friendName,
  onReplay,
}) => {
  const triggerConfetti = () => {
    audioEngine.playStoneSound(2);
    confetti({
      particleCount: 110,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#E62429', '#D4AF37', '#FFFFFF', '#00A8FF', '#10B981'],
    });
  };

  return (
    <section
      id="final"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center bg-[#080808] overflow-hidden text-center"
    >
      {/* Background Cinematic Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-950/30 via-[#0a0a0e] to-[#080808] pointer-events-none" />

      {/* Floating Nebula Light Orbs */}
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[140px] bg-red-600/15 pointer-events-none -top-10 -left-10 animate-pulse" />
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[140px] bg-amber-500/15 pointer-events-none -bottom-10 -right-10 animate-pulse" style={{ animationDelay: '3s' }} />

      {/* Main Narrative Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-8">
        {/* Shield Crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-red-500/60 bg-gradient-to-br from-neutral-900 to-black flex items-center justify-center shadow-[0_0_40px_rgba(230,36,41,0.6)]"
        >
          <Award className="w-10 h-10 sm:w-12 sm:h-12 text-[#D4AF37] animate-pulse drop-shadow-[0_0_15px_#D4AF37]" />
        </motion.div>

        {/* 3 Years Down, Many More to Go */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-3"
        >
          <p className="font-hud text-xs sm:text-sm tracking-[0.3em] text-gray-400 uppercase">
            {threeYearsText}
          </p>
          <h2 className="font-marvel text-3xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-300 to-red-500 uppercase tracking-wider text-glow-red">
            {memoriesText}
          </h2>
        </motion.div>

        {/* Birthday Wish Climax */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="pt-4 space-y-4"
        >
          <h1 className="font-marvel text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wide">
            {birthdayWish}
          </h1>
          <p className="font-sans text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            "Until our first photo together — thank you for being the most patient, caring, and legendary best friend in this entire multiverse."
          </p>
        </motion.div>

        {/* Marvel Post-Credits Stinger Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="px-6 py-3 rounded-full bg-black/60 border border-red-500/40 text-xs sm:text-sm font-hud text-amber-300 tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{phaseText}</span>
        </motion.div>

        {/* Action Buttons: Replay & Celebrate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="pt-6 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onReplay}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-gray-200 hover:text-white border border-white/20 font-hud text-xs tracking-wider uppercase transition-all active:scale-95 shadow-md"
          >
            <RotateCcw className="w-4 h-4 text-red-400" />
            <span>REPLAY MULTIVERSE INTRO</span>
          </button>

          <button
            onClick={triggerConfetti}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-hud text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(230,36,41,0.5)] active:scale-95"
          >
            <PartyPopper className="w-4 h-4 text-amber-300" />
            <span>SHOWER WITH SQUAD CONFETTI</span>
          </button>
        </motion.div>
      </div>

      {/* Footer Signature */}
      <div className="mt-20 pt-8 border-t border-white/10 w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] font-hud text-gray-400 gap-4">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-red-500" />
          <span>THE MULTIVERSE OF FRIENDSHIP © 3 YEARS AND COUNTING</span>
        </div>
        <div className="text-center sm:text-right">
          <span>SPECIALLY CRAFTED FOR {friendName.toUpperCase()} —  my best frd</span>
        </div>
      </div>
    </section>
  );
};
