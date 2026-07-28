// config/engineering.config.ts
// Engineering Blueprint Portfolio Configuration

export const ENGINEERING_CONFIG = {
  name: 'Moe Kyaw Aung',
  title: 'Senior Android Engineer',
  tagline: 'Code with precision. Build with purpose. Measure everything.',
  version: '1.0.0',
  revision: 'REV 1.0',
  sheets: 7,
  
  blueprint: {
    gridSize: 20,
    majorGridSize: 100,
    primaryColor: '#1E3A5F',
    secondaryColor: '#4A90D9',
    accentColor: '#FF6B35',
    measurementColor: '#E74C3C',
    paperColor: '#F5F0E8',
  },

  engineering: {
    certifications: '82+',
    technologies: '30+',
    projects: '15+',
    linesOfCode: '500K+',
    gitCommits: '2,500+',
  },

  contact: {
    primaryEmail: 'moekyawaung@programmer.net',
    location: 'Tachileik, Myanmar ↔ Bangkok, Thailand',
    responseTime: '< 24 hours',
  },

  social: {
    github: 'https://github.com/Dev-moe-kyawaung',
    linkedin: 'https://www.linkedin.com/in/moe-kyaw-aung-2653093a1',
    youtube: 'https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG',
    bluesky: 'https://bsky.app/profile/moekyawaung96.bsky.social',
  },

  sections: [
    { number: '01', name: 'Home', href: '#home' },
    { number: '02', name: 'Profile', href: '#about' },
    { number: '03', name: 'Skills', href: '#skills' },
    { number: '04', name: 'Projects', href: '#projects' },
    { number: '05', name: 'Certifications', href: '#certificates' },
    { number: '06', name: 'Journal', href: '#blog' },
    { number: '07', name: 'Contact', href: '#contact' },
  ],
} as const;
