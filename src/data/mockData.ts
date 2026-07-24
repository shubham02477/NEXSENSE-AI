import { 
  FeatureItem, 
  ComparisonItem, 
  UseCaseItem, 
  ResearchPaper, 
  TestimonialItem, 
  FAQItem, 
  StatItem,
  DemoRoom 
} from '../types';

export const SYSTEM_STATS: StatItem[] = [
  {
    id: 'accuracy',
    label: 'Detection Accuracy',
    value: 99.8,
    suffix: '%',
    decimals: 1,
    description: 'Sub-centimeter human presence verification across wall barriers',
    iconName: 'Target'
  },
  {
    id: 'latency',
    label: 'Inference Latency',
    value: 11.4,
    suffix: ' ms',
    decimals: 1,
    description: 'Real-time CSI signal processing via lightweight Transformer edge AI',
    iconName: 'Zap'
  },
  {
    id: 'cameras',
    label: 'Cameras Needed',
    value: 0,
    suffix: ' Lens',
    description: '100% optical-free privacy guaranteed in bedrooms and bathrooms',
    iconName: 'ShieldCheck'
  },
  {
    id: 'subcarriers',
    label: 'CSI Subcarriers',
    value: 256,
    suffix: ' Channels',
    description: 'Simultaneous amplitude & phase analysis per packet transmission',
    iconName: 'Activity'
  }
];

export const COMPARISON_MATRIX: ComparisonItem[] = [
  {
    feature: 'Privacy Preservation',
    wifiCsi: '100% Anonymized RF Signals (Zero Optics)',
    camera: 'High Risk (Video/Image Footage Stored)',
    radar: 'Medium Risk (High-Res Point Clouds)',
    csiAdvantage: true
  },
  {
    feature: 'Line of Sight Requirement',
    wifiCsi: 'Non-Line-of-Sight (Penetrates Walls & Doors)',
    camera: 'Strict Line-of-Sight Only',
    radar: 'Limited Wall Penetration',
    csiAdvantage: true
  },
  {
    feature: 'Hardware Installation',
    wifiCsi: 'Zero Extra Hardware (Uses Existing Wi-Fi Access Points)',
    camera: 'Expensive IP Cameras & Wiring',
    radar: 'Dedicated mmWave Radar Modules',
    csiAdvantage: true
  },
  {
    feature: 'Night & Dark Operation',
    wifiCsi: 'Flawless 24/7 (Immune to Darkness, Smoke, & Fog)',
    camera: 'Requires IR Illumination or Fails',
    radar: 'Good in Dark, Poor in Heavy Interference',
    csiAdvantage: true
  },
  {
    feature: 'Vital Sign Monitoring',
    wifiCsi: 'Sub-mm Chest Displacement (Respiration Sensing)',
    camera: 'Thermal/RGB Approximation Only',
    radar: 'Requires Fixed Micro-Positioning',
    csiAdvantage: true
  },
  {
    feature: 'Blind Spots & FOV',
    wifiCsi: '360° Omnidirectional Volumetric Coverage',
    camera: 'Limited Cone Angle (Narrow FOV)',
    radar: 'Directional Beam Width',
    csiAdvantage: true
  }
];

