import { useLenis as useLenisInternal } from '@/components/motion/SmoothScroll';

/**
 * Returns the shared Lenis smooth-scroll instance.
 * Will be `null` until Lenis initialises (i.e. on reduced-motion systems
 * or before the first effect fires).
 */
export { useLenisInternal as useLenis };
export default useLenisInternal;
