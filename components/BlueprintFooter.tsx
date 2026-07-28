'use client';

import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function BlueprintFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#4A90D9]/20 py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Blueprint Footer Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="w-8 h-px bg-[#4A90D9]" />
          <span className="text-xs font-mono text-[#4A90D9] tracking-[0.3em] uppercase">
            Section 7 of 7 — Engineering Colophon
          </span>
          <span className="flex-1 h-px bg-[#4A90D9]/20" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Engineering Credits */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E74C3C]" />
              <span className="text-xs font-mono text-[#4A90D9] uppercase tracking-wider">Project Credits</span>
            </div>
            <div className="space-y-2 text-sm font-mono text-[#4A90D9]/70">
              <p>Designed & Engineered by:</p>
              <p className="text-[#1E3A5F] font-semibold">Moe Kyaw Aung</p>
              <p className="text-xs">Senior Android Engineer</p>
              <p className="text-xs text-[#4A90D9]/50">ISO 9001:2024 Certified Process</p>
            </div>
          </div>

          {/* Technical Specifications */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#2ECC71]" />
              <span className="text-xs font-mono text-[#4A90D9] uppercase tracking-wider">Technical Specs</span>
            </div>
            <div className="space-y-1 text-xs font-mono text-[#4A90D9]/70">
              <div className="flex justify-between">
                <span>Framework:</span>
                <span className="text-[#1E3A5F]">Next.js 14</span>
              </div>
              <div className="flex justify-between">
                <span>Styling:</span>
                <span className="text-[#1E3A5F]">Tailwind CSS</span>
              </div>
              <div className="flex justify-between">
                <span>Animation:</span>
                <span className="text-[#1E3A5F]">Framer Motion</span>
              </div>
              <div className="flex justify-between">
                <span>Grid System:</span>
                <span className="text-[#1E3A5F]">20px × 20px</span>
              </div>
              <div className="flex justify-between">
                <span>Version:</span>
                <span className="text-[#1E3A5F]">1.0.0</span>
              </div>
            </div>
          </div>

          {/* Contact Engineering */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
              <span className="text-xs font-mono text-[#4A90D9] uppercase tracking-wider">Contact Engineering</span>
            </div>
            <div className="space-y-3">
              <a href="mailto:moekyawaung@programmer.net" className="flex items-center gap-2 text-sm font-mono text-[#4A90D9] hover:text-[#FF6B35] transition-colors">
                <Mail size={14} />
                moekyawaung@programmer.net
              </a>
              <a href="https://github.com/Dev-moe-kyawaung" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-mono text-[#4A90D9] hover:text-[#FF6B35] transition-colors">
                <Github size={14} />
                @Dev-moe-kyawaung
              </a>
              <a href="https://linkedin.com/in/moe-kyaw-aung-2653093a1" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-mono text-[#4A90D9] hover:text-[#FF6B35] transition-colors">
                <Linkedin size={14} />
                Moe Kyaw Aung
              </a>
              <div className="flex items-center gap-2 text-sm font-mono text-[#4A90D9]/70">
                <MapPin size={14} />
                Tachileik, MM ↔ Bangkok, TH
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Engineering Bar */}
        <div className="border-t border-[#4A90D9]/20 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#4A90D9]/50">
            <div className="flex items-center gap-4">
              <span>© {currentYear} Moe Kyaw Aung</span>
              <span className="w-1 h-1 rounded-full bg-[#4A90D9]/30" />
              <span>All engineering rights reserved</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Built with precision ±0.01mm</span>
              <span className="w-1 h-1 rounded-full bg-[#4A90D9]/30" />
              <span>SCALE 1:1</span>
              <span className="w-1 h-1 rounded-full bg-[#4A90D9]/30" />
              <span>SHEET 7/7</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
