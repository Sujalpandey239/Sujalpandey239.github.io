import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';

export const EducationExperience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#232732] pb-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] mb-2 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <span>Trajectory & Background</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Experience & Academic Foundation
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Professional industry internship in cloud engineering paired with rigorous engineering academics at ABESIT.
          </p>
        </div>

        <div className="font-mono text-xs text-zinc-500">
          FIELD EXPERIENCE & EDUCATION
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Work Experience */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-zinc-300 mb-2">
            <Building2 className="w-4 h-4 text-[var(--accent)]" />
            <span>Work & Internship Experience</span>
          </div>

          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#12141C] border border-[#232732] hover:border-[var(--accent)]/40 rounded-3xl p-6 sm:p-7 transition-all shadow-xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent)]/30 font-medium">
                    {exp.type}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white mt-2">
                    {exp.role}
                  </h3>
                  <div className="text-zinc-400 font-mono text-sm mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="text-right font-mono text-xs text-zinc-500 space-y-1">
                  <div className="flex items-center gap-1 justify-end">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1 justify-end">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-3 mb-6 mt-4">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#232732]">
                {exp.tags.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg font-mono text-[11px] bg-[#171A24] text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Education Timeline */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-zinc-300 mb-2">
            <GraduationCap className="w-4 h-4 text-[var(--accent)]" />
            <span>Academic Institutions</span>
          </div>

          <div className="space-y-4">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#12141C] border border-[#232732] hover:border-zinc-500 rounded-3xl p-6 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    {edu.badge && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-2">
                        {edu.badge}
                      </span>
                    )}
                    <h3 className="font-display font-bold text-lg text-white">
                      {edu.institution}
                    </h3>
                    <div className="text-zinc-300 text-sm font-medium mt-0.5">
                      {edu.degree}
                    </div>
                  </div>

                  <div className="text-right font-mono text-xs text-zinc-500 shrink-0">
                    <div>{edu.period}</div>
                    <div className="text-[11px] text-zinc-600">{edu.location}</div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
