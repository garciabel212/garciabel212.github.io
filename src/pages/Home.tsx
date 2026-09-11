import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Presentation,
  CheckCircle2,
  Cpu,
  Boxes,
  FileDown,
  Mail,
  ExternalLink,
  Briefcase,
  MapPin,
  Calendar,
} from 'lucide-react';
import Hero from '@/components/Hero';
import { MagneticButton } from '@/components/MagneticButton';

const coreStrengths = [
  {
    icon: Presentation,
    title: 'Technical Discovery & Demonstrations',
    description:
      'Translating complex customer needs into clear solution architectures, tailoring technical product demos, and answering in-depth technical questions to de-risk customer decisions.',
    tag: 'PRE-SALES & VALUE',
  },
  {
    icon: CheckCircle2,
    title: 'Solution Deployment & Customer Training',
    description:
      'Leading end-to-end rollouts across hardware and software, executing nationwide onsite installations, and delivering hands-on technical training to ensure rapid user adoption.',
    tag: 'IMPLEMENTATION & SUCCESS',
  },
  {
    icon: Cpu,
    title: 'Hardware, Software & Network Troubleshooting',
    description:
      'Diagnosing root causes across Windows environments, local network topologies, communication protocols, and integrated hardware devices under real-world operating constraints.',
    tag: 'SYSTEMS DIAGNOSTICS',
  },
  {
    icon: Boxes,
    title: 'Product Thinking & Internal Tool Building',
    description:
      'Identifying operational workflow bottlenecks in the field and architecting bespoke web applications—like Service Map Planner—to streamline institutional records and maintenance tracking.',
    tag: 'ENGINEERING & TOOLS',
  },
];

const selectedProjects = [
  {
    id: 'service-map-planner',
    title: 'Service Map Planner',
    subtitle: 'Internal field-service operations platform',
    description:
      'Designed to centralize institution records, equipment details, maintenance planning, and service history for Image Access / DLSG workflows.',
    role: 'Product Design · Frontend Development',
    tech: ['Next.js', 'React', 'TypeScript', 'Firebase / Firestore', 'Google Maps'],
    image: 'images/service_map_tablet.jpg',
    href: '/projects/service-map-planner',
    number: '01',
  },
  {
    id: 'scale-garage-studio',
    title: 'Scale Garage Studio',
    subtitle: '1:18 scale-model garage configurator',
    description:
      'An in-development browser-based configurator that connects custom garage design, modular 3D assets, and production-minded planning.',
    role: 'Product Design · Frontend Engineering',
    tech: ['React', 'TypeScript', 'Three.js', 'React Three Fiber'],
    image: 'images/hero_garage_diorama.jpg',
    href: '/projects/scale-garage-studio',
    number: '02',
  },
];

