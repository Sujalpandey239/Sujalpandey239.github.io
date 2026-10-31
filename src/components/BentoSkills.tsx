import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Cloud, Terminal, Cpu, Database, Check, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cloud,
  Terminal,
  Cpu,
  Database
};

export const BentoSkills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(PORTFOLIO_DATA.skillsCategories[0].id);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const activeCategory = PORTFOLIO_DATA.skillsCategories.find(c => c.id === activeTab) || PORTFOLIO_DATA.skillsCategories[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.querySelectorAll('.spotlight-bento-card');
    cards.forEach((card) => {
      const rect = (card as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
      (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    });
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" onMouseMove={handleMouseMove}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#232732] pb-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Skills & Infrastructure Stack
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Hands-on expertise spanning cloud engineering, serverless infrastructure, Linux systems administration, and database architectures.
          </p>
        </div>

        <div className="font-mono text-xs text-zinc-500">
          SELECT CATEGORY TO EXPLORE CAPABILITIES
        </div>
      </div>

      {/* Main Bento Layout: Left Category Switcher + Right Detailed Interactive View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Category Selector */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {PORTFOLIO_DATA.skillsCategories.map((cat) => {
            const isSelected = cat.id === activeTab;
            const Icon = iconMap[cat.icon] || Cloud;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative group w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between overflow-hidden ${
                  isSelected
                    ? 'bg-[var(--accent)] text-[#0B0C0F] border-[var(--accent)] shadow-[0_10px_30px_-10px_var(--accent-glow)]'
                    : 'bg-[#12141C] text-zinc-300 border-[#232732] hover:border-zinc-500 hover:bg-[#161922]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2.5 rounded-xl transition-colors ${
                      isSelected ? 'bg-black/15 text-[#0B0C0F]' : 'bg-[#191D27] text-[var(--accent)] group-hover:scale-110'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`font-display font-bold text-base sm:text-lg ${isSelected ? 'text-[#0B0C0F]' : 'text-white'}`}>
                      {cat.label}
                    </h3>
                    <p className={`text-xs font-mono line-clamp-1 ${isSelected ? 'text-[#0B0C0F]/80' : 'text-zinc-400'}`}>
                      {cat.tags.slice(0, 3).join(' • ')}
                    </p>
                  </div>
                </div>

                <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#0B0C0F]' : 'text-zinc-600'}`}>
                  {cat.number}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Column: Dynamic Spotlight Bento Card */}
        <div className="lg:col-span-7" ref={containerRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="spotlight-bento-card spotlight-card bg-[#12141C] border border-[#232732] rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[420px] shadow-2xl relative"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-[#232732] mb-6">
                  <div>
                    <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider">
                      Module {activeCategory.number}
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
                      {activeCategory.title}
                    </h3>
                  </div>
                  <span className="font-mono text-sm px-3 py-1 rounded-full bg-[#181B26] border border-[#282E3E] text-zinc-300">
                    {activeCategory.tags.length} Technologies
                  </span>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base mb-6 leading-relaxed">
                  {activeCategory.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3.5 mb-8">
                  {activeCategory.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                      <div className="mt-1 p-0.5 rounded-full bg-[var(--accent)] text-[#0B0C0F] shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tag Badges */}
              <div className="relative z-10 pt-6 border-t border-[#232732]/80">
                <div className="font-mono text-xs text-zinc-500 uppercase mb-3">
                  Key Services & Tooling:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeCategory.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl font-mono text-xs bg-[#171A24] border border-[#262B3A] text-zinc-200 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
