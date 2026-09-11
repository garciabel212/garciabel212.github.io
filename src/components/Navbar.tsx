import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './theme/ThemeToggle';

const navLinks = [
  { label: 'WORK', href: '/#selected-work' },
  { label: 'EXPERIENCE', href: '/experience' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      return location.pathname === '/' && location.hash === href.replace('/', '');
    }
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  const baseUrl = import.meta.env.BASE_URL;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
          scrolled
            ? 'nav-translucent shadow-[var(--shadow-low)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Identity Brand Mark */}
            <Link
              to="/"
              className="flex items-baseline gap-2.5 group"
              aria-label="Jose Garcia — Systems Lab Home"
            >
              <span className="font-display font-black text-xl tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                JG.
              </span>
              <span className="font-mono text-[10px] tracking-widest text-[var(--text-muted)] uppercase hidden sm:inline-block">
                SYSTEMS LAB
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-4 py-2 font-mono text-xs font-semibold tracking-wider transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="nav-active-pip"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-[var(--accent)]"
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Controls: ThemeToggle, CommandPalette, Resume */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />

              {onOpenCommandPalette && (
                <button
                  type="button"
                  onClick={onOpenCommandPalette}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors font-mono text-xs"
                  aria-label="Open command palette"
                >
                  <Command size={12} />
                  <span>K</span>
                </button>
              )}

              <a
                href={`${baseUrl}Jose-Garcia-Resume.pdf`}
                download
                className="btn-secondary px-3.5 py-1.5 rounded-xl font-mono text-xs font-semibold tracking-wider"
              >
                R&Eacute;SUM&Eacute;
              </a>
            </div>

            {/* Mobile Hamburger & Theme Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)]"
                aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 p-5 bg-[var(--surface-elevated)] border-b border-[var(--border)] shadow-[var(--shadow-high)] md:hidden flex flex-col gap-4"
          >
            <div className="flex flex-col divide-y divide-[var(--border-subtle)]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 font-mono text-sm font-semibold tracking-wider text-[var(--text-primary)] hover:text-[var(--accent)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-[var(--border)]">
              <span className="font-mono text-xs text-[var(--text-muted)]">
                BOCA RATON, FL
              </span>
              <a
                href={`${baseUrl}Jose-Garcia-Resume.pdf`}
                download
                className="btn-lime px-4 py-2 rounded-lg font-mono text-xs font-bold"
              >
                R&Eacute;SUM&Eacute; PDF
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
