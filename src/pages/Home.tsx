import Hero from '@/components/hero/Hero';
import PositioningStatement from '@/components/home/PositioningStatement';
import FeaturedProject from '@/components/projects/FeaturedProject';
import SolutionLifecycle from '@/components/lifecycle/SolutionLifecycle';
import ExperienceRail from '@/components/experience/ExperienceRail';
import TechnicalIndex from '@/components/skills/TechnicalIndex';
import HomeContactCta from '@/components/home/HomeContactCta';

export default function Home() {
  return (
    <main className="relative z-10 overflow-hidden text-[var(--text-primary)]">
      {/* 01. HERO — Jose comes first with 3D Systems Core */}
      <Hero />

      {/* 02. POSITIONING & MANIFESTO — Systems Thinking */}
      <PositioningStatement />

      {/* 03. FEATURED PROJECTS — Service Map Planner & Scale Garage Studio */}
      <FeaturedProject />

      {/* 04. METHODOLOGY — Interactive 6-Stage Solution Lifecycle */}
      <SolutionLifecycle />

      {/* 05. EXPERIENCE RAIL — Evolving Technical Journey (2021–2026) */}
      <ExperienceRail />

      {/* 06. TECHNICAL INDEX — Engineering Specification Catalog */}
      <TechnicalIndex />

      {/* 07. FINAL CTA — Dramatic Closing Contact Statement */}
      <HomeContactCta />
    </main>
  );
}
