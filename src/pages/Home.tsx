import Hero from '@/components/hero/Hero';
import FeaturedWorkSection from '@/components/home/FeaturedWorkSection';
import MethodologySection from '@/components/home/MethodologySection';
import CareerTimeline from '@/components/home/CareerTimeline';
import AboutSection from '@/components/home/AboutSection';
import HomeContactCta from '@/components/home/HomeContactCta';
import QuickActionBar from '@/components/mobile/QuickActionBar';

export default function Home() {
  return (
    <main className="relative z-10 overflow-hidden text-[var(--text-primary)]">
      {/* 01. HERO & SIGNAL RAIL — Identity, Value Proposition, Portrait & Credibility Rail */}
      <Hero />

      {/* 02. FEATURED WORK — Dominant Cinematic Panels for Service Map Planner & Scale Garage Studio */}
      <FeaturedWorkSection />

      {/* 03. METHODOLOGY — Interactive 5-Stage Systems-Flow Lifecycle */}
      <MethodologySection />

      {/* 04. CAREER TIMELINE — Unified Vertical Technical Timeline */}
      <CareerTimeline />

      {/* 05. ABOUT — Editorial Visual Break & Engineering Philosophy */}
      <AboutSection />

      {/* 06. CONTACT — Streamlined Conversion Panel */}
      <HomeContactCta />

      {/* MOBILE ONLY — Sticky Quick-Action Bar (slides in after hero scroll) */}
      <QuickActionBar />
    </main>
  );
}
