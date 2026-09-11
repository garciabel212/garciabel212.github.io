import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import { motionDurations, motionEase, staggerVariants } from './tokens';

type MotionDivProps = HTMLMotionProps<'div'>;

export function Stagger({ children, ...props }: MotionDivProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={reduceMotion ? undefined : staggerVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp({ children, ...props }: MotionDivProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={
        reduceMotion
          ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
          : {
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: motionDurations.reveal, ease: motionEase },
              },
            }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function BlurReveal(props: MotionDivProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: motionDurations.reveal, ease: motionEase }}
      {...props}
    />
  );
}

export function HoverLift(props: MotionDivProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ duration: motionDurations.micro, ease: motionEase }}
      {...props}
    />
  );
}

export function AnimatedSection({ children, ...props }: HTMLMotionProps<'section'>) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: motionDurations.reveal, ease: motionEase }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedNavIndicator() {
  return (
    <motion.span
      layoutId="active-navigation-indicator"
      className="absolute -bottom-px left-3 right-3 h-px rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan"
      transition={{ duration: motionDurations.ui, ease: motionEase }}
    />
  );
}
