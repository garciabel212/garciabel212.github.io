import { motion, useReducedMotion } from 'framer-motion';

const systemPillars = [
  { label: 'CUSTOMERS', description: 'Technical discovery, product demonstrations, executive alignment' },
  { label: 'SYSTEMS', description: 'Windows diagnostics, enterprise networks, hardware integrations' },
  { label: 'PRODUCT', description: 'Bespoke field tooling, workflow architecture, intuitive interfaces' },
  { label: 'DEPLOYMENT', description: 'Nationwide onsite installations, hands-on user training, ongoing success' },
];

export default function PositioningStatement() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-py relative border-t border-[var(--border-subtle)] overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Section Header Telemetry Tag */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            01 // SYSTEMS THINKING &amp; POSITIONING
          </span>
          <div className="h-[1px] flex-1 bg-[var(--border)]" />
        </div>

        {/* Large Editorial Typographic Manifesto */}
        <div className="max-w-5xl">
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-editorial-title font-black uppercase text-[var(--text-primary)] leading-[0.94] tracking-tight mb-8"
          >
            I don&apos;t just build software. <br />
            I connect{' '}
            <span className="text-[var(--accent)] underline decoration-[var(--border-strong)] underline-offset-8">
              customers, systems, product, and deployment
            </span>{' '}
            into solutions that work in the real world.
          </motion.h2>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-3xl mb-14"
          >
            Senior customer-facing engineering requires more than isolated code. It demands the ability to speak the language of enterprise IT administrators, conduct persuasive technical discovery with decision-makers, diagnose hardware and network anomalies on site, and engineer custom software tools when off-the-shelf solutions fall short.
          </motion.p>
        </div>

        {/* Four Connected Systems Lines (No Generic Cards) */}
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
                <span>// DOMAIN</span>
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
