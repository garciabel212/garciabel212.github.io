import { motion, useReducedMotion } from 'framer-motion';
import { Database, Map, Calendar, Wrench, BarChart3, Bell } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import TechStack from '@/components/TechStack';
import ServiceMapArchitecture from '@/components/ServiceMapArchitecture';
import ScreenshotGallery from '@/components/ScreenshotGallery';
import CTA from '@/components/CTA';
import ProjectPreview from '@/components/ProjectPreview';
import { ProductFrame } from '@/components/ProductFrame';
import { projects } from '@/data/projects';
import { motionDurations, motionEase } from '@/components/motion';
import HeroReveal from '@/components/projects/HeroReveal';

const project = projects.find((item) => item.slug === 'service-map-planner');

const techStack = [
  { name: 'Next.js', category: 'frontend' as const },
  { name: 'React', category: 'frontend' as const },
  { name: 'TypeScript', category: 'frontend' as const },
  { name: 'Firebase', category: 'backend' as const },
  { name: 'Firestore', category: 'backend' as const },
  { name: 'Google Maps', category: 'cloud' as const },
];

const features = [
  {
    icon: Database,
    color: '#3B82F6',
    title: 'Institution Database',
    desc: 'Centralizes customer accounts, locations, contacts, operational notes, and hardware profiles in a single queryable registry.',
  },
  {
    icon: Wrench,
    color: '#8B5CF6',
    title: 'Equipment and Maintenance Tracking',
    desc: 'Tracks scanner inventory, active software versions, preventive maintenance status, and hardware replacement cycles.',
  },
  {
    icon: Map,
    color: '#06B6D4',
    title: 'Geographic Map View',
    desc: 'Map-based visualization of institutional customer locations with status indicators for rapid situational awareness.',
  },
  {
    icon: Calendar,
    color: '#10B981',
    title: 'Service Visit History',
    desc: 'Structured visit records capturing work performed, issues identified, technician notes, and next follow-up actions.',
  },
  {
    icon: BarChart3,
    color: '#F59E0B',
    title: 'Travel and Work Planning',
    desc: 'Consolidates multi-site routing and trip context to streamline nationwide field service logistics and site visits.',
  },
  {
    icon: Bell,
    color: '#EF4444',
    title: 'Data-Quality Flags',
    desc: 'Automated flags identifying missing customer fields, unlinked hardware, or overdue service intervals.',
  },
];

const whatChangedItems = [
  'A single operational view of institutions and deployed equipment',
  'Faster access to service history and customer context',
  'Clearer visibility into maintenance and replacement planning',
  'Structured records for follow-up work',
  'Visible data-quality issues that can be corrected',
];

const futureDevelopmentItems = [
  'Calendar and travel planning',
  'Automated maintenance notifications',
  'Mobile field workflow',
  'Service analytics and reporting',
];

