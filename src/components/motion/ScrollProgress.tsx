import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, {
    stiffness: 140,
    damping: 30,
    mass: 0.2,
  });

  useEffect(() => {
    if (reduceMotion) return;

    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      progress.set(scrollableHeight > 0 ? Math.min(window.scrollY / scrollableHeight, 1) : 0);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    const resizeObserver = new ResizeObserver(updateProgress);
    resizeObserver.observe(document.documentElement);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
      resizeObserver.disconnect();
    };
  }, [progress, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[80] h-0.5 origin-left bg-gradient-to-r from-accent-blue to-accent-cyan shadow-[0_0_10px_rgba(34,211,238,0.35)]"
      style={{ scaleX: smoothProgress }}
    />
  );
}

