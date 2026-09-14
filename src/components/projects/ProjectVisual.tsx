import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, useSpring, useMotionValue } from 'framer-motion';
import { Lock, Activity, Box, Compass, Layers, CheckCircle2 } from 'lucide-react';
import { useDeviceOrientation } from '../../hooks/useDeviceOrientation';

export type ProjectVisualVariant = 'application' | 'product' | 'deployment' | 'default' | 'extended';

interface ProjectVisualProps {
  imageSrc?: string;
  altText: string;
  caption?: string;
  badge?: string;
  variant?: ProjectVisualVariant;
  stats?: { label: string; value: string }[];
}

export default function ProjectVisual({
  imageSrc,
  altText,
  caption,
  badge,
  variant = 'default',
  stats,
}: ProjectVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Mobile Device Orientation Hook
  const { tiltX: gyroTiltX, tiltY: gyroTiltY, isMobile } = useDeviceOrientation();

  // Mouse / gyro tilt tracking with spring physics
  const rawTiltX = useMotionValue(0);
  const rawTiltY = useMotionValue(0);
  const [lightX, setLightX] = useState(50);
  const [lightY, setLightY] = useState(50);

  const tiltX = useSpring(rawTiltX, { stiffness: 220, damping: 26, mass: 0.6 });
  const tiltY = useSpring(rawTiltY, { stiffness: 220, damping: 26, mass: 0.6 });

  // Update tilt & specular glare from physical phone gyroscope
  useEffect(() => {
    if (reduceMotion) return;
    if (isMobile && (Math.abs(gyroTiltX) > 0.01 || Math.abs(gyroTiltY) > 0.01)) {
      rawTiltX.set(gyroTiltX * 3);
      rawTiltY.set(-gyroTiltY * 3);
      setLightX(50 + gyroTiltX * 40);
      setLightY(50 + gyroTiltY * 40);
    }
  }, [gyroTiltX, gyroTiltY, isMobile, reduceMotion, rawTiltX, rawTiltY]);

  // Scroll perspective animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scrollScale = useTransform(scrollYProgress, [0, 0.35, 0.75], [0.94, 1, 0.98]);
  const scrollTranslateY = useTransform(scrollYProgress, [0, 0.35], [40, 0]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.2], [0.75, 1]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    rawTiltX.set((px - 0.5) * 3);
    rawTiltY.set(-(py - 0.5) * 3);

    setLightX(px * 100);
    setLightY(py * 100);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (reduceMotion || e.touches.length !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const px = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width));
    const py = Math.max(0, Math.min(1, (touch.clientY - rect.top) / rect.height));

    rawTiltX.set((px - 0.5) * 4);
    rawTiltY.set(-(py - 0.5) * 4);

    setLightX(px * 100);
    setLightY(py * 100);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (reduceMotion || e.touches.length !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const px = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width));
    const py = Math.max(0, Math.min(1, (touch.clientY - rect.top) / rect.height));

    rawTiltX.set((px - 0.5) * 4);
    rawTiltY.set(-(py - 0.5) * 4);

    setLightX(px * 100);
    setLightY(py * 100);
  };

  const handleTouchEnd = () => {
    rawTiltX.set(0);
    rawTiltY.set(0);
    setLightX(50);
    setLightY(50);
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      rawTiltX.set(0);
      rawTiltY.set(0);
      setLightX(50);
      setLightY(50);
    }
  };

  const isApp = variant === 'application';
  const isProduct = variant === 'product' || variant === 'extended';
  const isDeployment = variant === 'deployment';

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${isProduct ? 'lg:-mr-6' : ''}`}
      style={{ perspective: 1400 }}
    >
      {/* Visual backdrop for Product Variant */}
      {isProduct && (
        <div
          className="absolute -inset-2 sm:-inset-4 rounded-3xl bg-[var(--surface-highlight)]/40 border border-[var(--border-subtle)] -z-10 translate-y-2 sm:translate-y-3 blur-xs hidden sm:block"
          aria-hidden="true"
        />
      )}

      {/* Background offset plate for Application & Deployment */}
      {(isApp || isDeployment) && (
        <div
          className="absolute -inset-2 sm:-inset-5 rounded-3xl bg-gradient-to-br from-[var(--surface)]/80 via-transparent to-[var(--bg-secondary)] border border-[var(--border-subtle)] -z-10 translate-x-1 sm:translate-x-2 translate-y-1 sm:translate-y-2 hidden sm:block"
          aria-hidden="true"
        />
      )}

      <motion.div
        style={
          reduceMotion
            ? {}
            : {
                scale: scrollScale,
                translateY: scrollTranslateY,
                opacity: scrollOpacity,
                rotateX: tiltY,
                rotateY: tiltX,
              }
        }
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        className={`group relative rounded-2xl sm:rounded-3xl border border-[var(--border)] bg-[var(--surface)] transition-shadow duration-500 overflow-hidden ${
          isProduct
            ? 'p-2 sm:p-4 shadow-[var(--shadow-high)]'
            : 'p-2 sm:p-4 shadow-[var(--shadow-floating)]'
        }`}
      >
        {/* Dynamic ambient specular reflection */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-60 sm:opacity-0 sm:group-hover:opacity-100 z-20"
          style={{
            background: `radial-gradient(circle 380px at ${lightX}% ${lightY}%, rgba(255,255,255,0.18), transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {/* ─── CHROME HEADER ─── */}
        {isDeployment ? (
          /* Enterprise Deployment Chrome */
          <div className="flex items-center justify-between px-2.5 sm:px-4 py-2 sm:py-2.5 border-b border-[var(--border-subtle)] mb-2 sm:mb-3 bg-[var(--bg-secondary)]/50 rounded-t-xl">
            <div className="flex items-center gap-2">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-violet-400/80" />
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                ENTERPRISE DEPLOYMENT // FIELD TOPOLOGY
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[9px] sm:text-[10px] uppercase text-[var(--text-muted)] tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-[var(--text-primary)]">DLSG / IMAGE ACCESS</span>
            </div>
          </div>
        ) : isApp ? (
          /* Application Browser / OS Chrome */
          <div className="flex items-center justify-between px-2.5 sm:px-4 py-2 sm:py-2.5 border-b border-[var(--border-subtle)] mb-2 sm:mb-3 bg-[var(--bg-secondary)]/50 rounded-t-xl">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FF5F56]/80" />
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FFBD2E]/80" />
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#27C93F]/80" />
            </div>

            <div className="hidden xs:flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md bg-[var(--surface)] border border-[var(--border-subtle)] text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)] tracking-wider">
              <Lock size={10} className="text-[var(--accent)]" />
              <span className="truncate max-w-[140px] sm:max-w-none">ops.internal/servicemap</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[9px] sm:text-[10px] uppercase text-[var(--text-muted)] tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
              </span>
              <span className="font-semibold text-[var(--text-primary)]">INTERNAL TOOL</span>
            </div>
          </div>
        ) : isProduct ? (
          /* 3D CAD / Viewport Tool HUD */
          <div className="flex items-center justify-between px-2.5 sm:px-4 py-2 sm:py-2.5 border-b border-[var(--border-subtle)] mb-2 sm:mb-3 bg-[var(--bg-secondary)]/40 rounded-t-xl">
            <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[9px] sm:text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
              <Box size={12} className="text-[var(--accent)]" />
              <span className="font-semibold text-[var(--text-primary)]">3D VIEWPORT // ORBIT</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 font-mono text-[9px] sm:text-[10px] text-[var(--text-muted)]">
              <span className="inline-flex items-center gap-1">
                <Compass size={10} /> 1:18
              </span>
              <span className="px-1.5 sm:px-2 py-0.5 rounded bg-[var(--accent)] text-[var(--accent-text)] font-semibold text-[9px]">
                IN DEVELOPMENT
              </span>
            </div>
          </div>
        ) : (
          /* Default minimal header */
          <div className="flex items-center justify-between px-3 py-2 border-b border-[var(--border-subtle)] mb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--border-strong)]" />
              <span className="w-2 h-2 rounded-full bg-[var(--border)]" />
              <span className="w-2 h-2 rounded-full bg-[var(--border)]" />
            </div>
            <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-wider">
              {badge || 'SYSTEM VIEW // 1080P'}
            </span>
          </div>
        )}

        {/* ─── MAIN FRAME ─── */}
        <div className={`relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border)] ${
          isProduct ? 'aspect-[16/11]' : 'aspect-[16/10]'
        }`}>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={altText}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
            />
          ) : isDeployment ? (
            /* Enterprise Topology Graphic Blueprint */
            <div className="relative w-full h-full bg-[#0d091a] flex flex-col items-center justify-center p-6 text-center font-mono select-none overflow-hidden">
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(139,92,246,0.3) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 360" fill="none">
                <path d="M 120 180 H 480" stroke="rgba(139,92,246,0.35)" strokeWidth="1.5" strokeDasharray="6 4" />
                <path d="M 300 90 V 270" stroke="rgba(6,182,212,0.35)" strokeWidth="1.5" strokeDasharray="6 4" />
                <circle cx="300" cy="180" r="44" fill="#130c2b" stroke="#8B5CF6" strokeWidth="2" />
                <circle cx="120" cy="180" r="28" fill="#130c2b" stroke="#06B6D4" strokeWidth="1.5" />
                <circle cx="480" cy="180" r="28" fill="#130c2b" stroke="#10B981" strokeWidth="1.5" />
                <circle cx="300" cy="90" r="24" fill="#130c2b" stroke="#F59E0B" strokeWidth="1.5" />
                <circle cx="300" cy="270" r="24" fill="#130c2b" stroke="#EC4899" strokeWidth="1.5" />
              </svg>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 text-xs font-semibold">
                  DISCOVERY &middot; DEPLOYMENT &middot; ENABLEMENT
                </span>
                <p className="text-white font-display text-lg sm:text-xl font-bold uppercase tracking-wide mt-1">
                  Enterprise Customer Implementation
                </p>
                <p className="text-slate-400 text-xs max-w-sm">
                  Specialized scanning hardware, Windows systems, network integration, and customer training
                </p>
              </div>
            </div>
          ) : null}

          {/* Subtle directional glare / glass reflection overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0.14) 100%)',
            }}
          />

          {/* Floating Telemetry Chip for Deployment */}
          {isDeployment && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 z-10 flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-[var(--surface)]/95 backdrop-blur-md border border-[var(--border)] shadow-[var(--shadow-medium)] text-[9px] sm:text-[11px] font-mono"
            >
              <Activity size={12} className="text-violet-400 animate-pulse" />
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[var(--text-primary)] font-semibold">Professional Experience</span>
                <span className="text-[var(--border-strong)]">&middot;</span>
                <span className="text-[var(--text-muted)]">Nationwide Deployments</span>
              </div>
            </motion.div>
          )}

          {/* Floating UI Widget for Application: Verified status chip */}
          {isApp && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 z-10 flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-[var(--surface)]/95 backdrop-blur-md border border-[var(--border)] shadow-[var(--shadow-medium)] text-[9px] sm:text-[11px] font-mono"
            >
              <Activity size={12} className="text-[var(--accent)] animate-pulse" />
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[var(--text-primary)] font-semibold">Active Internal Tool</span>
                <span className="text-[var(--border-strong)]">&middot;</span>
                <span className="text-[var(--text-muted)]">Field Service Operations</span>
              </div>
            </motion.div>
          )}

          {/* Floating UI Widget for Product: 3D status chip */}
          {isProduct && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 z-10 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-[var(--surface)]/95 backdrop-blur-md border border-[var(--border)] shadow-[var(--shadow-medium)] text-[9px] sm:text-[11px] font-mono"
            >
              <Layers size={12} className="text-[var(--accent)]" />
              <span className="text-[var(--text-primary)] font-semibold">1:18 SCALE</span>
              <span className="text-[var(--border-strong)]">&middot;</span>
              <span className="text-[var(--accent)] font-medium">IN DEVELOPMENT</span>
            </motion.div>
          )}
        </div>

        {/* ─── BOTTOM METRICS & CAPTION BAR ─── */}
        <div className="flex flex-wrap items-center justify-between px-2 sm:px-4 pt-2.5 sm:pt-3 gap-2 text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)]">
          {caption && (
            <span className="text-[var(--text-secondary)] font-medium truncate max-w-[200px] sm:max-w-none">{caption}</span>
          )}
          {stats && stats.length > 0 ? (
            <div className="flex items-center gap-2 sm:gap-3">
              {stats.map((s) => (
                <span key={s.label} className="flex items-center gap-1">
                  <CheckCircle2 size={10} className="text-[var(--accent)]" />
                  <span className="text-[var(--text-primary)] font-semibold">{s.value}</span>
                  <span>{s.label}</span>
                </span>
              ))}
            </div>
          ) : (
            <span className="text-[var(--accent)] font-semibold tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              {isDeployment ? 'CUSTOMER ENGINEERING' : isProduct ? '3D CONFIGURATOR' : 'FIELD OPERATIONS'}
            </span>
          )}
        </div>
      </motion.div>

      {/* Pedestal Ground Contact Shadow for Product variant */}
      {isProduct && (
        <div
          className="mx-auto mt-2 h-3 sm:h-4 w-[85%] rounded-[100%] bg-black/15 blur-md pointer-events-none"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
