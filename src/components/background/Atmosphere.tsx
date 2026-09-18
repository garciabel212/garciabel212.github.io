import { useEffect, useState } from 'react';
import { useDeviceOrientation } from '../../hooks/useDeviceOrientation';

export default function Atmosphere() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const { tiltX, tiltY, isMobile } = useDeviceOrientation();

  // Desktop pointer spotlight
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Compute active spotlight position (mouse on desktop, phone tilt on mobile)
  const activeSpotlight = isMobile
    ? typeof window !== 'undefined'
      ? {
          x: window.innerWidth * 0.5 + tiltX * (window.innerWidth * 0.35),
          y: window.innerHeight * 0.45 + tiltY * (window.innerHeight * 0.35),
        }
      : null
    : mousePos;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Base Background Color Transitioned by CSS */}
      <div className="absolute inset-0 bg-[var(--bg)] transition-colors duration-300" />

      {/* 2. Very subtle ambient warmth in the upper hero area */}
      <div
        className="absolute -top-[15vw] left-1/2 -translate-x-1/2 w-[85vw] h-[55vw] rounded-full blur-[140px] opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(36, 82, 198, 0.06), transparent 70%)',
        }}
      />

      {/* 3. Subtle warm radial highlight */}
      <div
        className="absolute top-[40vh] right-[-10vw] w-[45vw] h-[45vw] rounded-full blur-[160px] opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(235, 230, 220, 0.8), transparent 70%)',
        }}
      />

      {/* 4. Interactive Spotlight: Pointer on Desktop / Gyroscope on Mobile */}
      {activeSpotlight && (
        <div
          className="absolute w-[360px] sm:w-[600px] h-[360px] sm:h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-[left,top] duration-300 ease-out"
          style={{
            left: `${activeSpotlight.x}px`,
            top: `${activeSpotlight.y}px`,
            background: 'radial-gradient(circle at center, var(--spotlight-color) 0%, transparent 65%)',
            opacity: isMobile ? 0.75 : 0.85,
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
