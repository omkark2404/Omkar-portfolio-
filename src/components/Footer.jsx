import React from "react";

import { GITHUB_URL, LINKEDIN_URL } from "../constants";
import Reveal from "./Reveal";

const Footer = () => {
  return (
    <footer className="border-t-2 border-ink bg-paper px-4 pb-10 pt-12 sm:px-8">
      <Reveal className="mx-auto max-w-7xl text-center">
        <p className="font-pixel text-[clamp(1.8rem,8vw,5rem)] font-bold leading-none text-ink">
          OMKAR
        </p>
        <p className="mt-3 font-mono text-[13px] font-bold tracking-[0.3em] text-ink/70">
          BUSINESS ANALYST · AI/ML ENGINEER
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 font-mono text-[13px] font-bold tracking-widest">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-2 underline-offset-4 hover:bg-noteyellow"
          >
            LINKEDIN
          </a>
          <span aria-hidden="true">·</span>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-2 underline-offset-4 hover:bg-noteyellow"
          >
            GITHUB
          </a>
          <span aria-hidden="true">·</span>
          <a
            href="#hero"
            className="underline decoration-2 underline-offset-4 hover:bg-noteyellow"
          >
            BACK TO TOP ↑
          </a>
        </div>
        <p className="mt-8 font-mono text-[12px] text-ink/60">
          © 2026 Omkar Kumar
        </p>
        <p className="mt-1 font-hand text-xl font-bold text-ink/60">
          scrapbook design inspired by jayant.codes — every word and project
          here is my own.
        </p>
      </Reveal>
    </footer>
  );
};

export default Footer;
