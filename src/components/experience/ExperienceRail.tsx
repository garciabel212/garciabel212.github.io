import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const dlsgCapabilities = [
  { name: 'DISCOVERY', desc: 'Pre-sales requirements gathering with library directors and university IT leaders.' },
  { name: 'DEMOS', desc: 'Hands-on technical demonstrations and proof-of-concept evaluations.' },
  { name: 'DEPLOYMENT', desc: 'Nationwide onsite installations of Bookeye scanners and institutional software.' },
  { name: 'NETWORKING', desc: 'Configuring TCP/IP, Active Directory, SMB/SFTP endpoints, and proxy routing.' },
  { name: 'TRAINING', desc: 'Admin and operator training workshops for library staff and university technicians.' },
  { name: 'DIAGNOSTICS', desc: 'Root-cause Windows OS, firmware, hardware calibration, and optical alignment.' },
  { name: 'CUSTOMER SUCCESS', desc: 'Long-term account health, preventative service schedules, and platform support.' },
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
              04 // FIELD &amp; SALES ENGINEERING TIMELINE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[var(--text-primary)] tracking-tight mt-2 font-display">
              The Experience System.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            A progression from carrier-grade subsea network infrastructure to enterprise customer engineering, nationwide deployments, and internal tooling.
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
                    2022 &mdash; PRESENT
                  </span>
                  <span className="font-mono text-[11px] text-[var(--text-muted)] block">
                    Boca Raton, FL (National Travel)
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
                    Customer-facing engineering role spanning pre-sales technical demonstrations, requirements analysis, nationwide hardware and software implementations, customer enablement, and ongoing technical support. Architected and developed Service Map Planner to streamline institutional records and preventive maintenance scheduling.
                  </p>

                  {/* Branching Capabilities System */}
                  <div className="pt-6 border-t border-[var(--border-subtle)]">
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-4">
                      BRANCHING FIELD &amp; PRE-SALES CAPABILITIES:
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {dlsgCapabilities.map((cap) => (
                        <div
                          key={cap.name}
                          className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)]/60 hover:border-[var(--border-strong)] transition-colors text-left"
                        >
                          <div className="flex items-center gap-1.5 mb-1">
                            <CheckCircle2 size={13} className="text-[var(--accent)] shrink-0" />
                            <span className="font-mono text-xs font-bold text-[var(--text-primary)]">
                              {cap.name}
                            </span>
                          </div>
                          <p className="text-[11px] text-[var(--text-muted)] leading-normal">
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
                    2021 &mdash; 2022
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

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    Carrier-grade subsea fiber-optic network infrastructure monitoring, real-time telemetry diagnostics, critical incident response, and SLA-driven escalation management across international telecommunications circuits.
                  </p>

                  <div className="flex flex-wrap gap-2 font-mono text-xs text-[var(--text-muted)]">
                    <span className="px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                      Subsea Fiber Optics
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                      Network Monitoring
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                      Incident Management
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                      Carrier SLAs
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
