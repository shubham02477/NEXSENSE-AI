import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Badge } from '../common/Badge';
import { FEATURES_LIST } from '../../data/mockData';
import { 
  Radio, 
  Shield, 
  Layers, 
  HeartPulse, 
  Users, 
  Cpu, 
  ArrowRight, 
  Check, 
  Sparkles,
  Zap
} from 'lucide-react';

export const Features: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Accuracy', 'Privacy', 'Hardware', 'AI'];

  const filteredFeatures = selectedCategory === 'All'
    ? FEATURES_LIST
    : FEATURES_LIST.filter(f => f.category === selectedCategory);

  const iconMap: Record<string, React.ElementType> = {
    Radio,
    Shield,
    Layers,
    HeartPulse,
    Users,
    Cpu
  };

  return (
    <section id="features" className="py-24 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge variant="blue" icon={<Zap className="w-3.5 h-3.5" />}>
            Platform Capabilities
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Enterprise-Grade <br />
            <span className="text-gradient-cyan">Wi-Fi Spatial Sensing</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Powerful hardware-agnostic features powered by IEEE 802.11bf Channel State Information neural analytics.
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFeatures.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconName] || Radio;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 glass-card glass-card-hover flex flex-col justify-between relative overflow-hidden"
              >
                {/* Glow on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shadow-lg">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-800 text-cyan-400 border border-slate-700">
                      {feature.metrics}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-heading">
                    {feature.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-slate-800/80">
                    {feature.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span className="font-mono text-[11px] uppercase tracking-wider">{feature.category} Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
