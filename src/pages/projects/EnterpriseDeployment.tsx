import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Layout, Play, Settings2, BookOpen, HeadphonesIcon, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import CTA from '@/components/CTA';
import ProjectPreview from '@/components/ProjectPreview';
import { projects } from '@/data/projects';
import { motionDurations, motionEase } from '@/components/motion';

const project = projects.find((item) => item.slug === 'enterprise-deployment');

const methodologyStages = [
  {
    phase: '01',
    name: 'DISCOVERY',
    icon: Search,
    color: '#3B82F6',
    desc: 'Understand the customer’s environment, goals, stakeholders, constraints, and success criteria.',
    activities: [
      'Customer environment review',
      'Technical requirements discovery',
      'Stakeholder alignment',
      'Network & infrastructure assessment',
      'Deployment scope definition',
    ],
  },
  {
    phase: '02',
    name: 'SOLUTION DESIGN',
    icon: Layout,
    color: '#06B6D4',
    desc: 'Translate requirements into a clear configuration and implementation plan.',
    activities: [
      'Hardware & software specification',
      'Network configuration planning',
      'Licensing architecture',
      'Rollout scheduling',
      'Validation criteria',
    ],
  },
  {
    phase: '03',
    name: 'DEMO & VALIDATION',
    icon: Play,
    color: '#8B5CF6',
    desc: 'Demonstrate the solution, answer technical questions, validate assumptions, and reduce implementation risk.',
    activities: [
      'Tailored technical demonstrations',
      'Proof-of-concept validation',
      'Technical stakeholder Q&A',
      'Pre-sales consulting support',
      'Evaluation benchmarks',
    ],
  },
  {
    phase: '04',
    name: 'DEPLOYMENT',
    icon: Settings2,
    color: '#F59E0B',
    desc: 'Install, configure, integrate, test, and document the solution onsite or remotely.',
    activities: [
      'Onsite hardware installation',
      'Software configuration & licensing',
      'Local network integration',
      'Hardware/software calibration',
      'Comprehensive system testing',
    ],
  },
  {
    phase: '05',
    name: 'TRAINING',
    icon: BookOpen,
    color: '#10B981',
    desc: 'Prepare administrators and end users to operate the system confidently.',
    activities: [
      'Administrator training workshops',
      'End-user operational guidance',
      'Custom documentation & runbooks',
      'Best practice handoff',
      'Onboarding enablement',
    ],
  },
  {
    phase: '06',
    name: 'SUPPORT',
    icon: HeadphonesIcon,
    color: '#EC4899',
    desc: 'Troubleshoot issues, manage escalations, perform proactive maintenance, and support long-term success.',
    activities: [
      'Remote diagnostics & root-cause analysis',
      'Escalation management',
      'Proactive maintenance visits',
      'Software & firmware updates',
      'Long-term customer success',
    ],
  },
];

const technicalScopeItems = [
  'Specialized scanning hardware',
  'Windows systems',
  'Network configuration',
  'Hardware/software integration',
  'Remote diagnostics',
  'Product testing',
  'Technical training',
  'Customer onboarding',
  'Preventive maintenance',
  'Deployment logistics',
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
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20">
                PROFESSIONAL CASE STUDY &middot; DLSG / IMAGE ACCESS
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Professional Experience
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight font-display uppercase tracking-tight">
              Enterprise<br />Technical Deployment
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-8">
              The work behind a successful deployment is more than installation. It includes requirements discovery, environment assessment, system configuration, validation, training, support, and follow-through.
            </p>

            <div className="flex flex-wrap gap-8 text-sm pt-4 border-t border-white/10">
              <div>
                <span className="text-slate-500 block text-xs font-mono tracking-widest uppercase mb-1">Role</span>
                <span className="text-white font-medium">Service Engineer / Sales Engineering Support</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs font-mono tracking-widest uppercase mb-1">Company</span>
                <span className="text-white font-medium">Digital Library Systems Group / Image Access</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs font-mono tracking-widest uppercase mb-1">Period</span>
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
          <SectionHeader eyebrow="Overview" title="What I Do" className="mb-8" />
          <div className="space-y-4 text-slate-300 text-base leading-relaxed">
            <p>
              At DLSG / Image Access, I work across the customer lifecycle for specialized scanning hardware and institutional software. I help connect customer requirements with practical implementation plans and reliable day-to-day operation.
            </p>
            <p>
              My work includes pre-sales support, technical demonstrations, onsite and remote deployments, Windows and network troubleshooting, customer training, licensing, validation, and long-term support.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-py">
        <div className="section-container">
          <SectionHeader
            eyebrow="Methodology"
            title="Deployment Stages"
            description="Every customer engagement moves through these six stages. My experience covers all of them."
            className="mb-14"
          />

          <div className="space-y-6">
            {methodologyStages.map((phase, i) => {
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
                  <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-0 sm:w-32 shrink-0">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${phase.color}15`, border: `1px solid ${phase.color}30` }}
                    >
                      <Icon size={20} style={{ color: phase.color }} />
                    </div>
                    <div className="sm:mt-3">
                      <p className="text-xs font-mono font-bold tracking-widest text-slate-500">STAGE {phase.phase}</p>
                      <p className="text-white font-bold text-lg leading-tight font-display">{phase.name}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">{phase.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.activities.map((act) => (
                        <span key={act} className="tag-slate text-xs font-mono">{act}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Scope */}
      <section className="section-py bg-navy-800/40">
        <div className="section-container max-w-4xl">
          <SectionHeader
            eyebrow="Technical Scope"
            title="Environments & Systems"
            description="Core technologies, environments, and competencies deployed across customer engagements."
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {technicalScopeItems.map((item, idx) => (
              <motion.div
                key={item}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-center gap-3"
              >
                <CheckCircle2 size={16} className="text-violet-400 shrink-0" />
                <span className="text-slate-200 text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Contribute */}
      <section className="section-py">
        <div className="section-container max-w-3xl">
          <SectionHeader eyebrow="Value Delivery" title="What I contribute" className="mb-8" />
          <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-medium)] text-left">
            <p className="text-base sm:text-lg text-[var(--text-primary)] font-medium leading-relaxed">
              I bring an engineering foundation, direct customer experience, field implementation discipline, and the ability to explain technical systems clearly to different audiences.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Let's make complex technology work"
        description="Whether you're hiring for Solutions Engineering, Sales Engineering, or Technical Consulting — I'd be glad to discuss how my customer engineering experience fits your team."
      />
    </main>
  );
}
