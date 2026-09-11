import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users2, Wrench, Globe2, ExternalLink, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import SkillsGrid from '@/components/SkillsGrid';
import CTA from '@/components/CTA';
import { skillGroups } from '@/data/skills';
import SolutionLifecycle from '@/components/SolutionLifecycle';
import { ProductFrame } from '@/components/ProductFrame';
import { GarageVisual } from '@/components/GarageVisual';
import { MagneticButton } from '@/components/MagneticButton';

const valueProps = [
  {
    icon: Zap,
    color: '#3B82F6',
    tag: 'SYSTEMS & CODE',
    title: 'Technical Depth',
    body: 'B.S. in Computer Engineering with hands-on proficiency spanning hardware architectures, networking protocols, Windows systems engineering, and modern full-stack web applications.',
  },
  {
    icon: Users2,
    color: '#06B6D4',
    tag: 'PRE-SALES & VALUE',
    title: 'Customer-Facing Impact',
    body: 'Direct experience leading executive discovery, architecting tailored technical demonstrations, managing proof-of-concept validations, and translating customer pain points into wins.',
  },
  {
    icon: Wrench,
    color: '#8B5CF6',
    tag: 'POST-SALES SUCCESS',
    title: 'End-to-End Ownership',
    body: 'I design, deploy, configure, and support enterprise solutions throughout their entire lifecycle — from initial deployment planning through user onboarding and proactive account health.',
  },
  {
    icon: Globe2,
    color: '#10B981',
    tag: 'INNOVATION',
    title: 'Builder Mentality',
    body: 'When off-the-shelf tools fall short, I build production systems from scratch — like a geospatial field service platform serving 150+ sites and a 3D WebGL configurator with 200+ assets.',
  },
];

