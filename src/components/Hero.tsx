import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#0A0D14] pt-24 pb-8 lg:pt-28 lg:pb-12 text-slate-200">
      {/* Top index tag */}
      <div className="section-container relative z-10 mb-3">
        <span className="font-mono text-[10px] sm:text-xs text-slate-500 uppercase tracking-[0.25em]">
          02 / IMMERSIVE
        </span>
      </div>

      {/* Main Hero Split */}
      <div className="section-container relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* Left Column: Editorial Headline, Subtext, and Actions */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Category Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-2"
            >
              <span className="font-mono text-xs text-slate-400 tracking-[0.28em] uppercase">
                DISCOVER &nbsp;/&nbsp; SOLVE &nbsp;/&nbsp; BUILD &nbsp;/&nbsp; DEPLOY
              </span>
            </motion.div>

            {/* Oversized Condensed Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight uppercase leading-[0.92] mb-6"
            >
              From ideas <br />
              <span className="text-white">to working</span> <br />
              <span className="text-white">systems.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-base sm:text-lg text-slate-400 font-normal leading-relaxed mb-9"
            >
              I combine customer discovery, technical demonstrations, hardware/software deployment, and building useful applications.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6"
            >
              <MagneticButton strength={0.2}>
                <Link
                  to="/#projects"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#D4F435] text-black font-semibold text-sm sm:text-base hover:bg-[#E2FB52] transition-all duration-300 shadow-[0_0_30px_rgba(212,244,53,0.35)]"
                >
                  <span>Explore work</span>
                  <ArrowRight size={18} />
                </Link>
              </MagneticButton>

              <a
                href={`${baseUrl}Jose-Garcia-Resume.pdf`}
                download
                className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-slate-300 hover:text-white transition-colors group"
              >
                <span>View Resume</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Micro tag line bottom left */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-14 flex items-center gap-3"
            >
              <div className="w-8 h-px bg-slate-700" />
              <div className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase leading-tight">
                REAL PROBLEMS. <br />
                PRACTICAL SOLUTIONS.
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Miniature Garage Stage with Floating Tablet */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Ambient Backlight Glow */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-30 blur-3xl pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 40%, rgba(59,130,246,0.35) 0%, rgba(212,244,53,0.12) 50%, transparent 80%)',
              }}
            />

            {/* 3D Diorama Stage Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full rounded-2xl border border-white/[0.08] bg-[#070A10] overflow-hidden shadow-2xl group"
            >
              {/* The Architectural 3D Diorama Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={`${baseUrl}images/hero_garage_diorama.jpg`}
                  alt="3D Miniature Garage Workshop Diorama"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
                
                {/* Subtle vignette shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A10] via-transparent to-black/30 pointer-events-none" />

                {/* Garage Wall Quote */}
                <div className="absolute top-8 right-8 text-right font-mono text-[9px] text-slate-400/80 tracking-widest hidden sm:block pointer-events-none">
                  SMALL IDEAS. <br />
                  BIGGER POSSIBILITIES.
                </div>
              </div>

              {/* Floating Service Map Planner Tablet Overlay */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="absolute left-4 sm:left-6 top-10 sm:top-14 w-[65%] sm:w-[58%] aspect-[16/10] rounded-xl border border-white/20 bg-black/85 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,244,53,0.15)] overflow-hidden transition-transform duration-500 hover:scale-105"
                style={{
                  transform: 'perspective(1000px) rotateY(6deg) rotateX(-4deg)',
                }}
              >
                <img
                  src={`${baseUrl}images/service_map_tablet.jpg`}
                  alt="Service Map Planner Interface"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Micro tag line bottom right */}
            <div className="absolute -bottom-8 right-0 hidden sm:flex items-center gap-3 pointer-events-none">
              <div className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase text-right leading-tight">
                IDEAS &middot; HARDWARE <br />
                SOFTWARE &middot; REAL-WORLD IMPACT
              </div>
              <div className="w-8 h-px bg-slate-700" />
            </div>
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
