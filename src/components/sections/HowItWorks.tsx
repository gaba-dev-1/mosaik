import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '@/components/layout/Section';
import { fadeInUp, staggerChildren } from '@/utils/animations';
import { UseCase } from '@/types';
import { 
  DeveloperIcon, 
  DesignerIcon, 
  ResearcherIcon, 
  StreamerIcon,
  CheckmarkIcon,
  GridIcon,
  TabsIcon,
  LayoutIcon
} from '@/components/icons/IconSystem';

const useCases: UseCase[] = [
  {
    id: 'developers',
    title: 'Developers',
    description: 'Keep code, docs, and terminal together.',
    benefits: [
      'Editor, terminal, and docs in one workspace',
      'Switch between projects instantly',
      'Separate branches in different zones',
      'Never lose your place in complex codebases',
    ],
    icon: <DeveloperIcon className="w-8 h-8" />,
  },
  {
    id: 'designers',
    title: 'Designers',
    description: 'Design tools and references stay connected.',
    benefits: [
      'Figma + inspiration tabs in one zone',
      'Color palettes and assets organized',
      'Client projects completely separate',
      'Design system components accessible',
    ],
    icon: <DesignerIcon className="w-8 h-8" />,
  },
  {
    id: 'researchers',
    title: 'Researchers',
    description: 'Papers, data, and analysis in harmony.',
    benefits: [
      'Group papers by research topic',
      'Analysis tools and data stay connected',
      'Switch between studies effortlessly',
      'Track sources across multiple projects',
    ],
    icon: <ResearcherIcon className="w-8 h-8" />,
  },
  {
    id: 'streamers',
    title: 'Streamers',
    description: 'Live streaming setup organized and efficient.',
    benefits: [
      'OBS, chat, and stream alerts together',
      'Social media monitoring in one place',
      'Game capture and audio controls ready',
      'Switch between streaming setups easily',
    ],
    icon: <StreamerIcon className="w-8 h-8" />,
  },
];

