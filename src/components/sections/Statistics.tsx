import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { SYSTEM_STATS } from '../../data/mockData';
import { Target, Zap, ShieldCheck, Activity, Award } from 'lucide-react';

export const Statistics: React.FC = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const iconMap: Record<string, React.ElementType> = {
    Target,
    Zap,
    ShieldCheck,
    Activity
  };

  return (
    <section id="statistics" className="py-20 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 bg-gradient-to-r from-blue-600/10 via-cyan-500/15 to-purple-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SYSTEM_STATS.map((stat, idx) => {
            const IconComp = iconMap[stat.iconName] || Activity;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 glass-panel shadow-xl text-center space-y-3 relative group hover:border-cyan-500/50 transition-all"
              >
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                  {stat.value}
                  <span className="text-cyan-400 font-sans text-xl sm:text-2xl ml-1">{stat.suffix}</span>
                </div>

                <div className="text-sm font-bold text-slate-200">
                  {stat.label}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
