import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Mail, FileDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MagneticButton } from '../MagneticButton';

export default function HomeContactCta() {
  const reduceMotion = useReducedMotion();
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="contact" className="section-py-xl relative border-t border-[var(--border-subtle)] overflow-hidden">
      <div className="section-container relative z-10 text-left">
        
        {/* Telemetry Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            06 // NEXT STEP
          </span>
          <div className="h-[1px] flex-1 bg-[var(--border)]" />
        </div>

        {/* Dramatic Editorial Headline */}
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-hero-giant font-black uppercase text-[var(--text-primary)] leading-[0.88] tracking-tight mb-8"
        >
          Let&apos;s make complex<br />
          technology<br />
          <span className="text-[var(--accent)]">easier to use.</span>
        </motion.h2>

        {/* Sub-Headline & Target Roles */}
        <p className="text-base sm:text-xl text-[var(--text-secondary)] font-normal max-w-2xl leading-relaxed mb-4">
          I&apos;m open to Solutions Engineer, Sales Engineer, Technical Consultant, Implementation Consultant, and Customer Engineering opportunities.
        </p>

        {/* Supporting Line */}
        <p className="font-mono text-xs sm:text-sm text-[var(--text-muted)] max-w-xl mb-12">
          Based in Boca Raton, Florida. Open to remote, hybrid, and national-travel roles.
        </p>

        {/* Action Pathways */}
        <div className="flex flex-wrap items-center gap-5 sm:gap-6 mb-16">
          <MagneticButton strength={0.15}>
            <Link
              to="/contact"
              className="btn-lime inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm sm:text-base cursor-pointer"
            >
              <Mail size={17} />
              <span>LET&apos;S TALK</span>
            </Link>
          </MagneticButton>

          <a
            href="https://www.linkedin.com/in/jose-abel-garcia-a5006616b/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 px-6 py-4 rounded-xl font-medium text-sm sm:text-base"
          >
            <span>VIEW LINKEDIN</span>
            <ArrowUpRight size={16} />
          </a>

          <a
            href="mailto:joseabelgarcia99@gmail.com?subject=R%C3%A9sum%C3%A9%20Request%20-%20Jose%20Garcia&body=Hi%20Jose,%0D%0A%0D%0AI%20would%20like%20to%20request%20a%20copy%20of%20your%20current%20r%C3%A9sum%C3%A9.%0D%0A%0D%0AThanks!"
            title="Résumé available on request"
            className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <FileDown size={15} />
            <span>R&Eacute;SUM&Eacute; ON REQUEST</span>
          </a>
        </div>

        {/* Footer Meta Row */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-baseline justify-between gap-4 font-mono text-xs text-[var(--text-muted)]">
          <span>JOSE GARCIA &middot; BOCA RATON, FL &middot; COMPUTER ENGINEERING</span>
          <span>SYSTEMS LAB // SOLUTIONS ENGINEERING</span>
        </div>

      </div>
    </section>
  );
}
