import { useEffect, useState, useRef, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';

export interface DeviceOrientationState {
  tiltX: number; // -1 to 1 (left to right)
  tiltY: number; // -1 to 1 (top to bottom)
  isSupported: boolean;
  hasPermission: boolean;
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

function startGlobalOrientationListener() {
  if (typeof window === 'undefined' || isListening) return;

  const handleOrientation = (e: DeviceOrientationEvent) => {
    if (e.gamma === null || e.beta === null) return;

    // gamma: left to right (-90 to 90 deg) -> normalize around +/- 25 deg
    const gamma = Math.max(-25, Math.min(25, e.gamma));
    const normX = gamma / 25;

    // beta: front to back (-180 to 180 deg) -> comfortable phone viewing angle is ~45 deg
    const beta = Math.max(15, Math.min(75, e.beta));
    const normY = (beta - 45) / 30;

    notifyListeners(normX, normY);
  };

  // Modern browsers (Android / standard)
  window.addEventListener('deviceorientation', handleOrientation, { passive: true });
  isListening = true;

  // iOS 13+ requires permission on touch
  const handleFirstTouch = async () => {
    const DeviceOrientation = window.DeviceOrientationEvent as unknown as {
      requestPermission?: () => Promise<'granted' | 'denied'>;
    };

    if (typeof DeviceOrientation?.requestPermission === 'function') {
      try {
        const res = await DeviceOrientation.requestPermission();
        if (res === 'granted') {
          globalHasPermission = true;
          window.addEventListener('deviceorientation', handleOrientation, { passive: true });
        }
      } catch {
        // user cancelled or blocked
      }
    }
  };

  window.addEventListener('touchstart', handleFirstTouch, { once: true, passive: true });
}

export function useDeviceOrientation(): DeviceOrientationState {
  const reduceMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isSupported, setIsSupported] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasPermission, setHasPermission] = useState(globalHasPermission);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mobileCheck =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;
    setIsMobile(mobileCheck);

    const supported = 'DeviceOrientationEvent' in window;
    setIsSupported(supported);

    if (reduceMotion || !supported) return;

    startGlobalOrientationListener();

    const listener: OrientationListener = (x, y) => {
      setTilt({ x, y });
    };

    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, [reduceMotion]);

  const requestPermission = useCallback(async () => {
    const DeviceOrientation = window.DeviceOrientationEvent as unknown as {
      requestPermission?: () => Promise<'granted' | 'denied'>;
    };

    if (typeof DeviceOrientation?.requestPermission === 'function') {
      try {
        const res = await DeviceOrientation.requestPermission();
        if (res === 'granted') {
          setHasPermission(true);
          globalHasPermission = true;
          return true;
        }
      } catch {
        return false;
      }
    }
    return true;
  }, []);

  return {
    tiltX: tilt.x,
    tiltY: tilt.y,
    isSupported,
    hasPermission,
    isMobile,
    requestPermission,
  };
}

// Direct getter for requestAnimationFrame loops (e.g. Three.js useFrame)
export function getGlobalDeviceTilt() {
  return { x: globalTiltX, y: globalTiltY };
}
