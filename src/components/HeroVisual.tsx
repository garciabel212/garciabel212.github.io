import { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MouseOffset { x: number; y: number; }

function useMouseParallax(strength = 10): MouseOffset {
  const [offset, setOffset] = useState<MouseOffset>({ x: 0, y: 0 });
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const handler = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * strength;
      const y = (e.clientY / window.innerHeight - 0.5) * strength;
      setOffset({ x, y });
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, [strength, prefersReduced]);

  return offset;
}

// Animated SVG node dot
function Node({ cx, cy, r = 3, color = '#3B82F6', delay = 0 }: {
  cx: number; cy: number; r?: number; color?: string; delay?: number;
}) {
  return (
    <motion.circle
      cx={cx} cy={cy} r={r} fill={color}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0.4, 0.9, 0.4], scale: 1 }}
      transition={{ delay, duration: 3, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
    />
  );
}

// Connector line with flowing animation
function Connector({ x1, y1, x2, y2, color = 'rgba(59,130,246,0.25)', animated = false }: {
  x1: number; y1: number; x2: number; y2: number; color?: string; animated?: boolean;
}) {
  const len = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
  return (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={color}
      strokeWidth={animated ? 1 : 0.5}
      strokeDasharray={animated ? `${len * 0.3} ${len * 0.7}` : undefined}
      className={animated ? 'animate-flow' : undefined}
    />
  );
}

