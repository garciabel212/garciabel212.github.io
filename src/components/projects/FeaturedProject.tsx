import ProjectMetadata from './ProjectMetadata';
import ProjectVisual from './ProjectVisual';

export default function FeaturedProject() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div id="selected-work" className="space-y-32 lg:space-y-44">
      {/* ─── PROJECT 01: SERVICE MAP PLANNER ─── */}
      <section className="section-py relative border-t border-[var(--border-subtle)] overflow-hidden">
        <span id="projects" className="absolute -top-24" aria-hidden="true" />
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Metadata (Desktop 38%) */}
            <div className="lg:col-span-5">
              <ProjectMetadata
                number="01"
                title="Service Map Planner"
                subtitle="Internal field-service operations platform"
                description="Engineered to centralize institutional library accounts, scanning hardware profiles, preventive maintenance schedules, and technician field itineraries for Image Access / DLSG deployments nationwide."
                role="Product Design &amp; Frontend Development"
                stack={['Next.js', 'React', 'TypeScript', 'Firebase', 'Google Maps']}
                caseStudyHref="/projects/service-map-planner"
              />
            </div>

            {/* Visual (Desktop 62%) */}
            <div className="lg:col-span-7">
              <ProjectVisual
                imageSrc={`${baseUrl}images/service_map_tablet.jpg`}
                altText="Service Map Planner tablet operations interface"
                caption="Tablet viewport &middot; Real-time institutional asset map"
                badge="SERVICE MAP PLANNER // v2.4"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ─── PROJECT 02: SCALE GARAGE STUDIO ─── */}
      <section className="section-py relative border-t border-[var(--border-subtle)] overflow-hidden">
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Visual First on Desktop for Distinct Asymmetric Spatial Composition */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <ProjectVisual
                imageSrc={`${baseUrl}images/hero_garage_diorama.jpg`}
                altText="Scale Garage Studio 3D miniature garage configurator"
                caption="Interactive 3D viewport &middot; Procedural bay &amp; hoist configuration"
                badge="SCALE GARAGE // 3D CONFIG"
                variant="extended"
              />
            </div>

            {/* Metadata on Right */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <ProjectMetadata
                number="02"
                headline="DESIGN IT. CONFIGURE IT. BUILD IT."
                title="Scale Garage Studio"
                subtitle="Browser-based 1:18 parametric garage configurator"
                description="An interactive browser-based 3D configurator connecting custom diorama architecture, modular physical accessories, real-time lighting previews, and production-ready manufacturing exports."
                role="Product Design &amp; 3D Frontend Engineering"
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
