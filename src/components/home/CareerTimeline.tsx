import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, GraduationCap, Briefcase, Award } from 'lucide-react';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

interface TimelineEvent {
  id: string;
  type: 'work' | 'education';
  organization: string;
  role: string;
  period: string;
  location: string;
  statusBadge?: string;
  summary: string;
  highlights: string[];
  techTags: string[];
}

const events: TimelineEvent[] = [
  {
    id: 'dlsg',
    type: 'work',
    organization: 'Digital Library Systems Group / Image Access',
    role: 'Service Engineer &middot; Sales Engineering Support',
    period: 'Oct 2022 – Present',
    location: 'Boca Raton, FL &middot; Nationwide Deployments',
    statusBadge: 'CURRENT ROLE',
    summary:
      'Customer-facing engineering role spanning the entire product adoption lifecycle—from technical discovery and executive demonstrations to nationwide deployments, system troubleshooting, and internal tool development.',
    highlights: [
      'Partnered with sales teams on technical discovery, requirements evaluation, and tailored product demonstrations for university and institutional clients.',
      'Delivered end-to-end onsite and remote deployments of specialized high-resolution optical scanners and custom Windows OS environments.',
      'Conducted root-cause diagnostics on optical sensors, hardware sub-assemblies, network interfaces, and firmware to resolve complex field anomalies.',
      'Trained institutional IT staff, librarians, and technicians to drive user autonomy and high long-term adoption.',
      'Conceived, designed, and built the internal Service Map Planner operations platform in active daily use across operations teams.',
    ],
    techTags: ['Sales Engineering', 'Windows Systems', 'Hardware Integration', 'Remote Diagnostics', 'Technical Training'],
  },
  {
    id: 'globenet',
    type: 'work',
    organization: 'GlobeNet Telecom',
    role: 'Network Operations Center (NOC) Engineer',
    period: 'Dec 2021 – Sep 2022',
    location: 'Boca Raton, FL',
    summary:
      'Engineered carrier-grade reliability across multinational subsea fiber-optic telecommunications infrastructure, leading real-time telemetry diagnostics and critical outage coordination.',
    highlights: [
      'Monitored dual-ring international submarine fiber-optic routes, dense wavelength division multiplexing (DWDM), and terrestrial backbones.',
      'Triaged network alarms, performed live optical domain reflectometry analysis, and coordinated cross-border escalation teams.',
      'Maintained strict 99.999% network availability SLAs through rapid emergency restoration protocols.',
    ],
    techTags: ['Subsea Fiber Systems', 'Carrier Infrastructure', 'Incident Triage', 'Telemetry Diagnostics', 'SLA Management'],
  },
  {
    id: 'fau',
    type: 'education',
    organization: 'Florida Atlantic University',
    role: 'B.S. in Computer Engineering',
    period: '2018 – 2022',
    location: 'Boca Raton, FL',
    summary:
      'Graduated with a Bachelor of Science in Computer Engineering, developing a deep theoretical and practical foundation in computer systems architecture, embedded logic, network engineering, and data science.',
    highlights: [
      'Earned the Certificate in Data Science & Analytics alongside core computer engineering curriculum.',
      'Achieved AWS Certified Cloud Practitioner credential (Amazon Web Services, 2022).',
      'Developed foundational bilingual engineering communication capabilities in English and Spanish.',
    ],
    techTags: ['Computer Architecture', 'Embedded Systems', 'Data Science & Analytics', 'AWS Cloud', 'Digital Logic'],
  },
];

export default function CareerTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="section-py border-t border-[var(--border)] relative scroll-mt-20"
      data-contour-section="career"
    >
      <div className="section-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span className="font-mono text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
              PROFESSIONAL RECORD // CHRONOLOGY
            </span>
          </div>
          <h2 className="text-editorial-title font-serif text-[var(--text-primary)] mb-4">
            Technical Career Timeline
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            A continuous progression from computer engineering fundamentals to critical infrastructure operations and nationwide solutions delivery.
          </p>
        </div>

        {/* ─── UNIFIED VERTICAL TIMELINE ─── */}
        <div className="relative pl-6 sm:pl-10 md:pl-12">
          
          {/* Continuous Vertical Signal Line */}
          <div className="absolute top-3 bottom-8 left-[11px] sm:left-[19px] md:left-[23px] w-[2px] bg-[var(--border)]" />

          {/* Timeline Events */}
          <div className="space-y-12 sm:space-y-16">
            {events.map((ev, idx) => (
              <motion.div
                key={ev.id}
                initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: EASE_EXPO, delay: idx * 0.1 }}
                className="relative flex flex-col items-start group"
              >
                {/* Illuminating Node Pip on the Vertical Line */}
                <div className="absolute -left-[30px] sm:-left-[42px] md:-left-[46px] top-1.5 w-6 h-6 rounded-full bg-[var(--surface)] border-2 border-[var(--accent)] flex items-center justify-center shadow-[var(--shadow-blue)] group-hover:scale-125 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                </div>

                {/* Event Card */}
                <div className="card w-full p-6 sm:p-8 bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-medium)] group-hover:border-[var(--border-strong)] transition-all">
                  
                  {/* Top Meta Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-4 border-b border-[var(--border-subtle)]">
                    <div>
                      {ev.statusBadge && (
                        <span className="inline-block font-mono text-[10px] font-bold text-[var(--accent)] tracking-widest uppercase mb-1">
                          {ev.statusBadge}
                        </span>
                      )}
                      <h3
                        className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)]"
                        dangerouslySetInnerHTML={{ __html: ev.role }}
                      />
                      <p className="text-sm sm:text-base font-medium text-[var(--text-secondary)] mt-0.5">
                        {ev.organization}
                      </p>
                    </div>

                    <div className="font-mono text-xs text-[var(--text-muted)] shrink-0 sm:text-right space-y-1">
                      <div className="flex items-center sm:justify-end gap-1.5 font-semibold text-[var(--text-primary)]">
                        <Calendar size={13} className="text-[var(--accent)]" />
                        <span>{ev.period}</span>
                      </div>
                      <div
                        className="flex items-center sm:justify-end gap-1.5 text-[11px]"
                        dangerouslySetInnerHTML={{ __html: ev.location }}
                      />
                    </div>
                  </div>

                  {/* Summary Narrative */}
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                    {ev.summary}
                  </p>

                  {/* Key Contributions & Highlights */}
                  <div className="space-y-2.5 mb-6">
                    {ev.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                        <CheckCircle2 size={15} className="text-[var(--accent)] shrink-0 mt-0.5" />
                        <span className="leading-normal">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-subtle)]">
                    {ev.techTags.map((t) => (
                      <span key={t} className="tech-chip text-xs">
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
