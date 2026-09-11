import { Link } from 'react-router-dom';
import { ExternalLink, Mail, Code2 } from 'lucide-react';

const footerLinks = [
  { label: 'WORK', href: '/#selected-work' },
  { label: 'EXPERIENCE', href: '/experience' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

const socialLinks = [
  {
    icon: Code2,
    href: 'https://github.com/garciabel212',
    label: 'GitHub',
  },
  {
    icon: ExternalLink,
    href: 'https://www.linkedin.com/in/jose-abel-garcia-a5006616b/',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:joseabelgarcia99@gmail.com',
    label: 'Email',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] transition-colors duration-250">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link
              to="/"
              className="flex items-baseline gap-2"
              aria-label="Home"
            >
              <span className="font-display font-black text-xl text-[var(--text-primary)]">
                JG.
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                Jose Garcia
              </span>
            </Link>
            <p className="font-mono text-xs text-[var(--text-muted)] max-w-sm text-center md:text-left">
              Solutions Engineer &middot; Sales Engineer &middot; Technical Consultant
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-mono text-xs tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)] border border-[var(--border)] transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-[var(--text-muted)]">
          <p>
            &copy; {new Date().getFullYear()} Jose Garcia &middot; Systems Lab.
          </p>
          <p>
            Boca Raton, FL &middot; Computer Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