// The mock app panel inside the visual
function AppPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="absolute inset-0 flex flex-col"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {/* App chrome */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 shrink-0"
        style={{ background: 'rgba(12,22,42,0.95)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
        </div>
        <div
          className="flex-1 mx-3 h-5 rounded text-xs flex items-center px-2"
          style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(100,116,139,0.8)', fontSize: '10px' }}
        >
          service-map-planner.app
        </div>
      </div>

      {/* App content */}
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <div
          className="w-36 shrink-0 flex flex-col p-3 gap-1.5"
          style={{ background: 'rgba(8,18,36,0.9)', borderRight: '1px solid rgba(255,255,255,0.04)' }}
        >
          {[
            { label: 'Map View', active: true, dot: '#3B82F6' },
            { label: 'Institutions', active: false, dot: '#64748B' },
            { label: 'Equipment', active: false, dot: '#64748B' },
            { label: 'Service Tickets', active: false, dot: '#64748B' },
            { label: 'Travel', active: false, dot: '#64748B' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-2 py-1.5 rounded text-xs"
              style={{
                background: item.active ? 'rgba(59,130,246,0.15)' : 'transparent',
                color: item.active ? '#93C5FD' : '#475569',
                fontSize: '10px',
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: item.dot }} />
              {item.label}
            </div>
          ))}
        </div>

        {/* Map area */}
        <div className="flex-1 relative overflow-hidden" style={{ background: 'rgba(6,14,28,0.95)' }}>
          {/* Map grid */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E3A5F" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mapGrid)" />
          </svg>

          {/* Location dots - representing customer institutions */}
          <svg className="absolute inset-0 w-full h-full">
            {/* Active institutions - blue */}
            {[
              [45, 35], [62, 28], [78, 42], [35, 55], [55, 65],
              [80, 68], [25, 42], [68, 52], [42, 72], [88, 30],
            ].map(([x, y], i) => (
              <motion.circle
                key={i}
                cx={`${x}%`}
                cy={`${y}%`}
                r={i < 4 ? 4 : 3}
                fill={i < 4 ? '#3B82F6' : '#22D3EE'}
                opacity={0.8}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.8 }}
                transition={{ delay: 1 + i * 0.08 }}
              />
            ))}
            {/* Warning/expiring - amber */}
            {[[52, 45], [33, 62], [71, 38]].map(([x, y], i) => (
              <motion.circle
                key={`w${i}`}
                cx={`${x}%`}
                cy={`${y}%`}
                r={3}
                fill="#F59E0B"
                opacity={0.7}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 + i * 0.1 }}
              />
            ))}
          </svg>

          {/* Status legend */}
          <div
            className="absolute bottom-3 left-3 flex flex-col gap-1"
            style={{ fontSize: '9px' }}
          >
            {[
              { color: '#3B82F6', label: 'Active' },
              { color: '#F59E0B', label: 'Expiring' },
              { color: '#22D3EE', label: 'Remote' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5" style={{ color: '#64748B' }}>
                <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                {item.label}
              </div>
            ))}
          </div>

          {/* Stats overlay */}
          <motion.div
            className="absolute top-3 right-3 glass-dark rounded-lg p-2.5 flex flex-col gap-1.5"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
            style={{ fontSize: '9px', minWidth: '80px' }}
          >
            <div style={{ color: '#64748B' }}>INSTITUTIONS</div>
            <div style={{ color: '#60A5FA', fontSize: '16px', fontWeight: 700, lineHeight: 1 }}>157</div>
            <div style={{ color: '#94A3B8', marginTop: '4px' }}>
              <span style={{ color: '#34D399' }}>●</span> 128 Active
            </div>
            <div style={{ color: '#94A3B8' }}>
              <span style={{ color: '#FBBF24' }}>●</span> 21 Expiring
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroVisual() {
  const mouse = useMouseParallax(8);

  return (
    <div className="relative w-full h-full">
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-50"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(37,99,235,0.3) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Network topology SVG — background layer */}
      <motion.div
        className="absolute inset-0"
        style={{ x: mouse.x * -0.3, y: mouse.y * -0.3 }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
      >
        <svg className="w-full h-full opacity-30" viewBox="0 0 500 450" fill="none">
          {/* Grid */}
          <defs>
            <pattern id="heroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E3A5F" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="500" height="450" fill="url(#heroGrid)" />

          {/* Circles */}
          <circle cx="250" cy="180" r="120" stroke="#1E3A8A" strokeWidth="0.5" fill="none" />
          <circle cx="250" cy="180" r="80" stroke="#1E3A8A" strokeWidth="0.5" fill="none" />
          <circle cx="250" cy="180" r="40" stroke="#1E4090" strokeWidth="1" fill="none" />

          {/* Connectors */}
          <Connector x1={250} y1={180} x2={130} y2={80} color="rgba(59,130,246,0.3)" animated />
          <Connector x1={250} y1={180} x2={370} y2={90} color="rgba(6,182,212,0.2)" />
          <Connector x1={250} y1={180} x2={140} y2={290} color="rgba(59,130,246,0.2)" animated />
          <Connector x1={250} y1={180} x2={380} y2={270} color="rgba(139,92,246,0.2)" />
          <Connector x1={250} y1={180} x2={250} y2={60} color="rgba(59,130,246,0.4)" animated />
          <Connector x1={130} y1={80} x2={370} y2={90} color="rgba(59,130,246,0.1)" />
          <Connector x1={140} y1={290} x2={380} y2={270} color="rgba(59,130,246,0.1)" />

          {/* Nodes */}
          <Node cx={250} cy={180} r={5} color="#3B82F6" delay={0} />
          <Node cx={130} cy={80} r={4} color="#06B6D4" delay={0.3} />
          <Node cx={370} cy={90} r={4} color="#3B82F6" delay={0.5} />
          <Node cx={140} cy={290} r={4} color="#8B5CF6" delay={0.7} />
          <Node cx={380} cy={270} r={4} color="#3B82F6" delay={0.9} />
          <Node cx={250} cy={60} r={3} color="#22D3EE" delay={0.2} />
          <Node cx={170} cy={140} r={2} color="#3B82F6" delay={0.4} />
          <Node cx={330} cy={150} r={2} color="#06B6D4" delay={0.6} />
          <Node cx={200} cy={240} r={2} color="#8B5CF6" delay={0.8} />
          <Node cx={310} cy={230} r={2} color="#3B82F6" delay={1.0} />
        </svg>
      </motion.div>

      {/* Product panel — main visual */}
      <motion.div
        className="absolute"
        style={{
          top: '5%',
          left: '8%',
          right: '8%',
          bottom: '5%',
          x: mouse.x * 0.5,
          y: mouse.y * 0.4,
          rotateX: 2,
          rotateY: -3,
          transformPerspective: 1200,
        }}
        initial={{ opacity: 0, y: 40, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="product-frame w-full h-full relative">
          <AppPanel />
        </div>
      </motion.div>

      {/* Floating contextual labels */}
      <motion.div
        className="absolute -top-3 -left-2 float-label-accent"
        style={{ x: mouse.x * 0.8, y: mouse.y * 0.6 }}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: mouse.x * 0.8 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        ● 157 Institutions
      </motion.div>

      <motion.div
        className="absolute top-1/4 -right-4 float-label"
        style={{ x: mouse.x * 0.6, y: mouse.y * 0.8 }}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: mouse.x * 0.6 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        Service History
      </motion.div>

      <motion.div
        className="absolute -bottom-4 left-1/4 float-label-cyan"
        style={{ x: mouse.x * 0.4, y: mouse.y * 1.0 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: mouse.y * 1.0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        ◎ Live Map View
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 -right-6 float-label"
        style={{ x: mouse.x * 0.7, y: mouse.y * 0.5 }}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: mouse.x * 0.7 }}
        transition={{ delay: 2.0, duration: 0.6 }}
      >
        Maintenance Tracking
      </motion.div>
    </div>
  );
}
