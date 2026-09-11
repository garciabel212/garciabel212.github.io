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

          {/* Right Column: Clean Editorial Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0c1010] p-4 sm:p-5 relative overflow-hidden"
              style={{
                boxShadow: 'var(--shadow-float)',
              }}
            >
              {/* Subtle top edge highlight */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

              {/* Portrait Image Container */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-white/10 bg-[#070909] mb-4">
                <img
                  src={`${baseUrl}images/jose_garcia_portrait.png`}
                  alt="Jose Garcia — Solutions Engineer & Technical Consultant"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Subtle natural vignette at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1010]/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Active Status Badge in bottom corner */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#070909]/90 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-emerald-400 font-medium">
                      Open to Opportunities
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    Boca Raton, FL
                  </span>
                </div>
              </div>

              {/* Identity & Core Competencies Footer */}
              <div className="px-1 pt-1 pb-1">
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <span className="font-display text-lg font-bold text-white tracking-wide">
                    Jose Garcia
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">
                    B.S. Computer Engineering
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10">
                    Pre-Sales Discovery
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10">
                    Enterprise Deployments
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10">
                    Customer Enablement
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
