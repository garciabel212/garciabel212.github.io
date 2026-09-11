import { motion, useReducedMotion } from 'framer-motion';

interface SpecCategory {
  number: string;
  category: string;
  specs: { name: string; detail: string }[];
}

const technicalCatalog: SpecCategory[] = [
  {
    number: '01',
    category: 'CUSTOMER & SALES ENGINEERING',
    specs: [
      { name: 'Technical Discovery', detail: 'Requirements mapping, security auditing, and stakeholder alignment' },
      { name: 'Product Demonstrations', detail: 'Tailored live hardware/software demonstrations & proof-of-concept testing' },
      { name: 'Customer Enablement', detail: 'Administrator training workshops, operator runbooks, and change management' },
      { name: 'Technical Consulting', detail: 'RFP evaluations, workflow optimization, and institutional scoping' },
    ],
  },
  {
    number: '02',
    category: 'SYSTEMS & FIELD ARCHITECTURE',
    specs: [
      { name: 'Windows Administration', detail: 'OS configuration, policy hardening, peripheral driver integration' },
      { name: 'Networking Topologies', detail: 'TCP/IP routing, DNS, VLAN integration, SMB/SFTP network storage' },
      { name: 'Hardware Integration', detail: 'Optical scanners, Bookeye systems, custom camera/lighting calibration' },
      { name: 'Diagnostics & Telemetry', detail: 'Root-cause incident analysis, log inspection, performance tuning' },
    ],
  },
  {
    number: '03',
    category: 'SOFTWARE & TOOL BUILDING',
    specs: [
      { name: 'Frontend Engineering', detail: 'React 19, TypeScript, Next.js, TailwindCSS, State Management' },
      { name: 'Interactive 3D / WebGL', detail: 'Three.js, React Three Fiber, Drei, 3D parametric configurators' },
      { name: 'Cloud & Database', detail: 'Firebase Authentication, Firestore real-time databases, REST APIs' },
      { name: 'Internal Tooling', detail: 'Custom operations platforms, Service Map Planner, field diagnostics' },
    ],
  },
  {
    number: '04',
    category: 'PRODUCT & EXECUTION',
    specs: [
      { name: 'Workflow Architecture', detail: 'Identifying operational bottlenecks and architecting targeted tools' },
      { name: 'Rapid Prototyping', detail: 'Translating field requirements directly into working production web apps' },
      { name: 'Cross-Functional Sync', detail: 'Bridging sales, customer support, factory engineering, and clients' },
      { name: 'Bilingual Communication', detail: 'Native English & Spanish fluency across written and verbal technical domains' },
    ],
  },
];

export default function TechnicalIndex() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-py relative border-t border-[var(--border-subtle)] overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--border-subtle)] mb-14">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
              05 // TECHNICAL CAPABILITIES SPECIFICATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[var(--text-primary)] tracking-tight mt-2 font-display">
              Technical Index.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            A comprehensive engineering specification catalog outlining customer-facing, systems, and product competencies.
          </p>
        </div>

        {/* Specification Sheet Layout */}
        <div className="space-y-12">
          {technicalCatalog.map((section, sIdx) => (
            <div key={section.category} className="border-t border-[var(--border)] pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Category Header */}
                <div className="lg:col-span-4 flex items-baseline gap-3">
                  <span className="font-mono text-sm font-bold text-[var(--accent)]">
                    {section.number} //
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-[var(--text-primary)]">
                    {section.category}
                  </h3>
                </div>

                {/* Specs List with Rules and Numbers */}
                <div className="lg:col-span-8 divide-y divide-[var(--border-subtle)]">
                  {section.specs.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 group"
                    >
                      <div className="flex items-baseline gap-3 min-w-[220px]">
                        <span className="font-mono text-[11px] text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                          {section.number}.{idx + 1}
                        </span>
                        <span className="font-mono text-xs sm:text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal text-left sm:text-right">
                        {item.detail}
                      </span>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
