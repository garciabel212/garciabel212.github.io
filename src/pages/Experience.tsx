import SectionHeader from '@/components/SectionHeader';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import CTA from '@/components/CTA';
import { experience, education, certifications } from '@/data/experience';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="pt-24 pb-0 text-[var(--text-primary)]">
      <section className="section-py pb-0">
        <div className="section-container">
          <SectionHeader
            eyebrow="PROFESSIONAL EXPERIENCE"
            title="Experience that connects engineering to outcomes"
            titleHighlight=""
            description="Four years of hands-on technical work — from telecom infrastructure to enterprise systems deployments, customer training, and internal tooling."
            className="mb-16"
          />

          <ExperienceTimeline entries={experience} compact={false} />

          {/* Education & Certs */}
          <div className="mt-20 grid sm:grid-cols-2 gap-6 text-left">
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={18} className="text-[var(--accent)]" />
                <h2 className="text-lg font-bold text-[var(--text-primary)] font-display uppercase tracking-wide">
                  Education
                </h2>
              </div>
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="card p-6"
                >
                  <p className="text-[var(--text-primary)] font-bold text-base">{edu.institution}</p>
                  <p className="text-[var(--accent)] text-sm font-semibold mt-0.5">{edu.degree} in {edu.field}</p>
                  <p className="text-[var(--text-muted)] text-xs mt-1 font-mono">{edu.period}</p>
                  <ul className="mt-4 space-y-2">
                    {edu.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                        <span className="text-[var(--accent)] flex-shrink-0 mt-0.5">&rsaquo;</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award size={18} className="text-[var(--accent)]" />
                <h2 className="text-lg font-bold text-[var(--text-primary)] font-display uppercase tracking-wide">
                  Certifications &amp; Credentials
                </h2>
              </div>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.name}
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="card p-5"
                  >
                    <p className="text-[var(--text-primary)] font-bold text-sm">{cert.name}</p>
                    <p className="text-[var(--accent)] text-xs font-mono mt-1">{cert.issuer} &middot; {cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-20">
        <CTA
          title="Let’s discuss how this experience fits your team."
          description="Available for Solutions Engineering, Sales Engineering, and Technical Consulting roles. Open to remote, hybrid, and up to 40% travel."
        />
      </div>
    </main>
  );
}

