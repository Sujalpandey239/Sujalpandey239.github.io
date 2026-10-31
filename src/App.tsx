import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PipelineSimulator } from './components/PipelineSimulator';
import { BentoSkills } from './components/BentoSkills';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { EducationExperience } from './components/EducationExperience';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#0B0C0F] text-[#EDEDED] font-sans selection:bg-[var(--accent)] selection:text-black">
        {/* Subtle Constellation & Particle Mesh Canvas */}
        <ParticleCanvas />

        {/* Global Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero />
          <BentoSkills />
          <PipelineSimulator />
          <ProjectsSection />
          <CertificationsSection />
          <EducationExperience />
          <InteractiveTerminal />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
