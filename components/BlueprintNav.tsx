'use client';

import { useState, useEffect } from 'react';
import { Bot, Menu, X } from 'lucide-react';

interface BlueprintNavProps {
  onAIOpen: () => void;
}

const navItems = [
  { name: 'Home', href: '#home', number: '01' },
  { name: 'Profile', href: '#about', number: '02' },
  { name: 'Skills', href: '#skills', number: '03' },
  { name: 'Projects', href: '#projects', number: '04' },
  { name: 'Contact', href: '#contact', number: '05' },
];

export default function BlueprintNav({ onAIOpen }: BlueprintNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-[#F5F0E8]/95 backdrop-blur-sm border-b border-[#4A90D9]/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo — Engineering Style */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-[#1E3A5F] flex items-center justify-center">
              <span className="text-xs font-bold font-mono text-[#1E3A5F]">MK</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-[10px] font-mono text-[#4A90D9] uppercase tracking-wider">Engineer</div>
              <div className="text-xs font-semibold font-mono text-[#1E3A5F]">Moe Kyaw Aung</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-xs font-mono text-[#4A90D9] hover:text-[#1E3A5F] transition-colors group"
              >
                <span className="text-[10px] text-[#4A90D9]/50 group-hover:text-[#FF6B35]">{item.number}</span>
                {item.name}
                <span className="w-0 h-px bg-[#FF6B35] group-hover:w-full transition-all" />
              </a>
            ))}
            <button
              onClick={onAIOpen}
              className="flex items-center gap-2 px-3 py-1.5 border border-[#FF6B35]/50 text-[#FF6B35] 
                         text-xs font-mono hover:bg-[#FF6B35]/10 transition-all"
            >
              <Bot size={14} />
              Blueprint AI
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onAIOpen}
              className="p-2 border border-[#FF6B35
