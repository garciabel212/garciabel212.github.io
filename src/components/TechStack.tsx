import { motion, useReducedMotion } from 'framer-motion';
import { motionDurations, motionEase } from '@/components/motion';

interface TechBadge {
  name: string;
  category?: 'frontend' | 'backend' | 'infra' | 'cloud' | 'hardware' | 'default';
}

interface TechStackProps {
  technologies: (string | TechBadge)[];
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

const categoryColors: Record<string, string> = {
  frontend: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  backend: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  infra: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
  cloud: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
  hardware: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
  default: 'bg-white/5 text-slate-300 border-white/10',
};

export default function TechStack({ technologies, label, size = 'md' }: TechStackProps) {
  const reduceMotion = useReducedMotion();
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
    lg: 'text-sm px-3 py-1.5',
  };

  return (
    <div>
      {label && (
        <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3">
          {label}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, i) => {
          const name = typeof tech === 'string' ? tech : tech.name;
          const category = typeof tech === 'object' ? tech.category ?? 'default' : 'default';
          const colorClass = categoryColors[category] ?? categoryColors.default;

          return (
            <motion.span
              key={name}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: motionDurations.ui, delay: i * 0.035, ease: motionEase }}
              className={`inline-flex items-center rounded-md border font-medium ${sizeClasses[size]} ${colorClass}`}
            >
              {name}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}
