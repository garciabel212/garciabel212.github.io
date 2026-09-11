import { Link } from 'react-router-dom';
import { ArrowRight, Mail, ExternalLink } from 'lucide-react';
import { Reveal } from '@/components/motion';

interface CTAProps {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
}

export default function CTA({
  title = "Let's work together",
  description = "I'm open to Solutions Engineering, Sales Engineering, and Technical Consulting opportunities. Let's connect.",
  primaryHref = '/contact',
  primaryLabel = 'Get in Touch',
}: CTAProps) {
  return (
    <section className="section-py relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-cyan/5" />
      <div className="absolute inset-0 border-t border-b border-white/[0.04]" />

      <div className="section-container relative z-10">
        <Reveal
          blur
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-400 mb-10">{description}</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to={primaryHref} className="btn-primary text-base px-8 py-3.5">
              {primaryLabel}
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://www.linkedin.com/in/jose-abel-garcia-a5006616b/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-6 py-3.5"
            >
              <ExternalLink size={17} />
              LinkedIn
            </a>
            <a
              href="mailto:joseabelgarcia99@gmail.com"
              className="btn-ghost text-base"
            >
              <Mail size={17} />
              Email Me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
