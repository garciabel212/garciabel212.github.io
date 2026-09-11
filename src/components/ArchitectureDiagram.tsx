import { motion, useReducedMotion } from 'framer-motion';
import { motionDurations, motionEase } from '@/components/motion';

interface ArchNode {
  label: string;
  sublabel?: string;
  accent?: boolean;
}

interface ArchitectureDiagramProps {
  nodes: ArchNode[];
  title?: string;
  horizontal?: boolean;
}

export default function ArchitectureDiagram({ nodes, title, horizontal = false }: ArchitectureDiagramProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="card-elevated p-6 rounded-2xl">
      {title && (
        <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-6 text-center">
          {title}
        </p>
      )}
      <div className={`flex ${horizontal ? 'flex-row items-center gap-2' : 'flex-col items-center gap-0'}`}>
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: motionDurations.ui, delay: i * 0.07, ease: motionEase }}
            className="w-full flex flex-col items-center"
          >
            {/* Node */}
            <div
              className={`w-full max-w-xs px-4 py-3 rounded-xl text-center border transition-colors ${
                node.accent
                  ? 'bg-accent-blue/10 border-accent-blue/30 text-accent-blue-light'
                  : 'bg-surface-elevated border-white/10 text-slate-200'
              }`}
            >
              <span className="text-sm font-semibold">{node.label}</span>
              {node.sublabel && (
                <p className="text-xs text-slate-500 mt-0.5">{node.sublabel}</p>
              )}
            </div>

            {/* Connector (not after last node) */}
            {!horizontal && i < nodes.length - 1 && (
              <div className="flex flex-col items-center my-1">
                <div className="w-px h-5 bg-gradient-to-b from-accent-blue/50 to-accent-cyan/50" />
                <div className="text-accent-cyan/60 text-xs">↓</div>
              </div>
            )}
            {horizontal && i < nodes.length - 1 && (
              <div className="flex items-center mx-1">
                <div className="h-px w-6 bg-gradient-to-r from-accent-blue/50 to-accent-cyan/50" />
                <div className="text-accent-cyan/60 text-xs">→</div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
