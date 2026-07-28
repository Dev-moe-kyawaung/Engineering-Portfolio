'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Code2, Briefcase, Database, GitCommit, Users } from 'lucide-react';

const engineeringStats = [
  { icon: Award, label: 'Certifications', value: '82+', detail: 'Programming Hub Verified' },
  { icon: Code2, label: 'Technologies', value: '30+', detail: 'Full Stack Proficiency' },
  { icon: Briefcase, label: 'Projects Delivered', value: '15+', detail: 'Production Applications' },
  { icon: Database, label: 'Lines of Code', value: '500K+', detail: 'Kotlin & Java' },
  { icon: GitCommit, label: 'Git Commits', value: '2,500+', detail: 'Contributions' },
  { icon: Users, label: 'Collaborations', value: '50+', detail: 'Team Projects' },
];

export default function StatsEngineering() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {engineeringStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="blueprint-card p-4 rounded-none text-center group hover:border-[#FF6B35]/30 transition-all"
            >
              <stat.icon size={20} className="mx-auto mb-2 text-[#4A90D9] group-hover:text-[#FF6B35] transition-colors" />
              <div className="text-2xl font-bold font-display text-[#1E3A5F]">{stat.value}</div>
              <div className="text-[10px] font-mono text-[#4A90D9] uppercase mt-1 tracking-wider">{stat.label}</div>
              <div className="text-[8px] font-mono text-[#4A90D9]/50 mt-0.5">{stat.detail}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
