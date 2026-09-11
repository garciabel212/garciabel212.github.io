import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, FileDown, ArrowUpRight, MapPin, CheckCircle2 } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="relative min-h-[88vh] flex flex-col justify-between overflow-hidden bg-[#070909] pt-28 pb-12 lg:pt-36 lg:pb-16 text-slate-200">
      {/* Soft overhead spotlight from upper center/left */}
      <div
        className="absolute -top-32 left-1/3 -translate-x-1/2 w-[900px] h-[550px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 50%, transparent 75%)',
        }}
      />

      <div className="section-container relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Identity, Title, Intro, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Eyebrow badge */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-md border border-white/10 bg-white/[0.03]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs text-slate-300 uppercase tracking-wider">
                Personal Portfolio &middot; Available for Roles
              </span>
            </motion.div>

            {/* Primary Visual Element: Jose Garcia */}
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-[0.94] mb-4 hero-heading-shadow"
            >
              Jose Garcia
            </motion.h1>

            {/* Fixed Title */}
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-xl sm:text-2xl font-semibold text-slate-200 tracking-tight mb-3"
            >
              Solutions Engineer &amp; Technical Consultant
            </motion.p>

            {/* Location & Credentials Line */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 font-mono text-xs sm:text-sm text-slate-400 mb-6"
            >
              <MapPin size={14} className="text-slate-500 shrink-0" />
              <span>Boca Raton, Florida &middot; B.S. Computer Engineering &middot; English &amp; Spanish</span>
            </motion.div>

            {/* Short Introduction Paragraph */}
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="max-w-xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8"
            >
              I help organizations turn complex technology into practical customer outcomes—from technical discovery and demonstrations to implementation, training, and long-term support.
            </motion.p>

            {/* CTAs: Primary Lime, Secondary Résumé, Tertiary LinkedIn */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5"
            >
              {/* Primary CTA */}
              <MagneticButton strength={0.15}>
                <a
                  href="#selected-work"
                  className="btn-lime inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base cursor-pointer"
                >
                  <span>View selected work</span>
                  <ArrowDown size={16} />
                </a>
              </MagneticButton>

              {/* Secondary CTA */}
              <a
                href={`${baseUrl}Jose-Garcia-Resume.pdf`}
                download
                className="btn-secondary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm sm:text-base"
                aria-label="Download Résumé PDF"
              >
                <FileDown size={16} />
                <span>Download résumé</span>
              </a>

              {/* Tertiary Link */}
              <a
                href="https://www.linkedin.com/in/jose-abel-garcia-a5006616b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors group px-2 py-3"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Architectural JG Monogram & Career Snapshot Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0c1010] p-6 sm:p-8 relative overflow-hidden"
              style={{
                boxShadow: 'var(--shadow-float)',
              }}
            >
              {/* Subtle top edge highlight */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

              {/* Header: Monogram & Identity */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/[0.08]">
                <div className="w-16 h-16 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center font-display text-2xl font-black text-white tracking-widest shadow-card select-none shrink-0">
                  JG
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-white tracking-wide leading-snug">
                    Jose Garcia
                  </h2>
                  <p className="font-mono text-xs text-slate-400 mt-0.5">
                    Solutions Engineer
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-mono text-emerald-400">
                      Open to New Opportunities
                    </span>
                  </div>
                </div>
              </div>

              {/* Competency pillars summary */}
              <div className="py-5 space-y-3 border-b border-white/[0.08] text-xs">
                <div className="flex items-start gap-2.5 text-slate-300">
                  <CheckCircle2 size={15} className="text-white/60 mt-0.5 shrink-0" />
                  <span><strong>Customer-Facing Pre-Sales:</strong> Discovery, product demos, requirements analysis, technical objection handling.</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-300">
                  <CheckCircle2 size={15} className="text-white/60 mt-0.5 shrink-0" />
                  <span><strong>Full Lifecycle Delivery:</strong> Onsite/remote deployments, customer training, post-sales technical account health.</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-300">
                  <CheckCircle2 size={15} className="text-white/60 mt-0.5 shrink-0" />
                  <span><strong>Full-Stack Builder:</strong> TypeScript, React, Next.js, Firebase, network &amp; hardware systems integration.</span>
                </div>
              </div>

              {/* Quick stats / metadata row */}
              <div className="pt-4 grid grid-cols-2 gap-4 text-left">
                <div>
                  <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                    LOCATION
                  </span>
                  <span className="text-xs font-semibold text-slate-200 mt-0.5 block">
                    Boca Raton, FL
                  </span>
                  <span className="text-[11px] text-slate-400 block">
                    Nationwide Travel
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                    EDUCATION
                  </span>
                  <span className="text-xs font-semibold text-slate-200 mt-0.5 block">
                    B.S. Computer Eng.
                  </span>
                  <span className="text-[11px] text-slate-400 block">
                    Bilingual English / Spanish
                  </span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Subtle Bottom Divider */}
      <div className="section-container relative z-10 pt-8">
        <div className="w-full h-px bg-white/[0.08]" />
      </div>
    </section>
  );
}
