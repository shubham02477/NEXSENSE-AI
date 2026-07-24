export interface NavigationItem {
  name: string;
  href: string;
  badge?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'Accuracy' | 'Privacy' | 'Hardware' | 'AI';
  highlights: string[];
  metrics: string;
}

export interface ComparisonItem {
  feature: string;
  wifiCsi: string;
  camera: string;
  radar: string;
  csiAdvantage: boolean;
}

export interface UseCaseItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  stats: string;
  benefits: string[];
  imagePrompt: string;
  gradient: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  conference: string;
  year: number;
  pdfSize: string;
  abstract: string;
  citations: number;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Technology' | 'Privacy' | 'Deployment';
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  decimals?: number;
  description: string;
  iconName: string;
}

export interface DemoRoom {
  id: string;
  name: string;
  occupants: number;
  activity: 'Walking' | 'Standing' | 'Sitting' | 'Sleeping' | 'Fall Detected' | 'Empty';
  signalStrength: number;
  vitals?: {
    respirationRate: number; // breaths per min
    heartRateApprox?: number;
  };
  coordinates: { x: number; y: number }[];
  historyData: number[];
}
