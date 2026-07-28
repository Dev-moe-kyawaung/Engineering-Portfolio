'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Maximize2 } from 'lucide-react';

const projects = [
  {
    id: 'pulsesync',
    title: 'PulseSync',
    subtitle: 'Real-time Sync Platform',
    type: 'Android Application',
    version: '2.4.0',
    status: 'Production',
    overview: 'Multi-module Android application demonstrating senior-level architecture with Clean Architecture, Firebase backend, and offline-first design.',
    techStack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM', 'Clean Architecture', 'CI/CD'],
    metrics: [
      { label: 'Code Coverage', value: '94%' },
      { label: 'Response Time', value: '<45ms' },
      { label: 'Active Users', value: '10K+' },
      { label: 'Crash Rate', value: '<0.1%' },
    ],
    challenges: ['Real-time conflict resolution', 'Cold start optimization', 'Complex state management'],
    solutions: ['CRDTs with Firestore', 'Baseline Profiles', 'MVI pattern'],
    architecture: 'Clean Architecture — feature-first modularization with 12 modules',
    links: { github: '#', live: '#' },
  },
  {
    id: 'translator',
    title: 'MoekyawTranslator',
    subtitle: 'AI-Powered Translation',
    type: 'Android Application',
    version: '1.8.0',
    status: 'Beta',
    overview: 'Intelligent translation app leveraging on-device AI with TensorFlow Lite and cloud APIs for 50+ languages.',
    techStack: ['Kotlin', 'Jetpack Compose', 'TFLite', 'ML Kit', 'Firebase', 'Coroutines'],
    metrics: [
      { label: 'Translation Accuracy', value: '95%' },
      { label: 'Languages Supported', value: '50+' },
      { label: 'On-Device Speed', value: '<100ms' },
      { label: 'Offline Capability', value: '30 phrases' },
    ],
    challenges: ['Balancing accuracy vs performance', 'Diverse language pairs', 'On-device memory constraints'],
    solutions: ['Quantized TFLite models', 'Hybrid device-cloud approach', 'Progressive loading'],
    architecture: 'MVVM with Repository pattern — dual inference engine (on-device + cloud)',
    links: { github: '#', live: '#' },
  },
  {
    id: 'portfolio',
    title: 'Blueprint Portfolio',
    subtitle: 'Engineering Blueprint Design',
    type: 'Web Application',
    version: '1.0.0',
    status: 'Live',
    overview: 'This portfolio — a senior engineer showcase built with precision grid-core design, blueprint aesthetics, and technical diagrams.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Konva', 'SVG'],
    metrics: [
      { label: 'Lighthouse Score', value: '98' },
      { label: 'Build Time', value: '12s' },
      { label: 'Pages', value: '7 sections' },
      { label: 'Animations', value: '40+' },
    ],
    challenges: ['Blueprint aesthetic rendering', 'SVG animation timing', 'Responsive technical diagrams'],
    solutions: ['Canvas-based grid system', 'Staggered drawing animations', 'SVG viewBox scaling'],
    architecture: 'Next.js App Router with server components for performance, client for interactivity',
    links: { github: '#', live: '#' },
  },
];