export const FEATURES_LIST: FeatureItem[] = [
  {
    id: 'csi-neural',
    title: 'CSI Signal Perturbation AI',
    description: 'Translates high-dimensional WiFi subcarrier amplitude and phase shifts into real-time spatial human 3D pose vectors.',
    iconName: 'Radio',
    category: 'AI',
    highlights: ['Phase calibration algorithms', 'Multi-path fading cancellation', 'Transformer temporal tracking'],
    metrics: '<12ms Latency'
  },
  {
    id: 'privacy-core',
    title: 'Zero-Optics Privacy Shield',
    description: 'Operates entirely without optical lenses, microphones, or visual captures. Fully compliant with HIPAA, GDPR, and CCPA.',
    iconName: 'Shield',
    category: 'Privacy',
    highlights: ['Zero visual footprint', 'On-device edge inference', 'Anonymized spatial telemetry'],
    metrics: '100% Compliant'
  },
  {
    id: 'wall-pen',
    title: 'NLoS Wall Penetration',
    description: 'Detects presence, breathing, and motion through drywalls, glass, timber, and concrete partitions without physical line of sight.',
    iconName: 'Layers',
    category: 'Hardware',
    highlights: ['360° volumetric sensing', 'Multi-room RF propagation', 'Zero blind spots'],
    metrics: 'Up to 3 Walls'
  },
  {
    id: 'vital-sensing',
    title: 'Micro-Motion & Vital Signs',
    description: 'Senses minute chest movements for respiration rate estimation during sleep or immobility without requiring wearables.',
    iconName: 'HeartPulse',
    category: 'Accuracy',
    highlights: ['Sub-millimeter displacement', 'Respiration rate tracking', 'Instant fall detection alert'],
    metrics: '±1 BPM Accuracy'
  },
  {
    id: 'multi-person',
    title: 'Multi-Occupant Disambiguation',
    description: 'Separates and tracks up to 10 distinct individuals in the same physical space by decoding complex spatial reflection signatures.',
    iconName: 'Users',
    category: 'AI',
    highlights: ['Reflection separation', 'Trajectory tracking', 'Occupancy density map'],
    metrics: 'Up to 10 Persons'
  },
  {
    id: 'mesh-integration',
    title: 'Universal Mesh Router SDK',
    description: 'Embeds seamlessly onto commercial WiFi 6/6E/7 access points from Cisco, Asus, Ubiquiti, Netgear, and TP-Link via lightweight kernel driver.',
    iconName: 'Cpu',
    category: 'Hardware',
    highlights: ['IEEE 802.11bf compatible', 'Low memory footprint (<15MB)', 'Zero latency impact on internet traffic'],
    metrics: 'Plug & Play'
  }
];

