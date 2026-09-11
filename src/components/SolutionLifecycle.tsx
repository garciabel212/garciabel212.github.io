import { motion, useReducedMotion } from 'framer-motion';
import { motionDurations, motionEase } from '@/components/motion';

interface LifecycleStep {
  step: string;
  label: string;
  desc: string;
}

interface SolutionLifecycleProps {
  steps: LifecycleStep[];
}

export default function SolutionLifecycle({ steps }: SolutionLifecycleProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-label="Solution lifecycle">
      <div className="hidden items-start lg:flex">
        {steps.map((step, index) => (
          <div key={step.step} className="flex min-w-0 flex-1 items-start">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: motionDurations.ui, delay: index * 0.12, ease: motionEase }}
              className="flex min-w-0 flex-1 flex-col items-center text-center"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent-blue/30 bg-navy-800 text-xs font-bold text-accent-blue-light shadow-[0_0_0_6px_rgba(10,15,30,0.85)]">
                {step.step}
              </div>
              <p className="mt-3 text-sm font-semibold text-white">{step.label}</p>
              <p className="mt-1 max-w-[9rem] text-xs leading-tight text-slate-500">{step.desc}</p>
            </motion.div>
            {index < steps.length - 1 && (
              <motion.div
                aria-hidden="true"
                className="-mx-5 mt-6 h-px w-10 origin-left bg-gradient-to-r from-accent-blue/70 to-accent-cyan/45 xl:w-16"
                initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.36, delay: index * 0.12 + 0.08, ease: motionEase }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:hidden">
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: motionDurations.ui, delay: Math.min(index * 0.055, 0.22), ease: motionEase }}
            className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4 text-center"
          >
            <span className="font-mono text-[10px] font-semibold text-accent-blue-light">{step.step}</span>
            <p className="mt-1 text-sm font-semibold text-white">{step.label}</p>
            <p className="mt-1 text-xs leading-tight text-slate-500">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

