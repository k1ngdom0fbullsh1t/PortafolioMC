"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { projects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Projects() {
  const { ref, isInView } = useScrollAnimation();
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const visible = showAll ? [...featured, ...rest] : featured;

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <SectionTitle
            label="Proyectos"
            title="Proyectos personales"
            description="Una muestra de proyectos que reflejan mi enfoque técnico."
            isInView={isInView}
          />

          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative flex flex-col rounded-xl border border-border bg-card p-6 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300"
                >
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Star size={14} className="text-amber-400 fill-amber-400" />
                    </div>
                  )}

                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-foreground group-hover:text-indigo-400 transition-colors mb-2 pr-6">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="default">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={14} />
                        Código
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {rest.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center"
            >
              <Button
                variant="outline"
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll
                  ? "Mostrar menos"
                  : `Ver ${rest.length} proyectos más`}
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
