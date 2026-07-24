import React from 'react';
import { motion } from 'motion/react';
import { TRUSTED_PARTNERS } from '../../data/mockData';
import { ShieldCheck, Award } from 'lucide-react';

export const TrustedBy: React.FC = () => {
  return (
    <section id="trusted-by" className="py-12 bg-slate-950/80 border-y border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            Peer-Reviewed & Industry Standardized
          </div>
          <h3 className="text-sm sm:text-base font-semibold text-slate-400">
            Engineered in collaboration with wireless sensing pioneers & mesh router leaders
          </h3>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center opacity-80">
          {TRUSTED_PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-3 bg-slate-900/40 hover:bg-slate-800/60 border border-slate-800/60 hover:border-slate-700 rounded-xl text-center transition-all group"
            >
              <span className="text-xs sm:text-sm font-bold text-slate-300 group-hover:text-white transition-colors font-heading tracking-tight block">
                {partner.label}
              </span>
              <span className="text-[10px] text-slate-500 font-mono block mt-0.5 truncate">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            IEEE 802.11bf Sensing Standard Member
          </span>
          <span>•</span>
          <span>Wi-Fi Alliance Certified CSI Interface</span>
          <span>•</span>
          <span>US Patents Pending #18/942,019</span>
        </div>
      </div>
    </section>
  );
};
