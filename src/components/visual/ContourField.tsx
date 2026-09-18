import { useEffect, useRef } from 'react';
import { useTheme } from '@/components/theme/ThemeProvider';

export interface ContourFieldProps {
  className?: string;
  section?: 'hero' | 'work' | 'methodology' | 'career' | 'about' | 'contact';
  project?: 'service-ops' | 'garage';
  portraitRef?: React.RefObject<HTMLElement | null>;
  intensity?: number;
}

interface Point {
  x: number;
  y: number;
}

interface BurstRipple {
  x: number;
  y: number;
  startTime: number;
  duration: number; // ms
}

export default function ContourField({
  className = '',
  section = 'hero',
  project = 'service-ops',
  portraitRef,
  intensity = 1,
}: ContourFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let animId = 0;
    let lastTime = performance.now();
    let elapsed = 0;
    let pulseTime = 0;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Smoothed pointer coordinates with lerp
    const pointer = {
      x: window.innerWidth * 0.72,
      y: window.innerHeight * 0.42,
      targetX: window.innerWidth * 0.72,
      targetY: window.innerHeight * 0.42,
      active: false,
      targetActive: false,
      influenceRadius: 280,
    };

    // Secondary touch point for multi-touch
    const pointer2 = {
      x: -9999,
      y: -9999,
      active: false,
    };

    // Burst ripples created on tap/touchstart
    const burstRipples: BurstRipple[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.max(1, Math.round(width * pixelRatio));
      canvas.height = Math.max(1, Math.round(height * pixelRatio));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      pointer.influenceRadius = Math.min(340, Math.max(220, width * 0.22));

      if (!pointer.active) {
        pointer.x = pointer.targetX = width * 0.72;
        pointer.y = pointer.targetY = height * 0.42;
      }
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const onPointerMove = (e: MouseEvent) => {
      pointer.targetX = e.clientX;
      pointer.targetY = e.clientY;
      pointer.targetActive = true;
    };

    const onPointerLeave = () => {
      pointer.targetActive = false;
      pointer.targetX = width * 0.72;
      pointer.targetY = height * 0.42;
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    document.addEventListener('mouseleave', onPointerLeave);

    // ── Mobile touch handlers ──────────────────────────────────────────────
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      pointer.targetX = t.clientX;
      pointer.targetY = t.clientY;
      pointer.targetActive = true;
      // Second touch point
      if (e.touches.length >= 2) {
        pointer2.x = e.touches[1].clientX;
        pointer2.y = e.touches[1].clientY;
        pointer2.active = true;
      } else {
        pointer2.active = false;
        pointer2.x = -9999;
        pointer2.y = -9999;
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      // Create burst ripple at each new touch point
      for (let i = 0; i < e.changedTouches.length; i++) {
        burstRipples.push({
          x: e.changedTouches[i].clientX,
          y: e.changedTouches[i].clientY,
          startTime: performance.now(),
          duration: 600,
        });
      }
    };

    const onTouchEnd = () => {
      pointer2.active = false;
      pointer2.x = -9999;
      pointer2.y = -9999;
    };

    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    // Section-specific profiles
    const getSectionOpacity = () => {
      switch (section) {
        case 'hero':
          return 0.12 * intensity;
        case 'work':
          return 0.09 * intensity;
        case 'methodology':
          return 0.11 * intensity;
        case 'career':
          return 0.075 * intensity;
        case 'about':
          return 0.055 * intensity;
        case 'contact':
          return 0.08 * intensity;
        default:
          return 0.08 * intensity;
      }
    };

    // Color palette based on theme
    const isDark = resolvedTheme === 'dark';
    const primaryRgb = isDark ? '88, 166, 255' : '36, 82, 198'; // Deep Cobalt / Royal Blue
    const secondaryRgb = isDark ? '56, 189, 248' : '16, 149, 193'; // Cyan / Teal signal
    const pulseRgb = isDark ? '147, 197, 253' : '59, 130, 246';

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const isMobile = width < 768;
      const baseOpacity = getSectionOpacity();
      const lineCount = isMobile ? 14 : 24;
      const pointsPerLine = isMobile ? 36 : 64;
      // Touch interaction needs displacement on mobile too
      const displacementMax = isMobile ? 20 : 26;

      // Prune expired burst ripples
      const now = performance.now();
      for (let i = burstRipples.length - 1; i >= 0; i--) {
        if (now - burstRipples[i].startTime > burstRipples[i].duration) {
          burstRipples.splice(i, 1);
        }
      }

      // Portrait obstacle avoidance bounds (if provided in Hero)
      let portraitBox: { x: number; y: number; width: number; height: number; cx: number; cy: number; radius: number } | null = null;
      if (portraitRef?.current) {
        const rect = portraitRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          portraitBox = {
            x: rect.left,
            y: rect.top,
            width: rect.width,
            height: rect.height,
            cx: rect.left + rect.width * 0.5,
            cy: rect.top + rect.height * 0.5,
            radius: Math.max(rect.width, rect.height) * 0.58,
          };
        }
      }

      // Traveling pulse phase
      pulseTime += 0.012;
      const pulseHead = (pulseTime * 0.25) % 1;

      // Draw multi-layer contour lines
      for (let l = 0; l < lineCount; l++) {
        const normalizedY = (l + 0.6) / lineCount;
        const lineBaseY = normalizedY * height;
        const linePhase = l * 0.42 + (prefersReducedMotion ? 0 : time * 0.16);
        const isPulseLine = l % 4 === 1;
        const isAccentLine = l % 3 === 0;

        const points: Point[] = [];
        let maxIlluminationOnLine = 0;

        for (let p = 0; p <= pointsPerLine; p++) {
          const progress = p / pointsPerLine;
          let px = progress * width;
          let py = lineBaseY;

          // Multi-frequency harmonic waveforms (topographic / electromagnetic field)
          const harmonic1 = Math.sin(progress * Math.PI * 2.2 + linePhase) * 16;
          const harmonic2 = Math.sin(progress * Math.PI * 5.4 - linePhase * 0.7) * 6;
          const terrainDrift = Math.sin(progress * Math.PI * 1.2 + l * 0.35 + (prefersReducedMotion ? 0 : time * 0.06)) * 12;

          py += harmonic1 + harmonic2 + terrainDrift;

          // 1. Primary pointer/touch radial displacement & illumination
          const dx = px - pointer.x;
          const dy = py - pointer.y;
          const distToPointer = Math.hypot(dx, dy);

          let illumination = 0;
          if (distToPointer < pointer.influenceRadius) {
            const factor = Math.pow(1 - distToPointer / pointer.influenceRadius, 1.8);
            illumination = factor;
            maxIlluminationOnLine = Math.max(maxIlluminationOnLine, factor);

            if (displacementMax > 0) {
              const push = factor * displacementMax;
              const safeDist = Math.max(distToPointer, 1);
              px += (dx / safeDist) * push * 0.35;
              py += (dy / safeDist) * push;
            }
          }

          // 1b. Secondary touch point influence (multi-touch)
          if (pointer2.active) {
            const dx2 = px - pointer2.x;
            const dy2 = py - pointer2.y;
            const dist2 = Math.hypot(dx2, dy2);
            const r2 = pointer.influenceRadius * 0.75;
            if (dist2 < r2) {
              const f2 = Math.pow(1 - dist2 / r2, 1.8);
              illumination = Math.max(illumination, f2 * 0.8);
              maxIlluminationOnLine = Math.max(maxIlluminationOnLine, f2 * 0.8);
              if (displacementMax > 0) {
                const push = f2 * displacementMax * 0.8;
                const safeDist = Math.max(dist2, 1);
                px += (dx2 / safeDist) * push * 0.35;
                py += (dy2 / safeDist) * push;
              }
            }
          }

          // 1c. Burst ripple displacement (tap impact)
          for (const ripple of burstRipples) {
            const age = (performance.now() - ripple.startTime) / ripple.duration; // 0→1
            const rippleRadius = pointer.influenceRadius * (0.3 + age * 1.4); // expands outward
            const rippleFade = Math.pow(1 - age, 1.5); // fades as it expands
            const dxr = px - ripple.x;
            const dyr = py - ripple.y;
            const ringWidth = rippleRadius * 0.18;
            const distFromCenter = Math.hypot(dxr, dyr);
            const distFromRing = Math.abs(distFromCenter - rippleRadius);
            if (distFromRing < ringWidth) {
              const ringFactor = (1 - distFromRing / ringWidth) * rippleFade;
              illumination = Math.max(illumination, ringFactor * 0.6);
              maxIlluminationOnLine = Math.max(maxIlluminationOnLine, ringFactor * 0.6);
              const safeDist = Math.max(distFromCenter, 1);
              py += (dyr / safeDist) * ringFactor * 12;
            }
          }

          // 2. Portrait contour deflection (lines gracefully curve around portrait perimeter)
          if (portraitBox) {
            const pdx = px - portraitBox.cx;
            const pdy = py - portraitBox.cy;
            const distToPortrait = Math.hypot(pdx, pdy);

            if (distToPortrait < portraitBox.radius) {
              const deflFactor = Math.pow(1 - distToPortrait / portraitBox.radius, 1.5);
              const safeDist = Math.max(distToPortrait, 1);
              // Gently push contour outward around portrait boundary
              px += (pdx / safeDist) * deflFactor * 22;
              py += (pdy / safeDist) * deflFactor * 32;
            }
          }

          points.push({ x: px, y: py });
        }

        // Calculate opacity and gradient
        let lineOpacity = baseOpacity * (isAccentLine ? 1.2 : 0.85);
        if (maxIlluminationOnLine > 0) {
          lineOpacity = Math.min(0.55, lineOpacity + maxIlluminationOnLine * 0.28);
        }

        // Pulse luminance boost
        let pulseBoost = 0;
        if (isPulseLine) {
          const pulseDistance = Math.abs((l / lineCount) - pulseHead);
          if (pulseDistance < 0.15) {
            pulseBoost = Math.pow(1 - pulseDistance / 0.15, 2) * 0.25;
          }
        }

        // Construct smooth curve using quadratic Bezier segments
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length - 1; i++) {
          const mx = (points[i].x + points[i + 1].x) * 0.5;
          const my = (points[i].y + points[i + 1].y) * 0.5;
          ctx.quadraticCurveTo(points[i].x, points[i].y, mx, my);
        }

        const last = points[points.length - 1];
        ctx.lineTo(last.x, last.y);

        // Gradient stroke along x-axis
        const grad = ctx.createLinearGradient(0, 0, width, 0);
        const rgb = isAccentLine ? secondaryRgb : isPulseLine ? pulseRgb : primaryRgb;
        const finalAlpha = Math.min(0.65, lineOpacity + pulseBoost);

        grad.addColorStop(0, `rgba(${rgb}, ${finalAlpha * 0.7})`);
        grad.addColorStop(0.3, `rgba(${rgb}, ${finalAlpha * 0.95})`);
        grad.addColorStop(0.7, `rgba(${rgb}, ${finalAlpha * 1.1})`);
        grad.addColorStop(1, `rgba(${rgb}, ${finalAlpha * 0.7})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = isAccentLine ? 0.95 : 0.65;

        // Subtle dash pattern on selected project lines
        if (project === 'garage' && l % 5 === 0) {
          ctx.setLineDash([6, 10]);
        } else if (project === 'service-ops' && l % 6 === 0) {
          ctx.setLineDash([4, 8]);
        } else {
          ctx.setLineDash([]);
        }

        ctx.stroke();
      }

      ctx.setLineDash([]);
    };

    // Smooth animation loop
    const frame = (now: number) => {
      const delta = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      elapsed += delta;

      // Pointer lerp interpolation (smooth damping)
      const lerpFactor = 1 - Math.exp(-delta * 6.5);
      pointer.x += (pointer.targetX - pointer.x) * lerpFactor;
      pointer.y += (pointer.targetY - pointer.y) * lerpFactor;

      render(elapsed);

      if (!prefersReducedMotion) {
        animId = requestAnimationFrame(frame);
      }
    };

    // Visibility state management (pause loop when tab inactive)
    const onVisibilityChange = () => {
      if (document.hidden) {
        if (animId) {
          cancelAnimationFrame(animId);
          animId = 0;
        }
      } else if (!animId && !prefersReducedMotion) {
        lastTime = performance.now();
        animId = requestAnimationFrame(frame);
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChange);

    if (!prefersReducedMotion) {
      animId = requestAnimationFrame(frame);
    } else {
      render(0);
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onPointerMove);
      document.removeEventListener('mouseleave', onPointerLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [section, project, resolvedTheme, intensity, portraitRef]);

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
}
