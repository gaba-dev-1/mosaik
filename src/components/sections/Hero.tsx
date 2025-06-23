import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import Button from '@/components/ui/Button';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, staggerChildren, easeTransition } from '@/utils/animations';
import { ArrowRightIcon } from '@/components/icons/IconSystem';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section
      background="hero"
      className="relative pt-32 pb-16 overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Enhanced diverse background with harmonious colors */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Primary purple gradient */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-purple-500/30 via-purple-600/20 to-transparent opacity-40 blur-3xl"></div>
        
        {/* Teal accent */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-teal-400/25 via-emerald-500/15 to-transparent opacity-30 blur-3xl"></div>
        
        {/* Blue harmony */}
        <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-gradient-radial from-blue-500/25 via-indigo-500/15 to-transparent opacity-25 blur-3xl"></div>
        
        {/* Amber warmth */}
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-gradient-radial from-amber-400/20 via-orange-500/10 to-transparent opacity-20 blur-3xl"></div>
        
        {/* Emerald touch */}
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-gradient-radial from-emerald-400/20 via-green-500/10 to-transparent opacity-20 blur-3xl"></div>
        
        {/* Floating particles with diverse colors */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          {Array.from({ length: 25 }).map((_, i) => {
            const colors = ['#8B5CF6', '#3B82F6', '#14B8A6', '#F59E0B', '#10B981'];
            const color = colors[i % colors.length];
            return (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  backgroundColor: color,
                  opacity: Math.random() * 0.6 + 0.4,
                  animation: `pulse ${Math.random() * 4 + 2}s ease-in-out infinite alternate`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              ></div>
            );
          })}
        </div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-teal-900/10 opacity-60"></div>
      </div>
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="w-full grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div variants={fadeInUp} transition={easeTransition}>
            <div className="mb-6 px-3 py-1.5 inline-flex items-center gap-1.5 bg-bg-elevated text-accent-primary rounded-full text-sm font-medium">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
              </span>
              Just launched: Mosaïk AI Prompt and Smart Layout
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Bring cohesion to your{' '}
              <span className="text-gradient">
                workspace
              </span>
            </h1>
            
            <p className="text-xl leading-relaxed text-text-secondary">
              Gather all your scattered tabs and windows in one cohesive environment, reducing the cognitive load & improving your focus.
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            transition={easeTransition}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              variant="primary" 
              size="lg" 
              href="/download" 
              animate={true}
              icon={<ArrowRightIcon className="w-5 h-5" />}
              iconPosition="right"
            >
              Download Mosaïk
            </Button>
            <Button variant="ghost" size="lg" href="#problem" animate={true}>
              Use Cases
            </Button>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            transition={easeTransition}
            className="flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((num) => (
                <div 
                  key={num} 
                  className="w-8 h-8 rounded-full border-2 border-bg-primary bg-bg-elevated"
                  style={{
                    backgroundImage: `url(https://randomuser.me/api/portraits/${Math.random() < 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 70) + 30}.jpg)`,
                    backgroundSize: 'cover',
                  }}
                ></div>
              ))}
            </div>
            <div className="text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">4.9/5</span> from over 2,000 reviews
            </div>
          </motion.div>
        </div>
        
        {/* Right Visual */}
        <motion.div
          variants={fadeInUp}
          transition={{ ...easeTransition, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="w-full max-w-[600px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border-light relative elevation-3">
            <div className="absolute inset-0 bg-gradient-to-b from-bg-surface/50 to-bg-primary/10 z-10 rounded-2xl"></div>
            
            {/* Enhanced Organized Workspace SVG */}
            <svg width="100%" height="100%" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect width="600" height="450" fill="#0A0E1A"/>
              
              <rect width="600" height="450" fill="url(#desktopGradient)"/>
              
              <defs>
                <linearGradient id="desktopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#111827"/>
                  <stop offset="50%" stopColor="#0A0E1A"/>
                  <stop offset="100%" stopColor="#1F2937"/>
                </linearGradient>
                
                <linearGradient id="workspaceGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3"/>
                  <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.1"/>
                </linearGradient>
                
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Ambient floating particles */}
              <g opacity="0.4">
                {Array.from({ length: 15 }).map((_, i) => {
                  const colors = ['#8B5CF6', '#3B82F6', '#14B8A6', '#F59E0B', '#10B981'];
                  const color = colors[i % colors.length];
                  return (
                    <circle
                      key={i}
                      cx={50 + (i * 35)}
                      cy={40 + (i % 3) * 100}
                      r="1.5"
                      fill={color}
                      opacity="0.7"
                    >
                      <animate 
                        attributeName="cy" 
                        values={`${40 + (i % 3) * 100};${25 + (i % 3) * 100};${40 + (i % 3) * 100}`} 
                        dur={`${3 + Math.random() * 2}s`} 
                        repeatCount="indefinite"
                      />
                      <animate 
                        attributeName="opacity" 
                        values="0.4;0.9;0.4" 
                        dur={`${2 + Math.random() * 1}s`} 
                        repeatCount="indefinite"
                      />
                    </circle>
                  );
                })}
              </g>
              
              {/* Main Workspace Container */}
              <g>
                <rect x="40" y="35" width="520" height="340" rx="16" fill="#1F2937" stroke="#8B5CF6" strokeWidth="2" filter="url(#glow)">
                  <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
                </rect>
                
                <rect x="40" y="35" width="520" height="35" rx="16" fill="url(#workspaceGlow)"/>
                <rect x="40" y="60" width="520" height="8" fill="#8B5CF6"/>
                
                <text x="55" y="55" fontSize="14" fill="#F9FAFB" fontWeight="bold">Development Grove</text>
                
                <circle cx="530" cy="52" r="5" fill="#EF4444"/>
                <circle cx="515" cy="52" r="5" fill="#F59E0B"/>
                <circle cx="500" cy="52" r="5" fill="#10B981"/>
                
                {/* Zone 1: Code Editor */}
                <g>
                  <rect x="55" y="80" width="240" height="150" rx="8" fill="#0A0E1A" stroke="#14B8A6" strokeWidth="1.5">
                    <animate attributeName="stroke-opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="55" y="80" width="240" height="25" fill="#14B8A6"/>
                  <text x="65" y="95" fontSize="11" fill="#0A0E1A" fontWeight="bold">main.tsx • components.tsx</text>
                  
                  <rect x="65" y="115" width="220" height="15" fill="#1F2937"/>
                  <rect x="70" y="117" width="60" height="11" rx="2" fill="#14B8A6"/>
                  <rect x="135" y="117" width="60" height="11" rx="2" fill="#374151"/>
                  <text x="80" y="125" fontSize="7" fill="#0A0E1A" fontWeight="bold">main.tsx</text>
                  <text x="145" y="125" fontSize="7" fill="#D1D5DB">components</text>
                  
                  <rect x="65" y="135" width="220" height="85" fill="#1F2937"/>
                  
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <g key={i}>
                      <rect 
                        x="75" 
                        y={145 + i * 12} 
                        width="0" 
                        height="3" 
                        fill="#14B8A6" 
                        opacity="0.9"
                      >
                        <animate 
                          attributeName="width" 
                          values={`0;${Math.max(60, 180 - Math.random() * 50)}`} 
                          dur={`${1.5 + i * 0.2}s`} 
                          begin={`${i * 0.3}s`}
                          fill="freeze"
                        />
                      </rect>
                      
                      <rect 
                        x="85" 
                        y={147 + i * 12} 
                        width="0" 
                        height="2" 
                        fill="#8B5CF6" 
                        opacity="0.7"
                      >
                        <animate 
                          attributeName="width" 
                          values={`0;${Math.max(30, 100 - Math.random() * 30)}`} 
                          dur={`${1.8 + i * 0.2}s`} 
                          begin={`${i * 0.3 + 0.5}s`}
                          fill="freeze"
                        />
                      </rect>
                    </g>
                  ))}
                  
                  <rect x="170" y="210" width="2" height="8" fill="#14B8A6">
                    <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
                  </rect>
                </g>
                
                {/* Zone 2: Terminal */}
                <g>
                  <rect x="310" y="80" width="240" height="150" rx="8" fill="#0A0E1A" stroke="#F59E0B" strokeWidth="1.5">
                    <animate attributeName="stroke-opacity" values="0.7;1;0.7" dur="5s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="310" y="80" width="240" height="25" fill="#F59E0B"/>
                  <text x="320" y="95" fontSize="11" fill="#0A0E1A" fontWeight="bold">Terminal • Dev Server</text>
                  
                  <rect x="320" y="115" width="220" height="105" fill="#111827"/>
                  
                  <text x="330" y="135" fontSize="9" fill="#14B8A6" opacity="0">
                    $ npm run dev
                    <animate attributeName="opacity" values="0;1" dur="0.5s" begin="1s" fill="freeze"/>
                  </text>
                  
                  <text x="330" y="150" fontSize="9" fill="#F59E0B" opacity="0">
                    ✓ Compiled successfully
                    <animate attributeName="opacity" values="0;1" dur="0.5s" begin="2s" fill="freeze"/>
                  </text>
                  
                  <text x="330" y="165" fontSize="9" fill="#3B82F6" opacity="0">
                    Ready on localhost:3000
                    <animate attributeName="opacity" values="0;1" dur="0.5s" begin="3s" fill="freeze"/>
                  </text>
                  
                  <text x="330" y="180" fontSize="9" fill="#14B8A6" opacity="0">
                    ✓ Ready in 847ms
                    <animate attributeName="opacity" values="0;1" dur="0.5s" begin="4s" fill="freeze"/>
                  </text>
                  
                  <text x="330" y="195" fontSize="9" fill="#D1D5DB" opacity="0">
                    Watching for changes...
                    <animate attributeName="opacity" values="0;1" dur="0.5s" begin="5s" fill="freeze"/>
                  </text>
                  
                  <rect x="330" y="205" width="10" height="12" fill="#14B8A6" opacity="0">
                    <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="5.5s" repeatCount="indefinite"/>
                  </rect>
                </g>
                
                {/* Zone 3: Documentation */}
                <g>
                  <rect x="55" y="245" width="150" height="110" rx="8" fill="#0A0E1A" stroke="#8B5CF6" strokeWidth="1.5">
                    <animate attributeName="stroke-opacity" values="0.7;1;0.7" dur="6s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="55" y="245" width="150" height="25" fill="#8B5CF6"/>
                  <text x="65" y="260" fontSize="11" fill="#F9FAFB" fontWeight="bold">React Docs</text>
                  
                  <rect x="65" y="275" width="130" height="75" fill="#1F2937"/>
                  
                  {[0, 1, 2, 3].map((i) => (
                    <rect 
                      key={i}
                      x="75" 
                      y={290 + i * 15} 
                      width="0" 
                      height="2" 
                      fill="#8B5CF6" 
                      opacity="0.8"
                    >
                      <animate 
                        attributeName="width" 
                        values={`0;${110 - Math.random() * 30}`} 
                        dur={`${0.8 + i * 0.2}s`} 
                        begin={`${2 + i * 0.3}s`}
                        fill="freeze"
                      />
                    </rect>
                  ))}
                </g>
                
                {/* Zone 4: Communication */}
                <g>
                  <rect x="220" y="245" width="150" height="110" rx="8" fill="#0A0E1A" stroke="#3B82F6" strokeWidth="1.5">
                    <animate attributeName="stroke-opacity" values="0.7;1;0.7" dur="7s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="220" y="245" width="150" height="25" fill="#3B82F6"/>
                  <text x="230" y="260" fontSize="11" fill="#F9FAFB" fontWeight="bold">Team Chat</text>
                  
                  <rect x="230" y="275" width="130" height="75" fill="#1F2937"/>
                  
                  {[
                    { user: 'Alex', msg: 'Review ready 👍', color: '#14B8A6' },
                    { user: 'Sam', msg: 'Testing on staging', color: '#3B82F6' },
                    { user: 'Taylor', msg: 'Deploy ready', color: '#8B5CF6' }
                  ].map((chat, i) => (
                    <g key={i} opacity="0">
                      <circle cx="240" cy={290 + i * 18} r="3" fill={chat.color}/>
                      <text x="248" y={293 + i * 18} fontSize="8" fill={chat.color} fontWeight="bold">
                        {chat.user}
                      </text>
                      <text x="248" y={303 + i * 18} fontSize="7" fill="#D1D5DB">
                        {chat.msg}
                      </text>
                      <animate attributeName="opacity" values="0;1" dur="0.5s" begin={`${3 + i * 0.8}s`} fill="freeze"/>
                    </g>
                  ))}
                </g>
                
                {/* Zone 5: Browser */}
                <g>
                  <rect x="385" y="245" width="155" height="110" rx="8" fill="#0A0E1A" stroke="#10B981" strokeWidth="1.5">
                    <animate attributeName="stroke-opacity" values="0.7;1;0.7" dur="8s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="385" y="245" width="155" height="25" fill="#10B981"/>
                  <text x="395" y="260" fontSize="11" fill="#0A0E1A" fontWeight="bold">References</text>
                  
                  <rect x="395" y="275" width="135" height="75" fill="#1F2937"/>
                  
                  {[
                    'MDN Web Docs',
                    'Stack Overflow',
                    'GitHub Issues',
                    'Best Practices'
                  ].map((link, i) => (
                    <g key={i} opacity="0">
                      <text 
                        x="405" 
                        y={295 + i * 12} 
                        fontSize="8" 
                        fill="#10B981" 
                        opacity="0.8"
                      >
                        {link}
                      </text>
                      <animate attributeName="opacity" values="0;1" dur="0.5s" begin={`${4 + i * 0.4}s`} fill="freeze"/>
                    </g>
                  ))}
                </g>
              </g>
              
              {/* Workspace Tabs */}
              <g>
                <rect x="40" y="385" width="520" height="35" rx="8" fill="#374151" stroke="#8B5CF6" strokeWidth="1"/>
                
                <rect x="55" y="395" width="90" height="15" rx="3" fill="url(#workspaceGlow)">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite"/>
                </rect>
                <text x="70" y="405" fontSize="9" fill="#F9FAFB" fontWeight="bold">Development</text>
                
                {[
                  { name: 'Design', color: '#14B8A6' },
                  { name: 'Research', color: '#F59E0B' },
                  { name: 'Testing', color: '#10B981' }
                ].map((workspace, i) => (
                  <g key={i}>
                    <rect 
                      x={155 + i * 100} 
                      y="395" 
                      width="80" 
                      height="15" 
                      rx="3" 
                      fill="#374151"
                      opacity="0.8"
                    >
                      <animate 
                        attributeName="opacity" 
                        values="0.6;0.9;0.6" 
                        dur={`${3 + i}s`} 
                        repeatCount="indefinite"
                      />
                    </rect>
                    <circle 
                      cx={165 + i * 100} 
                      cy="402" 
                      r="2" 
                      fill={workspace.color}
                      opacity="0.8"
                    />
                    <text 
                      x={175 + i * 100} 
                      y="405" 
                      fontSize="9" 
                      fill="#D1D5DB"
                    >
                      {workspace.name}
                    </text>
                  </g>
                ))}
                
                <rect x="475" y="395" width="40" height="15" rx="3" fill="#374151" opacity="0.7"/>
                <text x="485" y="405" fontSize="9" fill="#9CA3AF">+ New</text>
              </g>
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Hero;
