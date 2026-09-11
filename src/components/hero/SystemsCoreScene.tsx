import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../theme/ThemeProvider';

interface CoreMeshProps {
  isDark: boolean;
  reducedMotion: boolean;
}

function CoreObject({ isDark, reducedMotion }: CoreMeshProps) {
  const groupRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  // Mouse lerp coordinates
  const mouse = useRef({ x: 0, y: 0 });

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
      // Very subtle idle rotation
      groupRef.current.rotation.y += delta * 0.15;
      if (outerRingRef.current) outerRingRef.current.rotation.z += delta * 0.2;
      if (innerRingRef.current) innerRingRef.current.rotation.x += delta * 0.15;
      if (coreRef.current) coreRef.current.rotation.y -= delta * 0.1;

      // Pointer interactive tilt (bounded to max ~4 degrees)
      const targetRotX = state.pointer.y * 0.08;
      const targetRotZ = -state.pointer.x * 0.08;
      mouse.current.x += (targetRotX - mouse.current.x) * 0.05;
      mouse.current.y += (targetRotZ - mouse.current.y) * 0.05;

      groupRef.current.rotation.x = mouse.current.x;
      groupRef.current.rotation.z = mouse.current.y;
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

      {/* Engineering Annotations in 3D Space */}
      <Html position={[2.2, 0.6, 0]} center distanceFactor={8} zIndexRange={[10, 0]}>
        <div className="select-none pointer-events-none whitespace-nowrap font-mono text-[10px] tracking-wider text-[var(--text-secondary)] bg-[var(--surface)]/90 px-2.5 py-1 rounded border border-[var(--border)] shadow-[var(--shadow-low)] backdrop-blur-sm">
          <span className="text-[var(--accent)] font-semibold mr-1.5">01 //</span>PRE-SALES
        </div>
      </Html>

      <Html position={[-2.1, -0.8, 0.4]} center distanceFactor={8} zIndexRange={[10, 0]}>
        <div className="select-none pointer-events-none whitespace-nowrap font-mono text-[10px] tracking-wider text-[var(--text-secondary)] bg-[var(--surface)]/90 px-2.5 py-1 rounded border border-[var(--border)] shadow-[var(--shadow-low)] backdrop-blur-sm">
          <span className="text-[var(--accent)] font-semibold mr-1.5">02 //</span>SYSTEM DESIGN
        </div>
      </Html>

      <Html position={[0.4, 2.1, -0.4]} center distanceFactor={8} zIndexRange={[10, 0]}>
        <div className="select-none pointer-events-none whitespace-nowrap font-mono text-[10px] tracking-wider text-[var(--text-secondary)] bg-[var(--surface)]/90 px-2.5 py-1 rounded border border-[var(--border)] shadow-[var(--shadow-low)] backdrop-blur-sm">
          <span className="text-[var(--accent)] font-semibold mr-1.5">03 //</span>FIELD ENGINEERING
        </div>
      </Html>

      <Html position={[-0.5, -2.1, -0.5]} center distanceFactor={8} zIndexRange={[10, 0]}>
        <div className="select-none pointer-events-none whitespace-nowrap font-mono text-[10px] tracking-wider text-[var(--text-secondary)] bg-[var(--surface)]/90 px-2.5 py-1 rounded border border-[var(--border)] shadow-[var(--shadow-low)] backdrop-blur-sm">
          <span className="text-[var(--accent)] font-semibold mr-1.5">04 //</span>DEPLOYMENT &amp; SUCCESS
        </div>
      </Html>
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

  return (
    <div className="relative w-full aspect-square max-w-[580px] mx-auto select-none" aria-hidden="true">
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

        <CoreObject isDark={isDark} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
