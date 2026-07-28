'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function BlueprintHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Technical Drawing Background */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Technical Drawing Lines */}
        <line x1="100" y1="100" x2="1340" y2="100" stroke="#4A90D9" strokeWidth="1" />
        <line x1="100" y1="800" x2="1340" y2="800" stroke="#4A90D9" strokeWidth="1" />
        <line x1="100" y1="100" x2="100" y2="800" stroke="#4A90D9" strokeWidth="1" />
        <line x1="1340" y1="100" x2="1340" y2="800" stroke="#4A90D9" strokeWidth="1" />
        
        {/* Diagonal Construction Lines */}
        <line x1="100" y1="100" x2="1340" y2="800" stroke="#4A90D9" strokeWidth="0.5" strokeDasharray="5 5" />
        <line x1="1340" y1="100" x2="100" y2="800" stroke="#4A90D9" strokeWidth="0.5" strokeDasharray="5 5" />
        
        {/* Center Crosshair */}
        <line x1="620" y1="100" x2="820" y2="100" stroke="#E74C3C" strokeWidth="2" />
        <line x1="720" y1="80" x2="720" y2="120" stroke="#E74C3C" strokeWidth="2" />
        <circle cx="720" cy="100" r="3" fill="#E74C3C" />
        
        {/* Dimension Lines */}
        <line x1="100" y1="80" x2="1340" y2="80" stroke="#E74C3C" strokeWidth="0.5" />
        <text x="720" y="75" textAnchor="middle" fill="#E74C3C" fontSize="10" fontFamily="monospace">1240px</text>
        
        <line x1="80" y1="100" x2="80" y2="800" stroke="#E74C3C" strokeWidth="0.5" />
        <text x="75" y="450" textAnchor="middle" fill="#E74C3C" fontSize="10" fontFamily="monospace" transform="rotate(-90, 75, 450)">700px</text>
        
        {/* Architectural Details */}
        <rect x="200" y="200" width="300" height="200" rx="4" stroke="#4A90D9" strokeWidth="1" fill="none" />
        <rect x="600" y="200" width="300" height="200" rx="4" stroke="#4A90D9" strokeWidth="1" fill="none" />
        <rect x="1000" y="200" width="200" height="200" rx="4" stroke="#4A90D9" strokeWidth="1" fill="none" />
        
        {/* Grid Dots */}
        {Array.from({ length: 10 }).map((_, row) =>
          Array.from({ length: 16 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={100 + col * 80}
              cy={150 + row * 70}
              r={1}
              fill="#4A90D9"
              opacity={0.3}
            />
          ))
        )}
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Blueprint Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-4 px-6 py-2 border border-[#4A90D9]/30 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E74C3C] animate-pulse-dot" />
            <span className="text-xs font-mono text-[#4A90D9] tracking-wider uppercase">
              System Status: Active — Engineering Mode
            </span>
            <span className="text-xs font-mono text-[#4A90D9]">v2.0.0</span>
          </div>
        </motion.div>

        {/* Main Title — Engineering Blueprint Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-8"
        >
          {/* Technical Title Block */}
          <div className="inline-block border-2 border-[#1E3A5F] p-1">
            <div className="border border-[#4A90D9]/50 p-6 md:p-10">
              <div className="text-xs font-mono text-[#4A90D9] mb-2 tracking-wider">
                PROJECT: SENIOR ENGINEER PORTFOLIO
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-[#1E3A5F] leading-none tracking-tight">
                MOE KYAW
                <br />
                <span className="text-[#FF6B35]">AUNG</span>
              </h1>
              <div className="flex items-center gap-4 mt-4 text-xs font-mono text-[#4A90D9]">
                <span>REV 1.0</span>
                <span className="w-4 h-px bg-[#4A90D9]" />
                <span>SCALE 1:1</span>
                <span className="w-4 h-px bg-[#4A90D9]" />
                <span>SHEET 1 OF 7</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Subtitle — Engineering Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 text-sm font-mono text-[#1E3A5F]/70">
            <span className="px-3 py-1 border border-[#4A90D9]/30 rounded">
              SENIOR ANDROID ENGINEER
            </span>
            <span className="text-[#4A90D9]">|</span>
            <span className="px-3 py-1 border border-[#4A90D9]/30 rounded">
              KOTLIN · JETPACK COMPOSE
            </span>
            <span className="text-[#4A90D9]">|</span>
            <span className="px-3 py-1 border border-[#4A90D9]/30 rounded">
              CLEAN ARCHITECTURE
            </span>
          </div>

          <div className="mt-4 text-sm font-mono text-[#4A90D9]/60">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2ECC71]" />
              LOCATION: TACHILEIK, MM ↔ BANGKOK, TH
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons — Engineering Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1E3A5F] text-[#F5F0E8] 
                       font-mono text-sm uppercase tracking-wider hover:bg-[#162E4A] 
                       transition-all duration-300"
          >
            <span className="w-4 h-px bg-[#F5F0E8] group-hover:w-8 transition-all" />
            View Technical Specifications
            <ChevronDown size={14} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#1E3A5F] 
                       text-[#1E3A5F] font-mono text-sm uppercase tracking-wider 
                       hover:bg-[#1E3A5F] hover:text-[#F5F0E8] transition-all duration-300"
          >
            <span className="w-4 h-px bg-[#1E3A5F] group-hover:bg-[#F5F0E8]" />
            Initiate Contact
          </a>
        </motion.div>

        {/* Engineering Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex items-center gap-6 text-[10px] font-mono text-[#4A90D9]/40">
            <span>━╸ ENGINEERING BLUEPRINT ╺━</span>
            <span className="w-1 h-1 rounded-full bg-[#4A90D9]" />
            <span>PRECISION ±0.01mm</span>
            <span className="w-1 h-1 rounded-full bg-[#4A90D9]" />
            <span>ISO 9001:2024</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
