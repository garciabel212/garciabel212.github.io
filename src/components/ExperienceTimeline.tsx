import { motion, useReducedMotion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { type ExperienceEntry } from '@/data/experience';
import {
  Users,
  Settings,
  Network,
  GraduationCap,
  Code2,
  MapPin,
  Calendar,
  Briefcase,
} from 'lucide-react';
import { motionDurations, motionEase } from '@/components/motion';

const iconMap: Record<string, React.ElementType> = {
  Users,
  Settings,
  Network,
  GraduationCap,
  Code2,
  MapPin,
  Calendar,
  Briefcase,
};

interface ExperienceTimelineProps {
  entries: ExperienceEntry[];
  compact?: boolean;
}

export default function ExperienceTimeline({ entries, compact = false }: ExperienceTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  return (
    <div ref={timelineRef} className="relative">
      {/* Vertical line */}
      <div className="absolute bottom-0 left-4 top-0 w-px bg-white/[0.07]" />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-4 top-0 w-px origin-top bg-gradient-to-b from-accent-blue via-accent-cyan/70 to-accent-cyan/10"
        style={{ scaleY: reduceMotion ? 1 : scrollYProgress }}
      />

      <div className="space-y-12">
        {entries.map((entry, ei) => (
          <motion.div
            key={entry.id}
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: motionDurations.reveal, delay: ei * 0.08, ease: motionEase }}
            className="relative pl-12"
          >
            {/* Timeline dot */}
            <motion.div
              initial={false}
              whileInView={{
                backgroundColor: entry.current ? '#3B82F6' : '#17233a',
                borderColor: entry.current ? '#60A5FA' : '#3B82F6',
                boxShadow: entry.current && !reduceMotion
                  ? ['0 0 0 rgba(59,130,246,0)', '0 0 28px rgba(59,130,246,0.45)', '0 0 12px rgba(59,130,246,0.16)']
                  : '0 0 0 rgba(59,130,246,0)',
              }}
              viewport={{ amount: 0.6, once: entry.current }}
              transition={{ duration: reduceMotion ? 0 : entry.current ? 1.1 : motionDurations.ui, ease: motionEase }}
              className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center border-2 z-10 ${
                entry.current
                  ? 'bg-accent-blue border-accent-blue'
                  : 'bg-surface-elevated border-slate-700'
              }`}
            >
              <Briefcase size={14} className={entry.current ? 'text-white' : 'text-slate-500'} />
            </motion.div>

            {/* Card */}
            <div className="card p-6 lg:p-8">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                  {entry.current && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium mb-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      Current
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white">{entry.role}</h3>
                  {entry.roleSubtitle && (
                    <p className="text-accent-blue-light text-sm font-medium">{entry.roleSubtitle}</p>
                  )}
                  <p className="text-lg font-semibold text-slate-300 mt-0.5">{entry.company}</p>
                </div>
                <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {entry.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} />
                    {entry.location}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{entry.summary}</p>

              {/* Responsibility groups */}
              {!compact && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {entry.responsibilities.map((group) => {
                    const Icon = iconMap[group.icon] ?? Briefcase;
                    return (
                      <div
                        key={group.category}
                        className="p-4 rounded-lg bg-surface-elevated border border-white/[0.04]"
                      >
                        <div className="flex items-center gap-2 mb-2.5">
                          <Icon size={14} className="text-accent-blue flex-shrink-0" />
                          <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                            {group.category}
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {group.items.map((item) => (
                            <li key={item} className="text-xs text-slate-500 flex gap-2">
                              <span className="text-accent-cyan/40 flex-shrink-0 mt-0.5">›</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Compact bullet list */}
              {compact && (
                <ul className="space-y-1.5">
                  {entry.responsibilities.flatMap((g) => g.items).slice(0, 4).map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-400">
                      <span className="text-accent-cyan/60 flex-shrink-0 mt-0.5">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
