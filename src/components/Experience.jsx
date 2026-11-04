import React from "react";

import { experiences } from "../constants";
import { styles } from "../styles";
import Reveal from "./Reveal";

const TAPE_COLORS = ["", "tape-pink", "tape-blue", "tape-green"];

const Experience = () => {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24">
      <span className="hash-span" />
      <Reveal>
        <p className="font-hand text-3xl font-bold text-ink/80 sm:text-4xl">
          where I&apos;ve worked!
        </p>
        <h2 className={`${styles.sectionHeadText} mt-1`}>EXPERIENCE.</h2>
      </Reveal>

      <div className="relative mt-10">
        {/* Dashed timeline spine */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-[7px] top-0 hidden border-l-2 border-dashed border-ink/40 sm:block"
        />
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <Reveal key={`${exp.company_name}-${exp.title}`} delay={i * 0.08}>
              <article className="relative sm:pl-10">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-6 hidden h-4 w-4 rounded-full border-2 border-ink bg-noteyellow sm:block"
                />
              <div
                className="relative border-2 border-ink bg-white p-6 shadow-hard"
                style={{ transform: `rotate(${i % 2 === 0 ? -0.6 : 0.6}deg)` }}
              >
                <span
                  className={`tape ${TAPE_COLORS[i % TAPE_COLORS.length]}`}
                  style={{ top: "-12px", left: "24px" }}
                />
                <div className="flex flex-wrap items-center gap-3">
                  <span className="border-2 border-ink bg-noteyellow px-2.5 py-1 font-mono text-[12px] font-bold tracking-widest text-ink">
                    {exp.date}
                  </span>
                  <span className="font-mono text-[12px] font-bold tracking-widest text-ink/60">
                    {exp.location.toUpperCase()}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-ink sm:text-xl">
                  {exp.title}
                </h3>
                <p className="mt-1 font-mono text-sm font-bold text-ink/80">
                  {exp.company_name}
                </p>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-[14px] leading-6 text-ink/85"
                    >
                      <span aria-hidden="true" className="font-bold text-ink">
                        —
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
