import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from '../common/Badge';
import { FAQ_LIST } from '../../data/mockData';
import { HelpCircle, ChevronDown, Search, Sparkles } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Technology', 'Privacy', 'Deployment', 'General'];

  const filteredFaqs = FAQ_LIST.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesQuery = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#0B1120] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="cyan" icon={<HelpCircle className="w-3.5 h-3.5" />}>
            Frequently Asked Questions
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Got Questions? <br />
            <span className="text-gradient-cyan">We Have Clear Answers.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Everything you need to know about WiFi Channel State Information sensing, router drivers, and privacy compliance.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4 mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions e.g. wall penetration, privacy, router speeds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-slate-900 border border-slate-800 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-slate-900/80 border border-slate-800/80 overflow-hidden glass-card transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base font-bold text-white font-heading">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-800 text-slate-400 transition-transform ${
                    isOpen ? 'rotate-180 text-cyan-400 bg-cyan-500/10' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-5 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 pt-3"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 p-6 bg-slate-900/40 rounded-2xl border border-slate-800">
              <p className="text-slate-400 text-sm">No questions matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="text-xs text-cyan-400 font-semibold mt-2 hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
