import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  MapPin,
  CheckCircle2,
  Database,
  Calendar,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

export default function ServiceOpsSection() {
  const reduceMotion = useReducedMotion();
  const baseUrl = import.meta.env.BASE_URL;

  const features = [
    {
      icon: Database,
      title: 'Institutional Asset Intelligence',
      desc: 'Centralizes library and institutional accounts, scanner hardware serials, firmware revisions, and software licenses in a unified data model.',
    },
    {
      icon: Calendar,
      title: 'Maintenance & Service Lifecycle',
      desc: 'Tracks warranty windows, recurring maintenance schedules, historical service interventions, and parts replacement records.',
    },
    {
      icon: MapPin,
      title: 'Geospatial Route & Travel Planner',
      desc: 'Visualizes accounts across North America on interactive Google Maps to cluster customer visits, reducing travel hours and operational costs.',
    },
    {
      icon: AlertTriangle,
      title: 'Data-Quality & Compliance Flags',
      desc: 'Automated telemetry highlights obsolete versions, missing contact information, or approaching maintenance intervals.',
    },
  ];

  const technologies = [
    'Next.js',
    'React',
    'TypeScript',
    'Firebase Firestore',
    'Google Maps API',
    'Tailwind CSS',
  ];

  return (
    <section
      id="service-operations"
      className="section-py border-t border-[var(--border)] relative scroll-mt-20"
      data-contour-section="service"
    >
      <div id="work" className="absolute -top-20" />
      <div className="section-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span className="font-mono text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
              CASE STUDY 01 // OPERATIONS PLATFORM
            </span>
          </div>
          <h2 className="text-editorial-title font-serif text-[var(--text-primary)] mb-4">
            Service Map Planner
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
            An internal field-service operations platform designed and engineered to centralize
            institutions, equipment inventories, maintenance lifecycles, and nationwide travel logistics.
          </p>
        </div>

        {/* Main Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Large Tablet Mockup & Screenshot (7 Cols) */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE_EXPO }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="card p-3 sm:p-4 bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-floating)] group">
              <div className="relative rounded-xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                <img
                  src={`${baseUrl}images/service_map_tablet.jpg`}
                  alt="Service Map Planner application displayed on a tablet showing geographic distribution of scanner deployments"
                  className="w-full h-auto object-cover object-center group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-950/85 text-emerald-300 border border-emerald-500/30 shadow-md backdrop-blur-md">
                    <ShieldCheck size={13} />
                    <span>Active Internal Tool &middot; Daily Field Operations</span>
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="pt-4 px-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-[var(--text-muted)]">
                <span>Production application interface photographed on site</span>
                <span>Role: Architecture &middot; Product Design &middot; Frontend</span>
              </div>
            </div>
          </motion.div>

          {/* Context & Highlights (5 Cols) */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE_EXPO, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-3">
                The Challenge &amp; Solution
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-4">
                Managing national hardware installations across research universities and public libraries
                relied on fragmented spreadsheets and tribal knowledge. Customer data, software revisions,
                and warranty status were separated from travel planning.
              </p>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                I engineered a single responsive workspace where field engineers and operations leaders can
                locate any customer scanner, review maintenance history, detect version drift, and plan travel routes in seconds.
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

            {/* In-depth Link */}
            <div className="pt-2">
              <Link
                to="/projects/service-map-planner"
                className="btn-primary inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold cursor-pointer self-start"
              >
                <span>Read Comprehensive Case Study</span>
                <ArrowRight size={16} />
              </Link>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
