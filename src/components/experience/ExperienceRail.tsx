import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const dlsgCapabilities = [
  {
    name: 'CUSTOMER & SALES ENGINEERING',
    desc: 'Technical discovery, requirements gathering, product demonstrations, solution configuration, technical presentations, and collaboration with sales and engineering teams.',
  },
  {
    name: 'IMPLEMENTATION',
    desc: 'Onsite and remote hardware/software deployments, system configuration, integration, validation, licensing, and customer handoff.',
  },
  {
    name: 'SYSTEMS & TROUBLESHOOTING',
    desc: 'Windows diagnostics, network validation, hardware integration, remote support, root-cause analysis, and escalation management.',
  },
  {
    name: 'TRAINING & CUSTOMER SUCCESS',
    desc: 'Administrator and end-user training, documentation, deployment coordination, preventive maintenance, and long-term account support.',
  },
  {
    name: 'PRODUCT & TOOLING',
    desc: 'Product testing, quality validation, operational reporting, technical documentation, and development of Service Map Planner.',
  },
];

export default function ExperienceRail() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-py relative border-t border-[var(--border-subtle)] overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--border-subtle)] mb-14">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
              04 // EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[var(--text-primary)] tracking-tight mt-2 font-display">
              Engineering that stays close to the customer
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            A career built across telecommunications infrastructure, field engineering, customer implementation, technical support, and internal product development.
          </p>
        </div>

        {/* Technical Timeline Rail (2021 — 2026) */}
        <div className="relative">
          
          {/* Central Connecting Technical Spine */}
          <div className="hidden lg:block absolute left-[32px] top-4 bottom-12 w-[2px] bg-[var(--border)] z-0" />

          {/* ─── STAGE 1: DLSG / IMAGE ACCESS (2022 - PRESENT) ─── */}
          <div className="relative z-10 mb-20">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              
              {/* Left Indicator & Date Badge */}
              <div className="flex items-center gap-4 lg:w-72 shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--accent)] flex items-center justify-center font-mono font-bold text-sm text-[var(--accent)] shadow-[var(--shadow-lime)] shrink-0">
                  NOW
                </div>
                <div>
                  <span className="font-mono text-xs text-[var(--accent)] font-semibold block">
                    OCTOBER 2022 &mdash; PRESENT
                  </span>
                  <span className="font-mono text-[11px] text-[var(--text-muted)] block">
                    Boca Raton, FL &middot; National Travel
                  </span>
                </div>
              </div>

              {/* Main Role & Branching System */}
              <div className="flex-1 w-full text-left">
                <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-medium)] mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[var(--text-primary)] tracking-tight">
                      Digital Library Systems Group / Image Access
                    </h3>
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-secondary)]">
                      FULL-TIME
                    </span>
                  </div>

                  <p className="font-mono text-sm text-[var(--accent)] font-medium mb-4">
                    Service Engineer &middot; Sales Engineering Support
                  </p>

                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                    Customer-facing engineering role spanning technical discovery, product demonstrations, solution configuration, nationwide hardware and software deployments, customer training, troubleshooting, and long-term technical support.
                  </p>

                  {/* Branching Capabilities System */}
                  <div className="pt-6 border-t border-[var(--border-subtle)]">
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-4">
                      CAPABILITY AREAS:
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {dlsgCapabilities.map((cap) => (
                        <div
                          key={cap.name}
                          className="p-3.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)]/60 hover:border-[var(--border-strong)] transition-colors text-left"
                        >
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <CheckCircle2 size={13} className="text-[var(--accent)] shrink-0" />
                            <span className="font-mono text-xs font-bold text-[var(--text-primary)]">
                              {cap.name}
                            </span>
                          </div>
                          <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                            {cap.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ─── STAGE 2: GLOBENET TELECOM (2021 - 2022) ─── */}
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              
              {/* Left Indicator & Date Badge */}
              <div className="flex items-center gap-4 lg:w-72 shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center font-mono text-xs text-[var(--text-muted)] shrink-0">
                  NOC
                </div>
                <div>
                  <span className="font-mono text-xs text-[var(--text-secondary)] font-semibold block">
                    DECEMBER 2021 &mdash; SEPTEMBER 2022
                  </span>
                  <span className="font-mono text-[11px] text-[var(--text-muted)] block">
                    Boca Raton, FL
                  </span>
                </div>
              </div>

              {/* Main Role & Responsibilities */}
              <div className="flex-1 w-full text-left">
                <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-low)]">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="font-display text-2xl font-bold uppercase text-[var(--text-primary)] tracking-tight">
                      GlobeNet Telecom
                    </h3>
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-muted)]">
                      FULL-TIME
                    </span>
                  </div>

                  <p className="font-mono text-sm text-[var(--text-secondary)] font-medium mb-3">
                    Network Operations Center Engineer
                  </p>

                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-4">
                    Network operations role focused on carrier infrastructure monitoring, incident response, real-time diagnostics, escalation management, system reliability, and cross-team communication during network events.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
