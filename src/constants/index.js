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
      "Supported AI/ML application development through dataset preparation, output validation and data-quality checks.",
    ],
  },
  {
    title: "Production & Data Analytics Intern",
    company_name: "Ralson Rubber Pvt. Ltd.",
    location: "Ludhiana, India",
    date: "Jun 2025 – Jul 2025",
    iconBg: "#383E56",
    points: [
      "Analysed manufacturing performance and supported SAP-based reporting.",
      "Monitored operational KPIs including output, rejection levels, machine utilisation and downtime.",
    ],
  },
  {
    title: "Founding Member, Product & Business Strategy",
    company_name: "Rabonna",
    location: "Patiala, India",
    date: "Jan 2025 – Mar 2026",
    iconBg: "#383E56",
    points: [
      "Gathered stakeholder requirements from 6+ partner venues.",
      "Translated partner feedback into feature requirements and planning for venue discovery, availability, payments and onboarding.",
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
    "description": "A prototype that helps users understand cloud spending, spot unusual charges and explore future costs. It uses Python, SQL and FastAPI to turn billing data into reports and forecasts, with recommendations for a person to review. Testing has not shown better forecasts than a simple baseline, and actual cost savings have not been demonstrated.",
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
      "Check uploaded billing data before analysis.",
      "Explore spending patterns and unusual charges.",
      "Compare forecasts with a simple starting estimate.",
      "Keep recommendations under human review."
    ]
  },
  {
    "name": "Pathfinder",
    "description": "A prototype that helps delivery teams review routes, identify possible delays and compare different stop orders. Built with Python, machine learning and Google OR-Tools, it explores options for a dispatcher to review. It uses a small real-world sample and simulated data; predictions and savings have not been proven in live operations.",
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
      "Review routes and possible delivery risks.",
      "Compare planned routes with what actually happened.",
      "Use Google OR-Tools to explore different stop orders.",
      "Keep final delivery decisions with the dispatcher."
    ]
  },
  {
    "name": "FraudLens-AI",
    "description": "A document-processing prototype that uses Python, OCR and OpenCV to read information from images and PDFs and highlight fields that need checking. It helps a reviewer spot missing information or possible inconsistencies. A flagged document is not proof of fraud, and fraud-detection accuracy has not been established.",
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
      "Read text and key details from document images and PDFs.",
      "Improve image quality before reading the text.",
      "Highlight unclear text and information that needs checking.",
      "Track document-processing jobs through a Flask API."
    ]
  },
  {
    "name": "CodeFusion",
    "description": "A collaborative coding prototype that brings shared editing, code execution, voice and text chat into one browser workspace. It uses React, Monaco Editor, Socket.IO and WebRTC. The live demo is called CodeSync. Simultaneous edits can overwrite each other, and code execution depends on external services. The repository retains an earlier author credit; individual contributions still need clarification.",
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
      "Edit code together in a shared browser room.",
      "Use voice and text chat alongside the editor.",
      "Run code through connected external services.",
      "Explore the limits of simultaneous editing."
    ]
  },
  {
    "name": "Ecommerce Funnel Analytics",
    "description": "An ecommerce analysis project that uses MySQL and Python to understand where users leave the journey from signup to purchase. It compares customer groups and suggests ideas a team could test to improve the experience. The sample covers 6,000 accounts, but its original source is unrecorded and it appears simulated. Findings demonstrate the analysis method, not proven results for a real store.",
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
      "Measure how many accounts reach each shopping stage.",
      "Find the stages with the largest drop-offs.",
      "Compare customer groups and purchase timing.",
      "Check that SQL and Python produce matching results.",
      "Suggest improvements that would need testing."
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
    color: "#dbe9f5",
    intro:
      "Understand cloud spending, spot unusual charges and explore future costs with Python and SQL.",
    note: "The six-day forecast WAPE was 80.1% and MAE didn't beat the naive baseline. Predictive quality is unproven — saying so matters more than a good-looking chart.",
    caption: "the real FinOps dashboard (synthetic test data)",
  },
  Pathfinder: {
    date: "AUG 2026",
    color: "#f2dfd6",
    intro:
      "Help delivery teams review route risks and compare stop orders using machine learning.",
    note: "Synthetic planned-vs-actual data can show the method, but it can't prove real-world accuracy. The demo says so on the screen.",
    caption: "the real Pathfinder demo — Operations Control Tower",
  },
  "FraudLens-AI": {
    date: "JUL 2026",
    color: "#f4e9c6",
    intro:
      "Read information from documents with OCR and highlight details that need a human check.",
    note: "A heuristic flag is a question for a reviewer, not proof of fraud. That distinction is the whole point of the tool.",
    caption: "the real FraudLens demo — upload a document",
  },
  CodeFusion: {
    date: "SEP 2026",
    color: "#dceadd",
    intro:
      "Edit code, run programs and communicate with teammates in one browser workspace.",
    note: "Real-time editing is easy to demo and hard to get right — last-write-wins still has concurrent-edit limits, and the README keeps the original authorship note.",
    caption: "the real CodeSync demo — start a room",
  },
  "Ecommerce Funnel Analytics": {
    date: "SEP 2026",
    color: "#e6e0f1",
    intro:
      "Use SQL and Python to find where users drop off and suggest what a team should test next.",
    note: "The biggest loss was 1,743 accounts between product view and add to cart — but the dataset's source is unrecorded, so the recommendation is a hypothesis to test, not a proven fix.",
    caption: "the real funnel dashboard (6,000 accounts)",
  },
};

// Technology stack, grouped. Resume-stated or project-verified only.
// No percentages or proficiency ratings.
export const skillGroups = [
  { heading: "BUSINESS ANALYSIS", items: ["Requirements gathering", "Stakeholder communication", "KPI reporting", "Power BI", "Excel"] },
  { heading: "AI/ML", items: ["Machine learning", "scikit-learn", "Model evaluation", "Forecasting", "OCR"] },
  { heading: "LANGUAGES & DATA", items: ["Python", "SQL", "pandas", "Data validation", "Statistical analysis"] },
  { heading: "DEVELOPMENT & TOOLS", items: ["FastAPI", "REST APIs", "Git", "Docker"] },
];
export const projectCovers = {
  "FinOps Copilot": "/assets/projects/finops-linkedin.jpg",
  "Pathfinder": "/assets/projects/pathfinder-linkedin.jpg",
  "FraudLens-AI": "/assets/projects/fraudlens-linkedin.jpg",
  "CodeFusion": "/assets/projects/codefusion-linkedin.jpg",
  "Ecommerce Funnel Analytics": "/assets/projects/ecommerce-linkedin.jpg",
};
