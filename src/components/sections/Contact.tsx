import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Send, CheckCircle2, Mail, MapPin, Phone, ShieldCheck, Radio, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'Enterprise Pilot Program',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="cyan" icon={<MessageSquare className="w-3.5 h-3.5" />}>
            Get In Touch
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Deploy NEXSENSE AI <br />
            <span className="text-gradient-cyan">On Your Wi-Fi Network</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Schedule a live technical demo or request developer SDK kernel access for your enterprise router fleet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 glass-panel shadow-2xl space-y-6">
              <h3 className="text-2xl font-bold text-white font-heading">
                Wireless Sensing Headquarters
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Our wireless engineers and spatial AI specialists are ready to help you integrate IEEE 802.11bf CSI human detection into your hardware ecosystem.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 text-sm">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">NEXSENSE Labs Inc.</h4>
                    <p className="text-slate-400 text-xs">Silicon Valley Wireless Tech Center, Palo Alto, CA 94301</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Direct Research & Sales</h4>
                    <p className="text-slate-400 text-xs">enterprise@nexsense.ai</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Support Hotline</h4>
                    <p className="text-slate-400 text-xs">+1 (800) 555-SENSE / 24/7 Response</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-center gap-3 text-xs text-slate-300">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>NDA protected communications. Your network architecture details remain 100% confidential.</span>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 glass-panel shadow-2xl relative overflow-hidden">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">Message Dispatched!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you <strong className="text-white">{formData.name}</strong>. A NEXSENSE wireless sensing architect will review your request regarding <span className="text-cyan-400">{formData.subject}</span> and respond within 4 business hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', subject: 'Enterprise Pilot Program', message: '' }); }}
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Sarah Lin"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Company / Institution
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. HealthTech Labs"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Subject / Inquiry Type
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 text-sm"
                      >
                        <option>Enterprise Pilot Program</option>
                        <option>Developer SDK & Router Kernel</option>
                        <option>Research Collaboration / Whitepaper</option>
                        <option>OEM & Router License Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Project Details / Requirements
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your router hardware, deployment scale, and target application (e.g., senior fall detection, office occupancy)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="glow"
                      size="lg"
                      isLoading={loading}
                      className="w-full justify-center"
                      rightIcon={<Send className="w-4 h-4" />}
                    >
                      Submit Technical Inquiry
                    </Button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