const customerJourneySteps = [
  { step: '01', label: 'Discovery', desc: 'Technical requirements & stakeholder needs' },
  { step: '02', label: 'Solution Design', desc: 'Configuration & deployment planning' },
  { step: '03', label: 'Demo & Validation', desc: 'Product demonstrations & POC support' },
  { step: '04', label: 'Deployment', desc: 'On-site & remote implementation' },
  { step: '05', label: 'Training', desc: 'Technical training & onboarding' },
  { step: '06', label: 'Support', desc: 'Remote diagnostics & escalation management' },
  { step: '07', label: 'Optimization', desc: 'Proactive maintenance & account success' },
];

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="bg-navy-950 overflow-hidden text-slate-200">
      <Hero />

      {/* SECTION 01: Value Propositions (Editorial Glass Cards) */}
      <section className="section-py relative border-t border-white/[0.05] bg-gradient-to-b from-navy-950 via-cobalt-950 to-navy-950">
        <div className="section-container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue-light">
                01 // VALUE PROPOSITION
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Technical Rigor meets <br className="hidden sm:block" />
                <span className="gradient-text">Customer Execution.</span>
              </h2>
            </div>
            <p className="max-w-md text-slate-400 text-sm sm:text-base leading-relaxed">
              Most solutions professionals lean strictly commercial or strictly technical. I operate fluently at the exact intersection of both worlds.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((vp, i) => {
              const Icon = vp.icon;
              return (
                <motion.div
                  key={vp.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card-editorial p-7 flex flex-col justify-between group hover:border-accent-blue/30 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ background: `${vp.color}15`, border: `1px solid ${vp.color}35` }}
                      >
                        <Icon size={22} style={{ color: vp.color }} />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                        {vp.tag}
                      </span>
                    </div>
                    <h3 className="text-white text-lg font-bold mb-2.5 group-hover:text-accent-blue-light transition-colors">
                      {vp.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {vp.body}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center gap-1.5 text-xs font-mono text-slate-400 group-hover:text-slate-300">
                    <span>SE Competency</span>
                    <span className="text-accent-blue">#0{i + 1}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 02: Featured Product Presentations (Oversized Editorial) */}
      <section className="section-py relative" id="projects">
        <div className="section-container relative z-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-20">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-accent-cyan">
                02 // FEATURED SYSTEMS &amp; CASE STUDIES
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Architected &amp; Built for <br />
                <span className="gradient-text">Real-World Operations.</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="btn-ghost flex items-center gap-2 text-sm text-accent-blue-light hover:text-white"
            >
              View All Case Studies &amp; Projects <ArrowRight size={16} />
            </Link>
          </div>

          {/* PRODUCT 01: Service Map Planner (Oversized Presentation) */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Product Info & Editorial Narrative */}
              <div className="lg:col-span-5 flex flex-col items-start order-2 lg:order-1">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="px-3 py-1 rounded-full bg-accent-blue/15 border border-accent-blue/30 text-xs font-mono text-accent-blue-light">
                    FLAGSHIP SYSTEM
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    NEXT.JS &middot; FIRESTORE
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  Service Map Planner
                </h3>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                  Engineered and deployed a bespoke field-service operations platform to manage 150+ biomedical customer institutions across multi-state regions. Replaced disconnected spreadsheets with an interactive geospatial dashboard.
                </p>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-3 w-full py-4 mb-6 border-y border-white/[0.08]">
                  <div>
                    <div className="text-2xl font-bold text-accent-blue-light">150+</div>
                    <div className="text-[11px] font-mono text-slate-400">Institutions Mapped</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-cyan">40%</div>
                    <div className="text-[11px] font-mono text-slate-400">Route Efficiency</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-400">$0</div>
                    <div className="text-[11px] font-mono text-slate-400">Software License Cost</div>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Next.js 14', 'React', 'Google Maps API', 'Firebase / Firestore', 'Tailwind CSS'].map((tech) => (
                    <span key={tech} className="chip font-mono text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <MagneticButton strength={0.15}>
                  <Link
                    to="/projects/service-map-planner"
                    className="btn-primary flex items-center gap-2 px-6 py-3 text-sm font-semibold"
                  >
                    Explore Architecture &amp; Live Demo
                    <ArrowRight size={16} />
                  </Link>
                </MagneticButton>
              </div>

              {/* Product Frame Showcase */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <ProductFrame
                  title="Field Operations Intelligence"
                  url="service-map-planner.internal"
                  glowColor="blue"
                  aspectRatio="aspect-[16/11]"
                  tiltDirection="right"
                  badges={[
                    { text: '● 157 Live Institutions', position: 'top-left', variant: 'accent', delay: 0.2 },
                    { text: '◎ Route Optimization', position: 'bottom-right', variant: 'cyan', delay: 0.4 },
                    { text: '✓ 99.9% Uptime', position: 'mid-right', variant: 'emerald', delay: 0.6 },
                  ]}
                >
                  {/* Live Mock UI Map inside Frame */}
                  <div className="relative w-full h-full bg-navy-900 flex flex-col select-none font-mono">
                    <div className="flex-1 relative overflow-hidden">
                      {/* Grid background */}
                      <svg className="absolute inset-0 w-full h-full opacity-20">
                        <defs>
                          <pattern id="homeMapGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#homeMapGrid)" />
                      </svg>

                      {/* Map Nodes & Connection Lines */}
                      <svg className="absolute inset-0 w-full h-full">
                        <line x1="28%" y1="36%" x2="52%" y2="48%" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5" strokeDasharray="4 3" />
                        <line x1="52%" y1="48%" x2="74%" y2="38%" stroke="rgba(6,182,212,0.5)" strokeWidth="1.5" strokeDasharray="4 3" />
                        <line x1="52%" y1="48%" x2="44%" y2="76%" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5" strokeDasharray="4 3" />
                        
                        {/* Node Dots */}
                        <circle cx="28%" cy="36%" r="6" fill="#3B82F6" className="animate-pulse" />
                        <circle cx="52%" cy="48%" r="8" fill="#60A5FA" />
                        <circle cx="74%" cy="38%" r="5" fill="#22D3EE" />
                        <circle cx="44%" cy="76%" r="6" fill="#F59E0B" />
                        <circle cx="84%" cy="65%" r="5" fill="#10B981" />
                        <circle cx="68%" cy="72%" r="4" fill="#60A5FA" />
                      </svg>

                      {/* Floating App Card */}
                      <div className="absolute top-4 left-4 glass-dark p-3 rounded-lg max-w-[200px] border border-white/[0.08] text-[11px]">
                        <div className="text-slate-400 text-[10px]">SELECTED NODE</div>
                        <div className="text-white font-bold truncate">Baptist Health South</div>
                        <div className="text-accent-blue-light text-[10px] mt-1">Status: Active Service (3 Units)</div>
                      </div>

                      {/* Telemetry Badge */}
                      <div className="absolute bottom-4 right-4 glass-dark px-3 py-1.5 rounded-md border border-white/[0.08] text-[11px] text-slate-300 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Firestore Real-Time Sync</span>
                      </div>
                    </div>
                  </div>
                </ProductFrame>
              </div>

            </div>
          </div>

          {/* PRODUCT 02: Scale Garage Studio (Full 3D Visual Experience) */}
          <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Product Frame Showcase (Left on Large screens) */}
              <div className="lg:col-span-7 order-1">
                <GarageVisual />
              </div>

              {/* Product Info & Editorial Narrative */}
              <div className="lg:col-span-5 flex flex-col items-start order-2">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="px-3 py-1 rounded-full bg-accent-cyan/15 border border-accent-cyan/30 text-xs font-mono text-accent-cyan-light">
                    3D SIMULATION &middot; WEBGL
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    THREE.JS &middot; GLTF PBR
                  </span>
                </div>

                <div className="font-mono text-xs text-accent-cyan tracking-widest uppercase mb-1">
                  DESIGN IT. SEE IT. BUILD IT.
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  Scale Garage Studio
                </h3>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                  Interactive real-time 3D configurator engineered for scale modeling and diorama fabrication. Allows hobbyists and designers to customize garage structures, place 200+ modular assets, simulate lighting temperatures, and preview physical builds.
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-3 mb-8 text-sm text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-accent-cyan shrink-0 mt-0.5" />
                    <span><strong>60 FPS WebGL Engine:</strong> Optimized low-poly rendering with realistic PBR materials.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-accent-cyan shrink-0 mt-0.5" />
                    <span><strong>Layer Explode &amp; Inspection:</strong> Interactive structural disassembly to inspect wiring and ceiling grids.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-accent-cyan shrink-0 mt-0.5" />
                    <span><strong>1:10 &amp; 1:24 Physical Calibration:</strong> Real millimeter measurements for accurate 3D printing.</span>
                  </div>
                </div>

                <MagneticButton strength={0.15}>
                  <Link
                    to="/projects/scale-garage-studio"
                    className="btn-primary flex items-center gap-2 px-6 py-3 text-sm font-semibold"
                  >
                    Launch 3D Configurator Case Study
                    <ArrowRight size={16} />
                  </Link>
                </MagneticButton>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 03: Customer Journey & Solution Lifecycle */}
      <section className="section-py relative bg-navy-900/60 border-t border-white/[0.05]" id="lifecycle">
        <div className="section-container relative z-10">
          <SectionHeader
            eyebrow="03 // END-TO-END METHODOLOGY"
            title="The Complete"
            titleHighlight="Solutions Delivery Lifecycle."
            description="From discovery and pre-sales demos through system integration, customer enablement, and long-term expansion."
            className="mb-14"
          />
          <SolutionLifecycle steps={customerJourneySteps} />
        </div>
      </section>

      {/* SECTION 04: Technical Skills Grid */}
      <section className="section-py relative border-t border-white/[0.05]">
        <div className="section-container relative z-10">
          <SectionHeader
            eyebrow="04 // TECHNICAL EXPERTISE"
            title="Built on"
            titleHighlight="Engineering Fundamentals."
            description="Organized into high-impact competency clusters relevant to senior Solutions Engineering and Technical Consulting."
            className="mb-14"
          />
          <SkillsGrid groups={skillGroups} />
        </div>
      </section>

      {/* SECTION 05: Call to Action */}
      <CTA />
    </main>
  );
}
