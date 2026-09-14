import ProjectMetadata from './ProjectMetadata';
import ProjectVisual from './ProjectVisual';

export default function FeaturedProject() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div id="selected-work" className="space-y-24 sm:space-y-36 lg:space-y-48">
      {/* ─── SECTION HEADER / INDEX INTRO ─── */}
      <div className="section-container pt-8 sm:pt-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block mb-2">
              PORTFOLIO ARCHIVE // 2023–2026
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[var(--text-primary)] tracking-tight">
              Selected Systems &amp; Work
            </h2>
          </div>
          <p className="font-mono text-xs text-[var(--text-muted)] max-w-xs sm:text-right">
            Production field platforms, parametric 3D tools, and enterprise architecture.
          </p>
        </div>
      </div>

      {/* ─── PROJECT 01: SERVICE MAP PLANNER (APPLICATION PRESENTATION) ─── */}
      <section className="relative overflow-hidden">
        <span id="projects" className="absolute -top-28" aria-hidden="true" />

        {/* Soft atmospheric ambient glow for application */}
        <div
          className="absolute -top-32 right-1/4 w-[50vw] h-[30vw] rounded-full blur-[140px] pointer-events-none opacity-40 -z-10"
          style={{ background: 'radial-gradient(circle, var(--spotlight-color), transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Metadata (Desktop 40%) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ProjectMetadata
                number="01"
                title="Service Map Planner"
                subtitle="Internal field-service operations platform"
                description="Engineered to centralize institutional library accounts, scanning hardware profiles, preventive maintenance schedules, and technician field itineraries for Image Access / DLSG deployments nationwide."
                role="Product Design & Frontend Development"
                stack={['Next.js', 'React', 'TypeScript', 'Firebase', 'Google Maps']}
                caseStudyHref="/projects/service-map-planner"
              />
            </div>

            {/* Application Visual (Desktop 60% with Bleed) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <ProjectVisual
                variant="application"
                imageSrc={`${baseUrl}images/service_map_tablet.jpg`}
                altText="Service Map Planner operations management interface on tablet"
                caption="Institutional asset directory & technician routing matrix"
                badge="SERVICE MAP PLANNER // v2.4"
                stats={[
                  { label: 'Units', value: '450+' },
                  { label: 'SLA', value: '99.8%' },
                ]}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ─── PROJECT 02: SCALE GARAGE STUDIO (DIMENSIONAL PRODUCT PRESENTATION) ─── */}
      <section className="relative overflow-hidden pt-6">

        {/* Subtle warm pedestal backdrop aura */}
        <div
          className="absolute -top-24 left-1/4 w-[45vw] h-[28vw] rounded-full blur-[130px] pointer-events-none opacity-30 -z-10"
          style={{ background: 'radial-gradient(circle, var(--spotlight-color), transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Visual First on Desktop for Distinct Asymmetric Spatial Composition */}
            <div className="lg:col-span-7 order-1">
              <ProjectVisual
                variant="product"
                imageSrc={`${baseUrl}images/hero_garage_diorama.jpg`}
                altText="Scale Garage Studio 3D miniature garage configurator model"
                caption="Parametric bay diorama & modular accessory configurator"
                badge="SCALE GARAGE // 3D R3F"
                stats={[
                  { label: 'Scale', value: '1:18' },
                  { label: 'GLTF', value: 'Zero-Lag' },
                ]}
              />
            </div>

            {/* Metadata on Right */}
            <div className="lg:col-span-5 order-2">
              <ProjectMetadata
                number="02"
                headline="DESIGN IT. CONFIGURE IT. BUILD IT."
                title="Scale Garage Studio"
                subtitle="Browser-based 1:18 parametric garage configurator"
                description="An interactive browser-based 3D configurator connecting custom diorama architecture, modular physical accessories, real-time lighting previews, and production-ready manufacturing exports."
                role="Product Design & 3D Frontend Engineering"
                stack={['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'WebGL']}
                caseStudyHref="/projects/scale-garage-studio"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
