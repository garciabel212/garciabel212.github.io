import { motion, useReducedMotion } from 'framer-motion';
import { Compass, Sparkles, Terminal, Code2 } from 'lucide-react';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="section-py-xl border-t border-[var(--border)] relative scroll-mt-20 bg-[var(--surface-warm-translucent)]"
      data-contour-section="about"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ─── LEFT: EDITORIAL COPY COLUMN (7 COLS) ─── */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE_EXPO }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span className="font-mono text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
                PERSPECTIVE // PHILOSOPHY
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-[1.12] mb-8">
              Engineer at heart, communicator by practice.
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl font-sans">
              <p>
                My work lives at the dynamic boundary where complex technical systems meet real human operations. 
                Too often, enterprise technology fails not because of the underlying code, but because the bridge 
                between capability and comprehension was never built.
              </p>
              <p>
                Whether diagnosing an optical sensor during an emergency field call, guiding library directors through an 
                enterprise RFP demonstration, or engineering an internal platform to coordinate national travel, my priority is 
                uncompromising: <strong className="text-[var(--text-primary)] font-medium">absolute clarity, dependable execution, and demonstrable value.</strong>
              </p>
              <p>
                Outside of customer deployments, I build lightweight software utilities that eliminate organizational friction 
                and explore 3D graphics on the web—testing the limits of what browser applications can deliver.
              </p>
            </div>
          </motion.div>

          {/* ─── RIGHT: ABSTRACT ARCHITECTURAL VISUAL (5 COLS) ─── */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE_EXPO, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="card w-full max-w-sm p-6 sm:p-8 bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-floating)] relative overflow-hidden">
              
              {/* Subtle background coordinate grid */}
              <div
                className="absolute inset-0 opacity-[0.035] pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, var(--text-primary) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--text-primary) 1px, transparent 1px)
                  `,
                  backgroundSize: '24px 24px',
                }}
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                  <span className="meta-label">ENGINEERING ETHOS</span>
                  <Compass size={16} className="text-[var(--accent)]" />
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-[var(--accent)] mt-0.5">01</span>
                    <div>
                      <strong className="block text-[var(--text-primary)] mb-0.5">Empathy Before Architecture</strong>
                      <span>Understand the operator’s friction before proposing a solution.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-[var(--accent)] mt-0.5">02</span>
                    <div>
                      <strong className="block text-[var(--text-primary)] mb-0.5">Proof Over Promise</strong>
                      <span>Live, functioning systems earn more trust than slide decks.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-[var(--accent)] mt-0.5">03</span>
                    <div>
                      <strong className="block text-[var(--text-primary)] mb-0.5">Autonomous Enablement</strong>
                      <span>Success means the customer thrives without needing us in the room.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] font-mono text-[11px] text-[var(--text-muted)] flex items-center justify-between">
                  <span>Systems Thinking</span>
                  <span className="text-[var(--accent)] font-semibold">Jose Garcia</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
