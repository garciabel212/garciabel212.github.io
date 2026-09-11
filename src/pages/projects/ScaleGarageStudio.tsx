import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Box, RotateCcw, Palette, FileCode2, DollarSign, Printer } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import TechStack from '@/components/TechStack';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import ScreenshotGallery from '@/components/ScreenshotGallery';
import CTA from '@/components/CTA';
import ProjectPreview from '@/components/ProjectPreview';
import LazyThreePreviewShell from '@/components/LazyThreePreviewShell';
import { GarageVisual } from '@/components/GarageVisual';
import { projects } from '@/data/projects';

const project = projects.find((item) => item.slug === 'scale-garage-studio');

const techStack = [
  { name: 'React', category: 'frontend' as const },
  { name: 'TypeScript', category: 'frontend' as const },
  { name: 'Three.js', category: 'frontend' as const },
  { name: 'React Three Fiber', category: 'frontend' as const },
  { name: '@react-three/drei', category: 'frontend' as const },
  { name: 'WebGL', category: 'frontend' as const },
  { name: 'Vite', category: 'frontend' as const },
  { name: 'Parametric Geometry', category: 'default' as const },
  { name: 'STL Export', category: 'default' as const },
];

const architectureNodes = [
  { label: 'Configurator UI', sublabel: 'React + Tailwind CSS controls', accent: true },
  { label: 'React Three Fiber', sublabel: 'Declarative 3D scene management' },
  { label: 'Three.js / WebGL', sublabel: 'Real-time 3D rendering' },
  { label: 'Parametric Geometry Engine', sublabel: 'Dynamic mesh generation from parameters' },
  { label: 'STL / Manufacturing Workflow', sublabel: 'Export, validation, production prep', accent: true },
];

const supportedScales = [
  { scale: '1:18', desc: 'Primary focus — detailed 1:18 dioramas and garages', active: true },
  { scale: '1:24', desc: 'Classic display scale for die-cast collections', active: false },
  { scale: '1:43', desc: 'Compact European collector scale', active: false },
  { scale: '1:64', desc: 'Hot Wheels and Matchbox scale', active: false },
];

const features = [
  {
    icon: Box,
    color: '#06B6D4',
    title: 'Interactive 3D Viewport',
    desc: 'Full orbit, zoom, and pan controls. Switch between perspective, front, side, and overhead camera views.',
  },
  {
    icon: Palette,
    color: '#8B5CF6',
    title: 'Real-Time Customization',
    desc: 'Change dimensions, materials, colors, wall patterns, floor styles, ceiling configurations, and pillar designs — all updating live in the 3D view.',
  },
  {
    icon: RotateCcw,
    color: '#3B82F6',
    title: 'Parametric Architecture',
    desc: 'Every structural element is generated from parameters — so the geometry adapts to any valid combination of dimensions and features without manual modeling.',
  },
  {
    icon: Printer,
    color: '#10B981',
    title: 'Manufacturing Preparation',
    desc: 'Validates geometry against Bambu Lab P2S build volume constraints. Prepares STL files for production.',
  },
  {
    icon: FileCode2,
    color: '#F59E0B',
    title: 'STL Export',
    desc: 'Exports print-ready STL geometry from the parametric model — bridging browser-based design with physical manufacturing.',
  },
  {
    icon: DollarSign,
    color: '#EF4444',
    title: 'Cost Estimation',
    desc: 'Planned: real-time material and production cost estimates as the customer configures their garage.',
  },
];

const screenshots = [
  { alt: '3D Garage Viewport', caption: 'Interactive 3D viewport with orbit controls and real-time configuration', todo: true },
  { alt: 'Customization Panel', caption: 'Material, color, and dimension controls panel', todo: true },
  { alt: 'Multi-Scale View', caption: 'Scale selection and dimension configuration', todo: true },
  { alt: 'STL Export Workflow', caption: 'Manufacturing preparation and export workflow', todo: true },
];

