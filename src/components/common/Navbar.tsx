import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu, X, Radio, ChevronRight, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenGetStarted: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenGetStarted,
  activeSection = 'home'
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Technology', href: '#technology' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Research', href: '#research' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1120]/80 backdrop-blur-md border-b border-white/5 shadow-2xl py-3.5'
          : 'bg-[#0B1120]/40 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-4 h-4 border-2 border-white rounded-full opacity-80 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white font-heading">
                NEXSENSE <span className="text-blue-500">AI</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-400 uppercase tracking-widest">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase().replace(/\s+/g, '-');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`transition-colors text-xs font-semibold hover:text-white ${
                    isActive ? 'text-white border-b-2 border-blue-500 pb-0.5' : 'text-slate-400'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-white/10 rounded-full transition-colors flex items-center gap-2 text-xs"
              title="Search website (Ctrl + K)"
            >
              <Search className="w-4 h-4 text-blue-400" />
              <span className="hidden md:inline text-slate-400 text-[11px] font-mono">⌘K</span>
            </button>

            {/* Get Started Button */}
            <div className="hidden sm:block">
              <Button
                variant="primary"
                size="sm"
                onClick={onOpenGetStarted}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-white/10 rounded-full lg:hidden transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b border-slate-800 bg-[#0B1120]/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="flex items-center justify-between p-3 bg-slate-900/60 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800 border border-slate-800/50"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-3">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center gap-2 text-xs text-blue-300">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Privacy-first sensing — Zero camera risk</span>
                </div>
                <Button
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGetStarted();
                  }}
                  rightIcon={<ChevronRight className="w-4 h-4" />}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
