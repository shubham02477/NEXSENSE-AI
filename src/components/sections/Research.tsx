import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';
import { RESEARCH_PAPERS } from '../../data/mockData';
import { ResearchPaper } from '../../types';
import { 
  FileText, 
  Download, 
  BookOpen, 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  Search
} from 'lucide-react';

export const Research: React.FC = () => {
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);

  return (
    <section id="research" className="py-24 bg-[#0B1120] relative overflow-hidden border-t border-slate-800/80 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="purple" icon={<BookOpen className="w-3.5 h-3.5" />}>
            Peer-Reviewed Innovation
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Scientific Foundation & <br />
            <span className="text-gradient-cyan">IEEE Academic Papers</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Built on over a decade of groundbreaking research in signal processing, phase unwrapping, and deep learning spatio-temporal modeling.
          </p>
        </div>

        {/* Research Papers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {RESEARCH_PAPERS.map((paper, idx) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 glass-panel shadow-2xl flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {paper.conference} ({paper.year})
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {paper.pdfSize}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors font-heading leading-snug">
                  {paper.title}
                </h3>

                <p className="text-xs text-cyan-400 font-mono">
                  {paper.authors}
                </p>

                <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                  {paper.abstract}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {paper.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Citations: <strong className="text-white">{paper.citations}</strong>
                </span>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedPaper(paper)}
                  leftIcon={<FileText className="w-3.5 h-3.5" />}
                >
                  Read Abstract
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Paper Abstract Modal */}
      {selectedPaper && (
        <Modal
          isOpen={!!selectedPaper}
          onClose={() => setSelectedPaper(null)}
          title={selectedPaper.title}
          subtitle={`${selectedPaper.conference} • Published ${selectedPaper.year}`}
          maxWidth="2xl"
        >
          <div className="space-y-6">
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1 text-xs font-mono text-slate-300">
              <div className="text-cyan-400 font-bold">{selectedPaper.authors}</div>
              <div className="text-slate-400">IEEE 802.11bf Wireless Sensing Task Group Reference</div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Paper Abstract</h4>
              <p className="text-slate-200 text-sm leading-relaxed bg-slate-900/60 p-4 border border-slate-800 rounded-xl">
                {selectedPaper.abstract}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono text-slate-400">
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                <span className="block text-slate-500">Peer Citations:</span>
                <span className="text-lg font-bold text-white">{selectedPaper.citations} Papers</span>
              </div>
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                <span className="block text-slate-500">Document Size:</span>
                <span className="text-lg font-bold text-cyan-400">{selectedPaper.pdfSize} PDF</span>
              </div>
            </div>

            <div className="pt-4 flex justify-end gap-3">
              <Button variant="ghost" onClick={() => setSelectedPaper(null)}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  alert(`Downloading full whitepaper PDF (${selectedPaper.pdfSize})`);
                  setSelectedPaper(null);
                }}
                leftIcon={<Download className="w-4 h-4" />}
              >
                Download PDF
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
