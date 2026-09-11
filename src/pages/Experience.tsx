import SectionHeader from '@/components/SectionHeader';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import CTA from '@/components/CTA';
import { experience, education, certifications } from '@/data/experience';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="pt-24 pb-0">
      <section className="section-py pb-0">
        <div className="section-container">
          <SectionHeader
            eyebrow="Professional Experience"
            title="Where I've"
            titleHighlight="worked"
            description="Four years of customer-facing engineering, field service, and solutions delivery — with increasing scope and impact."
            className="mb-16"
          />

          <ExperienceTimeline entries={experience} compact={false} />

          {/* Education & Certs */}
          <div className="mt-20 grid sm:grid-cols-2 gap-6">
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={18} className="text-accent-blue" />
                <h2 className="text-lg font-bold text-white">Education</h2>
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
                  <p className="text-white font-bold">{edu.institution}</p>
                  <p className="text-accent-blue-light text-sm font-medium mt-0.5">{edu.degree} — {edu.field}</p>
                  <p className="text-slate-500 text-sm mt-1">{edu.period}{edu.gpa ? ` · GPA ${edu.gpa}` : ''}</p>
                  <ul className="mt-4 space-y-1.5">
                    {edu.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-slate-400">
                        <span className="text-accent-cyan/60 flex-shrink-0 mt-0.5">›</span>
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
                <Award size={18} className="text-accent-blue" />
                <h2 className="text-lg font-bold text-white">Certifications</h2>
              </div>
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="card p-6"
                >
                  <p className="text-white font-bold">{cert.name}</p>
                  <p className="text-slate-400 text-sm mt-0.5">{cert.issuer} · {cert.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-20">
        <CTA />
      </div>
    </main>
  );
}
