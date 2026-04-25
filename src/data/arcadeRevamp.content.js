/**
 * Retro arcade portfolio — content & asset manifest
 * -------------------------------------------------
 * Fill in or adjust the objects below. We will wire this into the new UI next.
 *
 * Images: paths are relative to `src/images/` (folders already in the repo).
 *   Example: "Qa-Images/Discover-page.png" → file at src/images/Qa-Images/Discover-page.png
 *
 * Games: use `game.kind` as a short id (snake_case). We'll implement each mini-game
 *   to match your experience. Describe the vibe in `game.notesForDev`.
 */

const arcadeRevampContent = {
  meta: {
    siteTitle: "Ashish Patel — Full Stack Software Engineer",
    heroTagline:
      "Dashboards, product pages, APIs, and maintainable front ends—arcade edition.",
    playerAbout:
      "I build client-facing dashboards, marketing and product pages, and the backend structure that keeps features shippable. Outside of work I stay pretty athletic—badminton, soccer, baseball, cricket, and a few other sports—I play chess, love to dance, and I’m a regular at the gym. I’m also into games: Apex Legends, CS:GO, and Valorant. Use the cabinets on the left to flip between roles, the Projects cabinet for the full showroom, and Play for mini-games.",
  },

  resume: {
    /** File under `public/` — served at this URL */
    publicUrl: "/docs/Ashish_Patel_Full_Stack_Software_Engineer_Resume%20(1).pdf",
    downloadFileName: "Ashish_Patel_Full_Stack_Software_Engineer_Resume.pdf",
    /** If you rename the PDF in public/docs, update publicUrl above to match */
  },

  social: [
    { id: "github", label: "GitHub", url: "https://github.com/apatel924" },
    {
      id: "zetaweb",
      label: "Zetaweb Studios",
      url: "https://zetawebstudios.com",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ashish-patel-0b13a2219",
    },
    { id: "email", label: "Email", url: "mailto:a.patel38@hotmail.com" },
  ],

  /**
   * Each “cabinet” = one job: about copy + art + mini-game spec.
   * Reorder to match how you want them on the arcade floor.
   */
  experiences: [
    {
      id: "hourblock",
      period: "2025-04 – Present · Toronto, Canada",
      title: "Front-End Developer",
      company: "HourBlock",
      missionPoints: [
        "Owned front-end graphics and display quality: dashboard layouts, dense data views, and marketing/partner pages that have to read clearly at a glance.",
        "Shipped React in production: multi-account analytics/ops UIs, shared components, and sane state for real client workflows.",
        "Integrated REST services and tightened server-side boundaries (services, errors, payload shape) so UI and data stay predictable.",
        "Worked with design/product on perf, a11y, and handoff—fewer one-off styles, more reusable pieces.",
      ],
      highlightStats: [
        {
          kicker: "UI",
          num: "Displays",
          label: "Dashboards & pages",
          detail: "Visual polish + data-heavy views customers live in",
        },
        {
          kicker: "Stack",
          num: "React",
          label: "Production UI",
          detail: "Component model, theming, and shipping without regressions",
        },
        {
          kicker: "Data",
          num: "REST",
          label: "Integrations",
          detail: "External APIs, contracts, and server glue behind the views",
        },
      ],
      skillBars: [
        { label: "UI engineering", pct: 90 },
        { label: "APIs & data flow", pct: 86 },
        { label: "Production quality", pct: 88 },
      ],
      technologies: ["React", "JavaScript", "REST APIs", "API integration"],
      images: {
        hero: null,
        gallery: [],
      },
      game: {
        kind: "hourblock_color_match",
        title: "Color Match",
        accent: "#3cf2c8",
        pickTitle: "COLOR MATCH",
        pickBlurb:
          "Remember the swatch, then dial hue / saturation / brightness — the same eye for detail as shipping client-ready UI.",
        marqueeSub:
          "Owned dashboard and display quality: shipped multi-account React UIs, shared components, and REST integrations with stable contracts and polish where dense client workflows have to read clearly at a glance.",
        notesForDev: "Color dial mini-game ↔ HourBlock front-end craft + client themes.",
      },
    },
    {
      id: "quiz-arena",
      period: "2023-12 – Present",
      title: "Full Stack Developer / iOS Developer",
      company: "Quiz Arena",
      missionPoints: [
        "Co-founder; React Native client + Node/Express; MongoDB + Socket.io for live play where it fit.",
        "Shipped profiles, match history, and Solo; tightened navigation, UI, and client performance.",
        "1K+ MAU, 100K+ games; improved image handling and App Store keywords with minimal ad spend.",
      ],
      highlightStats: [
        {
          kicker: "Traction",
          num: "1K+",
          label: "MAU",
          detail: "Live App Store product, not a portfolio demo",
        },
        {
          kicker: "Scale",
          num: "100K+",
          label: "Plays",
          detail: "Match + solo load in the wild",
        },
        {
          kicker: "Stack",
          num: "RN+Node",
          label: "Socket.io",
          detail: "Mobile client, API, and realtime when the mode needed it",
        },
      ],
      skillBars: [
        { label: "Product & delivery", pct: 92 },
        { label: "Mobile UX", pct: 88 },
        { label: "Growth / performance", pct: 82 },
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Expo"],
      /** Matches `title` in src/data/projects.js — gallery stays in sync with showroom */
      relatedProjectTitles: ["Quiz Arena"],
      /** Paths under src/images/ — pick hero + gallery for this cabinet */
      images: {
        hero: "Qa-Images/Discover-page.png",
        gallery: [
          "Qa-Images/Flat-app-preview-1.png",
          "Qa-Images/Flat-app-preview.png",
          "Qa-Images/Leaderboard-page.png",
          "Qa-Images/Play-page.png",
          "Qa-Images/You-lost-page.png",
          "Qa-Images/IMG_9187.PNG",
          "Qa-Images/IMG_9188.PNG",
          "Qa-Images/IMG_9189.PNG",
          "Qa-Images/IMG_9190.PNG",
          "Qa-Images/IMG_9191.PNG",
          "Qa-Images/IMG_9192.PNG",
          "Qa-Images/IMG_9193.PNG",
          "Qa-Images/IMG_9194.PNG",
          "Qa-Images/IMG_9195.PNG",
        ],
      },
      game: {
        kind: "quiz_arena_tap_battle",
        title: "Live Trivia",
        accent: "#ff6b9d",
        pickTitle: "QUIZ ARENA",
        quizTitle: "QUIZ ARENA",
        pickBlurb: "Timed trivia on hooks, React Native, and how we shipped multiple live game modes.",
        marqueeSub:
          "Co-built the quiz product from the ground up—profiles, match history, Solo mode, React Native + Node, and growth to 1K+ MAU / 100K+ plays with performance and ASO work.",
        playSubtitle:
          "useState, realtime, and shipping modes players feel — 10 sec per question, Arcade edition.",
        notesForDev: "Quiz question set highlights hooks + RN + product delivery.",
      },
    },
    {
      id: "expense-trend",
      period: "2023-12 – 2024-03",
      title: "Full Stack Web Developer",
      company: "Expense Trend",
      missionPoints: [
        "Integrated Wealthica (aggregation + account link) and built Node/Express + DB sync around it—auth, refresh, and error handling on real user paths.",
        "Wired additional REST expense/banking sources so the app exposed one consistent model in the UI.",
        "Figma to React: shipped loading, empty, and error states for live API data—not static mocks.",
      ],
      highlightStats: [
        {
          kicker: "Integrations",
          num: "Wealthica",
          label: "Aggregation",
          detail: "Account linking, sync, and server-side handling",
        },
        {
          kicker: "Backend",
          num: "Express",
          label: "API + DB",
          detail: "Routes, models, and glue for third-party + own data",
        },
        {
          kicker: "UI",
          num: "React",
          label: "Figma → app",
          detail: "Responsive views for real money/expense data",
        },
      ],
      skillBars: [
        { label: "API integrations", pct: 88 },
        { label: "Figma → React", pct: 86 },
        { label: "Node / data", pct: 84 },
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "Wealthica API",
        "REST APIs",
        "Figma",
      ],
      relatedProjectTitles: ["Resource-Wall", "Interview Scheduler"],
      images: {
        hero: null,
        gallery: [],
      },
      game: {
        kind: "expense_trend_runner",
        title: "Type Sprint",
        accent: "#ffd93d",
        pickTitle: "TYPE SPRINT",
        pickBlurb: "Type code tokens against the clock — same rhythm as wiring Express + React on a deadline.",
        marqueeSub:
          "Structured backend data + REST APIs for reliable integrations, then shipped Figma-faithful React that made the product easier to use—clean contracts, clean UI, shipped together.",
        playSubtitle: "Fast fingers, clean tokens — like shipping routes, handlers, and components without typos.",
        notesForDev: "TypeRacer ↔ Expense Trend full-stack + Figma-to-React velocity.",
      },
    },
    {
      id: "gamercoach",
      period: "2023-06 – 2023-12",
      title: "Full Stack Developer",
      company: "GamerCoach",
      missionPoints: [
        "Built a calendar and booking system for teachers and students: availability, session booking, and in-app management—the core product loop.",
        "Next.js multi-page work, interactive UI, and motion only where it moved conversion, not for decoration.",
        "SEO and page structure so coaching flows were discoverable.",
      ],
      highlightStats: [
        {
          kicker: "Product",
          num: "Bookings",
          label: "Teacher ↔ student",
          detail: "Calendar, slots, and session flows in-app",
        },
        {
          kicker: "Stack",
          num: "Next.js",
          label: "Full stack",
          detail: "Multi-route UI + server work you can ship to",
        },
        {
          kicker: "Surface",
          num: "SEO",
          label: "Discoverability",
          detail: "Technical + on-page for growth",
        },
      ],
      skillBars: [
        { label: "UX & product polish", pct: 88 },
        { label: "Next.js delivery", pct: 86 },
        { label: "SEO & content", pct: 78 },
      ],
      technologies: ["Next.js", "React.js", "Node.js", "SEO"],
      relatedProjectTitles: ["Remote-Together"],
      images: {
        hero: "Remote-together-Images/Remote-together-1.png",
        gallery: [
          "Remote-together-Images/Remote-together-2.png",
          "Remote-together-Images/Remote-together-3.png",
          "Remote-together-Images/Remote-together-4.png",
        ],
      },
      game: {
        kind: "gamercoach_reaction",
        title: "Reaction Test",
        accent: "#4ecdc4",
        pickTitle: "REACTION TEST",
        pickBlurb: "Five rounds — hit GO the instant it appears. Same timing instinct as nailing motion and UX polish.",
        marqueeSub:
          "Drove major UX redesigns on Next.js—responsive multi-page experiences, interactive animation, a real scheduling system, and SEO work that measurably boosted visibility and engagement.",
        playSubtitle:
          "Dashboard reflexes — 5 rounds, click on GO. Train the reflex to ship polished, interactive UX on repeat.",
        notesForDev: "Reaction test ↔ GamerCoach motion, scheduling, and SEO iteration speed.",
      },
    },
    {
      id: "bright-vision",
      period: "2021-12 – 2024-01",
      title: "Manager/Optician/Healthcare professional",
      company: "Bright Vision Optical",
      missionPoints: [
        "Day-to-day clinic ops: staff scheduling, patient flow, and books—clear ownership and coordination with the team.",
        "Kept service quality and follow-up consistent at volume.",
        "Improved internal processes over time; same “fix the system” mindset, less of it in code.",
      ],
      highlightStats: [
        {
          kicker: "Ops",
          num: "Clinic",
          label: "Operations",
          detail: "Schedule, patients, money—end to end",
        },
        {
          kicker: "Team",
          num: "Lead",
          label: "Staff + solo",
          detail: "Clear handoffs, fewer dropped balls",
        },
        {
          kicker: "Process",
          num: "Iterate",
          label: "Workflows",
          detail: "Train, adjust, measure what stuck",
        },
      ],
      skillBars: [
        { label: "Operations & people", pct: 90 },
        { label: "Process & reliability", pct: 88 },
        { label: "Service quality", pct: 87 },
      ],
      technologies: [],
      images: {
        hero: null,
        gallery: [],
      },
      game: {
        kind: "bright_vision_aim",
        title: "Aim Drill",
        accent: "#a8ff78",
        pickTitle: "AIM DRILL",
        pickBlurb:
          "Track a moving bullseye — the same steady hand and focus you use framing lenses and guiding patients.",
        marqueeSub:
          "Ran day-to-day clinic operations—staff scheduling, patient flow, and follow-up—keeping service quality consistent at volume and improving how the team worked together over time.",
        playSubtitle:
          "30-second round — hover each dart target to score; when you lock on, it jumps to a random spot. See how you rank on the board.",
        notesForDev:
          "Pointer-hover aim trainer — dartboard target teleports on pointerenter; spawn avoids cursor to reduce double ticks.",
      },
    },
    {
      id: "optivue",
      period: "2024 – Present",
      title: "Full Stack Software Engineer",
      company: "OptiVue",
      missionPoints: [
        "Shipped practice-management and CRM-style features: patient and appointment data, task queues, and UIs the front desk and clinical staff use all day.",
        "Modeled end-to-end journeys—recall, exam, order, and follow-up—so ownership and handoffs stay visible in the product.",
        "Partnered on integrations and performance: fewer duplicate records, clearer chart states, and audit-friendly flows where healthcare context matters.",
      ],
      highlightStats: [
        {
          kicker: "CRM",
          num: "Pipeline",
          label: "Stages & tasks",
          detail: "Leads, recalls, and follow-up ownership",
        },
        {
          kicker: "Domain",
          num: "Eye care",
          label: "Specialty",
          detail: "Workflows aligned with the clinic floor",
        },
        {
          kicker: "Stack",
          num: "Web",
          label: "Full stack",
          detail: "APIs, records, and responsive ops tools",
        },
      ],
      skillBars: [
        { label: "Product & workflows", pct: 90 },
        { label: "Healthcare UX", pct: 86 },
        { label: "Data integrity", pct: 88 },
      ],
      technologies: ["React", "TypeScript", "Node.js", "REST APIs", "CRM / practice software"],
      images: {
        hero: null,
        gallery: [],
      },
      game: {
        kind: "optivue_clinic_flow",
        title: "Clinic Flow",
        accent: "#5eb0ff",
        pickTitle: "CLINIC FLOW",
        quizTitle: "CLINIC FLOW",
        pickBlurb:
          "CRM and chart trivia—recalls, pipelines, and patient records in the same headspace as shipping a live eye practice product.",
        marqueeSub:
          "Built full-stack features for an eye-clinic platform: patient journeys, scheduling and task handoffs, and reliable CRM-style surfaces that reduce missed follow-ups and keep the chart trustworthy.",
        playSubtitle: "Pipelines, PHI basics, and office rhythm — 10 sec per question, practice edition.",
        notesForDev: "Quiz game ↔ OptiVue CRM, EMR, and optometry office workflows.",
      },
    },
  ],

  /**
   * Reference-only: the live arcade “Project showroom” reads `projectsData` from
   * `src/data/projects.js` (thumbnails + full image arrays). Keep paths in sync
   * if you add new screenshots there.
   */
  projectsArchive: [
    {
      id: "resource-wall",
      title: "Resource Wall",
      blurb: "Pinterest-style resource board with favorites, search, and auth.",
      images: [
        "Resource-Wall-Images/Resource-Wall-1.png",
        "Resource-Wall-Images/Resource-Wall-2.png",
        "Resource-Wall-Images/Resource-Wall-3.png",
        "Resource-Wall-Images/Resource-Wall-4.png",
      ],
    },
    {
      id: "interview-scheduler",
      title: "Interview Scheduler",
      blurb: "React scheduler with Storybook, Jest, and Cypress coverage.",
      images: [
        "Interview-scheduler-Images/Scheduler-add-appt.png",
        "Interview-scheduler-Images/Scheduler-added-appt.png",
        "Interview-scheduler-Images/scheduler-delete-appt.png",
        "Interview-scheduler-Images/scheduler-main-page.png",
      ],
    },
  ],

  /**
   * Full inventory of image files currently in the repo (for quick copy-paste).
   * Not used by code until we import — reference only.
   */
  _imageInventory: {
    root: ["linkedin-img.jpeg"],
    "Qa-Images": [
      "Discover-page.png",
      "Flat-app-preview-1.png",
      "Flat-app-preview.png",
      "Leaderboard-page.png",
      "Play-page.png",
      "You-lost-page.png",
      "IMG_9187.PNG",
      "IMG_9188.PNG",
      "IMG_9189.PNG",
      "IMG_9190.PNG",
      "IMG_9191.PNG",
      "IMG_9192.PNG",
      "IMG_9193.PNG",
      "IMG_9194.PNG",
      "IMG_9195.PNG",
    ],
    "Remote-together-Images": [
      "Remote-together-1.png",
      "Remote-together-2.png",
      "Remote-together-3.png",
      "Remote-together-4.png",
    ],
    "Resource-Wall-Images": [
      "Resource-Wall-1.png",
      "Resource-Wall-2.png",
      "Resource-Wall-3.png",
      "Resource-Wall-4.png",
    ],
    "Interview-scheduler-Images": [
      "Scheduler-add-appt.png",
      "Scheduler-added-appt.png",
      "scheduler-delete-appt.png",
      "scheduler-main-page.png",
    ],
  },
};

export default arcadeRevampContent;
