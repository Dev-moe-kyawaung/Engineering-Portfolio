'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    name: 'Android Engineering',
    skills: [
      { name: 'Kotlin', level: 95 },
      { name: 'Jetpack Compose', level: 92 },
      { name: 'Android SDK', level: 90 },
      { name: 'Material 3', level: 88 },
      { name: 'Gradle/KTS', level: 85 },
    ],
  },
  {
    name: 'Architecture',
    skills: [
      { name: 'Clean Architecture', level: 95 },
      { name: 'MVVM/MVI', level: 93 },
      { name: 'Multi-module', level: 88 },
      { name: 'SOLID Principles', level: 92 },
      { name: 'Design Patterns', level: 90 },
    ],
  },
  {
    name: 'Backend & Cloud',
    skills: [
      { name: 'Firebase', level: 92 },
      { name: 'REST APIs', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'CI/CD', level: 88 },
    ],
  },
  {
    name: 'AI & Machine Learning',
    skills: [
      { name: 'TFLite', level: 82 },
      { name: 'ML Kit', level: 78 },
      { name: 'On-Device ML', level: 80 },
      { name: 'Claude API', level: 85 },
      { name: 'NLP', level: 75 },
    ],
  },
];

export default function TechnicalSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 md:py-32 px-4 relative" ref={ref}>
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
              Section 2 of 7 — Technical Specifications
            </span>
            <span className="flex-1 h-px bg-[#4A90D9]/30" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-[#1E3A5F]">
            Engineering{' '}
            <span className="text-[#FF6B35]">Competencies</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-[#1E3A5F] text-[#F5F0E8]'
                  : 'border border-[#4A90D9]/30 text-[#4A90D9] hover:bg-[#4A90D9]/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skill Bars with Engineering Precision */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="blueprint-card p-8 rounded-none"
        >
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E74C3C]" />
            <span className="text-xs font-mono text-[#4A90D9]">
              SKILL MATRIX — {skillCategories[activeCategory].name}
            </span>
            <span className="flex-1 h-px bg-[#4A90D9]/20" />
            <span className="text-[10px] font-mono text-[#4A90D9]/50">PROFICIENCY SCALE: 0-100%</span>
          </div>

          <div className="space-y-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                    <span className="text-sm font-mono text-[#1E3A5F]">{skill.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#2ECC71]" />
                      <span className="text-[10px] font-mono text-[#2ECC71]">
                        {skill.level >= 90 ? 'EXPERT' : skill.level >= 80 ? 'ADVANCED' : 'INTERMEDIATE'}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#E74C3C]">{skill.level}%</span>
                  </div>
                </div>
                <div className="relative h-4 bg-[#E8E0D0] rounded-none overflow-hidden">
                  {/* Measurement Markers */}
                  <div className="absolute inset-0 flex items-center justify-between px-1">
                    {[0, 25, 50, 75, 100].map((mark) => (
                      <div key={mark} className="flex flex-col items-center">
                        <span className="w-px h-2 bg-[#4A90D9]/20" />
                        <span className="text-[8px] font-mono text-[#4A90D9]/30 -mt-1">{mark}</span>
                      </div>
                    ))}
                  </div>
                  {/* Skill Level Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
                    className="h-full bg-[#1E3A5F] relative"
                  >
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#FF6B35]" />
                  </motion.div>
                </div>
                {/* Dimension Label */}
                <div className="flex justify-between mt-1">
                  <span className="text-[8px] font-mono text-[#4A90D9]/40">0%</span>
                  <span className="text-[8px] font-mono text-[#4A90D9]/40">100%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 blueprint-card p-6 rounded-none"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2ECC71]" />
            <span className="text-xs font-mono text-[#4A90D9]">FULL TECHNOLOGY STACK</span>
            <span className="flex-1 h-px bg-[#4A90D9]/20" />
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Kotlin', 'Java', 'Python', 'JavaScript', 'TypeScript', 'Dart',
              'Jetpack Compose', 'Android SDK', 'Firebase', 'Room DB',
              'MVVM', 'MVI', 'Clean Architecture', 'Multi-module',
              'Git', 'GitHub Actions', 'CI/CD', 'Docker', 'Linux',
              'REST APIs', 'GraphQL', 'Retrofit', 'OkHttp',
              'TFLite', 'ML Kit', 'Claude API', 'Coroutines', 'Flow',
              'Figma', 'Postman', 'Jira', 'Agile/Scrum',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 border border-[#4A90D9]/20 text-xs font-mono
                           text-[#1E3A5F]/70 hover:bg-[#1E3A5F] hover:text-[#F5F0E8] 
                           transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
        }
                  
