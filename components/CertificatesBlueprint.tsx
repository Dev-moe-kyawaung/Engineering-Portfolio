'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, ExternalLink } from 'lucide-react';

const certificateCategories = [
  { id: 'all', name: 'All Certifications', count: '82' },
  { id: 'programming', name: 'Programming Languages', count: '15' },
  { id: 'mobile', name: 'Mobile Development', count: '10' },
  { id: 'web', name: 'Web Development', count: '13' },
  { id: 'ai', name: 'AI & Machine Learning', count: '11' },
  { id: 'security', name: 'Security & DevOps', count: '10' },
  { id: 'database', name: 'Databases', count: '6' },
  { id: 'blockchain', name: 'Blockchain', count: '4' },
  { id: 'software', name: 'Software Engineering', count: '7' },
  { id: 'business', name: 'Business & Management', count: '6' },
];

const sampleCertificates = [
  { id: 'c1', name: 'Android Development', category: 'mobile', date: '2024-04-20', platform: 'Programming Hub' },
  { id: 'c2', name: 'Kotlin Advanced', category: 'programming', date: '2024-04-02', platform: 'Programming Hub' },
  { id: 'c3', name: 'Jetpack Compose', category: 'mobile', date: '2024-03-25', platform: 'Programming Hub' },
  { id: 'c4', name: 'Clean Architecture', category: 'software', date: '2024-02-15', platform: 'Programming Hub' },
  { id: 'c5', name: 'TensorFlow Lite', category: 'ai', date: '2024-01-20', platform: 'Programming Hub' },
  { id: 'c6', name: 'Cybersecurity', category: 'security', date: '2024-01-10', platform: 'Programming Hub' },
  { id: 'c7', name: 'Firebase', category: 'mobile', date: '2023-12-15', platform: 'Programming Hub' },
  { id: 'c8', name: 'Python Advanced', category: 'programming', date: '2023-11-20', platform: 'Programming Hub' },
];

export default function CertificatesBlueprint() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certificates" className="py-20 md:py-32 px-4 relative" ref={ref}>
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
              Section 5 of 7 — Certification Registry
            </span>
            <span className="flex-1 h-px bg-[#4A90D9]/30" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-[#1E3A5F]">
            Engineering{' '}
            <span className="text-[#FF6B35]">Certifications</span>
          </h2>
          <p className="mt-4 text-sm font-mono text-[#4A90D9]/70">
            Verified credentials from Programming Hub — 82+ certifications across 10 engineering domains
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative mb-6">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4A90D9]" />
            <input
              type="text"
              placeholder="Search certifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#F5F0E8] border border-[#4A90D9]/30 text-sm font-mono
                         text-[#1E3A5F] placeholder-[#4A90D9]/40 focus:outline-none focus:border-[#FF6B35]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {certificateCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#1E3A5F] text-[#F5F0E8]'
                    : 'border border-[#4A90D9]/30 text-[#4A90D9] hover:bg-[#4A90D9]/10'
                }`}
              >
                {category.name}
                <span className="ml-1.5 text-[10px] opacity-60">({category.count})</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Certificate Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {sampleCertificates
            .filter((cert) => activeCategory === 'all' || cert.category === activeCategory)
            .filter((cert) => cert.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -2 }}
                className="blueprint-card p-4 rounded-none group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-[10px] font-mono text-[#FF6B35] uppercase tracking-wider">
                    {cert.category}
                  </span>
                  <ExternalLink size={12} className="text-[#4A90D9] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-sm font-mono text-[#1E3A5F] mb-1 group-hover:text-[#FF6B35] transition-colors">
                  {cert.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#4A90D9]/50">{cert.date}</span>
                  <span className="text-[10px] font-mono text-[#4A90D9]/50">{cert.platform}</span>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Registry Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex items-center gap-4 text-[10px] font-mono text-[#4A90D9]/40"
        >
          <span>VERIFIED BY PROGRAMMING HUB</span>
          <span className="w-1 h-1 rounded-full bg-[#4A90D9]" />
          <span>CERTIFICATE ID: PROGRESS_2024_082</span>
          <span className="flex-1 h-px bg-[#4A90D9]/20" />
          <span>Last verified: 2024-12-15</span>
        </motion.div>
      </div>
    </section>
  );
}
