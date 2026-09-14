import { useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BriefcaseBusiness, Code2, FileText, Mail, Search, UserRound, X, type LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motionDurations, motionEase } from '@/components/motion';

interface CommandPaletteProps {
  onClose: () => void;
}

interface PaletteCommand {
  label: string;
  hint: string;
  icon: LucideIcon;
  action: () => void;
}

export default function CommandPalette({ onClose }: CommandPaletteProps) {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const commands = useMemo<PaletteCommand[]>(() => {
    const visit = (path: string) => () => {
      navigate(path);
      onClose();
    };
    const openExternal = (url: string) => () => {
      window.open(url, '_blank', 'noopener,noreferrer');
      onClose();
    };

    return [
      { label: 'View Work', hint: 'Projects and case studies', icon: BriefcaseBusiness, action: visit('/projects') },
      { label: 'View Experience', hint: 'Roles, education, and certifications', icon: BriefcaseBusiness, action: visit('/experience') },
      { label: 'View About', hint: 'Background and approach', icon: UserRound, action: visit('/about') },
      { label: 'Contact Jose', hint: 'Email and professional links', icon: Mail, action: visit('/contact') },
      {
        label: 'Request Résumé',
        hint: 'Request CV via email',
        icon: FileText,
        action: () => {
          window.location.href = 'mailto:joseabelgarcia99@gmail.com?subject=R%C3%A9sum%C3%A9%20Request%20-%20Jose%20Garcia';
          onClose();
        },
      },
      { label: 'Open GitHub', hint: 'garciabel212', icon: Code2, action: openExternal('https://github.com/garciabel212') },
      {
        label: 'Open LinkedIn',
        hint: 'Professional profile',
        icon: UserRound,
        action: openExternal('https://www.linkedin.com/in/jose-abel-garcia-a5006616b/'),
      },
    ];
  }, [navigate, onClose]);

  const filteredCommands = commands.filter((command) =>
    `${command.label} ${command.hint}`.toLowerCase().includes(query.trim().toLowerCase()),
  );

  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusFrame = window.requestAnimationFrame(() => inputRef.current?.focus());

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowDown' && filteredCommands.length) {
      event.preventDefault();
      setSelectedIndex((index) => (index + 1) % filteredCommands.length);
      return;
    }

    if (event.key === 'ArrowUp' && filteredCommands.length) {
      event.preventDefault();
      setSelectedIndex((index) => (index - 1 + filteredCommands.length) % filteredCommands.length);
      return;
    }

    if (event.key === 'Enter' && filteredCommands[selectedIndex]) {
      event.preventDefault();
      filteredCommands[selectedIndex].action();
      return;
    }

    if (event.key === 'Tab' && panelRef.current) {
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>('input, button:not([disabled])'),
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-start justify-center px-4 pt-[15vh]"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : motionDurations.micro }}
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-navy-950/75 backdrop-blur-sm" aria-hidden="true" />
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site command palette"
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#101827]/95 shadow-[0_28px_100px_rgba(0,0,0,0.55)]"
        initial={reduceMotion ? false : { opacity: 0, y: -10, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -6, scale: 0.99 }}
        transition={{ duration: reduceMotion ? 0 : motionDurations.ui, ease: motionEase }}
        onKeyDown={handleKeyDown}
      >
        <div className="flex items-center gap-3 border-b border-white/[0.07] px-4">
          <Search size={18} className="shrink-0 text-accent-blue-light" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelectedIndex(0);
            }}
            className="h-14 min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
            placeholder="Search pages and links..."
            aria-label="Search commands"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-slate-500 transition-colors hover:bg-white/5 hover:text-white"
            aria-label="Close command palette"
          >
            <X size={16} />
          </button>
        </div>

        <div className="max-h-[55vh] overflow-y-auto p-2" role="listbox" aria-label="Commands">
          {filteredCommands.length ? (
            filteredCommands.map((command, index) => {
              const Icon = command.icon;
              const selected = index === selectedIndex;
              return (
                <button
                  type="button"
                  key={command.label}
                  role="option"
                  aria-selected={selected}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={command.action}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                    selected ? 'bg-accent-blue/10 text-white' : 'text-slate-300 hover:bg-white/[0.04]'
                  }`}
                >
                  <span className={`flex h-9 w-9 items-center justify-center rounded-lg border ${
                    selected
                      ? 'border-accent-blue/25 bg-accent-blue/10 text-accent-blue-light'
                      : 'border-white/[0.07] bg-white/[0.03] text-slate-500'
                  }`}>
                    <Icon size={16} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium">{command.label}</span>
                    <span className="block truncate text-xs text-slate-500">{command.hint}</span>
                  </span>
                  {selected && <span className="font-mono text-[10px] text-slate-600">ENTER</span>}
                </button>
              );
            })
          ) : (
            <p className="px-4 py-10 text-center text-sm text-slate-500">No commands found.</p>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-slate-600">
          <span>Arrow keys navigate</span>
          <span>Esc closes</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
