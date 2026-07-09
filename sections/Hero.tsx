"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/Button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink-600/5 blur-3xl" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-indigo-400 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Disponible para proyectos
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Hola, soy{" "}
            <span className="gradient-text">Marcelo Corro</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl"
          >
            Ingeniero en Informática
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed sm:text-lg"
          >
            Construyo productos digitales escalables y de alta calidad. Especializado
            en arquitecturas modernas, experiencias de usuario excepcionales y
            código limpio que escala.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="#projects" size="lg">
              Ver proyectos
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Contactar
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/k1ngdom0fbullsh1t"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
            <span className="h-4 w-px bg-border" />
            <a
              href="https://www.linkedin.com/in/marcelo-corro-troncoso-7b576b22b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
