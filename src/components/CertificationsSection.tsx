import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA, Certification } from '../data/portfolioData';
import { Award, ExternalLink, CheckCircle, Shield, Sparkles } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'aws' | 'cloud' | 'linux'>('all');

  const filteredCerts = PORTFOLIO_DATA.certifications.filter((cert) => {
    if (filter === 'all') return true;
    if (filter === 'aws') return cert.title.toLowerCase().includes('aws');
    if (filter === 'cloud') return cert.title.toLowerCase().includes('cloud') || cert.skills.includes('Cloud Computing');
    if (filter === 'linux') return cert.title.toLowerCase().includes('linux') || cert.skills.includes('Linux OS');
    return true;
  });

  return (
    <section id="certs" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#232732] pb-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] mb-2 flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>Credentials & Accreditations</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Verified Certifications & Badges
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Accredited validations across Amazon Web Services, IBM SkillsBuild, Linux administration, and enterprise architecture.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All (5)' },
            { id: 'aws', label: 'AWS (3)' },
            { id: 'cloud', label: 'Cloud Fundamentals' },
            { id: 'linux', label: 'Linux OS' }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all ${
                filter === btn.id
                  ? 'bg-[var(--accent)] text-[#0B0C0F] font-semibold shadow-md'
                  : 'bg-[#14161F] text-zinc-400 hover:text-white border border-[#232732]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredCerts.map((cert: Certification) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`relative bg-[#12141C] border rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                cert.highlight
                  ? 'border-[var(--accent)]/60 shadow-[0_10px_35px_-15px_var(--accent-glow)]'
                  : 'border-[#232732] hover:border-zinc-500'
              }`}
            >
              {/* Highlight Badge if featured */}
              {cert.highlight && (
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[var(--accent)] text-[#0B0C0F] font-mono text-[11px] font-bold flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3" />
                  <span>CORE ACCREDITATION</span>
                </div>
              )}

              <div>
                {/* Header Meta */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-[#191C28] text-[var(--accent)] border border-[#2B3144]">
                    <Shield className="w-5 h-5" />
                  </div>

                  <div className="text-right">
                    <span className="font-mono text-xs text-zinc-400 block">{cert.issuer}</span>
                    <span className="font-mono text-[11px] text-zinc-500">Issued {cert.issueDate}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-white mb-2 leading-snug">
                  {cert.title}
                </h3>

                {cert.credentialId && (
                  <div className="font-mono text-[11px] text-zinc-500 mb-3">
                    ID: <span className="text-zinc-300">{cert.credentialId}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div>
                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg font-mono text-[11px] bg-[#171A24] text-zinc-300 border border-[#222736]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom Verification Link */}
                <div className="pt-4 border-t border-[#232732] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-[var(--accent)] hover:underline"
                    >
                      <span>Show Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
