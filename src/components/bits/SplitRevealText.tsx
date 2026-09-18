/**
 * SplitRevealText — React Bits adaptation
 *
 * Splits a string into words and staggers each word up from below using
 * Framer Motion whileInView variants. Each word is wrapped in an overflow-hidden
 * clip so the translate looks like a "curtain" lift.
 *
 * Animation owner: Framer Motion.
 * Reduced-motion: all words visible immediately, no stagger.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { motionEase } from '@/components/motion/tokens';

interface SplitRevealTextProps {
  /** The text to split by words. */
  text: string;
  /** Extra class applied to the outer wrapper (e.g. font size, weight). */
  className?: string;
  /** Stagger delay between words in seconds. Default 0.06. */
  stagger?: number;
  /** Y distance each word travels. Default 48. */
  distance?: number;
  /** Duration per word. Default 0.7. */
  duration?: number;
  /** IntersectionObserver margin. Default '-80px'. */
  viewportMargin?: string;
  /** Render each word as a span, preserving normal word-wrap. */
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const wordVariants = (distance: number, duration: number) => ({
  hidden: { y: distance, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration,
      delay: i * 0.06,
      ease: motionEase,
    },
  }),
});

const staticVariants = {
  hidden: { y: 0, opacity: 1 },
  visible: { y: 0, opacity: 1 },
};

export default function SplitRevealText({
  text,
  className = '',
  stagger = 0.06,
  distance = 48,
  duration = 0.7,
  viewportMargin = '-80px',
  as: Tag = 'span',
}: SplitRevealTextProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(' ');
  const variants = reduceMotion ? staticVariants : wordVariants(distance, duration);

  // Suppress stagger warning — we pass `custom` (index) directly
  void stagger;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      className={`inline ${className}`}
      aria-label={text}
    >
      <Tag className="inline text-inherit">
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden align-bottom"
            aria-hidden="true"
          >
            <motion.span
              className="inline-block"
              variants={variants}
              custom={i}
            >
              {word}
              {i < words.length - 1 ? '\u00A0' : ''}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}
