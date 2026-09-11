import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#070909] pt-24 pb-8 lg:pt-28 lg:pb-12 text-slate-200">
      {/* Soft overhead spotlight from upper center/left */}
      <div
        className="absolute -top-32 left-1/3 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.01) 50%, transparent 75%)',
        }}
      />

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

            {/* Oversized Condensed Headline with Restrained Text Shadow */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight uppercase leading-[0.92] mb-6 hero-heading-shadow"
            >
              From ideas <br />
              <span className="text-white">to working</span> <br />
              <span className="text-white">systems.</span>
            </motion.h1>

            {/* Subtitle (no text shadow) */}
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
                  className="btn-lime inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base cursor-pointer"
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
              <div className="w-8 h-px bg-slate-800" />
              <div className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase leading-tight">
                REAL PROBLEMS. <br />
                PRACTICAL SOLUTIONS.
              </div>
            </motion.div>
          </div>

          {/* Right Column: Suspended 3D Garage Visual & Floating Service Map Panel */}
          <div className="lg:col-span-6 relative flex items-center justify-center overflow-visible pt-4 lg:pt-0">
            
            {/* Soft dark radial vignette behind it, with no obvious circular edge */}
            <div
              className="absolute -inset-10 sm:-inset-16 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 85% 75% at 50% 50%, rgba(7,9,9,0) 25%, rgba(7,9,9,0.75) 70%, #070909 100%)',
              }}
            />

            {/* Overhead spotlight beam falling downward and slightly right */}
            <div
              className="absolute -top-20 -left-10 w-[130%] h-[130%] pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 80% 60% at 30% 10%, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.01) 55%, transparent 80%)',
              }}
            />

            {/* Suspended Garage Stage Wrapper - overflow-visible preserves suspended elevation */}
            <div className="relative w-full overflow-visible py-4 sm:py-6">
              
              {/* Suspended Garage Visual with drop-shadow and top-edge highlight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full rounded-2xl border border-white/10 bg-[#0c1010] garage-drop-shadow overflow-hidden group"
                style={{
                  filter: 'drop-shadow(0 36px 42px rgba(0, 0, 0, 0.72))',
                  boxShadow: 'var(--shadow-hero)',
                }}
              >
                {/* Subtle top edge highlight (not a blue glow) */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent z-20 pointer-events-none" />

                {/* Garage Diorama Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={`${baseUrl}images/hero_garage_diorama.jpg`}
                    alt="3D Miniature Garage Workshop Diorama"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                  
                  {/* Natural surface depth shading */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070909]/90 via-transparent to-black/25 pointer-events-none" />

                  {/* Garage Wall Quote */}
                  <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-right font-mono text-[9px] text-slate-400/80 tracking-widest hidden sm:block pointer-events-none">
                    SMALL IDEAS. <br />
                    BIGGER POSSIBILITIES.
                  </div>
                </div>
              </motion.div>

              {/* Floating Service Map Planner Panel - Physically Layered in Front */}
              <motion.div
                initial={{ opacity: 0, x: -16, y: 24 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, delay: 0.45 }}
                className="absolute left-2 sm:-left-4 md:-left-6 bottom-1 sm:-bottom-3 w-[66%] sm:w-[60%] aspect-[16/10] rounded-xl border border-white/10 bg-[#111616] z-30 overflow-hidden transition-all duration-300 hover:translate-y-[-4px]"
                style={{
                  boxShadow: 'var(--shadow-float)',
                  transform: 'perspective(1200px) rotateY(4deg) rotateX(-2deg)',
                }}
              >
                {/* Subtle top highlight on floating panel */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20 pointer-events-none" />

                {/* Tablet UI Preview */}
                <img
                  src={`${baseUrl}images/service_map_tablet.jpg`}
                  alt="Service Map Planner Floating Interface"
                  className="w-full h-full object-cover"
                />
              </motion.div>

            </div>

            {/* Micro tag line bottom right */}
            <div className="absolute -bottom-8 right-0 hidden sm:flex items-center gap-3 pointer-events-none">
              <div className="font-mono text-[9px] tracking-[0.2em] text-slate-500 uppercase text-right leading-tight">
                IDEAS &middot; HARDWARE <br />
                SOFTWARE &middot; REAL-WORLD IMPACT
              </div>
              <div className="w-8 h-px bg-slate-800" />
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
