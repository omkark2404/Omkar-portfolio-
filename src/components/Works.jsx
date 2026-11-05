import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { projectExtras, projects, projectCovers } from "../constants";
import Reveal from "./Reveal";

const ProjectBlock = ({ project, index, dimmed }) => {
  const extra = projectExtras[project.name] || {};
  const number = String(index + 1).padStart(2, "0");
  const bg = extra.color || "#f6f1e3";

  return (
    <article
      className="project-block"
      style={{ "--project-color": bg, "--project-index": index, zIndex: index + 1 }}
    >
      <div className="project-folder-tab"><span aria-hidden="true">✦</span> <span className="project-tab-word">PROJECT</span> {number}</div>
      <div className="project-folder-surface" aria-hidden="true" />

      <motion.div
        animate={{
          scale: dimmed ? 0.97 : 1,
          opacity: dimmed ? 0.85 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="project-content relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center gap-8 px-4 py-24 sm:px-8 lg:flex-row lg:items-center lg:gap-12"
      >
        <div className="max-w-2xl">
          <p className="font-mono text-[13px] font-bold tracking-[0.25em] text-ink">
            PROJECT {number} · {extra.date || ""}
          </p>
          <h3 className="mt-3 font-pixel text-[clamp(1.9rem,6vw,4rem)] font-bold leading-[1.05] text-ink">
            {project.name}
          </h3>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-ink/90 sm:text-base">
            {extra.intro || project.description}
          </p>

          <details className="project-details mt-5">
            <summary>Explore approach &amp; limitations</summary>
            <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <p>{extra.note}</p>
          </details>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className="border-2 border-ink bg-white/85 px-2.5 py-1 font-mono text-[12px] font-bold text-ink"
              >
                {tag.name}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.live_demo_link && (
              <a
                href={project.live_demo_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-ink bg-ink px-5 py-3 font-mono text-[13px] font-bold tracking-widest text-white shadow-hard-sm transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
              >
                LIVE DEMO <FaExternalLinkAlt size={12} />
              </a>
            )}
            <a
              href={project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-ink bg-white px-5 py-3 font-mono text-[13px] font-bold tracking-widest text-ink shadow-hard-sm transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
            >
              <FaGithub size={15} /> GITHUB
            </a>
          </div>
        </div>

        {/* Real screenshot as a taped polaroid */}
        <figure
          className="polaroid relative w-full max-w-md shrink-0 self-center"
          style={{ transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)` }}
        >
          <span
            className="tape"
            style={{ top: "-14px", left: "50%", marginLeft: "-55px" }}
          />
          <a href={`?project=${encodeURIComponent(project.name)}`} target="_blank" rel="noopener noreferrer" aria-label={`Read about ${project.name} (opens in a new tab)`} className="block focus-visible:outline focus-visible:outline-4 focus-visible:outline-blue-600">
          <img src={projectCovers[project.name] || project.image} alt={`${project.name} — illustrative LinkedIn project cover`} loading="lazy" />
          </a>
          <figcaption>{project.name} · illustrative project cover</figcaption>
        </figure>
      </motion.div>
    </article>
  );
};

const Works = () => {
  // Which project block is currently on top: the last one whose top has
  // reached (or passed) the viewport top. Earlier pinned blocks ease
  // down and dim as the next one covers them — the stacking-cards feel.
  // (useScroll can't drive this: a pinned sticky block's rect never moves.)
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const blocks = document.querySelectorAll(".project-block");
      let current = 0;
      blocks.forEach((b, i) => {
        if (b.getBoundingClientRect().top <= 81) current = i;
      });
      setActiveIndex(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="projects" className="relative">
      <span className="hash-span" />
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-8">
        <Reveal>
          <p className="font-hand text-3xl font-bold text-ink/80 sm:text-4xl">
            the work!
          </p>
          <h2 className="mt-1 font-pixel text-[clamp(2rem,7vw,3.5rem)] font-bold leading-tight text-ink">
            FEATURED PROJECTS
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink/85">
            Five projects across business analysis, applied AI/ML and software.
            Explore the approach, review the evidence, and open the source.
          </p>
        </Reveal>
      </div>

      <div>
        {projects.map((project, index) => (
          <ProjectBlock
            key={project.name}
            project={project}
            index={index}
            dimmed={index < activeIndex}
          />
        ))}
      </div>

      {/* Notes from the build */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
        <Reveal>
          <p className="font-hand text-3xl font-bold text-ink/80 sm:text-4xl">
            notes from the build
          </p>
          <h3 className="mt-1 font-pixel text-2xl font-bold text-ink sm:text-3xl">
            WHAT EACH PROJECT TAUGHT ME
          </h3>
        </Reveal>
        <Reveal>
          <div className="notes-row mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
            {projects.map((project, index) => {
              const extra = projectExtras[project.name] || {};
              return (
                <blockquote
                  key={project.name}
                  className="note-card relative min-w-[85%] snap-start border-2 border-ink bg-white p-6 shadow-hard sm:min-w-[420px]"
                >
                  <span
                    aria-hidden="true"
                    className="font-pixel text-5xl leading-none text-ink/25"
                  >
                    &ldquo;
                  </span>
                  <p className="mt-1 text-[15px] leading-7 text-ink/90">
                    {extra.note || project.description}
                  </p>
                  <footer className="mt-4 font-mono text-[12px] font-bold tracking-widest text-ink/60">
                    PROJECT {String(index + 1).padStart(2, "0")} ·{" "}
                    {project.name.toUpperCase()}
                  </footer>
                </blockquote>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Works;
