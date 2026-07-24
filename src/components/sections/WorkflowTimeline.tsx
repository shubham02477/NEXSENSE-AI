import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '../common/Badge';
import { Radio, ShieldAlert, Cpu, Send, CheckCircle2, GitCommit } from 'lucide-react';

export const WorkflowTimeline: React.FC = () => {
  const timelineEvents = [
    {
      phase: '01',
      title: 'Packet Beacon & Subcarrier Capture',
      time: '0.0 ms',
      icon: Radio,
      badge: 'Signal Harvest',
      desc: 'Sensing kernel hooks into Wi-Fi 6/7 MAC layer. Extracts 256 CSI amplitude and phase subcarriers per beacon packet without frame dropping.'
    },
    {
      phase: '02',
      title: 'Phase Noise & Multipath Calibration',
      time: '3.2 ms',
      icon: ShieldAlert,
      badge: 'Signal Cleaning',
      desc: 'Applies phase unwrapping and conjugate multiplication to eliminate carrier frequency offset (CFO) and static environment wall reflections.'
    },
    {
      phase: '03',
      title: 'Spatio-Temporal Transformer Ingestion',
      time: '7.8 ms',
      icon: Cpu,
      badge: 'Neural Inference',
      desc: 'Lightweight Transformer neural net maps phase variance matrices to 3D human body skeletal joints and Doppler motion profiles.'
    },
    {
      phase: '04',
      title: 'Real-Time API & MQTT Webhook Dispatch',
      time: '11.4 ms',
      icon: Send,
      badge: 'Action Trigger',
      desc: 'Dispatches instant sub-12ms JSON payloads to Home Assistant, BACnet controllers, or emergency senior care caregiver networks.'
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-[#0B1120] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="purple" icon={<GitCommit className="w-3.5 h-3.5" />}>
            Low Latency Execution
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Sub-12ms End-to-End <br />
            <span className="text-gradient-cyan">AI Workflow Timeline</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            From raw RF wave perturbation to automated home & health action in less time than a single eye blink.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {timelineEvents.map((evt, idx) => {
              const IconComponent = evt.icon;
              return (
                <motion.div
                  key={evt.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-3xl glass-panel relative flex flex-col justify-between group space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold text-sm font-mono shadow-md">
                        {evt.phase}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-slate-800 text-[11px] font-mono text-cyan-300 border border-slate-700">
                        {evt.time}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-heading mb-2">
                      {evt.title}
                    </h3>

                    <p className="text-slate-300 text-xs leading-relaxed">
                      {evt.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {evt.badge}
                    </span>
                    <IconComponent className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
