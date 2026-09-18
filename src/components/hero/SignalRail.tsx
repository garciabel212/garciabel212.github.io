import { motion, useReducedMotion } from 'framer-motion';

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

interface SignalItem {
  metric: string;
  label: string;
  sub: string;
}

const signals: SignalItem[] = [
  {
    metric: '4+ Years',
    label: 'Customer-Facing Engineering',
    sub: 'Pre-sales & field delivery',
  },
  {
    metric: 'Nationwide',
    label: 'Technical Deployments',
    sub: 'Hardware & OS integrations',
  },
  {
    metric: 'B.S.',
    label: 'Computer Engineering',
    sub: 'Florida Atlantic University',
  },
  {
    metric: 'EN / ES',
    label: 'Bilingual Fluency',
    sub: 'English & Spanish professional',
  },
  {
    metric: '40%',
    label: 'Travel Mobility',
    sub: 'Field-tested client visits',
  },
];

export default function SignalRail() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative z-20 border-y border-[var(--border)] bg-[var(--surface-warm-translucent)] backdrop-blur-md">
      <div className="section-container py-5 sm:py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-subtle)]">
          {signals.map((item, idx) => (
            <motion.div
              key={item.metric}
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
                <span className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent)] transition-colors">
                  {item.metric}
                </span>
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
