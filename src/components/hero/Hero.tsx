import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowDown, Mail, FileDown, ArrowUpRight, CheckCircle2, Layers, Box } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

interface ProjectTab {
  id: 'service-ops' | 'garage';
  label: string;
  badge: string;
  badgeType: 'active' | 'dev';
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  targetId: string;
  techs: string[];
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const navigate = useNavigate();
  const baseUrl = import.meta.env.BASE_URL;
  const [activeTab, setActiveTab] = useState<'service-ops' | 'garage'>('service-ops');

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('contour-project-change', { detail: activeTab }));
  }, [activeTab]);

  const tabs: ProjectTab[] = [
    {
      id: 'service-ops',
      label: 'Service Operations',
      badge: 'Active Internal Tool',
      badgeType: 'active',
      title: 'Service Map Planner',
      tagline: 'Field-Service Operations & Asset Intelligence',
      description:
        'A comprehensive platform centralizing institution records, scanner inventory, maintenance status, service history, and travel schedules for field teams.',
      image: `${baseUrl}images/service_map_tablet.jpg`,
      alt: 'Service Map Planner on tablet interface showing map, scanner inventories, and service schedule',
      targetId: 'service-operations',
      techs: ['Next.js', 'React', 'TypeScript', 'Firebase', 'Google Maps'],
    },
    {
      id: 'garage',
      label: '3D Garage Design',
      badge: 'In Development · Client Product',
      badgeType: 'dev',
      title: 'Scale Garage Studio',
      tagline: 'Interactive 3D Configurator & Production Prep',
      description:
        'A browser-based 3D configurator that allows customers to design custom scale-model garages with real-time parametric walls, materials, lighting, and STL export.',
      image: `${baseUrl}images/hero_garage_diorama.jpg`,
      alt: 'Scale Garage Studio 3D rendering showing custom architectural garage diorama with sports car',
      targetId: 'garage-studio',
      techs: ['React', 'Three.js', 'React Three Fiber', 'WebGL', 'STL Export'],
    },
  ];

  const currentProject = tabs.find((t) => t.id === activeTab)!;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    navigate({ pathname: '/', hash: `#${id}` });
  };

  return (
    <section
      className="relative min-h-[95vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
      data-contour-section="hero"
      data-contour-project={activeTab}
    >
      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ─── LEFT COLUMN: IDENTITY & POSITIONING (7 COLS) ─── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Telemetry Tag */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_EXPO }}
              className="flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase mb-5"
            >
              <span className="text-[var(--accent)] font-semibold">Jose Garcia</span>
              <span className="text-[var(--border-strong)]">&middot;</span>
              <span>South Florida</span>
              <span className="text-[var(--border-strong)]">&middot;</span>
              <span>Sales Engineering &middot; Solutions Consulting</span>
            </motion.div>

            {/* Authoritative Editorial Headline */}
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE_EXPO, delay: 0.08 }}
              className="font-serif font-bold text-hero-giant text-[var(--text-primary)] tracking-tight leading-[1.02] mb-6"
            >
              I turn complex technology into solutions people can use.
            </motion.h1>

            {/* Role & Positioning Line */}
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.16 }}
              className="text-lg sm:text-xl font-normal text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-8"
            >
              Customer-facing engineer specializing in technical discovery, live product demonstrations, 
              hardware and software implementation, troubleshooting, and long-term customer success. 
              Connecting deep technical execution with measurable business value.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.22 }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10"
            >
              <a
                href="#work"
                onClick={(e) => scrollToSection(e, 'work')}
                className="btn-primary inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowDown size={16} />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="btn-secondary inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm sm:text-base cursor-pointer"
              >
                <Mail size={16} className="text-[var(--text-secondary)]" />
                <span>Let&apos;s Connect</span>
              </a>

              <a
                href="mailto:joseabelgarcia99@gmail.com?subject=R%C3%A9sum%C3%A9%20Request%20-%20Jose%20Garcia&body=Hi%20Jose,%0D%0A%0D%0AI%20would%20like%20to%20request%20a%20copy%20of%20your%20current%20r%C3%A9sum%C3%A9.%0D%0A%0D%0AThanks!"
                title="Résumé available on request"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-highlight)] border border-transparent hover:border-[var(--border)] transition-colors"
                aria-label="Request Résumé"
              >
                <FileDown size={15} />
                <span>R&Eacute;SUM&Eacute; ON REQUEST</span>
              </a>
            </motion.div>

            {/* Credential Strip */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.28 }}
              className="flex items-center gap-4 p-2.5 pr-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-low)] hover:border-[var(--border-strong)] transition-colors w-full sm:w-auto"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-[var(--border)] shrink-0 bg-[var(--bg-secondary)] shadow-sm">
                <img
                  src={`${baseUrl}images/jose_garcia_portrait.png`}
                  alt="Jose Garcia"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
              <div className="text-left flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-mono text-xs font-semibold text-[var(--text-primary)] truncate">
                    B.S. COMPUTER ENGINEERING &middot; FAU
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[var(--text-muted)] block mt-0.5 truncate">
                  Bilingual (EN/ES) &middot; AWS Certified &middot; Open to Travel (up to 40%)
                </span>
              </div>
              <a
                href="https://www.linkedin.com/in/jose-abel-garcia-a5006616b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors p-1.5 rounded-lg hover:bg-[var(--surface-warm)]"
                aria-label="LinkedIn Profile"
              >
                <ArrowUpRight size={17} />
              </a>
            </motion.div>

          </div>

          {/* ─── RIGHT COLUMN: INTERACTIVE PROJECT SHOWCASE (5 COLS) ─── */}
          <div className="lg:col-span-5 flex flex-col justify-center relative mt-6 lg:mt-0">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE_EXPO, delay: 0.2 }}
              className="w-full flex flex-col"
            >
              {/* Tab Selector Buttons */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-low)] mb-4 self-start">
                <button
                  type="button"
                  id="tab-service-ops"
                  onClick={() => setActiveTab('service-ops')}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold tracking-wide transition-all ${
                    activeTab === 'service-ops'
                      ? 'bg-[var(--accent)] text-white shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <Layers size={14} />
                  <span>Service Operations</span>
                </button>
                <button
                  type="button"
                  id="tab-garage"
                  onClick={() => setActiveTab('garage')}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold tracking-wide transition-all ${
                    activeTab === 'garage'
                      ? 'bg-[var(--accent)] text-white shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <Box size={14} />
                  <span>3D Garage Configurator</span>
                </button>
              </div>

              {/* Showcase Card with Dynamic Crossfade */}
              <div className="card overflow-hidden bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-high)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col"
                  >
                    {/* Visual Preview Container with Real Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--bg-secondary)] border-b border-[var(--border)] group">
                      <img
                        src={currentProject.image}
                        alt={currentProject.alt}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                        loading="eager"
                      />

                      {/* Status Pill on Image */}
                      <div className="absolute top-3 left-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold shadow-md backdrop-blur-md ${
                            currentProject.badgeType === 'active'
                              ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30'
                              : 'bg-sky-950/80 text-sky-300 border border-sky-500/30'
                          }`}
                        >
                          <CheckCircle2 size={12} />
                          <span>{currentProject.badge}</span>
                        </span>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 flex flex-col text-left">
                      <h3 className="font-serif font-bold text-xl sm:text-2xl text-[var(--text-primary)] leading-snug mb-1">
                        {currentProject.title}
                      </h3>
                      <p className="font-mono text-xs text-[var(--accent)] font-medium mb-3">
                        {currentProject.tagline}
                      </p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                        {currentProject.description}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {currentProject.techs.map((t) => (
                          <span key={t} className="tech-chip text-[11px]">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Case Study Deep-Dive Link */}
                      <a
                        href={`#${currentProject.targetId}`}
                        onClick={(e) => scrollToSection(e, currentProject.targetId)}
                        className="inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[var(--surface-warm)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono text-xs font-semibold text-[var(--text-primary)] group"
                      >
                        <span>Examine Case Study</span>
                        <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