export default function TechnicalProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const project = projects[currentIndex];

  return (
    <section id="projects" className="py-20 md:py-32 px-4 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-px bg-[#4A90D9]" />
            <span className="text-xs font-mono text-[#4A90D9] tracking-[0.3em] uppercase">
              Section 3 of 7 — Engineering Projects
            </span>
            <span className="flex-1 h-px bg-[#4A90D9]/30" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-[#1E3A5F]">
            Technical{' '}
            <span className="text-[#FF6B35]">Specifications</span>
          </h2>
        </motion.div>

        {/* Project Navigation */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => {
              setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
              setExpandedProject(null);
            }}
            className="p-2 border border-[#4A90D9]/30 text-[#4A90D9] hover:bg-[#4A90D9]/10 transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex-1 flex items-center gap-2">
            {projects.map((p, index) => (
              <button
                key={p.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setExpandedProject(null);
                }}
                className={`h-1 transition-all duration-300 ${
                  index === currentIndex ? 'w-12 bg-[#1E3A5F]' : 'w-4 bg-[#4A90D9]/30'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => {
              setCurrentIndex((prev) => (prev + 1) % projects.length);
              setExpandedProject(null);
            }}
            className="p-2 border border-[#4A90D9]/30 text-[#4A90D9] hover:bg-[#4A90D9]/10 transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Project Blueprint Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <div className="blueprint-card rounded-none">
              {/* Project Header */}
              <div className="p-8 border-b border-[#4A90D9]/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-[#4A90D9] uppercase tracking-wider">
                        {project.type}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#4A90D9]/30" />
                      <span className="text-xs font-mono text-[#4A90D9]">v{project.version}</span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 ${
                        project.status === 'Production' ? 'bg-[#2ECC71]/20 text-[#2ECC71]' :
                        project.status === 'Beta' ? 'bg-[#FF6B35]/20 text-[#FF6B35]' :
                        'bg-[#4A90D9]/20 text-[#4A90D9]'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold font-display text-[#1E3A5F]">
                      {project.title}
                    </h3>
                    <p className="text-lg text-[#4A90D9] font-mono mt-1">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.links.github} className="p-2 border border-[#4A90D9]/30 text-[#4A90D9] hover:bg-[#4A90D9]/10 transition-all">
                      <Github size={16} />
                    </a>
                    <a href={project.links.live} className="p-2 border border-[#4A90D9]/30 text-[#4A90D9] hover:bg-[#4A90D9]/10 transition-all">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content Grid */}
              <div className="p-8 grid lg:grid-cols-2 gap-8">
                {/* Left: Architecture Diagram */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#E74C3C]" />
                    <span className="text-xs font-mono text-[#4A90D9] uppercase">ARCHITECTURE DIAGRAM</span>
                  </div>
                  <div className="diagram-container p-6 rounded-none min-h-[300px] flex items-center justify-center">
                    <svg viewBox="0 0 400 250" className="w-full h-auto">
                      {/* Architecture Box Layers */}
                      <rect x="10" y="10" width="380" height="40" rx="2" fill="rgba(30,58,95,0.05)" stroke="#4A90D9" strokeWidth="1" />
                      <text x="200" y="35" textAnchor="middle" fill="#1E3A5F" fontSize="11" fontFamily="monospace">PRESENTATION LAYER (Compose UI)</text>
                      
                      <line x1="200" y1="50" x2="200" y2="65" stroke="#4A90D9" strokeWidth="1" />
                      
                      <rect x="10" y="65" width="380" height="40" rx="2" fill="rgba(30,58,95,0.05)" stroke="#4A90D9" strokeWidth="1" />
                      <text x="200" y="90" textAnchor="middle" fill="#1E3A5F" fontSize="11" fontFamily="monospace">VIEWMODEL LAYER (State Management)</text>
                      
                      <line x1="200" y1="105" x2="200" y2="120" stroke="#4A90D9" strokeWidth="1" />
                      
                      <rect x="10" y="120" width="380" height="40" rx="2" fill="rgba(30,58,95,0.05)" stroke="#4A90D9" strokeWidth="1" />
                      <text x="200" y="145" textAnchor="middle" fill="#1E3A5F" fontSize="11" fontFamily="monospace">DOMAIN LAYER (Use Cases)</text>
                      
                      <line x1="200" y1="160" x2="200" y2="175" stroke="#4A90D9" strokeWidth="1" />
                      
                      <rect x="10" y="175" width="380" height="40" rx="2" fill="rgba(30,58,95,0.05)" stroke="#4A90D9" strokeWidth="1" />
                      <text x="200" y="200" textAnchor="middle" fill="#1E3A5F" fontSize="11" fontFamily="monospace">DATA LAYER (Repository + Sources)</text>
                      
                      {/* Dimension Lines */}
                      <line x1="395" y1="10" x2="395" y2="215" stroke="#E74C3C" strokeWidth="0.5" />
                      <text x="398" y="115" textAnchor="start" fill="#E74C3C" fontSize="8" fontFamily="monospace" transform="rotate(90, 398, 115)">4 LAYERS</text>
                    </svg>
                  </div>
                </div>

                {/* Right: Metrics & Specs */}
                <div className="space-y-6">
                  {/* Overview */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[#2ECC71]" />
                      <span className="text-xs font-mono text-[#4A90D9] uppercase">DESCRIPTION</span>
                    </div>
                    <p className="text-sm text-[#1E3A5F]/70 leading-relaxed">{project.overview}</p>
                  </div>

                  {/* Metrics Grid */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                      <span className="text-xs font-mono text-[#4A90D9] uppercase">PERFORMANCE METRICS</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="border border-[#4A90D9]/20 p-3">
                          <div className="text-lg font-bold font-display text-[#1E3A5F]">{metric.value}</div>
                          <div className="text-[10px] font-mono text-[#4A90D9]/70 uppercase tracking-wider">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-[#4A90D9]" />
                      <span className="text-xs font-mono text-[#4A90D9] uppercase">TECHNOLOGY STACK</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-1 border border-[#4A90D9]/20 text-xs font-mono text-[#1E3A5F]/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expand Details */}
                  <button
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="flex items-center gap-2 text-xs font-mono text-[#FF6B35] hover:text-[#E74C3C] transition-colors"
                  >
                    <Maximize2 size={12} />
                    {expandedProject === project.id ? 'HIDE TECHNICAL DETAILS' : 'EXPAND TECHNICAL DETAILS'}
                  </button>
                </div>
              </div>

              {/* Expanded Technical Details */}
              <AnimatePresence>
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden border-t border-[#4A90D9]/20"
                  >
                    <div className="p-8 grid md:grid-cols-3 gap-6">
                      {/* Architecture */}
                      <div className="border border-[#4A90D9]/20 p-4">
                        <div className="text-xs font-mono text-[#FF6B35] mb-2 uppercase tracking-wider">Architecture</div>
                        <div className="text-sm text-[#1E3A5F]/70">{project.architecture}</div>
                      </div>
                      {/* Challenges */}
                      <div className="border border-[#4A90D9]/20 p-4">
                        <div className="text-xs font-mono text-[#E74C3C] mb-2 uppercase tracking-wider">Challenges</div>
                        <ul className="space-y-1">
                          {project.challenges.map((challenge, idx) => (
                            <li key={idx} className="text-sm text-[#1E3A5F]/70 flex items-start gap-2">
                              <span className="text-[#E74C3C] mt-1">▸</span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Solutions */}
                      <div className="border border-[#4A90D9]/20 p-4">
                        <div className="text-xs font-mono text-[#2ECC71] mb-2 uppercase tracking-wider">Solutions</div>
                        <ul className="space-y-1">
                          {project.solutions.map((solution, idx) => (
                            <li key={idx} className="text-sm text-[#1E3A5F]/70 flex items-start gap-2">
                              <span className="text-[#2ECC71] mt-1">✦</span>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
    }
            
