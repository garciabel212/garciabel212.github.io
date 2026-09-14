import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../theme/ThemeProvider';
import { getGlobalDeviceTilt } from '../../hooks/useDeviceOrientation';

interface CoreMeshProps {
  isDark: boolean;
  reducedMotion: boolean;
  touchDragOffset: { x: number; y: number };
}

function CoreObject({ isDark, reducedMotion, touchDragOffset }: CoreMeshProps) {
  const groupRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  // Mouse / gyro lerp coordinates
  const currentRot = useRef({ x: 0, y: 0 });

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

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (!reducedMotion) {
      // Idle ambient rotation
      groupRef.current.rotation.y += delta * 0.15;
      if (outerRingRef.current) outerRingRef.current.rotation.z += delta * 0.2;
      if (innerRingRef.current) innerRingRef.current.rotation.x += delta * 0.15;
      if (coreRef.current) coreRef.current.rotation.y -= delta * 0.1;

      // Phone gyroscope tilt (physics response when tilting device)
      const gyro = getGlobalDeviceTilt();
      const hasGyro = Math.abs(gyro.x) > 0.01 || Math.abs(gyro.y) > 0.01;

      // Pointer + Gyroscope + Touch Drag integration
      const targetRotX =
        state.pointer.y * 0.08 +
        (hasGyro ? gyro.y * 0.35 : 0) +
        touchDragOffset.y * 0.005;
      const targetRotZ =
        -state.pointer.x * 0.08 +
        (hasGyro ? -gyro.x * 0.35 : 0) +
        touchDragOffset.x * 0.005;

      currentRot.current.x += (targetRotX - currentRot.current.x) * 0.08;
      currentRot.current.y += (targetRotZ - currentRot.current.y) * 0.08;

      groupRef.current.rotation.x = currentRot.current.x;
      groupRef.current.rotation.z = currentRot.current.y;
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

  // Check reduced motion preference
  const reducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  // Touch drag support for mobile interaction
  const [touchDrag, setTouchDrag] = useState({ x: 0, y: 0 });
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - touchStartRef.current.x;
    const deltaY = e.touches[0].clientY - touchStartRef.current.y;
    setTouchDrag({ x: deltaX, y: deltaY });
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
    // Smooth reset
    setTouchDrag({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative w-full aspect-square max-w-[340px] xs:max-w-[400px] sm:max-w-[480px] lg:max-w-[540px] mx-auto select-none touch-pan-y"
      aria-hidden="true"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* HUD Telemetry Badges in Fixed Positions around 3D Scene - Mobile Optimized */}
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
          touchDragOffset={touchDrag}
        />
      </Canvas>
    </div>
  );
}
