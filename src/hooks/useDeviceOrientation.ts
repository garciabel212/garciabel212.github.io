import { useEffect, useState, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';

export interface DeviceOrientationState {
  tiltX: number; // -1 to 1 (left to right)
  tiltY: number; // -1 to 1 (top to bottom)
  isSupported: boolean;
  hasPermission: boolean;
  needsPermission: boolean;
  isMobile: boolean;
  requestPermission: () => Promise<boolean>;
}

// Global listener store so all components share one orientation listener
type OrientationListener = (x: number, y: number) => void;
const listeners = new Set<OrientationListener>();
let globalTiltX = 0;
let globalTiltY = 0;
let isListening = false;
let globalHasPermission = false;

function notifyListeners(x: number, y: number) {
  globalTiltX = x;
  globalTiltY = y;
  listeners.forEach((fn) => fn(x, y));
}

function handleOrientationEvent(e: DeviceOrientationEvent) {
  if (e.gamma === null || e.beta === null) return;

  // gamma: left-to-right roll (-90 to 90 deg) -> normalize around +/- 25 deg
  const gamma = Math.max(-30, Math.min(30, e.gamma));
  const normX = gamma / 30;

  // beta: front-to-back pitch (-180 to 180 deg) -> comfortable phone viewing angle is ~45 deg
  const beta = Math.max(15, Math.min(75, e.beta));
  const normY = (beta - 45) / 30;

  notifyListeners(normX, normY);
}

function startGlobalOrientationListener() {
  if (typeof window === 'undefined' || isListening) return;

  window.addEventListener('deviceorientation', handleOrientationEvent, { passive: true });
  isListening = true;
}

export function useDeviceOrientation(): DeviceOrientationState {
  const reduceMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isSupported, setIsSupported] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasPermission, setHasPermission] = useState(globalHasPermission);
  const [needsPermission, setNeedsPermission] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mobileCheck =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;
    setIsMobile(mobileCheck);

    const supported = 'DeviceOrientationEvent' in window;
    setIsSupported(supported);

    const DeviceOrientation = window.DeviceOrientationEvent as unknown as {
      requestPermission?: () => Promise<'granted' | 'denied'>;
    };

    const requiresExplicitPermission = typeof DeviceOrientation?.requestPermission === 'function';
    setNeedsPermission(requiresExplicitPermission && !globalHasPermission);

    if (reduceMotion || !supported) return;

    if (!requiresExplicitPermission) {
      // Android and standard browsers do not require prompt
      globalHasPermission = true;
      setHasPermission(true);
      startGlobalOrientationListener();
    } else if (globalHasPermission) {
      startGlobalOrientationListener();
    }

    const listener: OrientationListener = (x, y) => {
      setTilt({ x, y });
    };

    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, [reduceMotion]);

  const requestPermission = useCallback(async () => {
    if (typeof window === 'undefined') return false;

    const DeviceOrientation = window.DeviceOrientationEvent as unknown as {
      requestPermission?: () => Promise<'granted' | 'denied'>;
    };

    if (typeof DeviceOrientation?.requestPermission === 'function') {
      try {
        const res = await DeviceOrientation.requestPermission();
        if (res === 'granted') {
          globalHasPermission = true;
          setHasPermission(true);
          setNeedsPermission(false);
          startGlobalOrientationListener();
          return true;
        }
      } catch (err) {
        console.warn('DeviceOrientation permission request failed:', err);
        return false;
      }
    } else {
      globalHasPermission = true;
      setHasPermission(true);
      setNeedsPermission(false);
      startGlobalOrientationListener();
      return true;
    }
    return false;
  }, []);

  return {
    tiltX: tilt.x,
    tiltY: tilt.y,
    isSupported,
    hasPermission,
    needsPermission,
    isMobile,
    requestPermission,
  };
}

// Direct getter for requestAnimationFrame loops (e.g. Three.js useFrame)
export function getGlobalDeviceTilt() {
  return { x: globalTiltX, y: globalTiltY };
}
