/**
 * ShinyText — React Bits adaptation
 *
 * Renders text with a shimmer sweep using a Framer Motion CSS animation.
 * Adapts to the project's accent-blue-light / accent palette.
 * Reduced-motion: animation removed, text stays visible.
 *
 * Animation owner: Framer Motion (CSS keyframe variant).
 */

import { motion, useReducedMotion } from 'framer-motion';

interface ShinyTextProps {
  text: string;
  /** Base text color token. Defaults to accent-blue-light (#60A5FA). */
  baseColor?: string;
  /** Shimmer highlight color. Defaults to white at 0.9 opacity. */
  shineColor?: string;
  /** Sweep speed in seconds. Default 2.4 s. */
  speed?: number;
  className?: string;
}

export default function ShinyText({
  text,
  baseColor = '#60A5FA',
  shineColor = 'rgba(255,255,255,0.88)',
  speed = 2.4,
  className = '',
}: ShinyTextProps) {
  const reduceMotion = useReducedMotion();

  const style: React.CSSProperties = reduceMotion
    ? { color: baseColor }
    : {
        backgroundImage: `linear-gradient(
          110deg,
          ${baseColor} 0%,
          ${baseColor} 30%,
          ${shineColor} 50%,
          ${baseColor} 70%,
          ${baseColor} 100%
        )`,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
      };

  return (
    <motion.span
      className={`inline-block font-medium ${className}`}
      style={style}
      animate={
        reduceMotion
          ? undefined
          : { backgroundPosition: ['100% center', '-100% center'] }
      }
      transition={
        reduceMotion
          ? undefined
          : {
              duration: speed,
              repeat: Infinity,
              ease: 'linear',
            }
      }
    >
      {text}
    </motion.span>
  );
}
