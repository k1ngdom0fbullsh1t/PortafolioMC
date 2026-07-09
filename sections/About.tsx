"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Código legible, mantenible y bien estructurado como prioridad.",
  },
  {
    icon: Cpu,
    title: "Performance First",
    description: "Optimización y rendimiento en cada capa de la arquitectura.",
  },
  {
    icon: Globe,
    title: "Full Stack",
    description: "Desde la UI hasta la infraestructura, dominio end-to-end.",
  },
  {
    icon: Zap,
    title: "Rápida Entrega",
    description: "Metodologías ágiles y CI/CD para entregar valor rápido.",
  },
];

export function About() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <SectionTitle
            label="Sobre mí"
            title="Ingeniero apasionado por los datos y la IA"
            isInView={isInView}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-5"
            >
              <p className="text-muted-foreground leading-relaxed text-base">
                Soy un{" "}
                <span className="text-foreground font-medium">
                  Ingeniero en Informática
                </span>{" "}
                con pasión por la{" "}
                <span className="text-foreground font-medium">Ciencia de Datos</span>,
                la{" "}
                <span className="text-foreground font-medium">Inteligencia Artificial</span>{" "}
                y el desarrollo de software. Me especializo en construir soluciones que
                van desde la extracción y análisis de datos hasta modelos predictivos
                con interpretabilidad real.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Trabajo con Python, XGBoost, SHAP y herramientas de visualización para
                transformar datos en decisiones. También desarrollo interfaces modernas
                con React y Next.js, lo que me permite llevar los modelos hasta el
                usuario final — desde el pipeline de datos hasta el dashboard interactivo.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Creo en el aprendizaje continuo y en proyectos concretos como forma de
                demostrar habilidades. Cada proyecto que construyo busca resolver un
                problema real con{" "}
                <span className="text-foreground font-medium">datos reales</span>.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {["Open Source", "Arquitectura de Software", "Mentoring", "Tech Writing"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="rounded-xl border border-border bg-card p-5 hover:border-indigo-500/40 transition-colors group"
                >
                  <div className="mb-3 h-9 w-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                    <item.icon size={18} />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
