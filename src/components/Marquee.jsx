import React from "react";

const ITEMS = [
  "Business Analysis",
  "Applied AI/ML",
  "Python",
  "SQL",
  "Data Visualisation",
  "Power BI",
  "FastAPI",
  "Requirements & BRDs",
  "Forecasting",
  "NLP & OCR",
];

/**
 * Scrolling keyword ticker between the hero and About.
 * The list is rendered twice so the CSS marquee loop is seamless.
 * Pauses on hover; disabled entirely under prefers-reduced-motion.
 */
const Marquee = () => {
  const row = (key) => (
    <span key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {ITEMS.map((item) => (
        <span key={`${key}-${item}`} className="flex items-center">
          <span className="px-5 font-pixel text-xl font-bold tracking-wide text-ink sm:text-2xl">
            {item.toUpperCase()}
          </span>
          <span aria-hidden="true" className="font-pixel text-xl text-ink/50 sm:text-2xl">
            ✳
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      className="marquee relative overflow-hidden border-y-2 border-ink bg-noteyellow py-3"
      aria-label="What I do: business analysis, applied AI and ML, Python, SQL, data visualisation, Power BI, FastAPI, requirements and BRDs, forecasting, NLP and OCR"
    >
      <div className="marquee-track flex w-max">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
};

export default Marquee;
