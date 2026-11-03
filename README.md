# Omkar Kumar | Business Analytics & Applied AI

B.E. Electronics Engineering (VLSI), Thapar Institute of Engineering & Technology, Class of 2027. Aspiring Business Analyst and AI/ML Engineer, exploring opportunities through data analysis and applied AI projects.

[GitHub](https://github.com/omkark2404) · [LinkedIn](https://www.linkedin.com/in/omkar-kumar-2492371b1/)

## Design

A scrapbook / lined-notebook portfolio: off-white lined paper, black ink, bright
yellow highlights, thick black borders, hard offset shadows, tape and polaroid
frames. The design and layout are inspired by the current
[jayant.codes](https://jayant.codes/) scrapbook redesign — the look only.
Every word, project and screenshot here is Omkar's own.

The scrapbook design on `main` replaces the earlier dark 3D design
(PR #1, superseded and not merged). The 3D scenes, Spline keyboard and Earth
globe are gone; the site is plain React + Tailwind, so it renders anywhere
without WebGL, Draco decoders or external 3D runtimes. The only external
runtime dependency is Google Fonts (VT323 + Caveat), which fall back to
monospace/cursive when offline.

## Selected projects

| Project | What it is | Evidence |
|---|---|---|
| FinOps Copilot | Cloud-billing analysis prototype; spend exploration, statistical forecasts, anomaly flags | [Source](https://github.com/omkark2404/finops-copilot) · [Live demo](https://finops-copilot-eta.vercel.app) |
| Pathfinder | Last-mile delivery decision prototype; route risk 0–100, OR-Tools resequencing | [Source](https://github.com/omkark2404/Pathfinder--AI-Powered-Last-Mile-Delivery-Decision-Intelligence) · [Live demo](https://pathfinder-ai-powered-last-mile-del.vercel.app) |
| FraudLens-AI | Document field extraction with PaddleOCR; heuristic flags support review | [Source](https://github.com/omkark2404/FraudLens-AI) · [Live demo](https://fraudlens-ai-6wu4.onrender.com) |
| CodeFusion | Collaborative coding with Monaco, Socket.IO and WebRTC (demo hosted as CodeSync) | [Source](https://github.com/omkark2404/CodeFusion) · [Live demo](https://codesync-clients.onrender.com) |
| Ecommerce Funnel Analytics | Account-level funnel analysis, MySQL + reproducible Python charts | [Source](https://github.com/omkark2404/ecommerce-funnel-analytics) |

Project summaries describe repository functionality, not proof of sole
authorship, real-world deployment or commercial impact. Honest caveats are
shown on the site itself: FinOps forecast quality is unproven (six-day WAPE
80.1%, naive baseline won); Pathfinder mixes a real 13-route sample with a
synthetic fixture; FraudLens flags support review, they do not prove fraud;
CodeFusion's inherited attribution is retained and individual contributions
need clarification; the ecommerce dataset's original source is unrecorded, so
its recommendations are hypotheses to test. Project card dates are the GitHub
repository creation months. Screenshots on project cards are real captures of
the live demos / repo dashboards (2026-11-03), shown as taped polaroids.

## Portfolio contribution and attribution

The scrapbook design is inspired by [Jayant Sunil Potdar's site](https://jayant.codes/)
and his [3D Portfolio repository](https://github.com/Jayant-1/3D-Portfolio)
(design/template inspiration only — no content copied). All portfolio content
comes from Omkar's resumes and his own repositories. The original MIT licence
and model attribution notices remain intact. See [asset provenance](ASSET_SOURCES.md).

## Run locally

```bash
git clone https://github.com/omkark2404/Omkar-portfolio-.git
cd Omkar-portfolio-
npm ci
npm run dev
```

```bash
npm run build
npm run preview
```

The production output is `dist`. React 18, Vite 4 and Tailwind CSS. No
dependency versions were upgraded in this redesign; the Three.js/Spline
packages remain in `package.json` but are no longer imported.

## Current availability

- Contact is available through LinkedIn. There is no contact form, and no
  email address or phone number is published (not confirmed for publication).
- No final résumé PDF is published; the hero links to the LinkedIn profile.
- No verified achievements, certifications or testimonials are published, so
  those sections are omitted rather than shown empty.
- No hosted portfolio URL is configured. Publishing requires separate
  deployment work.

## Outstanding confirmations

- IIC TIET dates: the Experience section follows the Business Analyst resume
  (Executive Board Member, Apr 2025–Apr 2026). The portfolio brief listed a
  conflicting range (Jan 2025–Aug 2026).
- CodeFusion: original authorship and the current maintainer's individual
  contributions need clarification; repository ownership does not establish
  sole original authorship.
- Protos Consulting / Ralson: certificate titles not yet verified.

## Verification and maintenance

`npm run build` checks production compilation. A pull-request/push workflow
runs the locked install and build. Lint/typecheck are not currently configured.

[Current maintenance notes](PERSONALIZATION_REPORT.md) · [Deployment instructions](VERCEL_DEPLOYMENT.md)
