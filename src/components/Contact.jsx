import React from "react";
import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

import { GITHUB_URL, LINKEDIN_URL } from "../constants";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24">
      <span className="hash-span" />
      <Reveal>
        <div className="relative rounded-[2.5rem] border-2 border-ink bg-noteyellow px-6 py-14 text-center shadow-hard-lg sm:px-12">
        <span
          className="tape tape-pink"
          style={{ top: "-12px", left: "12%", transform: "rotate(-8deg)" }}
        />
        <span
          className="tape tape-blue"
          style={{ top: "-12px", right: "12%", transform: "rotate(7deg)" }}
        />
        <p className="font-hand text-3xl font-bold text-ink/80 sm:text-4xl">
          let&apos;s build something together
        </p>
        <h2 className="mt-2 font-pixel text-[clamp(2.4rem,9vw,5.5rem)] font-bold leading-none text-ink">
          CONTACT
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-ink/85">
          I&apos;m looking for Business Analyst and AI/ML internships and
          graduate roles. The fastest way to reach me is LinkedIn.
        </p>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 border-2 border-ink bg-ink px-7 py-4 font-mono text-sm font-bold tracking-widest text-white shadow-hard-sm transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
        >
          DROP A LINE <FaArrowUp size={14} className="rotate-45" />
        </a>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border-2 border-ink bg-[#0a66c2] px-5 py-2.5 font-mono text-[13px] font-bold tracking-widest text-white shadow-hard-sm transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
          >
            <FaLinkedinIn size={15} /> LINKEDIN
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-5 py-2.5 font-mono text-[13px] font-bold tracking-widest text-white shadow-hard-sm transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
          >
            <FaGithub size={15} /> GITHUB
          </a>
          <a
            href="mailto:okumar1_be23@gmail.com"
            className="flex items-center gap-2 rounded-full border-2 border-ink bg-white px-5 py-2.5 font-mono text-[13px] font-bold text-ink shadow-hard-sm transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
          >
            <FaEnvelope size={15} /> okumar1_be23@gmail.com
          </a>
        </div>
        </div>
      </Reveal>

      {/* Tilted sticky note */}
      <Reveal delay={0.15}>
        <div className="relative mx-auto -mt-2 w-fit max-w-md rotate-2 border-2 border-ink bg-noteblue p-5 shadow-hard sm:ml-auto sm:mr-8">
        <span
          className="tape tape-pink"
          style={{ top: "-12px", left: "38%", transform: "rotate(-3deg)" }}
        />
        <p className="font-hand text-2xl font-bold leading-snug text-ink">
          Seeking internships &amp; full-time roles — open to hybrid and
          remote work.
        </p>
        <p className="mt-2 font-mono text-[12px] font-bold tracking-widest text-ink/60">
          — OMKAR
        </p>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
