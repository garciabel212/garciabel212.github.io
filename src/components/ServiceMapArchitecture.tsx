import { motion, useReducedMotion } from 'framer-motion';
import { useId, useState } from 'react';
import { Database, Layers3, Map, MonitorSmartphone, Workflow } from 'lucide-react';
import { motionDurations, motionEase } from '@/components/motion';
import usePointerSpotlight from '@/hooks/usePointerSpotlight';

interface DiagramNode {
  id: string;
  label: string;
  sublabel?: string;
  description: string;
  x: number;
  y: number;
  width: number;
  accent?: boolean;
  compact?: boolean;
}

const coreNodes: DiagramNode[] = [
  {
    id: 'customer-data',
    label: 'Customer / Institution Data',
    description: 'The customer, location, contact, and installed-equipment information entering the platform.',
    x: 340,
    y: 24,
    width: 320,
  },
  {
    id: 'ui',
    label: 'Application UI',
    sublabel: 'Technician workflow',
    description: 'A focused interface for service teams to find records, plan work, and update operational history.',
    x: 340,
    y: 114,
    width: 320,
    accent: true,
  },
  {
    id: 'react',
    label: 'Next.js / React',
    sublabel: 'Frontend application',
    description: 'The typed frontend layer that composes views, navigation, forms, and platform interactions.',
    x: 340,
    y: 204,
    width: 320,
  },
  {
    id: 'logic',
    label: 'Application Logic',
    sublabel: 'Workflows and validation',
    description: 'Business rules connecting institutions, equipment status, maintenance, and service activity.',
    x: 340,
    y: 294,
    width: 320,
  },
  {
    id: 'firebase',
    label: 'Firebase / Firestore',
    sublabel: 'Authentication and persistence',
    description: 'The access-control and data layer for durable, queryable operational records.',
    x: 340,
    y: 384,
    width: 320,
  },
  {
    id: 'operational-data',
    label: 'Operational Data',
    sublabel: 'Connected service record',
    description: 'The resulting source of truth used for service planning, support, and operational decisions.',
    x: 340,
    y: 474,
    width: 320,
    accent: true,
  },
];

const capabilityNodes: DiagramNode[] = [
  { id: 'map', label: 'Map Interface', description: 'Geographic visibility across customer locations.', x: 28, y: 126, width: 220, compact: true },
  { id: 'travel', label: 'Travel Planning', description: 'Location context for coordinating field-service travel.', x: 752, y: 126, width: 220, compact: true },
  { id: 'institutions', label: 'Institutions', description: 'Customer locations, contacts, and institutional context.', x: 28, y: 366, width: 220, compact: true },
  { id: 'equipment', label: 'Equipment', description: 'Installed systems, versions, and equipment status.', x: 752, y: 346, width: 220, compact: true },
  { id: 'maintenance', label: 'Maintenance', description: 'Maintenance coverage and upcoming service needs.', x: 28, y: 456, width: 220, compact: true },
  { id: 'history', label: 'Service History', description: 'Structured service activity linked to each institution.', x: 752, y: 436, width: 220, compact: true },
  { id: 'replacement', label: 'Replacement Units', description: 'Visibility into replacement needs and available units.', x: 752, y: 526, width: 220, compact: true },
];

const connectors = [
  'M500 84 V114',
  'M500 174 V204',
  'M500 264 V294',
  'M500 354 V384',
  'M500 444 V474',
  'M340 144 H248',
  'M660 144 H752',
  'M340 414 H248',
  'M660 404 H708 Q724 404 724 386 Q724 376 752 376',
  'M340 504 H284 Q268 504 268 486 Q268 486 248 486',
  'M660 504 H704 Q724 504 724 486 Q724 466 752 466',
  'M660 520 H704 Q724 520 724 556 H752',
];

const allNodes = [...coreNodes, ...capabilityNodes];

