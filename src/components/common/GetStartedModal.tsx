import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { Badge } from './Badge';
import { ShieldCheck, Cpu, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'pilot' | 'sdk'>('pilot');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    routerModel: 'Ubiquiti / Cisco Mesh',
    useCase: 'Smart Home / Eldercare'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      company: '',
      routerModel: 'Ubiquiti / Cisco Mesh',
      useCase: 'Smart Home / Eldercare'
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={submitted ? "Request Received!" : "Access NEXSENSE AI Platform"}
      subtitle={submitted ? "Our wireless sensing engineers will contact you shortly." : "Deploy camera-free human detection on existing Wi-Fi infrastructure."}
      maxWidth="xl"
    >
      {submitted ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white">Welcome to the Future of Sensing</h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            We have dispatched your request for the <span className="text-cyan-400 font-semibold">{activeTab === 'pilot' ? 'Enterprise Pilot Program' : 'Developer SDK Kernel access'}</span>. Check your inbox ({formData.email || 'your email'}) for the initial CSI API documentation and onboarding setup guide.
          </p>

          <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl text-left space-y-2 text-xs text-slate-400">
            <div className="flex justify-between">
              <span className="text-slate-500">Target Router:</span>
              <span className="text-slate-200 font-medium">{formData.routerModel}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Primary Domain:</span>
              <span className="text-slate-200 font-medium">{formData.useCase}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Status:</span>
              <span className="text-emerald-400 font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Key Provisioned
              </span>
            </div>
          </div>

          <div className="pt-4">
            <Button variant="primary" onClick={handleReset} rightIcon={<ArrowRight className="w-4 h-4" />}>
              Return to Website
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Mode Selector */}
          <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-900 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('pilot')}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'pilot'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Building2 className="w-4 h-4" />
              Enterprise Pilot
            </button>
            <button
              onClick={() => setActiveTab('sdk')}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'sdk'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Cpu className="w-4 h-4" />
              Developer SDK & Kernel
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Alex Vance"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. HealthTech Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Target Router / AP Fleet
                </label>
                <select
                  value={formData.routerModel}
                  onChange={(e) => setFormData({ ...formData, routerModel: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 text-sm"
                >
                  <option>Ubiquiti UniFi 6 / 7</option>
                  <option>Cisco Catalyst / Meraki</option>
                  <option>Asus ZenWiFi / ROG Mesh</option>
                  <option>Netgear Orbi / Nighthawk</option>
                  <option>Custom Embedded OpenWrt / Linux</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Primary Application
              </label>
              <select
                value={formData.useCase}
                onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 text-sm"
              >
                <option>Smart Home & Lighting Automation</option>
                <option>Elderly Care Fall Detection & Vital Signs</option>
                <option>Perimeter & Through-Wall Security</option>
                <option>Corporate Desk & Office Occupancy</option>
                <option>Hospitality & Hotel Privacy Analytics</option>
              </select>
            </div>

            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-between text-xs text-blue-300">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                No camera or optical hardware needed
              </span>
              <Badge variant="cyan">IEEE 802.11bf Compliant</Badge>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <Button type="button" variant="ghost" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                {activeTab === 'pilot' ? 'Schedule Pilot Program' : 'Request SDK Trial'}
              </Button>
            </div>
          </form>
        </div>
      )}
    </Modal>
  );
};
