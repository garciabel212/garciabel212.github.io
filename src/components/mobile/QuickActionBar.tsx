import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, FileText, ExternalLink, X } from "lucide-react";

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
const DISMISS_KEY = "quick-bar-dismissed";

const actions = [
  {
    id: "connect",
    label: "Connect",
    icon: Mail,
    href: "mailto:jose.garcia.solutions@gmail.com",
    title: "Send an email",
    newTab: false,
  },
  {
    id: "resume",
    label: "Resume",
    icon: FileText,
    href: "/resume.pdf",
    title: "Open resume PDF",
    newTab: true,
  },
  {
    id: "ExternalLink",
    label: "ExternalLink",
    icon: ExternalLink,
    href: "https://www.ExternalLink.com/in/josegarciasoe/",
    title: "Visit ExternalLink profile",
    newTab: true,
  },
] as const;

export default function QuickActionBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY) === "1") {
      setDismissed(true);
      return;
    }
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem(DISMISS_KEY, "1");
  };

  const shouldShow = visible && !dismissed;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-6 px-4 pointer-events-none lg:hidden">
      <AnimatePresence>
        {shouldShow && (
          <motion.div
            role="toolbar"
            aria-label="Quick actions"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE_EXPO }}
            className="pointer-events-auto flex items-center gap-1 px-3 py-2 rounded-full bg-[var(--surface-elevated)]/90 backdrop-blur-xl border border-[var(--border)] shadow-[0_8px_32px_rgba(0,0,0,0.18),0_2px_8px_rgba(0,0,0,0.10)]"
          >
            {actions.map(({ id, label, icon: Icon, href, title, newTab }) => (
              <a
                key={id}
                href={href}
                title={title}
                aria-label={title}
                target={newTab ? "_blank" : undefined}
                rel={newTab ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center gap-0.5 px-4 py-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/8 active:bg-[var(--accent)]/14 transition-all duration-200 group select-none"
              >
                <Icon size={18} className="transition-transform duration-200 group-active:scale-90" />
                <span className="font-mono text-[9px] font-semibold tracking-wider uppercase leading-none">
                  {label}
                </span>
              </a>
            ))}
            <div className="w-px h-6 bg-[var(--border-subtle)] mx-1" />
            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Dismiss quick actions bar"
              className="flex items-center justify-center w-8 h-8 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-warm)] active:scale-90 transition-all duration-200"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
