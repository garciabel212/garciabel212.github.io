import { motion, useReducedMotion } from 'framer-motion';
import { User, MapPin, Globe2, Cpu, Award, Plane, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import CTA from '@/components/CTA';

const strengths = [
  {
    icon: Cpu,
    color: '#3B82F6',
    label: 'ENGINEERING FOUNDATION',
    desc: 'B.S. in Computer Engineering covering hardware, software, networks, and systems. Understands what makes technology work, not just how to talk about it.',
  },
  {
    icon: User,
    color: '#06B6D4',
    label: 'CUSTOMER-FACING EXECUTION',
    desc: 'Proven experience in technical discovery, product demonstrations, on-site implementation, customer training, and relationship management.',
  },
  {
    icon: Globe2,
    color: '#8B5CF6',
    label: 'BUILDER MINDSET',
    desc: 'Proactively identifies operational gaps and builds practical, production-quality software to solve them (demonstrated by Service Map Planner).',
  },
  {
    icon: MapPin,
    color: '#10B981',
    label: 'FIELD ADAPTABILITY',
    desc: 'Experienced with national travel, on-site customer environments, live troubleshooting, and translating complex technical concepts for diverse audiences.',
  },
];

const quickFacts = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Boca Raton, Florida',
  },
  {
    icon: Cpu,
    label: 'Education',
    value: 'B.S. in Computer Engineering — Florida Atlantic University (FAU)',
  },
  {
    icon: Award,
    label: 'Certifications',
    value: 'Data Science & Analytics Certificate (FAU) · AWS Certified Cloud Practitioner',
  },
  {
    icon: Globe2,
    label: 'Languages',
    value: 'English (Fluent/Native) · Spanish (Fluent/Native)',
  },
  {
    icon: Plane,
    label: 'Work Style',
    value: 'Open to remote, hybrid, and national-travel roles (up to 40% travel)',
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
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-8">
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
                <div className="absolute -bottom-3 -right-3 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface-elevated)] border border-emerald-500/30 shadow-[var(--shadow-low)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-400 font-medium">Open to Opportunities</span>
                </div>
              </motion.div>

              {/* Quick facts */}
              <div className="w-full card p-5 space-y-3.5 text-xs sm:text-sm">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] font-semibold mb-1">
                  QUICK FACTS
                </div>
                {quickFacts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div key={fact.label} className="flex items-start gap-3">
                      <Icon size={15} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[var(--text-muted)] text-xs block font-medium">{fact.label}</span>
                        <span className="text-[var(--text-primary)] font-medium leading-snug">{fact.value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bio column */}
            <div className="lg:col-span-3 text-left">
              <SectionHeader
                eyebrow="ABOUT JOSE"
                title="A customer-facing engineer who builds and delivers."
                titleHighlight=""
                className="mb-6"
              />
              <p className="font-mono text-sm sm:text-base text-[var(--accent)] font-semibold mb-6">
                Solutions Engineer &middot; Sales Engineer &middot; Technical Consultant
              </p>

              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                <p className="text-[var(--text-primary)] font-medium">
                  I am a Computer Engineer who works at the intersection of complex technical systems,
                  customer relationships, and business outcomes. My experience covers the entire solutions
                  lifecycle — from pre-sales technical discovery and solution demonstrations to on-site
                  deployment, hardware/software integration, customer training, and long-term technical account management.
                </p>
                <p>
                  Since 2022, I have served as a Service Engineer at Digital Library Systems Group (DLSG) / Image Access,
                  working directly with enterprise clients across higher education, public libraries, archives,
                  and government institutions. In this role, I have traveled nationally to deploy hardware and
                  software solutions, configure network integrations and Windows-based systems, troubleshoot
                  complex technical issues under pressure, and train both end users and technical administrators.
                </p>
                <p>
                  Alongside customer-facing engineering, I build software tools to solve operational problems.
                  When I saw that our field service scheduling and preventive maintenance tracking lacked
                  visual, geography-aware tooling, I designed and built Service Map Planner — an internal
                  platform that transformed how our service operations were planned and executed. I am also
                  currently developing Scale Garage Studio, a browser-based 3D configurator that bridges digital
                  customer customization with physical manufacturing.
                </p>
                <p>
                  I hold a B.S. in Computer Engineering from Florida Atlantic University, a Certificate in
                  Data Science and Analytics, and an AWS Certified Cloud Practitioner certification. I am
                  fully bilingual in English and Spanish, and I am actively seeking Solutions Engineering,
                  Sales Engineering, Technical Consulting, or Customer Engineering roles where I can bring
                  genuine technical depth and customer-facing execution together.
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
            eyebrow="CORE STRENGTHS"
            title="What I bring to a technical customer role"
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
                    <h3 className="text-[var(--text-primary)] font-semibold mb-2 text-sm tracking-wide font-mono">
                      {s.label}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA
        title="Let’s talk about making technology work."
        description="Open to Solutions Engineering, Sales Engineering, and Technical Consulting roles. Available for remote, hybrid, and up to 40% travel."
      />
    </main>
  );
}

