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
            06 // NEXT STEPS &middot; GET IN TOUCH
          </span>
          <div className="h-[1px] flex-1 bg-[var(--border)]" />
        </div>

        {/* Dramatic Editorial Headline */}
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-hero-giant font-black uppercase text-[var(--text-primary)] leading-[0.84] tracking-tight mb-8"
        >
          LET&apos;S BUILD<br />
          SOMETHING<br />
          <span className="text-[var(--accent)]">THAT WORKS.</span>
        </motion.h2>

        {/* Sub-Headline & Target Roles */}
        <p className="text-base sm:text-xl text-[var(--text-secondary)] font-normal max-w-2xl leading-relaxed mb-12">
          Open to senior customer-facing technical roles—including Solutions Engineer, Sales Engineer, Technical Consultant, and Solutions Delivery.
        </p>

        {/* Action Pathways with Generous Whitespace (No Enclosing Box) */}
        <div className="flex flex-wrap items-center gap-5 sm:gap-6 mb-16">
          <MagneticButton strength={0.15}>
            <Link
              to="/contact"
              className="btn-lime inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm sm:text-base cursor-pointer"
            >
              <Mail size={17} />
              <span>SEND A MESSAGE</span>
            </Link>
          </MagneticButton>

          <a
            href="mailto:joseabelgarcia99@gmail.com"
            className="btn-secondary inline-flex items-center gap-2 px-6 py-4 rounded-xl font-medium text-sm sm:text-base"
          >
            <span>joseabelgarcia99@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/jose-abel-garcia-a5006616b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
          >
            <span>LinkedIn Profile</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href={`${baseUrl}Jose-Garcia-Resume.pdf`}
            download
            className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <FileDown size={15} />
            <span>Download Résumé</span>
          </a>
        </div>

        {/* Footer Meta Row */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-baseline justify-between gap-4 font-mono text-xs text-[var(--text-muted)]">
          <span>JOSE GARCIA &middot; BOCA RATON, FL &middot; COMPUTER ENGINEERING</span>
          <span>SYSTEMS LAB // 2026 EDITION</span>
        </div>

      </div>
    </section>
  );
}
