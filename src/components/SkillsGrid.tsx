import type { SkillGroup } from '@/data/skills';
import {
  Presentation,
  Users,
  Server,
  Code2,
  type LucideIcon,
} from 'lucide-react';
import { Reveal } from '@/components/motion';

const iconMap: Record<string, LucideIcon> = {
  Presentation,
  Users,
  Server,
  Code2,
};

interface SkillsGridProps {
  groups: SkillGroup[];
}

export default function SkillsGrid({ groups }: SkillsGridProps) {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {groups.map((group, gi) => {
        const Icon = iconMap[group.icon] ?? Code2;
        return (
          <Reveal
            key={group.id}
            delay={gi * 0.08}
            className="skill-card group flex flex-col gap-4"
          >
            {/* Header */}
            <div className="flex items-start gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                style={{ background: `${group.accentColor}20`, border: `1px solid ${group.accentColor}30` }}
              >
                <Icon size={18} style={{ color: group.accentColor }} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm leading-tight">{group.title}</h3>
                <p className="text-slate-500 text-xs mt-0.5">{group.subtitle}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.06]" />

            {/* Skills list */}
            <ul className="space-y-1.5">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-slate-400 text-sm">
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: group.accentColor }}
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        );
      })}
    </div>
  );
}
