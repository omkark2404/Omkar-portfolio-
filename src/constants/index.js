export const navLinks = [{id:"about",title:"About"},{id:"experience",title:"Experience"},{id:"projects",title:"Projects"},{id:"contact",title:"Contact"}];

// Experience and campus leadership. Titles and dates are from Omkar Kumar's
// resumes. The IIC date range below (Apr 2025–Apr 2026) follows the Business
// Analyst resume; a conflicting range appears in the portfolio brief and is
// listed as outstanding in the README.
const experiences = [
  {
    title: "Software Development Intern",
    company_name: "Protos Consulting Pvt. Ltd.",
    location: "New Delhi, India",
    date: "May 2026 – Jul 2026",
    iconBg: "#383E56",
    points: [
      "Worked on AI/ML application development.",
      "Dataset preparation, output validation and data-quality checks within software and AI/ML workflows.",
    ],
  },
  {
    title: "Production & Data Analytics Intern",
    company_name: "Ralson Rubber Pvt. Ltd.",
    location: "Ludhiana, India",
    date: "Jun 2025 – Jul 2025",
    iconBg: "#383E56",
    points: [
      "Manufacturing performance analysis and SAP-based reporting.",
      "Operational KPI monitoring (output, rejection levels, machine utilisation, downtime).",
      "Python/pandas analysis where supported.",
    ],
  },
  {
    title: "Founding Member, Product & Business Strategy",
    company_name: "Rabonna",
    location: "Patiala, India",
    date: "Jan 2025 – Mar 2026",
    iconBg: "#383E56",
    points: [
      "Stakeholder requirements gathering from 6+ partner venues.",
      "Partner feedback and product feature requirements/planning across venue discovery, availability, payments and onboarding.",
    ],
  },
  {
    title: "Executive Board Member",
    company_name: "Institution's Innovation Council, TIET",
    location: "Thapar Institute of Engineering & Technology",
    date: "Apr 2025 – Apr 2026",
    iconBg: "#383E56",
    points: [
      "Progressed from Core Member to Managing Head and then Executive Board Member.",
      "Supported the planning and execution of four innovation events: a hackathon, ideathon, pitch competition and speaker series.",
      "Coordinated with speakers, vendors and student teams during event preparation and delivery.",
      "Supported stakeholder communication, team coordination and event logistics across council initiatives.",
    ],
  },
];

