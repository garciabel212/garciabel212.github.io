import { motion, useReducedMotion } from 'framer-motion';

interface SpecCategory {
  number: string;
  category: string;
  specs: { name: string; detail?: string }[];
}

const technicalCatalog: SpecCategory[] = [
  {
    number: '01',
    category: 'CUSTOMER & SOLUTIONS',
    specs: [
      { name: 'Technical Discovery', detail: 'Clarifying requirements, environment, stakeholders, and constraints' },
      { name: 'Requirements Gathering', detail: 'Mapping institutional needs and technical specifications' },
      { name: 'Solution Design', detail: 'Architecting practical configurations and deployment plans' },
      { name: 'Product Demonstrations', detail: 'Tailored live software and hardware evaluations' },
      { name: 'Technical Presentations', detail: 'Communicating solution value to decision-makers and IT teams' },
      { name: 'Proof-of-Concept Support', detail: 'Validating feasibility and de-risking customer commitments' },
    ],
  },
  {
    number: '02',
    category: 'IMPLEMENTATION & SYSTEMS',
    specs: [
      { name: 'Enterprise Implementation', detail: 'Onsite and remote rollouts across institutional facilities' },
      { name: 'Hardware Integration', detail: 'Specialized scanning hardware and optical system setup' },
      { name: 'Windows Administration', detail: 'OS diagnostics, policy hardening, and device integration' },
      { name: 'Network Configuration', detail: 'TCP/IP routing, DNS, VLANs, and network storage endpoints' },
      { name: 'Software Deployment', detail: 'Installation, configuration, licensing, and validation' },
      { name: 'Diagnostics and Root-Cause Analysis', detail: 'System-level troubleshooting and escalation resolution' },
    ],
  },
  {
    number: '03',
    category: 'PRODUCT & TOOLING',
    specs: [
      { name: 'React', detail: 'Modern component architecture and state management' },
      { name: 'TypeScript', detail: 'Typed, scalable frontend and application logic' },
      { name: 'Next.js', detail: 'Production web application architecture and routing' },
      { name: 'Firebase and Firestore', detail: 'Real-time databases, authentication, and cloud persistence' },
      { name: 'Three.js and WebGL', detail: 'Browser-based 3D configurators and interactive graphics' },
      { name: 'Internal Operations Platforms', detail: 'Bespoke tooling like Service Map Planner for field teams' },
    ],
  },
  {
    number: '04',
    category: 'EXECUTION & COMMUNICATION',
    specs: [
      { name: 'Customer Training', detail: 'Empowering administrators and end users for sustained adoption' },
      { name: 'Technical Documentation', detail: 'Creating clear runbooks, guides, and procedural handoffs' },
      { name: 'Multi-Site Coordination', detail: 'Managing logistics and nationwide deployment schedules' },
      { name: 'Escalation Management', detail: 'Resolving critical incidents and maintaining customer confidence' },
      { name: 'Cross-Functional Collaboration', detail: 'Connecting sales, customer success, and engineering' },
      { name: 'English and Spanish Communication', detail: 'Bilingual technical fluency across verbal and written domains' },
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
              05 // CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[var(--text-primary)] tracking-tight mt-2 font-display">
              What I bring to a technical customer role
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            A combination of customer-facing engineering, systems knowledge, implementation experience, and practical software development.
          </p>
        </div>

        {/* Specification Sheet Layout */}
        <div className="space-y-12">
          {technicalCatalog.map((section) => (
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
                      {item.detail && (
                        <span className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal text-left sm:text-right">
                          {item.detail}
                        </span>
                      )}
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
