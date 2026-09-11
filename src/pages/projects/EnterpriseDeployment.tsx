import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Layout, Play, Settings2, BookOpen, HeadphonesIcon, TrendingUp } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import CTA from '@/components/CTA';
import ProjectPreview from '@/components/ProjectPreview';
import { projects } from '@/data/projects';
import { motionDurations, motionEase } from '@/components/motion';

const project = projects.find((item) => item.slug === 'enterprise-deployment');

const journeyPhases = [
  {
    phase: '01',
    label: 'Discovery',
    icon: Search,
    color: '#3B82F6',
    desc: 'Technical requirements gathering, system environment assessment, and stakeholder identification.',
    activities: [
      'IT infrastructure review',
      'Network environment assessment',
      'Existing system compatibility',
      'Stakeholder requirements',
      'Deployment scope definition',
    ],
  },
  {
    phase: '02',
    label: 'Solution Design',
    icon: Layout,
    color: '#06B6D4',
    desc: 'Configuration planning, hardware selection, and deployment architecture design.',
    activities: [
      'System configuration selection',
      'Network planning',
      'Hardware specification',
      'Licensing planning',
      'Deployment timeline',
    ],
  },
  {
    phase: '03',
    label: 'Demo & Validation',
    icon: Play,
    color: '#8B5CF6',
    desc: 'Product demonstrations for stakeholders, technical validation, and proof-of-concept support.',
    activities: [
      'Technical product demonstrations',
      'Proof-of-concept support',
      'Feature validation with IT teams',
      'Pre-sales technical presentations',
      'Trade show demonstrations',
    ],
  },
  {
    phase: '04',
    label: 'Deployment',
    icon: Settings2,
    color: '#F59E0B',
    desc: 'On-site or remote implementation, hardware integration, and system configuration.',
    activities: [
      'On-site hardware installation',
      'Software configuration & deployment',
      'Network integration',
      'Licensing setup',
      'System validation & testing',
    ],
  },
  {
    phase: '05',
    label: 'Training',
    icon: BookOpen,
    color: '#10B981',
    desc: 'End-user and IT staff training, onboarding documentation, and handoff.',
    activities: [
      'Technical training for IT staff',
      'End-user operational training',
      'Administrator training',
      'Documentation delivery',
      'Onboarding support',
    ],
  },
  {
    phase: '06',
    label: 'Support',
    icon: HeadphonesIcon,
    color: '#EF4444',
    desc: 'Remote and on-site technical support, diagnostics, escalation management, and issue resolution.',
    activities: [
      'Remote diagnostics & troubleshooting',
      'On-site field service',
      'Escalation management',
      'Software updates & licensing',
      'System health monitoring',
    ],
  },
  {
    phase: '07',
    label: 'Optimization',
    icon: TrendingUp,
    color: '#EC4899',
    desc: 'Proactive maintenance, performance review, and long-term account success.',
    activities: [
      'Preventive maintenance programs',
      'Configuration reporting',
      'Replacement planning',
      'Proactive customer outreach',
      'Long-term account management',
    ],
  },
];

const capabilities = [
  {
    category: 'Systems Experience',
    items: ['Windows 10/11 Administration', 'Network Configuration & Validation', 'Hardware/Software Integration', 'Imaging & Scanning Systems', 'Application Troubleshooting', 'System Diagnostics'],
  },
  {
    category: 'Customer Engineering',
    items: ['Technical Discovery Interviews', 'Multi-site Deployment Coordination', 'National Field Service Travel', 'Customer IT Team Collaboration', 'Bilingual Support (English/Spanish)', 'Cross-functional Team Communication'],
  },
  {
    category: 'Sales Engineering Support',
    items: ['Pre-sales Technical Consulting', 'Product Demonstrations', 'Trade Show & Event Support', 'Solution Configuration', 'Technical Proposal Support', 'POC Support'],
  },
];

