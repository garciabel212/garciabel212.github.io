import { motion, useReducedMotion } from 'framer-motion';
import { User, MapPin, Globe2, Cpu } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import CTA from '@/components/CTA';

const strengths = [
  {
    icon: Cpu,
    color: '#3B82F6',
    label: 'Engineering Foundation',
    desc: "BS Computer Engineering — hardware, software, networking, systems. I understand what I'm deploying and why it matters.",
  },
  {
    icon: User,
    color: '#06B6D4',
    label: 'Customer-Facing Experience',
    desc: 'Real direct-to-customer work at enterprise institutions — discovery, demos, deployment, training, and support. Not theoretical.',
  },
  {
    icon: Globe2,
    color: '#8B5CF6',
    label: 'Builder Mindset',
    desc: "When a tool doesn't exist, I build it. Service Map Planner and Scale Garage Studio are both products of identifying a real problem and solving it.",
  },
  {
    icon: MapPin,
    color: '#10B981',
    label: 'Field & Remote Experience',
    desc: "National travel, on-site deployments, and remote support. Comfortable in a customer's data center or on a support call with their IT team.",
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <main className="pt-24 pb-0 text-[var(--text-primary)]">
      <section className="section-py">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Portrait column */}
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Portrait frame */}
                <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-floating)] relative">
                  <img
                    src={`${baseUrl}images/jose_garcia_portrait.png`}
                    alt="Jose Garcia — Solutions Engineer & Technical Consultant"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[var(--border)] rounded-2xl pointer-events-none" />
                </div>
                {/* Status badge */}
                <div className="absolute -bottom-3 -right-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-elevated)] border border-emerald-500/30 shadow-[var(--shadow-low)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs text-emerald-400 font-medium">Open to Opportunities</span>
                </div>
              </motion.div>

              {/* Quick facts */}
              <div className="space-y-2.5 text-sm text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[var(--accent)] flex-shrink-0" />
                  <span>Boca Raton, FL</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 size={14} className="text-[var(--accent)] flex-shrink-0" />
                  <span>Bilingual: English &amp; Spanish</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu size={14} className="text-[var(--accent)] flex-shrink-0" />
                  <span>BS Computer Engineering, FAU</span>
                </div>
              </div>
            </div>

            {/* Bio column */}
            <div className="lg:col-span-3 text-left">
              <SectionHeader
                eyebrow="About Me"
                title="Jose Garcia"
                titleHighlight=""
                className="mb-6"
              />
              <p className="font-mono text-sm sm:text-base text-[var(--accent)] font-semibold mb-6">
                Solutions Engineer &middot; Sales Engineer &middot; Technical Consultant
              </p>

              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                <p>
                  I&apos;m a Computer Engineer who works at the intersection of technical systems and customer outcomes.
                  My career has been built on a combination most people in this field don&apos;t have: genuine engineering
                  depth — hardware, software, networking, systems — paired with direct customer-facing experience
                  that covers the entire solutions lifecycle.
                </p>
                <p>
                  Since 2022, I&apos;ve been working at Digital Library Systems Group / Image Access as a Service Engineer
                  with responsibility spanning pre-sales support, technical discovery, product demonstrations,
                  enterprise deployments, customer training, and ongoing technical support. I&apos;ve traveled nationally
                  to customer sites, worked with IT teams and administrators at institutions of all sizes, and managed
                  the technical relationship from first conversation through long-term success.
                </p>
                <p>
                  Alongside that professional work, I build. Service Map Planner is an internal field-service
                  operations platform I designed and built because the operational need was real and no existing
                  tool addressed it. Scale Garage Studio is a browser-based 3D product configurator connecting
                  customer customization directly to manufacturing — a project that combines product design,
                  3D engineering, and production workflow thinking.
                </p>
                <p>
                  I&apos;m pursuing roles where I can bring both of these sides together: organizations looking for
                  someone who can talk authentically with customers, understand complex technical environments,
                  demonstrate and implement solutions, and build the tooling to support operational excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="section-py border-t border-[var(--border-subtle)] bg-[var(--surface)]">
        <div className="section-container">
          <SectionHeader
            eyebrow="What I Bring"
            title="Four strengths in one"
            titleHighlight="engineer"
            align="center"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card p-6 flex flex-col gap-4 text-left"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
                  >
                    <Icon size={20} style={{ color: s.color }} />
                  </div>
                  <div>
                    <h3 className="text-[var(--text-primary)] font-semibold mb-2 text-sm">{s.label}</h3>
                    <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
