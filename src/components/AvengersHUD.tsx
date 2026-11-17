import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Award, Activity, Scan, CheckCircle2, Edit3, Stethoscope, AlertCircle, Sparkles, Brain, MessageSquare } from 'lucide-react';
import type { SuperheroProfile } from '../data/content';
import { audioEngine } from '../utils/audioEngine';

interface AvengersHUDProps {
  profile: SuperheroProfile;
  onUpdateProfile: (updated: Partial<SuperheroProfile>) => void;
  onOpenCustomizer: () => void;
}

export const AvengersHUD: React.FC<AvengersHUDProps> = ({
  profile,
  onUpdateProfile,
  onOpenCustomizer,
}) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [inlineEditing, setInlineEditing] = useState(false);
  const [tempName, setTempName] = useState(profile.name);

  const handleRunScan = () => {
    audioEngine.playHudBeep(750);
    setIsScanning(true);
    setScanComplete(false);

    setTimeout(() => {
      audioEngine.playHudBeep(980);
    }, 1000);

    setTimeout(() => {
      audioEngine.playStoneSound(3);
      setIsScanning(false);
      setScanComplete(true);
    }, 2200);
  };

  const handleSaveName = () => {
    onUpdateProfile({ name: tempName });
    setInlineEditing(false);
    audioEngine.playClickSound();
  };

  return (
    <section
      id="classified"
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center bg-[#080808] overflow-hidden"
    >
      {/* Background HUD Grid & Scanning Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red-950/20 via-black to-[#080808] pointer-events-none" />
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#e62429_1px,transparent_1px),linear-gradient(to_bottom,#e62429_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/40 border border-red-500/40 text-red-400 font-hud text-xs tracking-[0.25em] mb-4 shadow-[0_0_15px_rgba(230,36,41,0.3)]"
        >
          <Lock className="w-3.5 h-3.5 text-red-500 animate-pulse" />
          <span>AVENGERS CLASSIFIED DATABASE // LEVEL 10 CLEARANCE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-marvel text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-wider uppercase drop-shadow-[0_4px_25px_rgba(230,36,41,0.5)]"
        >
          OFFICIAL HERO DOSSIER
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 font-hud text-xs sm:text-sm text-amber-300 tracking-widest uppercase"
        >
          S.H.I.E.L.D. PROTOCOL // THE PROFESSIONAL PROBLEM SOLVER ARCHIVE
        </motion.p>
      </div>

      {/* Main Holographic ID Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl rounded-2xl glass-panel-hud p-6 sm:p-10 border border-red-500/30 overflow-hidden"
      >
        {/* Holographic Corner Tech Brackets */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-red-500" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-red-500" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-red-500" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-red-500" />

        {/* Scanning Laser Bar */}
        {isScanning && (
          <motion.div
            initial={{ top: '0%' }}
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent shadow-[0_0_20px_#e62429] z-30 pointer-events-none"
          />
        )}

        {/* Top Dossier Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-red-500/20 pb-4 mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-500/40 flex items-center justify-center text-red-400 shadow-[0_0_15px_rgba(230,36,41,0.4)]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="font-hud text-[11px] text-gray-400 block tracking-widest">REGISTRATION ID</span>
              <span className="font-hud text-sm font-bold text-white tracking-wider">{profile.shieldId}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleRunScan}
              disabled={isScanning}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600/40 border border-red-500/40 font-hud text-xs text-red-300 hover:text-white transition-all shadow-sm active:scale-95 disabled:opacity-50"
            >
              <Scan className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
              <span>{isScanning ? 'SCANNING HERO METRICS...' : 'SCAN HERO METRICS'}</span>
            </button>

            <button
              onClick={onOpenCustomizer}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 font-hud text-xs text-gray-300 hover:text-white transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">CUSTOMIZE</span>
            </button>
          </div>
        </div>

        {/* Scan Status Feedback */}
        {scanComplete && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-6 p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-between text-xs font-hud text-emerald-300"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>SCAN CONFIRMED: 100% UNBEATABLE PATIENCE & CHIEF MEDICINE ADVISOR</span>
            </div>
            <span className="text-[10px] text-emerald-400/80">SURVIVAL: 3 YEARS UNDEFEATED</span>
          </motion.div>
        )}

        {/* Grid Layout: Left Avatar & Stats, Right Intel Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Superhero Avatar */}
          <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-xl bg-black/40 border border-white/10 relative overflow-hidden">
            {/* Hologram Avatar Ring */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-red-500/40 p-2 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(230,36,41,0.3)]">
              <div className="absolute inset-2 rounded-full border border-dashed border-red-400/30 animate-spin" style={{ animationDuration: '25s' }} />
              <div className="w-full h-full rounded-full bg-gradient-to-b from-red-950/60 to-black flex flex-col items-center justify-center p-3 text-center">
                <Shield className="w-12 h-12 text-[#E62429] drop-shadow-[0_0_15px_rgba(230,36,41,0.8)] mb-1" />
                <span className="font-hud text-[10px] text-gray-400 tracking-wider">HERO CODE</span>
                <span className="font-hud text-xs font-bold text-amber-300">AVENGER PRIME</span>
              </div>
            </div>

            {/* In-place Editable Name */}
            <div className="w-full">
              {inlineEditing ? (
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="text"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    className="w-full bg-neutral-900 border border-red-500 text-white font-marvel text-center text-lg py-1 px-2 rounded focus:outline-none"
                    placeholder="Enter his name"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveName}
                    className="px-2 py-1 bg-red-600 text-white rounded text-xs font-hud"
                  >
                    SAVE
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 group cursor-pointer" onClick={() => setInlineEditing(true)}>
                  <h3 className="font-marvel text-2xl font-bold text-white tracking-wide group-hover:text-red-400 transition-colors">
                    {profile.name}
                  </h3>
                  <Edit3 className="w-3.5 h-3.5 text-gray-500 group-hover:text-red-400 opacity-60 group-hover:opacity-100 transition-all" />
                </div>
              )}
              <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-hud bg-red-900/40 text-red-400 border border-red-500/30">
                CLASS: MASTER EXPLAINER & PERSONAL MD
              </span>
            </div>

            {/* Vitals Telemetry */}
            <div className="w-full mt-6 pt-4 border-t border-white/10 space-y-2.5 text-left">
              <div className="flex items-center justify-between text-[11px] font-hud">
                <span className="text-gray-400 flex items-center gap-1.5">
                  <Brain className="w-3 h-3 text-amber-400" />
                  <span>PATIENCE LEVEL</span>
                </span>
                <span className="text-amber-400 font-bold">9999% (SAINT-TIER)</span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-hud">
                <span className="text-gray-400 flex items-center gap-1.5">
                  <Activity className="w-3 h-3 text-emerald-400" />
                  <span>ARGUMENT SURVIVAL</span>
                </span>
                <span className="text-emerald-400 font-bold">100% (STILL FRIENDS)</span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-hud">
                <span className="text-gray-400 flex items-center gap-1.5">
                  <Stethoscope className="w-3 h-3 text-sky-400" />
                  <span>MEDICINE REMINDERS</span>
                </span>
                <span className="text-sky-400 font-bold">DAILY WITHOUT FAIL</span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-hud">
                <span className="text-gray-400 flex items-center gap-1.5">
                  <AlertCircle className="w-3 h-3 text-red-400" />
                  <span>THREAT RATING</span>
                </span>
                <span className="text-red-400 font-bold">0.00% (SWEETEST BRO)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Dossier Fields */}
          <div className="lg:col-span-8 space-y-3.5">
            {/* Field 1: Codename */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-red-500/40 transition-colors">
              <span className="font-hud text-[10px] tracking-[0.2em] text-red-400 font-semibold uppercase block mb-1">
                // OFFICIAL CODENAME
              </span>
              <div className="font-marvel text-lg sm:text-xl font-bold text-white tracking-wider flex items-center gap-2">
                <span>{profile.codename}</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
            </div>

            {/* Field 2: Superpower */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-amber-500/40 transition-colors">
              <span className="font-hud text-[10px] tracking-[0.2em] text-amber-400 font-semibold uppercase block mb-1">
                // PRIMARY SUPERPOWER
              </span>
              <p className="font-sans text-sm sm:text-base text-gray-200 font-medium leading-relaxed">
                {profile.superpower}
              </p>
            </div>

            {/* Field 3: Special Ability */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-sky-500/40 transition-colors">
              <span className="font-hud text-[10px] tracking-[0.2em] text-sky-400 font-semibold uppercase block mb-1">
                // SPECIAL ABILITY
              </span>
              <p className="font-sans text-sm sm:text-base text-gray-200 font-medium leading-relaxed">
                {profile.specialAbility}
              </p>
            </div>

            {/* Field 4: Medical Qualification */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-emerald-500/40 transition-colors">
              <span className="font-hud text-[10px] tracking-[0.2em] text-emerald-400 font-semibold uppercase block mb-1 flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>// MEDICAL QUALIFICATION</span>
              </span>
              <p className="font-sans text-sm sm:text-base text-emerald-200 font-medium leading-relaxed">
                {profile.medicalQualification}
              </p>
            </div>

            {/* Field 5: Weakness & Daily Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-red-500/40 transition-colors">
                <span className="font-hud text-[10px] tracking-[0.2em] text-red-400 font-semibold uppercase block mb-1">
                  // CRITICAL WEAKNESS
                </span>
                <p className="font-sans text-sm text-gray-200 font-medium">
                  {profile.weakness}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-amber-500/40 transition-colors">
                <span className="font-hud text-[10px] tracking-[0.2em] text-amber-400 font-semibold uppercase block mb-1 flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" />
                  <span>// DAILY MISSION</span>
                </span>
                <p className="font-sans text-sm text-gray-200 font-medium">
                  {profile.dailyMission}
                </p>
              </div>
            </div>

            {/* Field 6: Status with Animated Military Stamp */}
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-red-950/40 via-black to-amber-950/20 border border-red-500/40 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-hud text-[10px] tracking-[0.2em] text-gray-400 uppercase block mb-1">
                  // CLASSIFICATION STATUS
                </span>
                <span className="font-marvel text-xl sm:text-2xl font-black text-white tracking-widest">
                  {profile.status}
                </span>
              </div>

              {/* Holographic Approval Stamp */}
              <div className="rotate-[-2deg] px-4 py-1.5 rounded border-2 border-red-500/90 bg-red-950/80 shadow-[0_0_20px_rgba(230,36,41,0.6)] flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="font-hud text-xs sm:text-sm font-black tracking-widest text-white uppercase">
                  SURVIVED 3 YEARS OF MY DRAMA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom S.H.I.E.L.D. Note */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-hud text-gray-400">
          <span>AUTHENTICATED BY: S.H.I.E.L.D. FRIENDSHIP DIVISION</span>
          <span>SPECIAL NOTES: IRREPLACEABLE BEST FRIEND</span>
        </div>
      </motion.div>
    </section>
  );
};
