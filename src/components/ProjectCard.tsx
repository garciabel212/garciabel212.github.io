import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import ProjectPreview from '@/components/ProjectPreview';
import usePointerSpotlight from '@/hooks/usePointerSpotlight';
import { motionDurations, motionEase } from '@/components/motion';

interface ProjectCardProps {
  project: Project;
  index?: number;
  variant?: 'featured' | 'grid';
}

export default function ProjectCard({ project, index = 0, variant = 'featured' }: ProjectCardProps) {
  const isFeatured = variant === 'featured';
  const {
    ref: spotlightRef,
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
  } = usePointerSpotlight<HTMLDivElement>();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={spotlightRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: motionDurations.reveal, delay: index * 0.08, ease: motionEase }}
      className={`spotlight-card group relative card overflow-hidden flex flex-col cursor-pointer ${
        isFeatured ? 'lg:flex-row' : ''
      }`}
    >
      {/* Color band / hero visual */}
      <div
        className={`relative overflow-hidden flex-shrink-0 ${
          isFeatured ? 'h-52 lg:h-auto lg:w-2/5' : 'h-44'
        }`}
        style={{ background: `linear-gradient(135deg, ${project.coverColor} 0%, #070909 100%)` }}
      >
        <div className="project-preview-scale absolute inset-0 transition-transform duration-500 ease-smooth group-hover:scale-[1.02]">
          <ProjectPreview project={project} />
        </div>

        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${
              project.status === 'active'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : project.status === 'in-development'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                : 'bg-slate-500/20 text-slate-400 border border-slate-500/30'
            }`}
          >
            <span className="w-1 h-1 rounded-full bg-current" />
            {project.status === 'active' ? 'Active' : project.status === 'in-development' ? 'In Development' : 'Concept'}
          </span>
        </div>

        {/* Year */}
        <div className="absolute bottom-3 right-3 text-xs text-white/40 font-mono">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between gap-4">
        <div>
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                Case Study {String(index + 1).padStart(2, '0')}
              </p>
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: project.accentColor }}>
                {project.tagline}
              </p>
              <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-accent-blue-light transition-colors duration-200">
                {project.title}
              </h3>
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="space-y-4">
          {/* Role */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="text-xs text-slate-500">
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-slate-600">Role</span>
              <span className="text-slate-400 font-medium">{project.role}</span>
            </div>
            <div className="text-xs text-slate-500">
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-slate-600">Status</span>
              <span className="capitalize text-slate-400 font-medium">{project.status.replace('-', ' ')}</span>
            </div>
          </div>

          {/* Tech stack */}
          <div>
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-slate-600">Stack</span>
            <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span key={tech} className="tag-slate text-xs">
                {tech}
              </span>
            ))}
            </div>
          </div>

          {/* CTA */}
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent-blue-light transition-colors group/link"
            aria-label={`View ${project.title} case study`}
          >
            View Case Study
            <ArrowRight
              size={15}
              className="group-hover/link:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
