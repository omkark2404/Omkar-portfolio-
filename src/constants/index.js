import { code, concepts, designs, ideas } from "../assets";

export const navLinks = [{id:"about",title:"About"},{id:"achievements",title:"Achievement"},{id:"contact",title:"Contact"}];

const achievements = [
  {
    "title": [
      "MISSING"
    ],
    "company_name": "Verified credential pending 1",
    "icon": "/assets/personalization/missing.svg",
    "iconBg": "#383E56",
    "date": "MISSING",
    "points": [
      "MISSING — no verified achievement or certification supplied. Local draft placeholder."
    ],
    "credential": []
  },
  {
    "title": [
      "MISSING"
    ],
    "company_name": "Verified credential pending 2",
    "icon": "/assets/personalization/missing.svg",
    "iconBg": "#383E56",
    "date": "MISSING",
    "points": [
      "MISSING — no verified achievement or certification supplied. Local draft placeholder."
    ],
    "credential": []
  },
  {
    "title": [
      "MISSING"
    ],
    "company_name": "Verified credential pending 3",
    "icon": "/assets/personalization/missing.svg",
    "iconBg": "#383E56",
    "date": "MISSING",
    "points": [
      "MISSING — no verified achievement or certification supplied. Local draft placeholder."
    ],
    "credential": []
  },
  {
    "title": [
      "MISSING"
    ],
    "company_name": "Verified credential pending 4",
    "icon": "/assets/personalization/missing.svg",
    "iconBg": "#383E56",
    "date": "MISSING",
    "points": [
      "MISSING — no verified achievement or certification supplied. Local draft placeholder."
    ],
    "credential": []
  }
];

const testimonials = [
  {
    "testimonial": "MISSING — no verified testimonial supplied. Local draft placeholder, not an endorsement.",
    "name": "MISSING 1",
    "designation": "MISSING",
    "company": "MISSING",
    "image": "/assets/personalization/avatar.svg"
  },
  {
    "testimonial": "MISSING — no verified testimonial supplied. Local draft placeholder, not an endorsement.",
    "name": "MISSING 2",
    "designation": "MISSING",
    "company": "MISSING",
    "image": "/assets/personalization/avatar.svg"
  },
  {
    "testimonial": "MISSING — no verified testimonial supplied. Local draft placeholder, not an endorsement.",
    "name": "MISSING 3",
    "designation": "MISSING",
    "company": "MISSING",
    "image": "/assets/personalization/avatar.svg"
  }
];

