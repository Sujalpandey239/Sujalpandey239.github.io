import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowDown, Copy, Check, ExternalLink, Sparkles, Terminal, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { profile } = PORTFOLIO_DATA;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const floatingTags = [
    'AWS Associate Essentials',
    'AWS Lambda & Serverless',
    'Amazon S3 & DynamoDB',
    'Linux CLI & Bash',
    'Docker & CI/CD',
    'CloudWatch & IAM',
  ];

  return (
    <section id="top" className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[var(--accent-glow)] rounded-full blur-[140px] pointer-events-none opacity-20" />

      {/* Badges row */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center gap-3 mb-6 font-mono text-xs sm:text-sm"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13151B] border border-[#232732] text-zinc-300 shadow-sm">
          <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: 'var(--accent)' }} />
          <span className="w-2 h-2 rounded-full -ml-4" style={{ backgroundColor: 'var(--accent)' }} />
          <span className="text-[var(--accent)] font-medium">{profile.badge}</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#13151B] border border-[#232732] text-zinc-400">
          <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>AWS Intern @ Navodita InfoTech</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#13151B]/80 border border-[#232732] text-zinc-400">
          <span>{profile.location}</span>
        </div>
      </motion.div>

      {/* Main Massive Name Headline */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h1 className="font-display font-extrabold tracking-[-0.05em] leading-[0.88] text-[clamp(54px,13vw,170px)] text-[#EDEDED] uppercase select-none">
          {profile.firstName}
          <br />
          {profile.lastName}
          <span className="text-[var(--accent)] drop-shadow-[0_0_35px_var(--accent-glow)]">.</span>
        </h1>
      </motion.div>

      {/* Subtitle & Value Proposition Grid */}
      <div className="mt-8 pt-8 border-t border-[#232732] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 space-y-4"
        >
          <p className="text-xl sm:text-2xl text-zinc-300 font-light leading-relaxed">
            <span className="font-medium text-white">{profile.title}</span> & Fourth-year CSE student at ABESIT. 
            I build on AWS with serverless backends and Linux, write clean bash automations, and focus on secure, reliable cloud infrastructure.
          </p>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-mono">
            AWS Certified Associate Essentials &bull; IBM Cloud Fundamentals &bull; Forage Solutions Architecture
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <a
              href="#pipeline"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-sans text-sm font-semibold text-[#0B0C0F] transition-all hover:brightness-110 active:scale-95 shadow-md"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore Cloud Architecture</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#14161D] hover:bg-[#1A1E27] border border-[#2B303D] hover:border-zinc-500 font-mono text-xs sm:text-sm text-zinc-300 transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>Copy Email: {profile.email}</span>
                </>
              )}
            </button>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-[#14161D] hover:bg-[#1A1E27] border border-[#2B303D] font-mono text-xs text-zinc-300 hover:text-white transition-all"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            <a
              href="#terminal"
              className="inline-flex items-center gap-1.5 px-3 py-3 rounded-xl bg-[#14161D] hover:bg-[#1A1E27] border border-[#2B303D] font-mono text-xs text-zinc-400 hover:text-[var(--accent)] transition-all"
              title="Open Terminal"
            >
              <Terminal className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Stats & Capability Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-5 flex flex-col justify-between gap-6"
        >
          {/* 2x2 Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            {profile.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#13151C]/90 border border-[#232732] hover:border-[var(--accent)]/40 transition-colors group"
              >
                <div className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-[var(--accent)] transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Floating Pill Chips */}
          <div className="flex flex-wrap gap-2">
            {floatingTags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-[#141720] border border-[#262B38] text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="mt-14 flex items-center justify-between text-zinc-500 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          <span>SCROLL TO DISCOVER CAPABILITIES</span>
        </div>
        <a href="#skills" className="hover:text-zinc-300 transition-colors flex items-center gap-1">
          <span>[ EXPLORE ]</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
