// Web Audio API Cinematic Synthesizer and Interactive SFX Engine
// 100% royalty-free, zero-external-dependency, instant load & reliable across all browsers.

class CinematicAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlayingMusic: boolean = false;
  private isMuted: boolean = false;
  private masterGain: GainNode | null = null;
  private musicGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private musicInterval: number | null = null;
  private activeOscillators: OscillatorNode[] = [];

  // Ambient chord progressions: Cinematic / Marvel-esque emotional wonder
  // Chord progression in D minor / F Major (Heroic yet touching)
  private chords = [
    [146.83, 220.00, 261.63, 349.23, 440.00], // Dm9 / F6
    [116.54, 174.61, 233.08, 293.66, 349.23], // Bbmaj7
    [130.81, 196.00, 261.63, 329.63, 392.00], // C9
    [110.00, 164.81, 220.00, 261.63, 329.63], // Am7 / Fmaj7
  ];
  private currentChordIndex: number = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.setValueAtTime(0.5, this.ctx.currentTime);
      this.musicGain.connect(this.masterGain);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(0.6, this.ctx.currentTime);
      this.sfxGain.connect(this.masterGain);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public startMusic() {
    this.initContext();
    if (this.isPlayingMusic) return;
    this.isPlayingMusic = true;

    this.playNextChord();
    // Transition chords every 6 seconds with smooth cross-fading
    this.musicInterval = window.setInterval(() => {
      if (this.isPlayingMusic) {
        this.currentChordIndex = (this.currentChordIndex + 1) % this.chords.length;
        this.playNextChord();
      }
    }, 6000);
  }

  public stopMusic() {
    this.isPlayingMusic = false;
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
    // Fade out active oscillators
    const now = this.ctx ? this.ctx.currentTime : 0;
    this.activeOscillators.forEach(osc => {
      try {
        osc.stop(now + 1);
      } catch {
        // ignore if already stopped
      }
    });
    this.activeOscillators = [];
  }

  public toggleMusic(): boolean {
    if (this.isPlayingMusic) {
      this.stopMusic();
      return false;
    } else {
      this.startMusic();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlayingMusic;
  }

  public setVolume(vol: number) {
    this.initContext();
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(Math.max(0, Math.min(1, vol)), this.ctx.currentTime, 0.05);
    }
  }

  public toggleMute(): boolean {
    this.initContext();
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : 0.7, this.ctx.currentTime, 0.05);
    }
    return this.isMuted;
  }

  private playNextChord() {
    if (!this.ctx || !this.musicGain) return;
    const now = this.ctx.currentTime;
    const chord = this.chords[this.currentChordIndex];

    chord.forEach((freq, idx) => {
      if (!this.ctx || !this.musicGain) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Warm analog pad wave shapes
      osc.type = idx === 0 ? 'sine' : idx % 2 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Low pass filter for gentle cinematic warmth
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450 + idx * 100, now);

      // Subtle detune for lush thickness
      osc.detune.setValueAtTime((idx - 2) * 5, now);

      // Smooth attack and release envelope (6 seconds duration)
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.12 / (chord.length * 0.7), now + 2.5);
      gain.gain.linearRampToValueAtTime(0.001, now + 6.2);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.musicGain);

      osc.start(now);
      osc.stop(now + 6.3);

      this.activeOscillators.push(osc);

      // Clean up after stop
      setTimeout(() => {
        const i = this.activeOscillators.indexOf(osc);
        if (i > -1) this.activeOscillators.splice(i, 1);
      }, 6500);
    });
  }

  // SOUND EFFECTS (SFX)

  // Futuristic HUD / S.H.I.E.L.D. Computer Scanning Beep
  public playHudBeep(pitch: number = 880) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.sfxGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(pitch, now);
    osc.frequency.exponentialRampToValueAtTime(pitch * 1.5, now + 0.08);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.12);
  }

  // Futuristic Click / Micro Blip
  public playClickSound() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.sfxGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.06);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.06);
  }

  // Infinity Stone Activation: Resonant ethereal cosmic chime
  public playStoneSound(index: number = 0) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.sfxGain) return;

    const baseFrequencies = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25]; // C D E G A C
    const root = baseFrequencies[index % baseFrequencies.length];
    const now = this.ctx.currentTime;

    [1, 1.5, 2, 3].forEach((ratio, i) => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = i === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(root * ratio, now);

      gain.gain.setValueAtTime(0.15 / (i + 1), now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(now);
      osc.stop(now + 1.8);
    });
  }

  // Quantum Portal Space Swoosh
  public playPortalHum() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.sfxGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.exponentialRampToValueAtTime(240, now + 0.8);
    osc.frequency.exponentialRampToValueAtTime(110, now + 1.8);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, now);
    filter.frequency.linearRampToValueAtTime(800, now + 0.9);
    filter.frequency.linearRampToValueAtTime(300, now + 1.8);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.8);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.9);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 2.0);
  }

  // Envelope Opening / Letter Unveiling Sparkle
  public playEnvelopeOpen() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.sfxGain) return;

    const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51];
    const now = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.001, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.08 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.9);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 1.0);
    });
  }

  // Triumphant Birthday Fanfare Chord
  public playFanfare() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.sfxGain) return;

    const chord = [261.63, 329.63, 392.00, 523.25, 659.25];
    const now = this.ctx.currentTime;

    chord.forEach((freq) => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.14, now + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(now);
      osc.stop(now + 2.6);
    });
  }
}

export const audioEngine = new CinematicAudioEngine();