export default function ServiceMapArchitecture() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState('ui');
  const {
    ref: spotlightRef,
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
  } = usePointerSpotlight<HTMLDivElement>();
  const gradientId = `architecture-line-${useId().replace(/:/g, '')}`;
  const activeNode = allNodes.find((node) => node.id === activeId) ?? coreNodes[1];

  return (
    <div
      ref={spotlightRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="spotlight-card relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c1525]/90 shadow-card"
    >
      <div className="flex flex-col gap-2 border-b border-white/[0.06] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Workflow size={16} className="text-accent-blue-light" />
          <p className="text-sm font-semibold text-white">Platform architecture</p>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
          <span className="sm:hidden">Tap a node</span>
          <span className="hidden sm:inline">Hover or focus a node</span>
        </span>
      </div>

      <div className="p-4 sm:hidden">
        <div className="flex flex-col items-center">
          {coreNodes.map((node, index) => {
            const active = node.id === activeId;
            return (
              <motion.div
                key={node.id}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: motionDurations.ui, delay: index * 0.06, ease: motionEase }}
                className="flex w-full flex-col items-center"
              >
                <button
                  type="button"
                  onClick={() => setActiveId(node.id)}
                  className={`w-full rounded-xl border px-3 py-3 text-center transition-colors ${
                    active || node.accent
                      ? 'border-accent-blue/50 bg-accent-blue/10'
                      : 'border-white/[0.08] bg-surface-elevated/70'
                  }`}
                >
                  <span className="block text-sm font-semibold text-slate-100">{node.label}</span>
                  {node.sublabel && <span className="mt-0.5 block text-[10px] text-slate-500">{node.sublabel}</span>}
                </button>
                {index < coreNodes.length - 1 && (
                  <motion.span
                    aria-hidden="true"
                    className="h-5 w-px origin-top bg-gradient-to-b from-accent-blue/70 to-accent-cyan/40"
                    initial={reduceMotion ? false : { scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: motionDurations.ui, delay: index * 0.06 + 0.05, ease: motionEase }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        <p className="mb-3 mt-6 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">Connected capabilities</p>
        <div className="grid grid-cols-2 gap-2">
          {capabilityNodes.map((node) => (
            <button
              type="button"
              key={node.id}
              onClick={() => setActiveId(node.id)}
              className={`rounded-lg border px-2 py-2.5 text-xs font-medium transition-colors ${
                node.id === activeId
                  ? 'border-accent-cyan/40 bg-accent-cyan/[0.08] text-accent-cyan-light'
                  : 'border-white/[0.07] bg-white/[0.025] text-slate-400'
              }`}
            >
              {node.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hidden overflow-x-auto p-6 sm:block" tabIndex={0} aria-label="Scrollable Service Map Planner architecture diagram">
        <svg
          viewBox="0 0 1000 600"
          className="min-w-[760px] w-full"
          role="img"
          aria-labelledby="service-map-architecture-title service-map-architecture-desc"
        >
          <title id="service-map-architecture-title">Service Map Planner architecture</title>
          <desc id="service-map-architecture-desc">
            Customer and institution data flows through the application interface, Next.js and React,
            application logic, Firebase and Firestore, and into connected operational data.
          </desc>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#3B82F6" stopOpacity="0.7" />
              <stop offset="1" stopColor="#22D3EE" stopOpacity="0.45" />
            </linearGradient>
          </defs>

          {connectors.map((path, index) => (
            <motion.path
              key={path}
              d={path}
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="1.5"
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                pathLength: { duration: 0.42, delay: 0.12 + index * 0.07, ease: motionEase },
                opacity: { duration: motionDurations.micro, delay: 0.12 + index * 0.07 },
              }}
            />
          ))}

          {allNodes.map((node, index) => {
            const active = node.id === activeId;
            const height = node.compact ? 60 : 60;
            return (
              <motion.g
                key={node.id}
                tabIndex={0}
                role="button"
                aria-label={`${node.label}. ${node.description}`}
                onMouseEnter={() => setActiveId(node.id)}
                onFocus={() => setActiveId(node.id)}
                className="cursor-default outline-none"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: motionDurations.ui, delay: index * 0.055, ease: motionEase }}
              >
                <rect
                  x={node.x}
                  y={node.y}
                  width={node.width}
                  height={height}
                  rx="12"
                  fill={active || node.accent ? 'rgba(37, 99, 235, 0.13)' : 'rgba(30, 41, 59, 0.82)'}
                  stroke={active ? '#60A5FA' : node.accent ? 'rgba(59, 130, 246, 0.55)' : 'rgba(148, 163, 184, 0.16)'}
                  strokeWidth={active ? 1.8 : 1}
                  className="transition-colors duration-200"
                />
                <text
                  x={node.x + node.width / 2}
                  y={node.y + (node.sublabel ? 26 : 36)}
                  textAnchor="middle"
                  fill={active || node.accent ? '#BFDBFE' : '#E2E8F0'}
                  fontSize={node.compact ? 13 : 15}
                  fontWeight="600"
                >
                  {node.label}
                </text>
                {node.sublabel && (
                  <text
                    x={node.x + node.width / 2}
                    y={node.y + 44}
                    textAnchor="middle"
                    fill="#64748B"
                    fontSize="10"
                  >
                    {node.sublabel}
                  </text>
                )}
              </motion.g>
            );
          })}
        </svg>
      </div>

      <div className="grid gap-4 border-t border-white/[0.06] bg-white/[0.015] px-5 py-4 sm:grid-cols-[auto_1fr] sm:items-center">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-blue-light">
          {activeId === 'map' ? <Map size={14} /> : activeId === 'firebase' ? <Database size={14} /> : activeId === 'ui' ? <MonitorSmartphone size={14} /> : <Layers3 size={14} />}
          {activeNode.label}
        </div>
        <p className="text-sm leading-relaxed text-slate-400">{activeNode.description}</p>
      </div>
    </div>
  );
}
