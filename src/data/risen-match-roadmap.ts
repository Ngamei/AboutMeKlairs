export interface RoadmapBuildItem {
  title: string;
  description: string;
}

export interface RoadmapPhase {
  id: string;
  title: string;
  timeline: string;
  goal: string;
  intro?: string;
  target?: string;
  buildItems?: RoadmapBuildItem[];
  bullets?: string[];
  consumerFeatures?: string[];
  studioFeatures?: string[];
  supplyFeatures?: string[];
  consumerSideFeatures?: string[];
  gate: string;
  callout?: string;
}

export interface RisenMatchRoadmapContent {
  intro: string[];
  strategyTitle: string;
  phases: RoadmapPhase[];
  devPhilosophy: { title: string; items: string[] };
}

export const risenMatchRoadmap: RisenMatchRoadmapContent = {
  intro: [
    'To launch a two-sided marketplace, you have to survive the Cold Start Problem—the lethal paradox where users won\'t download an app with no studios, and studios won\'t list schedules on an app with no users.',
    'Because of this, Phase 1 of the roadmap cannot actually be a fully coded application. It has to be a Trojan Horse.',
  ],
  strategyTitle: 'Crawl → Walk → Run Rollout Strategy',
  phases: [
    {
      id: 'phase-0',
      title: 'PHASE 0: "The Concierge Seed"',
      timeline: 'Months 1–2',
      goal: 'Prove that the matching logic works and that consumers will pay for curation, without writing a single line of backend database code.',
      target: '15 Boutique Studios in one single hyper-dense neighborhood (e.g., Thảo Điền in HCMC, or SoHo in NYC).',
      buildItems: [
        {
          title: 'The Consumer Front-Door',
          description:
            'A sleek, mobile-optimized landing page built on Framer or Webflow with one giant button: "Find My Pilates Match."',
        },
        {
          title: 'The "Fake App" (Typeform + Zapier)',
          description: 'Tapping the button launches a gorgeous Typeform containing the 4-question Onboarding Quiz.',
        },
        {
          title: 'The Human Algorithm (You)',
          description:
            'A user submits the quiz and it pings your Slack. You open a Google Sheet with manually typed weekly schedules of 15 local studios, pick the 2 best classes, generate a Stripe Payment Link, and text/WhatsApp them: "Hey Chloe! Found your match: Tomorrow at 7:15 AM at Flow Studio. Reformer Level 1. 2 beds left. Tap here to grab it."',
        },
        {
          title: 'The "Zero-Risk" Studio Pitch',
          description:
            'Walk into 15 studios and say: "I run a private Pilates matching list. Give me 4 empty off-peak beds a week. If I fill them, I\'ll text you the client\'s name and wire you the money minus 10%. If I don\'t, it cost you zero seconds of labor."',
        },
      ],
      gate: 'Do not write real code until this manual "Wizard of Oz" method generates 100 paid bookings. If you can\'t sell 100 classes over text message, an iOS app won\'t fix your problem.',
      callout: 'The Gate to Phase 1',
    },
    {
      id: 'phase-1',
      title: 'PHASE 1: "The Static Match MVP"',
      timeline: 'Months 3–5',
      intro: 'The Official v1.0 Launch',
      goal: 'Productize the Concierge. Automate the consumer experience entirely, but keep the studio-side tech brutally simple.',
      consumerFeatures: [
        'The Native Quiz: Translated from Typeform into a slick 4-screen native UI.',
        'The "Match-Ranked" Feed: Home screen listing upcoming classes within 5km, sorted by Match_Score DESC.',
        'Standardized Studio Detail View: 3 photos, equipment specs, parking info, and the grip-sock rule.',
        'Guest Checkout: Apple Pay / Google Pay integration. No User Profiles, Change Password, or Saved Workouts yet.',
      ],
      studioFeatures: [
        'The "Slot Dropper": A dead-simple portal where owners click [ + Publish Empty Beds ], select Date/Time, type Class Name, drop price, and save.',
        'The Automated Roster Dispatch: When a user books, the system emails/SMS texts the owner: "Rise-n-Match Booking: Sarah Jenkins. Class: Reformer 1 (Thurs 10am). Match score: 94%. Note: Flagged sensitive lower back."',
      ],
      gate: '500 Monthly Active Bookers; 20+ studios logging in to manually "drop slots" at least once a week.',
      callout: 'The Gate to Phase 2',
    },
    {
      id: 'phase-2',
      title: 'PHASE 2: "The Liquidity Engine"',
      timeline: 'Months 6–9',
      goal: 'Stop making Studio Owners manually type their schedules into your portal, and solve the consumer\'s fear of showing up to a class that was actually full.',
      supplyFeatures: [
        'The "One-Way" Scraper / iCal Sync: Studio drops their public Momence/Mindbody schedule URL; backend crawls every 6 hours to populate the feed.',
        'The "Distress Bed" Auto-Trigger: If a 12:00 PM class is at <40% capacity at 8:00 AM, portal sends WhatsApp: "You have 5 empty beds for Noon today. Tap YES to blast them to 42 matched users at 20% off."',
      ],
      consumerSideFeatures: [
        'The "Class Alert" feature: Tripwires like "Ping me when a Level 2 Reformer slot opens at WorkFlow Studio between 5–7 PM on weekdays."',
        'Algorithmic Self-Correction (The "Vibe Check"): 10 minutes post-class, ask "The studio called that a Level 1 class. Was it?" and adjust difficulty ratings from crowdsourced data.',
      ],
      gate: 'Sustained liquidity growth with automated schedule ingestion and distress-bed conversion improving fill rates week over week.',
      callout: 'The Gate to Phase 3',
    },
    {
      id: 'phase-3',
      title: 'PHASE 3: "The Moat & The Lock-In"',
      timeline: 'Months 10+',
      goal: 'Turn Rise-n-Match from an occasional booking tool into the default operating system for the user\'s fitness life.',
      bullets: [
        'The Consumer "Rise Pass": Cross-Studio Pack Infrastructure—a Rise 5-Pack spendable across Studio A, B, and C, governed by the match algorithm.',
        'Deep 2-Way B2B Integrations: Official bidirectional API hooks with Mindbody, Momence, and Mariana Tek—bookings deduct Bed #4 in the studio\'s native monitor in real time.',
        'The "Marcus" Instructor Companion App: Super-lightweight app showing roster across studios with injury vectors of every Rise-n-Match student in the room.',
      ],
      gate: 'Cross-studio packs, real-time inventory sync, and instructor-side tooling create retention moat and B2B lock-in.',
    },
  ],
  devPhilosophy: {
    title: 'Dev Philosophy for the Next 180 Days',
    items: [
      'Be manual behind the curtain as long as humanly possible to save engineering runway.',
      'Treat the studio owner\'s time as radioactive. If a feature requires a boutique owner to spend 4 minutes doing data entry, the feature will fail.',
      'Own the definition of the levels. The moment a user trusts your app\'s "90% Match" badge more than they trust a studio\'s own website description, you have won the market.',
    ],
  },
};
