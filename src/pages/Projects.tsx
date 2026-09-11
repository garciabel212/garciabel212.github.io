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
            title="Work &"
            titleHighlight="Case Studies"
            description="A look at the products I've built, the systems I've implemented, and the customer problems I've solved."
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
