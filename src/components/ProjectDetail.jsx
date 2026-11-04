import React, { useEffect } from "react";
import { projects, projectExtras } from "../constants";

export default function ProjectDetail({ name }) {
  const project = projects.find((item) => item.name === name);
  useEffect(() => {
    document.title = project ? project.name + " | Omkar Kumar" : "Project not found | Omkar Kumar";
  }, [project]);
  if (!project) return <main className="min-h-screen bg-paper p-10"><h1 className="text-3xl font-bold">Project not found</h1><a className="underline" href="/#projects">Back to projects</a></main>;
  const extra = projectExtras[project.name] || {};
  return (
    <div className="paper-bg min-h-screen text-ink">
      <header className="border-b border-ink/20 bg-paper px-6 py-5">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4" aria-label="Project navigation">
          <a className="font-bold underline underline-offset-4" href="/#projects">← All projects</a>
          <span className="font-mono text-sm">OMKAR KUMAR · PROJECT DETAILS</span>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <p className="font-mono text-sm font-bold tracking-widest">PROJECT {String(projects.indexOf(project) + 1).padStart(2, "0")}</p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-6xl">{project.name}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8">{extra.intro}</p>
        <div className="mt-7 flex flex-wrap gap-4">
          <a className="border-2 border-ink bg-ink px-6 py-3 font-bold text-white" href={project.source_code_link} target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>
          {project.live_demo_link && <a className="border-2 border-ink bg-white px-6 py-3 font-bold" href={project.live_demo_link} target="_blank" rel="noopener noreferrer">Open live demo ↗</a>}
        </div>
        <figure className="my-10 border border-ink/20 bg-white p-3 shadow-lg">
          <img src={project.image} alt={project.name + " application screenshot"} className="max-h-[600px] w-full object-contain" />
          <figcaption className="p-3 text-center text-sm">{extra.caption}</figcaption>
        </figure>
        <div className="space-y-8 rounded-xl border border-ink/15 bg-white/90 p-6 sm:p-10">
          <section><h2 className="text-2xl font-bold">Project overview</h2><p className="mt-4 leading-8">{project.description}</p></section>
          <section><h2 className="text-2xl font-bold">Features & approach</h2><ul className="mt-4 list-disc space-y-3 pl-5">{project.features.map(feature => <li key={feature} className="leading-7">{feature}</li>)}</ul></section>
          <section><h2 className="text-2xl font-bold">Tools & technologies</h2><ul className="mt-4 flex flex-wrap gap-2">{project.tags.map(tag => <li className="rounded border border-ink/20 bg-paper px-3 py-2" key={tag.name}>{tag.name}</li>)}</ul></section>
          <section><h2 className="text-2xl font-bold">Evaluation & limitations</h2><p className="mt-4 leading-8">{extra.note}</p></section>
          <section><h2 className="text-2xl font-bold">Explore the source</h2><p className="mt-4 leading-7">See the repository for implementation details, setup instructions and project documentation.</p><a className="mt-3 inline-block font-bold underline underline-offset-4" href={project.source_code_link} target="_blank" rel="noopener noreferrer">{project.name} on GitHub ↗</a></section>
        </div>
        <a className="mt-10 inline-block font-bold underline" href="/#projects">← Back to all projects</a>
      </main>
    </div>
  );
}
