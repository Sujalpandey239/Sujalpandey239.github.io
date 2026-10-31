import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FolderGit2, ArrowUpRight, Zap, CheckCircle2, Layers } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#232732] pb-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] mb-2 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Cloud Architectures & Systems Projects
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Real-world cloud workloads built with high availability, infrastructure-as-code automation, and decoupled microservices.
          </p>
        </div>

        <div className="font-mono text-xs text-zinc-500">
          PROD-READY ARCHITECTURES
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-[#12141C] border border-[#232732] hover:border-[var(--accent)]/50 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
          >
            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#1A1D27] text-[var(--accent)] border border-[#2B3142]">
                  {project.badge}
                </span>

                <div className="p-2 rounded-xl bg-[#191C26] text-zinc-400 group-hover:text-[var(--accent)] transition-colors">
                  <FolderGit2 className="w-4 h-4" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl text-white group-hover:text-[var(--accent)] transition-colors mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Architecture highlights */}
              <div className="mb-5 space-y-2">
                <div className="font-mono text-[11px] uppercase text-zinc-500 tracking-wider">
                  Architecture Highlights:
                </div>
                {project.architecture.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300 font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Metric Callout */}
              <div className="mb-5 p-3 rounded-xl bg-[#0D0E13] border border-[#1E212B] flex items-center gap-2 text-xs font-mono text-zinc-300">
                <Zap className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                <span className="truncate">{project.metrics}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#232732]">
                {project.tags.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg font-mono text-[11px] bg-[#171A24] text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 flex items-center justify-between">
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=Inquiry%20regarding%20${encodeURIComponent(project.title)}`}
                  className="font-mono text-xs text-zinc-300 hover:text-[var(--accent)] transition-colors flex items-center gap-1 group/btn"
                >
                  <span>Discuss Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>

                <span className="font-mono text-[11px] text-zinc-600">0{idx + 1}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
