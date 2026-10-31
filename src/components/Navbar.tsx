import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentAccent, setAccentById, palette } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Architecture', href: '#pipeline' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certs' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#0B0C0F]/80 backdrop-blur-md border-b border-[#232732]/70 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#top"
          className="group flex items-center gap-1.5 font-mono text-sm tracking-wider font-semibold text-[#EDEDED] hover:text-white transition-colors"
        >
          <span className="text-zinc-400">&gt;</span>
          <span>{PORTFOLIO_DATA.profile.handle}</span>
          <span className="text-[var(--accent)] animate-pulse">_</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 font-mono text-[13px] tracking-wider uppercase text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[var(--accent)] transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--accent)] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA & Palette */}
        <div className="flex items-center gap-3">
          {/* Accent Color Switcher */}
          <div className="flex items-center gap-1.5 bg-[#14161C] border border-[#232732] px-2.5 py-1.5 rounded-full shadow-inner" title="Switch Theme Accent">
            {palette.map((p) => {
              const isActive = p.id === currentAccent.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setAccentById(p.id)}
                  aria-label={p.name}
                  className="relative p-0.5 rounded-full transition-transform active:scale-95"
                >
                  <span
                    className={`block w-3.5 h-3.5 rounded-full transition-all duration-200 ${
                      isActive ? 'scale-110 ring-2 ring-white/80 ring-offset-1 ring-offset-[#14161C]' : 'opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                    style={{ backgroundColor: p.color }}
                  />
                </button>
              );
            })}
          </div>

          {/* Hire Me Button */}
          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=Opportunity%20for%20Sujal%20Pandey%20-%20Cloud%20%26%20DevOps`}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-sans text-xs font-semibold text-[#0B0C0F] transition-all duration-200 hover:brightness-110 active:scale-95 shadow-sm"
            style={{ backgroundColor: 'var(--accent)' }}
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#14161C] border border-[#232732] text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0D0F14]/95 border-b border-[#232732] backdrop-blur-xl px-6 py-5 flex flex-col gap-4 font-mono text-sm tracking-wider uppercase text-zinc-300"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[var(--accent)] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-zinc-600 text-xs">→</span>
              </a>
            ))}
            <div className="pt-3 border-t border-[#232732] flex flex-col gap-3">
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=Opportunity%20for%20Sujal%20Pandey`}
                className="w-full py-2.5 rounded-full text-center font-sans text-sm font-semibold text-[#0B0C0F]"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                Hire Me Directly
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
