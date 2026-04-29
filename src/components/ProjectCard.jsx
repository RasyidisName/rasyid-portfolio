export default function ProjectCard({ title, desc, tech, link }) {
  return (
    <div className="border border-slate-800 bg-slate-900/40 p-6 rounded-2xl hover:border-cyan-500/50 transition duration-300">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 mb-5 text-sm leading-relaxed">{desc}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item, index) => (
          <span key={index} className="text-xs font-mono text-cyan-400 bg-cyan-950/50 px-2.5 py-1 rounded-md border border-cyan-900/50">
            {item}
          </span>
        ))}
      </div>
      
      <a href={link} target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-300 hover:text-cyan-400 transition flex items-center gap-1">
        Lihat Project <span>→</span>
      </a>
    </div>
  )
}