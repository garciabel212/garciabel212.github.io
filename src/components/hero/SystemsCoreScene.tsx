import { useRef, useMemo, useEffect, useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Sparkles, Compass } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';
import { useDeviceOrientation, getGlobalDeviceTilt } from '../../hooks/useDeviceOrientation';

interface GestureState {
  rotX: number;
  rotY: number;
  velX: number;
  velY: number;
  isDragging: boolean;
  scrollVel: number;
}

interface CoreMeshProps {
  isDark: boolean;
  reducedMotion: boolean;
  gestureRef: React.RefObject<GestureState>;
}

function CoreObject({ isDark, reducedMotion, gestureRef }: CoreMeshProps) {
  const groupRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  // Smooth lerp orientation target
  const smoothTilt = useRef({ x: 0, z: 0 });

  // Node positions on a sphere
  const nodes = useMemo(() => {
    const coords: [number, number, number][] = [
      [1.8, 0.4, 0.5],
      [-1.6, -0.6, 0.8],
      [0.3, 1.7, -0.6],
      [-0.4, -1.6, -0.7],
      [1.1, -1.2, 0.9],
      [-1.2, 1.1, 0.7],
    ];
    return coords.map((pos) => new THREE.Vector3(...pos));
  }, []);

  // Theme colors
  const coreColor = isDark ? '#1a221f' : '#e6e8e2';
  const wireColor = isDark ? '#3d4d44' : '#b2b8ad';
  const ringColor = isDark ? '#27342e' : '#c9cfc4';
  const accentColor = isDark ? '#D4F435' : '#BBD91F';

  useFrame((_state, delta) => {
    if (!groupRef.current) return;
    const g = gestureRef.current;

    if (!reducedMotion) {
      // 1. Idle ambient rotation
      let idleSpeed = delta * 0.18;

      // 2. Touch inertial velocity damping (silky trackball physics)
      if (g) {
        if (!g.isDragging) {
          g.velX *= 0.93;
          g.velY *= 0.93;
          g.rotX += g.velX;
          g.rotY += g.velY;
        }

        // 3. Scroll velocity coupling (spins as user scrolls on phone)
        g.scrollVel *= 0.92;
        g.rotY += g.scrollVel * 0.006;
      }

      // 4. Physical Gyroscope tilt from phone movement
      const gyro = getGlobalDeviceTilt();
      const hasGyro = Math.abs(gyro.x) > 0.01 || Math.abs(gyro.y) > 0.01;
      const targetTiltX = hasGyro ? gyro.y * 0.45 : 0;
      const targetTiltZ = hasGyro ? -gyro.x * 0.45 : 0;

      smoothTilt.current.x += (targetTiltX - smoothTilt.current.x) * 0.1;
      smoothTilt.current.z += (targetTiltZ - smoothTilt.current.z) * 0.1;

      // 5. Apply rotations to main group
      const currentRotX = (g ? g.rotX : 0) + smoothTilt.current.x;
      const currentRotY = (g ? g.rotY : 0) + idleSpeed;
      const currentRotZ = smoothTilt.current.z;

      if (g && !g.isDragging) {
        g.rotY += idleSpeed;
      }

      groupRef.current.rotation.x = currentRotX;
      groupRef.current.rotation.y = currentRotY;
      groupRef.current.rotation.z = currentRotZ;

      // 6. Ring counter-rotations responding to drag & gyro
      const ringBoost = g ? Math.abs(g.velY) * 2 + Math.abs(g.scrollVel) * 0.01 : 0;
      if (outerRingRef.current) {
        outerRingRef.current.rotation.z += (delta * 0.25) + ringBoost;
      }
      if (innerRingRef.current) {
        innerRingRef.current.rotation.x += (delta * 0.2) + ringBoost;
      }
      if (coreRef.current) {
        coreRef.current.rotation.y -= (delta * 0.12);
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Icosahedron Solid Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.0, 1]} />
        <meshStandardMaterial
          color={coreColor}
          metalness={0.85}
          roughness={0.25}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe Concentric Layer */}
      <mesh scale={[1.08, 1.08, 1.08]}>
        <icosahedronGeometry args={[1.0, 1]} />
        <meshBasicMaterial
          color={wireColor}
          wireframe={true}
          transparent
          opacity={isDark ? 0.45 : 0.6}
        />
      </mesh>

      {/* Inner Telemetry Orbital Ring */}
      <mesh ref={innerRingRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.65, 0.012, 16, 100]} />
        <meshStandardMaterial
          color={ringColor}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Outer Telemetry Orbital Ring */}
      <mesh ref={outerRingRef} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[2.1, 0.015, 16, 120]} />
        <meshStandardMaterial
          color={isDark ? '#405247' : '#9ea798'}
          metalness={0.9}
          roughness={0.3}
        />
      </mesh>

      {/* Node Markers & Connector Lines */}
      {nodes.map((pos, idx) => (
        <group key={idx}>
          {/* Node Sphere */}
          <mesh position={pos}>
            <sphereGeometry args={[0.065, 16, 16]} />
            <meshStandardMaterial
              color={idx % 2 === 0 ? accentColor : wireColor}
              emissive={idx % 2 === 0 ? accentColor : '#000000'}
              emissiveIntensity={idx % 2 === 0 ? (isDark ? 0.6 : 0.2) : 0}
              metalness={0.8}
            />
          </mesh>

          {/* Line to center */}
          <line>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[new Float32Array([0, 0, 0, pos.x, pos.y, pos.z]), 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color={wireColor}
              transparent
              opacity={isDark ? 0.25 : 0.35}
            />
          </line>
        </group>
      ))}
    </group>
  );
}

