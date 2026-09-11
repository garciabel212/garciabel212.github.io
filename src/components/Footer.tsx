import { Link } from 'react-router-dom';
import { ExternalLink, Mail, Code2 } from 'lucide-react';

const footerLinks = [
  { label: 'Work', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
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
    <footer className="border-t border-white/[0.06] bg-navy-900">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link
              to="/"
              className="flex items-center gap-2.5"
              aria-label="Home"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center text-white font-bold text-sm">
                JG
              </div>
              <span className="font-semibold text-white text-sm">Jose Garcia</span>
            </Link>
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
              Solutions Engineer · Sales Engineer · Technical Consultant
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/5 border border-white/[0.06] hover:border-accent-blue/30 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Jose Garcia. Built with React, TypeScript &amp; Tailwind CSS.
          </p>
          <p className="text-slate-700 text-xs">
            Boca Raton, FL
          </p>
        </div>
      </div>
    </footer>
  );
}
