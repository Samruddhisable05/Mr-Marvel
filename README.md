# 🌌 THE MULTIVERSE OF US

### A Cinematic Marvel-Themed Interactive Birthday Experience for Long-Distance Love

> _"In every universe, I'd still choose you."_

---

## ✨ Overview

**The Multiverse of Us** is a premium, cinematic, interactive web experience built specifically for a long-distance boyfriend who loves Marvel. Since you haven't taken photos together yet, the experience focuses on rich cinematic storytelling, immersive 3D/canvas effects, interactive Avengers HUDs, and heartfelt romantic messages.

---

## 🚀 Key Features

1. **Section 1: Cinematic Intro**
   - Marvel Studios opening sequence with animated flip-book logo treatment.
   - Dramatic cinematic trailer quotes (_"AN EXTRAORDINARY STORY. AN UNEXPECTED CONNECTION. A UNIVERSE CALLED US."_).
   - Climax reveal: _"HAPPY BIRTHDAY❤️"_.
   - Animated **ENTER YOUR UNIVERSE** button with sound effects.
   - Fast-forward button for instant access.

2. **Section 2: Avengers Classified Database (HUD)**
   - S.H.I.E.L.D. / F.R.I.D.A.Y. holographic interface with Level 10 Clearance.
   - Biometric vitals monitor (143 BPM Synced, 0.00% Threat Rating).
   - Interactive **SCAN BIOMETRICS** button with laser sweep effect.
   - Superhero profile:
     - **Name**: `[HIS NAME]` (with 1-click in-place editing)
     - **Codename**: `My Favourite Human`
     - **Superpower**: `Making someone smile from miles away.`
     - **Weakness**: `Me.`
     - **Mission**: `Stay happy, healthy and keep being amazing.`
     - **Status**: `Irreplaceable.` with animated holographic verification stamp.

3. **Section 3: The Six Infinity Stones**
   - 3D faceted glowing crystal stones with rotating energy rings:
     - 🔴 **LOVE** (Reality Stone) — _"Reasons why I love you."_
     - 🟢 **MEMORIES** (Time Stone) — _"My favourite moments with you."_
     - 🟡 **HOPE** (Mind Stone) — _"My wishes for your future."_
     - 🔵 **DISTANCE** (Space Stone) — _"Even different cities cannot change what I feel for you."_
     - 🟠 **HAPPINESS** (Soul Stone) — _"Things about you that make me smile."_
     - 🟣 **FUTURE** (Power Stone) — _"All the things I dream of experiencing with you."_
   - Interactive **Infinity Gauntlet Tracker** that illuminates as he inspects each stone.
   - Animated modals with harmonic crystal sound effects and Prev/Next stone navigation.

4. **Section 4: Multiverse of Us**
   - Doctor Strange / Quantum Realm swirling spark portal.
   - 3 Timelines:
     - **Universe 001**: _"The universe where we first started talking."_
     - **Universe 002**: _"The universe where distance separates us, but our hearts remain close."_
     - **Universe 003**: _"The universe where we finally meet, hold hands, and take our first picture together."_

5. **Section 5: Our First Meeting**
   - Visual of two backlit silhouettes across a cosmic expanse.
   - Interactive **COLLAPSE THE DISTANCE** button: animates the two silhouettes across the quantum bridge until their hands touch at the center.
   - Poetic lines:
     > _"We haven't taken our first picture together._  
     > _We haven't held hands._  
     > _We haven't experienced our first hug._
     >
     > _But somewhere in this universe, our first meeting is waiting for us._
     >
     > _And when that day comes, I hope time slows down just a little."_

6. **Section 6: The Birthday Surprise & Final Mission**
   - _"YOU'VE UNLOCKED YOUR FINAL MISSION"_
   - Animated **"ONE LAST THING..."** button.
   - 3D-styled envelope with an Avengers / Heart wax seal.
   - Clicking to break seal opens the envelope with an explosion of red & gold confetti.
   - Decrypted love letter: _"TO MY FAVOURITE HUMAN ❤️"_.
   - Climax quote:
     > _"I DON'T NEED ALL SIX INFINITY STONES. I JUST NEED YOU."_

7. **Section 7: Final Screen**
   - _"END OF THIS CHAPTER. THE BEGINNING OF OUR FOREVER."_
   - _"Happy Birthday, My Love ❤️"_
   - Post-credits stinger badge: _"PHASE FOREVER: OUR STORY WILL CONTINUE"_.
   - Replay intro button and "Shower with Cosmic Confetti" button.

8. **Web Audio API Cinematic Sound Engine**
   - 100% royalty-free, zero-external-dependency cinematic synthesizer pad music.
   - Sound effects (SFX) for HUD beeps, stone activations, portal hums, and envelope sparkles.
   - **No autoplay**: music waits for interaction ("ENTER YOUR UNIVERSE" or manual toggle).
   - Equalizer visualizer, mute button, and volume slider in navbar.

---

## 🛠️ How to Customize

### Option A: Directly from the Website (Easiest)

1. Open the website.
2. Click the **EDIT DETAILS** button in the top navigation bar.
3. Update his name, your city, his city, distance, and the birthday letter text.
4. Click **SAVE CHANGES** — your custom inputs are automatically saved in the browser!

### Option B: Permanently in the Source Code

All content is cleanly organized in [`src/data/content.ts`](file:///c:/HBD%20mr%20marve/src/data/content.ts):

- `boyfriendName`: Replace `[HIS NAME]` with his actual name
- `distanceKm`: Enter the distance between your cities (e.g. `1,248 KM` or `850 Miles`)
- `yourCity` & `hisCity`: Enter your respective cities
- `stones`: Customize the reasons, memories, and wishes inside each of the 6 Infinity Stones
- `birthdayLetter`: Customize the paragraphs of your birthday love letter

---

## 💻 Tech Stack

- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (Fluid cinematic animations)
- **Lucide React** (High-tech HUD & cosmic icons)
- **Canvas Confetti** (Celebratory particle bursts)
- **Web Audio API** (Procedural ambient synthesizer and sound effects)

---

## 📦 Running Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

## 🚀 Building for Deployment (Vercel, Netlify, GitHub Pages)

```bash
npm run build
```

The production bundle will be generated in `dist/`. You can deploy this folder directly to any static hosting provider.
