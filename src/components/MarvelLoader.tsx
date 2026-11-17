import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

interface MarvelLoaderProps {
  onLoaded: () => void;
}

export const MarvelLoader: React.FC<MarvelLoaderProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const comicWords = [
    'CONNECTING QUANTUM SERVERS...',
    'SYNCHRONIZING EARTH-616...',
    'CALIBRATING TESSERACT...',
    'LOADING MULTIVERSE ARCHIVES...',
    'READY FOR HIS ARRIVAL...',
  ];

  const currentWordIndex = Math.min(
    comicWords.length - 1,
    Math.floor((progress / 100) * comicWords.length)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoaded, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 35);

    return () => clearInterval(timer);
  }, [onLoaded]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808] px-4 select-none"
    >
      {/* Background Star Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/40 via-black to-[#080808]" />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center space-y-6">
        {/* Marvel Studio Box Logo Treatment */}
        <div className="relative px-6 py-2.5 bg-[#E62429] text-white border-2 border-white shadow-[0_0_35px_rgba(230,36,41,0.8)] overflow-hidden">
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
          />
          <span className="font-marvel text-2xl sm:text-3xl font-black tracking-tighter uppercase transform scale-y-110 block">
            MARVEL STUDIOS
          </span>
        </div>

        {/* Pulsing Quantum Crest */}
        <div className="relative w-16 h-16 rounded-full border-2 border-red-500/60 flex items-center justify-center shadow-[0_0_25px_rgba(230,36,41,0.6)]">
          <div className="absolute inset-1 rounded-full border border-dashed border-amber-400/40 animate-spin" />
          <Shield className="w-8 h-8 text-[#E62429] animate-pulse" />
        </div>

        {/* Status Line */}
        <div className="space-y-1 w-full">
          <span className="font-hud text-xs text-amber-300 tracking-[0.25em] uppercase block">
            {comicWords[currentWordIndex]}
          </span>
          <span className="font-hud text-[10px] text-gray-500 tracking-widest block">
            TIMELINE ARCHIVE 616 // INITIALIZING
          </span>
        </div>

        {/* Sleek Progress Bar */}
        <div className="w-full bg-neutral-900 rounded-full h-1.5 p-0.5 border border-white/10 overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-red-600 via-amber-400 to-red-600 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="font-hud text-xs text-gray-400 font-bold">{progress}%</span>
      </div>
    </motion.div>
  );
};
