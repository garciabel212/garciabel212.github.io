import { motion } from 'framer-motion';
import { Building2, CircleCheck, MapPin, ServerCog, Wrench } from 'lucide-react';
import type { Project } from '@/data/projects';
import { motionDurations, motionEase } from '@/components/motion';

interface ProjectPreviewProps {
  project: Project;
  variant?: 'card' | 'hero';
}

function MapPlannerPreview() {
  return (
    <div className="absolute inset-[11%] overflow-hidden rounded-xl border border-white/10 bg-[#0b1322]/90 shadow-2xl">
      <div className="flex h-8 items-center gap-1.5 border-b border-white/[0.07] px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
        <span className="h-1.5 w-12 rounded-full bg-white/10" />
      </div>
      <div className="flex h-[calc(100%_-_2rem)]">
        <div className="hidden w-[30%] border-r border-white/[0.06] p-2 sm:block">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="mb-2 flex items-center gap-2 rounded-md bg-white/[0.035] p-2">
              <Building2 size={9} className="text-accent-blue-light" />
              <span className="h-1 w-10 rounded bg-white/10" />
            </div>
          ))}
        </div>
        <div className="preview-map-grid relative flex-1">
          {[
            ['24%', '28%'],
            ['66%', '22%'],
            ['46%', '58%'],
            ['75%', '70%'],
            ['18%', '76%'],
          ].map(([left, top], index) => (
            <MapPin
              key={`${left}-${top}`}
              size={index === 2 ? 17 : 13}
              className={index === 2 ? 'absolute text-accent-cyan' : 'absolute text-accent-blue-light/70'}
              style={{ left, top }}
              fill="currentColor"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function GaragePreview() {
  return (
    <div className="absolute inset-[9%] overflow-hidden rounded-xl border border-cyan-300/10 bg-[#061610]/90 shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(6,182,212,0.12),transparent_45%)]" />
      <div className="garage-scene absolute inset-x-[15%] bottom-[14%] top-[18%]">
        <div className="garage-back-wall absolute inset-x-[8%] bottom-[16%] top-0 border border-cyan-200/15 bg-gradient-to-b from-slate-700/35 to-slate-900/60" />
        <div className="absolute inset-x-[2%] bottom-0 h-[30%] origin-bottom -skew-x-[20deg] border border-cyan-200/10 bg-slate-800/55" />
        <div className="absolute bottom-[17%] left-[14%] h-[54%] w-px bg-cyan-200/25" />
        <div className="absolute bottom-[17%] right-[14%] h-[54%] w-px bg-cyan-200/25" />
        <div className="absolute bottom-[20%] left-1/2 h-[22%] w-[44%] -translate-x-1/2 rounded-t-[40%] border border-cyan-200/25 bg-slate-950/80 shadow-[0_0_25px_rgba(6,182,212,0.1)]" />
      </div>
      <div className="absolute right-2.5 top-2.5 rounded-md border border-white/[0.07] bg-black/20 px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-cyan-200/60">
        3D Preview
      </div>
    </div>
  );
}

function DeploymentPreview() {
  const nodes = [
    { icon: Building2, label: 'Discovery' },
    { icon: ServerCog, label: 'Deploy' },
    { icon: Wrench, label: 'Support' },
    { icon: CircleCheck, label: 'Optimize' },
  ];

  return (
    <div className="absolute inset-[10%] flex items-center justify-center overflow-hidden rounded-xl border border-violet-300/10 bg-[#100b20]/90 px-5 shadow-2xl">
      <div className="absolute left-[14%] right-[14%] top-1/2 h-px bg-gradient-to-r from-violet-400/10 via-violet-300/45 to-cyan-300/20" />
      <div className="relative flex w-full items-center justify-between">
        {nodes.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-300/20 bg-violet-400/10 text-violet-200">
              <Icon size={13} />
            </span>
            <span className="hidden font-mono text-[8px] uppercase tracking-wider text-slate-500 sm:block">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectPreview({ project, variant = 'card' }: ProjectPreviewProps) {
  return (
    <motion.div
      layoutId={`project-preview-${project.slug}`}
      transition={{ duration: motionDurations.page, ease: motionEase }}
      className={`project-preview relative overflow-hidden ${variant === 'hero' ? 'h-64 lg:h-80' : 'h-full min-h-52'}`}
      style={{ background: `linear-gradient(135deg, ${project.coverColor} 0%, #0A0F1E 100%)` }}
      role={variant === 'hero' ? 'img' : undefined}
      aria-label={variant === 'hero' ? `${project.title} interface preview` : undefined}
      aria-hidden={variant === 'card' ? true : undefined}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: `radial-gradient(circle at 55% 45%, ${project.accentColor}30, transparent 62%)` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:24px_24px]" />
      {project.slug === 'service-map-planner' && <MapPlannerPreview />}
      {project.slug === 'scale-garage-studio' && <GaragePreview />}
      {project.slug === 'enterprise-deployment' && <DeploymentPreview />}
    </motion.div>
  );
}
