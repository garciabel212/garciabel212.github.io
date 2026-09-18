import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Mail, FileDown, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SignalRail from './SignalRail';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const navigate = useNavigate();
  const baseUrl = import.meta.env.BASE_URL;

  const portraitRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [outlineActive, setOutlineActive] = useState(false);

  // Parallax tracking for hero elements (max 2px-8px)
  useEffect(() => {
    if (reduceMotion) return;
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 16; // -8 to +8
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [reduceMotion]);

  // Subtle periodic transition between solid and outline contour for the punchline
  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => {
      setOutlineActive((prev) => !prev);
    }, 4500);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    navigate({ pathname: '/', hash: `#${id}` });
  };

  return (
    <div className="relative flex flex-col justify-between overflow-hidden" data-contour-section="hero">
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="section-container relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* ─── LEFT COLUMN: EDITORIAL TYPOGRAPHY & IDENTITY (7 COLS) ─── */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Telemetry Tag */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE_EXPO }}
                className="flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase mb-5"
              >
                <span className="text-[var(--accent)] font-semibold">Jose Garcia</span>
                <span className="text-[var(--border-strong)]">&middot;</span>
                <span>South Florida</span>
                <span className="text-[var(--border-strong)]">&middot;</span>
                <span>Sales Engineering &middot; Solutions Consulting</span>
              </motion.div>

              {/* Authoritative Editorial Headline with Stacked Linebreaks */}
              <motion.h1
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE_EXPO, delay: 0.08 }}
                className="font-serif font-bold text-hero-giant text-[var(--text-primary)] tracking-tight leading-[1.06] mb-6 uppercase"
                aria-label="I turn complex technology into solutions people can use"
              >
                I turn complex<br />
                technology into<br />
                <span
                  className={`cursor-pointer transition-all duration-700 select-none ${
                    outlineActive ? 'text-contour-outline' : 'text-[var(--text-primary)] hover:text-contour-outline'
                  }`}
                  onClick={() => setOutlineActive((v) => !v)}
                  title="Click to toggle contour illumination"
                >
                  solutions people
                </span><br />
                can use.
              </motion.h1>

              {/* Precise Value Proposition */}
              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.16 }}
                className="text-base sm:text-lg lg:text-xl font-normal text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-8"
              >
                Customer-facing engineer bridging technical discovery, tailored solution demonstrations, 
                hardware and software implementation, and long-term customer success. 
                Translating deep technical execution into verifiable business impact.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.22 }}
                className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-4"
              >
                <a
                  href="#work"
                  onClick={(e) => scrollToSection(e, 'work')}
                  className="btn-primary inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base cursor-pointer shadow-[var(--shadow-blue)] group"
                >
                  <span>Explore Selected Work</span>
                  <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="btn-secondary inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm sm:text-base cursor-pointer"
                >
                  <Mail size={16} className="text-[var(--text-secondary)]" />
                  <span>Let&apos;s Connect</span>
                </a>

                <a
                  href="mailto:joseabelgarcia99@gmail.com?subject=R%C3%A9sum%C3%A9%20Request%20-%20Jose%20Garcia&body=Hi%20Jose,%0D%0A%0D%0AI%20would%20like%20to%20request%20a%20copy%20of%20your%20current%20r%C3%A9sum%C3%A9.%0D%0A%0D%0AThanks!"
                  title="Request current résumé via email"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-highlight)] border border-transparent hover:border-[var(--border)] transition-colors"
                  aria-label="Request Résumé"
                >
                  <FileDown size={15} />
                  <span>R&Eacute;SUM&Eacute; ON REQUEST</span>
                </a>
              </motion.div>

            </div>

            {/* ─── RIGHT COLUMN: PORTRAIT IN CONTOUR FIELD (5 COLS) ─── */}
            <div className="lg:col-span-5 flex justify-center items-center relative mt-8 lg:mt-0">
              
              {/* Multi-layer Parallax Portrait Container */}
              <motion.div
                ref={portraitRef}
                style={{
                  transform: reduceMotion ? 'none' : `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`,
                  transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="relative w-full max-w-sm sm:max-w-md group"
              >
                {/* 1. Contour Illumination Glow Aura */}
                <div
                  className="absolute -inset-4 rounded-3xl blur-2xl opacity-45 pointer-events-none transition-opacity duration-700 -z-10 group-hover:opacity-75"
                  style={{
                    background: 'radial-gradient(circle, var(--contour-field-blue) 0%, rgba(36, 82, 198, 0.08) 60%, transparent 80%)',
                  }}
                  aria-hidden="true"
                />

                {/* 2. Topographic Elevation Frame */}
                <div className="relative rounded-3xl p-3 sm:p-4 bg-[var(--surface-warm-translucent)] border border-[var(--border)] shadow-[var(--shadow-floating)] backdrop-blur-md">
                  
                  {/* Portrait Image Container */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                    <img
                      src={`${baseUrl}images/jose_garcia_portrait.png`}
                      alt="Jose Garcia - Solutions Engineer and Computer Engineer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      loading="eager"
                    />

                    {/* Edge Contour Shimmer Line */}
                    <div
                      className="absolute inset-0 pointer-events-none rounded-2xl border border-white/20 dark:border-white/10"
                      aria-hidden="true"
                    />

                    {/* Active Telemetry Chip */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-950/85 text-emerald-300 border border-emerald-500/30 shadow-md backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Field Solutions Active</span>
                      </span>
                    </div>
                  </div>

                  {/* Base Metadata Tag */}
                  <div className="pt-3.5 px-1 flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                    <span className="text-[var(--text-primary)] font-semibold">Jose Garcia, B.S. CE</span>
                    <a
                      href="https://www.linkedin.com/in/jose-abel-garcia-a5006616b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--accent)] hover:underline"
                    >
                      <span>LinkedIn Profile</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>

              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* ─── CREDIBILITY SIGNAL RAIL DIRECTLY UNDERNEATH HERO ─── */}
      <SignalRail />
    </div>
  );
}
