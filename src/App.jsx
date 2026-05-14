import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Jalur masuk library SEO
import { projects } from './data/projects';
import ProjectCard from './components/ProjectCard';

export default function App() {
  // Metadata Teknis (Sesuaikan deskripsi agar pas dengan target audiens/recruiter)
  const siteTitle = "Rasyid.dev | IT Portfolio";
  const siteDescription = "Portofolio profesional Rasyid, S1 Teknik Informatika. Frontend Developer dengan fokus pada React Ecosystem, Clean Code, dan Technical Marketing.";
  const siteUrl = "https://rasyid-portfolio-ruby.vercel.app/"; 
  const siteImage = `${siteUrl}/og-image.png`; // Pastikan og-image.png sudah ada di folder /public

  return (
    <HelmetProvider>
      <Helmet>
        {/* Standard Meta Tags */}
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />

        {/* Open Graph / WhatsApp / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteImage} />

        {/* Twitter / X Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={siteImage} />

        {/* DATA TERSTRUKTUR (JSON-LD) UNTUK GOOGLEBOT */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abdul Rasyid",
            "url": "https://rasyid-portfolio-ruby.vercel.app/",
            "jobTitle": "Frontend Developer",
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "Universitas Islam Kalimantan Muhammad Arsyad Al Banjari"
            },
            "knowsAbout": [
              "React",
              "Vite",
              "Tailwind CSS v4",
              "Laravel",
              "Filament 3",
              "Technical SEO",
              "Parrot OS"
            ]
          })}
        </script>
      </Helmet>

      {/* KONTEN UI ASLI ANDA (Tetap utuh dengan Tailwind v4) */}
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
    </HelmetProvider>
  );
}