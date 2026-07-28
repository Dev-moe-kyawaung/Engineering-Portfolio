'use client';

import BlueprintGrid from '@/components/BlueprintGrid';
import BlueprintHero from '@/components/BlueprintHero';
import TechnicalAbout from '@/components/TechnicalAbout';
import TechnicalSkills from '@/components/TechnicalSkills';
import TechnicalProjects from '@/components/TechnicalProjects';
import BlueprintNav from '@/components/BlueprintNav';
import BlueprintFooter from '@/components/BlueprintFooter';
import AIArchitectureDiagram from '@/components/AIArchitectureDiagram';
import { useState } from 'react';

export default function EngineeringPortfolio() {
  const [showAIDiagram, setShowAIDiagram] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#F5F0E8]">
      {/* Blueprint Grid Background */}
      <BlueprintGrid />

      {/* Navigation */}
      <BlueprintNav onAIOpen={() => setShowAIDiagram(true)} />

      {/* Sections */}
      <BlueprintHero />
      <TechnicalAbout />
      <TechnicalSkills />
      <TechnicalProjects />

      {/* Additional sections would follow the same pattern */}
      {/* Certificates, Contact, etc. */}

      {/* Footer */}
      <BlueprintFooter />

      {/* AI Architecture Diagram Generator */}
      <AIArchitectureDiagram
        isOpen={showAIDiagram}
        onClose={() => setShowAIDiagram(false)}
      />
    </main>
  );
}
