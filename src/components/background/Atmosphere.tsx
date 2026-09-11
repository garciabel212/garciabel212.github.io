import { useEffect, useState } from 'react';

export default function Atmosphere() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // Only track pointer spotlight on desktop with fine pointers
    if (typeof window === 'undefined') return;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Base Background Color Transitioned by CSS */}
      <div className="absolute inset-0 bg-[var(--bg)] transition-colors duration-300" />

      {/* 2. Fine Technical Grid (2–4% opacity) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* 3. Subtle Radial Illumination at Header / Center */}
      <div
        className="absolute -top-[20vw] left-1/2 -translate-x-1/2 w-[80vw] h-[50vw] rounded-full blur-[140px] opacity-60"
        style={{
          background: 'radial-gradient(ellipse at center, var(--spotlight-color), transparent 70%)',
        }}
      />

      {/* 4. Desktop-Only Smooth Pointer Spotlight */}
      {mousePos && (
        <div
          className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-opacity duration-500"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background: 'radial-gradient(circle at center, var(--spotlight-color) 0%, transparent 65%)',
            opacity: 0.85,
          }}
        />
      )}

      {/* 5. Extremely Soft Noise Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
}
