export interface SuperheroProfile {
  name: string;
  codename: string;
  superpower: string;
  specialAbility: string;
  medicalQualification: string;
  weakness: string;
  dailyMission: string;
  status: string;
  clearanceLevel: string;
  shieldId: string;
  threatLevel: string;
  specialNotes: string;
}

export interface InfinityStoneData {
  id: string;
  name: string;
  marvelStone: string;
  color: string;
  glowColor: string;
  tagline: string;
  symbol: string;
  shortQuote: string;
  details: {
    title: string;
    description: string;
    bulletPoints: string[];
    cosmicWisdom: string;
  };
}

export interface TimelineYear {
  id: string;
  yearNumber: string;
  title: string;
  timelineCode: string;
  status: string;
  tagline: string;
  narrative: string;
  highlights: string[];
  themeColor: string;
  iconName: string;
}

export interface MedicalReportData {
  patientName: string;
  doctorName: string;
  hospitalDept: string;
  diagnosis: string[];
  prescription: string[];
  doctorNote: string;
}

export interface FriendshipContent {
  friendName: string;
  yourName: string;
  birthdayDate: string;
  distanceKm: string;
  yourCity: string;
  hisCity: string;
  yearsOfFriendship: string;
  profile: SuperheroProfile;
  stones: InfinityStoneData[];
  timeline: TimelineYear[];
  medicalReport: MedicalReportData;
  distanceSection: {
    heading: string;
    poeticLines: string[];
    closingLine: string;
  };
  birthdayLetter: {
    salutation: string;
    paragraphs: string[];
    closingFormula: string;
    signature: string;
    finalQuote: string;
  };
  finalScreen: {
    threeYearsText: string;
    memoriesText: string;
    birthdayWish: string;
    phaseText: string;
  };
}

