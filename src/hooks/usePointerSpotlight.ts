import { useCallback, useRef, type PointerEventHandler, type RefObject } from 'react';
import { useReducedMotion } from 'framer-motion';

type SpotlightBindings<T extends HTMLElement> = {
  ref: RefObject<T | null>;
  onPointerMove: PointerEventHandler<T>;
  onPointerLeave: PointerEventHandler<T>;
};

export default function usePointerSpotlight<T extends HTMLElement>(): SpotlightBindings<T> {
  const ref = useRef<T>(null);
  const reduceMotion = useReducedMotion();

  const canUseSpotlight = useCallback(() => {
    return Boolean(
      !reduceMotion &&
        typeof window !== 'undefined' &&
        window.matchMedia('(hover: hover) and (pointer: fine)').matches,
    );
  }, [reduceMotion]);

  const onPointerMove = useCallback<PointerEventHandler<T>>(
    (event) => {
      if (!canUseSpotlight()) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      event.currentTarget.style.setProperty('--spotlight-x', `${event.clientX - bounds.left}px`);
      event.currentTarget.style.setProperty('--spotlight-y', `${event.clientY - bounds.top}px`);
      event.currentTarget.style.setProperty('--spotlight-opacity', '1');
    },
    [canUseSpotlight],
  );

  const onPointerLeave = useCallback<PointerEventHandler<T>>((event) => {
    event.currentTarget.style.setProperty('--spotlight-opacity', '0');
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}