export const USE_CASES: UseCaseItem[] = [
  {
    id: 'smart-home',
    title: 'Smart Home Automation',
    category: 'Consumer Electronics',
    description: 'Seamless lighting, HVAC, and energy orchestration that turns on lights instantly when you enter a room without camera surveillance.',
    iconName: 'Home',
    stats: '42% Energy Savings',
    benefits: ['Zero privacy intrusion in bedrooms', 'Automated HVAC zone control', 'Instant entry/exit triggers'],
    imagePrompt: 'Futuristic ambient luxury apartment with glowing soft cyan wifi wave nodes in room corners',
    gradient: 'from-blue-600/20 to-cyan-500/20'
  },
  {
    id: 'healthcare',
    title: 'Elderly Care & Fall Detection',
    category: 'Healthcare & Assisted Living',
    description: 'Instant contactless fall detection and nighttime vital sign monitoring in senior living facilities and private residences.',
    iconName: 'Activity',
    stats: '< 1.5s Emergency Alert',
    benefits: ['Non-wearable 24/7 guardian', 'Dignity-preserving bathroom safety', 'Sleep apnea & respiration telemetry'],
    imagePrompt: 'Modern serene eldercare bedroom with holographic WiFi CSI signal wave overlaying bed',
    gradient: 'from-cyan-500/20 to-emerald-500/20'
  },
  {
    id: 'security',
    title: 'Perimeter & Indoor Security',
    category: 'Defense & Enterprise',
    description: 'Detect intruders through walls and in complete darkness without revealing sensor locations or being blinded by smoke.',
    iconName: 'Lock',
    stats: '0% False Positive Rate',
    benefits: ['Wall-penetrating intruder warnings', 'Tamper-proof (hidden RF nodes)', 'Immune to flashlight or fog blinding'],
    imagePrompt: 'High tech dark building layout showing blue RF presence outline through concrete walls',
    gradient: 'from-purple-600/20 to-blue-600/20'
  },
  {
    id: 'office',
    title: 'Corporate Space Analytics',
    category: 'Enterprise Real Estate',
    description: 'Optimize desk utilization, conference room scheduling, and HVAC loads based on real-time anonymous headcount.',
    iconName: 'Building2',
    stats: '3.5x Space ROI',
    benefits: ['100% anonymous employee tracking', 'Dynamic room release upon vacate', 'HVAC load matching'],
    imagePrompt: 'Modern minimalist office space with subtle glowing grid overlay showing desk occupancy',
    gradient: 'from-indigo-600/20 to-blue-500/20'
  },
  {
    id: 'smart-buildings',
    title: 'Smart Hotels & Hospitality',
    category: 'Hospitality',
    description: 'Housekeeping status automation, guest presence detection for do-not-disturb compliance, and air quality optimization.',
    iconName: 'Hotel',
    stats: '98% Guest Satisfaction',
    benefits: ['Never knock on occupied rooms', 'Personalized climate settings upon arrival', 'Reduced vacant room energy drain'],
    imagePrompt: 'Luxury hotel room interior with soft glowing ambient light and subtle RF signal wave visualization',
    gradient: 'from-blue-500/20 to-purple-600/20'
  },
  {
    id: 'retail',
    title: 'Retail & Commercial Insights',
    category: 'Commercial Analytics',
    description: 'Track store traffic density, dwell times, and shopper movement vectors through anonymously mapped RF reflection paths.',
    iconName: 'ShoppingBag',
    stats: '+28% Conversion Insights',
    benefits: ['GDPR-compliant customer heatmaps', 'Dwell time optimization', 'Queue length alerts'],
    imagePrompt: 'High end retail store with subtle floor heatmap vectors generated by WiFi CSI',
    gradient: 'from-teal-500/20 to-blue-600/20'
  }
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'ieee-csi-2025',
    title: 'DeepCSI-Pose: 3D Multi-Person Human Pose Estimation via WiFi Channel State Information Subcarriers',
    authors: 'Dr. Elena Rostova, Prof. Marcus Vance, Dr. Jin-Woo Park (NEXSENSE Labs & Stanford AI)',
    conference: 'IEEE Transactions on Mobile Computing (TMC)',
    year: 2025,
    pdfSize: '3.4 MB',
    abstract: 'We present a deep learning architecture that translates 802.11ax/802.11bf CSI phase and amplitude matrix deformations into dense 3D human pose skeletons. Achieving 98.4% PCK@0.5 across non-line-of-sight environments.',
    citations: 184,
    tags: ['IEEE 802.11bf', 'Deep Learning', 'CSI Subcarriers', 'NLoS Sensing']
  },
  {
    id: 'vital-rf-2024',
    title: 'Sub-Millimeter Respiration & Cardiac Micro-Motion Recovery Using Commodity Wi-Fi 6 Routers',
    authors: 'Dr. Sarah Lin, Dr. Alex Thorne (NEXSENSE Research)',
    conference: 'ACM Sigcomm 2024',
    year: 2024,
    pdfSize: '2.8 MB',
    abstract: 'Demonstrating contactless respiration rate extraction with <0.3 BPM deviation across 8-meter distances using standard MIMO spatial multiplexing and phase unwrapping algorithms.',
    citations: 312,
    tags: ['Vital Signs', 'Phase Unwrapping', 'Wi-Fi 6 MIMO', 'Non-Contact Health']
  },
  {
    id: 'privacy-rf-2025',
    title: 'Quantifying Privacy Guarantees in RF-Based Human Sensing Systems vs Optical Computer Vision',
    authors: 'Dr. Robert Harrison, Dr. Priya Nair',
    conference: 'IEEE Symposium on Security and Privacy (S&P)',
    year: 2025,
    pdfSize: '4.1 MB',
    abstract: 'A mathematical proof demonstrating the information-theoretic privacy boundary of WiFi CSI data. Shows visual reconstruction impossible without optical hardware.',
    citations: 96,
    tags: ['Information Theory', 'Privacy Benchmark', 'Differential Privacy']
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Dr. Aris Thorne',
    role: 'Head of Smart Infrastructure',
    company: 'Metropolis Health Systems',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'NEXSENSE AI revolutionized our memory care facilities. We get instant fall alerts and respiration monitoring in patient bathrooms without compromising their personal dignity or installing single cameras.',
    rating: 5,
    verified: true
  },
  {
    id: '2',
    name: 'Marcus Vance',
    role: 'VP of Product Engineering',
    company: 'Aura Smart Home Ecosystems',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'By embedding the NEXSENSE CSi SDK into our WiFi 7 mesh nodes, our customers enjoy instant room-level presence detection. Lighting turns on before stepping into a room, through closed oak doors!',
    rating: 5,
    verified: true
  },
  {
    id: '3',
    name: 'Elena Kostic',
    role: 'Chief Security Officer',
    company: 'Vanguard Corporate Centers',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'Eliminating security cameras inside executive boardrooms while retaining 24/7 intrusion detection through walls was our highest priority. NEXSENSE AI delivered flawless accuracy.',
    rating: 5,
    verified: true
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does NEXSENSE AI detect humans using standard Wi-Fi signals?',
    answer: 'When a human body moves or stands inside a WiFi field, water molecules in body tissues disrupt radio frequency (RF) waves. WiFi Channel State Information (CSI) measures the precise amplitude and phase shift across 256 subcarrier channels. Our neural models analyze these micro-fluctuations to identify human presence, pose, motion, and breathing.',
    category: 'Technology'
  },
  {
    id: 'faq-2',
    question: 'Is NEXSENSE AI truly 100% private and camera-free?',
    answer: 'Yes! NEXSENSE AI uses zero optical lenses, lasers, or visual sensors. It operates strictly on invisible radio frequency data. It is mathematically impossible to reconstruct a visual photograph or video recording from CSI RF signatures, ensuring complete compliance with HIPAA, GDPR, and strict privacy laws.',
    category: 'Privacy'
  },
  {
    id: 'faq-3',
    question: 'Do I need to buy special hardware or expensive sensors?',
    answer: 'No. NEXSENSE AI runs on off-the-shelf WiFi 5, WiFi 6, 6E, and WiFi 7 routers. Our software kernel plugs directly into standard router firmware or runs on an edge gateway connected to your network.',
    category: 'Deployment'
  },
  {
    id: 'faq-4',
    question: 'Can NEXSENSE AI detect human presence through walls?',
    answer: 'Yes! Wi-Fi radio waves naturally pass through drywalls, wood, glass, and concrete block walls. NEXSENSE AI utilizes non-line-of-sight (NLoS) multipath reflections to sense presence and movement inside adjacent rooms.',
    category: 'Technology'
  },
  {
    id: 'faq-5',
    question: 'Will NEXSENSE AI slow down my home or office Wi-Fi speed?',
    answer: 'Not at all. NEXSENSE AI uses standard beacon packets and empty CSI subcarrier sampling frames that account for less than 0.05% of available network bandwidth, leaving 99.95%+ bandwidth untouched for streaming and gaming.',
    category: 'General'
  },
  {
    id: 'faq-6',
    question: 'Can NEXSENSE AI distinguish between pets and humans?',
    answer: 'Yes. Our AI models filter out signals based on Doppler velocity profiles, body mass reflection signatures, and gait dynamics. Small animals like dogs or cats have distinct RF reflection footprints that are automatically recognized and filtered.',
    category: 'Technology'
  },
  {
    id: 'faq-7',
    question: 'How fast is the detection response time?',
    answer: 'NEXSENSE AI processes CSI subcarriers on edge computing chips with an average inference latency under 12 milliseconds, enabling instant light triggers, immediate fall alarms, and real-time motion tracking.',
    category: 'Deployment'
  }
];

