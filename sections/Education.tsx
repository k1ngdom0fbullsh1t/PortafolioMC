"use client";

import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import { education } from "@/data/experience";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Education() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="education" className="py-24 sm:py-32 bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <SectionTitle
            label="Formación"
            title="Trayectoria académica"
            description="La base que sustenta mi enfoque riguroso y sistemático hacia la ingeniería de software."
            isInView={isInView}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="gradient-border rounded-2xl bg-card p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-indigo-400 font-medium mt-0.5">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {edu.startDate} — {edu.endDate}
                    </p>
                  </div>
                </div>

                {/*<div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Logros destacados
                  </p>
                  <ul className="space-y-2.5">
                    {edu.achievements.map((achievement) => (
                      <motion.li
                        key={achievement}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-indigo-400 shrink-0 mt-0.5"
                        />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>*/}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Cursos & Certificaciones
                </p>
                <ul className="space-y-3">
                  {[
                    { name: "Curso ISO20000/1: 2018 Requisitos del Sistema de gestión de Servicios (SGS)", issuer: "PRO Q+" },
                    { name: "Curso Problem Solving", issuer: "IGNEA GROUP" },
                  ].map((cert) => (
                    <li key={cert.name} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-foreground font-medium">{cert.name}</p>
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Idiomas
                </p>
                <ul className="space-y-3">
                  {[
                    { lang: "Español", level: "Nativo" },
                    { lang: "Inglés", level: "Intermedio" },
                    { lang: "Portugués", level: "Básico" },
                  ].map((l) => (
                    <li key={l.lang} className="flex justify-between items-center">
                      <span className="text-sm text-foreground">{l.lang}</span>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
                        {l.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
