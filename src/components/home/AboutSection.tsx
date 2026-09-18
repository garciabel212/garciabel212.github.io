import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Globe, Sparkles, Code2, Compass } from 'lucide-react';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

export default function AboutSection() {
  const reduceMotion = useReducedMotion();
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section
      id="about"
      className="section-py border-t border-[var(--border)] relative scroll-mt-20"
      data-contour-section="quiet"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Portrait Photo (5 Cols) */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE_EXPO }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Soft decorative paper shadow aura */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-30 -z-10"
                style={{
                  background: 'radial-gradient(circle, var(--accent) 0%, transparent 75%)',
                }}
                aria-hidden="true"
              />

              <div className="card p-3 sm:p-4 bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-floating)]">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                  <img
                    src={`${baseUrl}images/jose_garcia_portrait.png`}
                    alt="Jose Garcia - Solutions Engineer and Computer Engineer"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                <div className="pt-4 px-2 flex items-center justify-between font-mono text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-1.5 text-[var(--text-primary)] font-semibold">
                    <MapPin size={13} className="text-[var(--accent)]" />
                    <span>Boca Raton, Florida</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Globe size={13} className="text-[var(--accent)]" />
                    <span>English &middot; Spanish</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Narrative & Philosophy (7 Cols) */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE_EXPO, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span className="font-mono text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
                IDENTITY &amp; PERSPECTIVE
              </span>
            </div>

            <h2 className="text-editorial-title font-serif text-[var(--text-primary)] mb-6">
              Engineer at heart, communicator by practice.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              <p>
                I hold a Bachelor of Science in Computer Engineering from Florida Atlantic University. 
                My career has lived at the dynamic boundary where complex technical systems meet real-world human adoption.
              </p>
              <p>
                Too often, technical solutions fail not because the underlying code or circuitry is flawed, but because 
                the bridge between vendor capability and customer comprehension was never built. Whether I am diagnosing 
                a high-resolution camera sensor over a remote session, guiding university library directors through an enterprise 
                RFP demo, or building software to organize nationwide service schedules, my priority is the same: 
                <strong className="text-[var(--text-primary)] font-medium"> absolute clarity, unwavering reliability, and demonstrable value.</strong>
              </p>
              <p>
                When I&apos;m not in the field or in discussions with clients, I enjoy experimenting with interactive 3D web experiences, 
                exploring architectural modeling, and building lightweight software tools that eliminate organizational friction.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-warm)]">
                <span className="meta-label block mb-1">Education</span>
                <span className="font-serif font-bold text-sm sm:text-base text-[var(--text-primary)] block">
                  B.S. Computer Engineering
                </span>
                <span className="font-mono text-[11px] text-[var(--text-muted)]">FAU &middot; 2022</span>
              </div>

              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-warm)]">
                <span className="meta-label block mb-1">Languages</span>
                <span className="font-serif font-bold text-sm sm:text-base text-[var(--text-primary)] block">
                  Bilingual Fluent
                </span>
                <span className="font-mono text-[11px] text-[var(--text-muted)]">English &amp; Spanish</span>
              </div>

              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-warm)] col-span-2 sm:col-span-1">
                <span className="meta-label block mb-1">Location</span>
                <span className="font-serif font-bold text-sm sm:text-base text-[var(--text-primary)] block">
                  South Florida
                </span>
                <span className="font-mono text-[11px] text-[var(--text-muted)]">Open to Travel (40%)</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