export default function EnterpriseDeployment() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="pt-20">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: 'linear-gradient(135deg, #090515 0%, #130825 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, #94A3B8 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div
          className="hero-orb w-[500px] h-[500px] top-0 right-0 opacity-10"
          style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }}
        />

        <div className="section-container relative z-10">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/projects" className="btn-ghost text-sm mb-8 inline-flex">
              <ArrowLeft size={15} /> Back to Projects
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20">
                Professional Case Study
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium">
                <span className="w-1 h-1 rounded-full bg-emerald-400" /> Active
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-3 leading-tight">
              Enterprise Technical
              <span className="block gradient-text">Deployment & Customer Engineering</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mt-6 mb-8">
              A professional case study documenting how I approach enterprise hardware/software implementations
              — from the first technical conversation through deployment, training, and long-term account success.
              This represents the core of my daily work at Digital Library Systems Group / Image Access.
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <span className="text-slate-500 block text-xs tracking-widest uppercase mb-1">Role</span>
                <span className="text-white font-medium">Service Engineer / Sales Engineering Support</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs tracking-widest uppercase mb-1">Company</span>
                <span className="text-white font-medium">Digital Library Systems Group / Image Access</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs tracking-widest uppercase mb-1">Period</span>
                <span className="text-white font-medium">October 2022 – Present</span>
              </div>
            </div>
          </motion.div>

          {project && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionDurations.reveal, delay: 0.2, ease: motionEase }}
              className="mt-10 max-w-3xl overflow-hidden rounded-2xl border border-violet-400/15 shadow-card"
            >
              <ProjectPreview project={project} variant="hero" />
            </motion.div>
          )}
        </div>
      </section>

      {/* Overview */}
      <section className="section-py bg-navy-800/40">
        <div className="section-container max-w-3xl">
          <SectionHeader eyebrow="Overview" title="What This Work Looks Like" className="mb-8" />
          <div className="space-y-4 text-slate-400 text-base leading-relaxed">
            <p>
              My role sits at the intersection of sales engineering and field service engineering. I work directly
              with customer institutions — libraries, universities, government agencies, corporate records
              departments — to assess their technical environment, demonstrate how our systems solve their
              specific problems, and then deploy, configure, and support those systems over time.
            </p>
            <p>
              Every deployment is different. Some are straightforward single-scanner installations that take
              a few hours. Others involve multi-device deployments across distributed locations, complex network
              configurations, integration with existing document management systems, and months of ongoing support.
              National travel to customer sites is a regular part of this work.
            </p>
            <p>
              I'm also involved earlier in the sales cycle — supporting demos, helping configure proposals,
              and providing technical credibility for sales conversations where the customer needs to talk
              to someone who actually understands the system, not just sells it.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="section-py">
        <div className="section-container">
          <SectionHeader
            eyebrow="Methodology"
            title="The Full Customer Journey"
            description="Every customer engagement moves through these phases. My experience covers all of them."
            className="mb-14"
          />

          <div className="space-y-6">
            {journeyPhases.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.phase}
                  initial={reduceMotion ? false : { opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="card p-6 flex flex-col sm:flex-row gap-6"
                >
                  {/* Phase indicator */}
                  <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-0 sm:w-24 shrink-0">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${phase.color}15`, border: `1px solid ${phase.color}30` }}
                    >
                      <Icon size={20} style={{ color: phase.color }} />
                    </div>
                    <div className="sm:mt-3">
                      <p className="text-xs font-bold tracking-widest text-slate-600">PHASE {phase.phase}</p>
                      <p className="text-white font-bold text-lg leading-tight">{phase.label}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-slate-300 text-sm mb-4">{phase.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.activities.map((act) => (
                        <span key={act} className="tag-slate text-xs">{act}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="section-py bg-navy-800/40">
        <div className="section-container">
          <SectionHeader
            eyebrow="Technical Scope"
            title="Areas of Expertise"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {capabilities.map((cap, ci) => (
              <motion.div
                key={cap.category}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className="card p-6"
              >
                <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">{cap.category}</h3>
                <ul className="space-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-400">
                      <span className="text-accent-blue/60 flex-shrink-0 mt-0.5">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section-py">
        <div className="section-container max-w-3xl">
          <SectionHeader eyebrow="Positioning" title="Why This Combination Is Rare" className="mb-8" />
          <div className="space-y-4 text-slate-400 text-base leading-relaxed">
            <p>
              Most candidates for Solutions Engineering or Sales Engineering roles come from one of two directions:
              a sales background with surface-level technical knowledge, or an engineering background without
              the customer-facing experience that enterprise accounts actually require.
            </p>
            <p>
              My background is genuinely both. I can hold a detailed technical conversation with a customer's
              IT director about their network environment, run a product demonstration that addresses the
              actual problems they described in discovery, and then show up on-site to physically deploy,
              configure, and validate the system — and train the people who will run it.
            </p>
            <p>
              That full-cycle ownership is what enterprise customers need, and it's what differentiates
              a strong solutions engineer from someone who can only do part of the job.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Let's discuss what I can bring"
        description="Whether you're hiring for Solutions Engineering, Sales Engineering, or Technical Consulting — I'd be glad to talk through my experience in detail."
      />
    </main>
  );
}
