import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { currentAccent, setAccentById, palette } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-[#1C1F2A] bg-[#090A0E] py-12 px-4 sm:px-6 lg:px-8 text-zinc-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: System Status & Profile */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#11131A] border border-[#202534] text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-zinc-400">All Cloud Services Operational</span>
          </div>
          <div>
            <span>&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.profile.name} • Designed & Built with React & Tailwind</span>
          </div>
        </div>

        {/* Center: Accent Color Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-zinc-500 text-[11px] uppercase">Accent:</span>
          <div className="flex items-center gap-1.5 bg-[#12141C] p-1 rounded-full border border-[#202534]">
            {palette.map((p) => (
              <button
                key={p.id}
                onClick={() => setAccentById(p.id)}
                className={`w-3.5 h-3.5 rounded-full transition-transform ${
                  p.id === currentAccent.id ? 'scale-125 ring-1 ring-white' : 'opacity-60 hover:opacity-100'
                }`}
                style={{ backgroundColor: p.color }}
                title={p.name}
              />
            ))}
          </div>
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#12141C] hover:bg-[#1A1D28] border border-[#222736] text-zinc-300 hover:text-[var(--accent)] transition-all"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
