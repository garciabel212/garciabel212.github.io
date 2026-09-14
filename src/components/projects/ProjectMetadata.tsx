import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectMetadataProps {
  number: string;
  title: string;
  headline?: string;
  subtitle: string;
  description: string;
  role: string;
  statusLabel?: string;
  stack: string[];
  caseStudyHref: string;
}

export default function ProjectMetadata({
  number,
  title,
  headline,
  subtitle,
  description,
  role,
  statusLabel,
  stack,
  caseStudyHref,
}: ProjectMetadataProps) {
  return (
    <div className="flex flex-col justify-center text-left max-w-xl">
      {/* Top Number & Tag */}
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3">
        <span className="text-[var(--accent)] font-semibold">{number}</span>
        <span>// SELECTED WORK</span>
      </div>

      {headline && (
        <span className="font-display font-black text-2xl sm:text-3xl text-[var(--accent)] uppercase tracking-tight mb-2">
          {headline}
        </span>
      )}

      {/* Main Title */}
      <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[var(--text-primary)] tracking-tight leading-[0.95] mb-2">
        {title}
      </h3>

      {/* Subtitle / Tagline */}
      <p className="font-mono text-xs sm:text-sm text-[var(--text-secondary)] uppercase tracking-wider mb-5">
        {subtitle}
      </p>

      {/* Narrative Description */}
      <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
        {description}
      </p>

      {/* Role, Status & Tech Metadata */}
      <div className="py-4 border-y border-[var(--border-subtle)] mb-6 space-y-2">
        {statusLabel && (
          <div className="flex items-baseline gap-2 font-mono text-xs">
            <span className="text-[var(--text-muted)] uppercase tracking-wider min-w-[70px]">STATUS:</span>
            <span className="text-[var(--accent)] font-semibold">{statusLabel}</span>
          </div>
        )}
        <div className="flex items-baseline gap-2 font-mono text-xs">
          <span className="text-[var(--text-muted)] uppercase tracking-wider min-w-[70px]">ROLE:</span>
          <span className="text-[var(--text-primary)] font-medium">{role}</span>
        </div>
        <div className="flex items-baseline gap-2 font-mono text-xs">
          <span className="text-[var(--text-muted)] uppercase tracking-wider min-w-[70px]">STACK:</span>
          <span className="text-[var(--text-secondary)] flex flex-wrap gap-x-2 gap-y-1">
            {stack.map((item, idx) => (
              <span key={item}>
                {item}
                {idx < stack.length - 1 && <span className="text-[var(--border-strong)] ml-2">&middot;</span>}
              </span>
            ))}
          </span>
        </div>
      </div>

      {/* Action Link */}
      <Link
        to={caseStudyHref}
        className="inline-flex items-center gap-2.5 font-mono text-xs sm:text-sm uppercase tracking-wider text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors group font-semibold"
      >
        <span>VIEW CASE STUDY</span>
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
