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
  { name: 'Firebase Auth', category: 'backend' as const },
  { name: 'Google Maps API', category: 'cloud' as const },
  { name: 'JavaScript', category: 'frontend' as const },
  { name: 'Tailwind CSS', category: 'frontend' as const },
];

const features = [
  {
    icon: Database,
    color: '#3B82F6',
    title: 'Institution Database',
    desc: 'Centralized records for each customer institution — contacts, locations, notes, equipment, and service flags in one place.',
  },
  {
    icon: Map,
    color: '#06B6D4',
    title: 'Geographic Map View',
    desc: 'Map-based visualization of all customer locations, color-coded by maintenance status for rapid situational awareness.',
  },
  {
    icon: Wrench,
    color: '#8B5CF6',
    title: 'Equipment & Maintenance Tracking',
    desc: 'Full equipment registry per institution — scanner models, software versions, maintenance status (Active / Expiring / Expired / EOL / Unknown), and replacement planning.',
  },
  {
    icon: Calendar,
    color: '#10B981',
    title: 'Service Visit Tickets',
    desc: 'Structured service visit records capturing work performed, issues identified, and next actions — building a complete service history per customer.',
  },
  {
    icon: BarChart3,
    color: '#F59E0B',
    title: 'Product Configuration Reporting',
    desc: 'Reporting on product configurations across the customer base — supporting operational decisions and proactive outreach.',
  },
  {
    icon: Bell,
    color: '#EF4444',
    title: 'Data Quality Alerts',
    desc: 'Automated flags for missing or inconsistent data — ensuring the customer database stays accurate and actionable.',
  },
];

const screenshots = [
  { alt: 'Institution Map View', caption: 'Geographic dashboard — customer locations by maintenance status', todo: true },
  { alt: 'Institution Detail View', caption: 'Full institution profile with equipment, contacts, and history', todo: true },
  { alt: 'Service Ticket View', caption: 'Service visit record with notes, equipment status, and history', todo: true },
  { alt: 'Equipment Registry', caption: 'Fleet view with maintenance status and replacement flags', todo: true },
];

const challenges = [
  {
    challenge: 'No centralized system for field-service data',
    solution: 'Designed a Firestore data model that links institutions, contacts, equipment, and service history — allowing cross-referenced queries for any operational need.',
  },
  {
    challenge: 'Maintenance status was invisible without manually checking each record',
    solution: 'Built a geographic map view with color-coded status overlays — letting the team immediately see which customers need attention without navigating individual records.',
  },
  {
    challenge: 'Service history lived in email threads and manual logs',
    solution: 'Created structured service ticket records that persist permanently and are linked to the institution — making historical context immediately accessible.',
  },
];