export default function ScaleGarageStudio() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="pt-20">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: 'linear-gradient(135deg, #020D08 0%, #071812 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, #94A3B8 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div
          className="hero-orb w-[600px] h-[600px] -top-32 -right-32 opacity-10"
          style={{ background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)' }}
        />

        <div className="section-container relative z-10">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/projects" className="btn-ghost text-sm mb-8 inline-flex">
              <ArrowLeft size={15} /> Back to Projects
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="tag-cyan">Product</span>
              <span className="tag-cyan">3D / WebGL</span>
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-medium">
                <span className="w-1 h-1 rounded-full bg-amber-400" /> In Development
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-3 leading-tight">
              Scale Garage Studio
            </h1>
            <p className="text-xl font-medium mb-6" style={{ color: '#22D3EE' }}>
              Browser-Based 3D Configurator &amp; Manufacturing Tool
            </p>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mb-8">
              A browser-based 3D configurator for custom scale-model garages and dioramas.
              Customers design their miniature garage visually before manufacturing — customizing
              every dimension, material, and architectural feature with a real-time 3D preview,
              then exporting STL files for production.
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <span className="text-slate-500 block text-xs tracking-widest uppercase mb-1">Role</span>
                <span className="text-white font-medium">Product Designer &amp; Frontend Engineer</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs tracking-widest uppercase mb-1">Timeline</span>
                <span className="text-white font-medium">2024 – Present</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs tracking-widest uppercase mb-1">Primary Scale</span>
                <span className="text-white font-medium">1:18 (1:24 · 1:43 · 1:64 planned)</span>
              </div>
            </div>
          </motion.div>

          {/* Editorial Banner & Interactive 3D Configurator */}
          <div className="mt-12 max-w-5xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs text-accent-cyan uppercase tracking-[0.25em]">
                Interactive Configurator Prototype
              </span>
              <span className="font-mono text-xs text-slate-400">
                LIVE WEBGL TELEMETRY // 60 FPS
              </span>
            </div>
            <GarageVisual />
          </div>
        </div>
      </section>

      {/* Editorial Statement */}
      <section className="py-14 bg-navy-950 border-y border-white/[0.06] text-center">
        <div className="section-container">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">
            The Fabrication Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-accent-blue-light tracking-tight">
            DESIGN IT. SEE IT. BUILD IT.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Zero ambiguity between browser viewport and physical 3D print. Parametric mesh generation with direct STL export for Bambu Lab P2S.
          </p>
        </div>
      </section>

      {/* Product Concept */}
      <section className="section-py bg-navy-800/40">
        <div className="section-container">
          <div className="max-w-3xl">
            <SectionHeader eyebrow="The Concept" title="The Problem Worth Solving" className="mb-8" />
            <div className="space-y-4 text-slate-400 text-base leading-relaxed">
              <p>
                Scale-model collectors — particularly 1:18 die-cast car enthusiasts — want custom display
                environments that match their collection's theme. Custom miniature garages and dioramas
                are desirable, but ordering one means describing your vision in a text order form and
                hoping the manufacturer interprets it correctly.
              </p>
              <p>
                Scale Garage Studio removes that ambiguity. Instead of describing what you want, you configure
                it visually in 3D — selecting exact dimensions, wall finishes, floor patterns, ceiling styles,
                pillar designs, lighting configurations, and graffiti designs. What you see is what gets manufactured.
              </p>
              <p>
                On the production side, the same parametric model that powers the configurator generates
                the STL geometry for manufacturing — eliminating the translation layer between customer
                design and production files entirely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Scales */}
      <section className="section-py">
        <div className="section-container">
          <SectionHeader eyebrow="Product Scope" title="Supported Scales" className="mb-10" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            {supportedScales.map((s) => (
              <div
                key={s.scale}
                className={`card p-5 text-center ${s.active ? 'border-accent-cyan/30 bg-accent-cyan/5' : 'opacity-60'}`}
              >
                <p className={`text-2xl font-black mb-2 ${s.active ? 'text-accent-cyan-light' : 'text-slate-500'}`}>
                  {s.scale}
                </p>
                <p className="text-xs text-slate-500">{s.desc}</p>
                {s.active && (
                  <span className="inline-block mt-2 text-xs text-emerald-400 font-medium">Primary Focus</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-py bg-navy-800/40">
        <div className="section-container">
          <SectionHeader eyebrow="Technology" title="The Tech Stack" className="mb-8" />
          <TechStack technologies={techStack} size="md" />
        </div>
      </section>

      {/* Architecture */}
      <section className="section-py">
        <div className="section-container">
          <SectionHeader eyebrow="Architecture" title="System Design" className="mb-10" />
          <div className="max-w-sm">
            <ArchitectureDiagram
              title="Configurator Architecture"
              nodes={architectureNodes}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-py bg-navy-800/40">
        <div className="section-container">
          <SectionHeader
            eyebrow="Features"
            title="Configurator Capabilities"
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
      <section className="section-py">
        <div className="section-container">
          <SectionHeader
            eyebrow="Interface"
            title="Configurator Views"
            description="In-progress screenshots will be added as the configurator reaches each milestone."
            className="mb-10"
          />
          <ScreenshotGallery screenshots={screenshots} columns={2} />
        </div>
      </section>

      {/* Manufacturing angle */}
      <section className="section-py bg-navy-800/40">
        <div className="section-container max-w-3xl">
          <SectionHeader eyebrow="Manufacturing" title="From Browser to Build Plate" className="mb-8" />
          <div className="space-y-4 text-slate-400 text-base leading-relaxed">
            <p>
              One of the more technically interesting aspects of this project is the manufacturing
              pipeline. The same parametric geometry that renders in the browser is the geometry
              that gets exported as an STL file — there's no separate CAD process for production.
            </p>
            <p>
              The system validates every configuration against the Bambu Lab P2S's build volume
              before export, catching configurations that would require splitting or reprinting.
              This closes the loop between customer customization and physical production.
            </p>
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="section-py">
        <div className="section-container max-w-3xl">
          <SectionHeader eyebrow="Roadmap" title="What's Next" className="mb-8" />
          <ul className="space-y-3">
            {[
              'Complete 1:18 garage configurator with full wall, floor, and ceiling systems',
              'Customer ordering workflow — design → quote → order',
              'Material cost estimation integrated into the configurator',
              'Lighting configuration with preview in 3D viewport',
              'Graffiti and graphic design panel',
              'Expand to 1:24 and 1:64 scale configurations',
              'Customer design save/load and sharing',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-slate-400 text-sm">
                <span className="text-accent-cyan flex-shrink-0 mt-0.5">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        title="Interested in the 3D engineering?"
        description="Happy to discuss the parametric geometry approach, WebGL rendering decisions, or the manufacturing workflow."
      />
    </main>
  );
}
