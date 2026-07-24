import React, { useState } from 'react';
import { Modal } from './Modal';
import { Search, Radio, FileText, HelpCircle, ArrowRight, Shield } from 'lucide-react';
import { FEATURES_LIST, FAQ_LIST, RESEARCH_PAPERS, USE_CASES } from '../../data/mockData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult?: (id: string, type: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectResult }) => {
  const [query, setQuery] = useState('');

  const filteredFeatures = FEATURES_LIST.filter(f => 
    f.title.toLowerCase().includes(query.toLowerCase()) || 
    f.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredFaqs = FAQ_LIST.filter(f => 
    f.question.toLowerCase().includes(query.toLowerCase()) || 
    f.answer.toLowerCase().includes(query.toLowerCase())
  );

  const filteredPapers = RESEARCH_PAPERS.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) || 
    p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredUseCases = USE_CASES.filter(u => 
    u.title.toLowerCase().includes(query.toLowerCase()) || 
    u.description.toLowerCase().includes(query.toLowerCase())
  );

  const hasResults = query.trim() !== '' && (
    filteredFeatures.length > 0 || 
    filteredFaqs.length > 0 || 
    filteredPapers.length > 0 || 
    filteredUseCases.length > 0
  );

  const handleItemClick = (id: string, type: string) => {
    if (onSelectResult) {
      onSelectResult(id, type);
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="2xl">
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-blue-400" />
          <input
            type="text"
            placeholder="Search technology, WiFi CSI features, research, FAQs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full pl-12 pr-4 py-3.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm font-medium"
          />
        </div>

        {/* Quick Links / Suggestions when empty */}
        {query.trim() === '' && (
          <div className="space-y-3 pt-2">
            <p className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Popular Search Topics</p>
            <div className="flex flex-wrap gap-2">
              {['WiFi CSI Sensing', 'Wall Penetration', 'Privacy Guarantee', 'IEEE 802.11bf', 'Elderly Care Fall Detection', 'Router Compatibility'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3 py-1.5 bg-slate-800/80 hover:bg-slate-700/80 text-xs text-slate-300 hover:text-white rounded-lg border border-slate-700/50 transition-colors flex items-center gap-1.5"
                >
                  <Search className="w-3 h-3 text-cyan-400" />
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        {query.trim() !== '' && (
          <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-1 divide-y divide-slate-800">
            {/* Features */}
            {filteredFeatures.length > 0 && (
              <div className="pt-2">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5" /> Capabilities ({filteredFeatures.length})
                </p>
                <div className="space-y-1.5">
                  {filteredFeatures.map(item => (
                    <div
                      key={item.id}
                      onClick={() => handleItemClick(item.id, 'feature')}
                      className="p-3 bg-slate-800/40 hover:bg-slate-800/80 rounded-xl cursor-pointer transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">{item.title}</h4>
                        <p className="text-xs text-slate-400 line-clamp-1">{item.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Use Cases */}
            {filteredUseCases.length > 0 && (
              <div className="pt-3">
                <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" /> Applications ({filteredUseCases.length})
                </p>
                <div className="space-y-1.5">
                  {filteredUseCases.map(item => (
                    <div
                      key={item.id}
                      onClick={() => handleItemClick(item.id, 'usecase')}
                      className="p-3 bg-slate-800/40 hover:bg-slate-800/80 rounded-xl cursor-pointer transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                        <p className="text-xs text-slate-400 line-clamp-1">{item.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Research Papers */}
            {filteredPapers.length > 0 && (
              <div className="pt-3">
                <p className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" /> Whitepapers & Research ({filteredPapers.length})
                </p>
                <div className="space-y-1.5">
                  {filteredPapers.map(item => (
                    <div
                      key={item.id}
                      onClick={() => handleItemClick(item.id, 'paper')}
                      className="p-3 bg-slate-800/40 hover:bg-slate-800/80 rounded-xl cursor-pointer transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">{item.title}</h4>
                        <p className="text-xs text-slate-400 line-clamp-1">{item.conference} ({item.year})</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {filteredFaqs.length > 0 && (
              <div className="pt-3">
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" /> FAQs ({filteredFaqs.length})
                </p>
                <div className="space-y-1.5">
                  {filteredFaqs.map(item => (
                    <div
                      key={item.id}
                      onClick={() => handleItemClick(item.id, 'faq')}
                      className="p-3 bg-slate-800/40 hover:bg-slate-800/80 rounded-xl cursor-pointer transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">{item.question}</h4>
                        <p className="text-xs text-slate-400 line-clamp-1">{item.answer}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!hasResults && (
              <div className="p-8 text-center">
                <p className="text-slate-400 text-sm">No matching CSI research, FAQs or features found for "{query}".</p>
                <p className="text-xs text-slate-500 mt-1">Try searching for "wall penetration", "privacy", or "IEEE 802.11bf".</p>
              </div>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};
