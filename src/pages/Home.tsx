import Hero from '@/components/hero/Hero';
import ServiceOpsSection from '@/components/home/ServiceOpsSection';
import GarageSection from '@/components/home/GarageSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import AboutSection from '@/components/home/AboutSection';
import HomeContactCta from '@/components/home/HomeContactCta';

export default function Home() {
  return (
    <main className="relative z-10 overflow-hidden text-[var(--text-primary)]">
      {/* 01. HERO — Jose comes first with interactive project showcase */}
      <Hero />

      {/* 02. CASE STUDY 01 — Service Operations & Asset Intelligence */}
      <ServiceOpsSection />

      {/* 03. CASE STUDY 02 — Scale Garage Studio 3D Configurator */}
      <GarageSection />

      {/* 04. EXPERIENCE & METHODOLOGY — Solutions Lifecycle & Career Track */}
      <ExperienceSection />

      {/* 05. ABOUT — Personal Background, Philosophy & Qualifications */}
      <AboutSection />

      {/* 06. CONTACT CTA — Direct Inquiry, LinkedIn & Résumé */}
      <HomeContactCta />
    </main>
  );
}
