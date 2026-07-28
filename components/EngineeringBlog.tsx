'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, ArrowRight, Clock, Calendar } from 'lucide-react';

const blogPosts = [
  {
    id: 'b1',
    title: 'Clean Architecture in Android: A Blueprint for Scalability',
    excerpt: 'Exploring the principles of Clean Architecture applied to modern Android development with Jetpack Compose. A technical deep-dive into modularization and separation of concerns.',
    date: '2024-12-15',
    readTime: '8 min',
    category: 'Architecture',
    tags: ['Android', 'Clean Architecture', 'Kotlin', 'MVVM'],
  },
  {
    id: 'b2',
    title: 'Optimizing Coroutines: Performance Engineering for Production Apps',
    excerpt: 'Best practices for managing coroutine scopes, error handling, and performance optimization in large-scale Android applications.',
    date: '2024-11-28',
    readTime: '6 min',
    category: 'Kotlin',
    tags: ['Kotlin', 'Coroutines', 'Performance', 'Async'],
  },
  {
    id: 'b3',
    title: 'On-Device Machine Learning: Engineering TFLite for Mobile',
    excerpt: 'A practical guide to integrating TensorFlow Lite models into Android apps for real-time, offline-capable AI features.',
    date: '2024-10-10',
    readTime: '10 min',
    category: 'AI/ML',
    tags: ['TFLite', 'Machine Learning', 'Android', 'AI'],
  },
  {
    id: 'b4',
    title: 'Multi-Module Architecture: Engineering Modular Android Apps',
    excerpt: 'Deep dive into modularization strategies for Android. Benefits, implementation patterns, and Gradle optimization techniques.',
    date: '2024-09-05',
    readTime: '12 min',
    category: 'Architecture',
    tags: ['Android', 'Modularization', 'Gradle', 'Architecture'],
  },
];

export default function EngineeringBlog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="py-20 md:py-32 px-4 relative" ref={ref}>
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
              Section 4 of 7 — Technical Publications
            </span>
            <span className="flex-1 h-px bg-[#4A90D9]/30" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-[#1E3A5F]">
            Engineering{' '}
            <span className="text-[#FF6B35]">Journal</span>
          </h2>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="blueprint-card p-6 rounded-none group cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-3">
                <FileText size={14} className="text-[#FF6B35]" />
                <span className="text-[10px] font-mono text-[#FF6B35] uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="flex-1 h-px bg-[#4A90D9]/20" />
              </div>

              <h3 className="text-lg font-semibold font-display text-[#1E3A5F] mb-2 group-hover:text-[#FF6B35] transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-[#4A90D9]/70 leading-relaxed mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#4A90D9]/50">
                    <Calendar size={10} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#4A90D9]/50">
                    <Clock size={10} />
                    {post.readTime} read
                  </div>
                </div>
                <ArrowRight size={14} className="text-[#FF6B35] opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 border border-[#4A90D9]/15 text-[9px] font-mono text-[#4A90D9]/60">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
