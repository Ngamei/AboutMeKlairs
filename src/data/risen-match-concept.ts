export interface FeatureMatrixRow {
  module: string;
  featureName: string;
  coreFunction: string;
  mvpPriority: string;
}

export interface PersonaSection {
  label: string;
  content: string;
}

export interface Persona {
  name: string;
  role: string;
  sections: PersonaSection[];
}

export interface RisenMatchConceptContent {
  overviewTitle: string;
  overviewIntro: string;
  valuePropositions: { title: string; description: string }[];
  coreVision: string;
  prd: {
    title: string;
    status: string;
    audience: string;
    objective: { title: string; problem: string; solution: string };
    featureMatrix: { title: string; rows: FeatureMatrixRow[] };
    userJourney: { title: string; steps: { title: string; body: string }[] };
    matchEngine: {
      title: string;
      intro: string;
      dataInputs: { title: string; items: string[] };
      matchLogic: { title: string; items: string[]; output: string };
    };
    scope: {
      title: string;
      inScope: { title: string; items: string[] };
      outOfScope: { title: string; items: string[] };
    };
    metrics: { title: string; items: string[] };
  };
  personas: {
    title: string;
    intro: string;
    demandTitle: string;
    supplyTitle: string;
    demand: Persona[];
    supply: Persona[];
    synthesis: { title: string; body: string };
  };
}

