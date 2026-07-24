import React, { useState } from 'react';
import { Radio, ArrowRight, ShieldCheck, Github, Twitter, Linkedin, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

interface FooterProps {
  onOpenGetStarted: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGetStarted }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-[#0B1120] rounded-[11px] flex items-center justify-center">
                  <Radio className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-heading">
                NEXSENSE <span className="text-cyan-400 font-sans text-xs uppercase px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">AI</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Next Generation Intelligent Sensing System. Detecting human presence, micro-vitals, and motion through walls via WiFi Channel State Information (CSI) with zero cameras.
            </p>

            {/* Live System Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>CSI Edge Mesh Status:</span>
              <span className="text-emerald-400 font-semibold">100% Operational</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Technology */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Technology</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#technology" className="hover:text-cyan-400 transition-colors">WiFi CSI Physics</a></li>
              <li><a href="#how-it-works" className="hover:text-cyan-400 transition-colors">Subcarrier Analytics</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Phase Calibration</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Non-Line-of-Sight Sensing</a></li>
              <li><a href="#research" className="hover:text-cyan-400 transition-colors">IEEE 802.11bf Sensing</a></li>
            </ul>
          </div>

          {/* Column 3: Applications & Solutions */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Applications</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#use-cases" className="hover:text-blue-400 transition-colors">Smart Home Automation</a></li>
              <li><a href="#use-cases" className="hover:text-blue-400 transition-colors">Elderly Care & Fall Alert</a></li>
              <li><a href="#use-cases" className="hover:text-blue-400 transition-colors">Perimeter & Dark Security</a></li>
              <li><a href="#use-cases" className="hover:text-blue-400 transition-colors">Corporate Real Estate</a></li>
              <li><a href="#use-cases" className="hover:text-blue-400 transition-colors">Smart Hotels & Hospitality</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">CSI Research Updates</h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Get peer-reviewed whitepapers and IEEE 802.11bf wireless sensing developments directly in your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="researcher@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
              <Button type="submit" variant="outline" size="sm" className="w-full justify-center">
                Subscribe Updates
              </Button>
            </form>

            {subscribed && (
              <p className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Subscribed to CSI Research Digest
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span>© 2026 NEXSENSE AI Technologies Inc. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              HIPAA & GDPR Privacy Verified
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Contact Support</a>
            <button
              onClick={onOpenGetStarted}
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
            >
              Developer Portal →
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
