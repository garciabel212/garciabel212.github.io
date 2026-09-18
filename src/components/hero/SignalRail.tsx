import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

// ─── Animated Counter Hook ─────────────────────────────────────────────────
interface CountUpOptions {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

function useCountUp({ target, duration = 1200, prefix = '', suffix = '', delay = 0 }: CountUpOptions) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setValue(target);
      return;
    }
    const el = ref.current;
    if (!el) return;

    let animId = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        const startDelay = setTimeout(() => {
          const startTime = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) {
              animId = requestAnimationFrame(tick);
            }
          };

          animId = requestAnimationFrame(tick);
        }, delay);

        return () => clearTimeout(startDelay);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animId) cancelAnimationFrame(animId);
    };
  }, [target, duration, delay, reduceMotion]);

  return { ref, display: `${prefix}${value}${suffix}` };
}

// ─── Signal Items ───────────────────────────────────────────────────────────
type SignalItem =
  | { type: 'count'; rawTarget: number; prefix: string; suffix: string; label: string; sub: string }
  | { type: 'text'; metric: string; label: string; sub: string };

const signals: SignalItem[] = [
  {
    type: 'count',
    rawTarget: 4,
    prefix: '',
    suffix: '+ Years',
    label: 'Customer-Facing Engineering',
    sub: 'Pre-sales & field delivery',
  },
  {
    type: 'text',
    metric: 'Nationwide',
    label: 'Technical Deployments',
    sub: 'Hardware & OS integrations',
  },
  {
    type: 'text',
    metric: 'B.S.',
    label: 'Computer Engineering',
    sub: 'Florida Atlantic University',
  },
  {
    type: 'text',
    metric: 'EN / ES',
    label: 'Bilingual Fluency',
    sub: 'English & Spanish professional',
  },
  {
    type: 'count',
    rawTarget: 40,
    prefix: '',
    suffix: '%',
    label: 'Travel Mobility',
    sub: 'Field-tested client visits',
  },
];

// ─── Animated metric value sub-component ───────────────────────────────────
function CountMetric({ item, delay }: { item: Extract<SignalItem, { type: 'count' }>; delay: number }) {
  const { ref, display } = useCountUp({
    target: item.rawTarget,
    suffix: item.suffix,
    prefix: item.prefix,
    duration: 1100,
    delay,
  });

  return (
    <span
      ref={ref}
      className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent)] transition-colors tabular-nums"
    >
      {display}
    </span>
  );
}

// ─── Rail ───────────────────────────────────────────────────────────────────
export default function SignalRail() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative z-20 border-y border-[var(--border)] bg-[var(--surface-warm-translucent)] backdrop-blur-md">
      <div className="section-container py-5 sm:py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-subtle)]">
          {signals.map((item, idx) => (
            <motion.div
              key={item.type === 'count' ? item.suffix : item.metric}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE_EXPO, delay: idx * 0.06 }}
              className={`flex flex-col px-4 sm:px-5 lg:px-6 py-3 sm:py-0 first:pl-0 last:pr-0 group transition-all duration-300 ${
                idx === 4 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              {/* Primary Value */}
              <div className="flex items-baseline gap-2 mb-1">
                {item.type === 'count' ? (
                  <CountMetric item={item} delay={idx * 80} />
                ) : (
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent)] transition-colors">
                    {item.metric}
                  </span>
                )}
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Technical Label */}
              <span className="font-sans text-xs font-semibold text-[var(--text-primary)] leading-tight mb-0.5">
                {item.label}
              </span>

              {/* Context Tag */}
              <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-wider">
                {item.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
