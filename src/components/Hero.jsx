import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

import { LINKEDIN_URL } from "../constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Hero in the style of Jayant's current homepage (jayant.codes), with
 * Omkar's own words and photos. Name is OMKAR only — no Kumar in the
 * display name. The two circle photos are placeholders ("OK") until
 * Omkar sends his own two photos; never use Jayant's photos here.
 */
const PhotoCircle = ({ className }) => (
  <div
    aria-label="Photo placeholder — Omkar's photo goes here"
    className={`flex items-center justify-center overflow-hidden rounded-full border-[3px] border-[#ff5a1f] bg-[#fffdf6] shadow-hard-sm ${className || ""}`}
  >
    <span className="font-pixel text-3xl font-bold text-ink/70 sm:text-4xl">
      OK
    </span>
  </div>
);

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-8 sm:pt-32"
    >
      <motion.div
        className="relative mx-auto max-w-6xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Pill stickers — centred row on small screens; on desktop they
            sit at the top corners of the name block (see below) */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:hidden"
        >
          <span className="inline-block -rotate-2 rounded-full border-2 border-ink bg-notepurple px-3 py-1.5 font-mono text-[10px] font-bold tracking-widest text-ink shadow-hard-sm sm:px-4 sm:text-[11px]">
            ANALYSIS OVER ASSUMPTIONS
          </span>
          <span className="inline-block rotate-2 rounded-full border-2 border-ink bg-[#fff3b0] px-3 py-1.5 font-mono text-[10px] font-bold tracking-widest text-ink shadow-hard-sm sm:px-4 sm:text-[11px]">
            ANSWERS YOU CAN TEST
          </span>
        </motion.div>

        {/* Name block — the positioning context for all four labels */}
        <div className="relative mx-auto mt-10 max-w-2xl text-center sm:mt-14">
          {/* Top labels — absolute top corners of the name block (desktop) */}
          <motion.div
            variants={item}
            className="absolute -left-32 top-4 hidden -rotate-2 lg:block"
          >
            <span className="inline-block whitespace-nowrap rounded-full border-2 border-ink bg-notepurple px-4 py-1.5 font-mono text-[11px] font-bold tracking-widest text-ink shadow-hard-sm">
              ANALYSIS OVER ASSUMPTIONS
            </span>
          </motion.div>
          <motion.div
            variants={item}
            className="absolute -right-32 top-4 hidden rotate-2 lg:block"
          >
            <span className="inline-block whitespace-nowrap rounded-full border-2 border-ink bg-[#fff3b0] px-4 py-1.5 font-mono text-[11px] font-bold tracking-widest text-ink shadow-hard-sm">
              ANSWERS YOU CAN TEST
            </span>
          </motion.div>

          {/* Lower role labels — flanking the lower half of the name box */}
          <motion.div
            variants={item}
            className="absolute -left-40 top-[58%] hidden w-40 -rotate-3 lg:block"
          >
            <div className="border-2 border-ink bg-noteyellow px-3 py-2 shadow-hard-sm">
              <span className="font-hand text-2xl font-bold leading-tight text-ink">
                Business Analyst
              </span>
            </div>
            <span
              aria-hidden="true"
              className="absolute -right-7 -top-4 font-display text-2xl font-black text-ink"
            >
              ↗
            </span>
          </motion.div>
          <motion.div
            variants={item}
            className="absolute -right-40 top-[58%] hidden w-40 rotate-2 lg:block"
          >
            <div className="border-2 border-ink bg-notegreen px-3 py-2 shadow-hard-sm">
              <span className="font-hand text-2xl font-bold leading-tight text-ink">
                AI/ML Engineer
              </span>
            </div>
            <span
              aria-hidden="true"
              className="absolute -left-7 -top-4 font-display text-2xl font-black text-ink"
            >
              ↖
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="font-hand text-3xl font-bold text-ink/80 sm:text-4xl"
          >
            my name is
          </motion.p>
          <motion.svg
            variants={item}
            className="mx-auto mt-1 h-3 w-24"
            viewBox="0 0 100 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 8 Q 12 2, 22 8 T 42 8 T 62 8 T 82 8 T 98 8"
              stroke="#161513"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </motion.svg>

          <motion.h1 variants={item} className="mt-4">
            <span className="inline-block rounded-[255px_15px_225px_15px/15px_225px_15px_255px] border-[3px] border-[#ff5a1f] px-6 py-2 sm:px-10 sm:py-3">
              <span className="font-pixel text-[clamp(3.4rem,14vw,9rem)] font-bold leading-[0.95] text-ink">
                OMKAR
              </span>
            </span>
          </motion.h1>

          {/* Role labels — row on mobile */}
          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap justify-center gap-4 lg:hidden"
          >
            <span className="inline-block -rotate-2 border-2 border-ink bg-noteyellow px-3 py-2 font-hand text-2xl font-bold shadow-hard-sm">
              Business Analyst
            </span>
            <span className="inline-block rotate-2 border-2 border-ink bg-notegreen px-3 py-2 font-hand text-2xl font-bold shadow-hard-sm">
              AI/ML Engineer
            </span>
          </motion.div>
        </div>

        {/* Availability */}
        <motion.div variants={item} className="mt-10 text-center">
          <p className="font-mono text-[13px] font-bold tracking-[0.2em] text-ink sm:text-sm">
            <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#2563eb]" />
            OPEN TO INTERNSHIPS &amp; FULL-TIME ROLES
          </p>
          <p className="mt-2 font-mono text-[12px] font-bold tracking-[0.2em] text-ink/75 sm:text-[13px]">
            INDIA · OPEN TO HYBRID AND REMOTE WORK.
          </p>
        </motion.div>

        {/* Photo circles — row on small screens */}
        <motion.div
          variants={item}
          className="mt-8 flex justify-center gap-8 xl:hidden"
        >
          <PhotoCircle className="h-20 w-20 sm:h-24 sm:w-24" />
          <PhotoCircle className="h-20 w-20 sm:h-24 sm:w-24" />
        </motion.div>

        {/* Statement, flanked by the photo circles on wide screens */}
        <div className="relative mx-auto mt-8 max-w-3xl text-center sm:mt-10">
          <motion.div
            variants={item}
            className="absolute -left-44 top-1/2 hidden -translate-y-1/2 xl:block"
          >
            <PhotoCircle className="h-32 w-32" />
          </motion.div>
          <motion.div
            variants={item}
            className="absolute -right-44 top-1/2 hidden -translate-y-1/2 xl:block"
          >
            <PhotoCircle className="h-32 w-32" />
          </motion.div>

          <motion.p
            variants={item}
            className="font-display text-[clamp(1.8rem,5vw,3.2rem)] font-black leading-[1.15] tracking-tight text-ink"
          >
            Understanding the challenge. Finding the insight.{" "}
            <span className="bg-noteyellow px-1 [box-decoration-break:clone]">
              Engineering the solution.
            </span>{" "}
            <span
              aria-hidden="true"
              className="font-pixel text-[0.7em] text-notegreen"
            >
              ✳
            </span>
          </motion.p>
        </div>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-ink bg-ink px-6 py-3.5 font-mono text-sm font-bold tracking-widest text-white shadow-hard transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-hard-sm"
          >
            <span className="flex h-6 w-6 items-center justify-center bg-[#2563eb] font-display text-base font-black text-white">
              ↗
            </span>
            CONTACT ME
          </a>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-10 flex items-center justify-center gap-2 font-hand text-2xl font-bold text-ink/70"
        >
          <span className="cue-bounce inline-flex">
            <FaArrowDown size={15} />
          </span>
          scroll — the work is below
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
