import { lazy, Suspense } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, FileDown, Mail, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';
import HeroRoleTicker from './HeroRoleTicker';
import HeroSceneFallback from './HeroSceneFallback';

// Lazy-load the Three.js WebGL scene to preserve fast initial page load
const SystemsCoreScene = lazy(() => import('./SystemsCoreScene'));

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-12 sm:pb-16 overflow-hidden">
      <div className="section-container relative z-10 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: 55% TYPOGRAPHY & SYSTEMS POSITIONING */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Engineering Telemetry Tag */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2.5 font-mono text-[11px] sm:text-xs text-[var(--text-muted)] tracking-widest uppercase mb-6"
            >
              <span className="text-[var(--accent)] font-semibold">JOSE GARCIA // SOUTH FLORIDA</span>
              <span className="text-[var(--border-strong)]">&middot;</span>
              <span>SOLUTIONS ENGINEERING &middot; PRODUCT &middot; SYSTEMS</span>
            </motion.div>

            {/* Massive Editorial Name Header */}
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-display font-black text-hero-giant text-[var(--text-primary)] tracking-tight leading-[0.86] uppercase mb-6 select-none"
            >
              JOSE<br />GARCIA
            </motion.h1>

            {/* Core Value Proposition */}
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl font-medium text-[var(--text-primary)] max-w-2xl leading-snug mb-3"
            >
              Solutions Engineer building at the intersection of technology, customers, systems, and product.
            </motion.p>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl leading-relaxed mb-8"
            >
              I translate complex technology into solutions people can understand, adopt, and operate.
            </motion.p>

            {/* Actions / CTAs */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10"
            >
              {/* Primary CTA */}
              <MagneticButton strength={0.15}>
                <a
                  href="#selected-work"
                  className="btn-lime inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base cursor-pointer"
                >
                  <span>VIEW SELECTED WORK</span>
                  <ArrowDown size={16} />
                </a>
              </MagneticButton>

              {/* Contact Link */}
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm sm:text-base cursor-pointer"
              >
                <Mail size={16} />
                <span>CONTACT ME</span>
              </a>

              {/* Résumé Download */}
              <a
                href={`${baseUrl}Jose-Garcia-Resume.pdf`}
                download
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="Download Résumé PDF"
              >
                <FileDown size={15} />
                <span>RÉSUMÉ</span>
              </a>
            </motion.div>

            {/* Real Portrait Verification & Credential Strip */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3.5 p-2 pr-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-low)]"
            >
              <div className="w-11 h-11 rounded-lg overflow-hidden border border-[var(--border)] shrink-0 bg-[var(--surface-elevated)]">
                <img
                  src={`${baseUrl}images/jose_garcia_portrait.png`}
                  alt="Jose Garcia"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                  <span className="font-mono text-xs font-semibold text-[var(--text-primary)]">
                    FAU B.S. Computer Engineering
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[var(--text-muted)] block mt-0.5">
                  English &amp; Spanish &middot; Nationwide Deployments
                </span>
              </div>
              <a
                href="https://www.linkedin.com/in/jose-abel-garcia-a5006616b/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-1"
                aria-label="LinkedIn Profile"
              >
                <ArrowUpRight size={16} />
              </a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: 45% INTERACTIVE SYSTEMS CORE SCENE */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="w-full flex items-center justify-center relative"
            >
              {/* Subtle Atmospheric Backdrop behind 3D core */}
              <div
                className="absolute inset-0 rounded-full blur-[90px] opacity-40 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                }}
              />

              <Suspense fallback={<HeroSceneFallback />}>
                <SystemsCoreScene />
              </Suspense>
            </motion.div>
          </div>

        </div>
      </div>

      {/* BOTTOM TELEMETRY TICKER */}
      <div className="section-container relative z-10 w-full mt-8 border-t border-[var(--border-subtle)] pt-4">
        <HeroRoleTicker />
      </div>
    </section>
  );
}