export default function Home() {
  const reduceMotion = useReducedMotion();
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <main className="bg-[#070909] overflow-hidden text-slate-200">
      {/* 1. PERSONAL HERO — Jose comes first */}
      <Hero />

      {/* 2. SELECTED WORK — Proof through two projects */}
      <section
        id="selected-work"
        className="section-py relative bg-[#070909] border-t border-white/[0.08]"
      >
        <span id="projects" className="absolute -top-20" aria-hidden="true" />
        <div className="section-container relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/[0.08] mb-12">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                01 // SELECTED WORK
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-2">
                Selected Work.
              </h2>
            </div>
            <p className="max-w-md text-sm sm:text-base text-slate-400 leading-relaxed">
              Two focused projects demonstrating practical customer-facing software engineering and operational design.
            </p>
          </div>

          {/* Exactly Two Project Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {selectedProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card group relative flex flex-col justify-between overflow-hidden p-6 sm:p-8"
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-white/[0.06]">
                    <span className="font-mono text-xs text-slate-500 font-semibold tracking-wider">
                      PROJECT {project.number}
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      {project.role}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-1 group-hover:text-[#D4F435] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-slate-400 uppercase tracking-wide mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Visual Screenshot Frame */}
                  <div className="relative aspect-[16/10] w-full rounded-lg border border-white/10 bg-[#0c1010] overflow-hidden mb-6 group-hover:border-white/20 transition-colors">
                    <img
                      src={`${baseUrl}${project.image}`}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/10 font-mono text-[11px] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Link */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    to={project.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#D4F435] transition-colors"
                  >
                    <span>View case study</span>
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                    CASE STUDY
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* 3. EXPERIENCE SNAPSHOT — Professional credibility */}
      <section className="section-py relative bg-[#0c1010] border-t border-white/[0.08] section-inset-highlight">
        <div className="section-container relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/[0.08] mb-12">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                02 // CAREER TIMELINE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-2">
                Professional Experience.
              </h2>
            </div>
            <Link
              to="/experience"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              <span>View complete experience breakdown</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Timeline Stack */}
          <div className="space-y-6 max-w-4xl">
            
            {/* Primary Role: DLSG / Image Access */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    Digital Library Systems Group / Image Access
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-sm font-semibold text-slate-300">
                    <span className="text-[#D4F435]">Service Engineer</span>
                    <span className="text-slate-600">&middot;</span>
                    <span className="text-slate-300">Sales Engineering Support</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400 shrink-0">
                  <Calendar size={13} className="text-slate-500" />
                  <span>2022 – Present</span>
                </div>
              </div>

              {/* Exact paragraph requirement */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Customer-facing technical support, product demonstrations, enterprise deployments, onsite and remote troubleshooting, software configuration, training, and ongoing customer success.
              </p>

              {/* Core capabilities badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06] text-xs font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/10">
                  Pre-Sales Demonstrations
                </span>
                <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/10">
                  Nationwide Onsite Deployments
                </span>
                <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/10">
                  Customer IT Enablement &amp; Training
                </span>
                <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/10">
                  Service Map Planner Lead
                </span>
              </div>
            </motion.div>

            {/* Compact Second Role: GlobeNet Telecom */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6 sm:p-7"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                    GlobeNet Telecom
                  </h3>
                  <div className="text-sm font-semibold text-slate-300 mt-1">
                    Network Operations Center Engineer
                  </div>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400 shrink-0">
                  <Calendar size={13} className="text-slate-500" />
                  <span>2021 – 2022</span>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Subsea network infrastructure monitoring, real-time diagnostic analysis, critical incident response, and carrier-grade escalation management across multi-region telecommunications systems.
              </p>

              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/10">
                  NOC Infrastructure Diagnostics
                </span>
                <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/10">
                  Incident Escalation
                </span>
                <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/10">
                  Network Diagnostics
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 4. CORE STRENGTHS — Why Jose is valuable */}
      <section className="section-py relative bg-[#070909] border-t border-white/[0.08]">
        <div className="section-container relative z-10">
          
          <div className="max-w-2xl pb-6 border-b border-white/[0.08] mb-12">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              03 // VALUE DELIVERED
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-2">
              Core Strengths.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mt-3">
              Hands-on technical rigor combined with customer-facing ownership across the entire technology lifecycle.
            </p>
          </div>

          {/* 4 Simple Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreStrengths.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-200">
                        <Icon size={18} />
                      </div>
                      <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="text-white text-base sm:text-lg font-bold mb-2.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/[0.06] font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                    {item.tag}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. CONTACT / RESUME — Clear next step */}
      <section className="section-py relative bg-[#0c1010] border-t border-white/[0.08] section-inset-highlight">
        <div className="section-container relative z-10 text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            04 // NEXT STEPS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-2 mb-4">
            Let's Discuss Next Steps.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            I am actively exploring Solutions Engineer, Sales Engineer, and Technical Consultant opportunities. Let's connect to discuss how I can deliver value to your team and customers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-lime inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base cursor-pointer"
            >
              <span>Get in touch</span>
              <ArrowRight size={17} />
            </Link>

            <a
              href={`${baseUrl}Jose-Garcia-Resume.pdf`}
              download
              className="btn-secondary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-base"
              aria-label="Download Résumé PDF"
            >
              <FileDown size={17} />
              <span>Download résumé</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jose-abel-garcia-a5006616b/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 px-4 py-3.5 text-base text-slate-400 hover:text-white"
            >
              <ExternalLink size={16} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.06] text-xs font-mono text-slate-500">
            Direct Email: <a href="mailto:joseabelgarcia99@gmail.com" className="text-slate-300 hover:underline">joseabelgarcia99@gmail.com</a>
          </div>
        </div>
      </section>
    </main>
  );
}
