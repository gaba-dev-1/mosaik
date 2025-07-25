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
      {/* Enhanced animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Main gradient orbs with improved movement */}
        <motion.div 
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-purple-500/20 via-purple-600/10 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-teal-400/20 via-emerald-500/10 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.4, 0.25],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-gradient-radial from-blue-500/18 via-indigo-500/8 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-gradient-radial from-amber-400/15 via-orange-500/8 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 60, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              style={{
                top: `${10 + (i * 10)}%`,
                left: `${5 + (i * 11)}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, 50, 0],
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5
              }}
            />
          ))}
        </div>
        
        {/* Orbiting elements */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 h-2"
              style={{
                background: ['#8B5CF6', '#3B82F6', '#14B8A6'][i],
                borderRadius: '50%',
                opacity: 0.6,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20 + i * 10,
                repeat: Infinity,
                ease: "linear",
              }}
              transformTemplate={({ rotate }) => 
                `rotate(${rotate}) translateX(${80 + i * 40}px) rotate(-${rotate})`
              }
            />
          ))}
        </div>
        
        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-teal-900/5 opacity-80"></div>
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
            <motion.div 
              className="mb-6 px-3 py-1.5 inline-flex items-center gap-1.5 bg-bg-elevated text-accent-primary rounded-full text-sm font-medium"
            >
              <motion.span 
                className="flex h-2 w-2 relative"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
              </motion.span>
              Just launched: Mosaïk AI Prompt and Smart Layout
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Bring cohesion to your{' '}
              <motion.span 
                className="text-gradient"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                workspace
              </motion.span>
            </h1>
            
            <p className="text-xl leading-relaxed text-text-secondary">
              Gather all your scattered tabs and windows in one cohesive environment to improve your productivity.
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
                <motion.div 
                  key={num} 
                  className="w-8 h-8 rounded-full border-2 border-bg-primary bg-bg-elevated"
                  style={{
                    backgroundImage: `url(https://randomuser.me/api/portraits/${Math.random() < 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 70) + 30}.jpg)`,
                    backgroundSize: 'cover',
                  }}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                ></motion.div>
              ))}
            </div>
            <div className="text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">4.9/5</span> from over 2,000 reviews
            </div>
          </motion.div>
        </div>
        
        {/* Right Visual - Enhanced with better spatialization */}
        <motion.div
          variants={fadeInUp}
          transition={{ ...easeTransition, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <motion.div
            className="w-full max-w-[600px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border-light relative elevation-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-bg-surface/50 to-bg-primary/10 z-10 rounded-2xl"></div>
            
            {/* Enhanced Organized Workspace SVG with better spatial organization */}
            <svg width="100%" height="100%" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Background */}
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
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Floating particles - better distributed */}
              <g opacity="0.3">
                {Array.from({ length: 8 }).map((_, i) => {
                  const x = 50 + (i % 4) * 130;
                  const y = 40 + Math.floor(i / 4) * 180;
                  const colors = ['#8B5CF6', '#3B82F6', '#14B8A6', '#F59E0B'];
                  const color = colors[i % colors.length];
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="2"
                      fill={color}
                      opacity="0.6"
                    >
                      <animateMotion 
                        dur={`${10 + Math.random() * 5}s`} 
                        repeatCount="indefinite"
                        path={`M 0,0 Q ${20 + Math.random() * 10},${-20 - Math.random() * 10} 0,${-5 - Math.random() * 5} T 0,0`}
                      />
                      <animate 
                        attributeName="opacity" 
                        values="0.3;0.8;0.3" 
                        dur={`${3 + Math.random() * 2}s`} 
                        repeatCount="indefinite"
                      />
                    </circle>
                  );
                })}
              </g>
              
              {/* Main Workspace Container */}
              <g>
                {/* Window frame */}
                <rect x="30" y="30" width="540" height="360" rx="12" fill="#1F2937" stroke="#8B5CF6" strokeWidth="1.5" filter="url(#glow)">
                  <animate attributeName="stroke-opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite"/>
                </rect>
                
                {/* Window header */}
                <rect x="30" y="30" width="540" height="32" rx="12" fill="url(#workspaceGlow)"/>
                <rect x="30" y="54" width="540" height="8" rx="0" fill="#1F2937"/>
                
                {/* Window controls */}
                <circle cx="540" cy="46" r="4" fill="#EF4444"/>
                <circle cx="524" cy="46" r="4" fill="#F59E0B"/>
                <circle cx="508" cy="46" r="4" fill="#10B981"/>
                
                {/* Title */}
                <text x="50" y="48" fontSize="12" fill="#F9FAFB" fontWeight="600">Development Workspace</text>
                
                {/* Grid Layout for Zones */}
                {/* Define consistent spacing */}
                {(() => {
                  const gridGap = 12;
                  const contentStartX = 45;
                  const contentStartY = 70;
                  const zoneWidth = 250;
                  const zoneHeightLarge = 155;
                  const zoneHeightSmall = 125;
                  
                  return (
                    <>
                      {/* Zone 1: Code Editor - Top Left */}
                      <g>
                        <rect x={contentStartX} y={contentStartY} width={zoneWidth} height={zoneHeightLarge} rx="8" fill="#0A0E1A" stroke="#14B8A6" strokeWidth="1">
                          <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="5s" repeatCount="indefinite"/>
                        </rect>
                        <rect x={contentStartX} y={contentStartY} width={zoneWidth} height="24" rx="8" fill="#14B8A6"/>
                        <text x={contentStartX + 10} y={contentStartY + 16} fontSize="11" fill="#0A0E1A" fontWeight="600">main.tsx • components.tsx</text>
                        
                        {/* Tab bar */}
                        <rect x={contentStartX + 6} y={contentStartY + 30} width={zoneWidth - 12} height="18" rx="4" fill="#1F2937"/>
                        <rect x={contentStartX + 10} y={contentStartY + 33} width="60" height="12" rx="3" fill="#14B8A6"/>
                        <rect x={contentStartX + 74} y={contentStartY + 33} width="60" height="12" rx="3" fill="#374151"/>
                        <text x={contentStartX + 20} y={contentStartY + 41} fontSize="8" fill="#0A0E1A" fontWeight="600">main.tsx</text>
                        <text x={contentStartX + 84} y={contentStartY + 41} fontSize="8" fill="#D1D5DB">components</text>
                        
                        {/* Code content */}
                        <rect x={contentStartX + 6} y={contentStartY + 52} width={zoneWidth - 12} height="97" rx="4" fill="#1F2937"/>
                        
                        {/* Code lines with better spacing */}
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                          <g key={i}>
                            <rect 
                              x={contentStartX + 16} 
                              y={contentStartY + 62 + i * 14} 
                              width="0" 
                              height="4" 
                              rx="2"
                              fill="#14B8A6" 
                              opacity="0.8"
                            >
                              <animate 
                                attributeName="width" 
                                values={`0;${Math.max(80, 180 - Math.random() * 60)}`} 
                                dur={`${1.5 + i * 0.2}s`} 
                                begin={`${i * 0.3}s`}
                                fill="freeze"
                              />
                            </rect>
                          </g>
                        ))}
                      </g>
                      
                      {/* Zone 2: Terminal - Top Right */}
                      <g>
                        <rect x={contentStartX + zoneWidth + gridGap} y={contentStartY} width={zoneWidth} height={zoneHeightLarge} rx="8" fill="#0A0E1A" stroke="#F59E0B" strokeWidth="1">
                          <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="6s" repeatCount="indefinite"/>
                        </rect>
                        <rect x={contentStartX + zoneWidth + gridGap} y={contentStartY} width={zoneWidth} height="24" rx="8" fill="#F59E0B"/>
                        <text x={contentStartX + zoneWidth + gridGap + 10} y={contentStartY + 16} fontSize="11" fill="#0A0E1A" fontWeight="600">Terminal • Dev Server</text>
                        
                        <rect x={contentStartX + zoneWidth + gridGap + 6} y={contentStartY + 30} width={zoneWidth - 12} height="119" rx="4" fill="#111827"/>
                        
                        {/* Terminal output with better spacing */}
                        <text x={contentStartX + zoneWidth + gridGap + 16} y={contentStartY + 48} fontSize="9" fill="#14B8A6" opacity="0">
                          $ npm run dev
                          <animate attributeName="opacity" values="0;1" dur="0.5s" begin="1s" fill="freeze"/>
                        </text>
                        
                        <text x={contentStartX + zoneWidth + gridGap + 16} y={contentStartY + 65} fontSize="9" fill="#F59E0B" opacity="0">
                          ✓ Compiled successfully
                          <animate attributeName="opacity" values="0;1" dur="0.5s" begin="2s" fill="freeze"/>
                        </text>
                        
                        <text x={contentStartX + zoneWidth + gridGap + 16} y={contentStartY + 82} fontSize="9" fill="#3B82F6" opacity="0">
                          Ready on localhost:3000
                          <animate attributeName="opacity" values="0;1" dur="0.5s" begin="3s" fill="freeze"/>
                        </text>
                        
                        <text x={contentStartX + zoneWidth + gridGap + 16} y={contentStartY + 99} fontSize="9" fill="#14B8A6" opacity="0">
                          ✓ Ready in 847ms
                          <animate attributeName="opacity" values="0;1" dur="0.5s" begin="4s" fill="freeze"/>
                        </text>
                        
                        <text x={contentStartX + zoneWidth + gridGap + 16} y={contentStartY + 116} fontSize="9" fill="#D1D5DB" opacity="0">
                          Watching for changes...
                          <animate attributeName="opacity" values="0;1" dur="0.5s" begin="5s" fill="freeze"/>
                        </text>
                        
                        <rect x={contentStartX + zoneWidth + gridGap + 16} y={contentStartY + 124} width="10" height="12" rx="2" fill="#14B8A6" opacity="0">
                          <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="5.5s" repeatCount="indefinite"/>
                        </rect>
                      </g>
                      
                      {/* Zone 3: Documentation - Bottom Left */}
                      <g>
                        <rect x={contentStartX} y={contentStartY + zoneHeightLarge + gridGap} width="160" height={zoneHeightSmall} rx="8" fill="#0A0E1A" stroke="#8B5CF6" strokeWidth="1">
                          <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="7s" repeatCount="indefinite"/>
                        </rect>
                        <rect x={contentStartX} y={contentStartY + zoneHeightLarge + gridGap} width="160" height="24" rx="8" fill="#8B5CF6"/>
                        <text x={contentStartX + 10} y={contentStartY + zoneHeightLarge + gridGap + 16} fontSize="11" fill="#F9FAFB" fontWeight="600">React Docs</text>
                        
                        <rect x={contentStartX + 6} y={contentStartY + zoneHeightLarge + gridGap + 30} width="148" height="89" rx="4" fill="#1F2937"/>
                        
                        {/* Doc content with better spacing */}
                        {[0, 1, 2, 3, 4].map((i) => (
                          <rect 
                            key={i}
                            x={contentStartX + 16} 
                            y={contentStartY + zoneHeightLarge + gridGap + 42 + i * 14} 
                            width="0" 
                            height="3" 
                            rx="1.5"
                            fill="#8B5CF6" 
                            opacity="0.7"
                          >
                            <animate 
                              attributeName="width" 
                              values={`0;${120 - Math.random() * 40}`} 
                              dur={`${0.8 + i * 0.2}s`} 
                              begin={`${2 + i * 0.3}s`}
                              fill="freeze"
                            />
                          </rect>
                        ))}
                      </g>
                      
                      {/* Zone 4: Communication - Bottom Center */}
                      <g>
                        <rect x={contentStartX + 160 + gridGap} y={contentStartY + zoneHeightLarge + gridGap} width="165" height={zoneHeightSmall} rx="8" fill="#0A0E1A" stroke="#3B82F6" strokeWidth="1">
                          <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="8s" repeatCount="indefinite"/>
                        </rect>
                        <rect x={contentStartX + 160 + gridGap} y={contentStartY + zoneHeightLarge + gridGap} width="165" height="24" rx="8" fill="#3B82F6"/>
                        <text x={contentStartX + 160 + gridGap + 10} y={contentStartY + zoneHeightLarge + gridGap + 16} fontSize="11" fill="#F9FAFB" fontWeight="600">Team Chat</text>
                        
                        <rect x={contentStartX + 160 + gridGap + 6} y={contentStartY + zoneHeightLarge + gridGap + 30} width="153" height="89" rx="4" fill="#1F2937"/>
                        
                        {/* Chat messages with better spacing */}
                        {[
                          { user: 'Alex', msg: 'Review ready 👍', color: '#14B8A6' },
                          { user: 'Sam', msg: 'Testing on staging', color: '#3B82F6' },
                          { user: 'Taylor', msg: 'Deploy ready', color: '#8B5CF6' }
                        ].map((chat, i) => (
                          <g key={i} opacity="0">
                            <circle cx={contentStartX + 160 + gridGap + 16} cy={contentStartY + zoneHeightLarge + gridGap + 48 + i * 24} r="4" fill={chat.color}/>
                            <text x={contentStartX + 160 + gridGap + 26} y={contentStartY + zoneHeightLarge + gridGap + 51 + i * 24} fontSize="9" fill={chat.color} fontWeight="600">
                              {chat.user}
                            </text>
                            <text x={contentStartX + 160 + gridGap + 26} y={contentStartY + zoneHeightLarge + gridGap + 62 + i * 24} fontSize="8" fill="#D1D5DB">
                              {chat.msg}
                            </text>
                            <animate attributeName="opacity" values="0;1" dur="0.5s" begin={`${3 + i * 0.8}s`} fill="freeze"/>
                          </g>
                        ))}
                      </g>
                      
                      {/* Zone 5: Browser - Bottom Right */}
                      <g>
                        <rect x={contentStartX + 325 + gridGap * 2} y={contentStartY + zoneHeightLarge + gridGap} width="165" height={zoneHeightSmall} rx="8" fill="#0A0E1A" stroke="#10B981" strokeWidth="1">
                          <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="9s" repeatCount="indefinite"/>
                        </rect>
                        <rect x={contentStartX + 325 + gridGap * 2} y={contentStartY + zoneHeightLarge + gridGap} width="165" height="24" rx="8" fill="#10B981"/>
                        <text x={contentStartX + 325 + gridGap * 2 + 10} y={contentStartY + zoneHeightLarge + gridGap + 16} fontSize="11" fill="#0A0E1A" fontWeight="600">References</text>
                        
                        <rect x={contentStartX + 325 + gridGap * 2 + 6} y={contentStartY + zoneHeightLarge + gridGap + 30} width="153" height="89" rx="4" fill="#1F2937"/>
                        
                        {/* Reference links with better spacing */}
                        {[
                          'MDN Web Docs',
                          'Stack Overflow',
                          'GitHub Issues',
                          'Best Practices'
                        ].map((link, i) => (
                          <g key={i} opacity="0">
                            <rect 
                              x={contentStartX + 325 + gridGap * 2 + 16} 
                              y={contentStartY + zoneHeightLarge + gridGap + 42 + i * 18} 
                              width="130" 
                              height="14" 
                              rx="3" 
                              fill="#374151"
                              opacity="0.5"
                            />
                            <text 
                              x={contentStartX + 325 + gridGap * 2 + 24} 
                              y={contentStartY + zoneHeightLarge + gridGap + 52 + i * 18} 
                              fontSize="9" 
                              fill="#10B981"
                            >
                              {link}
                            </text>
                            <animate attributeName="opacity" values="0;1" dur="0.5s" begin={`${4 + i * 0.4}s`} fill="freeze"/>
                          </g>
                        ))}
                      </g>
                    </>
                  );
                })()}
              </g>
              
              {/* Workspace Tabs - Better aligned at bottom */}
              <g>
                <rect x="30" y="400" width="540" height="40" rx="8" fill="#374151" stroke="#8B5CF6" strokeWidth="0.5"/>
                
                {/* Active workspace */}
                <rect x="45" y="410" width="95" height="20" rx="5" fill="url(#workspaceGlow)">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite"/>
                </rect>
                <text x="65" y="423" fontSize="10" fill="#F9FAFB" fontWeight="600">Development</text>
                
                {/* Other workspaces with consistent spacing */}
                {[
                  { name: 'Design', color: '#14B8A6', x: 150 },
                  { name: 'Research', color: '#F59E0B', x: 255 },
                  { name: 'Testing', color: '#10B981', x: 360 }
                ].map((workspace) => (
                  <g key={workspace.name}>
                    <rect 
                      x={workspace.x} 
                      y="410" 
                      width="85" 
                      height="20" 
                      rx="5" 
                      fill="#374151"
                      opacity="0.7"
                    >
                      <animate 
                        attributeName="opacity" 
                        values="0.5;0.8;0.5" 
                        dur={`${4 + workspace.x / 100}s`} 
                        repeatCount="indefinite"
                      />
                    </rect>
                    <circle 
                      cx={workspace.x + 12} 
                      cy="420" 
                      r="3" 
                      fill={workspace.color}
                      opacity="0.8"
                    />
                    <text 
                      x={workspace.x + 22} 
                      y="423" 
                      fontSize="10" 
                      fill="#D1D5DB"
                    >
                      {workspace.name}
                    </text>
                  </g>
                ))}
                
                {/* Add new workspace button */}
                <rect x="470" y="410" width="50" height="20" rx="5" fill="#374151" opacity="0.6"/>
                <text x="485" y="423" fontSize="10" fill="#9CA3AF">+ New</text>
              </g>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Hero;