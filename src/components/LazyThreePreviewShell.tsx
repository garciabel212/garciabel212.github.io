import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Box, Move3d } from 'lucide-react';
import { useRef, type ReactNode } from 'react';
import { motionDurations, motionEase } from '@/components/motion';

interface LazyThreePreviewShellProps {
  children?: ReactNode;
  className?: string;
}

export default function LazyThreePreviewShell({ children, className = '' }: LazyThreePreviewShellProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: '160px' });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={containerRef}
      data-three-preview-container
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: motionDurations.reveal, ease: motionEase }}
      className={`relative min-h-64 overflow-hidden rounded-2xl border border-accent-cyan/15 bg-[#06140f] ${className}`}
    >
      {inView && children ? (
        children
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_65%,rgba(6,182,212,0.12),transparent_45%)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.025)_1px,transparent_1px)] bg-[size:28px_28px]" />
          <div className="relative flex flex-col items-center gap-3 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-cyan/20 bg-accent-cyan/[0.07] text-accent-cyan-light">
              <Box size={24} />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Interactive preview container</p>
              <p className="mt-1 flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-600">
                <Move3d size={11} /> Ready for lazy-loaded 3D scene
              </p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