export const DEMO_ROOMS: DemoRoom[] = [
  {
    id: 'living-room',
    name: 'Main Living Room',
    occupants: 2,
    activity: 'Walking',
    signalStrength: 94,
    vitals: { respirationRate: 16, heartRateApprox: 72 },
    coordinates: [{ x: 35, y: 40 }, { x: 65, y: 55 }],
    historyData: [40, 52, 68, 85, 92, 94, 91, 88, 93, 95]
  },
  {
    id: 'master-bedroom',
    name: 'Master Bedroom',
    occupants: 1,
    activity: 'Sleeping',
    signalStrength: 88,
    vitals: { respirationRate: 13, heartRateApprox: 61 },
    coordinates: [{ x: 50, y: 50 }],
    historyData: [30, 32, 31, 33, 32, 34, 32, 33, 32, 33]
  },
  {
    id: 'executive-office',
    name: 'Executive Office (Behind Wall)',
    occupants: 1,
    activity: 'Sitting',
    signalStrength: 82,
    vitals: { respirationRate: 15, heartRateApprox: 68 },
    coordinates: [{ x: 42, y: 38 }],
    historyData: [20, 25, 22, 28, 45, 60, 58, 62, 61, 63]
  },
  {
    id: 'bathroom-suite',
    name: 'Senior Bath Suite (Private)',
    occupants: 0,
    activity: 'Empty',
    signalStrength: 98,
    coordinates: [],
    historyData: [10, 10, 12, 10, 11, 10, 10, 10, 11, 10]
  }
];

export const TRUSTED_PARTNERS = [
  { name: 'Stanford Wireless Lab', label: 'Stanford' },
  { name: 'IEEE 802.11bf Alliance', label: 'IEEE Sensing' },
  { name: 'MIT CSAIL', label: 'MIT CSAIL' },
  { name: 'Intel Labs Sensing', label: 'Intel Labs' },
  { name: 'Qualcomm Wi-Fi 7', label: 'Qualcomm' },
  { name: 'Ubiquiti Networks', label: 'Ubiquiti' },
  { name: 'Cisco Systems', label: 'Cisco' }
];
