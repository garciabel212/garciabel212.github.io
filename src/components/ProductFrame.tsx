import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface FloatingBadge {
  text: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'mid-left' | 'mid-right';
  variant?: 'default' | 'accent' | 'cyan' | 'violet' | 'emerald';
  delay?: number;
}

interface ProductFrameProps {
  children: ReactNode;
  title?: string;
  url?: string;
  badges?: FloatingBadge[];
  className?: string;
  glowColor?: 'blue' | 'violet' | 'cyan';
  aspectRatio?: string;
  tiltDirection?: 'left' | 'right' | 'none';
}

const badgePositionClasses: Record<FloatingBadge['position'], string> = {
  'top-left': '-top-4 -left-4',
  'top-right': '-top-4 -right-4',
  'bottom-left': '-bottom-4 -left-4',
  'bottom-right': '-bottom-4 -right-4',
  'mid-left': 'top-1/2 -left-6 -translate-y-1/2',
  'mid-right': 'top-1/2 -right-6 -translate-y-1/2',
};

const badgeVariantClasses: Record<NonNullable<FloatingBadge['variant']>, string> = {
  default: 'float-label',
  accent: 'float-label-accent',
  cyan: 'float-label-cyan',
  violet: 'float-label-violet',
  emerald: 'float-label-emerald',
};

const glowStyles = {
  blue: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(59,130,246,0.18) 0%, transparent 70%)',
  violet: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(139,92,246,0.2) 0%, transparent 70%)',
  cyan: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(6,182,212,0.18) 0%, transparent 70%)',
};

export function ProductFrame({
  children,
  title,
  url,
  badges = [],
  className = '',
  glowColor = 'blue',
  aspectRatio = 'aspect-[16/10]',
  tiltDirection = 'none',
}: ProductFrameProps) {
  const tiltStyles = {
    left: {
      transform: 'perspective(1200px) rotateY(3deg) rotateX(1.5deg)',
    },
    right: {
      transform: 'perspective(1200px) rotateY(-3deg) rotateX(1.5deg)',
    },
    none: {},
  }[tiltDirection];

  return (
    <div className={`relative group ${className}`}>
      {/* Luminous atmospheric background glow */}
      <div
        className="absolute -inset-6 rounded-3xl opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-100 pointer-events-none"
        style={{ background: glowStyles[glowColor] }}
      />

      {/* Main product vessel */}
      <div
        className={`relative rounded-2xl border border-white/[0.08] bg-navy-950/90 shadow-product backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:border-white/[0.14] group-hover:shadow-glow-${glowColor} ${aspectRatio}`}
        style={tiltStyles}
      >
        {/* Subtle top edge gradient reflection */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />

        {/* Browser / application chrome bar */}
        {(title || url) && (
          <div className="relative z-10 flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-surface-elevated/70 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
            </div>

            {url && (
              <div className="flex-1 mx-4 max-w-sm">
                <div className="flex items-center justify-center px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.04] text-[11px] font-mono text-slate-400 truncate">
                  <span className="text-accent-blue/80 mr-1.5">https://</span>
                  {url}
                </div>
              </div>
            )}

            {title && (
              <span className="text-xs font-mono text-slate-400 tracking-wider uppercase hidden sm:block">
                {title}
              </span>
            )}
          </div>
        )}

        {/* Content canvas */}
        <div className="relative h-full w-full overflow-hidden">
          {children}
        </div>
      </div>

      {/* Floating dimensional badges */}
      {badges.map((b, idx) => (
        <motion.div
          key={idx}
          className={`absolute z-30 pointer-events-none ${badgePositionClasses[b.position]} ${
            badgeVariantClasses[b.variant || 'default']
          }`}
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: b.delay ?? 0.2 + idx * 0.1 }}
        >
          {b.text}
        </motion.div>
      ))}
    </div>
  );
}
