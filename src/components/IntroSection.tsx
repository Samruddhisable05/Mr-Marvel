import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowDown, ChevronRight, Shield, HeartHandshake } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface IntroSectionProps {
  onEnter: () => void;
  friendName: string;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onEnter, friendName }) => {
  // Step 0: Dark initialization
  // Step 1: "MARVEL STUDIOS PRESENTS" (comic panel flip animation)
  // Step 2: "THREE YEARS. COUNTLESS ARGUMENTS..." dramatic text
  // Step 3: Grand reveal "HAPPY BIRTHDAY TO MY FAVOURITE HUMAN!"
  const [step, setStep] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  useEffect(() => {
    const timer0 = setTimeout(() => {
      setHasStarted(true);
      setStep(1);
      audioEngine.playHudBeep(440);
    }, 800);

    const timer1 = setTimeout(() => {
      setStep(2);
      audioEngine.playHudBeep(660);
    }, 4200);

    const timer2 = setTimeout(() => {
      setStep(3);
      audioEngine.playFanfare();
    }, 9500);

    return () => {
      clearTimeout(timer0);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleEnterClick = () => {
    audioEngine.playStoneSound(0);
    onEnter();
  };

  const handleSkipOrFastForward = () => {
    audioEngine.playClickSound();
    setStep(3);
  };

  return (
    <section
      id="intro"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#080808] overflow-hidden px-4 text-center select-none"
    >
      {/* Background cinematic vignette and glowing quantum nebulae */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-black to-[#080808] pointer-events-none" />

      {/* Subtle Grid Lines like an Avengers Targeting HUD */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#e62429_1px,transparent_1px),linear-gradient(to_bottom,#e62429_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Floating subtle ambient particles */}
      <div className="absolute w-96 h-96 rounded-full bg-red-600/10 blur-[120px] pointer-events-none -top-20 -left-20 animate-pulse" />
      <div className="absolute w-96 h-96 rounded-full bg-amber-500/10 blur-[130px] pointer-events-none -bottom-20 -right-20 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Fast forward button in top right */}
      {step < 3 && hasStarted && (
        <button
          onClick={handleSkipOrFastForward}
          className="absolute top-20 right-6 text-[10px] font-hud text-gray-400 hover:text-white uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 hover:border-red-500/50 bg-black/40 backdrop-blur-sm transition-all z-20 flex items-center gap-1.5"
        >
          <span>FAST FORWARD</span>
          <ChevronRight className="w-3 h-3" />
        </button>
      )}

      {/* Main Narrative Animations */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[60vh]">
        <AnimatePresence mode="wait">
          {/* STEP 1: MARVEL STUDIOS PRESENTS */}
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center"
            >
              {/* Marvel Classic Flip Logo Card */}
              <div className="relative px-6 py-3 bg-[#E62429] text-white border-2 border-white shadow-[0_0_50px_rgba(230,36,41,0.8)] overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
                <h2 className="font-marvel text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-white transform scale-y-110">
                  MARVEL STUDIOS
                </h2>
              </div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-4 font-hud text-xs sm:text-sm tracking-[0.4em] text-gray-300 uppercase"
              >
                PRESENTS
              </motion.span>
            </motion.div>
          )}

          {/* STEP 2: FRIENDSHIP INTRO QUOTES */}
          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
              transition={{ duration: 1.2 }}
              className="space-y-5 sm:space-y-6"
            >
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.9 }}
                className="font-marvel text-xl sm:text-3xl md:text-4xl text-gray-300 tracking-wider font-light"
              >
                THREE YEARS.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.9 }}
                className="font-marvel text-xl sm:text-3xl md:text-4xl text-gray-200 tracking-wider font-normal"
              >
                COUNTLESS ARGUMENTS.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.9 }}
                className="font-marvel text-xl sm:text-3xl md:text-4xl text-amber-300 tracking-wider font-semibold"
              >
                ENDLESS EXPLANATIONS.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.6, duration: 1.1 }}
                className="font-marvel text-2xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-300 to-red-500 font-extrabold tracking-widest text-glow-red"
              >
                ONE UNBREAKABLE FRIENDSHIP.
              </motion.p>
            </motion.div>
          )}

          {/* STEP 3: GRAND REVEAL: HAPPY BIRTHDAY Mr Marvel */}
          {step >= 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="flex flex-col items-center space-y-7 py-4"
            >
              {/* Avengers Squad Crest */}
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 1.2, type: 'spring' }}
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-red-500/80 bg-gradient-to-br from-neutral-900 to-black flex items-center justify-center shadow-[0_0_35px_rgba(230,36,41,0.6)]"
              >
                <div className="absolute inset-1 rounded-full border border-amber-400/30 animate-spin" style={{ animationDuration: '20s' }} />
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-[#E62429] drop-shadow-[0_0_15px_rgba(230,36,41,0.8)]" />
              </motion.div>

              {/* Tagline Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex items-center gap-2"
              >
                <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-red-500" />
                <span className="font-hud text-xs sm:text-sm tracking-[0.3em] text-red-400 font-semibold uppercase">
                  FOR {friendName.toUpperCase()} // SPECIAL BIRTHDAY DOSSIER
                </span>
                <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-red-500" />
              </motion.div>

              {/* Climax Birthday Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="space-y-3"
              >
                <h1 className="font-marvel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase drop-shadow-[0_4px_30px_rgba(230,36,41,0.6)] leading-tight">
                  HAPPY BIRTHDAY,{' '}
                  <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E62429] via-[#D4AF37] to-[#E62429] drop-shadow-[0_0_40px_rgba(212,175,55,0.8)]">
                    MR. MARVEL!
                  </span>
                </h1>
                {/* Avengers-style glowing underline accent */}
                <div className="flex items-center justify-center gap-3 pt-1">
                  <span className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-[#E62429]" />
                  <span className="font-hud text-[10px] sm:text-xs tracking-[0.4em] text-[#D4AF37] uppercase animate-pulse">
                    ★ AVENGERS BIRTHDAY PROTOCOL INITIATED ★
                  </span>
                  <span className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-[#E62429]" />
                </div>
                <p className="font-sans text-sm sm:text-lg text-amber-200/90 max-w-2xl mx-auto font-medium italic pt-2">
                  "Some superheroes save the world. Some just make sure you take your medicines."
                </p>
                <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-light">
                  Celebrating 3 years of patience, Google doctor advice, peace negotiations, and endless care.
                </p>
              </motion.div>

              {/* Enter The Multiverse Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="pt-4"
              >
                <button
                  onClick={handleEnterClick}
                  className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-hud font-bold text-sm sm:text-base tracking-[0.2em] text-white uppercase overflow-hidden border border-red-500/50 shadow-[0_0_35px_rgba(230,36,41,0.4)] hover:shadow-[0_0_50px_rgba(230,36,41,0.8)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-800 to-black group-hover:from-red-500 group-hover:via-red-700 group-hover:to-red-950 transition-all duration-300" />
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.4)_0%,transparent_70%)] transition-opacity duration-300" />
                  
                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-3 text-white">
                    <Sparkles className="w-5 h-5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
                    <span>ENTER THE MULTIVERSE</span>
                    <ArrowDown className="w-5 h-5 text-red-300 group-hover:translate-y-1 transition-transform" />
                  </span>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom HUD metadata indicators */}
      <div className="absolute bottom-6 left-0 w-full px-6 flex justify-between items-end text-[10px] font-hud text-gray-400 select-none pointer-events-none">
        <div className="flex items-center gap-2">
          <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
          <span>FRIENDSHIP LEVEL: MAXIMUM & UNBREAKABLE</span>
        </div>
        <div className="text-right hidden sm:block">
          <span>YEAR 3 // TIMELINE: MULTIVERSE OF FRIENDSHIP</span>
        </div>
      </div>
    </section>
  );
};