const projects = [
  {
    "name": "FinOps Copilot",
    "description": "A cloud-billing analysis prototype for FOCUS-formatted CSV and Parquet exports. It combines spend exploration, statistical forecasts, anomaly flags and human review, with optional Gemini explanations of numeric evidence. Forecasting uses naive/moving-average baselines, Holt-Winters and eligible LightGBM candidates (no LSTM). In the README evaluation, the six-day forecast WAPE is 80.1% and MAE does not improve on the naive baseline, so predictive quality is unproven. Realised savings are not established.",
    "tags": [
      {
        "name": "Python",
        "color": "blue-text-gradient"
      },
      {
        "name": "FastAPI",
        "color": "green-text-gradient"
      },
      {
        "name": "Next.js",
        "color": "pink-text-gradient"
      },
      {
        "name": "SQL",
        "color": "violet-text-gradient"
      },
      {
        "name": "LightGBM",
        "color": "orange-text-gradient"
      }
    ],
    "image": "/assets/projects/finops-dashboard.png",
    "images": [
      "/assets/projects/finops-dashboard.png",
      "/assets/projects/finops-cover.svg"
    ],
    "source_code_link": "https://github.com/omkark2404/finops-copilot",
    "live_demo_link": "https://finops-copilot-eta.vercel.app",
    "features": [
      "Validate billing exports and retain dataset provenance.",
      "Explore spend and statistical anomaly flags.",
      "Compare forecasting candidates (naive/moving-average baselines, Holt-Winters, eligible LightGBM) with simple baselines.",
      "Review recommendations without changing cloud infrastructure."
    ]
  },
  {
    "name": "Pathfinder",
    "description": "A last-mile delivery decision prototype combining route analytics, risk scoring, OR-Tools optimisation and what-if scenarios. Data includes a real 13-route sample of the Amazon Last Mile dataset and a synthetic planned-vs-actual fixture; synthetic results do not establish real-world accuracy or operational impact. Optimisation uses straight-line (Haversine) distance and has no time windows yet. Dispatch decisions stay under human review.",
    "tags": [
      {
        "name": "Python",
        "color": "blue-text-gradient"
      },
      {
        "name": "FastAPI",
        "color": "green-text-gradient"
      },
      {
        "name": "Next.js",
        "color": "pink-text-gradient"
      },
      {
        "name": "scikit-learn",
        "color": "violet-text-gradient"
      },
      {
        "name": "OR-Tools",
        "color": "orange-text-gradient"
      }
    ],
    "image": "/assets/projects/pathfinder-demo.png",
    "images": [
      "/assets/projects/pathfinder-demo.png",
      "/assets/projects/pathfinder-cover.svg"
    ],
    "source_code_link": "https://github.com/omkark2404/Pathfinder--AI-Powered-Last-Mile-Delivery-Decision-Intelligence",
    "live_demo_link": "https://pathfinder-ai-powered-last-mile-del.vercel.app",
    "features": [
      "Score route risk 0–100 and compare planned vs actual stop sequences (Kendall Tau).",
      "Explore route-level delivery risk and deviations.",
      "Optimise stop sequences with Google OR-Tools.",
      "Compare resequencing and multi-vehicle scenarios.",
      "Keep dispatch decisions under human review."
    ]
  },
  {
    "name": "FraudLens-AI",
    "description": "A document-processing prototype using PaddleOCR, image preprocessing and rule-based validation to extract fields and flag quality issues or possible anomalies. Heuristic flags support review; they do not establish that a document is fraudulent. An optional Gemini LLM fallback is available for field extraction.",
    "tags": [
      {
        "name": "Python",
        "color": "blue-text-gradient"
      },
      {
        "name": "Flask",
        "color": "green-text-gradient"
      },
      {
        "name": "PaddleOCR",
        "color": "pink-text-gradient"
      },
      {
        "name": "OpenCV",
        "color": "violet-text-gradient"
      },
      {
        "name": "SQLite",
        "color": "orange-text-gradient"
      }
    ],
    "image": "/assets/projects/fraudlens-demo.png",
    "images": [
      "/assets/projects/fraudlens-demo.png",
      "/assets/projects/fraudlens-cover.svg"
    ],
    "source_code_link": "https://github.com/omkark2404/FraudLens-AI",
    "live_demo_link": "https://fraudlens-ai-6wu4.onrender.com",
    "features": [
      "Extract fields from document images and PDFs.",
      "Preprocess images before OCR.",
      "Separate poor-image quality from heuristic anomalies.",
      "Process uploads with bounded background threads."
    ]
  },
  {
    "name": "CodeFusion",
    "description": "A collaborative coding platform with Monaco editing, Socket.IO synchronisation, WebRTC voice and text chat, and external code-execution providers. The live demo is hosted under the name CodeSync. A previous README named Shashank as author; that historical attribution is retained, and the original authorship and the current maintainer's individual contributions need clarification — repository ownership does not establish sole original authorship.",
    "tags": [
      {
        "name": "React",
        "color": "blue-text-gradient"
      },
      {
        "name": "Node.js",
        "color": "green-text-gradient"
      },
      {
        "name": "Monaco",
        "color": "pink-text-gradient"
      },
      {
        "name": "Socket.IO",
        "color": "violet-text-gradient"
      },
      {
        "name": "WebRTC",
        "color": "orange-text-gradient"
      }
    ],
    "image": "/assets/projects/codefusion-demo.png",
    "images": [
      "/assets/projects/codefusion-demo.png",
      "/assets/projects/codefusion-cover.svg"
    ],
    "source_code_link": "https://github.com/omkark2404/CodeFusion",
    "live_demo_link": "https://codesync-clients.onrender.com",
    "features": [
      "Share code and cursor updates in a browser room.",
      "Communicate using integrated voice and text chat.",
      "Request execution through Judge0 and API fallbacks.",
      "Current last-write-wins editing has concurrent-edit limitations."
    ]
  },
  {
    "name": "Ecommerce Funnel Analytics",
    "description": "An account-level ecommerce funnel analysis using MySQL and reproducible Python-built charts. It covers 6,000 accounts and 19,591 events (Jan–Jul 2023) across signup → login → product view → add to cart → purchase: 1,298 accounts (21.6%) reached purchase, 50.4% of accounts that added to cart completed purchase, and the largest absolute loss — 1,743 accounts — was between product view and add to cart. Median time to first purchase was 3 days. The dataset's original source is unrecorded and its structure suggests a simulated sample, so results demonstrate the method, not a real store. Recommendations are hypotheses to test, not demonstrated improvements.",
    "tags": [
      {
        "name": "MySQL",
        "color": "blue-text-gradient"
      },
      {
        "name": "Python",
        "color": "green-text-gradient"
      },
      {
        "name": "SQL",
        "color": "pink-text-gradient"
      },
      {
        "name": "SciPy",
        "color": "violet-text-gradient"
      },
      {
        "name": "GitHub Actions",
        "color": "orange-text-gradient"
      }
    ],
    "image": "/assets/projects/ecommerce-dashboard.png",
    "images": [
      "/assets/projects/ecommerce-dashboard.png",
      "/assets/projects/ecommerce-cover.svg"
    ],
    "source_code_link": "https://github.com/omkark2404/ecommerce-funnel-analytics",
    "live_demo_link": null,
    "features": [
      "Measure unique-user stage and cumulative conversion.",
      "Identify observed funnel drop-off.",
      "Compare cohorts with complete follow-up windows.",
      "Report funnel figures with 95% confidence intervals and chi-square segment tests.",
      "Cross-check every MySQL query against the pandas result.",
      "Regenerate CSV outputs and a static dashboard."
    ]
  }
];

