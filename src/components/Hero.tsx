import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown, Download, ShieldCheck, Sparkles } from 'lucide-react';
import HeroVisual from './HeroVisual';
import { MagneticButton } from './MagneticButton';

const roles = [
  'Solutions Engineer',
  'Sales Engineer',
  'Technical Consultant',
  'Pre-Sales Engineer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, reduceMotion, roleIndex]);

  const visibleRole = reduceMotion ? roles[0] : displayed;

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-navy-950 pt-28 pb-16 lg:pt-32 lg:pb-20">
      {/* Atmospheric Luminous Gradients */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[700px] w-[700px] rounded-full opacity-40 blur-[130px]"
        style={{ background: 'radial-gradient(circle, #1E40AF 0%, #3B82F6 25%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-25 blur-[140px]"
        style={{ background: 'radial-gradient(circle, #8B5CF6 0%, #6366F1 30%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-10 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)' }}
      />

      {/* Subtle Dot Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #94A3B8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Content Container */}
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Top Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3.5 py-1.5 text-xs font-mono font-medium uppercase tracking-wider text-accent-blue-light backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse" />
                Computer Engineer &middot; Boca Raton, FL
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <Sparkles size={13} className="text-accent-cyan" />
                Available for Senior Roles ($120K&ndash;$170K+)
              </span>
            </motion.div>

            {/* Oversized Editorial Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-white leading-[0.98]">
                Jose Garcia
              </h1>
            </motion.div>

            {/* Dynamic Typewriter Role Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 mb-6 flex items-center h-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.08] bg-surface-elevated/70 backdrop-blur-lg">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">ROLE:</span>
                <span className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue-light via-accent-cyan to-white">
                  {visibleRole}
                </span>
                {!reduceMotion && (
                  <span className="h-5 w-0.5 animate-pulse bg-accent-cyan" />
                )}
              </div>
            </motion.div>

            {/* Editorial Lead Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-2xl text-lg sm:text-xl font-normal leading-relaxed text-slate-300 mb-9"
            >
              Translating complex technical architecture into measurable business value. Hands-on Computer Engineer
              specializing in customer discovery, enterprise software &amp; hardware integrations, technical demonstrations,
              and full-cycle customer success.
            </motion.p>

            {/* Magnetic CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <MagneticButton strength={0.2}>
                <Link
                  to="/projects"
                  className="btn-primary flex items-center gap-2.5 px-7 py-3.5 text-base font-semibold shadow-glow-blue"
                >
                  Explore Technical Work
                  <ArrowRight size={18} />
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <a
                  href={`${import.meta.env.BASE_URL}Jose-Garcia-Resume.pdf`}
                  download
                  className="btn-secondary flex items-center gap-2 px-6 py-3.5 text-base"
                >
                  <Download size={17} />
                  Download Resume
                </a>
              </MagneticButton>

              <a
                href="https://www.linkedin.com/in/jose-abel-garcia-a5006616b/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost px-5 py-3.5 text-base text-slate-400 hover:text-white"
                aria-label="Connect with Jose Garcia on LinkedIn"
              >
                LinkedIn &rarr;
              </a>
            </motion.div>

            {/* Trust and Qualifications Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-accent-cyan" />
                <span>Bilingual: English &amp; Spanish (Fluent)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>AWS Cloud Practitioner Certified</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-blue" />
                <span>B.S. Computer Engineering &middot; FAU</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dimensional Engineering Visual */}
          <div className="lg:col-span-5 relative w-full h-[460px] lg:h-[540px] flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 1.2, duration: 0.6 }}
          className="mt-12 hidden lg:flex flex-col items-center justify-center gap-1.5 text-slate-400"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.25em]">Scroll to Explore</span>
          <ChevronDown size={16} className={reduceMotion ? '' : 'animate-bounce text-accent-blue-light'} />
        </motion.div>
      </div>
    </section>
  );
}
