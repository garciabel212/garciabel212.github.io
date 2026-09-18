import { motion, useReducedMotion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  Users,
  Wrench,
  Activity,
  Calendar,
  MapPin,
  FileCheck,
} from 'lucide-react';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

export default function ExperienceSection() {
  const reduceMotion = useReducedMotion();

  const lifecyclePillars = [
    {
      num: '01',
      title: 'Discovery & Consultation',
      desc: 'Uncover real customer constraints, workflow bottlenecks, and technical requirements before proposing an architecture.',
    },
    {
      num: '02',
      title: 'Live Demonstrations',
      desc: 'Build credibility through tailored hands-on demonstrations that show exactly how solutions solve the client’s day-to-day challenges.',
    },
    {
      num: '03',
      title: 'Deployment & Systems Delivery',
      desc: 'Execute hardware integration, network configuration, software setup, and validation on site with zero disruption.',
    },
    {
      num: '04',
      title: 'Training & Long-Term Adoption',
      desc: 'Empower administrators and end-users with clear instruction, documentation, and ongoing responsive support.',
    },
  ];

  return (
    <section
      id="experience"
      className="section-py border-t border-[var(--border)] relative scroll-mt-20 bg-[var(--surface-warm)]"
    >
      <div className="section-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span className="font-mono text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
              PROFESSIONAL CAREER &amp; METHODOLOGY
            </span>
          </div>
          <h2 className="text-editorial-title font-serif text-[var(--text-primary)] mb-4">
            Experience &amp; Technical Approach
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
            Connecting deep computer engineering rigor with customer empathy. Proven track record across
            pre-sales consultation, hands-on enterprise hardware/software deployment, and operational tooling.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {lifecyclePillars.map((p, idx) => (
            <motion.div
              key={p.num}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: EASE_EXPO, delay: idx * 0.08 }}
              className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-low)] flex flex-col"
            >
              <span className="font-mono text-xs font-bold text-[var(--accent)] tracking-widest mb-2">
                STAGE // {p.num}
              </span>
              <h3 className="font-serif font-bold text-lg text-[var(--text-primary)] mb-2">
                {p.title}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Career Timeline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Main Experience Roles (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Role 1: DLSG */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: EASE_EXPO }}
              className="card p-6 sm:p-8 bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-medium)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3 pb-4 border-b border-[var(--border-subtle)]">
                <div>
                  <span className="meta-label text-[var(--accent)] font-semibold">CURRENT ROLE</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mt-1">
                    Service Engineer &middot; Sales Engineering Support
                  </h3>
                  <p className="text-sm font-medium text-[var(--text-secondary)] mt-0.5">
                    Digital Library Systems Group / Image Access
                  </p>
                </div>
                <div className="sm:text-right font-mono text-xs text-[var(--text-muted)] shrink-0">
                  <div className="flex items-center sm:justify-end gap-1.5 text-[var(--text-primary)] font-semibold">
                    <Calendar size={13} />
                    <span>Oct 2022 – Present</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5 mt-0.5">
                    <MapPin size={13} />
                    <span>Boca Raton, FL &middot; Nationwide Travel</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                Customer-facing engineering role spanning the entire product adoption lifecycle. Responsible for
                delivering high-stakes product demonstrations, configuring specialized scanning systems, executing
                nationwide installations, training institutional stakeholders, and driving internal operational tooling.
              </p>

              <div className="space-y-3 font-sans text-xs sm:text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--text-primary)] font-semibold">Sales Engineering &amp; Demos:</strong> Partnered with sales teams on requirements gathering, technical RFP evaluations, and live executive presentations for research institutions and university libraries.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--text-primary)] font-semibold">System Deployments:</strong> Coordinated and delivered end-to-end onsite and remote deployments of specialized high-resolution optical scanners and custom Windows OS environments.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--text-primary)] font-semibold">Diagnostics &amp; Escalations:</strong> Performed root-cause analysis on hardware, optical sensors, network interfaces, and drivers to resolve complex field anomalies.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--text-primary)] font-semibold">Internal Tooling Innovation:</strong> Architected and built the Service Map Planner application, directly reducing logistical scheduling conflicts and data fragmentation.
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Role 2: GlobeNet Telecom */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.1 }}
              className="card p-6 sm:p-8 bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-low)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3 pb-4 border-b border-[var(--border-subtle)]">
                <div>
                  <span className="meta-label">FOUNDATIONAL EXPERIENCE</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-1">
                    Network Operations Center (NOC) Engineer
                  </h3>
                  <p className="text-sm font-medium text-[var(--text-secondary)] mt-0.5">
                    GlobeNet Telecom
                  </p>
                </div>
                <div className="sm:text-right font-mono text-xs text-[var(--text-muted)] shrink-0">
                  <div className="flex items-center sm:justify-end gap-1.5 text-[var(--text-primary)] font-semibold">
                    <Calendar size={13} />
                    <span>Dec 2021 – Sep 2022</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5 mt-0.5">
                    <MapPin size={13} />
                    <span>Boca Raton, FL</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                Monitored multinational submarine fiber-optic cable infrastructure and terrestrial telecommunications backbones. 
                Performed real-time incident triage, optical telemetry diagnostics, and coordinated cross-border escalation teams to preserve high network availability.
              </p>

              <div className="flex flex-wrap gap-1.5">
                {['Carrier Infrastructure', 'Incident Response', 'Telemetry Diagnostics', 'Network Reliability', 'SLA Management'].map((t) => (
                  <span key={t} className="tech-chip text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Education & Certifications Sidebar (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Education Card */}
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-low)]">
              <div className="flex items-center gap-2 mb-3 text-[var(--accent)]">
                <GraduationCap size={20} />
                <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                  EDUCATION
                </span>
              </div>
              <h4 className="font-serif font-bold text-xl text-[var(--text-primary)] mb-1">
                Florida Atlantic University
              </h4>
              <p className="text-sm font-semibold text-[var(--text-secondary)] mb-1">
                B.S. in Computer Engineering
              </p>
              <p className="font-mono text-xs text-[var(--text-muted)] mb-4">
                2018 – 2022 &middot; Boca Raton, FL
              </p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Rigorous grounding in computer systems architecture, embedded logic, network protocols, digital signal processing, and modern software engineering principles.
              </p>
            </div>

            {/* Certifications Card */}
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-low)]">
              <div className="flex items-center gap-2 mb-4 text-[var(--accent)]">
                <Award size={20} />
                <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                  CERTIFICATIONS
                </span>
              </div>

              <div className="space-y-4">
                <div className="pb-3 border-b border-[var(--border-subtle)]">
                  <h5 className="font-sans font-bold text-sm text-[var(--text-primary)]">
                    AWS Certified Cloud Practitioner
                  </h5>
                  <span className="font-mono text-xs text-[var(--text-muted)] block mt-0.5">
                    Amazon Web Services &middot; 2022
                  </span>
                </div>
                <div>
                  <h5 className="font-sans font-bold text-sm text-[var(--text-primary)]">
                    Certificate in Data Science &amp; Analytics
                  </h5>
                  <span className="font-mono text-xs text-[var(--text-muted)] block mt-0.5">
                    Florida Atlantic University &middot; 2022
                  </span>
                </div>
              </div>
            </div>

            {/* Language & Mobility */}
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-low)]">
              <div className="flex items-center gap-2 mb-3 text-[var(--accent)]">
                <FileCheck size={18} />
                <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                  KEY QUALIFICATIONS
                </span>
              </div>
              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  <span><strong>Languages:</strong> Fully Bilingual (English &amp; Spanish)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  <span><strong>Mobility:</strong> Open to nationwide travel (up to 40%)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  <span><strong>Location:</strong> South Florida (Hybrid or Remote)</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
