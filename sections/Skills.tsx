"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";

const categoryColors: Record<string, string> = {
  Frontend: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  Backend: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "Base de Datos": "text-amber-400 bg-amber-500/10 border-amber-500/20",
  "DevOps & Cloud": "text-purple-400 bg-purple-500/10 border-purple-500/20",
  Herramientas: "text-pink-400 bg-pink-500/10 border-pink-500/20",
  Otros: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
};

export function Skills() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 sm:py-32 bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <SectionTitle
            label="Skills"
            title="Tecnologías y herramientas"
            description="Stack tecnológico que utilizo para construir productos modernos, escalables y de alto rendimiento."
            isInView={isInView}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, groupIndex) => {
              const colorClass =
                categoryColors[skillGroup.category] ||
                "text-indigo-400 bg-indigo-500/10 border-indigo-500/20";

              return (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
                  className="rounded-xl border border-border bg-card p-6 hover:border-indigo-500/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold ${colorClass}`}
                    >
                      {skillGroup.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: groupIndex * 0.08 + skillIndex * 0.04,
                        }}
                        className="px-2.5 py-1 text-xs rounded-md bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