export default function ServiceMapPlanner() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="pt-20">
      {/* ── Hero — Codrops scroll-expand reveal ── */}
      <HeroReveal>
        {/* Oversized Product Frame — the expanding visual */}
        <ProductFrame
          title="Enterprise Service Map Operations Dashboard"
          url="service-map-planner.dlsg.internal"
          glowColor="blue"
          aspectRatio="aspect-[16/10]"
          badges={[
            { text: '● Multi-Region Account Mapping', position: 'top-left', variant: 'accent', delay: 0.2 },
            { text: '◎ Maintenance Scheduling', position: 'bottom-right', variant: 'cyan', delay: 0.4 },
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
                <span className="text-slate-400 hidden sm:inline">Regional Accounts Overview</span>
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
                  { x: 180, y: 120, label: 'University Library Center', status: 'active', units: 4 },
                  { x: 320, y: 180, label: 'Regional Research Archives', status: 'active', units: 6 },
                  { x: 480, y: 240, label: 'Metropolitan Campus', status: 'expiring', units: 3 },
                  { x: 720, y: 280, label: 'State University Repository', status: 'active', units: 8 },
                  { x: 480, y: 390, label: 'Public Library Consortium', status: 'active', units: 2 },
                  { x: 260, y: 290, label: 'Special Collections Center', status: 'warning', units: 5 },
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
                      {node.label} ({node.units}u)
                    </text>
                  </g>
                ))}
              </svg>

              {/* Floating selected details card */}
              <div className="absolute top-4 right-4 bg-[#111616] p-3.5 rounded-xl border border-white/10 max-w-xs text-xs shadow-float">
                <div className="text-slate-400 text-[10px] uppercase tracking-wider">SELECTED RECORD</div>
                <div className="text-white font-bold mt-0.5">State University Repository</div>
                <div className="mt-2 text-slate-300 text-[11px] space-y-1">
                  <div>Hardware: <strong>8x Overhead Scanning Systems</strong></div>
                  <div>Service Status: <span className="text-emerald-400 font-semibold">Active Maintenance</span></div>
                  <div>Routine Check: <span className="text-slate-400">Preventive Inspection Verified</span></div>
                </div>
              </div>

              {/* Bottom metrics banner */}
              <div className="absolute bottom-4 left-4 glass-dark px-4 py-2 rounded-lg border border-white/[0.08] flex items-center gap-4 text-[11px]">
                <div>
                  <span className="text-slate-400">Status: </span>
                  <span className="text-emerald-400 font-bold">128 Up to Date</span>
                </div>
                <div>
                  <span className="text-slate-400">Expiring: </span>
                  <span className="text-amber-400 font-bold">21 Due for PM</span>
                </div>
                <div className="hidden sm:block">
                  <span className="text-slate-400">Sync: </span>
                  <span className="text-accent-blue-light font-bold">Firebase Realtime</span>
                </div>
              </div>
            </div>
          </div>
        </ProductFrame>
      </HeroReveal>

      {/* Problem */}
      <section className="section-py bg-navy-800/40">
        <div className="section-container">
          <div className="max-w-3xl">
            <SectionHeader eyebrow="The Problem" title="Why I built it" className="mb-8" />
            <div className="space-y-4 text-slate-400 text-base leading-relaxed">
              <p>
                As the team servicing enterprise customers across institutions nationwide, we were managing
                customer information, equipment records, maintenance history, and service logistics across
                fragmented systems — spreadsheets, email threads, and siloed notes. Finding the status of
                a customer's equipment, their service history, or a contact's information took far too long.
              </p>
              <p>
                When a service call came in, technicians had no fast way to see what equipment was installed,
                what software version it was running, or what issues had been reported previously. Maintenance
                schedules weren't visible without manually cross-referencing records. Travel planning was disconnected from
                customer locations.
              </p>
              <p>
                I designed and built Service Map Planner to solve this — a purpose-built operations platform
                that centralizes all of this information into a single, accessible system.
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
          <SectionHeader eyebrow="Architecture" title="System Design" className="mb-10" />
          <ServiceMapArchitecture />
        </div>
      </section>

      {/* Features */}
      <section className="section-py">
        <div className="section-container">
          <SectionHeader
            eyebrow="Core Features"
            title="What the platform"
            titleHighlight="does"
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

      {/* Screenshots */}
      <section className="section-py bg-navy-800/40">
        <div className="section-container">
          <SectionHeader
            eyebrow="Screenshots"
            title="Platform Views"
            description="Screenshots will be added once the sensitive customer data has been properly redacted."
            className="mb-10"
          />
          <ScreenshotGallery screenshots={screenshots} columns={2} />
        </div>
      </section>

      {/* Challenges */}
      <section className="section-py">
        <div className="section-container">
          <SectionHeader eyebrow="Engineering" title="Challenges Solved" className="mb-10" />
          <div className="space-y-6 max-w-3xl">
            {challenges.map((c, i) => (
              <motion.div
                key={i}
                initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6 border-l-2 border-accent-blue"
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">Challenge</p>
                <p className="text-white font-medium mb-4">{c.challenge}</p>
                <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-2">Solution</p>
                <p className="text-slate-400 text-sm leading-relaxed">{c.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Learned */}
      <section className="section-py bg-navy-800/40">
        <div className="section-container">
          <div className="max-w-3xl">
            <SectionHeader eyebrow="Reflection" title="What I Learned" className="mb-8" />
            <div className="space-y-4 text-slate-400 text-base leading-relaxed">
              <p>
                Building an internal tool that people actually depend on daily is a different discipline
                from building a portfolio project. The data model had to be carefully designed to support
                real operational queries. The UI had to be fast and reliable. And because the system lives
                alongside real customer data, data integrity and access control were non-negotiable requirements
                from day one.
              </p>
              <p>
                This project deepened my understanding of Firebase's real-time data patterns, taught me to
                think about information architecture from the user's workflow perspective, and reinforced how
                much product value comes from deeply understanding the operational problem before writing any code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="section-py">
        <div className="section-container">
          <div className="max-w-3xl">
            <SectionHeader eyebrow="Roadmap" title="Future Development" className="mb-8" />
            <ul className="space-y-3">
              {[
                'Calendar view for scheduling service visits and travel logistics',
                'Route optimization for multi-site service trips',
                'Automated maintenance status notifications',
                'Customer-facing portal for service history visibility',
                'Analytics dashboard — fleet health and service trends',
                'Mobile app for field technician use',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-400 text-sm">
                  <span className="text-accent-cyan flex-shrink-0 mt-0.5">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA
        title="Want to talk through the build?"
        description="Happy to walk through the architecture, engineering decisions, or how this kind of tool fits into an enterprise workflow."
      />
    </main>
  );
}
