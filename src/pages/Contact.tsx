import { motion, useReducedMotion } from 'framer-motion';
import { Mail, ExternalLink, Code2, FileDown, MessageSquare } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'joseabelgarcia99@gmail.com',
    href: 'mailto:joseabelgarcia99@gmail.com',
    desc: 'Best for detailed inquiries',
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
    desc: 'View my code',
    color: '#6B7280',
    primary: false,
  },
  {
    icon: FileDown,
    label: 'Resume',
    value: 'Download PDF',
    href: `${import.meta.env.BASE_URL}Jose-Garcia-Resume.pdf`,
    desc: 'Full CV for recruiters',
    color: '#10B981',
    primary: false,
    download: true,
  },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="pt-24 pb-0">
      {/* Hero */}
      <section className="section-py">
        <div className="section-container max-w-3xl text-center mx-auto">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                <MessageSquare size={24} className="text-accent-blue" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
              Let's Connect
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-4">
              I'm open to Solutions Engineering, Sales Engineering, and Technical Consulting opportunities.
            </p>
            <p className="text-slate-500 text-base">
              Whether you have a role to discuss, a technical question, or just want to connect — reach out.
              I respond to all genuine inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact methods */}
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
                    method.primary ? 'border-accent-blue/30 bg-accent-blue/5' : ''
                  }`}
                  aria-label={`${method.label}: ${method.value}`}
                >
                  <div
                    className="contact-icon w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${method.color}18`, border: `1px solid ${method.color}30` }}
                  >
                    <Icon size={22} style={{ color: method.color }} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{method.label}</p>
                    <p className="text-sm text-slate-400 mt-0.5 break-all">{method.value}</p>
                    <p className="text-xs text-slate-600 mt-1">{method.desc}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resume note */}
      <section className="section-py bg-navy-800/40">
        <div className="section-container max-w-2xl text-center mx-auto">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Looking for a resume?</h2>
            <p className="text-slate-400 mb-8">
              Download a PDF version of my resume. If you need a tailored format for your ATS or team,
              just reach out by email.
            </p>
            <a
              href={`${import.meta.env.BASE_URL}Jose-Garcia-Resume.pdf`}
              download
              className="btn-primary mx-auto"
            >
              <FileDown size={17} />
              Download Resume PDF
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
