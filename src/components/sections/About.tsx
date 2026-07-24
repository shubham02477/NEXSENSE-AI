import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '../common/Badge';
import { EyeOff, Radio, Shield, Cpu, Lock, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0B1120] relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="cyan" icon={<Shield className="w-3.5 h-3.5" />}>
              The Privacy-First Paradigm
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
              Sensing Without Surveillance. <br />
              <span className="text-gradient-cyan">The Optical-Free Future.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Traditional human detection relies heavily on optical cameras, thermal imagers, or wearable tags. Cameras inherently violate privacy in bedrooms, bathrooms, hotel suites, and executive offices.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              <strong className="text-white">NEXSENSE AI</strong> introduces a fundamental breakthrough: turning standard Wi-Fi signals into a high-definition spatial radar. By analyzing <span className="text-cyan-400 font-semibold">Channel State Information (CSI)</span> subcarrier distortions caused by body motion and breathing, our AI detects humans with 99.8% precision—completely blind to visual appearance.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl glass-card space-y-2">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <EyeOff className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white">Zero Camera Footprint</h4>
                <p className="text-xs text-slate-400">
                  No visual recording or photographic capturing is ever possible. 100% compliant with HIPAA, GDPR & CCPA.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl glass-card space-y-2">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Radio className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white">Volumetric 360° Field</h4>
                <p className="text-xs text-slate-400">
                  Wi-Fi radio waves pass through drywalls, glass, and furniture, eliminating traditional camera blind spots.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl glass-card space-y-2">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white">Edge AI Processing</h4>
                <p className="text-xs text-slate-400">
                  Runs lightweight Transformer neural kernels on local routers with sub-12ms response time.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl glass-card space-y-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Lock className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white">Zero Hardware Overhead</h4>
                <p className="text-xs text-slate-400">
                  Embeds onto existing Wi-Fi 5, 6, 6E & 7 routers. No new cabling or sensor modules to purchase.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Visual Graphic */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative p-6 bg-slate-900/80 border border-slate-800 rounded-3xl glass-panel space-y-6 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white">NEXSENSE CSI ARCHITECTURE</span>
                </div>
                <Badge variant="emerald">100% Privacy Sealed</Badge>
              </div>

              {/* Diagram Comparison Box */}
              <div className="space-y-4 text-xs font-mono">
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl space-y-1">
                  <div className="flex items-center justify-between text-red-400 font-bold">
                    <span>OLD WAY: Optical Security Cameras</span>
                    <span>High Risk</span>
                  </div>
                  <p className="text-slate-400 font-sans text-xs">
                    Violates personal privacy, blocked by walls, fails in dark/fog, expensive wiring.
                  </p>
                </div>

                <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl space-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/10 blur-xl rounded-full" />
                  <div className="flex items-center justify-between text-cyan-300 font-bold">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      NEXSENSE WAY: WiFi CSI Subcarriers
                    </span>
                    <span className="text-emerald-400">100% Safe</span>
                  </div>
                  <p className="text-slate-300 font-sans text-xs leading-relaxed">
                    Uses existing Wi-Fi RF waves. Calculates subcarrier phase shifts to reconstruct human 3D spatial presence with zero visual optics.
                  </p>
                </div>
              </div>

              {/* Technical Specifications List */}
              <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Frequency Spectrum:</span>
                  <span className="text-white font-mono">2.4 GHz / 5 GHz / 6 GHz</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Subcarriers Analyzed:</span>
                  <span className="text-white font-mono">up to 512 channels</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Spatial Accuracy:</span>
                  <span className="text-cyan-400 font-mono font-bold">&lt; 0.8 cm</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
