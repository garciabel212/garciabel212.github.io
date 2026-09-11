import type { Transition, Variants } from 'framer-motion';

export const motionDurations = {
  micro: 0.18,
  ui: 0.3,
  reveal: 0.55,
  page: 0.4,
} as const;

export const motionEase = [0.22, 1, 0.36, 1] as const;

export const motionTransition: Transition = {
  duration: motionDurations.reveal,
  ease: motionEase,
};

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: motionTransition,
  },
};

export const blurRevealVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: motionTransition,
  },
};

export const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.03,
    },
  },
};

