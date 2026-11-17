import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Save, RotateCcw, User, Sparkles, FileText, Check, Stethoscope } from 'lucide-react';
import type { FriendshipContent } from '../data/content';
import { audioEngine } from '../utils/audioEngine';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: FriendshipContent;
  onSave: (newContent: FriendshipContent) => void;
  onReset: () => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  onClose,
  content,
  onSave,
  onReset,
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'cities' | 'letter'>('profile');
  const [formData, setFormData] = useState<FriendshipContent>(content);
  const [showSavedFeedback, setShowSavedFeedback] = useState(false);

  React.useEffect(() => {
    setFormData(content);
  }, [content]);

  if (!isOpen) return null;

  const handleSave = () => {
    audioEngine.playStoneSound(1);
    onSave(formData);
    setShowSavedFeedback(true);
    setTimeout(() => {
      setShowSavedFeedback(false);
      onClose();
    }, 900);
  };

  const handleResetToDefaults = () => {
    audioEngine.playClickSound();
    if (window.confirm('Reset all details to the default friendship template?')) {
      onReset();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-3xl rounded-2xl glass-panel p-6 sm:p-8 border border-red-500/40 shadow-2xl max-h-[92vh] flex flex-col justify-between"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3 className="font-marvel text-xl sm:text-2xl font-bold text-white tracking-wider uppercase">
              CUSTOMIZE THE MULTIVERSE OF FRIENDSHIP
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-2 overflow-x-auto text-xs font-hud">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'profile'
                ? 'bg-red-600/30 text-red-400 border border-red-500/50'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>HERO PROFILE</span>
          </button>

          <button
            onClick={() => setActiveTab('cities')}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'cities'
                ? 'bg-amber-600/30 text-amber-400 border border-amber-500/50'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            
          </button>

          <button
            onClick={() => setActiveTab('letter')}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'letter'
                ? 'bg-sky-600/30 text-sky-400 border border-sky-500/50'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>BIRTHDAY LETTER</span>
          </button>
        </div>

        {/* Form Body */}
        <div className="overflow-y-auto pr-2 space-y-4 max-h-[55vh]">
          {activeTab === 'profile' && (
            <div className="space-y-4 text-xs font-hud">
              <div>
                <label className="text-gray-400 block mb-1">HIS REAL NAME / NICKNAME</label>
                <input
                  type="text"
                  value={formData.profile.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      friendName: e.target.value,
                      profile: { ...formData.profile, name: e.target.value },
                    })
                  }
                  className="w-full bg-neutral-900 border border-neutral-700 focus:border-red-500 p-2.5 rounded-lg text-white font-sans text-sm focus:outline-none"
                  placeholder="e.g. Alex, Aryan, My Best Friend"
                />
              </div>

              <div>
                <label className="text-gray-400 block mb-1">CODENAME</label>
                <input
                  type="text"
                  value={formData.profile.codename}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      profile: { ...formData.profile, codename: e.target.value },
                    })
                  }
                  className="w-full bg-neutral-900 border border-neutral-700 focus:border-red-500 p-2.5 rounded-lg text-white font-sans text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-400 block mb-1">PRIMARY SUPERPOWER</label>
                <input
                  type="text"
                  value={formData.profile.superpower}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      profile: { ...formData.profile, superpower: e.target.value },
                    })
                  }
                  className="w-full bg-neutral-900 border border-neutral-700 focus:border-red-500 p-2.5 rounded-lg text-white font-sans text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-400 block mb-1">SPECIAL ABILITY</label>
                <input
                  type="text"
                  value={formData.profile.specialAbility}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      profile: { ...formData.profile, specialAbility: e.target.value },
                    })
                  }
                  className="w-full bg-neutral-900 border border-neutral-700 focus:border-red-500 p-2.5 rounded-lg text-white font-sans text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-400 block mb-1 flex items-center gap-1.5">
                  <Stethoscope className="w-3 h-3 text-emerald-400" />
                  <span>MEDICAL QUALIFICATION</span>
                </label>
                <input
                  type="text"
                  value={formData.profile.medicalQualification}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      profile: { ...formData.profile, medicalQualification: e.target.value },
                    })
                  }
                  className="w-full bg-neutral-900 border border-neutral-700 focus:border-emerald-500 p-2.5 rounded-lg text-white font-sans text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-400 block mb-1">KNOWN WEAKNESS</label>
                <input
                  type="text"
                  value={formData.profile.weakness}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      profile: { ...formData.profile, weakness: e.target.value },
                    })
                  }
                  className="w-full bg-neutral-900 border border-neutral-700 focus:border-red-500 p-2.5 rounded-lg text-white font-sans text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-400 block mb-1">DAILY MISSION</label>
                <input
                  type="text"
                  value={formData.profile.dailyMission}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      profile: { ...formData.profile, dailyMission: e.target.value },
                    })
                  }
                  className="w-full bg-neutral-900 border border-neutral-700 focus:border-red-500 p-2.5 rounded-lg text-white font-sans text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-400 block mb-1">STATUS</label>
                <input
                  type="text"
                  value={formData.profile.status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      profile: { ...formData.profile, status: e.target.value },
                    })
                  }
                  className="w-full bg-neutral-900 border border-neutral-700 focus:border-red-500 p-2.5 rounded-lg text-white font-sans text-sm focus:outline-none"
                />
              </div>
            </div>
          )}

          {activeTab === 'cities' && (
            <div className="space-y-4 text-xs font-hud">
              <div>
                <label className="text-gray-400 block mb-1">YOUR CITY</label>
                <input
                  type="text"
                  value={formData.yourCity}
                  onChange={(e) => setFormData({ ...formData, yourCity: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-700 focus:border-amber-500 p-2.5 rounded-lg text-white font-sans text-sm focus:outline-none"
                  placeholder="e.g. New York, Mumbai, London"
                />
              </div>

              <div>
                <label className="text-gray-400 block mb-1">HIS CITY</label>
                <input
                  type="text"
                  value={formData.hisCity}
                  onChange={(e) => setFormData({ ...formData, hisCity: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-700 focus:border-amber-500 p-2.5 rounded-lg text-white font-sans text-sm focus:outline-none"
                  placeholder="e.g. Delhi, Los Angeles, Toronto"
                />
              </div>

              <div>
                <label className="text-gray-400 block mb-1">DISTANCE (KM / MILES)</label>
                <input
                  type="text"
                  value={formData.distanceKm}
                  onChange={(e) => setFormData({ ...formData, distanceKm: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-700 focus:border-amber-500 p-2.5 rounded-lg text-white font-sans text-sm focus:outline-none"
                  placeholder="e.g. 1,248 KM or 850 Miles"
                />
              </div>
            </div>
          )}

          {activeTab === 'letter' && (
            <div className="space-y-4 text-xs font-hud">
              <div>
                <label className="text-gray-400 block mb-1">LETTER HEADING</label>
                <input
                  type="text"
                  value={formData.birthdayLetter.salutation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      birthdayLetter: { ...formData.birthdayLetter, salutation: e.target.value },
                    })
                  }
                  className="w-full bg-neutral-900 border border-neutral-700 focus:border-sky-500 p-2.5 rounded-lg text-white font-sans text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-400 block mb-1">
                  LETTER CONTENT (PARAGRAPHS SEPARATED BY DOUBLE LINE BREAK)
                </label>
                <textarea
                  rows={8}
                  value={formData.birthdayLetter.paragraphs.join('\n\n')}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      birthdayLetter: {
                        ...formData.birthdayLetter,
                        paragraphs: e.target.value.split('\n\n').filter((p) => p.trim() !== ''),
                      },
                    })
                  }
                  className="w-full bg-neutral-900 border border-neutral-700 focus:border-sky-500 p-3 rounded-lg text-white font-sans text-sm focus:outline-none leading-relaxed"
                />
              </div>

              <div>
                <label className="text-gray-400 block mb-1">CLOSING FORMULA & SIGNATURE</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={formData.birthdayLetter.closingFormula}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        birthdayLetter: { ...formData.birthdayLetter, closingFormula: e.target.value },
                      })
                    }
                    className="bg-neutral-900 border border-neutral-700 p-2.5 rounded-lg text-white font-sans text-sm focus:outline-none"
                    placeholder="Closing formula"
                  />
                  <input
                    type="text"
                    value={formData.birthdayLetter.signature}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        birthdayLetter: { ...formData.birthdayLetter, signature: e.target.value },
                      })
                    }
                    className="bg-neutral-900 border border-neutral-700 p-2.5 rounded-lg text-white font-sans text-sm focus:outline-none"
                    placeholder="Signature"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-400 block mb-1">FINAL ICONIC QUOTE</label>
                <input
                  type="text"
                  value={formData.birthdayLetter.finalQuote}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      birthdayLetter: { ...formData.birthdayLetter, finalQuote: e.target.value },
                    })
                  }
                  className="w-full bg-neutral-900 border border-neutral-700 focus:border-amber-500 p-2.5 rounded-lg text-white font-sans text-sm focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={handleResetToDefaults}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/15 text-xs font-hud text-gray-400 hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>RESET DEFAULTS</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-hud text-gray-300 hover:text-white"
            >
              CANCEL
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-hud text-xs font-bold transition-all shadow-[0_0_15px_rgba(230,36,41,0.5)]"
            >
              {showSavedFeedback ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>SAVED!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>SAVE CHANGES</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