const projects = [
  {
    "name": "FinOps Copilot",
    "description": "A cloud-billing analysis prototype for FOCUS-formatted CSV and Parquet exports. It combines spend exploration, statistical forecasts, anomaly flags and human review, with optional Gemini explanations of numeric evidence. Predictive quality and realised savings are not established.",
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
    "image": "/assets/projects/finops-cover.svg",
    "images": [
      "/assets/projects/finops-cover.svg",
      "/assets/projects/finops-dashboard.png"
    ],
    "source_code_link": "https://github.com/omkark2404/finops-copilot",
    "live_demo_link": null,
    "metrics": {
      "stars": 0,
      "forks": 0,
      "views": "MISSING"
    },
    "features": [
      "Validate billing exports and retain dataset provenance.",
      "Explore spend and statistical anomaly flags.",
      "Compare forecasting candidates with simple baselines.",
      "Review recommendations without changing cloud infrastructure."
    ]
  },
  {
    "name": "Pathfinder",
    "description": "A last-mile delivery decision prototype combining route analytics, risk scoring, OR-Tools optimisation and what-if scenarios. Default predictive evaluation uses synthetic demonstration samples and does not establish real-world accuracy or operational impact.",
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
    "image": "/assets/projects/pathfinder-cover.svg",
    "images": [
      "/assets/projects/pathfinder-cover.svg"
    ],
    "source_code_link": "https://github.com/omkark2404/Pathfinder--AI-Powered-Last-Mile-Delivery-Decision-Intelligence",
    "live_demo_link": null,
    "metrics": {
      "stars": 0,
      "forks": 0,
      "views": "MISSING"
    },
    "features": [
      "Explore route-level delivery risk and deviations.",
      "Optimise stop sequences with Google OR-Tools.",
      "Compare resequencing and multi-vehicle scenarios.",
      "Keep dispatch decisions under human review."
    ]
  },
  {
    "name": "FraudLens-AI",
    "description": "A document-processing prototype using PaddleOCR, image preprocessing and rule-based validation to extract fields and flag quality issues or possible anomalies. Heuristic flags support review; they do not establish that a document is fraudulent.",
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
    "image": "/assets/projects/fraudlens-cover.svg",
    "images": [
      "/assets/projects/fraudlens-cover.svg"
    ],
    "source_code_link": "https://github.com/omkark2404/FraudLens-AI",
    "live_demo_link": null,
    "metrics": {
      "stars": 0,
      "forks": 0,
      "views": "MISSING"
    },
    "features": [
      "Extract fields from document images and PDFs.",
      "Preprocess images before OCR.",
      "Separate poor-image quality from heuristic anomalies.",
      "Process uploads with bounded background threads."
    ]
  },
  {
    "name": "CodeFusion",
    "description": "A collaborative coding platform with Monaco editing, Socket.IO synchronisation, WebRTC voice and text chat, and external code-execution providers. Current repository maintained under omkark2404; historical authorship is retained and individual contributions remain to be clarified.",
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
    "image": "/assets/projects/codefusion-cover.svg",
    "images": [
      "/assets/projects/codefusion-cover.svg"
    ],
    "source_code_link": "https://github.com/omkark2404/CodeFusion",
    "live_demo_link": null,
    "metrics": {
      "stars": 0,
      "forks": 0,
      "views": "MISSING"
    },
    "features": [
      "Share code and cursor updates in a browser room.",
      "Communicate using integrated voice and text chat.",
      "Request execution through Judge0 and API fallbacks.",
      "Current last-write-wins editing has concurrent-edit limitations."
    ]
  },
  {
    "name": "Ecommerce Funnel Analytics",
    "description": "An account-level ecommerce funnel analysis using MySQL and reproducible Python-built charts. It examines signup-to-purchase conversion, drop-off and purchase timing on an illustrative dataset; it does not establish results or causal improvements for a real store.",
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
        "name": "Pillow",
        "color": "violet-text-gradient"
      },
      {
        "name": "GitHub Actions",
        "color": "orange-text-gradient"
      }
    ],
    "image": "/assets/projects/ecommerce-cover.svg",
    "images": [
      "/assets/projects/ecommerce-cover.svg",
      "/assets/projects/ecommerce-dashboard.png"
    ],
    "source_code_link": "https://github.com/omkark2404/Ecommerce_funnel-analytics",
    "live_demo_link": null,
    "metrics": {
      "stars": 0,
      "forks": 0,
      "views": "MISSING"
    },
    "features": [
      "Measure unique-user stage and cumulative conversion.",
      "Identify observed funnel drop-off.",
      "Compare cohorts with complete follow-up windows.",
      "Regenerate CSV outputs and a static dashboard."
    ]
  }
];

const words = [
  { text: "Ideas", imgPath: ideas, font: "Arial, sans-serif" },
  {
    text: "Concepts",
    imgPath: concepts,
    font: "'Courier New', Courier, monospace",
  },
  {
    text: "Designs",
    imgPath: designs,
    font: "'Times New Roman', Times, serif",
  },
  { text: "Code", imgPath: code, font: "'Fira Mono', monospace" },
  {
    text: "Ideas",
    imgPath: ideas,
    font: "'Comic Sans MS', cursive, sans-serif",
  },
  { text: "Concepts", imgPath: concepts, font: "'Roboto', sans-serif" },
  { text: "Designs", imgPath: designs, font: "'Georgia', serif" },
  { text: "Code", imgPath: code, font: "'Source Code Pro', monospace" },
];

export { achievements, projects, testimonials, words };
