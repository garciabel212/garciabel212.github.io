import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Box,
  Sliders,
  Palette,
  Layers,
  ArrowRight,
  Sparkles,
  Printer,
} from 'lucide-react';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

export default function GarageSection() {
  const reduceMotion = useReducedMotion();
  const baseUrl = import.meta.env.BASE_URL;

  const features = [
    {
      icon: Sliders,
      title: 'Parametric Room Architecture',
      desc: 'Users adjust dimensions, wall heights, column spacing, and window cutouts with instant, mathematically constrained 3D feedback.',
    },
    {
      icon: Palette,
      title: 'Materials, Surfaces & Lighting',
      desc: 'Realistic PBR textures for polished epoxy floors, industrial brick, overhead LED bars, and custom accent wall colors.',
    },
    {
      icon: Box,
      title: 'Scale Model Vehicle Staging',
      desc: 'Place accurate 1:18 and 1:24 diecast vehicle models inside the scene to preview proportions and clearances.',
    },
    {
      icon: Printer,
      title: 'Direct Manufacturing STL Export',
      desc: 'Transforms browser scene configuration into printable 3D meshes ready for CNC machining and additive manufacturing.',
    },
  ];

  const technologies = [
    'React',
    'TypeScript',
    'Three.js',
    'React Three Fiber',
    'WebGL',
    '3D Mesh Generation',
  ];

  return (
    <section
      id="garage-studio"
      className="section-py border-t border-[var(--border)] relative scroll-mt-20"
    >
      <div className="section-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span className="font-mono text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
              CASE STUDY 02 // INTERACTIVE 3D WEB
            </span>
          </div>
          <h2 className="text-editorial-title font-serif text-[var(--text-primary)] mb-4">
            Scale Garage Studio
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
            A web-based 3D configurator built for a custom scale-model garage business, connecting
            architectural customization, material finishes, and production-ready manufacturing exports.
          </p>
        </div>

        {/* Main Case Study Grid - Inverted Column Order for Visual Rhythm */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Narrative & Capabilities (5 Cols on Left for rhythm) */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE_EXPO }}
            className="lg:col-span-5 order-2 lg:order-1 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-3">
                Product Design &amp; 3D Engineering
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-4">
                Collector dioramas traditionally required manual design consults, bespoke sketches, and
                tedious drafting before physical fabrication could even begin.
              </p>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                I designed and engineered a client-facing web application that brings parametric CAD
                principles into an intuitive consumer interface, enabling clients to configure their ideal
                display garage in real time with immediate physical feedback.
              </p>
            </div>

            {/* Feature Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-warm)]"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon size={16} className="text-[var(--accent)] shrink-0" />
                      <h4 className="font-sans font-semibold text-xs text-[var(--text-primary)]">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-normal">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Tech Stack Chips */}
            <div className="mb-8">
              <span className="meta-label block mb-2">Technology Stack</span>
              <div className="flex flex-wrap gap-1.5">
                {technologies.map((t) => (
                  <span key={t} className="tech-chip text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Link to Full Detail Page */}
            <div className="pt-2">
              <Link
                to="/projects/scale-garage-studio"
                className="btn-primary inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold cursor-pointer self-start"
              >
                <span>Read In-Depth Case Study</span>
                <ArrowRight size={16} />
              </Link>
            </div>

          </motion.div>

          {/* Large Real 3D Render (7 Cols on Right) */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE_EXPO, delay: 0.15 }}
            className="lg:col-span-7 order-1 lg:order-2 flex flex-col"
          >
            <div className="card p-3 sm:p-4 bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-floating)] group">
              <div className="relative rounded-xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                <img
                  src={`${baseUrl}images/hero_garage_diorama.jpg`}
                  alt="Scale Garage Studio interactive 3D model garage rendering showcasing concrete walls and illumination"
                  className="w-full h-auto object-cover object-center group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-sky-950/85 text-sky-300 border border-sky-500/30 shadow-md backdrop-blur-md">
                    <Sparkles size={13} />
                    <span>In Development &middot; Client Engagement</span>
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="pt-4 px-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-[var(--text-muted)]">
                <span>Interactive WebGL 3D configuration output</span>
                <span>Role: 3D Engineering &middot; Product Design &middot; R3F</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
