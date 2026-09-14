import { motion, useReducedMotion } from 'framer-motion';

const systemPillars = [
  {
    label: 'DISCOVER',
    description: 'Clarify customer goals, technical requirements, stakeholders, environments, and constraints.',
  },
  {
    label: 'DEMONSTRATE',
    description: 'Translate product capabilities into focused technical demonstrations, evaluations, and proof-of-concept conversations.',
  },
  {
    label: 'DEPLOY',
    description: 'Configure, integrate, validate, and roll out hardware and software onsite or remotely.',
  },
  {
    label: 'ENABLE',
    description: 'Train customers, document the solution, support adoption, and remain involved after implementation.',
  },
];

export default function PositioningStatement() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-py relative border-t border-[var(--border-subtle)] overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Section Header Telemetry Tag */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            01 // WHAT I DO
          </span>
          <div className="h-[1px] flex-1 bg-[var(--border)]" />
        </div>

        {/* Large Editorial Typographic Header & Paragraphs */}
        <div className="max-w-5xl">
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-editorial-title font-black uppercase text-[var(--text-primary)] leading-[0.94] tracking-tight mb-8"
          >
            I help technology work in the real world.
          </motion.h2>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-base sm:text-lg text-[var(--text-primary)] font-medium leading-relaxed max-w-3xl mb-4"
          >
            I help customers move from problem to working solution—clarifying requirements, demonstrating the right approach, deploying the system, and making adoption stick.
          </motion.p>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed max-w-3xl mb-14"
          >
            My background combines computer engineering, field implementation, technical troubleshooting, customer communication, and practical software development. That allows me to connect business needs with the systems and people required to deliver a successful outcome.
          </motion.p>
        </div>

        {/* Four Connected Systems Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-[var(--border-subtle)]">
          {systemPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.label}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col text-left group"
            >
              <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--text-muted)] mb-2">
                <span className="text-[var(--accent)] font-semibold">0{idx + 1}</span>
                <span>// PILLAR</span>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2">
                {pillar.label}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
