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

  return (
    <main className="pt-24 pb-0">
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
                <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border border-white/10 bg-[#0c1010] shadow-float flex items-center justify-center relative">
                  <div className="flex flex-col items-center justify-center p-6 text-center select-none">
                    <div className="w-20 h-20 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center font-display text-3xl font-black text-white tracking-wider mb-3 shadow-card">
                      JG
                    </div>
                    <span className="font-display font-bold text-white text-base tracking-wide">
                      Jose Garcia
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mt-1">
                      Solutions Engineer
                    </span>
                  </div>
                </div>
                {/* Status badge */}
                <div className="absolute -bottom-3 -right-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111616] border border-emerald-500/30 shadow-card">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs text-emerald-400 font-medium">Open to Opportunities</span>
                </div>
              </motion.div>

              {/* Quick facts */}
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-accent-blue flex-shrink-0" />
                  Boca Raton, FL
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 size={14} className="text-accent-blue flex-shrink-0" />
                  Bilingual: English &amp; Spanish
                </div>
                <div className="flex items-center gap-2">
                  <Cpu size={14} className="text-accent-blue flex-shrink-0" />
                  BS Computer Engineering, FAU
                </div>
              </div>
            </div>

            {/* Bio column */}
            <div className="lg:col-span-3">
              <SectionHeader
                eyebrow="About Me"
                title="Jose Garcia"
                titleHighlight=""
                className="mb-6"
              />
              <p className="text-lg font-medium text-accent-blue-light mb-6">
                Solutions Engineer · Sales Engineer · Technical Consultant
              </p>

              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I'm a Computer Engineer who works at the intersection of technical systems and customer outcomes.
                  My career has been built on a combination most people in this field don't have: genuine engineering
                  depth — hardware, software, networking, systems — paired with direct customer-facing experience
                  that covers the entire solutions lifecycle.
                </p>
                <p>
                  Since 2022, I've been working at Digital Library Systems Group / Image Access as a Service Engineer
                  with responsibility spanning pre-sales support, technical discovery, product demonstrations,
                  enterprise deployments, customer training, and ongoing technical support. I've traveled nationally
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
                  I'm pursuing roles where I can bring both of these sides together: organizations looking for
                  someone who can talk authentically with customers, understand complex technical environments,
                  demonstrate and implement solutions, and build the tooling to support operational excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="section-py bg-navy-800/40">
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
                  className="card p-6 flex flex-col gap-4"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
                  >
                    <Icon size={20} style={{ color: s.color }} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2 text-sm">{s.label}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
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
