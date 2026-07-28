'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const engineeringStats = [
  { label: 'CERTIFICATIONS', value: '82+', unit: 'verified' },
  { label: 'TECHNOLOGIES', value: '30+', unit: 'integrated' },
  { label: 'PROJECTS', value: '15+', unit: 'delivered' },
  { label: 'LINES OF CODE', value: '500K+', unit: 'written' },
];

const focusAreas = [
  { name: 'MOBILE', description: 'Kotlin · Jetpack Compose · MVVM · Clean Arch', metric: '98% code coverage' },
  { name: 'BACKEND', description: 'Firebase · REST APIs · Python · Microservices', metric: '<50ms response time' },
  { name: 'SECURITY', description: 'Ethical Hacking · Cybersecurity · OWASP', metric: 'Zero critical vulnerabilities' },
  { name: 'AI/ML', description: 'Claude API · TFLite · On-Device ML', metric: '95% inference accuracy' },
];

export default function TechnicalAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto relative">
        {/* Section Blueprint Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-px bg-[#4A90D9]" />
            <span className="text-xs font-mono text-[#4A90D9] tracking-[0.3em] uppercase">
              Section 1 of 7 — Specifications
            </span>
            <span className="flex-1 h-px bg-[#4A90D9]/30" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-[#1E3A5F]">
            Engineering{' '}
            <span className="text-[#FF6B35]">Profile</span>
          </h2>
          <p className="mt-4 text-sm font-mono text-[#4A90D9]/70">
            Senior Android Engineer with expertise in building high-performance mobile systems.
          </p>
        </motion.div>

        {/* Technical Specifications Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Left Column - Engineering Description */}
          <div className="space-y-6">
            <div className="blueprint-card p-6 rounded-none">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#2ECC71]" />
                <span className="text-xs font-mono text-[#4A90D9]">SYSTEM OVERVIEW</span>
              </div>
              <p className="text-[#1E3A5F]/80 leading-relaxed text-sm">
                Passionate and self-motivated Senior Android Engineer with a focus on 
                building responsive, modern, and user-friendly mobile systems. My 
                certification collection demonstrates growth across programming, web 
                development, mobile architectures, databases, AI, and security.
              </p>
              <p className="text-[#1E3A5F]/80 leading-relaxed text-sm mt-4">
                <span className="font-semibold text-[#1E3A5F]">Engineering Philosophy:</span>{' '}
                Code with precision. Build with purpose. Measure everything.
              </p>
            </div>

            {/* Focus Areas */}
            <div className="space-y-3">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="blueprint-card p-4 rounded-none flex items-start justify-between"
                >
                  <div>
                    <div className="text-xs font-mono text-[#FF6B35] mb-1">{area.name}</div>
                    <div className="text-sm text-[#1E3A5F]/70">{area.description}</div>
                  </div>
                  <div className="text-[10px] font-mono text-[#2ECC71] whitespace-nowrap ml-4">
                    {area.metric}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Engineering Statistics */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {engineeringStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="blueprint-card p-6 rounded-none text-center"
                >
                  <div className="text-3xl font-bold font-display text-[#1E3A5F]">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono text-[#4A90D9] uppercase mt-1 tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-[10px] font-mono text-[#4A90D9]/50">
                    {stat.unit}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Engineering Diagram Placeholder */}
            <div className="blueprint-card p-6 rounded-none">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#E74C3C]" />
                <span className="text-xs font-mono text-[#4A90D9]">SYSTEM ARCHITECTURE</span>
              </div>
              <svg viewBox="0 0 400 200" className="w-full h-auto">
                {/* Architecture Flow Diagram */}
                <rect x="10" y="10" width="120" height="40" rx="4" fill="rgba(30,58,95,0.05)" stroke="#4A90D9" strokeWidth="1" />
                <text x="70" y="35" textAnchor="middle" fill="#1E3A5F" fontSize="10" fontFamily="monospace">UI LAYER</text>
                
                <line x1="130" y1="30" x2="170" y2="30" stroke="#4A90D9" strokeWidth="1" markerEnd="url(#arrow)" />
                
                <rect x="170" y="10" width="120" height="40" rx="4" fill="rgba(30,58,95,0.05)" stroke="#4A90D9" strokeWidth="1" />
                <text x="230" y="35" textAnchor="middle" fill="#1E3A5F" fontSize="10" fontFamily="monospace">DOMAIN LAYER</text>
                
                <line x1="290" y1="30" x2="330" y2="30" stroke="#4A90D9" strokeWidth="1" markerEnd="url(#arrow)" />
                
                <rect x="330" y="10" width="60" height="40" rx="4" fill="rgba(30,58,95,0.05)" stroke="#4A90D9" strokeWidth="1" />
                <text x="360" y="35" textAnchor="middle" fill="#1E3A5F" fontSize="10" fontFamily="monospace">DATA</text>
                
                {/* Second Row */}
                <rect x="10" y="80" width="120" height="40" rx="4" fill="rgba(255,107,53,0.05)" stroke="#FF6B35" strokeWidth="1" />
                <text x="70" y="105" textAnchor="middle" fill="#FF6B35" fontSize="10" fontFamily="monospace">MVVM PATTERN</text>
                
                <rect x="170" y="80" width="120" height="40" rx="4" fill="rgba(255,107,53,0.05)" stroke="#FF6B35" strokeWidth="1" />
                <text x="230" y="105" textAnchor="middle" fill="#FF6B35" fontSize="10" fontFamily="monospace">USE CASES</text>
                
                <rect x="330" y="80" width="60" height="40" rx="4" fill="rgba(255,107,53,0.05)" stroke="#FF6B35" strokeWidth="1" />
                <text x="360" y="105" textAnchor="middle" fill="#FF6B35" fontSize="10" fontFamily="monospace">REPO</text>
                
                {/* Connection Lines */}
                <line x1="130" y1="60" x2="130" y2="80" stroke="#4A90D9" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="230" y1="60" x2="230" y2="80" stroke="#4A90D9" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="360" y1="60" x2="360" y2="80" stroke="#4A90D9" strokeWidth="0.5" strokeDasharray="3 3" />
                
                {/* Third Row */}
                <rect x="10" y="150" width="380" height="40" rx="4" fill="rgba(46,204,113,0.05)" stroke="#2ECC71" strokeWidth="1" />
                <text x="200" y="175" textAnchor="middle" fill="#2ECC71" fontSize="10" fontFamily="monospace">COROUTINES · FLOW · ROOM · RETROFIT</text>
                
                {/* Arrow definitions */}
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#4A90D9" />
                  </marker>
                </defs>
                
                {/* Dimension Labels */}
                <text x="200" y="145" textAnchor="middle" fill="#E74C3C" fontSize="8" fontFamily="monospace">
                  ═══════════════  LAYERED ARCHITECTURE  ═══════════════
                </text>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Bottom Blueprint Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-4 text-[10px] font-mono text-[#4A90D9]/40"
        >
          <span>APPROVED FOR CONSTRUCTION</span>
          <span className="w-1 h-1 rounded-full bg-[#4A90D9]" />
          <span>ENG. MOE KYAW AUNG</span>
          <span className="w-1 h-1 rounded-full bg-[#4A90D9]" />
          <span>DATE: 2024-12-15</span>
          <span className="flex-1 h-px bg-[#4A90D9]/20" />
          <span>PAGE 1/7</span>
        </motion.div>
      </div>
    </section>
  );
                      }
            
