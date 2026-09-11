import { motion, useReducedMotion } from 'framer-motion';
import { Mail, ExternalLink, Code2, FileDown, MessageSquare } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'joseabelgarcia99@gmail.com',
    href: 'mailto:joseabelgarcia99@gmail.com',
    desc: 'Direct email for career & technical inquiries',
    color: '#3B82F6',
    primary: true,
  },
  {
    icon: ExternalLink,
    label: 'LinkedIn',
    value: 'jose-abel-garcia',
    href: 'https://www.linkedin.com/in/jose-abel-garcia-a5006616b/',
    desc: 'Connect professionally',
    color: '#0A66C2',
    primary: false,
  },
  {
    icon: Code2,
    label: 'GitHub',
    value: 'garciabel212',
    href: 'https://github.com/garciabel212',
    desc: 'View codebase repositories',
    color: '#6B7280',
    primary: false,
  },
  {
    icon: FileDown,
    label: 'Résumé',
    value: 'Download PDF',
    href: `${import.meta.env.BASE_URL}Jose-Garcia-Resume.pdf`,
    desc: 'Current CV for recruiters',
    color: '#10B981',
    primary: false,
    download: true,
  },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="pt-24 pb-0 text-[var(--text-primary)]">
      {/* Hero */}
      <section className="section-py">
        <div className="section-container max-w-3xl text-center mx-auto">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-low)] flex items-center justify-center">
                <MessageSquare size={24} className="text-[var(--accent)]" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[var(--text-primary)] tracking-tight mb-4 font-display">
              Let&apos;s Connect
            </h1>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed mb-4">
              I&apos;m open to Solutions Engineering, Sales Engineering, and Technical Consulting opportunities.
            </p>
            <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-xl mx-auto">
              Whether you have a specific role to discuss, a customer engineering problem, or just want to connect — reach out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-20">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              const linkProps = method.download
                ? { download: true }
                : method.href.startsWith('mailto')
                ? {}
                : { target: '_blank', rel: 'noopener noreferrer' };

              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  {...linkProps}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  className={`card p-6 flex flex-col items-center text-center gap-4 group cursor-pointer ${
                    method.primary ? 'border-[var(--accent)]' : ''
                  }`}
                  aria-label={`${method.label}: ${method.value}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${method.color}18`, border: `1px solid ${method.color}30` }}
                  >
                    <Icon size={22} style={{ color: method.color }} />
                  </div>
                  <div>
                    <p className="text-[var(--text-primary)] font-semibold text-sm">{method.label}</p>
                    <p className="text-xs sm:text-sm font-mono text-[var(--text-secondary)] mt-0.5 break-all">{method.value}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{method.desc}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Résumé Note */}
      <section className="section-py border-t border-[var(--border-subtle)] bg-[var(--surface)]">
        <div className="section-container max-w-2xl text-center mx-auto">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold uppercase text-[var(--text-primary)] font-display tracking-tight mb-3">
              Looking for a résumé?
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-8">
              Download a comprehensive PDF version of my résumé highlighting enterprise installations, pre-sales demos, systems engineering, and credentials.
            </p>
            <a
              href={`${import.meta.env.BASE_URL}Jose-Garcia-Resume.pdf`}
              download
              className="btn-lime inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm mx-auto"
            >
              <FileDown size={17} />
              <span>DOWNLOAD RÉSUMÉ PDF</span>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
