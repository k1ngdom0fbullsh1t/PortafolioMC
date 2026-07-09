"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { workExperience } from "@/data/experience";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Experience() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <SectionTitle
            label="Experiencia"
            title="Trayectoria profesional"
            description="Roles y proyectos que han definido mi perfil como ingeniero de software."
            isInView={isInView}
          />

          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

            <div className="space-y-10">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative sm:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 hidden sm:flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-sm">
                    <Briefcase size={16} className="text-indigo-400" />
                  </div>

                  <div className="rounded-xl border border-border bg-card p-6 hover:border-indigo-500/30 transition-all group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-base font-semibold text-foreground group-hover:text-indigo-400 transition-colors">
                          {job.role}
                        </h3>
                        <p className="text-sm font-medium text-muted-foreground mt-0.5">
                          {job.company}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
                        <Calendar size={12} />
                        <span>
                          {job.startDate} — {job.endDate}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {job.description}
                    </p>

                    {job.endDate === "Presente" && (
                      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Actual
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
