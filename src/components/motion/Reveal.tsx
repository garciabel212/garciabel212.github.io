import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import { blurRevealVariants, motionDurations, motionEase, revealVariants } from './tokens';

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number;
  blur?: boolean;
  distance?: number;
};

export default function Reveal({
  children,
  delay = 0,
  blur = false,
  distance = 20,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const baseVariants = blur ? blurRevealVariants : revealVariants;
  const variants = reduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        ...baseVariants,
        hidden: {
          ...baseVariants.hidden,
          y: distance,
        },
        visible: {
          ...baseVariants.visible,
          transition: {
            duration: motionDurations.reveal,
            delay,
            ease: motionEase,
          },
        },
      };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

