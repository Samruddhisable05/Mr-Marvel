import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, Shield, Award, Edit3 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { audioEngine } from '../utils/audioEngine';

interface BirthdayLetterData {
  salutation: string;
  paragraphs: string[];
  closingFormula: string;
  signature: string;
  finalQuote: string;
}

interface BirthdaySurpriseSectionProps {
  letterData: BirthdayLetterData;
  onOpenCustomizer: () => void;
}

export const BirthdaySurpriseSection: React.FC<BirthdaySurpriseSectionProps> = ({
  letterData,
  onOpenCustomizer,
}) => {
  const [missionUnlocked, setMissionUnlocked] = useState(false);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  const handleUnlockMission = () => {
    audioEngine.playStoneSound(5);
    setMissionUnlocked(true);
  };

  const handleOpenEnvelope = () => {
    audioEngine.playEnvelopeOpen();
    setEnvelopeOpen(true);

    try {
      confetti({
        particleCount: 90,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#E62429', '#D4AF37', '#FFFFFF', '#00A8FF', '#10B981'],
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#E62429', '#D4AF37'],
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#E62429', '#D4AF37'],
        });
      }, 400);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="mission"
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center bg-[#080808] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-950/25 via-black to-[#080808] pointer-events-none" />

      {/* Top Section Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/50 border border-red-500/50 text-red-400 font-hud text-xs tracking-[0.25em] mb-4 shadow-[0_0_15px_rgba(230,36,41,0.4)]"
        >
          <Award className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>CLASSIFIED PROTOCOL // LEVEL 10 SQUAD DIRECTIVE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-marvel text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-wider uppercase drop-shadow-[0_4px_25px_rgba(230,36,41,0.5)]"
        >
          FINAL AVENGERS MISSION UNLOCKED.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 font-hud text-xs sm:text-sm text-gray-400 tracking-widest uppercase"
        >
          CONFIDENTIAL BEST FRIEND TRANSMISSION // 3 YEARS IN THE MAKING
        </motion.p>
      </div>

      {/* STAGE 1: Mission Locked / Trigger Button */}
      {!missionUnlocked ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center my-8 text-center"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-red-950/40 border-2 border-red-500/50 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(230,36,41,0.5)] animate-pulse">
            <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-[#E62429]" />
          </div>

          <button
            onClick={handleUnlockMission}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-hud font-bold text-sm sm:text-base tracking-[0.2em] text-white uppercase overflow-hidden border border-red-500 shadow-[0_0_35px_rgba(230,36,41,0.5)] hover:shadow-[0_0_60px_rgba(230,36,41,0.9)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-rose-700 to-red-900 group-hover:from-red-500 group-hover:via-rose-600 group-hover:to-red-800 transition-all duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
              <span>ONE LAST THING...</span>
            </span>
          </button>
        </motion.div>
      ) : (
        /* STAGE 2 & 3: The Animated Envelope & Friendship Letter */
        <div className="relative z-10 max-w-3xl w-full mx-auto flex flex-col items-center">
          {!envelopeOpen ? (
            /* Closed Envelope with Avengers Wax Seal */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              onClick={handleOpenEnvelope}
              className="cursor-pointer group relative w-full max-w-md h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border-2 border-red-500/50 p-6 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(230,36,41,0.4)] hover:shadow-[0_0_60px_rgba(230,36,41,0.8)] transition-all transform hover:-translate-y-1"
            >
              <div className="absolute inset-x-0 top-0 h-1/2 border-b-2 border-dashed border-red-500/30" />
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[140px] sm:border-l-[180px] border-l-transparent border-r-[140px] sm:border-r-[180px] border-r-transparent border-t-[80px] sm:border-t-[100px] border-t-red-950/80 pointer-events-none" />

              {/* Avengers Shield Wax Seal */}
              <div className="relative z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#E62429] to-red-900 border-2 border-amber-400 flex items-center justify-center shadow-[0_0_25px_rgba(230,36,41,0.9)] group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-amber-300 fill-amber-300/30 animate-pulse" />
              </div>

              <span className="relative z-20 font-hud text-xs sm:text-sm font-bold tracking-[0.2em] text-white mt-6 uppercase group-hover:text-amber-300 transition-colors">
                CLICK TO BREAK SEAL & OPEN LETTER
              </span>
              <span className="font-hud text-[10px] text-gray-400 mt-1 uppercase tracking-wider">
                TOP SECRET // FOR HIS EYES ONLY
              </span>
            </motion.div>
          ) : (
            /* Open Letter Display */
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative w-full rounded-2xl glass-panel p-6 sm:p-12 border border-red-500/40 shadow-[0_0_50px_rgba(230,36,41,0.3)] space-y-8"
            >
              {/* Quick Edit button for her */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                  <span className="font-hud text-[11px] text-red-400 tracking-widest uppercase">
                    TRANSMISSION DECRYPTED // OFFICIAL BEST FRIEND LETTER
                  </span>
                </div>
                <button
                  onClick={onOpenCustomizer}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 font-hud text-xs text-amber-300 transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>EDIT LETTER</span>
                </button>
              </div>

              {/* Letter Heading */}
              <div>
                <h3 className="font-marvel text-2xl sm:text-4xl font-black text-white tracking-wider uppercase text-glow-red flex items-center gap-2">
                  <span>{letterData.salutation}</span>
                </h3>
              </div>

              {/* Letter Paragraphs */}
              <div className="space-y-4 font-letter text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
                {letterData.paragraphs.map((para, i) => (
                  <p key={i} className="first-letter:text-2xl first-letter:font-marvel first-letter:text-red-400">
                    {para}
                  </p>
                ))}
              </div>

              {/* Letter Sign-off */}
              <div className="pt-6 border-t border-white/10 flex flex-col space-y-2">
                <p className="font-sans text-sm sm:text-base text-amber-300 font-semibold italic">
                  "{letterData.closingFormula}"
                </p>
                <div className="text-right">
                  <span className="font-marvel text-base sm:text-lg font-bold text-white block mt-2">
                    — {letterData.signature}
                  </span>
                </div>
              </div>

              {/* Final Iconic Friendship Quote */}
              <div className="mt-8 pt-8 border-t-2 border-red-500/30 text-center">
                <p className="font-marvel text-xl sm:text-3xl md:text-4xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-300 to-red-500 uppercase drop-shadow-[0_0_25px_rgba(212,175,55,0.7)] leading-snug">
                  "{letterData.finalQuote}"
                </p>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </section>
  );
};
