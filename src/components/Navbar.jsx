import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { GITHUB_URL, LINKEDIN_URL } from "../constants";

const LINKS = [
  { id: "hero", title: "HOME" },
  { id: "about", title: "ABOUT" },
  { id: "projects", title: "PROJECTS" },
  { id: "experience", title: "EXPERIENCE" },
  { id: "contact", title: "CONTACT" },
];

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
        Boolean,
      );
      let current = "hero";
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= 120) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur-sm ${
        scrolled ? "shadow-[0_4px_0_#161513]" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6">
        <a
          href="#hero"
          className="font-pixel text-xl font-bold tracking-tight text-ink sm:text-2xl"
        >
          OMKAR<span className="text-ink">.</span>
          <span className="ml-2 hidden font-hand text-2xl font-bold text-ink/70 sm:inline">
            portfolio
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`px-3 py-2 font-mono text-[13px] font-bold tracking-widest transition-colors ${
                  active === link.id
                    ? "bg-noteyellow text-ink shadow-hard-sm"
                    : "text-ink hover:bg-noteyellow/50"
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-[#0a66c2] text-white shadow-hard-sm transition-transform hover:-translate-y-0.5"
          >
            <FaLinkedinIn size={16} />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-ink text-white shadow-hard-sm transition-transform hover:-translate-y-0.5"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="#contact"
            className="hidden rounded-full border-2 border-ink bg-white px-4 py-2 font-mono text-[13px] font-bold tracking-widest text-ink shadow-hard-sm transition-transform hover:-translate-y-0.5 sm:block"
          >
            CONTACT
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1 border-2 border-ink bg-noteyellow shadow-hard-sm md:hidden"
          >
            <span className="h-0.5 w-5 bg-ink" />
            <span className="h-0.5 w-5 bg-ink" />
            <span className="h-0.5 w-5 bg-ink" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t-2 border-ink bg-paper px-4 py-2 md:hidden">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`block px-2 py-3 font-mono text-sm font-bold tracking-widest ${
                  active === link.id ? "bg-noteyellow" : ""
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
