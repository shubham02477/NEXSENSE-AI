import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from '../common/Badge';
import { Radio, Cpu, UserCheck, BarChart3, ArrowRight, CheckCircle2, Sparkles, Terminal } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'step-1',
      num: '01',
      title: 'WiFi CSI Extraction',
      badge: 'Signal Acquisition',
      icon: Radio,
      shortText: 'Captures raw amplitude and phase metrics across 256 subcarrier channels from standard Wi-Fi packets.',
      details: [
        'Extracts raw 802.11ax/802.11bf Channel State Information frames',
        'Analyses 256 distinct subcarrier frequency channels simultaneously',
        'Operates passively with zero impact on internet bandwidth (<0.05%)',
        'Works with standard dual-band and tri-band Wi-Fi access points'
      ],
      codeSnippet: `// Step 1: Raw CSI Frame Sampling
const csiPacket = await wifiAdapter.readCSI();
console.log({
  subcarriers: csiPacket.subcarrierCount, // 256
  amplitudeMatrix: csiPacket.amplitudes,  // [256 x 4 MIMO]
  phaseMatrix: csiPacket.phases          // [-PI, +PI]
});`
    },
    {
      id: 'step-2',
      num: '02',
      title: 'AI Neural Signal Processing',
      badge: 'Edge Model Inference',
      icon: Cpu,
      shortText: 'Filters background environmental noise, calibrates multipath fading, and applies Transformer temporal models.',
      details: [
        'Sanitizes phase noise via unwrapping and Conjugate Multiplication',
        'Applies Bandpass Butterworth filters to isolate human motion frequencies (0.1Hz - 10Hz)',
        'Passes spatial matrices through lightweight Spatio-Temporal Transformer',
        'Executes on local router NPU in under 11.4ms latency'
      ],
      codeSnippet: `// Step 2: Phase Unwrapping & Transformer Inference
const cleanPhase = sanitizePhaseNoise(csiPacket.phases);
const spatialEmbeddings = spatioTemporalTransformer.predict(cleanPhase);
// Returns 3D body reflection vectors in real-time`
    },
    {
      id: 'step-3',
      num: '03',
      title: 'Human & Pose Detection',
      badge: 'Spatial Reconstruction',
      icon: UserCheck,
      shortText: 'Reconstructs 3D human pose skeletons, occupancy count, and respiration rates through drywalls.',
      details: [
        'Differentiates human tissue reflection signatures from pets or moving fans',
        'Estimates 3D joint positions (head, torso, limbs) in real-time',
        'Detects sudden velocity drops corresponding to accidental falls (<1.2s)',
        'Measures micro chest displacement for respiration rate (±0.3 BPM)'
      ],
      codeSnippet: `// Step 3: Human State Inference Output
const detection = {
  occupancyCount: 1,
  activityState: "FALL_DETECTED",
  confidence: 0.998,
  respirationRateBpm: 18.2,
  spatialLocation: { x: 2.4, y: 1.8, z: 0.2 }
};`
    },
    {
      id: 'step-4',
      num: '04',
      title: 'Smart Actionable Insights',
      badge: 'API & Automation',
      icon: BarChart3,
      shortText: 'Triggers instant home automation, emergency eldercare alerts, or workspace analytics webhooks.',
      details: [
        'Fires instant MQTT & Webhook events to Home Assistant, BACnet, or Crestron',
        'Dispatches emergency push alerts to senior care caregivers upon fall detection',
        'Updates real-time office floorplan occupancy maps for space optimization',
        'Encrypts telemetry via AES-256 before cloud synchronization'
      ],
      codeSnippet: `// Step 4: Webhook Trigger & Local BACnet Dispatch
if (detection.activityState === "FALL_DETECTED") {
  dispatchEmergencyAlert({
    room: "Senior Suite 4B",
    urgency: "CRITICAL",
    timestamp: Date.now()
  });
}`
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0B1120] relative overflow-hidden bg-grid-pattern">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="cyan" icon={<Sparkles className="w-3.5 h-3.5" />}>
            How The Technology Works
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            From RF Waves to <br />
            <span className="text-gradient-cyan">Spatial Intelligence</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            A 4-step pipeline translating standard Wi-Fi packet reflections into real-time 3D human presence and micro-vital metrics.
          </p>
        </div>

        {/* 4-Step Pipeline Flow Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 relative group overflow-hidden ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-500/10 scale-[1.02]'
                    : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400'
                  }`}>
                    STEP {step.num}
                  </span>
                  <IconComp className={`w-5 h-5 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                </div>

                <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {step.shortText}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 bg-slate-900/80 border border-slate-800 rounded-3xl glass-panel shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <Badge variant="cyan">{steps[activeStep].badge}</Badge>
                  <span className="text-xs font-mono text-slate-400">Step {activeStep + 1} of 4</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {steps[activeStep].title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {steps[activeStep].shortText}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Technical Highlights</h4>
                  <ul className="space-y-2">
                    {steps[activeStep].details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Interactive Code Snippet Preview */}
              <div className="lg:col-span-5 bg-slate-950 rounded-2xl border border-slate-800 p-4 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span>csi_pipeline_kernel.ts</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">Active Pipeline</span>
                </div>

                <pre className="p-3 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed mt-2 bg-slate-900/50 rounded-xl border border-slate-800/60">
                  <code>{steps[activeStep].codeSnippet}</code>
                </pre>

                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800/60">
                  <span>IEEE 802.11bf Standard</span>
                  <span className="text-cyan-400">Execution: 11.4 ms</span>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
