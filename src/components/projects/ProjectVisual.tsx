import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface ProjectVisualProps {
  imageSrc: string;
  altText: string;
  caption?: string;
  badge?: string;
  variant?: 'default' | 'extended';
}

export default function ProjectVisual({
  imageSrc,
  altText,
  caption,
  badge,
  variant = 'default',
}: ProjectVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [hoverOffset, setHoverOffset] = useState({ x: 0, y: 0 });

  // Scroll perspective animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 0.8], [0.93, 1, 0.98]);
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [3, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.4], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0.7, 1]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    // Bounded to 3 degrees max
    setHoverOffset({ x: x * 3.5, y: -y * 3.5 });
  };

  const handleMouseLeave = () => {
    setHoverOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${variant === 'extended' ? 'lg:-mr-12' : ''}`}
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={
          reduceMotion
            ? {}
            : {
                scale,
                rotateX,
                translateY,
                opacity,
                rotateY: hoverOffset.x,
              }
        }
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2.5 sm:p-3.5 shadow-[var(--shadow-floating)] transition-all duration-300"
      >
        {/* Layered Window Header Bar */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-[var(--border-subtle)] mb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--border)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--border)]" />
          </div>
          <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-wider">
            {badge || 'SYSTEM VIEW // 1080P'}
          </span>
        </div>

        {/* Screenshot Image Frame */}
        <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border)]">
          <img
            src={imageSrc}
            alt={altText}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
          />

          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)]/30 via-transparent to-white/[0.04] pointer-events-none" />
        </div>

        {/* Bottom Status / Caption */}
        {caption && (
          <div className="flex items-center justify-between px-3 pt-2.5 text-[11px] font-mono text-[var(--text-muted)]">
            <span>{caption}</span>
            <span className="text-[var(--accent)] font-medium">LIVE INTERFACE</span>
          </div>
        )}
      </motion.div>
    </div>
  );
}
