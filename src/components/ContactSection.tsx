import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Copy, Check, Send, Linkedin, Github, ArrowUpRight, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  // Build the prefilled mailto link exactly like the reference site but enhanced
  const generateMailto = () => {
    const sender = name.trim();
    const org = company.trim();
    const subject = `Hiring enquiry for Cloud / DevOps role${sender ? ` from ${sender}` : ''}${org ? ` (${org})` : ''}`;
    const bodyLines = [
      'Hi Sujal,',
      '',
      message.trim() || 'I came across your portfolio and would like to discuss a Cloud / DevOps opportunity with you.',
      '',
      sender ? `Best regards,\n${sender}` : 'Best regards,',
      org ? `${org}` : ''
    ].filter(Boolean);

    return `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#232732] pb-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] mb-2 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Let's Build Scalable Cloud Systems
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Currently open to Cloud Engineer, DevOps Intern, and SRE opportunities. Reach out directly or send an instant pre-drafted inquiry.
          </p>
        </div>

        <div className="font-mono text-xs text-zinc-500">
          RESPONSE TIME: &lt; 24 HOURS
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Card: Direct Contact & Social Links */}
        <div className="lg:col-span-5 flex flex-col justify-between p-8 bg-[#12141C] border border-[#232732] rounded-3xl shadow-xl">
          <div>
            <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider">
              Direct Channels
            </span>
            <h3 className="font-display font-bold text-2xl text-white mt-1 mb-4">
              Get in Touch
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Feel free to connect directly via email or professional networks. Whether it's an opportunity, a technical discussion on cloud infrastructure, or a project collaboration:
            </p>

            {/* Email Box */}
            <div className="p-4 rounded-2xl bg-[#0E1016] border border-[#232735] mb-6">
              <div className="text-xs font-mono text-zinc-500 uppercase mb-1">Direct Email Address</div>
              <div className="font-mono text-sm sm:text-base text-white break-all select-all font-semibold">
                {PORTFOLIO_DATA.profile.email}
              </div>
              <button
                onClick={handleCopyEmail}
                className="mt-3 w-full py-2 px-3 rounded-xl bg-[#181B26] hover:bg-[#202535] border border-[#2A3042] text-xs font-mono text-zinc-300 flex items-center justify-center gap-2 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Badges */}
          <div className="space-y-3 pt-6 border-t border-[#232732]">
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-3.5 rounded-2xl bg-[#161922] hover:bg-[#1C202C] border border-[#262B3A] text-zinc-200 flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                <div>
                  <div className="font-display font-bold text-sm text-white">LinkedIn Profile</div>
                  <div className="font-mono text-xs text-zinc-400">/in/sujal-pandey-03642331b</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-3.5 rounded-2xl bg-[#161922] hover:bg-[#1C202C] border border-[#262B3A] text-zinc-200 flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-white" />
                <div>
                  <div className="font-display font-bold text-sm text-white">GitHub Repositories</div>
                  <div className="font-mono text-xs text-zinc-400">@Sujalpandey239</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Form: Interactive Pre-filled Mail Generator */}
        <div className="lg:col-span-7 p-8 bg-[#12141C] border border-[#232732] rounded-3xl shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#232732] mb-6">
              <div>
                <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider">
                  Instant Dispatch
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1">
                  Draft an Inquiry
                </h3>
              </div>
              <div className="hidden sm:block font-mono text-xs text-zinc-500">
                PRE-FILLED CLIENT
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-zinc-400 mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Neha Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-[#0D0F15] border border-[#232733] focus:border-[var(--accent)] outline-none font-sans text-sm text-white placeholder-zinc-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-zinc-400 mb-1.5 uppercase">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. CloudTech Inc."
                    className="w-full px-4 py-3 rounded-xl bg-[#0D0F15] border border-[#232733] focus:border-[var(--accent)] outline-none font-sans text-sm text-white placeholder-zinc-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 mb-1.5 uppercase">
                  Message / Role Details
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Sujal, we're impressed by your AWS & DevOps background and would love to connect..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0F15] border border-[#232733] focus:border-[var(--accent)] outline-none font-sans text-sm text-white placeholder-zinc-600 transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#232732] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-zinc-400 text-center sm:text-left">
              Opens your email client with subject & body pre-populated.
            </div>

            <a
              href={generateMailto()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-sans text-sm font-semibold text-[#0B0C0F] transition-all hover:brightness-110 active:scale-95 shadow-lg"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
