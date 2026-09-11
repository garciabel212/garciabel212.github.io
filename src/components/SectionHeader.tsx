import { Reveal } from '@/components/motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const centered = align === 'center';

  return (
    <Reveal
      blur
      className={`${centered ? 'text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}
        {titleHighlight && (
          <>
            {' '}
            <span className="gradient-text">{titleHighlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-slate-400 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </Reveal>
  );
}