export default function SystemsCoreScene() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  // Device orientation & iOS permission
  const { needsPermission, hasPermission, isMobile, requestPermission } = useDeviceOrientation();

  // Reduced motion preference
  const reducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  // Touch / pointer gesture state (kept in ref for 120fps direct Three.js access)
  const gestureRef = useRef<GestureState>({
    rotX: 0,
    rotY: 0,
    velX: 0,
    velY: 0,
    isDragging: false,
    scrollVel: 0,
  });

  const lastPos = useRef({ x: 0, y: 0 });
  const [permissionState, setPermissionState] = useState<'idle' | 'granted' | 'denied'>('idle');

  // Scroll velocity listener
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();

    const onScroll = () => {
      const now = performance.now();
      const dt = Math.max(1, now - lastTime);
      const currentY = window.scrollY;
      const dy = currentY - lastScrollY;
      gestureRef.current.scrollVel = (dy / dt) * 16;
      lastScrollY = currentY;
      lastTime = now;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Pointer drag gestures with setPointerCapture
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    gestureRef.current.isDragging = true;
    gestureRef.current.velX = 0;
    gestureRef.current.velY = 0;
    lastPos.current = { x: e.clientX, y: e.clientY };

    // If iOS needs permission, user tap activates prompt
    if (needsPermission && permissionState === 'idle') {
      requestPermission().then((granted) => {
        setPermissionState(granted ? 'granted' : 'denied');
      });
    }

    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate?.(10);
      } catch {
        // ignore
      }
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!gestureRef.current.isDragging) return;

    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;

    // Trackball sensitivity (radians per pixel)
    const sens = 0.009;
    const vY = dx * sens;
    const vX = dy * sens;

    gestureRef.current.rotY += vY;
    gestureRef.current.rotX += vX;
    gestureRef.current.velY = vY;
    gestureRef.current.velX = vX;

    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
    gestureRef.current.isDragging = false;
  };

  const handleEnableGyro = useCallback(async (e: React.MouseEvent) => {
    e.stopPropagation();
    const ok = await requestPermission();
    setPermissionState(ok ? 'granted' : 'denied');
  }, [requestPermission]);

  return (
    <div className="relative w-full aspect-square max-w-[340px] xs:max-w-[400px] sm:max-w-[480px] lg:max-w-[540px] mx-auto select-none">
      
      {/* ─── HUD TELEMETRY BADGES (Fixed Viewport Anchors) ─── */}
      <div className="absolute top-2 sm:top-6 right-1 sm:right-6 z-20 font-mono text-[9px] sm:text-[10px] tracking-wider text-[var(--text-secondary)] bg-[var(--surface)]/90 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-[var(--border)] shadow-[var(--shadow-low)] backdrop-blur-sm pointer-events-none">
        <span className="text-[var(--accent)] font-semibold mr-1">01 //</span>PRE-SALES
      </div>

      <div className="absolute bottom-3 sm:bottom-8 right-1 sm:right-4 z-20 font-mono text-[9px] sm:text-[10px] tracking-wider text-[var(--text-secondary)] bg-[var(--surface)]/90 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-[var(--border)] shadow-[var(--shadow-low)] backdrop-blur-sm pointer-events-none">
        <span className="text-[var(--accent)] font-semibold mr-1">02 //</span>SYSTEM DESIGN
      </div>

      <div className="absolute bottom-2 sm:bottom-6 left-1 sm:left-4 z-20 font-mono text-[9px] sm:text-[10px] tracking-wider text-[var(--text-secondary)] bg-[var(--surface)]/90 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-[var(--border)] shadow-[var(--shadow-low)] backdrop-blur-sm pointer-events-none">
        <span className="text-[var(--accent)] font-semibold mr-1">03 //</span>
        <span className="hidden sm:inline">FIELD ENGINEERING</span>
        <span className="sm:hidden">FIELD ENG</span>
      </div>

      <div className="absolute top-3 sm:top-8 left-1 sm:left-6 z-20 font-mono text-[9px] sm:text-[10px] tracking-wider text-[var(--text-secondary)] bg-[var(--surface)]/90 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-[var(--border)] shadow-[var(--shadow-low)] backdrop-blur-sm pointer-events-none">
        <span className="text-[var(--accent)] font-semibold mr-1">04 //</span>
        <span className="hidden sm:inline">DEPLOYMENT &amp; SUCCESS</span>
        <span className="sm:hidden">DEPLOYMENT</span>
      </div>

      {/* ─── INTERACTION GUIDANCE & GYROSCOPE TRIGGER PILL ─── */}
      <div className="absolute -bottom-7 sm:-bottom-8 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
        {needsPermission && permissionState !== 'granted' ? (
          <button
            type="button"
            onClick={handleEnableGyro}
            className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--accent)] bg-[var(--surface)]/95 text-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-[var(--accent-text)] font-mono text-[9px] sm:text-[10px] font-semibold tracking-wider shadow-[0_0_14px_rgba(200,232,64,0.35)] transition-all duration-200 cursor-pointer animate-pulse"
          >
            <Sparkles size={11} className="text-[var(--accent)] group-hover:text-[var(--accent-text)]" />
            <span>ENABLE 3D GYRO TILT</span>
          </button>
        ) : isMobile ? (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[var(--border-subtle)] bg-[var(--surface)]/80 text-[var(--text-muted)] font-mono text-[9px] tracking-wider pointer-events-none backdrop-blur-xs">
            <Compass size={10} className="text-[var(--accent)]" />
            <span>{hasPermission || permissionState === 'granted' ? 'GYRO ACTIVE · SWIPE TO SPIN' : 'SWIPE TO SPIN 3D CORE'}</span>
          </div>
        ) : null}
      </div>

      {/* ─── INTERACTIVE THREE.JS CANVAS WITH 120FPS TOUCH CAPTURE ─── */}
      <div
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <Canvas
          camera={{ position: [0, 0, 5.2], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          {/* Responsive Lighting */}
          <ambientLight intensity={isDark ? 0.5 : 0.8} />
          <directionalLight
            position={[5, 8, 5]}
            intensity={isDark ? 1.4 : 1.1}
            color={isDark ? '#ffffff' : '#fcfcf9'}
          />
          <directionalLight
            position={[-5, -4, -3]}
            intensity={isDark ? 0.4 : 0.5}
            color={isDark ? '#D4F435' : '#BBD91F'}
          />
          <pointLight position={[0, 0, 3]} intensity={0.5} color={isDark ? '#D4F435' : '#ffffff'} />

          <CoreObject
            isDark={isDark}
            reducedMotion={reducedMotion}
            gestureRef={gestureRef}
          />
        </Canvas>
      </div>

    </div>
  );
}