export default function ServiceMapPlanner() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="pt-20">
      {/* ── Hero — Codrops scroll-expand reveal ── */}
      <HeroReveal>
        {/* Oversized Product Frame — the expanding visual */}
        <ProductFrame
          title="Service Map Planner"
          url="app.internal/servicemap"
          glowColor="blue"
          aspectRatio="aspect-[16/10]"
          badges={[
            { text: '● Multi-Region Account Mapping', position: 'top-left', variant: 'accent', delay: 0.2 },
            { text: '◎ Maintenance Tracking', position: 'bottom-right', variant: 'cyan', delay: 0.4 },
            { text: '✓ Centralized Operational Records', position: 'mid-right', variant: 'emerald', delay: 0.6 },
          ]}
        >
          <div className="relative w-full h-full bg-[#0c1010] flex flex-col font-mono select-none">
            {/* Dashboard Toolbar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.08] bg-[#111616] text-xs">
              <div className="flex items-center gap-3">
                <span className="text-white font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  INSTITUTIONAL SERVICE MAP
                </span>
                <span className="text-slate-500 hidden sm:inline">|</span>
                <span className="text-slate-400 hidden sm:inline">Operational Overview</span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <span className="px-2 py-0.5 rounded bg-white/[0.05] text-slate-200 border border-white/10">
                  MAP VIEW
                </span>
                <span className="px-2 py-0.5 rounded bg-white/[0.02] text-slate-400">
                  EQUIPMENT
                </span>
              </div>
            </div>

            {/* Map stage */}
            <div className="relative flex-1 bg-[#070909] overflow-hidden">
              <svg className="absolute inset-0 w-full h-full opacity-20">
                <defs>
                  <pattern id="smpGrid" width="28" height="28" patternUnits="userSpaceOnUse">
                    <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#2563EB" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#smpGrid)" />
              </svg>

              {/* Route Paths */}
              <svg className="absolute inset-0 w-full h-full">
                <path
                  d="M 180 120 Q 320 180 480 240 T 720 280"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  className="opacity-70"
                />
                <path
                  d="M 320 180 Q 420 320 480 390"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  className="opacity-60"
                />

                {/* Nodes */}
                {[
                  { x: 180, y: 120, label: 'University Library Center', status: 'active' },
                  { x: 320, y: 180, label: 'Regional Research Archives', status: 'active' },
                  { x: 480, y: 240, label: 'Metropolitan Campus', status: 'expiring' },
                  { x: 720, y: 280, label: 'State University Repository', status: 'active' },
                  { x: 480, y: 390, label: 'Public Library Consortium', status: 'active' },
                  { x: 260, y: 290, label: 'Special Collections Center', status: 'warning' },
                ].map((node, i) => (
                  <g key={i}>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={node.status === 'expiring' ? 7 : 6}
                      fill={node.status === 'expiring' ? '#F59E0B' : '#3B82F6'}
                      className="transition-all hover:scale-125"
                    />
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={12}
                      fill="none"
                      stroke={node.status === 'expiring' ? 'rgba(245,158,11,0.4)' : 'rgba(59,130,246,0.4)'}
                      strokeWidth="1"
                    />
                    <text
                      x={node.x + 12}
                      y={node.y + 4}
                      fill="#E2E8F0"
                      fontSize="11"
                      fontFamily="'JetBrains Mono', monospace"
                    >
                      {node.label}
                    </text>
                  </g>
                ))}
              </svg>

              {/* Floating selected details card */}
              <div className="absolute top-4 right-4 bg-[#111616] p-3.5 rounded-xl border border-white/10 max-w-xs text-xs shadow-float">
                <div className="text-slate-400 text-[10px] uppercase tracking-wider">SELECTED RECORD</div>
                <div className="text-white font-bold mt-0.5">State University Repository</div>
                <div className="mt-2 text-slate-300 text-[11px] space-y-1">
                  <div>Hardware: <strong>Specialized Scanning Systems</strong></div>
                  <div>Service Status: <span className="text-emerald-400 font-semibold">Operational</span></div>
                  <div>Routine Check: <span className="text-slate-400">Preventive Inspection Verified</span></div>
                </div>
              </div>

              {/* Bottom metrics banner */}
              <div className="absolute bottom-4 left-4 glass-dark px-4 py-2 rounded-lg border border-white/[0.08] flex items-center gap-4 text-[11px]">
                <div>
                  <span className="text-slate-400">System: </span>
                  <span className="text-emerald-400 font-bold">Operational</span>
                </div>
                <div>
                  <span className="text-slate-400">Maintenance: </span>
                  <span className="text-amber-400 font-bold">Scheduled</span>
                </div>
                <div className="hidden sm:block">
                  <span className="text-slate-400">Database: </span>
                  <span className="text-accent-blue-light font-bold">Firestore Realtime</span>
                </div>
              </div>
            </div>
          </div>
        </ProductFrame>
      </HeroReveal>

      {/* Hero Meta Banner */}
      <section className="py-12 border-b border-[var(--border-subtle)]">
        <div className="section-container">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block mb-2">
            INTERNAL OPERATIONS PLATFORM
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white font-display tracking-tight mb-4">
            Service Map<br />Planner
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-6">
            I designed and built Service Map Planner to give a field-service team one operational view of institutions, equipment, maintenance, service history, travel planning, and follow-up work.
          </p>
          <div className="flex flex-wrap gap-8 text-sm pt-4 border-t border-white/10 font-mono">
            <div>
              <span className="text-slate-500 block text-xs tracking-widest uppercase mb-1">Role</span>
              <span className="text-slate-200">Product Design · Workflow Architecture · Frontend Development</span>
            </div>
            <div>
              <span className="text-slate-500 block text-xs tracking-widest uppercase mb-1">Timeline</span>
              <span className="text-slate-200">2023 – Present</span>
            </div>
            <div>
              <span className="text-slate-500 block text-xs tracking-widest uppercase mb-1">Context</span>
              <span className="text-[var(--accent)]">DLSG / Image Access Internal Tool</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-py bg-navy-800/40">
        <div className="section-container">
          <div className="max-w-3xl">
            <SectionHeader eyebrow="The Problem" title="Why I built it" className="mb-8" />
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Customer information, equipment records, maintenance history, service notes, and travel planning were spread across different workflows. Finding the right context for a service call often required checking multiple sources.
              </p>
              <p>
                The platform was designed to organize that information around the way service work actually happens: institution, equipment, maintenance status, service history, and next action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-py">
        <div className="section-container">
          <SectionHeader eyebrow="Technology" title="Built with" className="mb-8" />
          <TechStack technologies={techStack} size="md" />
        </div>
      </section>

      {/* Architecture */}
      <section className="section-py bg-navy-800/40" id="architecture">
        <div className="section-container">
          <SectionHeader
            eyebrow="Architecture"
            title="System design"
            description="The application connects structured institutional records with equipment profiles, maintenance status, map-based planning, service history, user access, and operational reporting."
            className="mb-10"
          />
          <ServiceMapArchitecture />
        </div>
      </section>

      {/* Features */}
      <section className="section-py">
        <div className="section-container">
          <SectionHeader
            eyebrow="Core Features"
            title="Platform Capabilities"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card p-6"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: `${f.color}15`, border: `1px solid ${f.color}25` }}
                  >
                    <Icon size={18} style={{ color: f.color }} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Changed */}
      <section className="section-py bg-navy-800/40">
        <div className="section-container max-w-3xl">
          <SectionHeader eyebrow="Impact & Outcomes" title="What changed" className="mb-8" />
          <div className="space-y-4">
            {whatChangedItems.map((item, idx) => (
              <motion.div
                key={item}
                initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-center gap-3.5"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
                <span className="text-slate-200 text-sm sm:text-base font-medium">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl border border-white/5 bg-white/[0.01] text-xs font-mono text-slate-500">
            Representative interface using anonymized data. Customer names and sensitive operational information are not shown.
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="section-py">
        <div className="section-container max-w-3xl">
          <SectionHeader eyebrow="Reflection" title="Operational Perspective" className="mb-8" />
          <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-medium)] text-left">
            <p className="text-base sm:text-lg text-[var(--text-primary)] font-medium leading-relaxed">
              Building an internal tool for real operational work reinforced the importance of information architecture, data integrity, access control, and designing around the user’s actual workflow—not just the underlying technology.
            </p>
          </div>
        </div>
      </section>

      {/* Future Development */}
      <section className="section-py bg-navy-800/40">
        <div className="section-container max-w-3xl">
          <SectionHeader eyebrow="Roadmap" title="Future Development" className="mb-8" />
          <ul className="space-y-3">
            {futureDevelopmentItems.map((item) => (
              <li key={item} className="flex gap-3 text-slate-300 text-sm sm:text-base">
                <span className="text-[var(--accent)] flex-shrink-0 mt-0.5 font-bold">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        title="Want to talk through the build?"
        description="Happy to walk through the workflow architecture, operational decisions, or how this platform supports field service teams."
      />
    </main>
  );
}

