import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileDown, Command } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { AnimatedNavIndicator, motionDurations, motionEase } from '@/components/motion';

const navLinks = [
  { label: 'Work', href: '/#projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpenKey, setMobileOpenKey] = useState<string | null>(null);
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const routeKey = `${location.pathname}${location.hash}`;
  const mobileOpen = mobileOpenKey === routeKey;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/#projects') return location.pathname === '/' || location.pathname.startsWith('/projects');
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-900/95 backdrop-blur-md border-b border-white/[0.06] shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => setMobileOpenKey(null)}
              className="flex items-center gap-2.5 group"
              aria-label="Jose Garcia — Home"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center text-white font-bold text-base shadow-glow-blue group-hover:shadow-glow-cyan transition-all duration-300">
                JG
              </div>
              <span className="hidden sm:block font-semibold text-white text-sm tracking-wide">
                Jose Garcia
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-link px-3 py-2 rounded-lg hover:bg-white/5 ${
                    isActive(link.href) ? 'nav-link-active' : ''
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && <AnimatedNavIndicator />}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenCommandPalette}
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 font-mono text-xs text-slate-500 transition-colors hover:border-accent-blue/20 hover:bg-accent-blue/5 hover:text-slate-300"
                aria-label="Open command palette"
              >
                <Command size={14} />
                <span>K</span>
              </button>
              <a
                href={`${import.meta.env.BASE_URL}Jose-Garcia-Resume.pdf`}
                download
                className="btn-secondary py-2 text-sm"
                aria-label="Download Resume PDF"
              >
                <FileDown size={15} />
                Resume
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpenKey(mobileOpen ? null : routeKey)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : motionDurations.micro, ease: motionEase }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-navy-900/98 backdrop-blur-md border-b border-white/[0.06]"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpenKey(null)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-accent-blue/10 text-accent-blue-light'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-white/[0.06]">
                <a
                  href={`${import.meta.env.BASE_URL}Jose-Garcia-Resume.pdf`}
                  download
                  onClick={() => setMobileOpenKey(null)}
                  className="flex items-center gap-2 px-4 py-3 text-accent-blue font-medium"
                >
                  <FileDown size={16} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
