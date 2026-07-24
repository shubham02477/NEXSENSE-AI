import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { DEMO_ROOMS } from '../../data/mockData';
import { DemoRoom } from '../../types';
import { 
  Radio, 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  EyeOff, 
  Terminal, 
  Play, 
  Pause, 
  RotateCcw, 
  HeartPulse, 
  Users, 
  Home, 
  Layers,
  Sparkles,
  Wifi
} from 'lucide-react';

export const DemoPreview: React.FC = () => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>('living-room');
  const [simulating, setSimulating] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'map' | 'json' | 'subcarrier'>('map');
  const [simulatedActivity, setSimulatedActivity] = useState<string | null>(null);

  const currentRoom = DEMO_ROOMS.find(r => r.id === selectedRoomId) || DEMO_ROOMS[0];

  // Dynamic state override for simulation
  const activityState = simulatedActivity || currentRoom.activity;

  // Wave phase animation tick
  const [tick, setTick] = useState(0);
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (simulating) {
      interval = setInterval(() => {
        setTick(t => t + 1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [simulating]);

  const handleSimulateFall = () => {
    setSimulatedActivity('Fall Detected');
    setTimeout(() => {
      setSimulatedActivity(null);
    }, 6000);
  };

  return (
    <section id="demo" className="py-24 bg-[#0B1120] relative overflow-hidden border-t border-slate-800/80">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge variant="cyan" pulse icon={<Activity className="w-3.5 h-3.5" />}>
            Interactive CSI Radar Console
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Live Human Sensing <br />
            <span className="text-gradient-cyan">Dashboard & Simulator</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Experience real-time camera-free human presence, motion tracking, and fall alerts running over standard Wi-Fi subcarriers.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 glass-panel shadow-2xl overflow-hidden">
          
          {/* Top Control Bar */}
          <div className="p-4 sm:p-6 border-b border-slate-800/80 bg-slate-950/80 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Room Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {DEMO_ROOMS.map((room) => (
                <button
                  key={room.id}
                  onClick={() => {
                    setSelectedRoomId(room.id);
                    setSimulatedActivity(null);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                    selectedRoomId === room.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>{room.name}</span>
                </button>
              ))}
            </div>

            {/* Simulation Actions */}
            <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
              <button
                onClick={handleSimulateFall}
                className="px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <AlertTriangle className="w-4 h-4 text-amber-400 animate-bounce" />
                Simulate Fall Event
              </button>

              <button
                onClick={() => setSimulating(!simulating)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs transition-colors"
                title={simulating ? "Pause Feed" : "Resume Feed"}
              >
                {simulating ? <Pause className="w-4 h-4 text-cyan-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
              </button>

              <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-xl border border-slate-800">
                <button
                  onClick={() => setActiveTab('map')}
                  className={`px-2.5 py-1 text-xs font-mono rounded-lg transition-colors ${
                    activeTab === 'map' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  2D Radar
                </button>
                <button
                  onClick={() => setActiveTab('subcarrier')}
                  className={`px-2.5 py-1 text-xs font-mono rounded-lg transition-colors ${
                    activeTab === 'subcarrier' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  CSI Wave
                </button>
                <button
                  onClick={() => setActiveTab('json')}
                  className={`px-2.5 py-1 text-xs font-mono rounded-lg transition-colors ${
                    activeTab === 'json' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  JSON API
                </button>
              </div>
            </div>

          </div>

          {/* Main Console Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 p-6 gap-6">
            
            {/* Left Radar/Wave Display */}
            <div className="lg:col-span-8 bg-slate-950 rounded-2xl border border-slate-800 p-6 relative overflow-hidden flex flex-col justify-between min-h-[380px]">
              
              {/* Background Grid */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

              {/* Status Header Overlay */}
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono text-slate-300">
                    CSI STREAM: <strong className="text-cyan-400">{currentRoom.name}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono">
                  {activityState === 'Fall Detected' ? (
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      CRITICAL FALL DETECTED (1.2s)
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      State: {activityState}
                    </span>
                  )}
                </div>
              </div>

              {/* Main Content Tab Views */}
              {activeTab === 'map' && (
                <div className="relative z-10 my-auto h-64 w-full border border-slate-800 rounded-2xl bg-slate-900/60 p-4 flex items-center justify-center overflow-hidden">
                  
                  {/* Concentric Radar Circles */}
                  <div className="absolute w-48 h-48 border border-cyan-500/20 rounded-full animate-signal" />
                  <div className="absolute w-80 h-80 border border-blue-500/10 rounded-full animate-signal" style={{ animationDelay: '1.2s' }} />

                  {/* Room Boundary Layout */}
                  <div className="w-full h-full border-2 border-dashed border-slate-700/80 rounded-xl relative p-4 flex items-center justify-center">
                    
                    {/* Wi-Fi AP Router Node */}
                    <div className="absolute top-4 left-4 p-2 bg-blue-600/20 border border-blue-500/40 rounded-xl text-blue-400 flex items-center gap-2 shadow-lg">
                      <Wifi className="w-4 h-4 text-cyan-400 animate-pulse" />
                      <span className="text-[10px] font-mono text-slate-200">Wi-Fi AP (Tx/Rx)</span>
                    </div>

                    {/* Human Occupant Dot(s) */}
                    {activityState !== 'Empty' ? (
                      <motion.div
                        animate={{
                          x: activityState === 'Walking' ? [ -30, 30, -30 ] : 0,
                          scale: activityState === 'Fall Detected' ? [1, 1.4, 0.8] : 1
                        }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className={`relative z-20 flex flex-col items-center justify-center`}
                      >
                        <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-2xl ${
                          activityState === 'Fall Detected'
                            ? 'bg-red-500/30 border-red-500 text-red-300 animate-ping'
                            : 'bg-cyan-500/30 border-cyan-400 text-cyan-200'
                        }`}>
                          <Users className="w-6 h-6" />
                        </div>

                        <div className="mt-2 px-2.5 py-1 rounded bg-slate-950/90 border border-slate-700 text-[11px] font-mono text-cyan-300 shadow-xl">
                          Human 3D Target #1 [{activityState}]
                        </div>
                      </motion.div>
                    ) : (
                      <p className="text-xs text-slate-500 font-mono">No human presence detected in this zone.</p>
                    )}

                  </div>
                </div>
              )}

              {activeTab === 'subcarrier' && (
                <div className="relative z-10 my-auto h-64 w-full border border-slate-800 rounded-2xl bg-slate-900/60 p-4 flex flex-col justify-between">
                  <div className="text-xs font-mono text-cyan-400 flex items-center justify-between">
                    <span>256 Subcarrier Phase Spectrum Matrix</span>
                    <span>Sampling Rate: 1000 Hz</span>
                  </div>

                  <svg className="w-full h-40 overflow-visible" viewBox="0 0 400 100">
                    <path
                      d={Array.from({ length: 40 }).reduce((acc, _, i) => {
                        const x = i * 10;
                        const amp = activityState === 'Fall Detected' ? 45 : activityState === 'Walking' ? 30 : 12;
                        const y = 50 + Math.sin((i + tick) * 0.5) * amp;
                        return `${acc} ${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                      }, '')}
                      fill="none"
                      stroke={activityState === 'Fall Detected' ? '#EF4444' : '#06B6D4'}
                      strokeWidth="3"
                    />
                  </svg>

                  <div className="flex justify-between text-[11px] font-mono text-slate-500">
                    <span>Subcarrier #1</span>
                    <span>Subcarrier #128</span>
                    <span>Subcarrier #256</span>
                  </div>
                </div>
              )}

              {activeTab === 'json' && (
                <div className="relative z-10 my-auto h-64 w-full border border-slate-800 rounded-2xl bg-slate-950 p-4 font-mono text-xs text-cyan-300 overflow-y-auto">
                  <pre>
{JSON.stringify({
  timestamp: new Date().toISOString(),
  zoneId: currentRoom.id,
  zoneName: currentRoom.name,
  occupancyCount: activityState === 'Empty' ? 0 : currentRoom.occupants,
  activityState: activityState,
  csiSignalMetrics: {
    rssiDbm: -48,
    phaseVarianceRad: activityState === 'Fall Detected' ? 2.84 : 0.42,
    subcarriersAnalyzed: 256,
    signalStrengthPercent: currentRoom.signalStrength
  },
  vitalsTelemetry: currentRoom.vitals ? {
    respirationBpm: currentRoom.vitals.respirationRate,
    heartRateApprox: currentRoom.vitals.heartRateApprox
  } : null,
  privacyGuarantee: {
    opticalCameras: 0,
    anonymized: true,
    hipaaCompliant: true
  }
}, null, 2)}
                  </pre>
                </div>
              )}

              {/* Bottom Footer Stats inside Console */}
              <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-slate-800/80">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <EyeOff className="w-3.5 h-3.5 text-cyan-400" />
                  Optical Camera: 0 (Disabled)
                </span>
                <span>Latency: &lt;11.4 ms</span>
              </div>

            </div>

            {/* Right Telemetry Sidebar */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* Telemetry Card 1: Vitals */}
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <HeartPulse className="w-4 h-4" />
                    MICRO VITAL SIGNS
                  </span>
                  <Badge variant="cyan">Contactless</Badge>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                    <div className="text-xs text-slate-400">Respiration</div>
                    <div className="text-lg font-bold text-white font-mono mt-1">
                      {currentRoom.vitals ? `${currentRoom.vitals.respirationRate} BPM` : '16 BPM'}
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                    <div className="text-xs text-slate-400">Heart Rate Approx</div>
                    <div className="text-lg font-bold text-white font-mono mt-1">
                      {currentRoom.vitals ? `${currentRoom.vitals.heartRateApprox} BPM` : '70 BPM'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Telemetry Card 2: Occupancy & Coverage */}
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <Users className="w-4 h-4" />
                    HEADCOUNT
                  </span>
                  <span className="text-emerald-400 font-bold">99.8% Accuracy</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-900 border border-slate-800 rounded-xl">
                  <div>
                    <div className="text-xs text-slate-400">Current Occupants</div>
                    <div className="text-xl font-bold text-white font-mono">
                      {activityState === 'Empty' ? '0 Persons' : `${currentRoom.occupants} Person(s)`}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400">CSI Power</div>
                    <div className="text-sm font-bold text-cyan-400 font-mono">
                      {currentRoom.signalStrength}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Telemetry Card 3: System Status */}
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-2 text-xs text-slate-400 font-mono">
                <div className="flex justify-between">
                  <span>IEEE Standard:</span>
                  <span className="text-slate-200">802.11bf Draft 4.0</span>
                </div>
                <div className="flex justify-between">
                  <span>Wall Barrier:</span>
                  <span className="text-cyan-400">Drywall / Glass (NLoS)</span>
                </div>
                <div className="flex justify-between">
                  <span>Bandwidth Draw:</span>
                  <span className="text-emerald-400">&lt; 0.04%</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
