import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { Radio, ArrowRight, ShieldCheck, Activity, ChevronDown, Zap, EyeOff, Layers } from 'lucide-react';

interface HeroProps {
  onOpenGetStarted: () => void;
  onExploreDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGetStarted, onExploreDemo }) => {
  const [wavePhase, setWavePhase] = useState(0);
  const [activeTab, setActiveTab] = useState<'wave' | 'pose'>('wave');

  useEffect(() => {
    const interval = setInterval(() => {
      setWavePhase((prev) => (prev + 1) % 360);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-[#0B1120] bg-grid-pattern">
      {/* Background Animated Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-600/10 blur-[90px] rounded-full pointer-events-none animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Announcement Chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Introducing Next-Gen WiFi CSI Detection</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 font-heading">
                Intelligence Beyond <br />
                Vision.
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl">
                NEXSENSE AI uses existing Wi-Fi signals to map human presence, pose, motion, and vitals with millisecond precision through walls. <span className="text-slate-200 font-semibold">No cameras. Total privacy. Infinite applications.</span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                variant="white"
                size="lg"
                onClick={onExploreDemo}
              >
                Watch Live Demo
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onOpenGetStarted}
              >
                Read Whitepaper
              </Button>
            </motion.div>

            {/* Quick Metrics Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 pt-4"
            >
              <div className="bg-slate-900/60 backdrop-blur-xl border border-white/5 p-4 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-1.5 text-blue-400 text-xs font-mono mb-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>LATENCY</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white font-heading">&lt; 12 ms</div>
                <div className="text-[11px] text-slate-400">Real-time edge AI</div>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-xl border border-white/5 p-4 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-1.5 text-violet-400 text-xs font-mono mb-1">
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>PRIVACY</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white font-heading">0 Lens</div>
                <div className="text-[11px] text-slate-400">100% Anonymized</div>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-xl border border-white/5 p-4 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span>PENETRATION</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white font-heading">360° NLoS</div>
                <div className="text-[11px] text-slate-400">Through drywalls</div>
              </div>
            </motion.div>

            {/* Trust Footer Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 text-xs text-slate-400 pt-2"
            >
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" /> HIPAA & GDPR Compliant
              </span>
              <span>•</span>
              <span>Runs on Cisco, Ubiquiti, Asus & OpenWrt</span>
            </motion.div>

          </div>

          {/* Right Column: Animated AI WiFi CSI Visualization Display */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl p-1 bg-gradient-to-b from-slate-700/50 via-slate-800/40 to-slate-900/80 shadow-2xl glass-panel"
            >
              {/* Inner Display Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-slate-950/60 rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">CSI_SUBCARRIER_SPECTRUM_v4.2</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveTab('wave')}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-colors ${
                      activeTab === 'wave' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    RF Wave
                  </button>
                  <button
                    onClick={() => setActiveTab('pose')}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-colors ${
                      activeTab === 'pose' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    3D Pose Mesh
                  </button>
                </div>
              </div>

              {/* Interactive Visual Canvas Container */}
              <div className="relative h-[380px] sm:h-[420px] bg-slate-950/90 rounded-b-2xl overflow-hidden flex flex-col justify-between p-4">
                
                {/* Radar/CSI Grid Overlay */}
                <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />

                {/* Concentric Signal Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-500/20 rounded-full animate-signal pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-500/15 rounded-full animate-signal pointer-events-none" style={{ animationDelay: '1.2s' }} />

                {/* Animated CSI Signal Subcarrier Spectrum Graph */}
                {activeTab === 'wave' ? (
                  <div className="relative z-10 my-auto space-y-6">
                    {/* WiFi Access Point Transmitter */}
                    <div className="flex items-center justify-between px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/20">
                          <Radio className="w-5 h-5 animate-pulse" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Wi-Fi 7 Router (Tx)</p>
                          <p className="text-[10px] font-mono text-cyan-400">256 CSI Subcarriers @ 5.8 GHz</p>
                        </div>
                      </div>

                      <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        Human Presence Active
                      </div>
                    </div>

                    {/* Dynamic Sine Wave Perturbation Graph */}
                    <div className="h-32 w-full relative flex items-center justify-center overflow-hidden bg-slate-900/60 rounded-xl border border-slate-800 p-2">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100">
                        {/* Baseline wave */}
                        <path
                          d={Array.from({ length: 40 }).reduce((acc, _, i) => {
                            const x = i * 10;
                            const y = 50 + Math.sin((i + wavePhase / 5) * 0.4) * 15;
                            return `${acc} ${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                          }, '')}
                          fill="none"
                          stroke="rgba(59, 130, 246, 0.4)"
                          strokeWidth="2"
                        />
                        {/* Human Perturbation wave (Phase shift) */}
                        <path
                          d={Array.from({ length: 40 }).reduce((acc, _, i) => {
                            const x = i * 10;
                            const isPerturbed = i > 12 && i < 28;
                            const amp = isPerturbed ? 35 : 10;
                            const y = 50 + Math.sin((i + wavePhase / 3) * 0.6) * amp;
                            return `${acc} ${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                          }, '')}
                          fill="none"
                          stroke="url(#cyanGlow)"
                          strokeWidth="3"
                        />
                        <defs>
                          <linearGradient id="cyanGlow" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="50%" stopColor="#06B6D4" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Human silhouette indicator overlay */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                        <div className="px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-400/50 text-[10px] font-mono text-cyan-300 backdrop-blur-sm shadow-lg">
                          HUMAN BODY PERTURBATION
                        </div>
                      </div>
                    </div>

                    {/* Receiver Node */}
                    <div className="flex items-center justify-between px-4">
                      <div>
                        <p className="text-xs font-mono text-slate-300">Phase Variance: <span className="text-cyan-400 font-bold">0.84 rad</span></p>
                        <p className="text-[10px] font-mono text-slate-500">Respiration: 16 BPM detected</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-mono text-slate-300">Confidence Score: <span className="text-emerald-400 font-bold">99.82%</span></p>
                        <p className="text-[10px] font-mono text-slate-500">Camera Lens: 0 (Disabled)</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* 3D Human Pose Mesh View */
                  <div className="relative z-10 my-auto flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="relative w-48 h-56 border border-cyan-500/30 rounded-2xl bg-slate-900/80 p-4 flex items-center justify-center shadow-inner">
                      {/* Grid Box */}
                      <div className="absolute inset-0 bg-grid-pattern opacity-40 rounded-2xl" />
                      
                      {/* Stylized Node Human Skeleton Pose */}
                      <div className="relative z-10 flex flex-col items-center space-y-2 animate-pulse">
                        <div className="w-8 h-8 rounded-full border-2 border-cyan-400 bg-cyan-500/20 shadow-lg shadow-cyan-500/40" />
                        <div className="w-0.5 h-16 bg-gradient-to-b from-cyan-400 to-blue-500" />
                        <div className="w-24 h-0.5 bg-cyan-400 -mt-12" />
                        <div className="flex justify-between w-20 pt-8">
                          <div className="w-0.5 h-16 bg-blue-500 transform -rotate-12" />
                          <div className="w-0.5 h-16 bg-blue-500 transform rotate-12" />
                        </div>
                      </div>

                      <div className="absolute bottom-2 left-2 right-2 px-2 py-1 bg-slate-950/80 rounded border border-slate-800 text-[10px] font-mono text-cyan-400">
                        CSI 3D Pose Mesh Reconstruction
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 max-w-xs">
                      Translates subcarrier phase delays into 3D body joints without visual image capturing.
                    </p>
                  </div>
                )}

                {/* Footer Bar inside Display */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800/80 pt-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    IEEE 802.11bf Sensing
                  </span>
                  <span className="text-slate-500">NEXSENSE Engine v2.4</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Downward Scroll Indicator */}
        <div className="mt-16 text-center">
          <a
            href="#trusted-by"
            className="inline-flex flex-col items-center text-xs text-slate-500 hover:text-cyan-400 transition-colors group"
          >
            <span className="font-mono tracking-wider uppercase text-[10px] mb-1">Scroll to Explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
