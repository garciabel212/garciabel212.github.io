import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const lifecycleSteps = [
  {
    step: '01',
    name: 'DISCOVER',
    subtitle: 'Discovery',
    description: 'Clarify customer goals, technical requirements, environment, stakeholders, and constraints.',
    skills: ['Needs Analysis', 'Environment Scoping', 'Constraints Mapping'],
  },
  {
    step: '02',
    name: 'DESIGN',
    subtitle: 'Design',
    description: 'Translate requirements into a practical solution, configuration, and implementation plan.',
    skills: ['Solution Blueprint', 'Configuration Planning', 'Timeline & Rollout'],
  },
  {
    step: '03',
    name: 'DEMONSTRATE',
    subtitle: 'Demonstrate',
    description: 'Show how the solution addresses the customer’s needs through tailored demonstrations or validation.',
    skills: ['Tailored Demonstrations', 'Validation Testing', 'Proof-of-Concept'],
  },
  {
    step: '04',
    name: 'DEPLOY',
    subtitle: 'Deploy',
    description: 'Configure, integrate, test, and roll out the solution onsite or remotely.',
    skills: ['System Configuration', 'Hardware/Software Integration', 'Remote & Onsite Rollout'],
  },
  {
    step: '05',
    name: 'ENABLE',
    subtitle: 'Enable',
    description: 'Train users and administrators with clear documentation, handoff, and practical guidance.',
    skills: ['Administrator Training', 'End-User Enablement', 'Documentation & Handoff'],
  },
  {
    step: '06',
    name: 'SUPPORT',
    subtitle: 'Support',
    description: 'Diagnose issues, manage escalations, provide proactive maintenance, and improve the customer experience over time.',
    skills: ['Root-Cause Analysis', 'Escalation Management', 'Proactive Maintenance'],
  },
];

export default function SolutionLifecycle() {
  const [activeIdx, setActiveIdx] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-py relative border-t border-[var(--border-subtle)] overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--border-subtle)] mb-12">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
              03 // HOW I WORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[var(--text-primary)] tracking-tight mt-2 font-display">
              From first conversation to working outcome
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            I support the full customer lifecycle—from understanding the problem and demonstrating a solution to implementation, training, troubleshooting, and continued improvement.
          </p>
        </div>

        {/* DESKTOP: INTERACTIVE HORIZONTAL SYSTEM RAIL */}
        <div className="hidden lg:block">
          {/* Top Stage Indicators */}
          <div className="grid grid-cols-6 gap-2 relative">
            {/* Continuous Track Line */}
            <div className="absolute top-5 left-0 right-0 h-[2px] bg-[var(--border)] z-0" />
            
            {/* Active Indicator Fill */}
            <motion.div
              className="absolute top-5 left-0 h-[2px] bg-[var(--accent)] z-0"
              initial={false}
              animate={{
                width: `${((activeIdx + 1) / lifecycleSteps.length) * 100}%`,
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />

            {lifecycleSteps.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className="relative z-10 flex flex-col items-start pt-2 pb-6 text-left group cursor-pointer focus-visible:outline-none"
                >
                  {/* Step Pip */}
                  <div
                    className={`w-6 h-6 rounded-full border flex items-center justify-center font-mono text-[10px] font-bold transition-all duration-300 mb-4 ${
                      isActive
                        ? 'bg-[var(--accent)] text-[var(--accent-text)] border-[var(--accent)] scale-110 shadow-[var(--shadow-lime)]'
                        : idx < activeIdx
                        ? 'bg-[var(--surface-elevated)] text-[var(--accent)] border-[var(--accent)]'
                        : 'bg-[var(--surface)] text-[var(--text-muted)] border-[var(--border)] group-hover:border-[var(--text-secondary)]'
                    }`}
                  >
                    {item.step}
                  </div>

                  {/* Step Title */}
                  <span
                    className={`font-display text-base font-bold uppercase tracking-wider transition-colors duration-200 ${
                      isActive ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {item.name}
                  </span>
                  <span className="font-mono text-[11px] text-[var(--text-muted)] mt-0.5">
                    {item.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Panel */}
          <div className="mt-8 p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-medium)] transition-all">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-8">
                <div className="flex items-center gap-3 font-mono text-xs uppercase text-[var(--accent)] mb-2">
                  <span>STAGE {lifecycleSteps[activeIdx].step}</span>
                  <span>&middot;</span>
                  <span>{lifecycleSteps[activeIdx].subtitle}</span>
                </div>
                <h3 className="font-display text-3xl font-black uppercase text-[var(--text-primary)] tracking-tight mb-3">
                  {lifecycleSteps[activeIdx].name}
                </h3>
                <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                  {lifecycleSteps[activeIdx].description}
                </p>
              </div>
              <div className="col-span-4 border-l border-[var(--border-subtle)] pl-8">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)] block mb-3">
                  CORE DELIVERABLES &amp; SKILLS
                </span>
                <div className="flex flex-wrap gap-2">
                  {lifecycleSteps[activeIdx].skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-primary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET: CLEAN VERTICAL SYSTEM */}
        <div className="lg:hidden space-y-6">
          {lifecycleSteps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-low)]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[var(--accent)]">
                  {item.step} // {item.name}
                </span>
                <span className="font-mono text-[11px] text-[var(--text-muted)]">
                  {item.subtitle}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.skills.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-secondary)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