const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(useCases[0].id);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const activeUseCase = useCases.find((uc) => uc.id === activeTab);

  return (
    <Section background="primary" id="how-it-works">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Different work, <span className="text-gradient">same solution</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Mosaïk organizes your scattered windows into logical groups. Here's how people use it.
          </p>
        </motion.div>

        {/* Core features */}
        <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-bg-surface rounded-xl border border-border-light">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent-teal/20 flex items-center justify-center">
              <GridIcon className="text-accent-teal" />
            </div>
            <h3 className="font-bold text-text-primary mb-2">Smart Zones</h3>
            <p className="text-text-secondary text-sm">Related apps grouped automatically by project or task context</p>
          </div>

          <div className="text-center p-6 bg-bg-surface rounded-xl border border-border-light">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent-primary/20 flex items-center justify-center">
              <TabsIcon className="text-accent-primary" />
            </div>
            <h3 className="font-bold text-text-primary mb-2">Universal Tabs</h3>
            <p className="text-text-secondary text-sm">Add tabs to any application, not just browsers</p>
          </div>

          <div className="text-center p-6 bg-bg-surface rounded-xl border border-border-light">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent-blue/20 flex items-center justify-center">
              <LayoutIcon className="text-accent-blue" />
            </div>
            <h3 className="font-bold text-text-primary mb-2">Saved Layouts</h3>
            <p className="text-text-secondary text-sm">Switch between complete project setups instantly</p>
          </div>
        </motion.div>

        {/* Use cases section */}
        <motion.div variants={fadeInUp} className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Works for different people</h3>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="bg-bg-surface rounded-xl border border-border-light">
                {useCases.map((useCase) => (
                  <button
                    key={useCase.id}
                    onClick={() => setActiveTab(useCase.id)}
                    className={`w-full px-4 py-4 text-left border-b border-border-light last:border-none flex items-center gap-3 transition-all ${
                      activeTab === useCase.id
                        ? "bg-[#3B82F6]/10 text-[#3B82F6]"
                        : "hover:bg-bg-elevated text-text-secondary"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${
                      activeTab === useCase.id 
                        ? "bg-[#3B82F6] text-text-inverse" 
                        : "bg-bg-elevated"
                    }`}>
                      {useCase.icon}
                    </div>
                    <span className="font-medium">{useCase.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:w-3/4">
              <AnimatePresence mode="wait">
                {activeUseCase && (
                  <motion.div
                    key={activeUseCase.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-bg-surface rounded-xl border border-border-light"
                  >
                    <div className="p-8">
                      <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-1/2">
                          <div className="p-3 inline-flex rounded-lg bg-[#3B82F6]/20 text-[#3B82F6] mb-4">
                            {activeUseCase.icon}
                          </div>
                          <h4 className="text-2xl font-bold mb-3">
                            {activeUseCase.title}
                          </h4>
                          <p className="text-text-secondary mb-6 text-lg">
                            {activeUseCase.description}
                          </p>
                          
                          <div className="space-y-3">
                            {activeUseCase.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-start">
                                <CheckmarkIcon className="text-[#3B82F6] mr-3 flex-shrink-0 mt-0.5" size={16} />
                                <span className="text-text-secondary text-sm">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="lg:w-1/2 bg-bg-primary rounded-lg p-4 border border-border-light">
                          <svg width="100%" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="400" height="300" fill="#0A0E1A"/>
                            
                            {activeUseCase.id === 'developers' && (
                              <>
                                <rect x="20" y="20" width="360" height="260" rx="12" fill="#111827" stroke="#3B82F6" strokeWidth="2"/>
                                <rect x="20" y="20" width="360" height="30" rx="12" fill="#3B82F6"/>
                                <text x="30" y="38" fontSize="12" fill="#F9FAFB" fontWeight="bold">Project Alpha - Development</text>
                                
                                <rect x="30" y="60" width="170" height="120" rx="8" fill="#0A0E1A" stroke="#14B8A6" strokeWidth="1"/>
                                <rect x="30" y="60" width="170" height="24" rx="8" fill="#14B8A6"/>
                                <text x="35" y="75" fontSize="10" fill="#0A0E1A" fontWeight="bold">main.tsx</text>
                                
                                <rect x="35" y="88" width="160" height="88" rx="4" fill="#1F2937"/>
                                {[0, 1, 2, 3, 4, 5].map((i) => (
                                  <g key={i}>
                                    <rect x="40" y={96 + i * 12} width={Math.max(60, 140 - Math.random() * 50)} height="2" rx="1" fill="#14B8A6" opacity={0.8}/>
                                    <rect x="50" y={98 + i * 12} width={Math.max(30, 80 - Math.random() * 30)} height="2" rx="1" fill="#8B5CF6" opacity={0.6}/>
                                  </g>
                                ))}
                                
                                <rect x="210" y="60" width="160" height="120" rx="8" fill="#0A0E1A" stroke="#F59E0B" strokeWidth="1"/>
                                <rect x="210" y="60" width="160" height="24" rx="8" fill="#F59E0B"/>
                                <text x="215" y="75" fontSize="10" fill="#0A0E1A" fontWeight="bold">Terminal</text>
                                
                                <rect x="215" y="88" width="150" height="88" rx="4" fill="#111827"/>
                                <text x="220" y="105" fontSize="8" fill="#14B8A6">$ npm run dev</text>
                                <text x="220" y="120" fontSize="8" fill="#F59E0B">✓ Ready on http://localhost:3000</text>
                                <text x="220" y="135" fontSize="8" fill="#3B82F6">✓ Compiled successfully</text>
                                <text x="220" y="150" fontSize="8" fill="#D1D5DB">Watching for changes...</text>
                                <rect x="220" y="155" width="8" height="12" rx="1" fill="#14B8A6">
                                  <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
                                </rect>
                                
                                <rect x="30" y="190" width="340" height="80" rx="8" fill="#0A0E1A" stroke="#8B5CF6" strokeWidth="1"/>
                                <rect x="30" y="190" width="340" height="24" rx="8" fill="#8B5CF6"/>
                                <text x="35" y="205" fontSize="10" fill="#F9FAFB" fontWeight="bold">React Documentation</text>
                                
                                <rect x="35" y="219" width="330" height="15" rx="3" fill="#1F2937"/>
                                {['Hooks', 'Components', 'API Reference', 'Examples'].map((tab, i) => (
                                  <g key={i}>
                                    <rect x={40 + i * 80} y="221" width="75" height="11" rx="2" fill={i === 0 ? "#8B5CF6" : "#374151"}/>
                                    <text x={45 + i * 80} y="229" fontSize="7" fill={i === 0 ? "#F9FAFB" : "#9CA3AF"}>{tab}</text>
                                  </g>
                                ))}
                                
                                <rect x="35" y="239" width="330" height="26" rx="4" fill="#1F2937"/>
                                {[0, 1].map((i) => (
                                  <rect key={i} x="45" y={245 + i * 8} width={250 - Math.random() * 80} height="2" rx="1" fill="#8B5CF6" opacity={0.7}/>
                                ))}
                              </>
                            )}
                            
                            {activeUseCase.id === 'designers' && (
                              <>
                                <rect x="20" y="20" width="360" height="260" rx="12" fill="#111827" stroke="#14B8A6" strokeWidth="2"/>
                                <rect x="20" y="20" width="360" height="30" rx="12" fill="#14B8A6"/>
                                <text x="30" y="38" fontSize="12" fill="#0A0E1A" fontWeight="bold">Brand System - Design Workspace</text>
                                
                                <rect x="30" y="60" width="200" height="140" rx="8" fill="#0A0E1A" stroke="#14B8A6" strokeWidth="1"/>
                                <rect x="30" y="60" width="200" height="24" rx="8" fill="#14B8A6"/>
                                <text x="35" y="75" fontSize="10" fill="#0A0E1A" fontWeight="bold">logo-system.fig</text>
                                
                                <rect x="35" y="88" width="190" height="108" rx="4" fill="#1F2937"/>
                                
                                <rect x="50" y="105" width="40" height="40" rx="6" fill="#8B5CF6" opacity="0.9"/>
                                <text x="58" y="127" fontSize="7" fill="#F9FAFB">LOGO</text>
                                
                                <rect x="100" y="105" width="40" height="40" rx="6" fill="#14B8A6" opacity="0.9"/>
                                <circle cx="120" cy="125" r="8" fill="#0A0E1A"/>
                                
                                <rect x="150" y="105" width="40" height="40" rx="6" fill="#10B981" opacity="0.9"/>
                                <rect x="162" y="117" width="16" height="16" rx="2" fill="#0A0E1A"/>
                                
                                <text x="50" y="165" fontSize="10" fill="#F9FAFB" fontWeight="bold">Inter Bold 24px</text>
                                <text x="50" y="178" fontSize="8" fill="#D1D5DB">Inter Regular 16px</text>
                                <text x="50" y="188" fontSize="6" fill="#9CA3AF">Inter Light 12px</text>
                                
                                <rect x="240" y="60" width="130" height="80" rx="8" fill="#0A0E1A" stroke="#F59E0B" strokeWidth="1"/>
                                <rect x="240" y="60" width="130" height="24" rx="8" fill="#F59E0B"/>
                                <text x="245" y="75" fontSize="10" fill="#0A0E1A" fontWeight="bold">Design System</text>
                                
                                <rect x="245" y="88" width="120" height="12" rx="3" fill="#1F2937"/>
                                <text x="250" y="97" fontSize="8" fill="#F59E0B">Components</text>
                                
                                {[0, 1, 2, 3, 4, 5].map((i) => (
                                  <rect key={i} x={250 + (i % 3) * 35} y={105 + Math.floor(i / 3) * 15} width="30" height="10" rx="2" fill="#F59E0B" opacity={0.7}/>
                                ))}
                                
                                <rect x="240" y="150" width="130" height="50" rx="8" fill="#0A0E1A" stroke="#3B82F6" strokeWidth="1"/>
                                <rect x="240" y="150" width="130" height="24" rx="8" fill="#3B82F6"/>
                                <text x="245" y="165" fontSize="10" fill="#F9FAFB" fontWeight="bold">Color Palette</text>
                                
                                {['#8B5CF6', '#F59E0B', '#EF4444'].map((color, i) => (
                                  <circle key={i} cx={255 + (i % 3) * 30} cy={185 + Math.floor(i / 3) * 15} r="7" fill={color}/>
                                ))}
                                
                                <rect x="30" y="210" width="340" height="60" rx="8" fill="#0A0E1A" stroke="#8B5CF6" strokeWidth="1"/>
                                <rect x="30" y="210" width="340" height="24" rx="8" fill="#8B5CF6"/>
                                <text x="35" y="225" fontSize="10" fill="#0A0E1A" fontWeight="bold">Dribbble • Behance • Design Inspiration</text>
                                
                                <rect x="35" y="239" width="330" height="15" rx="3" fill="#1F2937"/>
                                {['Inspiration', 'Brand Refs', 'Typography', 'Colors'].map((tab, i) => (
                                  <g key={i}>
                                    <rect x={40 + i * 80} y="241" width="75" height="11" rx="2" fill={i === 0 ? "#8B5CF6" : "#374151"}/>
                                    <text x={45 + i * 80} y="249" fontSize="6" fill={i === 0 ? "#F9FAFB" : "#9CA3AF"}>{tab}</text>
                                  </g>
                                ))}
                                
                                <rect x="35" y="259" width="330" height="6" rx="3" fill="#1F2937"/>
                                {[0, 1, 2, 3, 4].map((i) => (
                                  <rect key={i} x={45 + i * 65} y="261" width="60" height="2" rx="1" fill="#8B5CF6" opacity={0.6}/>
                                ))}
                              </>
                            )}
                            
                            {activeUseCase.id === 'researchers' && (
                              <>
                                <rect x="20" y="20" width="360" height="260" rx="12" fill="#111827" stroke="#3B82F6" strokeWidth="2"/>
                                <rect x="20" y="20" width="360" height="30" rx="12" fill="#3B82F6"/>
                                <text x="30" y="38" fontSize="12" fill="#F9FAFB" fontWeight="bold">Climate Impact Study - Research</text>
                                
                                <rect x="30" y="60" width="100" height="140" rx="8" fill="#0A0E1A" stroke="#3B82F6" strokeWidth="1"/>
                                <rect x="30" y="60" width="100" height="24" rx="8" fill="#3B82F6"/>
                                <text x="35" y="75" fontSize="9" fill="#F9FAFB" fontWeight="bold">Papers</text>
                                
                                {['IPCC-2023.pdf', 'Nature-Climate.pdf', 'Ocean-Temps.pdf', 'CO2-Analysis.pdf'].map((paper, i) => (
                                  <g key={i}>
                                    <rect x="35" y={88 + i * 28} width="90" height="22" rx="4" fill={i === 0 ? "#3B82F6" : "#374151"} opacity="0.9"/>
                                    <text x="40" y={100 + i * 28} fontSize="7" fill={i === 0 ? "#F9FAFB" : "#D1D5DB"}>{paper}</text>
                                    <text x="40" y={108 + i * 28} fontSize="6" fill={i === 0 ? "#E0E7FF" : "#9CA3AF"}>
                                      {['2023', '2022', '2023', '2022'][i]} • {['143p', '87p', '56p', '201p'][i]}
                                    </text>
                                  </g>
                                ))}
                                
                                <rect x="140" y="60" width="120" height="140" rx="8" fill="#0A0E1A" stroke="#14B8A6" strokeWidth="1"/>
                                <rect x="140" y="60" width="120" height="24" rx="8" fill="#14B8A6"/>
                                <text x="145" y="75" fontSize="9" fill="#0A0E1A" fontWeight="bold">Research Notes</text>
                                
                                <rect x="145" y="88" width="110" height="108" rx="4" fill="#1F2937"/>
                                <text x="150" y="105" fontSize="8" fill="#14B8A6" fontWeight="bold">Key Findings:</text>
                                
                                {[
                                  '• Temperature rise +1.2°C',
                                  '• Ocean pH decreased 0.1',
                                  '• Arctic ice -13%/decade',
                                  '• CO2 levels at 415ppm',
                                  '• Tipping point analysis',
                                  '• Regional variations'
                                ].map((note, i) => (
                                  <text key={i} x="150" y={120 + i * 12} fontSize="6" fill="#D1D5DB">{note}</text>
                                ))}
                                
                                <rect x="270" y="60" width="100" height="140" rx="8" fill="#0A0E1A" stroke="#8B5CF6" strokeWidth="1"/>
                                <rect x="270" y="60" width="100" height="24" rx="8" fill="#8B5CF6"/>
                                <text x="275" y="75" fontSize="9" fill="#F9FAFB" fontWeight="bold">Analysis</text>
                                
                                <rect x="275" y="88" width="90" height="60" rx="4" fill="#1F2937"/>
                                
                                <polyline 
                                  points="280,140 290,135 300,130 310,125 320,115 330,110 340,105 350,100" 
                                  stroke="#8B5CF6" 
                                  strokeWidth="2" 
                                  fill="none"
                                >
                                  <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="3s" repeatCount="indefinite"/>
                                </polyline>
                                
                                <text x="275" y="160" fontSize="7" fill="#8B5CF6">Temperature Trend</text>
                                <text x="275" y="170" fontSize="6" fill="#D1D5DB">1980-2023</text>
                                
                                <rect x="275" y="175" width="90" height="20" rx="4" fill="#374151"/>
                                <text x="280" y="185" fontSize="7" fill="#14B8A6">R² = 0.94</text>
                                <text x="280" y="192" fontSize="6" fill="#D1D5DB">High correlation</text>
                                
                                <rect x="30" y="210" width="340" height="60" rx="8" fill="#0A0E1A" stroke="#10B981" strokeWidth="1"/>
                                <rect x="30" y="210" width="340" height="24" rx="8" fill="#10B981"/>
                                <text x="35" y="225" fontSize="10" fill="#0A0E1A" fontWeight="bold">Nature • Science • JSTOR • ArXiv</text>
                                
                                <rect x="35" y="239" width="330" height="15" rx="3" fill="#1F2937"/>
                                {['Search', 'IPCC Reports', 'Climate Data', 'Peer Review'].map((tab, i) => (
                                  <g key={i}>
                                    <rect x={40 + i * 80} y="241" width="75" height="11" rx="2" fill={i === 0 ? "#10B981" : "#374151"}/>
                                    <text x={45 + i * 80} y="249" fontSize="6" fill={i === 0 ? "#F9FAFB" : "#9CA3AF"}>{tab}</text>
                                  </g>
                                ))}
                                
                                <rect x="35" y="259" width="330" height="6" rx="3" fill="#1F2937"/>
                                <rect x="45" y="261" width="280" height="2" rx="1" fill="#10B981" opacity="0.7"/>
                              </>
                            )}
                            
                            {activeUseCase.id === 'streamers' && (
                              <>
                                <rect x="20" y="20" width="360" height="260" rx="12" fill="#111827" stroke="#8B5CF6" strokeWidth="2"/>
                                <rect x="20" y="20" width="360" height="30" rx="12" fill="#8B5CF6"/>
                                <circle cx="35" cy="35" r="4" fill="#EF4444">
                                  <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
                                </circle>
                                <text x="45" y="38" fontSize="12" fill="#F9FAFB" fontWeight="bold">LIVE Stream - Gaming Setup</text>
                                
                                <rect x="30" y="60" width="160" height="110" rx="8" fill="#0A0E1A" stroke="#8B5CF6" strokeWidth="1"/>
                                <rect x="30" y="60" width="160" height="24" rx="8" fill="#8B5CF6"/>
                                <text x="35" y="75" fontSize="10" fill="#F9FAFB" fontWeight="bold">OBS Studio</text>
                                
                                <rect x="40" y="90" width="140" height="70" rx="4" fill="#1F2937"/>
                                
                                <rect x="45" y="95" width="80" height="45" rx="4" fill="#374151" stroke="#8B5CF6" strokeWidth="1"/>
                                <text x="70" y="118" fontSize="8" fill="#8B5CF6" fontWeight="bold">Game</text>
                                
                                <rect x="130" y="95" width="45" height="30" rx="4" fill="#374151" stroke="#14B8A6" strokeWidth="1"/>
                                <circle cx="152" cy="110" r="8" fill="#14B8A6" opacity="0.7"/>
                                <text x="140" y="135" fontSize="7" fill="#14B8A6">Webcam</text>
                                
                                <rect x="45" y="145" width="130" height="10" rx="2" fill="#1F2937"/>
                                <text x="50" y="153" fontSize="7" fill="#D1D5DB">🎙️ Mic</text>
                                <rect x="80" y="147" width="60" height="6" rx="3" fill="#374151"/>
                                <rect x="80" y="147" width="45" height="6" rx="3" fill="#14B8A6"/>
                                
                                <rect x="200" y="60" width="80" height="110" rx="8" fill="#0A0E1A" stroke="#3B82F6" strokeWidth="1"/>
                                <rect x="200" y="60" width="80" height="24" rx="8" fill="#3B82F6"/>
                                <text x="205" y="75" fontSize="10" fill="#0A0E1A" fontWeight="bold">Live Chat</text>
                                
                                <rect x="205" y="88" width="70" height="78" rx="4" fill="#1F2937"/>
                                {[
                                  'user1: GG! 🔥',
                                  'user2: epic combo',
                                  'user3: new follower!',
                                  'user4: what mouse?',
                                  'user5: sick play'
                                ].map((msg, i) => (
                                  <text key={i} x="210" y={100 + i * 12} fontSize="6" fill={['#14B8A6', '#3B82F6', '#F59E0B', '#10B981', '#8B5CF6'][i]}>
                                    {msg}
                                  </text>
                                ))}
                                
                                <rect x="290" y="60" width="80" height="110" rx="8" fill="#0A0E1A" stroke="#F59E0B" strokeWidth="1"/>
                                <rect x="290" y="60" width="80" height="24" rx="8" fill="#F59E0B"/>
                                <text x="295" y="75" fontSize="10" fill="#0A0E1A" fontWeight="bold">Stream Stats</text>
                                
                                <rect x="295" y="88" width="70" height="78" rx="4" fill="#1F2937"/>
                                
                                <text x="300" y="105" fontSize="9" fill="#14B8A6" fontWeight="bold">👥 1,247</text>
                                <text x="300" y="115" fontSize="7" fill="#9CA3AF">viewers</text>
                                
                                <text x="300" y="130" fontSize="9" fill="#8B5CF6" fontWeight="bold">❤️ +23</text>
                                <text x="300" y="140" fontSize="7" fill="#9CA3AF">followers</text>
                                
                                <text x="300" y="155" fontSize="9" fill="#F59E0B" fontWeight="bold">💰 $45</text>
                                <text x="300" y="165" fontSize="7" fill="#9CA3AF">donations</text>
                                
                                <rect x="30" y="180" width="340" height="90" rx="8" fill="#0A0E1A" stroke="#10B981" strokeWidth="1"/>
                                <rect x="30" y="180" width="340" height="24" rx="8" fill="#10B981"/>
                                <text x="35" y="195" fontSize="10" fill="#0A0E1A" fontWeight="bold">Multi-Platform Control</text>
                                
                                <rect x="35" y="209" width="330" height="56" rx="4" fill="#1F2937"/>
                                
                                <rect x="45" y="220" width="60" height="15" rx="4" fill="#9146FF" opacity="0.5"/>
                                <text x="55" y="229" fontSize="8" fill="#F9FAFB" fontWeight="bold">Twitch</text>
                                
                                <rect x="115" y="220" width="60" height="15" rx="4" fill="#EF4444" opacity="0.5"/>
                                <text x="120" y="229" fontSize="8" fill="#F9FAFB" fontWeight="bold">YouTube</text>
                                
                                <rect x="185" y="220" width="60" height="15" rx="4" fill="#1DA1F2" opacity="0.5"/>
                                <text x="195" y="229" fontSize="8" fill="#F9FAFB" fontWeight="bold">Twitter</text>
                                
                                <rect x="255" y="220" width="60" height="15" rx="4" fill="#25D366" opacity="0.5"/>
                                <text x="265" y="229" fontSize="8" fill="#F9FAFB" fontWeight="bold">Discord</text>
                                
                                <text x="45" y="255" fontSize="8" fill="#D1D5DB">🎬 Scenes • 🔔 Alerts • 📊 Analytics • ⚡ Stream Deck • 🎵 Audio • 🏆 Goals</text>
                              </>
                            )}
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="text-center">
          <Link href="/download" className="inline-flex items-center gap-2 text-cta-primary hover:text-cta-hover transition-colors font-medium">
            Try it yourself
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 6L20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default HowItWorks;
