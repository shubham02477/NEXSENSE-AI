import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { MouseGlow } from './components/common/MouseGlow';
import { SearchModal } from './components/common/SearchModal';
import { GetStartedModal } from './components/common/GetStartedModal';

import { Hero } from './components/sections/Hero';
import { TrustedBy } from './components/sections/TrustedBy';
import { About } from './components/sections/About';
import { WhyCameraFree } from './components/sections/WhyCameraFree';
import { HowItWorks } from './components/sections/HowItWorks';
import { Features } from './components/sections/Features';
import { WorkflowTimeline } from './components/sections/WorkflowTimeline';
import { Statistics } from './components/sections/Statistics';
import { DemoPreview } from './components/sections/DemoPreview';
import { UseCases } from './components/sections/UseCases';
import { Research } from './components/sections/Research';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Keyboard shortcut for Cmd+K / Ctrl+K search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'technology', 'features', 'how-it-works', 'research', 'use-cases', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreDemo = () => {
    const demoElement = document.getElementById('demo');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchResultSelect = (id: string, type: string) => {
    let targetId = 'features';
    if (type === 'faq') targetId = 'faq';
    if (type === 'paper') targetId = 'research';
    if (type === 'usecase') targetId = 'use-cases';

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-[#CBD5E1] font-sans relative selection:bg-blue-500/30 selection:text-white antialiased">
      {/* Ambient Mouse Lighting Effect */}
      <MouseGlow />

      {/* Navigation Header */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenGetStarted={() => setIsGetStartedOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero
          onOpenGetStarted={() => setIsGetStartedOpen(true)}
          onExploreDemo={handleExploreDemo}
        />

        <TrustedBy />

        <About />

        <WhyCameraFree />

        <HowItWorks />

        <Features />

        <WorkflowTimeline />

        <Statistics />

        <DemoPreview />

        <UseCases />

        <Research />

        <Testimonials />

        <FAQ />

        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenGetStarted={() => setIsGetStartedOpen(true)} />

      {/* Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSearchResultSelect}
      />

      <GetStartedModal
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
      />
    </div>
  );
}
