import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '../common/Badge';
import { TESTIMONIALS } from '../../data/mockData';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="emerald" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
            Verified Deployments
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Trusted by Leaders in <br />
            <span className="text-gradient-cyan">Health, Security & IoT</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            See how enterprise leaders deploy camera-free WiFi CSI sensing for safety and automation.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 glass-panel shadow-2xl flex flex-col justify-between space-y-6 relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-700 group-hover:text-cyan-500/40 transition-colors" />
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover border border-cyan-500/40"
                />
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-white text-sm">
                    <span>{testimonial.name}</span>
                    {testimonial.verified && (
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" title="Verified Customer" />
                    )}
                  </div>
                  <p className="text-xs text-slate-400">{testimonial.role}, <strong className="text-slate-300">{testimonial.company}</strong></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
