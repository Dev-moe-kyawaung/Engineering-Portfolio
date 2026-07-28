'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Copy, Check, MapPin, Mail, Phone } from 'lucide-react';

const emailList = [
  'moekyawaung@programmer.net',
  'moekyawaung@technologist.com',
  'moekyawaung@engineer.com',
  'moekyawaung@linuxmail.org',
];

export default function EngineeringContact() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
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
              Section 6 of 7 — Communication Channel
            </span>
            <span className="flex-1 h-px bg-[#4A90D9]/30" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-[#1E3A5F]">
            Initiate{' '}
            <span className="text-[#FF6B35]">Contact</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Blueprint */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Primary Contact */}
            <div className="blueprint-card p-6 rounded-none">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#2ECC71]" />
                <span className="text-xs font-mono text-[#4A90D9] uppercase tracking-wider">Primary Channel</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Mail size={18} className="text-[#FF6B35]" />
                <span className="text-sm font-mono text-[#1E3A5F]">moekyawaung@programmer.net</span>
                <button
                  onClick={() => copyToClipboard('moekyawaung@programmer.net')}
                  className="ml-auto p-1.5 border border-[#4A90D9]/30 text-[#4A90D9] hover:text-[#FF6B35] hover:border-[#FF6B35] transition-all"
                  title="Copy email"
                >
                  {copiedEmail === 'moekyawaung@programmer.net' ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#4A90D9]/70">
                <MapPin size={14} />
                Tachileik, Myanmar ↔ Bangkok, Thailand
              </div>
            </div>

            {/* All Emails */}
            <div className="blueprint-card p-6 rounded-none">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#4A90D9]" />
                <span className="text-xs font-mono text-[#4A90D9] uppercase tracking-wider">All Contact Endpoints</span>
                <span className="flex-1 h-px bg-[#4A90D9]/20" />
                <span className="text-[10px] font-mono text-[#4A90D9]/50">{emailList.length} addresses</span>
              </div>
              <div className="space-y-2">
                {emailList.map((email) => (
                  <div key={email} className="flex items-center justify-between p-2 border border-[#4A90D9]/10 hover:border-[#4A90D9]/30 transition-all">
                    <span className="text-xs font-mono text-[#1E3A5F]/70">{email}</span>
                    <button
                      onClick={() => copyToClipboard(email)}
                      className="text-[10px] font-mono text-[#4A90D9] hover:text-[#FF6B35] transition-colors"
                    >
                      {copiedEmail === email ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Map */}
            <div className="blueprint-card p-6 rounded-none">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#E74C3C]" />
                <span className="text-xs font-mono text-[#4A90D9] uppercase tracking-wider">Geographic Coordinates</span>
              </div>
              <svg viewBox="0 0 400 150" className="w-full h-auto">
                {/* Map Grid */}
                {Array.from({ length: 8 }).map((_, row) =>
                  Array.from({ length: 10 }).map((_, col) => (
                    <circle
                      key={`${row}-${col}`}
                      cx={20 + col * 40}
                      cy={15 + row * 17}
                      r={1}
                      fill="#4A90D9"
                      opacity={0.2}
                    />
                  ))
                )}
                {/* Location Markers */}
                <circle cx="80" cy="75" r="8" fill="none" stroke="#E74C3C" strokeWidth="2" />
                <text x="80" y="98" textAnchor="middle" fill="#E74C3C" fontSize="8" fontFamily="monospace">Tachileik, MM</text>
                
                <circle cx="280" cy="60" r="8" fill="none" stroke="#FF6B35" strokeWidth="2" />
                <text x="280" y="83" textAnchor="middle" fill="#FF6B35" fontSize="8" fontFamily="monospace">Bangkok, TH</text>
                
                {/* Connection Line */}
                <line x1="88" y1="75" x2="272" y2="60" stroke="#4A90D9" strokeWidth="1" strokeDasharray="5 3" />
                <text x="180" y="55" textAnchor="middle" fill="#4A90D9" fontSize="7" fontFamily="monospace">~800 km</text>
              </svg>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="blueprint-card p-8 rounded-none">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                <span className="text-xs font-mono text-[#4A90D9] uppercase tracking-wider">Contact Form — Engineering Request</span>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#4A90D9] mb-2 uppercase tracking-wider">
                      Name <span className="text-[#E74C3C]">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2.5 bg-[#F5F0E8] border border-[#4A90D9]/30 text-sm font-mono
                                 text-[#1E3A5F] placeholder-[#4A90D9]/40 focus:outline-none focus:border-[#FF6B35]
                                 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#4A90D9] mb-2 uppercase tracking-wider">
                      Email <span className="text-[#E74C3C]">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2.5 bg-[#F5F0E8] border border-[#4A90D9]/30 text-sm font-mono
                                 text-[#1E3A5F] placeholder-[#4A90D9]/40 focus:outline-none focus:border-[#FF6B35]
                                 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#4A90D9] mb-2 uppercase tracking-wider">
                    Subject <span className="text-[#E74C3C]">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 bg-[#F5F0E8] border border-[#4A90D9]/30 text-sm font-mono
                               text-[#1E3A5F] placeholder-[#4A90D9]/40 focus:outline-none focus:border-[#FF6B35]
                               transition-colors"
                    placeholder="Project inquiry / Collaboration / Other"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#4A90D9] mb-2 uppercase tracking-wider">
                    Message <span className="text-[#E74C3C]">*</span>
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-3 py-2.5 bg-[#F5F0E8] border border-[#4A90D9]/30 text-sm font-mono
                               text-[#1E3A5F] placeholder-[#4A90D9]/40 focus:outline-none focus:border-[#FF6B35]
                               transition-colors resize-none"
                    placeholder="Describe your engineering request..."
                  />
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#4A90D9]/50">
                  <span>Fields marked with <span className="text-[#E74C3C]">*</span> are required</span>
                  <span>Response time: &lt; 24 hours</span>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-[#1E3A5F] text-[#F5F0E8]
                             font-mono text-sm uppercase tracking-wider hover:bg-[#162E4A] transition-all"
                >
                  <Send size={16} />
                  Transmit Message
                  <span className="w-4 h-px bg-[#F5F0E8]" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