export { experiences, projects };

// Confirmed by Omkar on 2026-11-03. The old /in/omkarkr/ URL is wrong —
// never use it.
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/omkar-kumar-2492371b1/";
export const GITHUB_URL = "https://github.com/omkark2404";

// Scrapbook extras per project. Dates are the GitHub repository creation
// months, verified 2026-11-03. Intros and notes are honest one-liners drawn
// from the verified project descriptions above — no invented metrics.
export const projectExtras = {
  "FinOps Copilot": {
    date: "AUG 2026",
    color: "#6fb7ff",
    intro:
      "A prototype that explores cloud-billing data, flags anomalies and tests forecasts — and the honest result is the naive baseline won.",
    note: "The six-day forecast WAPE was 80.1% and MAE didn't beat the naive baseline. Predictive quality is unproven — saying so matters more than a good-looking chart.",
    caption: "the real FinOps dashboard (synthetic test data)",
  },
  Pathfinder: {
    date: "AUG 2026",
    color: "#ff6b5e",
    intro:
      "A decision prototype that scores delivery-route risk and resequences stops — built on a real 13-route sample plus a synthetic fixture.",
    note: "Synthetic planned-vs-actual data can show the method, but it can't prove real-world accuracy. The demo says so on the screen.",
    caption: "the real Pathfinder demo — Operations Control Tower",
  },
  "FraudLens-AI": {
    date: "JUL 2026",
    color: "#ffd23f",
    intro:
      "A document-processing prototype that extracts fields with OCR and flags anomalies for a human reviewer to check.",
    note: "A heuristic flag is a question for a reviewer, not proof of fraud. That distinction is the whole point of the tool.",
    caption: "the real FraudLens demo — upload a document",
  },
  CodeFusion: {
    date: "SEP 2026",
    color: "#7ed491",
    intro:
      "A collaborative coding platform with shared editing, voice chat and code execution — hosted under the name CodeSync.",
    note: "Real-time editing is easy to demo and hard to get right — last-write-wins still has concurrent-edit limits, and the README keeps the original authorship note.",
    caption: "the real CodeSync demo — start a room",
  },
  "Ecommerce Funnel Analytics": {
    date: "SEP 2026",
    color: "#c9a7ff",
    intro:
      "A MySQL + Python funnel study of 6,000 accounts that finds where users drop off — on data whose origin is unrecorded.",
    note: "The biggest loss was 1,743 accounts between product view and add to cart — but the dataset's source is unrecorded, so the recommendation is a hypothesis to test, not a proven fix.",
    caption: "the real funnel dashboard (6,000 accounts)",
  },
};

// Technology stack, grouped. Resume-stated or project-verified only.
// No percentages or proficiency ratings.
export const skillGroups = [
  {
    heading: "LANGUAGES & DATA",
    items: ["Python", "SQL", "MySQL", "PostgreSQL", "SQLite"],
  },
  {
    heading: "AI · ML",
    items: ["scikit-learn", "OR-Tools", "PaddleOCR", "OpenCV"],
  },
  {
    heading: "WEB & PLATFORMS",
    items: [
      "FastAPI",
      "Flask",
      "React",
      "Next.js",
      "Socket.IO",
      "WebRTC",
      "Monaco",
      "Docker",
      "Git",
      "GitHub",
    ],
  },
  {
    heading: "BUSINESS ANALYSIS",
    items: [
      "Requirements gathering",
      "Process improvement",
      "Stakeholder management",
      "Power BI",
      "Excel",
      "SAP",
    ],
  },
];
