import { motion } from 'framer-motion';

const roles = [
  'SOLUTIONS ARCHITECTURE',
  'PRE-SALES DISCOVERY',
  'ENTERPRISE IMPLEMENTATIONS',
  'FIELD DIAGNOSTICS',
  'TECHNICAL ENABLEMENT',
];

export default function HeroRoleTicker() {
  return (
    <div className="flex items-center gap-3 font-mono text-xs text-[var(--text-muted)] tracking-wider overflow-hidden py-1 select-none">
      <div className="flex items-center gap-2 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
        <span className="text-[var(--text-secondary)] font-medium">SYSTEM STATUS:</span>
      </div>
      <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
          className="flex items-center gap-4 shrink-0"
        >
          {[...roles, ...roles].map((role, idx) => (
            <span key={idx} className="flex items-center gap-4">
              <span className="text-[var(--text-secondary)]">{role}</span>
              <span className="text-[var(--border-strong)]">/</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
