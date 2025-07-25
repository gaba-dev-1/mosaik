import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '@/components/layout/Section';
import { fadeInUp, staggerChildren } from '@/utils/animations';

const ProblemStatement: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section background="secondary" id="problem">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="max-w-5xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The problem with <span className="text-gradient">modern workflows</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Endless windows, buried tabs, constant switching between apps.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <div className="bg-bg-surface rounded-2xl p-6 border border-border-light">
            <svg width="100%" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="800" height="400" fill="#0A0E1A"/>
              
              <rect width="800" height="400" fill="#111827"/>
              
              {/* Main browser window - chaotic with many tabs - FIXED: Consistent rounded corners */}
              <rect x="80" y="40" width="320" height="200" rx="8" fill="#374151" stroke="#EF4444" strokeWidth="2"/>
              <rect x="80" y="40" width="320" height="32" rx="8" fill="#EF4444"/>
              <text x="90" y="58" fontSize="12" fill="#F9FAFB" fontWeight="bold">Browser (23 tabs)</text>
              
              {/* Tab bar overflow */}
              <rect x="90" y="80" width="300" height="20" rx="3" fill="#1F2937"/>
              {Array.from({ length: 15 }).map((_, i) => (
                <rect key={i} x={95 + i * 18} y="83" width="15" height="14" rx="2" fill="#6B7280" opacity={0.8}>
                  <animate attributeName="opacity" values="0.8;1;0.6" dur={`${1.5 + Math.random()}s`} repeatCount="indefinite"/>
                </rect>
              ))}
              <text x="370" y="93" fontSize="10" fill="#EF4444">+8</text>
              
              <rect x="90" y="110" width="300" height="120" rx="4" fill="#1F2937"/>
              <text x="100" y="130" fontSize="12" fill="#8B5CF6">Documentation</text>
              <text x="100" y="170" fontSize="12" fill="#14B8A6">GitHub Issues</text>
              <text x="100" y="150" fontSize="12" fill="#F59E0B">Forums</text>
              <text x="100" y="190" fontSize="12" fill="#10B981">Tutorials</text>
              
              {/* Code editor window overlapping - FIXED: Consistent rounded corners */}
              <rect x="200" y="120" width="280" height="180" rx="8" fill="#374151" stroke="#14B8A6" strokeWidth="2"/>
              <rect x="200" y="120" width="280" height="32" rx="8" fill="#14B8A6"/>
              <text x="210" y="138" fontSize="12" fill="#0A0E1A" fontWeight="bold">VS Code</text>
              
              <rect x="210" y="160" width="260" height="130" rx="4" fill="#111827"/>
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <g key={i}>
                  <rect x="220" y={170 + i * 15} width={Math.max(80, 200 - Math.random() * 60)} height="3" rx="1.5" fill="#14B8A6" opacity={0.7}/>
                  <rect x="230" y={172 + i * 15} width={Math.max(40, 120 - Math.random() * 40)} height="2" rx="1" fill="#8B5CF6" opacity={0.5}/>
                </g>
              ))}
              
              {/* Chat/communication app - FIXED: Consistent rounded corners */}
              <rect x="420" y="60" width="200" height="160" rx="8" fill="#374151" stroke="#8B5CF6" strokeWidth="2"/>
              <rect x="420" y="60" width="200" height="32" rx="8" fill="#8B5CF6"/>
              <text x="430" y="78" fontSize="12" fill="#F9FAFB" fontWeight="bold">Slack (12 unread)</text>
              
              <rect x="430" y="100" width="180" height="110" rx="4" fill="#1F2937"/>
              {[0, 1, 2, 3, 4].map((i) => (
                <g key={i}>
                  <circle cx="445" cy={115 + i * 18} r="3" fill="#14B8A6"/>
                  <rect x="455" y={112 + i * 18} width={120 - Math.random() * 40} height="2" rx="1" fill="#D1D5DB" opacity={0.8}/>
                  <rect x="455" y={115 + i * 18} width={80 - Math.random() * 30} height="2" rx="1" fill="#9CA3AF" opacity={0.6}/>
                </g>
              ))}
              
              {/* Terminal window - FIXED: Consistent rounded corners */}
              <rect x="150" y="260" width="220" height="120" rx="8" fill="#374151" stroke="#F59E0B" strokeWidth="2"/>
              <rect x="150" y="260" width="220" height="32" rx="8" fill="#F59E0B"/>
              <text x="160" y="278" fontSize="12" fill="#0A0E1A" fontWeight="bold">Terminal</text>
              
              <rect x="160" y="300" width="200" height="70" rx="4" fill="#111827"/>
              <text x="165" y="320" fontSize="10" fill="#14B8A6">$ npm start</text>
              <text x="165" y="335" fontSize="10" fill="#F59E0B">Server running...</text>
              <text x="165" y="350" fontSize="10" fill="#3B82F6">Port 3000</text>
              <rect x="165" y="355" width="8" height="10" rx="1" fill="#14B8A6">
                <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite"/>
              </rect>
              
              {/* Email client - FIXED: Consistent rounded corners */}
              <rect x="480" y="240" width="240" height="140" rx="8" fill="#374151" stroke="#10B981" strokeWidth="2"/>
              <rect x="480" y="240" width="240" height="32" rx="8" fill="#10B981"/>
              <text x="490" y="258" fontSize="12" fill="#0A0E1A" fontWeight="bold">Mail (47 unread)</text>
              
              <rect x="490" y="280" width="220" height="90" rx="4" fill="#1F2937"/>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <g key={i}>
                  <circle cx="500" cy={290 + i * 14} r="2" fill={i < 3 ? "#EF4444" : "#6B7280"}/>
                  <rect x="510" y={287 + i * 14} width={180 - Math.random() * 50} height="2" rx="1" fill="#D1D5DB" opacity={i < 3 ? 1 : 0.5}/>
                  <rect x="510" y={290 + i * 14} width={120 - Math.random() * 40} height="1.5" rx="0.75" fill="#9CA3AF" opacity={i < 3 ? 0.8 : 0.4}/>
                </g>
              ))}
              
              {/* Music player - FIXED: Consistent rounded corners */}
              <rect x="650" y="80" width="130" height="100" rx="8" fill="#374151" stroke="#A855F7" strokeWidth="2"/>
              <rect x="650" y="80" width="130" height="32" rx="8" fill="#A855F7"/>
              <text x="660" y="98" fontSize="12" fill="#F9FAFB" fontWeight="bold">Spotify</text>
              
              <rect x="660" y="120" width="110" height="50" rx="4" fill="#1F2937"/>
              <circle cx="690" cy="135" r="12" fill="#1DB954" opacity="0.9"/>
              <polygon points="685,130 695,135 685,140" fill="#F9FAFB"/>
              <text x="665" y="160" fontSize="10" fill="#D1D5DB">Now Playing...</text>

              {/* Taskbar showing window overflow - FIXED: Consistent rounded corners */}
              <rect x="0" y="370" width="800" height="30" rx="4" fill="#4B5563"/>
              {Array.from({ length: 20 }).map((_, i) => (
                <rect key={i} x={10 + i * 38} y="375" width="35" height="20" rx="3" fill="#6B7280" opacity={0.7 + Math.random() * 0.3}/>
              ))}
              <text x="720" y="387" fontSize="11" fill="#D1D5DB">+12 more</text>
            </svg>
            
            <div className="mt-6 text-center">
              <p className="text-text-muted">This scattered approach makes work stressful and inefficient.</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-accent-amber mb-2">Minutes</div>
            <p className="text-text-secondary">to refocus after switching</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-accent-primary mb-2">Overload</div>
            <p className="text-text-secondary">from tabs & windows</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl font-bold text-accent-teal mb-2">Ideas</div>
            <p className="text-text-secondary">lost to context switching</p>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ProblemStatement;
