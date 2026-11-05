import React, { useEffect } from "react";
import { projects, projectExtras } from "../constants";
const themes = ["Cloud cost intelligence", "Delivery decision support", "Document intelligence", "Real-time collaboration", "Product & funnel analytics"];

// Demo videos for the three projects that have one — shown in the
// "The actual application." evidence section. The Ecommerce video was
// rebuilt from the repo's current synthetic data (seed 42); the Pathfinder
// and CodeFusion cuts are the 35s LinkedIn versions. FinOps Copilot and
// FraudLens-AI have no video.
const projectVideos = {
  Pathfinder: {
    src: "/assets/videos/pathfinder-35s.mp4",
    caption: "Watch the demo — 35s",
    portrait: false,
  },
  CodeFusion: {
    src: "/assets/videos/codefusion-35s.mp4",
    caption: "Watch the demo — 35s",
    portrait: true,
  },
  "Ecommerce Funnel Analytics": {
    src: "/assets/videos/ecommerce-40s.mp4",
    caption: "Watch the walkthrough — 40s",
    portrait: false,
  },
};
export default function ProjectDetail({ name }) {
  const index = projects.findIndex(p => p.name === name);
  const project = projects[index];
  useEffect(() => { document.title = project ? `${project.name} | Omkar Kumar` : "Project not found | Omkar Kumar"; }, [project]);
  if (!project) return <main className="p-10"><h1>Project not found</h1><a href="/#projects">Back to projects</a></main>;
  const extra = projectExtras[name];
  const next = projects[(index + 1) % projects.length];
  return <div className="case-page" style={{"--case-accent":extra.color}}>
    <header className="case-nav"><a href="/#projects">↖ All projects</a><a href="/">OMKAR<span> / SELECTED WORK</span></a><a href={project.source_code_link} target="_blank" rel="noopener noreferrer">GitHub ↗</a></header>
    <main>
      <section className="case-hero">
        <div className="case-heading"><p className="case-eyebrow">PROJECT 0{index+1} · {themes[index]}</p><h1>{name}</h1></div><div className="case-hero-description"><p className="case-lead">{extra.intro}</p><div className="case-actions"><a className="case-primary" href={project.source_code_link} target="_blank" rel="noopener noreferrer">Explore the code ↗</a>{project.live_demo_link && <a href={project.live_demo_link} target="_blank" rel="noopener noreferrer">Try the demo ↗</a>}</div><div className="case-tags">{project.tags.map(t=><span key={t.name}>{t.name}</span>)}</div></div>
      </section>
      <nav className="case-jump" aria-label="On this page"><span>INSIDE THE PROJECT</span><a href="#overview">01 Overview</a><a href="#approach">02 Approach</a><a href="#evidence">03 Evidence</a></nav>
      <section id="overview" className="case-section"><div><p className="case-eyebrow">01 / THE CONTEXT</p><h2>From a problem<br/>to a prototype.</h2></div><p className="case-body">{project.description}</p></section>
      <section id="approach" className="case-approach"><p className="case-eyebrow">02 / HOW IT WORKS</p><h2>Decisions behind the build.</h2><div className="case-feature-grid">{project.features.map((f,i)=><article key={f}><span>0{i+1}</span><p>{f}</p></article>)}</div></section>
      <section id="evidence" className="case-evidence"><div><p className="case-eyebrow">03 / PRODUCT IN PRACTICE</p><h2>The actual application.</h2><p>{projectVideos[name] ? "Product demo video and evaluation context, alongside the source code." : "Product screenshots and evaluation context, alongside the source code."}</p></div>{!projectVideos[name] && (<figure><img src={project.image} alt={`${name} actual application interface`} loading="lazy"/><figcaption>{extra.caption}</figcaption></figure>)}{projectVideos[name] && (<figure><video src={projectVideos[name].src} poster={project.image} controls preload="metadata" playsInline aria-label={`${name} demo video`} style={{ display: "block", width: "100%", maxHeight: "600px", margin: "0 auto", background: "#000", borderRadius: "4px" }} /><figcaption>{projectVideos[name].caption}</figcaption></figure>)}<aside><span>WHAT I LEARNED / LIMITATIONS</span><p>{extra.note}</p></aside></section>
      <footer className="case-footer"><div><p className="case-eyebrow">KEEP EXPLORING</p><h2>{next.name}</h2></div><a href={`?project=${encodeURIComponent(next.name)}`}>Next project ↗</a><a href="/#projects">All projects</a></footer>
    </main>
  </div>;
}
