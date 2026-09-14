import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import CTA from '@/components/CTA';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <main className="pt-24 pb-0">
      {/* Page header */}
      <section className="section-py pb-0">
        <div className="section-container">
          <SectionHeader
            eyebrow="Portfolio"
            title="Selected"
            titleHighlight="Work"
            description="A combination of professional customer-engineering experience and products I designed and built to solve practical problems."
            className="mb-16"
          />

          {/* Featured projects */}
          <div className="space-y-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
                variant="featured"
              />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
