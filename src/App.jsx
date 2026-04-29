import React from 'react';

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="space-y-6 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
          Rasyid<span className="text-cyan-400">.dev</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
          S1 Teknik Informatika. Frontend Developer dengan fokus pada <span className="text-slate-200 font-semibold">React Ecosystem</span>, <span className="text-slate-200 font-semibold">Clean Code</span>, dan <span className="text-slate-200 font-semibold">Technical Marketing</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <span className="px-4 py-2 rounded-full border border-slate-800 bg-slate-900 text-sm text-slate-300">
            Parrot OS User
          </span>
          <span className="px-4 py-2 rounded-full border border-cyan-900 bg-cyan-950 text-sm text-cyan-400 animate-pulse">
            Vite + Tailwind v4
          </span>
          <span className="px-4 py-2 rounded-full border border-slate-800 bg-slate-900 text-sm text-slate-300">
            SEO Optimized
          </span>
        </div>
      </div>
    </main>
  );
}