export const defaultFriendshipContent: FriendshipContent = {
  friendName: "[HIS NAME]",
  yourName: "Your Most Annoying Best Friend",
  birthdayDate: "Today & Always",
  distanceKm: "1,248 KM",
  yourCity: "My City",
  hisCity: "His City",
  yearsOfFriendship: "3 YEARS",

  profile: {
    name: "[HIS NAME]",
    codename: "The Professional Problem Solver.",
    superpower: "Explaining things even when I refuse to understand.",
    specialAbility: "Convincing me after every argument.",
    medicalQualification: "Google Doctor + Personal Medicine Advisor.",
    weakness: "My unnecessary arguments.",
    dailyMission: "Remind me to take care of myself.",
    status: "One of a kind.",
    clearanceLevel: "LEVEL 10 // CERTIFIED BEST FRIEND",
    shieldId: "FRIENDSHIP-CORE-001",
    threatLevel: "0.00% (AGGRESSIVELY CARING)",
    specialNotes: "Subject has survived 3 full solar cycles of my drama, stubborn moods, and random debates without resigning as best friend. Deserves an official medal of honor."
  },

  stones: [
    {
      id: "stone-patience",
      name: "PATIENCE",
      marvelStone: "MIND STONE",
      color: "#FFD700",
      glowColor: "rgba(255, 215, 0, 0.7)",
      tagline: "For every time you explained something to me even when I wasn't ready to understand.",
      symbol: "🧠",
      shortQuote: "The patience of Professor X and Captain America combined.",
      details: {
        title: "The Mind Stone of Endless Explanations",
        description: "I know I can be impossibly stubborn and question everything. Yet, without failing once, you sit there and break things down with unbelievable patience.",
        bulletPoints: [
          "Explaining complex situations calmly while I'm being dramatic.",
          "Repeating the same logic five times until it finally clicks in my stubborn brain.",
          "Never making me feel stupid for asking 100 questions or not getting it right away.",
          "Staying calm on voice notes when anyone else would have thrown their phone across the room."
        ],
        cosmicWisdom: "Patience isn't just a virtue; in your case, it's a legit mutant superpower."
      }
    },
    {
      id: "stone-peace",
      name: "PEACE",
      marvelStone: "REALITY STONE",
      color: "#FF1A4B",
      glowColor: "rgba(255, 26, 75, 0.7)",
      tagline: "For every argument you survived and every time you tried to make things okay.",
      symbol: "🕊️",
      shortQuote: "Even when I intentionally pick a fight, you still find a way to fix the peace.",
      details: {
        title: "The Negotiator of Universe 616",
        description: "Let's be completely honest: half the arguments we have are started entirely by me for no logical reason. Yet you still say sorry just to make sure we're okay.",
        bulletPoints: [
          "Saying 'achha sorry baba' even when 100% of the fault was mine.",
          "Refusing to let an argument end our day on a sour note.",
          "Handling my random mood swings like an experienced bomb disposal expert.",
          "Choosing our friendship over winning an ego battle every single time."
        ],
        cosmicWisdom: "True strength isn't winning every argument; it's caring enough to resolve them."
      }
    },
    {
      id: "stone-medical",
      name: "MEDICAL KNOWLEDGE",
      marvelStone: "POWER STONE",
      color: "#A855F7",
      glowColor: "rgba(168, 85, 247, 0.7)",
      tagline: "For being my unpaid personal doctor and giving me medicine lectures.",
      symbol: "💊",
      shortQuote: "WebMD who? I have my own on-call physician giving 24/7 lectures.",
      details: {
        title: "Chief of Medicine // Stark Health",
        description: "Whenever I have the slightest cough, fever, or headache, you transform into a full-fledged hospital resident prescribing dosage schedules and warm water.",
        bulletPoints: [
          "Lecturing me furiously if I skip my meals or forget my prescribed tablets.",
          "Cross-checking my symptoms like Tony Stark inspecting an arc reactor malfunction.",
          "The classic command: 'Dawa li ya bhool gayi?'",
          "Knowing my health habits better than actual certified medical professionals."
        ],
        cosmicWisdom: "A friend gives sympathy. A best friend gives a 40-minute pharmacology lecture."
      }
    },
    {
      id: "stone-care",
      name: "CARE",
      marvelStone: "SOUL STONE",
      color: "#FF7300",
      glowColor: "rgba(255, 115, 0, 0.7)",
      tagline: "For every single 'khayal rakha kar' message.",
      symbol: "🛡️",
      shortQuote: "Not all superheroes wear armor. Some just send a daily check-in message.",
      details: {
        title: "The Daily Guardian Shield",
        description: "Through busy days, crazy schedules, and rough phases, that one simple phrase has been my constant anchor for three straight years.",
        bulletPoints: [
          "Every single 'khayal rakha kar' sent at the end of late-night chats.",
          "Checking if I reached home safe or if I ate properly during frantic work days.",
          "Noticing the tone shift in my texts before I even say what's wrong.",
          "Being genuinely happy for my wins and fiercely supportive when I'm down."
        ],
        cosmicWisdom: "Real care doesn't need grand gestures; it lives in consistent small reminders."
      }
    },
    {
      id: "stone-memories",
      name: "MEMORIES",
      marvelStone: "TIME STONE",
      color: "#00E676",
      glowColor: "rgba(0, 230, 118, 0.7)",
      tagline: "For three years of conversations, random fights, laughter and countless moments.",
      symbol: "⏳",
      shortQuote: "Three full years in the timeline, and not a single boring second.",
      details: {
        title: "The 3-Year Temporal Archive",
        description: "1,095 days of shared memes, voice notes that could be podcast episodes, inside jokes, and random 2 AM philosophy sessions.",
        bulletPoints: [
          "Laughing so hard at stupid inside jokes that no one else would ever understand.",
          "Remembering how we first started talking vs. the comfortable chaos we are now.",
          "The uncounted hours spent dissecting Marvel theories, life goals, and random drama.",
          "An archive of trust built brick-by-brick across thousands of miles."
        ],
        cosmicWisdom: "Time spent with a genuine friend is never lost; it becomes the timeline's greatest asset."
      }
    },
    {
      id: "stone-friendship",
      name: "FRIENDSHIP",
      marvelStone: "SPACE STONE",
      color: "#00A8FF",
      glowColor: "rgba(0, 168, 255, 0.7)",
      tagline: "For being someone I can count on even from miles away.",
      symbol: "🌌",
      shortQuote: "Space cannot weaken what loyalty and genuine respect have forged.",
      details: {
        title: "The Unbreakable Cosmic Tether",
        description: "You've proven that real friendship doesn't depend on sitting in the same room. You've been more reliable from another city than most people in my zip code.",
        bulletPoints: [
          "Always answering the call when things get overwhelming.",
          "Being the one person I don't have to filter my thoughts or pretend around.",
          "Keeping secrets, sharing honest advice, and staying 100% real.",
          "Proving that miles are just numbers when the bond is genuine."
        ],
        cosmicWisdom: "A true best friend isn't measured in proximity, but in dependability."
      }
    }
  ],

  timeline: [
    {
      id: "year-1",
      yearNumber: "YEAR 1",
      title: "The Origin Story",
      timelineCode: "TIMELINE-001 // FIRST CONTACT",
      status: "FOUNDATION BUILT",
      tagline: "The beginning of our friendship.",
      narrative: "Who would've thought that a random BGMI match would turn into a three-year-long friendship? Honestly, my first impression of you wasn't great. In fact, I used to hate you so much back then! 😂 Never in my wildest dreams did I imagine that the same person I couldn't stand would eventually become someone I talk to almost every day. From random BGMI matches and annoying conversations to sharing our daily stories, endless arguments, laughter, and everything in between, somehow we went from barely tolerating each other to becoming such close friends. Funny how life works, right?",
      highlights: [
        "The BGMI days — when I genuinely couldn't stand you 😂",
        "Going from random game partners to talking about everything",
        "Realizing that the person I once disliked had become one of my closest friends"
      ],
      themeColor: "#00A8FF",
      iconName: "Radio"
    },
    {
      id: "year-2",
      yearNumber: "YEAR 2",
      title: "The Trial of Understanding",
      timelineCode: "TIMELINE-002 // DEEPENING BONDS",
      status: "CRISIS-PROOF",
      tagline: "More conversations, more understanding and more memories.",
      narrative: "This was the year our dynamic was truly tested. We had our first big misunderstandings, our random stubborn debates, and our petty arguments. But instead of drifting apart, every single resolved argument brought more understanding, patience, and unbreakable mutual respect.",
      highlights: [
        "Surviving my deliberate arguments and your legendary peace treaties",
        "The official inauguration of your role as my unpaid Google Doctor",
        "Voice notes evolving into 45-minute daily debriefs"
      ],
      themeColor: "#FF1A4B",
      iconName: "Shield"
    },
    {
      id: "year-3",
      yearNumber: "YEAR 3",
      title: "The Unbreakable Alliance",
      timelineCode: "TIMELINE-003 // PRESENT NEXUS",
      status: "LEGENDARY STATUS",
      tagline: "Still annoying each other, still arguing, still making up, and still being there.",
      narrative: "Three full years in. We don't need pleasantries or fake enthusiasm. We know each other's moods in five typed words. You still remind me daily to take care of myself, I still start ridiculous debates, you still explain things with sainthood patience, and our friendship stands undefeated.",
      highlights: [
        "36 months of 'khayal rakha kar' messages without a single break",
        "An unspoken pact of unconditional support from different pin codes",
        "Counting down to the inevitable day we finally meet in person"
      ],
      themeColor: "#D4AF37",
      iconName: "Sparkles"
    }
  ],

  medicalReport: {
    patientName: "Me (Professional Overthinker)",
    doctorName: "[HIS NAME]",
    hospitalDept: "STARK INDUSTRIES MEDICAL DEPARTMENT // EMERGENCY BEST FRIEND WING",
    diagnosis: [
      "Chronic Overthinking & 2 AM existential spiraling.",
      "Spontaneous Unnecessary Arguments (mostly started deliberately).",
      "Severe Allergy to Taking Care of Herself & forgetting medicines.",
      "High probability of not drinking enough water."
    ],
    prescription: [
      "1x Daily aggressive reminder to take care of yourself ('Khayal rakha kar').",
      "Unlimited doses of your patience when I refuse to understand simple logic.",
      "Occasional mandatory arguments to keep life entertaining.",
      "Strict orders: Never stop being the caring, patient, amazing friend you are."
    ],
    doctorNote: "Patient is clinically stubborn, impossible to argue with, and requires 24/7 monitoring. However, condition is non-negotiable — she remains my permanent best friend."
  },

  distanceSection: {
    heading: "DIFFERENT CITIES. SAME FRIENDSHIP.",
    poeticLines: [
      "We haven't met yet.",
      "We don't have a single picture together.",
      "But three years of friendship have taught me that being there for someone isn't always about being physically present.",
      "",
      "One day, we'll finally meet and have that first picture together.",
      "",
      "Until then, keep annoying me from wherever you are."
    ],
    closingLine: "Connected across state borders, time zones, and cell towers."
  },

  birthdayLetter: {
    salutation: "TO MY FAVOURITE HUMAN.",
    paragraphs: [
      "Happy, happy Birthday Amar MR MARVEl!",
      "I was reflecting on the fact that we've been friends for three whole years now without having met in person even once. Yet, whenever something happens in my day—good, bad, or ridiculous—you are literally the first person I want to text.",
      "I don't think I say this often enough (mostly because I enjoy pretending I'm always right), but thank you. Thank you for your endless patience when I refuse to understand simple things. Thank you for never giving up on convincing me whenever I get into one of my dramatic moods. Thank you for surviving every single argument I deliberately start just to test your sanity—and especially thank you for being the bigger person who says sorry just to make things okay.",
      "Thank you for being my unpaid personal doctor, for checking up on whether I took my medicines, for getting annoyed when I don't look after myself, and for the thousands of 'khayal rakha kar' reminders you've sent over the last three years.",
      "You are genuinely one of the most caring, reliable, and grounded people I have ever known. Having you on my side makes the chaotic multiverse feel a whole lot safer."
    ],
    closingFormula: "Thank you for being my personal doctor, professional explainer, peace negotiator and most importantly, my friend.",
    signature: "Your Most Annoying Best Friend",
    finalQuote: "NOT ALL HEROES WEAR CAPES. SOME JUST SAY 'Khayal rakha kar.'"
  },
  
    finalScreen: {
    threeYearsText: "THREE YEARS DOWN.",
    memoriesText: "MANY MORE MEMORIES TO GO.",
    birthdayWish: "HAPPY BIRTHDAY, YOU LEGEND!",
    phaseText: "PHASE 4: FRIENDSHIP CONTINUES."
  },

};
