"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Contact() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <SectionTitle
            label="Contacto"
            title="Hablemos"
            description="¿Tienes un proyecto en mente o quieres colaborar? Escríbeme."
            isInView={isInView}
          />

          <div className="max-w-md mx-auto">
            {/* Info panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Siempre abierto a conversar
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ya sea para un proyecto freelance, una oportunidad laboral o simplemente
                  intercambiar ideas sobre tecnología — me interesa escucharte.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="h-9 w-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail size={16} />
                  </div>
                  <span>marcelocorro00@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="h-9 w-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin size={16} />
                  </div>
                  <span>Santiago, Chile</span>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Redes sociales
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: "https://github.com/k1ngdom0fbullsh1t", label: "GitHub" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/marcelo-corro-troncoso-7b576b22b", label: "LinkedIn" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="h-10 w-10 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-indigo-500/50 hover:bg-muted transition-colors"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form — comentado, pendiente integrar envío real de email
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              ...formulario aquí...
            </motion.div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
