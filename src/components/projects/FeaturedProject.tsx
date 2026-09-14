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
              02 // SELECTED WORK
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[var(--text-primary)] tracking-tight">
              Professional work and products I built
            </h2>
          </div>
          <p className="font-mono text-xs text-[var(--text-muted)] max-w-xs sm:text-right">
            Three examples of how I connect customer needs, systems, product thinking, and execution.
          </p>
        </div>
      </div>

      {/* ─── PROJECT 01: ENTERPRISE TECHNICAL DEPLOYMENT ─── */}
      <section className="relative overflow-hidden">
        <span id="projects" className="absolute -top-28" aria-hidden="true" />

        {/* Atmospheric ambient glow for enterprise deployment */}
        <div
          className="absolute -top-32 left-1/4 w-[50vw] h-[30vw] rounded-full blur-[140px] pointer-events-none opacity-35 -z-10"
          style={{ background: 'radial-gradient(circle, #8B5CF6, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Metadata (Desktop 45%) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ProjectMetadata
                number="01"
                title="Enterprise Technical Deployment"
                subtitle="Customer Engineering & Solutions Delivery"
                description="A professional case study documenting my work across technical discovery, product demonstrations, hardware and software implementation, customer training, troubleshooting, and long-term technical support."
                role="Service Engineer / Sales Engineering Support"
                statusLabel="Professional Experience"
                stack={['Windows', 'Networking', 'Hardware Integration', 'Remote Diagnostics', 'Technical Training']}
                caseStudyHref="/projects/enterprise-deployment"
              />
            </div>

            {/* Visual (Desktop 55%) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <ProjectVisual
                variant="deployment"
                altText="Enterprise technical deployment architecture & systems overview"
                caption="Customer Engineering & Nationwide Implementation"
                badge="DLSG / IMAGE ACCESS // FIELD SYSTEMS"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECT 02: SERVICE MAP PLANNER ─── */}
      <section className="relative overflow-hidden pt-6">
        {/* Soft ambient atmospheric glow for application */}
        <div
          className="absolute -top-24 right-1/4 w-[50vw] h-[30vw] rounded-full blur-[140px] pointer-events-none opacity-35 -z-10"
          style={{ background: 'radial-gradient(circle, var(--spotlight-color), transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Application Visual First on Desktop (Asymmetrical composition) */}
            <div className="lg:col-span-7 order-1">
              <ProjectVisual
                variant="application"
                imageSrc={`${baseUrl}images/service_map_tablet.jpg`}
                altText="Service Map Planner operations management interface on tablet"
                caption="Institutional account directory & technician routing view"
                badge="SERVICE MAP PLANNER // INTERNAL OPS"
              />
            </div>

            {/* Metadata on Right */}
            <div className="lg:col-span-5 order-2">
              <ProjectMetadata
                number="02"
                title="Service Map Planner"
                subtitle="Internal Field-Service Operations Platform"
                description="An internal operations platform I designed and built to centralize institution records, scanner inventory, software versions, maintenance status, service history, travel planning, and data-quality flags."
                role="Product Design · Workflow Architecture · Frontend Development"
                statusLabel="Active Internal Tool"
                stack={['Next.js', 'React', 'TypeScript', 'Firebase', 'Firestore', 'Google Maps']}
                caseStudyHref="/projects/service-map-planner"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECT 03: SCALE GARAGE STUDIO ─── */}
      <section className="relative overflow-hidden pt-6">
        {/* Subtle pedestal backdrop aura */}
        <div
          className="absolute -top-24 left-1/4 w-[45vw] h-[28vw] rounded-full blur-[130px] pointer-events-none opacity-30 -z-10"
          style={{ background: 'radial-gradient(circle, #06B6D4, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Metadata (Left) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ProjectMetadata
                number="03"
                title="Scale Garage Studio"
                subtitle="Client Product · 3D Configurator · In Development"
                description="A browser-based 3D configurator that allows customers to design custom scale-model garages before manufacturing. The product connects dimensions, materials, lighting, architectural styles, and production preparation in one interactive experience."
                role="Product Design · 3D Frontend Engineering · Interaction Design"
                statusLabel="In Development"
                stack={['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'WebGL', 'STL']}
                caseStudyHref="/projects/scale-garage-studio"
              />
            </div>

            {/* Visual (Right) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <ProjectVisual
                variant="product"
                imageSrc={`${baseUrl}images/hero_garage_diorama.jpg`}
                altText="Scale Garage Studio 3D miniature garage configurator model"
                caption="Parametric bay diorama & modular accessory configurator"
                badge="SCALE GARAGE // 3D R3F"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
