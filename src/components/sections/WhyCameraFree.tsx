import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Badge } from '../common/Badge';
import { COMPARISON_MATRIX } from '../../data/mockData';
import { Check, X, Shield, EyeOff, Lock, Radio, Sparkles } from 'lucide-react';

export const WhyCameraFree: React.FC = () => {
  const [highlightedRow, setHighlightedRow] = useState<number | null>(null);

  return (
    <section id="why-camera-free" className="py-24 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-dots-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="blue" icon={<EyeOff className="w-3.5 h-3.5" />}>
            The Camera-Free Paradigm
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Why WiFi CSI Outperforms <br />
            <span className="text-gradient-cyan">Cameras & Radar Systems</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Compare the technical capabilities, privacy compliance, and installation overhead across human detection technologies.
          </p>
        </div>

        {/* Interactive Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/60 glass-panel shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/80">
                <th className="py-5 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Sensing Capability
                </th>
                <th className="py-5 px-6 text-sm font-bold text-cyan-400 bg-blue-500/10 border-x border-blue-500/20 rounded-t-xl">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-cyan-400" />
                    <span>NEXSENSE WiFi CSI</span>
                  </div>
                </th>
                <th className="py-5 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  IP Security Cameras
                </th>
                <th className="py-5 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  mmWave Radar
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800/80 text-sm">
              {COMPARISON_MATRIX.map((row, idx) => (
                <tr
                  key={row.feature}
                  onMouseEnter={() => setHighlightedRow(idx)}
                  onMouseLeave={() => setHighlightedRow(null)}
                  className={`transition-colors ${
                    highlightedRow === idx ? 'bg-slate-800/50' : ''
                  }`}
                >
                  <td className="py-4 px-6 font-semibold text-white">
                    {row.feature}
                  </td>

                  {/* WiFi CSI Column (Primary Highlight) */}
                  <td className="py-4 px-6 font-medium text-cyan-300 bg-blue-500/5 border-x border-blue-500/20">
                    <div className="flex items-start gap-2">
                      <div className="p-1 rounded-md bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{row.wifiCsi}</span>
                    </div>
                  </td>

                  {/* Camera Column */}
                  <td className="py-4 px-6 text-slate-400">
                    <div className="flex items-start gap-2">
                      <div className="p-1 rounded-md bg-red-500/10 text-red-400 mt-0.5 shrink-0">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <span>{row.camera}</span>
                    </div>
                  </td>

                  {/* Radar Column */}
                  <td className="py-4 px-6 text-slate-400">
                    <div className="flex items-start gap-2">
                      <div className="p-1 rounded-md bg-amber-500/10 text-amber-400 mt-0.5 shrink-0">
                        <span className="text-[10px] font-mono font-bold">~</span>
                      </div>
                      <span>{row.radar}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key Feature Highlight Cards Below Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl glass-card space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">100% Optical Privacy</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No visual image or pixel data is created or captured. Perfect for senior care bedrooms, bathrooms, and confidential boardrooms.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl glass-card space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <Radio className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Wall-Penetrating 360°</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Radio waves pass naturally through drywalls, glass doors, and furniture. A single router covers multiple adjacent rooms simultaneously.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl glass-card space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">24/7 Dark & Fog Immunity</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Operates in absolute pitch-black darkness, smoke, steam, or fog without requiring infrared illuminators or extra power draw.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
