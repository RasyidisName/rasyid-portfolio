import React from 'react';
import { projects } from './data/projects';
import ProjectCard from './components/ProjectCard';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 antialiased font-sans selection:bg-cyan-500/30">
      
      {/* HERO SECTION */}
      <main className="flex flex-col items-center justify-center p-6 text-center pt-32 pb-20">
        <div className="space-y-6 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Rasyid<span className="text-cyan-400">.dev</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
            S1 Teknik Informatika. Frontend Developer dengan fokus pada <span className="text-slate-200 font-semibold">React Ecosystem</span>, <span className="text-slate-200 font-semibold">Clean Code</span>, dan <span className="text-slate-200 font-semibold">Technical Marketing</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <span className="px-4 py-2 rounded-full border border-slate-800 bg-slate-900 text-sm text-slate-300">Parrot OS User</span>
            <span className="px-4 py-2 rounded-full border border-cyan-900 bg-cyan-950 text-sm text-cyan-400 animate-pulse">Vite + Tailwind v4</span>
          </div>
        </div>
      </main>

      {/* PROJECTS SECTION */}
      <section className="max-w-4xl mx-auto px-6 pb-32">
        <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              desc={project.desc}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </div>
      </section>

    </div>
  );
}