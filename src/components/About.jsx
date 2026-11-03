import React from "react";

import { skillGroups } from "../constants";
import { styles } from "../styles";
import Reveal from "./Reveal";

const STICKERS = [
  { title: "Business Analyst", bg: "bg-noteyellow", rotate: "-2deg" },
  { title: "AI/ML Engineer", bg: "bg-notegreen", rotate: "1.5deg" },
  { title: "Data Analyst", bg: "bg-notepink", rotate: "2deg" },
  { title: "Technology Consulting", bg: "bg-noteblue", rotate: "-1.5deg" },
];

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24">
      <span className="hash-span" id="about-span" />
      <Reveal>
        <p className="font-hand text-3xl font-bold text-ink/80 sm:text-4xl">
          about me!
        </p>
        <h2 className={`${styles.sectionHeadText} mt-1`}>ABOUT.</h2>
      </Reveal>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        <div>
          <Reveal>
            <p className="max-w-3xl text-[15px] leading-8 text-ink/90 sm:text-base sm:leading-8">
              I&apos;m a final-year B.E. student in Electronics Engineering
              (VLSI) at Thapar Institute of Engineering &amp; Technology,
              graduating in 2027. I&apos;m seeking Business Analyst and AI/ML
              internships and graduate opportunities. What excites me most is
              understanding the challenges people face, identifying the root
              causes, and developing practical solutions — from cloud-cost
              analysis and delivery planning to document processing and
              ecommerce funnels.
            </p>
            <p className="mt-4 max-w-3xl text-[15px] leading-8 text-ink/90 sm:text-base sm:leading-8">
              I work in Python and SQL, and I&apos;d rather show a result with
              its caveats attached than a clean number I can&apos;t defend.
            </p>
          </Reveal>

          {/* Technology stack */}
          <Reveal delay={0.1}>
            <div className="mt-10">
            <h3 className="font-pixel text-lg font-bold tracking-wide text-ink">
              MY STACK
            </h3>
            {skillGroups.map((group) => (
              <div key={group.heading} className="mt-5">
                <p className="font-mono text-[12px] font-bold tracking-[0.2em] text-ink/60">
                  {group.heading}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border-2 border-ink bg-white px-3 py-1.5 font-mono text-[13px] font-bold text-ink shadow-hard-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <p className="mt-5 font-hand text-xl font-bold text-ink/60">
              resume-stated or project-verified only — no percentages, no
              made-up ratings.
            </p>
            </div>
          </Reveal>
        </div>

        {/* Sticker labels */}
        <div>
          <p className="font-hand text-2xl font-bold text-ink/70">
            what I do →
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {STICKERS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div
                  style={{ "--sticker-rotate": s.rotate }}
                  className={`sticker relative flex min-h-[110px] items-center justify-center border-2 border-ink px-3 py-6 text-center shadow-hard ${s.bg}`}
                >
                  <span className="tape" style={{ top: "-12px", left: "18%" }} />
                  <span className="font-pixel text-[15px] font-bold leading-snug text-ink sm:text-base">
                    {s.title}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="relative mt-8 rotate-1 border-2 border-ink bg-white p-5 shadow-hard">
              <span className="tape tape-pink" style={{ top: "-12px", right: "12%" }} />
              <p className="font-hand text-2xl font-bold leading-snug text-ink">
                “understand the problem first, then reach for the model.”
              </p>
              <p className="mt-2 font-mono text-[12px] font-bold tracking-widest text-ink/60">
                — HOW I LIKE TO WORK
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
