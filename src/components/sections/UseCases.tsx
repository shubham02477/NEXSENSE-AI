import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Badge } from '../common/Badge';
import { USE_CASES } from '../../data/mockData';
import { 
  Home, 
  Activity, 
  Lock, 
  Building2, 
  Hotel, 
  ShoppingBag, 
  Check, 
  ArrowRight,
  Shield,
  Sparkles
} from 'lucide-react';

export const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('smart-home');

  const iconMap: Record<string, React.ElementType> = {
    Home,
    Activity,
    Lock,
    Building2,
    Hotel,
    ShoppingBag
  };

  const selectedUseCase = USE_CASES.find(u => u.id === activeTab) || USE_CASES[0];
  const IconComp = iconMap[selectedUseCase.iconName] || Home;

  return (
    <section id="use-cases" className="py-24 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="cyan" icon={<Sparkles className="w-3.5 h-3.5" />}>
            Versatile Applications
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Tailored Solutions Across <br />
            <span className="text-gradient-cyan">Every Industry Sector</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Deploy privacy-first WiFi CSI sensing wherever human presence, motion, and vital signs require continuous 24/7 intelligence.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {USE_CASES.map((uc) => {
            const TabIcon = iconMap[uc.iconName] || Home;
            const isSelected = activeTab === uc.id;
            return (
              <button
                key={uc.id}
                onClick={() => setActiveTab(uc.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 scale-105'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{uc.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Use Case Highlight Card */}
        <motion.div
          key={selectedUseCase.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 glass-panel shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="cyan">{selectedUseCase.category}</Badge>
                <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  {selectedUseCase.stats}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading">
                {selectedUseCase.title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {selectedUseCase.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Business Benefits</h4>
                <div className="space-y-2">
                  {selectedUseCase.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-3 text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Graphic Card */}
            <div className="lg:col-span-5 relative">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 shadow-2xl">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <IconComp className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white">{selectedUseCase.title} Blueprint</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Operates natively across existing enterprise router hardware with zero dedicated cabling.
                  </p>
                </div>

                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex justify-between">
                    <span>Privacy Rating:</span>
                    <span className="text-emerald-400 font-bold">100% Optical Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hardware Cost:</span>
                    <span className="text-cyan-400">$0 (Existing Wi-Fi)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Compliance:</span>
                    <span className="text-blue-400">HIPAA, GDPR & CCPA</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
