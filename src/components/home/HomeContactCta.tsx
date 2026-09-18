import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Mail, FileDown, MapPin, Calendar } from 'lucide-react';

export default function HomeContactCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="section-py border-t border-[var(--border)] relative scroll-mt-20 bg-[var(--surface-warm-translucent)]"
      data-contour-section="contact"
    >
      <div className="section-container relative z-10 text-left">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
            GET IN TOUCH // LET&apos;S TALK
          </span>
          <div className="h-[1px] flex-1 bg-[var(--border)]" />
        </div>

        {/* Editorial Headline */}
        <div className="max-w-4xl mb-8">
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-[1.15] mb-5"
          >
            Ready to turn complex technology into intuitive, high-impact solutions.
          </motion.h2>

          <p className="text-base sm:text-xl text-[var(--text-secondary)] font-normal leading-relaxed mb-3">
            Open to Solutions Engineer, Sales Engineer, Technical Consultant, and Customer Engineering roles.
          </p>

          <p className="font-mono text-xs sm:text-sm text-[var(--text-muted)]">
            Based in Boca Raton, Florida &middot; Open to remote, hybrid, and nationwide-travel roles (up to 40%).
          </p>
        </div>

        {/* Direct Contact Options Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          
          {/* Email Card */}
          <a
            href="mailto:joseabelgarcia99@gmail.com"
            className="card p-6 bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-low)] hover:border-[var(--accent)] group flex flex-col justify-between"
          >
            <div>
              <span className="meta-label block mb-2">DIRECT INQUIRY</span>
              <h3 className="font-serif font-bold text-lg text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-1">
                joseabelgarcia99@gmail.com
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Send a direct email for hiring inquiries, technical discussions, or consulting.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--accent)]">
              <Mail size={14} />
              <span>Send Message</span>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/jose-abel-garcia-a5006616b/"
            target="_blank"
            rel="noopener noreferrer"
            className="card p-6 bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-low)] hover:border-[var(--accent)] group flex flex-col justify-between"
          >
            <div>
              <span className="meta-label block mb-2">PROFESSIONAL NETWORK</span>
              <h3 className="font-serif font-bold text-lg text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-1">
                LinkedIn Profile
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Connect on LinkedIn to review recommendations, endorsements, and credentials.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--accent)]">
              <ArrowUpRight size={14} />
              <span>View Profile</span>
            </div>
          </a>

          {/* Résumé Request Card */}
          <a
            href="mailto:joseabelgarcia99@gmail.com?subject=R%C3%A9sum%C3%A9%20Request%20-%20Jose%20Garcia&body=Hi%20Jose,%0D%0A%0D%0AI%20would%20like%20to%20request%20a%20copy%20of%20your%20current%20r%C3%A9sum%C3%A9.%0D%0A%0D%0AThanks!"
            title="Request current résumé via email"
            className="card p-6 bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-low)] hover:border-[var(--accent)] group flex flex-col justify-between"
          >
            <div>
              <span className="meta-label block mb-2">CURRICULUM VITAE</span>
              <h3 className="font-serif font-bold text-lg text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-1">
                Résumé on Request
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Receive an up-to-date PDF with detailed deployment histories and verified references.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--accent)]">
              <FileDown size={14} />
              <span>Request PDF Copy</span>
            </div>
          </a>

        </div>

        {/* Footer Meta Strip */}
        <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-baseline justify-between gap-3 font-mono text-xs text-[var(--text-muted)]">
          <span>Jose Garcia &middot; Solutions Engineer &middot; B.S. Computer Engineering, FAU</span>
          <span>Boca Raton, FL &middot; Open to Travel up to 40%</span>
        </div>

      </div>
    </section>
  );
}
