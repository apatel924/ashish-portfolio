/** Shared data for playable mini-games (ported from arcade portfolio). */

/** Quiz Arena cabinet — hooks, RN, and product patterns from building the app */
export const QUIZ_ARENA_QUESTIONS = [
  {
    q: "What does useState return in React?",
    opts: ["A value only", "A pair: current state + setter function", "A CSS class name", "A database row"],
    a: 1,
  },
  {
    q: "You used hooks to ship multiple game flows (profiles, history, Solo). What is a good default for screen-local UI state?",
    opts: ["useState / useReducer in that screen", "One global var on window", "Only URL hash", "No state in React"],
    a: 0,
  },
  {
    q: "Quiz Arena pairs a mobile client with a Node backend. What powers live / low-latency leaderboards well?",
    opts: ["WebSockets", "Weekly CSV email", "DNS TXT records", "Print statements only"],
    a: 0,
  },
  {
    q: "React Native components ultimately render to…",
    opts: ["Browser DOM only", "Native platform views", "Photoshop layers", "Excel"],
    a: 1,
  },
  {
    q: "When lists feel janky, which hook helps memoize callbacks passed to children?",
    opts: ["useCallback", "useFence", "useLucky", "useSpreadsheet"],
    a: 0,
  },
  {
    q: "Growing MAU with lean marketing often pairs product work with…",
    opts: ["Ignoring store listings", "ASO + performance fixes (e.g., images)", "Deleting analytics", "Removing navigation"],
    a: 1,
  },
];

export const QUIZ_QUESTIONS = [
  {
    q: "What does useState return in React?",
    opts: ["A value only", "An array: [value, setter]", "An object with get/set", "A promise"],
    a: 1,
  },
  {
    q: "Which protocol powers real-time quiz / live leaderboards well?",
    opts: ["HTTP/2 only", "REST polling", "WebSockets", "GraphQL queries"],
    a: 2,
  },
  {
    q: "What does SSG stand for in Next.js?",
    opts: [
      "Server Side Generating",
      "Static Site Generation",
      "Serverless Site Gen",
      "Styled System Grid",
    ],
    a: 1,
  },
  {
    q: "Which DB is a strong default for relational business data?",
    opts: ["MongoDB", "Redis", "PostgreSQL", "DynamoDB"],
    a: 2,
  },
  {
    q: "What does API stand for?",
    opts: [
      "App Program Interface",
      "Application Programming Interface",
      "Advanced Protocol Integration",
      "Automated Process Index",
    ],
    a: 1,
  },
];

export const ABOUT_QUESTIONS = [
  {
    q: "Where can you find Ashish's code?",
    opts: ["gitlab.com/apatel", "bitbucket/apatel", "github.com/apatel924", "codepen.io/apatel"],
    a: 2,
  },
  {
    q: "Which role includes HourBlock on this site?",
    opts: ["Printing ERP", "Front-End Developer", "Optician only", "Data scientist"],
    a: 1,
  },
  {
    q: "What stack is Quiz Arena built with here?",
    opts: ["Vue only", "React Native + Node", "Rails", "WordPress"],
    a: 1,
  },
  {
    q: "Ashish ships dashboards and pages for…",
    opts: ["Only one client", "Multiple client accounts and partners", "Print-only", "Mobile-only"],
    a: 1,
  },
];

/** OptiVue cabinet — practice CRM, patient journey, and eyecare office workflows */
export const OPTIVUE_CRM_QUESTIONS = [
  {
    q: "A clinic CRM is built to help teams manage relationships and work—what is it most trying to cut down on?",
    opts: [
      "Dropped handoffs and follow-ups that fall through the cracks",
      "The number of chairs in the waiting room",
      "Printer paper usage only",
      "How often the logo appears",
    ],
    a: 0,
  },
  {
    q: "Tying every appointment to one patient record (instead of duplicate charts) mostly supports…",
    opts: [
      "Continuity of care and a single source of truth",
      "Faster social media growth",
      "Larger default font sizes",
      "Unlimited free contacts trials",
    ],
    a: 0,
  },
  {
    q: "In common eyecare charting, “OD” (oculus dexter) labels…",
    opts: [
      "The patient’s right eye",
      "The patient’s left eye",
      "Both eyes together only",
      "A contact-lens brand name",
    ],
    a: 0,
  },
  {
    q: "A reasonable view of a patient “pipeline” in a specialty CRM might be…",
    opts: [
      "Lead or recall → exam → order / lab → dispense or follow-up",
      "Only stock tickers and crypto prices",
      "A single static PDF forever",
      "Printer firmware versions",
    ],
    a: 0,
  },
  {
    q: "Role-based access in healthcare-facing software is stressed because…",
    opts: [
      "PHI and sensitive data should be visible only to roles that need it (least privilege)",
      "It makes the CSS bundle smaller",
      "It replaces the need for passwords",
      "It guarantees 120 FPS in the waiting room",
    ],
    a: 0,
  },
  {
    q: "Running eligibility or benefit checks in batches before a full clinic day mainly helps the front desk…",
    opts: [
      "Catch coverage issues early instead of at check-in surprise",
      "Predict lottery numbers",
      "Resize monitor bezels",
      "Rotate the company logo",
    ],
    a: 0,
  },
];

export const COLOR_PALETTE = [
  "#7c6fff",
  "#ff6b9d",
  "#4ecdc4",
  "#ffd93d",
  "#ff6b35",
  "#a8ff78",
  "#f7b731",
  "#e056fd",
];

export const TYPER_WORDS = [
  "const",
  "function",
  "return",
  "async",
  "await",
  "import",
  "export",
  "useState",
  "useEffect",
  "props",
  "interface",
  "type",
  "class",
  "extends",
  "Promise",
  "fetch",
  "router",
  "middleware",
  "payload",
  "schema",
];