export const risenMatchConcept: RisenMatchConceptContent = {
  overviewTitle: 'Rise-n-Match: Concept Overview',
  overviewIntro:
    'Rise-n-Match is a dedicated Pilates booking application designed to simplify how users discover, match with, and book Pilates sessions in town. Instead of navigating fragmented scheduling systems across multiple independent studios, the platform acts as a centralized marketplace.',
  valuePropositions: [
    {
      title: 'Studio & Class Discovery',
      description:
        'A localized search engine that allows users to find Pilates studios nearby based on real-time availability, class types (e.g., Reformer, Mat, Tower), and instructor profiles.',
    },
    {
      title: 'The "Match" Aspect',
      description:
        'Helping users find the right fit for their fitness level, style preferences, and specific goals—making the onboarding process seamless for beginners and advanced practitioners alike.',
    },
    {
      title: 'Streamlined Booking & Management',
      description:
        'A unified interface where users can view schedules, book slots, manage their calendar, and handle payments without leaving the app.',
    },
  ],
  coreVision:
    'To bridge the gap between boutique Pilates studios and fitness enthusiasts through an intuitive, design-forward interface that makes scheduling a workout as smooth as booking a ride or ordering food.',
  prd: {
    title: 'Product Requirement Document (PRD)',
    status: 'Draft / v1.0',
    audience: 'Engineering, Product Design, Stakeholders',
    objective: {
      title: '1. Objective & Problem Statement',
      problem:
        'Boutique Pilates is experiencing massive growth, but the consumer discovery process is broken. Users are forced to check 4–5 individual studio schedules, navigate clunky third-party software (like Mindbody), and gamble on whether a "Level 2 Reformer" class at Studio A means the same thing as it does at Studio B. Conversely, studios struggle to fill off-peak beds.',
      solution:
        'A centralized mobile marketplace that uses a standardized compatibility algorithm to match users to the exact right bed, instructor, and workout style.',
    },
    featureMatrix: {
      title: '2. Core Feature Matrix',
      rows: [
        {
          module: 'Consumer',
          featureName: 'The Onboarding Quiz',
          coreFunction: 'Collects skill level, goals, injury history, and preferred equipment',
          mvpPriority: 'P0',
        },
        {
          module: 'Consumer',
          featureName: '"Match-Ranked" Feed',
          coreFunction: 'Lists upcoming local classes sorted by compatibility percentage',
          mvpPriority: 'P0',
        },
        {
          module: 'Consumer',
          featureName: 'Standardized Studio Cards',
          coreFunction: 'Displays bio, equipment brands, grip-sock policy, and real-time open beds',
          mvpPriority: 'P0',
        },
        {
          module: 'Consumer',
          featureName: 'Frictionless Checkout',
          coreFunction: '2-click booking via Apple Pay / Google Pay / stored card',
          mvpPriority: 'P0',
        },
        {
          module: 'Studio',
          featureName: 'Roster Intelligence',
          coreFunction: 'Shows instructors the "Match Profiles" of incoming students',
          mvpPriority: 'P1',
        },
        {
          module: 'Studio',
          featureName: 'Dynamic Slot Publisher',
          coreFunction: 'Allows owners to list empty beds at normal or "last-minute" rates',
          mvpPriority: 'P1',
        },
        {
          module: 'System',
          featureName: 'The Match Engine',
          coreFunction: 'The math calculating user inputs against studio tags',
          mvpPriority: 'P0',
        },
      ],
    },
    userJourney: {
      title: '3. The Core User Journey',
      steps: [
        {
          title: 'Preference Capture: App Launch',
          body: 'User downloads the app and completes a 4-question interactive prompt: Current Fitness Level, Primary Goal (Rehab, Burn, Flexibility), Preferred Apparatus (Reformer, Tower, Mat), and known joint sensitivities.',
        },
        {
          title: 'Algorithmic Sorting: The Feed',
          body: 'The app generates the user\'s localized home screen, overriding standard chronological sorting to put a "94% Match" class at the very top, complete with a callout tag: "Great for lower-back care."',
        },
        {
          title: 'The Vibe Check: Studio Detail',
          body: 'User taps the class. They see 3 high-res photos of the space, an equipment overview (e.g., Merrithew V2 Max beds), cancellation window terms, and a live counter showing "3 of 8 beds remaining."',
        },
        {
          title: 'Frictionless Commitment: Checkout',
          body: 'User selects a single drop-in pass. Because their Apple/Google wallet is linked, they bypass studio account creation and sign the digital liability waiver via a single thumbprint check.',
        },
        {
          title: 'The Digital Handshake: Post-Purchase',
          body: 'User receives an automatic calendar invite, and the studio\'s instructor dashboard instantly populates a card: "Rachel (New to Studio, 94% Match, watch right shoulder)."',
        },
      ],
    },
    matchEngine: {
      title: '4. Feature Deep-Dive: "The Match Engine" (P0)',
      intro:
        'To achieve the platform\'s namesake, the software cannot just act as a digital calendar; it must translate user subjectivity into data.',
      dataInputs: {
        title: 'Data Inputs Required',
        items: [
          'User Vector: [Skill_Level: 1-5], [Goal: String], [Pace_Preference: Slow/Medium/Athletic], [Injury_Flags: Array]',
          'Class Vector: [Difficulty_Rating: 1-5], [Focus: String], [Pace: Slow/Medium/Athletic], [Contraindications: Array]',
        ],
      },
      matchLogic: {
        title: 'The Match Logic (MVP)',
        items: [
          'Hard Blockers: If a user flags [Injury: Pregnant] and the Class Vector contains [Contraindication: Inversions], the class is hidden or dimmed with an "Incompatible" tag.',
          'The Weighted Score: Skill level match = 40% of total score; Pace match = 30% of total score; Focus/Goal match = 30% of total score.',
        ],
        output:
          'Output rendered to UI: A visual badge ranging from "Top Match" (>85%) down to "Stretch Goal" (<60%).',
      },
    },
    scope: {
      title: '5. Scope Fences (MVP vs. v2.0)',
      inScope: {
        title: 'IN SCOPE for MVP',
        items: [
          'iOS Native (or Flutter cross-platform) Client App.',
          'Web-based, lightweight admin portal for Studio Owners to manually input schedules.',
          'Stripe Connect integration (platform fee split; remainder auto-routes to the studio\'s bank).',
          'Standard drop-in purchases.',
        ],
      },
      outOfScope: {
        title: 'OUT OF SCOPE for MVP',
        items: [
          'Direct Mindbody / ClassPass API two-way sync.',
          'Monthly recurring subscription tiers.',
          'Social features (seeing which classes your friends are booking).',
          'In-app video streaming or digital on-demand classes.',
        ],
      },
    },
    metrics: {
      title: '6. North Star Success Metrics',
      items: [
        'Time-to-First-Book: Average seconds from finishing the Quiz to authorizing payment (Target: < 120 seconds).',
        'Match Trust Rate: Percentage of bookings on classes ranked in the user\'s "Top 3 Matches" (Target: > 75%).',
        'Studio Bed Fill Rate: Percentage of listed "Rise-n-Match slots" purchased 24 hours prior to class kickoff.',
      ],
    },
  },
  personas: {
    title: 'User Personas',
    intro:
      'To build a successful two-sided marketplace, the product has to solve two entirely different sets of anxieties: the friction of the consumer and the unit economics of the supplier.',
    demandTitle: 'Part 1: The Demand Side (Clients)',
    supplyTitle: 'Part 2: The Supply Side (Studio Owners)',
    demand: [
      {
        name: '"Intimidated Ivy"',
        role: 'The Pilates-Curious Novice',
        sections: [
          { label: 'Demographics', content: '26–32, Corporate Tech/Marketing, disposable income but time-poor.' },
          {
            label: 'The Backstory',
            content:
              'She watches aesthetic Reformer TikToks and wants the "long, lean core" results, but she has never stepped onto a machine.',
          },
          {
            label: 'Her Core Anxiety',
            content:
              '"I am going to look like an idiot." She doesn\'t know the difference between a Reformer, a Cadillac, or a Megaformer. She\'s terrified of booking an "All Levels" class and realizing everyone else is a former dancer.',
          },
          {
            label: 'What wins her over',
            content:
              'The Quiz: Being told "Based on your zero experience, here is your 98% safe entry point." The "What to Expect" module with a checklist on the studio card (grip socks, lockers, arrive early for machine walkthrough).',
          },
        ],
      },
      {
        name: '"Precision Chloe"',
        role: 'The Pilates Nomad',
        sections: [
          { label: 'Demographics', content: '34–42, travels 30% of the time for work, spends ~$250/mo on fitness.' },
          {
            label: 'The Backstory',
            content:
              'She has practiced Pilates for 4 years. She knows her exact spring tensions and prefers Merrithew machines over Balanced Body.',
          },
          {
            label: 'Her Core Anxiety',
            content:
              'Wasted time and terrible UI. She hates opening Safari, finding three random studios, clicking "Book," being redirected to Mindbody, and realizing the class was actually full.',
          },
          {
            label: 'What wins her over',
            content:
              'Global Machine Filters (e.g., Stott Reformer or Tower Class) and 2-Click Apple Pay with zero studio-level account creation.',
          },
        ],
      },
      {
        name: '"Rehab David"',
        role: 'The Post-Injury Seeker',
        sections: [
          {
            label: 'Demographics',
            content: '40–55, recovering from an L4/L5 disc bulge, frozen shoulder, or postpartum separation.',
          },
          {
            label: 'The Backstory',
            content:
              'His Physical Therapist told him he needs Pilates to rebuild his core, but must avoid extreme forward flexion.',
          },
          {
            label: 'His Core Anxiety',
            content:
              'Re-injury. Private sessions cost $130/hour, but standard group classes feel like playing Russian Roulette with his spine.',
          },
          {
            label: 'What wins him over',
            content:
              'The Contraindication Filter ("No Spinal Flexion" or "Pregnancy Safe") and Instructor Bio Badging (Stott Rehab Specialist, Pre/Post-Natal Certified).',
          },
        ],
      },
    ],
    supply: [
      {
        name: '"Margin-Squeezed Elena"',
        role: 'The Boutique Owner',
        sections: [
          { label: 'Demographics', content: '38, former instructor turned owner of Aura Pilates (an 8-bed studio).' },
          {
            label: 'The Backstory',
            content:
              'Peak classes have waitlists, but 10:30 AM, 1:00 PM, and 3:00 PM classes sit with only 2 people. Fixed costs are eating her alive.',
          },
          {
            label: 'Her Core Anxiety',
            content:
              'ClassPass cannibalization—discount hoppers who will never buy a full-priced 10-pack from her studio.',
          },
          {
            label: 'What wins her over',
            content:
              'Yield Control: list "Rise-n-Match Last Minute Beds" at a respectable 15% discount. High-Intent Leads looking for a long-term fitness home.',
          },
        ],
      },
      {
        name: '"Protean Marcus"',
        role: 'The Master Instructor',
        sections: [
          { label: 'Demographics', content: '29, independent contractor teaching 22 classes a week across 3 boutique studios.' },
          {
            label: 'The Backstory',
            content:
              'He plans intricate, athletic "Level 2.5 Cardio Jumpboard" classes and takes immense pride in his sequencing.',
          },
          {
            label: 'His Core Anxiety',
            content:
              'The "Trojan Horse" Beginner—an unvetted beginner who doesn\'t know how to put the footbar up, forcing him to babysit instead of coaching.',
          },
          {
            label: 'What wins him over',
            content:
              'Roster Intelligence: seeing "Bed 4 is Sarah. 1st time at this studio, 91% Match Score, 40 logged Reformer hours elsewhere."',
          },
        ],
      },
    ],
    synthesis: {
      title: 'The Marketplace Synthesis',
      body: 'When designing the UI, hold this rule in your head: Elena\'s empty 1:00 PM bed is the exact answer to Ivy\'s intimidation. Because the 1:00 PM class only has 2 people in it, the instructor has the bandwidth to give Ivy the low-stress, hands-on introduction she is begging for. Rise-n-Match\'s algorithm exists strictly to introduce those two specific people to each other.',
    },
  },
};
